!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SvelteFC=e():t.SvelteFC=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(){}n.r(e);function o(t){return t()}function i(){return Object.create(null)}function a(t){t.forEach(o)}function c(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function d(t){return document.createElement(t)}function s(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let f;function l(t){f=t}function p(){if(!f)throw new Error("Function called outside component initialization");return f}const h=[],$=[],m=[],y=[],g=Promise.resolve();let b=!1;function v(){b||(b=!0,g.then(w))}function _(t){m.push(t)}function w(){const t=new Set;do{for(;h.length;){const t=h.shift();l(t),x(t.$$)}for(;$.length;)$.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];t.has(n)||(n(),t.add(n))}m.length=0}while(h.length);for(;y.length;)y.pop()();b=!1}function x(t){t.fragment&&(t.update(t.dirty),a(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(_))}const S=new Set;function A(t,e){t&&t.i&&(S.delete(t),t.i(e))}"undefined"!=typeof window?window:global;let N;function j(t,e){t.$$.fragment&&(a(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function O(t,e,n,u,d,s){const p=f;l(t);const $=e.props||{},m=t.$$={fragment:null,ctx:null,props:s,update:r,not_equal:d,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:i(),dirty:null};let y=!1;var g;m.ctx=n?n(t,$,(e,n)=>{m.ctx&&d(m.ctx[e],m.ctx[e]=n)&&(m.bound[e]&&m.bound[e](n),y&&function(t,e){t.$$.dirty||(h.push(t),v(),t.$$.dirty=i()),t.$$.dirty[e]=!0}(t,e))}):$,m.update(),y=!0,a(m.before_update),m.fragment=u(m.ctx),e.target&&(e.hydrate?m.fragment.l((g=e.target,Array.from(g.childNodes))):m.fragment.c(),e.intro&&A(t.$$.fragment),function(t,e,n){const{fragment:r,on_mount:i,on_destroy:u,after_update:d}=t.$$;r.m(e,n),_(()=>{const e=i.map(o).filter(c);u?u.push(...e):a(e),t.$$.on_mount=[]}),d.forEach(_)}(t,e.target,e.anchor),w()),l(p)}"undefined"!=typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){j(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class F{$destroy(){j(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const E=["string","number","function","boolean","undefined"],C=(t,e)=>{let{width:n,height:r}=t,o=e.width,i=e.height;return n!==o||r!==i},k=(t,e)=>t.type!==e.type,M=(t,e="clone")=>{if(E.indexOf(typeof t)>-1||null===t)return t;if(Array.isArray(t)){let n,r,o=[];for(n=0,r=t.length;n<r;n++)o.push(M(t[n],e));return o}if("object"==typeof t){let n,r={};for(n in t)"data"===n&&t[n]._dataStore?r[n]="clone"===e?t[n]:"-":r[n]=M(t[n],e);return r}},T=(t,e)=>JSON.stringify(M(t.dataSource,"diff"))!==JSON.stringify(M(e.dataSource,"diff"));function P(t){var e;return{c(){s(e=d("div"),"class",t.className),s(e,"id",t.renderAt)},m(t,n){!function(t,e,n){t.insertBefore(e,n||null)}(t,e,n)},p(t,n){t.className&&s(e,"class",n.className),t.renderAt&&s(e,"id",n.renderAt)},i:r,o:r,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}let L;function J(t,...e){L=t,e.forEach(e=>{e.getName&&e.getType||e.name&&e.type?t.addDep(e):e(t)})}function z(t,e,n){let r,o,i,{id:a,className:c="",type:u="column2d",renderAt:d="__svelte_fc_chart_container",width:s="600",height:f="350",dataFormat:l="json",dataSource:h={},events:$={}}=e;var m;return m=()=>{i={id:a,type:u,renderAt:d,width:s,height:f,dataFormat:l,dataSource:M(h),events:$}},p().$$.before_update.push(m),function(t){p().$$.on_mount.push(t)}(()=>{L?(r=new L(i)).render():console.warn("Invalid FusionCharts constructor")}),function(t){p().$$.after_update.push(t)}(()=>{if(o&&(C(o,i)&&r.resizeTo(i.width,i.height),k(o,i)&&r.chartType(i.type),T(o,i)&&r.setJSONData(i.dataSource),i.events||o.events)){let t=o.events,e=i.events;for(let n in t)e&&e[n]&&e[n]===t[n]||r.removeEventListener(n,t[n]);for(let n in e)t&&t[n]&&e[n]===t[n]||r.addEventListener(n,e[n])}o=M(i)}),function(t){p().$$.on_destroy.push(t)}(()=>{r.dispose()}),t.$set=t=>{"id"in t&&n("id",a=t.id),"className"in t&&n("className",c=t.className),"type"in t&&n("type",u=t.type),"renderAt"in t&&n("renderAt",d=t.renderAt),"width"in t&&n("width",s=t.width),"height"in t&&n("height",f=t.height),"dataFormat"in t&&n("dataFormat",l=t.dataFormat),"dataSource"in t&&n("dataSource",h=t.dataSource),"events"in t&&n("events",$=t.events)},{id:a,className:c,type:u,renderAt:d,width:s,height:f,dataFormat:l,dataSource:h,events:$}}var D=class extends F{constructor(t){super(),O(this,t,z,P,u,["id","className","type","renderAt","width","height","dataFormat","dataSource","events"])}};n.d(e,"fcRoot",function(){return J});e.default=D}])});