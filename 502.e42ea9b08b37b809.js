"use strict";(self.webpackChunkjcalc=self.webpackChunkjcalc||[]).push([[502],{3502:(Ie,nt,_)=>{_.r(nt),_.d(nt,{MainModule:()=>Me});var t=_(8256),rt=_(529);let ot=(()=>{class e{constructor(n){this.http=n}getLocation(n){return this.http.get(`http://api.ipstack.com/${n}`,{params:{access_key:"3d34b7c389101f8ccbc8814cc8c3455f"}})}getMyIp(){return this.http.get("https://api.ipify.org/?format=json")}getCurrencyRate(){}getToday(){const n=new Date;return n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate()}getGoldRate(){return this.http.get("https://www.metals-api.com/api/latest",{params:{access_key:"w9jn1dlzz7vd56kbbspoffs63kb872y70z3mrip5rr668bomzyl22hh5t2g4",base:"INR",symbols:"XAU-CHEN"}})}getGoldRate2(){return this.http.get("http://goldpricez.com/api/rates/currency/gbp/measure/gram",{params:{"X-API-KEY":"309443e55e2497e289c2d0c75c64ff24309443e5"}})}copyMessage(n){const o=document.createElement("textarea");o.style.position="fixed",o.style.left="0",o.style.top="0",o.style.opacity="0",o.value=n,document.body.appendChild(o),o.focus(),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(rt.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=_(6895),l=_(433),C=_(9837);function vt(e,r){if(1&e&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n)}}function At(e,r){1&e&&(t.TgZ(0,"ngb-toast",11),t._uU(1," Copied to clipboard "),t.qZA()),2&e&&t.Q6J("autohide",!0)}let Ut=(()=>{class e{constructor(n){this.common=n,this.password="",this.passwordLength=8,this.passwordLengths=[4,5,6,7,8,9,10,11,12,13,14],this.show=!1}ngOnInit(){this.generateToughPassword()}isTemplate(n){return n.textOrTpl instanceof t.Rgc}generatePassword(){const o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&^";let i="";for(let s=0,a=o.length;s<8;++s)i+=o.charAt(Math.floor(Math.random()*a));return i}generateToughPassword(){const n="abcdefghijklmnopqrstuvwxyz",o=n.toUpperCase(),i="0123456789",s='!"@$%+-_?^&*()';let a="",u="";const c=this.passwordLength%4,d=(this.passwordLength-c)/4,f=h=>h[Math.floor(Math.random()*h.length)];for(let h=0;h<=d-1;h++)a+=`${f(n)}${f(o)}${f(i)}${f(s)}`;for(let h=0;h<=c-1;h++)u+=f([...n,...o,...i,...s]);this.password=a+u}showToast(){this.show=!0,setTimeout(()=>{this.show=!1},1e3)}copyMessage(n){this.showToast(),this.common.copyMessage(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(ot))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-random-password"]],decls:19,vars:4,consts:[[1,"container"],[1,"justify-content-between"],["id","print-image",1,"row"],[1,"pl-0","pr-0","col-md-8","col-sm-12"],[1,"card","p-3"],[2,"float","right"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["aria-label","Default select example",1,"form-select","mt-2","mb-2",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"ml-2",3,"click"],[3,"autohide",4,"ngIf"],[3,"autohide"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6," Random Password "),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return o.generateToughPassword()}),t._uU(9,"Generate Again"),t.qZA()()(),t.TgZ(10,"select",7),t.NdJ("ngModelChange",function(s){return o.passwordLength=s}),t.YNc(11,vt,2,1,"option",8),t.qZA(),t.TgZ(12,"p"),t._uU(13,"Your Password is: "),t.TgZ(14,"b"),t._uU(15),t.qZA(),t.TgZ(16,"a",9),t.NdJ("click",function(){return o.copyMessage(o.password)}),t._uU(17,"Copy"),t.qZA()(),t.YNc(18,At,2,1,"ngb-toast",10),t.qZA()()()()()),2&n&&(t.xp6(10),t.Q6J("ngModel",o.passwordLength),t.xp6(1),t.Q6J("ngForOf",o.passwordLengths),t.xp6(4),t.Oqu(o.password),t.xp6(3),t.Q6J("ngIf",o.show))},dependencies:[b.sg,b.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,C.Iv]}),e})();var it=_(646);let St=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-history"]],decls:1,vars:1,template:function(n,o){1&n&&t._uU(0),2&n&&t.hij("","history Works","\n")}}),e})();function st(e,r,n,o,i,s,a){try{var u=e[s](a),c=u.value}catch(p){return void n(p)}u.done?r(c):Promise.resolve(c).then(o,i)}function g(e){return function(){var r=this,n=arguments;return new Promise(function(o,i){var s=e.apply(r,n);function a(c){st(s,o,i,a,u,"next",c)}function u(c){st(s,o,i,a,u,"throw",c)}a(void 0)})}}const at="application/font-woff",ut="image/jpeg",Zt={woff:at,woff2:at,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ut,jpeg:ut,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function T(e){const r=function Et(e){const r=/\.([^./]*?)$/g.exec(e);return r?r[1]:""}(e).toLowerCase();return Zt[r]||""}function Mt(e){return e.split(/,/)[1]}function R(e){return-1!==e.search(/^(data:)/)}function ct(e,r){return`data:${r};base64,${e}`}function lt(e,r,n){return v.apply(this,arguments)}function v(){return(v=g(function*(e,r,n){const o=yield fetch(e,r);if(404===o.status)throw new Error(`Resource "${o.url}" not found`);const i=yield o.blob();return new Promise((s,a)=>{const u=new FileReader;u.onerror=a,u.onloadend=()=>{try{s(n({res:o,result:u.result}))}catch(c){a(c)}},u.readAsDataURL(i)})})).apply(this,arguments)}const A={};function It(e,r,n){let o=e.replace(/\?.*/,"");return n&&(o=e),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),r?`[${r}]${o}`:o}function U(e,r,n){return S.apply(this,arguments)}function S(){return(S=g(function*(e,r,n){const o=It(e,r,n.includeQueryParams);if(null!=A[o])return A[o];let i;n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());try{i=ct(yield lt(e,n.fetchRequestInit,({res:a,result:u})=>(r||(r=a.headers.get("Content-Type")||""),Mt(u))),r)}catch(s){i=n.imagePlaceholder||"";let a=`Failed to fetch resource: ${e}`;s&&(a="string"==typeof s?s:s.message),a&&console.warn(a)}return A[o]=i,i})).apply(this,arguments)}function kt(e,r){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),o=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(i),r&&(o.href=r),i.href=e,i.href}const Pt=(()=>{let e=0;return()=>(e+=1,`u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${e}`)})();function y(e){const r=[];for(let n=0,o=e.length;n<o;n++)r.push(e[n]);return r}function w(e,r){const o=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(r);return o?parseFloat(o.replace("px","")):0}function gt(e,r={}){const n=r.width||function qt(e){const r=w(e,"border-left-width"),n=w(e,"border-right-width");return e.clientWidth+r+n}(e),o=r.height||function Ft(e){const r=w(e,"border-top-width"),n=w(e,"border-bottom-width");return e.clientHeight+r+n}(e);return{width:n,height:o}}function Lt(){let e,r;try{r=process}catch{}const n=r&&r.env?r.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const m=16384;function Gt(e){(e.width>m||e.height>m)&&(e.width>m&&e.height>m?e.width>e.height?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m):e.width>m?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m))}function Z(e){return new Promise((r,n)=>{const o=new Image;o.onload=()=>r(o),o.onerror=n,o.crossOrigin="anonymous",o.decoding="sync",o.src=e})}function Jt(e){return E.apply(this,arguments)}function E(){return(E=g(function*(e){return Promise.resolve().then(()=>(new XMLSerializer).serializeToString(e)).then(encodeURIComponent).then(r=>`data:image/svg+xml;charset=utf-8,${r}`)})).apply(this,arguments)}function $t(e,r,n){return M.apply(this,arguments)}function M(){return(M=g(function*(e,r,n){const o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),s=document.createElementNS(o,"foreignObject");return i.setAttribute("width",`${r}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${r} ${n}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),i.appendChild(s),s.appendChild(e),Jt(i)})).apply(this,arguments)}function mt(e,r,n){const o=window.getComputedStyle(e,n),i=o.getPropertyValue("content");if(""===i||"none"===i)return;const s=Pt();try{r.className=`${r.className} ${s}`}catch{return}const a=document.createElement("style");a.appendChild(function Dt(e,r,n){const o=`.${e}:${r}`,i=n.cssText?function Ht(e){const r=e.getPropertyValue("content");return`${e.cssText} content: '${r.replace(/'|"/g,"")}';`}(n):function Ot(e){return y(e).map(r=>`${r}: ${e.getPropertyValue(r)}${e.getPropertyPriority(r)?" !important":""};`).join(" ")}(n);return document.createTextNode(`${o}{${i}}`)}(s,n,o)),r.appendChild(a)}function Vt(e){return I.apply(this,arguments)}function I(){return(I=g(function*(e){const r=e.toDataURL();return"data:,"===r?e.cloneNode(!1):Z(r)})).apply(this,arguments)}function jt(e,r){return k.apply(this,arguments)}function k(){return(k=g(function*(e,r){const n=e.poster,o=T(n);return Z(yield U(n,o,r))})).apply(this,arguments)}function Qt(e,r){return P.apply(this,arguments)}function P(){return(P=g(function*(e,r){return e instanceof HTMLCanvasElement?Vt(e):e instanceof HTMLVideoElement&&e.poster?jt(e,r):e.cloneNode(!1)})).apply(this,arguments)}const Bt=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();function Wt(e,r,n){return q.apply(this,arguments)}function q(){return(q=g(function*(e,r,n){var o;const i=Bt(e)&&e.assignedNodes?y(e.assignedNodes()):y((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes);return 0===i.length||e instanceof HTMLVideoElement||(yield i.reduce((s,a)=>s.then(()=>pt(a,n)).then(u=>{u&&r.appendChild(u)}),Promise.resolve())),r})).apply(this,arguments)}function Xt(e,r){return r instanceof Element&&(function Kt(e,r){const n=r.style;if(!n)return;const o=window.getComputedStyle(e);o.cssText?(n.cssText=o.cssText,n.transformOrigin=o.transformOrigin):y(o).forEach(i=>{let s=o.getPropertyValue(i);"font-size"===i&&s.endsWith("px")&&(s=Math.floor(parseFloat(s.substring(0,s.length-2)))-.1+"px"),n.setProperty(i,s,o.getPropertyPriority(i))})}(e,r),function Nt(e,r){mt(e,r,":before"),mt(e,r,":after")}(e,r),function Yt(e,r){e instanceof HTMLTextAreaElement&&(r.innerHTML=e.value),e instanceof HTMLInputElement&&r.setAttribute("value",e.value)}(e,r),function zt(e,r){if(e instanceof HTMLSelectElement){const o=Array.from(r.children).find(i=>e.value===i.getAttribute("value"));o&&o.setAttribute("selected","")}}(e,r)),r}function pt(e,r,n){return F.apply(this,arguments)}function F(){return(F=g(function*(e,r,n){return n||!r.filter||r.filter(e)?Promise.resolve(e).then(o=>Qt(o,r)).then(o=>Wt(e,o,r)).then(o=>Xt(e,o)):null})).apply(this,arguments)}const dt=/url\((['"]?)([^'"]+?)\1\)/g,te=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,ee=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ne(e){const r=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${r})(['"]?\\))`,"g")}function re(e){const r=[];return e.replace(dt,(n,o,i)=>(r.push(i),n)),r.filter(n=>!R(n))}function oe(e,r,n,o,i){return L.apply(this,arguments)}function L(){return(L=g(function*(e,r,n,o,i){try{const s=n?kt(r,n):r,a=T(r);let u;return u=i?ct(yield i(s),a):yield U(s,a,o),e.replace(ne(r),`$1${u}$3`)}catch{}return e})).apply(this,arguments)}function ie(e,{preferredFontFormat:r}){return r?e.replace(ee,n=>{for(;;){const[o,,i]=te.exec(n)||[];if(!i)return"";if(i===r)return`src: ${o};`}}):e}function ht(e){return-1!==e.search(dt)}function ft(e,r,n){return G.apply(this,arguments)}function G(){return(G=g(function*(e,r,n){if(!ht(e))return e;const o=ie(e,n);return re(o).reduce((s,a)=>s.then(u=>oe(u,a,r,n)),Promise.resolve(o))})).apply(this,arguments)}function se(e,r){return J.apply(this,arguments)}function J(){return(J=g(function*(e,r){var n;const o=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");if(o){const i=yield ft(o,null,r);e.style.setProperty("background",i,e.style.getPropertyPriority("background"))}})).apply(this,arguments)}function ae(e,r){return $.apply(this,arguments)}function $(){return($=g(function*(e,r){if((!(e instanceof HTMLImageElement)||R(e.src))&&(!(e instanceof SVGImageElement)||R(e.href.baseVal)))return;const n=e instanceof HTMLImageElement?e.src:e.href.baseVal,o=yield U(n,T(n),r);yield new Promise((i,s)=>{e.onload=i,e.onerror=s,e instanceof HTMLImageElement?(e.srcset="",e.src=o):e.href.baseVal=o})})).apply(this,arguments)}function ue(e,r){return H.apply(this,arguments)}function H(){return(H=g(function*(e,r){const o=y(e.childNodes).map(i=>_t(i,r));yield Promise.all(o).then(()=>e)})).apply(this,arguments)}function _t(e,r){return O.apply(this,arguments)}function O(){return(O=g(function*(e,r){e instanceof Element&&(yield se(e,r),yield ae(e,r),yield ue(e,r))})).apply(this,arguments)}function ce(e,r){const{style:n}=e;r.backgroundColor&&(n.backgroundColor=r.backgroundColor),r.width&&(n.width=`${r.width}px`),r.height&&(n.height=`${r.height}px`);const o=r.style;return null!=o&&Object.keys(o).forEach(i=>{n[i]=o[i]}),e}const yt={};function bt(e){return D.apply(this,arguments)}function D(){return(D=g(function*(e){let r=yt[e];return null!=r||(r={url:e,cssText:yield(yield fetch(e)).text()},yt[e]=r),r})).apply(this,arguments)}function wt(e,r){return N.apply(this,arguments)}function N(){return N=g(function*(e,r){let n=e.cssText;const o=/url\(["']?([^"')]+)["']?\)/g,s=(n.match(/url\([^)]+\)/g)||[]).map(function(){var a=g(function*(u){let c=u.replace(o,"$1");return c.startsWith("https://")||(c=new URL(c,e.url).href),lt(c,r.fetchRequestInit,({result:p})=>(n=n.replace(u,`url(${p})`),[u,p]))});return function(u){return a.apply(this,arguments)}}());return Promise.all(s).then(()=>n)}),N.apply(this,arguments)}function xt(e){if(null==e)return[];const r=[];let o=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=i.exec(o);if(null===c)break;r.push(c[0])}o=o.replace(i,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,u=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let c=s.exec(o);if(null===c){if(c=u.exec(o),null===c)break;s.lastIndex=u.lastIndex}else u.lastIndex=s.lastIndex;r.push(c[0])}return r}function le(e,r){return V.apply(this,arguments)}function V(){return(V=g(function*(e,r){const n=[],o=[];return e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach((s,a)=>{if(s.type===CSSRule.IMPORT_RULE){let u=a+1;const p=bt(s.href).then(d=>wt(d,r)).then(d=>xt(d).forEach(f=>{try{i.insertRule(f,f.startsWith("@import")?u+=1:i.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:f,error:h})}})).catch(d=>{console.error("Error loading remote css",d.toString())});o.push(p)}})}catch(s){const a=e.find(u=>null==u.href)||document.styleSheets[0];null!=i.href&&o.push(bt(i.href).then(u=>wt(u,r)).then(u=>xt(u).forEach(c=>{a.insertRule(c,i.cssRules.length)})).catch(u=>{console.error("Error loading remote stylesheet",u.toString())})),console.error("Error inlining remote css file",s.toString())}}),Promise.all(o).then(()=>(e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach(s=>{n.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${i.href}`,s.toString())}}),n))})).apply(this,arguments)}function ge(e){return e.filter(r=>r.type===CSSRule.FONT_FACE_RULE).filter(r=>ht(r.style.getPropertyValue("src")))}function me(e,r){return j.apply(this,arguments)}function j(){return(j=g(function*(e,r){if(null==e.ownerDocument)throw new Error("Provided element is not within a Document");const n=y(e.ownerDocument.styleSheets);return ge(yield le(n,r))})).apply(this,arguments)}function pe(e,r){return Q.apply(this,arguments)}function Q(){return(Q=g(function*(e,r){const n=yield me(e,r);return(yield Promise.all(n.map(i=>ft(i.cssText,i.parentStyleSheet?i.parentStyleSheet.href:null,r)))).join("\n")})).apply(this,arguments)}function de(e,r){return B.apply(this,arguments)}function B(){return(B=g(function*(e,r){const n=null!=r.fontEmbedCSS?r.fontEmbedCSS:r.skipFonts?null:yield pe(e,r);if(n){const o=document.createElement("style"),i=document.createTextNode(n);o.appendChild(i),e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o)}})).apply(this,arguments)}function he(e){return W.apply(this,arguments)}function W(){return(W=g(function*(e,r={}){const{width:n,height:o}=gt(e,r),i=yield pt(e,r,!0);return yield de(i,r),yield _t(i,r),ce(i,r),yield $t(i,n,o)})).apply(this,arguments)}function x(e){return K.apply(this,arguments)}function K(){return(K=g(function*(e,r={}){const{width:n,height:o}=gt(e,r),i=yield he(e,r),s=yield Z(i),a=document.createElement("canvas"),u=a.getContext("2d"),c=r.pixelRatio||Lt(),p=r.canvasWidth||n,d=r.canvasHeight||o;return a.width=p*c,a.height=d*c,r.skipAutoScale||Gt(a),a.style.width=`${p}`,a.style.height=`${d}`,r.backgroundColor&&(u.fillStyle=r.backgroundColor,u.fillRect(0,0,a.width,a.height)),u.drawImage(s,0,0,a.width,a.height),a})).apply(this,arguments)}function Ct(e){return z.apply(this,arguments)}function z(){return(z=g(function*(e,r={}){return(yield x(e,r)).toDataURL()})).apply(this,arguments)}const fe=["printPdf"],_e=["formRoot"];function ye(e,r){if(1&e&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("(",n.location.zip,")")}}function be(e,r){if(1&e&&(t.TgZ(0,"span",29),t._uU(1),t.YNc(2,ye,2,1,"small",30),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.location.city," "),t.xp6(1),t.Q6J("ngIf",n.location.zip)}}function we(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.reset())}),t._uU(1,"Reset"),t.qZA()}}function xe(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.printImage())}),t._uU(1,"Print"),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("disabled",0===n.myForm.value.totalAmount)}}function Te(e,r){if(1&e){const n=t.EpF();t.ynx(0),t._UZ(1,"input",15),t.TgZ(2,"label",16),t.NdJ("click",function(){const s=t.CHM(n).$implicit,a=t.oxw();return a.selectedToggle=s,t.KtG(a.reset())}),t._uU(3),t.qZA(),t.BQk()}if(2&e){const n=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("name",n+"-outlined")("id",n)("checked",n===o.selectedToggle),t.xp6(1),t.Q6J("for",n+"-outlined"),t.xp6(1),t.Oqu(n)}}function Re(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"input",17),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.units=i)})("keyup",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.show=!1)})("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.reset())}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngModel",n.units)}}function ve(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",18)(2,"input",19),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.previousReading=i)})("keyup",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.show=!1)}),t.qZA()(),t.TgZ(3,"div",18)(4,"input",20),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.currentReading=i)})("keyup",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.show=!1)}),t.qZA()(),t.TgZ(5,"div",21)(6,"input",22),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.units=i)}),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngModel",n.previousReading),t.xp6(2),t.Q6J("ngModel",n.currentReading),t.xp6(2),t.Q6J("ngModel",n.units)}}function Ae(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",29),t._uU(9),t.ALo(10,"currency"),t.ALo(11,"currency"),t.qZA()()),2&e){const n=t.oxw(),o=n.$implicit,i=n.index,s=t.oxw(2);t.xp6(2),t.Oqu(o.range),t.xp6(2),t.Oqu(s.units<=500?s.getConsumedUnit(i,o.consumedUnit):s.getConsumedUnitGreater501(i,o.consumedUnit)),t.xp6(2),t.Oqu(t.xi3(7,4,o.rate,"INR")),t.xp6(3),t.Oqu(s.units<=500?t.xi3(10,7,s.getConsumedUnit(i,o.consumedUnit)*o.rate,"INR"):t.xi3(11,10,s.getConsumedUnitGreater501(i,o.consumedUnit)*o.rate,"INR"))}}function Ue(e,r){if(1&e&&(t.ynx(0),t.YNc(1,Ae,12,13,"tr",28),t.BQk()),2&e){const n=r.index,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.units<=500?0===n||1===n&&o.units>100||2===n&&o.units>200||3===n&&o.units>400:n>=0&&n<=3||4===n&&o.units>600||5===n&&o.units>800||6===n&&o.units>1e3)}}function Se(e,r){if(1&e&&(t.TgZ(0,"div",23)(1,"table",24)(2,"thead")(3,"tr")(4,"th",25),t._uU(5),t.qZA()(),t.TgZ(6,"tr")(7,"th",26),t._uU(8,"Units Range"),t.qZA(),t.TgZ(9,"th",26),t._uU(10,"Consumed Units"),t.qZA(),t.TgZ(11,"th",26),t._uU(12,"Rate"),t.qZA(),t.TgZ(13,"th",26),t._uU(14,"Amount"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,Ue,2,1,"ng-container",7),t.qZA(),t.TgZ(17,"tfoot")(18,"tr")(19,"td",27),t._uU(20),t.ALo(21,"currency"),t.qZA()()()()()),2&e){const n=t.oxw();t.xp6(5),t.hij("Total Units: ",n.units,""),t.xp6(11),t.Q6J("ngForOf",n.unitsRanges),t.xp6(4),t.Oqu(t.xi3(21,3,n.amount,"INR"))}}const Ze=[{path:"",component:(()=>{class e{constructor(n,o){this.fb=n,this.commonService=o,this.showMe=!1,this.hideMe=!1,this.currencyRates={},this.goldRates={},this.today="",this.location={},this.myip=""}ngOnInit(){this.setForm(),this.today=this.commonService.getToday(),this.getGold()}getMyIp(){const n=localStorage.getItem("myip");if(n)return this.myip=n,void this.getLocation(n);this.commonService.getMyIp().subscribe(o=>{o&&(this.myip=o.ip,localStorage.setItem("myip",o.ip),this.getLocation(o.ip))})}getLocation(n){const o=localStorage.getItem("location");o?this.location=JSON.parse(o):this.commonService.getLocation(n).subscribe(i=>{i&&!1===i.success||(this.location=i,localStorage.setItem("location",JSON.stringify(i)))})}getGold(){const n=localStorage.getItem(`goldrate-${this.today}`);n&&(this.goldRates=JSON.parse(n))}getCurrency(){const n=localStorage.getItem(`currencyrate-${this.today}`);n&&(this.currencyRates=JSON.parse(n))}setForm(){this.myForm=this.fb.group({todayRate:[4850,[l.kI.required]],weight:[0,[l.kI.required]],gramRate:[0,[l.kI.required]],wastagePercentage:[0,[l.kI.required]],wastageGram:[0,[l.kI.required]],wastageAmount:[0,[l.kI.required]],gst:[0],totalAmountExclGst:[0,[l.kI.required]],totalAmount:[0,[l.kI.required]],extraAmountPayable:[0,[l.kI.required]],inPoun:[0],inKalangi:[0],inPounAmount:[0],inKalangiAmount:[0]})}doCalc(){const n=this.myForm.controls;n.gramRate.setValue(n.todayRate.value*n.weight.value),n.wastageGram.setValue(n.weight.value*(.01*n.wastagePercentage.value)),n.wastageAmount.setValue(n.wastageGram.value*n.todayRate.value),n.totalAmountExclGst.setValue(n.todayRate.value*n.weight.value+n.wastageAmount.value),n.gst.setValue(.03*n.totalAmountExclGst.value),n.totalAmount.setValue(n.totalAmountExclGst.value+n.gst.value),n.extraAmountPayable.setValue(n.totalAmount.value-n.gramRate.value),n.inPoun.setValue(n.weight.value/8),n.inKalangi.setValue(n.weight.value/5),n.inPounAmount.setValue(8*n.todayRate.value),n.inKalangiAmount.setValue(5*n.todayRate.value),this.setDecimal()}setDecimal(){Object.keys(this.myForm.value).forEach(n=>{this.myForm.controls[n].setValue(this.getDecimal(this.myForm.controls[n].value,n))})}getDecimal(n,o){let i=n;return"todayRate"!==o&&"weight"!==o&&"wastagePercentage"!==o&&(i=n.toFixed(2)),i}print(){this.showMe=!0,this.hideMe=!0,setTimeout(()=>{console.log(this.printPdf);const n=this.printPdf.nativeElement.innerHTML;let o="";o=window.open("","_blank","top=0,left=0,height=100%,width=auto"),n&&(o.document.write(`${n}`),o.document.close(),this.showMe=!1,this.hideMe=!1)},1e3)}printImage(){this.hideMe=!0;const n=this;setTimeout(()=>{Ct(document.getElementById("print-image")).then(function(i){(new Image).src=i;const a=new Date,u="gold-loan-details-"+a.getDate()+"-"+a.getMonth()+"-"+a.getFullYear()+"-"+a.getHours()+"-"+a.getMinutes()+"-"+a.getSeconds();n.downloadURI(i,u)}).catch(function(i){console.error("oops, something went wrong!",i)})},500)}downloadURI(n,o){const i=document.createElement("a");i.download=o,i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),this.hideMe=!1}reset(){this.myForm.reset(),this.setForm()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.qu),t.Y36(ot))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-homepage"]],viewQuery:function(n,o){if(1&n&&(t.Gf(fe,5),t.Gf(_e,5)),2&n){let i;t.iGM(i=t.CRH())&&(o.printPdf=i.first),t.iGM(i=t.CRH())&&(o.formRoot=i.first)}},decls:65,vars:11,consts:[["id","print-image",1,"container"],[1,"justify-content-between"],[1,"row"],[1,"pl-0","pr-0","col-md-8","col-sm-12"],[1,"card","p-3"],[2,"float","right"],["class","city",4,"ngIf"],["type","button","class","btn btn-secondary btn-sm ",3,"click",4,"ngIf"],["type","button","class","ml-2 btn btn-primary btn-sm",3,"disabled","click",4,"ngIf"],[1,"form","mt-4",3,"formGroup"],["formRoot",""],[1,"col-4"],["for","typeahead-focus"],["type","number","min","3000","max","9999","placeholder","Rate today","formControlName","todayRate","required","",1,"form-control",3,"blur"],["type","number","min","0.1","max","2000","placeholder","Weight in gms","formControlName","weight","required","",1,"form-control",3,"blur"],[1,"input-group","mb-3"],["type","number","min","0.1","max","60","placeholder","Wastage in percentage ","formControlName","wastagePercentage","required","",1,"form-control",3,"blur"],[1,"input-group-append"],[1,"input-group-text"],[1,"w-100","text-center"],[1,"col-6","mb-3"],["id","disabledInput","type","text","placeholder","Wastage in gram","formControlName","wastageGram","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Wastage amount","formControlName","wastageAmount","required","",1,"form-control"],[1,"col-sm-12","col-md-4","mb-3"],["id","disabledInput","type","text","placeholder","Total excl. GST","formControlName","totalAmountExclGst","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Gst","formControlName","gst","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Total incl. GST","formControlName","totalAmount","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Poun/Savaran","formControlName","inPoun","required","",1,"form-control"],["id","disabledInput","type","text","placeholder","Kalanji","formControlName","inKalangi","required","",1,"form-control"],[1,"city"],[4,"ngIf"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],["type","button",1,"ml-2","btn","btn-primary","btn-sm",3,"disabled","click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6," G Calc "),t.TgZ(7,"div",5),t.YNc(8,be,3,2,"span",6),t.YNc(9,we,2,0,"button",7),t.YNc(10,xe,2,1,"button",8),t.qZA()(),t.TgZ(11,"form",9,10)(13,"div",2)(14,"div",11)(15,"label",12),t._uU(16,"Today Rate"),t.qZA(),t.TgZ(17,"input",13),t.NdJ("blur",function(){return o.doCalc()}),t.qZA()(),t.TgZ(18,"div",11)(19,"label",12),t._uU(20,"Weight (gm)"),t.qZA(),t.TgZ(21,"input",14),t.NdJ("blur",function(){return o.doCalc()}),t.qZA()(),t.TgZ(22,"div",11)(23,"label",12),t._uU(24,"Wastage"),t.qZA(),t.TgZ(25,"div",15)(26,"input",16),t.NdJ("blur",function(){return o.doCalc()}),t.qZA(),t.TgZ(27,"div",17)(28,"span",18),t._uU(29,"%"),t.qZA()()()()(),t._UZ(30,"hr"),t.TgZ(31,"legend",19),t._uU(32,"Details"),t.qZA(),t.TgZ(33,"div",2)(34,"div",20)(35,"label",12),t._uU(36,"Wastage Gms"),t.qZA(),t._UZ(37,"input",21),t.qZA(),t.TgZ(38,"div",20)(39,"label",12),t._uU(40,"Wastage Amount"),t.qZA(),t._UZ(41,"input",22),t.qZA(),t.TgZ(42,"div",23)(43,"label",12),t._uU(44,"Total Amount Without GST"),t.qZA(),t._UZ(45,"input",24),t.qZA(),t.TgZ(46,"div",23)(47,"label",12),t._uU(48,"Gst (3%)"),t.qZA(),t._UZ(49,"input",25),t.qZA(),t.TgZ(50,"div",23)(51,"label",12),t._uU(52,"Total Amount With GST"),t.qZA(),t._UZ(53,"input",26),t.qZA()(),t.TgZ(54,"div",2)(55,"legend"),t._uU(56,"Savaran/Kalanji"),t.qZA(),t.TgZ(57,"div",20)(58,"label",12),t._uU(59,"Poun/Savaran"),t.qZA(),t._UZ(60,"input",27),t.qZA(),t.TgZ(61,"div",20)(62,"label",12),t._uU(63,"Kalanji"),t.qZA(),t._UZ(64,"input",28),t.qZA()()()()()()()()),2&n&&(t.xp6(8),t.Q6J("ngIf",o.location.city),t.xp6(1),t.Q6J("ngIf",!o.hideMe),t.xp6(1),t.Q6J("ngIf",!o.hideMe),t.xp6(1),t.Q6J("formGroup",o.myForm),t.xp6(26),t.uIk("disabled",!0),t.xp6(4),t.uIk("disabled",!0),t.xp6(4),t.uIk("disabled",!0),t.xp6(4),t.uIk("disabled",!0),t.xp6(4),t.uIk("disabled",!0),t.xp6(7),t.uIk("disabled",!0),t.xp6(4),t.uIk("disabled",!0))},dependencies:[b.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.qQ,l.Fd,l.sg,l.u],styles:[".city[_ngcontent-%COMP%]{font-size:14px;margin-right:11px;color:brown}.card[_ngcontent-%COMP%]{background:aliceblue!important}"]}),e})()},{path:"history",component:St},{path:"password",component:Ut},{path:"eb",component:(()=>{class e{constructor(){this.previousReading="",this.currentReading="",this.units=0,this.toggle=["Units","Reading"],this.selectedToggle="Units",this.amount="",this.unitsRanges=[],this.show=!1,this.hideMe=!1}ngOnInit(){}getUnitRangesBelow501(){this.unitsRanges=[{range:"1 - 100",consumedUnit:100,rate:0,amount:0},{range:"101 - 200",consumedUnit:100,rate:2.25,amount:0},{range:"201 - 400",consumedUnit:200,rate:4.5,amount:0},{range:"401 - 500",consumedUnit:100,rate:6,amount:0}]}getUnitRangesGreater501(){this.unitsRanges=[{range:"1 - 100",consumedUnit:100,rate:0,amount:0},{range:"101 - 400",consumedUnit:300,rate:4.5,amount:0},{range:"401 - 500",consumedUnit:100,rate:6,amount:0},{range:"501 - 600",consumedUnit:100,rate:8,amount:0},{range:"601 - 800",consumedUnit:200,rate:9,amount:0},{range:"801 - 1000",consumedUnit:200,rate:10,amount:0},{range:"1001 Above",consumedUnit:0,rate:11,amount:0}]}calc(){if(this.amount=0,"Reading"===this.selectedToggle&&(this.units=this.currentReading-this.previousReading),this.units<0)return alert("Please check the readings"),!1;this.units>0&&this.units<=500?(this.getUnitRangesBelow501(),this.amount=this.getAmount()):this.units>500&&(this.getUnitRangesGreater501(),this.amount=this.getAmountGreater501()),this.show=!0}getAmount(){return this.units<=100?0:this.units>100&&this.units<=200?2.25*(this.units-100):this.units>200&&this.units<=400?225+4.5*(this.units-200):this.units>400&&this.units<=500?1125+6*(this.units-400):void 0}getAmountGreater501(){return this.units<=100?0:this.units>100&&this.units<=400?4.5*(this.units-100):this.units>400&&this.units<=500?1350+6*(this.units-400):this.units>500&&this.units<=600?1950+8*(this.units-500):this.units>600&&this.units<=800?2750+9*(this.units-600):this.units>800&&this.units<=1e3?4550+10*(this.units-800):this.units>1e3?6550+11*(this.units-1e3):void 0}getConsumedUnit(n,o){return 0===n?this.units<=100?this.units:o:1===n?this.units<=200?this.units-100:o:2===n?this.units<=400?this.units-200:o:3===n?this.units<=500?this.units-400:o:void 0}getConsumedUnitGreater501(n,o){return 0===n?this.units<=100?this.units:o:1===n?this.units<=400?this.units-100:o:2===n?this.units<=500?this.units-400:o:3===n?this.units<=600?this.units-500:o:4===n?this.units<=800?this.units-600:o:5===n?this.units<=1e3?this.units-800:o:6===n?this.units-1e3:void 0}reset(){this.units="",this.currentReading="",this.previousReading="",this.show=!1}printImage(){this.hideMe=!0;const n=this;setTimeout(()=>{Ct(document.getElementById("print-image")).then(function(i){(new Image).src=i;const a=new Date,u="eb-amount-for-"+n.units+" unit -"+a.getDate()+"-"+a.getMonth()+"-"+a.getFullYear()+"-"+a.getHours()+"-"+a.getMinutes()+"-"+a.getSeconds();n.downloadURI(i,u)}).catch(function(i){console.error("oops, something went wrong!",i)})},500)}downloadURI(n,o){const i=document.createElement("a");i.download=o,i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),this.hideMe=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-eb-calculator"]],decls:23,vars:9,consts:[[1,"container"],[1,"justify-content-between","mt-5"],[1,"row"],[1,"pl-0","pr-0","col-12"],[1,"card","p-3",2,"background","#fff"],[1,"mt-2"],[1,"toggles"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["others",""],["type","button",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","button",1,"ml-2","btn","btn-warning","btn-sm",3,"disabled","click"],["type","button",1,"ml-2","btn","btn-secondary","btn-sm",3,"click"],[1,"row","mt-4"],["class","pl-0 pr-0 col-6","style","background: #fff","id","print-image",4,"ngIf"],["type","radio","autocomplete","off",1,"btn-check",3,"name","id","checked"],[1,"btn","btn-outline-success",3,"for","click"],["type","number","placeholder","Enter Units",1,"form-input",3,"ngModel","ngModelChange","keyup","click"],[1,"col-auto"],["type","number","placeholder","Last month readng",1,"form-input",3,"ngModel","ngModelChange","keyup"],["type","number","placeholder","This month reading",1,"form-input",3,"ngModel","ngModelChange","keyup"],[1,"col-12","mt-2"],["type","number","placeholder","Units","readonly","",1,"form-input",3,"ngModel","ngModelChange"],["id","print-image",1,"pl-0","pr-0","col-6",2,"background","#fff"],[1,"table","table-bordered","table-striped","m-0"],["align","center","colspan","4",1,"text-center"],["align","center"],["align","right","colspan","4"],[4,"ngIf"],["align","right"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"div",5)(8,"div",6),t.YNc(9,Te,4,5,"ng-container",7),t.qZA(),t._UZ(10,"br"),t.YNc(11,Re,2,1,"ng-container",8),t.YNc(12,ve,7,3,"ng-template",null,9,t.W1O),t.qZA(),t.TgZ(14,"div",5)(15,"button",10),t.NdJ("click",function(){return o.calc()}),t._uU(16,"Check Amount"),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return o.printImage()}),t._uU(18,"Print"),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return o.reset()}),t._uU(20,"Reset"),t.qZA()()()()(),t.TgZ(21,"div",13),t.YNc(22,Se,22,6,"div",14),t.qZA()()()),2&n){const i=t.MAs(13);t.xp6(6),t.hij(" EB Reading | By ",o.selectedToggle," "),t.xp6(2),t.ekj("t-active","Units"===o.selectedToggle),t.xp6(1),t.Q6J("ngForOf",o.toggle),t.xp6(2),t.Q6J("ngIf","Units"===o.selectedToggle)("ngIfElse",i),t.xp6(4),t.Q6J("disabled","Units"===o.selectedToggle&&(!o.units||o.units<1)||"Reading"===o.selectedToggle&&(!o.previousReading||!o.currentReading)),t.xp6(2),t.Q6J("disabled",!o.units),t.xp6(5),t.Q6J("ngIf",o.show)}},dependencies:[b.sg,b.O5,l.Fj,l.wV,l.JJ,l.On,b.H9],styles:[".toggles[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{line-height:1}.toggles[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(2n){margin-left:-8px}"]}),e})()},{path:"**",redirectTo:"/"}];let Ee=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[it.Bz.forChild(Ze),it.Bz]}),e})(),Me=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.ez,Ee,l.u5,l.UX,C.IJ,rt.JF,C.IJ]}),e})()}}]);