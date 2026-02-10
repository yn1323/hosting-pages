import{S as u}from"./index-Cim77PDd.js";import"./iframe-esjyWdrP.js";import"./preload-helper-Dp1pzeXC.js";import"./responsive-modal-DiW0jmqK.js";import"./index-DiuPbgHV.js";import"./factory-tkGIaEWB.js";import"./create-slot-recipe-context-DXQUbvZL.js";import"./render-strategy-BFgpZRCM.js";import"./use-breakpoint-U2FgxzST.js";import"./v-stack-nqXe-XpQ.js";import"./toaster-BZXBCqGO.js";import"./useModal-BEUe6V9D.js";import"./index-P2yQRGn6.js";import"./h-stack-DYnq2kG5.js";var r,a,t,s,n,p,i,l,m,d;const k={title:"Features/draft/modals/ShareModal",component:u,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"テストドラフトグループ"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}},e={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}};o.parameters={...o.parameters,docs:{...(r=o.parameters)===null||r===void 0?void 0:r.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName: 'テストドラフトグループ'
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve()
        }
      }
    }
  }
}`,...(t=o.parameters)===null||t===void 0||(a=t.docs)===null||a===void 0?void 0:a.source},description:{story:"基本パターン",...(n=o.parameters)===null||n===void 0||(s=n.docs)===null||s===void 0?void 0:s.description}}};e.parameters={...e.parameters,docs:{...(p=e.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName: 'とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。'
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve()
        }
      }
    }
  }
}`,...(l=e.parameters)===null||l===void 0||(i=l.docs)===null||i===void 0?void 0:i.source},description:{story:"長いグループ名パターン",...(d=e.parameters)===null||d===void 0||(m=d.docs)===null||m===void 0?void 0:m.description}}};const w=["Default","LongGroupName"];export{o as Default,e as LongGroupName,w as __namedExportsOrder,k as default};
