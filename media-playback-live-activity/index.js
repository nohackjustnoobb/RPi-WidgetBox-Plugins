/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,V=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Z=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(e,t))}return t}toString(){return this.cssText}};const dt=r=>new nt(typeof r=="string"?r:r+"",void 0,W),pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new nt(e,r,W)},ut=(r,t)=>{if(V)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},F=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:ft,getOwnPropertyDescriptor:_t,getOwnPropertyNames:mt,getOwnPropertySymbols:gt,getPrototypeOf:yt}=Object,_=globalThis,G=_.trustedTypes,vt=G?G.emptyScript:"",L=_.reactiveElementPolyfillSupport,w=(r,t)=>r,R={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},q=(r,t)=>!$t(r,t),Q={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=_t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const h=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...mt(e),...gt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(F(i))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:R;this._$Em=i,this[i]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??q)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,L==null||L({ReactiveElement:v}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,k=C.trustedTypes,X=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+f,At=`<${ht}>`,y=document,x=()=>y.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",J=Array.isArray,bt=r=>J(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,tt=/>/g,m=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,lt=/^(?:script|style|textarea|title)$/i,Et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),N=Et(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),it=new WeakMap,g=y.createTreeWalker(y,129);function ct(r,t){if(!J(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const St=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=S;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===S?p[1]==="!--"?o=Y:p[1]!==void 0?o=tt:p[2]!==void 0?(lt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=m):p[3]!==void 0&&(o=m):o===m?p[0]===">"?(o=i??S,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?m:p[3]==='"'?st:et):o===st||o===et?o=m:o===Y||o===tt?o=S:(o=m,i=void 0);const $=o===m&&r[h+1].startsWith("/>")?" ":"";n+=o===S?a+At:l>=0?(s.push(c),a.slice(0,l)+at+a.slice(l)+f+$):a+f+(l===-2?h:$)}return[ct(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,p]=St(t,e);if(this.el=O.createElement(c,s),g.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=g.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(at)){const u=p[o++],$=i.getAttribute(l).split(f),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:H[2],strings:$,ctor:H[1]==="."?Ct:H[1]==="?"?Pt:H[1]==="@"?xt:z}),i.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(lt.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=k?k.emptyScript:"";for(let $=0;$<u;$++)i.append(l[$],x()),g.nextNode(),a.push({type:2,index:++n});i.append(l[u],x())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:n}),l+=f.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var o,h;if(t===A)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??y).importNode(e,!0);g.currentNode=i;let n=g.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new T(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Ut(n,this,t)),this._$AV.push(c),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=g.nextNode(),o++)}return g.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(ct(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new wt(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new O(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new T(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=b(this,h[s+a],e,a),c===A&&(c=this._$AH[a]),o||(o=!U(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Pt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class xt extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===A)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const I=C.litHtmlPolyfillSupport;I==null||I(O,T),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Ot=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new T(t.insertBefore(x(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}};var ot;P._$litElement$=!0,P.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:P});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:q},Mt=(r=Ht,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,r)},init(h){return h!==void 0&&this.P(o,void 0,r),h}}}if(s==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function K(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(r){return K({...r,state:!0,attribute:!1})}var Rt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,j=(r,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Rt(t,e,i),i};const zt=async r=>new Promise(t=>setTimeout(t,r)),rt=r=>r?N`<img src="data:image/png;base64,${r}" />`:"";let E=class extends P{constructor(){super(...arguments),this.backgroundColor="var(--color-background)",this.textColor="var(--color-text)"}connectedCallback(){super.connectedCallback(),this.subscribeToMessage()}async subscribeToMessage(){for(;!this.subscribe||!this.send;)await zt(250);this.subscribe(r=>this.mediaActivity=r.data),this.send({type:"getState"})}render(){const r=this.mediaActivity?N`<div class="media-info">
          <div class="artwork">
            <div class="album-cover">
              ${rt(this.mediaActivity.albumCover)}
            </div>
            <div class="app-icon">
              ${rt(this.mediaActivity.appIcon)}
            </div>
          </div>
          <div class="info">
            <div class="title">${this.mediaActivity.title}</div>
            <div class="album">${this.mediaActivity.album}</div>
            <div class="artist">${this.mediaActivity.artist}</div>
          </div>
        </div>`:N`<h1 class="no-media">No Media Playing...</h1>`;return N`<div
      class="container"
      style="background: ${this.backgroundColor}; color: ${this.textColor};"
    >
      ${r}
    </div>`}};E.styles=pt`
    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
      position: relative;
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
      width: 20rem;
      height: 20rem;
    }

    .album-cover {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      border-radius: 2rem;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .app-icon {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: absolute;
      padding: 0.25rem;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: 2rem;
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
  `;j([K({type:String,attribute:"background-color"})],E.prototype,"backgroundColor",2);j([K({type:String,attribute:"text-color"})],E.prototype,"textColor",2);j([Nt()],E.prototype,"mediaActivity",2);E=j([Tt("media-playback-live-activity")],E);export{E as default};
