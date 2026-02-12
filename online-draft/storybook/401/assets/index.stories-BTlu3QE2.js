const d=()=>null;var s,t,n,r,o,c;const i={title:"Layout/ThemeToggle",component:d,parameters:{layout:"fullscreen"},tags:["skip-test"]},e={},a={};e.parameters={...e.parameters,docs:{...(s=e.parameters)===null||s===void 0?void 0:s.docs,source:{originalSource:"{}",...(n=e.parameters)===null||n===void 0||(t=n.docs)===null||t===void 0?void 0:t.source}}};a.parameters={...a.parameters,docs:{...(r=a.parameters)===null||r===void 0?void 0:r.docs,source:{originalSource:`{
  // ライトモード強制時はplayテストを無効化
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   // 少し待ってから設定アイコンをクリック
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   const settingsButton = await canvas.findByLabelText('テーマ設定を開く');
  //   await userEvent.click(settingsButton);
  // },
}`,...(c=a.parameters)===null||c===void 0||(o=c.docs)===null||o===void 0?void 0:o.source}}};const l=["Basic","Expanded"];export{e as Basic,a as Expanded,l as __namedExportsOrder,i as default};
