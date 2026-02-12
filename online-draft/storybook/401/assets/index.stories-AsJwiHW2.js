import{j as e,B as a}from"./iframe-C_rgkzEe.js";import{I as n}from"./index-B8p9ccOV.js";import{V as r}from"./v-stack-BdZrG5lB.js";import{T as l}from"./index-DvCjFio_.js";import"./preload-helper-Dp1pzeXC.js";import"./factory-BjdDSQJN.js";var o,s,p;const u={title:"Atoms/Input",component:n,parameters:{layout:"padded"}},t={render:()=>e.jsxs(r,{gap:6,align:"stretch",maxW:"md",children:[e.jsxs(a,{children:[e.jsx(l,{fontSize:"sm",mb:2,color:"gray.600",children:"基本"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"プレースホルダー"}),e.jsx(n,{placeholder:"入力済み",value:"入力済みテキスト"})]})]}),e.jsxs(a,{children:[e.jsx(l,{fontSize:"sm",mb:2,color:"gray.600",children:"サイズ"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"小サイズ",size:"sm"}),e.jsx(n,{placeholder:"中サイズ",size:"md"}),e.jsx(n,{placeholder:"大サイズ",size:"lg"})]})]}),e.jsxs(a,{children:[e.jsx(l,{fontSize:"sm",mb:2,color:"gray.600",children:"バリアント"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"アウトライン",variant:"outline"}),e.jsx(n,{placeholder:"サブトル",variant:"subtle"}),e.jsx(n,{placeholder:"フラッシュ",variant:"flushed"})]})]}),e.jsxs(a,{children:[e.jsx(l,{fontSize:"sm",mb:2,color:"gray.600",children:"タイプ"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"テキスト",type:"text"}),e.jsx(n,{placeholder:"メール",type:"email"}),e.jsx(n,{placeholder:"パスワード",type:"password"}),e.jsx(n,{placeholder:"数値",type:"number"})]})]}),e.jsxs(a,{children:[e.jsx(l,{fontSize:"sm",mb:2,color:"gray.600",children:"状態"}),e.jsxs(r,{gap:3,children:[e.jsx(n,{placeholder:"無効化",disabled:!0}),e.jsx(n,{placeholder:"必須",required:!0})]})]})]})};t.parameters={...t.parameters,docs:{...(o=t.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="md">
      {/* 基本 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          基本
        </Text>
        <VStack gap={3}>
          <Input placeholder="プレースホルダー" />
          <Input placeholder="入力済み" value="入力済みテキスト" />
        </VStack>
      </Box>

      {/* サイズ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          サイズ
        </Text>
        <VStack gap={3}>
          <Input placeholder="小サイズ" size="sm" />
          <Input placeholder="中サイズ" size="md" />
          <Input placeholder="大サイズ" size="lg" />
        </VStack>
      </Box>

      {/* バリアント */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          バリアント
        </Text>
        <VStack gap={3}>
          <Input placeholder="アウトライン" variant="outline" />
          <Input placeholder="サブトル" variant="subtle" />
          <Input placeholder="フラッシュ" variant="flushed" />
        </VStack>
      </Box>

      {/* タイプ */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          タイプ
        </Text>
        <VStack gap={3}>
          <Input placeholder="テキスト" type="text" />
          <Input placeholder="メール" type="email" />
          <Input placeholder="パスワード" type="password" />
          <Input placeholder="数値" type="number" />
        </VStack>
      </Box>

      {/* 状態 */}
      <Box>
        <Text fontSize="sm" mb={2} color="gray.600">
          状態
        </Text>
        <VStack gap={3}>
          <Input placeholder="無効化" disabled />
          <Input placeholder="必須" required />
        </VStack>
      </Box>
    </VStack>
}`,...(p=t.parameters)===null||p===void 0||(s=p.docs)===null||s===void 0?void 0:s.source}}};const j=["AllVariants"];export{t as AllVariants,j as __namedExportsOrder,u as default};
