import{j as o,a as w}from"./iframe-esjyWdrP.js";import{C as p,u as B}from"./index-OnQ3CTXj.js";import{V as T}from"./v-stack-nqXe-XpQ.js";import"./preload-helper-Dp1pzeXC.js";import"./zod-ctz8fUaX.js";import"./index-B-oLirYx.js";import"./factory-tkGIaEWB.js";import"./responsive-modal-DiW0jmqK.js";import"./index-DiuPbgHV.js";import"./create-slot-recipe-context-DXQUbvZL.js";import"./render-strategy-BFgpZRCM.js";import"./use-breakpoint-U2FgxzST.js";import"./index-P2yQRGn6.js";var r,s,i;const{expect:l,screen:m,userEvent:v,within:x}=__STORYBOOK_MODULE_TEST__,P={title:"features/top/CreateRoomModal",component:p,parameters:{layout:"centered"}},f=()=>{const{openModal:a,modalProps:c}=B(),n=async t=>{console.log("ルーム作成:",t),alert(`ルーム "${t}" を作成しました！`)};return o.jsxs(T,{gap:4,children:[o.jsx(w,{onClick:a,colorPalette:"blue",size:"lg",children:"ルーム作成モーダルを開く"}),o.jsx(p,{...c,onCreateRoom:n})]})},e={render:()=>o.jsx(f,{}),play:async({canvasElement:a})=>{const n=await x(a).findByText("ルーム作成モーダルを開く");await v.click(n),await new Promise(u=>setTimeout(u,500));const t=await m.findByText("キャンセル");await l(t).toBeInTheDocument();const d=await m.findByText("新しいルームを作成");await l(d).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...(r=e.parameters)===null||r===void 0?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=e.parameters)===null||i===void 0||(s=i.docs)===null||s===void 0?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
