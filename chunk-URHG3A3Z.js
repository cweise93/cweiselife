import{$ as u,A as st,Aa as dr,Ba as Ue,C as Qn,Ca as lr,D as er,Da as ve,E as ct,Ea as mr,F as tr,Fa as _e,G as nr,Ga as lt,Gb as wr,H as rr,Ha as me,Hb as Cr,Hc as Fr,Ia as De,Ib as Ae,Ic as Mr,Ja as fr,Jc as fe,Ka as pr,Kc as sn,La as hr,M as ir,Ma as gr,Mc as Sr,N as ut,Na as br,O as or,Oa as yr,Ob as $,P as ar,Pa as vr,Pb as F,Q as dt,Qa as Q,S as sr,Sb as gt,T as _,Tb as Ie,U as Pe,W as l,Wa as Ee,X as k,Xa as _r,Ya as mt,Z as g,_ as h,_a as Dr,a as D,ab as we,b as ie,ba as Xt,bb as ft,bc as Te,ca as cr,cb as Ce,cc as Ar,d as Xn,da as Be,ea as ur,eb as Er,f as at,h as j,i as qn,ib as X,ja as N,jb as L,ka as v,kb as q,la as je,lb as rn,na as qt,nb as pt,o as le,oa as S,pa as Jt,qb as ht,ra as oe,s as p,t as Z,ta as Qt,tb as on,ua as en,va as tn,vb as an,vc as Ir,w as Jn,xc as Tr,ya as Y,za as nn}from"./chunk-4E2O5EZK.js";var xr=null;function ee(){return xr}function cn(t){xr??=t}var ze=class{},Fe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:()=>u(Rr),providedIn:"platform"})}return t})();var Rr=(()=>{class t extends Fe{_location;_history;_doc=u(v);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ee().getBaseHref(this._doc)}onPopState(e){let r=ee().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=ee().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Nr(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Or(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function ae(t){return t&&t[0]!=="?"?`?${t}`:t}var bt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:()=>u(ho),providedIn:"root"})}return t})(),po=new g(""),ho=(()=>{class t extends bt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Nr(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+ae(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let a=this.prepareExternalUrl(i+ae(o));this._platformLocation.pushState(e,r,a)}replaceState(e,r,i,o){let a=this.prepareExternalUrl(i+ae(o));this._platformLocation.replaceState(e,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(h(Fe),h(po,8))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lr=(()=>{class t{_subject=new j;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=yo(Or(kr(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+ae(r))}normalize(e){return t.stripTrailingSlash(bo(this._basePath,kr(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=ae;static joinWithSlash=Nr;static stripTrailingSlash=Or;static \u0275fac=function(r){return new(r||t)(h(bt))};static \u0275prov=l({token:t,factory:()=>go(),providedIn:"root"})}return t})();function go(){return new Lr(h(bt))}function bo(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function kr(t){return t.replace(/\/index.html$/,"")}function yo(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var x=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(x||{}),E=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(E||{}),P=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(P||{}),ne={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function jr(t){return $(t)[F.LocaleId]}function Ur(t,n,e){let r=$(t),i=[r[F.DayPeriodsFormat],r[F.DayPeriodsStandalone]],o=H(i,n);return H(o,e)}function zr(t,n,e){let r=$(t),i=[r[F.DaysFormat],r[F.DaysStandalone]],o=H(i,n);return H(o,e)}function $r(t,n,e){let r=$(t),i=[r[F.MonthsFormat],r[F.MonthsStandalone]],o=H(i,n);return H(o,e)}function Hr(t,n){let r=$(t)[F.Eras];return H(r,n)}function $e(t,n){let e=$(t);return H(e[F.DateFormat],n)}function He(t,n){let e=$(t);return H(e[F.TimeFormat],n)}function Ve(t,n){let r=$(t)[F.DateTimeFormat];return H(r,n)}function Ge(t,n){let e=$(t),r=e[F.NumberSymbols][n];if(typeof r>"u"){if(n===ne.CurrencyDecimal)return e[F.NumberSymbols][ne.Decimal];if(n===ne.CurrencyGroup)return e[F.NumberSymbols][ne.Group]}return r}function Vr(t){if(!t[F.ExtraData])throw new _(2303,!1)}function Gr(t){let n=$(t);return Vr(n),(n[F.ExtraData][2]||[]).map(r=>typeof r=="string"?un(r):[un(r[0]),un(r[1])])}function Wr(t,n,e){let r=$(t);Vr(r);let i=[r[F.ExtraData][0],r[F.ExtraData][1]],o=H(i,n)||[];return H(o,e)||[]}function H(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new _(2304,!1)}function un(t){let[n,e]=t.split(":");return{hours:+n,minutes:+e}}var Do=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,yt={},Eo=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Kr(t,n,e,r){let i=xo(t);n=te(e,n)||n;let a=[],c;for(;n;)if(c=Eo.exec(n),c){a=a.concat(c.slice(1));let f=a.pop();if(!f)break;n=f}else{a.push(n);break}let d=i.getTimezoneOffset();r&&(d=Yr(r,d),i=So(i,r));let m="";return a.forEach(f=>{let y=Fo(f);m+=y?y(i,e,d):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),m}function wt(t,n,e){let r=new Date(0);return r.setFullYear(t,n,e),r.setHours(0,0,0),r}function te(t,n){let e=jr(t);if(yt[e]??={},yt[e][n])return yt[e][n];let r="";switch(n){case"shortDate":r=$e(t,P.Short);break;case"mediumDate":r=$e(t,P.Medium);break;case"longDate":r=$e(t,P.Long);break;case"fullDate":r=$e(t,P.Full);break;case"shortTime":r=He(t,P.Short);break;case"mediumTime":r=He(t,P.Medium);break;case"longTime":r=He(t,P.Long);break;case"fullTime":r=He(t,P.Full);break;case"short":let i=te(t,"shortTime"),o=te(t,"shortDate");r=vt(Ve(t,P.Short),[i,o]);break;case"medium":let a=te(t,"mediumTime"),c=te(t,"mediumDate");r=vt(Ve(t,P.Medium),[a,c]);break;case"long":let d=te(t,"longTime"),m=te(t,"longDate");r=vt(Ve(t,P.Long),[d,m]);break;case"full":let f=te(t,"fullTime"),y=te(t,"fullDate");r=vt(Ve(t,P.Full),[f,y]);break}return r&&(yt[e][n]=r),r}function vt(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,r){return n!=null&&r in n?n[r]:e})),t}function W(t,n,e="-",r,i){let o="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),o+a}function wo(t,n){return W(t,3).substring(0,n)}function T(t,n,e=0,r=!1,i=!1){return function(o,a){let c=Co(t,o);if((e>0||c>-e)&&(c+=e),t===3)c===0&&e===-12&&(c=12);else if(t===6)return wo(c,n);let d=Ge(a,ne.MinusSign);return W(c,n,d,r,i)}}function Co(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new _(2301,!1)}}function C(t,n,e=x.Format,r=!1){return function(i,o){return Ao(i,o,t,n,e,r)}}function Ao(t,n,e,r,i,o){switch(e){case 2:return $r(n,i,r)[t.getMonth()];case 1:return zr(n,i,r)[t.getDay()];case 0:let a=t.getHours(),c=t.getMinutes();if(o){let m=Gr(n),f=Wr(n,i,r),y=m.findIndex(I=>{if(Array.isArray(I)){let[G,B]=I,R=a>=G.hours&&c>=G.minutes,b=a<B.hours||a===B.hours&&c<B.minutes;if(G.hours<B.hours){if(R&&b)return!0}else if(R||b)return!0}else if(I.hours===a&&I.minutes===c)return!0;return!1});if(y!==-1)return f[y]}return Ur(n,i,r)[a<12?0:1];case 3:return Hr(n,r)[t.getFullYear()<=0?0:1];default:let d=e;throw new _(2302,!1)}}function _t(t){return function(n,e,r){let i=-1*r,o=Ge(e,ne.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+W(a,2,o)+W(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+W(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+W(a,2,o)+":"+W(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+W(a,2,o)+":"+W(Math.abs(i%60),2,o);default:throw new _(2310,!1)}}}var Io=0,Et=4;function To(t){let n=wt(t,Io,1).getDay();return wt(t,0,1+(n<=Et?Et:Et+7)-n)}function Zr(t){let n=t.getDay(),e=n===0?-3:Et-n;return wt(t.getFullYear(),t.getMonth(),t.getDate()+e)}function dn(t,n=!1){return function(e,r){let i;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=Zr(e),a=To(o.getFullYear()),c=o.getTime()-a.getTime();i=1+Math.round(c/6048e5)}return W(i,t,Ge(r,ne.MinusSign))}}function Dt(t,n=!1){return function(e,r){let o=Zr(e).getFullYear();return W(o,t,Ge(r,ne.MinusSign),n)}}var ln={};function Fo(t){if(ln[t])return ln[t];let n;switch(t){case"G":case"GG":case"GGG":n=C(3,E.Abbreviated);break;case"GGGG":n=C(3,E.Wide);break;case"GGGGG":n=C(3,E.Narrow);break;case"y":n=T(0,1,0,!1,!0);break;case"yy":n=T(0,2,0,!0,!0);break;case"yyy":n=T(0,3,0,!1,!0);break;case"yyyy":n=T(0,4,0,!1,!0);break;case"Y":n=Dt(1);break;case"YY":n=Dt(2,!0);break;case"YYY":n=Dt(3);break;case"YYYY":n=Dt(4);break;case"M":case"L":n=T(1,1,1);break;case"MM":case"LL":n=T(1,2,1);break;case"MMM":n=C(2,E.Abbreviated);break;case"MMMM":n=C(2,E.Wide);break;case"MMMMM":n=C(2,E.Narrow);break;case"LLL":n=C(2,E.Abbreviated,x.Standalone);break;case"LLLL":n=C(2,E.Wide,x.Standalone);break;case"LLLLL":n=C(2,E.Narrow,x.Standalone);break;case"w":n=dn(1);break;case"ww":n=dn(2);break;case"W":n=dn(1,!0);break;case"d":n=T(2,1);break;case"dd":n=T(2,2);break;case"c":case"cc":n=T(7,1);break;case"ccc":n=C(1,E.Abbreviated,x.Standalone);break;case"cccc":n=C(1,E.Wide,x.Standalone);break;case"ccccc":n=C(1,E.Narrow,x.Standalone);break;case"cccccc":n=C(1,E.Short,x.Standalone);break;case"E":case"EE":case"EEE":n=C(1,E.Abbreviated);break;case"EEEE":n=C(1,E.Wide);break;case"EEEEE":n=C(1,E.Narrow);break;case"EEEEEE":n=C(1,E.Short);break;case"a":case"aa":case"aaa":n=C(0,E.Abbreviated);break;case"aaaa":n=C(0,E.Wide);break;case"aaaaa":n=C(0,E.Narrow);break;case"b":case"bb":case"bbb":n=C(0,E.Abbreviated,x.Standalone,!0);break;case"bbbb":n=C(0,E.Wide,x.Standalone,!0);break;case"bbbbb":n=C(0,E.Narrow,x.Standalone,!0);break;case"B":case"BB":case"BBB":n=C(0,E.Abbreviated,x.Format,!0);break;case"BBBB":n=C(0,E.Wide,x.Format,!0);break;case"BBBBB":n=C(0,E.Narrow,x.Format,!0);break;case"h":n=T(3,1,-12);break;case"hh":n=T(3,2,-12);break;case"H":n=T(3,1);break;case"HH":n=T(3,2);break;case"m":n=T(4,1);break;case"mm":n=T(4,2);break;case"s":n=T(5,1);break;case"ss":n=T(5,2);break;case"S":n=T(6,1);break;case"SS":n=T(6,2);break;case"SSS":n=T(6,3);break;case"Z":case"ZZ":case"ZZZ":n=_t(0);break;case"ZZZZZ":n=_t(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=_t(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=_t(2);break;default:return null}return ln[t]=n,n}function Yr(t,n){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?n:e}function Mo(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function So(t,n,e){let i=t.getTimezoneOffset(),o=Yr(n,i);return Mo(t,-1*(o-i))}function xo(t){if(Pr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,a=1]=t.split("-").map(c=>+c);return wt(i,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let r;if(r=t.match(Do))return Ro(r)}let n=new Date(t);if(!Pr(n))throw new _(2311,!1);return n}function Ro(t){let n=new Date(0),e=0,r=0,i=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),r=Number(t[9]+t[11])),i.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,c=Number(t[5]||0)-r,d=Number(t[6]||0),m=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(n,a,c,d,m),n}function Pr(t){return t instanceof Date&&!isNaN(t.valueOf())}var Oo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(N);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)(Ce(Er))};static \u0275dir=q({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[tn]})}return t})();function ko(t,n){return new _(2100,!1)}var No="mediumDate",Xr=new g(""),qr=new g(""),Lo=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,r,i){this.locale=e,this.defaultTimezone=r,this.defaultOptions=i}transform(e,r,i,o){if(e==null||e===""||e!==e)return null;try{let a=r??this.defaultOptions?.dateFormat??No,c=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Kr(e,a,o||this.locale,c)}catch(a){throw ko(t,a.message)}}static \u0275fac=function(r){return new(r||t)(Ce(Ir,16),Ce(Xr,24),Ce(qr,24))};static \u0275pipe=rn({name:"date",type:t,pure:!0})}return t})();function Po(t,n){return{key:t,value:n}}var Bo=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=Br;transform(e,r=Br){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let i=this.differ.diff(e),o=r!==this.compareFn;return i&&(this.keyValues=[],i.forEachItem(a=>{this.keyValues.push(Po(a.key,a.currentValue))})),(i||o)&&(r&&this.keyValues.sort(r),this.compareFn=r),this.keyValues}static \u0275fac=function(r){return new(r||t)(Ce(Fr,16))};static \u0275pipe=rn({name:"keyvalue",type:t,pure:!1})}return t})();function Br(t,n){let e=t.key,r=n.key;if(e===r)return 0;if(e==null)return 1;if(r==null)return-1;if(typeof e=="string"&&typeof r=="string")return e<r?-1:1;if(typeof e=="number"&&typeof r=="number")return e-r;if(typeof e=="boolean"&&typeof r=="boolean")return e<r?-1:1;let i=String(e),o=String(r);return i==o?0:i<o?-1:1}function We(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var pe=class{};var fn="browser";function Jr(t){return t===fn}var hu=(()=>{class t{static \u0275prov=l({token:t,providedIn:"root",factory:()=>new mn(u(v),window)})}return t})(),mn=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(ie(D({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let r=Ho(this.document,n);r&&(this.scrollToElement(r,e),r.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Pe(2400,!1))}}scrollToElement(n,e){let r=n.getBoundingClientRect(),i=r.left+this.window.pageXOffset,o=r.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ie(D({},e),{left:i-a[0],top:o-a[1]}))}};function Ho(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let r=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}i=r.nextNode()}}return null}var Ke=class{_doc;constructor(n){this._doc=n}manager},Ct=(()=>{class t extends Ke{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(h(v))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Tt=new g(""),bn=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Ct));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Ct);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new _(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(h(Tt),h(S))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),pn="ng-app-id";function Qr(t){for(let n of t)n.remove()}function ei(t,n){let e=n.createElement("style");return e.textContent=t,e}function Vo(t,n,e,r){let i=t.head?.querySelectorAll(`style[${pn}="${n}"],link[${pn}="${n}"]`);if(i)for(let o of i)o.removeAttribute(pn),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function gn(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var yn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,Vo(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,ei);r?.forEach(i=>this.addUsage(i,this.external,gn))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(Qr(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Qr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,ei(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,gn(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(h(v),h(Ue),h(_e,8),h(ve))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),hn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},vn=/%COMP%/g;var ni="%COMP%",Go=`_nghost-${ni}`,Wo=`_ngcontent-${ni}`,Ko=!0,Zo=new g("",{factory:()=>Ko});function Yo(t){return Wo.replace(vn,t)}function Xo(t){return Go.replace(vn,t)}function ri(t,n){return n.map(e=>e.replace(vn,t))}var _n=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,a,c,d=null,m=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=d,this.tracingService=m,this.defaultRenderer=new Ze(e,a,c,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof It?i.applyToHost(e):i instanceof Ye&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,c=this.ngZone,d=this.eventManager,m=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,y=this.tracingService;switch(r.encapsulation){case lt.Emulated:o=new It(d,m,r,this.appId,f,a,c,y);break;case lt.ShadowDom:return new At(d,e,r,a,c,this.nonce,y,m);case lt.ExperimentalIsolatedShadowDom:return new At(d,e,r,a,c,this.nonce,y);default:o=new Ye(d,m,r,f,a,c,y);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(h(bn),h(yn),h(Ue),h(Zo),h(v),h(S),h(_e),h(mt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Ze=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(hn[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(ti(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(ti(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new _(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=hn[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=hn[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(Ee.DashCase|Ee.Important)?n.style.setProperty(e,r,i&Ee.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&Ee.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=ee().getGlobalEventTarget(this.doc,n),!n))throw new _(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function ti(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var At=class extends Ze{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,a,c,d){super(n,i,o,c),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=r.styles;m=ri(r.id,m);for(let y of m){let I=document.createElement("style");a&&I.setAttribute("nonce",a),I.textContent=y,this.shadowRoot.appendChild(I)}let f=r.getExternalStyles?.();if(f)for(let y of f){let I=gn(y,i);a&&I.setAttribute("nonce",a),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ye=class extends Ze{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,a,c,d){super(n,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let m=r.styles;this.styles=d?ri(d,m):m,this.styleUrls=r.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&_r.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},It=class extends Ye{contentAttr;hostAttr;constructor(n,e,r,i,o,a,c,d){let m=i+"-"+r.id;super(n,e,r,o,a,c,d,m),this.contentAttr=Yo(m),this.hostAttr=Xo(m)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Ft=class t extends ze{supportsDOMEvents=!0;static makeCurrent(){cn(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Jo();return e==null?null:Qo(e)}resetBaseElement(){Xe=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return We(document.cookie,n)}},Xe=null;function Jo(){return Xe=Xe||document.head.querySelector("base"),Xe?Xe.getAttribute("href"):null}function Qo(t){return new URL(t,document.baseURI).pathname}var ea=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),ii=["alt","control","meta","shift"],ta={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},na={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},oi=(()=>{class t extends Ke{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let a=t.parseEventName(r),c=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ee().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),ii.forEach(m=>{let f=r.indexOf(m);f>-1&&(r.splice(f,1),a+=m+".")}),a+=o,r.length!=0||o.length===0)return null;let d={};return d.domEventName=i,d.fullKey=a,d}static matchEventFullKeyCode(e,r){let i=ta[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),ii.forEach(a=>{if(a!==i){let c=na[a];c(e)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(h(v))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();async function ra(t,n,e){let r=D({rootComponent:t},ia(n,e));return Mr(r)}function ia(t,n){return{platformRef:n?.platformRef,appProviders:[...ua,...t?.providers??[]],platformProviders:ca}}function oa(){Ft.makeCurrent()}function aa(){return new Jt}function sa(){return dr(document),document}var ca=[{provide:ve,useValue:fn},{provide:lr,useValue:oa,multi:!0},{provide:v,useFactory:sa}];var ua=[{provide:cr,useValue:"root"},{provide:Jt,useFactory:aa},{provide:Tt,useClass:Ct,multi:!0},{provide:Tt,useClass:oi,multi:!0},_n,yn,bn,{provide:we,useExisting:_n},{provide:pe,useClass:ea},[]];var se=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var St=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},xt=class{encodeKey(n){return ai(n)}encodeValue(n){return ai(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function da(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,c]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],d=e.get(a)||[];d.push(c),e.set(a,d)}),e}var la=/%(\d[a-f0-9])/gi,ma={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ai(t){return encodeURIComponent(t).replace(la,(n,e)=>ma[e]??n)}function Mt(t){return`${t}`}var re=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new xt,n.fromString){if(n.fromObject)throw new _(2805,!1);this.map=da(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Mt):[Mt(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Mt(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Mt(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function fa(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function si(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ci(t){return typeof Blob<"u"&&t instanceof Blob}function ui(t){return typeof FormData<"u"&&t instanceof FormData}function pa(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var di="Content-Type",li="Accept",mi="text/plain",fi="application/json",ha=`${fi}, ${mi}, */*`,Me=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(fa(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new _(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new se,this.context??=new St,!this.params)this.params=new re,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),d=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||si(this.body)||ci(this.body)||ui(this.body)||pa(this.body)?this.body:this.body instanceof re?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ui(this.body)?null:ci(this.body)?this.body.type||null:si(this.body)?null:typeof this.body=="string"?mi:this.body instanceof re?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?fi:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,c=n.cache||this.cache,d=n.mode||this.mode,m=n.redirect||this.redirect,f=n.credentials||this.credentials,y=n.referrer||this.referrer,I=n.integrity||this.integrity,G=n.referrerPolicy||this.referrerPolicy,B=n.transferCache??this.transferCache,R=n.timeout??this.timeout,b=n.body!==void 0?n.body:this.body,w=n.withCredentials??this.withCredentials,O=n.reportProgress??this.reportProgress,J=n.headers||this.headers,M=n.params||this.params,Ne=n.context??this.context;return n.setHeaders!==void 0&&(J=Object.keys(n.setHeaders).reduce((Le,de)=>Le.set(de,n.setHeaders[de]),J)),n.setParams&&(M=Object.keys(n.setParams).reduce((Le,de)=>Le.set(de,n.setParams[de]),M)),new t(e,r,b,{params:M,headers:J,context:Ne,reportProgress:O,responseType:i,withCredentials:w,transferCache:B,keepalive:o,cache:c,priority:a,timeout:R,mode:d,redirect:m,credentials:f,referrer:y,integrity:I,referrerPolicy:G})}},he=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(he||{}),xe=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new se,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Rt=class t extends xe{constructor(n={}){super(n)}type=he.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},qe=class t extends xe{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=he.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Se=class extends xe{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},ga=200,ba=204;var ya=new g("");var va=/^\)\]\}',?\n/;var En=(()=>{class t{xhrFactory;tracingService=u(mt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new _(-2800,!1);let r=this.xhrFactory;return le(null).pipe(ar(()=>new at(o=>{let a=r.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((b,w)=>a.setRequestHeader(b,w.join(","))),e.headers.has(li)||a.setRequestHeader(li,ha),!e.headers.has(di)){let b=e.detectContentTypeHeader();b!==null&&a.setRequestHeader(di,b)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let b=e.responseType.toLowerCase();a.responseType=b!=="json"?b:"text"}let c=e.serializeBody(),d=null,m=()=>{if(d!==null)return d;let b=a.statusText||"OK",w=new se(a.getAllResponseHeaders()),O=a.responseURL||e.url;return d=new Rt({headers:w,status:a.status,statusText:b,url:O}),d},f=this.maybePropagateTrace(()=>{let{headers:b,status:w,statusText:O,url:J}=m(),M=null;w!==ba&&(M=typeof a.response>"u"?a.responseText:a.response),w===0&&(w=M?ga:0);let Ne=w>=200&&w<300;if(e.responseType==="json"&&typeof M=="string"){let Le=M;M=M.replace(va,"");try{M=M!==""?JSON.parse(M):null}catch(de){M=Le,Ne&&(Ne=!1,M={error:de,text:M})}}Ne?(o.next(new qe({body:M,headers:b,status:w,statusText:O,url:J||void 0})),o.complete()):o.error(new Se({error:M,headers:b,status:w,statusText:O,url:J||void 0}))}),y=this.maybePropagateTrace(b=>{let{url:w}=m(),O=new Se({error:b,status:a.status||0,statusText:a.statusText||"Unknown Error",url:w||void 0});o.error(O)}),I=y;e.timeout&&(I=this.maybePropagateTrace(b=>{let{url:w}=m(),O=new Se({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:w||void 0});o.error(O)}));let G=!1,B=this.maybePropagateTrace(b=>{G||(o.next(m()),G=!0);let w={type:he.DownloadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),e.responseType==="text"&&a.responseText&&(w.partialText=a.responseText),o.next(w)}),R=this.maybePropagateTrace(b=>{let w={type:he.UploadProgress,loaded:b.loaded};b.lengthComputable&&(w.total=b.total),o.next(w)});return a.addEventListener("load",f),a.addEventListener("error",y),a.addEventListener("timeout",I),a.addEventListener("abort",y),e.reportProgress&&(a.addEventListener("progress",B),c!==null&&a.upload&&a.upload.addEventListener("progress",R)),a.send(c),o.next({type:he.Sent}),()=>{a.removeEventListener("error",y),a.removeEventListener("abort",y),a.removeEventListener("load",f),a.removeEventListener("timeout",I),e.reportProgress&&(a.removeEventListener("progress",B),c!==null&&a.upload&&a.upload.removeEventListener("progress",R)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||t)(h(pe))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _a(t,n){return n(t)}function Da(t,n,e){return(r,i)=>ur(e,()=>n(r,o=>t(o,i)))}var pi=new g("",{factory:()=>[]}),hi=new g(""),gi=new g("",{factory:()=>!0});var wn=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=h(En),i},providedIn:"root"})}return t})();var Ot=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Qt);contributeToStability=u(gi);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(pi),...this.injector.get(hi,[])]));this.chain=r.reduceRight((i,o)=>Da(i,o,this.injector),_a)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(rr(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(h(wn),h(Be))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cn=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=h(Ot),i},providedIn:"root"})}return t})();function Dn(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var kt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof Me)o=e;else{let d;i.headers instanceof se?d=i.headers:d=new se(i.headers);let m;i.params&&(i.params instanceof re?m=i.params:m=new re({fromObject:i.params})),o=new Me(e,r,i.body!==void 0?i.body:null,{headers:d,context:i.context,params:m,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=le(o).pipe(er(d=>this.handler.handle(d)));if(e instanceof Me||i.observe==="events")return a;let c=a.pipe(st(d=>d instanceof qe));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(p(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new _(2806,!1);return d.body}));case"blob":return c.pipe(p(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new _(2807,!1);return d.body}));case"text":return c.pipe(p(d=>{if(d.body!==null&&typeof d.body!="string")throw new _(2808,!1);return d.body}));default:return c.pipe(p(d=>d.body))}case"response":return c;default:throw new _(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new re().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Dn(i,r))}post(e,r,i={}){return this.request("POST",e,Dn(i,r))}put(e,r,i={}){return this.request("PUT",e,Dn(i,r))}static \u0275fac=function(r){return new(r||t)(h(Cn))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ea=new g("",{factory:()=>!0}),wa="XSRF-TOKEN",Ca=new g("",{factory:()=>wa}),Aa="X-XSRF-TOKEN",Ia=new g("",{factory:()=>Aa}),Ta=(()=>{class t{cookieName=u(Ca);doc=u(v);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=We(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bi=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=h(Ta),i},providedIn:"root"})}return t})();function Fa(t,n){if(!u(Ea)||t.method==="GET"||t.method==="HEAD")return n(t);try{let i=u(Fe).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=u(bi).getToken(),r=u(Ia);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}function Ma(...t){let n=[kt,Ot,{provide:Cn,useExisting:Ot},{provide:wn,useFactory:()=>u(ya,{optional:!0})??u(En)},{provide:pi,useValue:Fa,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Xt(n)}var Wd=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(h(v))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var An=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=h(Sa),i},providedIn:"root"})}return t})(),Sa=(()=>{class t extends An{_doc;constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case Q.NONE:return r;case Q.HTML:return De(r,"HTML")?me(r):vr(this._doc,String(r)).toString();case Q.STYLE:return De(r,"Style")?me(r):r;case Q.SCRIPT:if(De(r,"Script"))return me(r);throw new _(5200,!1);case Q.URL:return De(r,"URL")?me(r):yr(String(r));case Q.RESOURCE_URL:if(De(r,"ResourceURL"))return me(r);throw new _(5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(e){return fr(e)}bypassSecurityTrustStyle(e){return pr(e)}bypassSecurityTrustScript(e){return hr(e)}bypassSecurityTrustUrl(e){return gr(e)}bypassSecurityTrustResourceUrl(e){return br(e)}static \u0275fac=function(r){return new(r||t)(h(v))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nl(t,n){let r=!n?.manualCleanup?n?.injector?.get(je)??u(je):null,i=xa(n?.equal),o;n?.requireSync?o=oe({kind:0},{equal:i}):o=oe({kind:1,value:n?.initialValue},{equal:i});let a,c=t.subscribe({next:d=>o.set({kind:1,value:d}),error:d=>{o.set({kind:2,error:d}),a?.()},complete:()=>{a?.()}});if(n?.requireSync&&o().kind===0)throw new _(601,!1);return a=r?.onDestroy(c.unsubscribe.bind(c)),Tr(()=>{let d=o();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new _(601,!1)}},{equal:n?.equal})}function xa(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}function Je(t){return t.buttons===0||t.detail===0}function Qe(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var In;function yi(){if(In==null){let t=typeof document<"u"?document.head:null;In=!!(t&&(t.createShadowRoot||t.attachShadow))}return In}function Tn(t){if(yi()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Ra(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function K(t){return t.composedPath?t.composedPath()[0]:t.target}var Fn;try{Fn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Fn=!1}var U=(()=>{class t{_platformId=u(ve);isBrowser=this._platformId?Jr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Fn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var et;function vi(){if(et==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>et=!0}))}finally{et=et||!1}return et}function Re(t){return vi()?t:!!t.capture}function Oa(t,n=0){return _i(t)?Number(t):arguments.length===2?n:0}function _i(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ce(t){return t instanceof Y?t.nativeElement:t}var Di=new g("cdk-input-modality-detector-options"),Ei={ignoreKeys:[18,17,224,91,16]},wi=650,Mn={passive:!0,capture:!0},Ci=(()=>{class t{_platform=u(U);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new qn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=K(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<wi||(this._modality.next(Je(e)?"keyboard":"mouse"),this._mostRecentTarget=K(e))};_onTouchstart=e=>{if(Qe(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=K(e)};constructor(){let e=u(S),r=u(v),i=u(Di,{optional:!0});if(this._options=D(D({},Ei),i),this.modalityDetected=this._modality.pipe(ut(1)),this.modalityChanged=this.modalityDetected.pipe(nr()),this._platform.isBrowser){let o=u(we).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,Mn),o.listen(r,"mousedown",this._onMousedown,Mn),o.listen(r,"touchstart",this._onTouchstart,Mn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tt=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(tt||{}),Ai=new g("cdk-focus-monitor-default-options"),Nt=Re({passive:!0,capture:!0}),Sn=(()=>{class t{_ngZone=u(S);_platform=u(U);_inputModalityDetector=u(Ci);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(v);_stopInputModalityDetector=new j;constructor(){let e=u(Ai,{optional:!0});this._detectionMode=e?.detectionMode||tt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=K(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=ce(e);if(!this._platform.isBrowser||i.nodeType!==1)return le();let o=Tn(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let c={checkChildren:r,subject:new j,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let r=ce(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=ce(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,d])=>this._originChanged(c,r,d)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===tt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===tt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?wi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=K(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Nt),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Nt)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(dt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Nt),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Nt),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lt=new WeakMap,ge=(()=>{class t{_appRef;_injector=u(N);_environmentInjector=u(Be);load(e){let r=this._appRef=this._appRef||this._injector.get(on),i=Lt.get(r);i||(i={loaders:new Set,refs:[]},Lt.set(r,i),r.onDestroy(()=>{Lt.get(r)?.refs.forEach(o=>o.destroy()),Lt.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Sr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ii=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Pt;function ka(){if(Pt===void 0&&(Pt=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Pt=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Pt}function Na(t){return ka()?.createHTML(t)||t}function Ti(t,n,e){let r=e.sanitize(Q.HTML,n);t.innerHTML=Na(r||"")}function xn(t){return Array.isArray(t)?t:[t]}var Fi=new Set,be,Bt=(()=>{class t{_platform=u(U);_nonce=u(_e,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pa}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&La(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function La(t,n){if(!Fi.has(t))try{be||(be=document.createElement("style"),n&&be.setAttribute("nonce",n),be.setAttribute("type","text/css"),document.head.appendChild(be)),be.sheet&&(be.sheet.insertRule(`@media ${t} {body{ }}`,0),Fi.add(t))}catch(e){console.error(e)}}function Pa(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Rn=(()=>{class t{_mediaMatcher=u(Bt);_zone=u(S);_queries=new Map;_destroySubject=new j;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Mi(xn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=Mi(xn(e)).map(a=>this._registerQuery(a).observable),o=Z(i);return o=Jn(o.pipe(tr(1)),o.pipe(ut(1),ct(0))),o.pipe(p(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:m})=>{c.matches=c.matches||d,c.breakpoints[m]=d}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new at(a=>{let c=d=>this._zone.run(()=>a.next(d));return r.addListener(c),()=>{r.removeListener(c)}}).pipe(or(r),p(({matches:a})=>({query:e,matches:a})),dt(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mi(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var Ba=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=k({providers:[Ba]})}return t})();var ja=(()=>{class t{_platform=u(U);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return za(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=Ua(Ya(e));if(r&&(xi(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=xi(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ka(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return Za(e)&&!this.isDisabled(e)&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ua(t){try{return t.frameElement}catch{return null}}function za(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function $a(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Ha(t){return Ga(t)&&t.type=="hidden"}function Va(t){return Wa(t)&&t.hasAttribute("href")}function Ga(t){return t.nodeName.toLowerCase()=="input"}function Wa(t){return t.nodeName.toLowerCase()=="a"}function ki(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function xi(t){if(!ki(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Ka(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function Za(t){return Ha(t)?!1:$a(t)||Va(t)||t.hasAttribute("contenteditable")||ki(t)}function Ya(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var kn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,a){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Dr(n,{injector:this._injector}):setTimeout(n)}},Xa=(()=>{class t{_checker=u(ja);_ngZone=u(S);_document=u(v);_injector=u(N);constructor(){u(ge).load(Ii)}create(e,r=!1){return new kn(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ni=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Li=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),qa=0,Ja=(()=>{class t{_ngZone=u(S);_defaultOptions=u(Li,{optional:!0});_liveElement;_document=u(v);_sanitizer=u(An);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(Ni,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...r){let i=this._defaultOptions,o,a;return r.length===1&&typeof r[0]=="number"?a=r[0]:[o,a]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ti(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",r=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${qa++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ue=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(ue||{}),Ri="cdk-high-contrast-black-on-white",Oi="cdk-high-contrast-white-on-black",On="cdk-high-contrast-active",Pi=(()=>{class t{_platform=u(U);_hasCheckedHighContrastMode=!1;_document=u(v);_breakpointSubscription;constructor(){this._breakpointSubscription=u(Rn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ue.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ue.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ue.BLACK_ON_WHITE}return ue.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(On,Ri,Oi),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===ue.BLACK_ON_WHITE?e.add(On,Ri):r===ue.WHITE_ON_BLACK&&e.add(On,Oi)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qa=(()=>{class t{constructor(){u(Pi)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[Si]})}return t})();var es=200,jt=class{_letterKeyStream=new j;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new j;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:es;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(sr(e=>this._pressedLetters.push(e)),ct(n),st(()=>this._pressedLetters.length>0),p(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Bi(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Oe=class{_items;_activeItemIndex=oe(-1);_activeItem=oe(null);_wrap=!1;_typeaheadSubscription=Xn.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof nn?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):ht(n)&&(this._effectRef=en(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new j;change=new j;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new jt(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||Bi(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return ht(this._items)?this._items():this._items instanceof nn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Nn=class extends Oe{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Ln=class extends Oe{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Pn={},Bn=class t{_appId=u(Ue);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Pn.hasOwnProperty(n)||(Pn[n]=0),`${n}${e?t._infix+"-":""}${Pn[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})};var ji=" ";function $m(t,n,e){let r=Ui(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(ji)))}function Hm(t,n,e){let r=Ui(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(ji)):t.removeAttribute(n)}function Ui(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var nt=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(nt||{}),Ut,ye;function qm(){if(ye==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ye=!1,ye;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ye=!0;else{let t=Element.prototype.scrollTo;t?ye=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ye=!1}}return ye}function Jm(){if(typeof document!="object"||!document)return nt.NORMAL;if(Ut==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),Ut=nt.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Ut=t.scrollLeft===0?nt.NEGATED:nt.INVERTED),t.remove()}return Ut}function ef(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ts=new g("MATERIAL_ANIMATIONS"),zi=null;function ns(){return u(ts,{optional:!0})?.animationsDisabled||u(mr,{optional:!0})==="NoopAnimations"?"di-disabled":(zi??=u(Bt).matchMedia("(prefers-reduced-motion)").matches,zi?"reduced-motion":"enabled")}function ke(){return ns()!=="enabled"}function mf(t){return t==null?"":typeof t=="string"?t:`${t}px`}function pf(t){return t!=null&&`${t}`!="false"}var V=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(V||{}),jn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=V.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},$i=Re({passive:!0,capture:!0}),Un=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,$i)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,$i)))}_delegateEventHandler=n=>{let e=K(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},rt={enterDuration:225,exitDuration:150},rs=800,Hi=Re({passive:!0,capture:!0}),Vi=["mousedown","touchstart"],Gi=["mouseup","mouseleave","touchend","touchcancel"],is=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),it=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Un;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=ce(r)),o&&o.get(ge).load(is)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},rt),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let a=r.radius||os(n,e,i),c=n-i.left,d=e-i.top,m=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${c-a}px`,f.style.top=`${d-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,r.color!=null&&(f.style.backgroundColor=r.color),f.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(f);let y=window.getComputedStyle(f),I=y.transitionProperty,G=y.transitionDuration,B=I==="none"||G==="0s"||G==="0s, 0s"||i.width===0&&i.height===0,R=new jn(this,f,r,B);f.style.transform="scale3d(1, 1, 1)",R.state=V.FADING_IN,r.persistent||(this._mostRecentTransientRipple=R);let b=null;return!B&&(m||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{b&&(b.fallbackTimer=null),clearTimeout(J),this._finishRippleTransition(R)},O=()=>this._destroyRipple(R),J=setTimeout(O,m+100);f.addEventListener("transitionend",w),f.addEventListener("transitioncancel",O),b={onTransitionEnd:w,onTransitionCancel:O,fallbackTimer:J}}),this._activeRipples.set(R,b),(B||!m)&&this._finishRippleTransition(R),R}fadeOutRipple(n){if(n.state===V.FADING_OUT||n.state===V.HIDDEN)return;let e=n.element,r=D(D({},rt),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=V.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ce(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Vi.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Gi.forEach(e=>{this._triggerElement.addEventListener(e,this,Hi)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===V.FADING_IN?this._startFadeOutTransition(n):n.state===V.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=V.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=V.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Je(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rs;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Qe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===V.VISIBLE||n.config.terminateOnPointerUp&&n.state===V.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Vi.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Gi.forEach(e=>n.removeEventListener(e,this,Hi)),this._pointerUpEventsRegistered=!1))}};function os(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var zn=new g("mat-ripple-global-options"),Ff=(()=>{class t{_elementRef=u(Y);_animationsDisabled=ke();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(S),r=u(U),i=u(zn,{optional:!0}),o=u(N);this._globalOptions=i||{},this._rippleRenderer=new it(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,D(D({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&Te("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var as={capture:!0},ss=["focus","mousedown","mouseenter","touchstart"],$n="mat-ripple-loader-uninitialized",Hn="mat-ripple-loader-class-name",Wi="mat-ripple-loader-centered",zt="mat-ripple-loader-disabled",Ki=(()=>{class t{_document=u(v);_animationsDisabled=ke();_globalRippleOptions=u(zn,{optional:!0});_platform=u(U);_ngZone=u(S);_injector=u(N);_eventCleanups;_hosts=new Map;constructor(){let e=u(we).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ss.map(r=>e.listen(this._document,r,this._onInteraction,as)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute($n,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(Hn))&&e.setAttribute(Hn,r.className||""),r.centered&&e.setAttribute(Wi,""),r.disabled&&e.setAttribute(zt,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(zt,""):e.removeAttribute(zt)}_onInteraction=e=>{let r=K(e);if(r instanceof HTMLElement){let i=r.closest(`[${$n}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(Hn)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??rt.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??rt.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(zt),rippleConfig:{centered:e.hasAttribute(Wi),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},d=new it(c,this._ngZone,r,this._platform,this._injector),m=!c.rippleDisabled;m&&d.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:d,hasSetUpEvents:m}),e.removeAttribute($n)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zi=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var cs=["mat-icon-button",""],us=["*"],ds=new g("MAT_BUTTON_CONFIG");function Yi(t){return t==null?void 0:sn(t)}var Vn=(()=>{class t{_elementRef=u(Y);_ngZone=u(S);_animationsDisabled=ke();_config=u(ds,{optional:!0});_focusMonitor=u(Sn);_cleanupClick;_renderer=u(ft);_rippleLoader=u(Ki);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(ge).load(Zi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(an("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Ar(i.color?"mat-"+i.color:""),Te("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",fe],disabled:[2,"disabled","disabled",fe],ariaDisabled:[2,"aria-disabled","ariaDisabled",fe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",fe],tabIndex:[2,"tabIndex","tabIndex",Yi],_tabindex:[2,"tabindex","_tabindex",Yi]}})}return t})(),ls=(()=>{class t extends Vn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[pt],attrs:cs,ngContentSelectors:us,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(gt(),Ae(0,"span",0),Ie(1),Ae(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var ms=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(v)}),fs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Xi(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?fs.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ps=(()=>{class t{get value(){return this.valueSignal()}valueSignal=oe("ltr");change=new qt;constructor(){let e=u(ms,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Xi(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $t=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=k({})}return t})();var qi=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[$t]})}return t})();var hs=["matButton",""],gs=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],bs=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ji=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),sp=(()=>{class t extends Vn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ys(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?Ji.get(this._appearance):null,o=Ji.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[pt],attrs:hs,ngContentSelectors:bs,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(gt(gs),Ae(0,"span",0),Ie(1),wr(2,"span",1),Ie(3,1),Cr(),Ie(4,2),Ae(5,"span",2)(6,"span",3)),r&2&&Te("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function ys(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var cp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[qi,$t]})}return t})();var vs="draft";function s(t,n=""){return typeof t=="string"?t.trim():n}function z(t){return Array.isArray(t)?t.map(n=>s(n)).filter(Boolean):[]}function Ht(t,n=!1){return typeof t=="boolean"?t:n}function Qi(t,n=0){return typeof t=="number"&&Number.isFinite(t)?t:n}function Vt(t){return t==="published"||t==="archived"||t==="draft"?t:vs}function Gt(t){let n=s(t);return Number.isNaN(Date.parse(n))?"":n}function Wt(t){return z(t).map(n=>n.toLowerCase())}function eo(t){let n=s(t?.src),e=s(t?.alt);if(!(!n||!e))return{src:n,alt:e,caption:s(t?.caption)||void 0}}function _s(t){if(!Array.isArray(t))return[];let n=[];for(let e of t)switch(s(e?.type)){case"paragraph":{let i=s(e?.text);i&&n.push({type:"paragraph",text:i});break}case"image":{let i=eo(e);i&&n.push(D({type:"image"},i));break}case"callout":{let i=s(e?.text);if(i){let o=s(e?.tone);n.push({type:"callout",title:s(e?.title)||void 0,text:i,tone:o==="neutral"||o==="executive"||o==="technical"||o==="warning"?o:void 0})}break}case"list":{let i=z(e?.items);i.length&&n.push({type:"list",title:s(e?.title)||void 0,items:i});break}case"table":{let i=z(e?.columns),o=Array.isArray(e?.rows)?e.rows.map(a=>Array.isArray(a)?z(a):[]).filter(a=>a.length>0):[];i.length&&o.length&&n.push({type:"table",title:s(e?.title)||void 0,columns:i,rows:o});break}case"cards":{let i=Array.isArray(e?.items)?e.items.map(o=>({title:s(o?.title),description:s(o?.description)})).filter(o=>!!o.title&&!!o.description):[];i.length&&n.push({type:"cards",items:i});break}case"code":{let i=s(e?.code);i&&n.push({type:"code",title:s(e?.title)||void 0,language:s(e?.language)||void 0,code:i});break}case"component":{let i=s(e?.component);i&&n.push({type:"component",component:i,fallback:s(e?.fallback)||void 0,title:s(e?.title)||void 0,description:s(e?.description)||void 0,config:e?.config&&typeof e.config=="object"&&!Array.isArray(e.config)?e.config:void 0});break}default:break}return n}function Gn(t){if(!Array.isArray(t))return[];let n=[];for(let e of t){let r=s(e?.heading),i=z(e?.paragraphs),o=s(e?.intro)||void 0,a=s(e?.eyebrow)||void 0,c=s(e?.layout),d=_s(e?.blocks),m=eo(e?.image),f=s(e?.component)||void 0,y=s(e?.fallback)||void 0,I=s(e?.callout)||void 0;!r&&i.length===0&&!o&&!m&&!f&&!I&&d.length===0||n.push({heading:r||"Section",eyebrow:a,intro:o,layout:c==="split-image-left"||c==="split-image-right"||c==="default"?c:void 0,blocks:d,paragraphs:i,image:m,component:f,componentTitle:s(e?.componentTitle)||void 0,componentDescription:s(e?.componentDescription)||void 0,componentConfig:e?.componentConfig&&typeof e.componentConfig=="object"&&!Array.isArray(e.componentConfig)?e.componentConfig:void 0,fallback:y,callout:I})}return n}function Ds(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.label),r=s(n?.value);return e&&r?{label:e,value:r}:null}).filter(n=>n!==null):[]}function Es(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.label),r=s(n?.anchor);return e&&r?{label:e,anchor:r}:null}).filter(n=>n!==null):[]}function ws(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.label),r=s(n?.href),i=s(n?.type);return!e||!r?null:{label:e,href:r,description:s(n?.description)||void 0,number:s(n?.number)||void 0,type:i==="image"||i==="pdf"||i==="data"||i==="schema"||i==="checklist"||i==="link"||i==="component"||i==="template"?i:void 0}}).filter(n=>n!==null):[]}function Cs(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.title),r=s(n?.slug);return e&&r?{title:e,slug:r,description:s(n?.description)||void 0}:null}).filter(n=>n!==null):[]}function As(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.title),r=s(n?.description),i=s(n?.href)||void 0,o=s(n?.anchor)||void 0,a=s(n?.buttonLabel)||void 0,c=s(n?.action);return e&&r?{title:e,description:r,href:i,anchor:o,buttonLabel:a,action:c==="open-templates"?"open-templates":void 0}:null}).filter(n=>n!==null):[]}function Kt(t){if(!t||typeof t!="object")return;let n=Ds(t?.snapshot),e=Es(t?.toc),r=ws(t?.assets),i=Cs(t?.related),o=As(t?.callsToAction);if(!(!n.length&&!e.length&&!r.length&&!i.length&&!o.length))return{snapshot:n.length?n:void 0,toc:e.length?e:void 0,assets:r.length?r:void 0,related:i.length?i:void 0,callsToAction:o.length?o:void 0}}function Zt(t,n,e){return{title:s(t?.title,n),description:s(t?.description,e)}}function Wn(t){return{version:Qi(t?.version,1),updatedOn:Gt(t?.updatedOn)||new Date().toISOString()}}function Yt(t,n){let e=Wn(t);return ie(D({},e),{eyebrow:s(t?.eyebrow,"cweise.com"),headline:s(t?.headline,n),intro:s(t?.intro)})}function ot(t){return t==="published"}function Kn(t){return[...t].sort((n,e)=>{let r=Date.parse(e.publishedOn??"")||0,i=Date.parse(n.publishedOn??"")||0;return r-i})}function Zn(t,n,e){let r=new Map(n.map(c=>[c.slug,c])),i=t.map(c=>r.get(c)).filter(c=>!!c),o=n.filter(c=>c.featured&&!i.some(d=>d.slug===c.slug)),a=[...i,...o];return typeof e=="number"?a.slice(0,e):a}function Is(t){let n=s(t?.id),e=s(t?.title),r=s(t?.description);return!n||!e||!r?null:{id:n,icon:s(t?.icon,"insights"),title:e,description:r}}function Ts(t){return{eyebrow:s(t?.eyebrow,"Engineering & Infrastructure"),headline:s(t?.headline,"Operational Intelligence for Complex Organizations"),subheadline:s(t?.subheadline,"Reducing Rework, Risk, and Delivery Gaps"),intro:z(t?.intro),heroImage:s(t?.heroImage,"assets/images/hero-architecture.png"),featuredWritingSlugs:z(t?.featuredWritingSlugs),featuredFrameworkSlugs:z(t?.featuredFrameworkSlugs),featuredGuideSlugs:z(t?.featuredGuideSlugs),themes:Array.isArray(t?.themes)?t.themes.map(n=>Is(n)).filter(n=>n!==null):[],themesSection:{eyebrow:s(t?.themesSection?.eyebrow,"Core Themes"),headline:s(t?.themesSection?.headline,"Where I Focus"),support:s(t?.themesSection?.support)},writingSection:{eyebrow:s(t?.writingSection?.eyebrow,"Featured Writing"),headline:s(t?.writingSection?.headline,"Recent Essays"),support:s(t?.writingSection?.support)},frameworkSection:{eyebrow:s(t?.frameworkSection?.eyebrow,"Featured Framework"),headline:s(t?.frameworkSection?.headline,"Featured Framework"),support:s(t?.frameworkSection?.support)},guidesSection:{eyebrow:s(t?.guidesSection?.eyebrow,"Operating Tools"),headline:s(t?.guidesSection?.headline,"Guides for Turning Friction Into Action"),support:s(t?.guidesSection?.support,"Short, practical tools for converting ambiguity, stuck energy, and recurring friction into clearer next steps.")},aboutSection:{eyebrow:s(t?.aboutSection?.eyebrow,"About"),headline:s(t?.aboutSection?.headline,"How I Think. What I Do."),support:s(t?.aboutSection?.support)}}}function Fs(t){return{primary:Array.isArray(t?.primary)?t.primary.map(n=>({label:s(n?.label),path:s(n?.path)})).filter(n=>n.label&&n.path):[],social:Array.isArray(t?.social)?t.social.map(n=>({label:s(n?.label),url:s(n?.url),icon:s(n?.icon,"link")})).filter(n=>n.label&&n.url):[]}}function Ms(t){return{featuredLinks:Array.isArray(t?.featuredLinks)?t.featuredLinks.map(n=>({label:s(n?.label),path:s(n?.path)})).filter(n=>n.label&&n.path):[]}}function Ss(t){return{eyebrow:s(t?.eyebrow,"Stay Connected"),headline:s(t?.headline,"Thoughts on operations, systems, and execution."),intro:s(t?.intro),note:s(t?.note),ctaLabel:s(t?.ctaLabel,"Connect"),ctaUrl:s(t?.ctaUrl,"/connect")}}function Yn(t){let n=Wn(t?.meta);return{meta:ie(D({},n),{siteName:s(t?.meta?.siteName,"cweise.com"),siteUrl:s(t?.meta?.siteUrl,"https://cweise.com"),title:s(t?.meta?.title,"Operational Intelligence for Complex Organizations"),description:s(t?.meta?.description),author:s(t?.meta?.author,"Charles Weise"),footerTagline:s(t?.meta?.footerTagline,"Operational intelligence for complex organizations."),contactEmail:s(t?.meta?.contactEmail,"iweise@me.com")}),home:Ts(t?.home),navigation:Fs(t?.navigation),footer:Ms(t?.footer),connect:Ss(t?.connect)}}function xs(t){let n=s(t?.id),e=s(t?.slug),r=s(t?.title);if(!n||!e||!r)return null;let i=s(t?.summary);return{id:n,slug:e,title:r,summary:i,status:Vt(t?.status),publishedOn:Gt(t?.publishedOn),readTimeMinutes:Qi(t?.readTimeMinutes,5),featured:Ht(t?.featured),tags:Wt(t?.tags),heroImage:s(t?.heroImage)||void 0,seo:Zt(t?.seo,r,i),body:{intro:s(t?.body?.intro),sections:Gn(t?.body?.sections)},companion:Kt(t?.companion)}}function to(t){return{meta:Yt(t?.meta,"Writing"),items:Array.isArray(t?.items)?t.items.map(n=>xs(n)).filter(n=>n!==null):[]}}function Rs(t){return Array.isArray(t)?t.map(n=>{let e=s(n?.title),r=s(n?.description);return!e||!r?null:{title:e,description:r}}).filter(n=>!!n):[]}function Os(t){let n=s(t?.id),e=s(t?.slug),r=s(t?.title);if(!n||!e||!r)return null;let i=s(t?.summary),o={premise:s(t?.body?.premise),components:Rs(t?.body?.components),application:s(t?.body?.application),sections:Gn(t?.body?.sections)};return{id:n,slug:e,title:r,summary:i,status:Vt(t?.status),publishedOn:Gt(t?.publishedOn),featured:Ht(t?.featured),category:s(t?.category),tags:Wt(t?.tags),diagramImage:s(t?.diagramImage)||void 0,seo:Zt(t?.seo,r,i),body:o,companion:Kt(t?.companion)}}function no(t){return{meta:Yt(t?.meta,"Frameworks"),items:Array.isArray(t?.items)?t.items.map(n=>Os(n)).filter(n=>n!==null):[]}}function ks(t){let n=s(t?.id),e=s(t?.slug),r=s(t?.title);if(!n||!e||!r)return null;let i=s(t?.summary),o={intro:s(t?.body?.intro),sections:Gn(t?.body?.sections)};return{id:n,slug:e,title:r,summary:i,status:Vt(t?.status),featured:Ht(t?.featured),icon:s(t?.icon,"handyman"),tags:Wt(t?.tags),heroImage:s(t?.heroImage)||void 0,seo:Zt(t?.seo,r,i),body:o,companion:Kt(t?.companion)}}function ro(t){return{meta:Yt(t?.meta,"Guides"),items:Array.isArray(t?.items)?t.items.map(n=>ks(n)).filter(n=>n!==null):[]}}function Ns(t){let n=s(t?.id),e=s(t?.slug),r=s(t?.title);if(!n||!e||!r)return null;let i=s(t?.summary),o={context:s(t?.body?.context),challenge:s(t?.body?.challenge),approach:s(t?.body?.approach),outcome:s(t?.body?.outcome),notes:z(t?.body?.notes)};return{id:n,slug:e,title:r,summary:i,status:Vt(t?.status),publishedOn:Gt(t?.publishedOn),featured:Ht(t?.featured),domain:s(t?.domain),icon:s(t?.icon)||void 0,tags:Wt(t?.tags),thumbnail:s(t?.thumbnail)||void 0,seo:Zt(t?.seo,r,i),body:o,companion:Kt(t?.companion)}}function io(t){return{meta:Yt(t?.meta,"Initiatives"),items:Array.isArray(t?.items)?t.items.map(n=>Ns(n)).filter(n=>n!==null):[]}}function oo(t){let n={headline:s(t?.content?.headline,"How I Think. What I Do."),narrative:z(t?.content?.narrative),principles:z(t?.content?.principles),focusAreas:z(t?.content?.focusAreas),closing:s(t?.content?.closing)};return{meta:Wn(t?.meta),content:n}}var ao=Yn({meta:{version:1,updatedOn:"2026-05-16",siteName:"cweise.com",siteUrl:"https://cweise.com",title:"Operational Intelligence for Complex Organizations",description:"Operational intelligence for engineering and infrastructure organizations.",author:"Charles Weise",footerTagline:"Operational intelligence for complex organizations.",contactEmail:"iweise@me.com"},home:{eyebrow:"Engineering & Infrastructure",headline:"Operational Intelligence for Complex Organizations",subheadline:"Reducing Rework, Risk, and Delivery Gaps",intro:[],heroImage:"assets/images/hero-architecture.png",featuredWritingSlugs:[],featuredFrameworkSlugs:[],featuredGuideSlugs:[],themes:[],themesSection:{eyebrow:"Core Themes",headline:"Where I Focus",support:""},writingSection:{eyebrow:"Featured Writing",headline:"Recent Essays",support:""},frameworkSection:{eyebrow:"Featured Framework",headline:"Featured Framework",support:""},guidesSection:{eyebrow:"Operating Tools",headline:"Guides for Turning Friction Into Action",support:"Short, practical tools for converting ambiguity, stuck energy, and recurring friction into clearer next steps."},aboutSection:{eyebrow:"About",headline:"How I Think. What I Do.",support:""}},navigation:{primary:[],social:[]},footer:{featuredLinks:[]},connect:{eyebrow:"Stay Connected",headline:"Thoughts on operations, systems, and execution.",intro:"",note:"",ctaLabel:"Connect",ctaUrl:"/connect"}}),so={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Writing",headline:"Writing",intro:""},items:[]},co={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Frameworks",headline:"Frameworks",intro:""},items:[]},uo={meta:{version:1,updatedOn:"2026-05-27",eyebrow:"Guides",headline:"Operating Tools",intro:""},items:[]},lo={meta:{version:1,updatedOn:"2026-05-16",eyebrow:"Initiatives",headline:"Initiatives",intro:""},items:[]},mo={meta:{version:1,updatedOn:"2026-05-16"},content:{headline:"How I Think. What I Do.",narrative:[],principles:[],focusAreas:[],closing:""}};var fo=class t{http=u(kt);siteFile$=this.loadFile("assets/content/site.json",ao,Yn);writingFile$=this.loadFile("assets/content/writing.json",so,to);frameworksFile$=this.loadFile("assets/content/frameworks.json",co,no);guidesFile$=this.loadFile("assets/content/guides.json",uo,ro);initiativesFile$=this.loadFile("assets/content/initiatives.json",lo,io);aboutFile$=this.loadFile("assets/content/about.json",mo,oo);getSiteMeta(){return this.siteFile$.pipe(p(n=>n.meta))}getNavigation(){return this.siteFile$.pipe(p(n=>n.navigation))}getFooterContent(){return this.siteFile$.pipe(p(n=>n.footer))}getConnectContent(){return this.siteFile$.pipe(p(n=>n.connect))}getHomeContent(){return Z({site:this.siteFile$,featuredWriting:this.getFeaturedWriting(),featuredFrameworks:this.getFeaturedFrameworks(),featuredGuides:this.getFeaturedGuides(),about:this.getAboutContent()}).pipe(p(({site:n,featuredWriting:e,featuredFrameworks:r,featuredGuides:i,about:o})=>({meta:n.meta,navigation:n.navigation,footer:n.footer,connect:n.connect,home:n.home,featuredWriting:e,featuredFrameworks:r,featuredGuides:i,about:o})))}getWritingPage(){return Z({meta:this.writingFile$.pipe(p(n=>n.meta)),items:this.getWritingIndex()}).pipe(p(({meta:n,items:e})=>({meta:n,items:e})))}getWritingIndex(){return this.writingFile$.pipe(p(n=>n.items.filter(e=>ot(e.status))),p(n=>Kn(n)))}getWritingBySlug(n){return this.getWritingIndex().pipe(p(e=>e.find(r=>r.slug===n.trim())??null))}getFeaturedWriting(n){return Z([this.siteFile$,this.getWritingIndex()]).pipe(p(([e,r])=>Zn(e.home.featuredWritingSlugs,r,n)))}getFrameworksPage(){return Z({meta:this.frameworksFile$.pipe(p(n=>n.meta)),items:this.getFrameworksIndex()}).pipe(p(({meta:n,items:e})=>({meta:n,items:e})))}getFrameworksIndex(){return this.frameworksFile$.pipe(p(n=>n.items.filter(e=>ot(e.status))),p(n=>Kn(n)))}getFrameworkBySlug(n){return this.getFrameworksIndex().pipe(p(e=>e.find(r=>r.slug===n.trim())??null))}getFeaturedFrameworks(n){return this.getFrameworksIndex().pipe(p(e=>{let r=n??1;return e.slice(0,r)}))}getGuidesPage(){return Z({meta:this.guidesFile$.pipe(p(n=>n.meta)),items:this.getGuidesIndex()}).pipe(p(({meta:n,items:e})=>({meta:n,items:e})))}getGuidesIndex(){return this.guidesFile$.pipe(p(n=>n.items.filter(e=>ot(e.status))))}getGuideBySlug(n){let e=n.trim();return this.getGuidesIndex().pipe(p(r=>r.find(i=>i.slug===e||i.slug===`guides/${e}`)??null))}getFeaturedGuides(n){return Z([this.siteFile$,this.getGuidesIndex()]).pipe(p(([e,r])=>Zn(e.home.featuredGuideSlugs,r,n)))}getInitiativesPage(){return Z({meta:this.initiativesFile$.pipe(p(n=>n.meta)),items:this.getInitiativesIndex()}).pipe(p(({meta:n,items:e})=>({meta:n,items:e})))}getInitiativesIndex(){return this.initiativesFile$.pipe(p(n=>n.items.filter(e=>ot(e.status))))}getInitiativeBySlug(n){return this.getInitiativesIndex().pipe(p(e=>e.find(r=>r.slug===n.trim())??null))}getFeaturedInitiatives(n){return this.getInitiativesIndex().pipe(p(e=>e.filter(r=>r.featured)),p(e=>typeof n=="number"?e.slice(0,n):e))}getAboutContent(){return this.aboutFile$.pipe(p(n=>n.content))}loadFile(n,e,r){return this.http.get(n).pipe(p(i=>r(i)),Qn(i=>(console.error(`Content file failed to load: ${n}`,i),le(e))),ir({bufferSize:1,refCount:!0}))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})};export{bt as a,Lr as b,Oo as c,Lo as d,Bo as e,hu as f,_n as g,ra as h,kt as i,Ma as j,Wd as k,An as l,nl as m,Ra as n,K as o,U as p,Oa as q,ce as r,Sn as s,ge as t,Ii as u,Na as v,xn as w,Si as x,ja as y,Xa as z,Ja as A,Qa as B,Bi as C,Nn as D,Ln as E,Bn as F,$m as G,Hm as H,nt as I,qm as J,Jm as K,ef as L,ns as M,ke as N,mf as O,pf as P,V as Q,zn as R,Ff as S,Ki as T,Zi as U,ls as V,ps as W,$t as X,qi as Y,sp as Z,cp as _,fo as $};
