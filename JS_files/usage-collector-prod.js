var churn360=(()=>{var _t=Object.create;var k=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var It=Object.getOwnPropertyNames,Fe=Object.getOwnPropertySymbols,Lt=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable;var ke=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))De.call(t,r)&&ke(e,r,t[r]);if(Fe)for(var r of Fe(t))Ft.call(t,r)&&ke(e,r,t[r]);return e};var Be=e=>k(e,"__esModule",{value:!0});var Dt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),kt=(e,t)=>{Be(e);for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Bt=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of It(t))!De.call(e,s)&&s!=="default"&&k(e,s,{get:()=>t[s],enumerable:!(r=Ut(t,s))||r.enumerable});return e},Ht=e=>Bt(Be(k(e!=null?_t(Lt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var bt=Dt((ei,xt)=>{"use strict";var kr=new Set(["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED","HOSTNAME_MISMATCH"]);xt.exports=e=>!kr.has(e&&e.code)});var Vr={};kt(Vr,{UsageCollector:()=>$});var Q=class{};var ee=class{constructor(t,r){this.title=t!=null?t:document.title,this.path=r!=null?r:document.location.pathname}};var B=class{constructor(t){this.url=t!=null?t:document.location.href,this.properties=new ee}};var T=class{static wrap(t,r){var n,o,i,c,f,l;let s=new T;return s.version="2.0",s.data=t,s.referrer=(n=r==null?void 0:r.referrer)!=null?n:document.referrer,s.userAgent=(o=r==null?void 0:r.userAgent)!=null?o:navigator.userAgent,s.locale=(i=r==null?void 0:r.locale)!=null?i:navigator.language,s.TimeZone=(c=r==null?void 0:r.TimeZone)!=null?c:Intl.DateTimeFormat().resolvedOptions().timeZone,s.sentAt=(f=r==null?void 0:r.sentAt)!=null?f:new Date(Date.now()),s.timestamp=(l=r==null?void 0:r.timestamp)!=null?l:s.sentAt,s.data=t,s}};"use strict";function H(e,t){return function(){return e.apply(t,arguments)}}"use strict";var{toString:He}=Object.prototype,{getPrototypeOf:he}=Object,Ee=(e=>t=>{let r=He.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Ee(t)===e),te=e=>t=>typeof t===e,{isArray:L}=Array,v=te("undefined");function qt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ve=A("ArrayBuffer");function Mt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}var zt=te("string"),O=te("function"),qe=te("number"),ge=e=>e!==null&&typeof e=="object",Jt=e=>e===!0||e===!1,re=e=>{if(Ee(e)!=="object")return!1;let t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Kt=A("Date"),Vt=A("File"),Wt=A("Blob"),Gt=A("FileList"),Xt=e=>ge(e)&&O(e.pipe),$t=e=>{let t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||He.call(e)===t||O(e.toString)&&e.toString()===t)},Yt=A("URLSearchParams"),Zt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let s,n;if(typeof e!="object"&&(e=[e]),L(e))for(s=0,n=e.length;s<n;s++)t.call(null,e[s],s,e);else{let o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length,c;for(s=0;s<i;s++)c=o[s],t.call(null,e[c],c,e)}}function Me(e,t){t=t.toLowerCase();let r=Object.keys(e),s=r.length,n;for(;s-- >0;)if(n=r[s],t===n.toLowerCase())return n;return null}var ze=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Je=e=>!v(e)&&e!==ze;function ye(){let{caseless:e}=Je(this)&&this||{},t={},r=(s,n)=>{let o=e&&Me(t,n)||n;re(t[o])&&re(s)?t[o]=ye(t[o],s):re(s)?t[o]=ye({},s):L(s)?t[o]=s.slice():t[o]=s};for(let s=0,n=arguments.length;s<n;s++)arguments[s]&&q(arguments[s],r);return t}var Qt=(e,t,r,{allOwnKeys:s}={})=>(q(t,(n,o)=>{r&&O(n)?e[o]=H(n,r):e[o]=n},{allOwnKeys:s}),e),er=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),tr=(e,t,r,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},rr=(e,t,r,s)=>{let n,o,i,c={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),o=n.length;o-- >0;)i=n[o],(!s||s(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&he(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},sr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let s=e.indexOf(t,r);return s!==-1&&s===r},nr=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!qe(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},or=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&he(Uint8Array)),ir=(e,t)=>{let s=(e&&e[Symbol.iterator]).call(e),n;for(;(n=s.next())&&!n.done;){let o=n.value;t.call(e,o[0],o[1])}},ar=(e,t)=>{let r,s=[];for(;(r=e.exec(t))!==null;)s.push(r);return s},cr=A("HTMLFormElement"),lr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,n){return s.toUpperCase()+n}),Ke=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ur=A("RegExp"),Ve=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),s={};q(r,(n,o)=>{t(n,o,e)!==!1&&(s[o]=n)}),Object.defineProperties(e,s)},fr=e=>{Ve(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let s=e[r];if(!!O(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},pr=(e,t)=>{let r={},s=n=>{n.forEach(o=>{r[o]=!0})};return L(e)?s(e):s(String(e).split(t)),r},dr=()=>{},mr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Re="abcdefghijklmnopqrstuvwxyz",We="0123456789",Ge={DIGIT:We,ALPHA:Re,ALPHA_DIGIT:Re+Re.toUpperCase()+We},hr=(e=16,t=Ge.ALPHA_DIGIT)=>{let r="",{length:s}=t;for(;e--;)r+=t[Math.random()*s|0];return r};function Er(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var gr=e=>{let t=new Array(10),r=(s,n)=>{if(ge(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[n]=s;let o=L(s)?[]:{};return q(s,(i,c)=>{let f=r(i,n+1);!v(f)&&(o[c]=f)}),t[n]=void 0,o}}return s};return r(e,0)},a={isArray:L,isArrayBuffer:ve,isBuffer:qt,isFormData:$t,isArrayBufferView:Mt,isString:zt,isNumber:qe,isBoolean:Jt,isObject:ge,isPlainObject:re,isUndefined:v,isDate:Kt,isFile:Vt,isBlob:Wt,isRegExp:ur,isFunction:O,isStream:Xt,isURLSearchParams:Yt,isTypedArray:or,isFileList:Gt,forEach:q,merge:ye,extend:Qt,trim:Zt,stripBOM:er,inherits:tr,toFlatObject:rr,kindOf:Ee,kindOfTest:A,endsWith:sr,toArray:nr,forEachEntry:ir,matchAll:ar,isHTMLForm:cr,hasOwnProperty:Ke,hasOwnProp:Ke,reduceDescriptors:Ve,freezeMethods:fr,toObjectSet:pr,toCamelCase:lr,noop:dr,toFiniteNumber:mr,findKey:Me,global:ze,isContextDefined:Je,ALPHABET:Ge,generateString:hr,isSpecCompliantForm:Er,toJSONObject:gr};"use strict";function F(e,t,r,s,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),n&&(this.response=n)}a.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xe=F.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(F,$e);Object.defineProperty(Xe,"isAxiosError",{value:!0});F.from=(e,t,r,s,n,o)=>{let i=Object.create(Xe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),F.call(i,e.message,t,r,s,n),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var m=F;var se=null;"use strict";function xe(e){return a.isPlainObject(e)||a.isArray(e)}function Ye(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ze(e,t,r){return e?e.concat(t).map(function(n,o){return n=Ye(n),!r&&o?"["+n+"]":n}).join(r?".":""):t}function yr(e){return a.isArray(e)&&!e.some(xe)}var Rr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function xr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(se||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});let s=r.metaTokens,n=r.visitor||u,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(n))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,w){let b=p;if(p&&!w&&typeof p=="object"){if(a.endsWith(h,"{}"))h=s?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&yr(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(b=a.toArray(p)))return h=Ye(h),b.forEach(function(Y,jt){!(a.isUndefined(Y)||Y===null)&&t.append(i===!0?Ze([h],jt,o):i===null?h:h+"[]",l(Y))}),!1}return xe(p)?!0:(t.append(Ze(w,h,o),l(p)),!1)}let d=[],g=Object.assign(Rr,{defaultVisitor:u,convertValue:l,isVisitable:xe});function E(p,h){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(p),a.forEach(p,function(b,I){(!(a.isUndefined(b)||b===null)&&n.call(t,b,a.isString(I)?I.trim():I,h,g))===!0&&E(b,h?h.concat(I):[I])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}var P=xr;"use strict";function Qe(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function et(e,t){this._pairs=[],e&&P(e,this,t)}var tt=et.prototype;tt.append=function(t,r){this._pairs.push([t,r])};tt.toString=function(t){let r=t?function(s){return t.call(this,s,Qe)}:Qe;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};var ne=et;"use strict";function br(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function M(e,t,r){if(!t)return e;let s=r&&r.encode||br,n=r&&r.serialize,o;if(n?o=n(t,r):o=a.isURLSearchParams(t)?t.toString():new ne(t,r).toString(s),o){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}"use strict";var rt=class{constructor(){this.handlers=[]}use(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(s){s!==null&&t(s)})}},be=rt;"use strict";var oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};"use strict";var st=typeof URLSearchParams!="undefined"?URLSearchParams:ne;"use strict";var nt=typeof FormData!="undefined"?FormData:null;"use strict";var ot=typeof Blob!="undefined"?Blob:null;var Sr=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),wr=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:st,FormData:nt,Blob:ot},isStandardBrowserEnv:Sr,isStandardBrowserWebWorkerEnv:wr,protocols:["http","https","file","blob","url","data"]};"use strict";function Se(e,t){return P(e,new R.classes.URLSearchParams,Object.assign({visitor:function(r,s,n,o){return R.isNode&&a.isBuffer(r)?(this.append(s,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}"use strict";function Ar(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Cr(e){let t={},r=Object.keys(e),s,n=r.length,o;for(s=0;s<n;s++)o=r[s],t[o]=e[o];return t}function Tr(e){function t(r,s,n,o){let i=r[o++],c=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(n)?n.length:i,f?(a.hasOwnProp(n,i)?n[i]=[n[i],s]:n[i]=s,!c):((!n[i]||!a.isObject(n[i]))&&(n[i]=[]),t(r,s,n[i],o)&&a.isArray(n[i])&&(n[i]=Cr(n[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(s,n)=>{t(Ar(s),n,r,0)}),r}return null}var ie=Tr;"use strict";var Or={"Content-Type":void 0};function Pr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(e)}var ae={transitional:oe,adapter:["xhr","http"],transformRequest:[function(t,r){let s=r.getContentType()||"",n=s.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return n&&n?JSON.stringify(ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Se(t,this.formSerializer).toString();if((c=a.isFileList(t))||s.indexOf("multipart/form-data")>-1){let f=this.env&&this.env.FormData;return P(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||n?(r.setContentType("application/json",!1),Pr(t)):t}],transformResponse:[function(t){let r=this.transitional||ae.transitional,s=r&&r.forcedJSONParsing,n=this.responseType==="json";if(t&&a.isString(t)&&(s&&!this.responseType||n)){let i=!(r&&r.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){ae.headers[t]={}});a.forEach(["post","put","patch"],function(t){ae.headers[t]=a.merge(Or)});var D=ae;"use strict";var Nr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),it=e=>{let t={},r,s,n;return e&&e.split(`
`).forEach(function(i){n=i.indexOf(":"),r=i.substring(0,n).trim().toLowerCase(),s=i.substring(n+1).trim(),!(!r||t[r]&&Nr[r])&&(r==="set-cookie"?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t};"use strict";var at=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function ce(e){return e===!1||e==null?e:a.isArray(e)?e.map(ce):String(e)}function jr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,s;for(;s=r.exec(e);)t[s[1]]=s[2];return t}function _r(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function we(e,t,r,s,n){if(a.isFunction(s))return s.call(this,t,r);if(n&&(t=r),!!a.isString(t)){if(a.isString(s))return t.indexOf(s)!==-1;if(a.isRegExp(s))return s.test(t)}}function Ur(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Ir(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+r,{value:function(n,o,i){return this[s].call(this,t,n,o,i)},configurable:!0})})}var J=class{constructor(t){t&&this.set(t)}set(t,r,s){let n=this;function o(c,f,l){let u=z(f);if(!u)throw new Error("header name must be a non-empty string");let d=a.findKey(n,u);(!d||n[d]===void 0||l===!0||l===void 0&&n[d]!==!1)&&(n[d||f]=ce(c))}let i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!_r(t)?i(it(t),r):t!=null&&o(r,t,s),this}get(t,r){if(t=z(t),t){let s=a.findKey(this,t);if(s){let n=this[s];if(!r)return n;if(r===!0)return jr(n);if(a.isFunction(r))return r.call(this,n,s);if(a.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=z(t),t){let s=a.findKey(this,t);return!!(s&&this[s]!==void 0&&(!r||we(this,this[s],s,r)))}return!1}delete(t,r){let s=this,n=!1;function o(i){if(i=z(i),i){let c=a.findKey(s,i);c&&(!r||we(s,s[c],c,r))&&(delete s[c],n=!0)}}return a.isArray(t)?t.forEach(o):o(t),n}clear(t){let r=Object.keys(this),s=r.length,n=!1;for(;s--;){let o=r[s];(!t||we(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let r=this,s={};return a.forEach(this,(n,o)=>{let i=a.findKey(s,o);if(i){r[i]=ce(n),delete r[o];return}let c=t?Ur(o):String(o).trim();c!==o&&delete r[o],r[c]=ce(n),s[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(s,n)=>{s!=null&&s!==!1&&(r[n]=t&&a.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let s=new this(t);return r.forEach(n=>s.set(n)),s}static accessor(t){let s=(this[at]=this[at]={accessors:{}}).accessors,n=this.prototype;function o(i){let c=z(i);s[c]||(Ir(n,i),s[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(J.prototype);a.freezeMethods(J);var x=J;"use strict";function K(e,t){let r=this||D,s=t||r,n=x.from(s.headers),o=s.data;return a.forEach(e,function(c){o=c.call(r,o,n.normalize(),t?t.status:void 0)}),n.normalize(),o}"use strict";function V(e){return!!(e&&e.__CANCEL__)}"use strict";function ct(e,t,r){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(ct,m,{__CANCEL__:!0});var N=ct;"use strict";function Ae(e,t,r){let s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}"use strict";var lt=R.isStandardBrowserEnv?function(){return{write:function(r,s,n,o,i,c){let f=[];f.push(r+"="+encodeURIComponent(s)),a.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){let s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();"use strict";function Ce(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}"use strict";function Te(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}"use strict";function W(e,t){return e&&!Ce(t)?Te(e,t):t}"use strict";var ut=R.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(i){let c=a.isString(i)?n(i):i;return c.protocol===s.protocol&&c.host===s.host}}():function(){return function(){return!0}}();"use strict";function Oe(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}"use strict";function Lr(e,t){e=e||10;let r=new Array(e),s=new Array(e),n=0,o=0,i;return t=t!==void 0?t:1e3,function(f){let l=Date.now(),u=s[o];i||(i=l),r[n]=f,s[n]=l;let d=o,g=0;for(;d!==n;)g+=r[d++],d=d%e;if(n=(n+1)%e,n===o&&(o=(o+1)%e),l-i<t)return;let E=u&&l-u;return E?Math.round(g*1e3/E):void 0}}var ft=Lr;"use strict";function pt(e,t){let r=0,s=ft(50,250);return n=>{let o=n.loaded,i=n.lengthComputable?n.total:void 0,c=o-r,f=s(c),l=o<=i;r=o;let u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&l?(i-o)/f:void 0,event:n};u[t?"download":"upload"]=!0,e(u)}}var Fr=typeof XMLHttpRequest!="undefined",dt=Fr&&function(e){return new Promise(function(r,s){let n=e.data,o=x.from(e.headers).normalize(),i=e.responseType,c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(n)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){let E=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(E+":"+p))}let u=W(e.baseURL,e.url);l.open(e.method.toUpperCase(),M(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function d(){if(!l)return;let E=x.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:E,config:e,request:l};Ae(function(b){r(b),f()},function(b){s(b),f()},h),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){!l||(s(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){s(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||oe;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),s(new m(p,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){let E=(e.withCredentials||ut(u))&&e.xsrfCookieName&&lt.read(e.xsrfCookieName);E&&o.set(e.xsrfHeaderName,E)}n===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(p,h){l.setRequestHeader(h,p)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",pt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",pt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=E=>{!l||(s(!E||E.type?new N(null,e,l):E),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));let g=Oe(u);if(g&&R.protocols.indexOf(g)===-1){s(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}l.send(n||null)})};var le={http:se,xhr:dt};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});var mt={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,s;for(let n=0;n<t&&(r=e[n],!(s=a.isString(r)?le[r.toLowerCase()]:r));n++);if(!s)throw s===!1?new m(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(le,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:le};"use strict";function Pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new N(null,e)}function ue(e){return Pe(e),e.headers=x.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),mt.getAdapter(e.adapter||D.adapter)(e).then(function(s){return Pe(e),s.data=K.call(e,e.transformResponse,s),s.headers=x.from(s.headers),s},function(s){return V(s)||(Pe(e),s&&s.response&&(s.response.data=K.call(e,e.transformResponse,s.response),s.response.headers=x.from(s.response.headers))),Promise.reject(s)})}"use strict";var ht=e=>e instanceof x?e.toJSON():e;function C(e,t){t=t||{};let r={};function s(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function n(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return s(void 0,l,d)}else return s(l,u,d)}function o(l,u){if(!a.isUndefined(u))return s(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return s(void 0,l)}else return s(void 0,u)}function c(l,u,d){if(d in t)return s(l,u);if(d in e)return s(void 0,l)}let f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>n(ht(l),ht(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){let d=f[u]||n,g=d(e[u],t[u],u);a.isUndefined(g)&&d!==c||(r[u]=g)}),r}var fe="1.3.4";"use strict";var Ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ne[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});var Et={};Ne.transitional=function(t,r,s){function n(o,i){return"[Axios v"+fe+"] Transitional option '"+o+"'"+i+(s?". "+s:"")}return(o,i,c)=>{if(t===!1)throw new m(n(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Et[i]&&(Et[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Dr(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);let s=Object.keys(e),n=s.length;for(;n-- >0;){let o=s[n],i=t[o];if(i){let c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var pe={assertOptions:Dr,validators:Ne};"use strict";var j=pe.validators,G=class{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=C(this.defaults,r);let{transitional:s,paramsSerializer:n,headers:o}=r;s!==void 0&&pe.assertOptions(s,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),n!==void 0&&pe.assertOptions(n,{encode:j.function,serialize:j.function},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[r.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=x.concat(i,o);let c=[],f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(f=f&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});let l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,d=0,g;if(!f){let p=[ue.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),g=p.length,u=Promise.resolve(r);d<g;)u=u.then(p[d++],p[d++]);return u}g=c.length;let E=r;for(d=0;d<g;){let p=c[d++],h=c[d++];try{E=p(E)}catch(w){h.call(this,w);break}}try{u=ue.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,g=l.length;d<g;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=C(this.defaults,t);let r=W(t.baseURL,t.url);return M(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(r,s){return this.request(C(s||{},{method:t,url:r,data:(s||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(s){return function(o,i,c){return this.request(C(c||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}G.prototype[t]=r(),G.prototype[t+"Form"]=r(!0)});var X=G;"use strict";var de=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});let s=this;this.promise.then(n=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](n);s._listeners=null}),this.promise.then=n=>{let o,i=new Promise(c=>{s.subscribe(c),o=c}).then(n);return i.cancel=function(){s.unsubscribe(o)},i},t(function(o,i,c){s.reason||(s.reason=new N(o,i,c),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new de(function(n){t=n}),cancel:t}}},gt=de;"use strict";function je(e){return function(r){return e.apply(null,r)}}"use strict";function _e(e){return a.isObject(e)&&e.isAxiosError===!0}var Ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ue).forEach(([e,t])=>{Ue[t]=e});var yt=Ue;"use strict";function Rt(e){let t=new X(e),r=H(X.prototype.request,t);return a.extend(r,X.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return Rt(C(e,n))},r}var y=Rt(D);y.Axios=X;y.CanceledError=N;y.CancelToken=gt;y.isCancel=V;y.VERSION=fe;y.toFormData=P;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=je;y.isAxiosError=_e;y.mergeConfig=C;y.AxiosHeaders=x;y.formToJSON=e=>ie(a.isHTMLForm(e)?new FormData(e):e);y.HttpStatusCode=yt;y.default=y;var Ie=y;var St=Ht(bt()),wt="axios-retry";function At(e){let t=["ERR_CANCELED","ECONNABORTED"];return e.response||!e.code||t.includes(e.code)?!1:(0,St.default)(e)}var Ct=["get","head","options"],Br=Ct.concat(["put","delete"]);function Le(e){return e.code!=="ECONNABORTED"&&(!e.response||e.response.status>=500&&e.response.status<=599)}function Hr(e){var t;return((t=e.config)==null?void 0:t.method)?Le(e)&&Ct.indexOf(e.config.method)!==-1:!1}function Tt(e){var t;return((t=e.config)==null?void 0:t.method)?Le(e)&&Br.indexOf(e.config.method)!==-1:!1}function Ot(e){return At(e)||Tt(e)}function vr(){return 0}function qr(e=0,t=void 0,r=100){let s=2**e*r,n=s*.2*Math.random();return s+n}var Mr={retries:3,retryCondition:Ot,retryDelay:vr,shouldResetTimeout:!1,onRetry:()=>{}};function zr(e,t){return Z(Z(Z({},Mr),t),e[wt])}function Pt(e,t){let r=zr(e,t||{});return r.retryCount=r.retryCount||0,r.lastRequestTime=r.lastRequestTime||Date.now(),e[wt]=r,r}function Jr(e,t){e.defaults.agent===t.agent&&delete t.agent,e.defaults.httpAgent===t.httpAgent&&delete t.httpAgent,e.defaults.httpsAgent===t.httpsAgent&&delete t.httpsAgent}async function Kr(e,t){let{retries:r,retryCondition:s}=e,n=(e.retryCount||0)<r&&s(t);if(typeof n=="object")try{return await n!==!1}catch(o){return!1}return n}var U=(e,t)=>{let r=e.interceptors.request.use(n=>(Pt(n,t),n)),s=e.interceptors.response.use(null,async n=>{let{config:o}=n;if(!o)return Promise.reject(n);let i=Pt(o,t);if(await Kr(i,n)){i.retryCount+=1;let{retryDelay:c,shouldResetTimeout:f,onRetry:l}=i,u=c(i.retryCount,n);if(Jr(e,o),!f&&o.timeout&&i.lastRequestTime){let d=Date.now()-i.lastRequestTime,g=o.timeout-d-u;if(g<=0)return Promise.reject(n);o.timeout=g}return o.transformRequest=[d=>d],await l(i.retryCount,n,o),new Promise(d=>{setTimeout(()=>d(e(o)),u)})}return Promise.reject(n)});return{requestInterceptorId:r,responseInterceptorId:s}};U.isNetworkError=At;U.isSafeRequestError=Hr;U.isIdempotentRequestError=Tt;U.isNetworkOrIdempotentRequestError=Ot;U.exponentialDelay=qr;U.isRetryableError=Le;var Nt=U;var _=class{constructor(){this.churn360UsageCollectorEndpoint=Ie.create({baseURL:_.baseUrl});this.churn360UsageCollectorEndpoint.interceptors.response.use(t=>t,t=>{if(!!t&&!(t.config.retryIndex&&t.config.retryIndex>2||t.response.status!==401||!this.createSessionCallback))return!t.config.retryIndex||typeof t.config.retryIndex!="number"?t.config.retryIndex=1:t.config.retryIndex++,this.createSession().then(r=>(this.sessionKey=r,t.config.headers["X-Api-Key"]=this.sessionKey,this.churn360UsageCollectorEndpoint.request(t.config)))}),Nt(this.churn360UsageCollectorEndpoint,{retries:3})}get sessionKey(){return this._sessionKey}set sessionKey(t){this._sessionKey=t}async createSession(){if(!!this.createSessionCallback)return this.createSessionCallback()}async initialize(t,r,s,n){let o=`${_.baseUrl}/initialize`,i={customerIdentifier:r,userId:s};return this.createSessionCallback=()=>new Promise((c,f)=>{this.callInitialize(o,t,i,n,()=>c(this.sessionKey),f)}),new Promise((c,f)=>{this.callInitialize(o,t,i,n,c,f)})}async initializeWithSessionKey(t,r){return this.createSessionCallback=r,new Promise((s,n)=>{this.sessionKey=t,s(!0)})}callInitialize(t,r,s,n,o,i){this.churn360UsageCollectorEndpoint.post(t,n,{headers:{"Content-Type":"application/json","X-Api-Key":r},params:{customerIdentifier:s.customerIdentifier,userId:s.userId}}).then(c=>{if(!c.data.sessionkey)throw"Could not initialize.";this.sessionKey=c.data.sessionkey,o(!0)}).catch(c=>i(c))}async postIdentity(t){let r=`${_.baseUrl}/identify`;return new Promise((s,n)=>{this.churn360UsageCollectorEndpoint.post(r,JSON.stringify(t),{headers:this.getCommonHttpHeaders()}).then(o=>s(!0)).catch(o=>n(!1))})}async postPage(t){let r=`${_.baseUrl}/page`;return new Promise((s,n)=>{this.churn360UsageCollectorEndpoint.post(r,JSON.stringify(t),{headers:this.getCommonHttpHeaders()}).then(o=>s(!0)).catch(o=>n(!1))})}async postTrack(t){let r=`${_.baseUrl}/track`;return new Promise((s,n)=>{this.churn360UsageCollectorEndpoint.post(r,JSON.stringify(t),{headers:this.getCommonHttpHeaders()}).then(o=>s(!0)).catch(o=>n(!1))})}async getEventConfigurations(){let t=`${_.baseUrl}/event-configurations`;return new Promise((r,s)=>{this.churn360UsageCollectorEndpoint.get(t,{headers:this.getCommonHttpHeaders()}).then(n=>r(n)).catch(n=>s(n))})}getCommonHttpHeaders(){return{"Content-Type":"application/json","X-Api-Key":this.sessionKey}}},me=_;me.baseUrl="https://usage.churn360.com/api";var S=class{constructor(){this.usageCollectorService=new me}async initialize(t,r,s,n){try{n||(n=new Q),n.customerIdentifier=r,await this.usageCollectorService.initialize(t,r,s,n)}catch(o){if(S.logErrors===!1)return;console.error("Churn360: Could not initialize usage collector.",o)}}async initializeWithSessionKey(t,r){try{await this.usageCollectorService.initializeWithSessionKey(t,r),this.startEventListener()}catch(s){if(S.logErrors===!1)return;console.error("Churn360: Could not initialize usage collector.",s)}}async identify(t){try{let r=await this.getUserIp().then(n=>n.ip),s={traits:t,ip:r};this.usageCollectorService.postIdentity(T.wrap(s))}catch(r){if(S.logErrors===!1)return;console.error("Churn360: Could not log page call.",r)}}async page(t,r,s,n,o){let i=null,c=null;try{if(!t&&!r&&!s&&!n&&!o)i=document.title,c=document.location.href,s=document.location.pathname,n=t,o=r;else{i=t,n=t;let u=typeof r=="string";console.log("isUrlOrAdditionalFields",u),c=u?r:document.location.href,o=u?{}:r}let l=await{url:c,feature:n,properties:{title:i,path:s},additionalFields:o};await this.usageCollectorService.postPage(T.wrap(l))}catch(f){if(S.logErrors===!1)return;console.error("Churn360: Could not log page call into.",f)}}async track(t,r,s){try{let n={name:t,feature:r,additionalFields:s,context:{page:new B}};this.usageCollectorService.postTrack(T.wrap(n))}catch(n){if(S.logErrors===!1)return;console.error("Churn360: Could not log track call into.",n)}}startEventListener(){try{this.usageCollectorService.getEventConfigurations().then(t=>{this.eventConfigurations=t.data,!!this.eventConfigurations&&window.addEventListener("click",r=>{let s=window.location.href;this.eventConfigurations.forEach(n=>{(s.match(new RegExp(n.urlIdentifier))||window.location.pathname.match(new RegExp(n.urlIdentifier)))&&n.cssSelectors.forEach(o=>{let i=document.querySelector(o.selector);i&&i.isSameNode(r.target)&&this.track(o.type,o.name)})})},!0)})}catch(t){if(S.logErrors===!1)return;console.error("Churn360: Could not initiate usage listener.",t)}}get userIp(){return sessionStorage.getItem(S.userIpStorageKey)}set userIp(t){sessionStorage.setItem(S.userIpStorageKey,t)}async getUserIp(){try{let r=await(await fetch("https://api.ipify.org/?format=json")).json();return this.userIp=r,r}catch(t){if(S.logErrors===!1)return;console.error("Churn360: Could not get IP address.",t)}return this.userIp}},$=S;$.logErrors=!1,$.userIpStorageKey="Churn360-userIp";return Vr;})();
