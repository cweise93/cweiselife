import{A as Un,Aa as ue,Ba as ye,Bb as L,C as jn,Ca as qn,Cb as F,D as zn,Da as Qn,Ea as er,Fa as tr,Ga as nr,Gb as ct,H as $n,Ha as rr,Hb as we,I as Vn,Ia as ir,Ja as de,K as Hn,L as Gn,M as Wn,N as v,O as Oe,Oa as ve,Pa as or,Q as m,Qa as rt,Qb as Ee,R as G,Rb as ur,T as y,U as p,Ua as De,V as d,Va as it,W as Pt,Wa as ot,X as Kn,Y as Ne,Z as Yn,a as D,ab as re,b as ee,bb as W,ca as z,cb as le,d as Nn,da as E,db as ar,dc as dr,ea as ke,eb as at,f as kn,fc as lr,g as j,ga as Bt,h as Ln,ha as O,hb as st,ia as Ut,k as ce,ka as ne,kb as Vt,lb as Ht,ma as jt,mc as mr,na as zt,nc as Ce,o as g,oc as Gt,p as te,pc as fr,ra as Z,sa as $t,ta as Zn,ua as Le,va as Xn,w as tt,wa as ge,wb as sr,xa as Jn,xb as cr,y as Pn,ya as be,yb as _e,z as Bn,za as nt}from"./chunk-RYVGY6GB.js";var pr=null;function X(){return pr}function Wt(n){pr??=n}var Pe=class{},Ae=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:()=>d(hr),providedIn:"platform"})}return n})();var hr=(()=>{class n extends Ae{_location;_history;_doc=d(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return X().getBaseHref(this._doc)}onPopState(e){let r=X().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=X().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function yr(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function gr(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function ie(n){return n&&n[0]!=="?"?`?${n}`:n}var ut=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:()=>d(ki),providedIn:"root"})}return n})(),Ni=new y(""),ki=(()=>{class n extends ut{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??d(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return yr(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+ie(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let a=this.prepareExternalUrl(i+ie(o));this._platformLocation.pushState(e,r,a)}replaceState(e,r,i,o){let a=this.prepareExternalUrl(i+ie(o));this._platformLocation.replaceState(e,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||n)(p(Ae),p(Ni,8))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vr=(()=>{class n{_subject=new j;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=Bi(gr(br(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+ie(r))}normalize(e){return n.stripTrailingSlash(Pi(this._basePath,br(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ie(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ie(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=ie;static joinWithSlash=yr;static stripTrailingSlash=gr;static \u0275fac=function(r){return new(r||n)(p(ut))};static \u0275prov=m({token:n,factory:()=>Li(),providedIn:"root"})}return n})();function Li(){return new vr(p(ut))}function Pi(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function br(n){return n.replace(/\/index.html$/,"")}function Bi(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var S=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(S||{}),_=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(_||{}),N=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(N||{}),q={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function _r(n){return L(n)[F.LocaleId]}function wr(n,t,e){let r=L(n),i=[r[F.DayPeriodsFormat],r[F.DayPeriodsStandalone]],o=P(i,t);return P(o,e)}function Er(n,t,e){let r=L(n),i=[r[F.DaysFormat],r[F.DaysStandalone]],o=P(i,t);return P(o,e)}function Cr(n,t,e){let r=L(n),i=[r[F.MonthsFormat],r[F.MonthsStandalone]],o=P(i,t);return P(o,e)}function Ar(n,t){let r=L(n)[F.Eras];return P(r,t)}function Be(n,t){let e=L(n);return P(e[F.DateFormat],t)}function Ue(n,t){let e=L(n);return P(e[F.TimeFormat],t)}function je(n,t){let r=L(n)[F.DateTimeFormat];return P(r,t)}function ze(n,t){let e=L(n),r=e[F.NumberSymbols][t];if(typeof r>"u"){if(t===q.CurrencyDecimal)return e[F.NumberSymbols][q.Decimal];if(t===q.CurrencyGroup)return e[F.NumberSymbols][q.Group]}return r}function Ir(n){if(!n[F.ExtraData])throw new v(2303,!1)}function Tr(n){let t=L(n);return Ir(t),(t[F.ExtraData][2]||[]).map(r=>typeof r=="string"?Kt(r):[Kt(r[0]),Kt(r[1])])}function Fr(n,t,e){let r=L(n);Ir(r);let i=[r[F.ExtraData][0],r[F.ExtraData][1]],o=P(i,t)||[];return P(o,e)||[]}function P(n,t){for(let e=t;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new v(2304,!1)}function Kt(n){let[t,e]=n.split(":");return{hours:+t,minutes:+e}}var zi=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,dt={},$i=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Mr(n,t,e,r){let i=Ji(n);t=J(e,t)||t;let a=[],c;for(;t;)if(c=$i.exec(t),c){a=a.concat(c.slice(1));let f=a.pop();if(!f)break;t=f}else{a.push(t);break}let u=i.getTimezoneOffset();r&&(u=xr(r,u),i=Xi(i,r));let l="";return a.forEach(f=>{let b=Yi(f);l+=b?b(i,e,u):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function ht(n,t,e){let r=new Date(0);return r.setFullYear(n,t,e),r.setHours(0,0,0),r}function J(n,t){let e=_r(n);if(dt[e]??={},dt[e][t])return dt[e][t];let r="";switch(t){case"shortDate":r=Be(n,N.Short);break;case"mediumDate":r=Be(n,N.Medium);break;case"longDate":r=Be(n,N.Long);break;case"fullDate":r=Be(n,N.Full);break;case"shortTime":r=Ue(n,N.Short);break;case"mediumTime":r=Ue(n,N.Medium);break;case"longTime":r=Ue(n,N.Long);break;case"fullTime":r=Ue(n,N.Full);break;case"short":let i=J(n,"shortTime"),o=J(n,"shortDate");r=lt(je(n,N.Short),[i,o]);break;case"medium":let a=J(n,"mediumTime"),c=J(n,"mediumDate");r=lt(je(n,N.Medium),[a,c]);break;case"long":let u=J(n,"longTime"),l=J(n,"longDate");r=lt(je(n,N.Long),[u,l]);break;case"full":let f=J(n,"fullTime"),b=J(n,"fullDate");r=lt(je(n,N.Full),[f,b]);break}return r&&(dt[e][t]=r),r}function lt(n,t){return t&&(n=n.replace(/\{([^}]+)}/g,function(e,r){return t!=null&&r in t?t[r]:e})),n}function $(n,t,e="-",r,i){let o="";(n<0||i&&n<=0)&&(i?n=-n+1:(n=-n,o=e));let a=String(n);for(;a.length<t;)a="0"+a;return r&&(a=a.slice(a.length-t)),o+a}function Vi(n,t){return $(n,3).substring(0,t)}function I(n,t,e=0,r=!1,i=!1){return function(o,a){let c=Hi(n,o);if((e>0||c>-e)&&(c+=e),n===3)c===0&&e===-12&&(c=12);else if(n===6)return Vi(c,t);let u=ze(a,q.MinusSign);return $(c,t,u,r,i)}}function Hi(n,t){switch(n){case 0:return t.getFullYear();case 1:return t.getMonth();case 2:return t.getDate();case 3:return t.getHours();case 4:return t.getMinutes();case 5:return t.getSeconds();case 6:return t.getMilliseconds();case 7:return t.getDay();default:throw new v(2301,!1)}}function C(n,t,e=S.Format,r=!1){return function(i,o){return Gi(i,o,n,t,e,r)}}function Gi(n,t,e,r,i,o){switch(e){case 2:return Cr(t,i,r)[n.getMonth()];case 1:return Er(t,i,r)[n.getDay()];case 0:let a=n.getHours(),c=n.getMinutes();if(o){let l=Tr(t),f=Fr(t,i,r),b=l.findIndex(T=>{if(Array.isArray(T)){let[U,k]=T,x=a>=U.hours&&c>=U.minutes,h=a<k.hours||a===k.hours&&c<k.minutes;if(U.hours<k.hours){if(x&&h)return!0}else if(x||h)return!0}else if(T.hours===a&&T.minutes===c)return!0;return!1});if(b!==-1)return f[b]}return wr(t,i,r)[a<12?0:1];case 3:return Ar(t,r)[n.getFullYear()<=0?0:1];default:let u=e;throw new v(2302,!1)}}function mt(n){return function(t,e,r){let i=-1*r,o=ze(e,q.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(n){case 0:return(i>=0?"+":"")+$(a,2,o)+$(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+$(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+$(a,2,o)+":"+$(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+$(a,2,o)+":"+$(Math.abs(i%60),2,o);default:throw new v(2310,!1)}}}var Wi=0,pt=4;function Ki(n){let t=ht(n,Wi,1).getDay();return ht(n,0,1+(t<=pt?pt:pt+7)-t)}function Sr(n){let t=n.getDay(),e=t===0?-3:pt-t;return ht(n.getFullYear(),n.getMonth(),n.getDate()+e)}function Yt(n,t=!1){return function(e,r){let i;if(t){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=Sr(e),a=Ki(o.getFullYear()),c=o.getTime()-a.getTime();i=1+Math.round(c/6048e5)}return $(i,n,ze(r,q.MinusSign))}}function ft(n,t=!1){return function(e,r){let o=Sr(e).getFullYear();return $(o,n,ze(r,q.MinusSign),t)}}var Zt={};function Yi(n){if(Zt[n])return Zt[n];let t;switch(n){case"G":case"GG":case"GGG":t=C(3,_.Abbreviated);break;case"GGGG":t=C(3,_.Wide);break;case"GGGGG":t=C(3,_.Narrow);break;case"y":t=I(0,1,0,!1,!0);break;case"yy":t=I(0,2,0,!0,!0);break;case"yyy":t=I(0,3,0,!1,!0);break;case"yyyy":t=I(0,4,0,!1,!0);break;case"Y":t=ft(1);break;case"YY":t=ft(2,!0);break;case"YYY":t=ft(3);break;case"YYYY":t=ft(4);break;case"M":case"L":t=I(1,1,1);break;case"MM":case"LL":t=I(1,2,1);break;case"MMM":t=C(2,_.Abbreviated);break;case"MMMM":t=C(2,_.Wide);break;case"MMMMM":t=C(2,_.Narrow);break;case"LLL":t=C(2,_.Abbreviated,S.Standalone);break;case"LLLL":t=C(2,_.Wide,S.Standalone);break;case"LLLLL":t=C(2,_.Narrow,S.Standalone);break;case"w":t=Yt(1);break;case"ww":t=Yt(2);break;case"W":t=Yt(1,!0);break;case"d":t=I(2,1);break;case"dd":t=I(2,2);break;case"c":case"cc":t=I(7,1);break;case"ccc":t=C(1,_.Abbreviated,S.Standalone);break;case"cccc":t=C(1,_.Wide,S.Standalone);break;case"ccccc":t=C(1,_.Narrow,S.Standalone);break;case"cccccc":t=C(1,_.Short,S.Standalone);break;case"E":case"EE":case"EEE":t=C(1,_.Abbreviated);break;case"EEEE":t=C(1,_.Wide);break;case"EEEEE":t=C(1,_.Narrow);break;case"EEEEEE":t=C(1,_.Short);break;case"a":case"aa":case"aaa":t=C(0,_.Abbreviated);break;case"aaaa":t=C(0,_.Wide);break;case"aaaaa":t=C(0,_.Narrow);break;case"b":case"bb":case"bbb":t=C(0,_.Abbreviated,S.Standalone,!0);break;case"bbbb":t=C(0,_.Wide,S.Standalone,!0);break;case"bbbbb":t=C(0,_.Narrow,S.Standalone,!0);break;case"B":case"BB":case"BBB":t=C(0,_.Abbreviated,S.Format,!0);break;case"BBBB":t=C(0,_.Wide,S.Format,!0);break;case"BBBBB":t=C(0,_.Narrow,S.Format,!0);break;case"h":t=I(3,1,-12);break;case"hh":t=I(3,2,-12);break;case"H":t=I(3,1);break;case"HH":t=I(3,2);break;case"m":t=I(4,1);break;case"mm":t=I(4,2);break;case"s":t=I(5,1);break;case"ss":t=I(5,2);break;case"S":t=I(6,1);break;case"SS":t=I(6,2);break;case"SSS":t=I(6,3);break;case"Z":case"ZZ":case"ZZZ":t=mt(0);break;case"ZZZZZ":t=mt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=mt(1);break;case"OOOO":case"ZZZZ":case"zzzz":t=mt(2);break;default:return null}return Zt[n]=t,t}function xr(n,t){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?t:e}function Zi(n,t){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+t),n}function Xi(n,t,e){let i=n.getTimezoneOffset(),o=xr(t,i);return Zi(n,-1*(o-i))}function Ji(n){if(Dr(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[i,o=1,a=1]=n.split("-").map(c=>+c);return ht(i,o-1,a)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let r;if(r=n.match(zi))return qi(r)}let t=new Date(n);if(!Dr(t))throw new v(2311,!1);return t}function qi(n){let t=new Date(0),e=0,r=0,i=n[8]?t.setUTCFullYear:t.setFullYear,o=n[8]?t.setUTCHours:t.setHours;n[9]&&(e=Number(n[9]+n[10]),r=Number(n[9]+n[11])),i.call(t,Number(n[1]),Number(n[2])-1,Number(n[3]));let a=Number(n[4]||0)-e,c=Number(n[5]||0)-r,u=Number(n[6]||0),l=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return o.call(t,a,c,u,l),t}function Dr(n){return n instanceof Date&&!isNaN(n.valueOf())}function Qi(n,t){return new v(2100,!1)}var eo="mediumDate",Rr=new y(""),Or=new y(""),to=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,r,i){this.locale=e,this.defaultTimezone=r,this.defaultOptions=i}transform(e,r,i,o){if(e==null||e===""||e!==e)return null;try{let a=r??this.defaultOptions?.dateFormat??eo,c=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Mr(e,a,o||this.locale,c)}catch(a){throw Qi(n,a.message)}}static \u0275fac=function(r){return new(r||n)(ot(dr,16),ot(Rr,24),ot(Or,24))};static \u0275pipe=ar({name:"date",type:n,pure:!0})}return n})();function $e(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}var me=class{};var Jt="browser";function Nr(n){return n===Jt}var vc=(()=>{class n{static \u0275prov=m({token:n,providedIn:"root",factory:()=>new Xt(d(E),window)})}return n})(),Xt=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo(ee(D({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let r=ao(this.document,t);r&&(this.scrollToElement(r,e),r.focus({preventScroll:!0}))}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(Oe(2400,!1))}}scrollToElement(t,e){let r=t.getBoundingClientRect(),i=r.left+this.window.pageXOffset,o=r.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ee(D({},e),{left:i-a[0],top:o-a[1]}))}};function ao(n,t){let e=n.getElementById(t)||n.getElementsByName(t)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let r=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(t)||o.querySelector(`[name="${t}"]`);if(a)return a}i=r.nextNode()}}return null}var Ve=class{_doc;constructor(t){this._doc=t}manager},gt=(()=>{class n extends Ve{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||n)(p(E))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),vt=new y(""),tn=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof gt));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof gt);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new v(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||n)(p(vt),p(O))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),qt="ng-app-id";function kr(n){for(let t of n)t.remove()}function Lr(n,t){let e=t.createElement("style");return e.textContent=n,e}function so(n,t,e,r){let i=n.head?.querySelectorAll(`style[${qt}="${t}"],link[${qt}="${t}"]`);if(i)for(let o of i)o.removeAttribute(qt),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function en(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var nn=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,so(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,Lr);r?.forEach(i=>this.addUsage(i,this.external,en))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(kr(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])kr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,Lr(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,en(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||n)(p(E),p(Le),p(be,8),p(ge))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Qt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rn=/%COMP%/g;var Br="%COMP%",co=`_nghost-${Br}`,uo=`_ngcontent-${Br}`,lo=!0,mo=new y("",{factory:()=>lo});function fo(n){return uo.replace(rn,n)}function po(n){return co.replace(rn,n)}function Ur(n,t){return t.map(e=>e.replace(rn,n))}var on=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,a,c,u=null,l=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=u,this.tracingService=l,this.defaultRenderer=new He(e,a,c,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof yt?i.applyToHost(e):i instanceof Ge&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,c=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,b=this.tracingService;switch(r.encapsulation){case nt.Emulated:o=new yt(u,l,r,this.appId,f,a,c,b);break;case nt.ShadowDom:return new bt(u,e,r,a,c,this.nonce,b,l);case nt.ExperimentalIsolatedShadowDom:return new bt(u,e,r,a,c,this.nonce,b);default:o=new Ge(u,l,r,f,a,c,b);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||n)(p(tn),p(nn),p(Le),p(mo),p(E),p(O),p(be),p(rt,8))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),He=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,r,i){this.eventManager=t,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Qt[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Pr(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(Pr(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){e.remove()}selectRootElement(t,e){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new v(-5104,!1);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,i){if(i){e=i+":"+e;let o=Qt[i];o?t.setAttributeNS(o,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){let i=Qt[r];i?t.removeAttributeNS(i,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,i){i&(ve.DashCase|ve.Important)?t.style.setProperty(e,r,i&ve.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&ve.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t!=null&&(t[e]=r)}setValue(t,e){t.nodeValue=e}listen(t,e,r,i){if(typeof t=="string"&&(t=X().getGlobalEventTarget(this.doc,t),!t))throw new v(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,i)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Pr(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var bt=class extends He{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,r,i,o,a,c,u){super(t,i,o,c),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=r.styles;l=Ur(r.id,l);for(let b of l){let T=document.createElement("style");a&&T.setAttribute("nonce",a),T.textContent=b,this.shadowRoot.appendChild(T)}let f=r.getExternalStyles?.();if(f)for(let b of f){let T=en(b,i);a&&T.setAttribute("nonce",a),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ge=class extends He{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,r,i,o,a,c,u){super(t,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=r.styles;this.styles=u?Ur(u,l):l,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&or.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yt=class extends Ge{contentAttr;hostAttr;constructor(t,e,r,i,o,a,c,u){let l=i+"-"+r.id;super(t,e,r,o,a,c,u,l),this.contentAttr=fo(l),this.hostAttr=po(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}};var Dt=class n extends Pe{supportsDOMEvents=!0;static makeCurrent(){Wt(new n)}onAndCancel(t,e,r,i){return t.addEventListener(e,r,i),()=>{t.removeEventListener(e,r,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=go();return e==null?null:bo(e)}resetBaseElement(){We=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return $e(document.cookie,t)}},We=null;function go(){return We=We||document.head.querySelector("base"),We?We.getAttribute("href"):null}function bo(n){return new URL(n,document.baseURI).pathname}var yo=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),jr=["alt","control","meta","shift"],vo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Do={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},zr=(()=>{class n extends Ve{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,r,i,o){let a=n.parseEventName(r),c=n.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>X().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),jr.forEach(l=>{let f=r.indexOf(l);f>-1&&(r.splice(f,1),a+=l+".")}),a+=o,r.length!=0||o.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(e,r){let i=vo[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),jr.forEach(a=>{if(a!==i){let c=Do[a];c(e)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||n)(p(E))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();async function _o(n,t,e){let r=D({rootComponent:n},wo(t,e));return mr(r)}function wo(n,t){return{platformRef:t?.platformRef,appProviders:[...To,...n?.providers??[]],platformProviders:Io}}function Eo(){Dt.makeCurrent()}function Co(){return new Ut}function Ao(){return Zn(document),document}var Io=[{provide:ge,useValue:Jt},{provide:Xn,useValue:Eo,multi:!0},{provide:E,useFactory:Ao}];var To=[{provide:Kn,useValue:"root"},{provide:Ut,useFactory:Co},{provide:vt,useClass:gt,multi:!0},{provide:vt,useClass:zr,multi:!0},on,nn,tn,{provide:De,useExisting:on},{provide:me,useClass:yo},[]];var oe=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(t,e){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(t,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var wt=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Et=class{encodeKey(t){return $r(t)}encodeValue(t){return $r(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Fo(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,c]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],u=e.get(a)||[];u.push(c),e.set(a,u)}),e}var Mo=/%(\d[a-f0-9])/gi,So={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $r(n){return encodeURIComponent(n).replace(Mo,(t,e)=>So[e]??t)}function _t(n){return`${n}`}var Q=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Et,t.fromString){if(t.fromObject)throw new v(2805,!1);this.map=Fo(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let r=t.fromObject[e],i=Array.isArray(r)?r.map(_t):[_t(r)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(_t(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(_t(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function xo(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Vr(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Hr(n){return typeof Blob<"u"&&n instanceof Blob}function Gr(n){return typeof FormData<"u"&&n instanceof FormData}function Ro(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Wr="Content-Type",Kr="Accept",Yr="text/plain",Zr="application/json",Oo=`${Zr}, ${Yr}, */*`,Ie=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,r,i){this.url=e,this.method=t.toUpperCase();let o;if(xo(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new v(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new oe,this.context??=new wt,!this.params)this.params=new Q,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),u=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Vr(this.body)||Hr(this.body)||Gr(this.body)||Ro(this.body)?this.body:this.body instanceof Q?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Gr(this.body)?null:Hr(this.body)?this.body.type||null:Vr(this.body)?null:typeof this.body=="string"?Yr:this.body instanceof Q?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Zr:null}clone(t={}){let e=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=t.keepalive??this.keepalive,a=t.priority||this.priority,c=t.cache||this.cache,u=t.mode||this.mode,l=t.redirect||this.redirect,f=t.credentials||this.credentials,b=t.referrer||this.referrer,T=t.integrity||this.integrity,U=t.referrerPolicy||this.referrerPolicy,k=t.transferCache??this.transferCache,x=t.timeout??this.timeout,h=t.body!==void 0?t.body:this.body,w=t.withCredentials??this.withCredentials,R=t.reportProgress??this.reportProgress,Y=t.headers||this.headers,M=t.params||this.params,xe=t.context??this.context;return t.setHeaders!==void 0&&(Y=Object.keys(t.setHeaders).reduce((Re,se)=>Re.set(se,t.setHeaders[se]),Y)),t.setParams&&(M=Object.keys(t.setParams).reduce((Re,se)=>Re.set(se,t.setParams[se]),M)),new n(e,r,h,{params:M,headers:Y,context:xe,reportProgress:R,responseType:i,withCredentials:w,transferCache:k,keepalive:o,cache:c,priority:a,timeout:x,mode:u,redirect:l,credentials:f,referrer:b,integrity:T,referrerPolicy:U})}},fe=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(fe||{}),Fe=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,r="OK"){this.headers=t.headers||new oe,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Ct=class n extends Fe{constructor(t={}){super(t)}type=fe.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Ke=class n extends Fe{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=fe.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},Te=class extends Fe{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},No=200,ko=204;var Lo=new y("");var Po=/^\)\]\}',?\n/;var sn=(()=>{class n{xhrFactory;tracingService=d(rt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new v(-2800,!1);let r=this.xhrFactory;return ce(null).pipe(Hn(()=>new kn(o=>{let a=r.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((h,w)=>a.setRequestHeader(h,w.join(","))),e.headers.has(Kr)||a.setRequestHeader(Kr,Oo),!e.headers.has(Wr)){let h=e.detectContentTypeHeader();h!==null&&a.setRequestHeader(Wr,h)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let h=e.responseType.toLowerCase();a.responseType=h!=="json"?h:"text"}let c=e.serializeBody(),u=null,l=()=>{if(u!==null)return u;let h=a.statusText||"OK",w=new oe(a.getAllResponseHeaders()),R=a.responseURL||e.url;return u=new Ct({headers:w,status:a.status,statusText:h,url:R}),u},f=this.maybePropagateTrace(()=>{let{headers:h,status:w,statusText:R,url:Y}=l(),M=null;w!==ko&&(M=typeof a.response>"u"?a.responseText:a.response),w===0&&(w=M?No:0);let xe=w>=200&&w<300;if(e.responseType==="json"&&typeof M=="string"){let Re=M;M=M.replace(Po,"");try{M=M!==""?JSON.parse(M):null}catch(se){M=Re,xe&&(xe=!1,M={error:se,text:M})}}xe?(o.next(new Ke({body:M,headers:h,status:w,statusText:R,url:Y||void 0})),o.complete()):o.error(new Te({error:M,headers:h,status:w,statusText:R,url:Y||void 0}))}),b=this.maybePropagateTrace(h=>{let{url:w}=l(),R=new Te({error:h,status:a.status||0,statusText:a.statusText||"Unknown Error",url:w||void 0});o.error(R)}),T=b;e.timeout&&(T=this.maybePropagateTrace(h=>{let{url:w}=l(),R=new Te({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:w||void 0});o.error(R)}));let U=!1,k=this.maybePropagateTrace(h=>{U||(o.next(l()),U=!0);let w={type:fe.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(w.total=h.total),e.responseType==="text"&&a.responseText&&(w.partialText=a.responseText),o.next(w)}),x=this.maybePropagateTrace(h=>{let w={type:fe.UploadProgress,loaded:h.loaded};h.lengthComputable&&(w.total=h.total),o.next(w)});return a.addEventListener("load",f),a.addEventListener("error",b),a.addEventListener("timeout",T),a.addEventListener("abort",b),e.reportProgress&&(a.addEventListener("progress",k),c!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(c),o.next({type:fe.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",f),a.removeEventListener("timeout",T),e.reportProgress&&(a.removeEventListener("progress",k),c!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||n)(p(me))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bo(n,t){return t(n)}function Uo(n,t,e){return(r,i)=>Yn(e,()=>t(r,o=>n(o,i)))}var Xr=new y("",{factory:()=>[]}),Jr=new y(""),qr=new y("",{factory:()=>!0});var cn=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=p(sn),i},providedIn:"root"})}return n})();var At=(()=>{class n{backend;injector;chain=null;pendingTasks=d(jt);contributeToStability=d(qr);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Xr),...this.injector.get(Jr,[])]));this.chain=r.reduceRight((i,o)=>Uo(i,o,this.injector),Bo)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(zn(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||n)(p(cn),p(Ne))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),un=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=p(At),i},providedIn:"root"})}return n})();function an(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var It=(()=>{class n{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof Ie)o=e;else{let u;i.headers instanceof oe?u=i.headers:u=new oe(i.headers);let l;i.params&&(i.params instanceof Q?l=i.params:l=new Q({fromObject:i.params})),o=new Ie(e,r,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=ce(o).pipe(Bn(u=>this.handler.handle(u)));if(e instanceof Ie||i.observe==="events")return a;let c=a.pipe(tt(u=>u instanceof Ke));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(g(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new v(2806,!1);return u.body}));case"blob":return c.pipe(g(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new v(2807,!1);return u.body}));case"text":return c.pipe(g(u=>{if(u.body!==null&&typeof u.body!="string")throw new v(2808,!1);return u.body}));default:return c.pipe(g(u=>u.body))}case"response":return c;default:throw new v(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new Q().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,an(i,r))}post(e,r,i={}){return this.request("POST",e,an(i,r))}put(e,r,i={}){return this.request("PUT",e,an(i,r))}static \u0275fac=function(r){return new(r||n)(p(un))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jo=new y("",{factory:()=>!0}),zo="XSRF-TOKEN",$o=new y("",{factory:()=>zo}),Vo="X-XSRF-TOKEN",Ho=new y("",{factory:()=>Vo}),Go=(()=>{class n{cookieName=d($o);doc=d(E);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=$e(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qr=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=p(Go),i},providedIn:"root"})}return n})();function Wo(n,t){if(!d(jo)||n.method==="GET"||n.method==="HEAD")return t(n);try{let i=d(Ae).href,{origin:o}=new URL(i),{origin:a}=new URL(n.url,o);if(o!==a)return t(n)}catch{return t(n)}let e=d(Qr).getToken(),r=d(Ho);return e!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,e)})),t(n)}function Ko(...n){let t=[It,At,{provide:un,useExisting:At},{provide:cn,useFactory:()=>d(Lo,{optional:!0})??d(sn)},{provide:Xr,useValue:Wo,multi:!0}];for(let e of n)t.push(...e.\u0275providers);return Pt(t)}var Xu=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||n)(p(E))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yo=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=p(Zo),i},providedIn:"root"})}return n})(),Zo=(()=>{class n extends Yo{_doc;constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case de.NONE:return r;case de.HTML:return ye(r,"HTML")?ue(r):ir(this._doc,String(r)).toString();case de.STYLE:return ye(r,"Style")?ue(r):r;case de.SCRIPT:if(ye(r,"Script"))return ue(r);throw new v(5200,!1);case de.URL:return ye(r,"URL")?ue(r):rr(String(r));case de.RESOURCE_URL:if(ye(r,"ResourceURL"))return ue(r);throw new v(5201,!1);default:throw new v(5202,!1)}}bypassSecurityTrustHtml(e){return qn(e)}bypassSecurityTrustStyle(e){return Qn(e)}bypassSecurityTrustScript(e){return er(e)}bypassSecurityTrustUrl(e){return tr(e)}bypassSecurityTrustResourceUrl(e){return nr(e)}static \u0275fac=function(r){return new(r||n)(p(E))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ad(n,t){let r=!t?.manualCleanup?t?.injector?.get(ke)??d(ke):null,i=Xo(t?.equal),o;t?.requireSync?o=ne({kind:0},{equal:i}):o=ne({kind:1,value:t?.initialValue},{equal:i});let a,c=n.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{o.set({kind:2,error:u}),a?.()},complete:()=>{a?.()}});if(t?.requireSync&&o().kind===0)throw new v(601,!1);return a=r?.onDestroy(c.unsubscribe.bind(c)),lr(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new v(601,!1)}},{equal:t?.equal})}function Xo(n=Object.is){return(t,e)=>t.kind===1&&e.kind===1&&n(t.value,e.value)}function Ye(n){return n.buttons===0||n.detail===0}function Ze(n){let t=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var dn;function ei(){if(dn==null){let n=typeof document<"u"?document.head:null;dn=!!(n&&(n.createShadowRoot||n.attachShadow))}return dn}function ln(n){if(ei()){let t=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function V(n){return n.composedPath?n.composedPath()[0]:n.target}var mn;try{mn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{mn=!1}var K=(()=>{class n{_platformId=d(ge);isBrowser=this._platformId?Nr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||mn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xe;function ti(){if(Xe==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Xe=!0}))}finally{Xe=Xe||!1}return Xe}function Me(n){return ti()?n:!!n.capture}function ae(n){return n instanceof Z?n.nativeElement:n}var ni=new y("cdk-input-modality-detector-options"),ri={ignoreKeys:[18,17,224,91,16]},ii=650,fn={passive:!0,capture:!0},oi=(()=>{class n{_platform=d(K);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ln(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=V(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ii||(this._modality.next(Ye(e)?"keyboard":"mouse"),this._mostRecentTarget=V(e))};_onTouchstart=e=>{if(Ze(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=V(e)};constructor(){let e=d(O),r=d(E),i=d(ni,{optional:!0});if(this._options=D(D({},ri),i),this.modalityDetected=this._modality.pipe(Vn(1)),this.modalityChanged=this.modalityDetected.pipe(jn()),this._platform.isBrowser){let o=d(De).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,fn),o.listen(r,"mousedown",this._onMousedown,fn),o.listen(r,"touchstart",this._onTouchstart,fn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Je=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Je||{}),ai=new y("cdk-focus-monitor-default-options"),Tt=Me({passive:!0,capture:!0}),pn=(()=>{class n{_ngZone=d(O);_platform=d(K);_inputModalityDetector=d(oi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(E);_stopInputModalityDetector=new j;constructor(){let e=d(ai,{optional:!0});this._detectionMode=e?.detectionMode||Je.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=V(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=ae(e);if(!this._platform.isBrowser||i.nodeType!==1)return ce();let o=ln(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let c={checkChildren:r,subject:new j,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let r=ae(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=ae(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,u])=>this._originChanged(c,r,u)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Je.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===Je.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?ii:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=V(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Tt),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Tt)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Gn(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Tt),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Tt),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ft=new WeakMap,qe=(()=>{class n{_appRef;_injector=d(z);_environmentInjector=d(Ne);load(e){let r=this._appRef=this._appRef||this._injector.get(Vt),i=Ft.get(r);i||(i={loaders:new Set,refs:[]},Ft.set(r,i),r.onDestroy(()=>{Ft.get(r)?.refs.forEach(o=>o.destroy()),Ft.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(fr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mt;function Jo(){if(Mt===void 0&&(Mt=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Mt=n.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Mt}function Ud(n){return Jo()?.createHTML(n)||n}function $d(n){return Array.isArray(n)?n:[n]}var si=new Set,pe,hn=(()=>{class n{_platform=d(K);_nonce=d(be,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Qo}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&qo(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qo(n,t){if(!si.has(n))try{pe||(pe=document.createElement("style"),t&&pe.setAttribute("nonce",t),pe.setAttribute("type","text/css"),document.head.appendChild(pe)),pe.sheet&&(pe.sheet.insertRule(`@media ${n} {body{ }}`,0),si.add(n))}catch(e){console.error(e)}}function Qo(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ea=200,St=class{_letterKeyStream=new j;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new j;selectedItem=this._selectedItem;constructor(t,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:ea;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(Wn(e=>this._pressedLetters.push(e)),Un(t),tt(()=>this._pressedLetters.length>0),g(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ci(n,...t){return t.length?t.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var xt=class{_items;_activeItemIndex=ne(-1);_activeItem=ne(null);_wrap=!1;_typeaheadSubscription=Nn.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof $t?this._itemChangesSubscription=t.changes.subscribe(r=>this._itemsChanged(r.toArray())):st(t)&&(this._effectRef=zt(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new j;change=new j;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new St(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||ci(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),r=typeof t=="number"?t:e.indexOf(t),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+t*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let r=this._getItemsArray();if(r[t]){for(;this._skipPredicateFn(r[t]);)if(t+=e,!r[t])return;this.setActiveItem(t)}}_getItemsArray(){return st(this._items)?this._items():this._items instanceof $t?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let r=t.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var gn=class extends xt{_origin="program";setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};var bn={},yn=class n{_appId=d(Le);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),bn.hasOwnProperty(t)||(bn[t]=0),`${t}${e?n._infix+"-":""}${bn[t]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})};var he;function Tl(){if(he==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return he=!1,he;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)he=!0;else{let n=Element.prototype.scrollTo;n?he=!/\{\s*\[native code\]\s*\}/.test(n.toString()):he=!1}}return he}function Ml(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ta=new y("MATERIAL_ANIMATIONS"),ui=null;function na(){return d(ta,{optional:!0})?.animationsDisabled||d(Jn,{optional:!0})==="NoopAnimations"?"di-disabled":(ui??=d(hn).matchMedia("(prefers-reduced-motion)").matches,ui?"reduced-motion":"enabled")}function Se(){return na()!=="enabled"}function $l(n){return n==null?"":typeof n=="string"?n:`${n}px`}var B=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(B||{}),vn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=B.HIDDEN;constructor(t,e,r,i=!1){this._renderer=t,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},di=Me({passive:!0,capture:!0}),Dn=class{_events=new Map;addHandler(t,e,r,i){let o=this._events.get(e);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,di)})}removeHandler(t,e,r){let i=this._events.get(t);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,di)))}_delegateEventHandler=t=>{let e=V(t);e&&this._events.get(t.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(t))})}},Qe={enterDuration:225,exitDuration:150},ra=800,li=Me({passive:!0,capture:!0}),mi=["mousedown","touchstart"],fi=["mouseup","mouseleave","touchend","touchcancel"],ia=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=re({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),et=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Dn;constructor(t,e,r,i,o){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=ae(r)),o&&o.get(qe).load(ia)}fadeInRipple(t,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},Qe),r.animation);r.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let a=r.radius||oa(t,e,i),c=t-i.left,u=e-i.top,l=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${c-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,r.color!=null&&(f.style.backgroundColor=r.color),f.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(f);let b=window.getComputedStyle(f),T=b.transitionProperty,U=b.transitionDuration,k=T==="none"||U==="0s"||U==="0s, 0s"||i.width===0&&i.height===0,x=new vn(this,f,r,k);f.style.transform="scale3d(1, 1, 1)",x.state=B.FADING_IN,r.persistent||(this._mostRecentTransientRipple=x);let h=null;return!k&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{h&&(h.fallbackTimer=null),clearTimeout(Y),this._finishRippleTransition(x)},R=()=>this._destroyRipple(x),Y=setTimeout(R,l+100);f.addEventListener("transitionend",w),f.addEventListener("transitioncancel",R),h={onTransitionEnd:w,onTransitionCancel:R,fallbackTimer:Y}}),this._activeRipples.set(x,h),(k||!l)&&this._finishRippleTransition(x),x}fadeOutRipple(t){if(t.state===B.FADING_OUT||t.state===B.HIDDEN)return;let e=t.element,r=D(D({},Qe),t.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",t.state=B.FADING_OUT,(t._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=ae(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,mi.forEach(r=>{n._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{fi.forEach(e=>{this._triggerElement.addEventListener(e,this,li)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===B.FADING_IN?this._startFadeOutTransition(t):t.state===B.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:r}=t.config;t.state=B.VISIBLE,!r&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=B.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Ye(t),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ra;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Ze(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===B.VISIBLE||t.config.terminateOnPointerUp&&t.state===B.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(mi.forEach(e=>n._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(fi.forEach(e=>t.removeEventListener(e,this,li)),this._pointerUpEventsRegistered=!1))}};function oa(n,t,e){let r=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(r*r+i*i)}var _n=new y("mat-ripple-global-options"),om=(()=>{class n{_elementRef=d(Z);_animationsDisabled=Se();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(O),r=d(K),i=d(_n,{optional:!0}),o=d(z);this._globalOptions=i||{},this._rippleRenderer=new et(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,D(D({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=le({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&Ee("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var aa={capture:!0},sa=["focus","mousedown","mouseenter","touchstart"],wn="mat-ripple-loader-uninitialized",En="mat-ripple-loader-class-name",pi="mat-ripple-loader-centered",Rt="mat-ripple-loader-disabled",hi=(()=>{class n{_document=d(E);_animationsDisabled=Se();_globalRippleOptions=d(_n,{optional:!0});_platform=d(K);_ngZone=d(O);_injector=d(z);_eventCleanups;_hosts=new Map;constructor(){let e=d(De).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>sa.map(r=>e.listen(this._document,r,this._onInteraction,aa)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(wn,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(En))&&e.setAttribute(En,r.className||""),r.centered&&e.setAttribute(pi,""),r.disabled&&e.setAttribute(Rt,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(Rt,""):e.removeAttribute(Rt)}_onInteraction=e=>{let r=V(e);if(r instanceof HTMLElement){let i=r.closest(`[${wn}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(En)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Qe.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Qe.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Rt),rippleConfig:{centered:e.hasAttribute(pi),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},u=new et(c,this._ngZone,r,this._platform,this._injector),l=!c.rippleDisabled;l&&u.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:u,hasSetUpEvents:l}),e.removeAttribute(wn)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gi=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=re({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ca=["mat-icon-button",""],ua=["*"],da=new y("MAT_BUTTON_CONFIG");function bi(n){return n==null?void 0:Gt(n)}var Cn=(()=>{class n{_elementRef=d(Z);_ngZone=d(O);_animationsDisabled=Se();_config=d(da,{optional:!0});_focusMonitor=d(pn);_cleanupClick;_renderer=d(it);_rippleLoader=d(hi);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(qe).load(gi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=le({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(Ht("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),ur(i.color?"mat-"+i.color:""),Ee("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ce],disabled:[2,"disabled","disabled",Ce],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ce],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ce],tabIndex:[2,"tabIndex","tabIndex",bi],_tabindex:[2,"tabindex","_tabindex",bi]}})}return n})(),la=(()=>{class n extends Cn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=re({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[at],attrs:ca,ngContentSelectors:ua,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(ct(),_e(0,"span",0),we(1),_e(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ma=new y("cdk-dir-doc",{providedIn:"root",factory:()=>d(E)}),fa=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function yi(n){let t=n?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?fa.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var pa=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ne("ltr");change=new Bt;constructor(){let e=d(ma,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(yi(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ot=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=W({type:n});static \u0275inj=G({})}return n})();var vi=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[Ot]})}return n})();var ha=["matButton",""],ga=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ba=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Di=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Bm=(()=>{class n extends Cn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ya(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?Di.get(this._appearance):null,o=Di.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=re({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[at],attrs:ha,ngContentSelectors:ba,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(ct(ga),_e(0,"span",0),we(1),sr(2,"span",1),we(3,1),cr(),we(4,2),_e(5,"span",2)(6,"span",3)),r&2&&Ee("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function ya(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Um=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=W({type:n});static \u0275inj=G({imports:[vi,Ot]})}return n})();var va="draft";function s(n,t=""){return typeof n=="string"?n.trim():t}function H(n){return Array.isArray(n)?n.map(t=>s(t)).filter(Boolean):[]}function An(n,t=!1){return typeof n=="boolean"?n:t}function _i(n,t=0){return typeof n=="number"&&Number.isFinite(n)?n:t}function In(n){return n==="published"||n==="archived"||n==="draft"?n:va}function Nt(n){let t=s(n);return Number.isNaN(Date.parse(t))?"":t}function Tn(n){return H(n).map(t=>t.toLowerCase())}function wi(n){let t=s(n?.src),e=s(n?.alt);if(!(!t||!e))return{src:t,alt:e,caption:s(n?.caption)||void 0}}function Da(n){if(!Array.isArray(n))return[];let t=[];for(let e of n)switch(s(e?.type)){case"paragraph":{let i=s(e?.text);i&&t.push({type:"paragraph",text:i});break}case"image":{let i=wi(e);i&&t.push(D({type:"image"},i));break}case"callout":{let i=s(e?.text);if(i){let o=s(e?.tone);t.push({type:"callout",title:s(e?.title)||void 0,text:i,tone:o==="neutral"||o==="executive"||o==="technical"||o==="warning"?o:void 0})}break}case"list":{let i=H(e?.items);i.length&&t.push({type:"list",title:s(e?.title)||void 0,items:i});break}case"component":{let i=s(e?.component);i&&t.push({type:"component",component:i,fallback:s(e?.fallback)||void 0,title:s(e?.title)||void 0,description:s(e?.description)||void 0});break}default:break}return t}function Ei(n){if(!Array.isArray(n))return[];let t=[];for(let e of n){let r=s(e?.heading),i=H(e?.paragraphs),o=s(e?.intro)||void 0,a=s(e?.eyebrow)||void 0,c=Da(e?.blocks),u=wi(e?.image),l=s(e?.component)||void 0,f=s(e?.fallback)||void 0,b=s(e?.callout)||void 0;!r&&i.length===0&&!o&&!u&&!l&&!b&&c.length===0||t.push({heading:r||"Section",eyebrow:a,intro:o,blocks:c,paragraphs:i,image:u,component:l,componentTitle:s(e?.componentTitle)||void 0,componentDescription:s(e?.componentDescription)||void 0,fallback:f,callout:b})}return t}function _a(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.label),r=s(t?.value);return e&&r?{label:e,value:r}:null}).filter(t=>t!==null):[]}function wa(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.label),r=s(t?.anchor);return e&&r?{label:e,anchor:r}:null}).filter(t=>t!==null):[]}function Ea(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.label),r=s(t?.href),i=s(t?.type);return!e||!r?null:{label:e,href:r,description:s(t?.description)||void 0,type:i==="image"||i==="pdf"||i==="data"||i==="schema"||i==="checklist"||i==="link"?i:void 0}}).filter(t=>t!==null):[]}function Ca(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.title),r=s(t?.slug);return e&&r?{title:e,slug:r,description:s(t?.description)||void 0}:null}).filter(t=>t!==null):[]}function Aa(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.title),r=s(t?.description),i=s(t?.href)||void 0,o=s(t?.anchor)||void 0,a=s(t?.buttonLabel)||void 0;return e&&r?{title:e,description:r,href:i,anchor:o,buttonLabel:a}:null}).filter(t=>t!==null):[]}function Fn(n){if(!n||typeof n!="object")return;let t=_a(n?.snapshot),e=wa(n?.toc),r=Ea(n?.assets),i=Ca(n?.related),o=Aa(n?.callsToAction);if(!(!t.length&&!e.length&&!r.length&&!i.length&&!o.length))return{snapshot:t.length?t:void 0,toc:e.length?e:void 0,assets:r.length?r:void 0,related:i.length?i:void 0,callsToAction:o.length?o:void 0}}function Mn(n,t,e){return{title:s(n?.title,t),description:s(n?.description,e)}}function Sn(n){return{version:_i(n?.version,1),updatedOn:Nt(n?.updatedOn)||new Date().toISOString()}}function xn(n,t){let e=Sn(n);return ee(D({},e),{eyebrow:s(n?.eyebrow,"cweise.com"),headline:s(n?.headline,t),intro:s(n?.intro)})}function kt(n){return n==="published"}function Rn(n){return[...n].sort((t,e)=>{let r=Date.parse(e.publishedOn??"")||0,i=Date.parse(t.publishedOn??"")||0;return r-i})}function Lt(n,t,e){let r=new Map(t.map(c=>[c.slug,c])),i=n.map(c=>r.get(c)).filter(c=>!!c),o=t.filter(c=>c.featured&&!i.some(u=>u.slug===c.slug)),a=[...i,...o];return typeof e=="number"?a.slice(0,e):a}function Ia(n){let t=s(n?.id),e=s(n?.title),r=s(n?.description);return!t||!e||!r?null:{id:t,icon:s(n?.icon,"insights"),title:e,description:r}}function Ta(n){return{eyebrow:s(n?.eyebrow,"Engineering & Infrastructure"),headline:s(n?.headline,"Operational Intelligence for Complex Organizations"),subheadline:s(n?.subheadline,"Reducing Rework, Risk, and Delivery Gaps"),intro:H(n?.intro),heroImage:s(n?.heroImage,"assets/images/hero-architecture.png"),featuredWritingSlugs:H(n?.featuredWritingSlugs),featuredFrameworkSlugs:H(n?.featuredFrameworkSlugs),featuredInitiativeSlugs:H(n?.featuredInitiativeSlugs),themes:Array.isArray(n?.themes)?n.themes.map(t=>Ia(t)).filter(t=>t!==null):[],themesSection:{eyebrow:s(n?.themesSection?.eyebrow,"Core Themes"),headline:s(n?.themesSection?.headline,"Where I Focus"),support:s(n?.themesSection?.support)},writingSection:{eyebrow:s(n?.writingSection?.eyebrow,"Featured Writing"),headline:s(n?.writingSection?.headline,"Recent Essays"),support:s(n?.writingSection?.support)},frameworkSection:{eyebrow:s(n?.frameworkSection?.eyebrow,"Featured Framework"),headline:s(n?.frameworkSection?.headline,"Featured Framework"),support:s(n?.frameworkSection?.support)},initiativesSection:{eyebrow:s(n?.initiativesSection?.eyebrow,"Selected Initiatives"),headline:s(n?.initiativesSection?.headline,"Proof of Execution"),support:s(n?.initiativesSection?.support)},aboutSection:{eyebrow:s(n?.aboutSection?.eyebrow,"About"),headline:s(n?.aboutSection?.headline,"How I Think. What I Do."),support:s(n?.aboutSection?.support)}}}function Fa(n){return{primary:Array.isArray(n?.primary)?n.primary.map(t=>({label:s(t?.label),path:s(t?.path)})).filter(t=>t.label&&t.path):[],social:Array.isArray(n?.social)?n.social.map(t=>({label:s(t?.label),url:s(t?.url),icon:s(t?.icon,"link")})).filter(t=>t.label&&t.url):[]}}function Ma(n){return{featuredLinks:Array.isArray(n?.featuredLinks)?n.featuredLinks.map(t=>({label:s(t?.label),path:s(t?.path)})).filter(t=>t.label&&t.path):[]}}function Sa(n){return{eyebrow:s(n?.eyebrow,"Stay Connected"),headline:s(n?.headline,"Thoughts on operations, systems, and execution."),intro:s(n?.intro),note:s(n?.note),ctaLabel:s(n?.ctaLabel,"Connect"),ctaUrl:s(n?.ctaUrl,"/connect")}}function On(n){let t=Sn(n?.meta);return{meta:ee(D({},t),{siteName:s(n?.meta?.siteName,"cweise.com"),siteUrl:s(n?.meta?.siteUrl,"https://cweise.com"),title:s(n?.meta?.title,"Operational Intelligence for Complex Organizations"),description:s(n?.meta?.description),author:s(n?.meta?.author,"Charles Weise"),footerTagline:s(n?.meta?.footerTagline,"Operational intelligence for complex organizations."),contactEmail:s(n?.meta?.contactEmail,"iweise@me.com")}),home:Ta(n?.home),navigation:Fa(n?.navigation),footer:Ma(n?.footer),connect:Sa(n?.connect)}}function xa(n){let t=s(n?.id),e=s(n?.slug),r=s(n?.title);if(!t||!e||!r)return null;let i=s(n?.summary);return{id:t,slug:e,title:r,summary:i,status:In(n?.status),publishedOn:Nt(n?.publishedOn),readTimeMinutes:_i(n?.readTimeMinutes,5),featured:An(n?.featured),tags:Tn(n?.tags),heroImage:s(n?.heroImage)||void 0,seo:Mn(n?.seo,r,i),body:{intro:s(n?.body?.intro),sections:Ei(n?.body?.sections)},companion:Fn(n?.companion)}}function Ci(n){return{meta:xn(n?.meta,"Writing"),items:Array.isArray(n?.items)?n.items.map(t=>xa(t)).filter(t=>t!==null):[]}}function Ra(n){return Array.isArray(n)?n.map(t=>{let e=s(t?.title),r=s(t?.description);return!e||!r?null:{title:e,description:r}}).filter(t=>!!t):[]}function Oa(n){let t=s(n?.id),e=s(n?.slug),r=s(n?.title);if(!t||!e||!r)return null;let i=s(n?.summary),o={premise:s(n?.body?.premise),components:Ra(n?.body?.components),application:s(n?.body?.application),sections:Ei(n?.body?.sections)};return{id:t,slug:e,title:r,summary:i,status:In(n?.status),publishedOn:Nt(n?.publishedOn),featured:An(n?.featured),category:s(n?.category),tags:Tn(n?.tags),diagramImage:s(n?.diagramImage)||void 0,seo:Mn(n?.seo,r,i),body:o,companion:Fn(n?.companion)}}function Ai(n){return{meta:xn(n?.meta,"Frameworks"),items:Array.isArray(n?.items)?n.items.map(t=>Oa(t)).filter(t=>t!==null):[]}}function Na(n){let t=s(n?.id),e=s(n?.slug),r=s(n?.title);if(!t||!e||!r)return null;let i=s(n?.summary),o={context:s(n?.body?.context),challenge:s(n?.body?.challenge),approach:s(n?.body?.approach),outcome:s(n?.body?.outcome),notes:H(n?.body?.notes)};return{id:t,slug:e,title:r,summary:i,status:In(n?.status),publishedOn:Nt(n?.publishedOn),featured:An(n?.featured),domain:s(n?.domain),icon:s(n?.icon)||void 0,tags:Tn(n?.tags),thumbnail:s(n?.thumbnail)||void 0,seo:Mn(n?.seo,r,i),body:o,companion:Fn(n?.companion)}}function Ii(n){return{meta:xn(n?.meta,"Initiatives"),items:Array.isArray(n?.items)?n.items.map(t=>Na(t)).filter(t=>t!==null):[]}}function Ti(n){let t={headline:s(n?.content?.headline,"How I Think. What I Do."),narrative:H(n?.content?.narrative),principles:H(n?.content?.principles),focusAreas:H(n?.content?.focusAreas),closing:s(n?.content?.closing)};return{meta:Sn(n?.meta),content:t}}var Fi=On({meta:{version:1,updatedOn:"2026-05-16",siteName:"cweise.com",siteUrl:"https://cweise.com",title:"Operational Intelligence for Complex Organizations",description:"Operational intelligence for engineering and infrastructure organizations.",author:"Charles Weise",footerTagline:"Operational intelligence for complex organizations.",contactEmail:"iweise@me.com"},home:{eyebrow:"Engineering & Infrastructure",headline:"Operational Intelligence for Complex Organizations",subheadline:"Reducing Rework, Risk, and Delivery Gaps",intro:[],heroImage:"assets/images/hero-architecture.png",featuredWritingSlugs:[],featuredFrameworkSlugs:[],featuredInitiativeSlugs:[],themes:[],themesSection:{eyebrow:"Core Themes",headline:"Where I Focus",support:""},writingSection:{eyebrow:"Featured Writing",headline:"Recent Essays",support:""},frameworkSection:{eyebrow:"Featured Framework",headline:"Featured Framework",support:""},initiativesSection:{eyebrow:"Selected Initiatives",headline:"Proof of Execution",support:""},aboutSection:{eyebrow:"About",headline:"How I Think. What I Do.",support:""}},navigation:{primary:[],social:[]},footer:{featuredLinks:[]},connect:{eyebrow:"Stay Connected",headline:"Thoughts on operations, systems, and execution.",intro:"",note:"",ctaLabel:"Connect",ctaUrl:"/connect"}}),Mi={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Writing",headline:"Writing",intro:""},items:[]},Si={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Frameworks",headline:"Frameworks",intro:""},items:[]},xi={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Initiatives",headline:"Initiatives",intro:""},items:[]},Ri={meta:{version:1,updatedOn:"2026-05-16"},content:{headline:"How I Think. What I Do.",narrative:[],principles:[],focusAreas:[],closing:""}};var Oi=class n{http=d(It);siteFile$=this.loadFile("assets/content/site.json",Fi,On);writingFile$=this.loadFile("assets/content/writing.json",Mi,Ci);frameworksFile$=this.loadFile("assets/content/frameworks.json",Si,Ai);initiativesFile$=this.loadFile("assets/content/initiatives.json",xi,Ii);aboutFile$=this.loadFile("assets/content/about.json",Ri,Ti);getSiteMeta(){return this.siteFile$.pipe(g(t=>t.meta))}getNavigation(){return this.siteFile$.pipe(g(t=>t.navigation))}getFooterContent(){return this.siteFile$.pipe(g(t=>t.footer))}getConnectContent(){return this.siteFile$.pipe(g(t=>t.connect))}getHomeContent(){return te({site:this.siteFile$,featuredWriting:this.getFeaturedWriting(),featuredFrameworks:this.getFeaturedFrameworks(),featuredInitiatives:this.getFeaturedInitiatives(),about:this.getAboutContent()}).pipe(g(({site:t,featuredWriting:e,featuredFrameworks:r,featuredInitiatives:i,about:o})=>({meta:t.meta,navigation:t.navigation,footer:t.footer,connect:t.connect,home:t.home,featuredWriting:e,featuredFrameworks:r,featuredInitiatives:i,about:o})))}getWritingPage(){return te({meta:this.writingFile$.pipe(g(t=>t.meta)),items:this.getWritingIndex()}).pipe(g(({meta:t,items:e})=>({meta:t,items:e})))}getWritingIndex(){return this.writingFile$.pipe(g(t=>t.items.filter(e=>kt(e.status))),g(t=>Rn(t)))}getWritingBySlug(t){return this.getWritingIndex().pipe(g(e=>e.find(r=>r.slug===t.trim())??null))}getFeaturedWriting(t){return te([this.siteFile$,this.getWritingIndex()]).pipe(g(([e,r])=>Lt(e.home.featuredWritingSlugs,r,t)))}getFrameworksPage(){return te({meta:this.frameworksFile$.pipe(g(t=>t.meta)),items:this.getFrameworksIndex()}).pipe(g(({meta:t,items:e})=>({meta:t,items:e})))}getFrameworksIndex(){return this.frameworksFile$.pipe(g(t=>t.items.filter(e=>kt(e.status))),g(t=>Rn(t)))}getFrameworkBySlug(t){return this.getFrameworksIndex().pipe(g(e=>e.find(r=>r.slug===t.trim())??null))}getFeaturedFrameworks(t){return te([this.siteFile$,this.getFrameworksIndex()]).pipe(g(([e,r])=>Lt(e.home.featuredFrameworkSlugs,r,t)))}getInitiativesPage(){return te({meta:this.initiativesFile$.pipe(g(t=>t.meta)),items:this.getInitiativesIndex()}).pipe(g(({meta:t,items:e})=>({meta:t,items:e})))}getInitiativesIndex(){return this.initiativesFile$.pipe(g(t=>t.items.filter(e=>kt(e.status))))}getInitiativeBySlug(t){return this.getInitiativesIndex().pipe(g(e=>e.find(r=>r.slug===t.trim())??null))}getFeaturedInitiatives(t){return te([this.siteFile$,this.getInitiativesIndex()]).pipe(g(([e,r])=>Lt(e.home.featuredInitiativeSlugs,r,t)))}getAboutContent(){return this.aboutFile$.pipe(g(t=>t.content))}loadFile(t,e,r){return this.http.get(t).pipe(g(i=>r(i)),Pn(i=>(console.error(`Content file failed to load: ${t}`,i),ce(e))),$n({bufferSize:1,refCount:!0}))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})};export{ut as a,vr as b,to as c,vc as d,on as e,_o as f,It as g,Ko as h,Xu as i,Yo as j,ad as k,Ye as l,Ze as m,V as n,K as o,ae as p,pn as q,qe as r,Ud as s,$d as t,ci as u,gn as v,yn as w,Tl as x,Ml as y,Se as z,$l as A,om as B,gi as C,la as D,pa as E,Ot as F,vi as G,Bm as H,Um as I,Oi as J};
