/**
 * Machine themes Bolt Spin — Tone hybrid v10
 */
(function(global){
  const TONE_CDN='https://cdn.jsdelivr.net/npm/tone@14.8.49/build/Tone.js';
  let enabled=false, loading=null, playing=false;
  let pad=null, bass=null, lead=null, sparkle=null, perc=null, filter=null, delay=null;
  let seq=null, mode=null, lastId='lobby', lastFeat='base', baseBpm=128;

  const SCALES={
    C:['C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','E5','G5'],
    D:['D3','E3','F3','A3','B3','D4','E4','F4','A4','B4','D5','F5','A5'],
    E:['E3','F#3','G3','B3','C4','E4','F#4','G4','B4','C5','E5','G5','B5'],
    F:['F3','G3','A3','C4','D4','F4','G4','A4','C5','D5','F5','A5','C6'],
    A:['A3','B3','C4','E4','F4','A4','B4','C5','E5','F5','A5','C6','E6'],
    G:['G3','A3','B3','D4','E4','G4','A4','B4','D5','E5','G5','B5','D6']
  };

  const THEMES={
    lobby:   {bpm:122, root:'C', bright:0.45, style:'drone', bassEvery:4, seed:11},
    pearl:   {bpm:148, root:'C', bright:0.95, style:'wave',  bassEvery:3, seed:21},
    lantern: {bpm:158, root:'D', bright:1.08, style:'spark', bassEvery:3, seed:34},
    sahara:  {bpm:140, root:'E', bright:0.78, style:'drone', bassEvery:4, seed:47},
    tiki:    {bpm:164, root:'C', bright:1.12, style:'swing', bassEvery:2, seed:58},
    train:   {bpm:166, root:'D', bright:0.98, style:'march', bassEvery:2, seed:69},
    heart:   {bpm:150, root:'E', bright:1.08, style:'wave',  bassEvery:3, seed:72},
    stakes:  {bpm:152, root:'C', bright:0.85, style:'stomp', bassEvery:2, seed:83},
    buffalo: {bpm:132, root:'G', bright:0.68, style:'stomp', bassEvery:2, seed:91},
    moon:    {bpm:156, root:'F', bright:1.08, style:'spark', bassEvery:3, seed:15},
    reef:    {bpm:146, root:'D', bright:0.92, style:'wave',  bassEvery:3, seed:26},
    outback: {bpm:140, root:'E', bright:0.78, style:'drone', bassEvery:4, seed:37},
    alpine:  {bpm:144, root:'F', bright:0.98, style:'spark', bassEvery:3, seed:48},
    carnival:{bpm:170, root:'C', bright:1.28, style:'swing', bassEvery:2, seed:59},
    thunder: {bpm:154, root:'G', bright:0.88, style:'stomp', bassEvery:2, seed:61},
    wine:    {bpm:136, root:'E', bright:0.82, style:'drone', bassEvery:4, seed:74},
    tokyo:   {bpm:172, root:'A', bright:1.22, style:'spark', bassEvery:2, seed:85},
    pharaoh: {bpm:138, root:'D', bright:0.92, style:'march', bassEvery:3, seed:96},
    viking:  {bpm:144, root:'G', bright:0.72, style:'stomp', bassEvery:2, seed:17},
    cosmic:  {bpm:160, root:'F', bright:1.18, style:'spark', bassEvery:3, seed:28},
    dragon:  {bpm:152, root:'D', bright:0.98, style:'march', bassEvery:3, seed:42},
    bolt:    {bpm:174, root:'C', bright:1.38, style:'pulse', bassEvery:2, seed:99},
    flush:   {bpm:120, root:'E', bright:0.58, style:'drone', bassEvery:4, seed:77}
  };

  const FEAT={
    base:  {bpmMul:1.0,  seedAdd:0,  style:null,   density:1, brightAdd:0},
    free:  {bpmMul:1.42, seedAdd:19, style:'spark', density:2, brightAdd:0.36},
    hold:  {bpmMul:1.55, seedAdd:37, style:'pulse', density:2, brightAdd:0.40},
    train: {bpmMul:1.68, seedAdd:53, style:'march', density:3, brightAdd:0.46}
  };

  function mulberry32(a){
    return function(){
      let t=a+=0x6D2B79F5;
      t=Math.imul(t^t>>>15,t|1);
      t^=t+Math.imul(t^t>>>7,t|61);
      return ((t^t>>>14)>>>0)/4294967296;
    };
  }

  function buildMelody(root, seed, len){
    const scale=SCALES[root]||SCALES.C;
    const rand=mulberry32((seed*9973+41)>>>0);
    const notes=[];
    const motif=[2,4,5,7,5,4,7,9].map(i=>Math.min(scale.length-1,i));
    let idx=motif[0];
    for(let i=0;i<len;i++){
      const r=rand();
      const pos=i%8;
      if(pos===0) idx=motif[(Math.floor(i/8)+seed)%motif.length];
      else if(pos===7) idx=Math.min(scale.length-1, Math.max(0, motif[0]));
      else if(r<0.5) idx+=(rand()<0.55?-1:1);
      else if(r<0.72) idx+=(rand()<0.5?-2:2);
      else if(r<0.9) idx=motif[Math.floor(rand()*motif.length)];
      else idx=Math.floor(rand()*Math.min(scale.length, 10));
      idx=Math.max(0,Math.min(scale.length-1,idx));
      notes.push(scale[idx]);
    }
    return notes;
  }

  function buildProg(root, seed){
    const scale=SCALES[root]||SCALES.C;
    const rand=mulberry32((seed*4243+7)>>>0);
    const steps=[0,5,3,4, 0,5,3,4];
    const prog=[];
    for(let c=0;c<8;c++){
      const base=Math.min(scale.length-5, Math.max(0, steps[c%steps.length]));
      const i=Math.min(scale.length-5, base);
      prog.push([
        scale[i],
        scale[Math.min(scale.length-1,i+2)],
        scale[Math.min(scale.length-1,i+4)]
      ]);
    }
    return prog;
  }

  function themeByCss(css){return THEMES[css]||THEMES.pearl}
  function featInfo(key){return FEAT[key]||FEAT.base}

  function loadTone(){
    if(global.Tone)return Promise.resolve(true);
    if(loading)return loading;
    loading=new Promise((resolve)=>{
      const s=document.createElement('script');
      s.src=TONE_CDN;s.async=true;
      s.onload=()=>resolve(!!global.Tone);
      s.onerror=()=>resolve(false);
      document.head.appendChild(s);
    });
    return loading;
  }

  function userMusicVol(){
    try{if(global.S&&S.musicVol!=null)return Math.max(0,Math.min(1,+S.musicVol))}catch(_){}
    return 0.9;
  }

  function applyVolumes(hot, bright){
    const v=userMusicVol();
    try{
      const master=-11+v*15+(hot?5:0);
      if(pad)pad.volume.value=master-1.2;
      if(bass)bass.volume.value=master+0.2;
      if(lead)lead.volume.value=master+2.8;
      if(sparkle)sparkle.volume.value=master+0.8;
      if(perc)perc.volume.value=master-4.5;
      if(filter)filter.frequency.rampTo(hot?7200:3000+1200*(bright||0.8),0.2);
    }catch(_){}
  }

  async function tryEnable(){
    try{
      if(!(await loadTone())||!global.Tone)return false;
      await Tone.start();
      if(!pad){
        delay=new Tone.FeedbackDelay({delayTime:0.16,feedback:0.18,wet:0.12}).toDestination();
        filter=new Tone.Filter({type:'lowpass',frequency:3600,rolloff:-12}).connect(delay);
        pad=new Tone.PolySynth(Tone.Synth,{
          oscillator:{type:'triangle'},
          envelope:{attack:0.06,decay:0.22,sustain:0.4,release:0.5}
        }).connect(filter);
        bass=new Tone.Synth({
          oscillator:{type:'triangle'},
          envelope:{attack:0.004,decay:0.1,sustain:0.2,release:0.14}
        }).toDestination();
        lead=new Tone.Synth({
          oscillator:{type:'square'},
          envelope:{attack:0.004,decay:0.1,sustain:0.18,release:0.2}
        }).connect(delay);
        sparkle=new Tone.PolySynth(Tone.Synth,{
          oscillator:{type:'sine'},
          envelope:{attack:0.002,decay:0.08,sustain:0.04,release:0.14}
        }).connect(delay);
        perc=new Tone.NoiseSynth({
          noise:{type:'white'},
          envelope:{attack:0.001,decay:0.035,sustain:0,release:0.02}
        }).toDestination();
        applyVolumes(false,0.8);
      }
      enabled=true;
      return true;
    }catch(e){
      enabled=false;return false;
    }
  }

  function stop(){
    playing=false;
    try{if(seq){seq.stop(0);seq.dispose();seq=null}}catch(_){}
    try{if(pad)pad.releaseAll()}catch(_){}
    try{if(sparkle)sparkle.releaseAll()}catch(_){}
    try{if(lead)lead.triggerRelease()}catch(_){}
    try{if(bass)bass.triggerRelease()}catch(_){}
    mode=null;
  }

  function startBed(css, featKey){
    stop();
    if(!enabled||!global.Tone){playing=false;return}
    const th=themeByCss(css||'pearl');
    const fk=(featKey&&FEAT[featKey])?featKey:'base';
    const fi=featInfo(fk);
    lastId=css||'pearl';
    lastFeat=fk;
    const hot=fk!=='base';
    applyVolumes(hot, (th.bright||0.8)+(fi.brightAdd||0));

    let prog, melody;
    try{
      prog=buildProg(th.root, th.seed+(fi.seedAdd|0));
      melody=buildMelody(th.root, th.seed+(fi.seedAdd|0)+(hot?7:0), 128);
    }catch(_){
      prog=[['C3','E3','G3'],['A2','C3','E3'],['F2','A2','C3'],['G2','B2','D3']];
      melody=['C4','E4','G4','E4','C4','G3','E4','G4'];
    }
    if(!prog||!prog.length)prog=[['C3','E3','G3']];
    if(!melody||!melody.length)melody=['C4','E4','G4','C5'];

    const style=fi.style||th.style||'pulse';
    const bassEvery=Math.max(1, hot?Math.max(1,(th.bassEvery||3)-1):(th.bassEvery||3));
    baseBpm=Math.round((th.bpm||128)*fi.bpmMul*(css==='lobby'?1.0:1.06));
    const spark=style==='spark'||style==='pulse'||fk==='free';
    const stomp=style==='stomp'||style==='march'||fk==='hold'||fk==='train';
    const dens=fi.density|1;
    const swing=style==='swing';

    try{
      seq=new Tone.Sequence((time, st)=>{
        const i=st|0;
        try{
          const chord=prog[Math.floor(i/16)%prog.length]||prog[0];
          const root=chord[0]||'C3';
          if(i%16===0){
            try{
              const phrase=(Math.floor(i/16)%4);
              const mul=hot?[1,1.1,1.16,1.22][phrase]:[1,1.05,1.02,1.08][phrase];
              Tone.Transport.bpm.rampTo(baseBpm*mul, 0.55);
            }catch(_){}
            try{pad.triggerAttackRelease(chord, hot?'1n':'2n', time, hot?0.9:0.72)}catch(_){}
          }
          if(i%bassEvery===0){
            try{bass.triggerAttackRelease(root, swing?'8n':'16n', time, hot?0.62:0.48)}catch(_){}
            if(i%4===0){
              try{perc.triggerAttackRelease('32n', time, hot?0.2:0.11)}catch(_){}
            }
          }
          if((swing||stomp)&&i%4===2){
            try{perc.triggerAttackRelease('64n', time, 0.08)}catch(_){}
          }
          const note=melody[i%melody.length];
          if(note){
            try{lead.triggerAttackRelease(note, dens>1?'16n':'8n', time, spark?0.76:0.58)}catch(_){}
            if(spark&&i%2===0){
              try{sparkle.triggerAttackRelease(note,'16n',time+0.02,0.42)}catch(_){}
            }
          }
          if(stomp&&i%4===0){
            try{sparkle.triggerAttackRelease(root,'16n',time,0.36)}catch(_){}
          }
          if(fk==='free'&&note&&i%2===0){
            try{sparkle.triggerAttackRelease(note,'32n',time+0.03,0.5)}catch(_){}
          }
          if(fk==='hold'&&i%4===2){
            try{bass.triggerAttackRelease(root,'8n',time,0.55)}catch(_){}
          }
          if(fk==='train'&&i%4===0){
            try{lead.triggerAttackRelease(melody[(i+3)%melody.length],'16n',time,0.7)}catch(_){}
            try{perc.triggerAttackRelease('32n', time+0.01, 0.22)}catch(_){}
          }
          if(hot&&note&&i%2===0){
            try{sparkle.triggerAttackRelease(note,'16n',time+0.04,0.46)}catch(_){}
          }
        }catch(_){}
      }, Array.from({length:512},(_,i)=>i), '8n');

      Tone.Transport.bpm.value=baseBpm;
      if(Tone.Transport.state!=='started')Tone.Transport.start();
      seq.start(0);
      playing=true;
      mode=css==='lobby'?'lobby':'machine';
    }catch(e){
      playing=false;
    }
  }

  const api={
    get active(){return enabled},
    isPlaying(){return !!(enabled&&playing&&seq)},
    tryEnable,
    startLobby(){ if(!enabled)return; startBed('lobby', 'base'); },
    startMachine(mach){
      if(!enabled||!mach){playing=false;return}
      const css=mach.boltOnly?'bolt':(mach.css||'pearl');
      let fk='base';
      try{if(typeof featureMusicKey==='function')fk=featureMusicKey()||'base'}catch(_){}
      startBed(css, fk);
    },
    setFeature(modeOrBool){
      if(!enabled)return;
      let fk='base';
      if(modeOrBool===true)fk='hold';
      else if(modeOrBool===false)fk='base';
      else if(typeof modeOrBool==='string')fk=modeOrBool;
      else{try{if(typeof featureMusicKey==='function')fk=featureMusicKey()||'base'}catch(_){}}
      startBed(lastId||'pearl', fk);
    },
    winStinger(tier){
      if(!enabled||!global.Tone)return;
      try{
        const n=tier>=3?['C5','E5','G5','C6','E6']:tier>=2?['E4','G4','C5','E5']:['G4','C5','E5'];
        n.forEach((note,i)=>{
          sparkle.triggerAttackRelease(note,'8n','+'+(i*0.05),0.8);
          lead.triggerAttackRelease(note,'8n','+'+(i*0.05),0.64);
        });
        try{perc.triggerAttackRelease('16n','+0',0.22)}catch(_){}
      }catch(_){}
    },
    raffleStinger(kind){
      if(!enabled||!global.Tone)return;
      try{
        if(kind==='buy'){
          ['E4','A4','E5'].forEach((n,i)=>sparkle.triggerAttackRelease(n,'16n','+'+(i*0.055),0.55));
        }else if(kind==='draw'){
          ['G3','B3','D4','G4','B4'].forEach((n,i)=>{
            lead.triggerAttackRelease(n,'16n','+'+(i*0.07),0.52);
            try{perc.triggerAttackRelease('32n','+'+(i*0.07),0.14)}catch(_){}
          });
        }else if(kind==='win'){
          api.winStinger(2);
        }else if(kind==='miss'){
          lead.triggerAttackRelease('E3','8n','+0',0.35);
          bass.triggerAttackRelease('E2','8n','+0.05',0.3);
        }
      }catch(_){}
    },
    refreshVolume(){applyVolumes(lastFeat!=='base',(themeByCss(lastId)||{}).bright||0.8)},
    stop
  };
  global.BoltTone=api;

  const boot=()=>{tryEnable().then((ok)=>{
    try{
      if(ok&&global.S){
        const game=document.getElementById('game');
        if(S.mach&&S.music&&game&&!game.classList.contains('hidden'))
          api.startMachine(S.mach);
        else if(S.lobbyMusic) api.startLobby();
      }
    }catch(_){}
  }).catch(()=>{})};
  ['pointerdown','touchstart','click'].forEach(ev=>document.addEventListener(ev,boot,{once:true,passive:true}));
})(window);
