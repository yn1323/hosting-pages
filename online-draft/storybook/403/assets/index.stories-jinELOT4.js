import{r as R,j as e,B as i,a as S}from"./iframe-CPNykFu4.js";import{S as K}from"./index-_BsFM55Z.js";import{V as x}from"./v-stack-ZFthQQXO.js";import{T as o}from"./index-DeSftEHM.js";import{H as D}from"./h-stack-IZP0I_-8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DINeRgO7.js";import"./use-merged-ref-DuAuqPT6.js";import"./create-slot-recipe-context-Cc8kd0Ma.js";import"./index-teljsW8k.js";import"./factory-DuFKs9iv.js";import"./use-breakpoint-CqXmPAaL.js";import"./grid-CFy8adA8.js";var y,C,_,k,b,T,w,j,P,M,V,B,L,H,I,W,z,A,O,E,X;const{fn:a}=__STORYBOOK_MODULE_TEST__,u=[{id:"1",name:"田中太郎",avatar:"1",choice:"ポケットモンスターブラック",willLose:!1},{id:"2",name:"佐藤花子",avatar:"2",choice:"ドラゴンクエストXI",willLose:!1},{id:"3",name:"鈴木一郎",avatar:"3",choice:"ファイナルファンタジーXIV",willLose:!1},{id:"4",name:"高橋次郎",avatar:"4",choice:"スーパーマリオオデッセイ",willLose:!1},{id:"5",name:"山田美咲",avatar:"5",choice:"ゼルダの伝説ブレスオブザワイルド",willLose:!1},{id:"6",name:"中村健太",avatar:"6",choice:"スプラトゥーン3",willLose:!1}],g=[{id:"1",name:"田中太郎",avatar:"1",choice:"ポケットモンスターブラック",willLose:!1},{id:"2",name:"佐藤花子",avatar:"2",choice:"ポケットモンスターブラック",willLose:!0},{id:"3",name:"鈴木一郎",avatar:"3",choice:"ファイナルファンタジーXIV",willLose:!1},{id:"4",name:"高橋次郎",avatar:"4",choice:"スーパーマリオオデッセイ",willLose:!1},{id:"5",name:"山田美咲",avatar:"5",choice:"ゼルダの伝説ブレスオブザワイルド",willLose:!1},{id:"6",name:"中村健太",avatar:"6",choice:"ファイナルファンタジーXIV",willLose:!0}],pe={title:"features/draft/modals/StageModal/Stage",component:K,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["card","typing","slot"]},participants:{control:"object"}}},s={parameters:{screenshot:{skip:!0}},render:()=>{var f;const[h,U]=R.useState("card"),[n,F]=R.useState(!1),Y=n?g:u,[q,r]=R.useState(!1),G=()=>{r(!0)},J=()=>{r(!1)},N=[{key:"card",label:"Card Flip",color:"purple"},{key:"typing",label:"Terminal Type",color:"gray"},{key:"slot",label:"Slot Machine",color:"red"}];return e.jsx(i,{bg:"gray.50",minH:"100vh",p:6,children:e.jsxs(x,{gap:6,maxW:"800px",mx:"auto",children:[e.jsxs(x,{gap:4,children:[e.jsx(o,{fontSize:"3xl",fontWeight:"bold",color:"gray.800",children:"Opening Result Animation Competition"}),e.jsx(o,{color:"gray.600",textAlign:"center",children:"Compare 4 different animation patterns and choose the most exciting one!"})]}),e.jsx(D,{gap:4,wrap:"wrap",justify:"center",children:N.map(t=>e.jsx(S,{colorPalette:t.color,variant:h===t.key?"solid":"outline",onClick:()=>{U(t.key),r(!1)},size:"lg",children:t.label},t.key))}),e.jsxs(x,{gap:3,children:[e.jsx(i,{bg:"white",p:4,borderRadius:"lg",boxShadow:"md",textAlign:"center",children:e.jsxs(o,{fontSize:"lg",fontWeight:"bold",color:"gray.700",children:["Currently Selected:"," ",(f=N.find(t=>t.key===h))===null||f===void 0?void 0:f.label]})}),e.jsxs(D,{gap:4,children:[e.jsx(S,{colorPalette:n?"gray":"blue",variant:n?"outline":"solid",onClick:()=>{F(!1),r(!1)},children:"Normal Pattern"}),e.jsx(S,{colorPalette:n?"red":"gray",variant:n?"solid":"outline",onClick:()=>{F(!0),r(!1)},children:"Conflict Pattern"})]})]}),e.jsx(i,{bg:"white",borderRadius:"xl",boxShadow:"xl",p:6,w:"full",children:e.jsx(K,{variant:h,participants:Y,isRevealing:q,onStartReveal:G,onReset:J})}),e.jsxs(i,{bg:"blue.50",p:6,borderRadius:"lg",w:"full",textAlign:"center",children:[e.jsx(o,{fontSize:"lg",fontWeight:"bold",color:"blue.800",mb:2,children:"What's your rating?"}),e.jsx(o,{color:"blue.600",children:"Try each animation and tell us which one excites you the most!"})]})]})})}},l={parameters:{screenshot:{skip:!0}},args:{variant:"card",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}},c={parameters:{screenshot:{skip:!0}},args:{variant:"card",participants:g,isRevealing:!1,onStartReveal:a(),onReset:a()}},p={parameters:{screenshot:{skip:!0}},args:{variant:"typing",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}},d={parameters:{screenshot:{skip:!0}},args:{variant:"typing",participants:g,isRevealing:!1,onStartReveal:a(),onReset:a()}},v={parameters:{screenshot:{skip:!0}},args:{variant:"slot",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}},m={parameters:{screenshot:{skip:!0}},args:{variant:"slot",participants:g,isRevealing:!1,onStartReveal:a(),onReset:a()}};s.parameters={...s.parameters,docs:{...(y=s.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<'card' | 'typing' | 'slot'>('card');
    const [hasConflict, setHasConflict] = useState(false);
    const currentParticipants = hasConflict ? conflictParticipants : sampleParticipants;
    const [isRevealing, setIsRevealing] = useState(false);
    const handleStartReveal = () => {
      setIsRevealing(true);
    };
    const handleReset = () => {
      setIsRevealing(false);
    };
    const variants = [{
      key: 'card',
      label: 'Card Flip',
      color: 'purple'
    }, {
      key: 'typing',
      label: 'Terminal Type',
      color: 'gray'
    }, {
      key: 'slot',
      label: 'Slot Machine',
      color: 'red'
    }] as const;
    return <Box bg="gray.50" minH="100vh" p={6}>
        <VStack gap={6} maxW="800px" mx="auto">
          <VStack gap={4}>
            <Text fontSize="3xl" fontWeight="bold" color="gray.800">
              Opening Result Animation Competition
            </Text>
            <Text color="gray.600" textAlign="center">
              Compare 4 different animation patterns and choose the most
              exciting one!
            </Text>
          </VStack>

          <HStack gap={4} wrap="wrap" justify="center">
            {variants.map(variant => <Button key={variant.key} colorPalette={variant.color} variant={currentVariant === variant.key ? 'solid' : 'outline'} onClick={() => {
            setCurrentVariant(variant.key);
            setIsRevealing(false);
          }} size="lg">
                {variant.label}
              </Button>)}
          </HStack>

          <VStack gap={3}>
            <Box bg="white" p={4} borderRadius="lg" boxShadow="md" textAlign="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Currently Selected:{' '}
                {variants.find(v => v.key === currentVariant)?.label}
              </Text>
            </Box>

            <HStack gap={4}>
              <Button colorPalette={hasConflict ? 'gray' : 'blue'} variant={hasConflict ? 'outline' : 'solid'} onClick={() => {
              setHasConflict(false);
              setIsRevealing(false);
            }}>
                Normal Pattern
              </Button>
              <Button colorPalette={hasConflict ? 'red' : 'gray'} variant={hasConflict ? 'solid' : 'outline'} onClick={() => {
              setHasConflict(true);
              setIsRevealing(false);
            }}>
                Conflict Pattern
              </Button>
            </HStack>
          </VStack>

          <Box bg="white" borderRadius="xl" boxShadow="xl" p={6} w="full">
            <Stage variant={currentVariant} participants={currentParticipants} isRevealing={isRevealing} onStartReveal={handleStartReveal} onReset={handleReset} />
          </Box>

          <Box bg="blue.50" p={6} borderRadius="lg" w="full" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="blue.800" mb={2}>
              What's your rating?
            </Text>
            <Text color="blue.600">
              Try each animation and tell us which one excites you the most!
            </Text>
          </Box>
        </VStack>
      </Box>;
  }
}`,...(_=s.parameters)===null||_===void 0||(C=_.docs)===null||C===void 0?void 0:C.source}}};l.parameters={...l.parameters,docs:{...(k=l.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'card',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(T=l.parameters)===null||T===void 0||(b=T.docs)===null||b===void 0?void 0:b.source}}};c.parameters={...c.parameters,docs:{...(w=c.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'card',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(P=c.parameters)===null||P===void 0||(j=P.docs)===null||j===void 0?void 0:j.source}}};p.parameters={...p.parameters,docs:{...(M=p.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'typing',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(B=p.parameters)===null||B===void 0||(V=B.docs)===null||V===void 0?void 0:V.source}}};d.parameters={...d.parameters,docs:{...(L=d.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'typing',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(I=d.parameters)===null||I===void 0||(H=I.docs)===null||H===void 0?void 0:H.source}}};v.parameters={...v.parameters,docs:{...(W=v.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'slot',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(A=v.parameters)===null||A===void 0||(z=A.docs)===null||z===void 0?void 0:z.source}}};m.parameters={...m.parameters,docs:{...(O=m.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    variant: 'slot',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(X=m.parameters)===null||X===void 0||(E=X.docs)===null||E===void 0?void 0:E.source}}};const de=["CompetitionMode","CardReveal","CardRevealConflict","Typing","TypingConflict","SlotMachine","SlotMachineConflict"];export{l as CardReveal,c as CardRevealConflict,s as CompetitionMode,v as SlotMachine,m as SlotMachineConflict,p as Typing,d as TypingConflict,de as __namedExportsOrder,pe as default};
