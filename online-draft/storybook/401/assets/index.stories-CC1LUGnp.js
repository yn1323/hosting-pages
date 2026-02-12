import{j as a}from"./iframe-C_rgkzEe.js";import{T as D}from"./index.esm-ClM2GOLW.js";import{u as f,c as A,a as M}from"./states-C-6AC4D5.js";import{C as g}from"./index-C0Zx0b_D.js";import{u as x}from"./utils-BEbxvKYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2bVUVc_.js";import"./create-slot-recipe-context-D1cBH6vL.js";import"./index-e3sGAjzz.js";import"./factory-BjdDSQJN.js";import"./v-stack-BdZrG5lB.js";import"./h-stack-kLvObkFg.js";import"./index-DvCjFio_.js";var d,i,m,n,u,p,l,c,_,v;const t=o=>{const e=new Date;return e.setMinutes(e.getMinutes()-o),D.fromDate(e)},h=[{id:"user1",name:"タナカ",avatar:"1"},{id:"user2",name:"サトウ",avatar:"2"},{id:"user3",name:"ヤマダ",avatar:"3"}],C=[{userId:"user1",message:"こんにちは〜！今日のドラフト楽しみだね！",date:t(5)},{userId:"user2",message:"そうだね！誰を1番に指名する？",date:t(4)},{userId:"user1",message:"悩むな〜。みんなはどう？",date:t(3)},{userId:"user3",message:"私はもう決めてるよ〜",date:t(2)}],y=({initialValues:o,children:e})=>(x(o),e),R={title:"Features/draft/ChatMessageList",component:g,parameters:{layout:"padded"}},s={render:()=>a.jsx(y,{initialValues:[[f,h],[A,"user1"],[M,C]],children:a.jsx(g,{})})},r={render:()=>a.jsx(y,{initialValues:[[f,h],[A,"user1"],[M,[]]],children:a.jsx(g,{})})};s.parameters={...s.parameters,docs:{...(d=s.parameters)===null||d===void 0?void 0:d.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [chatsAtom, defaultChats]]}>
      <ChatMessageList />
    </HydrateAtoms>
}`,...(m=s.parameters)===null||m===void 0||(i=m.docs)===null||i===void 0?void 0:i.source},description:{story:`デフォルト表示
複数ユーザーの会話を表示`,...(u=s.parameters)===null||u===void 0||(n=u.docs)===null||n===void 0?void 0:n.description}}};r.parameters={...r.parameters,docs:{...(p=r.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  render: () => <HydrateAtoms initialValues={[[usersAtom, testUsers], [currentUserIdAtom, 'user1'], [chatsAtom, []] // 空のチャット
  ]}>
      <ChatMessageList />
    </HydrateAtoms>
}`,...(c=r.parameters)===null||c===void 0||(l=c.docs)===null||l===void 0?void 0:l.source},description:{story:`メッセージなし
チャットメッセージが空の状態`,...(v=r.parameters)===null||v===void 0||(_=v.docs)===null||_===void 0?void 0:_.description}}};const b=["Default","NoMessage"];export{s as Default,r as NoMessage,b as __namedExportsOrder,R as default};
