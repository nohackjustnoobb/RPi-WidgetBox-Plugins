/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,J=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),tt=new WeakMap;let ut=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}};const yt=o=>new ut(typeof o=="string"?o:o+"",void 0,K),Z=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ut(e,o,K)},vt=(o,t)=>{if(J)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=j.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},et=J?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return yt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:At,getOwnPropertyDescriptor:bt,getOwnPropertyNames:wt,getOwnPropertySymbols:xt,getPrototypeOf:Et}=Object,v=globalThis,st=v.trustedTypes,St=st?st.emptyScript:"",F=v.reactiveElementPolyfillSupport,M=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?St:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},X=(o,t)=>!_t(o,t),it={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&At(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=bt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const l=i==null?void 0:i.call(this);n.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,s=[...wt(e),...xt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(et(i))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:D;this._$Em=i,this[i]=l.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??X)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[M("elementProperties")]=new Map,S[M("finalized")]=new Map,F==null||F({ReactiveElement:S}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,I=k.trustedTypes,ot=I?I.createPolicy("lit-html",{createHTML:o=>o}):void 0,mt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+y,Ct=`<${ft}>`,x=document,N=()=>x.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,Pt=o=>G(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",W=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,nt=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,lt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Ot=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Ot(1),P=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ht=new WeakMap,b=x.createTreeWalker(x,129);function gt(o,t){if(!G(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Tt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",r=U;for(let l=0;l<e;l++){const a=o[l];let c,p,h=-1,$=0;for(;$<a.length&&(r.lastIndex=$,p=r.exec(a),p!==null);)$=r.lastIndex,r===U?p[1]==="!--"?r=rt:p[1]!==void 0?r=nt:p[2]!==void 0?($t.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=i??U,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,c=p[1],r=p[3]===void 0?A:p[3]==='"'?lt:at):r===lt||r===at?r=A:r===rt||r===nt?r=U:(r=A,i=void 0);const g=r===A&&o[l+1].startsWith("/>")?" ":"";n+=r===U?a+Ct:h>=0?(s.push(c),a.slice(0,h)+mt+a.slice(h)+y+g):a+y+(h===-2?l:g)}return[gt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const l=t.length-1,a=this.parts,[c,p]=Tt(t,e);if(this.el=R.createElement(c,s),b.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=b.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(mt)){const $=p[r++],g=i.getAttribute(h).split(y),z=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:z[2],strings:g,ctor:z[1]==="."?Mt:z[1]==="?"?kt:z[1]==="@"?Nt:B}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:n}),i.removeAttribute(h));if($t.test(i.tagName)){const h=i.textContent.split(y),$=h.length-1;if($>0){i.textContent=I?I.emptyScript:"";for(let g=0;g<$;g++)i.append(h[g],N()),b.nextNode(),a.push({type:2,index:++n});i.append(h[$],N())}}}else if(i.nodeType===8)if(i.data===ft)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function O(o,t,e=o,s){var r,l;if(t===P)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=O(o,i._$AS(o,t.values),i,s)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??x).importNode(e,!0);b.currentNode=i;let n=b.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new L(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Ht(n,this,t)),this._$AV.push(c),a=s[++l]}r!==(a==null?void 0:a.index)&&(n=b.nextNode(),r++)}return b.currentNode=x,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(gt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const r=new Ut(i,this),l=r.u(this.options);r.p(e),this.T(l),this._$AH=r}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new R(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new L(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=O(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=O(this,l[s+a],e,a),c===P&&(c=this._$AH[a]),r||(r=!H(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class kt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Nt extends B{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??d)===P)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const V=k.litHtmlPolyfillSupport;V==null||V(R,L),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.2.1");const Rt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new L(t.insertBefore(N(),n),n,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}};var pt;w._$litElement$=!0,w.finalized=!0,(pt=globalThis.litElementHydrateSupport)==null||pt.call(globalThis,{LitElement:w});const q=globalThis.litElementPolyfillSupport;q==null||q({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:X},zt=(o=Lt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,o),s==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,o)},init(l){return l!==void 0&&this.P(r,void 0,o),l}}}if(s==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+s)};function f(o){return(t,e)=>typeof e=="object"?zt(o,t,e):((s,i,n)=>{const r=i.hasOwnProperty(n);return i.constructor.createProperty(n,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(o){return f({...o,state:!0,attribute:!1})}let jt=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
  <path
    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
  />
</svg>`,Dt=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
  <path
    d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"
  />
</svg>`,It=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
  <path
    d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"
  />
</svg>`,Bt=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
  <path
    d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"
  />
</svg>`;var Ft=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,u=(o,t,e,s)=>{for(var i=s>1?void 0:s?Wt(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Ft(t,e,i),i};async function C(o){return new Promise(t=>setTimeout(t,o))}function ct(o){return o?m`<img src="data:image/png;base64,${o}" />`:""}function dt(o){const t=Math.floor(o/60),e=Math.round(o%60);return`${t}:${e.toString().padStart(2,"0")}`}let _=class extends w{constructor(){super(...arguments),this.duration=60,this.elapsed=0,this.updateTime=0,this.paused=!1,this.calcatedElapsed=0}connectedCallback(){super.connectedCallback(),(async()=>{for(;this.isConnected;){await C(1e3);const o=this.elapsed+(Date.now()/1e3-this.updateTime);!this.paused&&o<=this.duration&&(this.calcatedElapsed=o)}})()}render(){return m`<div class="container">
      <div class="timeline">
        <span
          class="progress"
          style="width:${this.calcatedElapsed/this.duration*100}%;"
        ></span>
        <span class="bg"></span>
      </div>
      <div class="info">
        <span class="elapsed">${dt(this.calcatedElapsed)}</span>
        <span class="duration">${dt(this.duration)}</span>
      </div>
    </div>`}};_.styles=Z`
    :host {
      width: 100%;
      height: 100%;
      margin-top: 2rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .timeline {
      width: 100%;
      height: 1rem;
      border-radius: 0.5rem;
      position: relative;
      overflow: hidden;
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--color-text);
      width: 100%;
      height: 100%;
      opacity: 0.25;
    }

    .progress {
      background-color: var(--color-text);
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      transition: width 1s linear;
    }

    .info {
      display: flex;
      justify-content: space-between;
    }
  `;u([f({type:Number,attribute:"duration"})],_.prototype,"duration",2);u([f({type:Number,attribute:"elapsed"})],_.prototype,"elapsed",2);u([f({type:Number,attribute:"update-time"})],_.prototype,"updateTime",2);u([f({type:Boolean,attribute:"paused"})],_.prototype,"paused",2);u([Y()],_.prototype,"calcatedElapsed",2);_=u([Q("media-timeline")],_);let E=class extends w{constructor(){super(...arguments),this.duration=10,this.loopDuration=5,this.isOverflowed=!1}connectedCallback(){super.connectedCallback(),(async()=>{var o,t,e;for(;this.isConnected;){const s=(o=this.shadowRoot)==null?void 0:o.querySelector(".text"),i=(e=(t=this.shadowRoot)==null?void 0:t.host)==null?void 0:e.parentElement;if(!i||!s){await C(500);continue}const n=s.clientWidth,r=this.isOverflowed?n/2:n;if(i.clientWidth>=r){this.isOverflowed=!1,await C(500);continue}this.isOverflowed||(this.isOverflowed=!0),s.setAttribute("style",`transform:translateX(-50%);transition:transform ${this.duration}s linear`),await C(this.duration*1e3),s.removeAttribute("style"),await C(this.loopDuration*1e3)}})()}render(){const o=this.isOverflowed?`${this.text}  ${this.text}`:this.text;return m`<span class="text">${o}</span>`}};E.styles=Z`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .text {
      display: inline-block;
      white-space: nowrap;
    }
  `;u([f({attribute:"text"})],E.prototype,"text",2);u([f({type:Number,attribute:"duration"})],E.prototype,"duration",2);u([f({type:Number,attribute:"loop-duration"})],E.prototype,"loopDuration",2);u([Y()],E.prototype,"isOverflowed",2);E=u([Q("overflow-text")],E);let T=class extends w{constructor(){super(...arguments),this.backgroundColor="var(--color-background)",this.textColor="var(--color-text)"}connectedCallback(){super.connectedCallback(),this.subscribeToMessage()}async subscribeToMessage(){for(;!this.subscribe||!this.send;)await C(250);this.subscribe(o=>this.mediaActivity=o.data),this.send({type:"getState"})}render(){const o=(e,s)=>e?m`<div class=${s}>
            <overflow-text text="${e}"></overflow-text>
          </div>`:"",t=this.mediaActivity?m`<div class="media-info">
          <div class="artwork">
            <div class="album-cover">
              ${ct(this.mediaActivity.albumCover)}
            </div>
            <div class="app-icon">
              ${ct(this.mediaActivity.appIcon)}
            </div>
          </div>
          <div class="info">
            ${o(this.mediaActivity.title,"title")}
            ${o(this.mediaActivity.album,"album")}
            ${o(this.mediaActivity.artist,"artist")}
            <media-timeline
              duration="${this.mediaActivity.duration??60}"
              elapsed="${this.mediaActivity.elapsed??0}"
              update-time="${this.mediaActivity.infoUpdateTime??0}"
              ?paused="${!this.mediaActivity.isPlaying}"
            ></media-timeline>
            <div class="controller">
              <span @click=${()=>this.send({type:"prevTrack"})}
                >${Bt}</span
              >
              <span
                class="toggle"
                @click=${()=>{var e;return this.send({type:(e=this.mediaActivity)!=null&&e.isPlaying?"pauseMedia":"playMedia"})}}
              >
                ${this.mediaActivity.isPlaying?Dt:jt}
              </span>
              <span @click=${()=>this.send({type:"nextTrack"})}
                >${It}</span
              >
            </div>
          </div>
        </div>`:m`<h1 class="no-media">No Media Playing...</h1>`;return m`<div
      class="container"
      style="background: ${this.backgroundColor}; color: ${this.textColor};"
    >
      ${t}
    </div>`}};T.styles=Z`
    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 5rem;
      box-sizing: border-box;
    }

    .no-media {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-size: 10rem;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .media-info {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }

    .artwork {
      position: relative;
      width: 25rem;
      height: 25rem;
      flex-shrink: 0;
    }

    .album-cover {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      border-radius: 2rem;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .app-icon {
      width: 6rem;
      height: 6rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: 2rem;
      overflow: hidden;
    }

    .title {
      font-size: 3rem;
    }

    .album {
      opacity: 0.75;
    }

    .artist {
      opacity: 0.5;
    }

    .controller {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;
    }

    svg {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }

    path {
      fill: var(--color-text);
    }

    .toggle svg {
      width: 6rem;
      height: 6rem;
    }
  `;u([f({type:String,attribute:"background-color"})],T.prototype,"backgroundColor",2);u([f({type:String,attribute:"text-color"})],T.prototype,"textColor",2);u([Y()],T.prototype,"mediaActivity",2);T=u([Q("media-playback-live-activity")],T);export{T as default};
