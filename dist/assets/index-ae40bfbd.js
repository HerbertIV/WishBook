(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function xa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const re={},Dt=[],Fe=()=>{},cl=()=>!1,fl=/^on[^a-z]/,ur=e=>fl.test(e),wa=e=>e.startsWith("onUpdate:"),pe=Object.assign,_a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ul=Object.prototype.hasOwnProperty,Y=(e,t)=>ul.call(e,t),D=Array.isArray,Ht=e=>mr(e)==="[object Map]",Po=e=>mr(e)==="[object Set]",B=e=>typeof e=="function",le=e=>typeof e=="string",dr=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Co=e=>(ae(e)||B(e))&&B(e.then)&&B(e.catch),So=Object.prototype.toString,mr=e=>So.call(e),dl=e=>mr(e).slice(8,-1),Ro=e=>mr(e)==="[object Object]",ka=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-(\w)/g,Ke=pr(e=>e.replace(ml,(t,n)=>n?n.toUpperCase():"")),pl=/\B([A-Z])/g,Qt=pr(e=>e.replace(pl,"-$1").toLowerCase()),hr=pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=pr(e=>e?`on${hr(e)}`:""),Ct=(e,t)=>!Object.is(e,t),Sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},er=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},hl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oi;const Ur=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?yl(r):gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(le(e)||ae(e))return e}const gl=/;(?![^(]*\))/g,vl=/:([^]+)/,bl=/\/\*[^]*?\*\//g;function yl(e){const t={};return e.replace(bl,"").split(gl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ea(e){let t="";if(le(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Ea(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wl=xa(xl);function To(e){return!!e||e===""}const _l=e=>le(e)?e:e==null?"":D(e)||ae(e)&&(e.toString===So||!B(e.toString))?JSON.stringify(e,Io,2):String(e),Io=(e,t)=>t&&t.__v_isRef?Io(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Po(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!D(t)&&!Ro(t)?String(t):t;let Re;class kl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function El(e,t=Re){t&&t.active&&t.effects.push(e)}function Al(){return Re}const Aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},No=e=>(e.w&mt)>0,Mo=e=>(e.n&mt)>0,Ol=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Pl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];No(a)&&!Mo(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},Wr=new WeakMap;let on=0,mt=1;const Kr=30;let Te;const Et=Symbol(""),Yr=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,El(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ft=!0,mt=1<<++on,on<=Kr?Ol(this):si(this),this.fn()}finally{on<=Kr&&Pl(this),mt=1<<--on,Te=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(si(this),this.onStop&&this.onStop(),this.active=!1)}}function si(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const Fo=[];function Jt(){Fo.push(ft),ft=!1}function Zt(){const e=Fo.pop();ft=e===void 0?!0:e}function ke(e,t,n){if(ft&&Te){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Aa()),Lo(a)}}function Lo(e,t){let n=!1;on<=Kr?Mo(e)||(e.n|=mt,n=!No(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Ge(e,t,n,r,a,i){const o=Wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!dr(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?ka(n)&&s.push(o.get("length")):(s.push(o.get(Et)),Ht(e)&&s.push(o.get(Yr)));break;case"delete":D(e)||(s.push(o.get(Et)),Ht(e)&&s.push(o.get(Yr)));break;case"set":Ht(e)&&s.push(o.get(Et));break}if(s.length===1)s[0]&&qr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);qr(Aa(l))}}function qr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&li(r);for(const r of n)r.computed||li(r)}function li(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cl=xa("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dr)),ci=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const r=q(this)[t].apply(this,n);return Zt(),r}}),e}function Rl(e){const t=q(this);return ke(t,"has",e),t.hasOwnProperty(e)}class zo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Ul:Bo:i?Ho:Do).get(t))return t;const o=D(t);if(!a){if(o&&Y(ci,n))return Reflect.get(ci,n,r);if(n==="hasOwnProperty")return Rl}const s=Reflect.get(t,n,r);return(dr(n)?jo.has(n):Cl(n))||(a||ke(t,"get",n),i)?s:ve(s)?o&&ka(n)?s:s.value:ae(s)?a?Wo(s):Cn(s):s}}class $o extends zo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Kt(i)&&ve(i)&&!ve(r))return!1;if(!this._shallow&&(!tr(r)&&!Kt(r)&&(i=q(i),r=q(r)),!D(t)&&ve(i)&&!ve(r)))return i.value=r,!0;const o=D(t)&&ka(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,a);return t===q(a)&&(o?Ct(r,i)&&Ge(t,"set",n,r):Ge(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ge(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!dr(n)||!jo.has(n))&&ke(t,"has",n),r}ownKeys(t){return ke(t,"iterate",D(t)?"length":Et),Reflect.ownKeys(t)}}class Tl extends zo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Il=new $o,Nl=new Tl,Ml=new $o(!0),Pa=e=>e,vr=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(Ct(t,i)&&ke(a,"get",t),ke(a,"get",i));const{has:o}=vr(a),s=r?Pa:n?Ra:gn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Mn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(Ct(e,a)&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Fn(e,t=!1){return e=e.__v_raw,!t&&ke(q(e),"iterate",Et),Reflect.get(e,"size",e)}function fi(e){e=q(e);const t=q(this);return vr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function ui(e,t){t=q(t);const n=q(this),{has:r,get:a}=vr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ct(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function di(e){const t=q(this),{has:n,get:r}=vr(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function mi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?Pa:e?Ra:gn;return!e&&ke(s,"iterate",Et),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function jn(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Pa:t?Ra:gn;return!t&&ke(i,"iterate",l?Yr:Et),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[c(m[0]),c(m[1])]:c(m),done:p}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Fl(){const e={get(i){return Nn(this,i)},get size(){return Fn(this)},has:Mn,add:fi,set:ui,delete:di,clear:mi,forEach:Ln(!1,!1)},t={get(i){return Nn(this,i,!1,!0)},get size(){return Fn(this)},has:Mn,add:fi,set:ui,delete:di,clear:mi,forEach:Ln(!1,!0)},n={get(i){return Nn(this,i,!0)},get size(){return Fn(this,!0)},has(i){return Mn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Ln(!0,!1)},r={get(i){return Nn(this,i,!0,!0)},get size(){return Fn(this,!0)},has(i){return Mn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=jn(i,!1,!1),n[i]=jn(i,!0,!1),t[i]=jn(i,!1,!0),r[i]=jn(i,!0,!0)}),[e,n,t,r]}const[Ll,jl,zl,$l]=Fl();function Ca(e,t){const n=t?e?$l:zl:e?jl:Ll;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Dl={get:Ca(!1,!1)},Hl={get:Ca(!1,!0)},Bl={get:Ca(!0,!1)},Do=new WeakMap,Ho=new WeakMap,Bo=new WeakMap,Ul=new WeakMap;function Wl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Wl(dl(e))}function Cn(e){return Kt(e)?e:Sa(e,!1,Il,Dl,Do)}function Uo(e){return Sa(e,!1,Ml,Hl,Ho)}function Wo(e){return Sa(e,!0,Nl,Bl,Bo)}function Sa(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Kl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Bt(e){return Kt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Ko(e){return Bt(e)||Kt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Yo(e){return er(e,"__v_skip",!0),e}const gn=e=>ae(e)?Cn(e):e,Ra=e=>ae(e)?Wo(e):e;function qo(e){ft&&Te&&(e=q(e),Lo(e.dep||(e.dep=Aa())))}function Vo(e,t){e=q(e);const n=e.dep;n&&qr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Yl(e){return Xo(e,!1)}function ql(e){return Xo(e,!0)}function Xo(e,t){return ve(e)?e:new Vl(e,t)}class Vl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:gn(t)}get value(){return qo(this),this._value}set value(t){const n=this.__v_isShallow||tr(t)||Kt(t);t=n?t:q(t),Ct(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:gn(t),Vo(this))}}function ut(e){return ve(e)?e.value:e}const Xl={get:(e,t,n)=>ut(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Go(e){return Bt(e)?e:new Proxy(e,Xl)}class Gl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ql(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new Gl(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){br(i,t,n)}return a}function Le(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&Co(i)&&i.catch(o=>{br(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}function br(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}Jl(e,n,a,r)}function Jl(e,t,n,r=!0){console.error(e)}let vn=!1,Vr=!1;const ge=[];let Ue=0;const Ut=[];let Ve=null,xt=0;const Qo=Promise.resolve();let Ta=null;function Jo(e){const t=Ta||Qo;return e?t.then(this?e.bind(this):e):t}function Zl(e){let t=Ue+1,n=ge.length;for(;t<n;){const r=t+n>>>1,a=ge[r],i=bn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Ia(e){(!ge.length||!ge.includes(e,vn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?ge.push(e):ge.splice(Zl(e.id),0,e),Zo())}function Zo(){!vn&&!Vr&&(Vr=!0,Ta=Qo.then(ts))}function ec(e){const t=ge.indexOf(e);t>Ue&&ge.splice(t,1)}function tc(e){D(e)?Ut.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?xt+1:xt))&&Ut.push(e),Zo()}function pi(e,t=vn?Ue+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function es(e){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>bn(n)-bn(r)),xt=0;xt<Ve.length;xt++)Ve[xt]();Ve=null,xt=0}}const bn=e=>e.id==null?1/0:e.id,nc=(e,t)=>{const n=bn(e)-bn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ts(e){Vr=!1,vn=!0,ge.sort(nc);const t=Fe;try{for(Ue=0;Ue<ge.length;Ue++){const n=ge[Ue];n&&n.active!==!1&&dt(n,null,14)}}finally{Ue=0,ge.length=0,es(),vn=!1,Ta=null,(ge.length||Ut.length)&&ts()}}function rc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[c]||re;p&&(a=n.map(g=>le(g)?g.trim():g)),m&&(a=n.map(hl))}let s,l=r[s=Cr(t)]||r[s=Cr(Ke(t))];!l&&i&&(l=r[s=Cr(Qt(t))]),l&&Le(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(f,e,6,a)}}function ns(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=ns(f,t,!0);c&&(s=!0,pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ae(e)&&r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):pe(o,i),ae(e)&&r.set(e,o),o)}function yr(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Qt(t))||Y(e,t))}let Ie=null,rs=null;function nr(e){const t=Ie;return Ie=e,rs=e&&e.type.__scopeId||null,t}function Xr(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ai(-1);const i=nr(t);let o;try{o=e(...a)}finally{nr(i),r._d&&Ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:m,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let L,y;const w=nr(e);try{if(n.shapeFlag&4){const S=a||r;L=Be(c.call(S,S,m,i,g,p,P)),y=l}else{const S=t;L=Be(S.length>1?S(i,{attrs:l,slots:s,emit:f}):S(i,null)),y=t.props?l:ac(l)}}catch(S){un.length=0,br(S,e,1),L=ue(yn)}let F=L;if(y&&C!==!1){const S=Object.keys(y),{shapeFlag:U}=F;S.length&&U&7&&(o&&S.some(wa)&&(y=ic(y,o)),F=Yt(F,y))}return n.dirs&&(F=Yt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,nr(w),L}const ac=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},ic=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function oc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const p=c[m];if(o[p]!==r[p]&&!yr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,f):!0:!!o;return!1}function hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!yr(n,i))return!0}return!1}function sc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const lc=e=>e.__isSuspense;function cc(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):tc(e)}const zn={};function cn(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){var s;const l=Al()===((s=me)==null?void 0:s.scope)?me:null;let f,c=!1,m=!1;if(ve(e)?(f=()=>e.value,c=tr(e)):Bt(e)?(f=()=>e,r=!0):D(e)?(m=!0,c=e.some(S=>Bt(S)||tr(S)),f=()=>e.map(S=>{if(ve(S))return S.value;if(Bt(S))return jt(S);if(B(S))return dt(S,l,2)})):B(e)?t?f=()=>dt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Le(e,l,3,[g])}:f=Fe,t&&r){const S=f;f=()=>jt(S())}let p,g=S=>{p=w.onStop=()=>{dt(S,l,4)}},P;if(wn)if(g=Fe,t?n&&Le(t,l,3,[f(),m?[]:void 0,g]):f(),a==="sync"){const S=of();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Fe;let C=m?new Array(e.length).fill(zn):zn;const L=()=>{if(w.active)if(t){const S=w.run();(r||c||(m?S.some((U,Z)=>Ct(U,C[Z])):Ct(S,C)))&&(p&&p(),Le(t,l,3,[S,C===zn?void 0:m&&C[0]===zn?[]:C,g]),C=S)}else w.run()};L.allowRecurse=!!t;let y;a==="sync"?y=L:a==="post"?y=()=>_e(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),y=()=>Ia(L));const w=new Oa(f,y);t?n?L():C=w.run():a==="post"?_e(w.run.bind(w),l&&l.suspense):w.run();const F=()=>{w.stop(),l&&l.scope&&_a(l.scope.effects,w)};return P&&P.push(F),F}function fc(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?is(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=me;qt(this);const s=as(a,i.bind(r),n);return o?qt(o):Pt(),s}function is(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function jt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))jt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)jt(e[n],t);else if(Po(e)||Ht(e))e.forEach(n=>{jt(n,t)});else if(Ro(e))for(const n in e)jt(e[n],t);return e}function bt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Jt(),Le(l,n,8,[e.el,s,e,t]),Zt())}}/*! #__NO_SIDE_EFFECTS__ */function Na(e,t){return B(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const Xn=e=>!!e.type.__asyncLoader,os=e=>e.type.__isKeepAlive;function uc(e,t){ss(e,"a",t)}function dc(e,t){ss(e,"da",t)}function ss(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(xr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)os(a.parent.vnode)&&mc(r,t,n,a),a=a.parent}}function mc(e,t,n,r){const a=xr(t,e,r,!0);ls(()=>{_a(r[t],a)},n)}function xr(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),qt(n);const s=Le(t,n,e,o);return Pt(),Zt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=me)=>(!wn||e==="sp")&&xr(e,(...r)=>t(...r),n),pc=tt("bm"),hc=tt("m"),gc=tt("bu"),vc=tt("u"),bc=tt("bum"),ls=tt("um"),yc=tt("sp"),xc=tt("rtg"),wc=tt("rtc");function _c(e,t=me){xr("ec",e,t)}const cs="components";function Gr(e,t){return Ec(cs,e,!0,t)||e}const kc=Symbol.for("v-ndc");function Ec(e,t,n=!0,r=!1){const a=Ie||me;if(a){const i=a.type;if(e===cs){const s=nf(i,!1);if(s&&(s===t||s===Ke(t)||s===hr(Ke(t))))return i}const o=gi(a[e]||i[e],t)||gi(a.appContext[e],t);return!o&&r?i:o}}function gi(e,t){return e&&(e[t]||e[Ke(t)]||e[hr(Ke(t))])}function Ac(e,t,n,r){let a;const i=n&&n[r];if(D(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Qr=e=>e?ys(e)?za(e)||e.proxy:Qr(e.parent):null,fn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>Ia(e.update)),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>fc.bind(e)}),Tr=(e,t)=>e!==re&&!e.__isScriptSetup&&Y(e,t),Oc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==re&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==re&&Y(n,t))return o[t]=4,n[t];Jr&&(o[t]=0)}}const c=fn[t];let m,p;if(c)return t==="$attrs"&&ke(e,"get",t),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==re&&Y(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==re&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&Y(e,o)||Tr(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(fn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vi(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Jr=!0;function Pc(e){const t=Ma(e),n=e.proxy,r=e.ctx;Jr=!1,t.beforeCreate&&bi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:L,beforeDestroy:y,beforeUnmount:w,destroyed:F,unmounted:S,render:U,renderTracked:Z,renderTriggered:ie,errorCaptured:Ee,serverPrefetch:be,expose:Pe,inheritAttrs:rt,components:vt,directives:ze,filters:tn}=t;if(f&&Cc(f,r,null),o)for(const J in o){const V=o[J];B(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=Cn(J))}if(Jr=!0,i)for(const J in i){const V=i[J],Ye=B(V)?V.bind(n,n):B(V.get)?V.get.bind(n,n):Fe,at=!B(V)&&B(V.set)?V.set.bind(n):Fe,$e=de({get:Ye,set:at});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>$e.value,set:xe=>$e.value=xe})}if(s)for(const J in s)fs(s[J],r,n,J);if(l){const J=B(l)?l.call(n):l;Reflect.ownKeys(J).forEach(V=>{Gn(V,J[V])})}c&&bi(c,e,"c");function fe(J,V){D(V)?V.forEach(Ye=>J(Ye.bind(n))):V&&J(V.bind(n))}if(fe(pc,m),fe(hc,p),fe(gc,g),fe(vc,P),fe(uc,C),fe(dc,L),fe(_c,Ee),fe(wc,Z),fe(xc,ie),fe(bc,w),fe(ls,S),fe(yc,be),D(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Ye=>n[V]=Ye})})}else e.exposed||(e.exposed={});U&&e.render===Fe&&(e.render=U),rt!=null&&(e.inheritAttrs=rt),vt&&(e.components=vt),ze&&(e.directives=ze)}function Cc(e,t,n=Fe){D(e)&&(e=Zr(e));for(const r in e){const a=e[r];let i;ae(a)?"default"in a?i=Qe(a.from||r,a.default,!0):i=Qe(a.from||r):i=Qe(a),ve(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function bi(e,t,n){Le(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fs(e,t,n,r){const a=r.includes(".")?is(n,r):()=>n[r];if(le(e)){const i=t[e];B(i)&&cn(a,i)}else if(B(e))cn(a,e.bind(n));else if(ae(e))if(D(e))e.forEach(i=>fs(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&cn(a,i,e)}}function Ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>rr(l,f,o,!0)),rr(l,t,o)),ae(t)&&i.set(t,l),l}function rr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&rr(e,i,n,!0),a&&a.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sc={data:yi,props:xi,emits:xi,methods:sn,computed:sn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:sn,directives:sn,watch:Tc,provide:yi,inject:Rc};function yi(e,t){return t?e?function(){return pe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Rc(e,t){return sn(Zr(e),Zr(t))}function Zr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function sn(e,t){return e?pe(Object.create(null),e,t):t}function xi(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:pe(Object.create(null),vi(e),vi(t??{})):t}function Tc(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function us(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ic=0;function Nc(e,t){return function(r,a=null){B(r)||(r=pe({},r)),a!=null&&!ae(a)&&(a=null);const i=us(),o=new WeakSet;let s=!1;const l=i.app={_uid:Ic++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,m){if(!s){const p=ue(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,za(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){ar=l;try{return f()}finally{ar=null}}};return l}}let ar=null;function Gn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=me||Ie;if(r||ar){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ar._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Mc(e,t,n,r=!1){const a={},i={};er(i,_r,1),e.propsDefaults=Object.create(null),ds(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Uo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let p=c[m];if(yr(e.emitsOptions,p))continue;const g=t[p];if(l)if(Y(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=Ke(p);a[P]=ea(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{ds(e,t,a,i)&&(f=!0);let c;for(const m in s)(!t||!Y(t,m)&&((c=Qt(m))===m||!Y(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=ea(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],f=!0)}f&&Ge(e,"set","$attrs")}function ds(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Vn(l))continue;const f=t[l];let c;a&&Y(a,c=Ke(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:yr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=q(n),f=s||re;for(let c=0;c<i.length;c++){const m=i[c];n[m]=ea(a,l,m,f[m],e,!Y(f,m))}}return o}function ea(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(qt(a),r=f[n]=l.call(null,t),Pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function ms(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const c=m=>{l=!0;const[p,g]=ms(m,t,!0);pe(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ae(e)&&r.set(e,Dt),Dt;if(D(i))for(let c=0;c<i.length;c++){const m=Ke(i[c]);wi(m)&&(o[m]=re)}else if(i)for(const c in i){const m=Ke(c);if(wi(m)){const p=i[c],g=o[m]=D(p)||B(p)?{type:p}:pe({},p);if(g){const P=Ei(Boolean,g.type),C=Ei(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return ae(e)&&r.set(e,f),f}function wi(e){return e[0]!=="$"}function _i(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ki(e,t){return _i(e)===_i(t)}function Ei(e,t){return D(t)?t.findIndex(n=>ki(n,e)):B(t)&&ki(t,e)?0:-1}const ps=e=>e[0]==="_"||e==="$stable",Fa=e=>D(e)?e.map(Be):[Be(e)],Lc=(e,t,n)=>{if(t._n)return t;const r=Xr((...a)=>Fa(t(...a)),n);return r._c=!1,r},hs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ps(a))continue;const i=e[a];if(B(i))t[a]=Lc(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},gs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},jc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),er(t,"_",n)):hs(t,e.slots={})}else e.slots={},t&&gs(e,t);er(e.slots,_r,1)},zc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,hs(t,a)),o=t}else t&&(gs(e,t),o={default:1});if(i)for(const s in a)!ps(s)&&o[s]==null&&delete a[s]};function ta(e,t,n,r,a=!1){if(D(e)){e.forEach((p,g)=>ta(p,t&&(D(t)?t[g]:t),n,r,a));return}if(Xn(r)&&!a)return;const i=r.shapeFlag&4?za(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):ve(f)&&(f.value=null)),B(l))dt(l,s,12,[o,c]);else{const p=le(l),g=ve(l);if(p||g){const P=()=>{if(e.f){const C=p?Y(m,l)?m[l]:c[l]:l.value;a?D(C)&&_a(C,i):D(C)?C.includes(i)||C.push(i):p?(c[l]=[i],Y(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,_e(P,n)):P()}}}const _e=cc;function $c(e){return Dc(e)}function Dc(e,t){const n=Ur();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:p,setScopeId:g=Fe,insertStaticContent:P}=e,C=(u,d,h,v=null,x=null,_=null,R=!1,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(v=b(u),xe(u,x,_,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:k,ref:z,shapeFlag:N}=d;switch(k){case wr:L(u,d,h,v);break;case yn:y(u,d,h,v);break;case Ir:u==null&&w(d,h,v,R);break;case Ce:vt(u,d,h,v,x,_,R,E,A);break;default:N&1?U(u,d,h,v,x,_,R,E,A):N&6?ze(u,d,h,v,x,_,R,E,A):(N&64||N&128)&&k.process(u,d,h,v,x,_,R,E,A,O)}z!=null&&x&&ta(z,u&&u.ref,_,d||u,!d)},L=(u,d,h,v)=>{if(u==null)r(d.el=s(d.children),h,v);else{const x=d.el=u.el;d.children!==u.children&&f(x,d.children)}},y=(u,d,h,v)=>{u==null?r(d.el=l(d.children||""),h,v):d.el=u.el},w=(u,d,h,v)=>{[u.el,u.anchor]=P(u.children,d,h,v,u.el,u.anchor)},F=({el:u,anchor:d},h,v)=>{let x;for(;u&&u!==d;)x=p(u),r(u,h,v),u=x;r(d,h,v)},S=({el:u,anchor:d})=>{let h;for(;u&&u!==d;)h=p(u),a(u),u=h;a(d)},U=(u,d,h,v,x,_,R,E,A)=>{R=R||d.type==="svg",u==null?Z(d,h,v,x,_,R,E,A):be(u,d,x,_,R,E,A)},Z=(u,d,h,v,x,_,R,E)=>{let A,k;const{type:z,props:N,shapeFlag:$,transition:H,dirs:W}=u;if(A=u.el=o(u.type,_,N&&N.is,N),$&8?c(A,u.children):$&16&&Ee(u.children,A,null,v,x,_&&z!=="foreignObject",R,E),W&&bt(u,null,v,"created"),ie(A,u,u.scopeId,R,v),N){for(const Q in N)Q!=="value"&&!Vn(Q)&&i(A,Q,null,N[Q],_,u.children,v,x,he);"value"in N&&i(A,"value",null,N.value),(k=N.onVnodeBeforeMount)&&He(k,v,u)}W&&bt(u,null,v,"beforeMount");const ee=Hc(x,H);ee&&H.beforeEnter(A),r(A,d,h),((k=N&&N.onVnodeMounted)||ee||W)&&_e(()=>{k&&He(k,v,u),ee&&H.enter(A),W&&bt(u,null,v,"mounted")},x)},ie=(u,d,h,v,x)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(x){let _=x.subTree;if(d===_){const R=x.vnode;ie(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},Ee=(u,d,h,v,x,_,R,E,A=0)=>{for(let k=A;k<u.length;k++){const z=u[k]=E?lt(u[k]):Be(u[k]);C(null,z,d,h,v,x,_,R,E)}},be=(u,d,h,v,x,_,R)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:k,dirs:z}=d;A|=u.patchFlag&16;const N=u.props||re,$=d.props||re;let H;h&&yt(h,!1),(H=$.onVnodeBeforeUpdate)&&He(H,h,d,u),z&&bt(d,u,h,"beforeUpdate"),h&&yt(h,!0);const W=x&&d.type!=="foreignObject";if(k?Pe(u.dynamicChildren,k,E,h,v,W,_):R||V(u,d,E,null,h,v,W,_,!1),A>0){if(A&16)rt(E,d,N,$,h,v,x);else if(A&2&&N.class!==$.class&&i(E,"class",null,$.class,x),A&4&&i(E,"style",N.style,$.style,x),A&8){const ee=d.dynamicProps;for(let Q=0;Q<ee.length;Q++){const se=ee[Q],Se=N[se],Mt=$[se];(Mt!==Se||se==="value")&&i(E,se,Se,Mt,x,u.children,h,v,he)}}A&1&&u.children!==d.children&&c(E,d.children)}else!R&&k==null&&rt(E,d,N,$,h,v,x);((H=$.onVnodeUpdated)||z)&&_e(()=>{H&&He(H,h,d,u),z&&bt(d,u,h,"updated")},v)},Pe=(u,d,h,v,x,_,R)=>{for(let E=0;E<d.length;E++){const A=u[E],k=d[E],z=A.el&&(A.type===Ce||!rn(A,k)||A.shapeFlag&70)?m(A.el):h;C(A,k,z,null,v,x,_,R,!0)}},rt=(u,d,h,v,x,_,R)=>{if(h!==v){if(h!==re)for(const E in h)!Vn(E)&&!(E in v)&&i(u,E,h[E],null,R,d.children,x,_,he);for(const E in v){if(Vn(E))continue;const A=v[E],k=h[E];A!==k&&E!=="value"&&i(u,E,k,A,R,d.children,x,_,he)}"value"in v&&i(u,"value",h.value,v.value)}},vt=(u,d,h,v,x,_,R,E,A)=>{const k=d.el=u?u.el:s(""),z=d.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(r(k,h,v),r(z,h,v),Ee(d.children,h,z,x,_,R,E,A)):N>0&&N&64&&$&&u.dynamicChildren?(Pe(u.dynamicChildren,$,h,x,_,R,E),(d.key!=null||x&&d===x.subTree)&&vs(u,d,!0)):V(u,d,h,z,x,_,R,E,A)},ze=(u,d,h,v,x,_,R,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?x.ctx.activate(d,h,v,R,A):tn(d,h,v,x,_,R,A):Tt(u,d,A)},tn=(u,d,h,v,x,_,R)=>{const E=u.component=Qc(u,v,x);if(os(u)&&(E.ctx.renderer=O),Jc(E),E.asyncDep){if(x&&x.registerDep(E,fe),!u.el){const A=E.subTree=ue(yn);y(null,A,d,h)}return}fe(E,u,d,h,x,_,R)},Tt=(u,d,h)=>{const v=d.component=u.component;if(oc(u,d,h))if(v.asyncDep&&!v.asyncResolved){J(v,d,h);return}else v.next=d,ec(v.update),v.update();else d.el=u.el,v.vnode=d},fe=(u,d,h,v,x,_,R)=>{const E=()=>{if(u.isMounted){let{next:z,bu:N,u:$,parent:H,vnode:W}=u,ee=z,Q;yt(u,!1),z?(z.el=W.el,J(u,z,R)):z=W,N&&Sr(N),(Q=z.props&&z.props.onVnodeBeforeUpdate)&&He(Q,H,z,W),yt(u,!0);const se=Rr(u),Se=u.subTree;u.subTree=se,C(Se,se,m(Se.el),b(Se),u,x,_),z.el=se.el,ee===null&&sc(u,se.el),$&&_e($,x),(Q=z.props&&z.props.onVnodeUpdated)&&_e(()=>He(Q,H,z,W),x)}else{let z;const{el:N,props:$}=d,{bm:H,m:W,parent:ee}=u,Q=Xn(d);if(yt(u,!1),H&&Sr(H),!Q&&(z=$&&$.onVnodeBeforeMount)&&He(z,ee,d),yt(u,!0),N&&X){const se=()=>{u.subTree=Rr(u),X(N,u.subTree,u,x,null)};Q?d.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Rr(u);C(null,se,h,v,u,x,_),d.el=se.el}if(W&&_e(W,x),!Q&&(z=$&&$.onVnodeMounted)){const se=d;_e(()=>He(z,ee,se),x)}(d.shapeFlag&256||ee&&Xn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&_e(u.a,x),u.isMounted=!0,d=h=v=null}},A=u.effect=new Oa(E,()=>Ia(k),u.scope),k=u.update=()=>A.run();k.id=u.uid,yt(u,!0),k()},J=(u,d,h)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Fc(u,d.props,v,h),zc(u,d.children,h),Jt(),pi(),Zt()},V=(u,d,h,v,x,_,R,E,A=!1)=>{const k=u&&u.children,z=u?u.shapeFlag:0,N=d.children,{patchFlag:$,shapeFlag:H}=d;if($>0){if($&128){at(k,N,h,v,x,_,R,E,A);return}else if($&256){Ye(k,N,h,v,x,_,R,E,A);return}}H&8?(z&16&&he(k,x,_),N!==k&&c(h,N)):z&16?H&16?at(k,N,h,v,x,_,R,E,A):he(k,x,_,!0):(z&8&&c(h,""),H&16&&Ee(N,h,v,x,_,R,E,A))},Ye=(u,d,h,v,x,_,R,E,A)=>{u=u||Dt,d=d||Dt;const k=u.length,z=d.length,N=Math.min(k,z);let $;for($=0;$<N;$++){const H=d[$]=A?lt(d[$]):Be(d[$]);C(u[$],H,h,null,x,_,R,E,A)}k>z?he(u,x,_,!0,!1,N):Ee(d,h,v,x,_,R,E,A,N)},at=(u,d,h,v,x,_,R,E,A)=>{let k=0;const z=d.length;let N=u.length-1,$=z-1;for(;k<=N&&k<=$;){const H=u[k],W=d[k]=A?lt(d[k]):Be(d[k]);if(rn(H,W))C(H,W,h,null,x,_,R,E,A);else break;k++}for(;k<=N&&k<=$;){const H=u[N],W=d[$]=A?lt(d[$]):Be(d[$]);if(rn(H,W))C(H,W,h,null,x,_,R,E,A);else break;N--,$--}if(k>N){if(k<=$){const H=$+1,W=H<z?d[H].el:v;for(;k<=$;)C(null,d[k]=A?lt(d[k]):Be(d[k]),h,W,x,_,R,E,A),k++}}else if(k>$)for(;k<=N;)xe(u[k],x,_,!0),k++;else{const H=k,W=k,ee=new Map;for(k=W;k<=$;k++){const Ae=d[k]=A?lt(d[k]):Be(d[k]);Ae.key!=null&&ee.set(Ae.key,k)}let Q,se=0;const Se=$-W+1;let Mt=!1,ri=0;const nn=new Array(Se);for(k=0;k<Se;k++)nn[k]=0;for(k=H;k<=N;k++){const Ae=u[k];if(se>=Se){xe(Ae,x,_,!0);continue}let De;if(Ae.key!=null)De=ee.get(Ae.key);else for(Q=W;Q<=$;Q++)if(nn[Q-W]===0&&rn(Ae,d[Q])){De=Q;break}De===void 0?xe(Ae,x,_,!0):(nn[De-W]=k+1,De>=ri?ri=De:Mt=!0,C(Ae,d[De],h,null,x,_,R,E,A),se++)}const ai=Mt?Bc(nn):Dt;for(Q=ai.length-1,k=Se-1;k>=0;k--){const Ae=W+k,De=d[Ae],ii=Ae+1<z?d[Ae+1].el:v;nn[k]===0?C(null,De,h,ii,x,_,R,E,A):Mt&&(Q<0||k!==ai[Q]?$e(De,h,ii,2):Q--)}}},$e=(u,d,h,v,x=null)=>{const{el:_,type:R,transition:E,children:A,shapeFlag:k}=u;if(k&6){$e(u.component.subTree,d,h,v);return}if(k&128){u.suspense.move(d,h,v);return}if(k&64){R.move(u,d,h,O);return}if(R===Ce){r(_,d,h);for(let N=0;N<A.length;N++)$e(A[N],d,h,v);r(u.anchor,d,h);return}if(R===Ir){F(u,d,h);return}if(v!==2&&k&1&&E)if(v===0)E.beforeEnter(_),r(_,d,h),_e(()=>E.enter(_),x);else{const{leave:N,delayLeave:$,afterLeave:H}=E,W=()=>r(_,d,h),ee=()=>{N(_,()=>{W(),H&&H()})};$?$(_,W,ee):ee()}else r(_,d,h)},xe=(u,d,h,v=!1,x=!1)=>{const{type:_,props:R,ref:E,children:A,dynamicChildren:k,shapeFlag:z,patchFlag:N,dirs:$}=u;if(E!=null&&ta(E,null,h,u,!0),z&256){d.ctx.deactivate(u);return}const H=z&1&&$,W=!Xn(u);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&He(ee,d,u),z&6)In(u.component,h,v);else{if(z&128){u.suspense.unmount(h,v);return}H&&bt(u,null,d,"beforeUnmount"),z&64?u.type.remove(u,d,h,x,O,v):k&&(_!==Ce||N>0&&N&64)?he(k,d,h,!1,!0):(_===Ce&&N&384||!x&&z&16)&&he(A,d,h),v&&It(u)}(W&&(ee=R&&R.onVnodeUnmounted)||H)&&_e(()=>{ee&&He(ee,d,u),H&&bt(u,null,d,"unmounted")},h)},It=u=>{const{type:d,el:h,anchor:v,transition:x}=u;if(d===Ce){Nt(h,v);return}if(d===Ir){S(u);return}const _=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:E}=x,A=()=>R(h,_);E?E(u.el,_,A):A()}else _()},Nt=(u,d)=>{let h;for(;u!==d;)h=p(u),a(u),u=h;a(d)},In=(u,d,h)=>{const{bum:v,scope:x,update:_,subTree:R,um:E}=u;v&&Sr(v),x.stop(),_&&(_.active=!1,xe(R,u,d,h)),E&&_e(E,d),_e(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},he=(u,d,h,v=!1,x=!1,_=0)=>{for(let R=_;R<u.length;R++)xe(u[R],d,h,v,x)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),I=(u,d,h)=>{u==null?d._vnode&&xe(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,h),pi(),es(),d._vnode=u},O={p:C,um:xe,m:$e,r:It,mt:tn,mc:Ee,pc:V,pbc:Pe,n:b,o:e};let j,X;return t&&([j,X]=t(O)),{render:I,hydrate:j,createApp:Nc(I,j)}}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vs(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||vs(o,s)),s.type===wr&&(s.el=o.el)}}function Bc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Uc=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Ir=Symbol.for("v-stc"),un=[];let Ne=null;function At(e=!1){un.push(Ne=e?null:[])}function Wc(){un.pop(),Ne=un[un.length-1]||null}let xn=1;function Ai(e){xn+=e}function Kc(e){return e.dynamicChildren=xn>0?Ne||Dt:null,Wc(),xn>0&&Ne&&Ne.push(e),e}function Ot(e,t,n,r,a,i){return Kc(K(e,t,n,r,a,i,!0))}function na(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const _r="__vInternal",bs=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ve(e)||B(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function K(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bs(t),ref:t&&Qn(t),scopeId:rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ie};return s?(La(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),xn>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const ue=Yc;function Yc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kc)&&(e=yn),na(e)){const s=Yt(e,t,!0);return n&&La(s,n),xn>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(rf(e)&&(e=e.__vccOpts),t){t=qc(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=Ea(s)),ae(l)&&(Ko(l)&&!D(l)&&(l=pe({},l)),t.style=gr(l))}const o=le(e)?1:lc(e)?128:Uc(e)?64:ae(e)?4:B(e)?2:0;return K(e,t,n,r,a,o,i,!0)}function qc(e){return e?Ko(e)||_r in e?pe({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Vc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&bs(s),ref:t&&t.ref?n&&a?D(a)?a.concat(Qn(t)):[a,Qn(t)]:Qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ir(e=" ",t=0){return ue(wr,null,e,t)}function Be(e){return e==null||typeof e=="boolean"?ue(yn):D(e)?ue(Ce,null,e.slice()):typeof e=="object"?lt(e):ue(wr,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),La(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(_r in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[ir(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ea([t.class,r.class]));else if(a==="style")t.style=gr([t.style,r.style]);else if(ur(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){Le(e,t,7,[n,r])}const Xc=us();let Gc=0;function Qc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xc,i={uid:Gc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new kl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ms(r,a),emitsOptions:ns(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rc.bind(null,i),e.ce&&e.ce(i),i}let me=null,ja,Ft,Oi="__VUE_INSTANCE_SETTERS__";(Ft=Ur()[Oi])||(Ft=Ur()[Oi]=[]),Ft.push(e=>me=e),ja=e=>{Ft.length>1?Ft.forEach(t=>t(e)):Ft[0](e)};const qt=e=>{ja(e),e.scope.on()},Pt=()=>{me&&me.scope.off(),ja(null)};function ys(e){return e.vnode.shapeFlag&4}let wn=!1;function Jc(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,a=ys(e);Mc(e,n,a,t),jc(e,r);const i=a?Zc(e,t):void 0;return wn=!1,i}function Zc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yo(new Proxy(e.ctx,Oc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?tf(e):null;qt(e),Jt();const i=dt(r,e,0,[e.props,a]);if(Zt(),Pt(),Co(i)){if(i.then(Pt,Pt),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{br(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else xs(e,t)}function Pi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Go(t)),xs(e,n)}let Ci;function xs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template||Ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,f)}}e.render=r.render||Fe}{qt(e),Jt();try{Pc(e)}finally{Zt(),Pt()}}}function ef(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}}))}function tf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ef(e)},slots:e.slots,emit:e.emit,expose:t}}function za(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Go(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fn)return fn[n](e)},has(t,n){return n in t||n in fn}}))}function nf(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function rf(e){return B(e)&&"__vccOpts"in e}const de=(e,t)=>Ql(e,t,wn);function $a(e,t,n){const r=arguments.length;return r===2?ae(t)&&!D(t)?na(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&na(n)&&(n=[n]),ue(e,t,n))}const af=Symbol.for("v-scx"),of=()=>Qe(af),sf="3.3.7",lf="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,Si=wt&&wt.createElement("template"),cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?wt.createElementNS(lf,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ff=Symbol("_vtc");function uf(e,t,n){const r=e[ff];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const df=Symbol("_vod");function mf(e,t,n){const r=e.style,a=le(n);if(n&&!a){if(t&&!le(t))for(const i in t)n[i]==null&&ra(r,i,"");for(const i in n)ra(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),df in e&&(r.display=i)}}const Ri=/\s*!important$/;function ra(e,t,n){if(D(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);Ri.test(n)?e.setProperty(Qt(r),n.replace(Ri,""),"important"):e[r]=n}}const Ti=["Webkit","Moz","ms"],Nr={};function pf(e,t){const n=Nr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=hr(r);for(let a=0;a<Ti.length;a++){const i=Ti[a]+r;if(i in e)return Nr[t]=i}return t}const Ii="http://www.w3.org/1999/xlink";function hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,n);else{const i=wl(t);n==null||i&&!To(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=To(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}const Ni=Symbol("_vei");function yf(e,t,n,r,a=null){const i=e[Ni]||(e[Ni]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const f=i[t]=kf(r,a);vf(e,s,f,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const Mi=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(Mi.test(e)){t={};let r;for(;r=e.match(Mi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qt(e.slice(2)),t]}let Mr=0;const wf=Promise.resolve(),_f=()=>Mr||(wf.then(()=>Mr=0),Mr=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Ef(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Ef(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Fi=/^on[a-z]/,Af=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?uf(e,r,a):t==="style"?mf(e,n,r):ur(t)?wa(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Of(e,t,r,a))?gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hf(e,t,r,a))};function Of(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&le(n)?!1:t in e}const Pf=pe({patchProp:Af},cf);let Li;function Cf(){return Li||(Li=$c(Pf))}const Sf=(...e)=>{const t=Cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Rf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Rf(e){return le(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window<"u";function Tf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Fr(e,t){const n={};for(const r in t){const a=t[r];n[r]=je(a)?a.map(e):e(a)}return n}const dn=()=>{},je=Array.isArray,If=/\/$/,Nf=e=>e.replace(If,"");function Lr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=jf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Mf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ji(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ff(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Vt(t.matched[r],n.matched[a])&&ws(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ws(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Lf(e[n],t[n]))return!1;return!0}function Lf(e,t){return je(e)?zi(e,t):je(t)?zi(t,e):e===t}function zi(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _n;(function(e){e.pop="pop",e.push="push"})(_n||(_n={}));var mn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mn||(mn={}));function zf(e){if(!e)if(Lt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Nf(e)}const $f=/^[^#]+#/;function Df(e,t){return e.replace($f,"#")+t}function Hf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const kr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Hf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function Uf(e,t){aa.set(e,t)}function Wf(e){const t=aa.get(e);return aa.delete(e),t}let Kf=()=>location.protocol+"//"+location.host;function _s(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),ji(l,"")}return ji(n,e)+r+a}function Yf(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=_s(e,location),P=n.value,C=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}L=C?p.position-C.position:0}else r(g);a.forEach(y=>{y(n.value,P,{delta:L,type:_n.pop,direction:L?L>0?mn.forward:mn.back:mn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:kr()}),"")}function m(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?kr():null}}function qf(e){const{history:t,location:n}=window,r={value:_s(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const m=e.indexOf("#"),p=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Kf()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=G({},t.state,Di(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=G({},a.value,t.state,{forward:l,scroll:kr()});i(c.current,c,!0);const m=G({},Di(r.value,l,null),{position:c.position+1},f);i(l,m,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Vf(e){e=zf(e);const t=qf(e),n=Yf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:Df.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Xf(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Es=Symbol("");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function Xt(e,t){return G(new Error,{type:e,[Es]:!0},t)}function qe(e,t){return e instanceof Error&&Es in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",Gf={sensitive:!1,strict:!1,start:!0,end:!0},Qf=/[.+*?^${}()[\]/\\]/g;function Jf(e,t){const n=G({},Gf,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let m=0;m<f.length;m++){const p=f[m];let g=40+(n.sensitive?.25:0);if(p.type===0)m||(a+="/"),a+=p.value.replace(Qf,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:L,regexp:y}=p;i.push({name:P,repeatable:C,optional:L});const w=y||Bi;if(w!==Bi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let F=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(F=L&&f.length<2?`(?:/${F})`:"/"+F),L&&(F+="?"),a+=F,g+=20,L&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",P=i[p-1];m[P.name]=g&&P.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const p of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:L}=g,y=P in f?f[P]:"";if(je(y)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=je(y)?y.join("/"):y;if(!w)if(L)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Zf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function eu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Zf(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const tu={type:0,value:""},nu=/[a-zA-Z0-9_]/;function ru(e){if(!e)return[[]];if(e==="/")return[[tu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function m(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:nu.test(l)?p():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),a}function au(e,t,n){const r=Jf(ru(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function iu(e,t){const n=[],r=new Map;t=Yi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,m,p){const g=!p,P=ou(c);P.aliasOf=p&&p.record;const C=Yi(t,c),L=[P];if("alias"in c){const F=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of F)L.push(G({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let y,w;for(const F of L){const{path:S}=F;if(m&&S[0]!=="/"){const U=m.record.path,Z=U[U.length-1]==="/"?"":"/";F.path=m.record.path+(S&&Z+S)}if(y=au(F,m,C),p?p.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Ki(y)&&o(c.name)),P.children){const U=P.children;for(let Z=0;Z<U.length;Z++)i(U[Z],y,p&&p.children[Z])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:dn}function o(c){if(ks(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&eu(c,n[m])>=0&&(c.record.path!==n[m].record.path||!As(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Ki(c)&&r.set(c.record.name,c)}function f(c,m){let p,g={},P,C;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Xt(1,{location:c});C=p.record.name,g=G(Wi(m.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Wi(c.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in c)P=c.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!p)throw Xt(1,{location:c,currentLocation:m});C=p.record.name,g=G({},m.params,c.params),P=p.stringify(g)}const L=[];let y=p;for(;y;)L.unshift(y.record),y=y.parent;return{name:C,path:P,params:g,matched:L,meta:lu(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Wi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ou(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:su(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function su(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Yi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function As(e,t){return t.children.some(n=>n===e||As(e,n))}const Os=/#/g,cu=/&/g,fu=/\//g,uu=/=/g,du=/\?/g,Ps=/\+/g,mu=/%5B/g,pu=/%5D/g,Cs=/%5E/g,hu=/%60/g,Ss=/%7B/g,gu=/%7C/g,Rs=/%7D/g,vu=/%20/g;function Da(e){return encodeURI(""+e).replace(gu,"|").replace(mu,"[").replace(pu,"]")}function bu(e){return Da(e).replace(Ss,"{").replace(Rs,"}").replace(Cs,"^")}function ia(e){return Da(e).replace(Ps,"%2B").replace(vu,"+").replace(Os,"%23").replace(cu,"%26").replace(hu,"`").replace(Ss,"{").replace(Rs,"}").replace(Cs,"^")}function yu(e){return ia(e).replace(uu,"%3D")}function xu(e){return Da(e).replace(Os,"%23").replace(du,"%3F")}function wu(e){return e==null?"":xu(e).replace(fu,"%2F")}function or(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _u(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ps," "),o=i.indexOf("="),s=or(o<0?i:i.slice(0,o)),l=o<0?null:or(i.slice(o+1));if(s in t){let f=t[s];je(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function qi(e){let t="";for(let n in e){const r=e[n];if(n=yu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&ia(i)):[r&&ia(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ku(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Eu=Symbol(""),Vi=Symbol(""),Ha=Symbol(""),Ts=Symbol(""),oa=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=m=>{m===!1?s(Xt(4,{from:n,to:t})):m instanceof Error?s(m):Xf(m)?s(Xt(2,{from:t,to:m})):(i&&r.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(m=>s(m))})}function jr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Au(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ct(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Tf(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ct(p,n,r,i,o)()}))}}return a}function Au(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=Qe(Ha),n=Qe(Ts),r=de(()=>t.resolve(ut(e.to))),a=de(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const p=m.findIndex(Vt.bind(null,c));if(p>-1)return p;const g=Gi(l[f-2]);return f>1&&Gi(c)===g&&m[m.length-1].path!==g?m.findIndex(Vt.bind(null,l[f-2])):p}),i=de(()=>a.value>-1&&Cu(n.params,r.value.params)),o=de(()=>a.value>-1&&a.value===n.matched.length-1&&ws(n.params,r.value.params));function s(l={}){return Pu(l)?t[ut(e.replace)?"replace":"push"](ut(e.to)).catch(dn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Ou=Na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const n=Cn(Xi(e)),{options:r}=Qe(Ha),a=de(()=>({[Qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:$a("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),sa=Ou;function Pu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!je(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,n)=>e??t??n,Su=Na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(oa),a=de(()=>e.route||r.value),i=Qe(Vi,0),o=de(()=>{let f=ut(i);const{matched:c}=a.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=de(()=>a.value.matched[o.value]);Gn(Vi,de(()=>o.value+1)),Gn(Eu,s),Gn(oa,a);const l=Yl();return cn(()=>[l.value,s.value,e.name],([f,c,m],[p,g,P])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Vt(c,g)||!p)&&(c.enterCallbacks[m]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,m=s.value,p=m&&m.components[c];if(!p)return Ji(n.default,{Component:p,route:f});const g=m.props[c],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=$a(p,G({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return Ji(n.default,{Component:L,route:f})||L}}});function Ji(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Is=Su;function Ru(e){const t=iu(e.routes,e),n=e.parseQuery||_u,r=e.stringifyQuery||qi,a=e.history,i=an(),o=an(),s=an(),l=ql(ot);let f=ot;Lt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Fr.bind(null,b=>""+b),m=Fr.bind(null,wu),p=Fr.bind(null,or);function g(b,I){let O,j;return ks(b)?(O=t.getRecordMatcher(b),j=I):j=b,t.addRoute(j,O)}function P(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function y(b,I){if(I=G({},I||l.value),typeof b=="string"){const h=Lr(n,b,I.path),v=t.resolve({path:h.path},I),x=a.createHref(h.fullPath);return G(h,v,{params:p(v.params),hash:or(h.hash),redirectedFrom:void 0,href:x})}let O;if("path"in b)O=G({},b,{path:Lr(n,b.path,I.path).path});else{const h=G({},b.params);for(const v in h)h[v]==null&&delete h[v];O=G({},b,{params:m(h)}),I.params=m(I.params)}const j=t.resolve(O,I),X=b.hash||"";j.params=c(p(j.params));const u=Mf(r,G({},b,{hash:bu(X),path:j.path})),d=a.createHref(u);return G({fullPath:u,hash:X,query:r===qi?ku(b.query):b.query||{}},j,{redirectedFrom:void 0,href:d})}function w(b){return typeof b=="string"?Lr(n,b,l.value.path):G({},b)}function F(b,I){if(f!==b)return Xt(8,{from:I,to:b})}function S(b){return ie(b)}function U(b){return S(G(w(b),{replace:!0}))}function Z(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:O}=I;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),G({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ie(b,I){const O=f=y(b),j=l.value,X=b.state,u=b.force,d=b.replace===!0,h=Z(O);if(h)return ie(G(w(h),{state:typeof h=="object"?G({},X,h.state):X,force:u,replace:d}),I||O);const v=O;v.redirectedFrom=I;let x;return!u&&Ff(r,j,O)&&(x=Xt(16,{to:v,from:j}),$e(j,j,!0,!1)),(x?Promise.resolve(x):Pe(v,j)).catch(_=>qe(_)?qe(_,2)?_:at(_):V(_,v,j)).then(_=>{if(_){if(qe(_,2))return ie(G({replace:d},w(_.to),{state:typeof _.to=="object"?G({},X,_.to.state):X,force:u}),I||v)}else _=vt(v,j,!0,d,X);return rt(v,j,_),_})}function Ee(b,I){const O=F(b,I);return O?Promise.reject(O):Promise.resolve()}function be(b){const I=Nt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(b):b()}function Pe(b,I){let O;const[j,X,u]=Tu(b,I);O=jr(j.reverse(),"beforeRouteLeave",b,I);for(const h of j)h.leaveGuards.forEach(v=>{O.push(ct(v,b,I))});const d=Ee.bind(null,b,I);return O.push(d),he(O).then(()=>{O=[];for(const h of i.list())O.push(ct(h,b,I));return O.push(d),he(O)}).then(()=>{O=jr(X,"beforeRouteUpdate",b,I);for(const h of X)h.updateGuards.forEach(v=>{O.push(ct(v,b,I))});return O.push(d),he(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(je(h.beforeEnter))for(const v of h.beforeEnter)O.push(ct(v,b,I));else O.push(ct(h.beforeEnter,b,I));return O.push(d),he(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=jr(u,"beforeRouteEnter",b,I),O.push(d),he(O))).then(()=>{O=[];for(const h of o.list())O.push(ct(h,b,I));return O.push(d),he(O)}).catch(h=>qe(h,8)?h:Promise.reject(h))}function rt(b,I,O){s.list().forEach(j=>be(()=>j(b,I,O)))}function vt(b,I,O,j,X){const u=F(b,I);if(u)return u;const d=I===ot,h=Lt?history.state:{};O&&(j||d?a.replace(b.fullPath,G({scroll:d&&h&&h.scroll},X)):a.push(b.fullPath,X)),l.value=b,$e(b,I,O,d),at()}let ze;function tn(){ze||(ze=a.listen((b,I,O)=>{if(!In.listening)return;const j=y(b),X=Z(j);if(X){ie(G(X,{replace:!0}),j).catch(dn);return}f=j;const u=l.value;Lt&&Uf($i(u.fullPath,O.delta),kr()),Pe(j,u).catch(d=>qe(d,12)?d:qe(d,2)?(ie(d.to,j).then(h=>{qe(h,20)&&!O.delta&&O.type===_n.pop&&a.go(-1,!1)}).catch(dn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),V(d,j,u))).then(d=>{d=d||vt(j,u,!1),d&&(O.delta&&!qe(d,8)?a.go(-O.delta,!1):O.type===_n.pop&&qe(d,20)&&a.go(-1,!1)),rt(j,u,d)}).catch(dn)}))}let Tt=an(),fe=an(),J;function V(b,I,O){at(b);const j=fe.list();return j.length?j.forEach(X=>X(b,I,O)):console.error(b),Promise.reject(b)}function Ye(){return J&&l.value!==ot?Promise.resolve():new Promise((b,I)=>{Tt.add([b,I])})}function at(b){return J||(J=!b,tn(),Tt.list().forEach(([I,O])=>b?O(b):I()),Tt.reset()),b}function $e(b,I,O,j){const{scrollBehavior:X}=e;if(!Lt||!X)return Promise.resolve();const u=!O&&Wf($i(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Jo().then(()=>X(b,I,u)).then(d=>d&&Bf(d)).catch(d=>V(d,b,I))}const xe=b=>a.go(b);let It;const Nt=new Set,In={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:L,getRoutes:C,resolve:y,options:e,push:S,replace:U,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:Ye,install(b){const I=this;b.component("RouterLink",sa),b.component("RouterView",Is),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Lt&&!It&&l.value===ot&&(It=!0,S(a.location).catch(X=>{}));const O={};for(const X in ot)Object.defineProperty(O,X,{get:()=>l.value[X],enumerable:!0});b.provide(Ha,I),b.provide(Ts,Uo(O)),b.provide(oa,l);const j=b.unmount;Nt.add(b),b.unmount=function(){Nt.delete(b),Nt.size<1&&(f=ot,ze&&ze(),ze=null,l.value=ot,It=!1,J=!1),j()}}};function he(b){return b.reduce((I,O)=>I.then(()=>be(O)),Promise.resolve())}return In}function Tu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Vt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Vt(f,l))||a.push(l))}return[n,r,a]}const Iu={class:"bg-gray-800"},Nu={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Mu={class:"block h-16 items-center justify-center max-w-full"},Fu={class:"grid w-full items-center h-full"},Lu={class:"block"},ju={class:"flex justify-between w-full items-baseline space-x-4"},zu={__name:"Navbar",setup(e){return(t,n)=>(At(),Ot("nav",Iu,[K("div",Nu,[K("div",Mu,[K("div",Fu,[K("div",Lu,[K("div",ju,[ue(ut(sa),{class:"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium",to:{name:"Home",headerText:"Home"}},{default:Xr(()=>[ir(" Dodaj wpis ")]),_:1}),ue(ut(sa),{class:"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium",to:{name:"Wpisy",params:{headerText:"Wpisy"}}},{default:Xr(()=>[ir(" Wpisy ")]),_:1})])])])])])]))}},$u={class:"bg-white shadow"},Du={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},Hu={class:"text-3xl font-bold tracking-tight text-gray-900"},Ba={__name:"Header",props:["headerText"],setup(e){return(t,n)=>(At(),Ot("header",$u,[K("div",Du,[K("h1",Hu,_l(e.headerText),1)])]))}},Bu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Uu={name:"App",components:{Navbar:zu,Header:Ba,RouterView:Is}},Wu={class:"block h-screen"},Ku={class:"min-h-full"};function Yu(e,t,n,r,a,i){const o=Gr("Navbar"),s=Gr("RouterView");return At(),Ot("div",Wu,[K("div",Ku,[ue(o),K("main",null,[ue(s)])])])}const qu=Bu(Uu,[["render",Yu]]),Vu={class:"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"},Xu={class:"space-y-12"},Gu={class:"border-b border-gray-900/10 pb-12"},Qu=K("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Wpisy w tej księdze to początek naszej małżeńskiej historii. Dziękujemy za Twój udział w naszym szczęściu i życzymy Ci wielu pięknych chwil!",-1),Ju={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Zu=K("div",{class:"col-span-full"},[K("label",{for:"about",class:"block text-sm font-medium leading-6 text-gray-900"},"Życzenia"),K("div",{class:"mt-2"},[K("textarea",{id:"about",name:"about",rows:"3",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})])],-1),ed={class:"col-span-full"},td=K("label",{for:"cover-photo",class:"block text-sm font-medium leading-6 text-gray-900"},"Zdjęcia",-1),nd={class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},rd={class:"text-center"},ad={class:"mt-4 flex text-sm leading-6 text-gray-600"},id={for:"file-upload",class:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"},od=K("span",null,"Wgraj zdjęcie",-1),sd={class:"grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"},ld=["id"],cd=["onClick"],fd=K("div",{class:"mt-6 flex items-center justify-end gap-x-6"},[K("button",{type:"button",class:"text-sm font-semibold leading-6 text-gray-900"},"Cancel"),K("button",{type:"submit",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Save")],-1),ud={__name:"Home",setup(e){const t=Cn([]),n=a=>{let i=a.target.files;for(let o=0;o<i.length;o++){let s=i[o];const l=new FileReader;l.onload=f=>{t.push({index:o,image:f.target.result})},l.readAsDataURL(s)}},r=a=>{for(let i=0;i<t.length;i++)t[i].index===a.index&&t.splice(i,1)};return(a,i)=>{const o=Gr("font-awesome-icon");return At(),Ot(Ce,null,[ue(Ba,{headerText:"Podziel się życzeniami"}),K("div",Vu,[K("form",null,[K("div",Xu,[K("div",Gu,[Qu,K("div",Ju,[Zu,K("div",ed,[td,K("div",nd,[K("div",rd,[K("div",ad,[K("label",id,[od,K("input",{id:"file-upload",name:"file-upload",type:"file",accept:"image/*",class:"sr-only",multiple:"",onChange:i[0]||(i[0]=s=>n(s))},null,32)])])])]),K("div",sd,[(At(!0),Ot(Ce,null,Ac(t,s=>(At(),Ot("div",{id:s.index,class:"relative bg-white rounded-lg text-right h-40 bg-cover bg-center",style:gr("background-image: url("+s.image+")")},[K("button",{type:"button",onClick:l=>r(s),class:"text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center p-1","data-modal-hide":"default-modal"},[ue(o,{icon:"fa-solid fa-user-secret",class:"bg-red-600 text-red-50 text-shadow rounded-md"})],8,cd)],12,ld))),256))])])])])]),fd])])],64)}}},dd={__name:"Index",setup(e){return(t,n)=>(At(),Ot(Ce,null,[ue(Ba,{headerText:"Wpisy"}),ir(" Test ")],64))}},md=Ru({history:Vf("/WishBook/"),routes:[{path:"/",name:"Home",component:ud,props:!0},{path:"/wpisy",name:"Wpisy",component:dd,props:!0}]});function Zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function pd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hd(e,t,n){return t&&eo(e.prototype,t),n&&eo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){return vd(e)||yd(e,t)||Ns(e,t)||wd()}function Sn(e){return gd(e)||bd(e)||Ns(e)||xd()}function gd(e){if(Array.isArray(e))return la(e)}function vd(e){if(Array.isArray(e))return e}function bd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ns(e,t){if(e){if(typeof e=="string")return la(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return la(e,t)}}function la(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var to=function(){},Wa={},Ms={},Fs=null,Ls={mark:to,measure:to};try{typeof window<"u"&&(Wa=window),typeof document<"u"&&(Ms=document),typeof MutationObserver<"u"&&(Fs=MutationObserver),typeof performance<"u"&&(Ls=performance)}catch{}var _d=Wa.navigator||{},no=_d.userAgent,ro=no===void 0?"":no,pt=Wa,ne=Ms,ao=Fs,$n=Ls;pt.document;var nt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",js=~ro.indexOf("MSIE")||~ro.indexOf("Trident/"),Dn,Hn,Bn,Un,Wn,Je="___FONT_AWESOME___",ca=16,zs="fa",$s="svg-inline--fa",St="data-fa-i2svg",fa="data-fa-pseudo-element",kd="data-fa-pseudo-element-pending",Ka="data-prefix",Ya="data-icon",io="fontawesome-i2svg",Ed="async",Ad=["HTML","HEAD","STYLE","SCRIPT"],Ds=function(){try{return!0}catch{return!1}}(),te="classic",oe="sharp",qa=[te,oe];function Rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var kn=Rn((Dn={},ce(Dn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ce(Dn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Dn)),En=Rn((Hn={},ce(Hn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Hn,oe,{solid:"fass",regular:"fasr",light:"fasl"}),Hn)),An=Rn((Bn={},ce(Bn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Bn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Bn)),Od=Rn((Un={},ce(Un,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Un,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Un)),Pd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hs="fa-layers-text",Cd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sd=Rn((Wn={},ce(Wn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Wn,oe,{900:"fass",400:"fasr",300:"fasl"}),Wn)),Bs=[1,2,3,4,5,6,7,8,9,10],Rd=Bs.concat([11,12,13,14,15,16,17,18,19,20]),Td=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(En[te]).map(On.add.bind(On));Object.keys(En[oe]).map(On.add.bind(On));var Id=[].concat(qa,Sn(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY]).concat(Bs.map(function(e){return"".concat(e,"x")})).concat(Rd.map(function(e){return"w-".concat(e)})),pn=pt.FontAwesomeConfig||{};function Nd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Md(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Fd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fd.forEach(function(e){var t=Ua(e,2),n=t[0],r=t[1],a=Md(Nd(n));a!=null&&(pn[r]=a)})}var Us={styleDefault:"solid",familyDefault:"classic",cssPrefix:zs,replacementClass:$s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pn.familyPrefix&&(pn.cssPrefix=pn.familyPrefix);var Gt=T(T({},Us),pn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var M={};Object.keys(Us).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Gt[e]=n,hn.forEach(function(r){return r(M)})},get:function(){return Gt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,hn.forEach(function(n){return n(M)})},get:function(){return Gt.cssPrefix}});pt.FontAwesomeConfig=M;var hn=[];function Ld(e){return hn.push(e),function(){hn.splice(hn.indexOf(e),1)}}var st=ca,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jd(e){if(!(!e||!nt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var zd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=zd[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Va(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ws(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $d(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ws(e[n]),'" ')},"").trim()}function Er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xa(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function Dd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Hd(e){var t=e.transform,n=e.width,r=n===void 0?ca:n,a=e.height,i=a===void 0?ca:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&js?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Bd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ks(){var e=zs,t=$s,n=M.cssPrefix,r=M.replacementClass,a=Bd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var oo=!1;function zr(){M.autoAddCss&&!oo&&(jd(Ks()),oo=!0)}var Ud={mixout:function(){return{dom:{css:Ks,insertCss:zr}}},hooks:function(){return{beforeDOMElementCreation:function(){zr()},beforeI2svg:function(){zr()}}}},Ze=pt||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Me=Ze[Je],Ys=[],Wd=function e(){ne.removeEventListener("DOMContentLoaded",e),lr=1,Ys.map(function(t){return t()})},lr=!1;nt&&(lr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),lr||ne.addEventListener("DOMContentLoaded",Wd));function Kd(e){nt&&(lr?setTimeout(e,0):Ys.push(e))}function Tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ws(e):"<".concat(t," ").concat($d(r),">").concat(i.map(Tn).join(""),"</").concat(t,">")}function so(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Yd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function qd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ua(e){var t=qd(e);return t.length===1?t[0].toString(16):null}function Vd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function lo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function da(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=lo(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,lo(t)):Me.styles[e]=T(T({},Me.styles[e]||{}),i),e==="fas"&&da("fa",t)}var Kn,Yn,qn,zt=Me.styles,Xd=Me.shims,Gd=(Kn={},ce(Kn,te,Object.values(An[te])),ce(Kn,oe,Object.values(An[oe])),Kn),Ga=null,qs={},Vs={},Xs={},Gs={},Qs={},Qd=(Yn={},ce(Yn,te,Object.keys(kn[te])),ce(Yn,oe,Object.keys(kn[oe])),Yn);function Jd(e){return~Id.indexOf(e)}function Zd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Jd(a)?a:null}var Js=function(){var t=function(i){return $r(zt,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};qs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Vs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||M.autoFetchSvg,r=$r(Xd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Xs=r.names,Gs=r.unicodes,Ga=Ar(M.styleDefault,{family:M.familyDefault})};Ld(function(e){Ga=Ar(e.styleDefault,{family:M.familyDefault})});Js();function Qa(e,t){return(qs[e]||{})[t]}function em(e,t){return(Vs[e]||{})[t]}function kt(e,t){return(Qs[e]||{})[t]}function Zs(e){return Xs[e]||{prefix:null,iconName:null}}function tm(e){var t=Gs[e],n=Qa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return Ga}var Ja=function(){return{prefix:null,iconName:null,rest:[]}};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=kn[r][e],i=En[r][e]||En[r][a],o=e in Me.styles?e:null;return i||o||null}var co=(qn={},ce(qn,te,Object.keys(An[te])),ce(qn,oe,Object.keys(An[oe])),qn);function Or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,te,"".concat(M.cssPrefix,"-").concat(te)),ce(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return co[te].includes(f)}))&&(s=te),(e.includes(i[oe])||e.some(function(f){return co[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,c){var m=Zd(M.cssPrefix,c);if(zt[c]?(c=Gd[s].includes(c)?Od[s][c]:c,o=c,f.prefix=c):Qd[s].indexOf(c)>-1?(o=c,f.prefix=Ar(c,{family:s})):m?f.iconName=m:c!==M.replacementClass&&c!==i[te]&&c!==i[oe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?Zs(f.iconName):{},g=kt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ht()||"fas"),l}var nm=function(){function e(){pd(this,e),this.definitions={}}return hd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),da(s,o[s]);var l=An[te][s];l&&da(l,o[s]),Js()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),fo=[],$t={},Wt={},rm=Object.keys(Wt);function am(e,t){var n=t.mixoutsTo;return fo=e,$t={},Object.keys(Wt).forEach(function(r){rm.indexOf(r)===-1&&delete Wt[r]}),fo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){$t[o]||($t[o]=[]),$t[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function ma(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=$t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=$t[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(t)return t=kt(n,t)||t,so(el.definitions,n,t)||so(Me.styles,n,t)}var el=new nm,im=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Rt("noAuto")},om={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Rt("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Kd(function(){lm({autoReplaceSvgRoot:n}),Rt("watch",t)})}},sm={icon:function(t){if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ar(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Pd))){var a=Or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:kt(i,t)||t}}}},Oe={noAuto:im,config:M,dom:om,parse:sm,library:el,findIconDefinition:pa,toHtml:Tn},lm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&nt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function cm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Er(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function fm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Za(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,L=P.height,y=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),F={children:[],attributes:T(T({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},S=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};g&&(F.attributes[St]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete F.attributes.title);var U=T(T({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},S),m.styles)}),Z=r.found&&n.found?et("generateAbstractMask",U)||{children:[],attributes:{}}:et("generateAbstractIcon",U)||{children:[],attributes:{}},ie=Z.children,Ee=Z.attributes;return U.children=ie,U.attributes=Ee,s?fm(U):cm(U)}function uo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[St]="");var c=T({},o.styles);Xa(a)&&(c.transform=Hd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Er(c);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function um(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dr=Me.styles;function ha(e){var t=e[0],n=e[1],r=e.slice(4),a=Ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var dm={found:!1,width:512,height:512};function mm(e,t){!Ds&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ga(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=Zs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Dr[t]&&Dr[t][e]){var o=Dr[t][e];return r(ha(o))}mm(e,t),r(T(T({},dm),{},{icon:M.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var mo=function(){},va=M.measurePerformance&&$n&&$n.mark&&$n.measure?$n:{mark:mo,measure:mo},ln='FA "6.4.2"',pm=function(t){return va.mark("".concat(ln," ").concat(t," begins")),function(){return tl(t)}},tl=function(t){va.mark("".concat(ln," ").concat(t," ends")),va.measure("".concat(ln," ").concat(t),"".concat(ln," ").concat(t," begins"),"".concat(ln," ").concat(t," ends"))},ei={begin:pm,end:tl},Jn=function(){};function po(e){var t=e.getAttribute?e.getAttribute(St):null;return typeof t=="string"}function hm(e){var t=e.getAttribute?e.getAttribute(Ka):null,n=e.getAttribute?e.getAttribute(Ya):null;return t&&n}function gm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function vm(){if(M.autoReplaceSvg===!0)return Zn.replace;var e=Zn[M.autoReplaceSvg];return e||Zn.replace}function bm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function ym(e){return ne.createElement(e)}function nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bm:ym:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(nl(o,{ceFn:r}))}),a}function xm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(nl(a),n)}),n.getAttribute(St)===null&&M.keepOriginalSource){var r=ne.createComment(xm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Va(n).indexOf(M.replacementClass))return Zn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Tn(s)}).join(`
`);n.setAttribute(St,""),n.innerHTML=o}};function ho(e){e()}function rl(e,t){var n=typeof t=="function"?t:Jn;if(e.length===0)n();else{var r=ho;M.mutateApproach===Ed&&(r=pt.requestAnimationFrame||ho),r(function(){var a=vm(),i=ei.begin("mutate");e.map(a),i(),n()})}}var ti=!1;function al(){ti=!0}function ba(){ti=!1}var cr=null;function go(e){if(ao&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Jn:t,r=e.nodeCallback,a=r===void 0?Jn:r,i=e.pseudoElementsCallback,o=i===void 0?Jn:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;cr=new ao(function(f){if(!ti){var c=ht();en(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!po(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&po(m.target)&&~Td.indexOf(m.attributeName))if(m.attributeName==="class"&&hm(m.target)){var p=Or(Va(m.target)),g=p.prefix,P=p.iconName;m.target.setAttribute(Ka,g||c),P&&m.target.setAttribute(Ya,P)}else gm(m.target)&&a(m.target)})}}),nt&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wm(){cr&&cr.disconnect()}function _m(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function km(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Or(Va(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=em(a.prefix,e.innerText)||Qa(a.prefix,ua(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Em(e){var t=en(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Am(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=km(e),r=n.iconName,a=n.prefix,i=n.rest,o=Em(e),s=ma("parseNodeAttributes",{},e),l=t.styleParser?_m(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Om=Me.styles;function il(e){var t=M.autoReplaceSvg==="nest"?vo(e,{styleParser:!1}):vo(e);return~t.extra.classes.indexOf(Hs)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var gt=new Set;qa.map(function(e){gt.add("fa-".concat(e))});Object.keys(kn[te]).map(gt.add.bind(gt));Object.keys(kn[oe]).map(gt.add.bind(gt));gt=Sn(gt);function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=ne.documentElement.classList,r=function(m){return n.add("".concat(io,"-").concat(m))},a=function(m){return n.remove("".concat(io,"-").concat(m))},i=M.autoFetchSvg?gt:qa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Om));i.includes("fa")||i.push("fa");var o=[".".concat(Hs,":not([").concat(St,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(St,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=en(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ei.begin("onTree"),f=s.reduce(function(c,m){try{var p=il(m);p&&c.push(p)}catch(g){Ds||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(p){rl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),m(p)})})}function Pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;il(e).then(function(n){n&&rl([n],t)})}function Cm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:pa(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Sm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,p=m===void 0?null:m,g=n.titleId,P=g===void 0?null:g,C=n.classes,L=C===void 0?[]:C,y=n.attributes,w=y===void 0?{}:y,F=n.styles,S=F===void 0?{}:F;if(t){var U=t.prefix,Z=t.iconName,ie=t.icon;return Pr(T({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Pn()):(w["aria-hidden"]="true",w.focusable="false")),Za({icons:{main:ha(ie),mask:l?ha(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:Z,transform:T(T({},We),a),symbol:o,title:p,maskId:c,titleId:P,extra:{attributes:w,styles:S,classes:L}})})}},Rm={mixout:function(){return{icon:Cm(Sm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bo,n.nodeCallback=Pm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return bo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ga(a,s),c.iconName?ga(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=Ua(C,2),y=L[0],w=L[1];g([n,Za({icons:{main:y,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Er(s);l.length>0&&(a.style=l);var f;return Xa(o)&&(f=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Tm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Sn(i)).join(" ")},children:o}]})}}}},Im={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Pr({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),um({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Sn(s))}})})}}}},Nm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Pr({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),uo({content:n,transform:T(T({},We),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Sn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(js){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,uo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Mm=new RegExp('"',"ug"),yo=[1105920,1112319];function Fm(e){var t=e.replace(Mm,""),n=Vd(t,0),r=n>=yo[0]&&n<=yo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ua(a?t[0]:t),isSecondary:r||a}}function xo(e,t){var n="".concat(kd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=en(e.children),o=i.filter(function(ie){return ie.getAttribute(fa)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?oe:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[p][l[2].toLowerCase()]:Sd[p][f],P=Fm(m),C=P.value,L=P.isSecondary,y=l[0].startsWith("FontAwesome"),w=Qa(g,C),F=w;if(y){var S=tm(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!L&&(!o||o.getAttribute(Ka)!==g||o.getAttribute(Ya)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var U=Am(),Z=U.extra;Z.attributes[fa]=t,ga(w,g).then(function(ie){var Ee=Za(T(T({},U),{},{icons:{main:ie,mask:Ja()},prefix:g,iconName:F,extra:Z,watchable:!0})),be=ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Ee.map(function(Pe){return Tn(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lm(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function jm(e){return e.parentNode!==document.head&&!~Ad.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(nt)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(jm).map(Lm),a=ei.begin("searchPseudoElements");al(),Promise.all(r).then(function(){a(),ba(),t()}).catch(function(){a(),ba(),n()})})}var zm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&wo(a)}}},_o=!1,$m={mixout:function(){return{dom:{unwatch:function(){al(),_o=!0}}}},hooks:function(){return{bootstrap:function(){go(ma("mutationObserverCallbacks",{}))},noAuto:function(){wm()},watch:function(n){var r=n.observeMutationsRoot;_o?ba():go(ma("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ko=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Dm={mixout:function(){return{parse:{transform:function(n){return ko(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ko(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Hr={x:0,y:0,width:"100%",height:"100%"};function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hm(e){return e.tag==="g"?e.children:[e]}var Bm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Or(a.split(" ").map(function(o){return o.trim()})):Ja();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,p=o.icon,g=Dd({transform:l,containerWidth:m,iconWidth:f}),P={tag:"rect",attributes:T(T({},Hr),{},{fill:"white"})},C=c.children?{children:c.children.map(Eo)}:{},L={tag:"g",attributes:T({},g.inner),children:[Eo(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},C))]},y={tag:"g",attributes:T({},g.outer),children:[L]},w="mask-".concat(s||Pn()),F="clip-".concat(s||Pn()),S={tag:"mask",attributes:T(T({},Hr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Hm(p)},S]};return r.push(U,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(w,")")},Hr)}),{children:r,attributes:a}}}},Um={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Km=[Ud,Rm,Tm,Im,Nm,zm,$m,Dm,Bm,Um,Wm];am(Km,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Ym=Oe.library;Oe.dom;var ya=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var qm=Oe.icon;Oe.layer;Oe.text;Oe.counter;function Ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ao(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e,t){if(e==null)return{};var n=Vm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ol={exports:{}};(function(e){(function(t){var n=function(y,w,F){if(!f(w)||m(w)||p(w)||g(w)||l(w))return w;var S,U=0,Z=0;if(c(w))for(S=[],Z=w.length;U<Z;U++)S.push(n(y,w[U],F));else{S={};for(var ie in w)Object.prototype.hasOwnProperty.call(w,ie)&&(S[y(ie,F)]=n(y,w[ie],F))}return S},r=function(y,w){w=w||{};var F=w.separator||"_",S=w.split||/(?=[A-Z])/;return y.split(S).join(F)},a=function(y){return P(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var w=a(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},P=function(y){return y=y-0,y===y},C=function(y,w){var F=w&&"process"in w?w.process:w;return typeof F!="function"?y:function(S,U){return F(S,y,U)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,w){return n(C(a,w),y)},decamelizeKeys:function(y,w){return n(C(o,w),y,w)},pascalizeKeys:function(y,w){return n(C(i,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Gm)})(ol);var Qm=ol.exports,Jm=["class","style"];function Zm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Qm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ep(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return sl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=ep(c);break;case"style":l.style=Zm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Xm(n,Jm);return $a(e.tag,Xe(Xe(Xe({},t),{},{class:a.class,style:Xe(Xe({},a.style),o)},a.attrs),s),r)}var ll=!1;try{ll=!0}catch{}function tp(){if(!ll&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function np(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oo(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ya.icon)return ya.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rp=Na({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=de(function(){return Oo(t.icon)}),i=de(function(){return Br("classes",np(t))}),o=de(function(){return Br("transform",typeof t.transform=="string"?ya.transform(t.transform):t.transform)}),s=de(function(){return Br("mask",Oo(t.mask))}),l=de(function(){return qm(a.value,Xe(Xe(Xe(Xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});cn(l,function(c){if(!c)return tp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=de(function(){return l.value?sl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),ap={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};Ym.add(ap);const ni=Sf(qu);ni.use(md);ni.component("font-awesome-icon",rp);ni.mount("#app");
