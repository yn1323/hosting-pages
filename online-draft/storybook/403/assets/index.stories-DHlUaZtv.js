import{S as u}from"./index-uL-8Iy-I.js";import"./iframe-CPNykFu4.js";import"./preload-helper-Dp1pzeXC.js";import"./responsive-modal-DETIp2Db.js";import"./index-teljsW8k.js";import"./factory-DuFKs9iv.js";import"./create-slot-recipe-context-Cc8kd0Ma.js";import"./render-strategy-O1XzUZnd.js";import"./use-breakpoint-CqXmPAaL.js";import"./v-stack-ZFthQQXO.js";import"./toaster-DFNY2rhd.js";import"./config-2YLRfvKg.js";import"./useModal-JLMgYJoB.js";import"./index-DFT-raW7.js";import"./index-DeSftEHM.js";var r,a,t,s,n,p,i,m,l,d;const w={title:"Features/draft/modals/ShareModal",component:u,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"テストドラフトグループ"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}},e={args:{isOpen:!0,onClose:()=>console.log("Modal closed"),groupId:"example-group-id",groupName:"とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。"},parameters:{mockData:{navigator:{clipboard:{writeText:()=>Promise.resolve()}}}}};o.parameters={...o.parameters,docs:{...(r=o.parameters)===null||r===void 0?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=e.parameters)===null||m===void 0||(i=m.docs)===null||i===void 0?void 0:i.source},description:{story:"長いグループ名パターン",...(d=e.parameters)===null||d===void 0||(l=d.docs)===null||l===void 0?void 0:l.description}}};const C=["Default","LongGroupName"];export{o as Default,e as LongGroupName,C as __namedExportsOrder,w as default};
