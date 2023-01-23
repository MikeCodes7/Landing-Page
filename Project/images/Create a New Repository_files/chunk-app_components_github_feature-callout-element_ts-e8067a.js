"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_components_github_feature-callout-element_ts"],{3447(a,b,c){c.d(b,{D:()=>f,P:()=>e});var d=c(46263);function e(a=0,b={}){return(c,e,f)=>{if(!f||"function"!=typeof f.value)throw Error("debounce can only decorate functions");let g=f.value;f.value=(0,d.P)(g,a,b),Object.defineProperty(c,e,f)}}function f(a=0,b={}){return(c,e,f)=>{if(!f||"function"!=typeof f.value)throw Error("debounce can only decorate functions");let g=f.value;f.value=(0,d.D)(g,a,b),Object.defineProperty(c,e,f)}}},46263(a,b,c){function d(a,b=0,{start:c=!0,middle:d=!0,once:e=!1}={}){let f=0,g,h=!1;function i(...j){if(h)return;let k=Date.now()-f;f=Date.now(),c?(c=!1,a.apply(this,j),e&&i.cancel()):(d&&k<b||!d)&&(clearTimeout(g),g=setTimeout(()=>{f=Date.now(),a.apply(this,j),e&&i.cancel()},d?b-k:b))}return i.cancel=()=>{clearTimeout(g),h=!0},i}function e(a,b=0,{start:c=!1,middle:e=!1,once:f=!1}={}){return d(a,b,{start:c,middle:e,once:f})}c.d(b,{D:()=>e,P:()=>d})},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(86283),e=c(60958);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},60958(a,b,c){c.d(b,{B:()=>p,b:()=>h});var d=c(86283),e=c(4412),f=c(53729);let g=[];function h(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=o(),a.staff=p(),a.bundler=f.A7,g.push(a),b?k():j()}let i=null;async function j(){await e.C,null==i&&(i=window.requestIdleCallback(k))}function k(){if(i=null,!g.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=l(g);for(let c of b)n(a,`{"stats": [${c.join(",")}] }`);g=[]}function l(a){let b=[],c=a.map(a=>JSON.stringify(a));for(;c.length>0;)b.push(m(c));return b}function m(a){let b=a.shift(),c=[b],d=b.length;for(;a.length>0&&d<=65536;){let e=a[0].length;if(d+e<=65536){let f=a.shift();c.push(f),d+=e}else break}return c}function n(a,b){try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}}function o(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function p(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",k),d.n4?.addEventListener("visibilitychange",k)},88285(a,b,c){c.r(b);var d=c(76006),e=c(86702),f=c(3447),g=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let{getItem:h,setItem:i}=(0,e.Z)("localStorage"),j=class FeatureCalloutElement extends HTMLElement{async connectedCallback(){this.bootstrapFromLocalStorage()||await this.bootstrapFromServer()}bootstrapFromLocalStorage(){let a=h(this.localStorageKey);return!!a&&(this.bootstrap(JSON.parse(a)),!0)}get localStorageKey(){return`${this.localStoragePrefix}:${this.featureName}`}async bootstrapFromServer(){try{let a=await fetch(this.queryPath,{method:"GET",headers:this.fetchHeaders}),b=await a.text();if(!a.ok)throw Error(`unexpected response status ${a.status}: '${b}'`);let c=JSON.parse(b);return this.bootstrap(c),c.dismissed&&i(this.localStorageKey,b),!0}catch(d){throw Error(`failed to get feature state from server: ${d}`)}return!1}bootstrap(a){if(!("dismissed"in a)||null===a.dismissed)throw Error(`malformed response, likely no notice configured: '${JSON.stringify(a)}'`);!a.dismissed&&(this.applyTargetDefaults(),this.showCallout(),this.dismisser.addEventListener(this.dismissEvent,this.handleDismissal.bind(this),{once:!0}),this.detectAndBindToTabContainer())}detectAndBindToTabContainer(){let a=this.querySelector("tab-container");a&&a.addEventListener("tab-container-changed",a=>{let b=a;b.detail&&b.detail.relatedTarget&&b.detail.relatedTarget.getAttribute("aria-labelledby")===this.dismisser.id&&this.handleDismissal()})}labeleesPresent(){return this.labelees.length>0}applyTargetDefaults(){if(!this.firstElementChild||this.labeleesPresent()&&this.dismisser)return;let a=this.firstElementChild.getAttribute("data-target")||"";this.labeleesPresent()||(a=a.concat(" feature-callout.labelees")),this.dismisser||(a=a.concat(" feature-callout.dismisser")),this.firstElementChild.setAttribute("data-target",a)}handleDismissal(){this.submitForm(),i(this.localStorageKey,'{"dismissed":true}')}showCallout(){for(let a of this.labelees)a.classList.add(this.labelClass)}async submitForm(){let a=this.dismissalForm;if(a)try{let b=await fetch(a.action,{method:a.method,body:new FormData(a),headers:this.fetchHeaders});if(!b.ok)throw Error(`unexpected response status ${b.status}: ${await b.text()}`)}catch(c){throw Error(`failed to persist dismissal to server: ${c}`)}}constructor(...a){super(...a),this.localStoragePrefix="feature-callout",this.fetchHeaders={"X-Requested-With":"XMLHttpRequest"},this.dismissEvent="click",this.labelClass="new-feature-label"}};g([d.GO],j.prototype,"labelees",void 0),g([d.fA],j.prototype,"dismisser",void 0),g([d.fA],j.prototype,"dismissalForm",void 0),g([d.Lj],j.prototype,"queryPath",void 0),g([d.Lj],j.prototype,"featureName",void 0),g([d.Lj],j.prototype,"enabled",void 0),g([d.Lj],j.prototype,"dismissEvent",void 0),g([d.Lj],j.prototype,"labelClass",void 0),g([(0,f.P)(1,{once:!0})],j.prototype,"handleDismissal",null),j=g([d.Ih],j)},4412(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(86283);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},53729(a,b,c){c.d(b,{A7:()=>i,ko:()=>h,q1:()=>g});var d=c(15205),e=c(86283);let f=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),g=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),h=(0,d.Z)(function(){return"enterprise"===f()}),i="webpack"},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,W6:()=>d.W6,cF:()=>d.cF,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,W6:()=>e,cF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}},15205(a,b,c){function d(...a){return JSON.stringify(a,(a,b)=>"object"==typeof b?b:String(b))}function e(a,b={}){let{hash:c=d,cache:e=new Map}=b;return function(...b){let d=c.apply(this,b);if(e.has(d))return e.get(d);let f=a.apply(this,b);return f instanceof Promise&&(f=f.catch(a=>{throw e.delete(d),a})),e.set(d,f),f}}c.d(b,{Z:()=>e})}}])
//# sourceMappingURL=app_components_github_feature-callout-element_ts-932ceb05f302.js.map