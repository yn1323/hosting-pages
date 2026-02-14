import{j as n,B as a}from"./iframe-CPNykFu4.js";import{B as t}from"./index-CB7rXg8w.js";import{V as l}from"./v-stack-ZFthQQXO.js";import{H as e}from"./h-stack-IZP0I_-8.js";import"./preload-helper-Dp1pzeXC.js";var o,i,s;const x={title:"Atoms/Button",component:t,parameters:{layout:"padded"}},r={render:()=>n.jsxs(l,{gap:6,align:"stretch",maxW:"md",children:[n.jsx(a,{children:n.jsxs(e,{gap:4,wrap:"wrap",children:[n.jsx(t,{variant:"primary",children:"プライマリ (Blue)"}),n.jsx(t,{variant:"secondary",children:"セカンダリ (Orange)"}),n.jsx(t,{variant:"accent",children:"アクセント (Pink)"}),n.jsx(t,{variant:"outline",children:"アウトライン"}),n.jsx(t,{variant:"ghost",children:"ゴースト"})]})}),n.jsx(a,{children:n.jsxs(e,{gap:4,align:"center",children:[n.jsx(t,{size:"sm",children:"小"}),n.jsx(t,{size:"md",children:"中"}),n.jsx(t,{size:"lg",children:"大"})]})}),n.jsx(a,{children:n.jsxs(e,{gap:4,wrap:"wrap",children:[n.jsx(t,{loading:!0,children:"ローディング"}),n.jsx(t,{disabled:!0,children:"無効化"})]})}),n.jsx(a,{children:n.jsxs(l,{gap:3,children:[n.jsx(t,{width:"full",children:"幅いっぱい"}),n.jsx(t,{width:"auto",children:"自動幅"})]})})]})};r.parameters={...r.parameters,docs:{...(o=r.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="md">
      {/* バリアント */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button variant="primary">プライマリ (Blue)</Button>
          <Button variant="secondary">セカンダリ (Orange)</Button>
          <Button variant="accent">アクセント (Pink)</Button>
          <Button variant="outline">アウトライン</Button>
          <Button variant="ghost">ゴースト</Button>
        </HStack>
      </Box>

      {/* サイズ */}
      <Box>
        <HStack gap={4} align="center">
          <Button size="sm">小</Button>
          <Button size="md">中</Button>
          <Button size="lg">大</Button>
        </HStack>
      </Box>

      {/* 状態 */}
      <Box>
        <HStack gap={4} wrap="wrap">
          <Button loading>ローディング</Button>
          <Button disabled>無効化</Button>
        </HStack>
      </Box>

      {/* 幅 */}
      <Box>
        <VStack gap={3}>
          <Button width="full">幅いっぱい</Button>
          <Button width="auto">自動幅</Button>
        </VStack>
      </Box>
    </VStack>
}`,...(s=r.parameters)===null||s===void 0||(i=s.docs)===null||i===void 0?void 0:i.source}}};const m=["AllVariants"];export{r as AllVariants,m as __namedExportsOrder,x as default};
