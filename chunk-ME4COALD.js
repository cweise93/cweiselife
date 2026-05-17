import{$a as Nt,A as Fn,Aa as Vn,Ba as ce,E as In,F as Sn,Ga as he,H as Mn,Ha as Hn,I as xn,Ia as Je,K as b,L as Se,La as ge,Lb as Kn,M as m,Ma as qe,N as $,Na as Qe,Nb as Xn,P as y,Q as p,R as d,S as St,Sa as te,Sb as Jn,T as Rn,Ta as H,Tb as De,U as Me,Ua as be,Ub as Lt,V as On,Va as Gn,Vb as qn,Wa as et,Y as V,Z as E,_ as xe,_a as kt,a as C,b as q,ba as N,ca as Mt,ea as xt,f as _n,g as Ie,ga as Rt,h as wn,k as ae,ka as ee,kb as Wn,la as kn,lb as Yn,ma as Ot,mb as ye,na as Nn,o as g,oa as me,ob as L,p as Q,pa as Ln,pb as F,qa as fe,ra as Xe,sa as se,sb as tt,ta as pe,tb as ve,ua as Pn,v as En,va as Bn,w as Cn,wa as jn,x as Tn,xa as Un,ya as zn,yb as Re,z as An,za as $n,zb as Zn}from"./chunk-SWVB6PWJ.js";var Qn=null;function Y(){return Qn}function Pt(e){Qn??=e}var Oe=class{},_e=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>d(er),providedIn:"platform"})}return e})();var er=(()=>{class e extends _e{_location;_history;_doc=d(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Y().getBaseHref(this._doc)}onPopState(t){let r=Y().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Y().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function rr(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function tr(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function ne(e){return e&&e[0]!=="?"?`?${e}`:e}var nt=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:()=>d(yi),providedIn:"root"})}return e})(),bi=new y(""),yi=(()=>{class e extends nt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??d(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return rr(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+ne(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let a=this.prepareExternalUrl(i+ne(o));this._platformLocation.pushState(t,r,a)}replaceState(t,r,i,o){let a=this.prepareExternalUrl(i+ne(o));this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(p(_e),p(bi,8))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ir=(()=>{class e{_subject=new Ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=_i(tr(nr(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+ne(r))}normalize(t){return e.stripTrailingSlash(Di(this._basePath,nr(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ne(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ne(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=ne;static joinWithSlash=rr;static stripTrailingSlash=tr;static \u0275fac=function(r){return new(r||e)(p(nt))};static \u0275prov=m({token:e,factory:()=>vi(),providedIn:"root"})}return e})();function vi(){return new ir(p(nt))}function Di(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function nr(e){return e.replace(/\/index.html$/,"")}function _i(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var M=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(M||{}),D=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(D||{}),O=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(O||{}),K={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ar(e){return L(e)[F.LocaleId]}function sr(e,n,t){let r=L(e),i=[r[F.DayPeriodsFormat],r[F.DayPeriodsStandalone]],o=P(i,n);return P(o,t)}function cr(e,n,t){let r=L(e),i=[r[F.DaysFormat],r[F.DaysStandalone]],o=P(i,n);return P(o,t)}function ur(e,n,t){let r=L(e),i=[r[F.MonthsFormat],r[F.MonthsStandalone]],o=P(i,n);return P(o,t)}function dr(e,n){let r=L(e)[F.Eras];return P(r,n)}function ke(e,n){let t=L(e);return P(t[F.DateFormat],n)}function Ne(e,n){let t=L(e);return P(t[F.TimeFormat],n)}function Le(e,n){let r=L(e)[F.DateTimeFormat];return P(r,n)}function Pe(e,n){let t=L(e),r=t[F.NumberSymbols][n];if(typeof r>"u"){if(n===K.CurrencyDecimal)return t[F.NumberSymbols][K.Decimal];if(n===K.CurrencyGroup)return t[F.NumberSymbols][K.Group]}return r}function lr(e){if(!e[F.ExtraData])throw new b(2303,!1)}function mr(e){let n=L(e);return lr(n),(n[F.ExtraData][2]||[]).map(r=>typeof r=="string"?Bt(r):[Bt(r[0]),Bt(r[1])])}function fr(e,n,t){let r=L(e);lr(r);let i=[r[F.ExtraData][0],r[F.ExtraData][1]],o=P(i,n)||[];return P(o,t)||[]}function P(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new b(2304,!1)}function Bt(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var Ci=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,rt={},Ti=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function pr(e,n,t,r){let i=ki(e);n=Z(t,n)||n;let a=[],s;for(;n;)if(s=Ti.exec(n),s){a=a.concat(s.slice(1));let f=a.pop();if(!f)break;n=f}else{a.push(n);break}let u=i.getTimezoneOffset();r&&(u=gr(r,u),i=Oi(i,r));let l="";return a.forEach(f=>{let v=xi(f);l+=v?v(i,t,u):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function ct(e,n,t){let r=new Date(0);return r.setFullYear(e,n,t),r.setHours(0,0,0),r}function Z(e,n){let t=ar(e);if(rt[t]??={},rt[t][n])return rt[t][n];let r="";switch(n){case"shortDate":r=ke(e,O.Short);break;case"mediumDate":r=ke(e,O.Medium);break;case"longDate":r=ke(e,O.Long);break;case"fullDate":r=ke(e,O.Full);break;case"shortTime":r=Ne(e,O.Short);break;case"mediumTime":r=Ne(e,O.Medium);break;case"longTime":r=Ne(e,O.Long);break;case"fullTime":r=Ne(e,O.Full);break;case"short":let i=Z(e,"shortTime"),o=Z(e,"shortDate");r=it(Le(e,O.Short),[i,o]);break;case"medium":let a=Z(e,"mediumTime"),s=Z(e,"mediumDate");r=it(Le(e,O.Medium),[a,s]);break;case"long":let u=Z(e,"longTime"),l=Z(e,"longDate");r=it(Le(e,O.Long),[u,l]);break;case"full":let f=Z(e,"fullTime"),v=Z(e,"fullDate");r=it(Le(e,O.Full),[f,v]);break}return r&&(rt[t][n]=r),r}function it(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,r){return n!=null&&r in n?n[r]:t})),e}function U(e,n,t="-",r,i){let o="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,o=t));let a=String(e);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),o+a}function Ai(e,n){return U(e,3).substring(0,n)}function T(e,n,t=0,r=!1,i=!1){return function(o,a){let s=Fi(e,o);if((t>0||s>-t)&&(s+=t),e===3)s===0&&t===-12&&(s=12);else if(e===6)return Ai(s,n);let u=Pe(a,K.MinusSign);return U(s,n,u,r,i)}}function Fi(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new b(2301,!1)}}function w(e,n,t=M.Format,r=!1){return function(i,o){return Ii(i,o,e,n,t,r)}}function Ii(e,n,t,r,i,o){switch(t){case 2:return ur(n,i,r)[e.getMonth()];case 1:return cr(n,i,r)[e.getDay()];case 0:let a=e.getHours(),s=e.getMinutes();if(o){let l=mr(n),f=fr(n,i,r),v=l.findIndex(A=>{if(Array.isArray(A)){let[j,k]=A,x=a>=j.hours&&s>=j.minutes,h=a<k.hours||a===k.hours&&s<k.minutes;if(j.hours<k.hours){if(x&&h)return!0}else if(x||h)return!0}else if(A.hours===a&&A.minutes===s)return!0;return!1});if(v!==-1)return f[v]}return sr(n,i,r)[a<12?0:1];case 3:return dr(n,r)[e.getFullYear()<=0?0:1];default:let u=t;throw new b(2302,!1)}}function ot(e){return function(n,t,r){let i=-1*r,o=Pe(t,K.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+U(a,2,o)+U(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+U(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+U(a,2,o)+":"+U(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+U(a,2,o)+":"+U(Math.abs(i%60),2,o);default:throw new b(2310,!1)}}}var Si=0,st=4;function Mi(e){let n=ct(e,Si,1).getDay();return ct(e,0,1+(n<=st?st:st+7)-n)}function hr(e){let n=e.getDay(),t=n===0?-3:st-n;return ct(e.getFullYear(),e.getMonth(),e.getDate()+t)}function jt(e,n=!1){return function(t,r){let i;if(n){let o=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,a=t.getDate();i=1+Math.floor((a+o)/7)}else{let o=hr(t),a=Mi(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return U(i,e,Pe(r,K.MinusSign))}}function at(e,n=!1){return function(t,r){let o=hr(t).getFullYear();return U(o,e,Pe(r,K.MinusSign),n)}}var Ut={};function xi(e){if(Ut[e])return Ut[e];let n;switch(e){case"G":case"GG":case"GGG":n=w(3,D.Abbreviated);break;case"GGGG":n=w(3,D.Wide);break;case"GGGGG":n=w(3,D.Narrow);break;case"y":n=T(0,1,0,!1,!0);break;case"yy":n=T(0,2,0,!0,!0);break;case"yyy":n=T(0,3,0,!1,!0);break;case"yyyy":n=T(0,4,0,!1,!0);break;case"Y":n=at(1);break;case"YY":n=at(2,!0);break;case"YYY":n=at(3);break;case"YYYY":n=at(4);break;case"M":case"L":n=T(1,1,1);break;case"MM":case"LL":n=T(1,2,1);break;case"MMM":n=w(2,D.Abbreviated);break;case"MMMM":n=w(2,D.Wide);break;case"MMMMM":n=w(2,D.Narrow);break;case"LLL":n=w(2,D.Abbreviated,M.Standalone);break;case"LLLL":n=w(2,D.Wide,M.Standalone);break;case"LLLLL":n=w(2,D.Narrow,M.Standalone);break;case"w":n=jt(1);break;case"ww":n=jt(2);break;case"W":n=jt(1,!0);break;case"d":n=T(2,1);break;case"dd":n=T(2,2);break;case"c":case"cc":n=T(7,1);break;case"ccc":n=w(1,D.Abbreviated,M.Standalone);break;case"cccc":n=w(1,D.Wide,M.Standalone);break;case"ccccc":n=w(1,D.Narrow,M.Standalone);break;case"cccccc":n=w(1,D.Short,M.Standalone);break;case"E":case"EE":case"EEE":n=w(1,D.Abbreviated);break;case"EEEE":n=w(1,D.Wide);break;case"EEEEE":n=w(1,D.Narrow);break;case"EEEEEE":n=w(1,D.Short);break;case"a":case"aa":case"aaa":n=w(0,D.Abbreviated);break;case"aaaa":n=w(0,D.Wide);break;case"aaaaa":n=w(0,D.Narrow);break;case"b":case"bb":case"bbb":n=w(0,D.Abbreviated,M.Standalone,!0);break;case"bbbb":n=w(0,D.Wide,M.Standalone,!0);break;case"bbbbb":n=w(0,D.Narrow,M.Standalone,!0);break;case"B":case"BB":case"BBB":n=w(0,D.Abbreviated,M.Format,!0);break;case"BBBB":n=w(0,D.Wide,M.Format,!0);break;case"BBBBB":n=w(0,D.Narrow,M.Format,!0);break;case"h":n=T(3,1,-12);break;case"hh":n=T(3,2,-12);break;case"H":n=T(3,1);break;case"HH":n=T(3,2);break;case"m":n=T(4,1);break;case"mm":n=T(4,2);break;case"s":n=T(5,1);break;case"ss":n=T(5,2);break;case"S":n=T(6,1);break;case"SS":n=T(6,2);break;case"SSS":n=T(6,3);break;case"Z":case"ZZ":case"ZZZ":n=ot(0);break;case"ZZZZZ":n=ot(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=ot(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=ot(2);break;default:return null}return Ut[e]=n,n}function gr(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function Ri(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function Oi(e,n,t){let i=e.getTimezoneOffset(),o=gr(n,i);return Ri(e,-1*(o-i))}function ki(e){if(or(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,o=1,a=1]=e.split("-").map(s=>+s);return ct(i,o-1,a)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let r;if(r=e.match(Ci))return Ni(r)}let n=new Date(e);if(!or(n))throw new b(2311,!1);return n}function Ni(e){let n=new Date(0),t=0,r=0,i=e[8]?n.setUTCFullYear:n.setFullYear,o=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),r=Number(e[9]+e[11])),i.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-t,s=Number(e[5]||0)-r,u=Number(e[6]||0),l=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return o.call(n,a,s,u,l),n}function or(e){return e instanceof Date&&!isNaN(e.valueOf())}function Li(e,n){return new b(2100,!1)}var Pi="mediumDate",br=new y(""),yr=new y(""),Bi=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,r,i){this.locale=t,this.defaultTimezone=r,this.defaultOptions=i}transform(t,r,i,o){if(t==null||t===""||t!==t)return null;try{let a=r??this.defaultOptions?.dateFormat??Pi,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return pr(t,a,o||this.locale,s)}catch(a){throw Li(e,a.message)}}static \u0275fac=function(r){return new(r||e)(Qe(Kn,16),Qe(br,24),Qe(yr,24))};static \u0275pipe=Gn({name:"date",type:e,pure:!0})}return e})();function Be(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var ue=class{};var $t="browser";function vr(e){return e===$t}var Ys=(()=>{class e{static \u0275prov=m({token:e,providedIn:"root",factory:()=>new zt(d(E),window)})}return e})(),zt=class{document;window;offset=()=>[0,0];constructor(n,t){this.document=n,this.window=t}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,t){this.window.scrollTo(q(C({},t),{left:n[0],top:n[1]}))}scrollToAnchor(n,t){let r=Vi(this.document,n);r&&(this.scrollToElement(r,t),r.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Se(2400,!1))}}scrollToElement(n,t){let r=n.getBoundingClientRect(),i=r.left+this.window.pageXOffset,o=r.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(q(C({},t),{left:i-a[0],top:o-a[1]}))}};function Vi(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}i=r.nextNode()}}return null}var je=class{_doc;constructor(n){this._doc=n}manager},ut=(()=>{class e extends je{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),mt=new y(""),Wt=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(a=>{a.manager=this});let i=t.filter(a=>!(a instanceof ut));this._plugins=i.slice().reverse();let o=t.find(a=>a instanceof ut);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new b(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(p(mt),p(N))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Vt="ng-app-id";function Dr(e){for(let n of e)n.remove()}function _r(e,n){let t=n.createElement("style");return t.textContent=e,t}function Hi(e,n,t,r){let i=e.head?.querySelectorAll(`style[${Vt}="${n}"],link[${Vt}="${n}"]`);if(i)for(let o of i)o.removeAttribute(Vt),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Gt(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Yt=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,Hi(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,_r);r?.forEach(i=>this.addUsage(i,this.external,Gt))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(Dr(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Dr(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,_r(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,Gt(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(p(E),p(Ot),p(fe,8),p(me))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ht={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zt=/%COMP%/g;var Er="%COMP%",Gi=`_nghost-${Er}`,Wi=`_ngcontent-${Er}`,Yi=!0,Zi=new y("",{factory:()=>Yi});function Ki(e){return Wi.replace(Zt,e)}function Xi(e){return Gi.replace(Zt,e)}function Cr(e,n){return n.map(t=>t.replace(Zt,e))}var Kt=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,r,i,o,a,s,u=null,l=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=u,this.tracingService=l,this.defaultRenderer=new Ue(t,a,s,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof lt?i.applyToHost(t):i instanceof ze&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,s=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,v=this.tracingService;switch(r.encapsulation){case Xe.Emulated:o=new lt(u,l,r,this.appId,f,a,s,v);break;case Xe.ShadowDom:return new dt(u,t,r,a,s,this.nonce,v,l);case Xe.ExperimentalIsolatedShadowDom:return new dt(u,t,r,a,s,this.nonce,v);default:o=new ze(u,l,r,f,a,s,v);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(p(Wt),p(Yt),p(Ot),p(Zi),p(E),p(N),p(fe),p(Je,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ue=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,i){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Ht[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(wr(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(wr(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new b(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,i){if(i){t=i+":"+t;let o=Ht[i];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let i=Ht[r];i?n.removeAttributeNS(i,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,i){i&(he.DashCase|he.Important)?n.style.setProperty(t,r,i&he.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&he.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,i){if(typeof n=="string"&&(n=Y().getGlobalEventTarget(this.doc,n),!n))throw new b(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,t,o)),this.eventManager.addEventListener(n,t,o,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function wr(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var dt=class extends Ue{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,i,o,a,s,u){super(n,i,o,s),this.hostEl=t,this.sharedStylesHost=u,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=r.styles;l=Cr(r.id,l);for(let v of l){let A=document.createElement("style");a&&A.setAttribute("nonce",a),A.textContent=v,this.shadowRoot.appendChild(A)}let f=r.getExternalStyles?.();if(f)for(let v of f){let A=Gt(v,i);a&&A.setAttribute("nonce",a),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ze=class extends Ue{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,i,o,a,s,u){super(n,o,a,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let l=r.styles;this.styles=u?Cr(u,l):l,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},lt=class extends ze{contentAttr;hostAttr;constructor(n,t,r,i,o,a,s,u){let l=i+"-"+r.id;super(n,t,r,o,a,s,u,l),this.contentAttr=Ki(l),this.hostAttr=Xi(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var ft=class e extends Oe{supportsDOMEvents=!0;static makeCurrent(){Pt(new e)}onAndCancel(n,t,r,i){return n.addEventListener(t,r,i),()=>{n.removeEventListener(t,r,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=qi();return t==null?null:Qi(t)}resetBaseElement(){$e=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Be(document.cookie,n)}},$e=null;function qi(){return $e=$e||document.head.querySelector("base"),$e?$e.getAttribute("href"):null}function Qi(e){return new URL(e,document.baseURI).pathname}var eo=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Tr=["alt","control","meta","shift"],to={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},no={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ar=(()=>{class e extends je{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,i,o){let a=e.parseEventName(r),s=e.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Y().onAndCancel(t,a.domEventName,s,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),a="code."),Tr.forEach(l=>{let f=r.indexOf(l);f>-1&&(r.splice(f,1),a+=l+".")}),a+=o,r.length!=0||o.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(t,r){let i=to[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Tr.forEach(a=>{if(a!==i){let s=no[a];s(t)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{e.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();async function ro(e,n,t){let r=C({rootComponent:e},io(n,t));return Jn(r)}function io(e,n){return{platformRef:n?.platformRef,appProviders:[...uo,...e?.providers??[]],platformProviders:co}}function oo(){ft.makeCurrent()}function ao(){return new Mt}function so(){return kn(document),document}var co=[{provide:me,useValue:$t},{provide:Nn,useValue:oo,multi:!0},{provide:E,useFactory:so}];var uo=[{provide:Rn,useValue:"root"},{provide:Mt,useFactory:ao},{provide:mt,useClass:ut,multi:!0},{provide:mt,useClass:Ar,multi:!0},Kt,Yt,Wt,{provide:ge,useExisting:Kt},{provide:ue,useClass:eo},[]];var re=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=(n.op==="a"?this.headers.get(t):void 0)||[];i.push(...r),this.headers.set(t,i);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var ht=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},gt=class{encodeKey(n){return Fr(n)}encodeValue(n){return Fr(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function lo(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],u=t.get(a)||[];u.push(s),t.set(a,u)}),t}var mo=/%(\d[a-f0-9])/gi,fo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Fr(e){return encodeURIComponent(e).replace(mo,(n,t)=>fo[t]??n)}function pt(e){return`${e}`}var X=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new gt,n.fromString){if(n.fromObject)throw new b(2805,!1);this.map=lo(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(pt):[pt(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(pt(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(pt(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function po(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ir(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Sr(e){return typeof Blob<"u"&&e instanceof Blob}function Mr(e){return typeof FormData<"u"&&e instanceof FormData}function ho(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var xr="Content-Type",Rr="Accept",Or="text/plain",kr="application/json",go=`${kr}, ${Or}, */*`,we=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,i){this.url=t,this.method=n.toUpperCase();let o;if(po(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new re,this.context??=new ht,!this.params)this.params=new X,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t.indexOf("?"),u=s===-1?"?":s<t.length-1?"&":"";this.urlWithParams=t+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ir(this.body)||Sr(this.body)||Mr(this.body)||ho(this.body)?this.body:this.body instanceof X?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Mr(this.body)?null:Sr(this.body)?this.body.type||null:Ir(this.body)?null:typeof this.body=="string"?Or:this.body instanceof X?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?kr:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,u=n.mode||this.mode,l=n.redirect||this.redirect,f=n.credentials||this.credentials,v=n.referrer||this.referrer,A=n.integrity||this.integrity,j=n.referrerPolicy||this.referrerPolicy,k=n.transferCache??this.transferCache,x=n.timeout??this.timeout,h=n.body!==void 0?n.body:this.body,_=n.withCredentials??this.withCredentials,R=n.reportProgress??this.reportProgress,W=n.headers||this.headers,I=n.params||this.params,Ae=n.context??this.context;return n.setHeaders!==void 0&&(W=Object.keys(n.setHeaders).reduce((Fe,oe)=>Fe.set(oe,n.setHeaders[oe]),W)),n.setParams&&(I=Object.keys(n.setParams).reduce((Fe,oe)=>Fe.set(oe,n.setParams[oe]),I)),new e(t,r,h,{params:I,headers:W,context:Ae,reportProgress:R,responseType:i,withCredentials:_,transferCache:k,keepalive:o,cache:s,priority:a,timeout:x,mode:u,redirect:l,credentials:f,referrer:v,integrity:A,referrerPolicy:j})}},de=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(de||{}),Ce=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new re,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},bt=class e extends Ce{constructor(n={}){super(n)}type=de.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ve=class e extends Ce{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=de.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ee=class extends Ce{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},bo=200,yo=204;var vo=new y("");var Do=/^\)\]\}',?\n/;var Jt=(()=>{class e{xhrFactory;tracingService=d(Je,{optional:!0});constructor(t){this.xhrFactory=t}maybePropagateTrace(t){return this.tracingService?.propagate?this.tracingService.propagate(t):t}handle(t){if(t.method==="JSONP")throw new b(-2800,!1);let r=this.xhrFactory;return ae(null).pipe(Mn(()=>new _n(o=>{let a=r.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((h,_)=>a.setRequestHeader(h,_.join(","))),t.headers.has(Rr)||a.setRequestHeader(Rr,go),!t.headers.has(xr)){let h=t.detectContentTypeHeader();h!==null&&a.setRequestHeader(xr,h)}if(t.timeout&&(a.timeout=t.timeout),t.responseType){let h=t.responseType.toLowerCase();a.responseType=h!=="json"?h:"text"}let s=t.serializeBody(),u=null,l=()=>{if(u!==null)return u;let h=a.statusText||"OK",_=new re(a.getAllResponseHeaders()),R=a.responseURL||t.url;return u=new bt({headers:_,status:a.status,statusText:h,url:R}),u},f=this.maybePropagateTrace(()=>{let{headers:h,status:_,statusText:R,url:W}=l(),I=null;_!==yo&&(I=typeof a.response>"u"?a.responseText:a.response),_===0&&(_=I?bo:0);let Ae=_>=200&&_<300;if(t.responseType==="json"&&typeof I=="string"){let Fe=I;I=I.replace(Do,"");try{I=I!==""?JSON.parse(I):null}catch(oe){I=Fe,Ae&&(Ae=!1,I={error:oe,text:I})}}Ae?(o.next(new Ve({body:I,headers:h,status:_,statusText:R,url:W||void 0})),o.complete()):o.error(new Ee({error:I,headers:h,status:_,statusText:R,url:W||void 0}))}),v=this.maybePropagateTrace(h=>{let{url:_}=l(),R=new Ee({error:h,status:a.status||0,statusText:a.statusText||"Unknown Error",url:_||void 0});o.error(R)}),A=v;t.timeout&&(A=this.maybePropagateTrace(h=>{let{url:_}=l(),R=new Ee({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:_||void 0});o.error(R)}));let j=!1,k=this.maybePropagateTrace(h=>{j||(o.next(l()),j=!0);let _={type:de.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(_.total=h.total),t.responseType==="text"&&a.responseText&&(_.partialText=a.responseText),o.next(_)}),x=this.maybePropagateTrace(h=>{let _={type:de.UploadProgress,loaded:h.loaded};h.lengthComputable&&(_.total=h.total),o.next(_)});return a.addEventListener("load",f),a.addEventListener("error",v),a.addEventListener("timeout",A),a.addEventListener("abort",v),t.reportProgress&&(a.addEventListener("progress",k),s!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(s),o.next({type:de.Sent}),()=>{a.removeEventListener("error",v),a.removeEventListener("abort",v),a.removeEventListener("load",f),a.removeEventListener("timeout",A),t.reportProgress&&(a.removeEventListener("progress",k),s!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||e)(p(ue))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function _o(e,n){return n(e)}function wo(e,n,t){return(r,i)=>On(t,()=>n(r,o=>e(o,i)))}var Nr=new y("",{factory:()=>[]}),Lr=new y(""),Pr=new y("",{factory:()=>!0});var qt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=p(Jt),i},providedIn:"root"})}return e})();var yt=(()=>{class e{backend;injector;chain=null;pendingTasks=d(Rt);contributeToStability=d(Pr);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Nr),...this.injector.get(Lr,[])]));this.chain=r.reduceRight((i,o)=>wo(i,o,this.injector),_o)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,i=>this.backend.handle(i)).pipe(Fn(r))}else return this.chain(t,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(p(qt),p(Me))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=p(yt),i},providedIn:"root"})}return e})();function Xt(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var vt=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof we)o=t;else{let u;i.headers instanceof re?u=i.headers:u=new re(i.headers);let l;i.params&&(i.params instanceof X?l=i.params:l=new X({fromObject:i.params})),o=new we(t,r,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=ae(o).pipe(Tn(u=>this.handler.handle(u)));if(t instanceof we||i.observe==="events")return a;let s=a.pipe(En(u=>u instanceof Ve));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(g(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new b(2806,!1);return u.body}));case"blob":return s.pipe(g(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new b(2807,!1);return u.body}));case"text":return s.pipe(g(u=>{if(u.body!==null&&typeof u.body!="string")throw new b(2808,!1);return u.body}));default:return s.pipe(g(u=>u.body))}case"response":return s;default:throw new b(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new X().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,Xt(i,r))}post(t,r,i={}){return this.request("POST",t,Xt(i,r))}put(t,r,i={}){return this.request("PUT",t,Xt(i,r))}static \u0275fac=function(r){return new(r||e)(p(Qt))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Eo=new y("",{factory:()=>!0}),Co="XSRF-TOKEN",To=new y("",{factory:()=>Co}),Ao="X-XSRF-TOKEN",Fo=new y("",{factory:()=>Ao}),Io=(()=>{class e{cookieName=d(To);doc=d(E);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Be(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Br=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=p(Io),i},providedIn:"root"})}return e})();function So(e,n){if(!d(Eo)||e.method==="GET"||e.method==="HEAD")return n(e);try{let i=d(_e).href,{origin:o}=new URL(i),{origin:a}=new URL(e.url,o);if(o!==a)return n(e)}catch{return n(e)}let t=d(Br).getToken(),r=d(Fo);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function Mo(...e){let n=[vt,yt,{provide:Qt,useExisting:yt},{provide:qt,useFactory:()=>d(vo,{optional:!0})??d(Jt)},{provide:Nr,useValue:So,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return St(n)}var Cu=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var xo=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=p(Ro),i},providedIn:"root"})}return e})(),Ro=(()=>{class e extends xo{_doc;constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case ce.NONE:return r;case ce.HTML:return pe(r,"HTML")?se(r):Vn(this._doc,String(r)).toString();case ce.STYLE:return pe(r,"Style")?se(r):r;case ce.SCRIPT:if(pe(r,"Script"))return se(r);throw new b(5200,!1);case ce.URL:return pe(r,"URL")?se(r):$n(String(r));case ce.RESOURCE_URL:if(pe(r,"ResourceURL"))return se(r);throw new b(5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(t){return Pn(t)}bypassSecurityTrustStyle(t){return Bn(t)}bypassSecurityTrustScript(t){return jn(t)}bypassSecurityTrustUrl(t){return Un(t)}bypassSecurityTrustResourceUrl(t){return zn(t)}static \u0275fac=function(r){return new(r||e)(p(E))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Nu(e,n){let r=!n?.manualCleanup?n?.injector?.get(xe)??d(xe):null,i=Oo(n?.equal),o;n?.requireSync?o=xt({kind:0},{equal:i}):o=xt({kind:1,value:n?.initialValue},{equal:i});let a,s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{o.set({kind:2,error:u}),a?.()},complete:()=>{a?.()}});if(n?.requireSync&&o().kind===0)throw new b(601,!1);return a=r?.onDestroy(s.unsubscribe.bind(s)),Xn(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new b(601,!1)}},{equal:n?.equal})}function Oo(e=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&e(n.value,t.value)}function He(e){return e.buttons===0||e.detail===0}function Ge(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var en;function jr(){if(en==null){let e=typeof document<"u"?document.head:null;en=!!(e&&(e.createShadowRoot||e.attachShadow))}return en}function tn(e){if(jr()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function z(e){return e.composedPath?e.composedPath()[0]:e.target}var nn;try{nn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{nn=!1}var J=(()=>{class e{_platformId=d(me);isBrowser=this._platformId?vr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||nn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var We;function Ur(){if(We==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>We=!0}))}finally{We=We||!1}return We}function Te(e){return Ur()?e:!!e.capture}function ie(e){return e instanceof ee?e.nativeElement:e}var zr=new y("cdk-input-modality-detector-options"),$r={ignoreKeys:[18,17,224,91,16]},Vr=650,rn={passive:!0,capture:!0},Hr=(()=>{class e{_platform=d(J);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new wn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=z(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Vr||(this._modality.next(He(t)?"keyboard":"mouse"),this._mostRecentTarget=z(t))};_onTouchstart=t=>{if(Ge(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=z(t)};constructor(){let t=d(N),r=d(E),i=d(zr,{optional:!0});if(this._options=C(C({},$r),i),this.modalityDetected=this._modality.pipe(Sn(1)),this.modalityChanged=this.modalityDetected.pipe(An()),this._platform.isBrowser){let o=d(ge).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,rn),o.listen(r,"mousedown",this._onMousedown,rn),o.listen(r,"touchstart",this._onTouchstart,rn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ye=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(Ye||{}),Gr=new y("cdk-focus-monitor-default-options"),Dt=Te({passive:!0,capture:!0}),on=(()=>{class e{_ngZone=d(N);_platform=d(J);_inputModalityDetector=d(Hr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(E);_stopInputModalityDetector=new Ie;constructor(){let t=d(Gr,{optional:!0});this._detectionMode=t?.detectionMode||Ye.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=z(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=ie(t);if(!this._platform.isBrowser||i.nodeType!==1)return ae();let o=tn(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new Ie,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let r=ie(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=ie(t),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,u])=>this._originChanged(s,r,u)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Ye.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===Ye.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Vr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=z(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Dt)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(xn(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Dt),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var _t=new WeakMap,Ze=(()=>{class e{_appRef;_injector=d(V);_environmentInjector=d(Me);load(t){let r=this._appRef=this._appRef||this._injector.get(kt),i=_t.get(r);i||(i={loaders:new Set,refs:[]},_t.set(r,i),r.onDestroy(()=>{_t.get(r)?.refs.forEach(o=>o.destroy()),_t.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(qn(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var wt;function ko(){if(wt===void 0&&(wt=null,typeof window<"u")){let e=window;e.trustedTypes!==void 0&&(wt=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return wt}function hd(e){return ko()?.createHTML(e)||e}var Wr=new Set,le,an=(()=>{class e{_platform=d(J);_nonce=d(fe,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Lo}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&No(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function No(e,n){if(!Wr.has(e))try{le||(le=document.createElement("style"),n&&le.setAttribute("nonce",n),le.setAttribute("type","text/css"),document.head.appendChild(le)),le.sheet&&(le.sheet.insertRule(`@media ${e} {body{ }}`,0),Wr.add(e))}catch(t){console.error(t)}}function Lo(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Po=new y("MATERIAL_ANIMATIONS"),Yr=null;function Bo(){return d(Po,{optional:!0})?.animationsDisabled||d(Ln,{optional:!0})==="NoopAnimations"?"di-disabled":(Yr??=d(an).matchMedia("(prefers-reduced-motion)").matches,Yr?"reduced-motion":"enabled")}function Et(){return Bo()!=="enabled"}var B=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(B||{}),sn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=B.HIDDEN;constructor(n,t,r,i=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Zr=Te({passive:!0,capture:!0}),cn=class{_events=new Map;addHandler(n,t,r,i){let o=this._events.get(t);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Zr)})}removeHandler(n,t,r){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Zr)))}_delegateEventHandler=n=>{let t=z(n);t&&this._events.get(n.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(n))})}},Ke={enterDuration:225,exitDuration:150},jo=800,Kr=Te({passive:!0,capture:!0}),Xr=["mousedown","touchstart"],Jr=["mouseup","mouseleave","touchend","touchcancel"],Uo=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return e})(),Ct=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cn;constructor(n,t,r,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=ie(r)),o&&o.get(Ze).load(Uo)}fadeInRipple(n,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},Ke),r.animation);r.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let a=r.radius||zo(n,t,i),s=n-i.left,u=t-i.top,l=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,r.color!=null&&(f.style.backgroundColor=r.color),f.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(f);let v=window.getComputedStyle(f),A=v.transitionProperty,j=v.transitionDuration,k=A==="none"||j==="0s"||j==="0s, 0s"||i.width===0&&i.height===0,x=new sn(this,f,r,k);f.style.transform="scale3d(1, 1, 1)",x.state=B.FADING_IN,r.persistent||(this._mostRecentTransientRipple=x);let h=null;return!k&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _=()=>{h&&(h.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(x)},R=()=>this._destroyRipple(x),W=setTimeout(R,l+100);f.addEventListener("transitionend",_),f.addEventListener("transitioncancel",R),h={onTransitionEnd:_,onTransitionCancel:R,fallbackTimer:W}}),this._activeRipples.set(x,h),(k||!l)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===B.FADING_OUT||n.state===B.HIDDEN)return;let t=n.element,r=C(C({},Ke),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=B.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=ie(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Xr.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Jr.forEach(t=>{this._triggerElement.addEventListener(t,this,Kr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===B.FADING_IN?this._startFadeOutTransition(n):n.state===B.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=B.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=B.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=He(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+jo;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ge(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===B.VISIBLE||n.config.terminateOnPointerUp&&n.state===B.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Xr.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Jr.forEach(t=>n.removeEventListener(t,this,Kr)),this._pointerUpEventsRegistered=!1))}};function zo(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+i*i)}var qr=new y("mat-ripple-global-options");var $o={capture:!0},Vo=["focus","mousedown","mouseenter","touchstart"],un="mat-ripple-loader-uninitialized",dn="mat-ripple-loader-class-name",Qr="mat-ripple-loader-centered",Tt="mat-ripple-loader-disabled",ei=(()=>{class e{_document=d(E);_animationsDisabled=Et();_globalRippleOptions=d(qr,{optional:!0});_platform=d(J);_ngZone=d(N);_injector=d(V);_eventCleanups;_hosts=new Map;constructor(){let t=d(ge).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Vo.map(r=>t.listen(this._document,r,this._onInteraction,$o)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(un,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(dn))&&t.setAttribute(dn,r.className||""),r.centered&&t.setAttribute(Qr,""),r.disabled&&t.setAttribute(Tt,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute(Tt,""):t.removeAttribute(Tt)}_onInteraction=t=>{let r=z(t);if(r instanceof HTMLElement){let i=r.closest(`[${un}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(dn)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Ke.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Ke.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Tt),rippleConfig:{centered:t.hasAttribute(Qr),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},u=new Ct(s,this._ngZone,r,this._platform,this._injector),l=!s.rippleDisabled;l&&u.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:u,hasSetUpEvents:l}),t.removeAttribute(un)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ti=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return e})();var Ho=["mat-icon-button",""],Go=["*"],Wo=new y("MAT_BUTTON_CONFIG");function ni(e){return e==null?void 0:Lt(e)}var ln=(()=>{class e{_elementRef=d(ee);_ngZone=d(N);_animationsDisabled=Et();_config=d(Wo,{optional:!0});_focusMonitor=d(on);_cleanupClick;_renderer=d(qe);_rippleLoader=d(ei);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){d(Ze).load(ti);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=be({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(Nt("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Zn(i.color?"mat-"+i.color:""),Re("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",De],disabled:[2,"disabled","disabled",De],ariaDisabled:[2,"aria-disabled","ariaDisabled",De],disabledInteractive:[2,"disabledInteractive","disabledInteractive",De],tabIndex:[2,"tabIndex","tabIndex",ni],_tabindex:[2,"tabindex","_tabindex",ni]}})}return e})(),Yo=(()=>{class e extends ln{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[et],attrs:Ho,ngContentSelectors:Go,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(tt(),ye(0,"span",0),ve(1),ye(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return e})();var At=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=$({})}return e})();var ri=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[At]})}return e})();var Zo=["matButton",""],Ko=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Xo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ii=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Tl=(()=>{class e extends ln{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Jo(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?ii.get(this._appearance):null,o=ii.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[et],attrs:Zo,ngContentSelectors:Xo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(tt(Ko),ye(0,"span",0),ve(1),Wn(2,"span",1),ve(3,1),Yn(),ve(4,2),ye(5,"span",2)(6,"span",3)),r&2&&Re("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return e})();function Jo(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Al=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[ri,At]})}return e})();var qo="draft";function c(e,n=""){return typeof e=="string"?e.trim():n}function G(e){return Array.isArray(e)?e.map(n=>c(n)).filter(Boolean):[]}function mn(e,n=!1){return typeof e=="boolean"?e:n}function oi(e,n=0){return typeof e=="number"&&Number.isFinite(e)?e:n}function fn(e){return e==="published"||e==="archived"||e==="draft"?e:qo}function pn(e){let n=c(e);return Number.isNaN(Date.parse(n))?"":n}function hn(e){return G(e).map(n=>n.toLowerCase())}function ai(e){if(!Array.isArray(e))return[];let n=[];for(let t of e){let r=c(t?.heading),i=G(t?.paragraphs),o=c(t?.callout)||void 0;!r&&i.length===0&&!o||n.push({heading:r||"Section",paragraphs:i,callout:o})}return n}function gn(e,n,t){return{title:c(e?.title,n),description:c(e?.description,t)}}function bn(e){return{version:oi(e?.version,1),updatedOn:pn(e?.updatedOn)||new Date().toISOString()}}function yn(e,n){let t=bn(e);return q(C({},t),{eyebrow:c(e?.eyebrow,"cweise.com"),headline:c(e?.headline,n),intro:c(e?.intro)})}function Ft(e){return e==="published"}function vn(e){return[...e].sort((n,t)=>{let r=Date.parse(t.publishedOn??"")||0,i=Date.parse(n.publishedOn??"")||0;return r-i})}function It(e,n,t){let r=new Map(n.map(s=>[s.slug,s])),i=e.map(s=>r.get(s)).filter(s=>!!s),o=n.filter(s=>s.featured&&!i.some(u=>u.slug===s.slug)),a=[...i,...o];return typeof t=="number"?a.slice(0,t):a}function Qo(e){let n=c(e?.id),t=c(e?.title),r=c(e?.description);return!n||!t||!r?null:{id:n,icon:c(e?.icon,"insights"),title:t,description:r}}function ea(e){return{eyebrow:c(e?.eyebrow,"Engineering & Infrastructure"),headline:c(e?.headline,"Operational Intelligence for Complex Organizations"),subheadline:c(e?.subheadline,"Reducing Rework, Risk, and Delivery Gaps"),intro:G(e?.intro),heroImage:c(e?.heroImage,"assets/images/hero-architecture.png"),featuredWritingSlugs:G(e?.featuredWritingSlugs),featuredFrameworkSlugs:G(e?.featuredFrameworkSlugs),featuredInitiativeSlugs:G(e?.featuredInitiativeSlugs),themes:Array.isArray(e?.themes)?e.themes.map(n=>Qo(n)).filter(n=>n!==null):[],themesSection:{eyebrow:c(e?.themesSection?.eyebrow,"Core Themes"),headline:c(e?.themesSection?.headline,"Where I Focus"),support:c(e?.themesSection?.support)},writingSection:{eyebrow:c(e?.writingSection?.eyebrow,"Featured Writing"),headline:c(e?.writingSection?.headline,"Recent Essays"),support:c(e?.writingSection?.support)},frameworkSection:{eyebrow:c(e?.frameworkSection?.eyebrow,"Featured Framework"),headline:c(e?.frameworkSection?.headline,"Featured Framework"),support:c(e?.frameworkSection?.support)},initiativesSection:{eyebrow:c(e?.initiativesSection?.eyebrow,"Selected Initiatives"),headline:c(e?.initiativesSection?.headline,"Proof of Execution"),support:c(e?.initiativesSection?.support)},aboutSection:{eyebrow:c(e?.aboutSection?.eyebrow,"About"),headline:c(e?.aboutSection?.headline,"How I Think. What I Do."),support:c(e?.aboutSection?.support)}}}function ta(e){return{primary:Array.isArray(e?.primary)?e.primary.map(n=>({label:c(n?.label),path:c(n?.path)})).filter(n=>n.label&&n.path):[],social:Array.isArray(e?.social)?e.social.map(n=>({label:c(n?.label),url:c(n?.url),icon:c(n?.icon,"link")})).filter(n=>n.label&&n.url):[]}}function na(e){return{featuredLinks:Array.isArray(e?.featuredLinks)?e.featuredLinks.map(n=>({label:c(n?.label),path:c(n?.path)})).filter(n=>n.label&&n.path):[]}}function ra(e){return{eyebrow:c(e?.eyebrow,"Stay Connected"),headline:c(e?.headline,"Thoughts on operations, systems, and execution."),intro:c(e?.intro),note:c(e?.note),ctaLabel:c(e?.ctaLabel,"Connect"),ctaUrl:c(e?.ctaUrl,"/connect")}}function Dn(e){let n=bn(e?.meta);return{meta:q(C({},n),{siteName:c(e?.meta?.siteName,"cweise.com"),siteUrl:c(e?.meta?.siteUrl,"https://cweise.com"),title:c(e?.meta?.title,"Operational Intelligence for Complex Organizations"),description:c(e?.meta?.description),author:c(e?.meta?.author,"Charles Weise"),footerTagline:c(e?.meta?.footerTagline,"Operational intelligence for complex organizations."),contactEmail:c(e?.meta?.contactEmail,"iweise@me.com")}),home:ea(e?.home),navigation:ta(e?.navigation),footer:na(e?.footer),connect:ra(e?.connect)}}function ia(e){let n=c(e?.id),t=c(e?.slug),r=c(e?.title);if(!n||!t||!r)return null;let i=c(e?.summary);return{id:n,slug:t,title:r,summary:i,status:fn(e?.status),publishedOn:pn(e?.publishedOn),readTimeMinutes:oi(e?.readTimeMinutes,5),featured:mn(e?.featured),tags:hn(e?.tags),heroImage:c(e?.heroImage)||void 0,seo:gn(e?.seo,r,i),body:{intro:c(e?.body?.intro),sections:ai(e?.body?.sections)}}}function si(e){return{meta:yn(e?.meta,"Writing"),items:Array.isArray(e?.items)?e.items.map(n=>ia(n)).filter(n=>n!==null):[]}}function oa(e){return Array.isArray(e)?e.map(n=>{let t=c(n?.title),r=c(n?.description);return!t||!r?null:{title:t,description:r}}).filter(n=>!!n):[]}function aa(e){let n=c(e?.id),t=c(e?.slug),r=c(e?.title);if(!n||!t||!r)return null;let i=c(e?.summary),o={premise:c(e?.body?.premise),components:oa(e?.body?.components),application:c(e?.body?.application),sections:ai(e?.body?.sections)};return{id:n,slug:t,title:r,summary:i,status:fn(e?.status),publishedOn:pn(e?.publishedOn),featured:mn(e?.featured),category:c(e?.category),tags:hn(e?.tags),diagramImage:c(e?.diagramImage)||void 0,seo:gn(e?.seo,r,i),body:o}}function ci(e){return{meta:yn(e?.meta,"Frameworks"),items:Array.isArray(e?.items)?e.items.map(n=>aa(n)).filter(n=>n!==null):[]}}function sa(e){let n=c(e?.id),t=c(e?.slug),r=c(e?.title);if(!n||!t||!r)return null;let i=c(e?.summary),o={context:c(e?.body?.context),challenge:c(e?.body?.challenge),approach:c(e?.body?.approach),outcome:c(e?.body?.outcome),notes:G(e?.body?.notes)};return{id:n,slug:t,title:r,summary:i,status:fn(e?.status),featured:mn(e?.featured),domain:c(e?.domain),icon:c(e?.icon)||void 0,tags:hn(e?.tags),thumbnail:c(e?.thumbnail)||void 0,seo:gn(e?.seo,r,i),body:o}}function ui(e){return{meta:yn(e?.meta,"Initiatives"),items:Array.isArray(e?.items)?e.items.map(n=>sa(n)).filter(n=>n!==null):[]}}function di(e){let n={headline:c(e?.content?.headline,"How I Think. What I Do."),narrative:G(e?.content?.narrative),principles:G(e?.content?.principles),focusAreas:G(e?.content?.focusAreas),closing:c(e?.content?.closing)};return{meta:bn(e?.meta),content:n}}var li=Dn({meta:{version:1,updatedOn:"2026-05-16",siteName:"cweise.com",siteUrl:"https://cweise.com",title:"Operational Intelligence for Complex Organizations",description:"Operational intelligence for engineering and infrastructure organizations.",author:"Charles Weise",footerTagline:"Operational intelligence for complex organizations.",contactEmail:"iweise@me.com"},home:{eyebrow:"Engineering & Infrastructure",headline:"Operational Intelligence for Complex Organizations",subheadline:"Reducing Rework, Risk, and Delivery Gaps",intro:[],heroImage:"assets/images/hero-architecture.png",featuredWritingSlugs:[],featuredFrameworkSlugs:[],featuredInitiativeSlugs:[],themes:[],themesSection:{eyebrow:"Core Themes",headline:"Where I Focus",support:""},writingSection:{eyebrow:"Featured Writing",headline:"Recent Essays",support:""},frameworkSection:{eyebrow:"Featured Framework",headline:"Featured Framework",support:""},initiativesSection:{eyebrow:"Selected Initiatives",headline:"Proof of Execution",support:""},aboutSection:{eyebrow:"About",headline:"How I Think. What I Do.",support:""}},navigation:{primary:[],social:[]},footer:{featuredLinks:[]},connect:{eyebrow:"Stay Connected",headline:"Thoughts on operations, systems, and execution.",intro:"",note:"",ctaLabel:"Connect",ctaUrl:"/connect"}}),mi={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Writing",headline:"Writing",intro:""},items:[]},fi={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Frameworks",headline:"Frameworks",intro:""},items:[]},pi={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Initiatives",headline:"Initiatives",intro:""},items:[]},hi={meta:{version:1,updatedOn:"2026-05-16"},content:{headline:"How I Think. What I Do.",narrative:[],principles:[],focusAreas:[],closing:""}};var gi=class e{http=d(vt);siteFile$=this.loadFile("assets/content/site.json",li,Dn);writingFile$=this.loadFile("assets/content/writing.json",mi,si);frameworksFile$=this.loadFile("assets/content/frameworks.json",fi,ci);initiativesFile$=this.loadFile("assets/content/initiatives.json",pi,ui);aboutFile$=this.loadFile("assets/content/about.json",hi,di);getSiteMeta(){return this.siteFile$.pipe(g(n=>n.meta))}getNavigation(){return this.siteFile$.pipe(g(n=>n.navigation))}getFooterContent(){return this.siteFile$.pipe(g(n=>n.footer))}getConnectContent(){return this.siteFile$.pipe(g(n=>n.connect))}getHomeContent(){return Q({site:this.siteFile$,featuredWriting:this.getFeaturedWriting(),featuredFrameworks:this.getFeaturedFrameworks(),featuredInitiatives:this.getFeaturedInitiatives(),about:this.getAboutContent()}).pipe(g(({site:n,featuredWriting:t,featuredFrameworks:r,featuredInitiatives:i,about:o})=>({meta:n.meta,navigation:n.navigation,footer:n.footer,connect:n.connect,home:n.home,featuredWriting:t,featuredFrameworks:r,featuredInitiatives:i,about:o})))}getWritingPage(){return Q({meta:this.writingFile$.pipe(g(n=>n.meta)),items:this.getWritingIndex()}).pipe(g(({meta:n,items:t})=>({meta:n,items:t})))}getWritingIndex(){return this.writingFile$.pipe(g(n=>n.items.filter(t=>Ft(t.status))),g(n=>vn(n)))}getWritingBySlug(n){return this.getWritingIndex().pipe(g(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedWriting(n){return Q([this.siteFile$,this.getWritingIndex()]).pipe(g(([t,r])=>It(t.home.featuredWritingSlugs,r,n)))}getFrameworksPage(){return Q({meta:this.frameworksFile$.pipe(g(n=>n.meta)),items:this.getFrameworksIndex()}).pipe(g(({meta:n,items:t})=>({meta:n,items:t})))}getFrameworksIndex(){return this.frameworksFile$.pipe(g(n=>n.items.filter(t=>Ft(t.status))),g(n=>vn(n)))}getFrameworkBySlug(n){return this.getFrameworksIndex().pipe(g(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedFrameworks(n){return Q([this.siteFile$,this.getFrameworksIndex()]).pipe(g(([t,r])=>It(t.home.featuredFrameworkSlugs,r,n)))}getInitiativesPage(){return Q({meta:this.initiativesFile$.pipe(g(n=>n.meta)),items:this.getInitiativesIndex()}).pipe(g(({meta:n,items:t})=>({meta:n,items:t})))}getInitiativesIndex(){return this.initiativesFile$.pipe(g(n=>n.items.filter(t=>Ft(t.status))))}getInitiativeBySlug(n){return this.getInitiativesIndex().pipe(g(t=>t.find(r=>r.slug===n.trim())??null))}getFeaturedInitiatives(n){return Q([this.siteFile$,this.getInitiativesIndex()]).pipe(g(([t,r])=>It(t.home.featuredInitiativeSlugs,r,n)))}getAboutContent(){return this.aboutFile$.pipe(g(n=>n.content))}loadFile(n,t,r){return this.http.get(n).pipe(g(i=>r(i)),Cn(i=>(console.error(`Content file failed to load: ${n}`,i),ae(t))),In({bufferSize:1,refCount:!0}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};export{nt as a,ir as b,Bi as c,Ys as d,Kt as e,ro as f,vt as g,Mo as h,Cu as i,xo as j,Nu as k,J as l,hd as m,Yo as n,At as o,Tl as p,Al as q,gi as r};
