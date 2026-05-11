/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=()=>{};var bo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ll=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|l>>4;let I=(l&15)<<2|f>>6,b=f&63;h||(b=64,a||(I=64)),r.push(e[m],e[T],e[I],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ua(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ll(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||T==null)throw new hl;const I=o<<2|l>>4;if(r.push(I),f!==64){const b=l<<4&240|f>>2;if(r.push(b),T!==64){const N=f<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fl=function(n){const t=Ua(n);return Ba.encodeByteArray(t,!0)},ur=function(n){return fl(n).replace(/\./g,"")},dl=function(n){try{return Ba.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=()=>ml().__FIREBASE_DEFAULTS__,gl=()=>{if(typeof process>"u"||typeof bo>"u")return;const n=bo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_l=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&dl(n[1]);return t&&JSON.parse(t)},vr=()=>{try{return cl()||pl()||gl()||_l()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yl=n=>{var t,e;return(e=(t=vr())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},El=n=>{const t=yl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qa=()=>{var n;return(n=vr())==null?void 0:n.config},dp=n=>{var t;return(t=vr())==null?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Il(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ur(JSON.stringify(e)),ur(JSON.stringify(a)),""].join(".")}const mn={};function wl(){const n={prod:[],emulator:[]};for(const t of Object.keys(mn))mn[t]?n.emulator.push(t):n.prod.push(t);return n}function Al(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Po=!1;function Rl(n,t){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||mn[n]===t||mn[n]||Po)return;mn[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=wl().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function l(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function f(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Po=!0,a()},I}function m(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=Al(r),b=e("text"),N=document.getElementById(b)||document.createElement("span"),x=e("learnmore"),k=document.getElementById(x)||document.createElement("a"),H=e("preprendIcon"),z=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const W=I.element;l(W),m(k,x);const Tt=f();h(z,H),W.append(z,N,k,Tt),document.body.appendChild(W)}o?(N.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gs())}function Sl(){var t;const n=(t=vr())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){const n=Gs();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cl(){return!Sl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Pl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="FirebaseError";class Be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vl,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Dl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Be(s,l,r)}}function Dl(n,t){return n.replace(Nl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Nl=/\{\$([^}]+)}/g;function Ep(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function cr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Vo(o)&&Vo(a)){if(!cr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ip(n,t){const e=new kl(n,t);return e.subscribe.bind(e)}class kl{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");xl(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=hs),s.error===void 0&&(s.error=hs),s.complete===void 0&&(s.complete=hs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xl(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function hs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){return n&&n._delegate?n._delegate:n}class Tn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Tl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ll(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ml(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ml(n){return n===me?void 0:n}function Ll(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ol(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Ul={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Bl=$.INFO,ql={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},jl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ql[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $a{constructor(t){this.name=t,this._logLevel=Bl,this._logHandler=jl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ul[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const $l=(n,t)=>t.some(e=>n instanceof e);let Do,No;function zl(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gl(){return No||(No=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,Is=new WeakMap,Ga=new WeakMap,fs=new WeakMap,Hs=new WeakMap;function Hl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&za.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function Kl(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let vs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ga.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Wl(n){vs=n(vs)}function Ql(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ds(this),t,...e);return Ga.set(r,t.sort?t.sort():[t]),Qt(r)}:Gl().includes(n)?function(...t){return n.apply(ds(this),t),Qt(za.get(this))}:function(...t){return Qt(n.apply(ds(this),t))}}function Yl(n){return typeof n=="function"?Ql(n):(n instanceof IDBTransaction&&Kl(n),$l(n,zl())?new Proxy(n,vs):n)}function Qt(n){if(n instanceof IDBRequest)return Hl(n);if(fs.has(n))return fs.get(n);const t=Yl(n);return t!==n&&(fs.set(n,t),Hs.set(t,n)),t}const ds=n=>Hs.get(n);function Jl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Xl=["get","getKey","getAll","getAllKeys","count"],Zl=["put","add","delete","clear"],ms=new Map;function ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Zl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ms.set(t,o),o}Wl(n=>({...n,get:(t,e,r)=>ko(t,e)||n.get(t,e,r),has:(t,e)=>!!ko(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(eh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function eh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",xo="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new $a("@firebase/app"),nh="@firebase/app-compat",rh="@firebase/analytics-compat",sh="@firebase/analytics",ih="@firebase/app-check-compat",oh="@firebase/app-check",ah="@firebase/auth",uh="@firebase/auth-compat",ch="@firebase/database",lh="@firebase/data-connect",hh="@firebase/database-compat",fh="@firebase/functions",dh="@firebase/functions-compat",mh="@firebase/installations",ph="@firebase/installations-compat",gh="@firebase/messaging",_h="@firebase/messaging-compat",yh="@firebase/performance",Eh="@firebase/performance-compat",Th="@firebase/remote-config",Ih="@firebase/remote-config-compat",vh="@firebase/storage",wh="@firebase/storage-compat",Ah="@firebase/firestore",Rh="@firebase/ai",Sh="@firebase/firestore-compat",Ch="firebase",bh="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]",Ph={[ws]:"fire-core",[nh]:"fire-core-compat",[sh]:"fire-analytics",[rh]:"fire-analytics-compat",[oh]:"fire-app-check",[ih]:"fire-app-check-compat",[ah]:"fire-auth",[uh]:"fire-auth-compat",[ch]:"fire-rtdb",[lh]:"fire-data-connect",[hh]:"fire-rtdb-compat",[fh]:"fire-fn",[dh]:"fire-fn-compat",[mh]:"fire-iid",[ph]:"fire-iid-compat",[gh]:"fire-fcm",[_h]:"fire-fcm-compat",[yh]:"fire-perf",[Eh]:"fire-perf-compat",[Th]:"fire-rc",[Ih]:"fire-rc-compat",[vh]:"fire-gcs",[wh]:"fire-gcs-compat",[Ah]:"fire-fst",[Sh]:"fire-fst-compat",[Rh]:"fire-vertex","fire-js":"fire-js",[Ch]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,Vh=new Map,Rs=new Map;function Oo(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function hr(n){const t=n.name;if(Rs.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;Rs.set(t,n);for(const e of lr.values())Oo(e,n);for(const e of Vh.values())Oo(e,n);return!0}function Dh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Nh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new ja("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=bh;function Mh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:As,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=qa()),!e)throw Yt.create("no-options");const o=lr.get(s);if(o){if(cr(e,o.options)&&cr(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new Fl(s);for(const h of Rs.values())a.addComponent(h);const l=new xh(e,r,a);return lr.set(s,l),l}function Lh(n=As){const t=lr.get(n);if(!t&&n===As&&qa())return Mh();if(!t)throw Yt.create("no-app",{appName:n});return t}function pn(n,t,e){let r=Ph[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}hr(new Tn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="firebase-heartbeat-database",Uh=1,In="firebase-heartbeat-store";let ps=null;function Ha(){return ps||(ps=Jl(Fh,Uh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(In)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ps}async function Bh(n){try{const e=(await Ha()).transaction(In),r=await e.objectStore(In).get(Ka(n));return await e.done,r}catch(t){if(t instanceof Be)Ut.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function Mo(n,t){try{const r=(await Ha()).transaction(In,"readwrite");await r.objectStore(In).put(t,Ka(n)),await r.done}catch(e){if(e instanceof Be)Ut.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=1024,jh=30;class $h{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Lo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>jh){const a=Hh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lo(),{heartbeatsToSend:r,unsentEntries:s}=zh(this._heartbeatsCache.heartbeats),o=ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function Lo(){return new Date().toISOString().substring(0,10)}function zh(n,t=qh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Fo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Fo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?Pl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fo(n){return ur(JSON.stringify({version:2,heartbeats:n})).length}function Hh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){hr(new Tn("platform-logger",t=>new th(t),"PRIVATE")),hr(new Tn("heartbeat",t=>new $h(t),"PRIVATE")),pn(ws,xo,n),pn(ws,xo,"esm2020"),pn("fire-js","")}Kh("");var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Wa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.F=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(v,y,A){for(var g=Array(arguments.length-2),It=2;It<arguments.length;It++)g[It-2]=arguments[It];return p.prototype[y].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,_){_||(_=0);const v=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)v[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)v[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],y=E.g[2];let A=E.g[3],g;g=p+(A^_&(y^A))+v[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+v[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+v[2]+606105819&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+v[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+v[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+v[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+v[6]+2821735955&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+v[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+v[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+v[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+v[10]+4294925233&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+v[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+v[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+v[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+v[14]+2792965006&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+v[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^A&(_^y))+v[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+v[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+v[11]+643717713&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+v[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+v[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+v[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+v[15]+3634488961&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+v[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+v[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+v[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+v[3]+4107603335&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+v[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+v[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+v[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+v[7]+1735328473&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+v[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^A)+v[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+v[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+v[11]+1839030562&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+v[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+v[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+v[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+v[7]+4139469664&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+v[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+v[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+v[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+v[3]+3572445317&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+v[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+v[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+v[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+v[15]+530742520&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+v[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~A))+v[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+v[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+v[14]+2878612391&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+v[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+v[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+v[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+v[10]+4293915773&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+v[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+v[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+v[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+v[6]+2734768916&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+v[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+v[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+v[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+v[2]+718787259&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const _=p-this.blockSize,v=this.C;let y=this.h,A=0;for(;A<p;){if(y==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(v[y++]=E.charCodeAt(A++),y==this.blockSize){s(this,v),y=0;break}}else for(;A<p;)if(v[y++]=E[A++],y==this.blockSize){s(this,v),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)E[p++]=this.g[_]>>>v&255;return E};function o(E,p){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;const _=[];let v=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;v&&A==p||(_[y]=A,v=!1)}this.g=_}var l={};function h(E){return-128<=E&&E<128?o(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(E<0)return k(f(-E));const p=[];let _=1;for(let v=0;E>=_;v++)p[v]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(m(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let v=T;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const g=parseInt(E.substring(A,A+y),p);y<8?(y=f(Math.pow(p,y)),v=v.j(y).add(f(g))):(v=v.j(_),v=v.add(f(g)))}return v}var T=h(0),I=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-k(this).m();let E=0,p=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);E+=(v>=0?v:4294967296+v)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(x(this))return"-"+k(this).toString(E);const p=f(Math.pow(E,6));var _=this;let v="";for(;;){const y=Tt(_,p).g;_=H(_,y.j(p));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,N(_))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=H(this,E),x(E)?-1:N(E)?0:1};function k(E){const p=E.g.length,_=[];for(let v=0;v<p;v++)_[v]=~E.g[v];return new a(_,~E.h).add(I)}n.abs=function(){return x(this)?k(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),_=[];let v=0;for(let y=0;y<=p;y++){let A=v+(this.i(y)&65535)+(E.i(y)&65535),g=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);v=g>>>16,A&=65535,g&=65535,_[y]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(E,p){return E.add(k(p))}n.j=function(E){if(N(this)||N(E))return T;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(this.l(b)<0&&E.l(b)<0)return f(this.m()*E.m());const p=this.g.length+E.g.length,_=[];for(var v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let y=0;y<E.g.length;y++){const A=this.i(v)>>>16,g=this.i(v)&65535,It=E.i(y)>>>16,ue=E.i(y)&65535;_[2*v+2*y]+=g*ue,z(_,2*v+2*y),_[2*v+2*y+1]+=A*ue,z(_,2*v+2*y+1),_[2*v+2*y+1]+=g*It,z(_,2*v+2*y+1),_[2*v+2*y+2]+=A*It,z(_,2*v+2*y+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function W(E,p){this.g=E,this.h=p}function Tt(E,p){if(N(p))throw Error("division by zero");if(N(E))return new W(T,T);if(x(E))return p=Tt(k(E),p),new W(k(p.g),k(p.h));if(x(p))return p=Tt(E,k(p)),new W(k(p.g),p.h);if(E.g.length>30){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=I,v=p;v.l(E)<=0;)_=ft(_),v=ft(v);var y=dt(_,1),A=dt(v,1);for(v=dt(v,2),_=dt(_,2);!N(v);){var g=A.add(v);g.l(E)<=0&&(y=y.add(_),A=g),v=dt(v,1),_=dt(_,1)}return p=H(E,y.j(p)),new W(y,p)}for(y=T;E.l(p)>=0;){for(_=Math.max(1,Math.floor(E.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=f(_),g=A.j(p);x(g)||g.l(E)>0;)_-=v,A=f(_),g=A.j(p);N(A)&&(A=I),y=y.add(A),E=H(E,g)}return new W(y,E)}n.B=function(E){return Tt(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<p;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function ft(E){const p=E.g.length+1,_=[];for(let v=0;v<p;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function dt(E,p){const _=p>>5;p%=32;const v=E.g.length-_,y=[];for(let A=0;A<v;A++)y[A]=p>0?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Jt=a}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,ln,Ya,nr,Ss,Ja,Xa,Za;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jn=="object"&&Jn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var w=i[d];if(!(w in c))break t;c=c[w]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&c.push([d,u[d]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function f(i,u,c){return f=h,f.apply(null,arguments)}function m(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function T(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(d,w,R){for(var P=Array(arguments.length-2),U=2;U<arguments.length;U++)P[U-2]=arguments[U];return u.prototype[w].apply(d,P)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function b(i){const u=i.length;if(u>0){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function N(i,u){for(let d=1;d<arguments.length;d++){const w=arguments[d];var c=typeof w;if(c=c!="object"?c:w?Array.isArray(w)?"array":c:"null",c=="array"||c=="object"&&typeof w.length=="number"){c=i.length||0;const R=w.length||0;i.length=c+R;for(let P=0;P<R;P++)i[c+P]=w[P]}else i.push(w)}}class x{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(i){a.setTimeout(()=>{throw i},0)}function H(){var i=E;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class z{constructor(){this.h=this.g=null}add(u,c){const d=W.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var W=new x(()=>new Tt,i=>i.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,dt=!1,E=new z,p=()=>{const i=Promise.resolve(void 0);ft=()=>{i.then(_)}};function _(){for(var i;i=H();){try{i.h.call(i.g)}catch(c){k(c)}var u=W;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}dt=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function It(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}T(It,y),It.prototype.init=function(i,u){const c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),Dc=0;function Nc(i,u,c,d,w){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=w,this.key=++Dc,this.da=this.fa=!1}function Mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ln(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function kc(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function Si(i){const u={};for(const c in i)u[c]=i[c];return u}const Ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bi(i,u){let c,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(c in d)i[c]=d[c];for(let R=0;R<Ci.length;R++)c=Ci[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function Fn(i){this.src=i,this.g={},this.h=0}Fn.prototype.add=function(i,u,c,d,w){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const P=jr(i,u,d,w);return P>-1?(u=i[P],c||(u.fa=!1)):(u=new Nc(u,this.src,R,!!d,w),u.fa=c,i.push(u)),u};function qr(i,u){const c=u.type;if(c in i.g){var d=i.g[c],w=Array.prototype.indexOf.call(d,u,void 0),R;(R=w>=0)&&Array.prototype.splice.call(d,w,1),R&&(Mn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function jr(i,u,c,d){for(let w=0;w<i.length;++w){const R=i[w];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==d)return w}return-1}var $r="closure_lm_"+(Math.random()*1e6|0),zr={};function Pi(i,u,c,d,w){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Pi(i,u[R],c,d,w);return null}return c=Ni(c),i&&i[ue]?i.J(u,c,l(d)?!!d.capture:!1,w):xc(i,u,c,!1,d,w)}function xc(i,u,c,d,w,R){if(!u)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let U=Hr(i);if(U||(i[$r]=U=new Fn(i)),c=U.add(u,c,d,P,R),c.proxy)return c;if(d=Oc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)A||(w=P),w===void 0&&(w=!1),i.addEventListener(u.toString(),d,w);else if(i.attachEvent)i.attachEvent(Di(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Oc(){function i(c){return u.call(i.src,i.listener,c)}const u=Mc;return i}function Vi(i,u,c,d,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)Vi(i,u[R],c,d,w);else d=l(d)?!!d.capture:!!d,c=Ni(c),i&&i[ue]?(i=i.i,R=String(u).toString(),R in i.g&&(u=i.g[R],c=jr(u,c,d,w),c>-1&&(Mn(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[R],i.h--)))):i&&(i=Hr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=jr(u,c,d,w)),(c=i>-1?u[i]:null)&&Gr(c))}function Gr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[ue])qr(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(Di(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Hr(u))?(qr(c,i),c.h==0&&(c.src=null,u[$r]=null)):Mn(i)}}}function Di(i){return i in zr?zr[i]:zr[i]="on"+i}function Mc(i,u){if(i.da)i=!0;else{u=new It(u,this);const c=i.listener,d=i.ha||i.src;i.fa&&Gr(i),i=c.call(d,u)}return i}function Hr(i){return i=i[$r],i instanceof Fn?i:null}var Kr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ni(i){return typeof i=="function"?i:(i[Kr]||(i[Kr]=function(u){return i.handleEvent(u)}),i[Kr])}function mt(){v.call(this),this.i=new Fn(this),this.M=this,this.G=null}T(mt,v),mt.prototype[ue]=!0,mt.prototype.removeEventListener=function(i,u,c,d){Vi(this,i,u,c,d)};function yt(i,u){var c,d=i.G;if(d)for(c=[];d;d=d.G)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var w=u;u=new y(d,i),bi(u,w)}w=!0;let R,P;if(c)for(P=c.length-1;P>=0;P--)R=u.g=c[P],w=Un(R,d,!0,u)&&w;if(R=u.g=i,w=Un(R,d,!0,u)&&w,w=Un(R,d,!1,u)&&w,c)for(P=0;P<c.length;P++)R=u.g=c[P],w=Un(R,d,!1,u)&&w}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let d=0;d<c.length;d++)Mn(c[d]);delete i.g[u],i.h--}}this.G=null},mt.prototype.J=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},mt.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function Un(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let w=!0;for(let R=0;R<u.length;++R){const P=u[R];if(P&&!P.da&&P.capture==c){const U=P.listener,it=P.ha||P.src;P.fa&&qr(i.i,P),w=U.call(it,d)!==!1&&w}}return w&&!d.defaultPrevented}function Lc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function ki(i){i.g=Lc(()=>{i.g=null,i.i&&(i.i=!1,ki(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Fc extends v{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ki(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(i){v.call(this),this.h=i,this.g={}}T(He,v);var xi=[];function Oi(i){Ln(i.g,function(u,c){this.g.hasOwnProperty(c)&&Gr(u)},i),i.g={}}He.prototype.N=function(){He.Z.N.call(this),Oi(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wr=a.JSON.stringify,Uc=a.JSON.parse,Bc=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Mi(){}function Li(){}var Ke={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qr(){y.call(this,"d")}T(Qr,y);function Yr(){y.call(this,"c")}T(Yr,y);var ce={},Fi=null;function Bn(){return Fi=Fi||new mt}ce.Ia="serverreachability";function Ui(i){y.call(this,ce.Ia,i)}T(Ui,y);function We(i){const u=Bn();yt(u,new Ui(u))}ce.STAT_EVENT="statevent";function Bi(i,u){y.call(this,ce.STAT_EVENT,i),this.stat=u}T(Bi,y);function Et(i){const u=Bn();yt(u,new Bi(u,i))}ce.Ja="timingevent";function qi(i,u){y.call(this,ce.Ja,i),this.size=u}T(qi,y);function Qe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.ua=function(){this.g=!1};function qc(i,u,c,d,w,R){i.info(function(){if(i.g)if(R){var P="",U=R.split("&");for(let K=0;K<U.length;K++){var it=U[K].split("=");if(it.length>1){const at=it[0];it=it[1];const Nt=at.split("_");P=Nt.length>=2&&Nt[1]=="type"?P+(at+"="+it+"&"):P+(at+"=redacted&")}}}else P=null;else P=R;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+u+`
`+c+`
`+P})}function jc(i,u,c,d,w,R,P){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+u+`
`+c+`
`+R+" "+P})}function Re(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+zc(i,c)+(d?" "+d:"")})}function $c(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function zc(i,u){if(!i.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var c=R[i];if(!(c.length<2)){var d=c[1];if(Array.isArray(d)&&!(d.length<1)){var w=d[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<d.length;P++)d[P]=""}}}}return Wr(R)}catch{return u}}var qn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ji={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$i;function Jr(){}T(Jr,Mi),Jr.prototype.g=function(){return new XMLHttpRequest},$i=new Jr;function Je(i){return encodeURIComponent(String(i))}function Gc(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function jt(i,u,c,d){this.j=i,this.i=u,this.l=c,this.S=d||1,this.V=new He(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var Gi={},Xr={};function Zr(i,u,c){i.M=1,i.A=$n(Dt(u)),i.u=c,i.R=!0,Hi(i,null)}function Hi(i,u){i.F=Date.now(),jn(i),i.B=Dt(i.A);var c=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),io(c.i,"t",d),i.C=0,c=i.j.L,i.h=new zi,i.g=Ao(i.j,c?u:null,!i.u),i.P>0&&(i.O=new Fc(f(i.Y,i,i.g),i.P)),u=i.V,c=i.g,d=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(xi[0]=w.toString()),w=xi);for(let R=0;R<w.length;R++){const P=Pi(c,w[R],d||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.J?Si(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),We(),qc(i.i,i.v,i.B,i.l,i.S,i.u)}jt.prototype.ba=function(i){i=i.target;const u=this.O;u&&Gt(i)==3?u.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const U=Gt(this.g),it=this.g.ya(),K=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||fo(this.g)))){this.K||U!=4||it==7||(it==8||K<=0?We(3):We(2)),ts(this);var u=this.g.ca();this.X=u;var c=Hc(this);if(this.o=u==200,jc(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var d,w=this.g;if((d=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var R=d;break e}}R=null}if(i=R)Re(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,es(this,i);else{this.o=!1,this.m=3,Et(12),le(this),Xe(this);break t}}if(this.R){i=!0;let at;for(;!this.K&&this.C<c.length;)if(at=Kc(this,c),at==Xr){U==4&&(this.m=4,Et(14),i=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Gi){this.m=4,Et(15),Re(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Re(this.i,this.l,at,null),es(this,at);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,Et(16),i=!1),this.o=this.o&&i,!i)Re(this.i,this.l,c,"[Invalid Chunked Response]"),le(this),Xe(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),cs(P),P.P=!0,Et(11))}}else Re(this.i,this.l,c,null),es(this,c);U==4&&le(this),this.o&&!this.K&&(U==4?To(this.j,this):(this.o=!1,jn(this)))}else al(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),le(this),Xe(this)}}}catch{}finally{}};function Hc(i){if(!Ki(i))return i.g.la();const u=fo(i.g);if(u==="")return"";let c="";const d=u.length,w=Gt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return le(i),Xe(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<d;R++)i.h.h=!0,c+=i.h.i.decode(u[R],{stream:!(w&&R==d-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function Ki(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Kc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?Xr:(c=Number(u.substring(c,d)),isNaN(c)?Gi:(d+=1,d+c>u.length?Xr:(u=u.slice(d,d+c),i.C=d+c,u)))}jt.prototype.cancel=function(){this.K=!0,le(this)};function jn(i){i.T=Date.now()+i.H,Wi(i,i.H)}function Wi(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Qe(f(i.aa,i),u)}function ts(i){i.D&&(a.clearTimeout(i.D),i.D=null)}jt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?($c(this.i,this.B),this.M!=2&&(We(),Et(17)),le(this),this.m=2,Xe(this)):Wi(this,this.T-i)};function Xe(i){i.j.I==0||i.K||To(i.j,i)}function le(i){ts(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Oi(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function es(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||ns(c.h,i))){if(!i.L&&ns(c.h,i)&&c.I==3){try{var d=c.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Wn(c),Hn(c);else break t;us(c),Et(18)}}else c.xa=w[1],0<c.xa-c.K&&w[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Qe(f(c.Va,c),6e3));Ji(c.h)<=1&&c.ta&&(c.ta=void 0)}else fe(c,11)}else if((i.L||c.g==i)&&Wn(c),!g(u))for(w=c.Ba.g.parse(u),u=0;u<w.length;u++){let K=w[u];const at=K[0];if(!(at<=c.K))if(c.K=at,K=K[1],c.I==2)if(K[0]=="c"){c.M=K[1],c.ba=K[2];const Nt=K[3];Nt!=null&&(c.ka=Nt,c.j.info("VER="+c.ka));const de=K[4];de!=null&&(c.za=de,c.j.info("SVER="+c.za));const Ht=K[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(d=1.5*Ht,c.O=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Kt=i.g;if(Kt){const Yn=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var R=d.h;R.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(rs(R,R.h),R.h=null))}if(d.G){const ls=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ls&&(d.wa=ls,Y(d.J,d.G,ls))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),d=c;var P=i;if(d.na=wo(d,d.L?d.ba:null,d.W),P.L){Xi(d.h,P);var U=P,it=d.O;it&&(U.H=it),U.D&&(ts(U),jn(U)),d.g=P}else yo(d);c.i.length>0&&Kn(c)}else K[0]!="stop"&&K[0]!="close"||fe(c,7);else c.I==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?fe(c,7):as(c):K[0]!="noop"&&c.l&&c.l.qa(K),c.A=0)}}We(4)}catch{}}var Wc=class{constructor(i,u){this.g=i,this.map=u}};function Qi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ji(i){return i.h?1:i.g?i.g.size:0}function ns(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function rs(i,u){i.g?i.g.add(u):i.h=u}function Xi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Qi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zi(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return b(i.i)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const d=i[c].indexOf("=");let w,R=null;d>=0?(w=i[c].substring(0,d),R=i[c].substring(d+1)):w=i[c],u(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $t(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof $t?(this.l=i.l,Ze(this,i.j),this.o=i.o,this.g=i.g,tn(this,i.u),this.h=i.h,ss(this,oo(i.i)),this.m=i.m):i&&(u=String(i).match(to))?(this.l=!1,Ze(this,u[1]||"",!0),this.o=en(u[2]||""),this.g=en(u[3]||"",!0),tn(this,u[4]),this.h=en(u[5]||"",!0),ss(this,u[6]||"",!0),this.m=en(u[7]||"")):(this.l=!1,this.i=new rn(null,this.l))}$t.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(nn(u,eo,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(nn(u,eo,!0),"@"),i.push(Je(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(nn(c,c.charAt(0)=="/"?Xc:Jc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",nn(c,tl)),i.join("")},$t.prototype.resolve=function(i){const u=Dt(this);let c=!!i.j;c?Ze(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var d=i.h;if(c)tn(u,i.u);else if(c=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var w=u.h.lastIndexOf("/");w!=-1&&(d=u.h.slice(0,w+1)+d)}if(w=d,w==".."||w==".")d="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){d=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let P=0;P<w.length;){const U=w[P++];U=="."?d&&P==w.length&&R.push(""):U==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),d&&P==w.length&&R.push("")):(R.push(U),d=!0)}d=R.join("/")}else d=w}return c?u.h=d:c=i.i.toString()!=="",c?ss(u,oo(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Dt(i){return new $t(i)}function Ze(i,u,c){i.j=c?en(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function tn(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function ss(i,u,c){u instanceof rn?(i.i=u,el(i.i,i.l)):(c||(u=nn(u,Zc)),i.i=new rn(u,i.l))}function Y(i,u,c){i.i.set(u,c)}function $n(i){return Y(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function en(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function nn(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Yc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Yc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var eo=/[#\/\?@]/g,Jc=/[#\?:]/g,Xc=/[#\?]/g,Zc=/[#\?@]/g,tl=/#/g;function rn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function he(i){i.g||(i.g=new Map,i.h=0,i.i&&Qc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=rn.prototype,n.add=function(i,u){he(this),this.i=null,i=Se(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function no(i,u){he(i),u=Se(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ro(i,u){return he(i),u=Se(i,u),i.g.has(u)}n.forEach=function(i,u){he(this),this.g.forEach(function(c,d){c.forEach(function(w){i.call(u,w,d,this)},this)},this)};function so(i,u){he(i);let c=[];if(typeof u=="string")ro(i,u)&&(c=c.concat(i.g.get(Se(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}n.set=function(i,u){return he(this),this.i=null,i=Se(this,i),ro(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=so(this,i),i.length>0?String(i[0]):u):u};function io(i,u,c){no(i,u),c.length>0&&(i.i=null,i.g.set(Se(i,u),b(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var c=u[d];const w=Je(c);c=so(this,c);for(let R=0;R<c.length;R++){let P=w;c[R]!==""&&(P+="="+Je(c[R])),i.push(P)}}return this.i=i.join("&")};function oo(i){const u=new rn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Se(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function el(i,u){u&&!i.j&&(he(i),i.i=null,i.g.forEach(function(c,d){const w=d.toLowerCase();d!=w&&(no(this,d),io(this,w,c))},i)),i.j=u}function nl(i,u){const c=new Ye;if(a.Image){const d=new Image;d.onload=m(zt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=m(zt,c,"TestLoadImage: error",!1,u,d),d.onabort=m(zt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=m(zt,c,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function rl(i,u){const c=new Ye,d=new AbortController,w=setTimeout(()=>{d.abort(),zt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(w),R.ok?zt(c,"TestPingServer: ok",!0,u):zt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),zt(c,"TestPingServer: error",!1,u)})}function zt(i,u,c,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(c)}catch{}}function sl(){this.g=new Bc}function is(i){this.i=i.Sb||null,this.h=i.ab||!1}T(is,Mi),is.prototype.g=function(){return new zn(this.i,this.h)};function zn(i,u){mt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(zn,mt),n=zn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,on(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ao(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ao(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?sn(this):on(this),this.readyState==3&&ao(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,sn(this))},n.Na=function(i){this.g&&(this.response=i,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,on(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function on(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function uo(i){let u="";return Ln(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function os(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=uo(c),typeof i=="string"?c!=null&&Je(c):Y(i,u,c))}function Z(i){mt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Z,mt);var il=/^https?$/i,ol=["POST","PUT"];n=Z.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$i.g(),this.g.onreadystatechange=I(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){co(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)c.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(ol,u,void 0)>=0)||d||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,P]of c)this.g.setRequestHeader(R,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){co(this,R)}};function co(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,lo(i),Gn(i)}function lo(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,yt(this,"complete"),yt(this,"abort"),Gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gn(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ho(this):this.Xa())},n.Xa=function(){ho(this)};function ho(i){if(i.h&&typeof o<"u"){if(i.v&&Gt(i)==4)setTimeout(i.Ca.bind(i),0);else if(yt(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=R===0){let P=String(i.D).match(to)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),d=!il.test(P?P.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.o=6;try{var w=Gt(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",lo(i)}}finally{Gn(i)}}}}function Gn(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||yt(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Gt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Uc(u)}};function fo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function al(i){const u={};i=(i.g&&Gt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(g(i[d]))continue;var c=Gc(i[d]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[w]||[];u[w]=R,R.push(c)}kc(u,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function mo(i){this.za=0,this.i=[],this.j=new Ye,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=an("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=an("baseRetryDelayMs",5e3,i),this.Za=an("retryDelaySeedMs",1e4,i),this.Ta=an("forwardChannelMaxRetries",2,i),this.va=an("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Qi(i&&i.concurrentRequestLimit),this.Ba=new sl,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mo.prototype,n.ka=8,n.I=1,n.connect=function(i,u,c,d){Et(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.J=wo(this,null,this.W),Kn(this)};function as(i){if(po(i),i.I==3){var u=i.V++,c=Dt(i.J);if(Y(c,"SID",i.M),Y(c,"RID",u),Y(c,"TYPE","terminate"),un(i,c),u=new jt(i,i.j,u),u.M=2,u.A=$n(Dt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=Ao(u.j,null),u.g.ea(u.A)),u.F=Date.now(),jn(u)}vo(i)}function Hn(i){i.g&&(cs(i),i.g.cancel(),i.g=null)}function po(i){Hn(i),i.v&&(a.clearTimeout(i.v),i.v=null),Wn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Kn(i){if(!Yi(i.h)&&!i.m){i.m=!0;var u=i.Ea;ft||p(),dt||(ft(),dt=!0),E.add(u,i),i.D=0}}function ul(i,u){return Ji(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Qe(f(i.Ea,i,u),Io(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new jt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=Si(R),bi(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=_o(this,w,u),c=Dt(this.J),Y(c,"RID",i),Y(c,"CVER",22),this.G&&Y(c,"X-HTTP-Session-Id",this.G),un(this,c),R&&(this.R?u="headers="+Je(uo(R))+"&"+u:this.u&&os(c,this.u,R)),rs(this.h,w),this.Ra&&Y(c,"TYPE","init"),this.S?(Y(c,"$req",u),Y(c,"SID","null"),w.U=!0,Zr(w,c,null)):Zr(w,c,u),this.I=2}}else this.I==3&&(i?go(this,i):this.i.length==0||Yi(this.h)||go(this))};function go(i,u){var c;u?c=u.l:c=i.V++;const d=Dt(i.J);Y(d,"SID",i.M),Y(d,"RID",c),Y(d,"AID",i.K),un(i,d),i.u&&i.o&&os(d,i.u,i.o),c=new jt(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=_o(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),rs(i.h,c),Zr(c,d,u)}function un(i,u){i.H&&Ln(i.H,function(c,d){Y(u,d,c)}),i.l&&Ln({},function(c,d){Y(u,d,c)})}function _o(i,u,c){c=Math.min(i.i.length,c);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var w=i.i;let U=-1;for(;;){const it=["count="+c];U==-1?c>0?(U=w[0].g,it.push("ofs="+U)):U=0:it.push("ofs="+U);let K=!0;for(let at=0;at<c;at++){var R=w[at].g;const Nt=w[at].map;if(R-=U,R<0)U=Math.max(0,w[at].g-100),K=!1;else try{R="req"+R+"_"||"";try{var P=Nt instanceof Map?Nt:Object.entries(Nt);for(const[de,Ht]of P){let Kt=Ht;l(Ht)&&(Kt=Wr(Ht)),it.push(R+de+"="+encodeURIComponent(Kt))}}catch(de){throw it.push(R+"type="+encodeURIComponent("_badmap")),de}}catch{d&&d(Nt)}}if(K){P=it.join("&");break t}}P=void 0}return i=i.i.splice(0,c),u.G=i,P}function yo(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;ft||p(),dt||(ft(),dt=!0),E.add(u,i),i.A=0}}function us(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Qe(f(i.Da,i),Io(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Eo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Qe(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Hn(this),Eo(this))};function cs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Eo(i){i.g=new jt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Dt(i.na);Y(u,"RID","rpc"),Y(u,"SID",i.M),Y(u,"AID",i.K),Y(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&Y(u,"TO",i.ia),Y(u,"TYPE","xmlhttp"),un(i,u),i.u&&i.o&&os(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=$n(Dt(u)),c.u=null,c.R=!0,Hi(c,i)}n.Va=function(){this.C!=null&&(this.C=null,Hn(this),us(this),Et(19))};function Wn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function To(i,u){var c=null;if(i.g==u){Wn(i),cs(i),i.g=null;var d=2}else if(ns(i.h,u))c=u.G,Xi(i.h,u),d=1;else return;if(i.I!=0){if(u.o)if(d==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var w=i.D;d=Bn(),yt(d,new qi(d,c)),Kn(i)}else yo(i);else if(w=u.m,w==3||w==0&&u.X>0||!(d==1&&ul(i,u)||d==2&&us(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),w){case 1:fe(i,5);break;case 4:fe(i,10);break;case 3:fe(i,6);break;default:fe(i,2)}}}function Io(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function fe(i,u){if(i.j.info("Error code "+u),u==2){var c=f(i.bb,i),d=i.Ua;const w=!d;d=new $t(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ze(d,"https"),$n(d),w?nl(d.toString(),c):rl(d.toString(),c)}else Et(2);i.I=0,i.l&&i.l.pa(u),vo(i),po(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function vo(i){if(i.I=0,i.ja=[],i.l){const u=Zi(i.h);(u.length!=0||i.i.length!=0)&&(N(i.ja,u),N(i.ja,i.i),i.h.i.length=0,b(i.i),i.i.length=0),i.l.oa()}}function wo(i,u,c){var d=c instanceof $t?Dt(c):new $t(c);if(d.g!="")u&&(d.g=u+"."+d.g),tn(d,d.u);else{var w=a.location;d=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;const R=new $t(null);d&&Ze(R,d),u&&(R.g=u),w&&tn(R,w),c&&(R.h=c),d=R}return c=i.G,u=i.wa,c&&u&&Y(d,c,u),Y(d,"VER",i.ka),un(i,d),d}function Ao(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new Z(new is({ab:c})):new Z(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}n=Ro.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qn(){}Qn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){mt.call(this),this.g=new mo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ce(this)}T(At,mt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){as(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=Wr(i),i=c);u.i.push(new Wc(u.Ya++,i)),u.I==3&&Kn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,At.Z.N.call(this)};function So(i){Qr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}T(So,Qr);function Co(){Yr.call(this),this.status=1}T(Co,Yr);function Ce(i){this.g=i}T(Ce,Ro),Ce.prototype.ra=function(){yt(this.g,"a")},Ce.prototype.qa=function(i){yt(this.g,new So(i))},Ce.prototype.pa=function(i){yt(this.g,new Co)},Ce.prototype.oa=function(){yt(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Za=function(){return new Qn},Xa=function(){return Bn()},Ja=ce,Ss={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,nr=qn,ji.COMPLETE="complete",Ya=ji,Li.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",mt.prototype.listen=mt.prototype.J,ln=Li,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Qa=Z}).apply(typeof Jn<"u"?Jn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="12.9.0";function Wh(n){qe=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new $a("@firebase/firestore");function be(){return _e.logLevel}function D(n,...t){if(_e.logLevel<=$.DEBUG){const e=t.map(Ks);_e.debug(`Firestore (${qe}): ${n}`,...e)}}function Bt(n,...t){if(_e.logLevel<=$.ERROR){const e=t.map(Ks);_e.error(`Firestore (${qe}): ${n}`,...e)}}function ye(n,...t){if(_e.logLevel<=$.WARN){const e=t.map(Ks);_e.warn(`Firestore (${qe}): ${n}`,...e)}}function Ks(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,tu(n,r,e)}function tu(n,t,e){let r=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Bt(r),new Error(r)}function G(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||tu(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Qh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Jh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new eu(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Xh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Xh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Bo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ef(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Cs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return gs(s)===gs(o)?B(s,o):gs(s)?1:-1}return B(n.length,t.length)}const nf=55296,rf=57343;function gs(n){const t=n.charCodeAt(0);return t>=nf&&t<=rf}function Oe(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="__name__";class kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=kt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=kt.isNumericId(t),s=kt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(t).compare(kt.extractNumericId(e)):Cs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class Q extends kt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const sf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends kt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return sf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qo}static keyField(){return new lt([qo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,t,e){if(!e)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function of(n,t,e,r){if(t===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function jo(n){if(!O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $o(n){if(O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ru(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Ct(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=wr(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,t){const e={typeString:n};return t&&(e.value=t),e}function Vn(n,t){if(!ru(n))throw new V(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new V(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=-62135596800,Go=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Go);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<zo)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Go}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Vn(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-zo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:st("string",J._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new J(0,0))}static max(){return new L(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=-1;function af(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new te(s,O.empty(),t)}function uf(n){return new te(n.readTime,n.key,vn)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te(L.min(),O.empty(),vn)}static max(){return new te(L.max(),O.empty(),vn)}}function cf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==lf)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((m=>{a[f]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function ff(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $e(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ar.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function Rr(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function df(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="";function mf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ho(t)),t=pf(n.get(e),t);return Ho(t)}function pf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case su:e+="";break;default:e+=o}}return e}function Ho(n){return n+su+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function oe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function iu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ot(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Oe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ou("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const gf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(G(!!n,39018),typeof n=="string"){let t=0;const e=gf.exec(n);if(G(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ne(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="server_timestamp",uu="__type__",cu="__previous_value__",lu="__local_write_time__";function Ys(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[uu])==null?void 0:r.stringValue)===au}function Sr(n){const t=n.mapValue.fields[cu];return Ys(t)?Sr(t):t}function wn(n){const t=ee(n.mapValue.fields[lu].timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,e,r,s,o,a,l,h,f,m,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=T}}const dr="(default)";class An{constructor(t,e){this.projectId=t,this.database=e||dr}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===dr}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}function yf(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="__type__",Ef="__max__",Zn={mapValue:{}},fu="__vector__",mr="value";function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ys(n)?4:If(n)?9007199254740991:Tf(n)?10:11:M(28295,{value:n})}function Ft(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return wn(n).isEqual(wn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ee(s.timestampValue),l=ee(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),l=et(o.doubleValue);return a===l?fr(a)===fr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Oe(n.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Ko(a)!==Ko(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ft(a[h],l[h])))return!1;return!0})(n,t);default:return M(52216,{left:n})}}function Rn(n,t){return(n.values||[]).find((e=>Ft(e,t)))!==void 0}function Me(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Qo(n.timestampValue,t.timestampValue);case 4:return Qo(wn(n),wn(t));case 5:return Cs(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ne(o),h=ne(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=B(l[f],h[f]);if(m!==0)return m}return B(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=B(et(o.latitude),et(a.latitude));return l!==0?l:B(et(o.longitude),et(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Yo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var I,b,N,x;const l=o.fields||{},h=a.fields||{},f=(I=l[mr])==null?void 0:I.arrayValue,m=(b=h[mr])==null?void 0:b.arrayValue,T=B(((N=f==null?void 0:f.values)==null?void 0:N.length)||0,((x=m==null?void 0:m.values)==null?void 0:x.length)||0);return T!==0?T:Yo(f,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Zn.mapValue&&a===Zn.mapValue)return 0;if(o===Zn.mapValue)return 1;if(a===Zn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const I=Cs(h[T],m[T]);if(I!==0)return I;const b=Me(l[h[T]],f[m[T]]);if(b!==0)return b}return B(h.length,m.length)})(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function Qo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ee(n),r=ee(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function Yo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Me(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function Le(n){return bs(n)}function bs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ne(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=bs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${bs(e.fields[a])}`;return s+"}"})(n.mapValue):M(61005,{value:n})}function rr(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Sr(n);return t?16+rr(t):16;case 5:return 2*n.stringValue.length;case 6:return ne(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+rr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return oe(r.fields,((o,a)=>{s+=o.length+rr(a)})),s})(n.mapValue);default:throw M(13486,{value:n})}}function Jo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ps(n){return!!n&&"integerValue"in n}function Js(n){return!!n&&"arrayValue"in n}function Xo(n){return!!n&&"nullValue"in n}function Zo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sr(n){return!!n&&"mapValue"in n}function Tf(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[hu])==null?void 0:r.stringValue)===fu}function gn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return oe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=gn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=gn(n.arrayValue.values[e]);return t}return{...n}}function If(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ef}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=gn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];sr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){oe(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new wt(gn(this.value))}}function du(n){const t=[];return oe(n.fields,((e,r)=>{const s=new lt([e]);if(sr(r)){const o=du(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.position=t,this.inclusive=e}}function ta(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ea(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ft(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e="asc"){this.field=t,this.dir=e}}function vf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{}class rt extends mu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Af(t,e,r):e==="array-contains"?new Cf(t,r):e==="in"?new bf(t,r):e==="not-in"?new Pf(t,r):e==="array-contains-any"?new Vf(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Rf(t,r):new Sf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Me(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends mu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Vt(t,e)}matches(t){return pu(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pu(n){return n.op==="and"}function gu(n){return wf(n)&&pu(n)}function wf(n){for(const t of n.filters)if(t instanceof Vt)return!1;return!0}function Vs(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(gu(n))return n.filters.map((t=>Vs(t))).join(",");{const t=n.filters.map((e=>Vs(e))).join(",");return`${n.op}(${t})`}}function _u(n,t){return n instanceof rt?(function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)})(n,t):n instanceof Vt?(function(r,s){return s instanceof Vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&_u(a,s.filters[l])),!0):!1})(n,t):void M(19439)}function yu(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`})(n):n instanceof Vt?(function(e){return e.op.toString()+" {"+e.getFilters().map(yu).join(" ,")+"}"})(n):"Filter"}class Af extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rf extends rt{constructor(t,e){super(t,"in",e),this.keys=Eu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sf extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Eu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Eu(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class Cf extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Js(e)&&Rn(e.arrayValue,this.value)}}class bf extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class Pf extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Rn(this.value.arrayValue,e)}}class Vf extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Js(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Rn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function na(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Df(n,t,e,r,s,o,a)}function Xs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Vs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Le(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Le(r))).join(",")),t.Te=e}return t.Te}function Zs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!vf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_u(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ea(n.startAt,t.startAt)&&ea(n.endAt,t.endAt)}function Ds(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Nf(n,t,e,r,s,o,a,l){return new ze(n,t,e,r,s,o,a,l)}function Cr(n){return new ze(n)}function ra(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kf(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Tu(n){return n.collectionGroup!==null}function _n(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ot(lt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Sn(o,r))})),e.has(lt.keyField().canonicalString())||t.Ie.push(new Sn(lt.keyField(),r))}return t.Ie}function xt(n){const t=F(n);return t.Ee||(t.Ee=xf(t,_n(n))),t.Ee}function xf(n,t){if(n.limitType==="F")return na(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Sn(s.field,o)}));const e=n.endAt?new pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pr(n.startAt.position,n.startAt.inclusive):null;return na(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ns(n,t){const e=n.filters.concat([t]);return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Of(n,t){const e=n.explicitOrderBy.concat([t]);return new ze(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function ks(n,t,e){return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function br(n,t){return Zs(xt(n),xt(t))&&n.limitType===t.limitType}function Iu(n){return`${Xs(xt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>yu(s))).join(", ")}]`),Rr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Le(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Le(s))).join(",")),`Target(${r})`})(xt(n))}; limitType=${n.limitType})`}function Pr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of _n(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const f=ta(a,l,h);return a.inclusive?f<=0:f<0})(r.startAt,_n(r),s)||r.endAt&&!(function(a,l,h){const f=ta(a,l,h);return a.inclusive?f>=0:f>0})(r.endAt,_n(r),s))})(n,t)}function Mf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vu(n){return(t,e)=>{let r=!1;for(const s of _n(n)){const o=Lf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Lf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Me(h,f):M(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){oe(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return iu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new X(O.comparator);function qt(){return Ff}const wu=new X(O.comparator);function hn(...n){let t=wu;for(const e of n)t=t.insert(e.key,e);return t}function Au(n){let t=wu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function pe(){return yn()}function Ru(){return yn()}function yn(){return new ve((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Uf=new X(O.comparator),Bf=new ot(O.comparator);function q(...n){let t=Bf;for(const e of n)t=t.add(e);return t}const qf=new ot(B);function jf(){return qf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function Su(n){return{integerValue:""+n}}function $f(n,t){return df(t)?Su(t):ti(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this._=void 0}}function zf(n,t,e){return n instanceof Cn?(function(s,o){const a={fields:{[uu]:{stringValue:au},[lu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ys(o)&&(o=Sr(o)),o&&(a.fields[cu]=o),{mapValue:a}})(e,t):n instanceof bn?bu(n,t):n instanceof Pn?Pu(n,t):(function(s,o){const a=Cu(s,o),l=sa(a)+sa(s.Ae);return Ps(a)&&Ps(s.Ae)?Su(l):ti(s.serializer,l)})(n,t)}function Gf(n,t,e){return n instanceof bn?bu(n,t):n instanceof Pn?Pu(n,t):e}function Cu(n,t){return n instanceof gr?(function(r){return Ps(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Cn extends Vr{}class bn extends Vr{constructor(t){super(),this.elements=t}}function bu(n,t){const e=Vu(t);for(const r of n.elements)e.some((s=>Ft(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Pn extends Vr{constructor(t){super(),this.elements=t}}function Pu(n,t){let e=Vu(t);for(const r of n.elements)e=e.filter((s=>!Ft(s,r)));return{arrayValue:{values:e}}}class gr extends Vr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function sa(n){return et(n.integerValue||n.doubleValue)}function Vu(n){return Js(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e){this.field=t,this.transform=e}}function Kf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof bn&&s instanceof bn||r instanceof Pn&&s instanceof Pn?Oe(r.elements,s.elements,Ft):r instanceof gr&&s instanceof gr?Ft(r.Ae,s.Ae):r instanceof Cn&&s instanceof Cn})(n.transform,t.transform)}class Wf{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dr{}function Du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ku(n.key,bt.none()):new Dn(n.key,n.data,bt.none());{const e=n.data,r=wt.empty();let s=new ot(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ae(n.key,r,new Rt(s.toArray()),bt.none())}}function Qf(n,t,e){n instanceof Dn?(function(s,o,a){const l=s.value.clone(),h=oa(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ae?(function(s,o,a){if(!ir(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=oa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Nu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function En(n,t,e,r){return n instanceof Dn?(function(o,a,l,h){if(!ir(o.precondition,a))return l;const f=o.value.clone(),m=aa(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof ae?(function(o,a,l,h){if(!ir(o.precondition,a))return l;const f=aa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Nu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((T=>T.field)))})(n,t,e,r):(function(o,a,l){return ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function Yf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Cu(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function ia(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oe(r,s,((o,a)=>Kf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Dn extends Dr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ae extends Dr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Nu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function oa(n,t,e){const r=new Map;G(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Gf(a,l,e[s]))}return r}function aa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,zf(o,a,t))}return r}class ku extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jf extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Qf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ru();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Du(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Oe(this.mutations,t.mutations,((e,r)=>ia(e,r)))&&Oe(this.baseMutations,t.baseMutations,((e,r)=>ia(e,r)))}}class ei{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){G(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return Uf})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ei(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,j;function ed(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function xu(n){if(n===void 0)return Bt("GRPC error has no .code"),S.UNKNOWN;switch(n){case nt.OK:return S.OK;case nt.CANCELLED:return S.CANCELLED;case nt.UNKNOWN:return S.UNKNOWN;case nt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case nt.INTERNAL:return S.INTERNAL;case nt.UNAVAILABLE:return S.UNAVAILABLE;case nt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case nt.NOT_FOUND:return S.NOT_FOUND;case nt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case nt.ABORTED:return S.ABORTED;case nt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case nt.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(j=nt||(nt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Jt([4294967295,4294967295],0);function ua(n){const t=nd().encode(n),e=new Wa;return e.update(t),new Uint8Array(e.digest())}function ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Jt([e,r],0),new Jt([s,o],0)]}class ni{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new fn(`Invalid padding: ${e}`);if(r<0)throw new fn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new fn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Jt.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Jt.fromNumber(r)));return s.compare(rd)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ua(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ni(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=ua(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Nn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Nr(L.min(),s,new X(B),qt(),q())}}class Nn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Nn(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Ou{constructor(t,e){this.targetId=t,this.Ce=e}}class Mu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class la{constructor(){this.ve=0,this.Fe=ha(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=q(),e=q(),r=q();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}})),new Nn(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=ha()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class sd{constructor(t){this.Ge=t,this.ze=new Map,this.je=qt(),this.He=tr(),this.Je=tr(),this.Ze=new X(B)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ds(o))if(r===0){const a=new O(o.path);this.et(e,a,_t.newNoDocument(a,L.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ne(r).toUint8Array()}catch(h){if(h instanceof ou)return ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ni(a,s,o)}catch(h){return ye(h instanceof fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ds(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,_t.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let r=q();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new Nr(t,e,this.Ze,this.je,r);return this.je=qt(),this.He=tr(),this.Je=tr(),this.Ze=new X(B),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new la,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new ot(B),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new ot(B),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new la),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function tr(){return new X(O.comparator)}function ha(){return new X(O.comparator)}const id={asc:"ASCENDING",desc:"DESCENDING"},od={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ad={and:"AND",or:"OR"};class ud{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function xs(n,t){return n.useProto3Json||Rr(t)?t:{value:t}}function _r(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function cd(n,t){return _r(n,t.toTimestamp())}function Ot(n){return G(!!n,49232),L.fromTimestamp((function(e){const r=ee(e);return new J(r.seconds,r.nanos)})(n))}function ri(n,t){return Os(n,t).canonicalString()}function Os(n,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Fu(n){const t=Q.fromString(n);return G($u(t),10190,{key:t.toString()}),t}function Ms(n,t){return ri(n.databaseId,t.path)}function _s(n,t){const e=Fu(t);if(e.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Bu(e))}function Uu(n,t){return ri(n.databaseId,t)}function ld(n){const t=Fu(n);return t.length===4?Q.emptyPath():Bu(t)}function Ls(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bu(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fa(n,t,e){return{name:Ms(n,t),fields:e.value.mapValue.fields}}function hd(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?S.UNKNOWN:xu(f.code);return new V(m,f.message||"")})(a);e=new Mu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=_s(n,r.document.name),o=Ot(r.document.updateTime),a=r.document.createTime?Ot(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];e=new or(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=_s(n,r.document),o=r.readTime?Ot(r.readTime):L.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new or([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=_s(n,r.document),o=r.removedTargetIds||[];e=new or([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new td(s,o),l=r.targetId;e=new Ou(l,a)}}return e}function fd(n,t){let e;if(t instanceof Dn)e={update:fa(n,t.key,t.value)};else if(t instanceof ku)e={delete:Ms(n,t.key)};else if(t instanceof ae)e={update:fa(n,t.key,t.data),updateMask:Id(t.fieldMask)};else{if(!(t instanceof Jf))return M(16599,{dt:t.type});e={verify:Ms(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Cn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:cd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(n,t.precondition)),e}function dd(n,t){return n&&n.length>0?(G(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ot(s.updateTime):Ot(o);return a.isEqual(L.min())&&(a=Ot(o)),new Wf(a,s.transformResults||[])})(e,t)))):[]}function md(n,t){return{documents:[Uu(n,t.path)]}}function pd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Uu(n,s);const o=(function(f){if(f.length!==0)return ju(Vt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((m=>(function(I){return{field:Ve(I.field),direction:yd(I.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=xs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:s}}function gd(n){let t=ld(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){G(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(T){const I=qu(T);return I instanceof Vt&&gu(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(T){return T.map((I=>(function(N){return new Sn(De(N.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(e.orderBy));let l=null;e.limit&&(l=(function(T){let I;return I=typeof T=="object"?T.value:T,Rr(I)?null:I})(e.limit));let h=null;e.startAt&&(h=(function(T){const I=!!T.before,b=T.values||[];return new pr(b,I)})(e.startAt));let f=null;return e.endAt&&(f=(function(T){const I=!T.before,b=T.values||[];return new pr(b,I)})(e.endAt)),Nf(t,s,a,o,l,"F",h,f)}function _d(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=De(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=De(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=De(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=De(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(De(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Vt.create(e.compositeFilter.filters.map((r=>qu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(n):M(30097,{filter:n})}function yd(n){return id[n]}function Ed(n){return od[n]}function Td(n){return ad[n]}function Ve(n){return{fieldPath:n.canonicalString()}}function De(n){return lt.fromServerFormat(n.fieldPath)}function ju(n){return n instanceof rt?(function(e){if(e.op==="=="){if(Zo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(e.field),op:Ed(e.op),value:e.value}}})(n):n instanceof Vt?(function(e){const r=e.getFilters().map((s=>ju(s)));return r.length===1?r[0]:{compositeFilter:{op:Td(e.op),filters:r}}})(n):M(54877,{filter:n})}function Id(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function $u(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function zu(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,r,s,o=L.min(),a=L.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.yt=t}}function wd(n){const t=gd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ks(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Sn=new Rd}addToCollectionParentIndex(t,e){return this.Sn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(te.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Rd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Gu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Fe(0)}static ar(){return new Fe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="LruGarbageCollector",Sd=1048576;function pa([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class Cd{constructor(t){this.Pr=t,this.buffer=new ot(pa),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();pa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(ma,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$e(e)?D(ma,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Ar(3e5)}))}}class Pd{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Ar.ce);const r=new Cd(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(da)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,l,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s)))).next((T=>(r=T,l=Date.now(),this.removeTargets(t,r,e)))).next((T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((T=>(f=Date.now(),be()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T}))))}}function Vd(n,t){return new Pd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.changes=new ve((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&En(r.mutation,s,Rt.empty(),J.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const s=pe();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=hn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=qt();const a=yn(),l=(function(){return yn()})();return e.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ae)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),En(m.mutation,f,m.mutation.getFieldMask(),J.now())):a.set(f.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,m)=>a.set(f,m))),e.forEach(((f,m)=>l.set(f,new Nd(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=yn();let s=new X(((a,l)=>a-l)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Rt.empty();m=l.applyToLocalView(f,m),r.set(h,m);const T=(s.get(l.batchId)||q()).add(h);s=s.insert(l.batchId,T)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,T=Ru();m.forEach((I=>{if(!o.has(I)){const b=Du(e.get(I),r.get(I));b!==null&&T.set(I,b),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return kf(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Tu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(pe());let l=vn,h=o;return a.next((f=>C.forEach(f,((m,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next((I=>{h=h.insert(m,I)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,q()))).next((m=>({batchId:l,changes:Au(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=hn();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(h=>{const f=(function(T,I){return new ze(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((m=>{m.forEach(((T,I)=>{a=a.insert(T,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))}));let l=hn();return a.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&En(m.mutation,f,Rt.empty(),J.now()),Pr(e,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return C.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ot(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:wd(s.bundledQuery),readTime:Ot(s.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.overlays=new X(O.comparator),this.Lr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.bt(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=pe(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=s)););return C.resolve(l)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zf(e,r));let o=this.Lr.get(e);o===void 0&&(o=q(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.kr=new ot(ut.Kr),this.qr=new ot(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ut(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new O(new Q([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new Q([])),r=new ut(e,t),s=new ut(e,t+1);let o=q();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ut(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return O.comparator(t.key,e.key)||B(t.Hr,e.Hr)}static Ur(t,e){return B(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new ot(ut.Kr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Qs:this.Yn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach((s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ut(new O(o),0);let l=new ot(B);return this.Jr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Hr)),!0)}),a),C.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){G(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return C.forEach(e.mutations,(s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new ut(e,0),s=this.Jr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.ti=t,this.docs=(function(){return new X(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||cf(uf(m),r)<=0||(s.has(m.key)||Pr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ni(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Ud(this)}getSize(t){return C.resolve(this.size)}}class Ud extends Dd{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.persistence=t,this.ri=new ve((e=>Xs(e)),Zs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ii=0,this.si=new si,this.targetCount=0,this.oi=Fe._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),C.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.lr(e),C.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e){this._i={},this.overlays={},this.ai=new Ar(0),this.ui=!1,this.ui=!0,this.ci=new Md,this.referenceDelegate=t(this),this.li=new Bd(this),this.indexManager=new Ad,this.remoteDocumentCache=(function(s){return new Fd(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new vd(e),this.Pi=new xd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Ld(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new qd(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return C.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class qd extends hf{constructor(t){super(),this.currentSequenceNumber=t}}class ii{constructor(t){this.persistence=t,this.Ri=new si,this.Ai=null}static Vi(t){return new ii(t)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(r=>{const s=O.fromPath(r);return this.mi(t,s).next((o=>{o||e.removeEntry(s,L.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class yr{constructor(t,e){this.persistence=t,this.fi=new ve((r=>mf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Vd(this,e)}static Vi(t,e){return new yr(t,e)}Ti(){}Ii(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return C.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),C.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rr(t.data.value)),e}wr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new oi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Cl()?8:ff(Gs())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new jd;return this.ys(t,e,a).next((l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)}))})).next((()=>o.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(be()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(be()<=$.DEBUG&&D("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(be()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):C.resolve())}gs(t,e){if(ra(e))return C.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ks(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=q(...o);return this.fs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const f=this.bs(e,l);return this.Ss(e,f,a,h.readTime)?this.gs(t,ks(e,null,"F")):this.Ds(t,f,e,h)}))))})))))}ps(t,e,r,s){return ra(e)||s.isEqual(L.min())?C.resolve(null):this.fs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?C.resolve(null):(be()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.Ds(t,a,e,af(s,vn)).next((l=>l)))}))}bs(t,e){let r=new ot(vu(t));return e.forEach(((s,o)=>{Pr(t,o)&&(r=r.add(o))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return be()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.fs.getDocumentsMatchingQuery(t,e,te.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="LocalStore",zd=3e8;class Gd{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new X(B),this.Fs=new ve((o=>Xs(o)),Zs),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kd(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Hd(n,t,e,r){return new Gd(n,t,e,r)}async function Ku(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((f=>({Ns:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Kd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const T=f.batch,I=T.keys();let b=C.resolve();return I.forEach((N=>{b=b.next((()=>m.getEntry(h,N))).next((x=>{const k=f.docVersions.get(N);G(k!==null,48541),x.version.compareTo(k)<0&&(T.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(h,T)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=q();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Wu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Wd(n,t){const e=F(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const l=[];t.targetChanges.forEach(((m,T)=>{const I=s.get(T);if(!I)return;l.push(e.li.removeMatchingKeys(o,m.removedDocuments,T).next((()=>e.li.addMatchingKeys(o,m.addedDocuments,T))));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?b=b.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(T,b),(function(x,k,H){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=zd?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(I,b,m)&&l.push(e.li.updateTargetData(o,b))}));let h=qt(),f=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(Qd(o,a,t.documentUpdates).next((m=>{h=m.Bs,f=m.Ls}))),!r.isEqual(L.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next((T=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.vs=s,o)))}function Qd(n,t,e){let r=q(),s=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=qt();return e.forEach(((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(ai,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function Yd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Qs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Jd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new Wt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}async function Fs(n,t,e){const r=F(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!$e(a))throw a;D(ai,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function ga(n,t,e){const r=F(n);let s=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const T=F(h),I=T.Fs.get(m);return I!==void 0?C.resolve(T.vs.get(I)):T.li.getTargetData(f,m)})(r,a,xt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:q()))).next((l=>(Xd(r,Mf(t),l),{documents:l,ks:o})))))}function Xd(n,t,e){let r=n.Ms.get(t)||L.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Ms.set(t,r)}class _a{constructor(){this.activeTargetIds=jf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zd{constructor(){this.vo=new _a,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new _a,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="ConnectivityMonitor";class Ea{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(ya,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er=null;function Us(){return er===null?er=(function(){return 268435456+Math.round(2147483648*Math.random())})():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="RestConnection",em={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nm{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===dr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Us(),l=this.Qo(t,e.toUriEncodedString());D(ys,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:f}=new URL(l),m=zs(f);return this.zo(t,l,h,r,m).then((T=>(D(ys,`Received RPC '${t}' ${a}: `,T),T)),(T=>{throw ye(ys,`RPC '${t}' ${a} failed with error: `,T,"url: ",l,"request:",r),T}))}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+qe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const r=em[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection",cn=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ne extends nm{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Ne.c_){const t=Xa();cn(t,Ja.STAT_EVENT,(e=>{e.stat===Ss.PROXY?D(pt,"STAT_EVENT: detected buffering proxy"):e.stat===Ss.NOPROXY&&D(pt,"STAT_EVENT: detected no buffering proxy")})),Ne.c_=!0}}zo(t,e,r,s,o){const a=Us();return new Promise(((l,h)=>{const f=new Qa;f.setWithCredentials(!0),f.listenOnce(Ya.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case nr.NO_ERROR:const T=f.getResponseJson();D(pt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),l(T);break;case nr.TIMEOUT:D(pt,`RPC '${t}' ${a} timed out`),h(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const I=f.getStatus();if(D(pt,`RPC '${t}' ${a} failed with status:`,I,"response text:",f.getResponseText()),I>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const x=(function(H){const z=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN})(N.status);h(new V(x,N.message))}else h(new V(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new V(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(pt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);D(pt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=Us(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const f=o.join("");D(pt,`Creating RPC '${t}' stream ${s}: ${f}`,l);const m=a.createWebChannel(f,l);this.I_(m);let T=!1,I=!1;const b=new rm({Ho:N=>{I?D(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(T||(D(pt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),D(pt,`RPC '${t}' stream ${s} sending:`,N),m.send(N))},Jo:()=>m.close()});return cn(m,ln.EventType.OPEN,(()=>{I||(D(pt,`RPC '${t}' stream ${s} transport opened.`),b.i_())})),cn(m,ln.EventType.CLOSE,(()=>{I||(I=!0,D(pt,`RPC '${t}' stream ${s} transport closed`),b.o_(),this.E_(m))})),cn(m,ln.EventType.ERROR,(N=>{I||(I=!0,ye(pt,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),b.o_(new V(S.UNAVAILABLE,"The operation could not be completed")))})),cn(m,ln.EventType.MESSAGE,(N=>{var x;if(!I){const k=N.data[0];G(!!k,16349);const H=k,z=(H==null?void 0:H.error)||((x=H[0])==null?void 0:x.error);if(z){D(pt,`RPC '${t}' stream ${s} received error:`,z);const W=z.status;let Tt=(function(E){const p=nt[E];if(p!==void 0)return xu(p)})(W),ft=z.message;W==="NOT_FOUND"&&ft.includes("database")&&ft.includes("does not exist")&&ft.includes(this.databaseId.database)&&ye(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Tt===void 0&&(Tt=S.INTERNAL,ft="Unknown error status: "+W+" with message "+z.message),I=!0,b.o_(new V(Tt,ft)),m.close()}else D(pt,`RPC '${t}' stream ${s} received:`,k),b.__(k)}})),Ne.u_(),setTimeout((()=>{b.s_()}),0),b}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Za()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){return new Ne(n)}function Es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n){return new ud(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.c_=!1;class Qu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="PersistentStream";class Yu{constructor(t,e,r,s,o,a,l,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(Ta,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(D(Ta,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class im extends Yu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=hd(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ot(a.readTime):L.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Ls(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ds(h)?{documents:md(o,h)}:{query:pd(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Lu(o,a.resumeToken);const f=xs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=_r(o,a.snapshotVersion.toTimestamp());const f=xs(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const r=_d(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Ls(this.serializer),e.removeTarget=t,this.K_(e)}}class om extends Yu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=dd(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ls(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>fd(this.serializer,r)))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{}class um extends am{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Os(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(S.UNKNOWN,o.toString())}))}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(t,Os(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function cm(n,t,e,r){return new um(n,t,e,r)}class lm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="RemoteStore";class hm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{we(this)&&(D(Ee,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ea.add(4),await kn(f),f.Va.set("Unknown"),f.Ea.delete(4),await xr(f)})(this))}))})),this.Va=new lm(r,s)}}async function xr(n){if(we(n))for(const t of n.Ra)await t(!0)}async function kn(n){for(const t of n.Ra)await t(!1)}function Ju(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),hi(e)?li(e):Ge(e).O_()&&ci(e,t))}function ui(n,t){const e=F(n),r=Ge(e);e.Ia.delete(t),r.O_()&&Xu(e,t),e.Ia.size===0&&(r.O_()?r.L_():we(e)&&e.Va.set("Unknown"))}function ci(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(n).Z_(t)}function Xu(n,t){n.da.$e(t),Ge(n).X_(t)}function li(n){n.da=new sd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ge(n).start(),n.Va.ua()}function hi(n){return we(n)&&!Ge(n).x_()&&n.Ia.size>0}function we(n){return F(n).Ea.size===0}function Zu(n){n.da=void 0}async function fm(n){n.Va.set("Online")}async function dm(n){n.Ia.forEach(((t,e)=>{ci(n,t)}))}async function mm(n,t){Zu(n),hi(n)?(n.Va.ha(t),li(n)):n.Va.set("Unknown")}async function pm(n,t,e){if(n.Va.set("Online"),t instanceof Mu&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))})(n,t)}catch(r){D(Ee,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Er(n,r)}else if(t instanceof or?n.da.Xe(t):t instanceof Ou?n.da.st(t):n.da.tt(t),!e.isEqual(L.min()))try{const r=await Wu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(f);m&&o.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),Xu(o,h);const T=new Wt(m.target,h,f,m.sequenceNumber);ci(o,T)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){D(Ee,"Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,t,e){if(!$e(t))throw t;n.Ea.add(1),await kn(n),n.Va.set("Offline"),e||(e=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(Ee,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await xr(n)}))}function tc(n,t){return t().catch((e=>Er(n,e,t)))}async function Or(n){const t=F(n),e=se(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Qs;for(;gm(t);)try{const s=await Yd(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,_m(t,s)}catch(s){await Er(t,s)}ec(t)&&nc(t)}function gm(n){return we(n)&&n.Ta.length<10}function _m(n,t){n.Ta.push(t);const e=se(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function ec(n){return we(n)&&!se(n).x_()&&n.Ta.length>0}function nc(n){se(n).start()}async function ym(n){se(n).ra()}async function Em(n){const t=se(n);for(const e of n.Ta)t.ea(e.mutations)}async function Tm(n,t,e){const r=n.Ta.shift(),s=ei.from(r,t,e);await tc(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Or(n)}async function Im(n,t){t&&se(n).Y_&&await(async function(r,s){if((function(a){return ed(a)&&a!==S.ABORTED})(s.code)){const o=r.Ta.shift();se(r).B_(),await tc(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Or(r)}})(n,t),ec(n)&&nc(n)}async function Ia(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(Ee,"RemoteStore received new credentials");const r=we(e);e.Ea.add(3),await kn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await xr(e)}async function vm(n,t){const e=F(n);t?(e.Ea.delete(2),await xr(e)):t||(e.Ea.add(2),await kn(e),e.Va.set("Unknown"))}function Ge(n){return n.ma||(n.ma=(function(e,r,s){const o=F(e);return o.sa(),new im(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:fm.bind(null,n),Yo:dm.bind(null,n),t_:mm.bind(null,n),J_:pm.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),hi(n)?li(n):n.Va.set("Unknown")):(await n.ma.stop(),Zu(n))}))),n.ma}function se(n){return n.fa||(n.fa=(function(e,r,s){const o=F(e);return o.sa(),new om(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ym.bind(null,n),t_:Im.bind(null,n),ta:Em.bind(null,n),na:Tm.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Or(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Ee,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new fi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),$e(n))return new V(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static emptySet(t){return new ke(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=hn(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.ga=new X(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ue{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Ue(t,e,ke.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class Am{constructor(){this.queries=wa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=wa(),o.forEach(((a,l)=>{for(const h of l.ba)h.onError(r)}))})(this,new V(S.ABORTED,"Firestore shutting down"))}}function wa(){return new ve((n=>Iu(n)),br)}async function rc(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new wm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=di(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&mi(e)}async function sc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Rm(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&mi(e)}function Sm(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function mi(n){n.Ca.forEach((t=>{t.next()}))}var Bs,Aa;(Aa=Bs||(Bs={})).Ma="default",Aa.Cache="cache";class ic{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ue(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ue.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Bs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.key=t}}class ac{constructor(t){this.key=t}}class Cm{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.eu=vu(t),this.tu=new ke(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new va,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,T)=>{const I=s.get(m),b=Pr(this.query,T)?T:null,N=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;I&&b?I.data.isEqual(b.data)?N!==x&&(r.track({type:3,doc:b}),k=!0):this.su(I,b)||(r.track({type:2,doc:b}),k=!0,(h&&this.eu(b,h)>0||f&&this.eu(b,f)<0)&&(l=!0)):!I&&b?(r.track({type:0,doc:b}),k=!0):I&&!b&&(r.track({type:1,doc:I}),k=!0,(h||f)&&(l=!0)),k&&(b?(a=a.add(b),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,T)=>(function(b,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:k})}};return x(b)-x(N)})(m.type,T.type)||this.eu(m.doc,T.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,f=h!==this.Xa;return this.Xa=h,a.length!==0||f?{snapshot:new Ue(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new va,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=q(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new ac(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new oc(r))})),e}cu(t){this.Za=t.ks,this.Ya=q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ue.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const pi="SyncEngine";class bm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Pm{constructor(t){this.key=t,this.hu=!1}}class Vm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ve((l=>Iu(l)),br),this.Iu=new Map,this.Eu=new Set,this.Ru=new X(O.comparator),this.Au=new Map,this.Vu=new si,this.du={},this.mu=new Map,this.fu=Fe.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Dm(n,t,e=!0){const r=dc(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await uc(r,t,e,!0),s}async function Nm(n,t){const e=dc(n);await uc(e,t,!0,!1)}async function uc(n,t,e,r){const s=await Jd(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await km(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ju(n.remoteStore,s),l}async function km(n,t,e,r,s){n.pu=(T,I,b)=>(async function(x,k,H,z){let W=k.view.ru(H);W.Ss&&(W=await ga(x.localStore,k.query,!1).then((({documents:E})=>k.view.ru(E,W))));const Tt=z&&z.targetChanges.get(k.targetId),ft=z&&z.targetMismatches.get(k.targetId)!=null,dt=k.view.applyChanges(W,x.isPrimaryClient,Tt,ft);return Sa(x,k.targetId,dt.au),dt.snapshot})(n,T,I,b);const o=await ga(n.localStore,t,!0),a=new Cm(t,o.ks),l=a.ru(o.documents),h=Nn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Sa(n,e,f.au);const m=new bm(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function xm(n,t,e){const r=F(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!br(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ui(r.remoteStore,s.targetId),qs(r,s.targetId)})).catch(je)):(qs(r,s.targetId),await Fs(r.localStore,s.targetId,!0))}async function Om(n,t){const e=F(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ui(e.remoteStore,r.targetId))}async function Mm(n,t,e){const r=$m(n);try{const s=await(function(a,l){const h=F(a),f=J.now(),m=l.reduce(((b,N)=>b.add(N.key)),q());let T,I;return h.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let N=qt(),x=q();return h.xs.getEntries(b,m).next((k=>{N=k,N.forEach(((H,z)=>{z.isValidDocument()||(x=x.add(H))}))})).next((()=>h.localDocuments.getOverlayedDocuments(b,N))).next((k=>{T=k;const H=[];for(const z of l){const W=Yf(z,T.get(z.key).overlayedDocument);W!=null&&H.push(new ae(z.key,W,du(W.value.mapValue),bt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,f,H,l)})).next((k=>{I=k;const H=k.applyToLocalDocumentSet(T,x);return h.documentOverlayCache.saveOverlays(b,k.batchId,H)}))})).then((()=>({batchId:I.batchId,changes:Au(T)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let f=a.du[a.currentUser.toKey()];f||(f=new X(B)),f=f.insert(l,h),a.du[a.currentUser.toKey()]=f})(r,s.batchId,e),await xn(r,s.changes),await Or(r.remoteStore)}catch(s){const o=di(s,"Failed to persist write");e.reject(o)}}async function cc(n,t){const e=F(n);try{const r=await Wd(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))})),await xn(e,r,t)}catch(r){await je(r)}}function Ra(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,T)=>{for(const I of T.ba)I.va(l)&&(f=!0)})),f&&mi(h)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Lm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new X(O.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const l=q().add(o),h=new Nr(L.min(),new Map,new X(B),a,l);await cc(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),gi(r)}else await Fs(r.localStore,t,!1).then((()=>qs(r,t,e))).catch(je)}async function Fm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Kd(e.localStore,t);hc(e,r,null),lc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await xn(e,s)}catch(s){await je(s)}}async function Um(n,t,e){const r=F(n);try{const s=await(function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((T=>(G(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(f,T)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,t);hc(r,t,e),lc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await xn(r,s)}catch(s){await je(s)}}function lc(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function hc(n,t,e){const r=F(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||fc(n,r)}))}function fc(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(ui(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),gi(n))}function Sa(n,t,e){for(const r of e)r instanceof oc?(n.Vu.addReference(r.key,t),Bm(n,r)):r instanceof ac?(D(pi,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||fc(n,r.key)):M(19791,{wu:r})}function Bm(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(D(pi,"New document in limbo: "+e),n.Eu.add(r),gi(n))}function gi(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Q.fromString(t)),r=n.fu.next();n.Au.set(r,new Pm(e)),n.Ru=n.Ru.insert(e,r),Ju(n.remoteStore,new Wt(xt(Cr(e.path)),r,"TargetPurposeLimboResolution",Ar.ce))}}async function xn(n,t,e){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((f=>{var m;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){s.push(f);const T=oi.Es(h.targetId,f);o.push(T)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>C.forEach(f,(I=>C.forEach(I.Ts,(b=>m.persistence.referenceDelegate.addReference(T,I.targetId,b))).next((()=>C.forEach(I.Is,(b=>m.persistence.referenceDelegate.removeReference(T,I.targetId,b)))))))))}catch(T){if(!$e(T))throw T;D(ai,"Failed to update sequence numbers: "+T)}for(const T of f){const I=T.targetId;if(!T.fromCache){const b=m.vs.get(I),N=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(N);m.vs=m.vs.insert(I,x)}}})(r.localStore,o))}async function qm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(pi,"User change. New user:",t.toKey());const r=await Ku(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new V(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xn(e,r.Ns)}}function jm(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return q().add(r.key);{let s=q();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function dc(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=cc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lm.bind(null,t),t.Pu.J_=Rm.bind(null,t.eventManager),t.Pu.yu=Sm.bind(null,t.eventManager),t}function $m(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Um.bind(null,t),t}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=kr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Hd(this.persistence,new $d,t.initialUser,this.serializer)}Cu(t){return new Hu(ii.Vi,this.serializer)}Du(t){return new Zd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class zm extends Tr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){G(this.persistence.referenceDelegate instanceof yr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Hu((r=>yr.Vi(r,e)),this.serializer)}}class js{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ra(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qm.bind(null,this.syncEngine),await vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Am})()}createDatastore(t){const e=kr(t.databaseInfo.databaseId),r=sm(t.databaseInfo);return cm(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new hm(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ra(this.syncEngine,e,0)),(function(){return Ea.v()?new Ea:new tm})())}createSyncEngine(t,e){return(function(s,o,a,l,h,f,m){const T=new Vm(s,o,a,l,h,f);return m&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=F(s);D(Ee,"RemoteStore shutting down."),o.Ea.add(5),await kn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}js.provider={build:()=>new js};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="FirestoreClient";class Gm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Ws.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{D(ie,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(D(ie,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=di(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ts(n,t){n.asyncQueue.verifyOperationInProgress(),D(ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ku(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Ca(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Hm(n);D(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Ia(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ia(t.remoteStore,s))),n._onlineComponents=t}async function Hm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ie,"Using user provided OfflineComponentProvider");try{await Ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await Ts(n,new Tr)}}else D(ie,"Using default OfflineComponentProvider"),await Ts(n,new zm(void 0));return n._offlineComponents}async function pc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ie,"Using user provided OnlineComponentProvider"),await Ca(n,n._uninitializedComponentsProvider._online)):(D(ie,"Using default OnlineComponentProvider"),await Ca(n,new js))),n._onlineComponents}function Km(n){return pc(n).then((t=>t.syncEngine))}async function $s(n){const t=await pc(n),e=t.eventManager;return e.onListen=Dm.bind(null,t.syncEngine),e.onUnlisten=xm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Nm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Om.bind(null,t.syncEngine),e}function Wm(n,t,e,r){const s=new mc(r),o=new ic(t,s,e);return n.asyncQueue.enqueueAndForget((async()=>rc(await $s(n),o))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>sc(await $s(n),o)))}}function Qm(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,f){const m=new mc({next:I=>{m.Nu(),a.enqueueAndForget((()=>sc(o,T)));const b=I.docs.has(l);!b&&I.fromCache?f.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?f.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(I)},error:I=>f.reject(I)}),T=new ic(Cr(l.path),m,{includeMetadataChanges:!0,Ka:!0});return rc(o,T)})(await $s(n),n.asyncQueue,t,e,r))),r.promise}function Ym(n,t){const e=new Xt;return n.asyncQueue.enqueueAndForget((async()=>Mm(await Km(n),t,e))),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="ComponentProvider",ba=new Map;function Xm(n,t,e,r,s){return new _f(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,gc(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="firestore.googleapis.com",Pa=!0;class Va{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_c,this.ssl=Pa}else this.host=t.host,this.ssl=t.ssl??Pa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Gu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Sd)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}of("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gc(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Va({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Va(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Qh;switch(r.type){case"firstParty":return new Zh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=ba.get(e);r&&(D(Jm,"Removing Datastore"),ba.delete(e),r.terminate())})(this),Promise.resolve()}}function Zm(n,t,e,r={}){var f;n=Ct(n,Mr);const s=zs(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(Il(`https://${l}`),Rl("Firestore",!0)),o.host!==_c&&o.host!==l&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!cr(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=gt.MOCK_USER;else{m=vl(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new gt(I)}n._authCredentials=new Yh(new eu(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ae(this.firestore,t,this._query)}}class tt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Vn(e,tt._jsonSchema))return new tt(t,r||null,new O(Q.fromString(e.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:st("string",tt._jsonSchemaVersion),referencePath:st("string")};class Zt extends Ae{constructor(t,e,r){super(t,e,Cr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new O(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function wp(n,t,...e){if(n=Lt(n),nu("collection","path",t),n instanceof Mr){const r=Q.fromString(t,...e);return $o(r),new Zt(n,null,r)}{if(!(n instanceof tt||n instanceof Zt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return $o(r),new Zt(n.firestore,null,r)}}function tp(n,t,...e){if(n=Lt(n),arguments.length===1&&(t=Ws.newId()),nu("doc","path",t),n instanceof Mr){const r=Q.fromString(t,...e);return jo(r),new tt(n,null,new O(r))}{if(!(n instanceof tt||n instanceof Zt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return jo(r),new tt(n.firestore,n instanceof Zt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="AsyncQueue";class Na{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qu(this,"async_queue_retry"),this._c=()=>{const r=Es();r&&D(Da,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Es();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!$e(t))throw t;D(Da,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Bt("INTERNAL UNHANDLED ERROR: ",ka(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=fi.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:ka(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ka(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Te extends Mr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Na,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Na(t),this._firestoreClient=void 0,await t}}}function Ap(n,t){const e=typeof n=="object"?n:Lh(),r=typeof n=="string"?n:dr,s=Dh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=El("firestore");o&&Zm(s,...o)}return s}function _i(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ep(n),n._firestoreClient}function ep(n){var r,s,o,a;const t=n._freezeSettings(),e=Xm(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Gm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(ht.fromBase64String(t))}catch(e){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Vn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:st("string",St._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(t){if(Vn(t,Mt._jsonSchema))return new Mt(t.latitude,t.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:st("string",Mt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Vn(t,Pt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Pt(t.vectorValues);throw new V(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pt._jsonSchemaVersion="firestore/vectorValue/1.0",Pt._jsonSchema={type:st("string",Pt._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=/^__.*__$/;class rp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}class yc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ec(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class Ei{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Ei({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Ir(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Ec(this.dataSource)&&np.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class sp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||kr(t)}createContext(t,e,r,s=!1){return new Ei({dataSource:t,methodName:e,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fr(n){const t=n._freezeSettings(),e=kr(n._databaseId);return new sp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Tc(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);Ii("Data must be an object, but it was:",a,r);const l=Ic(r,a);let h,f;if(o.merge)h=new Rt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const I=Ie(t,T,e);if(!a.contains(I))throw new V(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ac(m,I)||m.push(I)}h=new Rt(m),f=a.fieldTransforms.filter((T=>h.covers(T.field)))}else h=null,f=a.fieldTransforms;return new rp(new wt(l),h,f)}class Ur extends Lr{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ur}}class Ti extends Lr{_toFieldTransform(t){return new Hf(t.path,new Cn)}isEqual(t){return t instanceof Ti}}function ip(n,t,e,r){const s=n.createContext(1,t,e);Ii("Data must be an object, but it was:",s,r);const o=[],a=wt.empty();oe(r,((h,f)=>{const m=wc(t,h,e);f=Lt(f);const T=s.childContextForFieldPath(m);if(f instanceof Ur)o.push(m);else{const I=On(f,T);I!=null&&(o.push(m),a.set(m,I))}}));const l=new Rt(o);return new yc(a,l,s.fieldTransforms)}function op(n,t,e,r,s,o){const a=n.createContext(1,t,e),l=[Ie(t,r,e)],h=[s];if(o.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)l.push(Ie(t,o[I])),h.push(o[I+1]);const f=[],m=wt.empty();for(let I=l.length-1;I>=0;--I)if(!Ac(f,l[I])){const b=l[I];let N=h[I];N=Lt(N);const x=a.childContextForFieldPath(b);if(N instanceof Ur)f.push(b);else{const k=On(N,x);k!=null&&(f.push(b),m.set(b,k))}}const T=new Rt(f);return new yc(m,T,a.fieldTransforms)}function ap(n,t,e,r=!1){return On(e,n.createContext(r?4:3,t))}function On(n,t){if(vc(n=Lt(n)))return Ii("Unsupported field value:",t,n),Ic(n,t);if(n instanceof Lr)return(function(r,s){if(!Ec(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=On(l,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $f(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:_r(s.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(s.serializer,o)}}if(r instanceof Mt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Lu(s.serializer,r._byteString)};if(r instanceof tt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ri(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pt)return(function(a,l){const h=a instanceof Pt?a.toArray():a;return{mapValue:{fields:{[hu]:{stringValue:fu},[mr]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw l.createError("VectorValues must only contain numeric values.");return ti(l.serializer,m)}))}}}}}})(r,s);if(zu(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${wr(r)}`)})(n,t)}function Ic(n,t){const e={};return iu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oe(n,((r,s)=>{const o=On(s,t.childContextForField(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Mt||n instanceof St||n instanceof tt||n instanceof Lr||n instanceof Pt||zu(n))}function Ii(n,t,e){if(!vc(e)||!ru(e)){const r=wr(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Ie(n,t,e){if((t=Lt(t))instanceof yi)return t._internalPath;if(typeof t=="string")return wc(n,t);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const up=new RegExp("[~\\*/\\[\\]]");function wc(n,t,e){if(t.search(up)>=0)throw Ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new yi(...t.split("."))._internalPath}catch{throw Ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ir(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new V(S.INVALID_ARGUMENT,l+n+h)}function Ac(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return oe(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[mr].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>et(a.doubleValue)));return new Pt(e)}convertGeoPoint(t){return new Mt(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Sr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const e=ee(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);G($u(r),9688,{name:t});const s=new An(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends cp{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}function Rp(){return new Ti("serverTimestamp")}const xa="@firebase/firestore",Oa="4.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Ie("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class lp extends Sc{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vi{}class Cc extends vi{}function Sp(n,t,...e){let r=[];t instanceof vi&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof wi)).length,l=o.filter((h=>h instanceof Br)).length;if(a>1||a>0&&l>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Br extends Cc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Br(t,e,r)}_apply(t){const e=this._parse(t);return bc(t._query,e),new Ae(t.firestore,t.converter,Ns(t._query,e))}_parse(t){const e=Fr(t.firestore);return(function(o,a,l,h,f,m,T){let I;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Fa(T,m);const N=[];for(const x of T)N.push(La(h,o,x));I={arrayValue:{values:N}}}else I=La(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Fa(T,m),I=ap(l,a,T,m==="in"||m==="not-in");return rt.create(f,m,I)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Cp(n,t,e){const r=t,s=Ie("where",n);return Br._create(s,r,e)}class wi extends vi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wi(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)bc(a,h),a=Ns(a,h)})(t._query,e),new Ae(t.firestore,t.converter,Ns(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ai extends Cc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ai(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sn(o,a)})(t._query,this._field,this._direction);return new Ae(t.firestore,t.converter,Of(t._query,e))}}function bp(n,t="asc"){const e=t,r=Ie("orderBy",n);return Ai._create(r,e)}function La(n,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tu(t)&&e.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Q.fromString(e));if(!O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jo(n,new O(r))}if(e instanceof tt)return Jo(n,e._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wr(e)}.`)}function Fa(n,t){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bc(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Pc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ge extends Sc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ie("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ge._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",ge._jsonSchema={type:st("string",ge._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class ar extends ge{data(t={}){return super.data(t)}}class xe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new dn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ar(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new ar(s._firestore,s._userDataWriter,l.doc.key,l.doc,new dn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new ar(s._firestore,s._userDataWriter,l.doc.key,l.doc,new dn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:fp(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ws.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function fp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe._jsonSchemaVersion="firestore/querySnapshot/1.0",xe._jsonSchema={type:st("string",xe._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){n=Ct(n,tt);const t=Ct(n.firestore,Te),e=_i(t);return Qm(e,n._key).then((r=>Vc(t,n,r)))}function Vp(n,t,e){n=Ct(n,tt);const r=Ct(n.firestore,Te),s=Pc(n.converter,t),o=Fr(r);return Ri(r,[Tc(o,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,bt.none())])}function Dp(n,t,e,...r){n=Ct(n,tt);const s=Ct(n.firestore,Te),o=Fr(s);let a;return a=typeof(t=Lt(t))=="string"||t instanceof yi?op(o,"updateDoc",n._key,t,e,r):ip(o,"updateDoc",n._key,t),Ri(s,[a.toMutation(n._key,bt.exists(!0))])}function Np(n,t){const e=Ct(n.firestore,Te),r=tp(n),s=Pc(n.converter,t),o=Fr(n.firestore);return Ri(e,[Tc(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then((()=>r))}function kp(n,...t){var f,m,T;n=Lt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ma(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ma(t[r])){const I=t[r];t[r]=(f=I.next)==null?void 0:f.bind(I),t[r+1]=(m=I.error)==null?void 0:m.bind(I),t[r+2]=(T=I.complete)==null?void 0:T.bind(I)}let o,a,l;if(n instanceof tt)a=Ct(n.firestore,Te),l=Cr(n._key.path),o={next:I=>{t[r]&&t[r](Vc(a,n,I))},error:t[r+1],complete:t[r+2]};else{const I=Ct(n,Ae);a=Ct(I.firestore,Te),l=I._query;const b=new Rc(a);o={next:N=>{t[r]&&t[r](new xe(a,b,I,N))},error:t[r+1],complete:t[r+2]},hp(n._query)}const h=_i(a);return Wm(h,l,s,o)}function Ri(n,t){const e=_i(n);return Ym(e,t)}function Vc(n,t,e){const r=e.docs.get(t._key),s=new Rc(n);return new ge(n,s,t._key,r,new dn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Wh(Oh),hr(new Tn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Te(new Jh(r.getProvider("auth-internal")),new tf(a,r.getProvider("app-check-internal")),yf(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),pn(xa,Oa,t),pn(xa,Oa,"esm2020")})();export{$ as A,gp as B,dl as C,pp as D,ja as E,Be as F,hr as G,Tn as H,pn as I,Ip as J,Ap as K,$a as L,Mh as M,Oh as S,J as T,Dh as _,kp as a,Vp as b,wp as c,tp as d,Np as e,Lh as f,Pp as g,dp as h,yl as i,cr as j,Lt as k,zs as l,Rl as m,Nh as n,bp as o,Il as p,Sp as q,Gs as r,Rp as s,yp as t,Dp as u,Ep as v,Cp as w,Tp as x,mp as y,_p as z};
