"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_billing_name-address-form_ts-app_assets_modules_github_document-rea-40b5b8"],{24727(a,b,c){var d=c(59753),e=c(36071);function f(a){let b=a.options[a.selectedIndex]?.value,c=document.querySelector(".js-name-address-collection primer-multi-input[data-name=region]");c&&("US"===b?c.activateField("us_states"):"CA"===b?c.activateField("ca_provinces"):c.activateField("region"))}function g(){let a=document.querySelector(".js-user-personal-profile-summary");a&&(a.hidden=!0)}function h(){let a=document.querySelector(".js-user-personal-profile-summary");a&&(a.hidden=!1)}function i(a){if(!(a.currentTarget instanceof HTMLInputElement))return;let b=a.currentTarget,c=document.querySelector(".js-billing-information-linking-summary");c&&(b.checked?c.hidden=!1:c.hidden=!0)}function j(){let a=document.querySelector(".js-billing-section");a.hidden=!0;let b=document.querySelector(".js-billing-pay-with");b.hidden=!0;let c=document.querySelector(".js-payment-methods-radio");c.hidden=!0;let d=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");d.hidden=!0;let e=document.querySelector(".js-sponsors-form");e&&(e.hidden=!1);let f=document.querySelector(".js-zuora-existing-card");f&&f.classList.remove("d-none")}function k(){let a=document.querySelector(".js-billing-information-summary-wrapper");a&&(a.hidden=!0);let b=document.querySelector(".js-name-address-collection-wrapper");b&&(b.hidden=!1);let c=document.querySelector(".js-add-billing-information-btn");c&&(c.hidden=!0);let d=document.querySelector(".js-no-billing-information-message");d&&(d.hidden=!0);let e=document.querySelector(".js-org-payment-method-wrapper");e&&(e.hidden=!0)}function l(){let a=document.querySelector(".js-trade-controls-notice-container");a&&(a.hidden=!0)}function m(){return document.querySelector(".js-business-details-inputs-wrapper")}function n(){return document.querySelector(".js-individual-details-inputs-wrapper")}function o(a=""){let b;return a?document.querySelector(`.js-payment-methods-wrapper:not(.${a})`):document.querySelector(".js-payment-methods-wrapper")}function p(a=""){let b=o(a);b&&b.classList.add("has-removed-contents")}function q(){let a=o();a&&(a.hidden=!0)}function r(){let a=o();a&&(a.hidden=!1)}function s(){let a=o();a&&a.classList.remove("has-removed-contents")}(0,d.on)("click",".js-edit-user-personal-profile",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-user-personal-profile-wrapper");b&&(b.hidden=!0);let c=document.querySelector(".js-name-address-collection-wrapper");c&&(c.hidden=!1),g(),function(){let a=document.querySelector(".js-cancel-billing-info");a&&(a.hidden=!1)}();let d=document.querySelector(".js-awaiting-payment");if(d){let e=d.hasAttribute("hidden");e||(d.hidden=!0)}let f=document.querySelector(".js-sponsors-form");f&&(f.hidden=!0);let h=document.querySelector(".js-marketplace-form-wrapper");h&&(h.hidden=!0);let i=document.querySelector(".js-sdn-screening-error-wrapper");i&&(i.hidden=!0),q();let j=document.querySelector(".js-coupons-form-wrapper");j&&(j.hidden=!0);let k=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");k&&!k.hidden&&k.click();let l=document.querySelector(".js-org-payment-method-wrapper");l&&(l.hidden=!0);let m=document.querySelector(".js-billing-section.js-data-collection-org-signup");m&&m.classList.toggle("has-removed-contents")}),(0,d.on)("click",".js-edit-individual-owned-org-info-on-upgrade",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-individual-owned-org-info-on-upgrade-wrapper");b&&(b.hidden=!0),g(),n().classList.remove("has-removed-contents");let c=document.querySelector(".js-cancel-edit-individual-owned-org-info-on-upgrade");c&&(c.hidden=!1),p()}),(0,d.on)("click",".js-cancel-billing-info",function(a){if(!(a.currentTarget instanceof Element))return;!function(){let a=document.querySelector(".js-cancel-billing-info");a&&(a.hidden=!0)}();let b=document.querySelector(".js-name-address-collection-wrapper");b.hidden=!0,h();let c=document.querySelector(".js-edit-user-personal-profile-wrapper");c.hidden=!1,r();let d=document.querySelector(".js-sponsors-form");d&&(d.hidden=!1);let e=document.querySelector(".js-marketplace-form-wrapper");e&&(e.hidden=!1)}),(0,d.on)("click",".js-cancel-edit-individual-owned-org-info-on-upgrade",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-individual-owned-org-info-on-upgrade-wrapper");b&&(b.hidden=!1),h(),n().classList.add("has-removed-contents");let c=document.querySelector(".js-cancel-edit-individual-owned-org-info-on-upgrade");c&&(c.hidden=!0),s()}),(0,d.on)("click",".js-view-user-personal-profile",function(){fetch("/account/user_profile_view?flow_from_page=SPONSORABLE",{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}})}),(0,d.on)("click",".js-edit-paypal-method",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-awaiting-payment");b&&(b.hidden=!0);let c=document.querySelector(".js-sponsors-form");c&&(c.hidden=!0);let d=document.querySelector(".js-marketplace-form-wrapper");d&&(d.hidden=!0);let e=document.querySelector(".js-payment-methods-radio");e.hidden=!1;let f=document.querySelector(".js-billing-pay-with");f&&(f.hidden=!1);let g=document.querySelector(".js-existing-paypal-summary");g.hidden=!0;let h=document.querySelector(".js-paypal-method-details");h.hidden=!1;let i=document.querySelector(".js-paypal-payment-method-form");i.hidden=!1}),(0,d.on)("click",".js-enter-new-card",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-awaiting-payment");b&&(b.hidden=!0);let c=document.querySelector(".js-sponsors-form");c&&(c.hidden=!0);let d=document.querySelector(".js-marketplace-form-wrapper");d&&(d.hidden=!0);let e=document.querySelector(".js-billing-pay-with");e&&(e.hidden=!1);let f=document.querySelector(".js-payment-methods-radio");f&&(f.hidden=!1);let g=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");g&&(g.hidden=!1)}),(0,d.on)("click",".js-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-update-billing-information-banner"),c=document.querySelector(".js-billing-info-linking-wrapper"),d=document.querySelector(".js-billing-information-summary"),e=document.querySelector(".js-edit-payment-method-btn"),f=e.classList.contains("js-skip-billing-info");if(c||d||f){b.hidden=!0;let g=document.querySelector(".js-payment-summary-wrapper");g.hidden=!0;let h=document.querySelector(".js-payment-method-section-wrapper");h.hidden=!1,e.hidden=!0;let i=document.querySelector("#z_hppm_iframe");null!=i&&(i.setAttribute("height","100%"),i.setAttribute("width","100%")),window.dispatchEvent(new Event("resize"))}else b.hidden=!1,k()}),(0,d.on)("click",".js-cancel-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-payment-summary-wrapper");b.hidden=!1;let c=document.querySelector(".js-payment-method-section-wrapper");c.hidden=!0;let d=document.querySelector(".js-edit-payment-method-btn");d.hidden=!1}),(0,d.on)("click",".js-sponsors-cancel-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-paypal-payment-method-form");if(null==b)j();else{let c=document.querySelector(".payment-methods");c.classList.add("js-sponsors-handle-cancel-edit-payment");let d=document.querySelector("#pay-by-credit-card");d.click()}}),(0,d.on)("click",".js-add-billing-information-btn",function(a){a.currentTarget instanceof Element&&k()}),(0,d.on)("click",".js-cancel-submit-personal-profile-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-billing-information-summary-wrapper");b&&(b.hidden=!1);let c=document.querySelector(".js-name-address-collection-wrapper");c&&(c.hidden=!0);let d=document.querySelector(".js-add-billing-information-btn");d&&(d.hidden=!1);let e=document.querySelector(".js-no-billing-information-message");e&&(e.hidden=!1)}),(0,d.on)("click",".js-dismiss-flash-message",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-update-billing-information-banner");b.hidden=!0}),(0,d.on)("click",".js-sign-ctos-btn",function(a){let b=a.currentTarget;if(!b)return;b.hidden=!0;let c=document.querySelector(".js-tos-name-address-form");c&&(c.hidden=!1)}),(0,d.on)("click",".js-cancel-sign-ctos",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-tos-name-address-form");b&&(b.hidden=!0);let c=document.querySelector(".js-sign-ctos-btn");c&&(c.hidden=!1)}),(0,d.on)("click",".js-show-individual-billing-info-inputs",function(){n().classList.remove("has-removed-contents"),m().classList.add("has-removed-contents"),p(),l()}),(0,d.on)("click",".js-show-business-billing-info-inputs",function(){n().classList.add("has-removed-contents"),m().classList.remove("has-removed-contents"),p(),l()}),(0,d.on)("change",".js-allow-billing-info-link",i),(0,d.on)("click",".js-settings-cancel-billing-info-linkage",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-allow-billing-info-link");b&&(b.onchange=i,b.checked=!1,b.disabled=!1,b.dispatchEvent(new Event("change")))}),(0,e.N7)(".js-name-address-select-country",{constructor:HTMLSelectElement,initialize(a){f(a),a.form&&(0,d.f)(a.form,"change"),a.addEventListener("change",function(){f(a)})}}),(0,e.N7)(".js-sponsors-handle-cancel-edit-payment .pay-by-credit-card .js-zuora-existing-card",{constructor:HTMLElement,add(){j();let a=document.querySelector(".payment-methods");a.classList.remove("js-sponsors-handle-cancel-edit-payment")}}),(0,e.N7)(".js-show-individual-billing-info-inputs",{constructor:HTMLInputElement,initialize(a){a.checked&&(n().classList.remove("has-removed-contents"),m().classList.add("has-removed-contents"),p("js-has-valid-payment-method"),l())}})},80721(a,b,c){c.d(b,{C:()=>d.C,x:()=>d.x});var d=c(4412)},9302(a,b,c){c.d(b,{IW:()=>j,Mw:()=>o,"_C":()=>n,lO:()=>m,qA:()=>l,y0:()=>g});let d=[],e=0,f;function g(){return f}function h(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(a){return 0}}function i(){return h()-1+e}function j(a){f=a;let b=location.href;d[i()]={url:b,state:f},d.length=h(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function k(){return new Date().getTime()}function l(a,b,c){e=0;let d={_id:k(),...a};history.pushState(d,b,c),j(d)}function m(a,b,c){let d={...f,...a};history.replaceState(d,b,c),j(d)}function n(){let a=d[i()-1];if(a)return a.url}function o(){let a=d[i()+1];if(a)return a.url}f=function(){let a={_id:new Date().getTime(),...history.state};return j(a),a}(),window.addEventListener("popstate",function(a){let b=a.state;if(!b|| !b._id&&!b.turbo?.restorationIdentifier)return;let c=b.turbo?.restorationIdentifier,f=d[i()-1]?.state?.turbo?.restorationIdentifier;f===c?e--:e++,j(b)},!0);let p;window.addEventListener("turbo:visit",a=>{a instanceof CustomEvent&&(p=a.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==p&&(e=0,m(history.state,"",""))}),window.addEventListener("hashchange",function(){if(h()>d.length){let a={_id:k()};history.replaceState(a,"",location.href),j(a)}},!0),window.addEventListener("pageshow",()=>{d=[],e=0})},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(86283),e=c(60958);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(31167);let e=class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}};class SoftNavStartEvent extends e{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends e{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends e{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends e{constructor(a){super(a,d.QE.END)}}},31167(a,b,c){c.d(b,{BT:()=>l,FP:()=>n,LD:()=>k,QE:()=>g,TL:()=>o,Yl:()=>j,jN:()=>h,r_:()=>m,u5:()=>p});var d=c(55065),e=c(29573),f=c(58843);let g=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),h="reload",i=0;function j(){i=0,document.dispatchEvent(new Event(g.INITIAL)),(0,f.XL)()}function k(a){(0,f.sj)()||(q(),document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),(0,e.hY)())}function l(a={}){s(a)&&(i+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),i)),n(a))}function m(a={}){if(!s(a))return;i=0;let b=(0,f.Wl)()||h;document.dispatchEvent(new d.QW((0,f.Gj)(),b)),r(),(0,e.t3)(b),(0,f.XL)()}function n(a={}){s(a)&&(r(),document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function o(a={}){s(a)&&((0,e.mr)(),document.dispatchEvent(new Event(g.RENDER)))}function p(){document.dispatchEvent(new Event(g.FRAME_UPDATE))}function q(){document.dispatchEvent(new Event(g.PROGRESS_BAR.START))}function r(){document.dispatchEvent(new Event(g.PROGRESS_BAR.END))}function s({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},29573(a,b,c){c.d(b,{CF:()=>g,hY:()=>h,mr:()=>j,t3:()=>i});var d=c(60958),e=c(58843);let f="stats:soft-nav-duration",g={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function h(){performance.mark(f)}function i(a){(0,d.b)({turboFailureReason:a,turboStartUrl:(0,e.wP)(),turboEndUrl:window.location.href})}function j(){let a=function(){if(0===performance.getEntriesByName(f).length)return null;performance.measure(f,f);let a=performance.getEntriesByName(f),b=a.pop();return b?b.duration:null}();if(!a)return;let b=g[(0,e.Gj)()],c=Math.round(a);b===g.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,d.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,e.Nb)()||"rails",duration:c,initiator:(0,e.CI)()||"rails"}})}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(31167);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},60958(a,b,c){c.d(b,{B:()=>p,b:()=>h});var d=c(86283),e=c(4412),f=c(53729);let g=[];function h(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=o(),a.staff=p(),a.bundler=f.A7,g.push(a),b?k():j()}let i=null;async function j(){await e.C,null==i&&(i=window.requestIdleCallback(k))}function k(){if(i=null,!g.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=l(g);for(let c of b)n(a,`{"stats": [${c.join(",")}] }`);g=[]}function l(a){let b=[],c=a.map(a=>JSON.stringify(a));for(;c.length>0;)b.push(m(c));return b}function m(a){let b=a.shift(),c=[b],d=b.length;for(;a.length>0&&d<=65536;){let e=a[0].length;if(d+e<=65536){let f=a.shift();c.push(f),d+=e}else break}return c}function n(a,b){try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}}function o(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function p(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",k),d.n4?.addEventListener("visibilitychange",k)},4412(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(86283);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},53729(a,b,c){c.d(b,{A7:()=>i,ko:()=>h,q1:()=>g});var d=c(15205),e=c(86283);let f=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),g=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),h=(0,d.Z)(function(){return"enterprise"===f()}),i="webpack"},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,W6:()=>d.W6,cF:()=>d.cF,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,W6:()=>e,cF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}}}])
//# sourceMappingURL=app_assets_modules_github_billing_name-address-form_ts-app_assets_modules_github_document-rea-40b5b8-d7b4c8b65ee8.js.map