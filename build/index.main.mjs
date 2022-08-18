// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2],
      5: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Donee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v397 = stdlib.protect(ctc1, interact.deadline, 'for Donee\'s interact field deadline');
  const v398 = stdlib.protect(ctc4, interact.doneeAddr, 'for Donee\'s interact field doneeAddr');
  const v399 = stdlib.protect(ctc1, interact.goal, 'for Donee\'s interact field goal');
  
  const txn1 = await (ctc.sendrecv({
    args: [v398, v397, v399],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v403, v404, v405], secs: v407, time: v406, didSend: v31, from: v402 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v403, v404, v405], secs: v407, time: v406, didSend: v31, from: v402 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v402, v404, v405],
    evt_cnt: 0,
    funcNum: 1,
    lct: v406,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v410, time: v409, didSend: v36, from: v408 } = txn2;
      
      ;
      
      const v413 = stdlib.checkedBigNumberify('./index.rsh:49:70:decimal', stdlib.UInt_max, '0');
      const v414 = true;
      const v416 = v409;
      const v423 = stdlib.checkedBigNumberify('./index.rsh:27:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v414;})()) {
        const v441 = stdlib.add(v416, v404);
        sim_r.isHalt = false;
        }
      else {
        const v516 = stdlib.ge(v413, v405);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v410, time: v409, didSend: v36, from: v408 } = txn2;
  ;
  const v411 = stdlib.addressEq(v402, v408);
  stdlib.assert(v411, {
    at: './index.rsh:38:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Donee'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:41:25:application',
    fs: ['at ./index.rsh:41:25:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)', 'at ./index.rsh:41:25:application call to "liftedInteract" (defined at: ./index.rsh:41:25:application)'],
    msg: 'ready',
    who: 'Donee'
    });
  
  let v413 = stdlib.checkedBigNumberify('./index.rsh:49:70:decimal', stdlib.UInt_max, '0');
  let v414 = true;
  let v416 = v409;
  let v423 = stdlib.checkedBigNumberify('./index.rsh:27:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v414;})()) {
    const v441 = stdlib.add(v416, v404);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: ['time', v441],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v504], secs: v506, time: v505, didSend: v340, from: v503 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v507 = true;
      await txn4.getOutput('ObserveGoal_timesUp', 'v507', ctc6, v507);
      const cv413 = v413;
      const cv414 = false;
      const cv416 = v505;
      const cv423 = v423;
      
      v413 = cv413;
      v414 = cv414;
      v416 = cv416;
      v423 = cv423;
      
      continue;
      }
    else {
      const {data: [v466], secs: v468, time: v467, didSend: v235, from: v465 } = txn3;
      undefined /* setApiDetails */;
      const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
      const v472 = stdlib.add(v423, v470);
      ;
      const v474 = true;
      await txn3.getOutput('Donor_donateFunds', 'v474', ctc6, v474);
      const v481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v465), null);
      let v482;
      switch (v481[0]) {
        case 'None': {
          const v483 = v481[1];
          v482 = true;
          
          break;
          }
        case 'Some': {
          const v484 = v481[1];
          v482 = false;
          
          break;
          }
        }
      stdlib.assert(v482, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'not yet in the map',
        who: 'Donee'
        });
      const v486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v465), null);
      let v487;
      switch (v486[0]) {
        case 'None': {
          const v488 = v486[1];
          v487 = false;
          
          break;
          }
        case 'Some': {
          const v489 = v486[1];
          v487 = true;
          
          break;
          }
        }
      const v490 = v487 ? false : true;
      stdlib.assert(v490, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'not in the set yet',
        who: 'Donee'
        });
      const v492 = stdlib.eq(v470, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
      const v493 = v492 ? false : true;
      stdlib.assert(v493, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'zero donations not allowed',
        who: 'Donee'
        });
      await stdlib.mapSet(map0, v465, v470);
      await stdlib.mapSet(map1, v465, null);
      const v496 = stdlib.add(v413, v470);
      const cv413 = v496;
      const cv414 = true;
      const cv416 = v467;
      const cv423 = v472;
      
      v413 = cv413;
      v414 = cv414;
      v416 = cv416;
      v423 = cv423;
      
      continue;}
    
    }
  const v516 = stdlib.ge(v413, v405);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v521], secs: v523, time: v522, didSend: v360, from: v520 } = txn3;
  undefined /* setApiDetails */;
  ;
  await txn3.getOutput('ObserveGoal_goalOutcome', 'v516', ctc6, v516);
  ;
  return;
  
  
  
  
  
  
  };
export async function _Donor_donateFunds5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Donor_donateFunds5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Donor_donateFunds5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v402, v404, v405, v413, v423, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v443 = ctc.selfAddress();
  const v445 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'in',
    who: 'Donor_donateFunds'
    });
  const v446 = v445[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v449 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v443), null);
  let v450;
  switch (v449[0]) {
    case 'None': {
      const v451 = v449[1];
      v450 = true;
      
      break;
      }
    case 'Some': {
      const v452 = v449[1];
      v450 = false;
      
      break;
      }
    }
  stdlib.assert(v450, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'not yet in the map',
    who: 'Donor_donateFunds'
    });
  const v454 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v443), null);
  let v455;
  switch (v454[0]) {
    case 'None': {
      const v456 = v454[1];
      v455 = false;
      
      break;
      }
    case 'Some': {
      const v457 = v454[1];
      v455 = true;
      
      break;
      }
    }
  const v458 = v455 ? false : true;
  stdlib.assert(v458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'not in the set yet',
    who: 'Donor_donateFunds'
    });
  const v460 = stdlib.eq(v446, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
  const v461 = v460 ? false : true;
  stdlib.assert(v461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'zero donations not allowed',
    who: 'Donor_donateFunds'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v404, v405, v413, v423, v441, v445],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v446, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v466], secs: v468, time: v467, didSend: v235, from: v465 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donateFunds"
        });
      const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
      const v472 = stdlib.add(v423, v470);
      sim_r.txns.push({
        amt: v470,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v474 = true;
      const v475 = await txn1.getOutput('Donor_donateFunds', 'v474', ctc6, v474);
      
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v465), null);
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v465), null);
      await stdlib.simMapSet(sim_r, 0, v465, v470);
      await stdlib.simMapSet(sim_r, 1, v465, null);
      const v496 = stdlib.add(v413, v470);
      const v760 = v496;
      const v763 = v472;
      const v764 = stdlib.add(v467, v404);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v466], secs: v468, time: v467, didSend: v235, from: v465 } = txn1;
  undefined /* setApiDetails */;
  const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
  const v472 = stdlib.add(v423, v470);
  ;
  const v474 = true;
  const v475 = await txn1.getOutput('Donor_donateFunds', 'v474', ctc6, v474);
  if (v235) {
    stdlib.protect(ctc0, await interact.out(v466, v475), {
      at: './index.rsh:72:13:application',
      fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:13:function exp)', 'at ./index.rsh:81:24:application call to "success" (defined at: ./index.rsh:80:32:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
      msg: 'out',
      who: 'Donor_donateFunds'
      });
    }
  else {
    }
  
  const v481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v465), null);
  let v482;
  switch (v481[0]) {
    case 'None': {
      const v483 = v481[1];
      v482 = true;
      
      break;
      }
    case 'Some': {
      const v484 = v481[1];
      v482 = false;
      
      break;
      }
    }
  stdlib.assert(v482, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'not yet in the map',
    who: 'Donor_donateFunds'
    });
  const v486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v465), null);
  let v487;
  switch (v486[0]) {
    case 'None': {
      const v488 = v486[1];
      v487 = false;
      
      break;
      }
    case 'Some': {
      const v489 = v486[1];
      v487 = true;
      
      break;
      }
    }
  const v490 = v487 ? false : true;
  stdlib.assert(v490, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'not in the set yet',
    who: 'Donor_donateFunds'
    });
  const v492 = stdlib.eq(v470, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
  const v493 = v492 ? false : true;
  stdlib.assert(v493, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'zero donations not allowed',
    who: 'Donor_donateFunds'
    });
  await stdlib.mapSet(map0, v465, v470);
  await stdlib.mapSet(map1, v465, null);
  const v496 = stdlib.add(v413, v470);
  const v760 = v496;
  const v763 = v472;
  const v764 = stdlib.add(v467, v404);
  return;
  
  
  
  };
export async function _ObserveGoal_goalOutcome3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ObserveGoal_goalOutcome3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ObserveGoal_goalOutcome3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v402, v423, v516] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc5]);
  const v519 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:101:5:application',
    fs: ['at ./index.rsh:101:5:application call to [unknown function] (defined at: ./index.rsh:101:5:function exp)'],
    msg: 'in',
    who: 'ObserveGoal_goalOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v423, v516, v519],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v521], secs: v523, time: v522, didSend: v360, from: v520 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ObserveGoal_goalOutcome"
        });
      ;
      const v524 = await txn1.getOutput('ObserveGoal_goalOutcome', 'v516', ctc5, v516);
      
      sim_r.txns.push({
        kind: 'from',
        to: v402,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v521], secs: v523, time: v522, didSend: v360, from: v520 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v524 = await txn1.getOutput('ObserveGoal_goalOutcome', 'v516', ctc5, v516);
  stdlib.protect(ctc0, await interact.out(v521, v524), {
    at: './index.rsh:101:5:application',
    fs: ['at ./index.rsh:101:5:application call to [unknown function] (defined at: ./index.rsh:101:5:function exp)', 'at ./index.rsh:102:9:application call to "view" (defined at: ./index.rsh:101:5:function exp)'],
    msg: 'out',
    who: 'ObserveGoal_goalOutcome'
    });
  
  ;
  return;
  
  
  
  };
export async function _ObserveGoal_timesUp5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ObserveGoal_timesUp5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ObserveGoal_timesUp5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v402, v404, v405, v413, v423, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v502 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:88:13:application',
    fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:87:45:application call to [unknown function] (defined at: ./index.rsh:87:45:function exp)'],
    msg: 'in',
    who: 'ObserveGoal_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v404, v405, v413, v423, v441, v502],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v504], secs: v506, time: v505, didSend: v340, from: v503 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ObserveGoal_timesUp"
        });
      ;
      const v507 = true;
      const v508 = await txn1.getOutput('ObserveGoal_timesUp', 'v507', ctc6, v507);
      
      const v775 = v423;
      const v777 = stdlib.ge(v413, v405);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v504], secs: v506, time: v505, didSend: v340, from: v503 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v507 = true;
  const v508 = await txn1.getOutput('ObserveGoal_timesUp', 'v507', ctc6, v507);
  stdlib.protect(ctc0, await interact.out(v504, v508), {
    at: './index.rsh:88:13:application',
    fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:89:20:application call to "success" (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:87:45:application call to [unknown function] (defined at: ./index.rsh:87:45:function exp)'],
    msg: 'out',
    who: 'ObserveGoal_timesUp'
    });
  
  const v775 = v423;
  const v777 = stdlib.ge(v413, v405);
  return;
  
  
  
  };
export async function Donor_donateFunds(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donor_donateFunds expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donor_donateFunds expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Donor_donateFunds5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function ObserveGoal_goalOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ObserveGoal_goalOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ObserveGoal_goalOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _ObserveGoal_goalOutcome3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function ObserveGoal_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ObserveGoal_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ObserveGoal_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _ObserveGoal_timesUp5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Donor_donateFunds(uint64)byte`, `ObserveGoal_goalOutcome()byte`, `ObserveGoal_timesUp()byte`],
    pure: [],
    sigs: [`Donor_donateFunds(uint64)byte`, `ObserveGoal_goalOutcome()byte`, `ObserveGoal_timesUp()byte`]
    },
  appApproval: `BiAMAAEFICgDCv/DmbgH6vKPggxAMDgmAwEAAAEBIjUAMRhBA04pZEkiWzUBgQhbNQIxGSMSQQAKMQAoIQavZkIDGjYaABdJQQAyIjUEIzUGSSEHDEAAGUkhCAxAAAohCBJENhoBQgCSIQcSRClCAVuBx7eO8gESRClCACQ2GgIXNQQ2GgM2GgEXSSEFDEABj0mBBAxAATNJJAxAAFwkEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARokmRjNP9QsDIGNAMhCVsPRIAJAAAAAAAAAfsBsCo1BzQDVwAgNAMlWzQDIQRbNAMhClsiMgY0AyELW0IBwkgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATOPHBmNP9QsDIGNAMhCVsMRDT/FzX+NP6IAnCACQAAAAAAAAHaAbAqNQcxAIgCTVcACUk1/CJVQAAGIzX9QgAGIjX9QgAANP1EMQCIAi5XCQFJNfsiVUAABiI1/EIABiM1/EIAADT8FEQ0/kQxACgxAIgCCCo0/hZQNftXCQE0+0xQZjEAKDEAiAHxI4EJTFZmNANXACA0AyVbNAMhBFs0AyEKWzT+CCMyBjQDIQtbNP4IQgDxSCEFNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATImg+7NP9QsIAIAAAAAAAAAgQ0A1coAVCwNANXKAE1B7EisgE0AyVbsggjshA0A1cAILIHs0IBBUkjDEAAPSMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/NAMlWzQDIQRbIiMyBiJCAFlIgaCNBogBNiI0ARJENARJIhJMNAISEURJNQVJSVcAIDX/JVs1/iEEWzX9gAShmjdQNP9QNP4WUDT9FlCwMQA0/hZQNP0WUChLAVcAMGdIIzUBMgY1AkIAhDX/Nf41/TX8Nfs1+jX5NP1BAC80/jT6CDX4NPk0+hZQNPsWUDT8FlA0/xZQNPgWUChLAVcASGdIJDUBMgY1AkIAQjT8NPsPNfg0+TT/FlA0+BZRBwhQKEsBVwApZ0ghBTUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEGr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v403",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v403",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v521",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v466",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v504",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v474",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v507",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v516",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Donor_donateFunds",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ObserveGoal_goalOutcome",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ObserveGoal_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v521",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v466",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v504",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a6938038062001a69833981016040819052620000269162000221565b60008055436003556040517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b71606490620000629033908490620002cd565b60405180910390a162000078341560076200011a565b620000a6604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805182015182850190815290516040908101518186019081526001600081905543905581519384019490945290519082015290516060820152608001604051602081830303815290604052600290805190602001906200011192919062000144565b5050506200035c565b81620001405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000152906200031f565b90600052602060002090601f016020900481019282620001765760008555620001c1565b82601f106200019157805160ff1916838001178555620001c1565b82800160010185558215620001c1579182015b82811115620001c1578251825591602001919060010190620001a4565b50620001cf929150620001d3565b5090565b5b80821115620001cf5760008155600101620001d4565b604051606081016001600160401b03811182821017156200021b57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200023557600080fd5b604080519081016001600160401b03811182821017156200026657634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200028057600080fd5b6200028a620001ea565b60208501519092506001600160a01b0381168114620002a857600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b6001600160a01b0383168152815160208083019190915282015160a082019062000317604084018280516001600160a01b0316825260208082015190830152604090810151910152565b509392505050565b600181811c908216806200033457607f821691505b602082108114156200035657634e487b7160e01b600052602260045260246000fd5b50919050565b6116fd806200036c6000396000f3fe6080604052600436106100a55760003560e01c8063ab53f2c611610061578063ab53f2c614610152578063ad9fa3d814610175578063adf4203b14610188578063c1980d7714610190578063cadc2e7a146101a3578063e2186a08146101d057005b80630cf4bd23146100ae5780631e93b0f1146100c15780632c10a159146100e55780632d421e6a146100f85780633bc5b7bf14610110578063832307571461013d57005b366100ac57005b005b6100ac6100bc3660046111c3565b6101e3565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100f33660046111c3565b61021c565b610100610251565b60405190151581526020016100dc565b34801561011c57600080fd5b5061013061012b3660046111fb565b610291565b6040516100dc919061124c565b34801561014957600080fd5b506001546100d2565b34801561015e57600080fd5b506101676102bd565b6040516100dc92919061127c565b6100ac6101833660046111c3565b61035a565b61010061038f565b61010061019e3660046112d9565b6103cf565b3480156101af57600080fd5b506101c36101be3660046111fb565b610417565b6040516100dc91906112f2565b6100ac6101de3660046111c3565b61043d565b6040805160608101825260008082526020820181905291810191909152610218610212368490038401846113bd565b82610472565b5050565b604080516060810182526000808252602082018190529181019190915261021861024b36849003840184611422565b826107c2565b600061025b611023565b602081810151600090819052604080516060810182528281529283018290528201526102878282610960565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526102b782610b25565b92915050565b6000606060005460028080546102d29061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe9061145a565b801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102186103893684900384018461153b565b82610960565b6000610399611023565b602081810151600090819052604080516060810182528281529283018290528201526103c58282610bf7565b6020015192915050565b60006103d9611052565b602081015151839052610405604080516060810182526000808252602082018190529181019190915290565b61040f8282610472565b519392505050565b60408051606081018252600080825260208201819052918101919091526102b782610db2565b604080516060810182526000808252602082018190529181019190915261021861046c3684900384018461153b565b82610bf7565b6104826005600054146013610e7b565b815161049d90158061049657508251600154145b6014610e7b565b6000808055600280546104af9061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546104db9061145a565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b50505050508060200190518101906105409190611557565b60408051808201909152600080825260208201529091506105688260a0015143106015610e7b565b60408051338152855160208083019190915286015151518183015290517f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f99181900360600190a1602084015151516105c3903414600f610e7b565b604051600181527f051b14db94aa1be0640f68e3e89ec8e5feeb3fa71319c10c5b384d190561025c9060200160405180910390a160018352600061060633610b25565b51600181111561061857610618611218565b1415610627576001815261064f565b600161063233610b25565b51600181111561064457610644611218565b141561064f57600081525b805161065c906010610e7b565b600061066733610db2565b51600181111561067957610679611218565b141561068b57600060208201526106b6565b600161069633610db2565b5160018111156106a8576106a8611218565b14156106b657600160208201525b6106d381602001516106c95760016106cc565b60005b6011610e7b565b602084015151516106f490156106ea5760016106ed565b60005b6012610e7b565b336000908152600460209081526040808320805460ff191660019081178255888401515151918101919091556005909252909120805462ff00ff1916909117905561073d61107f565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101528501515151606084015161077991906115e8565b60208083018051929092528151600190820152905143604090910152850151515160808401516107a991906115e8565b6020820151606001526107bb81610ea0565b5050505050565b6107d2600160005414600a610e7b565b81516107ed9015806107e657508251600154145b600b610e7b565b6000808055600280546107ff9061145a565b80601f016020809104026020016040519081016040528092919081815260200182805461082b9061145a565b80156108785780601f1061084d57610100808354040283529160200191610878565b820191906000526020600020905b81548152906001019060200180831161085b57829003601f168201915b5050505050806020019051810190610890919061160e565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16108e734156008610e7b565b80516108ff906001600160a01b031633146009610e7b565b61090761107f565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152818301805160009081905281516001940193909352805143920191909152516060015261095a81610ea0565b50505050565b6109706005600054146017610e7b565b815161098b90158061098457508251600154145b6018610e7b565b60008080556002805461099d9061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546109c99061145a565b8015610a165780601f106109eb57610100808354040283529160200191610a16565b820191906000526020600020905b8154815290600101906020018083116109f957829003601f168201915b5050505050806020019051810190610a2e9190611557565b9050610a428160a001514310156019610e7b565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653384604051610a73929190611652565b60405180910390a1610a8734156016610e7b565b604051600181527ff6dff325d64e18184947edaac9ba1088c7864ba1d78438dfcd859fba2a71f1719060200160405180910390a160016040830152610aca61107f565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060808501518385018051919091528051600094019390935282514392019190915260808401519151015261095a81610ea0565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b7157610b71611218565b1415610be8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610bb257610bb2611218565b6001811115610bc357610bc3611218565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610c07600360005414600d610e7b565b8151610c22901580610c1b57508251600154145b600e610e7b565b600080805560028054610c349061145a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c609061145a565b8015610cad5780601f10610c8257610100808354040283529160200191610cad565b820191906000526020600020905b815481529060010190602001808311610c9057829003601f168201915b5050505050806020019051810190610cc5919061167c565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353384604051610cf8929190611652565b60405180910390a1610d0c3415600c610e7b565b7fe3e54e15c7aee88fe26c0f94f6c55202b5d5a336c7fd44ad3479309995e189828160400151604051610d43911515815260200190565b60405180910390a1604080820151151560208085019190915282519083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610d96573d6000803e3d6000fd5b5060008080556001819055610dad906002906110d5565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115610dfe57610dfe611218565b1415610be8576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610e3f57610e3f611218565b6001811115610e5057610e50611218565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b816102185760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082019091526000808252602082015281602001516020015115610fa557816000015160200151826020015160400151610ede91906115e8565b81526040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528e51516001600160a01b0316808d528f518a015189528f518e015188528f8a0180515187525187015184528e5182526005909a55436001558c519889019990995295519a87019a909a52925191850191909152519083015294519481019490945251908301529060e0015b6040516020818303038152906040526002908051906020019061095a929190611112565b81516040908101516020808501805151929092101584820190815283516060808201865260008083528285018181528388018281528a51516001600160a01b03168086529751840151825294511515855260039091554360015586519485019590955293519483019490945251151591810191909152608001610f81565b60405180604001604052806000815260200161104d60405180602001604052806000151581525090565b905290565b60405180604001604052806000815260200161104d60408051808201909152600060208201908152815290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161104d60405180608001604052806000815260200160001515815260200160008152602001600081525090565b5080546110e19061145a565b6000825580601f106110f1575050565b601f01602090049060005260206000209081019061110f9190611196565b50565b82805461111e9061145a565b90600052602060002090601f0160209004810192826111405760008555611186565b82601f1061115957805160ff1916838001178555611186565b82800160010185558215611186579182015b8281111561118657825182559160200191906001019061116b565b50611192929150611196565b5090565b5b808211156111925760008155600101611197565b6000604082840312156111bd57600080fd5b50919050565b6000604082840312156111d557600080fd5b6111df83836111ab565b9392505050565b6001600160a01b038116811461110f57600080fd5b60006020828403121561120d57600080fd5b81356111df816111e6565b634e487b7160e01b600052602160045260246000fd5b6002811061110f57634e487b7160e01b600052602160045260246000fd5b8151606082019061125c8161122e565b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b818110156112b057858101830151858201606001528201611294565b818111156112c2576000606083870101525b50601f01601f191692909201606001949350505050565b6000602082840312156112eb57600080fd5b5035919050565b815160608201906113028161122e565b8083525060208301511515602083015260408301511515604083015292915050565b6040805190810167ffffffffffffffff8111828210171561135557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561135557634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561135557634e487b7160e01b600052604160045260246000fd5b600081830360408112156113d057600080fd5b6113d8611324565b833581526020601f19830112156113ee57600080fd5b6113f661135b565b915061140061135b565b602094850135815282529283015250919050565b801515811461110f57600080fd5b60006040828403121561143457600080fd5b61143c611324565b82358152602083013561144e81611414565b60208201529392505050565b600181811c9082168061146e57607f821691505b602082108114156111bd57634e487b7160e01b600052602260045260246000fd5b60008183036040808212156114a357600080fd5b805181810167ffffffffffffffff82821081831117156114d357634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f19860112156114ef57600080fd5b83519450602085019150848210818311171561151b57634e487b7160e01b600052604160045260246000fd5b5090915260208401359061152e82611414565b9082526020015292915050565b60006040828403121561154d57600080fd5b6111df838361148f565b600060c0828403121561156957600080fd5b60405160c0810181811067ffffffffffffffff8211171561159a57634e487b7160e01b600052604160045260246000fd5b60405282516115a8816111e6565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000821982111561160957634e487b7160e01b600052601160045260246000fd5b500190565b60006060828403121561162057600080fd5b61162861138c565b8251611633816111e6565b8152602083810151908201526040928301519281019290925250919050565b6001600160a01b0383168152606081016111df602083018480518252602090810151511515910152565b60006060828403121561168e57600080fd5b61169661138c565b82516116a1816111e6565b81526020838101519082015260408301516116bb81611414565b6040820152939250505056fea26469706673582212205a8f463dcb539ba7632a39a5f166ccecc78c692f984f4d1a956bcc937ea5120664736f6c634300080c0033`,
  BytecodeLen: 6761,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:98:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: '<builtin>',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:49:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Donee": Donee,
  "Donor_donateFunds": Donor_donateFunds,
  "ObserveGoal_goalOutcome": ObserveGoal_goalOutcome,
  "ObserveGoal_timesUp": ObserveGoal_timesUp
  };
export const _APIs = {
  Donor: {
    donateFunds: Donor_donateFunds
    },
  ObserveGoal: {
    goalOutcome: ObserveGoal_goalOutcome,
    timesUp: ObserveGoal_timesUp
    }
  };
