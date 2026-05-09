import{j as o,a as w}from"./iframe-BL_Yydyd.js";import{C as p,u as B}from"./index-CGhihYxL.js";import{V as T}from"./v-stack-iqUOjk1s.js";import"./preload-helper-Dp1pzeXC.js";import"./zod-CmTgn3Cd.js";import"./index-CWt2hU99.js";import"./factory-zvX3Td4z.js";import"./responsive-modal-Ds1Ys-Du.js";import"./index-c3ZsJOgq.js";import"./create-slot-recipe-context-ic8cnPD9.js";import"./render-strategy-Cgk3ahxR.js";import"./use-breakpoint-D813lraC.js";import"./index-DTmIaPXE.js";import"./index-Cu2H3L4w.js";var r,s,i;const{expect:l,screen:m,userEvent:v,within:x}=__STORYBOOK_MODULE_TEST__,S={title:"features/top/CreateRoomModal",component:p,parameters:{layout:"centered"}},f=()=>{const{openModal:a,modalProps:c}=B(),n=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return o.jsxs(T,{gap:4,children:[o.jsx(w,{onClick:a,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),o.jsx(p,{...c,onCreateRoom:n})]})},e={render:()=>o.jsx(f,{}),play:async({canvasElement:a})=>{const n=await x(a).findByText("ルーム作成モーダルを開く");await v.click(n),await new Promise(u=>setTimeout(u,500));const t=await m.findByText("キャンセル");await l(t).toBeInTheDocument();const d=await m.findByText("新しいルームを作成");await l(d).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...(r=e.parameters)===null||r===void 0?void 0:r.docs,source:{originalSource:`{
  render: () => <ModalWithHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // モーダルを開くボタンをクリック
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);

    // モーダルが開くまで待機
    await new Promise(resolve => setTimeout(resolve, 500));

    // モーダルがDOM全体に表示されているか確認（ポータルレンダリング対応）
    const cancelButton = await screen.findByText('キャンセル');
    await expect(cancelButton).toBeInTheDocument();
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
  }
}`,...(i=e.parameters)===null||i===void 0||(s=i.docs)===null||s===void 0?void 0:s.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,S as default};
