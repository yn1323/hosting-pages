import{j as e}from"./iframe-C_rgkzEe.js";import{u as d,g as n,s as i}from"./states-C-6AC4D5.js";import{S as s}from"./index--GT4nQRb.js";import{u as W}from"./utils-BEbxvKYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./responsive-modal-DxvuhESA.js";import"./index-e3sGAjzz.js";import"./factory-BjdDSQJN.js";import"./create-slot-recipe-context-D1cBH6vL.js";import"./render-strategy-Dzi14LDJ.js";import"./use-breakpoint-FjEkCHs-.js";import"./v-stack-BdZrG5lB.js";import"./useModal-DGbiGf-9.js";import"./index-2Gxcs2Nh.js";import"./index-C2bVUVc_.js";import"./grid-UoGbtoX6.js";import"./index-DvCjFio_.js";import"./h-stack-kLvObkFg.js";var c,p,g,v,_,y,h,A,S,M,C,I,N,f,T,b,x,j,H,O;const $={title:"Features/draft/modals/StageModal",component:s,parameters:{screenshot:{skip:!0},layout:"centered"},tags:["autodocs"]},m=({initialValues:l,children:R})=>(W(l),R),u=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"佐藤花子",avatar:"2"},{id:"user3",name:"鈴木一郎",avatar:"3"},{id:"user4",name:"高橋次郎",avatar:"4"},{id:"user5",name:"山田美咲",avatar:"5"},{id:"user6",name:"中村翔太",avatar:"6"}],V=[{item:"大谷翔平",comment:"絶対的エース！",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"大谷翔平",comment:"私も大谷！",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"山田太郎",comment:"堅実な選択",round:4,userId:"user3",groupId:"group1",randomNumber:Math.random()},{item:"佐々木朗希",comment:"完全試合の男",round:4,userId:"user4",groupId:"group1",randomNumber:Math.random()},{item:"村上宗隆",comment:"ホームラン王",round:4,userId:"user5",groupId:"group1",randomNumber:Math.random()},{item:"ダルビッシュ有",comment:"変化球の魔術師",round:4,userId:"user6",groupId:"group1",randomNumber:Math.random()}],r={render:()=>e.jsx(m,{initialValues:[[d,u],[n,{round:4,groupName:"テストグループ"}],[i,V]],children:e.jsx(s,{isOpen:!0,variant:"card",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:8e3}}},o={render:()=>e.jsx(m,{initialValues:[[d,u],[n,{round:4,groupName:"テストグループ"}],[i,V]],children:e.jsx(s,{isOpen:!0,variant:"typing",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:6e3}}},t={render:()=>e.jsx(m,{initialValues:[[d,u],[n,{round:4,groupName:"テストグループ"}],[i,V]],children:e.jsx(s,{isOpen:!0,variant:"slot",onClose:()=>console.log("Modal closed")})}),parameters:{test:{timeout:3e4},chromatic:{delay:1e4}}},a={render:()=>{const l=[{item:"重複指名アイテム",comment:"コメントA",round:2,userId:"user1",groupId:"group1",randomNumber:100},{item:"重複指名アイテム",comment:"コメントB",round:2,userId:"user2",groupId:"group1",randomNumber:50},{item:"重複指名アイテム",comment:"コメントC",round:2,userId:"user3",groupId:"group1",randomNumber:30}];return e.jsx(m,{initialValues:[[d,u],[n,{round:3,groupName:"テストグループ"}],[i,l]],children:e.jsx(s,{isOpen:!0,onClose:()=>{},variant:"card"})})},parameters:{chromatic:{delay:3e3}}};r.parameters={...r.parameters,docs:{...(c=r.parameters)===null||c===void 0?void 0:c.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="card" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 8000 // 8秒待機（カードめくりアニメーション用）
    }
  }
}`,...(g=r.parameters)===null||g===void 0||(p=g.docs)===null||p===void 0?void 0:p.source},description:{story:"カードめくり演出パターン",...(_=r.parameters)===null||_===void 0||(v=_.docs)===null||v===void 0?void 0:v.description}}};o.parameters={...o.parameters,docs:{...(y=o.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="typing" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 6000 // 6秒待機（タイピングアニメーション用）
    }
  }
}`,...(A=o.parameters)===null||A===void 0||(h=A.docs)===null||h===void 0?void 0:h.source},description:{story:"タイピング演出パターン",...(M=o.parameters)===null||M===void 0||(S=M.docs)===null||S===void 0?void 0:S.description}}};t.parameters={...t.parameters,docs:{...(C=t.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, currentRoundSelections]]}>
      <StageModal isOpen={true} variant="slot" onClose={() => console.log('Modal closed')} />
    </HydrateAtoms>,
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000 // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 10000 // 10秒待機（スロットマシンアニメーション用）
    }
  }
}`,...(N=t.parameters)===null||N===void 0||(I=N.docs)===null||I===void 0?void 0:I.source},description:{story:"スロットマシン演出パターン",...(T=t.parameters)===null||T===void 0||(f=T.docs)===null||f===void 0?void 0:f.description}}};a.parameters={...a.parameters,docs:{...(b=a.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const conflictSelections: SelectionAtom[] = [{
      item: '重複指名アイテム',
      comment: 'コメントA',
      round: 2,
      // 現在のラウンド
      userId: 'user1',
      groupId: 'group1',
      randomNumber: 100 // 最大値（勝者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントB',
      round: 2,
      // 現在のラウンド
      userId: 'user2',
      groupId: 'group1',
      randomNumber: 50 // 中間値（敗者）
    }, {
      item: '重複指名アイテム',
      comment: 'コメントC',
      round: 2,
      // 現在のラウンド
      userId: 'user3',
      groupId: 'group1',
      randomNumber: 30 // 最小値（敗者）
    }];
    return <HydrateAtoms initialValues={[[usersAtom, testUsers], [groupAtom, {
      round: 3,
      groupName: 'テストグループ'
    }],
    // 現在Round3、表示はRound2の結果
    [selectionsAtom, conflictSelections]]}>
        <StageModal isOpen={true} onClose={() => {}} variant="card" />
      </HydrateAtoms>;
  },
  parameters: {
    chromatic: {
      delay: 3000 // 3秒待機（カード演出用）
    }
  }
}`,...(j=a.parameters)===null||j===void 0||(x=j.docs)===null||x===void 0?void 0:x.source},description:{story:`3人重複指名テストケース
3人が同じアイテムを選択した場合の演出確認
randomNumber最大の人が勝者（緑）、他の2人が敗者（赤）`,...(O=a.parameters)===null||O===void 0||(H=O.docs)===null||H===void 0?void 0:H.description}}};const ee=["Card","Typing","SlotMachine","ThreeWayConflict"];export{r as Card,t as SlotMachine,a as ThreeWayConflict,o as Typing,ee as __namedExportsOrder,$ as default};
