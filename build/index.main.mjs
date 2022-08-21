// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

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
  
  
  const [v382, v384, v385, v393, v403, v418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v420 = ctc.selfAddress();
  const v422 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'in',
    who: 'Donor_donateFunds'
    });
  const v423 = v422[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v426 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v420), null);
  const v427 = {
    None: 0,
    Some: 1
    }[v426[0]];
  const v428 = stdlib.eq(v427, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'not yet in the map',
    who: 'Donor_donateFunds'
    });
  const v430 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v420), null);
  const v431 = {
    None: 0,
    Some: 1
    }[v430[0]];
  const v432 = stdlib.eq(v431, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v433 = v432 ? false : true;
  stdlib.assert(v433, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'not in the set yet',
    who: 'Donor_donateFunds'
    });
  const v435 = stdlib.eq(v423, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
  const v436 = v435 ? false : true;
  stdlib.assert(v436, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:75:36:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)', 'at ./index.rsh:74:23:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
    msg: 'zero donations not allowed',
    who: 'Donor_donateFunds'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v384, v385, v393, v403, v418, v422],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v423, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v441], secs: v443, time: v442, didSend: v220, from: v440 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donor_donateFunds"
        });
      const v445 = v441[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
      const v447 = stdlib.safeAdd(v403, v445);
      sim_r.txns.push({
        amt: v445,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v449 = true;
      const v450 = await txn1.getOutput('Donor_donateFunds', 'v449', ctc6, v449);
      
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v440), null);
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v440), null);
      await stdlib.simMapSet(sim_r, 0, v440, v445);
      await stdlib.simMapSet(sim_r, 1, v440, null);
      const v469 = stdlib.safeAdd(v393, v445);
      const v725 = v469;
      const v728 = v447;
      const v729 = stdlib.safeAdd(v442, v384);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v220, from: v440 } = txn1;
  undefined /* setApiDetails */;
  const v445 = v441[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
  const v447 = stdlib.safeAdd(v403, v445);
  ;
  const v449 = true;
  const v450 = await txn1.getOutput('Donor_donateFunds', 'v449', ctc6, v449);
  if (v220) {
    stdlib.protect(ctc0, await interact.out(v441, v450), {
      at: './index.rsh:72:13:application',
      fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:13:function exp)', 'at ./index.rsh:81:24:application call to "success" (defined at: ./index.rsh:80:32:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
      msg: 'out',
      who: 'Donor_donateFunds'
      });
    }
  else {
    }
  
  const v456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v440), null);
  const v457 = {
    None: 0,
    Some: 1
    }[v456[0]];
  const v458 = stdlib.eq(v457, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'not yet in the map',
    who: 'Donor_donateFunds'
    });
  const v460 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v440), null);
  const v461 = {
    None: 0,
    Some: 1
    }[v460[0]];
  const v462 = stdlib.eq(v461, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v463 = v462 ? false : true;
  stdlib.assert(v463, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'not in the set yet',
    who: 'Donor_donateFunds'
    });
  const v465 = stdlib.eq(v445, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
  const v466 = v465 ? false : true;
  stdlib.assert(v466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
    msg: 'zero donations not allowed',
    who: 'Donor_donateFunds'
    });
  await stdlib.mapSet(map0, v440, v445);
  await stdlib.mapSet(map1, v440, null);
  const v469 = stdlib.safeAdd(v393, v445);
  const v725 = v469;
  const v728 = v447;
  const v729 = stdlib.safeAdd(v442, v384);
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
  
  
  const [v382, v403, v487] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc5]);
  const v490 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:102:5:application',
    fs: ['at ./index.rsh:102:5:application call to [unknown function] (defined at: ./index.rsh:102:5:function exp)'],
    msg: 'in',
    who: 'ObserveGoal_goalOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v403, v487, v490],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v492], secs: v494, time: v493, didSend: v337, from: v491 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ObserveGoal_goalOutcome"
        });
      ;
      const v495 = await txn1.getOutput('ObserveGoal_goalOutcome', 'v487', ctc5, v487);
      
      sim_r.txns.push({
        kind: 'from',
        to: v382,
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
  const {data: [v492], secs: v494, time: v493, didSend: v337, from: v491 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v495 = await txn1.getOutput('ObserveGoal_goalOutcome', 'v487', ctc5, v487);
  stdlib.protect(ctc0, await interact.out(v492, v495), {
    at: './index.rsh:102:5:application',
    fs: ['at ./index.rsh:102:5:application call to [unknown function] (defined at: ./index.rsh:102:5:function exp)', 'at ./index.rsh:103:9:application call to "view" (defined at: ./index.rsh:102:5:function exp)'],
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
  
  
  const [v382, v384, v385, v393, v403, v418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v475 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:88:13:application',
    fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:87:45:application call to [unknown function] (defined at: ./index.rsh:87:45:function exp)'],
    msg: 'in',
    who: 'ObserveGoal_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v384, v385, v393, v403, v418, v475],
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
      
      const {data: [v477], secs: v479, time: v478, didSend: v319, from: v476 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ObserveGoal_timesUp"
        });
      ;
      const v480 = true;
      const v481 = await txn1.getOutput('ObserveGoal_timesUp', 'v480', ctc6, v480);
      
      const v740 = v403;
      const v742 = stdlib.ge(v393, v385);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v477], secs: v479, time: v478, didSend: v319, from: v476 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v480 = true;
  const v481 = await txn1.getOutput('ObserveGoal_timesUp', 'v480', ctc6, v480);
  stdlib.protect(ctc0, await interact.out(v477, v481), {
    at: './index.rsh:88:13:application',
    fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:89:20:application call to "success" (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:87:45:application call to [unknown function] (defined at: ./index.rsh:87:45:function exp)'],
    msg: 'out',
    who: 'ObserveGoal_timesUp'
    });
  
  const v740 = v403;
  const v742 = stdlib.ge(v393, v385);
  return;
  
  
  
  };
export async function Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Receiver expects to receive an interact object as its second argument.`));}
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
  
  
  const v377 = stdlib.protect(ctc1, interact.deadline, 'for Receiver\'s interact field deadline');
  const v378 = stdlib.protect(ctc1, interact.goal, 'for Receiver\'s interact field goal');
  const v379 = stdlib.protect(ctc4, interact.receiverAddr, 'for Receiver\'s interact field receiverAddr');
  
  const txn1 = await (ctc.sendrecv({
    args: [v379, v377, v378],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v31, from: v382 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v31, from: v382 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v382, v384, v385],
    evt_cnt: 0,
    funcNum: 1,
    lct: v386,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v390, time: v389, didSend: v36, from: v388 } = txn2;
      
      ;
      
      const v393 = stdlib.checkedBigNumberify('./index.rsh:49:70:decimal', stdlib.UInt_max, '0');
      const v394 = true;
      const v396 = v389;
      const v403 = stdlib.checkedBigNumberify('./index.rsh:27:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v394;})()) {
        const v418 = stdlib.safeAdd(v396, v384);
        sim_r.isHalt = false;
        }
      else {
        const v487 = stdlib.ge(v393, v385);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v390, time: v389, didSend: v36, from: v388 } = txn2;
  ;
  const v391 = stdlib.addressEq(v382, v388);
  stdlib.assert(v391, {
    at: './index.rsh:38:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Receiver'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:41:28:application',
    fs: ['at ./index.rsh:41:28:application call to [unknown function] (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:41:28:application call to "liftedInteract" (defined at: ./index.rsh:41:28:application)'],
    msg: 'ready',
    who: 'Receiver'
    });
  
  let v393 = stdlib.checkedBigNumberify('./index.rsh:49:70:decimal', stdlib.UInt_max, '0');
  let v394 = true;
  let v396 = v389;
  let v403 = stdlib.checkedBigNumberify('./index.rsh:27:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v394;})()) {
    const v418 = stdlib.safeAdd(v396, v384);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: ['time', v418],
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
      const {data: [v477], secs: v479, time: v478, didSend: v319, from: v476 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v480 = true;
      await txn4.getOutput('ObserveGoal_timesUp', 'v480', ctc6, v480);
      const cv393 = v393;
      const cv394 = false;
      const cv396 = v478;
      const cv403 = v403;
      
      v393 = cv393;
      v394 = cv394;
      v396 = cv396;
      v403 = cv403;
      
      continue;
      }
    else {
      const {data: [v441], secs: v443, time: v442, didSend: v220, from: v440 } = txn3;
      undefined /* setApiDetails */;
      const v445 = v441[stdlib.checkedBigNumberify('./index.rsh:71:13:spread', stdlib.UInt_max, '0')];
      const v447 = stdlib.safeAdd(v403, v445);
      ;
      const v449 = true;
      await txn3.getOutput('Donor_donateFunds', 'v449', ctc6, v449);
      const v456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v440), null);
      const v457 = {
        None: 0,
        Some: 1
        }[v456[0]];
      const v458 = stdlib.eq(v457, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v458, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'not yet in the map',
        who: 'Receiver'
        });
      const v460 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v440), null);
      const v461 = {
        None: 0,
        Some: 1
        }[v460[0]];
      const v462 = stdlib.eq(v461, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v463 = v462 ? false : true;
      stdlib.assert(v463, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:55:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'not in the set yet',
        who: 'Receiver'
        });
      const v465 = stdlib.eq(v445, stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '0'));
      const v466 = v465 ? false : true;
      stdlib.assert(v466, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:56:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:30:application call to "donate" (defined at: ./index.rsh:51:44:function exp)', 'at ./index.rsh:80:32:application call to [unknown function] (defined at: ./index.rsh:80:32:function exp)'],
        msg: 'zero donations not allowed',
        who: 'Receiver'
        });
      await stdlib.mapSet(map0, v440, v445);
      await stdlib.mapSet(map1, v440, null);
      const v469 = stdlib.safeAdd(v393, v445);
      const cv393 = v469;
      const cv394 = true;
      const cv396 = v442;
      const cv403 = v447;
      
      v393 = cv393;
      v394 = cv394;
      v396 = cv396;
      v403 = cv403;
      
      continue;}
    
    }
  const v487 = stdlib.ge(v393, v385);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v492], secs: v494, time: v493, didSend: v337, from: v491 } = txn3;
  undefined /* setApiDetails */;
  ;
  await txn3.getOutput('ObserveGoal_goalOutcome', 'v487', ctc6, v487);
  ;
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
  appApproval: `BiAMAAEFICgDCv/DmbgH6vKPggxAMDgmAwEAAAEBIjUAMRhBAykpZEkiWzUBgQhbNQIxGSMSQQAKMQAoIQavZkIC9TYaABdJQQAyIjUEIzUGSSEHDEAAGUkhCAxAAAohCBJENhoBQgCSIQcSRClCATaBx7eO8gESRClCACQ2GgIXNQQ2GgM2GgEXSSEFDEABakmBBAxAAQ5JJAxAAFwkEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARokmRjNP9QsDIGNAMhCVsPRIAJAAAAAAAAAeABsCo1BzQDVwAgNAMlWzQDIQRbNAMhClsiMgY0AyELW0IBnUgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATOPHBmNP9QsDIGNAMhCVsMRDT/FzX+NP6IAkuACQAAAAAAAAHBAbAqNQcxAIgCKFcACSJVIhJEMQCIAhtXCQEiVSMTRDT+RDEAKDEAiAIIKjT+FlA1/VcJATT9TFBmMQAoMQCIAfEjgQlMVmY0A1cAIDQDJVs0AyEEWzQDIQpbNP4IIzIGNAMhC1s0/ghCAPFIIQU0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABMiaD7s0/1CwgAgAAAAAAAAB5zQDVygBULA0A1coATUHsSKyATQDJVuyCCOyEDQDVwAgsgezQgEFSSMMQAA9IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80AyVbNAMhBFsiIzIGIkIAWUiBoI0GiAE2IjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAgNf8lWzX+IQRbNf2ABKGaN1A0/1A0/hZQNP0WULAxADT+FlA0/RZQKEsBVwAwZ0gjNQEyBjUCQgCENf81/jX9Nfw1+zX6Nfk0/UEALzT+NPoINfg0+TT6FlA0+xZQNPwWUDT/FlA0+BZQKEsBVwBIZ0gkNQEyBjUCQgBCNPw0+w81+DT5NP8WUDT4FlEHCFAoSwFXAClnSCEFNQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v383",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v385",
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
                "name": "v383",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v385",
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
                "name": "v492",
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
                "name": "v441",
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
                "name": "v477",
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
    "name": "_reach_oe_v449",
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
    "name": "_reach_oe_v480",
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
    "name": "_reach_oe_v487",
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
                "name": "v492",
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
                "name": "v441",
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
                "name": "v477",
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
  Bytecode: `0x608060405260405162001a2138038062001a21833981016040819052620000269162000221565b60008055436003556040517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b71606490620000629033908490620002cd565b60405180910390a162000078341560076200011a565b620000a6604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805182015182850190815290516040908101518186019081526001600081905543905581519384019490945290519082015290516060820152608001604051602081830303815290604052600290805190602001906200011192919062000144565b5050506200035c565b81620001405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000152906200031f565b90600052602060002090601f016020900481019282620001765760008555620001c1565b82601f106200019157805160ff1916838001178555620001c1565b82800160010185558215620001c1579182015b82811115620001c1578251825591602001919060010190620001a4565b50620001cf929150620001d3565b5090565b5b80821115620001cf5760008155600101620001d4565b604051606081016001600160401b03811182821017156200021b57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200023557600080fd5b604080519081016001600160401b03811182821017156200026657634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200028057600080fd5b6200028a620001ea565b60208501519092506001600160a01b0381168114620002a857600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b6001600160a01b0383168152815160208083019190915282015160a082019062000317604084018280516001600160a01b0316825260208082015190830152604090810151910152565b509392505050565b600181811c908216806200033457607f821691505b602082108114156200035657634e487b7160e01b600052602260045260246000fd5b50919050565b6116b5806200036c6000396000f3fe6080604052600436106100a55760003560e01c8063ab53f2c611610061578063ab53f2c614610152578063ad9fa3d814610175578063adf4203b14610188578063c1980d7714610190578063cadc2e7a146101a3578063e2186a08146101d057005b80630cf4bd23146100ae5780631e93b0f1146100c15780632c10a159146100e55780632d421e6a146100f85780633bc5b7bf14610110578063832307571461013d57005b366100ac57005b005b6100ac6100bc36600461117b565b6101e3565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100f336600461117b565b61021c565b610100610251565b60405190151581526020016100dc565b34801561011c57600080fd5b5061013061012b3660046111b3565b610291565b6040516100dc9190611204565b34801561014957600080fd5b506001546100d2565b34801561015e57600080fd5b506101676102bd565b6040516100dc929190611234565b6100ac61018336600461117b565b61035a565b61010061038f565b61010061019e366004611291565b6103cf565b3480156101af57600080fd5b506101c36101be3660046111b3565b610417565b6040516100dc91906112aa565b6100ac6101de36600461117b565b61043d565b604080516060810182526000808252602082018190529181019190915261021861021236849003840184611375565b82610472565b5050565b604080516060810182526000808252602082018190529181019190915261021861024b368490038401846113da565b82610734565b600061025b610fdb565b6020818101516000908190526040805160608101825282815292830182905282015261028782826108cc565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526102b782610a91565b92915050565b6000606060005460028080546102d290611412565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90611412565b801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610218610389368490038401846114f3565b826108cc565b6000610399610fdb565b602081810151600090819052604080516060810182528281529283018290528201526103c58282610b63565b6020015192915050565b60006103d961100a565b602081015151839052610405604080516060810182526000808252602082018190529181019190915290565b61040f8282610472565b519392505050565b60408051606081018252600080825260208201819052918101919091526102b782610d1e565b604080516060810182526000808252602082018190529181019190915261021861046c368490038401846114f3565b82610b63565b6104826005600054146013610de7565b815161049d90158061049657508251600154145b6014610de7565b6000808055600280546104af90611412565b80601f01602080910402602001604051908101604052809291908181526020018280546104db90611412565b80156105285780601f106104fd57610100808354040283529160200191610528565b820191906000526020600020905b81548152906001019060200180831161050b57829003601f168201915b5050505050806020019051810190610540919061150f565b90506105538160a0015143106015610de7565b60408051338152845160208083019190915285015151518183015290517f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f99181900360600190a1602083015151516105ae903414600f610de7565b604051600181527faab512758e0e1766675ec1f3b381294e41330a1e596988d78bae659fb54a73359060200160405180910390a16001825261060e60006105f433610a91565b516001811115610606576106066111d0565b146010610de7565b610644600161061c33610d1e565b51600181111561062e5761062e6111d0565b1461063a57600161063d565b60005b6011610de7565b60208301515151610665901561065b57600161065e565b60005b6012610de7565b336000908152600460209081526040808320805460ff191660019081178255878401515151918101919091556005909252909120805462ff00ff191690911790556106ae611037565b815181516001600160a01b039091169052602080830151825182015260408084015183519091015260608301519085015151516106eb9190610e0d565b60208083018051929092528151600190820152905143604090910152608083015190850151515161071c9190610e0d565b60208201516060015261072e81610e5a565b50505050565b610744600160005414600a610de7565b815161075f90158061075857508251600154145b600b610de7565b60008080556002805461077190611412565b80601f016020809104026020016040519081016040528092919081815260200182805461079d90611412565b80156107ea5780601f106107bf576101008083540402835291602001916107ea565b820191906000526020600020905b8154815290600101906020018083116107cd57829003601f168201915b505050505080602001905181019061080291906115a0565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161085934156008610de7565b8051610871906001600160a01b031633146009610de7565b610879611037565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152818301805160009081905281516001940193909352805143920191909152516060015261072e81610e5a565b6108dc6005600054146017610de7565b81516108f79015806108f057508251600154145b6018610de7565b60008080556002805461090990611412565b80601f016020809104026020016040519081016040528092919081815260200182805461093590611412565b80156109825780601f1061095757610100808354040283529160200191610982565b820191906000526020600020905b81548152906001019060200180831161096557829003601f168201915b505050505080602001905181019061099a919061150f565b90506109ae8160a001514310156019610de7565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533846040516109df9291906115e4565b60405180910390a16109f334156016610de7565b604051600181527f2868989881507927f2e6b7acd138e7fd04b08cacff29da2cbf90f0aa82e016d59060200160405180910390a160016040830152610a36611037565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060808501518385018051919091528051600094019390935282514392019190915260808401519151015261072e81610e5a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610add57610add6111d0565b1415610b54576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b1e57610b1e6111d0565b6001811115610b2f57610b2f6111d0565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610b73600360005414600d610de7565b8151610b8e901580610b8757508251600154145b600e610de7565b600080805560028054610ba090611412565b80601f0160208091040260200160405190810160405280929190818152602001828054610bcc90611412565b8015610c195780601f10610bee57610100808354040283529160200191610c19565b820191906000526020600020905b815481529060010190602001808311610bfc57829003601f168201915b5050505050806020019051810190610c31919061160e565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353384604051610c649291906115e4565b60405180910390a1610c783415600c610de7565b7f0f51eb2573cea7814cdac2c66def813af564d99aa505b597406f7e88f2c311318160400151604051610caf911515815260200190565b60405180910390a1604080820151151560208085019190915282519083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610d02573d6000803e3d6000fd5b5060008080556001819055610d199060029061108d565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115610d6a57610d6a6111d0565b1415610b54576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610dab57610dab6111d0565b6001811115610dbc57610dbc6111d0565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b816102185760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610e1a8382611659565b91508110156102b75760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e04565b604080518082019091526000808252602082015281602001516020015115610f5d57610e96826020015160400151836000015160200151610e0d565b81526040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528e51516001600160a01b0316808d528f518a015189528f518e015188528f8a0180515187525187015184528e5182526005909a55436001558c519889019990995295519a87019a909a52925191850191909152519083015294519481019490945251908301529060e0015b6040516020818303038152906040526002908051906020019061072e9291906110ca565b81516040908101516020808501805151929092101584820190815283516060808201865260008083528285018181528388018281528a51516001600160a01b03168086529751840151825294511515855260039091554360015586519485019590955293519483019490945251151591810191909152608001610f39565b60405180604001604052806000815260200161100560405180602001604052806000151581525090565b905290565b60405180604001604052806000815260200161100560408051808201909152600060208201908152815290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161100560405180608001604052806000815260200160001515815260200160008152602001600081525090565b50805461109990611412565b6000825580601f106110a9575050565b601f0160209004906000526020600020908101906110c7919061114e565b50565b8280546110d690611412565b90600052602060002090601f0160209004810192826110f8576000855561113e565b82601f1061111157805160ff191683800117855561113e565b8280016001018555821561113e579182015b8281111561113e578251825591602001919060010190611123565b5061114a92915061114e565b5090565b5b8082111561114a576000815560010161114f565b60006040828403121561117557600080fd5b50919050565b60006040828403121561118d57600080fd5b6111978383611163565b9392505050565b6001600160a01b03811681146110c757600080fd5b6000602082840312156111c557600080fd5b81356111978161119e565b634e487b7160e01b600052602160045260246000fd5b600281106110c757634e487b7160e01b600052602160045260246000fd5b81516060820190611214816111e6565b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b818110156112685785810183015185820160600152820161124c565b8181111561127a576000606083870101525b50601f01601f191692909201606001949350505050565b6000602082840312156112a357600080fd5b5035919050565b815160608201906112ba816111e6565b8083525060208301511515602083015260408301511515604083015292915050565b6040805190810167ffffffffffffffff8111828210171561130d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561130d57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561130d57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561138857600080fd5b6113906112dc565b833581526020601f19830112156113a657600080fd5b6113ae611313565b91506113b8611313565b602094850135815282529283015250919050565b80151581146110c757600080fd5b6000604082840312156113ec57600080fd5b6113f46112dc565b823581526020830135611406816113cc565b60208201529392505050565b600181811c9082168061142657607f821691505b6020821081141561117557634e487b7160e01b600052602260045260246000fd5b600081830360408082121561145b57600080fd5b805181810167ffffffffffffffff828210818311171561148b57634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f19860112156114a757600080fd5b8351945060208501915084821081831117156114d357634e487b7160e01b600052604160045260246000fd5b509091526020840135906114e6826113cc565b9082526020015292915050565b60006040828403121561150557600080fd5b6111978383611447565b600060c0828403121561152157600080fd5b60405160c0810181811067ffffffffffffffff8211171561155257634e487b7160e01b600052604160045260246000fd5b60405282516115608161119e565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000606082840312156115b257600080fd5b6115ba611344565b82516115c58161119e565b8152602083810151908201526040928301519281019290925250919050565b6001600160a01b038316815260608101611197602083018480518252602090810151511515910152565b60006060828403121561162057600080fd5b611628611344565b82516116338161119e565b815260208381015190820152604083015161164d816113cc565b60408201529392505050565b6000821982111561167a57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212202033c3980d7be42b801f54ead65fdaac2c9f21c69fc1e026540efeae69b2200664736f6c634300080c0033`,
  BytecodeLen: 6689,
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
    at: './index.rsh:99:13:after expr stmt semicolon',
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
  "Donor_donateFunds": Donor_donateFunds,
  "ObserveGoal_goalOutcome": ObserveGoal_goalOutcome,
  "ObserveGoal_timesUp": ObserveGoal_timesUp,
  "Receiver": Receiver
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
