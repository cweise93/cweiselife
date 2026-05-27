import{a as Pa}from"./chunk-C54K2ZZH.js";import{a as Ti,c as Oi}from"./chunk-FPDM2MPI.js";import{a as gn,b as _n}from"./chunk-LZW3ZCLI.js";import{B as Ea,D as Ia,E as gt,H as mn,I as Ta,J as hn,L as Oa,M as qe,O as Fa,P as Yr,Q as Ri,R as Xt,S as Aa,T as Rt,U as Ei,V as We,W as Pe,X as pn,Y as Ii,Z as fn,c as Sa,o as nt,q as Da,r as Di,s as Dt,t as Ra}from"./chunk-HCTNC6AC.js";import{$ as _,$a as et,$b as J,A as sn,Ab as z,Ac as Ma,B as Fn,Bb as u,Bc as ve,Cb as p,Cc as Wt,Db as j,Eb as wt,Ec as q,Fb as kt,Fc as Ee,Gb as Mt,Gc as Si,Hb as Vn,Ib as Nn,Jb as Le,K as Xr,Kb as pt,Lb as dn,M as Qr,O as Gt,Ob as X,P as Kr,Pb as k,Q as De,Qa as Pn,Qb as ye,Rb as ee,Sb as $e,T as wi,Ta as m,Tb as Ge,Ub as V,V as Ze,Vb as N,W as dt,Wb as xa,X as Ce,Xb as Mi,Ya as mt,Yb as Bn,Z,Za as ht,Zb as qt,_a as Zr,_b as je,a as be,ab as $t,ac as Ue,b as ze,bc as w,cb as jt,cc as I,d as $r,dc as St,ea as Ye,f as yi,fa as Je,g as ha,ga as An,gb as Y,h as de,ha as ki,hb as we,i as pa,ia as ln,ib as $,ic as Ca,ja as Ht,k as jr,ka as cn,kc as le,l as qr,lb as ue,ma as he,mb as tt,n as fa,na as _e,o as Tn,pb as va,pc as wa,q as Wr,qa as re,s as xi,sb as ba,sc as ft,t as Ci,ta as Ut,tb as oe,tc as Q,ua as ut,ub as R,va as Fe,vb as E,vc as un,wb as ya,wc as ka,xa as ne,xb as Re,y as ga,ya as _a,yb as ae,yc as Ae,z as On,zb as se,zc as Ft}from"./chunk-WXUNVJNW.js";function Kd(t,n){t&1&&Mt(0,"div",2)}var Zd=new Z("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Na=(()=>{class t{_elementRef=_(ne);_ngZone=_(_e);_changeDetectorRef=_(ve);_renderer=_(et);_cleanupTransitionEnd;constructor(){let e=Oa(),i=_(Zd,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Va(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Va(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new he;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(oe("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Ue("mat-"+r.color),J("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ee],bufferValue:[2,"bufferValue","bufferValue",Ee],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(wt(0,"div",0),Mt(1,"div",1),R(2,Kd,1,0,"div",2),kt(),wt(3,"div",3),Mt(4,"span",4),kt(),wt(5,"div",5),Mt(6,"span",4),kt()),i&2&&(m(),je("flex-basis",r._getBufferBarFlexBasis()),m(),E(r.mode==="buffer"?2:-1),m(),je("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Va(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var Ba=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[Pe]})}return t})();var za={totalScore:0,maxScore:0,completedDimensions:0,totalDimensions:0,grade:"Not classified",gradeCode:"G0",gradeTitle:"Disposable Agent",posture:"Choose scores to classify the agent",overrideCount:0,blockerCount:0,overrideLabels:[],blockerLabels:[],requiredEvidence:[]},Fi=class t{snapshot=re(za);exportJsonHandler=null;exportCsvHandler=null;update(n){this.snapshot.set(n)}registerExports(n,e){this.exportJsonHandler=n,this.exportCsvHandler=e}exportJson(){this.exportJsonHandler?.()}exportCsv(){this.exportCsvHandler?.()}reset(){this.snapshot.set(za),this.exportJsonHandler=null,this.exportCsvHandler=null}static \u0275fac=function(e){return new(e||t)};static \u0275prov=dt({token:t,factory:t.\u0275fac,providedIn:"root"})};var xn=new Z("");function to(t){return t==null||no(t)===0}function no(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var $i=new Z(""),Xa=new Z(""),eu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,La=class{static min(n){return tu(n)}static max(n){return nu(n)}static required(n){return iu(n)}static requiredTrue(n){return ru(n)}static email(n){return ou(n)}static minLength(n){return au(n)}static maxLength(n){return su(n)}static pattern(n){return lu(n)}static nullValidator(n){return Qa()}static compose(n){return ts(n)}static composeAsync(n){return ns(n)}};function tu(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function nu(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function iu(t){return to(t.value)?{required:!0}:null}function ru(t){return t.value===!0?null:{required:!0}}function ou(t){return to(t.value)||eu.test(t.value)?null:{email:!0}}function au(t){return n=>{let e=n.value?.length??no(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function su(t){return n=>{let e=n.value?.length??no(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function lu(t){if(!t)return Qa;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(to(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Qa(t){return null}function Ka(t){return t!=null}function Za(t){return va(t)?fa(t):t}function Ya(t){let n={};return t.forEach(e=>{n=e!=null?be(be({},n),e):n}),Object.keys(n).length===0?null:n}function Ja(t,n){return n.map(e=>e(t))}function cu(t){return!t.validate}function es(t){return t.map(n=>cu(n)?n:e=>n.validate(e))}function ts(t){if(!t)return null;let n=t.filter(Ka);return n.length==0?null:function(e){return Ya(Ja(e,n))}}function io(t){return t!=null?ts(es(t)):null}function ns(t){if(!t)return null;let n=t.filter(Ka);return n.length==0?null:function(e){let i=Ja(e,n).map(Za);return ga(i).pipe(xi(Ya))}}function ro(t){return t!=null?ns(es(t)):null}function Ga(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function is(t){return t._rawValidators}function rs(t){return t._rawAsyncValidators}function Jr(t){return t?Array.isArray(t)?t:[t]:[]}function Pi(t,n){return Array.isArray(t)?t.includes(n):t===n}function Ha(t,n){let e=Jr(n);return Jr(t).forEach(r=>{Pi(e,r)||e.push(r)}),e}function Ua(t,n){return Jr(n).filter(e=>!Pi(t,e))}var Vi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=io(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ro(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},yn=class extends Vi{name;get formDirective(){return null}get path(){return null}},$a=class extends Vi{_parent=null;name=null;valueAccessor=null};var zn="VALID",Ai="INVALID",vn="PENDING",Ln="DISABLED",At=class{},Ni=class extends At{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Hn=class extends At{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Un=class extends At{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},bn=class extends At{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Bi=class extends At{source;constructor(n){super(),this.source=n}},zi=class extends At{source;constructor(n){super(),this.source=n}};function os(t){return(ji(t)?t.validators:t)||null}function du(t){return Array.isArray(t)?io(t):t||null}function as(t,n){return(ji(n)?n.asyncValidators:t)||null}function uu(t){return Array.isArray(t)?ro(t):t||null}function ji(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function mu(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new wi(1e3,"");if(!i[e])throw new wi(1001,"")}function hu(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new wi(-1002,"")})}var Li=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ft(this.statusReactive)}set status(n){ft(()=>this.statusReactive.set(n))}_status=Q(()=>this.statusReactive());statusReactive=re(void 0);get valid(){return this.status===zn}get invalid(){return this.status===Ai}get pending(){return this.status===vn}get disabled(){return this.status===Ln}get enabled(){return this.status!==Ln}errors;get pristine(){return ft(this.pristineReactive)}set pristine(n){ft(()=>this.pristineReactive.set(n))}_pristine=Q(()=>this.pristineReactive());pristineReactive=re(!0);get dirty(){return!this.pristine}get touched(){return ft(this.touchedReactive)}set touched(n){ft(()=>this.touchedReactive.set(n))}_touched=Q(()=>this.touchedReactive());touchedReactive=re(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ha(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ha(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ua(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ua(n,this._rawAsyncValidators))}hasValidator(n){return Pi(this._rawValidators,n)}hasAsyncValidator(n){return Pi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ze(be({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Un(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Un(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ze(be({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Hn(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Hn(!0,i))}markAsPending(n={}){this.status=vn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ze(be({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ln,this.errors=null,this._forEachChild(r=>{r.disable(ze(be({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ni(this.value,i)),this._events.next(new bn(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ze(be({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=zn,this._forEachChild(i=>{i.enable(ze(be({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ze(be({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===zn||this.status===vn)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ni(this.value,e)),this._events.next(new bn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ze(be({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ln:zn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=vn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Za(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new bn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new he,this.statusChanges=new he}_calculateStatus(){return this._allControlsDisabled()?Ln:this.errors?Ai:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vn)?vn:this._anyControlsHaveStatus(Ai)?Ai:zn}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Hn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Un(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ji(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=du(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=uu(this._rawAsyncValidators)}},Gi=class extends Li{constructor(n,e,i){super(os(e),as(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){hu(this,!0,n),Object.keys(n).forEach(i=>{mu(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,ze(be({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new zi(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ss=new Z("",{factory:()=>ls}),ls="always";function eo(t,n,e=ls){oo(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),fu(t,n),_u(t,n),gu(t,n),pu(t,n)}function ja(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Ui(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Hi(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function pu(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function oo(t,n){let e=is(t);n.validator!==null?t.setValidators(Ga(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=rs(t);n.asyncValidator!==null?t.setAsyncValidators(Ga(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Hi(n._rawValidators,r),Hi(n._rawAsyncValidators,r)}function Ui(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=is(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=rs(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Hi(n._rawValidators,i),Hi(n._rawAsyncValidators,i),e}function fu(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&cs(t,n)})}function gu(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&cs(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function cs(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function _u(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ds(t,n){t==null,oo(t,n)}function vu(t,n){return Ui(t,n)}function us(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function bu(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var yu={provide:yn,useExisting:Ze(()=>xu)},Gn=Promise.resolve(),xu=(()=>{class t extends yn{callSetDisabledState;get submitted(){return ft(this.submittedReactive)}_submitted=Q(()=>this.submittedReactive());submittedReactive=re(!1);_directives=new Set;form;ngSubmit=new he;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Gi({},io(e),ro(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Gn.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),eo(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Gn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Gn.then(()=>{let i=this._findContainer(e.path),r=new Gi({});ds(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Gn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Gn.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),us(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Bi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)($t($i,10),$t(Xa,10),$t(ss,8))};static \u0275dir=$({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&X("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[le([yu]),ue]})}return t})();function qa(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Wa(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Cu=class extends Li{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(os(e),as(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ji(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Wa(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new zi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){qa(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){qa(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Wa(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var wu=t=>t instanceof Cu;var ku=(()=>{class t extends yn{callSetDisabledState;get submitted(){return ft(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Q(()=>this._submittedReactive());_submittedReactive=re(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ui(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return eo(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){ja(e.control||null,e,!1),bu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,us(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Bi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(ja(i||null,e),wu(r)&&(eo(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);ds(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&vu(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){oo(this.form,this),this._oldForm&&Ui(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)($t($i,10),$t(Xa,10),$t(ss,8))};static \u0275dir=$({type:t,features:[ue,ut]})}return t})();var Mu={provide:yn,useExisting:Ze(()=>Su)},Su=(()=>{class t extends ku{form=null;ngSubmit=new he;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&X("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[le([Mu]),ue]})}return t})();var ms=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=dt({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hs=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var ao=class{_box;_destroyed=new de;_resizeSubject=new de;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new yi(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(sn(e=>e.some(i=>i.target===n)),Qr({bufferSize:1,refCount:!0}),De(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ps=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=_(_e);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ao(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=dt({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Du=["notch"],Ru=["matFormFieldNotchedOutline",""],Eu=["*"],fs=["iconPrefixContainer"],gs=["textPrefixContainer"],_s=["iconSuffixContainer"],vs=["textSuffixContainer"],Iu=["textField"],Tu=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ou=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Fu(t,n){t&1&&j(0,"span",21)}function Au(t,n){if(t&1&&(u(0,"label",20),ee(1,1),R(2,Fu,1,0,"span",21),p()),t&2){let e=k(2);z("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),E(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Pu(t,n){if(t&1&&R(0,Au,3,5,"label",20),t&2){let e=k();E(e._hasFloatingLabel()?0:-1)}}function Vu(t,n){t&1&&j(0,"div",7)}function Nu(t,n){}function Bu(t,n){if(t&1&&tt(0,Nu,0,0,"ng-template",13),t&2){k(2);let e=qt(1);z("ngTemplateOutlet",e)}}function zu(t,n){if(t&1&&(u(0,"div",9),R(1,Bu,1,1,null,13),p()),t&2){let e=k();z("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),E(e._forceDisplayInfixLabel()?-1:1)}}function Lu(t,n){t&1&&(u(0,"div",10,2),ee(2,2),p())}function Gu(t,n){t&1&&(u(0,"div",11,3),ee(2,3),p())}function Hu(t,n){}function Uu(t,n){if(t&1&&tt(0,Hu,0,0,"ng-template",13),t&2){k();let e=qt(1);z("ngTemplateOutlet",e)}}function $u(t,n){t&1&&(u(0,"div",14,4),ee(2,4),p())}function ju(t,n){t&1&&(u(0,"div",15,5),ee(2,5),p())}function qu(t,n){t&1&&j(0,"div",16)}function Wu(t,n){t&1&&(u(0,"div",18),ee(1,6),p())}function Xu(t,n){if(t&1&&(u(0,"mat-hint",22),w(1),p()),t&2){let e=k(2);z("id",e._hintLabelId),m(),I(e.hintLabel)}}function Qu(t,n){if(t&1&&(u(0,"div",19),R(1,Xu,2,2,"mat-hint",22),ee(2,7),j(3,"div",23),ee(4,8),p()),t&2){let e=k();m(),E(e.hintLabel?1:-1)}}var bs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["mat-label"]]})}return t})(),Ku=new Z("MatError");var ys=(()=>{class t{align="start";id=_(gt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(dn("id",r.id),oe("align",null),J("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Zu=new Z("MatPrefix");var Yu=new Z("MatSuffix");var Ds=new Z("FloatingLabelParent"),xs=(()=>{class t{_elementRef=_(ne);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=_(ps);_ngZone=_(_e);_parent=_(Ds);_resizeSubscription=new $r;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ju(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Ju(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Cs="mdc-line-ripple--active",qi="mdc-line-ripple--deactivating",ws=(()=>{class t{_elementRef=_(ne);_cleanupTransitionEnd;constructor(){let e=_(_e),i=_(et);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(qi),e.add(Cs)}deactivate(){this._elementRef.nativeElement.classList.add(qi)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(qi);e.propertyName==="opacity"&&r&&i.remove(Cs,qi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),ks=(()=>{class t{_elementRef=_(ne);_ngZone=_(_e);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ge(Du,5),i&2){let o;V(o=N())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ru,ngContentSelectors:Eu,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ye(),Mt(0,"div",1),wt(1,"div",2,0),ee(3),kt(),Mt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),em=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t})}return t})();var tm=new Z("MatFormField"),nm=new Z("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ms="fill",im="auto",Ss="fixed",rm="translateY(-50%)",Dv=(()=>{class t{_elementRef=_(ne);_changeDetectorRef=_(ve);_platform=_(nt);_idGenerator=_(gt);_ngZone=_(_e);_defaults=_(nm,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ft("iconPrefixContainer");_textPrefixContainerSignal=Ft("textPrefixContainer");_iconSuffixContainerSignal=Ft("iconSuffixContainer");_textSuffixContainerSignal=Ft("textSuffixContainer");_prefixSuffixContainers=Q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ma(bs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Fa(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||im}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Ms;this._appearanceSignal.set(i)}_appearanceSignal=re(Ms);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ss}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ss}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new de;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=qe();constructor(){let e=this._defaults,i=_(We);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ut(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Gt([void 0,void 0]),xi(()=>[i.errorState,i.userAriaDescribedBy]),Xr(),sn(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(De(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),On(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Si({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,g=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,S=`var(--mat-mdc-form-field-label-transform, ${rm} translateX(${g}))`,C=a+s+c+l;return[S,C]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(xa(o,r._labelChild,bs,5),$e(o,em,5)(o,Zu,5)(o,Yu,5)(o,Ku,5)(o,ys,5)),i&2){Bn();let a;V(a=N())&&(r._formFieldControl=a.first),V(a=N())&&(r._prefixChildren=a),V(a=N())&&(r._suffixChildren=a),V(a=N())&&(r._errorChildren=a),V(a=N())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Mi(r._iconPrefixContainerSignal,fs,5)(r._textPrefixContainerSignal,gs,5)(r._iconSuffixContainerSignal,_s,5)(r._textSuffixContainerSignal,vs,5),Ge(Iu,5)(fs,5)(gs,5)(_s,5)(vs,5)(xs,5)(ks,5)(ws,5)),i&2){Bn(4);let o;V(o=N())&&(r._textField=o.first),V(o=N())&&(r._iconPrefixContainer=o.first),V(o=N())&&(r._textPrefixContainer=o.first),V(o=N())&&(r._iconSuffixContainer=o.first),V(o=N())&&(r._textSuffixContainer=o.first),V(o=N())&&(r._floatingLabel=o.first),V(o=N())&&(r._notchedOutline=o.first),V(o=N())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&J("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[le([{provide:tm,useExisting:t},{provide:Ds,useExisting:t}])],ngContentSelectors:Ou,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ye(Tu),tt(0,Pu,1,1,"ng-template",null,0,wa),u(2,"div",6,1),X("click",function(a){return r._control.onContainerClick(a)}),R(4,Vu,1,0,"div",7),u(5,"div",8),R(6,zu,2,2,"div",9),R(7,Lu,3,0,"div",10),R(8,Gu,3,0,"div",11),u(9,"div",12),R(10,Uu,1,1,null,13),ee(11),p(),R(12,$u,3,0,"div",14),R(13,ju,3,0,"div",15),p(),R(14,qu,1,0,"div",16),p(),u(15,"div",17),R(16,Wu,2,0,"div",18)(17,Qu,5,1,"div",19),p()),i&2){let o;m(2),J("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),E(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),E(r._hasOutline()?6:-1),m(),E(r._hasIconPrefix?7:-1),m(),E(r._hasTextPrefix?8:-1),m(2),E(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),E(r._hasTextSuffix?12:-1),m(),E(r._hasIconSuffix?13:-1),m(),E(r._hasOutline()?-1:14),m(),J("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();m(),E((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[xs,ks,Sa,ws,ys],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var om=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],am=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function sm(t,n){t&1&&(u(0,"span",3),ee(1,1),p())}function lm(t,n){t&1&&(u(0,"span",6),ee(1,2),p())}var cm=["*"];var dm=new Z("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Rs=new Z("MatChipAvatar"),Es=new Z("MatChipTrailingIcon"),Is=new Z("MatChipEdit"),Ts=new Z("MatChipRemove"),Fs=new Z("MatChip"),As=(()=>{class t{_elementRef=_(ne);_parentChip=_(Fs);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){_(Dt).load(Rt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),J("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",q],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ee(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),um=(()=>{class t extends As{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&X("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(oe("tabindex",r._getTabindex()),J("mdc-evolution-chip__action--presentational",!1))},features:[ue]})}return t})();var $n=(()=>{class t{_changeDetectorRef=_(ve);_elementRef=_(ne);_tagName=_(ka);_ngZone=_(_e);_focusMonitor=_(Di);_globalRippleOptions=_(Ri,{optional:!0});_document=_(Ht);_onFocus=new de;_onBlur=new de;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qe();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=_(gt).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new he;destroyed=new he;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=_(Aa);_injector=_(ln);constructor(){let e=_(Dt);e.load(Rt),e.load(Ra),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=On(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&$e(o,Rs,5)(o,Is,5)(o,Es,5)(o,Ts,5)(o,Rs,5)(o,Es,5)(o,Is,5)(o,Ts,5),i&2){let a;V(a=N())&&(r.leadingIcon=a.first),V(a=N())&&(r.editIcon=a.first),V(a=N())&&(r.trailingIcon=a.first),V(a=N())&&(r.removeIcon=a.first),V(a=N())&&(r._allLeadingIcons=a),V(a=N())&&(r._allTrailingIcons=a),V(a=N())&&(r._allEditIcons=a),V(a=N())&&(r._allRemoveIcons=a)}},viewQuery:function(i,r){if(i&1&&Ge(um,5),i&2){let o;V(o=N())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&X("keydown",function(a){return r._handleKeydown(a)}),i&2&&(dn("id",r.id),oe("role",r.role)("aria-label",r.ariaLabel),Ue("mat-"+(r.color||"primary")),J("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",q],highlighted:[2,"highlighted","highlighted",q],disableRipple:[2,"disableRipple","disableRipple",q],disabled:[2,"disabled","disabled",q]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[le([{provide:Fs,useExisting:t}])],ngContentSelectors:am,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(ye(om),j(0,"span",0),u(1,"span",1)(2,"span",2),R(3,sm,2,0,"span",3),u(4,"span",4),ee(5),j(6,"span",5),p()()(),R(7,lm,2,0,"span",6)),i&2&&(m(3),E(r.leadingIcon?3:-1),m(4),E(r._hasTrailingIcon()?7:-1))},dependencies:[As],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Xi=(()=>{class t{_elementRef=_(ne);_changeDetectorRef=_(ve);_dir=_(We,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new de;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new _a;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Gt(null),Kr(()=>On(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Gt(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Ia(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(De(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(De(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Gt(null),De(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(De(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&$e(o,$n,5),i&2){let a;V(a=N())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&X("keydown",function(a){return r._handleKeydown(a)}),i&2&&oe("role",r.role)},inputs:{disabled:[2,"disabled","disabled",q],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ee(e)]},ngContentSelectors:cm,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ye(),wt(0,"div",0),ee(1),kt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Qi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({providers:[ms,{provide:dm,useValue:{separatorKeyCodes:[13]}}],imports:[pn,Pe]})}return t})();function Ki(t){return t&&typeof t.connect=="function"&&!(t instanceof ha)}var it=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(it||{}),Zi=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((a,s,c)=>{let l,d;if(a.previousIndex==null){let f=()=>i(a,s,c);l=this._insertView(f,c,e,r(a)),d=l?it.INSERTED:it.REPLACED}else c==null?(this._detachAndCacheView(s,e),d=it.REMOVED):(l=this._moveView(s,c,e,r(a)),d=it.MOVED);o&&o({context:l?.context,operation:d,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let a=n();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var mm=20,hm=(()=>{class t{_ngZone=_(_e);_platform=_(nt);_renderer=_(Zr).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new de;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=mm){return this._platform.isBrowser?new yi(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Fn(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Tn()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(sn(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Da(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=dt({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xb=(()=>{class t{elementRef=_(ne);scrollDispatcher=_(hm);ngZone=_(_e);dir=_(We,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new de;_renderer=_(et);_cleanupScroll;_elementScrolled=new de;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&hn()!=mn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),hn()==mn.INVERTED?e.left=e.right:hn()==mn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Ta()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&hn()==mn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&hn()==mn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),pm=20,Ns=(()=>{class t{_platform=_(nt);_listeners;_viewportSize=null;_change=new de;_document=_(Ht);constructor(){let e=_(_e),i=_(Zr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=pm){return e>0?this._change.pipe(Fn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=dt({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bs=new Z("CDK_VIRTUAL_SCROLL_VIEWPORT");var Vs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({})}return t})(),zs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[Pe,Vs,Pe,Vs]})}return t})();var Yi=class{applyChanges(n,e,i,r,o){n.forEachOperation((a,s,c)=>{let l,d;if(a.previousIndex==null){let f=i(a,s,c);l=e.createEmbeddedView(f.templateRef,f.context,f.index),d=it.INSERTED}else c==null?(e.remove(s),d=it.REMOVED):(l=e.get(s),e.move(l,c),d=it.MOVED);o&&o({context:l?.context,operation:d,record:a})})}detach(){}};var fm=[[["caption"]],[["colgroup"],["col"]],"*"],gm=["caption","colgroup, col","*"];function _m(t,n){t&1&&ee(0,2)}function vm(t,n){t&1&&(u(0,"thead",0),Le(1,1),p(),u(2,"tbody",0),Le(3,2)(4,3),p(),u(5,"tfoot",0),Le(6,4),p())}function bm(t,n){t&1&&Le(0,1)(1,2)(2,3)(3,4)}var rt=new Z("CDK_TABLE");var tr=(()=>{class t{template=_(ht);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),nr=(()=>{class t{template=_(ht);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),Hs=(()=>{class t{template=_(ht);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Cn=(()=>{class t{_table=_(rt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&$e(o,tr,5)(o,nr,5)(o,Hs,5),i&2){let a;V(a=N())&&(r.cell=a.first),V(a=N())&&(r.headerCell=a.first),V(a=N())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",q],stickyEnd:[2,"stickyEnd","stickyEnd",q]}})}return t})(),er=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},Us=(()=>{class t extends er{constructor(){super(_(Cn),_(ne))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ue]})}return t})();var $s=(()=>{class t extends er{constructor(){let e=_(Cn),i=_(ne);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ue]})}return t})();var lo=(()=>{class t{template=_(ht);_differs=_(Wt);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof qn?e.headerCell.template:this instanceof co?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,features:[ut]})}return t})(),qn=(()=>{class t extends lo{_table=_(rt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(_(ht),_(Wt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",q]},features:[ue,ut]})}return t})(),co=(()=>{class t extends lo{_table=_(rt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(_(ht),_(Wt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",q]},features:[ue,ut]})}return t})(),ir=(()=>{class t extends lo{_table=_(rt,{optional:!0});when;constructor(){super(_(ht),_(Wt))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ue]})}return t})(),Qt=(()=>{class t{_viewContainer=_(jt);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),uo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Le(0,0)},dependencies:[Qt],encapsulation:2})}return t})();var mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Le(0,0)},dependencies:[Qt],encapsulation:2})}return t})(),js=(()=>{class t{templateRef=_(ht);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),Ls=["top","bottom","left","right"],so=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));mt({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(x=>x)||i.some(x=>x))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",f=e.lastIndexOf(!0),h=i.indexOf(!0),g,S,C;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),mt({earlyRead:()=>{g=this._getCellWidths(a,r),S=this._getStickyStartColumnPositions(g,e),C=this._getStickyEndColumnPositions(g,i)},write:()=>{for(let x of n)for(let v=0;v<s;v++){let D=x.children[v];e[v]&&this._addStickyStyle(D,l,S[v],v===f),i[v]&&this._addStickyStyle(D,d,C[v],v===h)}this._positionListener&&g.some(x=>!!x)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:g.slice(0,f+1).map((x,v)=>e[v]?x:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:h===-1?[]:g.slice(h).map((x,v)=>i[v+h]?x:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],c=[];mt({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;a[l]=d;let f=r[l];c[l]=this._isNativeHtmlTable?Array.from(f.children):[f];let h=this._retrieveElementSize(f).height;d+=h,s[l]=h}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let f=a[d],h=d===l;for(let g of c[d])this._addStickyStyle(g,i,f,h)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&mt({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);Ls.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of Ls)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&ym(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ym(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}var jn=new Z("STICKY_POSITIONING_LISTENER");var ho=(()=>{class t{viewContainer=_(jt);elementRef=_(ne);constructor(){let e=_(rt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","rowOutlet",""]]})}return t})(),po=(()=>{class t{viewContainer=_(jt);elementRef=_(ne);constructor(){let e=_(rt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),fo=(()=>{class t{viewContainer=_(jt);elementRef=_(ne);constructor(){let e=_(rt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),go=(()=>{class t{viewContainer=_(jt);elementRef=_(ne);constructor(){let e=_(rt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),_o=(()=>{class t{_differs=_(Wt);_changeDetectorRef=_(ve);_elementRef=_(ne);_dir=_(We,{optional:!0});_platform=_(nt);_viewRepeater;_viewportRuler=_(Ns);_injector=_(ln);_virtualScrollViewport=_(Bs,{optional:!0,host:!0});_positionListener=_(jn,{optional:!0})||_(jn,{optional:!0,skipSelf:!0});_document=_(Ht);_data;_renderedRange;_onDestroy=new de;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new de;_footerRowStickyUpdates=new de;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new de;_dataStream=new de;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new he;viewChange=new pa({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){_(new un("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(De(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Zi:new Yi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ki(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===it.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=Gs(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=Gs(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<s.length;c++){let l=s[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let c=s.shift();return c.dataIndex=i,c}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ji(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Ji(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ji(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ji(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let c=!!s.getColumnsDiff();return a||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],Ki(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ki(this.dataSource)?e=this.dataSource.connect(this):Wr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Tn(this.dataSource)),this._renderChangeSubscription=Ci([e,this.viewChange]).pipe(De(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);return c}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Qt.mostRecentCellOutlet&&Qt.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new so(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Tn()).pipe(De(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?qr:jr;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Fn(0,i),De(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),Ci([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let c=o.offsets[a],l=r!==0?Math.max(r-c,c):-c;for(let d of s)d.style.top=`${-l}px`}}}),Ci([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let c of s)c.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,c,l;for(let h=0;h<s;h++){let g=o.get(h+a);if(g&&g.rootNodes.length){c=l=g.rootNodes[0];break}}for(let h=s-1;h>-1;h--){let g=o.get(h+a);if(g&&g.rootNodes.length){l=g.rootNodes[g.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),f=l?.getBoundingClientRect?.();return d&&f?f.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&$e(o,js,5)(o,Cn,5)(o,ir,5)(o,qn,5)(o,co,5),i&2){let a;V(a=N())&&(r._noDataRow=a.first),V(a=N())&&(r._contentColumnDefs=a),V(a=N())&&(r._contentRowDefs=a),V(a=N())&&(r._contentHeaderRowDefs=a),V(a=N())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&J("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",q],fixedLayout:[2,"fixedLayout","fixedLayout",q],recycleRows:[2,"recycleRows","recycleRows",q]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[le([{provide:rt,useExisting:t},{provide:jn,useValue:null}])],ngContentSelectors:gm,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ye(fm),ee(0),ee(1,1),R(2,_m,1,0),R(3,vm,7,0)(4,bm,4,0)),i&2&&(m(2),E(r._isServer?2:-1),m(),E(r._isNativeHtmlTable?3:4))},dependencies:[po,ho,go,fo],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return t})();function Ji(t,n){return t.concat(Array.from(n))}function Gs(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var qs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[zs]})}return t})();var Wn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new de;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var xm=[[["caption"]],[["colgroup"],["col"]],"*"],Cm=["caption","colgroup, col","*"];function wm(t,n){t&1&&ee(0,2)}function km(t,n){t&1&&(u(0,"thead",0),Le(1,1),p(),u(2,"tbody",2),Le(3,3)(4,4),p(),u(5,"tfoot",0),Le(6,5),p())}function Mm(t,n){t&1&&Le(0,1)(1,3)(2,4)(3,5)}var Ws=(()=>{class t extends _o{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275cmp=Y({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&J("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[le([{provide:_o,useExisting:t},{provide:rt,useExisting:t},{provide:jn,useValue:null}]),ue],ngContentSelectors:Cm,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ye(xm),ee(0),ee(1,1),R(2,wm,1,0),R(3,km,7,0)(4,Mm,4,0)),i&2&&(m(2),E(r._isServer?2:-1),m(),E(r._isNativeHtmlTable?3:4))},dependencies:[po,ho,go,fo],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return t})(),Xs=(()=>{class t extends tr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matCellDef",""]],features:[le([{provide:tr,useExisting:t}]),ue]})}return t})(),Qs=(()=>{class t extends nr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matHeaderCellDef",""]],features:[le([{provide:nr,useExisting:t}]),ue]})}return t})();var Ks=(()=>{class t extends Cn{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[le([{provide:Cn,useExisting:t}]),ue]})}return t})(),Zs=(()=>{class t extends Us{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ue]})}return t})();var Ys=(()=>{class t extends $s{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ue]})}return t})();var Js=(()=>{class t extends qn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",q]},features:[le([{provide:qn,useExisting:t}]),ue]})}return t})();var el=(()=>{class t extends ir{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275dir=$({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[le([{provide:ir,useExisting:t}]),ue]})}return t})(),tl=(()=>{class t extends uo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275cmp=Y({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[le([{provide:uo,useExisting:t}]),ue],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Le(0,0)},dependencies:[Qt],encapsulation:2})}return t})();var nl=(()=>{class t extends mo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Fe(t)))(r||t)}})();static \u0275cmp=Y({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[le([{provide:mo,useExisting:t}]),ue],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Le(0,0)},dependencies:[Qt],encapsulation:2})}return t})();var il=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[qs,Pe]})}return t})();var vo={"relationship-value-explorer":{key:"relationship-value-explorer",label:"Relationship-Value Explorer",description:"Interactive D3 graph for exploring clients, services, employees, and revenue opportunities."},"agent-grading-calculator":{key:"agent-grading-calculator",label:"Agent Grading Calculator",description:"Interactive scoring tool for classifying enterprise AI agents by materiality, evidence, and governance posture."}};function rl(t){return t in vo}var ol=(()=>{class t{_animationsDisabled=qe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&J("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Tm=["button"],Om=["*"];function Fm(t,n){if(t&1&&(u(0,"div",2),j(1,"mat-pseudo-checkbox",6),p()),t&2){let e=k();m(),z("disabled",e.disabled)}}var al=new Z("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),sl=new Z("MatButtonToggleGroup"),Am={provide:xn,useExisting:Ze(()=>bo),multi:!0},rr=class{source;value;constructor(n,e){this.source=n,this.value=e}},bo=(()=>{class t{_changeDetector=_(ve);_dir=_(We,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=_(gt).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new he;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new he;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=_(al,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Wn(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Ea(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let i=new rr(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+i*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&$e(o,or,5),i&2){let a;V(a=N())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&X("keydown",function(a){return r._keydown(a)}),i&2&&(oe("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),J("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",q],value:"value",multiple:[2,"multiple","multiple",q],disabled:[2,"disabled","disabled",q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",q],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",q],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",q]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[le([Am,{provide:sl,useExisting:t}])]})}return t})(),or=(()=>{class t{_changeDetectorRef=_(ve);_elementRef=_(ne);_focusMonitor=_(Di);_idGenerator=_(gt);_animationDisabled=qe();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new he;constructor(){_(Dt).load(Rt);let e=_(sl,{optional:!0}),i=_(new un("tabindex"),{optional:!0})||"",r=_(al,{optional:!0});this._tabIndex=re(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new rr(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&Ge(Tm,5),i&2){let o;V(o=N())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&X("focus",function(){return r.focus()}),i&2&&(oe("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),J("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",q],appearance:"appearance",checked:[2,"checked","checked",q],disabled:[2,"disabled","disabled",q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",q]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Om,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(ye(),u(0,"button",1,0),X("click",function(){return r._onButtonClick()}),R(2,Fm,2,1,"div",2),u(3,"span",3),ee(4),p()(),j(5,"span",4)(6,"span",5)),i&2){let o=qt(1);z("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),oe("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),m(2),E(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),m(4),z("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Xt,ol],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return t})(),ll=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[pn,or,Pe]})}return t})();function Kt(t,n){return t==null||n==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function yo(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function ar(t){let n,e,i;t.length!==2?(n=Kt,e=(s,c)=>Kt(t(s),c),i=(s,c)=>t(s)-c):(n=t===Kt||t===yo?t:Vm,e=t,i=t);function r(s,c,l=0,d=s.length){if(l<d){if(n(c,c)!==0)return d;do{let f=l+d>>>1;e(s[f],c)<0?l=f+1:d=f}while(l<d)}return l}function o(s,c,l=0,d=s.length){if(l<d){if(n(c,c)!==0)return d;do{let f=l+d>>>1;e(s[f],c)<=0?l=f+1:d=f}while(l<d)}return l}function a(s,c,l=0,d=s.length){let f=r(s,c,l,d-1);return f>l&&i(s[f-1],c)>-i(s[f],c)?f-1:f}return{left:r,center:a,right:o}}function Vm(){return 0}function xo(t){return t===null?NaN:+t}var cl=ar(Kt),dl=cl.right,Nm=cl.left,Bm=ar(xo).center,Co=dl;var zm=Math.sqrt(50),Lm=Math.sqrt(10),Gm=Math.sqrt(2);function sr(t,n,e){let i=(n-t)/Math.max(0,e),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),a=o>=zm?10:o>=Lm?5:o>=Gm?2:1,s,c,l;return r<0?(l=Math.pow(10,-r)/a,s=Math.round(t*l),c=Math.round(n*l),s/l<t&&++s,c/l>n&&--c,l=-l):(l=Math.pow(10,r)*a,s=Math.round(t/l),c=Math.round(n/l),s*l<t&&++s,c*l>n&&--c),c<s&&.5<=e&&e<2?sr(t,n,e*2):[s,c,l]}function lr(t,n,e){if(n=+n,t=+t,e=+e,!(e>0))return[];if(t===n)return[t];let i=n<t,[r,o,a]=i?sr(n,t,e):sr(t,n,e);if(!(o>=r))return[];let s=o-r+1,c=new Array(s);if(i)if(a<0)for(let l=0;l<s;++l)c[l]=(o-l)/-a;else for(let l=0;l<s;++l)c[l]=(o-l)*a;else if(a<0)for(let l=0;l<s;++l)c[l]=(r+l)/-a;else for(let l=0;l<s;++l)c[l]=(r+l)*a;return c}function Xn(t,n,e){return n=+n,t=+t,e=+e,sr(t,n,e)[2]}function wo(t,n,e){n=+n,t=+t,e=+e;let i=n<t,r=i?Xn(n,t,e):Xn(t,n,e);return(i?-1:1)*(r<0?1/-r:r)}function Qn(t,n){let e;if(n===void 0)for(let i of t)i!=null&&(e<i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of t)(r=n(r,++i,t))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function Kn(t,n){let e;if(n===void 0)for(let i of t)i!=null&&(e>i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of t)(r=n(r,++i,t))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}var Hm={value:()=>{}};function ml(){for(var t=0,n=arguments.length,e={},i;t<n;++t){if(!(i=arguments[t]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new cr(e)}function cr(t){this._=t}function Um(t,n){return t.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}cr.prototype=ml.prototype={constructor:cr,on:function(t,n){var e=this._,i=Um(t+"",e),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(t=i[o]).type)&&(r=$m(e[r],t.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<a;)if(r=(t=i[o]).type)e[r]=ul(e[r],t.name,n);else if(n==null)for(r in e)e[r]=ul(e[r],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new cr(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,o;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(n,e)}};function $m(t,n){for(var e=0,i=t.length,r;e<i;++e)if((r=t[e]).name===n)return r.value}function ul(t,n,e){for(var i=0,r=t.length;i<r;++i)if(t[i].name===n){t[i]=Hm,t=t.slice(0,i).concat(t.slice(i+1));break}return e!=null&&t.push({name:n,value:e}),t}var Et=ml;var dr="http://www.w3.org/1999/xhtml",ko={svg:"http://www.w3.org/2000/svg",xhtml:dr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function It(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),ko.hasOwnProperty(n)?{space:ko[n],local:t}:t}function jm(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===dr&&n.documentElement.namespaceURI===dr?n.createElement(t):n.createElementNS(e,t)}}function qm(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function ur(t){var n=It(t);return(n.local?qm:jm)(n)}function Wm(){}function Zt(t){return t==null?Wm:function(){return this.querySelector(t)}}function hl(t){typeof t!="function"&&(t=Zt(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=new Array(a),c,l,d=0;d<a;++d)(c=o[d])&&(l=t.call(c,c.__data__,d,o))&&("__data__"in c&&(l.__data__=c.__data__),s[d]=l);return new fe(i,this._parents)}function Mo(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Xm(){return[]}function Zn(t){return t==null?Xm:function(){return this.querySelectorAll(t)}}function Qm(t){return function(){return Mo(t.apply(this,arguments))}}function pl(t){typeof t=="function"?t=Qm(t):t=Zn(t);for(var n=this._groups,e=n.length,i=[],r=[],o=0;o<e;++o)for(var a=n[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(i.push(t.call(c,c.__data__,l,a)),r.push(c));return new fe(i,r)}function Yn(t){return function(){return this.matches(t)}}function mr(t){return function(n){return n.matches(t)}}var Km=Array.prototype.find;function Zm(t){return function(){return Km.call(this.children,t)}}function Ym(){return this.firstElementChild}function fl(t){return this.select(t==null?Ym:Zm(typeof t=="function"?t:mr(t)))}var Jm=Array.prototype.filter;function eh(){return Array.from(this.children)}function th(t){return function(){return Jm.call(this.children,t)}}function gl(t){return this.selectAll(t==null?eh:th(typeof t=="function"?t:mr(t)))}function _l(t){typeof t!="function"&&(t=Yn(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&t.call(c,c.__data__,l,o)&&s.push(c);return new fe(i,this._parents)}function hr(t){return new Array(t.length)}function vl(){return new fe(this._enter||this._groups.map(hr),this._parents)}function Jn(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}Jn.prototype={constructor:Jn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function bl(t){return function(){return t}}function nh(t,n,e,i,r,o){for(var a=0,s,c=n.length,l=o.length;a<l;++a)(s=n[a])?(s.__data__=o[a],i[a]=s):e[a]=new Jn(t,o[a]);for(;a<c;++a)(s=n[a])&&(r[a]=s)}function ih(t,n,e,i,r,o,a){var s,c,l=new Map,d=n.length,f=o.length,h=new Array(d),g;for(s=0;s<d;++s)(c=n[s])&&(h[s]=g=a.call(c,c.__data__,s,n)+"",l.has(g)?r[s]=c:l.set(g,c));for(s=0;s<f;++s)g=a.call(t,o[s],s,o)+"",(c=l.get(g))?(i[s]=c,c.__data__=o[s],l.delete(g)):e[s]=new Jn(t,o[s]);for(s=0;s<d;++s)(c=n[s])&&l.get(h[s])===c&&(r[s]=c)}function rh(t){return t.__data__}function yl(t,n){if(!arguments.length)return Array.from(this,rh);var e=n?ih:nh,i=this._parents,r=this._groups;typeof t!="function"&&(t=bl(t));for(var o=r.length,a=new Array(o),s=new Array(o),c=new Array(o),l=0;l<o;++l){var d=i[l],f=r[l],h=f.length,g=oh(t.call(d,d&&d.__data__,l,i)),S=g.length,C=s[l]=new Array(S),x=a[l]=new Array(S),v=c[l]=new Array(h);e(d,f,C,x,v,g,n);for(var D=0,P=0,y,F;D<S;++D)if(y=C[D]){for(D>=P&&(P=D+1);!(F=x[P])&&++P<S;);y._next=F||null}}return a=new fe(a,i),a._enter=s,a._exit=c,a}function oh(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function xl(){return new fe(this._exit||this._groups.map(hr),this._parents)}function Cl(t,n,e){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),n!=null&&(r=n(r),r&&(r=r.selection())),e==null?o.remove():e(o),i&&r?i.merge(r).order():r}function wl(t){for(var n=t.selection?t.selection():t,e=this._groups,i=n._groups,r=e.length,o=i.length,a=Math.min(r,o),s=new Array(r),c=0;c<a;++c)for(var l=e[c],d=i[c],f=l.length,h=s[c]=new Array(f),g,S=0;S<f;++S)(g=l[S]||d[S])&&(h[S]=g);for(;c<r;++c)s[c]=e[c];return new fe(s,this._parents)}function kl(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var i=t[n],r=i.length-1,o=i[r],a;--r>=0;)(a=i[r])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Ml(t){t||(t=ah);function n(f,h){return f&&h?t(f.__data__,h.__data__):!f-!h}for(var e=this._groups,i=e.length,r=new Array(i),o=0;o<i;++o){for(var a=e[o],s=a.length,c=r[o]=new Array(s),l,d=0;d<s;++d)(l=a[d])&&(c[d]=l);c.sort(n)}return new fe(r,this._parents).order()}function ah(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Sl(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Dl(){return Array.from(this)}function Rl(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,o=i.length;r<o;++r){var a=i[r];if(a)return a}return null}function El(){let t=0;for(let n of this)++t;return t}function Il(){return!this.node()}function Tl(t){for(var n=this._groups,e=0,i=n.length;e<i;++e)for(var r=n[e],o=0,a=r.length,s;o<a;++o)(s=r[o])&&t.call(s,s.__data__,o,r);return this}function sh(t){return function(){this.removeAttribute(t)}}function lh(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ch(t,n){return function(){this.setAttribute(t,n)}}function dh(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function uh(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function mh(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Ol(t,n){var e=It(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((n==null?e.local?lh:sh:typeof n=="function"?e.local?mh:uh:e.local?dh:ch)(e,n))}function pr(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function hh(t){return function(){this.style.removeProperty(t)}}function ph(t,n,e){return function(){this.style.setProperty(t,n,e)}}function fh(t,n,e){return function(){var i=n.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,e)}}function Fl(t,n,e){return arguments.length>1?this.each((n==null?hh:typeof n=="function"?fh:ph)(t,n,e??"")):Pt(this.node(),t)}function Pt(t,n){return t.style.getPropertyValue(n)||pr(t).getComputedStyle(t,null).getPropertyValue(n)}function gh(t){return function(){delete this[t]}}function _h(t,n){return function(){this[t]=n}}function vh(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Al(t,n){return arguments.length>1?this.each((n==null?gh:typeof n=="function"?vh:_h)(t,n)):this.node()[t]}function Pl(t){return t.trim().split(/^|\s+/)}function So(t){return t.classList||new Vl(t)}function Vl(t){this._node=t,this._names=Pl(t.getAttribute("class")||"")}Vl.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Nl(t,n){for(var e=So(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function Bl(t,n){for(var e=So(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function bh(t){return function(){Nl(this,t)}}function yh(t){return function(){Bl(this,t)}}function xh(t,n){return function(){(n.apply(this,arguments)?Nl:Bl)(this,t)}}function zl(t,n){var e=Pl(t+"");if(arguments.length<2){for(var i=So(this.node()),r=-1,o=e.length;++r<o;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof n=="function"?xh:n?bh:yh)(e,n))}function Ch(){this.textContent=""}function wh(t){return function(){this.textContent=t}}function kh(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Ll(t){return arguments.length?this.each(t==null?Ch:(typeof t=="function"?kh:wh)(t)):this.node().textContent}function Mh(){this.innerHTML=""}function Sh(t){return function(){this.innerHTML=t}}function Dh(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Gl(t){return arguments.length?this.each(t==null?Mh:(typeof t=="function"?Dh:Sh)(t)):this.node().innerHTML}function Rh(){this.nextSibling&&this.parentNode.appendChild(this)}function Hl(){return this.each(Rh)}function Eh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ul(){return this.each(Eh)}function $l(t){var n=typeof t=="function"?t:ur(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Ih(){return null}function jl(t,n){var e=typeof t=="function"?t:ur(t),i=n==null?Ih:typeof n=="function"?n:Zt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function Th(){var t=this.parentNode;t&&t.removeChild(this)}function ql(){return this.each(Th)}function Oh(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Fh(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Wl(t){return this.select(t?Fh:Oh)}function Xl(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Ah(t){return function(n){t.call(this,n,this.__data__)}}function Ph(t){return t.trim().split(/^|\s+/).map(function(n){var e="",i=n.indexOf(".");return i>=0&&(e=n.slice(i+1),n=n.slice(0,i)),{type:n,name:e}})}function Vh(t){return function(){var n=this.__on;if(n){for(var e=0,i=-1,r=n.length,o;e<r;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++i]=o;++i?n.length=i:delete this.__on}}}function Nh(t,n,e){return function(){var i=this.__on,r,o=Ah(n);if(i){for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=n;return}}this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Ql(t,n,e){var i=Ph(t+""),r,o=i.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,d;c<l;++c)for(r=0,d=s[c];r<o;++r)if((a=i[r]).type===d.type&&a.name===d.name)return d.value}return}for(s=n?Nh:Vh,r=0;r<o;++r)this.each(s(i[r],n,e));return this}function Kl(t,n,e){var i=pr(t),r=i.CustomEvent;typeof r=="function"?r=new r(n,e):(r=i.document.createEvent("Event"),e?(r.initEvent(n,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(n,!1,!1)),t.dispatchEvent(r)}function Bh(t,n){return function(){return Kl(this,t,n)}}function zh(t,n){return function(){return Kl(this,t,n.apply(this,arguments))}}function Zl(t,n){return this.each((typeof n=="function"?zh:Bh)(t,n))}function*Yl(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,o=i.length,a;r<o;++r)(a=i[r])&&(yield a)}var Do=[null];function fe(t,n){this._groups=t,this._parents=n}function Jl(){return new fe([[document.documentElement]],Do)}function Lh(){return this}fe.prototype=Jl.prototype={constructor:fe,select:hl,selectAll:pl,selectChild:fl,selectChildren:gl,filter:_l,data:yl,enter:vl,exit:xl,join:Cl,merge:wl,selection:Lh,order:kl,sort:Ml,call:Sl,nodes:Dl,node:Rl,size:El,empty:Il,each:Tl,attr:Ol,style:Fl,property:Al,classed:zl,text:Ll,html:Gl,raise:Hl,lower:Ul,append:$l,insert:jl,remove:ql,clone:Wl,datum:Xl,on:Ql,dispatch:Zl,[Symbol.iterator]:Yl};var Tt=Jl;function Ve(t){return typeof t=="string"?new fe([[document.querySelector(t)]],[document.documentElement]):new fe([[t]],Do)}function ec(t){let n;for(;n=t.sourceEvent;)t=n;return t}function Xe(t,n){if(t=ec(t),n===void 0&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[t.clientX-r.left-n.clientLeft,t.clientY-r.top-n.clientTop]}}return[t.pageX,t.pageY]}var tc={passive:!1},Yt={capture:!0,passive:!1};function fr(t){t.stopImmediatePropagation()}function Vt(t){t.preventDefault(),t.stopImmediatePropagation()}function ei(t){var n=t.document.documentElement,e=Ve(t).on("dragstart.drag",Vt,Yt);"onselectstart"in n?e.on("selectstart.drag",Vt,Yt):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function ti(t,n){var e=t.document.documentElement,i=Ve(t).on("dragstart.drag",null);n&&(i.on("click.drag",Vt,Yt),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}var ni=t=>()=>t;function ii(t,{sourceEvent:n,subject:e,target:i,identifier:r,active:o,x:a,y:s,dx:c,dy:l,dispatch:d}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:d}})}ii.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function Gh(t){return!t.ctrlKey&&!t.button}function Hh(){return this.parentNode}function Uh(t,n){return n??{x:t.x,y:t.y}}function $h(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ro(){var t=Gh,n=Hh,e=Uh,i=$h,r={},o=Et("start","drag","end"),a=0,s,c,l,d,f=0;function h(y){y.on("mousedown.drag",g).filter(i).on("touchstart.drag",x).on("touchmove.drag",v,tc).on("touchend.drag touchcancel.drag",D).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(y,F){if(!(d||!t.call(this,y,F))){var A=P(this,n.call(this,y,F),y,F,"mouse");A&&(Ve(y.view).on("mousemove.drag",S,Yt).on("mouseup.drag",C,Yt),ei(y.view),fr(y),l=!1,s=y.clientX,c=y.clientY,A("start",y))}}function S(y){if(Vt(y),!l){var F=y.clientX-s,A=y.clientY-c;l=F*F+A*A>f}r.mouse("drag",y)}function C(y){Ve(y.view).on("mousemove.drag mouseup.drag",null),ti(y.view,l),Vt(y),r.mouse("end",y)}function x(y,F){if(t.call(this,y,F)){var A=y.changedTouches,W=n.call(this,y,F),K=A.length,ie,te;for(ie=0;ie<K;++ie)(te=P(this,W,y,F,A[ie].identifier,A[ie]))&&(fr(y),te("start",y,A[ie]))}}function v(y){var F=y.changedTouches,A=F.length,W,K;for(W=0;W<A;++W)(K=r[F[W].identifier])&&(Vt(y),K("drag",y,F[W]))}function D(y){var F=y.changedTouches,A=F.length,W,K;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),W=0;W<A;++W)(K=r[F[W].identifier])&&(fr(y),K("end",y,F[W]))}function P(y,F,A,W,K,ie){var te=o.copy(),me=Xe(ie||A,F),L,pe,b;if((b=e.call(y,new ii("beforestart",{sourceEvent:A,target:h,identifier:K,active:a,x:me[0],y:me[1],dx:0,dy:0,dispatch:te}),W))!=null)return L=b.x-me[0]||0,pe=b.y-me[1]||0,function T(M,O,G){var U=me,B;switch(M){case"start":r[K]=T,B=a++;break;case"end":delete r[K],--a;case"drag":me=Xe(G||O,F),B=a;break}te.call(M,y,new ii(M,{sourceEvent:O,subject:b,target:h,identifier:K,active:B,x:me[0]+L,y:me[1]+pe,dx:me[0]-U[0],dy:me[1]-U[1],dispatch:te}),W)}}return h.filter=function(y){return arguments.length?(t=typeof y=="function"?y:ni(!!y),h):t},h.container=function(y){return arguments.length?(n=typeof y=="function"?y:ni(y),h):n},h.subject=function(y){return arguments.length?(e=typeof y=="function"?y:ni(y),h):e},h.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:ni(!!y),h):i},h.on=function(){var y=o.on.apply(o,arguments);return y===o?h:y},h.clickDistance=function(y){return arguments.length?(f=(y=+y)*y,h):Math.sqrt(f)},h}function gr(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Eo(t,n){var e=Object.create(t.prototype);for(var i in n)e[i]=n[i];return e}function ai(){}var ri=.7,br=1/ri,wn="\\s*([+-]?\\d+)\\s*",oi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_t="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",jh=/^#([0-9a-f]{3,8})$/,qh=new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`),Wh=new RegExp(`^rgb\\(${_t},${_t},${_t}\\)$`),Xh=new RegExp(`^rgba\\(${wn},${wn},${wn},${oi}\\)$`),Qh=new RegExp(`^rgba\\(${_t},${_t},${_t},${oi}\\)$`),Kh=new RegExp(`^hsl\\(${oi},${_t},${_t}\\)$`),Zh=new RegExp(`^hsla\\(${oi},${_t},${_t},${oi}\\)$`),nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gr(ai,at,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ic,formatHex:ic,formatHex8:Yh,formatHsl:Jh,formatRgb:rc,toString:rc});function ic(){return this.rgb().formatHex()}function Yh(){return this.rgb().formatHex8()}function Jh(){return dc(this).formatHsl()}function rc(){return this.rgb().formatRgb()}function at(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=jh.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?oc(n):e===3?new He(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?_r(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?_r(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=qh.exec(t))?new He(n[1],n[2],n[3],1):(n=Wh.exec(t))?new He(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Xh.exec(t))?_r(n[1],n[2],n[3],n[4]):(n=Qh.exec(t))?_r(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Kh.exec(t))?lc(n[1],n[2]/100,n[3]/100,1):(n=Zh.exec(t))?lc(n[1],n[2]/100,n[3]/100,n[4]):nc.hasOwnProperty(t)?oc(nc[t]):t==="transparent"?new He(NaN,NaN,NaN,0):null}function oc(t){return new He(t>>16&255,t>>8&255,t&255,1)}function _r(t,n,e,i){return i<=0&&(t=n=e=NaN),new He(t,n,e,i)}function ep(t){return t instanceof ai||(t=at(t)),t?(t=t.rgb(),new He(t.r,t.g,t.b,t.opacity)):new He}function kn(t,n,e,i){return arguments.length===1?ep(t):new He(t,n,e,i??1)}function He(t,n,e,i){this.r=+t,this.g=+n,this.b=+e,this.opacity=+i}gr(He,kn,Eo(ai,{brighter(t){return t=t==null?br:Math.pow(br,t),new He(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ri:Math.pow(ri,t),new He(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new He(en(this.r),en(this.g),en(this.b),yr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ac,formatHex:ac,formatHex8:tp,formatRgb:sc,toString:sc}));function ac(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}`}function tp(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}${Jt((isNaN(this.opacity)?1:this.opacity)*255)}`}function sc(){let t=yr(this.opacity);return`${t===1?"rgb(":"rgba("}${en(this.r)}, ${en(this.g)}, ${en(this.b)}${t===1?")":`, ${t})`}`}function yr(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function en(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Jt(t){return t=en(t),(t<16?"0":"")+t.toString(16)}function lc(t,n,e,i){return i<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new ot(t,n,e,i)}function dc(t){if(t instanceof ot)return new ot(t.h,t.s,t.l,t.opacity);if(t instanceof ai||(t=at(t)),!t)return new ot;if(t instanceof ot)return t;t=t.rgb();var n=t.r/255,e=t.g/255,i=t.b/255,r=Math.min(n,e,i),o=Math.max(n,e,i),a=NaN,s=o-r,c=(o+r)/2;return s?(n===o?a=(e-i)/s+(e<i)*6:e===o?a=(i-n)/s+2:a=(n-e)/s+4,s/=c<.5?o+r:2-o-r,a*=60):s=c>0&&c<1?0:a,new ot(a,s,c,t.opacity)}function uc(t,n,e,i){return arguments.length===1?dc(t):new ot(t,n,e,i??1)}function ot(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}gr(ot,uc,Eo(ai,{brighter(t){return t=t==null?br:Math.pow(br,t),new ot(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ri:Math.pow(ri,t),new ot(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*n,r=2*e-i;return new He(Io(t>=240?t-240:t+120,r,i),Io(t,r,i),Io(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new ot(cc(this.h),vr(this.s),vr(this.l),yr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=yr(this.opacity);return`${t===1?"hsl(":"hsla("}${cc(this.h)}, ${vr(this.s)*100}%, ${vr(this.l)*100}%${t===1?")":`, ${t})`}`}}));function cc(t){return t=(t||0)%360,t<0?t+360:t}function vr(t){return Math.max(0,Math.min(1,t||0))}function Io(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}function To(t,n,e,i,r){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*i+a*r)/6}function mc(t){var n=t.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),r=t[i],o=t[i+1],a=i>0?t[i-1]:2*r-o,s=i<n-1?t[i+2]:2*o-r;return To((e-i/n)*n,a,r,o,s)}}function hc(t){var n=t.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),r=t[(i+n-1)%n],o=t[i%n],a=t[(i+1)%n],s=t[(i+2)%n];return To((e-i/n)*n,r,o,a,s)}}var si=t=>()=>t;function np(t,n){return function(e){return t+e*n}}function ip(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(i){return Math.pow(t+i*n,e)}}function pc(t){return(t=+t)==1?xr:function(n,e){return e-n?ip(n,e,t):si(isNaN(n)?e:n)}}function xr(t,n){var e=n-t;return e?np(t,e):si(isNaN(t)?n:t)}var tn=(function t(n){var e=pc(n);function i(r,o){var a=e((r=kn(r)).r,(o=kn(o)).r),s=e(r.g,o.g),c=e(r.b,o.b),l=xr(r.opacity,o.opacity);return function(d){return r.r=a(d),r.g=s(d),r.b=c(d),r.opacity=l(d),r+""}}return i.gamma=t,i})(1);function fc(t){return function(n){var e=n.length,i=new Array(e),r=new Array(e),o=new Array(e),a,s;for(a=0;a<e;++a)s=kn(n[a]),i[a]=s.r||0,r[a]=s.g||0,o[a]=s.b||0;return i=t(i),r=t(r),o=t(o),s.opacity=1,function(c){return s.r=i(c),s.g=r(c),s.b=o(c),s+""}}}var rp=fc(mc),op=fc(hc);function gc(t,n){n||(n=[]);var e=t?Math.min(n.length,t.length):0,i=n.slice(),r;return function(o){for(r=0;r<e;++r)i[r]=t[r]*(1-o)+n[r]*o;return i}}function _c(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function vc(t,n){var e=n?n.length:0,i=t?Math.min(e,t.length):0,r=new Array(i),o=new Array(e),a;for(a=0;a<i;++a)r[a]=nn(t[a],n[a]);for(;a<e;++a)o[a]=n[a];return function(s){for(a=0;a<i;++a)o[a]=r[a](s);return o}}function bc(t,n){var e=new Date;return t=+t,n=+n,function(i){return e.setTime(t*(1-i)+n*i),e}}function Ie(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function yc(t,n){var e={},i={},r;(t===null||typeof t!="object")&&(t={}),(n===null||typeof n!="object")&&(n={});for(r in n)r in t?e[r]=nn(t[r],n[r]):i[r]=n[r];return function(o){for(r in e)i[r]=e[r](o);return i}}var Fo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Oo=new RegExp(Fo.source,"g");function ap(t){return function(){return t}}function sp(t){return function(n){return t(n)+""}}function li(t,n){var e=Fo.lastIndex=Oo.lastIndex=0,i,r,o,a=-1,s=[],c=[];for(t=t+"",n=n+"";(i=Fo.exec(t))&&(r=Oo.exec(n));)(o=r.index)>e&&(o=n.slice(e,o),s[a]?s[a]+=o:s[++a]=o),(i=i[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:Ie(i,r)})),e=Oo.lastIndex;return e<n.length&&(o=n.slice(e),s[a]?s[a]+=o:s[++a]=o),s.length<2?c[0]?sp(c[0].x):ap(n):(n=c.length,function(l){for(var d=0,f;d<n;++d)s[(f=c[d]).i]=f.x(l);return s.join("")})}function nn(t,n){var e=typeof n,i;return n==null||e==="boolean"?si(n):(e==="number"?Ie:e==="string"?(i=at(n))?(n=i,tn):li:n instanceof at?tn:n instanceof Date?bc:_c(n)?gc:Array.isArray(n)?vc:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?yc:Ie)(t,n)}function Ao(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var xc=180/Math.PI,Cr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Po(t,n,e,i,r,o){var a,s,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*i)&&(e-=t*c,i-=n*c),(s=Math.sqrt(e*e+i*i))&&(e/=s,i/=s,c/=s),t*i<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:r,translateY:o,rotate:Math.atan2(n,t)*xc,skewX:Math.atan(c)*xc,scaleX:a,scaleY:s}}var wr;function Cc(t){let n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Cr:Po(n.a,n.b,n.c,n.d,n.e,n.f)}function wc(t){return t==null?Cr:(wr||(wr=document.createElementNS("http://www.w3.org/2000/svg","g")),wr.setAttribute("transform",t),(t=wr.transform.baseVal.consolidate())?(t=t.matrix,Po(t.a,t.b,t.c,t.d,t.e,t.f)):Cr)}function kc(t,n,e,i){function r(l){return l.length?l.pop()+" ":""}function o(l,d,f,h,g,S){if(l!==f||d!==h){var C=g.push("translate(",null,n,null,e);S.push({i:C-4,x:Ie(l,f)},{i:C-2,x:Ie(d,h)})}else(f||h)&&g.push("translate("+f+n+h+e)}function a(l,d,f,h){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),h.push({i:f.push(r(f)+"rotate(",null,i)-2,x:Ie(l,d)})):d&&f.push(r(f)+"rotate("+d+i)}function s(l,d,f,h){l!==d?h.push({i:f.push(r(f)+"skewX(",null,i)-2,x:Ie(l,d)}):d&&f.push(r(f)+"skewX("+d+i)}function c(l,d,f,h,g,S){if(l!==f||d!==h){var C=g.push(r(g)+"scale(",null,",",null,")");S.push({i:C-4,x:Ie(l,f)},{i:C-2,x:Ie(d,h)})}else(f!==1||h!==1)&&g.push(r(g)+"scale("+f+","+h+")")}return function(l,d){var f=[],h=[];return l=t(l),d=t(d),o(l.translateX,l.translateY,d.translateX,d.translateY,f,h),a(l.rotate,d.rotate,f,h),s(l.skewX,d.skewX,f,h),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,f,h),l=d=null,function(g){for(var S=-1,C=h.length,x;++S<C;)f[(x=h[S]).i]=x.x(g);return f.join("")}}}var Vo=kc(Cc,"px, ","px)","deg)"),No=kc(wc,", ",")",")");var lp=1e-12;function Mc(t){return((t=Math.exp(t))+1/t)/2}function cp(t){return((t=Math.exp(t))-1/t)/2}function dp(t){return((t=Math.exp(2*t))-1)/(t+1)}var Bo=(function t(n,e,i){function r(o,a){var s=o[0],c=o[1],l=o[2],d=a[0],f=a[1],h=a[2],g=d-s,S=f-c,C=g*g+S*S,x,v;if(C<lp)v=Math.log(h/l)/n,x=function(W){return[s+W*g,c+W*S,l*Math.exp(n*W*v)]};else{var D=Math.sqrt(C),P=(h*h-l*l+i*C)/(2*l*e*D),y=(h*h-l*l-i*C)/(2*h*e*D),F=Math.log(Math.sqrt(P*P+1)-P),A=Math.log(Math.sqrt(y*y+1)-y);v=(A-F)/n,x=function(W){var K=W*v,ie=Mc(F),te=l/(e*D)*(ie*dp(n*K+F)-cp(F));return[s+te*g,c+te*S,l*ie/Mc(n*K+F)]}}return x.duration=v*1e3*n/Math.SQRT2,x}return r.rho=function(o){var a=Math.max(.001,+o),s=a*a,c=s*s;return t(a,s,c)},r})(Math.SQRT2,2,4);var Mn=0,di=0,ci=0,Dc=1e3,kr,ui,Mr=0,rn=0,Sr=0,mi=typeof performance=="object"&&performance.now?performance:Date,Rc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function pi(){return rn||(Rc(up),rn=mi.now()+Sr)}function up(){rn=0}function hi(){this._call=this._time=this._next=null}hi.prototype=Sn.prototype={constructor:hi,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?pi():+e)+(n==null?0:+n),!this._next&&ui!==this&&(ui?ui._next=this:kr=this,ui=this),this._call=t,this._time=e,zo()},stop:function(){this._call&&(this._call=null,this._time=1/0,zo())}};function Sn(t,n,e){var i=new hi;return i.restart(t,n,e),i}function Ec(){pi(),++Mn;for(var t=kr,n;t;)(n=rn-t._time)>=0&&t._call.call(void 0,n),t=t._next;--Mn}function Sc(){rn=(Mr=mi.now())+Sr,Mn=di=0;try{Ec()}finally{Mn=0,hp(),rn=0}}function mp(){var t=mi.now(),n=t-Mr;n>Dc&&(Sr-=n,Mr=t)}function hp(){for(var t,n=kr,e,i=1/0;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:kr=e);ui=t,zo(i)}function zo(t){if(!Mn){di&&(di=clearTimeout(di));var n=t-rn;n>24?(t<1/0&&(di=setTimeout(Sc,t-mi.now()-Sr)),ci&&(ci=clearInterval(ci))):(ci||(Mr=mi.now(),ci=setInterval(mp,Dc)),Mn=1,Rc(Sc))}}function Dr(t,n,e){var i=new hi;return n=n==null?0:+n,i.restart(r=>{i.stop(),t(r+n)},n,e),i}var pp=Et("start","end","cancel","interrupt"),fp=[],Oc=0,Ic=1,Er=2,Rr=3,Tc=4,Ir=5,fi=6;function Nt(t,n,e,i,r,o){var a=t.__transition;if(!a)t.__transition={};else if(e in a)return;gp(t,e,{name:n,index:i,group:r,on:pp,tween:fp,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Oc})}function gi(t,n){var e=xe(t,n);if(e.state>Oc)throw new Error("too late; already scheduled");return e}function Te(t,n){var e=xe(t,n);if(e.state>Rr)throw new Error("too late; already running");return e}function xe(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function gp(t,n,e){var i=t.__transition,r;i[n]=e,e.timer=Sn(o,0,e.time);function o(l){e.state=Ic,e.timer.restart(a,e.delay,e.time),e.delay<=l&&a(l-e.delay)}function a(l){var d,f,h,g;if(e.state!==Ic)return c();for(d in i)if(g=i[d],g.name===e.name){if(g.state===Rr)return Dr(a);g.state===Tc?(g.state=fi,g.timer.stop(),g.on.call("interrupt",t,t.__data__,g.index,g.group),delete i[d]):+d<n&&(g.state=fi,g.timer.stop(),g.on.call("cancel",t,t.__data__,g.index,g.group),delete i[d])}if(Dr(function(){e.state===Rr&&(e.state=Tc,e.timer.restart(s,e.delay,e.time),s(l))}),e.state=Er,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Er){for(e.state=Rr,r=new Array(h=e.tween.length),d=0,f=-1;d<h;++d)(g=e.tween[d].value.call(t,t.__data__,e.index,e.group))&&(r[++f]=g);r.length=f+1}}function s(l){for(var d=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Ir,1),f=-1,h=r.length;++f<h;)r[f].call(t,d);e.state===Ir&&(e.on.call("end",t,t.__data__,e.index,e.group),c())}function c(){e.state=fi,e.timer.stop(),delete i[n];for(var l in i)return;delete t.__transition}}function Bt(t,n){var e=t.__transition,i,r,o=!0,a;if(e){n=n==null?null:n+"";for(a in e){if((i=e[a]).name!==n){o=!1;continue}r=i.state>Er&&i.state<Ir,i.state=fi,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete e[a]}o&&delete t.__transition}}function Fc(t){return this.each(function(){Bt(this,t)})}function _p(t,n){var e,i;return function(){var r=Te(this,t),o=r.tween;if(o!==e){i=e=o;for(var a=0,s=i.length;a<s;++a)if(i[a].name===n){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function vp(t,n,e){var i,r;if(typeof e!="function")throw new Error;return function(){var o=Te(this,t),a=o.tween;if(a!==i){r=(i=a).slice();for(var s={name:n,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===n){r[c]=s;break}c===l&&r.push(s)}o.tween=r}}function Ac(t,n){var e=this._id;if(t+="",arguments.length<2){for(var i=xe(this.node(),e).tween,r=0,o=i.length,a;r<o;++r)if((a=i[r]).name===t)return a.value;return null}return this.each((n==null?_p:vp)(e,t,n))}function Dn(t,n,e){var i=t._id;return t.each(function(){var r=Te(this,i);(r.value||(r.value={}))[n]=e.apply(this,arguments)}),function(r){return xe(r,i).value[n]}}function Tr(t,n){var e;return(typeof n=="number"?Ie:n instanceof at?tn:(e=at(n))?(n=e,tn):li)(t,n)}function bp(t){return function(){this.removeAttribute(t)}}function yp(t){return function(){this.removeAttributeNS(t.space,t.local)}}function xp(t,n,e){var i,r=e+"",o;return function(){var a=this.getAttribute(t);return a===r?null:a===i?o:o=n(i=a,e)}}function Cp(t,n,e){var i,r=e+"",o;return function(){var a=this.getAttributeNS(t.space,t.local);return a===r?null:a===i?o:o=n(i=a,e)}}function wp(t,n,e){var i,r,o;return function(){var a,s=e(this),c;return s==null?void this.removeAttribute(t):(a=this.getAttribute(t),c=s+"",a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s)))}}function kp(t,n,e){var i,r,o;return function(){var a,s=e(this),c;return s==null?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),c=s+"",a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s)))}}function Pc(t,n){var e=It(t),i=e==="transform"?No:Tr;return this.attrTween(t,typeof n=="function"?(e.local?kp:wp)(e,i,Dn(this,"attr."+t,n)):n==null?(e.local?yp:bp)(e):(e.local?Cp:xp)(e,i,n))}function Mp(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Sp(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Dp(t,n){var e,i;function r(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&Sp(t,o)),e}return r._value=n,r}function Rp(t,n){var e,i;function r(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&Mp(t,o)),e}return r._value=n,r}function Vc(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var i=It(t);return this.tween(e,(i.local?Dp:Rp)(i,n))}function Ep(t,n){return function(){gi(this,t).delay=+n.apply(this,arguments)}}function Ip(t,n){return n=+n,function(){gi(this,t).delay=n}}function Nc(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Ep:Ip)(n,t)):xe(this.node(),n).delay}function Tp(t,n){return function(){Te(this,t).duration=+n.apply(this,arguments)}}function Op(t,n){return n=+n,function(){Te(this,t).duration=n}}function Bc(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Tp:Op)(n,t)):xe(this.node(),n).duration}function Fp(t,n){if(typeof n!="function")throw new Error;return function(){Te(this,t).ease=n}}function zc(t){var n=this._id;return arguments.length?this.each(Fp(n,t)):xe(this.node(),n).ease}function Ap(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;Te(this,t).ease=e}}function Lc(t){if(typeof t!="function")throw new Error;return this.each(Ap(this._id,t))}function Gc(t){typeof t!="function"&&(t=Yn(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&t.call(c,c.__data__,l,o)&&s.push(c);return new Ne(i,this._parents,this._name,this._id)}function Hc(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,i=n.length,r=e.length,o=Math.min(i,r),a=new Array(i),s=0;s<o;++s)for(var c=n[s],l=e[s],d=c.length,f=a[s]=new Array(d),h,g=0;g<d;++g)(h=c[g]||l[g])&&(f[g]=h);for(;s<i;++s)a[s]=n[s];return new Ne(a,this._parents,this._name,this._id)}function Pp(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function Vp(t,n,e){var i,r,o=Pp(n)?gi:Te;return function(){var a=o(this,t),s=a.on;s!==i&&(r=(i=s).copy()).on(n,e),a.on=r}}function Uc(t,n){var e=this._id;return arguments.length<2?xe(this.node(),e).on.on(t):this.each(Vp(e,t,n))}function Np(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function $c(){return this.on("end.remove",Np(this._id))}function jc(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Zt(t));for(var i=this._groups,r=i.length,o=new Array(r),a=0;a<r;++a)for(var s=i[a],c=s.length,l=o[a]=new Array(c),d,f,h=0;h<c;++h)(d=s[h])&&(f=t.call(d,d.__data__,h,s))&&("__data__"in d&&(f.__data__=d.__data__),l[h]=f,Nt(l[h],n,e,h,l,xe(d,e)));return new Ne(o,this._parents,n,e)}function qc(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Zn(t));for(var i=this._groups,r=i.length,o=[],a=[],s=0;s<r;++s)for(var c=i[s],l=c.length,d,f=0;f<l;++f)if(d=c[f]){for(var h=t.call(d,d.__data__,f,c),g,S=xe(d,e),C=0,x=h.length;C<x;++C)(g=h[C])&&Nt(g,n,e,C,h,S);o.push(h),a.push(d)}return new Ne(o,a,n,e)}var Bp=Tt.prototype.constructor;function Wc(){return new Bp(this._groups,this._parents)}function zp(t,n){var e,i,r;return function(){var o=Pt(this,t),a=(this.style.removeProperty(t),Pt(this,t));return o===a?null:o===e&&a===i?r:r=n(e=o,i=a)}}function Xc(t){return function(){this.style.removeProperty(t)}}function Lp(t,n,e){var i,r=e+"",o;return function(){var a=Pt(this,t);return a===r?null:a===i?o:o=n(i=a,e)}}function Gp(t,n,e){var i,r,o;return function(){var a=Pt(this,t),s=e(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(t),Pt(this,t))),a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s))}}function Hp(t,n){var e,i,r,o="style."+n,a="end."+o,s;return function(){var c=Te(this,t),l=c.on,d=c.value[o]==null?s||(s=Xc(n)):void 0;(l!==e||r!==d)&&(i=(e=l).copy()).on(a,r=d),c.on=i}}function Qc(t,n,e){var i=(t+="")=="transform"?Vo:Tr;return n==null?this.styleTween(t,zp(t,i)).on("end.style."+t,Xc(t)):typeof n=="function"?this.styleTween(t,Gp(t,i,Dn(this,"style."+t,n))).each(Hp(this._id,t)):this.styleTween(t,Lp(t,i,n),e).on("end.style."+t,null)}function Up(t,n,e){return function(i){this.style.setProperty(t,n.call(this,i),e)}}function $p(t,n,e){var i,r;function o(){var a=n.apply(this,arguments);return a!==r&&(i=(r=a)&&Up(t,a,e)),i}return o._value=n,o}function Kc(t,n,e){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(n==null)return this.tween(i,null);if(typeof n!="function")throw new Error;return this.tween(i,$p(t,n,e??""))}function jp(t){return function(){this.textContent=t}}function qp(t){return function(){var n=t(this);this.textContent=n??""}}function Zc(t){return this.tween("text",typeof t=="function"?qp(Dn(this,"text",t)):jp(t==null?"":t+""))}function Wp(t){return function(n){this.textContent=t.call(this,n)}}function Xp(t){var n,e;function i(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&Wp(r)),n}return i._value=t,i}function Yc(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Xp(t))}function Jc(){for(var t=this._name,n=this._id,e=Or(),i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var d=xe(c,n);Nt(c,t,e,l,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ne(i,this._parents,t,e)}function ed(){var t,n,e=this,i=e._id,r=e.size();return new Promise(function(o,a){var s={value:a},c={value:function(){--r===0&&o()}};e.each(function(){var l=Te(this,i),d=l.on;d!==t&&(n=(t=d).copy(),n._.cancel.push(s),n._.interrupt.push(s),n._.end.push(c)),l.on=n}),r===0&&o()})}var Qp=0;function Ne(t,n,e,i){this._groups=t,this._parents=n,this._name=e,this._id=i}function td(t){return Tt().transition(t)}function Or(){return++Qp}var Ot=Tt.prototype;Ne.prototype=td.prototype={constructor:Ne,select:jc,selectAll:qc,selectChild:Ot.selectChild,selectChildren:Ot.selectChildren,filter:Gc,merge:Hc,selection:Wc,transition:Jc,call:Ot.call,nodes:Ot.nodes,node:Ot.node,size:Ot.size,empty:Ot.empty,each:Ot.each,on:Uc,attr:Pc,attrTween:Vc,style:Qc,styleTween:Kc,text:Zc,textTween:Yc,remove:$c,tween:Ac,delay:Nc,duration:Bc,ease:zc,easeVarying:Lc,end:ed,[Symbol.iterator]:Ot[Symbol.iterator]};function Fr(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Kp={time:null,delay:0,duration:250,ease:Fr};function Zp(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function nd(t){var n,e;t instanceof Ne?(n=t._id,t=t._name):(n=Or(),(e=Kp).time=pi(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&Nt(c,t,n,l,a,e||Zp(c,n));return new Ne(i,this._parents,t,n)}Tt.prototype.interrupt=Fc;Tt.prototype.transition=nd;var{abs:T1,max:O1,min:F1}=Math;function id(t){return[+t[0],+t[1]]}function Yp(t){return[id(t[0]),id(t[1])]}var A1={name:"x",handles:["w","e"].map(Lo),input:function(t,n){return t==null?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},P1={name:"y",handles:["n","s"].map(Lo),input:function(t,n){return t==null?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},V1={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Lo),input:function(t){return t==null?null:Yp(t)},output:function(t){return t}};function Lo(t){return{type:t}}function Ar(t,n){var e,i=1;t==null&&(t=0),n==null&&(n=0);function r(){var o,a=e.length,s,c=0,l=0;for(o=0;o<a;++o)s=e[o],c+=s.x,l+=s.y;for(c=(c/a-t)*i,l=(l/a-n)*i,o=0;o<a;++o)s=e[o],s.x-=c,s.y-=l}return r.initialize=function(o){e=o},r.x=function(o){return arguments.length?(t=+o,r):t},r.y=function(o){return arguments.length?(n=+o,r):n},r.strength=function(o){return arguments.length?(i=+o,r):i},r}function rd(t){let n=+this._x.call(null,t),e=+this._y.call(null,t);return od(this.cover(n,e),n,e,t)}function od(t,n,e,i){if(isNaN(n)||isNaN(e))return t;var r,o=t._root,a={data:i},s=t._x0,c=t._y0,l=t._x1,d=t._y1,f,h,g,S,C,x,v,D;if(!o)return t._root=a,t;for(;o.length;)if((C=n>=(f=(s+l)/2))?s=f:l=f,(x=e>=(h=(c+d)/2))?c=h:d=h,r=o,!(o=o[v=x<<1|C]))return r[v]=a,t;if(g=+t._x.call(null,o.data),S=+t._y.call(null,o.data),n===g&&e===S)return a.next=o,r?r[v]=a:t._root=a,t;do r=r?r[v]=new Array(4):t._root=new Array(4),(C=n>=(f=(s+l)/2))?s=f:l=f,(x=e>=(h=(c+d)/2))?c=h:d=h;while((v=x<<1|C)===(D=(S>=h)<<1|g>=f));return r[D]=o,r[v]=a,t}function ad(t){var n,e,i=t.length,r,o,a=new Array(i),s=new Array(i),c=1/0,l=1/0,d=-1/0,f=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(o=+this._y.call(null,n))||(a[e]=r,s[e]=o,r<c&&(c=r),r>d&&(d=r),o<l&&(l=o),o>f&&(f=o));if(c>d||l>f)return this;for(this.cover(c,l).cover(d,f),e=0;e<i;++e)od(this,a[e],s[e],t[e]);return this}function sd(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(e))r=(e=Math.floor(t))+1,o=(i=Math.floor(n))+1;else{for(var a=r-e||1,s=this._root,c,l;e>t||t>=r||i>n||n>=o;)switch(l=(n<i)<<1|t<e,c=new Array(4),c[l]=s,s=c,a*=2,l){case 0:r=e+a,o=i+a;break;case 1:e=r-a,o=i+a;break;case 2:r=e+a,i=o-a;break;case 3:e=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=i,this._x1=r,this._y1=o,this}function ld(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t}function cd(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Me(t,n,e,i,r){this.node=t,this.x0=n,this.y0=e,this.x1=i,this.y1=r}function dd(t,n,e){var i,r=this._x0,o=this._y0,a,s,c,l,d=this._x1,f=this._y1,h=[],g=this._root,S,C;for(g&&h.push(new Me(g,r,o,d,f)),e==null?e=1/0:(r=t-e,o=n-e,d=t+e,f=n+e,e*=e);S=h.pop();)if(!(!(g=S.node)||(a=S.x0)>d||(s=S.y0)>f||(c=S.x1)<r||(l=S.y1)<o))if(g.length){var x=(a+c)/2,v=(s+l)/2;h.push(new Me(g[3],x,v,c,l),new Me(g[2],a,v,x,l),new Me(g[1],x,s,c,v),new Me(g[0],a,s,x,v)),(C=(n>=v)<<1|t>=x)&&(S=h[h.length-1],h[h.length-1]=h[h.length-1-C],h[h.length-1-C]=S)}else{var D=t-+this._x.call(null,g.data),P=n-+this._y.call(null,g.data),y=D*D+P*P;if(y<e){var F=Math.sqrt(e=y);r=t-F,o=n-F,d=t+F,f=n+F,i=g.data}}return i}function ud(t){if(isNaN(d=+this._x.call(null,t))||isNaN(f=+this._y.call(null,t)))return this;var n,e=this._root,i,r,o,a=this._x0,s=this._y0,c=this._x1,l=this._y1,d,f,h,g,S,C,x,v;if(!e)return this;if(e.length)for(;;){if((S=d>=(h=(a+c)/2))?a=h:c=h,(C=f>=(g=(s+l)/2))?s=g:l=g,n=e,!(e=e[x=C<<1|S]))return this;if(!e.length)break;(n[x+1&3]||n[x+2&3]||n[x+3&3])&&(i=n,v=x)}for(;e.data!==t;)if(r=e,!(e=e.next))return this;return(o=e.next)&&delete e.next,r?(o?r.next=o:delete r.next,this):n?(o?n[x]=o:delete n[x],(e=n[0]||n[1]||n[2]||n[3])&&e===(n[3]||n[2]||n[1]||n[0])&&!e.length&&(i?i[v]=e:this._root=e),this):(this._root=o,this)}function md(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function hd(){return this._root}function pd(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t}function fd(t){var n=[],e,i=this._root,r,o,a,s,c;for(i&&n.push(new Me(i,this._x0,this._y0,this._x1,this._y1));e=n.pop();)if(!t(i=e.node,o=e.x0,a=e.y0,s=e.x1,c=e.y1)&&i.length){var l=(o+s)/2,d=(a+c)/2;(r=i[3])&&n.push(new Me(r,l,d,s,c)),(r=i[2])&&n.push(new Me(r,o,d,l,c)),(r=i[1])&&n.push(new Me(r,l,a,s,d)),(r=i[0])&&n.push(new Me(r,o,a,l,d))}return this}function gd(t){var n=[],e=[],i;for(this._root&&n.push(new Me(this._root,this._x0,this._y0,this._x1,this._y1));i=n.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,c=i.x1,l=i.y1,d=(a+c)/2,f=(s+l)/2;(o=r[0])&&n.push(new Me(o,a,s,d,f)),(o=r[1])&&n.push(new Me(o,d,s,c,f)),(o=r[2])&&n.push(new Me(o,a,f,d,l)),(o=r[3])&&n.push(new Me(o,d,f,c,l))}e.push(i)}for(;i=e.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function _d(t){return t[0]}function vd(t){return arguments.length?(this._x=t,this):this._x}function bd(t){return t[1]}function yd(t){return arguments.length?(this._y=t,this):this._y}function on(t,n,e){var i=new Go(n??_d,e??bd,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Go(t,n,e,i,r,o){this._x=t,this._y=n,this._x0=e,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function xd(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Be=on.prototype=Go.prototype;Be.copy=function(){var t=new Go(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,e,i;if(!n)return t;if(!n.length)return t._root=xd(n),t;for(e=[{source:n,target:t._root=new Array(4)}];n=e.pop();)for(var r=0;r<4;++r)(i=n.source[r])&&(i.length?e.push({source:i,target:n.target[r]=new Array(4)}):n.target[r]=xd(i));return t};Be.add=rd;Be.addAll=ad;Be.cover=sd;Be.data=ld;Be.extent=cd;Be.find=dd;Be.remove=ud;Be.removeAll=md;Be.root=hd;Be.size=pd;Be.visit=fd;Be.visitAfter=gd;Be.x=vd;Be.y=yd;function vt(t){return function(){return t}}function st(t){return(t()-.5)*1e-6}function Jp(t){return t.x+t.vx}function ef(t){return t.y+t.vy}function Ho(t){var n,e,i,r=1,o=1;typeof t!="function"&&(t=vt(t==null?1:+t));function a(){for(var l,d=n.length,f,h,g,S,C,x,v=0;v<o;++v)for(f=on(n,Jp,ef).visitAfter(s),l=0;l<d;++l)h=n[l],C=e[h.index],x=C*C,g=h.x+h.vx,S=h.y+h.vy,f.visit(D);function D(P,y,F,A,W){var K=P.data,ie=P.r,te=C+ie;if(K){if(K.index>h.index){var me=g-K.x-K.vx,L=S-K.y-K.vy,pe=me*me+L*L;pe<te*te&&(me===0&&(me=st(i),pe+=me*me),L===0&&(L=st(i),pe+=L*L),pe=(te-(pe=Math.sqrt(pe)))/pe*r,h.vx+=(me*=pe)*(te=(ie*=ie)/(x+ie)),h.vy+=(L*=pe)*te,K.vx-=me*(te=1-te),K.vy-=L*te)}return}return y>g+te||A<g-te||F>S+te||W<S-te}}function s(l){if(l.data)return l.r=e[l.data.index];for(var d=l.r=0;d<4;++d)l[d]&&l[d].r>l.r&&(l.r=l[d].r)}function c(){if(n){var l,d=n.length,f;for(e=new Array(d),l=0;l<d;++l)f=n[l],e[f.index]=+t(f,l,n)}}return a.initialize=function(l,d){n=l,i=d,c()},a.iterations=function(l){return arguments.length?(o=+l,a):o},a.strength=function(l){return arguments.length?(r=+l,a):r},a.radius=function(l){return arguments.length?(t=typeof l=="function"?l:vt(+l),c(),a):t},a}function tf(t){return t.index}function Cd(t,n){var e=t.get(n);if(!e)throw new Error("node not found: "+n);return e}function Uo(t){var n=tf,e=f,i,r=vt(30),o,a,s,c,l,d=1;t==null&&(t=[]);function f(x){return 1/Math.min(s[x.source.index],s[x.target.index])}function h(x){for(var v=0,D=t.length;v<d;++v)for(var P=0,y,F,A,W,K,ie,te;P<D;++P)y=t[P],F=y.source,A=y.target,W=A.x+A.vx-F.x-F.vx||st(l),K=A.y+A.vy-F.y-F.vy||st(l),ie=Math.sqrt(W*W+K*K),ie=(ie-o[P])/ie*x*i[P],W*=ie,K*=ie,A.vx-=W*(te=c[P]),A.vy-=K*te,F.vx+=W*(te=1-te),F.vy+=K*te}function g(){if(a){var x,v=a.length,D=t.length,P=new Map(a.map((F,A)=>[n(F,A,a),F])),y;for(x=0,s=new Array(v);x<D;++x)y=t[x],y.index=x,typeof y.source!="object"&&(y.source=Cd(P,y.source)),typeof y.target!="object"&&(y.target=Cd(P,y.target)),s[y.source.index]=(s[y.source.index]||0)+1,s[y.target.index]=(s[y.target.index]||0)+1;for(x=0,c=new Array(D);x<D;++x)y=t[x],c[x]=s[y.source.index]/(s[y.source.index]+s[y.target.index]);i=new Array(D),S(),o=new Array(D),C()}}function S(){if(a)for(var x=0,v=t.length;x<v;++x)i[x]=+e(t[x],x,t)}function C(){if(a)for(var x=0,v=t.length;x<v;++x)o[x]=+r(t[x],x,t)}return h.initialize=function(x,v){a=x,l=v,g()},h.links=function(x){return arguments.length?(t=x,g(),h):t},h.id=function(x){return arguments.length?(n=x,h):n},h.iterations=function(x){return arguments.length?(d=+x,h):d},h.strength=function(x){return arguments.length?(e=typeof x=="function"?x:vt(+x),S(),h):e},h.distance=function(x){return arguments.length?(r=typeof x=="function"?x:vt(+x),C(),h):r},h}function wd(){let t=1;return()=>(t=(1664525*t+1013904223)%4294967296)/4294967296}function kd(t){return t.x}function Md(t){return t.y}var nf=10,rf=Math.PI*(3-Math.sqrt(5));function $o(t){var n,e=1,i=.001,r=1-Math.pow(i,1/300),o=0,a=.6,s=new Map,c=Sn(f),l=Et("tick","end"),d=wd();t==null&&(t=[]);function f(){h(),l.call("tick",n),e<i&&(c.stop(),l.call("end",n))}function h(C){var x,v=t.length,D;C===void 0&&(C=1);for(var P=0;P<C;++P)for(e+=(o-e)*r,s.forEach(function(y){y(e)}),x=0;x<v;++x)D=t[x],D.fx==null?D.x+=D.vx*=a:(D.x=D.fx,D.vx=0),D.fy==null?D.y+=D.vy*=a:(D.y=D.fy,D.vy=0);return n}function g(){for(var C=0,x=t.length,v;C<x;++C){if(v=t[C],v.index=C,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),isNaN(v.x)||isNaN(v.y)){var D=nf*Math.sqrt(.5+C),P=C*rf;v.x=D*Math.cos(P),v.y=D*Math.sin(P)}(isNaN(v.vx)||isNaN(v.vy))&&(v.vx=v.vy=0)}}function S(C){return C.initialize&&C.initialize(t,d),C}return g(),n={tick:h,restart:function(){return c.restart(f),n},stop:function(){return c.stop(),n},nodes:function(C){return arguments.length?(t=C,g(),s.forEach(S),n):t},alpha:function(C){return arguments.length?(e=+C,n):e},alphaMin:function(C){return arguments.length?(i=+C,n):i},alphaDecay:function(C){return arguments.length?(r=+C,n):+r},alphaTarget:function(C){return arguments.length?(o=+C,n):o},velocityDecay:function(C){return arguments.length?(a=1-C,n):1-a},randomSource:function(C){return arguments.length?(d=C,s.forEach(S),n):d},force:function(C,x){return arguments.length>1?(x==null?s.delete(C):s.set(C,S(x)),n):s.get(C)},find:function(C,x,v){var D=0,P=t.length,y,F,A,W,K;for(v==null?v=1/0:v*=v,D=0;D<P;++D)W=t[D],y=C-W.x,F=x-W.y,A=y*y+F*F,A<v&&(K=W,v=A);return K},on:function(C,x){return arguments.length>1?(l.on(C,x),n):l.on(C)}}}function jo(){var t,n,e,i,r=vt(-30),o,a=1,s=1/0,c=.81;function l(g){var S,C=t.length,x=on(t,kd,Md).visitAfter(f);for(i=g,S=0;S<C;++S)n=t[S],x.visit(h)}function d(){if(t){var g,S=t.length,C;for(o=new Array(S),g=0;g<S;++g)C=t[g],o[C.index]=+r(C,g,t)}}function f(g){var S=0,C,x,v=0,D,P,y;if(g.length){for(D=P=y=0;y<4;++y)(C=g[y])&&(x=Math.abs(C.value))&&(S+=C.value,v+=x,D+=x*C.x,P+=x*C.y);g.x=D/v,g.y=P/v}else{C=g,C.x=C.data.x,C.y=C.data.y;do S+=o[C.data.index];while(C=C.next)}g.value=S}function h(g,S,C,x){if(!g.value)return!0;var v=g.x-n.x,D=g.y-n.y,P=x-S,y=v*v+D*D;if(P*P/c<y)return y<s&&(v===0&&(v=st(e),y+=v*v),D===0&&(D=st(e),y+=D*D),y<a&&(y=Math.sqrt(a*y)),n.vx+=v*g.value*i/y,n.vy+=D*g.value*i/y),!0;if(g.length||y>=s)return;(g.data!==n||g.next)&&(v===0&&(v=st(e),y+=v*v),D===0&&(D=st(e),y+=D*D),y<a&&(y=Math.sqrt(a*y)));do g.data!==n&&(P=o[g.data.index]*i/y,n.vx+=v*P,n.vy+=D*P);while(g=g.next)}return l.initialize=function(g,S){t=g,e=S,d()},l.strength=function(g){return arguments.length?(r=typeof g=="function"?g:vt(+g),d(),l):r},l.distanceMin=function(g){return arguments.length?(a=g*g,l):Math.sqrt(a)},l.distanceMax=function(g){return arguments.length?(s=g*g,l):Math.sqrt(s)},l.theta=function(g){return arguments.length?(c=g*g,l):Math.sqrt(c)},l}function Sd(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function an(t,n){if(!isFinite(t)||t===0)return null;var e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"),i=t.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+t.slice(e+1)]}function bt(t){return t=an(Math.abs(t)),t?t[1]:NaN}function Dd(t,n){return function(e,i){for(var r=e.length,o=[],a=0,s=t[0],c=0;r>0&&s>0&&(c+s+1>i&&(s=Math.max(1,i-c)),o.push(e.substring(r-=s,r+s)),!((c+=s+1)>i));)s=t[a=(a+1)%t.length];return o.reverse().join(n)}}function Rd(t){return function(n){return n.replace(/[0-9]/g,function(e){return t[+e]})}}var of=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function zt(t){if(!(n=of.exec(t)))throw new Error("invalid format: "+t);var n;return new Pr({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}zt.prototype=Pr.prototype;function Pr(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Pr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ed(t){e:for(var n=t.length,e=1,i=-1,r;e<n;++e)switch(t[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+t[e])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var _i;function Id(t,n){var e=an(t,n);if(!e)return _i=void 0,t.toPrecision(n);var i=e[0],r=e[1],o=r-(_i=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return o===a?i:o>a?i+new Array(o-a+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+an(t,Math.max(0,n+o-1))[0]}function qo(t,n){var e=an(t,n);if(!e)return t+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var Wo={"%":(t,n)=>(t*100).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Sd,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>qo(t*100,n),r:qo,s:Id,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Xo(t){return t}var Td=Array.prototype.map,Od=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Fd(t){var n=t.grouping===void 0||t.thousands===void 0?Xo:Dd(Td.call(t.grouping,Number),t.thousands+""),e=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?Xo:Rd(Td.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"\u2212":t.minus+"",c=t.nan===void 0?"NaN":t.nan+"";function l(f,h){f=zt(f);var g=f.fill,S=f.align,C=f.sign,x=f.symbol,v=f.zero,D=f.width,P=f.comma,y=f.precision,F=f.trim,A=f.type;A==="n"?(P=!0,A="g"):Wo[A]||(y===void 0&&(y=12),F=!0,A="g"),(v||g==="0"&&S==="=")&&(v=!0,g="0",S="=");var W=(h&&h.prefix!==void 0?h.prefix:"")+(x==="$"?e:x==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),K=(x==="$"?i:/[%p]/.test(A)?a:"")+(h&&h.suffix!==void 0?h.suffix:""),ie=Wo[A],te=/[defgprs%]/.test(A);y=y===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function me(L){var pe=W,b=K,T,M,O;if(A==="c")b=ie(L)+b,L="";else{L=+L;var G=L<0||1/L<0;if(L=isNaN(L)?c:ie(Math.abs(L),y),F&&(L=Ed(L)),G&&+L==0&&C!=="+"&&(G=!1),pe=(G?C==="("?C:s:C==="-"||C==="("?"":C)+pe,b=(A==="s"&&!isNaN(L)&&_i!==void 0?Od[8+_i/3]:"")+b+(G&&C==="("?")":""),te){for(T=-1,M=L.length;++T<M;)if(O=L.charCodeAt(T),48>O||O>57){b=(O===46?r+L.slice(T+1):L.slice(T))+b,L=L.slice(0,T);break}}}P&&!v&&(L=n(L,1/0));var U=pe.length+L.length+b.length,B=U<D?new Array(D-U+1).join(g):"";switch(P&&v&&(L=n(B+L,B.length?D-b.length:1/0),B=""),S){case"<":L=pe+L+b+B;break;case"=":L=pe+B+L+b;break;case"^":L=B.slice(0,U=B.length>>1)+pe+L+b+B.slice(U);break;default:L=B+pe+L+b;break}return o(L)}return me.toString=function(){return f+""},me}function d(f,h){var g=Math.max(-8,Math.min(8,Math.floor(bt(h)/3)))*3,S=Math.pow(10,-g),C=l((f=zt(f),f.type="f",f),{suffix:Od[8+g/3]});return function(x){return C(S*x)}}return{format:l,formatPrefix:d}}var Vr,Nr,Br;Qo({thousands:",",grouping:[3],currency:["$",""]});function Qo(t){return Vr=Fd(t),Nr=Vr.format,Br=Vr.formatPrefix,Vr}function Ko(t){return Math.max(0,-bt(Math.abs(t)))}function Zo(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bt(n)/3)))*3-bt(Math.abs(t)))}function Yo(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,bt(n)-bt(t))+1}function Ad(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}function Jo(t){return function(){return t}}function ea(t){return+t}var Pd=[0,1];function Rn(t){return t}function ta(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Jo(isNaN(n)?NaN:.5)}function af(t,n){var e;return t>n&&(e=t,t=n,n=e),function(i){return Math.max(t,Math.min(n,i))}}function sf(t,n,e){var i=t[0],r=t[1],o=n[0],a=n[1];return r<i?(i=ta(r,i),o=e(a,o)):(i=ta(i,r),o=e(o,a)),function(s){return o(i(s))}}function lf(t,n,e){var i=Math.min(t.length,n.length)-1,r=new Array(i),o=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)r[a]=ta(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(s){var c=Co(t,s,1,i)-1;return o[c](r[c](s))}}function Vd(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function cf(){var t=Pd,n=Pd,e=nn,i,r,o,a=Rn,s,c,l;function d(){var h=Math.min(t.length,n.length);return a!==Rn&&(a=af(t[0],t[h-1])),s=h>2?lf:sf,c=l=null,f}function f(h){return h==null||isNaN(h=+h)?o:(c||(c=s(t.map(i),n,e)))(i(a(h)))}return f.invert=function(h){return a(r((l||(l=s(n,t.map(i),Ie)))(h)))},f.domain=function(h){return arguments.length?(t=Array.from(h,ea),d()):t.slice()},f.range=function(h){return arguments.length?(n=Array.from(h),d()):n.slice()},f.rangeRound=function(h){return n=Array.from(h),e=Ao,d()},f.clamp=function(h){return arguments.length?(a=h?!0:Rn,d()):a!==Rn},f.interpolate=function(h){return arguments.length?(e=h,d()):e},f.unknown=function(h){return arguments.length?(o=h,f):o},function(h,g){return i=h,r=g,d()}}function na(){return cf()(Rn,Rn)}function ia(t,n,e,i){var r=wo(t,n,e),o;switch(i=zt(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(t),Math.abs(n));return i.precision==null&&!isNaN(o=Zo(r,a))&&(i.precision=o),Br(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=Yo(r,Math.max(Math.abs(t),Math.abs(n))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=Ko(r))&&(i.precision=o-(i.type==="%")*2);break}}return Nr(i)}function df(t){var n=t.domain;return t.ticks=function(e){var i=n();return lr(i[0],i[i.length-1],e??10)},t.tickFormat=function(e,i){var r=n();return ia(r[0],r[r.length-1],e??10,i)},t.nice=function(e){e==null&&(e=10);var i=n(),r=0,o=i.length-1,a=i[r],s=i[o],c,l,d=10;for(s<a&&(l=a,a=s,s=l,l=r,r=o,o=l);d-- >0;){if(l=Xn(a,s,e),l===c)return i[r]=a,i[o]=s,n(i);if(l>0)a=Math.floor(a/l)*l,s=Math.ceil(s/l)*l;else if(l<0)a=Math.ceil(a*l)/l,s=Math.floor(s*l)/l;else break;c=l}return t},t}function vi(){var t=na();return t.copy=function(){return Vd(t,vi())},Ad.apply(t,arguments),df(t)}var bi=t=>()=>t;function ra(t,{sourceEvent:n,target:e,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function lt(t,n,e){this.k=t,this.x=n,this.y=e}lt.prototype={constructor:lt,scale:function(t){return t===1?this:new lt(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new lt(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Lt=new lt(1,0,0);oa.prototype=lt.prototype;function oa(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Lt;return t.__zoom}function zr(t){t.stopImmediatePropagation()}function En(t){t.preventDefault(),t.stopImmediatePropagation()}function uf(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function mf(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Nd(){return this.__zoom||Lt}function hf(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function pf(){return navigator.maxTouchPoints||"ontouchstart"in this}function ff(t,n,e){var i=t.invertX(n[0][0])-e[0][0],r=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function aa(){var t=uf,n=mf,e=ff,i=hf,r=pf,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=Bo,l=Et("start","zoom","end"),d,f,h,g=500,S=150,C=0,x=10;function v(b){b.property("__zoom",Nd).on("wheel.zoom",K,{passive:!1}).on("mousedown.zoom",ie).on("dblclick.zoom",te).filter(r).on("touchstart.zoom",me).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",pe).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}v.transform=function(b,T,M,O){var G=b.selection?b.selection():b;G.property("__zoom",Nd),b!==G?F(b,T,M,O):G.interrupt().each(function(){A(this,arguments).event(O).start().zoom(null,typeof T=="function"?T.apply(this,arguments):T).end()})},v.scaleBy=function(b,T,M,O){v.scaleTo(b,function(){var G=this.__zoom.k,U=typeof T=="function"?T.apply(this,arguments):T;return G*U},M,O)},v.scaleTo=function(b,T,M,O){v.transform(b,function(){var G=n.apply(this,arguments),U=this.__zoom,B=M==null?y(G):typeof M=="function"?M.apply(this,arguments):M,ce=U.invert(B),ge=typeof T=="function"?T.apply(this,arguments):T;return e(P(D(U,ge),B,ce),G,a)},M,O)},v.translateBy=function(b,T,M,O){v.transform(b,function(){return e(this.__zoom.translate(typeof T=="function"?T.apply(this,arguments):T,typeof M=="function"?M.apply(this,arguments):M),n.apply(this,arguments),a)},null,O)},v.translateTo=function(b,T,M,O,G){v.transform(b,function(){var U=n.apply(this,arguments),B=this.__zoom,ce=O==null?y(U):typeof O=="function"?O.apply(this,arguments):O;return e(Lt.translate(ce[0],ce[1]).scale(B.k).translate(typeof T=="function"?-T.apply(this,arguments):-T,typeof M=="function"?-M.apply(this,arguments):-M),U,a)},O,G)};function D(b,T){return T=Math.max(o[0],Math.min(o[1],T)),T===b.k?b:new lt(T,b.x,b.y)}function P(b,T,M){var O=T[0]-M[0]*b.k,G=T[1]-M[1]*b.k;return O===b.x&&G===b.y?b:new lt(b.k,O,G)}function y(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function F(b,T,M,O){b.on("start.zoom",function(){A(this,arguments).event(O).start()}).on("interrupt.zoom end.zoom",function(){A(this,arguments).event(O).end()}).tween("zoom",function(){var G=this,U=arguments,B=A(G,U).event(O),ce=n.apply(G,U),ge=M==null?y(ce):typeof M=="function"?M.apply(G,U):M,ct=Math.max(ce[1][0]-ce[0][0],ce[1][1]-ce[0][1]),Se=G.__zoom,Qe=typeof T=="function"?T.apply(G,U):T,xt=c(Se.invert(ge).concat(ct/Se.k),Qe.invert(ge).concat(ct/Qe.k));return function(Ke){if(Ke===1)Ke=Qe;else{var Ct=xt(Ke),Ur=ct/Ct[2];Ke=new lt(Ur,ge[0]-Ct[0]*Ur,ge[1]-Ct[1]*Ur)}B.zoom(null,Ke)}})}function A(b,T,M){return!M&&b.__zooming||new W(b,T)}function W(b,T){this.that=b,this.args=T,this.active=0,this.sourceEvent=null,this.extent=n.apply(b,T),this.taps=0}W.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,T){return this.mouse&&b!=="mouse"&&(this.mouse[1]=T.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=T.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=T.invert(this.touch1[0])),this.that.__zoom=T,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var T=Ve(this.that).datum();l.call(b,this.that,new ra(b,{sourceEvent:this.sourceEvent,target:v,type:b,transform:this.that.__zoom,dispatch:l}),T)}};function K(b,...T){if(!t.apply(this,arguments))return;var M=A(this,T).event(b),O=this.__zoom,G=Math.max(o[0],Math.min(o[1],O.k*Math.pow(2,i.apply(this,arguments)))),U=Xe(b);if(M.wheel)(M.mouse[0][0]!==U[0]||M.mouse[0][1]!==U[1])&&(M.mouse[1]=O.invert(M.mouse[0]=U)),clearTimeout(M.wheel);else{if(O.k===G)return;M.mouse=[U,O.invert(U)],Bt(this),M.start()}En(b),M.wheel=setTimeout(B,S),M.zoom("mouse",e(P(D(O,G),M.mouse[0],M.mouse[1]),M.extent,a));function B(){M.wheel=null,M.end()}}function ie(b,...T){if(h||!t.apply(this,arguments))return;var M=b.currentTarget,O=A(this,T,!0).event(b),G=Ve(b.view).on("mousemove.zoom",ge,!0).on("mouseup.zoom",ct,!0),U=Xe(b,M),B=b.clientX,ce=b.clientY;ei(b.view),zr(b),O.mouse=[U,this.__zoom.invert(U)],Bt(this),O.start();function ge(Se){if(En(Se),!O.moved){var Qe=Se.clientX-B,xt=Se.clientY-ce;O.moved=Qe*Qe+xt*xt>C}O.event(Se).zoom("mouse",e(P(O.that.__zoom,O.mouse[0]=Xe(Se,M),O.mouse[1]),O.extent,a))}function ct(Se){G.on("mousemove.zoom mouseup.zoom",null),ti(Se.view,O.moved),En(Se),O.event(Se).end()}}function te(b,...T){if(t.apply(this,arguments)){var M=this.__zoom,O=Xe(b.changedTouches?b.changedTouches[0]:b,this),G=M.invert(O),U=M.k*(b.shiftKey?.5:2),B=e(P(D(M,U),O,G),n.apply(this,T),a);En(b),s>0?Ve(this).transition().duration(s).call(F,B,O,b):Ve(this).call(v.transform,B,O,b)}}function me(b,...T){if(t.apply(this,arguments)){var M=b.touches,O=M.length,G=A(this,T,b.changedTouches.length===O).event(b),U,B,ce,ge;for(zr(b),B=0;B<O;++B)ce=M[B],ge=Xe(ce,this),ge=[ge,this.__zoom.invert(ge),ce.identifier],G.touch0?!G.touch1&&G.touch0[2]!==ge[2]&&(G.touch1=ge,G.taps=0):(G.touch0=ge,U=!0,G.taps=1+!!d);d&&(d=clearTimeout(d)),U&&(G.taps<2&&(f=ge[0],d=setTimeout(function(){d=null},g)),Bt(this),G.start())}}function L(b,...T){if(this.__zooming){var M=A(this,T).event(b),O=b.changedTouches,G=O.length,U,B,ce,ge;for(En(b),U=0;U<G;++U)B=O[U],ce=Xe(B,this),M.touch0&&M.touch0[2]===B.identifier?M.touch0[0]=ce:M.touch1&&M.touch1[2]===B.identifier&&(M.touch1[0]=ce);if(B=M.that.__zoom,M.touch1){var ct=M.touch0[0],Se=M.touch0[1],Qe=M.touch1[0],xt=M.touch1[1],Ke=(Ke=Qe[0]-ct[0])*Ke+(Ke=Qe[1]-ct[1])*Ke,Ct=(Ct=xt[0]-Se[0])*Ct+(Ct=xt[1]-Se[1])*Ct;B=D(B,Math.sqrt(Ke/Ct)),ce=[(ct[0]+Qe[0])/2,(ct[1]+Qe[1])/2],ge=[(Se[0]+xt[0])/2,(Se[1]+xt[1])/2]}else if(M.touch0)ce=M.touch0[0],ge=M.touch0[1];else return;M.zoom("touch",e(P(B,ce,ge),M.extent,a))}}function pe(b,...T){if(this.__zooming){var M=A(this,T).event(b),O=b.changedTouches,G=O.length,U,B;for(zr(b),h&&clearTimeout(h),h=setTimeout(function(){h=null},g),U=0;U<G;++U)B=O[U],M.touch0&&M.touch0[2]===B.identifier?delete M.touch0:M.touch1&&M.touch1[2]===B.identifier&&delete M.touch1;if(M.touch1&&!M.touch0&&(M.touch0=M.touch1,delete M.touch1),M.touch0)M.touch0[1]=this.__zoom.invert(M.touch0[0]);else if(M.end(),M.taps===2&&(B=Xe(B,this),Math.hypot(f[0]-B[0],f[1]-B[1])<x)){var ce=Ve(this).on("dblclick.zoom");ce&&ce.apply(this,arguments)}}}return v.wheelDelta=function(b){return arguments.length?(i=typeof b=="function"?b:bi(+b),v):i},v.filter=function(b){return arguments.length?(t=typeof b=="function"?b:bi(!!b),v):t},v.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:bi(!!b),v):r},v.extent=function(b){return arguments.length?(n=typeof b=="function"?b:bi([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),v):n},v.scaleExtent=function(b){return arguments.length?(o[0]=+b[0],o[1]=+b[1],v):[o[0],o[1]]},v.translateExtent=function(b){return arguments.length?(a[0][0]=+b[0][0],a[1][0]=+b[1][0],a[0][1]=+b[0][1],a[1][1]=+b[1][1],v):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},v.constrain=function(b){return arguments.length?(e=b,v):e},v.duration=function(b){return arguments.length?(s=+b,v):s},v.interpolate=function(b){return arguments.length?(c=b,v):c},v.on=function(){var b=l.on.apply(l,arguments);return b===l?v:b},v.clickDistance=function(b){return arguments.length?(C=(b=+b)*b,v):Math.sqrt(C)},v.tapDistance=function(b){return arguments.length?(x=+b,v):x},v}var yt={client:"#174A7C",service:"#16877A",employee:"#6D5BD0",relationshipOwner:"#C28A17",opportunity:"#2E8F55",valueSignal:"#D94A38",currentLink:"#7F93AD",whiteSpaceLink:"#2E8F55",nextBestConnection:"#C28A17",muted:"#CBD5E1"},Bd={nodes:[{id:"client-pacific-transit-authority",label:"Pacific Transit Authority",type:"client",strategicValue:"high",value:18e5,description:"High-trust transit client with strong adjacent analytics opportunity."},{id:"client-metro-water-district",label:"Metro Water District",type:"client",strategicValue:"high",value:15e5,description:"Multi-service public utility client with modernization demand."},{id:"client-coastal-energy-corp",label:"Coastal Energy Corp.",type:"client",strategicValue:"medium",value:95e4,description:"Existing advisory client with strong compliance footprint."},{id:"client-city-of-riverside",label:"City of Riverside",type:"client",strategicValue:"medium",value:72e4,description:"Municipal client with public-facing delivery and engagement needs."},{id:"client-north-county-schools",label:"North County Schools",type:"client",strategicValue:"low",value:42e4,description:"Emerging district relationship with selective service usage."},{id:"service-environmental-consulting",label:"Environmental Consulting",type:"service",description:"Environmental analysis, planning, and remediation support."},{id:"service-survey-mapping",label:"Survey & Mapping",type:"service",description:"Spatial survey and mapping delivery capability."},{id:"service-permitting-compliance",label:"Permitting & Compliance",type:"service",description:"Regulatory navigation and compliance execution."},{id:"service-gis-migration",label:"GIS Migration",type:"service",description:"GIS platform modernization and migration delivery."},{id:"service-asset-lifecycle-analytics",label:"Asset Lifecycle Analytics",type:"service",description:"Asset intelligence, condition modeling, and capital planning analytics."},{id:"service-public-engagement-support",label:"Public Engagement Support",type:"service",description:"Stakeholder and public engagement delivery support."},{id:"owner-sarah-chen",label:"Sarah Chen",type:"relationshipOwner",description:"Primary relationship owner across key infrastructure accounts."},{id:"employee-marcus-lee",label:"Marcus Lee",type:"employee",description:"GIS practice lead and modernization specialist."},{id:"employee-priya-nair",label:"Priya Nair",type:"employee",description:"Asset analytics lead focused on capital planning and lifecycle intelligence."},{id:"employee-david-brooks",label:"David Brooks",type:"employee",description:"Public engagement lead with municipal delivery experience."},{id:"employee-elena-torres",label:"Elena Torres",type:"employee",description:"Environmental consultant with strong public sector proof points."},{id:"opportunity-pacific-asset-analytics",label:"Asset lifecycle analytics for Pacific Transit Authority",type:"opportunity",value:65e4,strategicValue:"high",description:"Convert existing trust into a transit asset analytics expansion path.",proofPoint:"Priya Nair led a similar lifecycle analytics rollout for a regional transit operator last year.",recommendedConnection:"Sarah Chen should introduce Priya Nair during the next quarterly operating review.",targetServiceId:"service-asset-lifecycle-analytics",clientId:"client-pacific-transit-authority"},{id:"opportunity-metro-gis-modernization",label:"GIS modernization for Metro Water District",type:"opportunity",value:54e4,strategicValue:"high",description:"Modernize fragmented GIS assets and workflows for Metro Water District.",proofPoint:"Marcus Lee recently completed a comparable GIS migration for a neighboring utility district.",recommendedConnection:"Sarah Chen should route Marcus Lee into a discovery session with Metro Water District operations.",targetServiceId:"service-gis-migration",clientId:"client-metro-water-district"},{id:"opportunity-riverside-public-engagement",label:"Public engagement support for City of Riverside",type:"opportunity",value:28e4,strategicValue:"medium",description:"Add public engagement support to Riverside delivery programs.",proofPoint:"David Brooks supported a similar municipal outreach program tied to capital works planning.",recommendedConnection:"Sarah Chen should position David Brooks as the next-best connector for the city program team.",targetServiceId:"service-public-engagement-support",clientId:"client-city-of-riverside"}],links:[{source:"client-pacific-transit-authority",target:"service-environmental-consulting",type:"current-service",value:95e4},{source:"client-pacific-transit-authority",target:"service-survey-mapping",type:"current-service",value:85e4},{source:"client-metro-water-district",target:"service-survey-mapping",type:"current-service",value:78e4},{source:"client-metro-water-district",target:"service-permitting-compliance",type:"current-service",value:72e4},{source:"client-city-of-riverside",target:"service-environmental-consulting",type:"current-service",value:52e4},{source:"client-coastal-energy-corp",target:"service-permitting-compliance",type:"current-service",value:61e4},{source:"client-north-county-schools",target:"service-public-engagement-support",type:"current-service",value:22e4},{source:"owner-sarah-chen",target:"client-pacific-transit-authority",type:"owns-relationship",strength:.9},{source:"owner-sarah-chen",target:"client-metro-water-district",type:"owns-relationship",strength:.85},{source:"owner-sarah-chen",target:"client-city-of-riverside",type:"owns-relationship",strength:.7},{source:"employee-elena-torres",target:"service-environmental-consulting",type:"delivers-service",strength:.8},{source:"employee-marcus-lee",target:"service-gis-migration",type:"delivers-service",strength:.85},{source:"employee-priya-nair",target:"service-asset-lifecycle-analytics",type:"delivers-service",strength:.88},{source:"employee-david-brooks",target:"service-public-engagement-support",type:"delivers-service",strength:.8},{source:"opportunity-pacific-asset-analytics",target:"client-pacific-transit-authority",type:"white-space-opportunity",value:65e4,opportunityScore:"high"},{source:"opportunity-pacific-asset-analytics",target:"service-asset-lifecycle-analytics",type:"white-space-opportunity",value:65e4,opportunityScore:"high"},{source:"employee-priya-nair",target:"opportunity-pacific-asset-analytics",type:"next-best-connection",value:65e4},{source:"opportunity-metro-gis-modernization",target:"client-metro-water-district",type:"white-space-opportunity",value:54e4,opportunityScore:"high"},{source:"opportunity-metro-gis-modernization",target:"service-gis-migration",type:"white-space-opportunity",value:54e4,opportunityScore:"high"},{source:"employee-marcus-lee",target:"opportunity-metro-gis-modernization",type:"next-best-connection",value:54e4},{source:"opportunity-riverside-public-engagement",target:"client-city-of-riverside",type:"white-space-opportunity",value:28e4,opportunityScore:"medium"},{source:"opportunity-riverside-public-engagement",target:"service-public-engagement-support",type:"white-space-opportunity",value:28e4,opportunityScore:"medium"},{source:"employee-david-brooks",target:"opportunity-riverside-public-engagement",type:"next-best-connection",value:28e4}]};var _f=["svgHost"],vf=["graphSurface"],bf=(t,n)=>n.key,yf=(t,n)=>n.label;function xf(t,n){if(t&1&&(u(0,"mat-button-toggle",12),w(1),p()),t&2){let e=n.$implicit;z("value",e.key),m(),I(e.label)}}function Cf(t,n){if(t&1&&(u(0,"div",14),j(1,"span",29),u(2,"span"),w(3),p()()),t&2){let e=n.$implicit;m(),Ue("legend-swatch legend-swatch--"+e.className),m(2),I(e.label)}}function wf(t,n){if(t&1&&(u(0,"div",30)(1,"strong"),w(2),p(),u(3,"span"),w(4),p()()),t&2){let e=n;je("left",e.x,"px")("top",e.y,"px"),m(2),I(e.label),m(2),I(e.detail)}}function kf(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Mf(t,n){if(t&1&&(u(0,"section",31)(1,"h5"),w(2,"Context"),p(),u(3,"ul"),ae(4,kf,2,1,"li",null,Re),p()()),t&2){let e=k();m(4),se(e.contextItems)}}function Sf(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Df(t,n){if(t&1&&(u(0,"section",31)(1,"h5"),w(2,"Current state"),p(),u(3,"ul"),ae(4,Sf,2,1,"li",null,Re),p()()),t&2){let e=k();m(4),se(e.currentStateItems)}}function Rf(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Ef(t,n){if(t&1&&(u(0,"section",31)(1,"h5"),w(2,"Opportunity"),p(),u(3,"ul"),ae(4,Rf,2,1,"li",null,Re),p()()),t&2){let e=k();m(4),se(e.opportunityItems)}}function If(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Tf(t,n){if(t&1&&(u(0,"section",31)(1,"h5"),w(2,"Next action"),p(),u(3,"ul"),ae(4,If,2,1,"li",null,Re),p()()),t&2){let e=k();m(4),se(e.nextActionItems)}}function Of(t,n){if(t&1&&(u(0,"div",27)(1,"section",31)(2,"h4"),w(3),p(),u(4,"p",32),w(5),p(),u(6,"p"),w(7),p()(),R(8,Mf,6,0,"section",31),R(9,Df,6,0,"section",31),R(10,Ef,6,0,"section",31),R(11,Tf,6,0,"section",31),p()),t&2){let e=n;m(3),I(e.title),m(2),I(e.typeLabel),m(2),I(e.summary),m(),E(e.contextItems.length?8:-1),m(),E(e.currentStateItems.length?9:-1),m(),E(e.opportunityItems.length?10:-1),m(),E(e.nextActionItems.length?11:-1)}}function Ff(t,n){t&1&&(u(0,"div",28)(1,"p"),w(2,"Select a client, service, person, or opportunity."),p(),u(3,"ul")(4,"li"),w(5,"Clients reveal current services, owners, and white-space paths."),p(),u(6,"li"),w(7,"Services reveal connected clients and delivery expertise."),p(),u(8,"li"),w(9,"People reveal delivery capability and relationship gaps."),p(),u(10,"li"),w(11,"Opportunities reveal proof point, connector, and next action."),p()()())}var Lr=class t{title=Ae("Relationship-Value Explorer");description=Ae("Explore how client relationships, delivered services, employee expertise, and white-space opportunities connect into an actionable revenue intelligence graph.");destroyRef=_(cn);hostRef=_(ne);svgRef=Ft.required("svgHost");graphSurfaceRef=Ft.required("graphSurface");data=this.cloneGraphData(Bd);nodeMap=new Map(this.data.nodes.map(n=>[n.id,n]));resizeObserver;svg;graphGroup;linksLayer;nodesLayer;labelsLayer;simulation;linkSelection;nodeSelection;labelSelection;zoomBehavior;currentTransform=Lt;initialFitComplete=!1;dimensions=re({width:920,height:620});activeFilter=re("all");selectedNodeId=re(null);tooltip=re(null);legendItems=[{label:"Client",className:"client"},{label:"Service",className:"service"},{label:"Employee",className:"employee"},{label:"Relationship owner",className:"relationship-owner"},{label:"Opportunity",className:"opportunity"},{label:"Solid = current",className:"current-link"},{label:"Dotted = white space",className:"opportunity-link"},{label:"Thick = higher value",className:"value-link"}];filters=[{key:"all",label:"All"},{key:"clients",label:"Clients"},{key:"services",label:"Services"},{key:"people",label:"People"},{key:"opportunities",label:"Opportunities"}];selectedInsight=Q(()=>this.buildInsight());constructor(){mt(()=>{this.initializeGraph(),this.observeGraphSurface()}),Ut(()=>{this.activeFilter(),this.selectedNodeId(),this.applySelectionState()}),this.destroyRef.onDestroy(()=>{this.simulation?.stop(),this.resizeObserver?.disconnect()})}resetSelection(){this.selectedNodeId.set(null),this.activeFilter.set("all"),this.applySelectionState()}setFilter(n){this.activeFilter.set(n)}onFilterChange(n){let e=n.value;e&&this.setFilter(e)}zoomIn(){!this.svg||!this.zoomBehavior||this.svg.transition().duration(180).call(this.zoomBehavior.scaleBy,1.15)}zoomOut(){!this.svg||!this.zoomBehavior||this.svg.transition().duration(180).call(this.zoomBehavior.scaleBy,1/1.15)}fitGraphToView(n=!0){if(!this.svg||!this.zoomBehavior||!this.graphGroup)return;let e=this.data.nodes.filter(v=>typeof v.x=="number"&&typeof v.y=="number");if(!e.length)return;let i=Kn(e,v=>v.x)??0,r=Qn(e,v=>v.x)??0,o=Kn(e,v=>v.y)??0,a=Qn(e,v=>v.y)??0,s=this.dimensions().width,c=this.dimensions().height,l=Math.max(r-i,1),d=Math.max(a-o,1),f=72,h=Math.max(.5,Math.min(1.75,Math.min((s-f*2)/l,(c-f*2)/d))),g=s/2-h*(i+l/2),S=c/2-h*(o+d/2),C=Lt.translate(g,S).scale(h);(n?this.svg.transition().duration(220):this.svg).call(this.zoomBehavior.transform,C)}cloneGraphData(n){return{nodes:n.nodes.map(e=>be({},e)),links:n.links.map(e=>be({},e))}}initializeGraph(){let n=this.svgRef().nativeElement;this.svg=Ve(n),this.svg.selectAll("*").remove(),this.svg.on("click",e=>{e.target===n&&this.selectedNodeId.set(null)}),this.graphGroup=this.svg.append("g").attr("class","graph-root"),this.linksLayer=this.graphGroup.append("g").attr("class","links-layer"),this.nodesLayer=this.graphGroup.append("g").attr("class","nodes-layer"),this.labelsLayer=this.graphGroup.append("g").attr("class","labels-layer"),this.setupZoomBehavior(),this.linkSelection=this.linksLayer.selectAll("line").data(this.data.links).join("line").attr("stroke-linecap","round").attr("stroke",e=>this.linkColor(e)).attr("stroke-width",e=>this.linkWidth(e)).attr("stroke-dasharray",e=>this.linkDashArray(e)).attr("opacity",.72),this.nodeSelection=this.nodesLayer.selectAll("circle").data(this.data.nodes).join("circle").attr("r",e=>this.nodeRadius(e)).attr("fill",e=>this.nodeColor(e)).attr("stroke","#ffffff").attr("stroke-width",2).style("cursor","pointer").call(Ro().on("start",(e,i)=>this.onDragStart(e,i)).on("drag",(e,i)=>this.onDrag(e,i)).on("end",(e,i)=>this.onDragEnd(e,i))).on("click",(e,i)=>{e.stopPropagation(),this.selectedNodeId.set(i.id)}).on("mouseenter",(e,i)=>this.updateTooltip(e,i)).on("mousemove",(e,i)=>this.updateTooltip(e,i)).on("mouseleave",()=>this.tooltip.set(null)),this.labelSelection=this.labelsLayer.selectAll("text").data(this.data.nodes).join("text").text(e=>this.shortLabel(e.label)).attr("font-size",12).attr("font-weight",700).attr("fill","var(--relationship-label-fill)").attr("paint-order","stroke").attr("stroke","var(--relationship-label-stroke)").attr("stroke-width",4).attr("stroke-linejoin","round").attr("pointer-events","none"),this.simulation=$o(this.data.nodes).force("link",Uo(this.data.links).id(e=>e.id).distance(e=>this.linkDistance(e)).strength(e=>e.strength??.55)).force("charge",jo().strength(-380)).force("center",Ar(this.dimensions().width/2,this.dimensions().height/2)).force("collision",Ho().radius(e=>this.nodeRadius(e)+24)).on("tick",()=>this.onTick()),this.updateDimensions(),this.applySelectionState(),setTimeout(()=>{this.initialFitComplete||(this.fitGraphToView(!1),this.initialFitComplete=!0)},140)}setupZoomBehavior(){if(!this.svg||!this.graphGroup)return;let n=this.svgRef().nativeElement;this.zoomBehavior=aa().scaleExtent([.5,2.5]).filter(e=>{if(e.type==="dblclick")return!1;if(e.type==="wheel"){let i=e;return i.ctrlKey||i.metaKey}return e.type==="mousedown"?e.target===n:!0}).on("zoom",e=>{this.currentTransform=e.transform,this.graphGroup?.attr("transform",e.transform.toString())}),this.svg.call(this.zoomBehavior).on("dblclick.zoom",null)}observeGraphSurface(){let n=this.graphSurfaceRef().nativeElement,e=new ResizeObserver(()=>this.updateDimensions());e.observe(n),this.resizeObserver=e}updateDimensions(){let n=this.graphSurfaceRef().nativeElement,e=Math.max(320,n.clientWidth||920),i=Math.max(420,n.clientHeight||Math.min(720,Math.round(e*.62)));this.dimensions.set({width:e,height:i}),this.svg?.attr("viewBox",`0 0 ${e} ${i}`).attr("width",e).attr("height",i),this.simulation?.force("center",Ar(e/2,i/2)).alpha(.3).restart()}onTick(){this.linkSelection?.attr("x1",n=>n.source.x??0).attr("y1",n=>n.source.y??0).attr("x2",n=>n.target.x??0).attr("y2",n=>n.target.y??0),this.nodeSelection?.attr("cx",n=>n.x??0).attr("cy",n=>n.y??0),this.labelSelection?.attr("x",n=>(n.x??0)+this.nodeRadius(n)+8).attr("y",n=>(n.y??0)+4)}onDragStart(n,e){n.active||this.simulation?.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}onDrag(n,e){e.fx=n.x,e.fy=n.y}onDragEnd(n,e){n.active||this.simulation?.alphaTarget(0),e.fx=null,e.fy=null}updateTooltip(n,e){let r=this.graphSurfaceRef().nativeElement.getBoundingClientRect();this.tooltip.set({x:n.clientX-r.left,y:n.clientY-r.top,label:e.label,detail:this.typeLabel(e.type)})}applySelectionState(){let n=this.selectedNodeId(),e=n?this.connectedNodeIds(n):new Set;this.nodeSelection?.attr("opacity",i=>this.nodeOpacity(i,n,e)).attr("stroke-width",i=>n===i.id?4:2).attr("stroke",i=>n===i.id?"var(--cw-accent)":"var(--relationship-node-ring)"),this.labelSelection?.attr("opacity",i=>this.nodeOpacity(i,n,e)),this.linkSelection?.attr("opacity",i=>this.linkOpacity(i,n)).attr("stroke-width",i=>this.selectedLinkWidth(i,n))}nodeOpacity(n,e,i){return this.matchesFilter(n)?e?e===n.id||i.has(n.id)?1:.24:1:.12}linkOpacity(n,e){let i=this.linkNodeId(n.source),r=this.linkNodeId(n.target),o=this.nodeMap.get(i),a=this.nodeMap.get(r);return!o||!a||!this.matchesFilter(o)||!this.matchesFilter(a)?.1:e?i===e||r===e?.95:.14:.72}selectedLinkWidth(n,e){let i=this.linkWidth(n);if(!e)return i;let r=this.linkNodeId(n.source),o=this.linkNodeId(n.target);return r===e||o===e?i+1.4:i}connectedNodeIds(n){let e=new Set;for(let i of this.data.links){let r=this.linkNodeId(i.source),o=this.linkNodeId(i.target);r===n&&e.add(o),o===n&&e.add(r)}return e}linkNodeId(n){return typeof n=="string"?n:n.id}matchesFilter(n){switch(this.activeFilter()){case"clients":return n.type==="client";case"services":return n.type==="service";case"people":return n.type==="employee"||n.type==="relationshipOwner";case"opportunities":return n.type==="opportunity";default:return!0}}nodeRadius(n){switch(n.type){case"client":return 20;case"service":return 16;case"relationshipOwner":return 18;case"opportunity":return 18;default:return 14}}nodeColor(n){switch(n.type){case"client":return this.cssColor("--relationship-client",yt.client);case"service":return this.cssColor("--relationship-service",yt.service);case"employee":return this.cssColor("--relationship-employee",yt.employee);case"relationshipOwner":return this.cssColor("--relationship-owner",yt.relationshipOwner);case"opportunity":return this.cssColor("--relationship-opportunity",yt.opportunity)}}linkColor(n){switch(n.type){case"white-space-opportunity":return this.cssColor("--relationship-white-space-link",yt.whiteSpaceLink);case"next-best-connection":case"owns-relationship":return this.cssColor("--relationship-next-best",yt.nextBestConnection);case"delivers-service":return this.cssColor("--relationship-employee",yt.employee);default:return this.cssColor("--relationship-current-link",yt.currentLink)}}linkDashArray(n){switch(n.type){case"white-space-opportunity":return"7 7";case"next-best-connection":return"4 6";default:return null}}linkWidth(n){return vi().domain([0,18e5]).range([1.5,6]).clamp(!0)(n.value??22e4)}linkDistance(n){switch(n.type){case"owns-relationship":return 126;case"delivers-service":return 96;case"next-best-connection":return 92;case"white-space-opportunity":return 112;default:return 108}}shortLabel(n){return n.length>28?`${n.slice(0,26)}\u2026`:n}typeLabel(n){switch(n){case"client":return"Client";case"service":return"Service";case"employee":return"Employee";case"relationshipOwner":return"Relationship owner";case"opportunity":return"Opportunity"}}buildInsight(){let n=this.selectedNodeId();if(!n)return null;let e=this.nodeMap.get(n);if(!e)return null;if(e.type==="client"){let i=this.connectedNodesByType(n,"service","current-service").map(s=>s.label),r=this.connectedNodesByType(n,"opportunity","white-space-opportunity"),o=this.connectedNodesByType(n,"relationshipOwner","owns-relationship")[0],a=r[0];return{title:e.label,typeLabel:"Selected client",summary:e.description??"Client selected.",contextItems:[this.strategicValueLabel(e),o?`Relationship owner: ${o.label}`:""].filter(Boolean),currentStateItems:[...i.map(s=>`Current service: ${s}`),e.value?`Current portfolio value: ${this.formatCurrency(e.value)}`:""].filter(Boolean),opportunityItems:[...r.map(s=>`White-space opportunity: ${s.label}`),r.length?`Estimated potential value: ${this.formatCurrency(r.reduce((s,c)=>s+(c.value??0),0))}`:""].filter(Boolean),nextActionItems:[a?.recommendedConnection?`Next-best connection: ${a.recommendedConnection}`:"",a?.proofPoint?`Proof point: ${a.proofPoint}`:""].filter(Boolean)}}if(e.type==="service"){let i=this.connectedNodesByType(n,"client","current-service").map(a=>a.label),r=this.connectedNodesByType(n,"employee","delivers-service").map(a=>a.label),o=this.opportunitiesForService(n);return{title:e.label,typeLabel:"Selected service",summary:e.description??"Service selected.",contextItems:r.map(a=>`Delivery expert: ${a}`),currentStateItems:i.map(a=>`Currently serving: ${a}`),opportunityItems:o.map(a=>`Adjacent client path: ${a.label}`),nextActionItems:o[0]?.recommendedConnection?[`Next action: ${o[0].recommendedConnection}`]:[]}}if(e.type==="employee"){let i=this.connectedNodesByType(n,"service","delivers-service").map(o=>o.label),r=this.opportunitiesForEmployee(n);return{title:e.label,typeLabel:"Selected employee",summary:e.description??"Employee selected.",contextItems:i.map(o=>`Expertise: ${o}`),currentStateItems:r.length?[`Connected opportunity paths: ${r.map(o=>o.label).join(" \xB7 ")}`]:[],opportunityItems:r.map(o=>`Could support: ${o.label}`),nextActionItems:r[0]?.recommendedConnection?[`Recommended introduction: ${r[0].recommendedConnection}`]:[]}}if(e.type==="relationshipOwner"){let i=this.connectedNodesByType(n,"client","owns-relationship"),r=i.flatMap(o=>this.connectedNodesByType(o.id,"opportunity","white-space-opportunity"));return{title:e.label,typeLabel:"Relationship owner",summary:e.description??"Relationship owner selected.",contextItems:i.map(o=>`Owns relationship: ${o.label}`),currentStateItems:i.length?[`Managed portfolio value: ${this.formatCurrency(i.reduce((o,a)=>o+(a.value??0),0))}`]:[],opportunityItems:r.map(o=>`Open path: ${o.label}`),nextActionItems:r[0]?.recommendedConnection?[`Recommended connection: ${r[0].recommendedConnection}`]:[]}}if(e.type==="opportunity"){let i=e.clientId?this.nodeMap.get(e.clientId):void 0,r=e.targetServiceId?this.nodeMap.get(e.targetServiceId):void 0,o=i?this.connectedNodesByType(i.id,"relationshipOwner","owns-relationship")[0]:void 0;return{title:e.label,typeLabel:"Selected opportunity",summary:e.description??"Opportunity selected.",contextItems:[i?`Client: ${i.label}`:"",r?`Target service: ${r.label}`:""].filter(Boolean),currentStateItems:[o?`Relationship owner: ${o.label}`:"",e.value?`Estimated potential value: ${this.formatCurrency(e.value)}`:""].filter(Boolean),opportunityItems:[this.strategicValueLabel(e),e.proofPoint?`Proof point: ${e.proofPoint}`:""].filter(Boolean),nextActionItems:e.recommendedConnection?[`Suggested next action: ${e.recommendedConnection}`]:[]}}return{title:e.label,typeLabel:`Selected ${this.typeLabel(e.type).toLowerCase()}`,summary:e.description??`${this.typeLabel(e.type)} selected.`,contextItems:[],currentStateItems:[],opportunityItems:[],nextActionItems:[]}}connectedNodesByType(n,e,i){let r=[];for(let o of this.data.links){if(i&&o.type!==i)continue;let a=this.linkNodeId(o.source),s=this.linkNodeId(o.target),c=a===n?s:s===n?a:null;if(!c)continue;let l=this.nodeMap.get(c);l?.type===e&&r.push(l)}return r}opportunitiesForService(n){return this.data.nodes.filter(e=>e.type==="opportunity"&&e.targetServiceId===n)}opportunitiesForEmployee(n){let e=this.connectedNodesByType(n,"service","delivers-service").map(i=>i.id);return this.data.nodes.filter(i=>i.type==="opportunity"&&!!i.targetServiceId&&e.includes(i.targetServiceId))}strategicValueLabel(n){return n.strategicValue?`Strategic value: ${n.strategicValue}`:""}formatCurrency(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n)}cssColor(n,e){return getComputedStyle(this.hostRef.nativeElement).getPropertyValue(n).trim()||e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Y({type:t,selectors:[["app-relationship-value-explorer"]],viewQuery:function(e,i){e&1&&Mi(i.svgRef,_f,5)(i.graphSurfaceRef,vf,5),e&2&&Bn(2)},inputs:{title:[1,"title"],description:[1,"description"]},decls:52,vars:5,consts:[["graphSurface",""],["svgHost",""],[1,"relationship-explorer"],[1,"relationship-explorer__header"],[1,"relationship-explorer__copy"],[1,"relationship-explorer__eyebrow"],[1,"relationship-explorer__title"],[1,"relationship-explorer__subtitle"],[1,"relationship-explorer__actions"],["mat-stroked-button","","type","button",3,"click"],[1,"relationship-explorer__controls"],["aria-label","Filter graph entities",1,"relationship-explorer__filters",3,"change","value"],[3,"value"],["aria-label","Graph legend",1,"relationship-explorer__legend"],[1,"legend-item"],[1,"relationship-explorer__hint"],[1,"relationship-explorer__body"],[1,"graph-card"],[1,"graph-canvas"],["aria-label","Graph controls",1,"graph-canvas__controls"],["mat-icon-button","","type","button","aria-label","Zoom in",3,"click"],["mat-icon-button","","type","button","aria-label","Zoom out",3,"click"],["mat-icon-button","","type","button","aria-label","Fit graph",3,"click"],["mat-icon-button","","type","button","aria-label","Reset selection",3,"click"],["aria-label","Relationship value explorer graph",1,"graph-svg"],[1,"graph-tooltip",3,"left","top"],[1,"insight-card"],[1,"insight-stack"],[1,"insight-empty"],[1,"legend-swatch"],[1,"graph-tooltip"],[1,"insight-block"],[1,"insight-type"]],template:function(e,i){if(e&1&&(u(0,"section",2)(1,"header",3)(2,"div",4)(3,"p",5),w(4,"Interactive artifact"),p(),u(5,"h3",6),w(6),p(),u(7,"p",7),w(8),p()(),u(9,"div",8)(10,"button",9),X("click",function(){return i.resetSelection()}),u(11,"mat-icon"),w(12,"restart_alt"),p(),w(13," Reset "),p(),u(14,"button",9),X("click",function(){return i.fitGraphToView()}),u(15,"mat-icon"),w(16,"center_focus_strong"),p(),w(17," Fit graph "),p()()(),u(18,"div",10)(19,"mat-button-toggle-group",11),X("change",function(o){return i.onFilterChange(o)}),ae(20,xf,2,2,"mat-button-toggle",12,bf),p(),u(22,"div",13),ae(23,Cf,4,3,"div",14,yf),p()(),u(25,"div",15),w(26," Scroll page normally. Hold Ctrl/\u2318 + scroll to zoom the map. "),p(),u(27,"div",16)(28,"section",17)(29,"div",18,0)(31,"div",19)(32,"button",20),X("click",function(){return i.zoomIn()}),u(33,"mat-icon"),w(34,"add"),p()(),u(35,"button",21),X("click",function(){return i.zoomOut()}),u(36,"mat-icon"),w(37,"remove"),p()(),u(38,"button",22),X("click",function(){return i.fitGraphToView()}),u(39,"mat-icon"),w(40,"center_focus_strong"),p()(),u(41,"button",23),X("click",function(){return i.resetSelection()}),u(42,"mat-icon"),w(43,"restart_alt"),p()()(),An(),j(44,"svg",24,1),R(46,wf,5,6,"div",25),p()(),ki(),u(47,"aside",26)(48,"p",5),w(49,"Executive insight"),p(),R(50,Of,12,7,"div",27)(51,Ff,12,0,"div",28),p()()()),e&2){let r,o;m(6),I(i.title()),m(2),I(i.description()),m(11),z("value",i.activeFilter()),m(),se(i.filters),m(3),se(i.legendItems),m(23),E((r=i.tooltip())?46:-1,r),m(4),E((o=i.selectedInsight())?50:51,o)}},dependencies:[fn,Ii,Ei,ll,bo,or,_n,gn],styles:["[_nghost-%COMP%]{--relationship-client: #174A7C;--relationship-service: #16877A;--relationship-employee: #6D5BD0;--relationship-owner: #C28A17;--relationship-opportunity: #2E8F55;--relationship-value-signal: #D94A38;--relationship-current-link: #7F93AD;--relationship-white-space-link: #2E8F55;--relationship-next-best: #C28A17;--relationship-node-ring: #ffffff;--relationship-label-fill: var(--cw-ink);--relationship-label-stroke: rgba(255, 255, 255, .95);--relationship-control-surface: rgba(255, 255, 255, .94);--relationship-tooltip-surface: rgba(255, 255, 255, .96);--relationship-insight-surface: color-mix(in srgb, var(--cw-panel) 88%, white);--relationship-toggle-surface: rgba(255, 255, 255, .96);--relationship-toggle-text: var(--cw-ink);--relationship-toggle-selected-surface: color-mix(in srgb, var(--cw-accent) 14%, var(--cw-panel));--relationship-toggle-selected-text: var(--cw-accent-strong);--relationship-canvas-base: radial-gradient(circle at top left, rgba(37, 99, 235, .07), transparent 32rem), var(--cw-soft, #f8fbff);display:block}.relationship-explorer[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:1.5rem;background:var(--cw-panel);padding:clamp(1.25rem,2vw,2rem)}.relationship-explorer__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1.5rem;align-items:flex-start;margin-bottom:1.25rem}.relationship-explorer__copy[_ngcontent-%COMP%]{min-width:0}.relationship-explorer__eyebrow[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:.78rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--cw-accent)}.relationship-explorer__title[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.75rem,3vw,2.4rem);line-height:1.05;color:var(--cw-ink)}.relationship-explorer__subtitle[_ngcontent-%COMP%]{max-width:760px;margin:.75rem 0 0;color:var(--cw-muted);font-size:1.05rem;line-height:1.6}.relationship-explorer__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}.relationship-explorer__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.35rem}.relationship-explorer__controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1rem;align-items:center;justify-content:space-between;padding:.9rem 0;border-top:1px solid var(--cw-line);border-bottom:1px solid var(--cw-line);margin-bottom:.75rem}.relationship-explorer__filters[_ngcontent-%COMP%]{flex:0 1 auto}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-appearance-standard{border:1px solid var(--cw-line);background:var(--relationship-toggle-surface);color:var(--relationship-toggle-text)}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-checked{background:var(--relationship-toggle-selected-surface);color:var(--relationship-toggle-selected-text)}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-focus-overlay, [_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-button:before{background:transparent}.relationship-explorer__legend[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.65rem 1rem;align-items:center;justify-content:flex-end}.legend-item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;color:var(--cw-muted);font-size:.92rem;line-height:1.4}.legend-swatch[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:999px;display:inline-block;border:1px solid rgba(12,22,34,.08)}.legend-swatch--client[_ngcontent-%COMP%]{background:var(--relationship-client)}.legend-swatch--service[_ngcontent-%COMP%]{background:var(--relationship-service)}.legend-swatch--employee[_ngcontent-%COMP%]{background:var(--relationship-employee)}.legend-swatch--relationship-owner[_ngcontent-%COMP%]{background:var(--relationship-owner)}.legend-swatch--opportunity[_ngcontent-%COMP%]{background:var(--relationship-opportunity)}.legend-swatch--current-link[_ngcontent-%COMP%], .legend-swatch--value-link[_ngcontent-%COMP%]{background:var(--relationship-current-link);border-radius:3px}.legend-swatch--opportunity-link[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,var(--relationship-white-space-link) 0,var(--relationship-white-space-link) 5px,transparent 5px,transparent 8px);border-radius:3px}.relationship-explorer__hint[_ngcontent-%COMP%]{margin-bottom:1rem;color:var(--cw-muted);font-size:.9rem;line-height:1.5}.relationship-explorer__body[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,360px);gap:1.25rem;align-items:stretch}.graph-card[_ngcontent-%COMP%]{display:grid}.graph-canvas[_ngcontent-%COMP%]{position:relative;min-height:clamp(520px,60vh,720px);border:1px solid var(--cw-line);border-radius:1.25rem;overflow:hidden;background:var(--relationship-canvas-base)}.graph-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.graph-canvas__controls[_ngcontent-%COMP%]{position:absolute;top:.9rem;right:.9rem;z-index:2;display:grid;gap:.45rem;padding:.35rem;border:1px solid var(--cw-line);border-radius:1rem;background:var(--relationship-control-surface);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--cw-ink)}.graph-tooltip[_ngcontent-%COMP%]{position:absolute;z-index:3;pointer-events:none;transform:translate(12px,12px);border:1px solid var(--cw-line);border-radius:12px;background:var(--relationship-tooltip-surface);box-shadow:0 14px 28px #0c16221f;padding:10px 12px;display:grid;gap:4px}.graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--cw-ink);font-size:.9rem;line-height:1.4}.graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--cw-muted)}.insight-card[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:1.25rem;background:var(--relationship-insight-surface);padding:1.1rem 1.15rem;display:grid;gap:.95rem;align-content:start}body.cw-theme-dusk[_nghost-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]{--relationship-client: #5ea2ea;--relationship-service: #2bb7a5;--relationship-employee: #8f7cf0;--relationship-owner: #e1ae3c;--relationship-opportunity: #43b86a;--relationship-value-signal: #ee6958;--relationship-current-link: #8aa0bc;--relationship-white-space-link: #43b86a;--relationship-next-best: #e1ae3c;--relationship-node-ring: #dce8f5;--relationship-label-fill: #eef4fb;--relationship-label-stroke: rgba(7, 18, 30, .92);--relationship-control-surface: rgba(11, 24, 38, .9);--relationship-tooltip-surface: rgba(10, 20, 32, .96);--relationship-insight-surface: linear-gradient( 180deg, color-mix(in srgb, var(--cw-panel) 92%, #24384d), color-mix(in srgb, var(--cw-panel) 98%, #0a1623) );--relationship-toggle-surface: rgba(15, 31, 47, .96);--relationship-toggle-text: #dfe9f5;--relationship-toggle-selected-surface: color-mix(in srgb, var(--cw-accent) 18%, #11273b);--relationship-toggle-selected-text: #cfe3ff;--relationship-canvas-base: radial-gradient(circle at top left, rgba(140, 192, 255, .12), transparent 32rem), radial-gradient(circle at bottom right, rgba(45, 135, 113, .08), transparent 28rem), linear-gradient(180deg, #0d1f31 0%, #0a1826 100%)}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer[_ngcontent-%COMP%]{background:linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 94%,#17324a),color-mix(in srgb,var(--cw-panel) 99%,#08131e))}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer__controls[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer__controls[_ngcontent-%COMP%]{border-top-color:color-mix(in srgb,var(--cw-line) 85%,#385474);border-bottom-color:color-mix(in srgb,var(--cw-line) 85%,#385474)}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer__hint[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer__hint[_ngcontent-%COMP%]{color:#bfd0e2}body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#4c6d8f);box-shadow:0 10px 24px #00000052}body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#edf4fb}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#4c6d8f);box-shadow:0 14px 30px #0006}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#eef4fb}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]{color:#bfd0e2}body.cw-theme-dusk[_nghost-%COMP%]   .graph-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-card[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#3f5e80)}body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]{box-shadow:inset 0 1px #ffffff08}body.cw-theme-dusk[_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#eef4fb}body.cw-theme-dusk[_nghost-%COMP%]   .insight-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-type[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-type[_ngcontent-%COMP%]{color:#bfd0e2}.insight-stack[_ngcontent-%COMP%]{display:grid;gap:1rem}.insight-block[_ngcontent-%COMP%]{display:grid;gap:.45rem}.insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;color:var(--cw-ink)}.insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem}.insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.84rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cw-muted)}.insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .insight-type[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.6}.insight-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .insight-empty[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;display:grid;gap:.35rem}.insight-type[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700}.insight-empty[_ngcontent-%COMP%]{display:grid;gap:.75rem}@media(max-width:1020px){.relationship-explorer__body[_ngcontent-%COMP%]{grid-template-columns:1fr}.graph-canvas[_ngcontent-%COMP%]{min-height:520px}}@media(max-width:820px){.relationship-explorer__header[_ngcontent-%COMP%]{flex-direction:column}.relationship-explorer__controls[_ngcontent-%COMP%]{align-items:flex-start}.relationship-explorer__legend[_ngcontent-%COMP%]{justify-content:flex-start}}@media(max-width:640px){.relationship-explorer[_ngcontent-%COMP%]{padding:1rem}.relationship-explorer__subtitle[_ngcontent-%COMP%]{font-size:.98rem}.graph-canvas[_ngcontent-%COMP%]{min-height:420px}.graph-canvas__controls[_ngcontent-%COMP%]{grid-auto-flow:column;top:auto;right:.75rem;bottom:.75rem}}"],changeDetection:0})};var Af=["mat-internal-form-field",""],Pf=["*"],Gd=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&J("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Af,ngContentSelectors:Pf,decls:1,vars:0,template:function(i,r){i&1&&(ye(),ee(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Vf=["input"],Nf=["label"],Bf=["*"],la={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},zf=new Z("mat-checkbox-default-options",{providedIn:"root",factory:()=>la}),Oe=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Oe||{}),ca=class{source;checked},da=(()=>{class t{_elementRef=_(ne);_changeDetectorRef=_(ve);_ngZone=_(_e);_animationsDisabled=qe();_options=_(zf,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new ca;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new he;indeterminateChange=new he;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Oe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){_(Dt).load(Rt);let e=_(new un("tabindex"),{optional:!0});this._options=this._options||la,this.color=this._options.color||la.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=_(gt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Oe.Indeterminate):this._transitionCheckState(this.checked?Oe.Checked:Oe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=re(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Oe.Checked:Oe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Oe.Init:if(i===Oe.Checked)return this._animationClasses.uncheckedToChecked;if(i==Oe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Oe.Unchecked:return i===Oe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Oe.Checked:return i===Oe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Oe.Indeterminate:return i===Oe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ge(Vf,5)(Nf,5),i&2){let o;V(o=N())&&(r._inputElement=o.first),V(o=N())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(dn("id",r.id),oe("tabindex",null)("aria-label",null)("aria-labelledby",null),Ue(r.color?"mat-"+r.color:"mat-accent"),J("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",q],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",q],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",q],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ee(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",q],checked:[2,"checked","checked",q],disabled:[2,"disabled","disabled",q],indeterminate:[2,"indeterminate","indeterminate",q]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[le([{provide:xn,useExisting:Ze(()=>t),multi:!0},{provide:$i,useExisting:t,multi:!0}]),ut],ngContentSelectors:Bf,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ye(),u(0,"div",3),X("click",function(a){return r._preventBubblingFromLabel(a)}),u(1,"div",4,0)(3,"div",5),X("click",function(){return r._onTouchTargetClick()}),p(),u(4,"input",6,1),X("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),p(),j(6,"div",7),u(7,"div",8),An(),u(8,"svg",9),j(9,"path",10),p(),ki(),j(10,"div",11),p(),j(11,"div",12),p(),u(12,"label",13,2),ee(14),p()()),i&2){let o=qt(2);z("labelPosition",r.labelPosition),m(4),J("mdc-checkbox--selected",r.checked),z("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),oe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),m(7),z("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),m(),z("for",r.inputId)}},dependencies:[Xt,Gd],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),Hd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[da,Pe]})}return t})();var Gf=["knob"],Hf=["valueIndicatorContainer"];function Uf(t,n){if(t&1&&(u(0,"div",2,1)(2,"div",5)(3,"span",6),w(4),p()()()),t&2){let e=k();m(4),I(e.valueIndicatorText)}}var $f=["trackActive"],jf=["*"];function qf(t,n){if(t&1&&j(0,"div"),t&2){let e=n.$implicit,i=n.$index,r=k(3);Ue(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),je("transform",r._calcTickMarkTransform(i))}}function Wf(t,n){if(t&1&&ae(0,qf,1,4,"div",8,ya),t&2){let e=k(2);se(e._tickMarks)}}function Xf(t,n){if(t&1&&(u(0,"div",6,1),R(2,Wf,2,0),p()),t&2){let e=k();m(2),E(e._cachedWidth?2:-1)}}function Qf(t,n){if(t&1&&j(0,"mat-slider-visual-thumb",7),t&2){let e=k();z("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var H=(function(t){return t[t.START=1]="START",t[t.END=2]="END",t})(H||{}),In=(function(t){return t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE",t})(In||{}),ua=new Z("_MatSlider"),Ud=new Z("_MatSliderThumb"),Kf=new Z("_MatSliderRangeThumb"),$d=new Z("_MatSliderVisualThumb");var Zf=(()=>{class t{_cdr=_(ve);_ngZone=_(_e);_slider=_(ua);_renderer=_(et);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=_(ne).nativeElement;_platform=_(nt);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(i,"pointermove",this._onPointerMove),r.listen(i,"pointerdown",this._onDragStart),r.listen(i,"pointerup",this._onDragEnd),r.listen(i,"pointerleave",this._onMouseLeave),r.listen(i,"focus",this._onFocus),r.listen(i,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,i);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Yr.FADING_IN||e?.state===Yr.VISIBLE}_showRipple(e,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===H.START?H.END:H.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===H.START?H.END:H.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(i,r){if(i&1&&Ge(Xt,5)(Gf,5)(Hf,5),i&2){let o;V(o=N())&&(r._ripple=o.first),V(o=N())&&(r._knob=o.first),V(o=N())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[le([{provide:$d,useExisting:t}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(i,r){i&1&&(R(0,Uf,5,1,"div",2),j(1,"div",3,0)(3,"div",4)),i&2&&(E(r.discrete?0:-1),m(3),z("matRippleDisabled",!0))},dependencies:[Xt],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return t})(),jd=(()=>{class t{_ngZone=_(_e);_cdr=_(ve);_elementRef=_(ne);_dir=_(We,{optional:!0});_globalRippleOptions=_(Ri,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let i=this._getInput(H.END),r=this._getInput(H.START);i&&(i.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let i=e==null||isNaN(e)?this._min:e;this._min!==i&&this._updateMin(i)}_min=0;color;disableRipple=!1;_updateMin(e){let i=this._min;this._min=e,this._isRange?this._updateMinRange({old:i,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let i=this._getInput(H.END),r=this._getInput(H.START),o=i.value,a=r.value;r.min=e.new,i.min=Math.max(e.new,r.value),r.max=Math.min(i.max,i.value),r._updateWidthInactive(),i._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(i,r):this._onTranslateXChangeBySideEffect(r,i),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let i=this._getInput(H.END);if(i){let r=i.value;i.min=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get max(){return this._max}set max(e){let i=e==null||isNaN(e)?this._max:e;this._max!==i&&this._updateMax(i)}_max=100;_updateMax(e){let i=this._max;this._max=e,this._isRange?this._updateMaxRange({old:i,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let i=this._getInput(H.END),r=this._getInput(H.START),o=i.value,a=r.value;i.max=e.new,r.max=Math.min(e.new,i.value),i.min=r.value,i._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,i):this._onTranslateXChangeBySideEffect(i,r),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let i=this._getInput(H.END);if(i){let r=i.value;i.max=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get step(){return this._step}set step(e){let i=isNaN(e)?this._step:e;this._step!==i&&this._updateStep(i)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(H.END),i=this._getInput(H.START),r=e.value,o=i.value,a=i.value;e.min=this._min,i.max=this._max,e.step=this._step,i.step=this._step,this._platform.SAFARI&&(e.value=e.value,i.value=i.value),e.min=Math.max(this._min,i.value),i.max=Math.min(this._max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),e.value<a?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),r!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i)}_updateStepNonRange(){let e=this._getInput(H.END);if(e){let i=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),i!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=qe();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Q(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=_(nt);constructor(){_(Dt).load(Rt);let e=this._isRtl();Si(()=>{let i=this._isRtl();i!==e&&(e=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(H.END),i=this._getInput(H.START);this._isRange=!!e&&!!i,this._cdr.detectChanges();let r=this._getThumb(H.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,i):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,i){e.initProps(),e.initUI(),i.initProps(),i.initUI(),e._updateMinMax(),i._updateMinMax(),e._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),i._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(H.END),i=this._getInput(H.START);e._setIsLeftThumb(),i._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateWidthInactive(),i._updateWidthInactive(),e._updateThumbUIByValue(),i._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(H.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(H.START)._isActive||this._getThumb(H.END)._isActive}_getValue(e=H.END){let i=this._getInput(e);return i?i.value:this.min}_skipUpdate(){return!!(this._getInput(H.START)?._skipUIUpdate||this._getInput(H.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let i=this._trackActive.nativeElement.style;i.left=e.left,i.right=e.right,i.transformOrigin=e.transformOrigin,i.transform=e.transform}_calcTickMarkTransform(e){let i=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,i){this._hasViewInitialized&&(e._updateThumbUIByValue(),i._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(H.END),i=this._getInput(H.START);e._updateThumbUIByValue(),i._updateThumbUIByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateMinMax(),i._updateMinMax(),e._updateWidthInactive(),i._updateWidthInactive()}else{let e=this._getInput(H.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(H.START),i=this._getInput(H.END);return!e||!i?!1:i.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let i=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let i=this._getThumb(e.thumbPosition===H.END?H.END:H.START);i._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let i=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(i):e._hostElement.setAttribute("aria-valuetext",i),this.discrete){e.thumbPosition===H.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let r=this._getThumb(e.thumbPosition);i.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(H.END),i=this._getInput(H.START);e&&this._updateValueIndicatorUI(e),i&&this._updateValueIndicatorUI(i)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let i=e.getSibling();if(!i||!this._cachedWidth)return;let r=Math.abs(i.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-i.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let i=this._getValue(),r=Math.max(Math.round((i-this.min)/e),0)+1,o=Math.max(Math.round((this.max-i)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(In.ACTIVE).concat(Array(o).fill(In.INACTIVE))}_updateTickMarkUIRange(e){let i=this._getValue(),r=this._getValue(H.START),o=Math.max(Math.round((r-this.min)/e),0),a=Math.max(Math.round((i-r)/e)+1,0),s=Math.max(Math.round((this.max-i)/e),0);this._tickMarks=Array(o).fill(In.INACTIVE).concat(Array(a).fill(In.ACTIVE),Array(s).fill(In.INACTIVE))}_getInput(e){if(e===H.END&&this._input)return this._input;if(this._inputs?.length)return e===H.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===H.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,i){let r=i.width/2,o=i.x+r,a=i.y+r,s=e.clientX-o,c=e.clientY-a;return Math.pow(s,2)+Math.pow(c,2)<Math.pow(r,2)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Y({type:t,selectors:[["mat-slider"]],contentQueries:function(i,r,o){if(i&1&&$e(o,Ud,5)(o,Kf,4),i&2){let a;V(a=N())&&(r._input=a.first),V(a=N())&&(r._inputs=a)}},viewQuery:function(i,r){if(i&1&&Ge($f,5)($d,5),i&2){let o;V(o=N())&&(r._trackActive=o.first),V(o=N())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(i,r){i&2&&(Ue("mat-"+(r.color||"primary")),J("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",q],discrete:[2,"discrete","discrete",q],showTickMarks:[2,"showTickMarks","showTickMarks",q],min:[2,"min","min",Ee],color:"color",disableRipple:[2,"disableRipple","disableRipple",q],max:[2,"max","max",Ee],step:[2,"step","step",Ee],displayWith:"displayWith"},exportAs:["matSlider"],features:[le([{provide:ua,useExisting:t}])],ngContentSelectors:jf,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(i,r){i&1&&(ye(),ee(0),u(1,"div",2),j(2,"div",3),u(3,"div",4),j(4,"div",5,0),p(),R(6,Xf,3,1,"div",6),p(),R(7,Qf,1,3,"mat-slider-visual-thumb",7),j(8,"mat-slider-visual-thumb",7)),i&2&&(m(6),E(r.showTickMarks?6:-1),m(),E(r._isRange?7:-1),m(),z("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[Zf],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var Yf={provide:xn,useExisting:Ze(()=>ma),multi:!0};var ma=(()=>{class t{_ngZone=_(_e);_elementRef=_(ne);_cdr=_(ve);_slider=_(ua);_platform=_(nt);_listenerCleanups;get value(){return Ee(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let i=e+"";if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new he;dragStart=new he;dragEnd=new he;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=H.END;get min(){return Ee(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return Ee(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return Ee(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return q(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=re("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new de;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=_(et);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let i=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,a=Math.floor((this._slider.max-this._slider.min)/o),s=this._slider._isRtl()?1-i/r:i/r,l=Math.round(s*a)/a*(this._slider.max-this._slider.min)+this._slider.min,d=Math.round(l/o)*o,f=this.value;if(d===f){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=d,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let i=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(i)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=$({type:t,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(i,r){i&1&&X("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),i&2&&oe("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",Ee]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[le([Yf,{provide:Ud,useExisting:t}])]})}return t})();var qd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=Ce({imports:[pn,Pe]})}return t})();var tg=(t,n)=>n.key;function ng(t,n){if(t&1&&(u(0,"mat-chip"),w(1),p()),t&2){let e=k();m(),St("Overrides: ",e.activeOverrideLabels().length)}}function ig(t,n){if(t&1&&(u(0,"mat-chip"),w(1),p()),t&2){let e=k();m(),St("Blockers: ",e.activeBlockerLabels().length)}}function rg(t,n){if(t&1){let e=pt();u(0,"button",44),X("click",function(){let r=Ye(e).$index,o=k().$implicit,a=k();return Je(a.setScore(o.key,r))}),u(1,"span",45),w(2),p(),u(3,"span"),w(4),p()()}if(t&2){let e=n.$implicit,i=n.$index,r=k().$implicit,o=k();J("dimension-card__legend-item--active",o.scoreFor(r.key)===i),oe("aria-pressed",o.scoreFor(r.key)===i),m(2),I(i),m(2),I(e)}}function og(t,n){if(t&1){let e=pt();u(0,"mat-card",24)(1,"div",34)(2,"div",35)(3,"span",36)(4,"mat-icon"),w(5),p()(),u(6,"div")(7,"p",37),w(8),p(),u(9,"h4"),w(10),p()()(),u(11,"span",38),w(12),p()(),u(13,"div",39)(14,"mat-slider",40)(15,"input",41),X("valueChange",function(r){let o=Ye(e).$implicit,a=k();return Je(a.setScore(o.key,r))}),p()()(),u(16,"div",42),ae(17,rg,5,5,"button",43,Re),p()()}if(t&2){let e=n.$implicit,i=k();m(5),I(i.dimensionIcon(e.key)),m(3),I(e.label),m(2),I(e.question),m(2),St("",i.scoreFor(e.key),"/4"),m(3),ba("aria-label",Ca(e.label)),z("value",i.scoreFor(e.key)),m(2),se(e.scale)}}function ag(t,n){if(t&1){let e=pt();u(0,"mat-checkbox",46),X("change",function(r){let o=Ye(e).$implicit,a=k();return Je(a.toggleOverride(o,r.checked))}),w(1),p()}if(t&2){let e=n.$implicit,i=k();z("checked",i.selectedOverrides()[e]),m(),St(" ",e," ")}}function sg(t,n){if(t&1){let e=pt();u(0,"mat-checkbox",46),X("change",function(r){let o=Ye(e).$implicit,a=k();return Je(a.toggleBlocker(o,r.checked))}),w(1),p()}if(t&2){let e=n.$implicit,i=k();z("checked",i.selectedBlockers()[e]),m(),St(" ",e," ")}}function lg(t,n){t&1&&(u(0,"mat-card",30)(1,"div",47)(2,"span",48)(3,"mat-icon"),w(4,"warning"),p()(),u(5,"p"),w(6,"Asset-level classification blocked until evidence gaps are resolved."),p()()())}function cg(t,n){t&1&&(u(0,"mat-card",31)(1,"div",47)(2,"span",48)(3,"mat-icon"),w(4,"verified_user"),p()(),u(5,"p"),w(6,"Escalate for finance, audit, security, or executive review."),p()()())}function dg(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function ug(t,n){t&1&&(u(0,"li"),w(1,"All dimensions are scoring at a governance-ready level."),p())}var mg={dimensions:[],scoreBands:[],hardOverrides:[],classificationBlockers:[]},Gr=class t{workspace=_(Fi);destroyRef=_(cn);title=Ae("Agent Grading Calculator");description=Ae("Score an enterprise AI agent across seven dimensions and review the resulting governance posture.");config=Ae();scores=re({});selectedOverrides=re({});selectedBlockers=re({});parsedConfig=Q(()=>this.normalizeConfig(this.config()));dimensions=Q(()=>this.parsedConfig().dimensions);scoreBands=Q(()=>this.parsedConfig().scoreBands);hardOverrides=Q(()=>this.parsedConfig().hardOverrides);classificationBlockers=Q(()=>this.parsedConfig().classificationBlockers);maxScore=Q(()=>this.dimensions().length*4);totalScore=Q(()=>this.dimensions().reduce((n,e)=>n+this.scoreFor(e.key),0));scorePercent=Q(()=>{let n=this.maxScore();return n?this.totalScore()/n*100:0});completedDimensions=Q(()=>this.dimensions().filter(n=>this.scores()[n.key]!==void 0).length);scoreBand=Q(()=>this.scoreBands().find(n=>{let e=this.totalScore();return e>=n.min&&e<=n.max})??null);activeOverrideLabels=Q(()=>this.hardOverrides().filter(n=>this.selectedOverrides()[n]));activeBlockerLabels=Q(()=>this.classificationBlockers().filter(n=>this.selectedBlockers()[n]));blockersPresent=Q(()=>this.activeBlockerLabels().length>0);overridesPresent=Q(()=>this.activeOverrideLabels().length>0);requiredEvidence=Q(()=>this.dimensions().filter(n=>this.scoreFor(n.key)<=2).map(n=>`Strengthen evidence for ${n.label.toLowerCase()}.`));liveStatusText=Q(()=>{let n=this.completedDimensions(),e=this.dimensions().length;return e?n?n<e?`${n} of ${e} dimensions scored`:`All ${e} dimensions scored`:"Score updates as you select each dimension":"Configuration unavailable"});gradeCode=Q(()=>(this.scoreBand()?.grade.split("\u2014")[0]??"G0").trim());gradeTitle=Q(()=>{let e=(this.scoreBand()?.grade??"Not classified").split("\u2014");return(e[1]??e[0]).trim()});statusTone=Q(()=>{let n=this.gradeCode();return n.startsWith("G3")?"agent-calculator--g3":n.startsWith("G2")?"agent-calculator--g2":n.startsWith("G1")?"agent-calculator--g1":"agent-calculator--g0"});exportPayload=Q(()=>({generatedAt:new Date().toISOString(),totalScore:this.totalScore(),grade:this.scoreBand()?.grade??"Not classified",posture:this.scoreBand()?.posture??"No matching posture",selectedOverrides:this.activeOverrideLabels(),selectedBlockers:this.activeBlockerLabels(),blockersPresent:this.blockersPresent(),overridesPresent:this.overridesPresent(),scores:this.dimensions().map(n=>({key:n.key,label:n.label,score:this.scoreFor(n.key),selectedMeaning:n.scale[this.scoreFor(n.key)]??""}))}));constructor(){Ut(()=>{this.workspace.update({totalScore:this.totalScore(),maxScore:this.maxScore(),completedDimensions:this.completedDimensions(),totalDimensions:this.dimensions().length,grade:this.scoreBand()?.grade??"Not classified",gradeCode:this.gradeCode(),gradeTitle:this.gradeTitle(),posture:this.scoreBand()?.posture??"Choose scores to classify the agent",overrideCount:this.activeOverrideLabels().length,blockerCount:this.activeBlockerLabels().length,overrideLabels:this.activeOverrideLabels(),blockerLabels:this.activeBlockerLabels(),requiredEvidence:this.requiredEvidence()}),this.workspace.registerExports(()=>this.exportJson(),()=>this.exportCsv())}),this.destroyRef.onDestroy(()=>this.workspace.reset())}scoreFor(n){return this.scores()[n]??0}setScore(n,e){this.scores.update(i=>ze(be({},i),{[n]:e}))}dimensionIcon(n){return{operationalMateriality:"account_tree",institutionalKnowledge:"psychology",controlAuditability:"fact_check",costTraceability:"receipt_long",businessValue:"diamond",reliabilityModelRisk:"verified_user",usefulLife:"update"}[n]??"insights"}primaryEvidenceAction(){if(this.blockersPresent())return"Resolve classification blockers before asset-level review.";if(this.overridesPresent())return"Escalate for finance, audit, security, or executive review.";let n=[...this.dimensions()].sort((i,r)=>this.scoreFor(i.key)-this.scoreFor(r.key))[0];return n?{operationalMateriality:"Update the agent charter with intended use, owner, and business scope.",institutionalKnowledge:"Document the reusable logic and expert reasoning captured by the agent.",controlAuditability:"Strengthen the control matrix and evidence trail for reviewability.",costTraceability:"Complete the cost ledger and accounting memo before classification.",businessValue:"Quantify the business outcome the agent changes before advancing the grade.",reliabilityModelRisk:"Define monitored thresholds, fallback controls, and review checkpoints.",usefulLife:"Establish useful-life assumptions, review cadence, and retirement triggers."}[n.key]??"Review the lowest-scoring dimension and add evidence.":"Begin scoring the seven dimensions to identify the next artifact."}toggleOverride(n,e){this.selectedOverrides.update(i=>ze(be({},i),{[n]:e}))}toggleBlocker(n,e){this.selectedBlockers.update(i=>ze(be({},i),{[n]:e}))}exportJson(){let n=JSON.stringify(this.exportPayload(),null,2);this.downloadFile("agent-grading-result.json",n,"application/json")}exportCsv(){let e=[["dimension_key","dimension_label","score","selected_meaning"],...this.exportPayload().scores.map(i=>[i.key,i.label,String(i.score),i.selectedMeaning]),[],["total_score",String(this.exportPayload().totalScore)],["grade",this.exportPayload().grade],["posture",this.exportPayload().posture],["overrides",this.exportPayload().selectedOverrides.join(" | ")],["blockers",this.exportPayload().selectedBlockers.join(" | ")]].map(i=>i.map(r=>this.escapeCsv(r??"")).join(",")).join(`
`);this.downloadFile("agent-grading-result.csv",e,"text/csv;charset=utf-8")}normalizeConfig(n){if(!n)return mg;let e=Array.isArray(n.dimensions)?n.dimensions.map(a=>{if(!a||typeof a!="object")return null;let s=a,c=Array.isArray(s.scale)?s.scale.filter(l=>typeof l=="string"):[];return typeof s.key!="string"||typeof s.label!="string"||typeof s.question!="string"||c.length!==5?null:{key:s.key,label:s.label,question:s.question,scale:c}}).filter(a=>a!==null):[],i=Array.isArray(n.scoreBands)?n.scoreBands.map(a=>{if(!a||typeof a!="object")return null;let s=a;return typeof s.min!="number"||typeof s.max!="number"||typeof s.grade!="string"||typeof s.posture!="string"?null:{min:s.min,max:s.max,grade:s.grade,posture:s.posture}}).filter(a=>a!==null):[],r=Array.isArray(n.hardOverrides)?n.hardOverrides.filter(a=>typeof a=="string"):[],o=Array.isArray(n.classificationBlockers)?n.classificationBlockers.filter(a=>typeof a=="string"):[];return{dimensions:e,scoreBands:i,hardOverrides:r,classificationBlockers:o}}escapeCsv(n){let e=n.replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e}downloadFile(n,e,i){let r=new Blob([e],{type:i}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=n,a.click(),URL.revokeObjectURL(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Y({type:t,selectors:[["app-agent-grading-calculator"]],inputs:{title:[1,"title"],description:[1,"description"],config:[1,"config"]},decls:80,vars:19,consts:[["appearance","outlined",1,"agent-calculator","cw-surface-card"],[1,"agent-calculator__header"],[1,"agent-calculator__copy"],[1,"agent-calculator__eyebrow"],["appearance","outlined","aria-live","polite",1,"agent-calculator__hero","cw-surface-card"],[1,"hero-score"],[1,"hero-score__ring"],[1,"hero-score__ring-core"],[1,"hero-score__headline"],[1,"hero-score__value"],[1,"hero-score__max"],[1,"hero-score__result"],[1,"summary-card__eyebrow"],[1,"hero-score__grade-row"],[1,"hero-score__grade-badge"],[1,"hero-score__status"],[1,"hero-actions"],[1,"hero-actions__signals"],[1,"hero-actions__exports"],["mat-stroked-button","","color","primary","type","button",3,"click"],["mat-flat-button","","color","primary","type","button",3,"click"],["mode","determinate",3,"value"],[1,"agent-calculator__body"],[1,"agent-calculator__dimensions"],["appearance","outlined",1,"dimension-card","cw-surface-card"],[1,"agent-calculator__summary"],["appearance","outlined",1,"summary-card","cw-surface-card"],[1,"summary-card__support"],[1,"summary-checklist"],[3,"checked"],["appearance","outlined",1,"summary-card","summary-card--warning","cw-surface-card"],["appearance","outlined",1,"summary-card","summary-card--alert","cw-surface-card"],["appearance","outlined",1,"summary-card","summary-card--evidence","cw-surface-card"],[1,"summary-list"],[1,"dimension-card__head"],[1,"dimension-card__identity"],[1,"cw-icon-badge","dimension-card__icon"],[1,"dimension-card__label"],[1,"dimension-card__score"],[1,"dimension-card__slider"],["min","0","max","4","step","1","discrete","",1,"dimension-card__scale"],["matSliderThumb","",3,"valueChange","value","aria-label"],[1,"dimension-card__legend"],["type","button",1,"dimension-card__legend-item",3,"dimension-card__legend-item--active"],["type","button",1,"dimension-card__legend-item",3,"click"],[1,"dimension-card__legend-index"],[3,"change","checked"],[1,"summary-callout"],[1,"cw-icon-badge","summary-callout__icon"]],template:function(e,i){if(e&1&&(u(0,"mat-card",0)(1,"header",1)(2,"div",2)(3,"p",3),w(4,"Interactive artifact"),p(),u(5,"h3"),w(6),p(),u(7,"p"),w(8),p()()(),u(9,"mat-card",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"span",9),w(15),p(),u(16,"span",10),w(17),p()(),u(18,"p"),w(19,"Total score"),p()()(),u(20,"div",11)(21,"p",12),w(22,"Recommended classification"),p(),u(23,"div",13)(24,"span",14),w(25),p(),u(26,"div")(27,"h4"),w(28),p(),u(29,"p"),w(30),p()()(),u(31,"p",15),w(32),p()()(),u(33,"div",16)(34,"div",17)(35,"mat-chip-set")(36,"mat-chip"),w(37),p(),R(38,ng,2,1,"mat-chip"),R(39,ig,2,1,"mat-chip"),p()(),u(40,"div",18)(41,"button",19),X("click",function(){return i.exportJson()}),u(42,"mat-icon"),w(43,"download"),p(),w(44," Export JSON "),p(),u(45,"button",20),X("click",function(){return i.exportCsv()}),u(46,"mat-icon"),w(47,"table_view"),p(),w(48," Export CSV "),p()()(),j(49,"mat-progress-bar",21),p(),u(50,"div",22)(51,"section",23),ae(52,og,19,7,"mat-card",24,tg),p(),u(54,"aside",25)(55,"mat-card",26)(56,"p",12),w(57,"Hard override flags"),p(),u(58,"p",27),w(59,"Enable any condition that forces elevated review before classification."),p(),u(60,"div",28),ae(61,ag,2,2,"mat-checkbox",29,Re),p()(),u(63,"mat-card",26)(64,"p",12),w(65,"Classification blockers"),p(),u(66,"p",27),w(67,"These gaps should stop asset claims until the operating evidence exists."),p(),u(68,"div",28),ae(69,sg,2,2,"mat-checkbox",29,Re),p()(),R(71,lg,7,0,"mat-card",30),R(72,cg,7,0,"mat-card",31),u(73,"mat-card",32)(74,"p",12),w(75,"Required evidence focus"),p(),u(76,"ul",33),ae(77,dg,2,1,"li",null,Re),R(79,ug,2,0,"li"),p()()()()()),e&2){let r,o;Ue(i.statusTone()),m(6),I(i.title()),m(2),I(i.description()),m(3),je("--score-percent",i.scorePercent()+"%"),m(4),I(i.totalScore()),m(2),St("/ ",i.maxScore()),m(8),I(i.gradeCode()),m(3),I(i.gradeTitle()),m(2),I(((r=i.scoreBand())==null?null:r.posture)||"Select dimension scores to classify the agent."),m(2),I(i.liveStatusText()),m(5),I(((o=i.scoreBand())==null?null:o.posture)||"Choose scores to classify the agent"),m(),E(i.overridesPresent()?38:-1),m(),E(i.blockersPresent()?39:-1),m(10),z("value",i.scorePercent()),m(3),se(i.dimensions()),m(9),se(i.hardOverrides()),m(8),se(i.classificationBlockers()),m(2),E(i.blockersPresent()?71:-1),m(),E(i.overridesPresent()?72:-1),m(5),se(i.requiredEvidence()),m(2),E(i.requiredEvidence().length?-1:79)}},dependencies:[fn,Ii,Oi,Ti,Hd,da,Qi,$n,Xi,Pa,_n,gn,Ba,Na,qd,jd,ma],styles:["[_nghost-%COMP%]{display:block}.agent-calculator[_ngcontent-%COMP%], .agent-calculator__copy[_ngcontent-%COMP%], .agent-calculator__body[_ngcontent-%COMP%], .agent-calculator__dimensions[_ngcontent-%COMP%], .agent-calculator__summary[_ngcontent-%COMP%], .dimension-card[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%], .summary-checklist[_ngcontent-%COMP%]{display:grid;gap:16px}.agent-calculator[_ngcontent-%COMP%]{padding:24px;background:radial-gradient(circle at top right,color-mix(in srgb,var(--cw-accent) 10%,transparent),transparent 30%),linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 96%,white),var(--cw-panel))}.agent-calculator__header[_ngcontent-%COMP%]{display:grid;gap:12px}.agent-calculator__eyebrow[_ngcontent-%COMP%], .summary-card__eyebrow[_ngcontent-%COMP%], .dimension-card__label[_ngcontent-%COMP%]{margin:0;color:var(--cw-accent);font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.agent-calculator__copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.8rem,3vw,2.5rem);line-height:1.02;letter-spacing:-.04em}.agent-calculator__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .summary-card__support[_ngcontent-%COMP%]{color:var(--cw-muted);line-height:1.7}.agent-calculator__hero[_ngcontent-%COMP%]{position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 14px);z-index:4;padding:22px;display:grid;gap:20px}.hero-score[_ngcontent-%COMP%], .hero-actions[_ngcontent-%COMP%]{display:grid;gap:20px}.hero-score[_ngcontent-%COMP%]{grid-template-columns:auto minmax(0,1fr);align-items:center}.hero-score__ring[_ngcontent-%COMP%]{--score-percent: 0%;width:164px;aspect-ratio:1;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at center,var(--cw-panel) 58%,transparent 59%),conic-gradient(var(--cw-accent) 0 var(--score-percent),color-mix(in srgb,var(--cw-line) 65%,white) 0 100%)}.hero-score__ring-core[_ngcontent-%COMP%]{width:calc(100% - 26px);aspect-ratio:1;border-radius:50%;background:var(--cw-panel);display:grid;place-items:center;gap:4px;text-align:center;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cw-line) 65%,transparent)}.hero-score__headline[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:6px}.hero-score__value[_ngcontent-%COMP%]{font-size:2.8rem;font-weight:800;letter-spacing:-.06em;color:var(--cw-ink)}.hero-score__max[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:1.15rem;font-weight:700}.hero-score__ring-core[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hero-score__result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--cw-muted)}.hero-score__result[_ngcontent-%COMP%]{display:grid;gap:12px}.hero-score__grade-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:16px;align-items:center}.hero-score__grade-badge[_ngcontent-%COMP%], .summary-card__score[_ngcontent-%COMP%]{display:inline-grid;place-items:center;min-width:84px;min-height:84px;padding:0 12px;border-radius:24px;background:color-mix(in srgb,var(--cw-accent) 10%,var(--cw-panel));color:var(--cw-accent);font-size:1.75rem;font-weight:800;letter-spacing:-.04em}.hero-score__result[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.4rem;line-height:1.1;letter-spacing:-.03em}.hero-score__status[_ngcontent-%COMP%]{font-weight:600;color:var(--cw-ink)!important}.hero-actions[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) auto;align-items:center}.hero-actions__signals[_ngcontent-%COMP%]{min-width:0}.hero-actions__exports[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}.agent-calculator__body[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1.3fr) minmax(320px,.92fr);align-items:start}.dimension-card[_ngcontent-%COMP%]{padding:18px}.dimension-card__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:start}.dimension-card__identity[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:14px;align-items:start}.dimension-card__icon[_ngcontent-%COMP%]{width:48px;height:48px}.dimension-card__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.dimension-card__score[_ngcontent-%COMP%]{display:inline-grid;place-items:center;min-width:68px;min-height:68px;border-radius:20px;background:color-mix(in srgb,var(--cw-accent) 10%,var(--cw-panel));color:var(--cw-accent);font-size:1.4rem;font-weight:800}.dimension-card__slider[_ngcontent-%COMP%]{display:grid}.dimension-card__scale[_ngcontent-%COMP%]{width:100%}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider{margin:0}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track{height:4px}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__thumb-knob{border-color:var(--cw-accent)}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--active_fill{border-color:var(--cw-accent)}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive{opacity:1}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive:after{border-color:color-mix(in srgb,var(--cw-line) 80%,white)}.dimension-card__legend[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.dimension-card__legend-item[_ngcontent-%COMP%]{display:grid;gap:6px;min-height:116px;padding:12px 14px;border:1px solid transparent;border-radius:16px;background:color-mix(in srgb,var(--cw-line) 18%,white);color:var(--cw-muted);font-size:.92rem;line-height:1.45;text-align:left;cursor:pointer;transition:background .16s ease,border-color .16s ease,color .16s ease,transform .16s ease}.dimension-card__legend-item[_ngcontent-%COMP%]:hover, .dimension-card__legend-item[_ngcontent-%COMP%]:focus-visible{border-color:color-mix(in srgb,var(--cw-accent) 18%,var(--cw-line));color:var(--cw-ink)}.dimension-card__legend-item--active[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-accent) 8%,var(--cw-panel));color:var(--cw-ink);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cw-accent) 24%,var(--cw-line))}.dimension-card__legend-index[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:800;color:var(--cw-ink)}.agent-calculator__summary[_ngcontent-%COMP%]{position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 248px)}.summary-card[_ngcontent-%COMP%]{padding:18px;width:100%;justify-self:stretch}.summary-card--evidence[_ngcontent-%COMP%]{width:100%;grid-column:1/-1}.summary-card__score-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:14px;align-items:center}.summary-card__score[_ngcontent-%COMP%]{min-width:88px;min-height:88px;font-size:1.5rem}.summary-card__meta-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.summary-card__meta-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;gap:4px}.summary-card__meta-label[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:.82rem;text-transform:uppercase;letter-spacing:.1em;font-weight:700}.summary-checklist[_ngcontent-%COMP%]{gap:10px}.summary-callout[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:center}.summary-callout__icon[_ngcontent-%COMP%]{width:44px;height:44px}.summary-card--warning[_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 8%,var(--cw-panel))!important}.summary-card--warning[_ngcontent-%COMP%]   .summary-callout__icon[_ngcontent-%COMP%]{color:#b45309;background:color-mix(in srgb,#f59e0b 12%,var(--cw-panel))}.summary-card--alert[_ngcontent-%COMP%]{background:color-mix(in srgb,#0f766e 7%,var(--cw-panel))!important}.summary-card--alert[_ngcontent-%COMP%]   .summary-callout__icon[_ngcontent-%COMP%]{color:#0f766e;background:color-mix(in srgb,#0f766e 10%,var(--cw-panel))}.summary-list[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;display:grid;gap:8px;color:var(--cw-muted)}.agent-calculator--g0[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g0[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-line) 55%,var(--cw-panel));color:var(--cw-ink)}.agent-calculator--g1[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g1[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 14%,var(--cw-panel));color:#b45309}.agent-calculator--g2[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g2[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#15803d 14%,var(--cw-panel));color:#166534}.agent-calculator--g3[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g3[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#7c3aed 14%,var(--cw-panel));color:#6d28d9}@media(max-width:1080px){.agent-calculator__body[_ngcontent-%COMP%], .hero-score[_ngcontent-%COMP%], .hero-actions[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero-actions__exports[_ngcontent-%COMP%]{justify-content:flex-start}.agent-calculator__summary[_ngcontent-%COMP%]{position:static}}@media(min-width:1200px){cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__hero[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__hero[_ngcontent-%COMP%]{display:none}cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__body[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__body[_ngcontent-%COMP%]{grid-template-columns:1fr}cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__summary[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__summary[_ngcontent-%COMP%]{position:static;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}@media(max-width:760px){.agent-calculator[_ngcontent-%COMP%]{padding:18px}.agent-calculator__hero[_ngcontent-%COMP%]{position:static;padding:18px}.hero-score__ring[_ngcontent-%COMP%]{width:136px}.dimension-card__head[_ngcontent-%COMP%], .dimension-card__identity[_ngcontent-%COMP%], .summary-card__score-row[_ngcontent-%COMP%], .summary-card__meta-list[_ngcontent-%COMP%]{grid-template-columns:1fr}.dimension-card__score[_ngcontent-%COMP%], .hero-score__grade-badge[_ngcontent-%COMP%], .summary-card__score[_ngcontent-%COMP%]{min-width:0;width:fit-content}.dimension-card__legend[_ngcontent-%COMP%]{grid-template-columns:1fr}.dimension-card__legend-item[_ngcontent-%COMP%]{min-height:0}}"],changeDetection:0})};function hg(t,n){if(t&1&&j(0,"app-relationship-value-explorer",0),t&2){let e=k();z("title",e.title()||"Relationship-Value Explorer")("description",e.description()||"Explore how client relationships, delivered services, employee expertise, and white-space opportunities connect into an actionable revenue intelligence graph.")}}function pg(t,n){if(t&1&&j(0,"app-agent-grading-calculator",1),t&2){let e=k();z("title",e.title()||"Agent Grading Calculator")("description",e.description()||"Score an enterprise AI agent across seven dimensions and review the resulting governance posture.")("config",e.config())}}function fg(t,n){if(t&1&&(u(0,"aside",2)(1,"h3"),w(2),p(),u(3,"p"),w(4),p()()),t&2){let e=k();m(2),I(e.fallbackTitle()),m(2),I(e.fallbackDescription())}}var Hr=class t{componentKey=Ae.required();fallback=Ae();title=Ae();description=Ae();config=Ae();registeredComponent=Q(()=>{let n=this.componentKey();return rl(n)?vo[n]:null});fallbackTitle=Q(()=>this.title()||"Interactive component unavailable");fallbackDescription=Q(()=>this.description()||this.fallback()||"This interactive artifact is not available yet.");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Y({type:t,selectors:[["app-interactive-content-block"]],inputs:{componentKey:[1,"componentKey"],fallback:[1,"fallback"],title:[1,"title"],description:[1,"description"],config:[1,"config"]},decls:3,vars:1,consts:[[3,"title","description"],[3,"title","description","config"],[1,"interactive-fallback"]],template:function(e,i){if(e&1&&R(0,hg,1,2,"app-relationship-value-explorer",0)(1,pg,1,3,"app-agent-grading-calculator",1)(2,fg,5,2,"aside",2),e&2){let r;E((r=(r=i.registeredComponent())==null?null:r.key)==="relationship-value-explorer"?0:r==="agent-grading-calculator"?1:2)}},dependencies:[Lr,Gr],styles:["[_nghost-%COMP%]{display:block}.interactive-fallback[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:18px;background:var(--cw-panel);padding:22px 24px;display:grid;gap:10px}h3[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;color:var(--cw-ink)}p[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.7}"],changeDetection:0})};function gg(t,n){return this.trackSection(n,t)}function Xd(t,n){return this.trackBlock(n,t)}var Qd=(t,n)=>n.title;function _g(t,n){if(t&1&&(u(0,"p",3),w(1),p()),t&2){let e=k().$implicit;m(),I(e.eyebrow)}}function vg(t,n){if(t&1&&(u(0,"p",4),w(1),p()),t&2){let e=k().$implicit;m(),I(e.intro)}}function bg(t,n){if(t&1&&(u(0,"p"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function yg(t,n){if(t&1&&ae(0,bg,2,1,"p",null,Re),t&2){let e=k(2).$implicit;se(e.paragraphs)}}function xg(t,n){if(t&1&&j(0,"app-interactive-content-block",7),t&2){let e=k(2).$implicit;z("componentKey",e.component)("fallback",e.fallback)("title",e.componentTitle)("description",e.componentDescription)("config",e.componentConfig)}}function Cg(t,n){if(t&1&&(u(0,"p"),w(1),p()),t&2){let e=k().$implicit;m(),I(e.text)}}function wg(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function kg(t,n){if(t&1&&(u(0,"aside",9),R(1,wg,2,1,"h3"),u(2,"p"),w(3),p()()),t&2){let e=k().$implicit;oe("data-tone",e.tone??"neutral"),m(),E(e.title?1:-1),m(2),I(e.text)}}function Mg(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function Sg(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Dg(t,n){if(t&1&&(u(0,"div",10),R(1,Mg,2,1,"h3"),u(2,"ul"),ae(3,Sg,2,1,"li",null,Re),p()()),t&2){let e=k().$implicit;m(),E(e.title?1:-1),m(2),se(e.items)}}function Rg(t,n){if(t&1&&j(0,"app-interactive-content-block",7),t&2){let e=k().$implicit;z("componentKey",e.component)("fallback",e.fallback)("title",e.title)("description",e.description)("config",e.config)}}function Eg(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function Ig(t,n){if(t&1&&(u(0,"th",21),w(1),p()),t&2){let e=k().$implicit;m(),I(e)}}function Tg(t,n){if(t&1&&(u(0,"td",22),w(1),p()),t&2){let e=n.$implicit,i=k().$index,r=k(6);m(),I(r.tableCellAt(e,i))}}function Og(t,n){if(t&1&&(Vn(0,16),tt(1,Ig,2,1,"th",19)(2,Tg,2,1,"td",20),Nn()),t&2){let e=n.$index,i=k(6);z("matColumnDef",i.tableColumnId(e))}}function Fg(t,n){t&1&&j(0,"tr",23)}function Ag(t,n){t&1&&j(0,"tr",24)}function Pg(t,n){if(t&1&&(u(0,"mat-card",11),R(1,Eg,2,1,"h3"),u(2,"div",14)(3,"table",15),ae(4,Og,3,1,"ng-container",16,Re),tt(6,Fg,1,0,"tr",17)(7,Ag,1,0,"tr",18),p()()()),t&2){let e=k().$implicit,i=k(4);m(),E(e.title?1:-1),m(2),z("dataSource",e.rows),m(),se(e.columns),m(2),z("matHeaderRowDef",i.tableColumnIds(e)),m(),z("matRowDefColumns",i.tableColumnIds(e))}}function Vg(t,n){if(t&1&&(u(0,"mat-card",25)(1,"h3"),w(2),p(),u(3,"p"),w(4),p()()),t&2){let e=n.$implicit;m(2),I(e.title),m(2),I(e.description)}}function Ng(t,n){if(t&1&&(u(0,"div",12),ae(1,Vg,5,2,"mat-card",25,Qd),p()),t&2){let e=k().$implicit;m(),se(e.items)}}function Bg(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function zg(t,n){if(t&1&&(u(0,"mat-chip-set")(1,"mat-chip"),w(2),p()()),t&2){let e=k(2).$implicit;m(2),I(e.language)}}function Lg(t,n){if(t&1&&(u(0,"mat-card",13),R(1,Bg,2,1,"h3"),R(2,zg,3,1,"mat-chip-set"),u(3,"pre")(4,"code"),w(5),p()()()),t&2){let e=k().$implicit;m(),E(e.title?1:-1),m(),E(e.language?2:-1),m(3),I(e.code)}}function Gg(t,n){if(t&1&&R(0,Cg,2,1,"p")(1,kg,4,3,"aside",9)(2,Dg,5,1,"div",10)(3,Rg,1,5,"app-interactive-content-block",7)(4,Pg,8,4,"mat-card",11)(5,Ng,3,0,"div",12)(6,Lg,6,3,"mat-card",13),t&2){let e,i=n.$implicit;E((e=i.type)==="paragraph"?0:e==="callout"?1:e==="list"?2:e==="component"?3:e==="table"?4:e==="cards"?5:e==="code"?6:-1)}}function Hg(t,n){if(t&1&&ae(0,Gg,7,1,null,null,Xd,!0),t&2){let e=k(2).$implicit,i=k();se(i.sectionTextBlocks(e))}}function Ug(t,n){if(t&1&&(u(0,"figcaption"),w(1),p()),t&2){let e=k();m(),I(e.caption)}}function $g(t,n){if(t&1){let e=pt();u(0,"figure",8)(1,"button",26),X("click",function(){let r=Ye(e),o=k(3);return Je(o.openImage(r))}),j(2,"img",27),p(),R(3,Ug,2,1,"figcaption"),p()}if(t&2){let e=n;m(),oe("aria-label","Open image: "+e.alt),m(),z("src",e.src,Pn)("alt",e.alt),m(),E(e.caption?3:-1)}}function jg(t,n){if(t&1&&(u(0,"div",5)(1,"div",6),R(2,yg,2,0),R(3,xg,1,5,"app-interactive-content-block",7),R(4,Hg,2,0),p(),R(5,$g,4,4,"figure",8),p()),t&2){let e,i=k().$implicit,r=k();m(2),E(i.paragraphs!=null&&i.paragraphs.length?2:-1),m(),E(i.component?3:-1),m(),E(r.sectionTextBlocks(i).length?4:-1),m(),E((e=r.sectionImage(i))?5:-1,e)}}function qg(t,n){if(t&1&&(u(0,"p"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function Wg(t,n){if(t&1&&ae(0,qg,2,1,"p",null,Re),t&2){let e=k(2).$implicit;se(e.paragraphs)}}function Xg(t,n){if(t&1&&(u(0,"figcaption"),w(1),p()),t&2){let e=k();m(),I(e.caption)}}function Qg(t,n){if(t&1){let e=pt();u(0,"figure",28)(1,"button",26),X("click",function(){let r=Ye(e),o=k(3);return Je(o.openImage(r))}),j(2,"img",27),p(),R(3,Xg,2,1,"figcaption"),p()}if(t&2){let e=n;m(),oe("aria-label","Open image: "+e.alt),m(),z("src",e.src,Pn)("alt",e.alt),m(),E(e.caption?3:-1)}}function Kg(t,n){if(t&1&&j(0,"app-interactive-content-block",7),t&2){let e=k(2).$implicit;z("componentKey",e.component)("fallback",e.fallback)("title",e.componentTitle)("description",e.componentDescription)("config",e.componentConfig)}}function Zg(t,n){if(t&1&&(u(0,"p"),w(1),p()),t&2){let e=k().$implicit;m(),I(e.text)}}function Yg(t,n){if(t&1&&(u(0,"figcaption"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.caption)}}function Jg(t,n){if(t&1){let e=pt();u(0,"figure",28)(1,"button",26),X("click",function(){Ye(e);let r=k().$implicit,o=k(4);return Je(o.openImage(r))}),j(2,"img",27),p(),R(3,Yg,2,1,"figcaption"),p()}if(t&2){let e=k().$implicit;m(),oe("aria-label","Open image: "+e.alt),m(),z("src",e.src,Pn)("alt",e.alt),m(),E(e.caption?3:-1)}}function e_(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function t_(t,n){if(t&1&&(u(0,"aside",9),R(1,e_,2,1,"h3"),u(2,"p"),w(3),p()()),t&2){let e=k().$implicit;oe("data-tone",e.tone??"neutral"),m(),E(e.title?1:-1),m(2),I(e.text)}}function n_(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function i_(t,n){if(t&1&&(u(0,"li"),w(1),p()),t&2){let e=n.$implicit;m(),I(e)}}function r_(t,n){if(t&1&&(u(0,"div",10),R(1,n_,2,1,"h3"),u(2,"ul"),ae(3,i_,2,1,"li",null,Re),p()()),t&2){let e=k().$implicit;m(),E(e.title?1:-1),m(2),se(e.items)}}function o_(t,n){if(t&1&&j(0,"app-interactive-content-block",7),t&2){let e=k().$implicit;z("componentKey",e.component)("fallback",e.fallback)("title",e.title)("description",e.description)("config",e.config)}}function a_(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function s_(t,n){if(t&1&&(u(0,"th",21),w(1),p()),t&2){let e=k().$implicit;m(),I(e)}}function l_(t,n){if(t&1&&(u(0,"td",22),w(1),p()),t&2){let e=n.$implicit,i=k().$index,r=k(6);m(),I(r.tableCellAt(e,i))}}function c_(t,n){if(t&1&&(Vn(0,16),tt(1,s_,2,1,"th",19)(2,l_,2,1,"td",20),Nn()),t&2){let e=n.$index,i=k(6);z("matColumnDef",i.tableColumnId(e))}}function d_(t,n){t&1&&j(0,"tr",23)}function u_(t,n){t&1&&j(0,"tr",24)}function m_(t,n){if(t&1&&(u(0,"mat-card",11),R(1,a_,2,1,"h3"),u(2,"div",14)(3,"table",15),ae(4,c_,3,1,"ng-container",16,Re),tt(6,d_,1,0,"tr",17)(7,u_,1,0,"tr",18),p()()()),t&2){let e=k().$implicit,i=k(4);m(),E(e.title?1:-1),m(2),z("dataSource",e.rows),m(),se(e.columns),m(2),z("matHeaderRowDef",i.tableColumnIds(e)),m(),z("matRowDefColumns",i.tableColumnIds(e))}}function h_(t,n){if(t&1&&(u(0,"mat-card",25)(1,"h3"),w(2),p(),u(3,"p"),w(4),p()()),t&2){let e=n.$implicit;m(2),I(e.title),m(2),I(e.description)}}function p_(t,n){if(t&1&&(u(0,"div",12),ae(1,h_,5,2,"mat-card",25,Qd),p()),t&2){let e=k().$implicit;m(),se(e.items)}}function f_(t,n){if(t&1&&(u(0,"h3"),w(1),p()),t&2){let e=k(2).$implicit;m(),I(e.title)}}function g_(t,n){if(t&1&&(u(0,"mat-chip-set")(1,"mat-chip"),w(2),p()()),t&2){let e=k(2).$implicit;m(2),I(e.language)}}function __(t,n){if(t&1&&(u(0,"mat-card",13),R(1,f_,2,1,"h3"),R(2,g_,3,1,"mat-chip-set"),u(3,"pre")(4,"code"),w(5),p()()()),t&2){let e=k().$implicit;m(),E(e.title?1:-1),m(),E(e.language?2:-1),m(3),I(e.code)}}function v_(t,n){if(t&1&&R(0,Zg,2,1,"p")(1,Jg,4,4,"figure",28)(2,t_,4,3,"aside",9)(3,r_,5,1,"div",10)(4,o_,1,5,"app-interactive-content-block",7)(5,m_,8,4,"mat-card",11)(6,p_,3,0,"div",12)(7,__,6,3,"mat-card",13),t&2){let e,i=n.$implicit;E((e=i.type)==="paragraph"?0:e==="image"?1:e==="callout"?2:e==="list"?3:e==="component"?4:e==="table"?5:e==="cards"?6:e==="code"?7:-1)}}function b_(t,n){if(t&1&&ae(0,v_,8,1,null,null,Xd,!0),t&2){let e=k(2).$implicit;se(e.blocks)}}function y_(t,n){if(t&1&&(R(0,Wg,2,0),R(1,Qg,4,4,"figure",28),R(2,Kg,1,5,"app-interactive-content-block",7),R(3,b_,2,0)),t&2){let e,i=k().$implicit;E(i.paragraphs!=null&&i.paragraphs.length?0:-1),m(),E((e=i.image)?1:-1,e),m(),E(i.component?2:-1),m(),E(i.blocks!=null&&i.blocks.length?3:-1)}}function x_(t,n){if(t&1&&(u(0,"blockquote"),w(1),p()),t&2){let e=k().$implicit;m(),I(e.callout)}}function C_(t,n){if(t&1&&(u(0,"section",2),R(1,_g,2,1,"p",3),u(2,"h2"),w(3),p(),R(4,vg,2,1,"p",4),R(5,jg,6,4,"div",5)(6,y_,4,4),R(7,x_,2,1,"blockquote"),p()),t&2){let e=n.$implicit,i=k();J("content-section--split",i.isSplitSection(e))("content-section--split-left",e.layout==="split-image-left"),z("id",i.sectionId(e)),m(),E(e.eyebrow?1:-1),m(2),I(e.heading),m(),E(e.intro?4:-1),m(),E(i.isSplitSection(e)?5:6),m(2),E(e.callout?7:-1)}}function w_(t,n){if(t&1&&(u(0,"p",37),w(1),p()),t&2){let e=k();m(),I(e.caption)}}function k_(t,n){if(t&1){let e=pt();u(0,"div",29),X("click",function(){Ye(e);let r=k();return Je(r.closeImage())}),u(1,"div",30),X("click",function(r){return r.stopPropagation()}),u(2,"button",31),X("click",function(){Ye(e);let r=k();return Je(r.closeImage())}),u(3,"mat-icon"),w(4,"close"),p()(),u(5,"div",32),j(6,"img",33)(7,"img",34),p(),u(8,"div",35)(9,"p",36),w(10),p(),R(11,w_,2,1,"p",37),p()()()}if(t&2){let e=n;m(7),z("src",e.src,Pn)("alt",e.alt),m(3),I(e.alt),m(),E(e.caption?11:-1)}}var Wd=class t{sections=Ae.required();activeImage=re(null);trackSection(n,e){return`${this.sectionId(n)}-${e}`}trackBlock(n,e){switch(n.type){case"paragraph":return`paragraph-${e}-${n.text}`;case"image":return`image-${e}-${n.src}`;case"callout":return`callout-${e}-${n.title??n.text}`;case"list":return`list-${e}-${n.title??"items"}`;case"table":return`table-${e}-${n.title??n.columns.join("-")}`;case"cards":return`cards-${e}-${n.items.map(i=>i.title).join("-")}`;case"code":return`code-${e}-${n.title??n.language??"block"}`;case"component":return`component-${e}-${n.component}`}}tableColumnIds(n){return n.columns.map((e,i)=>this.tableColumnId(i))}tableColumnId(n){return`column-${n}`}tableCellAt(n,e){return n[e]??""}sectionId(n){return n.heading.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}openImage(n){this.activeImage.set(n)}closeImage(){this.activeImage.set(null)}isSplitSection(n){return(n.layout==="split-image-right"||n.layout==="split-image-left")&&!!this.sectionImage(n)}sectionImage(n){return n.image?n.image:n.blocks?.find(i=>i.type==="image")??null}sectionTextBlocks(n){if(!n.blocks?.length)return[];let e=!1;return n.blocks.filter(i=>!e&&i.type==="image"?(e=!0,!1):!0)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Y({type:t,selectors:[["cw-content-renderer"]],inputs:{sections:[1,"sections"]},decls:3,vars:1,consts:[[1,"content-section",3,"content-section--split","content-section--split-left","id"],[1,"lightbox-backdrop"],[1,"content-section",3,"id"],[1,"content-section-eyebrow"],[1,"section-intro"],[1,"content-section__split"],[1,"content-section__prose"],[3,"componentKey","fallback","title","description","config"],[1,"content-image","content-image--split"],[1,"content-callout"],[1,"content-list"],["appearance","outlined",1,"content-table"],[1,"content-card-grid"],["appearance","outlined",1,"content-code-block"],[1,"content-table__scroll"],["mat-table","",1,"content-material-table",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["appearance","outlined",1,"content-card"],["type","button",1,"content-image-button",3,"click"],[3,"src","alt"],[1,"content-image"],[1,"lightbox-backdrop",3,"click"],[1,"lightbox-dialog",3,"click"],["mat-icon-button","","type","button","aria-label","Close image viewer",1,"lightbox-close",3,"click"],[1,"lightbox-stage"],["src","assets/images/cweise_logo_dark_mode.svg","alt","","aria-hidden","true",1,"lightbox-watermark"],[1,"lightbox-image",3,"src","alt"],[1,"lightbox-meta"],[1,"lightbox-title"],[1,"lightbox-caption"]],template:function(e,i){if(e&1&&(ae(0,C_,8,10,"section",0,gg,!0),R(2,k_,12,4,"div",1)),e&2){let r;se(i.sections()),m(2),E((r=i.activeImage())?2:-1,r)}},dependencies:[fn,Ei,Oi,Ti,Qi,$n,Xi,_n,gn,il,Ws,Qs,Js,Ks,Xs,el,Zs,Ys,tl,nl,Hr],styles:["[_nghost-%COMP%]{display:grid;gap:40px}.content-section[_ngcontent-%COMP%]{display:grid;gap:16px;scroll-margin-top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 24px)}.content-section__split[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,.95fr) minmax(360px,.95fr);gap:28px;align-items:start}.content-section--split-left[_ngcontent-%COMP%]   .content-section__prose[_ngcontent-%COMP%]{order:2}.content-section--split-left[_ngcontent-%COMP%]   .content-image--split[_ngcontent-%COMP%]{order:1}.content-section__prose[_ngcontent-%COMP%]{display:grid;gap:16px;min-width:0}.content-section-eyebrow[_ngcontent-%COMP%]{margin:0;font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--cw-accent)}h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;letter-spacing:-.03em}h3[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;color:var(--cw-ink)}p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.8}.section-intro[_ngcontent-%COMP%]{color:var(--cw-ink);font-weight:500}.content-image[_ngcontent-%COMP%]{margin:4px 0 0;display:grid;gap:10px;width:min(100%,1120px)}.content-image--split[_ngcontent-%COMP%]{width:100%;margin-top:0;position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 28px)}.content-image-button[_ngcontent-%COMP%]{appearance:none;border:0;padding:0;margin:0;background:none;display:block;cursor:zoom-in;border-radius:16px;overflow:hidden}.content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;border-radius:16px;border:1px solid var(--cw-line);background:var(--cw-panel)}.content-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:.95rem;line-height:1.6}.content-callout[_ngcontent-%COMP%], .component-fallback[_ngcontent-%COMP%], .content-list[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:16px;background:var(--cw-panel);padding:20px 22px;display:grid;gap:10px;max-width:980px}app-interactive-content-block[_ngcontent-%COMP%]{display:block;width:min(100%,1120px)}.content-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%] > .section-intro[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%] > blockquote[_ngcontent-%COMP%]{max-width:980px}.content-section__prose[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .section-intro[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > blockquote[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-callout[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-list[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-table[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-card-grid[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-code-block[_ngcontent-%COMP%]{max-width:none}.content-callout[data-tone=executive][_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-accent) 5%,var(--cw-panel))}.content-callout[data-tone=technical][_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-hero-mid) 22%,var(--cw-panel))}.content-callout[data-tone=warning][_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 10%,var(--cw-panel))}.content-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:1.15rem;display:grid;gap:8px}.content-table__scroll[_ngcontent-%COMP%]{overflow-x:auto}.content-table[_ngcontent-%COMP%]{padding:0;overflow:hidden}.content-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-code-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:20px 22px 0}.content-material-table[_ngcontent-%COMP%]{width:100%;min-width:640px;background:transparent}.content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .content-material-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:12px 14px;vertical-align:top;color:var(--cw-muted);line-height:1.6;border-bottom-color:var(--cw-line)}.content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:.82rem;text-transform:uppercase;letter-spacing:.08em;color:var(--cw-ink)}.content-card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;width:min(100%,1120px)}.content-card[_ngcontent-%COMP%]{display:grid;gap:8px;padding:18px 20px;border:1px solid var(--cw-line);border-radius:16px;background:var(--cw-panel)}.content-code-block[_ngcontent-%COMP%]{position:relative;width:min(100%,1120px);padding:0 0 20px;background:linear-gradient(180deg,#13263a,#0d1d2e);border-color:color-mix(in srgb,var(--cw-line) 40%,#18324a)}.content-code-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#f8fafcf5}.content-code-block[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{padding:0 22px}.content-code-block[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{background:#ffffff24;color:#f1f5f9eb}.content-code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0 22px;padding:18px;border-radius:14px;background:#08111db8;color:#f1f5f9f5;overflow-x:auto;border:1px solid rgba(255,255,255,.08)}.content-code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:SFMono-Regular,SF Mono,Consolas,monospace;font-size:.9rem;color:#f1f5f9f5;white-space:pre}blockquote[_ngcontent-%COMP%]{margin:0;padding:18px 20px;border-left:4px solid var(--cw-accent);background:color-mix(in srgb,var(--cw-accent) 6%,var(--cw-panel));color:var(--cw-ink);border-radius:12px;line-height:1.75}.lightbox-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;background:#080f1ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:grid;place-items:center;padding:24px}.lightbox-dialog[_ngcontent-%COMP%]{position:relative;width:min(96vw,1440px);max-height:calc(100vh - 48px);display:grid;gap:16px}.lightbox-close[_ngcontent-%COMP%]{justify-self:end;color:#fff;border:1px solid rgba(255,255,255,.2);background:#ffffff14}.lightbox-stage[_ngcontent-%COMP%]{position:relative;min-height:0;display:grid;place-items:center;padding:20px;border-radius:24px;background:linear-gradient(180deg,#0d192af5,#08111ef5);overflow:hidden}.lightbox-watermark[_ngcontent-%COMP%]{position:absolute;inset:0;width:min(44vw,520px);max-width:70%;height:auto;margin:auto;opacity:.08;pointer-events:none;filter:brightness(1.2)}.lightbox-image[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;width:auto;max-width:100%;max-height:calc(100vh - 180px);height:auto;object-fit:contain;border-radius:18px;box-shadow:0 24px 60px #00000073}.lightbox-meta[_ngcontent-%COMP%]{position:relative;z-index:1;display:grid;gap:6px;justify-items:center;text-align:center}.lightbox-title[_ngcontent-%COMP%], .lightbox-caption[_ngcontent-%COMP%]{color:#ffffffeb}.lightbox-title[_ngcontent-%COMP%]{font-weight:700}.lightbox-caption[_ngcontent-%COMP%]{max-width:min(80ch,100%);color:#ffffffb8}@media(max-width:860px){.content-section__split[_ngcontent-%COMP%], .content-card-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.content-section--split-left[_ngcontent-%COMP%]   .content-section__prose[_ngcontent-%COMP%], .content-section--split-left[_ngcontent-%COMP%]   .content-image--split[_ngcontent-%COMP%]{order:initial}.content-image--split[_ngcontent-%COMP%]{position:static}}@media(max-width:720px){.lightbox-backdrop[_ngcontent-%COMP%]{padding:12px}.lightbox-dialog[_ngcontent-%COMP%]{width:100%;max-height:calc(100vh - 24px)}.lightbox-stage[_ngcontent-%COMP%]{padding:12px;border-radius:18px}.lightbox-image[_ngcontent-%COMP%]{max-height:calc(100vh - 150px)}}"],changeDetection:0})};export{La as a,$a as b,xu as c,Su as d,ms as e,hs as f,bs as g,em as h,tm as i,Dv as j,$n as k,Xi as l,Qi as m,hm as n,xb as o,Ns as p,Vs as q,zs as r,Wn as s,ol as t,Na as u,Ba as v,Fi as w,Wd as x};
