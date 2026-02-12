import{j as e}from"./iframe-C_rgkzEe.js";import{u as C,c as f,g as V,s as y}from"./states-C-6AC4D5.js";import{C as s}from"./index-DWb9IOAR.js";import{u as j}from"./utils-BEbxvKYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2bVUVc_.js";import"./create-slot-recipe-context-D1cBH6vL.js";import"./index-e3sGAjzz.js";import"./factory-BjdDSQJN.js";import"./index-DA8pZe5w.js";import"./index-BLk1nnUV.js";import"./card-5bvOAfB8.js";import"./v-stack-BdZrG5lB.js";import"./h-stack-kLvObkFg.js";import"./index-DvCjFio_.js";var a,n,u,d,l,m,i,c,p,v,_,A,g,S,I;const R=({initialValues:P,children:h})=>(j(P),h),N=[{id:"user1",name:"田中太郎",avatar:"1"},{id:"user2",name:"山田花子",avatar:"3"},{id:"user3",name:"佐藤次郎",avatar:"5"}],x=[{item:"候補A (タイプB)",comment:"いい選択です",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補B (タイプA)",comment:"これもいいね",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()}],H=[{item:"候補A (タイプB)",comment:"いい選択です",round:4,userId:"user1",groupId:"group1",randomNumber:Math.random()},{item:"候補B (タイプA)",comment:"これもいいね",round:4,userId:"user2",groupId:"group1",randomNumber:Math.random()},{item:"候補C (タイプC)",comment:"最高の選択",round:4,userId:"user3",groupId:"group1",randomNumber:Math.random()}],L={title:"Features/draft/CurrentRoundStatus",component:s,parameters:{layout:"centered"}},r={render:()=>e.jsx(R,{initialValues:[[C,N],[f,"user1"],[V,{round:4,groupName:"テストグループ"}],[y,x]],children:e.jsx(s,{variant:"sp",onItemSelect:()=>console.log("アイテム選択"),onOpenResult:()=>console.log("開票")})})},o={render:()=>e.jsx(R,{initialValues:[[C,N],[f,"user1"],[V,{round:4,groupName:"テストグループ"}],[y,x]],children:e.jsx(s,{variant:"pc",onItemSelect:()=>console.log("アイテム選択"),onOpenResult:()=>console.log("開票")})})},t={render:()=>e.jsx(R,{initialValues:[[C,N],[f,"user1"],[V,{round:4,groupName:"テストグループ"}],[y,H]],children:e.jsx(s,{variant:"sp",onOpenResult:()=>console.log("開票")})})};r.parameters={...r.parameters,docs:{...(a=r.parameters)===null||a===void 0?void 0:a.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, testSelections]]}>
      <CurrentRoundStatus variant="sp" onItemSelect={() => console.log('アイテム選択')} onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(u=r.parameters)===null||u===void 0||(n=u.docs)===null||n===void 0?void 0:n.source},description:{story:`デフォルト表示（SP版）
一部のユーザーが選択完了している状態`,...(l=r.parameters)===null||l===void 0||(d=l.docs)===null||d===void 0?void 0:d.description}}};o.parameters={...o.parameters,docs:{...(m=o.parameters)===null||m===void 0?void 0:m.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, testSelections]]}>
      <CurrentRoundStatus variant="pc" onItemSelect={() => console.log('アイテム選択')} onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(c=o.parameters)===null||c===void 0||(i=c.docs)===null||i===void 0?void 0:i.source},description:{story:`PC版表示
デスクトップでの表示確認用`,...(v=o.parameters)===null||v===void 0||(p=v.docs)===null||p===void 0?void 0:p.description}}};t.parameters={...t.parameters,docs:{...(_=t.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [groupAtom, {
    round: 4,
    groupName: 'テストグループ'
  }], [selectionsAtom, allSelectedSelections]]}>
      <CurrentRoundStatus variant="sp" onOpenResult={() => console.log('開票')} />
    </HydrateAtoms>
}`,...(g=t.parameters)===null||g===void 0||(A=g.docs)===null||A===void 0?void 0:A.source},description:{story:`全員選択完了
全参加者が選択を完了した状態`,...(I=t.parameters)===null||I===void 0||(S=I.docs)===null||S===void 0?void 0:S.description}}};const Q=["Default","PCVersion","AllSelected"];export{t as AllSelected,r as Default,o as PCVersion,Q as __namedExportsOrder,L as default};
