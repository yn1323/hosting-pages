import{c as H,d as W,b as ao,s as P,T as t}from"./index.esm-ClM2GOLW.js";import{r as L,j as e,B as M}from"./iframe-CPNykFu4.js";import{B as no}from"./index-CB7rXg8w.js";import{L as to}from"./index-Dlvphpuz.js";import{u as so}from"./toaster-DFNY2rhd.js";import{d as z,v as f,a as io}from"./common-CxXojnM3.js";import{u as uo}from"./useFirebaseAuth-CH35qCwa.js";import{L as lo,a as mo,u as co}from"./useRealtimeUsers-D6i33yZj.js";import{C as T,L as po,u as go}from"./navigation-0SFJYBLy.js";import{A as fo}from"./index-DqD1pOI4.js";import{P as vo}from"./index-3gwikQGc.js";import{R as Co}from"./index-BMDuVqtK.js";import{n as $}from"./index-DFT-raW7.js";import{V as Z}from"./v-stack-ZFthQQXO.js";import{T as _}from"./index-DeSftEHM.js";import{H as yo}from"./h-stack-IZP0I_-8.js";import"./preload-helper-Dp1pzeXC.js";import"./config-2YLRfvKg.js";import"./use-merged-ref-DuAuqPT6.js";import"./zod-CJOOa1KA.js";import"./index-DINeRgO7.js";import"./create-slot-recipe-context-Cc8kd0Ma.js";import"./index-teljsW8k.js";import"./factory-DuFKs9iv.js";import"./index-BGCE8b3C.js";import"./responsive-modal-DETIp2Db.js";import"./render-strategy-O1XzUZnd.js";import"./use-breakpoint-CqXmPAaL.js";import"./simple-grid-K-977ZjU.js";import"./grid-CFy8adA8.js";import"./index-z05DsOaL.js";import"./card-BWzLt1o7.js";const _o=()=>{const o=H(z,"_temp");return W(o).id},Ao=()=>{const o=H(z,"app/onlinedraft/user");return{createUser:L.useCallback(async(s,i,u,n)=>{f(s,"グループID"),f(i,"ユーザー名"),io(i,20,"ユーザー名"),f(u,"アバター"),f(n,"ユーザーID");const m={userId:n,userName:i.trim(),groupId:s.trim(),avatar:u.trim()};try{const r=W(o,n);await ao(r,{...m,joinedAt:P(),updatedAt:P()})}catch(r){throw r instanceof Error?new Error(`ユーザー作成に失敗しました: ${r.message}`):new Error("ユーザー作成中に予期しないエラーが発生しました")}},[o]),userCollection:o}},v=({group:o,users:a,roomUrl:s,isAvatarModalOpen:i,usedAvatars:u,onJoinClick:n,onUserSelect:m,onAvatarModalClose:r,onJoinConfirm:C})=>{const l=$("lobby");return o?e.jsxs(M,{bg:"gray.50",minH:"100vh",py:[4,8],children:[e.jsx(T,{maxW:"container.lg",children:e.jsxs(Z,{gap:6,w:"full",children:[e.jsxs(yo,{w:"full",justify:"space-between",align:"center",children:[e.jsx(_,{fontSize:["xl","2xl"],fontWeight:"bold",color:"gray.800",children:l("page.title")}),e.jsx(lo,{})]}),e.jsx(Co,{group:o,roomUrl:s}),e.jsx(vo,{users:a||[],onJoinClick:n,onUserSelect:m}),e.jsx(po,{href:"/",children:e.jsx(no,{variant:"outline",size:"sm",children:l("page.leaveRoom")})})]})}),e.jsx(fo,{isOpen:i,onClose:r,onConfirm:C,usedAvatars:u})]}):e.jsx(M,{bg:"gray.50",minH:"100vh",py:[4,8],children:e.jsx(T,{maxW:"container.lg",children:e.jsxs(Z,{gap:6,children:[e.jsx(_,{fontSize:["xl","2xl"],fontWeight:"bold",color:"red.600",children:l("page.notFound")}),e.jsx(_,{color:"gray.600",children:l("page.notFoundDescription")})]})})})},G=({groupId:o})=>{const a=$("lobby"),{isAuthenticated:s,signInAnonymous:i,loading:u}=uo(),{group:n,loading:m}=mo(o),{users:r,loading:C}=co(o),{createUser:l}=Ao(),N=go(),[Q,S]=L.useState(!1),{errorToast:O,successToast:V}=so();L.useEffect(()=>{},[s,u,i,O,a]);const X=window.location.href,Y=m||C||!1,oo=(r==null?void 0:r.map(d=>d.avatar))||[],eo=async d=>{const q=_o();try{await l(o,d.name,d.avatar,q),sessionStorage.setItem("onlinedraft_user_id",q),N.push(`/draft/${o}`),V(a("toast.joined"))}catch(y){console.error(a("toast.joinError"),y),O(y instanceof Error?y.message:a("toast.joinFailed"))}},ro=d=>{sessionStorage.setItem("onlinedraft_user_id",d),N.push(`/draft/${o}`),V(a("toast.joined"))};return Y||!s||u||!n?e.jsx(M,{bg:"gray.50",minH:"100vh",py:[4,8],children:e.jsx(T,{maxW:"container.lg",children:e.jsx(to,{message:a("loading")})})}):e.jsx(v,{group:n,users:r,roomUrl:X,isAvatarModalOpen:Q,usedAvatars:oo,onJoinClick:()=>S(!0),onUserSelect:ro,onAvatarModalClose:()=>S(!1),onJoinConfirm:eo})};try{v.displayName="LobbyPageInner",v.__docgenInfo={description:`ロビー画面Innerコンポーネント（Presenter）
UI描画のみを担当、propsでデータとハンドラーを受け取る
Firebaseやビジネスロジックには依存しない純粋なUIコンポーネント`,displayName:"LobbyPageInner",props:{group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"GroupDataType | null"}},users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"UserDataType[] | null"}},roomUrl:{defaultValue:null,description:"",name:"roomUrl",required:!0,type:{name:"string"}},isAvatarModalOpen:{defaultValue:null,description:"",name:"isAvatarModalOpen",required:!0,type:{name:"boolean"}},usedAvatars:{defaultValue:null,description:"",name:"usedAvatars",required:!0,type:{name:"string[]"}},onJoinClick:{defaultValue:null,description:"",name:"onJoinClick",required:!0,type:{name:"() => void"}},onUserSelect:{defaultValue:null,description:"",name:"onUserSelect",required:!0,type:{name:"(userId: string) => void"}},onAvatarModalClose:{defaultValue:null,description:"",name:"onAvatarModalClose",required:!0,type:{name:"() => void"}},onJoinConfirm:{defaultValue:null,description:"",name:"onJoinConfirm",required:!0,type:{name:"(userData: { name: string; avatar: string; }) => void"}}}}}catch{}try{G.displayName="LobbyPage",G.__docgenInfo={description:`ロビー画面コンポーネント（Container）
ロジック・データ取得・認証のみを担当
LobbyPageInnerにpropsを渡すのみ`,displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}var A,F,D,b,h,x,j,B,R,J,E,w,U,I,k;const oe={title:"features/lobby/LobbyPage",component:v,parameters:{layout:"fullscreen"}},K={groupName:"2024年プロ野球ドラフト",deleteFlg:!1,finishedRound:[],round:1,createdAt:t.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:t.fromDate(new Date("2024-06-17T10:00:00Z"))},Fo=[{userId:"user1",userName:"たろう",groupId:"group123",avatar:"1",joinedAt:t.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:t.fromDate(new Date("2024-06-17T10:00:00Z")),isActive:!0},{userId:"user2",userName:"はなこ",groupId:"group123",avatar:"2",joinedAt:t.fromDate(new Date("2024-06-17T10:05:00Z")),updatedAt:t.fromDate(new Date("2024-06-17T10:05:00Z")),isActive:!0},{userId:"user3",userName:"じろう",groupId:"group123",avatar:"3",joinedAt:t.fromDate(new Date("2024-06-17T10:10:00Z")),updatedAt:t.fromDate(new Date("2024-06-17T10:10:00Z")),isActive:!1}],c={args:{group:K,users:Fo,roomUrl:"https://onlinedraft.com/lobby/abc123",isAvatarModalOpen:!1,usedAvatars:["1","2","3"],onJoinClick:()=>console.log("Join clicked"),onAvatarModalClose:()=>console.log("Avatar modal closed"),onJoinConfirm:o=>console.log("Join confirmed:",o)}},p={args:{group:null,users:null,roomUrl:"",isAvatarModalOpen:!1,usedAvatars:[],onJoinClick:()=>{},onAvatarModalClose:()=>{},onJoinConfirm:()=>{}}},g={args:{group:{...K,groupName:"新規作成ルーム"},users:[],roomUrl:"https://onlinedraft.com/lobby/newroom123",isAvatarModalOpen:!1,usedAvatars:[],onJoinClick:()=>console.log("Join clicked"),onAvatarModalClose:()=>console.log("Avatar modal closed"),onJoinConfirm:o=>console.log("Join confirmed:",o)}};c.parameters={...c.parameters,docs:{...(A=c.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    users: mockUsers,
    roomUrl: 'https://onlinedraft.com/lobby/abc123',
    isAvatarModalOpen: false,
    usedAvatars: ['1', '2', '3'],
    onJoinClick: () => console.log('Join clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: {
      name: string;
      avatar: string;
    }) => console.log('Join confirmed:', userData)
  }
}`,...(D=c.parameters)===null||D===void 0||(F=D.docs)===null||F===void 0?void 0:F.source},description:{story:`基本のロビーページ表示（3人参加）
Firebaseロジックを含まない純粋なUIテスト`,...(h=c.parameters)===null||h===void 0||(b=h.docs)===null||b===void 0?void 0:b.description}}};p.parameters={...p.parameters,docs:{...(x=p.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  args: {
    group: null,
    users: null,
    roomUrl: '',
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => {},
    onAvatarModalClose: () => {},
    onJoinConfirm: () => {}
  }
}`,...(B=p.parameters)===null||B===void 0||(j=B.docs)===null||j===void 0?void 0:j.source},description:{story:"ルームが見つからない状態",...(J=p.parameters)===null||J===void 0||(R=J.docs)===null||R===void 0?void 0:R.description}}};g.parameters={...g.parameters,docs:{...(E=g.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  args: {
    group: {
      ...mockGroup,
      groupName: '新規作成ルーム'
    },
    users: [],
    roomUrl: 'https://onlinedraft.com/lobby/newroom123',
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => console.log('Join clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: {
      name: string;
      avatar: string;
    }) => console.log('Join confirmed:', userData)
  }
}`,...(U=g.parameters)===null||U===void 0||(w=U.docs)===null||w===void 0?void 0:w.source},description:{story:"参加者なし（新規ルーム）",...(k=g.parameters)===null||k===void 0||(I=k.docs)===null||I===void 0?void 0:I.description}}};const ee=["Basic","RoomNotFound","EmptyRoom"];export{c as Basic,g as EmptyRoom,p as RoomNotFound,ee as __namedExportsOrder,oe as default};
