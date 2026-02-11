import{j as r}from"./iframe-RlG1jcEu.js";import{u as n,g as u,s as m}from"./states-TCS8mwE7.js";import{P as i}from"./index-DZ3t5G56.js";import{u as V}from"./utils-Hyq53JDb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-jp8P-s.js";import"./create-slot-recipe-context-B6SO3hUu.js";import"./index-DKU8_rGA.js";import"./factory-n0XrCoXN.js";import"./index-CTmrF6FQ.js";import"./card-BE7LpWow.js";import"./toaster-BzHW-UPD.js";import"./index-HKIpGz3m.js";import"./grid-RxMw40ZH.js";import"./h-stack-Cwz9MMsq.js";import"./v-stack-DN8eplg_.js";import"./accordion-CjEaugoE.js";import"./render-strategy-BKyw0Cjf.js";var c,g,v,_,h,I,x,y,N,A,C,P,f,R,S,b,j,E,H,M;const p=({initialValues:e,children:o})=>(V(e),o),l=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"山田花子",avatar:"3"},{id:"user3",name:"佐藤次郎",avatar:"5"}],k=[{item:"候補アイテムA",comment:"最高の選択！",round:1,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムB",comment:"いい感じ",round:1,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムC",comment:"これしかない",round:1,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムD",comment:"狙い通り",round:2,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムE",comment:"まずまず",round:2,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムF",comment:"いける",round:2,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムG",comment:"これで決まり",round:3,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムH",comment:"Perfect!",round:3,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"候補アイテムI",comment:"やったー",round:3,userId:"user1",groupId:"group1",randomNumber:Math.random()}],rr={title:"Features/draft/PastDraftResults",component:i,parameters:{layout:"centered"}},t={render:()=>r.jsx(p,{initialValues:[[n,l],[u,{round:4,groupName:"テストグループ"}],[m,k]],children:r.jsx("div",{style:{width:"800px",height:"400px"},children:r.jsx(i,{variant:"pc",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},s={render:()=>r.jsx(p,{initialValues:[[n,l],[u,{round:4,groupName:"テストグループ"}],[m,k]],children:r.jsx("div",{style:{width:"400px",height:"500px"},children:r.jsx(i,{variant:"sp",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},d={render:()=>r.jsx(p,{initialValues:[[n,l],[u,{round:1,groupName:"テストグループ"}],[m,[]]],children:r.jsx("div",{style:{width:"400px",height:"300px"},children:r.jsx(i,{variant:"sp",onEditClick:({userId:e,round:o})=>console.log("編集クリック:",{userId:e,round:o})})})})},a={render:()=>{const e=[{item:"重複指名アイテム",comment:"コメントA",round:1,userId:"user1",groupId:"group1",randomNumber:100},{item:"重複指名アイテム",comment:"コメントB",round:1,userId:"user2",groupId:"group1",randomNumber:50},{item:"重複指名アイテム",comment:"コメントC",round:1,userId:"user3",groupId:"group1",randomNumber:30}];return r.jsx(p,{initialValues:[[n,l],[u,{round:2,groupName:"テストグループ"}],[m,e]],children:r.jsx("div",{style:{width:"800px",height:"400px"},children:r.jsx(i,{variant:"pc",onEditClick:({userId:o,round:w})=>console.log("編集クリック:",{userId:o,round:w})})})})}};t.parameters={...t.parameters,docs:{...(c=t.parameters)===null||c===void 0?void 0:c.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }],
  // 現在Round4なので1-3が過去結果
  [selectionsAtom, pastSelections]]}>
      <div style={{
      width: '800px',
      height: '400px'
    }}>
        <PastDraftResults variant="pc" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(v=t.parameters)===null||v===void 0||(g=v.docs)===null||g===void 0?void 0:g.source},description:{story:`PC版スタイル（テーブル形式）
過去3ラウンドの結果を表示`,...(h=t.parameters)===null||h===void 0||(_=h.docs)===null||_===void 0?void 0:_.description}}};s.parameters={...s.parameters,docs:{...(I=s.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, pastSelections]]}>
      <div style={{
      width: '400px',
      height: '500px'
    }}>
        <PastDraftResults variant="sp" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(y=s.parameters)===null||y===void 0||(x=y.docs)===null||x===void 0?void 0:x.source},description:{story:`SP版スタイル（アコーディオン形式）
過去3ラウンドの結果を表示`,...(A=s.parameters)===null||A===void 0||(N=A.docs)===null||N===void 0?void 0:N.description}}};d.parameters={...d.parameters,docs:{...(C=d.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 1,
    groupName: 'テストグループ'
  }],
  // Round1なので過去結果なし
  [selectionsAtom, []] // 空のselections
  ]}>
      <div style={{
      width: '400px',
      height: '300px'
    }}>
        <PastDraftResults variant="sp" onEditClick={({
        userId,
        round
      }) => console.log('編集クリック:', {
        userId,
        round
      })} />
      </div>
    </HydrateAtoms>
}`,...(f=d.parameters)===null||f===void 0||(P=f.docs)===null||P===void 0?void 0:P.source},description:{story:`過去結果なし（Round 1の状態）
まだ開票が始まっていない状態`,...(S=d.parameters)===null||S===void 0||(R=S.docs)===null||R===void 0?void 0:R.description}}};a.parameters={...a.parameters,docs:{...(b=a.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  render: () => {
    // 3人重複指名のテストデータ（全員が同じアイテムを選択）
    const conflictSelections: SelectionAtom[] = [{
      item: '重複指名アイテム',
      comment: 'コメントA',
      round: 1,
      userId: 'user1',
      groupId: 'group1',
      randomNumber: 100 // 最大値（勝者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントB',
      round: 1,
      userId: 'user2',
      groupId: 'group1',
      randomNumber: 50 // 中間値（敗者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントC',
      round: 1,
      userId: 'user3',
      groupId: 'group1',
      randomNumber: 30 // 最小値（敗者）
    }];
    return <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
      round: 2,
      groupName: 'テストグループ'
    }],
    // 現在Round2なので1が過去結果
    [selectionsAtom, conflictSelections]]}>
        <div style={{
        width: '800px',
        height: '400px'
      }}>
          <PastDraftResults variant="pc" onEditClick={({
          userId,
          round
        }) => console.log('編集クリック:', {
          userId,
          round
        })} />
        </div>
      </HydrateAtoms>;
  }
}`,...(E=a.parameters)===null||E===void 0||(j=E.docs)===null||j===void 0?void 0:j.source},description:{story:`3人重複指名テストケース（重複指名解決機能の動作確認用）
Round 1で3人全員が同じアイテムを選択した状態`,...(M=a.parameters)===null||M===void 0||(H=M.docs)===null||H===void 0?void 0:H.description}}};const er=["PC","SP","NoResults","ThreeWayConflict"];export{d as NoResults,t as PC,s as SP,a as ThreeWayConflict,er as __namedExportsOrder,rr as default};
