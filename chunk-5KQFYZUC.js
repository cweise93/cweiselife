import{$a as Lt,A as Fn,Aa as Hn,Ba as ce,E as Sn,F as Mn,Ga as he,H as xn,Ha as Gn,I as Rn,Ia as Je,K as y,L as Se,La as ge,M as m,Ma as qe,Mb as Xn,N as V,Na as Qe,Ob as Jn,P as v,Q as p,R as d,S as Mt,Sa as te,T as On,Ta as G,Tb as qn,U as Me,Ua as be,Ub as De,V as kn,Va as Wn,Vb as Pt,Wa as et,Wb as Qn,Y as H,Z as E,_ as xe,_a as Nt,a as C,b as q,ba as N,ca as xt,ea as Rt,f as wn,g as Fe,ga as Ot,h as En,k as ae,ka as ee,kb as Yn,la as Nn,lb as Zn,ma as kt,mb as ye,na as Ln,o as b,oa as me,ob as L,p as Q,pa as Pn,pb as I,qa as fe,ra as Xe,sa as se,sb as tt,ta as pe,tb as ve,ua as Bn,v as Cn,va as jn,w as Tn,wa as Un,x as An,xa as zn,ya as $n,yb as Re,z as In,za as Vn,zb as Kn}from"./chunk-GQ35ZDXA.js";var er=null;function Y(){return er}function Bt(e){er??=e}var Oe=class{},_e=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>d(tr),providedIn:"platform"})}return e})();var tr=(()=>{class e extends _e{_location;_history;_doc=d(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Y().getBaseHref(this._doc)}onPopState(t){let r=Y().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Y().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,o){this._history.pushState(t,r,o)}replaceState(t,r,o){this._history.replaceState(t,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function or(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function nr(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function ne(e){return e&&e[0]!=="?"?`?${e}`:e}var nt=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>d(_o),providedIn:"root"})}return e})(),Do=new v(""),_o=(()=>{class e extends nt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??d(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return or(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+ne(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${r}${o}`:r}pushState(t,r,o,i){let a=this.prepareExternalUrl(o+ne(i));this._platformLocation.pushState(t,r,a)}replaceState(t,r,o,i){let a=this.prepareExternalUrl(o+ne(i));this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(p(_e),p(Do,8))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ir=(()=>{class e{_subject=new Fe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=Co(nr(rr(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+ne(r))}normalize(t){return e.stripTrailingSlash(Eo(this._basePath,rr(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",o=null){this._locationStrategy.pushState(o,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ne(r)),o)}replaceState(t,r="",o=null){this._locationStrategy.replaceState(o,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ne(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(o=>o(t,r))}subscribe(t,r,o){return this._subject.subscribe({next:t,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=ne;static joinWithSlash=or;static stripTrailingSlash=nr;static \u0275fac=function(r){return new(r||e)(p(nt))};static \u0275prov=m({token:e,factory:()=>wo(),providedIn:"root"})}return e})();function wo(){return new ir(p(nt))}function Eo(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function rr(e){return e.replace(/\/index.html$/,"")}function Co(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var M=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(M||{}),D=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(D||{}),O=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(O||{}),K={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function sr(e){return L(e)[I.LocaleId]}function cr(e,n,t){let r=L(e),o=[r[I.DayPeriodsFormat],r[I.DayPeriodsStandalone]],i=P(o,n);return P(i,t)}function ur(e,n,t){let r=L(e),o=[r[I.DaysFormat],r[I.DaysStandalone]],i=P(o,n);return P(i,t)}function dr(e,n,t){let r=L(e),o=[r[I.MonthsFormat],r[I.MonthsStandalone]],i=P(o,n);return P(i,t)}function lr(e,n){let r=L(e)[I.Eras];return P(r,n)}function ke(e,n){let t=L(e);return P(t[I.DateFormat],n)}function Ne(e,n){let t=L(e);return P(t[I.TimeFormat],n)}function Le(e,n){let r=L(e)[I.DateTimeFormat];return P(r,n)}function Pe(e,n){let t=L(e),r=t[I.NumberSymbols][n];if(typeof r>"u"){if(n===K.CurrencyDecimal)return t[I.NumberSymbols][K.Decimal];if(n===K.CurrencyGroup)return t[I.NumberSymbols][K.Group]}return r}function mr(e){if(!e[I.ExtraData])throw new y(2303,!1)}function fr(e){let n=L(e);return mr(n),(n[I.ExtraData][2]||[]).map(r=>typeof r=="string"?jt(r):[jt(r[0]),jt(r[1])])}function pr(e,n,t){let r=L(e);mr(r);let o=[r[I.ExtraData][0],r[I.ExtraData][1]],i=P(o,n)||[];return P(i,t)||[]}function P(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new y(2304,!1)}function jt(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var Io=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,rt={},Fo=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function hr(e,n,t,r){let o=Po(e);n=Z(t,n)||n;let a=[],c;for(;n;)if(c=Fo.exec(n),c){a=a.concat(c.slice(1));let f=a.pop();if(!f)break;n=f}else{a.push(n);break}let u=o.getTimezoneOffset();r&&(u=br(r,u),o=Lo(o,r));let l="";return a.forEach(f=>{let g=ko(f);l+=g?g(o,t,u):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function ct(e,n,t){let r=new Date(0);return r.setFullYear(e,n,t),r.setHours(0,0,0),r}function Z(e,n){let t=sr(e);if(rt[t]??={},rt[t][n])return rt[t][n];let r="";switch(n){case"shortDate":r=ke(e,O.Short);break;case"mediumDate":r=ke(e,O.Medium);break;case"longDate":r=ke(e,O.Long);break;case"fullDate":r=ke(e,O.Full);break;case"shortTime":r=Ne(e,O.Short);break;case"mediumTime":r=Ne(e,O.Medium);break;case"longTime":r=Ne(e,O.Long);break;case"fullTime":r=Ne(e,O.Full);break;case"short":let o=Z(e,"shortTime"),i=Z(e,"shortDate");r=ot(Le(e,O.Short),[o,i]);break;case"medium":let a=Z(e,"mediumTime"),c=Z(e,"mediumDate");r=ot(Le(e,O.Medium),[a,c]);break;case"long":let u=Z(e,"longTime"),l=Z(e,"longDate");r=ot(Le(e,O.Long),[u,l]);break;case"full":let f=Z(e,"fullTime"),g=Z(e,"fullDate");r=ot(Le(e,O.Full),[f,g]);break}return r&&(rt[t][n]=r),r}function ot(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,r){return n!=null&&r in n?n[r]:t})),e}function U(e,n,t="-",r,o){let i="";(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,i=t));let a=String(e);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),i+a}function So(e,n){return U(e,3).substring(0,n)}function T(e,n,t=0,r=!1,o=!1){return function(i,a){let c=Mo(e,i);if((t>0||c>-t)&&(c+=t),e===3)c===0&&t===-12&&(c=12);else if(e===6)return So(c,n);let u=Pe(a,K.MinusSign);return U(c,n,u,r,o)}}function Mo(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new y(2301,!1)}}function w(e,n,t=M.Format,r=!1){return function(o,i){return xo(o,i,e,n,t,r)}}function xo(e,n,t,r,o,i){switch(t){case 2:return dr(n,o,r)[e.getMonth()];case 1:return ur(n,o,r)[e.getDay()];case 0:let a=e.getHours(),c=e.getMinutes();if(i){let l=fr(n),f=pr(n,o,r),g=l.findIndex(A=>{if(Array.isArray(A)){let[j,k]=A,x=a>=j.hours&&c>=j.minutes,h=a<k.hours||a===k.hours&&c<k.minutes;if(j.hours<k.hours){if(x&&h)return!0}else if(x||h)return!0}else if(A.hours===a&&A.minutes===c)return!0;return!1});if(g!==-1)return f[g]}return cr(n,o,r)[a<12?0:1];case 3:return lr(n,r)[e.getFullYear()<=0?0:1];default:let u=t;throw new y(2302,!1)}}function it(e){return function(n,t,r){let o=-1*r,i=Pe(t,K.MinusSign),a=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?"+":"")+U(a,2,i)+U(Math.abs(o%60),2,i);case 1:return"GMT"+(o>=0?"+":"")+U(a,1,i);case 2:return"GMT"+(o>=0?"+":"")+U(a,2,i)+":"+U(Math.abs(o%60),2,i);case 3:return r===0?"Z":(o>=0?"+":"")+U(a,2,i)+":"+U(Math.abs(o%60),2,i);default:throw new y(2310,!1)}}}var Ro=0,st=4;function Oo(e){let n=ct(e,Ro,1).getDay();return ct(e,0,1+(n<=st?st:st+7)-n)}function gr(e){let n=e.getDay(),t=n===0?-3:st-n;return ct(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Ut(e,n=!1){return function(t,r){let o;if(n){let i=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,a=t.getDate();o=1+Math.floor((a+i)/7)}else{let i=gr(t),a=Oo(i.getFullYear()),c=i.getTime()-a.getTime();o=1+Math.round(c/6048e5)}return U(o,e,Pe(r,K.MinusSign))}}function at(e,n=!1){return function(t,r){let i=gr(t).getFullYear();return U(i,e,Pe(r,K.MinusSign),n)}}var zt={};function ko(e){if(zt[e])return zt[e];let n;switch(e){case"G":case"GG":case"GGG":n=w(3,D.Abbreviated);break;case"GGGG":n=w(3,D.Wide);break;case"GGGGG":n=w(3,D.Narrow);break;case"y":n=T(0,1,0,!1,!0);break;case"yy":n=T(0,2,0,!0,!0);break;case"yyy":n=T(0,3,0,!1,!0);break;case"yyyy":n=T(0,4,0,!1,!0);break;case"Y":n=at(1);break;case"YY":n=at(2,!0);break;case"YYY":n=at(3);break;case"YYYY":n=at(4);break;case"M":case"L":n=T(1,1,1);break;case"MM":case"LL":n=T(1,2,1);break;case"MMM":n=w(2,D.Abbreviated);break;case"MMMM":n=w(2,D.Wide);break;case"MMMMM":n=w(2,D.Narrow);break;case"LLL":n=w(2,D.Abbreviated,M.Standalone);break;case"LLLL":n=w(2,D.Wide,M.Standalone);break;case"LLLLL":n=w(2,D.Narrow,M.Standalone);break;case"w":n=Ut(1);break;case"ww":n=Ut(2);break;case"W":n=Ut(1,!0);break;case"d":n=T(2,1);break;case"dd":n=T(2,2);break;case"c":case"cc":n=T(7,1);break;case"ccc":n=w(1,D.Abbreviated,M.Standalone);break;case"cccc":n=w(1,D.Wide,M.Standalone);break;case"ccccc":n=w(1,D.Narrow,M.Standalone);break;case"cccccc":n=w(1,D.Short,M.Standalone);break;case"E":case"EE":case"EEE":n=w(1,D.Abbreviated);break;case"EEEE":n=w(1,D.Wide);break;case"EEEEE":n=w(1,D.Narrow);break;case"EEEEEE":n=w(1,D.Short);break;case"a":case"aa":case"aaa":n=w(0,D.Abbreviated);break;case"aaaa":n=w(0,D.Wide);break;case"aaaaa":n=w(0,D.Narrow);break;case"b":case"bb":case"bbb":n=w(0,D.Abbreviated,M.Standalone,!0);break;case"bbbb":n=w(0,D.Wide,M.Standalone,!0);break;case"bbbbb":n=w(0,D.Narrow,M.Standalone,!0);break;case"B":case"BB":case"BBB":n=w(0,D.Abbreviated,M.Format,!0);break;case"BBBB":n=w(0,D.Wide,M.Format,!0);break;case"BBBBB":n=w(0,D.Narrow,M.Format,!0);break;case"h":n=T(3,1,-12);break;case"hh":n=T(3,2,-12);break;case"H":n=T(3,1);break;case"HH":n=T(3,2);break;case"m":n=T(4,1);break;case"mm":n=T(4,2);break;case"s":n=T(5,1);break;case"ss":n=T(5,2);break;case"S":n=T(6,1);break;case"SS":n=T(6,2);break;case"SSS":n=T(6,3);break;case"Z":case"ZZ":case"ZZZ":n=it(0);break;case"ZZZZZ":n=it(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=it(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=it(2);break;default:return null}return zt[e]=n,n}function br(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function No(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function Lo(e,n,t){let o=e.getTimezoneOffset(),i=br(n,o);return No(e,-1*(i-o))}function Po(e){if(ar(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,i=1,a=1]=e.split("-").map(c=>+c);return ct(o,i-1,a)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let r;if(r=e.match(Io))return Bo(r)}let n=new Date(e);if(!ar(n))throw new y(2311,!1);return n}function Bo(e){let n=new Date(0),t=0,r=0,o=e[8]?n.setUTCFullYear:n.setFullYear,i=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),r=Number(e[9]+e[11])),o.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-t,c=Number(e[5]||0)-r,u=Number(e[6]||0),l=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return i.call(n,a,c,u,l),n}function ar(e){return e instanceof Date&&!isNaN(e.valueOf())}function jo(e,n){return new y(2100,!1)}var Uo="mediumDate",yr=new v(""),vr=new v(""),zo=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,r,o){this.locale=t,this.defaultTimezone=r,this.defaultOptions=o}transform(t,r,o,i){if(t==null||t===""||t!==t)return null;try{let a=r??this.defaultOptions?.dateFormat??Uo,c=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return hr(t,a,i||this.locale,c)}catch(a){throw jo(e,a.message)}}static \u0275fac=function(r){return new(r||e)(Qe(Xn,16),Qe(yr,24),Qe(vr,24))};static \u0275pipe=Wn({name:"date",type:e,pure:!0})}return e})();function Be(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[o,i]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(o.trim()===n)return decodeURIComponent(i)}return null}var ue=class{};var Vt="browser";function Dr(e){return e===Vt}var tc=(()=>{class e{static \u0275prov=m({token:e,providedIn:"root",factory:()=>new $t(d(E),window)})}return e})(),$t=class{document;window;offset=()=>[0,0];constructor(n,t){this.document=n,this.window=t}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,t){this.window.scrollTo(q(C({},t),{left:n[0],top:n[1]}))}scrollToAnchor(n,t){let r=Wo(this.document,n);r&&(this.scrollToElement(r,t),r.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Se(2400,!1))}}scrollToElement(n,t){let r=n.getBoundingClientRect(),o=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(q(C({},t),{left:o-a[0],top:i-a[1]}))}};function Wo(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),o=r.currentNode;for(;o;){let i=o.shadowRoot;if(i){let a=i.getElementById(n)||i.querySelector(`[name="${n}"]`);if(a)return a}o=r.nextNode()}}return null}var je=class{_doc;constructor(n){this._doc=n}manager},ut=(()=>{class e extends je{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,o,i){return t.addEventListener(r,o,i),()=>this.removeEventListener(t,r,o,i)}removeEventListener(t,r,o,i){return t.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),mt=new v(""),Yt=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(a=>{a.manager=this});let o=t.filter(a=>!(a instanceof ut));this._plugins=o.slice().reverse();let i=t.find(a=>a instanceof ut);i&&this._plugins.push(i)}addEventListener(t,r,o,i){return this._findPluginFor(r).addEventListener(t,r,o,i)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new y(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(p(mt),p(N))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ht="ng-app-id";function _r(e){for(let n of e)n.remove()}function wr(e,n){let t=n.createElement("style");return t.textContent=e,t}function Yo(e,n,t,r){let o=e.head?.querySelectorAll(`style[${Ht}="${n}"],link[${Ht}="${n}"]`);if(o)for(let i of o)i.removeAttribute(Ht),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function Wt(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Zt=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,o,i={}){this.doc=t,this.appId=r,this.nonce=o,Yo(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let o of t)this.addUsage(o,this.inline,wr);r?.forEach(o=>this.addUsage(o,this.external,Wt))}removeStyles(t,r){for(let o of t)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,r,o){let i=r.get(t);i?i.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(t,this.doc)))})}removeUsage(t,r){let o=r.get(t);o&&(o.usage--,o.usage<=0&&(_r(o.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])_r(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(t,wr(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(t,Wt(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(p(E),p(kt),p(fe,8),p(me))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Gt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Kt=/%COMP%/g;var Cr="%COMP%",Zo=`_nghost-${Cr}`,Ko=`_ngcontent-${Cr}`,Xo=!0,Jo=new v("",{factory:()=>Xo});function qo(e){return Ko.replace(Kt,e)}function Qo(e){return Zo.replace(Kt,e)}function Tr(e,n){return n.map(t=>t.replace(Kt,e))}var Xt=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,r,o,i,a,c,u=null,l=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=c,this.nonce=u,this.tracingService=l,this.defaultRenderer=new Ue(t,a,c,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,r);return o instanceof lt?o.applyToHost(t):o instanceof ze&&o.applyStyles(),o}getOrCreateRenderer(t,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let a=this.doc,c=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,g=this.tracingService;switch(r.encapsulation){case Xe.Emulated:i=new lt(u,l,r,this.appId,f,a,c,g);break;case Xe.ShadowDom:return new dt(u,t,r,a,c,this.nonce,g,l);case Xe.ExperimentalIsolatedShadowDom:return new dt(u,t,r,a,c,this.nonce,g);default:i=new ze(u,l,r,f,a,c,g);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(p(Yt),p(Zt),p(kt),p(Jo),p(E),p(N),p(fe),p(Je,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ue=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,o){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Gt[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(Er(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(Er(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new y(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,o){if(o){t=o+":"+t;let i=Gt[o];i?n.setAttributeNS(i,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let o=Gt[r];o?n.removeAttributeNS(o,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,o){o&(he.DashCase|he.Important)?n.style.setProperty(t,r,o&he.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&he.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,o){if(typeof n=="string"&&(n=Y().getGlobalEventTarget(this.doc,n),!n))throw new y(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(n,t,i)),this.eventManager.addEventListener(n,t,i,o)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function Er(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var dt=class extends Ue{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,o,i,a,c,u){super(n,o,i,c),this.hostEl=t,this.sharedStylesHost=u,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=r.styles;l=Tr(r.id,l);for(let g of l){let A=document.createElement("style");a&&A.setAttribute("nonce",a),A.textContent=g,this.shadowRoot.appendChild(A)}let f=r.getExternalStyles?.();if(f)for(let g of f){let A=Wt(g,o);a&&A.setAttribute("nonce",a),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ze=class extends Ue{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,o,i,a,c,u){super(n,i,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let l=r.styles;this.styles=u?Tr(u,l):l,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Gn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},lt=class extends ze{contentAttr;hostAttr;constructor(n,t,r,o,i,a,c,u){let l=o+"-"+r.id;super(n,t,r,i,a,c,u,l),this.contentAttr=qo(l),this.hostAttr=Qo(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var ft=class e extends Oe{supportsDOMEvents=!0;static makeCurrent(){Bt(new e)}onAndCancel(n,t,r,o){return n.addEventListener(t,r,o),()=>{n.removeEventListener(t,r,o)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=ti();return t==null?null:ni(t)}resetBaseElement(){$e=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Be(document.cookie,n)}},$e=null;function ti(){return $e=$e||document.head.querySelector("base"),$e?$e.getAttribute("href"):null}function ni(e){return new URL(e,document.baseURI).pathname}var ri=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ar=["alt","control","meta","shift"],oi={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ii={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ir=(()=>{class e extends je{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,o,i){let a=e.parseEventName(r),c=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Y().onAndCancel(t,a.domEventName,c,i))}static parseEventName(t){let r=t.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Ar.forEach(l=>{let f=r.indexOf(l);f>-1&&(r.splice(f,1),a+=l+".")}),a+=i,r.length!=0||i.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(t,r){let o=oi[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ar.forEach(a=>{if(a!==o){let c=ii[a];c(t)&&(i+=a+".")}}),i+=o,i===r)}static eventCallback(t,r,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();async function ai(e,n,t){let r=C({rootComponent:e},si(n,t));return qn(r)}function si(e,n){return{platformRef:n?.platformRef,appProviders:[...mi,...e?.providers??[]],platformProviders:li}}function ci(){ft.makeCurrent()}function ui(){return new xt}function di(){return Nn(document),document}var li=[{provide:me,useValue:Vt},{provide:Ln,useValue:ci,multi:!0},{provide:E,useFactory:di}];var mi=[{provide:On,useValue:"root"},{provide:xt,useFactory:ui},{provide:mt,useClass:ut,multi:!0},{provide:mt,useClass:Ir,multi:!0},Xt,Zt,Yt,{provide:ge,useExisting:Xt},{provide:ue,useClass:ri},[]];var re=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let o=t.slice(0,r),i=t.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=(n.op==="a"?this.headers.get(t):void 0)||[];o.push(...r),this.headers.set(t,o);break;case"d":let i=n.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(c=>i.indexOf(c)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),o=n.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var ht=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},gt=class{encodeKey(n){return Fr(n)}encodeValue(n){return Fr(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function fi(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[a,c]=i==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,i)),n.decodeValue(o.slice(i+1))],u=t.get(a)||[];u.push(c),t.set(a,u)}),t}var pi=/%(\d[a-f0-9])/gi,hi={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Fr(e){return encodeURIComponent(e).replace(pi,(n,t)=>hi[t]??n)}function pt(e){return`${e}`}var X=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new gt,n.fromString){if(n.fromObject)throw new y(2805,!1);this.map=fi(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],o=Array.isArray(r)?r.map(pt):[pt(r)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let o=n[r];Array.isArray(o)?o.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:o,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(pt(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],o=r.indexOf(pt(n.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function gi(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Sr(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Mr(e){return typeof Blob<"u"&&e instanceof Blob}function xr(e){return typeof FormData<"u"&&e instanceof FormData}function bi(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Rr="Content-Type",Or="Accept",kr="text/plain",Nr="application/json",yi=`${Nr}, ${kr}, */*`,we=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,o){this.url=t,this.method=n.toUpperCase();let i;if(gi(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new y(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new re,this.context??=new ht,!this.params)this.params=new X,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let c=t.indexOf("?"),u=c===-1?"?":c<t.length-1?"&":"";this.urlWithParams=t+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Sr(this.body)||Mr(this.body)||xr(this.body)||bi(this.body)?this.body:this.body instanceof X?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xr(this.body)?null:Mr(this.body)?this.body.type||null:Sr(this.body)?null:typeof this.body=="string"?kr:this.body instanceof X?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Nr:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,o=n.responseType||this.responseType,i=n.keepalive??this.keepalive,a=n.priority||this.priority,c=n.cache||this.cache,u=n.mode||this.mode,l=n.redirect||this.redirect,f=n.credentials||this.credentials,g=n.referrer||this.referrer,A=n.integrity||this.integrity,j=n.referrerPolicy||this.referrerPolicy,k=n.transferCache??this.transferCache,x=n.timeout??this.timeout,h=n.body!==void 0?n.body:this.body,_=n.withCredentials??this.withCredentials,R=n.reportProgress??this.reportProgress,W=n.headers||this.headers,F=n.params||this.params,Ae=n.context??this.context;return n.setHeaders!==void 0&&(W=Object.keys(n.setHeaders).reduce((Ie,ie)=>Ie.set(ie,n.setHeaders[ie]),W)),n.setParams&&(F=Object.keys(n.setParams).reduce((Ie,ie)=>Ie.set(ie,n.setParams[ie]),F)),new e(t,r,h,{params:F,headers:W,context:Ae,reportProgress:R,responseType:o,withCredentials:_,transferCache:k,keepalive:i,cache:c,priority:a,timeout:x,mode:u,redirect:l,credentials:f,referrer:g,integrity:A,referrerPolicy:j})}},de=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(de||{}),Ce=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new re,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},bt=class e extends Ce{constructor(n={}){super(n)}type=de.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ve=class e extends Ce{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=de.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ee=class extends Ce{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},vi=200,Di=204;var _i=new v("");var wi=/^\)\]\}',?\n/;var qt=(()=>{class e{xhrFactory;tracingService=d(Je,{optional:!0});constructor(t){this.xhrFactory=t}maybePropagateTrace(t){return this.tracingService?.propagate?this.tracingService.propagate(t):t}handle(t){if(t.method==="JSONP")throw new y(-2800,!1);let r=this.xhrFactory;return ae(null).pipe(xn(()=>new wn(i=>{let a=r.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((h,_)=>a.setRequestHeader(h,_.join(","))),t.headers.has(Or)||a.setRequestHeader(Or,yi),!t.headers.has(Rr)){let h=t.detectContentTypeHeader();h!==null&&a.setRequestHeader(Rr,h)}if(t.timeout&&(a.timeout=t.timeout),t.responseType){let h=t.responseType.toLowerCase();a.responseType=h!=="json"?h:"text"}let c=t.serializeBody(),u=null,l=()=>{if(u!==null)return u;let h=a.statusText||"OK",_=new re(a.getAllResponseHeaders()),R=a.responseURL||t.url;return u=new bt({headers:_,status:a.status,statusText:h,url:R}),u},f=this.maybePropagateTrace(()=>{let{headers:h,status:_,statusText:R,url:W}=l(),F=null;_!==Di&&(F=typeof a.response>"u"?a.responseText:a.response),_===0&&(_=F?vi:0);let Ae=_>=200&&_<300;if(t.responseType==="json"&&typeof F=="string"){let Ie=F;F=F.replace(wi,"");try{F=F!==""?JSON.parse(F):null}catch(ie){F=Ie,Ae&&(Ae=!1,F={error:ie,text:F})}}Ae?(i.next(new Ve({body:F,headers:h,status:_,statusText:R,url:W||void 0})),i.complete()):i.error(new Ee({error:F,headers:h,status:_,statusText:R,url:W||void 0}))}),g=this.maybePropagateTrace(h=>{let{url:_}=l(),R=new Ee({error:h,status:a.status||0,statusText:a.statusText||"Unknown Error",url:_||void 0});i.error(R)}),A=g;t.timeout&&(A=this.maybePropagateTrace(h=>{let{url:_}=l(),R=new Ee({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:_||void 0});i.error(R)}));let j=!1,k=this.maybePropagateTrace(h=>{j||(i.next(l()),j=!0);let _={type:de.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(_.total=h.total),t.responseType==="text"&&a.responseText&&(_.partialText=a.responseText),i.next(_)}),x=this.maybePropagateTrace(h=>{let _={type:de.UploadProgress,loaded:h.loaded};h.lengthComputable&&(_.total=h.total),i.next(_)});return a.addEventListener("load",f),a.addEventListener("error",g),a.addEventListener("timeout",A),a.addEventListener("abort",g),t.reportProgress&&(a.addEventListener("progress",k),c!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(c),i.next({type:de.Sent}),()=>{a.removeEventListener("error",g),a.removeEventListener("abort",g),a.removeEventListener("load",f),a.removeEventListener("timeout",A),t.reportProgress&&(a.removeEventListener("progress",k),c!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||e)(p(ue))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ei(e,n){return n(e)}function Ci(e,n,t){return(r,o)=>kn(t,()=>n(r,i=>e(i,o)))}var Lr=new v("",{factory:()=>[]}),Pr=new v(""),Br=new v("",{factory:()=>!0});var Qt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=p(qt),o},providedIn:"root"})}return e})();var yt=(()=>{class e{backend;injector;chain=null;pendingTasks=d(Ot);contributeToStability=d(Br);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Lr),...this.injector.get(Pr,[])]));this.chain=r.reduceRight((o,i)=>Ci(o,i,this.injector),Ei)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(Fn(r))}else return this.chain(t,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(p(Qt),p(Me))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),en=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=p(yt),o},providedIn:"root"})}return e})();function Jt(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var vt=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,o={}){let i;if(t instanceof we)i=t;else{let u;o.headers instanceof re?u=o.headers:u=new re(o.headers);let l;o.params&&(o.params instanceof X?l=o.params:l=new X({fromObject:o.params})),i=new we(t,r,o.body!==void 0?o.body:null,{headers:u,context:o.context,params:l,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=ae(i).pipe(An(u=>this.handler.handle(u)));if(t instanceof we||o.observe==="events")return a;let c=a.pipe(Cn(u=>u instanceof Ve));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new y(2806,!1);return u.body}));case"blob":return c.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new y(2807,!1);return u.body}));case"text":return c.pipe(b(u=>{if(u.body!==null&&typeof u.body!="string")throw new y(2808,!1);return u.body}));default:return c.pipe(b(u=>u.body))}case"response":return c;default:throw new y(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new X().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,o={}){return this.request("PATCH",t,Jt(o,r))}post(t,r,o={}){return this.request("POST",t,Jt(o,r))}put(t,r,o={}){return this.request("PUT",t,Jt(o,r))}static \u0275fac=function(r){return new(r||e)(p(en))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ti=new v("",{factory:()=>!0}),Ai="XSRF-TOKEN",Ii=new v("",{factory:()=>Ai}),Fi="X-XSRF-TOKEN",Si=new v("",{factory:()=>Fi}),Mi=(()=>{class e{cookieName=d(Ii);doc=d(E);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Be(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),jr=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=p(Mi),o},providedIn:"root"})}return e})();function xi(e,n){if(!d(Ti)||e.method==="GET"||e.method==="HEAD")return n(e);try{let o=d(_e).href,{origin:i}=new URL(o),{origin:a}=new URL(e.url,i);if(i!==a)return n(e)}catch{return n(e)}let t=d(jr).getToken(),r=d(Si);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function Ri(...e){let n=[vt,yt,{provide:en,useExisting:yt},{provide:Qt,useFactory:()=>d(_i,{optional:!0})??d(qt)},{provide:Lr,useValue:xi,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return Mt(n)}var Ru=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Oi=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=p(ki),o},providedIn:"root"})}return e})(),ki=(()=>{class e extends Oi{_doc;constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case ce.NONE:return r;case ce.HTML:return pe(r,"HTML")?se(r):Hn(this._doc,String(r)).toString();case ce.STYLE:return pe(r,"Style")?se(r):r;case ce.SCRIPT:if(pe(r,"Script"))return se(r);throw new y(5200,!1);case ce.URL:return pe(r,"URL")?se(r):Vn(String(r));case ce.RESOURCE_URL:if(pe(r,"ResourceURL"))return se(r);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(t){return Bn(t)}bypassSecurityTrustStyle(t){return jn(t)}bypassSecurityTrustScript(t){return Un(t)}bypassSecurityTrustUrl(t){return zn(t)}bypassSecurityTrustResourceUrl(t){return $n(t)}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Vu(e,n){let r=!n?.manualCleanup?n?.injector?.get(xe)??d(xe):null,o=Ni(n?.equal),i;n?.requireSync?i=Rt({kind:0},{equal:o}):i=Rt({kind:1,value:n?.initialValue},{equal:o});let a,c=e.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{i.set({kind:2,error:u}),a?.()},complete:()=>{a?.()}});if(n?.requireSync&&i().kind===0)throw new y(601,!1);return a=r?.onDestroy(c.unsubscribe.bind(c)),Jn(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new y(601,!1)}},{equal:n?.equal})}function Ni(e=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&e(n.value,t.value)}function He(e){return e.buttons===0||e.detail===0}function Ge(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var tn;function Ur(){if(tn==null){let e=typeof document<"u"?document.head:null;tn=!!(e&&(e.createShadowRoot||e.attachShadow))}return tn}function nn(e){if(Ur()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function z(e){return e.composedPath?e.composedPath()[0]:e.target}var rn;try{rn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{rn=!1}var J=(()=>{class e{_platformId=d(me);isBrowser=this._platformId?Dr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||rn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var We;function zr(){if(We==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>We=!0}))}finally{We=We||!1}return We}function Te(e){return zr()?e:!!e.capture}function oe(e){return e instanceof ee?e.nativeElement:e}var $r=new v("cdk-input-modality-detector-options"),Vr={ignoreKeys:[18,17,224,91,16]},Hr=650,on={passive:!0,capture:!0},Gr=(()=>{class e{_platform=d(J);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new En(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=z(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Hr||(this._modality.next(He(t)?"keyboard":"mouse"),this._mostRecentTarget=z(t))};_onTouchstart=t=>{if(Ge(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=z(t)};constructor(){let t=d(N),r=d(E),o=d($r,{optional:!0});if(this._options=C(C({},Vr),o),this.modalityDetected=this._modality.pipe(Mn(1)),this.modalityChanged=this.modalityDetected.pipe(In()),this._platform.isBrowser){let i=d(ge).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(r,"keydown",this._onKeydown,on),i.listen(r,"mousedown",this._onMousedown,on),i.listen(r,"touchstart",this._onTouchstart,on)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ye=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(Ye||{}),Wr=new v("cdk-focus-monitor-default-options"),Dt=Te({passive:!0,capture:!0}),an=(()=>{class e{_ngZone=d(N);_platform=d(J);_inputModalityDetector=d(Gr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(E);_stopInputModalityDetector=new Fe;constructor(){let t=d(Wr,{optional:!0});this._detectionMode=t?.detectionMode||Ye.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=z(t);for(let o=r;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,r=!1){let o=oe(t);if(!this._platform.isBrowser||o.nodeType!==1)return ae();let i=nn(o)||this._document,a=this._elementInfo.get(o);if(a)return r&&(a.checkChildren=!0),a.subject;let c={checkChildren:r,subject:new Fe,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let r=oe(t),o=this._elementInfo.get(r);o&&(o.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(o))}focusVia(t,r,o){let i=oe(t),a=this._document.activeElement;i===a?this._getClosestElementsInfo(i).forEach(([c,u])=>this._originChanged(c,r,u)):(this._setOrigin(r),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Ye.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===Ye.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Hr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,r){let o=this._elementInfo.get(r),i=z(t);!o||!o.checkChildren&&r!==i||this._originChanged(r,this._getFocusOrigin(i),o)}_onBlur(t,r){let o=this._elementInfo.get(r);!o||o.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(o,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,o=this._rootNodeFocusListenerCount.get(r)||0;o||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Dt)}),this._rootNodeFocusListenerCount.set(r,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Rn(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let o=this._rootNodeFocusListenerCount.get(r);o>1?this._rootNodeFocusListenerCount.set(r,o-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Dt),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,o){this._setClasses(t,r),this._emitOrigin(o,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&r.push([i,o])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var _t=new WeakMap,Ze=(()=>{class e{_appRef;_injector=d(H);_environmentInjector=d(Me);load(t){let r=this._appRef=this._appRef||this._injector.get(Nt),o=_t.get(r);o||(o={loaders:new Set,refs:[]},_t.set(r,o),r.onDestroy(()=>{_t.get(r)?.refs.forEach(i=>i.destroy()),_t.delete(r)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(Qn(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var wt;function Li(){if(wt===void 0&&(wt=null,typeof window<"u")){let e=window;e.trustedTypes!==void 0&&(wt=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return wt}function Ed(e){return Li()?.createHTML(e)||e}var Yr=new Set,le,sn=(()=>{class e{_platform=d(J);_nonce=d(fe,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Bi}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Pi(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Pi(e,n){if(!Yr.has(e))try{le||(le=document.createElement("style"),n&&le.setAttribute("nonce",n),le.setAttribute("type","text/css"),document.head.appendChild(le)),le.sheet&&(le.sheet.insertRule(`@media ${e} {body{ }}`,0),Yr.add(e))}catch(t){console.error(t)}}function Bi(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var ji=new v("MATERIAL_ANIMATIONS"),Zr=null;function Ui(){return d(ji,{optional:!0})?.animationsDisabled||d(Pn,{optional:!0})==="NoopAnimations"?"di-disabled":(Zr??=d(sn).matchMedia("(prefers-reduced-motion)").matches,Zr?"reduced-motion":"enabled")}function Et(){return Ui()!=="enabled"}var B=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(B||{}),cn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=B.HIDDEN;constructor(n,t,r,o=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Kr=Te({passive:!0,capture:!0}),un=class{_events=new Map;addHandler(n,t,r,o){let i=this._events.get(t);if(i){let a=i.get(r);a?a.add(o):i.set(r,new Set([o]))}else this._events.set(t,new Map([[r,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Kr)})}removeHandler(n,t,r){let o=this._events.get(n);if(!o)return;let i=o.get(t);i&&(i.delete(r),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Kr)))}_delegateEventHandler=n=>{let t=z(n);t&&this._events.get(n.type)?.forEach((r,o)=>{(o===t||o.contains(t))&&r.forEach(i=>i.handleEvent(n))})}},Ke={enterDuration:225,exitDuration:150},zi=800,Xr=Te({passive:!0,capture:!0}),Jr=["mousedown","touchstart"],qr=["mouseup","mouseleave","touchend","touchcancel"],$i=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return e})(),Ct=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new un;constructor(n,t,r,o,i){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=oe(r)),i&&i.get(Ze).load($i)}fadeInRipple(n,t,r={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=C(C({},Ke),r.animation);r.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let a=r.radius||Vi(n,t,o),c=n-o.left,u=t-o.top,l=i.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${c-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,r.color!=null&&(f.style.backgroundColor=r.color),f.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(f);let g=window.getComputedStyle(f),A=g.transitionProperty,j=g.transitionDuration,k=A==="none"||j==="0s"||j==="0s, 0s"||o.width===0&&o.height===0,x=new cn(this,f,r,k);f.style.transform="scale3d(1, 1, 1)",x.state=B.FADING_IN,r.persistent||(this._mostRecentTransientRipple=x);let h=null;return!k&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _=()=>{h&&(h.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(x)},R=()=>this._destroyRipple(x),W=setTimeout(R,l+100);f.addEventListener("transitionend",_),f.addEventListener("transitioncancel",R),h={onTransitionEnd:_,onTransitionCancel:R,fallbackTimer:W}}),this._activeRipples.set(x,h),(k||!l)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===B.FADING_OUT||n.state===B.HIDDEN)return;let t=n.element,r=C(C({},Ke),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=B.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=oe(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Jr.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{qr.forEach(t=>{this._triggerElement.addEventListener(t,this,Xr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===B.FADING_IN?this._startFadeOutTransition(n):n.state===B.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=B.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=B.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=He(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+zi;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ge(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===B.VISIBLE||n.config.terminateOnPointerUp&&n.state===B.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Jr.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(qr.forEach(t=>n.removeEventListener(t,this,Xr)),this._pointerUpEventsRegistered=!1))}};function Vi(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+o*o)}var Qr=new v("mat-ripple-global-options");var Hi={capture:!0},Gi=["focus","mousedown","mouseenter","touchstart"],dn="mat-ripple-loader-uninitialized",ln="mat-ripple-loader-class-name",eo="mat-ripple-loader-centered",Tt="mat-ripple-loader-disabled",to=(()=>{class e{_document=d(E);_animationsDisabled=Et();_globalRippleOptions=d(Qr,{optional:!0});_platform=d(J);_ngZone=d(N);_injector=d(H);_eventCleanups;_hosts=new Map;constructor(){let t=d(ge).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Gi.map(r=>t.listen(this._document,r,this._onInteraction,Hi)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(dn,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(ln))&&t.setAttribute(ln,r.className||""),r.centered&&t.setAttribute(eo,""),r.disabled&&t.setAttribute(Tt,"")}setDisabled(t,r){let o=this._hosts.get(t);o?(o.target.rippleDisabled=r,!r&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):r?t.setAttribute(Tt,""):t.removeAttribute(Tt)}_onInteraction=t=>{let r=z(t);if(r instanceof HTMLElement){let o=r.closest(`[${dn}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(ln)),t.append(r);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Ke.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ke.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Tt),rippleConfig:{centered:t.hasAttribute(eo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},u=new Ct(c,this._ngZone,r,this._platform,this._injector),l=!c.rippleDisabled;l&&u.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:u,hasSetUpEvents:l}),t.removeAttribute(dn)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var no=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return e})();var Wi=["mat-icon-button",""],Yi=["*"],Zi=new v("MAT_BUTTON_CONFIG");function ro(e){return e==null?void 0:Pt(e)}var mn=(()=>{class e{_elementRef=d(ee);_ngZone=d(N);_animationsDisabled=Et();_config=d(Zi,{optional:!0});_focusMonitor=d(an);_cleanupClick;_renderer=d(qe);_rippleLoader=d(to);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){d(Ze).load(no);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=be({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,o){r&2&&(Lt("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Kn(o.color?"mat-"+o.color:""),Re("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",De],disabled:[2,"disabled","disabled",De],ariaDisabled:[2,"aria-disabled","ariaDisabled",De],disabledInteractive:[2,"disabledInteractive","disabledInteractive",De],tabIndex:[2,"tabIndex","tabIndex",ro],_tabindex:[2,"tabindex","_tabindex",ro]}})}return e})(),Ki=(()=>{class e extends mn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[et],attrs:Wi,ngContentSelectors:Yi,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(tt(),ye(0,"span",0),ve(1),ye(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return e})();var At=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=V({})}return e})();var oo=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=V({imports:[At]})}return e})();var Xi=["matButton",""],Ji=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],qi=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var io=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ol=(()=>{class e extends mn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Qi(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,o=this._appearance?io.get(this._appearance):null,i=io.get(t);o&&r.remove(...o),r.add(...i),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[et],attrs:Xi,ngContentSelectors:qi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,o){r&1&&(tt(Ji),ye(0,"span",0),ve(1),Yn(2,"span",1),ve(3,1),Zn(),ve(4,2),ye(5,"span",2)(6,"span",3)),r&2&&Re("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return e})();function Qi(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var kl=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=V({imports:[oo,At]})}return e})();var ea="draft";function s(e,n=""){return typeof e=="string"?e.trim():n}function $(e){return Array.isArray(e)?e.map(n=>s(n)).filter(Boolean):[]}function fn(e,n=!1){return typeof e=="boolean"?e:n}function ao(e,n=0){return typeof e=="number"&&Number.isFinite(e)?e:n}function pn(e){return e==="published"||e==="archived"||e==="draft"?e:ea}function It(e){let n=s(e);return Number.isNaN(Date.parse(n))?"":n}function hn(e){return $(e).map(n=>n.toLowerCase())}function so(e){let n=s(e?.src),t=s(e?.alt);if(!(!n||!t))return{src:n,alt:t,caption:s(e?.caption)||void 0}}function ta(e){if(!Array.isArray(e))return[];let n=[];for(let t of e)switch(s(t?.type)){case"paragraph":{let o=s(t?.text);o&&n.push({type:"paragraph",text:o});break}case"image":{let o=so(t);o&&n.push(C({type:"image"},o));break}case"callout":{let o=s(t?.text);if(o){let i=s(t?.tone);n.push({type:"callout",title:s(t?.title)||void 0,text:o,tone:i==="neutral"||i==="executive"||i==="technical"||i==="warning"?i:void 0})}break}case"list":{let o=$(t?.items);o.length&&n.push({type:"list",title:s(t?.title)||void 0,items:o});break}case"component":{let o=s(t?.component);o&&n.push({type:"component",component:o,fallback:s(t?.fallback)||void 0});break}default:break}return n}function co(e){if(!Array.isArray(e))return[];let n=[];for(let t of e){let r=s(t?.heading),o=$(t?.paragraphs),i=s(t?.intro)||void 0,a=s(t?.eyebrow)||void 0,c=ta(t?.blocks),u=so(t?.image),l=s(t?.component)||void 0,f=s(t?.fallback)||void 0,g=s(t?.callout)||void 0;!r&&o.length===0&&!i&&!u&&!l&&!g&&c.length===0||n.push({heading:r||"Section",eyebrow:a,intro:i,blocks:c,paragraphs:o,image:u,component:l,fallback:f,callout:g})}return n}function na(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.label),r=s(n?.value);return t&&r?{label:t,value:r}:null}).filter(n=>n!==null):[]}function ra(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.label),r=s(n?.anchor);return t&&r?{label:t,anchor:r}:null}).filter(n=>n!==null):[]}function oa(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.label),r=s(n?.href),o=s(n?.type);return!t||!r?null:{label:t,href:r,description:s(n?.description)||void 0,type:o==="image"||o==="pdf"||o==="data"||o==="schema"||o==="checklist"||o==="link"?o:void 0}}).filter(n=>n!==null):[]}function ia(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.title),r=s(n?.slug);return t&&r?{title:t,slug:r,description:s(n?.description)||void 0}:null}).filter(n=>n!==null):[]}function aa(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.title),r=s(n?.description),o=s(n?.href)||void 0,i=s(n?.anchor)||void 0,a=s(n?.buttonLabel)||void 0;return t&&r?{title:t,description:r,href:o,anchor:i,buttonLabel:a}:null}).filter(n=>n!==null):[]}function gn(e){if(!e||typeof e!="object")return;let n=na(e?.snapshot),t=ra(e?.toc),r=oa(e?.assets),o=ia(e?.related),i=aa(e?.callsToAction);if(!(!n.length&&!t.length&&!r.length&&!o.length&&!i.length))return{snapshot:n.length?n:void 0,toc:t.length?t:void 0,assets:r.length?r:void 0,related:o.length?o:void 0,callsToAction:i.length?i:void 0}}function bn(e,n,t){return{title:s(e?.title,n),description:s(e?.description,t)}}function yn(e){return{version:ao(e?.version,1),updatedOn:It(e?.updatedOn)||new Date().toISOString()}}function vn(e,n){let t=yn(e);return q(C({},t),{eyebrow:s(e?.eyebrow,"cweise.com"),headline:s(e?.headline,n),intro:s(e?.intro)})}function Ft(e){return e==="published"}function Dn(e){return[...e].sort((n,t)=>{let r=Date.parse(t.publishedOn??"")||0,o=Date.parse(n.publishedOn??"")||0;return r-o})}function St(e,n,t){let r=new Map(n.map(c=>[c.slug,c])),o=e.map(c=>r.get(c)).filter(c=>!!c),i=n.filter(c=>c.featured&&!o.some(u=>u.slug===c.slug)),a=[...o,...i];return typeof t=="number"?a.slice(0,t):a}function sa(e){let n=s(e?.id),t=s(e?.title),r=s(e?.description);return!n||!t||!r?null:{id:n,icon:s(e?.icon,"insights"),title:t,description:r}}function ca(e){return{eyebrow:s(e?.eyebrow,"Engineering & Infrastructure"),headline:s(e?.headline,"Operational Intelligence for Complex Organizations"),subheadline:s(e?.subheadline,"Reducing Rework, Risk, and Delivery Gaps"),intro:$(e?.intro),heroImage:s(e?.heroImage,"assets/images/hero-architecture.png"),featuredWritingSlugs:$(e?.featuredWritingSlugs),featuredFrameworkSlugs:$(e?.featuredFrameworkSlugs),featuredInitiativeSlugs:$(e?.featuredInitiativeSlugs),themes:Array.isArray(e?.themes)?e.themes.map(n=>sa(n)).filter(n=>n!==null):[],themesSection:{eyebrow:s(e?.themesSection?.eyebrow,"Core Themes"),headline:s(e?.themesSection?.headline,"Where I Focus"),support:s(e?.themesSection?.support)},writingSection:{eyebrow:s(e?.writingSection?.eyebrow,"Featured Writing"),headline:s(e?.writingSection?.headline,"Recent Essays"),support:s(e?.writingSection?.support)},frameworkSection:{eyebrow:s(e?.frameworkSection?.eyebrow,"Featured Framework"),headline:s(e?.frameworkSection?.headline,"Featured Framework"),support:s(e?.frameworkSection?.support)},initiativesSection:{eyebrow:s(e?.initiativesSection?.eyebrow,"Selected Initiatives"),headline:s(e?.initiativesSection?.headline,"Proof of Execution"),support:s(e?.initiativesSection?.support)},aboutSection:{eyebrow:s(e?.aboutSection?.eyebrow,"About"),headline:s(e?.aboutSection?.headline,"How I Think. What I Do."),support:s(e?.aboutSection?.support)}}}function ua(e){return{primary:Array.isArray(e?.primary)?e.primary.map(n=>({label:s(n?.label),path:s(n?.path)})).filter(n=>n.label&&n.path):[],social:Array.isArray(e?.social)?e.social.map(n=>({label:s(n?.label),url:s(n?.url),icon:s(n?.icon,"link")})).filter(n=>n.label&&n.url):[]}}function da(e){return{featuredLinks:Array.isArray(e?.featuredLinks)?e.featuredLinks.map(n=>({label:s(n?.label),path:s(n?.path)})).filter(n=>n.label&&n.path):[]}}function la(e){return{eyebrow:s(e?.eyebrow,"Stay Connected"),headline:s(e?.headline,"Thoughts on operations, systems, and execution."),intro:s(e?.intro),note:s(e?.note),ctaLabel:s(e?.ctaLabel,"Connect"),ctaUrl:s(e?.ctaUrl,"/connect")}}function _n(e){let n=yn(e?.meta);return{meta:q(C({},n),{siteName:s(e?.meta?.siteName,"cweise.com"),siteUrl:s(e?.meta?.siteUrl,"https://cweise.com"),title:s(e?.meta?.title,"Operational Intelligence for Complex Organizations"),description:s(e?.meta?.description),author:s(e?.meta?.author,"Charles Weise"),footerTagline:s(e?.meta?.footerTagline,"Operational intelligence for complex organizations."),contactEmail:s(e?.meta?.contactEmail,"iweise@me.com")}),home:ca(e?.home),navigation:ua(e?.navigation),footer:da(e?.footer),connect:la(e?.connect)}}function ma(e){let n=s(e?.id),t=s(e?.slug),r=s(e?.title);if(!n||!t||!r)return null;let o=s(e?.summary);return{id:n,slug:t,title:r,summary:o,status:pn(e?.status),publishedOn:It(e?.publishedOn),readTimeMinutes:ao(e?.readTimeMinutes,5),featured:fn(e?.featured),tags:hn(e?.tags),heroImage:s(e?.heroImage)||void 0,seo:bn(e?.seo,r,o),body:{intro:s(e?.body?.intro),sections:co(e?.body?.sections)},companion:gn(e?.companion)}}function uo(e){return{meta:vn(e?.meta,"Writing"),items:Array.isArray(e?.items)?e.items.map(n=>ma(n)).filter(n=>n!==null):[]}}function fa(e){return Array.isArray(e)?e.map(n=>{let t=s(n?.title),r=s(n?.description);return!t||!r?null:{title:t,description:r}}).filter(n=>!!n):[]}function pa(e){let n=s(e?.id),t=s(e?.slug),r=s(e?.title);if(!n||!t||!r)return null;let o=s(e?.summary),i={premise:s(e?.body?.premise),components:fa(e?.body?.components),application:s(e?.body?.application),sections:co(e?.body?.sections)};return{id:n,slug:t,title:r,summary:o,status:pn(e?.status),publishedOn:It(e?.publishedOn),featured:fn(e?.featured),category:s(e?.category),tags:hn(e?.tags),diagramImage:s(e?.diagramImage)||void 0,seo:bn(e?.seo,r,o),body:i,companion:gn(e?.companion)}}function lo(e){return{meta:vn(e?.meta,"Frameworks"),items:Array.isArray(e?.items)?e.items.map(n=>pa(n)).filter(n=>n!==null):[]}}function ha(e){let n=s(e?.id),t=s(e?.slug),r=s(e?.title);if(!n||!t||!r)return null;let o=s(e?.summary),i={context:s(e?.body?.context),challenge:s(e?.body?.challenge),approach:s(e?.body?.approach),outcome:s(e?.body?.outcome),notes:$(e?.body?.notes)};return{id:n,slug:t,title:r,summary:o,status:pn(e?.status),publishedOn:It(e?.publishedOn),featured:fn(e?.featured),domain:s(e?.domain),icon:s(e?.icon)||void 0,tags:hn(e?.tags),thumbnail:s(e?.thumbnail)||void 0,seo:bn(e?.seo,r,o),body:i,companion:gn(e?.companion)}}function mo(e){return{meta:vn(e?.meta,"Initiatives"),items:Array.isArray(e?.items)?e.items.map(n=>ha(n)).filter(n=>n!==null):[]}}function fo(e){let n={headline:s(e?.content?.headline,"How I Think. What I Do."),narrative:$(e?.content?.narrative),principles:$(e?.content?.principles),focusAreas:$(e?.content?.focusAreas),closing:s(e?.content?.closing)};return{meta:yn(e?.meta),content:n}}var po=_n({meta:{version:1,updatedOn:"2026-05-16",siteName:"cweise.com",siteUrl:"https://cweise.com",title:"Operational Intelligence for Complex Organizations",description:"Operational intelligence for engineering and infrastructure organizations.",author:"Charles Weise",footerTagline:"Operational intelligence for complex organizations.",contactEmail:"iweise@me.com"},home:{eyebrow:"Engineering & Infrastructure",headline:"Operational Intelligence for Complex Organizations",subheadline:"Reducing Rework, Risk, and Delivery Gaps",intro:[],heroImage:"assets/images/hero-architecture.png",featuredWritingSlugs:[],featuredFrameworkSlugs:[],featuredInitiativeSlugs:[],themes:[],themesSection:{eyebrow:"Core Themes",headline:"Where I Focus",support:""},writingSection:{eyebrow:"Featured Writing",headline:"Recent Essays",support:""},frameworkSection:{eyebrow:"Featured Framework",headline:"Featured Framework",support:""},initiativesSection:{eyebrow:"Selected Initiatives",headline:"Proof of Execution",support:""},aboutSection:{eyebrow:"About",headline:"How I Think. What I Do.",support:""}},navigation:{primary:[],social:[]},footer:{featuredLinks:[]},connect:{eyebrow:"Stay Connected",headline:"Thoughts on operations, systems, and execution.",intro:"",note:"",ctaLabel:"Connect",ctaUrl:"/connect"}}),ho={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Writing",headline:"Writing",intro:""},items:[]},go={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Frameworks",headline:"Frameworks",intro:""},items:[]},bo={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Initiatives",headline:"Initiatives",intro:""},items:[]},yo={meta:{version:1,updatedOn:"2026-05-16"},content:{headline:"How I Think. What I Do.",narrative:[],principles:[],focusAreas:[],closing:""}};var vo=class e{http=d(vt);siteFile$=this.loadFile("assets/content/site.json",po,_n);writingFile$=this.loadFile("assets/content/writing.json",ho,uo);frameworksFile$=this.loadFile("assets/content/frameworks.json",go,lo);initiativesFile$=this.loadFile("assets/content/initiatives.json",bo,mo);aboutFile$=this.loadFile("assets/content/about.json",yo,fo);getSiteMeta(){return this.siteFile$.pipe(b(n=>n.meta))}getNavigation(){return this.siteFile$.pipe(b(n=>n.navigation))}getFooterContent(){return this.siteFile$.pipe(b(n=>n.footer))}getConnectContent(){return this.siteFile$.pipe(b(n=>n.connect))}getHomeContent(){return Q({site:this.siteFile$,featuredWriting:this.getFeaturedWriting(),featuredFrameworks:this.getFeaturedFrameworks(),featuredInitiatives:this.getFeaturedInitiatives(),about:this.getAboutContent()}).pipe(b(({site:n,featuredWriting:t,featuredFrameworks:r,featuredInitiatives:o,about:i})=>({meta:n.meta,navigation:n.navigation,footer:n.footer,connect:n.connect,home:n.home,featuredWriting:t,featuredFrameworks:r,featuredInitiatives:o,about:i})))}getWritingPage(){return Q({meta:this.writingFile$.pipe(b(n=>n.meta)),items:this.getWritingIndex()}).pipe(b(({meta:n,items:t})=>({meta:n,items:t})))}getWritingIndex(){return this.writingFile$.pipe(b(n=>n.items.filter(t=>Ft(t.status))),b(n=>Dn(n)))}getWritingBySlug(n){return this.getWritingIndex().pipe(b(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedWriting(n){return Q([this.siteFile$,this.getWritingIndex()]).pipe(b(([t,r])=>St(t.home.featuredWritingSlugs,r,n)))}getFrameworksPage(){return Q({meta:this.frameworksFile$.pipe(b(n=>n.meta)),items:this.getFrameworksIndex()}).pipe(b(({meta:n,items:t})=>({meta:n,items:t})))}getFrameworksIndex(){return this.frameworksFile$.pipe(b(n=>n.items.filter(t=>Ft(t.status))),b(n=>Dn(n)))}getFrameworkBySlug(n){return this.getFrameworksIndex().pipe(b(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedFrameworks(n){return Q([this.siteFile$,this.getFrameworksIndex()]).pipe(b(([t,r])=>St(t.home.featuredFrameworkSlugs,r,n)))}getInitiativesPage(){return Q({meta:this.initiativesFile$.pipe(b(n=>n.meta)),items:this.getInitiativesIndex()}).pipe(b(({meta:n,items:t})=>({meta:n,items:t})))}getInitiativesIndex(){return this.initiativesFile$.pipe(b(n=>n.items.filter(t=>Ft(t.status))))}getInitiativeBySlug(n){return this.getInitiativesIndex().pipe(b(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedInitiatives(n){return Q([this.siteFile$,this.getInitiativesIndex()]).pipe(b(([t,r])=>St(t.home.featuredInitiativeSlugs,r,n)))}getAboutContent(){return this.aboutFile$.pipe(b(n=>n.content))}loadFile(n,t,r){return this.http.get(n).pipe(b(o=>r(o)),Tn(o=>(console.error(`Content file failed to load: ${n}`,o),ae(t))),Sn({bufferSize:1,refCount:!0}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};export{nt as a,ir as b,zo as c,tc as d,Xt as e,ai as f,vt as g,Ri as h,Ru as i,Oi as j,Vu as k,J as l,Ed as m,Ki as n,At as o,Ol as p,kl as q,vo as r};
