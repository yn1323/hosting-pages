import{T as e}from"./index.esm-ClM2GOLW.js";import{P as f}from"./index-Bp3spJU-.js";import"./iframe-C_rgkzEe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2bVUVc_.js";import"./create-slot-recipe-context-D1cBH6vL.js";import"./index-e3sGAjzz.js";import"./factory-BjdDSQJN.js";import"./index-BLk1nnUV.js";import"./card-5bvOAfB8.js";import"./h-stack-kLvObkFg.js";import"./index-DvCjFio_.js";import"./v-stack-BdZrG5lB.js";import"./simple-grid-j66pcus2.js";import"./grid-UoGbtoX6.js";var o,s,i,n,d,p,m,c,u,l,v,_,D,g,A;const b={title:"features/lobby/ParticipantsList",component:f,parameters:{layout:"centered"}},T=[{userId:"user1",userName:"たろう",groupId:"group123",avatar:"1",joinedAt:e.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:00:00Z")),isActive:!0},{userId:"user2",userName:"はなこ",groupId:"group123",avatar:"2",joinedAt:e.fromDate(new Date("2024-06-17T10:05:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:05:00Z")),isActive:!0},{userId:"user3",userName:"じろう",groupId:"group123",avatar:"3",joinedAt:e.fromDate(new Date("2024-06-17T10:10:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:10:00Z")),isActive:!1}],r={args:{users:T,onJoinClick:()=>console.log("Join clicked")}},a={args:{users:[],onJoinClick:()=>console.log("Join clicked")}},t={args:{users:[...T,{userId:"user4",userName:"さぶろう",groupId:"group123",avatar:"4",joinedAt:e.fromDate(new Date("2024-06-17T10:15:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:15:00Z")),isActive:!0},{userId:"user5",userName:"みか",groupId:"group123",avatar:"5",joinedAt:e.fromDate(new Date("2024-06-17T10:20:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:20:00Z")),isActive:!0},{userId:"user6",userName:"けんじ",groupId:"group123",avatar:"6",joinedAt:e.fromDate(new Date("2024-06-17T10:25:00Z")),updatedAt:e.fromDate(new Date("2024-06-17T10:25:00Z")),isActive:!1}],onJoinClick:()=>console.log("Join clicked")}};r.parameters={...r.parameters,docs:{...(o=r.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(i=r.parameters)===null||i===void 0||(s=i.docs)===null||s===void 0?void 0:s.source},description:{story:"基本の参加者一覧表示（3人）",...(d=r.parameters)===null||d===void 0||(n=d.docs)===null||n===void 0?void 0:n.description}}};a.parameters={...a.parameters,docs:{...(p=a.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  args: {
    users: [],
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(c=a.parameters)===null||c===void 0||(m=c.docs)===null||m===void 0?void 0:m.source},description:{story:"参加者なし（新規ルーム）",...(l=a.parameters)===null||l===void 0||(u=l.docs)===null||u===void 0?void 0:u.description}}};t.parameters={...t.parameters,docs:{...(v=t.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  args: {
    users: [...mockUsers, {
      userId: 'user4',
      userName: 'さぶろう',
      groupId: 'group123',
      avatar: '4',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
      isActive: true
    }, {
      userId: 'user5',
      userName: 'みか',
      groupId: 'group123',
      avatar: '5',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
      isActive: true
    }, {
      userId: 'user6',
      userName: 'けんじ',
      groupId: 'group123',
      avatar: '6',
      joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
      updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
      isActive: false
    }],
    onJoinClick: () => console.log('Join clicked')
  }
}`,...(D=t.parameters)===null||D===void 0||(_=D.docs)===null||_===void 0?void 0:_.source},description:{story:"多くの参加者（6人）",...(A=t.parameters)===null||A===void 0||(g=A.docs)===null||g===void 0?void 0:g.description}}};const x=["Basic","Empty","ManyParticipants"];export{r as Basic,a as Empty,t as ManyParticipants,x as __namedExportsOrder,b as default};
