import{T as l}from"./index.esm-ClM2GOLW.js";import{R as _}from"./index-CGGJpAwn.js";import"./iframe-COcqzGrj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2p2MS_D.js";import"./card-DU19frtb.js";import"./create-slot-recipe-context-Bnqxr7JM.js";import"./toaster-CwL9RL0U.js";import"./index-Bf8M5Nh4.js";import"./v-stack-B7LUPPxa.js";import"./index-znfn4JnW.js";var e,a,t,m,s,n,i,p,d,c;const T={title:"features/lobby/RoomInfo",component:_,parameters:{layout:"centered"}},u={groupName:"2024年プロ野球ドラフト",deleteFlg:!1,finishedRound:[],round:1,createdAt:l.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:l.fromDate(new Date("2024-06-17T10:00:00Z"))},o={args:{group:u,roomUrl:"https://onlinedraft.com/lobby/abc123"}},r={args:{group:{...u,groupName:"2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション"},roomUrl:"https://onlinedraft.com/lobby/abc123"}};o.parameters={...o.parameters,docs:{...(e=o.parameters)===null||e===void 0?void 0:e.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(t=o.parameters)===null||t===void 0||(a=t.docs)===null||a===void 0?void 0:a.source},description:{story:"基本のルーム情報表示",...(s=o.parameters)===null||s===void 0||(m=s.docs)===null||m===void 0?void 0:m.description}}};r.parameters={...r.parameters,docs:{...(n=r.parameters)===null||n===void 0?void 0:n.docs,source:{originalSource:`{
  args: {
    group: {
      ...mockGroup,
      groupName: '2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション'
    },
    roomUrl: 'https://onlinedraft.com/lobby/abc123'
  }
}`,...(p=r.parameters)===null||p===void 0||(i=p.docs)===null||i===void 0?void 0:i.source},description:{story:"長いルーム名の場合",...(c=r.parameters)===null||c===void 0||(d=c.docs)===null||d===void 0?void 0:d.description}}};const U=["Basic","LongRoomName"];export{o as Basic,r as LongRoomName,U as __namedExportsOrder,T as default};
