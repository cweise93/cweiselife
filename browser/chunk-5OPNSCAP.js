import{a as Jt,b as Fo,m as si,n as li,o as ci}from"./chunk-IKAJKQ3D.js";import{b as No}from"./chunk-XYJQ6XQW.js";import{a as oi,h as ai}from"./chunk-V5ZWZGZV.js";import{a as Kt,b as Zt}from"./chunk-5HYXYGC5.js";import{C as Io,F as xn,I as qt,J as Eo,K as jt,M as Po,N as gt,Q as ur,R as Ao,S as Et,U as Qt,V as ni,W as _t,X as Ne,Y as ii,Z as ri,_ as Yt,p as ct,r as To,s as Do,t as Wt}from"./chunk-URHG3A3Z.js";import{$ as C,$a as Je,$b as ti,A as xo,Ab as Z,B as un,Bb as J,Cb as $,Cc as Se,Db as m,Dc as dr,Eb as f,Fb as H,Fc as Ie,Gb as _n,Gc as It,Hb as bn,Ib as Ht,Jb as vn,Jc as X,Kb as yn,Kc as Ee,Lb as De,Lc as Oo,Mb as et,Nb as wo,Q as pt,Qb as q,Ra as gn,Rb as M,Sb as Ae,Tb as be,Ub as Dt,V as Mt,Va as p,Vb as st,W as mn,Wb as ne,X as Ce,Xb as ie,Z as ge,Zb as Mo,_a as ft,_b as So,a as wt,ab as cr,ac as Be,b as Kn,bb as Rt,bc as re,cc as Xe,dc as k,eb as Ot,ec as O,f as bo,fa as Ue,fc as lt,g as vo,ga as Ge,h as ke,ha as Jn,i as yo,ia as ei,ib as Q,ja as lr,jb as Me,k as or,ka as hn,kb as j,l as ar,la as pn,lc as Ro,na as we,nb as ue,nc as de,o as dn,oa as Ve,ob as Tt,q as sr,ra as ce,t as Zn,ua as fn,ub as ko,va as St,vb as me,wa as He,wb as I,xb as E,xc as Y,ya as ae,yb as Co,zb as _e,zc as Xt}from"./chunk-4E2O5EZK.js";function tc(t,n){t&1&&Ht(0,"div",2)}var nc=new ge("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Bo=(()=>{class t{_elementRef=C(ae);_ngZone=C(Ve);_changeDetectorRef=C(Ie);_renderer=C(Rt);_cleanupTransitionEnd;constructor(){let e=Po(),i=C(nc,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Vo(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Vo(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new we;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(me("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Xe("mat-"+r.color),re("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ee],bufferValue:[2,"bufferValue","bufferValue",Ee],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(_n(0,"div",0),Ht(1,"div",1),I(2,tc,1,0,"div",2),bn(),_n(3,"div",3),Ht(4,"span",4),bn(),_n(5,"div",5),Ht(6,"span",4),bn()),i&2&&(p(),Be("flex-basis",r._getBufferBarFlexBasis()),p(),E(r.mode==="buffer"?2:-1),p(),Be("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return t})();function Vo(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var zo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[Ne]})}return t})();var Lo={totalScore:0,maxScore:0,completedDimensions:0,totalDimensions:0,grade:"Not classified",gradeCode:"G0",gradeTitle:"Disposable Agent",posture:"Choose scores to classify the agent",overrideCount:0,blockerCount:0,overrideLabels:[],blockerLabels:[],requiredEvidence:[]},di=class t{snapshot=ce(Lo);exportJsonHandler=null;exportCsvHandler=null;update(n){this.snapshot.set(n)}registerExports(n,e){this.exportJsonHandler=n,this.exportCsvHandler=e}exportJson(){this.exportJsonHandler?.()}exportCsv(){this.exportCsvHandler?.()}reset(){this.snapshot.set(Lo),this.exportJsonHandler=null,this.exportCsvHandler=null}static \u0275fac=function(e){return new(e||t)};static \u0275prov=mn({token:t,factory:t.\u0275fac,providedIn:"root"})};function ui(t){return t&&typeof t.connect=="function"&&!(t instanceof vo)}var We=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(We||{}),mi=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((a,s,c)=>{let l,d;if(a.previousIndex==null){let h=()=>i(a,s,c);l=this._insertView(h,c,e,r(a)),d=l?We.INSERTED:We.REPLACED}else c==null?(this._detachAndCacheView(s,e),d=We.REMOVED):(l=this._moveView(s,c,e,r(a)),d=We.MOVED);o&&o({context:l?.context,operation:d,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let a=n();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var rc=20,oc=(()=>{class t{_ngZone=C(Ve);_platform=C(ct);_renderer=C(cr).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new ke;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=rc){return this._platform.isBrowser?new bo(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(un(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):dn()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(xo(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=To(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=mn({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sf=(()=>{class t{elementRef=C(ae);scrollDispatcher=C(oc);ngZone=C(Ve);dir=C(_t,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ke;_renderer=C(Rt);_cleanupScroll;_elementScrolled=new ke;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&jt()!=qt.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),jt()==qt.INVERTED?e.left=e.right:jt()==qt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Eo()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&jt()==qt.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&jt()==qt.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ac=20,Uo=(()=>{class t{_platform=C(ct);_listeners;_viewportSize=null;_change=new ke;_document=C(hn);constructor(){let e=C(Ve),i=C(cr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=ac){return e>0?this._change.pipe(un(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=mn({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Go=new ge("CDK_VIRTUAL_SCROLL_VIEWPORT");var $o=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({})}return t})(),Ho=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[Ne,$o,Ne,$o]})}return t})();var hi=class{applyChanges(n,e,i,r,o){n.forEachOperation((a,s,c)=>{let l,d;if(a.previousIndex==null){let h=i(a,s,c);l=e.createEmbeddedView(h.templateRef,h.context,h.index),d=We.INSERTED}else c==null?(e.remove(s),d=We.REMOVED):(l=e.get(s),e.move(l,c),d=We.MOVED);o&&o({context:l?.context,operation:d,record:a})})}detach(){}};var sc=[[["caption"]],[["colgroup"],["col"]],"*"],lc=["caption","colgroup, col","*"];function cc(t,n){t&1&&be(0,2)}function dc(t,n){t&1&&(m(0,"thead",0),De(1,1),f(),m(2,"tbody",0),De(3,2)(4,3),f(),m(5,"tfoot",0),De(6,4),f())}function uc(t,n){t&1&&De(0,1)(1,2)(2,3)(3,4)}var qe=new ge("CDK_TABLE");var gi=(()=>{class t{template=C(Je);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),_i=(()=>{class t{template=C(Je);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),qo=(()=>{class t{template=C(Je);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),en=(()=>{class t{_table=C(qe,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,gi,5)(o,_i,5)(o,qo,5),i&2){let a;ne(a=ie())&&(r.cell=a.first),ne(a=ie())&&(r.headerCell=a.first),ne(a=ie())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",X],stickyEnd:[2,"stickyEnd","stickyEnd",X]}})}return t})(),fi=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},jo=(()=>{class t extends fi{constructor(){super(C(en),C(ae))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ue]})}return t})();var Qo=(()=>{class t extends fi{constructor(){let e=C(en),i=C(ae);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ue]})}return t})();var hr=(()=>{class t{template=C(Je);_differs=C(It);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Cn?e.headerCell.template:this instanceof pr?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,features:[St]})}return t})(),Cn=(()=>{class t extends hr{_table=C(qe,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(C(Je),C(It))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",X]},features:[ue,St]})}return t})(),pr=(()=>{class t extends hr{_table=C(qe,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(C(Je),C(It))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",X]},features:[ue,St]})}return t})(),bi=(()=>{class t extends hr{_table=C(qe,{optional:!0});when;constructor(){super(C(Je),C(It))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ue]})}return t})(),Pt=(()=>{class t{_viewContainer=C(Ot);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),fr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&De(0,0)},dependencies:[Pt],encapsulation:2})}return t})();var gr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&De(0,0)},dependencies:[Pt],encapsulation:2})}return t})(),Yo=(()=>{class t{templateRef=C(Je);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),Xo=["top","bottom","left","right"],mr=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));ft({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(y=>y)||i.some(y=>y))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",h=e.lastIndexOf(!0),u=i.indexOf(!0),g,S,x;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),ft({earlyRead:()=>{g=this._getCellWidths(a,r),S=this._getStickyStartColumnPositions(g,e),x=this._getStickyEndColumnPositions(g,i)},write:()=>{for(let y of n)for(let _=0;_<s;_++){let R=y.children[_];e[_]&&this._addStickyStyle(R,l,S[_],_===h),i[_]&&this._addStickyStyle(R,d,x[_],_===u)}this._positionListener&&g.some(y=>!!y)&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:g.slice(0,h+1).map((y,_)=>e[_]?y:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:u===-1?[]:g.slice(u).map((y,_)=>i[_+u]?y:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],c=[];ft({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;a[l]=d;let h=r[l];c[l]=this._isNativeHtmlTable?Array.from(h.children):[h];let u=this._retrieveElementSize(h).height;d+=u,s[l]=u}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let h=a[d],u=d===l;for(let g of c[d])this._addStickyStyle(g,i,h,u)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&ft({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);Xo.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of Xo)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&mc(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function mc(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}var kn=new ge("STICKY_POSITIONING_LISTENER");var _r=(()=>{class t{viewContainer=C(Ot);elementRef=C(ae);constructor(){let e=C(qe);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","rowOutlet",""]]})}return t})(),br=(()=>{class t{viewContainer=C(Ot);elementRef=C(ae);constructor(){let e=C(qe);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),vr=(()=>{class t{viewContainer=C(Ot);elementRef=C(ae);constructor(){let e=C(qe);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),yr=(()=>{class t{viewContainer=C(Ot);elementRef=C(ae);constructor(){let e=C(qe);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),xr=(()=>{class t{_differs=C(It);_changeDetectorRef=C(Ie);_elementRef=C(ae);_dir=C(_t,{optional:!0});_platform=C(ct);_viewRepeater;_viewportRuler=C(Uo);_injector=C(lr);_virtualScrollViewport=C(Go,{optional:!0,host:!0});_positionListener=C(kn,{optional:!0})||C(kn,{optional:!0,skipSelf:!0});_document=C(hn);_data;_renderedRange;_onDestroy=new ke;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new ke;_footerRowStickyUpdates=new ke;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new ke;_dataStream=new ke;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new we;viewChange=new yo({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){C(new Xt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(pt(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new mi:new hi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ui(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===We.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=Wo(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=Wo(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<s.length;c++){let l=s[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let c=s.shift();return c.dataIndex=i,c}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),pi(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=pi(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=pi(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=pi(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let c=!!s.getColumnsDiff();return a||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],ui(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ui(this.dataSource)?e=this.dataSource.connect(this):sr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=dn(this.dataSource)),this._renderChangeSubscription=Zn([e,this.viewChange]).pipe(pt(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);return c}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Pt.mostRecentCellOutlet&&Pt.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new mr(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:dn()).pipe(pt(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?ar:or;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(un(0,i),pt(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),Zn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(pt(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let c=o.offsets[a],l=r!==0?Math.max(r-c,c):-c;for(let d of s)d.style.top=`${-l}px`}}}),Zn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(pt(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let c of s)c.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,c,l;for(let u=0;u<s;u++){let g=o.get(u+a);if(g&&g.rootNodes.length){c=l=g.rootNodes[0];break}}for(let u=s-1;u>-1;u--){let g=o.get(u+a);if(g&&g.rootNodes.length){l=g.rootNodes[g.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),h=l?.getBoundingClientRect?.();return d&&h?h.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,Yo,5)(o,en,5)(o,bi,5)(o,Cn,5)(o,pr,5),i&2){let a;ne(a=ie())&&(r._noDataRow=a.first),ne(a=ie())&&(r._contentColumnDefs=a),ne(a=ie())&&(r._contentRowDefs=a),ne(a=ie())&&(r._contentHeaderRowDefs=a),ne(a=ie())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&re("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",X],fixedLayout:[2,"fixedLayout","fixedLayout",X],recycleRows:[2,"recycleRows","recycleRows",X]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[de([{provide:qe,useExisting:t},{provide:kn,useValue:null}])],ngContentSelectors:lc,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ae(sc),be(0),be(1,1),I(2,cc,1,0),I(3,dc,7,0)(4,uc,4,0)),i&2&&(p(2),E(r._isServer?2:-1),p(),E(r._isNativeHtmlTable?3:4))},dependencies:[br,_r,yr,vr],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return t})();function pi(t,n){return t.concat(Array.from(n))}function Wo(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var Ko=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[Ho]})}return t})();var wn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ke;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var hc=[[["caption"]],[["colgroup"],["col"]],"*"],pc=["caption","colgroup, col","*"];function fc(t,n){t&1&&be(0,2)}function gc(t,n){t&1&&(m(0,"thead",0),De(1,1),f(),m(2,"tbody",2),De(3,3)(4,4),f(),m(5,"tfoot",0),De(6,5),f())}function _c(t,n){t&1&&De(0,1)(1,3)(2,4)(3,5)}var Zo=(()=>{class t extends xr{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=Q({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[de([{provide:xr,useExisting:t},{provide:qe,useExisting:t},{provide:kn,useValue:null}]),ue],ngContentSelectors:pc,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ae(hc),be(0),be(1,1),I(2,fc,1,0),I(3,gc,7,0)(4,_c,4,0)),i&2&&(p(2),E(r._isServer?2:-1),p(),E(r._isNativeHtmlTable?3:4))},dependencies:[br,_r,yr,vr],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2})}return t})(),Jo=(()=>{class t extends gi{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matCellDef",""]],features:[de([{provide:gi,useExisting:t}]),ue]})}return t})(),ea=(()=>{class t extends _i{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matHeaderCellDef",""]],features:[de([{provide:_i,useExisting:t}]),ue]})}return t})();var ta=(()=>{class t extends en{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[de([{provide:en,useExisting:t}]),ue]})}return t})(),na=(()=>{class t extends jo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ue]})}return t})();var ia=(()=>{class t extends Qo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ue]})}return t})();var ra=(()=>{class t extends Cn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",X]},features:[de([{provide:Cn,useExisting:t}]),ue]})}return t})();var oa=(()=>{class t extends bi{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[de([{provide:bi,useExisting:t}]),ue]})}return t})(),aa=(()=>{class t extends fr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=Q({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[de([{provide:fr,useExisting:t}]),ue],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&De(0,0)},dependencies:[Pt],encapsulation:2})}return t})();var sa=(()=>{class t extends gr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=Q({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[de([{provide:gr,useExisting:t}]),ue],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&De(0,0)},dependencies:[Pt],encapsulation:2})}return t})();var la=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[Ko,Ne]})}return t})();var kr={"relationship-value-explorer":{key:"relationship-value-explorer",label:"Relationship-Value Explorer",description:"Interactive D3 graph for exploring clients, services, employees, and revenue opportunities."},"agent-grading-calculator":{key:"agent-grading-calculator",label:"Agent Grading Calculator",description:"Interactive scoring tool for classifying enterprise AI agents by materiality, evidence, and governance posture."}};function ca(t){return t in kr}var da=(()=>{class t{_animationsDisabled=gt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&re("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var Mc=["button"],Sc=["*"];function Rc(t,n){if(t&1&&(m(0,"div",2),H(1,"mat-pseudo-checkbox",6),f()),t&2){let e=M();p(),$("disabled",e.disabled)}}var ua=new ge("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ma=new ge("MatButtonToggleGroup"),Oc={provide:Jt,useExisting:Mt(()=>Cr),multi:!0},vi=class{source;value;constructor(n,e){this.source=n,this.value=e}},Cr=(()=>{class t{_changeDetector=C(Ie);_dir=C(_t,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=C(xn).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new we;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new we;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=C(ua,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new wn(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Io(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let i=new vi(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+i*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,yi,5),i&2){let a;ne(a=ie())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&q("keydown",function(a){return r._keydown(a)}),i&2&&(me("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),re("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",X],value:"value",multiple:[2,"multiple","multiple",X],disabled:[2,"disabled","disabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",X],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",X]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[de([Oc,{provide:ma,useExisting:t}])]})}return t})(),yi=(()=>{class t{_changeDetectorRef=C(Ie);_elementRef=C(ae);_focusMonitor=C(Do);_idGenerator=C(xn);_animationDisabled=gt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new we;constructor(){C(Wt).load(Qt);let e=C(ma,{optional:!0}),i=C(new Xt("tabindex"),{optional:!0})||"",r=C(ua,{optional:!0});this._tabIndex=ce(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new vi(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&st(Mc,5),i&2){let o;ne(o=ie())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&q("focus",function(){return r.focus()}),i&2&&(me("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),re("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",X],appearance:"appearance",checked:[2,"checked","checked",X],disabled:[2,"disabled","disabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Sc,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(Ae(),m(0,"button",1,0),q("click",function(){return r._onButtonClick()}),I(2,Rc,2,1,"div",2),m(3,"span",3),be(4),f()(),H(5,"span",4)(6,"span",5)),i&2){let o=ti(1);$("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),me("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(2),E(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),p(4),$("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Et,da],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return t})(),ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[ii,yi,Ne]})}return t})();function At(t,n){return t==null||n==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function wr(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function xi(t){let n,e,i;t.length!==2?(n=At,e=(s,c)=>At(t(s),c),i=(s,c)=>t(s)-c):(n=t===At||t===wr?t:Dc,e=t,i=t);function r(s,c,l=0,d=s.length){if(l<d){if(n(c,c)!==0)return d;do{let h=l+d>>>1;e(s[h],c)<0?l=h+1:d=h}while(l<d)}return l}function o(s,c,l=0,d=s.length){if(l<d){if(n(c,c)!==0)return d;do{let h=l+d>>>1;e(s[h],c)<=0?l=h+1:d=h}while(l<d)}return l}function a(s,c,l=0,d=s.length){let h=r(s,c,l,d-1);return h>l&&i(s[h-1],c)>-i(s[h],c)?h-1:h}return{left:r,center:a,right:o}}function Dc(){return 0}function Mr(t){return t===null?NaN:+t}var pa=xi(At),fa=pa.right,Ic=pa.left,Ec=xi(Mr).center,Sr=fa;var Pc=Math.sqrt(50),Ac=Math.sqrt(10),Nc=Math.sqrt(2);function ki(t,n,e){let i=(n-t)/Math.max(0,e),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),a=o>=Pc?10:o>=Ac?5:o>=Nc?2:1,s,c,l;return r<0?(l=Math.pow(10,-r)/a,s=Math.round(t*l),c=Math.round(n*l),s/l<t&&++s,c/l>n&&--c,l=-l):(l=Math.pow(10,r)*a,s=Math.round(t/l),c=Math.round(n/l),s*l<t&&++s,c*l>n&&--c),c<s&&.5<=e&&e<2?ki(t,n,e*2):[s,c,l]}function Ci(t,n,e){if(n=+n,t=+t,e=+e,!(e>0))return[];if(t===n)return[t];let i=n<t,[r,o,a]=i?ki(n,t,e):ki(t,n,e);if(!(o>=r))return[];let s=o-r+1,c=new Array(s);if(i)if(a<0)for(let l=0;l<s;++l)c[l]=(o-l)/-a;else for(let l=0;l<s;++l)c[l]=(o-l)*a;else if(a<0)for(let l=0;l<s;++l)c[l]=(r+l)/-a;else for(let l=0;l<s;++l)c[l]=(r+l)*a;return c}function Mn(t,n,e){return n=+n,t=+t,e=+e,ki(t,n,e)[2]}function Rr(t,n,e){n=+n,t=+t,e=+e;let i=n<t,r=i?Mn(n,t,e):Mn(t,n,e);return(i?-1:1)*(r<0?1/-r:r)}function Sn(t,n){let e;if(n===void 0)for(let i of t)i!=null&&(e<i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of t)(r=n(r,++i,t))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function Rn(t,n){let e;if(n===void 0)for(let i of t)i!=null&&(e>i||e===void 0&&i>=i)&&(e=i);else{let i=-1;for(let r of t)(r=n(r,++i,t))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}var Fc={value:()=>{}};function _a(){for(var t=0,n=arguments.length,e={},i;t<n;++t){if(!(i=arguments[t]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new wi(e)}function wi(t){this._=t}function Vc(t,n){return t.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}wi.prototype=_a.prototype={constructor:wi,on:function(t,n){var e=this._,i=Vc(t+"",e),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(t=i[o]).type)&&(r=Bc(e[r],t.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<a;)if(r=(t=i[o]).type)e[r]=ga(e[r],t.name,n);else if(n==null)for(r in e)e[r]=ga(e[r],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new wi(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,o;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(n,e)}};function Bc(t,n){for(var e=0,i=t.length,r;e<i;++e)if((r=t[e]).name===n)return r.value}function ga(t,n,e){for(var i=0,r=t.length;i<r;++i)if(t[i].name===n){t[i]=Fc,t=t.slice(0,i).concat(t.slice(i+1));break}return e!=null&&t.push({name:n,value:e}),t}var dt=_a;var Mi="http://www.w3.org/1999/xhtml",Or={svg:"http://www.w3.org/2000/svg",xhtml:Mi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ut(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),Or.hasOwnProperty(n)?{space:Or[n],local:t}:t}function zc(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Mi&&n.documentElement.namespaceURI===Mi?n.createElement(t):n.createElementNS(e,t)}}function Lc(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Si(t){var n=ut(t);return(n.local?Lc:zc)(n)}function $c(){}function Nt(t){return t==null?$c:function(){return this.querySelector(t)}}function ba(t){typeof t!="function"&&(t=Nt(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=new Array(a),c,l,d=0;d<a;++d)(c=o[d])&&(l=t.call(c,c.__data__,d,o))&&("__data__"in c&&(l.__data__=c.__data__),s[d]=l);return new se(i,this._parents)}function Tr(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Uc(){return[]}function On(t){return t==null?Uc:function(){return this.querySelectorAll(t)}}function Gc(t){return function(){return Tr(t.apply(this,arguments))}}function va(t){typeof t=="function"?t=Gc(t):t=On(t);for(var n=this._groups,e=n.length,i=[],r=[],o=0;o<e;++o)for(var a=n[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(i.push(t.call(c,c.__data__,l,a)),r.push(c));return new se(i,r)}function Tn(t){return function(){return this.matches(t)}}function Ri(t){return function(n){return n.matches(t)}}var Hc=Array.prototype.find;function Xc(t){return function(){return Hc.call(this.children,t)}}function Wc(){return this.firstElementChild}function ya(t){return this.select(t==null?Wc:Xc(typeof t=="function"?t:Ri(t)))}var qc=Array.prototype.filter;function jc(){return Array.from(this.children)}function Qc(t){return function(){return qc.call(this.children,t)}}function xa(t){return this.selectAll(t==null?jc:Qc(typeof t=="function"?t:Ri(t)))}function ka(t){typeof t!="function"&&(t=Tn(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&t.call(c,c.__data__,l,o)&&s.push(c);return new se(i,this._parents)}function Oi(t){return new Array(t.length)}function Ca(){return new se(this._enter||this._groups.map(Oi),this._parents)}function Dn(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}Dn.prototype={constructor:Dn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function wa(t){return function(){return t}}function Yc(t,n,e,i,r,o){for(var a=0,s,c=n.length,l=o.length;a<l;++a)(s=n[a])?(s.__data__=o[a],i[a]=s):e[a]=new Dn(t,o[a]);for(;a<c;++a)(s=n[a])&&(r[a]=s)}function Kc(t,n,e,i,r,o,a){var s,c,l=new Map,d=n.length,h=o.length,u=new Array(d),g;for(s=0;s<d;++s)(c=n[s])&&(u[s]=g=a.call(c,c.__data__,s,n)+"",l.has(g)?r[s]=c:l.set(g,c));for(s=0;s<h;++s)g=a.call(t,o[s],s,o)+"",(c=l.get(g))?(i[s]=c,c.__data__=o[s],l.delete(g)):e[s]=new Dn(t,o[s]);for(s=0;s<d;++s)(c=n[s])&&l.get(u[s])===c&&(r[s]=c)}function Zc(t){return t.__data__}function Ma(t,n){if(!arguments.length)return Array.from(this,Zc);var e=n?Kc:Yc,i=this._parents,r=this._groups;typeof t!="function"&&(t=wa(t));for(var o=r.length,a=new Array(o),s=new Array(o),c=new Array(o),l=0;l<o;++l){var d=i[l],h=r[l],u=h.length,g=Jc(t.call(d,d&&d.__data__,l,i)),S=g.length,x=s[l]=new Array(S),y=a[l]=new Array(S),_=c[l]=new Array(u);e(d,h,x,y,_,g,n);for(var R=0,N=0,v,P;R<S;++R)if(v=x[R]){for(R>=N&&(N=R+1);!(P=y[N])&&++N<S;);v._next=P||null}}return a=new se(a,i),a._enter=s,a._exit=c,a}function Jc(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Sa(){return new se(this._exit||this._groups.map(Oi),this._parents)}function Ra(t,n,e){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),n!=null&&(r=n(r),r&&(r=r.selection())),e==null?o.remove():e(o),i&&r?i.merge(r).order():r}function Oa(t){for(var n=t.selection?t.selection():t,e=this._groups,i=n._groups,r=e.length,o=i.length,a=Math.min(r,o),s=new Array(r),c=0;c<a;++c)for(var l=e[c],d=i[c],h=l.length,u=s[c]=new Array(h),g,S=0;S<h;++S)(g=l[S]||d[S])&&(u[S]=g);for(;c<r;++c)s[c]=e[c];return new se(s,this._parents)}function Ta(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var i=t[n],r=i.length-1,o=i[r],a;--r>=0;)(a=i[r])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Da(t){t||(t=ed);function n(h,u){return h&&u?t(h.__data__,u.__data__):!h-!u}for(var e=this._groups,i=e.length,r=new Array(i),o=0;o<i;++o){for(var a=e[o],s=a.length,c=r[o]=new Array(s),l,d=0;d<s;++d)(l=a[d])&&(c[d]=l);c.sort(n)}return new se(r,this._parents).order()}function ed(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Ia(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Ea(){return Array.from(this)}function Pa(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,o=i.length;r<o;++r){var a=i[r];if(a)return a}return null}function Aa(){let t=0;for(let n of this)++t;return t}function Na(){return!this.node()}function Fa(t){for(var n=this._groups,e=0,i=n.length;e<i;++e)for(var r=n[e],o=0,a=r.length,s;o<a;++o)(s=r[o])&&t.call(s,s.__data__,o,r);return this}function td(t){return function(){this.removeAttribute(t)}}function nd(t){return function(){this.removeAttributeNS(t.space,t.local)}}function id(t,n){return function(){this.setAttribute(t,n)}}function rd(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function od(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function ad(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Va(t,n){var e=ut(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((n==null?e.local?nd:td:typeof n=="function"?e.local?ad:od:e.local?rd:id)(e,n))}function Ti(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function sd(t){return function(){this.style.removeProperty(t)}}function ld(t,n,e){return function(){this.style.setProperty(t,n,e)}}function cd(t,n,e){return function(){var i=n.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,e)}}function Ba(t,n,e){return arguments.length>1?this.each((n==null?sd:typeof n=="function"?cd:ld)(t,n,e??"")):bt(this.node(),t)}function bt(t,n){return t.style.getPropertyValue(n)||Ti(t).getComputedStyle(t,null).getPropertyValue(n)}function dd(t){return function(){delete this[t]}}function ud(t,n){return function(){this[t]=n}}function md(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function za(t,n){return arguments.length>1?this.each((n==null?dd:typeof n=="function"?md:ud)(t,n)):this.node()[t]}function La(t){return t.trim().split(/^|\s+/)}function Dr(t){return t.classList||new $a(t)}function $a(t){this._node=t,this._names=La(t.getAttribute("class")||"")}$a.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ua(t,n){for(var e=Dr(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function Ga(t,n){for(var e=Dr(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function hd(t){return function(){Ua(this,t)}}function pd(t){return function(){Ga(this,t)}}function fd(t,n){return function(){(n.apply(this,arguments)?Ua:Ga)(this,t)}}function Ha(t,n){var e=La(t+"");if(arguments.length<2){for(var i=Dr(this.node()),r=-1,o=e.length;++r<o;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof n=="function"?fd:n?hd:pd)(e,n))}function gd(){this.textContent=""}function _d(t){return function(){this.textContent=t}}function bd(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Xa(t){return arguments.length?this.each(t==null?gd:(typeof t=="function"?bd:_d)(t)):this.node().textContent}function vd(){this.innerHTML=""}function yd(t){return function(){this.innerHTML=t}}function xd(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Wa(t){return arguments.length?this.each(t==null?vd:(typeof t=="function"?xd:yd)(t)):this.node().innerHTML}function kd(){this.nextSibling&&this.parentNode.appendChild(this)}function qa(){return this.each(kd)}function Cd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ja(){return this.each(Cd)}function Qa(t){var n=typeof t=="function"?t:Si(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function wd(){return null}function Ya(t,n){var e=typeof t=="function"?t:Si(t),i=n==null?wd:typeof n=="function"?n:Nt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function Md(){var t=this.parentNode;t&&t.removeChild(this)}function Ka(){return this.each(Md)}function Sd(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Rd(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Za(t){return this.select(t?Rd:Sd)}function Ja(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Od(t){return function(n){t.call(this,n,this.__data__)}}function Td(t){return t.trim().split(/^|\s+/).map(function(n){var e="",i=n.indexOf(".");return i>=0&&(e=n.slice(i+1),n=n.slice(0,i)),{type:n,name:e}})}function Dd(t){return function(){var n=this.__on;if(n){for(var e=0,i=-1,r=n.length,o;e<r;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++i]=o;++i?n.length=i:delete this.__on}}}function Id(t,n,e){return function(){var i=this.__on,r,o=Od(n);if(i){for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=n;return}}this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function es(t,n,e){var i=Td(t+""),r,o=i.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,d;c<l;++c)for(r=0,d=s[c];r<o;++r)if((a=i[r]).type===d.type&&a.name===d.name)return d.value}return}for(s=n?Id:Dd,r=0;r<o;++r)this.each(s(i[r],n,e));return this}function ts(t,n,e){var i=Ti(t),r=i.CustomEvent;typeof r=="function"?r=new r(n,e):(r=i.document.createEvent("Event"),e?(r.initEvent(n,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(n,!1,!1)),t.dispatchEvent(r)}function Ed(t,n){return function(){return ts(this,t,n)}}function Pd(t,n){return function(){return ts(this,t,n.apply(this,arguments))}}function ns(t,n){return this.each((typeof n=="function"?Pd:Ed)(t,n))}function*is(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var i=t[n],r=0,o=i.length,a;r<o;++r)(a=i[r])&&(yield a)}var Ir=[null];function se(t,n){this._groups=t,this._parents=n}function rs(){return new se([[document.documentElement]],Ir)}function Ad(){return this}se.prototype=rs.prototype={constructor:se,select:ba,selectAll:va,selectChild:ya,selectChildren:xa,filter:ka,data:Ma,enter:Ca,exit:Sa,join:Ra,merge:Oa,selection:Ad,order:Ta,sort:Da,call:Ia,nodes:Ea,node:Pa,size:Aa,empty:Na,each:Fa,attr:Va,style:Ba,property:za,classed:Ha,text:Xa,html:Wa,raise:qa,lower:ja,append:Qa,insert:Ya,remove:Ka,clone:Za,datum:Ja,on:es,dispatch:ns,[Symbol.iterator]:is};var mt=rs;function Re(t){return typeof t=="string"?new se([[document.querySelector(t)]],[document.documentElement]):new se([[t]],Ir)}function os(t){let n;for(;n=t.sourceEvent;)t=n;return t}function ze(t,n){if(t=os(t),n===void 0&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[t.clientX-r.left-n.clientLeft,t.clientY-r.top-n.clientTop]}}return[t.pageX,t.pageY]}var as={passive:!1},Ft={capture:!0,passive:!1};function Di(t){t.stopImmediatePropagation()}function vt(t){t.preventDefault(),t.stopImmediatePropagation()}function In(t){var n=t.document.documentElement,e=Re(t).on("dragstart.drag",vt,Ft);"onselectstart"in n?e.on("selectstart.drag",vt,Ft):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function En(t,n){var e=t.document.documentElement,i=Re(t).on("dragstart.drag",null);n&&(i.on("click.drag",vt,Ft),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}var Pn=t=>()=>t;function An(t,{sourceEvent:n,subject:e,target:i,identifier:r,active:o,x:a,y:s,dx:c,dy:l,dispatch:d}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:d}})}An.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function Nd(t){return!t.ctrlKey&&!t.button}function Fd(){return this.parentNode}function Vd(t,n){return n??{x:t.x,y:t.y}}function Bd(){return navigator.maxTouchPoints||"ontouchstart"in this}function Er(){var t=Nd,n=Fd,e=Vd,i=Bd,r={},o=dt("start","drag","end"),a=0,s,c,l,d,h=0;function u(v){v.on("mousedown.drag",g).filter(i).on("touchstart.drag",y).on("touchmove.drag",_,as).on("touchend.drag touchcancel.drag",R).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(v,P){if(!(d||!t.call(this,v,P))){var A=N(this,n.call(this,v,P),v,P,"mouse");A&&(Re(v.view).on("mousemove.drag",S,Ft).on("mouseup.drag",x,Ft),In(v.view),Di(v),l=!1,s=v.clientX,c=v.clientY,A("start",v))}}function S(v){if(vt(v),!l){var P=v.clientX-s,A=v.clientY-c;l=P*P+A*A>h}r.mouse("drag",v)}function x(v){Re(v.view).on("mousemove.drag mouseup.drag",null),En(v.view,l),vt(v),r.mouse("end",v)}function y(v,P){if(t.call(this,v,P)){var A=v.changedTouches,U=n.call(this,v,P),G=A.length,K,W;for(K=0;K<G;++K)(W=N(this,U,v,P,A[K].identifier,A[K]))&&(Di(v),W("start",v,A[K]))}}function _(v){var P=v.changedTouches,A=P.length,U,G;for(U=0;U<A;++U)(G=r[P[U].identifier])&&(vt(v),G("drag",v,P[U]))}function R(v){var P=v.changedTouches,A=P.length,U,G;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),U=0;U<A;++U)(G=r[P[U].identifier])&&(Di(v),G("end",v,P[U]))}function N(v,P,A,U,G,K){var W=o.copy(),te=ze(K||A,P),V,oe,b;if((b=e.call(v,new An("beforestart",{sourceEvent:A,target:u,identifier:G,active:a,x:te[0],y:te[1],dx:0,dy:0,dispatch:W}),U))!=null)return V=b.x-te[0]||0,oe=b.y-te[1]||0,function T(w,D,B){var L=te,F;switch(w){case"start":r[G]=T,F=a++;break;case"end":delete r[G],--a;case"drag":te=ze(B||D,P),F=a;break}W.call(w,v,new An(w,{sourceEvent:D,subject:b,target:u,identifier:G,active:F,x:te[0]+V,y:te[1]+oe,dx:te[0]-L[0],dy:te[1]-L[1],dispatch:W}),U)}}return u.filter=function(v){return arguments.length?(t=typeof v=="function"?v:Pn(!!v),u):t},u.container=function(v){return arguments.length?(n=typeof v=="function"?v:Pn(v),u):n},u.subject=function(v){return arguments.length?(e=typeof v=="function"?v:Pn(v),u):e},u.touchable=function(v){return arguments.length?(i=typeof v=="function"?v:Pn(!!v),u):i},u.on=function(){var v=o.on.apply(o,arguments);return v===o?u:v},u.clickDistance=function(v){return arguments.length?(h=(v=+v)*v,u):Math.sqrt(h)},u}function Ii(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Pr(t,n){var e=Object.create(t.prototype);for(var i in n)e[i]=n[i];return e}function Vn(){}var Nn=.7,Ai=1/Nn,tn="\\s*([+-]?\\d+)\\s*",Fn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",tt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",zd=/^#([0-9a-f]{3,8})$/,Ld=new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`),$d=new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`),Ud=new RegExp(`^rgba\\(${tn},${tn},${tn},${Fn}\\)$`),Gd=new RegExp(`^rgba\\(${tt},${tt},${tt},${Fn}\\)$`),Hd=new RegExp(`^hsl\\(${Fn},${tt},${tt}\\)$`),Xd=new RegExp(`^hsla\\(${Fn},${tt},${tt},${Fn}\\)$`),ss={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ii(Vn,Qe,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ls,formatHex:ls,formatHex8:Wd,formatHsl:qd,formatRgb:cs,toString:cs});function ls(){return this.rgb().formatHex()}function Wd(){return this.rgb().formatHex8()}function qd(){return fs(this).formatHsl()}function cs(){return this.rgb().formatRgb()}function Qe(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=zd.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?ds(n):e===3?new Pe(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?Ei(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?Ei(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Ld.exec(t))?new Pe(n[1],n[2],n[3],1):(n=$d.exec(t))?new Pe(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Ud.exec(t))?Ei(n[1],n[2],n[3],n[4]):(n=Gd.exec(t))?Ei(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Hd.exec(t))?hs(n[1],n[2]/100,n[3]/100,1):(n=Xd.exec(t))?hs(n[1],n[2]/100,n[3]/100,n[4]):ss.hasOwnProperty(t)?ds(ss[t]):t==="transparent"?new Pe(NaN,NaN,NaN,0):null}function ds(t){return new Pe(t>>16&255,t>>8&255,t&255,1)}function Ei(t,n,e,i){return i<=0&&(t=n=e=NaN),new Pe(t,n,e,i)}function jd(t){return t instanceof Vn||(t=Qe(t)),t?(t=t.rgb(),new Pe(t.r,t.g,t.b,t.opacity)):new Pe}function nn(t,n,e,i){return arguments.length===1?jd(t):new Pe(t,n,e,i??1)}function Pe(t,n,e,i){this.r=+t,this.g=+n,this.b=+e,this.opacity=+i}Ii(Pe,nn,Pr(Vn,{brighter(t){return t=t==null?Ai:Math.pow(Ai,t),new Pe(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Nn:Math.pow(Nn,t),new Pe(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Pe(Bt(this.r),Bt(this.g),Bt(this.b),Ni(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:us,formatHex:us,formatHex8:Qd,formatRgb:ms,toString:ms}));function us(){return`#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`}function Qd(){return`#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity)?1:this.opacity)*255)}`}function ms(){let t=Ni(this.opacity);return`${t===1?"rgb(":"rgba("}${Bt(this.r)}, ${Bt(this.g)}, ${Bt(this.b)}${t===1?")":`, ${t})`}`}function Ni(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Bt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Vt(t){return t=Bt(t),(t<16?"0":"")+t.toString(16)}function hs(t,n,e,i){return i<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new je(t,n,e,i)}function fs(t){if(t instanceof je)return new je(t.h,t.s,t.l,t.opacity);if(t instanceof Vn||(t=Qe(t)),!t)return new je;if(t instanceof je)return t;t=t.rgb();var n=t.r/255,e=t.g/255,i=t.b/255,r=Math.min(n,e,i),o=Math.max(n,e,i),a=NaN,s=o-r,c=(o+r)/2;return s?(n===o?a=(e-i)/s+(e<i)*6:e===o?a=(i-n)/s+2:a=(n-e)/s+4,s/=c<.5?o+r:2-o-r,a*=60):s=c>0&&c<1?0:a,new je(a,s,c,t.opacity)}function gs(t,n,e,i){return arguments.length===1?fs(t):new je(t,n,e,i??1)}function je(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}Ii(je,gs,Pr(Vn,{brighter(t){return t=t==null?Ai:Math.pow(Ai,t),new je(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Nn:Math.pow(Nn,t),new je(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*n,r=2*e-i;return new Pe(Ar(t>=240?t-240:t+120,r,i),Ar(t,r,i),Ar(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new je(ps(this.h),Pi(this.s),Pi(this.l),Ni(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=Ni(this.opacity);return`${t===1?"hsl(":"hsla("}${ps(this.h)}, ${Pi(this.s)*100}%, ${Pi(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ps(t){return t=(t||0)%360,t<0?t+360:t}function Pi(t){return Math.max(0,Math.min(1,t||0))}function Ar(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}function Nr(t,n,e,i,r){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*i+a*r)/6}function _s(t){var n=t.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),r=t[i],o=t[i+1],a=i>0?t[i-1]:2*r-o,s=i<n-1?t[i+2]:2*o-r;return Nr((e-i/n)*n,a,r,o,s)}}function bs(t){var n=t.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),r=t[(i+n-1)%n],o=t[i%n],a=t[(i+1)%n],s=t[(i+2)%n];return Nr((e-i/n)*n,r,o,a,s)}}var Bn=t=>()=>t;function Yd(t,n){return function(e){return t+e*n}}function Kd(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(i){return Math.pow(t+i*n,e)}}function vs(t){return(t=+t)==1?Fi:function(n,e){return e-n?Kd(n,e,t):Bn(isNaN(n)?e:n)}}function Fi(t,n){var e=n-t;return e?Yd(t,e):Bn(isNaN(t)?n:t)}var zt=(function t(n){var e=vs(n);function i(r,o){var a=e((r=nn(r)).r,(o=nn(o)).r),s=e(r.g,o.g),c=e(r.b,o.b),l=Fi(r.opacity,o.opacity);return function(d){return r.r=a(d),r.g=s(d),r.b=c(d),r.opacity=l(d),r+""}}return i.gamma=t,i})(1);function ys(t){return function(n){var e=n.length,i=new Array(e),r=new Array(e),o=new Array(e),a,s;for(a=0;a<e;++a)s=nn(n[a]),i[a]=s.r||0,r[a]=s.g||0,o[a]=s.b||0;return i=t(i),r=t(r),o=t(o),s.opacity=1,function(c){return s.r=i(c),s.g=r(c),s.b=o(c),s+""}}}var Zd=ys(_s),Jd=ys(bs);function xs(t,n){n||(n=[]);var e=t?Math.min(n.length,t.length):0,i=n.slice(),r;return function(o){for(r=0;r<e;++r)i[r]=t[r]*(1-o)+n[r]*o;return i}}function ks(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Cs(t,n){var e=n?n.length:0,i=t?Math.min(e,t.length):0,r=new Array(i),o=new Array(e),a;for(a=0;a<i;++a)r[a]=Lt(t[a],n[a]);for(;a<e;++a)o[a]=n[a];return function(s){for(a=0;a<i;++a)o[a]=r[a](s);return o}}function ws(t,n){var e=new Date;return t=+t,n=+n,function(i){return e.setTime(t*(1-i)+n*i),e}}function ve(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function Ms(t,n){var e={},i={},r;(t===null||typeof t!="object")&&(t={}),(n===null||typeof n!="object")&&(n={});for(r in n)r in t?e[r]=Lt(t[r],n[r]):i[r]=n[r];return function(o){for(r in e)i[r]=e[r](o);return i}}var Vr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Fr=new RegExp(Vr.source,"g");function eu(t){return function(){return t}}function tu(t){return function(n){return t(n)+""}}function zn(t,n){var e=Vr.lastIndex=Fr.lastIndex=0,i,r,o,a=-1,s=[],c=[];for(t=t+"",n=n+"";(i=Vr.exec(t))&&(r=Fr.exec(n));)(o=r.index)>e&&(o=n.slice(e,o),s[a]?s[a]+=o:s[++a]=o),(i=i[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:ve(i,r)})),e=Fr.lastIndex;return e<n.length&&(o=n.slice(e),s[a]?s[a]+=o:s[++a]=o),s.length<2?c[0]?tu(c[0].x):eu(n):(n=c.length,function(l){for(var d=0,h;d<n;++d)s[(h=c[d]).i]=h.x(l);return s.join("")})}function Lt(t,n){var e=typeof n,i;return n==null||e==="boolean"?Bn(n):(e==="number"?ve:e==="string"?(i=Qe(n))?(n=i,zt):zn:n instanceof Qe?zt:n instanceof Date?ws:ks(n)?xs:Array.isArray(n)?Cs:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?Ms:ve)(t,n)}function Br(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Ss=180/Math.PI,Vi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zr(t,n,e,i,r,o){var a,s,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*i)&&(e-=t*c,i-=n*c),(s=Math.sqrt(e*e+i*i))&&(e/=s,i/=s,c/=s),t*i<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:r,translateY:o,rotate:Math.atan2(n,t)*Ss,skewX:Math.atan(c)*Ss,scaleX:a,scaleY:s}}var Bi;function Rs(t){let n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Vi:zr(n.a,n.b,n.c,n.d,n.e,n.f)}function Os(t){return t==null?Vi:(Bi||(Bi=document.createElementNS("http://www.w3.org/2000/svg","g")),Bi.setAttribute("transform",t),(t=Bi.transform.baseVal.consolidate())?(t=t.matrix,zr(t.a,t.b,t.c,t.d,t.e,t.f)):Vi)}function Ts(t,n,e,i){function r(l){return l.length?l.pop()+" ":""}function o(l,d,h,u,g,S){if(l!==h||d!==u){var x=g.push("translate(",null,n,null,e);S.push({i:x-4,x:ve(l,h)},{i:x-2,x:ve(d,u)})}else(h||u)&&g.push("translate("+h+n+u+e)}function a(l,d,h,u){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),u.push({i:h.push(r(h)+"rotate(",null,i)-2,x:ve(l,d)})):d&&h.push(r(h)+"rotate("+d+i)}function s(l,d,h,u){l!==d?u.push({i:h.push(r(h)+"skewX(",null,i)-2,x:ve(l,d)}):d&&h.push(r(h)+"skewX("+d+i)}function c(l,d,h,u,g,S){if(l!==h||d!==u){var x=g.push(r(g)+"scale(",null,",",null,")");S.push({i:x-4,x:ve(l,h)},{i:x-2,x:ve(d,u)})}else(h!==1||u!==1)&&g.push(r(g)+"scale("+h+","+u+")")}return function(l,d){var h=[],u=[];return l=t(l),d=t(d),o(l.translateX,l.translateY,d.translateX,d.translateY,h,u),a(l.rotate,d.rotate,h,u),s(l.skewX,d.skewX,h,u),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,h,u),l=d=null,function(g){for(var S=-1,x=u.length,y;++S<x;)h[(y=u[S]).i]=y.x(g);return h.join("")}}}var Lr=Ts(Rs,"px, ","px)","deg)"),$r=Ts(Os,", ",")",")");var nu=1e-12;function Ds(t){return((t=Math.exp(t))+1/t)/2}function iu(t){return((t=Math.exp(t))-1/t)/2}function ru(t){return((t=Math.exp(2*t))-1)/(t+1)}var Ur=(function t(n,e,i){function r(o,a){var s=o[0],c=o[1],l=o[2],d=a[0],h=a[1],u=a[2],g=d-s,S=h-c,x=g*g+S*S,y,_;if(x<nu)_=Math.log(u/l)/n,y=function(U){return[s+U*g,c+U*S,l*Math.exp(n*U*_)]};else{var R=Math.sqrt(x),N=(u*u-l*l+i*x)/(2*l*e*R),v=(u*u-l*l-i*x)/(2*u*e*R),P=Math.log(Math.sqrt(N*N+1)-N),A=Math.log(Math.sqrt(v*v+1)-v);_=(A-P)/n,y=function(U){var G=U*_,K=Ds(P),W=l/(e*R)*(K*ru(n*G+P)-iu(P));return[s+W*g,c+W*S,l*K/Ds(n*G+P)]}}return y.duration=_*1e3*n/Math.SQRT2,y}return r.rho=function(o){var a=Math.max(.001,+o),s=a*a,c=s*s;return t(a,s,c)},r})(Math.SQRT2,2,4);var rn=0,$n=0,Ln=0,Es=1e3,zi,Un,Li=0,$t=0,$i=0,Gn=typeof performance=="object"&&performance.now?performance:Date,Ps=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Xn(){return $t||(Ps(ou),$t=Gn.now()+$i)}function ou(){$t=0}function Hn(){this._call=this._time=this._next=null}Hn.prototype=on.prototype={constructor:Hn,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?Xn():+e)+(n==null?0:+n),!this._next&&Un!==this&&(Un?Un._next=this:zi=this,Un=this),this._call=t,this._time=e,Gr()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gr())}};function on(t,n,e){var i=new Hn;return i.restart(t,n,e),i}function As(){Xn(),++rn;for(var t=zi,n;t;)(n=$t-t._time)>=0&&t._call.call(void 0,n),t=t._next;--rn}function Is(){$t=(Li=Gn.now())+$i,rn=$n=0;try{As()}finally{rn=0,su(),$t=0}}function au(){var t=Gn.now(),n=t-Li;n>Es&&($i-=n,Li=t)}function su(){for(var t,n=zi,e,i=1/0;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:zi=e);Un=t,Gr(i)}function Gr(t){if(!rn){$n&&($n=clearTimeout($n));var n=t-$t;n>24?(t<1/0&&($n=setTimeout(Is,t-Gn.now()-$i)),Ln&&(Ln=clearInterval(Ln))):(Ln||(Li=Gn.now(),Ln=setInterval(au,Es)),rn=1,Ps(Is))}}function Ui(t,n,e){var i=new Hn;return n=n==null?0:+n,i.restart(r=>{i.stop(),t(r+n)},n,e),i}var lu=dt("start","end","cancel","interrupt"),cu=[],Vs=0,Ns=1,Hi=2,Gi=3,Fs=4,Xi=5,Wn=6;function yt(t,n,e,i,r,o){var a=t.__transition;if(!a)t.__transition={};else if(e in a)return;du(t,e,{name:n,index:i,group:r,on:lu,tween:cu,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Vs})}function qn(t,n){var e=he(t,n);if(e.state>Vs)throw new Error("too late; already scheduled");return e}function ye(t,n){var e=he(t,n);if(e.state>Gi)throw new Error("too late; already running");return e}function he(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function du(t,n,e){var i=t.__transition,r;i[n]=e,e.timer=on(o,0,e.time);function o(l){e.state=Ns,e.timer.restart(a,e.delay,e.time),e.delay<=l&&a(l-e.delay)}function a(l){var d,h,u,g;if(e.state!==Ns)return c();for(d in i)if(g=i[d],g.name===e.name){if(g.state===Gi)return Ui(a);g.state===Fs?(g.state=Wn,g.timer.stop(),g.on.call("interrupt",t,t.__data__,g.index,g.group),delete i[d]):+d<n&&(g.state=Wn,g.timer.stop(),g.on.call("cancel",t,t.__data__,g.index,g.group),delete i[d])}if(Ui(function(){e.state===Gi&&(e.state=Fs,e.timer.restart(s,e.delay,e.time),s(l))}),e.state=Hi,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Hi){for(e.state=Gi,r=new Array(u=e.tween.length),d=0,h=-1;d<u;++d)(g=e.tween[d].value.call(t,t.__data__,e.index,e.group))&&(r[++h]=g);r.length=h+1}}function s(l){for(var d=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Xi,1),h=-1,u=r.length;++h<u;)r[h].call(t,d);e.state===Xi&&(e.on.call("end",t,t.__data__,e.index,e.group),c())}function c(){e.state=Wn,e.timer.stop(),delete i[n];for(var l in i)return;delete t.__transition}}function xt(t,n){var e=t.__transition,i,r,o=!0,a;if(e){n=n==null?null:n+"";for(a in e){if((i=e[a]).name!==n){o=!1;continue}r=i.state>Hi&&i.state<Xi,i.state=Wn,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete e[a]}o&&delete t.__transition}}function Bs(t){return this.each(function(){xt(this,t)})}function uu(t,n){var e,i;return function(){var r=ye(this,t),o=r.tween;if(o!==e){i=e=o;for(var a=0,s=i.length;a<s;++a)if(i[a].name===n){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function mu(t,n,e){var i,r;if(typeof e!="function")throw new Error;return function(){var o=ye(this,t),a=o.tween;if(a!==i){r=(i=a).slice();for(var s={name:n,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===n){r[c]=s;break}c===l&&r.push(s)}o.tween=r}}function zs(t,n){var e=this._id;if(t+="",arguments.length<2){for(var i=he(this.node(),e).tween,r=0,o=i.length,a;r<o;++r)if((a=i[r]).name===t)return a.value;return null}return this.each((n==null?uu:mu)(e,t,n))}function an(t,n,e){var i=t._id;return t.each(function(){var r=ye(this,i);(r.value||(r.value={}))[n]=e.apply(this,arguments)}),function(r){return he(r,i).value[n]}}function Wi(t,n){var e;return(typeof n=="number"?ve:n instanceof Qe?zt:(e=Qe(n))?(n=e,zt):zn)(t,n)}function hu(t){return function(){this.removeAttribute(t)}}function pu(t){return function(){this.removeAttributeNS(t.space,t.local)}}function fu(t,n,e){var i,r=e+"",o;return function(){var a=this.getAttribute(t);return a===r?null:a===i?o:o=n(i=a,e)}}function gu(t,n,e){var i,r=e+"",o;return function(){var a=this.getAttributeNS(t.space,t.local);return a===r?null:a===i?o:o=n(i=a,e)}}function _u(t,n,e){var i,r,o;return function(){var a,s=e(this),c;return s==null?void this.removeAttribute(t):(a=this.getAttribute(t),c=s+"",a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s)))}}function bu(t,n,e){var i,r,o;return function(){var a,s=e(this),c;return s==null?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),c=s+"",a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s)))}}function Ls(t,n){var e=ut(t),i=e==="transform"?$r:Wi;return this.attrTween(t,typeof n=="function"?(e.local?bu:_u)(e,i,an(this,"attr."+t,n)):n==null?(e.local?pu:hu)(e):(e.local?gu:fu)(e,i,n))}function vu(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function yu(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function xu(t,n){var e,i;function r(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&yu(t,o)),e}return r._value=n,r}function ku(t,n){var e,i;function r(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&vu(t,o)),e}return r._value=n,r}function $s(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var i=ut(t);return this.tween(e,(i.local?xu:ku)(i,n))}function Cu(t,n){return function(){qn(this,t).delay=+n.apply(this,arguments)}}function wu(t,n){return n=+n,function(){qn(this,t).delay=n}}function Us(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Cu:wu)(n,t)):he(this.node(),n).delay}function Mu(t,n){return function(){ye(this,t).duration=+n.apply(this,arguments)}}function Su(t,n){return n=+n,function(){ye(this,t).duration=n}}function Gs(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Mu:Su)(n,t)):he(this.node(),n).duration}function Ru(t,n){if(typeof n!="function")throw new Error;return function(){ye(this,t).ease=n}}function Hs(t){var n=this._id;return arguments.length?this.each(Ru(n,t)):he(this.node(),n).ease}function Ou(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;ye(this,t).ease=e}}function Xs(t){if(typeof t!="function")throw new Error;return this.each(Ou(this._id,t))}function Ws(t){typeof t!="function"&&(t=Tn(t));for(var n=this._groups,e=n.length,i=new Array(e),r=0;r<e;++r)for(var o=n[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&t.call(c,c.__data__,l,o)&&s.push(c);return new Oe(i,this._parents,this._name,this._id)}function qs(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,i=n.length,r=e.length,o=Math.min(i,r),a=new Array(i),s=0;s<o;++s)for(var c=n[s],l=e[s],d=c.length,h=a[s]=new Array(d),u,g=0;g<d;++g)(u=c[g]||l[g])&&(h[g]=u);for(;s<i;++s)a[s]=n[s];return new Oe(a,this._parents,this._name,this._id)}function Tu(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function Du(t,n,e){var i,r,o=Tu(n)?qn:ye;return function(){var a=o(this,t),s=a.on;s!==i&&(r=(i=s).copy()).on(n,e),a.on=r}}function js(t,n){var e=this._id;return arguments.length<2?he(this.node(),e).on.on(t):this.each(Du(e,t,n))}function Iu(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Qs(){return this.on("end.remove",Iu(this._id))}function Ys(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Nt(t));for(var i=this._groups,r=i.length,o=new Array(r),a=0;a<r;++a)for(var s=i[a],c=s.length,l=o[a]=new Array(c),d,h,u=0;u<c;++u)(d=s[u])&&(h=t.call(d,d.__data__,u,s))&&("__data__"in d&&(h.__data__=d.__data__),l[u]=h,yt(l[u],n,e,u,l,he(d,e)));return new Oe(o,this._parents,n,e)}function Ks(t){var n=this._name,e=this._id;typeof t!="function"&&(t=On(t));for(var i=this._groups,r=i.length,o=[],a=[],s=0;s<r;++s)for(var c=i[s],l=c.length,d,h=0;h<l;++h)if(d=c[h]){for(var u=t.call(d,d.__data__,h,c),g,S=he(d,e),x=0,y=u.length;x<y;++x)(g=u[x])&&yt(g,n,e,x,u,S);o.push(u),a.push(d)}return new Oe(o,a,n,e)}var Eu=mt.prototype.constructor;function Zs(){return new Eu(this._groups,this._parents)}function Pu(t,n){var e,i,r;return function(){var o=bt(this,t),a=(this.style.removeProperty(t),bt(this,t));return o===a?null:o===e&&a===i?r:r=n(e=o,i=a)}}function Js(t){return function(){this.style.removeProperty(t)}}function Au(t,n,e){var i,r=e+"",o;return function(){var a=bt(this,t);return a===r?null:a===i?o:o=n(i=a,e)}}function Nu(t,n,e){var i,r,o;return function(){var a=bt(this,t),s=e(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(t),bt(this,t))),a===c?null:a===i&&c===r?o:(r=c,o=n(i=a,s))}}function Fu(t,n){var e,i,r,o="style."+n,a="end."+o,s;return function(){var c=ye(this,t),l=c.on,d=c.value[o]==null?s||(s=Js(n)):void 0;(l!==e||r!==d)&&(i=(e=l).copy()).on(a,r=d),c.on=i}}function el(t,n,e){var i=(t+="")=="transform"?Lr:Wi;return n==null?this.styleTween(t,Pu(t,i)).on("end.style."+t,Js(t)):typeof n=="function"?this.styleTween(t,Nu(t,i,an(this,"style."+t,n))).each(Fu(this._id,t)):this.styleTween(t,Au(t,i,n),e).on("end.style."+t,null)}function Vu(t,n,e){return function(i){this.style.setProperty(t,n.call(this,i),e)}}function Bu(t,n,e){var i,r;function o(){var a=n.apply(this,arguments);return a!==r&&(i=(r=a)&&Vu(t,a,e)),i}return o._value=n,o}function tl(t,n,e){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(n==null)return this.tween(i,null);if(typeof n!="function")throw new Error;return this.tween(i,Bu(t,n,e??""))}function zu(t){return function(){this.textContent=t}}function Lu(t){return function(){var n=t(this);this.textContent=n??""}}function nl(t){return this.tween("text",typeof t=="function"?Lu(an(this,"text",t)):zu(t==null?"":t+""))}function $u(t){return function(n){this.textContent=t.call(this,n)}}function Uu(t){var n,e;function i(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&$u(r)),n}return i._value=t,i}function il(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Uu(t))}function rl(){for(var t=this._name,n=this._id,e=qi(),i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var d=he(c,n);yt(c,t,e,l,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Oe(i,this._parents,t,e)}function ol(){var t,n,e=this,i=e._id,r=e.size();return new Promise(function(o,a){var s={value:a},c={value:function(){--r===0&&o()}};e.each(function(){var l=ye(this,i),d=l.on;d!==t&&(n=(t=d).copy(),n._.cancel.push(s),n._.interrupt.push(s),n._.end.push(c)),l.on=n}),r===0&&o()})}var Gu=0;function Oe(t,n,e,i){this._groups=t,this._parents=n,this._name=e,this._id=i}function al(t){return mt().transition(t)}function qi(){return++Gu}var ht=mt.prototype;Oe.prototype=al.prototype={constructor:Oe,select:Ys,selectAll:Ks,selectChild:ht.selectChild,selectChildren:ht.selectChildren,filter:Ws,merge:qs,selection:Zs,transition:rl,call:ht.call,nodes:ht.nodes,node:ht.node,size:ht.size,empty:ht.empty,each:ht.each,on:js,attr:Ls,attrTween:$s,style:el,styleTween:tl,text:nl,textTween:il,remove:Qs,tween:zs,delay:Us,duration:Gs,ease:Hs,easeVarying:Xs,end:ol,[Symbol.iterator]:ht[Symbol.iterator]};function ji(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Hu={time:null,delay:0,duration:250,ease:ji};function Xu(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function sl(t){var n,e;t instanceof Oe?(n=t._id,t=t._name):(n=qi(),(e=Hu).time=Xn(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&yt(c,t,n,l,a,e||Xu(c,n));return new Oe(i,this._parents,t,n)}mt.prototype.interrupt=Bs;mt.prototype.transition=sl;var{abs:_x,max:bx,min:vx}=Math;function ll(t){return[+t[0],+t[1]]}function Wu(t){return[ll(t[0]),ll(t[1])]}var yx={name:"x",handles:["w","e"].map(Hr),input:function(t,n){return t==null?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},xx={name:"y",handles:["n","s"].map(Hr),input:function(t,n){return t==null?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},kx={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Hr),input:function(t){return t==null?null:Wu(t)},output:function(t){return t}};function Hr(t){return{type:t}}function Qi(t,n){var e,i=1;t==null&&(t=0),n==null&&(n=0);function r(){var o,a=e.length,s,c=0,l=0;for(o=0;o<a;++o)s=e[o],c+=s.x,l+=s.y;for(c=(c/a-t)*i,l=(l/a-n)*i,o=0;o<a;++o)s=e[o],s.x-=c,s.y-=l}return r.initialize=function(o){e=o},r.x=function(o){return arguments.length?(t=+o,r):t},r.y=function(o){return arguments.length?(n=+o,r):n},r.strength=function(o){return arguments.length?(i=+o,r):i},r}function cl(t){let n=+this._x.call(null,t),e=+this._y.call(null,t);return dl(this.cover(n,e),n,e,t)}function dl(t,n,e,i){if(isNaN(n)||isNaN(e))return t;var r,o=t._root,a={data:i},s=t._x0,c=t._y0,l=t._x1,d=t._y1,h,u,g,S,x,y,_,R;if(!o)return t._root=a,t;for(;o.length;)if((x=n>=(h=(s+l)/2))?s=h:l=h,(y=e>=(u=(c+d)/2))?c=u:d=u,r=o,!(o=o[_=y<<1|x]))return r[_]=a,t;if(g=+t._x.call(null,o.data),S=+t._y.call(null,o.data),n===g&&e===S)return a.next=o,r?r[_]=a:t._root=a,t;do r=r?r[_]=new Array(4):t._root=new Array(4),(x=n>=(h=(s+l)/2))?s=h:l=h,(y=e>=(u=(c+d)/2))?c=u:d=u;while((_=y<<1|x)===(R=(S>=u)<<1|g>=h));return r[R]=o,r[_]=a,t}function ul(t){var n,e,i=t.length,r,o,a=new Array(i),s=new Array(i),c=1/0,l=1/0,d=-1/0,h=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(o=+this._y.call(null,n))||(a[e]=r,s[e]=o,r<c&&(c=r),r>d&&(d=r),o<l&&(l=o),o>h&&(h=o));if(c>d||l>h)return this;for(this.cover(c,l).cover(d,h),e=0;e<i;++e)dl(this,a[e],s[e],t[e]);return this}function ml(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(e))r=(e=Math.floor(t))+1,o=(i=Math.floor(n))+1;else{for(var a=r-e||1,s=this._root,c,l;e>t||t>=r||i>n||n>=o;)switch(l=(n<i)<<1|t<e,c=new Array(4),c[l]=s,s=c,a*=2,l){case 0:r=e+a,o=i+a;break;case 1:e=r-a,o=i+a;break;case 2:r=e+a,i=o-a;break;case 3:e=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=i,this._x1=r,this._y1=o,this}function hl(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t}function pl(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function pe(t,n,e,i,r){this.node=t,this.x0=n,this.y0=e,this.x1=i,this.y1=r}function fl(t,n,e){var i,r=this._x0,o=this._y0,a,s,c,l,d=this._x1,h=this._y1,u=[],g=this._root,S,x;for(g&&u.push(new pe(g,r,o,d,h)),e==null?e=1/0:(r=t-e,o=n-e,d=t+e,h=n+e,e*=e);S=u.pop();)if(!(!(g=S.node)||(a=S.x0)>d||(s=S.y0)>h||(c=S.x1)<r||(l=S.y1)<o))if(g.length){var y=(a+c)/2,_=(s+l)/2;u.push(new pe(g[3],y,_,c,l),new pe(g[2],a,_,y,l),new pe(g[1],y,s,c,_),new pe(g[0],a,s,y,_)),(x=(n>=_)<<1|t>=y)&&(S=u[u.length-1],u[u.length-1]=u[u.length-1-x],u[u.length-1-x]=S)}else{var R=t-+this._x.call(null,g.data),N=n-+this._y.call(null,g.data),v=R*R+N*N;if(v<e){var P=Math.sqrt(e=v);r=t-P,o=n-P,d=t+P,h=n+P,i=g.data}}return i}function gl(t){if(isNaN(d=+this._x.call(null,t))||isNaN(h=+this._y.call(null,t)))return this;var n,e=this._root,i,r,o,a=this._x0,s=this._y0,c=this._x1,l=this._y1,d,h,u,g,S,x,y,_;if(!e)return this;if(e.length)for(;;){if((S=d>=(u=(a+c)/2))?a=u:c=u,(x=h>=(g=(s+l)/2))?s=g:l=g,n=e,!(e=e[y=x<<1|S]))return this;if(!e.length)break;(n[y+1&3]||n[y+2&3]||n[y+3&3])&&(i=n,_=y)}for(;e.data!==t;)if(r=e,!(e=e.next))return this;return(o=e.next)&&delete e.next,r?(o?r.next=o:delete r.next,this):n?(o?n[y]=o:delete n[y],(e=n[0]||n[1]||n[2]||n[3])&&e===(n[3]||n[2]||n[1]||n[0])&&!e.length&&(i?i[_]=e:this._root=e),this):(this._root=o,this)}function _l(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function bl(){return this._root}function vl(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t}function yl(t){var n=[],e,i=this._root,r,o,a,s,c;for(i&&n.push(new pe(i,this._x0,this._y0,this._x1,this._y1));e=n.pop();)if(!t(i=e.node,o=e.x0,a=e.y0,s=e.x1,c=e.y1)&&i.length){var l=(o+s)/2,d=(a+c)/2;(r=i[3])&&n.push(new pe(r,l,d,s,c)),(r=i[2])&&n.push(new pe(r,o,d,l,c)),(r=i[1])&&n.push(new pe(r,l,a,s,d)),(r=i[0])&&n.push(new pe(r,o,a,l,d))}return this}function xl(t){var n=[],e=[],i;for(this._root&&n.push(new pe(this._root,this._x0,this._y0,this._x1,this._y1));i=n.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,c=i.x1,l=i.y1,d=(a+c)/2,h=(s+l)/2;(o=r[0])&&n.push(new pe(o,a,s,d,h)),(o=r[1])&&n.push(new pe(o,d,s,c,h)),(o=r[2])&&n.push(new pe(o,a,h,d,l)),(o=r[3])&&n.push(new pe(o,d,h,c,l))}e.push(i)}for(;i=e.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function kl(t){return t[0]}function Cl(t){return arguments.length?(this._x=t,this):this._x}function wl(t){return t[1]}function Ml(t){return arguments.length?(this._y=t,this):this._y}function Ut(t,n,e){var i=new Xr(n??kl,e??wl,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Xr(t,n,e,i,r,o){this._x=t,this._y=n,this._x0=e,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function Sl(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Te=Ut.prototype=Xr.prototype;Te.copy=function(){var t=new Xr(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,e,i;if(!n)return t;if(!n.length)return t._root=Sl(n),t;for(e=[{source:n,target:t._root=new Array(4)}];n=e.pop();)for(var r=0;r<4;++r)(i=n.source[r])&&(i.length?e.push({source:i,target:n.target[r]=new Array(4)}):n.target[r]=Sl(i));return t};Te.add=cl;Te.addAll=ul;Te.cover=ml;Te.data=hl;Te.extent=pl;Te.find=fl;Te.remove=gl;Te.removeAll=_l;Te.root=bl;Te.size=vl;Te.visit=yl;Te.visitAfter=xl;Te.x=Cl;Te.y=Ml;function nt(t){return function(){return t}}function Ye(t){return(t()-.5)*1e-6}function qu(t){return t.x+t.vx}function ju(t){return t.y+t.vy}function Wr(t){var n,e,i,r=1,o=1;typeof t!="function"&&(t=nt(t==null?1:+t));function a(){for(var l,d=n.length,h,u,g,S,x,y,_=0;_<o;++_)for(h=Ut(n,qu,ju).visitAfter(s),l=0;l<d;++l)u=n[l],x=e[u.index],y=x*x,g=u.x+u.vx,S=u.y+u.vy,h.visit(R);function R(N,v,P,A,U){var G=N.data,K=N.r,W=x+K;if(G){if(G.index>u.index){var te=g-G.x-G.vx,V=S-G.y-G.vy,oe=te*te+V*V;oe<W*W&&(te===0&&(te=Ye(i),oe+=te*te),V===0&&(V=Ye(i),oe+=V*V),oe=(W-(oe=Math.sqrt(oe)))/oe*r,u.vx+=(te*=oe)*(W=(K*=K)/(y+K)),u.vy+=(V*=oe)*W,G.vx-=te*(W=1-W),G.vy-=V*W)}return}return v>g+W||A<g-W||P>S+W||U<S-W}}function s(l){if(l.data)return l.r=e[l.data.index];for(var d=l.r=0;d<4;++d)l[d]&&l[d].r>l.r&&(l.r=l[d].r)}function c(){if(n){var l,d=n.length,h;for(e=new Array(d),l=0;l<d;++l)h=n[l],e[h.index]=+t(h,l,n)}}return a.initialize=function(l,d){n=l,i=d,c()},a.iterations=function(l){return arguments.length?(o=+l,a):o},a.strength=function(l){return arguments.length?(r=+l,a):r},a.radius=function(l){return arguments.length?(t=typeof l=="function"?l:nt(+l),c(),a):t},a}function Qu(t){return t.index}function Rl(t,n){var e=t.get(n);if(!e)throw new Error("node not found: "+n);return e}function qr(t){var n=Qu,e=h,i,r=nt(30),o,a,s,c,l,d=1;t==null&&(t=[]);function h(y){return 1/Math.min(s[y.source.index],s[y.target.index])}function u(y){for(var _=0,R=t.length;_<d;++_)for(var N=0,v,P,A,U,G,K,W;N<R;++N)v=t[N],P=v.source,A=v.target,U=A.x+A.vx-P.x-P.vx||Ye(l),G=A.y+A.vy-P.y-P.vy||Ye(l),K=Math.sqrt(U*U+G*G),K=(K-o[N])/K*y*i[N],U*=K,G*=K,A.vx-=U*(W=c[N]),A.vy-=G*W,P.vx+=U*(W=1-W),P.vy+=G*W}function g(){if(a){var y,_=a.length,R=t.length,N=new Map(a.map((P,A)=>[n(P,A,a),P])),v;for(y=0,s=new Array(_);y<R;++y)v=t[y],v.index=y,typeof v.source!="object"&&(v.source=Rl(N,v.source)),typeof v.target!="object"&&(v.target=Rl(N,v.target)),s[v.source.index]=(s[v.source.index]||0)+1,s[v.target.index]=(s[v.target.index]||0)+1;for(y=0,c=new Array(R);y<R;++y)v=t[y],c[y]=s[v.source.index]/(s[v.source.index]+s[v.target.index]);i=new Array(R),S(),o=new Array(R),x()}}function S(){if(a)for(var y=0,_=t.length;y<_;++y)i[y]=+e(t[y],y,t)}function x(){if(a)for(var y=0,_=t.length;y<_;++y)o[y]=+r(t[y],y,t)}return u.initialize=function(y,_){a=y,l=_,g()},u.links=function(y){return arguments.length?(t=y,g(),u):t},u.id=function(y){return arguments.length?(n=y,u):n},u.iterations=function(y){return arguments.length?(d=+y,u):d},u.strength=function(y){return arguments.length?(e=typeof y=="function"?y:nt(+y),S(),u):e},u.distance=function(y){return arguments.length?(r=typeof y=="function"?y:nt(+y),x(),u):r},u}function Ol(){let t=1;return()=>(t=(1664525*t+1013904223)%4294967296)/4294967296}function Tl(t){return t.x}function Dl(t){return t.y}var Yu=10,Ku=Math.PI*(3-Math.sqrt(5));function jr(t){var n,e=1,i=.001,r=1-Math.pow(i,1/300),o=0,a=.6,s=new Map,c=on(h),l=dt("tick","end"),d=Ol();t==null&&(t=[]);function h(){u(),l.call("tick",n),e<i&&(c.stop(),l.call("end",n))}function u(x){var y,_=t.length,R;x===void 0&&(x=1);for(var N=0;N<x;++N)for(e+=(o-e)*r,s.forEach(function(v){v(e)}),y=0;y<_;++y)R=t[y],R.fx==null?R.x+=R.vx*=a:(R.x=R.fx,R.vx=0),R.fy==null?R.y+=R.vy*=a:(R.y=R.fy,R.vy=0);return n}function g(){for(var x=0,y=t.length,_;x<y;++x){if(_=t[x],_.index=x,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),isNaN(_.x)||isNaN(_.y)){var R=Yu*Math.sqrt(.5+x),N=x*Ku;_.x=R*Math.cos(N),_.y=R*Math.sin(N)}(isNaN(_.vx)||isNaN(_.vy))&&(_.vx=_.vy=0)}}function S(x){return x.initialize&&x.initialize(t,d),x}return g(),n={tick:u,restart:function(){return c.restart(h),n},stop:function(){return c.stop(),n},nodes:function(x){return arguments.length?(t=x,g(),s.forEach(S),n):t},alpha:function(x){return arguments.length?(e=+x,n):e},alphaMin:function(x){return arguments.length?(i=+x,n):i},alphaDecay:function(x){return arguments.length?(r=+x,n):+r},alphaTarget:function(x){return arguments.length?(o=+x,n):o},velocityDecay:function(x){return arguments.length?(a=1-x,n):1-a},randomSource:function(x){return arguments.length?(d=x,s.forEach(S),n):d},force:function(x,y){return arguments.length>1?(y==null?s.delete(x):s.set(x,S(y)),n):s.get(x)},find:function(x,y,_){var R=0,N=t.length,v,P,A,U,G;for(_==null?_=1/0:_*=_,R=0;R<N;++R)U=t[R],v=x-U.x,P=y-U.y,A=v*v+P*P,A<_&&(G=U,_=A);return G},on:function(x,y){return arguments.length>1?(l.on(x,y),n):l.on(x)}}}function Qr(){var t,n,e,i,r=nt(-30),o,a=1,s=1/0,c=.81;function l(g){var S,x=t.length,y=Ut(t,Tl,Dl).visitAfter(h);for(i=g,S=0;S<x;++S)n=t[S],y.visit(u)}function d(){if(t){var g,S=t.length,x;for(o=new Array(S),g=0;g<S;++g)x=t[g],o[x.index]=+r(x,g,t)}}function h(g){var S=0,x,y,_=0,R,N,v;if(g.length){for(R=N=v=0;v<4;++v)(x=g[v])&&(y=Math.abs(x.value))&&(S+=x.value,_+=y,R+=y*x.x,N+=y*x.y);g.x=R/_,g.y=N/_}else{x=g,x.x=x.data.x,x.y=x.data.y;do S+=o[x.data.index];while(x=x.next)}g.value=S}function u(g,S,x,y){if(!g.value)return!0;var _=g.x-n.x,R=g.y-n.y,N=y-S,v=_*_+R*R;if(N*N/c<v)return v<s&&(_===0&&(_=Ye(e),v+=_*_),R===0&&(R=Ye(e),v+=R*R),v<a&&(v=Math.sqrt(a*v)),n.vx+=_*g.value*i/v,n.vy+=R*g.value*i/v),!0;if(g.length||v>=s)return;(g.data!==n||g.next)&&(_===0&&(_=Ye(e),v+=_*_),R===0&&(R=Ye(e),v+=R*R),v<a&&(v=Math.sqrt(a*v)));do g.data!==n&&(N=o[g.data.index]*i/v,n.vx+=_*N,n.vy+=R*N);while(g=g.next)}return l.initialize=function(g,S){t=g,e=S,d()},l.strength=function(g){return arguments.length?(r=typeof g=="function"?g:nt(+g),d(),l):r},l.distanceMin=function(g){return arguments.length?(a=g*g,l):Math.sqrt(a)},l.distanceMax=function(g){return arguments.length?(s=g*g,l):Math.sqrt(s)},l.theta=function(g){return arguments.length?(c=g*g,l):Math.sqrt(c)},l}function Il(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Gt(t,n){if(!isFinite(t)||t===0)return null;var e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"),i=t.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+t.slice(e+1)]}function it(t){return t=Gt(Math.abs(t)),t?t[1]:NaN}function El(t,n){return function(e,i){for(var r=e.length,o=[],a=0,s=t[0],c=0;r>0&&s>0&&(c+s+1>i&&(s=Math.max(1,i-c)),o.push(e.substring(r-=s,r+s)),!((c+=s+1)>i));)s=t[a=(a+1)%t.length];return o.reverse().join(n)}}function Pl(t){return function(n){return n.replace(/[0-9]/g,function(e){return t[+e]})}}var Zu=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function kt(t){if(!(n=Zu.exec(t)))throw new Error("invalid format: "+t);var n;return new Yi({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}kt.prototype=Yi.prototype;function Yi(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Yi.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Al(t){e:for(var n=t.length,e=1,i=-1,r;e<n;++e)switch(t[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+t[e])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var jn;function Nl(t,n){var e=Gt(t,n);if(!e)return jn=void 0,t.toPrecision(n);var i=e[0],r=e[1],o=r-(jn=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return o===a?i:o>a?i+new Array(o-a+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Gt(t,Math.max(0,n+o-1))[0]}function Yr(t,n){var e=Gt(t,n);if(!e)return t+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var Kr={"%":(t,n)=>(t*100).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Il,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>Yr(t*100,n),r:Yr,s:Nl,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Zr(t){return t}var Fl=Array.prototype.map,Vl=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Bl(t){var n=t.grouping===void 0||t.thousands===void 0?Zr:El(Fl.call(t.grouping,Number),t.thousands+""),e=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?Zr:Pl(Fl.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"\u2212":t.minus+"",c=t.nan===void 0?"NaN":t.nan+"";function l(h,u){h=kt(h);var g=h.fill,S=h.align,x=h.sign,y=h.symbol,_=h.zero,R=h.width,N=h.comma,v=h.precision,P=h.trim,A=h.type;A==="n"?(N=!0,A="g"):Kr[A]||(v===void 0&&(v=12),P=!0,A="g"),(_||g==="0"&&S==="=")&&(_=!0,g="0",S="=");var U=(u&&u.prefix!==void 0?u.prefix:"")+(y==="$"?e:y==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),G=(y==="$"?i:/[%p]/.test(A)?a:"")+(u&&u.suffix!==void 0?u.suffix:""),K=Kr[A],W=/[defgprs%]/.test(A);v=v===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function te(V){var oe=U,b=G,T,w,D;if(A==="c")b=K(V)+b,V="";else{V=+V;var B=V<0||1/V<0;if(V=isNaN(V)?c:K(Math.abs(V),v),P&&(V=Al(V)),B&&+V==0&&x!=="+"&&(B=!1),oe=(B?x==="("?x:s:x==="-"||x==="("?"":x)+oe,b=(A==="s"&&!isNaN(V)&&jn!==void 0?Vl[8+jn/3]:"")+b+(B&&x==="("?")":""),W){for(T=-1,w=V.length;++T<w;)if(D=V.charCodeAt(T),48>D||D>57){b=(D===46?r+V.slice(T+1):V.slice(T))+b,V=V.slice(0,T);break}}}N&&!_&&(V=n(V,1/0));var L=oe.length+V.length+b.length,F=L<R?new Array(R-L+1).join(g):"";switch(N&&_&&(V=n(F+V,F.length?R-b.length:1/0),F=""),S){case"<":V=oe+V+b+F;break;case"=":V=oe+F+V+b;break;case"^":V=F.slice(0,L=F.length>>1)+oe+V+b+F.slice(L);break;default:V=F+oe+V+b;break}return o(V)}return te.toString=function(){return h+""},te}function d(h,u){var g=Math.max(-8,Math.min(8,Math.floor(it(u)/3)))*3,S=Math.pow(10,-g),x=l((h=kt(h),h.type="f",h),{suffix:Vl[8+g/3]});return function(y){return x(S*y)}}return{format:l,formatPrefix:d}}var Ki,Zi,Ji;Jr({thousands:",",grouping:[3],currency:["$",""]});function Jr(t){return Ki=Bl(t),Zi=Ki.format,Ji=Ki.formatPrefix,Ki}function eo(t){return Math.max(0,-it(Math.abs(t)))}function to(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(it(n)/3)))*3-it(Math.abs(t)))}function no(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,it(n)-it(t))+1}function zl(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}function io(t){return function(){return t}}function ro(t){return+t}var Ll=[0,1];function sn(t){return t}function oo(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:io(isNaN(n)?NaN:.5)}function Ju(t,n){var e;return t>n&&(e=t,t=n,n=e),function(i){return Math.max(t,Math.min(n,i))}}function em(t,n,e){var i=t[0],r=t[1],o=n[0],a=n[1];return r<i?(i=oo(r,i),o=e(a,o)):(i=oo(i,r),o=e(o,a)),function(s){return o(i(s))}}function tm(t,n,e){var i=Math.min(t.length,n.length)-1,r=new Array(i),o=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)r[a]=oo(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(s){var c=Sr(t,s,1,i)-1;return o[c](r[c](s))}}function $l(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function nm(){var t=Ll,n=Ll,e=Lt,i,r,o,a=sn,s,c,l;function d(){var u=Math.min(t.length,n.length);return a!==sn&&(a=Ju(t[0],t[u-1])),s=u>2?tm:em,c=l=null,h}function h(u){return u==null||isNaN(u=+u)?o:(c||(c=s(t.map(i),n,e)))(i(a(u)))}return h.invert=function(u){return a(r((l||(l=s(n,t.map(i),ve)))(u)))},h.domain=function(u){return arguments.length?(t=Array.from(u,ro),d()):t.slice()},h.range=function(u){return arguments.length?(n=Array.from(u),d()):n.slice()},h.rangeRound=function(u){return n=Array.from(u),e=Br,d()},h.clamp=function(u){return arguments.length?(a=u?!0:sn,d()):a!==sn},h.interpolate=function(u){return arguments.length?(e=u,d()):e},h.unknown=function(u){return arguments.length?(o=u,h):o},function(u,g){return i=u,r=g,d()}}function ao(){return nm()(sn,sn)}function so(t,n,e,i){var r=Rr(t,n,e),o;switch(i=kt(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(t),Math.abs(n));return i.precision==null&&!isNaN(o=to(r,a))&&(i.precision=o),Ji(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=no(r,Math.max(Math.abs(t),Math.abs(n))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=eo(r))&&(i.precision=o-(i.type==="%")*2);break}}return Zi(i)}function im(t){var n=t.domain;return t.ticks=function(e){var i=n();return Ci(i[0],i[i.length-1],e??10)},t.tickFormat=function(e,i){var r=n();return so(r[0],r[r.length-1],e??10,i)},t.nice=function(e){e==null&&(e=10);var i=n(),r=0,o=i.length-1,a=i[r],s=i[o],c,l,d=10;for(s<a&&(l=a,a=s,s=l,l=r,r=o,o=l);d-- >0;){if(l=Mn(a,s,e),l===c)return i[r]=a,i[o]=s,n(i);if(l>0)a=Math.floor(a/l)*l,s=Math.ceil(s/l)*l;else if(l<0)a=Math.ceil(a*l)/l,s=Math.floor(s*l)/l;else break;c=l}return t},t}function Qn(){var t=ao();return t.copy=function(){return $l(t,Qn())},zl.apply(t,arguments),im(t)}var Yn=t=>()=>t;function lo(t,{sourceEvent:n,target:e,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Ke(t,n,e){this.k=t,this.x=n,this.y=e}Ke.prototype={constructor:Ke,scale:function(t){return t===1?this:new Ke(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new Ke(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ct=new Ke(1,0,0);co.prototype=Ke.prototype;function co(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Ct;return t.__zoom}function er(t){t.stopImmediatePropagation()}function ln(t){t.preventDefault(),t.stopImmediatePropagation()}function rm(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function om(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Ul(){return this.__zoom||Ct}function am(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function sm(){return navigator.maxTouchPoints||"ontouchstart"in this}function lm(t,n,e){var i=t.invertX(n[0][0])-e[0][0],r=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function uo(){var t=rm,n=om,e=lm,i=am,r=sm,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=Ur,l=dt("start","zoom","end"),d,h,u,g=500,S=150,x=0,y=10;function _(b){b.property("__zoom",Ul).on("wheel.zoom",G,{passive:!1}).on("mousedown.zoom",K).on("dblclick.zoom",W).filter(r).on("touchstart.zoom",te).on("touchmove.zoom",V).on("touchend.zoom touchcancel.zoom",oe).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}_.transform=function(b,T,w,D){var B=b.selection?b.selection():b;B.property("__zoom",Ul),b!==B?P(b,T,w,D):B.interrupt().each(function(){A(this,arguments).event(D).start().zoom(null,typeof T=="function"?T.apply(this,arguments):T).end()})},_.scaleBy=function(b,T,w,D){_.scaleTo(b,function(){var B=this.__zoom.k,L=typeof T=="function"?T.apply(this,arguments):T;return B*L},w,D)},_.scaleTo=function(b,T,w,D){_.transform(b,function(){var B=n.apply(this,arguments),L=this.__zoom,F=w==null?v(B):typeof w=="function"?w.apply(this,arguments):w,ee=L.invert(F),le=typeof T=="function"?T.apply(this,arguments):T;return e(N(R(L,le),F,ee),B,a)},w,D)},_.translateBy=function(b,T,w,D){_.transform(b,function(){return e(this.__zoom.translate(typeof T=="function"?T.apply(this,arguments):T,typeof w=="function"?w.apply(this,arguments):w),n.apply(this,arguments),a)},null,D)},_.translateTo=function(b,T,w,D,B){_.transform(b,function(){var L=n.apply(this,arguments),F=this.__zoom,ee=D==null?v(L):typeof D=="function"?D.apply(this,arguments):D;return e(Ct.translate(ee[0],ee[1]).scale(F.k).translate(typeof T=="function"?-T.apply(this,arguments):-T,typeof w=="function"?-w.apply(this,arguments):-w),L,a)},D,B)};function R(b,T){return T=Math.max(o[0],Math.min(o[1],T)),T===b.k?b:new Ke(T,b.x,b.y)}function N(b,T,w){var D=T[0]-w[0]*b.k,B=T[1]-w[1]*b.k;return D===b.x&&B===b.y?b:new Ke(b.k,D,B)}function v(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function P(b,T,w,D){b.on("start.zoom",function(){A(this,arguments).event(D).start()}).on("interrupt.zoom end.zoom",function(){A(this,arguments).event(D).end()}).tween("zoom",function(){var B=this,L=arguments,F=A(B,L).event(D),ee=n.apply(B,L),le=w==null?v(ee):typeof w=="function"?w.apply(B,L):w,Ze=Math.max(ee[1][0]-ee[0][0],ee[1][1]-ee[0][1]),fe=B.__zoom,Le=typeof T=="function"?T.apply(B,L):T,ot=c(fe.invert(le).concat(Ze/fe.k),Le.invert(le).concat(Ze/Le.k));return function($e){if($e===1)$e=Le;else{var at=ot($e),rr=Ze/at[2];$e=new Ke(rr,le[0]-at[0]*rr,le[1]-at[1]*rr)}F.zoom(null,$e)}})}function A(b,T,w){return!w&&b.__zooming||new U(b,T)}function U(b,T){this.that=b,this.args=T,this.active=0,this.sourceEvent=null,this.extent=n.apply(b,T),this.taps=0}U.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,T){return this.mouse&&b!=="mouse"&&(this.mouse[1]=T.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=T.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=T.invert(this.touch1[0])),this.that.__zoom=T,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var T=Re(this.that).datum();l.call(b,this.that,new lo(b,{sourceEvent:this.sourceEvent,target:_,type:b,transform:this.that.__zoom,dispatch:l}),T)}};function G(b,...T){if(!t.apply(this,arguments))return;var w=A(this,T).event(b),D=this.__zoom,B=Math.max(o[0],Math.min(o[1],D.k*Math.pow(2,i.apply(this,arguments)))),L=ze(b);if(w.wheel)(w.mouse[0][0]!==L[0]||w.mouse[0][1]!==L[1])&&(w.mouse[1]=D.invert(w.mouse[0]=L)),clearTimeout(w.wheel);else{if(D.k===B)return;w.mouse=[L,D.invert(L)],xt(this),w.start()}ln(b),w.wheel=setTimeout(F,S),w.zoom("mouse",e(N(R(D,B),w.mouse[0],w.mouse[1]),w.extent,a));function F(){w.wheel=null,w.end()}}function K(b,...T){if(u||!t.apply(this,arguments))return;var w=b.currentTarget,D=A(this,T,!0).event(b),B=Re(b.view).on("mousemove.zoom",le,!0).on("mouseup.zoom",Ze,!0),L=ze(b,w),F=b.clientX,ee=b.clientY;In(b.view),er(b),D.mouse=[L,this.__zoom.invert(L)],xt(this),D.start();function le(fe){if(ln(fe),!D.moved){var Le=fe.clientX-F,ot=fe.clientY-ee;D.moved=Le*Le+ot*ot>x}D.event(fe).zoom("mouse",e(N(D.that.__zoom,D.mouse[0]=ze(fe,w),D.mouse[1]),D.extent,a))}function Ze(fe){B.on("mousemove.zoom mouseup.zoom",null),En(fe.view,D.moved),ln(fe),D.event(fe).end()}}function W(b,...T){if(t.apply(this,arguments)){var w=this.__zoom,D=ze(b.changedTouches?b.changedTouches[0]:b,this),B=w.invert(D),L=w.k*(b.shiftKey?.5:2),F=e(N(R(w,L),D,B),n.apply(this,T),a);ln(b),s>0?Re(this).transition().duration(s).call(P,F,D,b):Re(this).call(_.transform,F,D,b)}}function te(b,...T){if(t.apply(this,arguments)){var w=b.touches,D=w.length,B=A(this,T,b.changedTouches.length===D).event(b),L,F,ee,le;for(er(b),F=0;F<D;++F)ee=w[F],le=ze(ee,this),le=[le,this.__zoom.invert(le),ee.identifier],B.touch0?!B.touch1&&B.touch0[2]!==le[2]&&(B.touch1=le,B.taps=0):(B.touch0=le,L=!0,B.taps=1+!!d);d&&(d=clearTimeout(d)),L&&(B.taps<2&&(h=le[0],d=setTimeout(function(){d=null},g)),xt(this),B.start())}}function V(b,...T){if(this.__zooming){var w=A(this,T).event(b),D=b.changedTouches,B=D.length,L,F,ee,le;for(ln(b),L=0;L<B;++L)F=D[L],ee=ze(F,this),w.touch0&&w.touch0[2]===F.identifier?w.touch0[0]=ee:w.touch1&&w.touch1[2]===F.identifier&&(w.touch1[0]=ee);if(F=w.that.__zoom,w.touch1){var Ze=w.touch0[0],fe=w.touch0[1],Le=w.touch1[0],ot=w.touch1[1],$e=($e=Le[0]-Ze[0])*$e+($e=Le[1]-Ze[1])*$e,at=(at=ot[0]-fe[0])*at+(at=ot[1]-fe[1])*at;F=R(F,Math.sqrt($e/at)),ee=[(Ze[0]+Le[0])/2,(Ze[1]+Le[1])/2],le=[(fe[0]+ot[0])/2,(fe[1]+ot[1])/2]}else if(w.touch0)ee=w.touch0[0],le=w.touch0[1];else return;w.zoom("touch",e(N(F,ee,le),w.extent,a))}}function oe(b,...T){if(this.__zooming){var w=A(this,T).event(b),D=b.changedTouches,B=D.length,L,F;for(er(b),u&&clearTimeout(u),u=setTimeout(function(){u=null},g),L=0;L<B;++L)F=D[L],w.touch0&&w.touch0[2]===F.identifier?delete w.touch0:w.touch1&&w.touch1[2]===F.identifier&&delete w.touch1;if(w.touch1&&!w.touch0&&(w.touch0=w.touch1,delete w.touch1),w.touch0)w.touch0[1]=this.__zoom.invert(w.touch0[0]);else if(w.end(),w.taps===2&&(F=ze(F,this),Math.hypot(h[0]-F[0],h[1]-F[1])<y)){var ee=Re(this).on("dblclick.zoom");ee&&ee.apply(this,arguments)}}}return _.wheelDelta=function(b){return arguments.length?(i=typeof b=="function"?b:Yn(+b),_):i},_.filter=function(b){return arguments.length?(t=typeof b=="function"?b:Yn(!!b),_):t},_.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:Yn(!!b),_):r},_.extent=function(b){return arguments.length?(n=typeof b=="function"?b:Yn([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),_):n},_.scaleExtent=function(b){return arguments.length?(o[0]=+b[0],o[1]=+b[1],_):[o[0],o[1]]},_.translateExtent=function(b){return arguments.length?(a[0][0]=+b[0][0],a[1][0]=+b[1][0],a[0][1]=+b[0][1],a[1][1]=+b[1][1],_):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},_.constrain=function(b){return arguments.length?(e=b,_):e},_.duration=function(b){return arguments.length?(s=+b,_):s},_.interpolate=function(b){return arguments.length?(c=b,_):c},_.on=function(){var b=l.on.apply(l,arguments);return b===l?_:b},_.clickDistance=function(b){return arguments.length?(x=(b=+b)*b,_):Math.sqrt(x)},_.tapDistance=function(b){return arguments.length?(y=+b,_):y},_}var rt={client:"#174A7C",service:"#16877A",employee:"#6D5BD0",relationshipOwner:"#C28A17",opportunity:"#2E8F55",valueSignal:"#D94A38",currentLink:"#7F93AD",whiteSpaceLink:"#2E8F55",nextBestConnection:"#C28A17",muted:"#CBD5E1"},Gl={nodes:[{id:"client-pacific-transit-authority",label:"Pacific Transit Authority",type:"client",strategicValue:"high",value:18e5,description:"High-trust transit client with strong adjacent analytics opportunity."},{id:"client-metro-water-district",label:"Metro Water District",type:"client",strategicValue:"high",value:15e5,description:"Multi-service public utility client with modernization demand."},{id:"client-coastal-energy-corp",label:"Coastal Energy Corp.",type:"client",strategicValue:"medium",value:95e4,description:"Existing advisory client with strong compliance footprint."},{id:"client-city-of-riverside",label:"City of Riverside",type:"client",strategicValue:"medium",value:72e4,description:"Municipal client with public-facing delivery and engagement needs."},{id:"client-north-county-schools",label:"North County Schools",type:"client",strategicValue:"low",value:42e4,description:"Emerging district relationship with selective service usage."},{id:"service-environmental-consulting",label:"Environmental Consulting",type:"service",description:"Environmental analysis, planning, and remediation support."},{id:"service-survey-mapping",label:"Survey & Mapping",type:"service",description:"Spatial survey and mapping delivery capability."},{id:"service-permitting-compliance",label:"Permitting & Compliance",type:"service",description:"Regulatory navigation and compliance execution."},{id:"service-gis-migration",label:"GIS Migration",type:"service",description:"GIS platform modernization and migration delivery."},{id:"service-asset-lifecycle-analytics",label:"Asset Lifecycle Analytics",type:"service",description:"Asset intelligence, condition modeling, and capital planning analytics."},{id:"service-public-engagement-support",label:"Public Engagement Support",type:"service",description:"Stakeholder and public engagement delivery support."},{id:"owner-sarah-chen",label:"Sarah Chen",type:"relationshipOwner",description:"Primary relationship owner across key infrastructure accounts."},{id:"employee-marcus-lee",label:"Marcus Lee",type:"employee",description:"GIS practice lead and modernization specialist."},{id:"employee-priya-nair",label:"Priya Nair",type:"employee",description:"Asset analytics lead focused on capital planning and lifecycle intelligence."},{id:"employee-david-brooks",label:"David Brooks",type:"employee",description:"Public engagement lead with municipal delivery experience."},{id:"employee-elena-torres",label:"Elena Torres",type:"employee",description:"Environmental consultant with strong public sector proof points."},{id:"opportunity-pacific-asset-analytics",label:"Asset lifecycle analytics for Pacific Transit Authority",type:"opportunity",value:65e4,strategicValue:"high",description:"Convert existing trust into a transit asset analytics expansion path.",proofPoint:"Priya Nair led a similar lifecycle analytics rollout for a regional transit operator last year.",recommendedConnection:"Sarah Chen should introduce Priya Nair during the next quarterly operating review.",targetServiceId:"service-asset-lifecycle-analytics",clientId:"client-pacific-transit-authority"},{id:"opportunity-metro-gis-modernization",label:"GIS modernization for Metro Water District",type:"opportunity",value:54e4,strategicValue:"high",description:"Modernize fragmented GIS assets and workflows for Metro Water District.",proofPoint:"Marcus Lee recently completed a comparable GIS migration for a neighboring utility district.",recommendedConnection:"Sarah Chen should route Marcus Lee into a discovery session with Metro Water District operations.",targetServiceId:"service-gis-migration",clientId:"client-metro-water-district"},{id:"opportunity-riverside-public-engagement",label:"Public engagement support for City of Riverside",type:"opportunity",value:28e4,strategicValue:"medium",description:"Add public engagement support to Riverside delivery programs.",proofPoint:"David Brooks supported a similar municipal outreach program tied to capital works planning.",recommendedConnection:"Sarah Chen should position David Brooks as the next-best connector for the city program team.",targetServiceId:"service-public-engagement-support",clientId:"client-city-of-riverside"}],links:[{source:"client-pacific-transit-authority",target:"service-environmental-consulting",type:"current-service",value:95e4},{source:"client-pacific-transit-authority",target:"service-survey-mapping",type:"current-service",value:85e4},{source:"client-metro-water-district",target:"service-survey-mapping",type:"current-service",value:78e4},{source:"client-metro-water-district",target:"service-permitting-compliance",type:"current-service",value:72e4},{source:"client-city-of-riverside",target:"service-environmental-consulting",type:"current-service",value:52e4},{source:"client-coastal-energy-corp",target:"service-permitting-compliance",type:"current-service",value:61e4},{source:"client-north-county-schools",target:"service-public-engagement-support",type:"current-service",value:22e4},{source:"owner-sarah-chen",target:"client-pacific-transit-authority",type:"owns-relationship",strength:.9},{source:"owner-sarah-chen",target:"client-metro-water-district",type:"owns-relationship",strength:.85},{source:"owner-sarah-chen",target:"client-city-of-riverside",type:"owns-relationship",strength:.7},{source:"employee-elena-torres",target:"service-environmental-consulting",type:"delivers-service",strength:.8},{source:"employee-marcus-lee",target:"service-gis-migration",type:"delivers-service",strength:.85},{source:"employee-priya-nair",target:"service-asset-lifecycle-analytics",type:"delivers-service",strength:.88},{source:"employee-david-brooks",target:"service-public-engagement-support",type:"delivers-service",strength:.8},{source:"opportunity-pacific-asset-analytics",target:"client-pacific-transit-authority",type:"white-space-opportunity",value:65e4,opportunityScore:"high"},{source:"opportunity-pacific-asset-analytics",target:"service-asset-lifecycle-analytics",type:"white-space-opportunity",value:65e4,opportunityScore:"high"},{source:"employee-priya-nair",target:"opportunity-pacific-asset-analytics",type:"next-best-connection",value:65e4},{source:"opportunity-metro-gis-modernization",target:"client-metro-water-district",type:"white-space-opportunity",value:54e4,opportunityScore:"high"},{source:"opportunity-metro-gis-modernization",target:"service-gis-migration",type:"white-space-opportunity",value:54e4,opportunityScore:"high"},{source:"employee-marcus-lee",target:"opportunity-metro-gis-modernization",type:"next-best-connection",value:54e4},{source:"opportunity-riverside-public-engagement",target:"client-city-of-riverside",type:"white-space-opportunity",value:28e4,opportunityScore:"medium"},{source:"opportunity-riverside-public-engagement",target:"service-public-engagement-support",type:"white-space-opportunity",value:28e4,opportunityScore:"medium"},{source:"employee-david-brooks",target:"opportunity-riverside-public-engagement",type:"next-best-connection",value:28e4}]};var dm=["svgHost"],um=["graphSurface"],mm=(t,n)=>n.key,hm=(t,n)=>n.label;function pm(t,n){if(t&1&&(m(0,"mat-button-toggle",12),k(1),f()),t&2){let e=n.$implicit;$("value",e.key),p(),O(e.label)}}function fm(t,n){if(t&1&&(m(0,"div",14),H(1,"span",29),m(2,"span"),k(3),f()()),t&2){let e=n.$implicit;p(),Xe("legend-swatch legend-swatch--"+e.className),p(2),O(e.label)}}function gm(t,n){if(t&1&&(m(0,"div",30)(1,"strong"),k(2),f(),m(3,"span"),k(4),f()()),t&2){let e=n;Be("left",e.x,"px")("top",e.y,"px"),p(2),O(e.label),p(2),O(e.detail)}}function _m(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function bm(t,n){if(t&1&&(m(0,"section",31)(1,"h5"),k(2,"Context"),f(),m(3,"ul"),Z(4,_m,2,1,"li",null,_e),f()()),t&2){let e=M();p(4),J(e.contextItems)}}function vm(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function ym(t,n){if(t&1&&(m(0,"section",31)(1,"h5"),k(2,"Current state"),f(),m(3,"ul"),Z(4,vm,2,1,"li",null,_e),f()()),t&2){let e=M();p(4),J(e.currentStateItems)}}function xm(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function km(t,n){if(t&1&&(m(0,"section",31)(1,"h5"),k(2,"Opportunity"),f(),m(3,"ul"),Z(4,xm,2,1,"li",null,_e),f()()),t&2){let e=M();p(4),J(e.opportunityItems)}}function Cm(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function wm(t,n){if(t&1&&(m(0,"section",31)(1,"h5"),k(2,"Next action"),f(),m(3,"ul"),Z(4,Cm,2,1,"li",null,_e),f()()),t&2){let e=M();p(4),J(e.nextActionItems)}}function Mm(t,n){if(t&1&&(m(0,"div",27)(1,"section",31)(2,"h4"),k(3),f(),m(4,"p",32),k(5),f(),m(6,"p"),k(7),f()(),I(8,bm,6,0,"section",31),I(9,ym,6,0,"section",31),I(10,km,6,0,"section",31),I(11,wm,6,0,"section",31),f()),t&2){let e=n;p(3),O(e.title),p(2),O(e.typeLabel),p(2),O(e.summary),p(),E(e.contextItems.length?8:-1),p(),E(e.currentStateItems.length?9:-1),p(),E(e.opportunityItems.length?10:-1),p(),E(e.nextActionItems.length?11:-1)}}function Sm(t,n){t&1&&(m(0,"div",28)(1,"p"),k(2,"Select a client, service, person, or opportunity."),f(),m(3,"ul")(4,"li"),k(5,"Clients reveal current services, owners, and white-space paths."),f(),m(6,"li"),k(7,"Services reveal connected clients and delivery expertise."),f(),m(8,"li"),k(9,"People reveal delivery capability and relationship gaps."),f(),m(10,"li"),k(11,"Opportunities reveal proof point, connector, and next action."),f()()())}var tr=class t{title=Se("Relationship-Value Explorer");description=Se("Explore how client relationships, delivered services, employee expertise, and white-space opportunities connect into an actionable revenue intelligence graph.");destroyRef=C(pn);hostRef=C(ae);svgRef=dr.required("svgHost");graphSurfaceRef=dr.required("graphSurface");data=this.cloneGraphData(Gl);nodeMap=new Map(this.data.nodes.map(n=>[n.id,n]));resizeObserver;svg;graphGroup;linksLayer;nodesLayer;labelsLayer;simulation;linkSelection;nodeSelection;labelSelection;zoomBehavior;currentTransform=Ct;initialFitComplete=!1;dimensions=ce({width:920,height:620});activeFilter=ce("all");selectedNodeId=ce(null);tooltip=ce(null);legendItems=[{label:"Client",className:"client"},{label:"Service",className:"service"},{label:"Employee",className:"employee"},{label:"Relationship owner",className:"relationship-owner"},{label:"Opportunity",className:"opportunity"},{label:"Solid = current",className:"current-link"},{label:"Dotted = white space",className:"opportunity-link"},{label:"Thick = higher value",className:"value-link"}];filters=[{key:"all",label:"All"},{key:"clients",label:"Clients"},{key:"services",label:"Services"},{key:"people",label:"People"},{key:"opportunities",label:"Opportunities"}];selectedInsight=Y(()=>this.buildInsight());constructor(){ft(()=>{this.initializeGraph(),this.observeGraphSurface()}),fn(()=>{this.activeFilter(),this.selectedNodeId(),this.applySelectionState()}),this.destroyRef.onDestroy(()=>{this.simulation?.stop(),this.resizeObserver?.disconnect()})}resetSelection(){this.selectedNodeId.set(null),this.activeFilter.set("all"),this.applySelectionState()}setFilter(n){this.activeFilter.set(n)}onFilterChange(n){let e=n.value;e&&this.setFilter(e)}zoomIn(){!this.svg||!this.zoomBehavior||this.svg.transition().duration(180).call(this.zoomBehavior.scaleBy,1.15)}zoomOut(){!this.svg||!this.zoomBehavior||this.svg.transition().duration(180).call(this.zoomBehavior.scaleBy,1/1.15)}fitGraphToView(n=!0){if(!this.svg||!this.zoomBehavior||!this.graphGroup)return;let e=this.data.nodes.filter(_=>typeof _.x=="number"&&typeof _.y=="number");if(!e.length)return;let i=Rn(e,_=>_.x)??0,r=Sn(e,_=>_.x)??0,o=Rn(e,_=>_.y)??0,a=Sn(e,_=>_.y)??0,s=this.dimensions().width,c=this.dimensions().height,l=Math.max(r-i,1),d=Math.max(a-o,1),h=72,u=Math.max(.5,Math.min(1.75,Math.min((s-h*2)/l,(c-h*2)/d))),g=s/2-u*(i+l/2),S=c/2-u*(o+d/2),x=Ct.translate(g,S).scale(u);(n?this.svg.transition().duration(220):this.svg).call(this.zoomBehavior.transform,x)}cloneGraphData(n){return{nodes:n.nodes.map(e=>wt({},e)),links:n.links.map(e=>wt({},e))}}initializeGraph(){let n=this.svgRef().nativeElement;this.svg=Re(n),this.svg.selectAll("*").remove(),this.svg.on("click",e=>{e.target===n&&this.selectedNodeId.set(null)}),this.graphGroup=this.svg.append("g").attr("class","graph-root"),this.linksLayer=this.graphGroup.append("g").attr("class","links-layer"),this.nodesLayer=this.graphGroup.append("g").attr("class","nodes-layer"),this.labelsLayer=this.graphGroup.append("g").attr("class","labels-layer"),this.setupZoomBehavior(),this.linkSelection=this.linksLayer.selectAll("line").data(this.data.links).join("line").attr("stroke-linecap","round").attr("stroke",e=>this.linkColor(e)).attr("stroke-width",e=>this.linkWidth(e)).attr("stroke-dasharray",e=>this.linkDashArray(e)).attr("opacity",.72),this.nodeSelection=this.nodesLayer.selectAll("circle").data(this.data.nodes).join("circle").attr("r",e=>this.nodeRadius(e)).attr("fill",e=>this.nodeColor(e)).attr("stroke","#ffffff").attr("stroke-width",2).style("cursor","pointer").call(Er().on("start",(e,i)=>this.onDragStart(e,i)).on("drag",(e,i)=>this.onDrag(e,i)).on("end",(e,i)=>this.onDragEnd(e,i))).on("click",(e,i)=>{e.stopPropagation(),this.selectedNodeId.set(i.id)}).on("mouseenter",(e,i)=>this.updateTooltip(e,i)).on("mousemove",(e,i)=>this.updateTooltip(e,i)).on("mouseleave",()=>this.tooltip.set(null)),this.labelSelection=this.labelsLayer.selectAll("text").data(this.data.nodes).join("text").text(e=>this.shortLabel(e.label)).attr("font-size",12).attr("font-weight",700).attr("fill","var(--relationship-label-fill)").attr("paint-order","stroke").attr("stroke","var(--relationship-label-stroke)").attr("stroke-width",4).attr("stroke-linejoin","round").attr("pointer-events","none"),this.simulation=jr(this.data.nodes).force("link",qr(this.data.links).id(e=>e.id).distance(e=>this.linkDistance(e)).strength(e=>e.strength??.55)).force("charge",Qr().strength(-380)).force("center",Qi(this.dimensions().width/2,this.dimensions().height/2)).force("collision",Wr().radius(e=>this.nodeRadius(e)+24)).on("tick",()=>this.onTick()),this.updateDimensions(),this.applySelectionState(),setTimeout(()=>{this.initialFitComplete||(this.fitGraphToView(!1),this.initialFitComplete=!0)},140)}setupZoomBehavior(){if(!this.svg||!this.graphGroup)return;let n=this.svgRef().nativeElement;this.zoomBehavior=uo().scaleExtent([.5,2.5]).filter(e=>{if(e.type==="dblclick")return!1;if(e.type==="wheel"){let i=e;return i.ctrlKey||i.metaKey}return e.type==="mousedown"?e.target===n:!0}).on("zoom",e=>{this.currentTransform=e.transform,this.graphGroup?.attr("transform",e.transform.toString())}),this.svg.call(this.zoomBehavior).on("dblclick.zoom",null)}observeGraphSurface(){let n=this.graphSurfaceRef().nativeElement,e=new ResizeObserver(()=>this.updateDimensions());e.observe(n),this.resizeObserver=e}updateDimensions(){let n=this.graphSurfaceRef().nativeElement,e=Math.max(320,n.clientWidth||920),i=Math.max(420,n.clientHeight||Math.min(720,Math.round(e*.62)));this.dimensions.set({width:e,height:i}),this.svg?.attr("viewBox",`0 0 ${e} ${i}`).attr("width",e).attr("height",i),this.simulation?.force("center",Qi(e/2,i/2)).alpha(.3).restart()}onTick(){this.linkSelection?.attr("x1",n=>n.source.x??0).attr("y1",n=>n.source.y??0).attr("x2",n=>n.target.x??0).attr("y2",n=>n.target.y??0),this.nodeSelection?.attr("cx",n=>n.x??0).attr("cy",n=>n.y??0),this.labelSelection?.attr("x",n=>(n.x??0)+this.nodeRadius(n)+8).attr("y",n=>(n.y??0)+4)}onDragStart(n,e){n.active||this.simulation?.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}onDrag(n,e){e.fx=n.x,e.fy=n.y}onDragEnd(n,e){n.active||this.simulation?.alphaTarget(0),e.fx=null,e.fy=null}updateTooltip(n,e){let r=this.graphSurfaceRef().nativeElement.getBoundingClientRect();this.tooltip.set({x:n.clientX-r.left,y:n.clientY-r.top,label:e.label,detail:this.typeLabel(e.type)})}applySelectionState(){let n=this.selectedNodeId(),e=n?this.connectedNodeIds(n):new Set;this.nodeSelection?.attr("opacity",i=>this.nodeOpacity(i,n,e)).attr("stroke-width",i=>n===i.id?4:2).attr("stroke",i=>n===i.id?"var(--cw-accent)":"var(--relationship-node-ring)"),this.labelSelection?.attr("opacity",i=>this.nodeOpacity(i,n,e)),this.linkSelection?.attr("opacity",i=>this.linkOpacity(i,n)).attr("stroke-width",i=>this.selectedLinkWidth(i,n))}nodeOpacity(n,e,i){return this.matchesFilter(n)?e?e===n.id||i.has(n.id)?1:.24:1:.12}linkOpacity(n,e){let i=this.linkNodeId(n.source),r=this.linkNodeId(n.target),o=this.nodeMap.get(i),a=this.nodeMap.get(r);return!o||!a||!this.matchesFilter(o)||!this.matchesFilter(a)?.1:e?i===e||r===e?.95:.14:.72}selectedLinkWidth(n,e){let i=this.linkWidth(n);if(!e)return i;let r=this.linkNodeId(n.source),o=this.linkNodeId(n.target);return r===e||o===e?i+1.4:i}connectedNodeIds(n){let e=new Set;for(let i of this.data.links){let r=this.linkNodeId(i.source),o=this.linkNodeId(i.target);r===n&&e.add(o),o===n&&e.add(r)}return e}linkNodeId(n){return typeof n=="string"?n:n.id}matchesFilter(n){switch(this.activeFilter()){case"clients":return n.type==="client";case"services":return n.type==="service";case"people":return n.type==="employee"||n.type==="relationshipOwner";case"opportunities":return n.type==="opportunity";default:return!0}}nodeRadius(n){switch(n.type){case"client":return 20;case"service":return 16;case"relationshipOwner":return 18;case"opportunity":return 18;default:return 14}}nodeColor(n){switch(n.type){case"client":return this.cssColor("--relationship-client",rt.client);case"service":return this.cssColor("--relationship-service",rt.service);case"employee":return this.cssColor("--relationship-employee",rt.employee);case"relationshipOwner":return this.cssColor("--relationship-owner",rt.relationshipOwner);case"opportunity":return this.cssColor("--relationship-opportunity",rt.opportunity)}}linkColor(n){switch(n.type){case"white-space-opportunity":return this.cssColor("--relationship-white-space-link",rt.whiteSpaceLink);case"next-best-connection":case"owns-relationship":return this.cssColor("--relationship-next-best",rt.nextBestConnection);case"delivers-service":return this.cssColor("--relationship-employee",rt.employee);default:return this.cssColor("--relationship-current-link",rt.currentLink)}}linkDashArray(n){switch(n.type){case"white-space-opportunity":return"7 7";case"next-best-connection":return"4 6";default:return null}}linkWidth(n){return Qn().domain([0,18e5]).range([1.5,6]).clamp(!0)(n.value??22e4)}linkDistance(n){switch(n.type){case"owns-relationship":return 126;case"delivers-service":return 96;case"next-best-connection":return 92;case"white-space-opportunity":return 112;default:return 108}}shortLabel(n){return n.length>28?`${n.slice(0,26)}\u2026`:n}typeLabel(n){switch(n){case"client":return"Client";case"service":return"Service";case"employee":return"Employee";case"relationshipOwner":return"Relationship owner";case"opportunity":return"Opportunity"}}buildInsight(){let n=this.selectedNodeId();if(!n)return null;let e=this.nodeMap.get(n);if(!e)return null;if(e.type==="client"){let i=this.connectedNodesByType(n,"service","current-service").map(s=>s.label),r=this.connectedNodesByType(n,"opportunity","white-space-opportunity"),o=this.connectedNodesByType(n,"relationshipOwner","owns-relationship")[0],a=r[0];return{title:e.label,typeLabel:"Selected client",summary:e.description??"Client selected.",contextItems:[this.strategicValueLabel(e),o?`Relationship owner: ${o.label}`:""].filter(Boolean),currentStateItems:[...i.map(s=>`Current service: ${s}`),e.value?`Current portfolio value: ${this.formatCurrency(e.value)}`:""].filter(Boolean),opportunityItems:[...r.map(s=>`White-space opportunity: ${s.label}`),r.length?`Estimated potential value: ${this.formatCurrency(r.reduce((s,c)=>s+(c.value??0),0))}`:""].filter(Boolean),nextActionItems:[a?.recommendedConnection?`Next-best connection: ${a.recommendedConnection}`:"",a?.proofPoint?`Proof point: ${a.proofPoint}`:""].filter(Boolean)}}if(e.type==="service"){let i=this.connectedNodesByType(n,"client","current-service").map(a=>a.label),r=this.connectedNodesByType(n,"employee","delivers-service").map(a=>a.label),o=this.opportunitiesForService(n);return{title:e.label,typeLabel:"Selected service",summary:e.description??"Service selected.",contextItems:r.map(a=>`Delivery expert: ${a}`),currentStateItems:i.map(a=>`Currently serving: ${a}`),opportunityItems:o.map(a=>`Adjacent client path: ${a.label}`),nextActionItems:o[0]?.recommendedConnection?[`Next action: ${o[0].recommendedConnection}`]:[]}}if(e.type==="employee"){let i=this.connectedNodesByType(n,"service","delivers-service").map(o=>o.label),r=this.opportunitiesForEmployee(n);return{title:e.label,typeLabel:"Selected employee",summary:e.description??"Employee selected.",contextItems:i.map(o=>`Expertise: ${o}`),currentStateItems:r.length?[`Connected opportunity paths: ${r.map(o=>o.label).join(" \xB7 ")}`]:[],opportunityItems:r.map(o=>`Could support: ${o.label}`),nextActionItems:r[0]?.recommendedConnection?[`Recommended introduction: ${r[0].recommendedConnection}`]:[]}}if(e.type==="relationshipOwner"){let i=this.connectedNodesByType(n,"client","owns-relationship"),r=i.flatMap(o=>this.connectedNodesByType(o.id,"opportunity","white-space-opportunity"));return{title:e.label,typeLabel:"Relationship owner",summary:e.description??"Relationship owner selected.",contextItems:i.map(o=>`Owns relationship: ${o.label}`),currentStateItems:i.length?[`Managed portfolio value: ${this.formatCurrency(i.reduce((o,a)=>o+(a.value??0),0))}`]:[],opportunityItems:r.map(o=>`Open path: ${o.label}`),nextActionItems:r[0]?.recommendedConnection?[`Recommended connection: ${r[0].recommendedConnection}`]:[]}}if(e.type==="opportunity"){let i=e.clientId?this.nodeMap.get(e.clientId):void 0,r=e.targetServiceId?this.nodeMap.get(e.targetServiceId):void 0,o=i?this.connectedNodesByType(i.id,"relationshipOwner","owns-relationship")[0]:void 0;return{title:e.label,typeLabel:"Selected opportunity",summary:e.description??"Opportunity selected.",contextItems:[i?`Client: ${i.label}`:"",r?`Target service: ${r.label}`:""].filter(Boolean),currentStateItems:[o?`Relationship owner: ${o.label}`:"",e.value?`Estimated potential value: ${this.formatCurrency(e.value)}`:""].filter(Boolean),opportunityItems:[this.strategicValueLabel(e),e.proofPoint?`Proof point: ${e.proofPoint}`:""].filter(Boolean),nextActionItems:e.recommendedConnection?[`Suggested next action: ${e.recommendedConnection}`]:[]}}return{title:e.label,typeLabel:`Selected ${this.typeLabel(e.type).toLowerCase()}`,summary:e.description??`${this.typeLabel(e.type)} selected.`,contextItems:[],currentStateItems:[],opportunityItems:[],nextActionItems:[]}}connectedNodesByType(n,e,i){let r=[];for(let o of this.data.links){if(i&&o.type!==i)continue;let a=this.linkNodeId(o.source),s=this.linkNodeId(o.target),c=a===n?s:s===n?a:null;if(!c)continue;let l=this.nodeMap.get(c);l?.type===e&&r.push(l)}return r}opportunitiesForService(n){return this.data.nodes.filter(e=>e.type==="opportunity"&&e.targetServiceId===n)}opportunitiesForEmployee(n){let e=this.connectedNodesByType(n,"service","delivers-service").map(i=>i.id);return this.data.nodes.filter(i=>i.type==="opportunity"&&!!i.targetServiceId&&e.includes(i.targetServiceId))}strategicValueLabel(n){return n.strategicValue?`Strategic value: ${n.strategicValue}`:""}formatCurrency(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n)}cssColor(n,e){return getComputedStyle(this.hostRef.nativeElement).getPropertyValue(n).trim()||e}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Q({type:t,selectors:[["app-relationship-value-explorer"]],viewQuery:function(e,i){e&1&&Mo(i.svgRef,dm,5)(i.graphSurfaceRef,um,5),e&2&&So(2)},inputs:{title:[1,"title"],description:[1,"description"]},decls:52,vars:5,consts:[["graphSurface",""],["svgHost",""],[1,"relationship-explorer"],[1,"relationship-explorer__header"],[1,"relationship-explorer__copy"],[1,"relationship-explorer__eyebrow"],[1,"relationship-explorer__title"],[1,"relationship-explorer__subtitle"],[1,"relationship-explorer__actions"],["mat-stroked-button","","type","button",3,"click"],[1,"relationship-explorer__controls"],["aria-label","Filter graph entities",1,"relationship-explorer__filters",3,"change","value"],[3,"value"],["aria-label","Graph legend",1,"relationship-explorer__legend"],[1,"legend-item"],[1,"relationship-explorer__hint"],[1,"relationship-explorer__body"],[1,"graph-card"],[1,"graph-canvas"],["aria-label","Graph controls",1,"graph-canvas__controls"],["mat-icon-button","","type","button","aria-label","Zoom in",3,"click"],["mat-icon-button","","type","button","aria-label","Zoom out",3,"click"],["mat-icon-button","","type","button","aria-label","Fit graph",3,"click"],["mat-icon-button","","type","button","aria-label","Reset selection",3,"click"],["aria-label","Relationship value explorer graph",1,"graph-svg"],[1,"graph-tooltip",3,"left","top"],[1,"insight-card"],[1,"insight-stack"],[1,"insight-empty"],[1,"legend-swatch"],[1,"graph-tooltip"],[1,"insight-block"],[1,"insight-type"]],template:function(e,i){if(e&1&&(m(0,"section",2)(1,"header",3)(2,"div",4)(3,"p",5),k(4,"Interactive artifact"),f(),m(5,"h3",6),k(6),f(),m(7,"p",7),k(8),f()(),m(9,"div",8)(10,"button",9),q("click",function(){return i.resetSelection()}),m(11,"mat-icon"),k(12,"restart_alt"),f(),k(13," Reset "),f(),m(14,"button",9),q("click",function(){return i.fitGraphToView()}),m(15,"mat-icon"),k(16,"center_focus_strong"),f(),k(17," Fit graph "),f()()(),m(18,"div",10)(19,"mat-button-toggle-group",11),q("change",function(o){return i.onFilterChange(o)}),Z(20,pm,2,2,"mat-button-toggle",12,mm),f(),m(22,"div",13),Z(23,fm,4,3,"div",14,hm),f()(),m(25,"div",15),k(26," Scroll page normally. Hold Ctrl/\u2318 + scroll to zoom the map. "),f(),m(27,"div",16)(28,"section",17)(29,"div",18,0)(31,"div",19)(32,"button",20),q("click",function(){return i.zoomIn()}),m(33,"mat-icon"),k(34,"add"),f()(),m(35,"button",21),q("click",function(){return i.zoomOut()}),m(36,"mat-icon"),k(37,"remove"),f()(),m(38,"button",22),q("click",function(){return i.fitGraphToView()}),m(39,"mat-icon"),k(40,"center_focus_strong"),f()(),m(41,"button",23),q("click",function(){return i.resetSelection()}),m(42,"mat-icon"),k(43,"restart_alt"),f()()(),Jn(),H(44,"svg",24,1),I(46,gm,5,6,"div",25),f()(),ei(),m(47,"aside",26)(48,"p",5),k(49,"Executive insight"),f(),I(50,Mm,12,7,"div",27)(51,Sm,12,0,"div",28),f()()()),e&2){let r,o;p(6),O(i.title()),p(2),O(i.description()),p(11),$("value",i.activeFilter()),p(),J(i.filters),p(3),J(i.legendItems),p(23),E((r=i.tooltip())?46:-1,r),p(4),E((o=i.selectedInsight())?50:51,o)}},dependencies:[Yt,ri,ni,ha,Cr,yi,Zt,Kt],styles:["[_nghost-%COMP%]{--relationship-client: #174A7C;--relationship-service: #16877A;--relationship-employee: #6D5BD0;--relationship-owner: #C28A17;--relationship-opportunity: #2E8F55;--relationship-value-signal: #D94A38;--relationship-current-link: #7F93AD;--relationship-white-space-link: #2E8F55;--relationship-next-best: #C28A17;--relationship-node-ring: #ffffff;--relationship-label-fill: var(--cw-ink);--relationship-label-stroke: rgba(255, 255, 255, .95);--relationship-control-surface: rgba(255, 255, 255, .94);--relationship-tooltip-surface: rgba(255, 255, 255, .96);--relationship-insight-surface: color-mix(in srgb, var(--cw-panel) 88%, white);--relationship-toggle-surface: rgba(255, 255, 255, .96);--relationship-toggle-text: var(--cw-ink);--relationship-toggle-selected-surface: color-mix(in srgb, var(--cw-accent) 14%, var(--cw-panel));--relationship-toggle-selected-text: var(--cw-accent-strong);--relationship-canvas-base: radial-gradient(circle at top left, rgba(37, 99, 235, .07), transparent 32rem), var(--cw-soft, #f8fbff);display:block}.relationship-explorer[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:1.5rem;background:var(--cw-panel);padding:clamp(1.25rem,2vw,2rem)}.relationship-explorer__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1.5rem;align-items:flex-start;margin-bottom:1.25rem}.relationship-explorer__copy[_ngcontent-%COMP%]{min-width:0}.relationship-explorer__eyebrow[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:.78rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--cw-accent)}.relationship-explorer__title[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.75rem,3vw,2.4rem);line-height:1.05;color:var(--cw-ink)}.relationship-explorer__subtitle[_ngcontent-%COMP%]{max-width:760px;margin:.75rem 0 0;color:var(--cw-muted);font-size:1.05rem;line-height:1.6}.relationship-explorer__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}.relationship-explorer__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.35rem}.relationship-explorer__controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1rem;align-items:center;justify-content:space-between;padding:.9rem 0;border-top:1px solid var(--cw-line);border-bottom:1px solid var(--cw-line);margin-bottom:.75rem}.relationship-explorer__filters[_ngcontent-%COMP%]{flex:0 1 auto}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-appearance-standard{border:1px solid var(--cw-line);background:var(--relationship-toggle-surface);color:var(--relationship-toggle-text)}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-checked{background:var(--relationship-toggle-selected-surface);color:var(--relationship-toggle-selected-text)}[_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-focus-overlay, [_nghost-%COMP%]     .relationship-explorer__filters .mat-button-toggle-button:before{background:transparent}.relationship-explorer__legend[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.65rem 1rem;align-items:center;justify-content:flex-end}.legend-item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;color:var(--cw-muted);font-size:.92rem;line-height:1.4}.legend-swatch[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:999px;display:inline-block;border:1px solid rgba(12,22,34,.08)}.legend-swatch--client[_ngcontent-%COMP%]{background:var(--relationship-client)}.legend-swatch--service[_ngcontent-%COMP%]{background:var(--relationship-service)}.legend-swatch--employee[_ngcontent-%COMP%]{background:var(--relationship-employee)}.legend-swatch--relationship-owner[_ngcontent-%COMP%]{background:var(--relationship-owner)}.legend-swatch--opportunity[_ngcontent-%COMP%]{background:var(--relationship-opportunity)}.legend-swatch--current-link[_ngcontent-%COMP%], .legend-swatch--value-link[_ngcontent-%COMP%]{background:var(--relationship-current-link);border-radius:3px}.legend-swatch--opportunity-link[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,var(--relationship-white-space-link) 0,var(--relationship-white-space-link) 5px,transparent 5px,transparent 8px);border-radius:3px}.relationship-explorer__hint[_ngcontent-%COMP%]{margin-bottom:1rem;color:var(--cw-muted);font-size:.9rem;line-height:1.5}.relationship-explorer__body[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,360px);gap:1.25rem;align-items:stretch}.graph-card[_ngcontent-%COMP%]{display:grid}.graph-canvas[_ngcontent-%COMP%]{position:relative;min-height:clamp(520px,60vh,720px);border:1px solid var(--cw-line);border-radius:1.25rem;overflow:hidden;background:var(--relationship-canvas-base)}.graph-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.graph-canvas__controls[_ngcontent-%COMP%]{position:absolute;top:.9rem;right:.9rem;z-index:2;display:grid;gap:.45rem;padding:.35rem;border:1px solid var(--cw-line);border-radius:1rem;background:var(--relationship-control-surface);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--cw-ink)}.graph-tooltip[_ngcontent-%COMP%]{position:absolute;z-index:3;pointer-events:none;transform:translate(12px,12px);border:1px solid var(--cw-line);border-radius:12px;background:var(--relationship-tooltip-surface);box-shadow:0 14px 28px #0c16221f;padding:10px 12px;display:grid;gap:4px}.graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--cw-ink);font-size:.9rem;line-height:1.4}.graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--cw-muted)}.insight-card[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:1.25rem;background:var(--relationship-insight-surface);padding:1.1rem 1.15rem;display:grid;gap:.95rem;align-content:start}body.cw-theme-dusk[_nghost-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]{--relationship-client: #5ea2ea;--relationship-service: #2bb7a5;--relationship-employee: #8f7cf0;--relationship-owner: #e1ae3c;--relationship-opportunity: #43b86a;--relationship-value-signal: #ee6958;--relationship-current-link: #8aa0bc;--relationship-white-space-link: #43b86a;--relationship-next-best: #e1ae3c;--relationship-node-ring: #dce8f5;--relationship-label-fill: #eef4fb;--relationship-label-stroke: rgba(7, 18, 30, .92);--relationship-control-surface: rgba(11, 24, 38, .9);--relationship-tooltip-surface: rgba(10, 20, 32, .96);--relationship-insight-surface: linear-gradient( 180deg, color-mix(in srgb, var(--cw-panel) 92%, #24384d), color-mix(in srgb, var(--cw-panel) 98%, #0a1623) );--relationship-toggle-surface: rgba(15, 31, 47, .96);--relationship-toggle-text: #dfe9f5;--relationship-toggle-selected-surface: color-mix(in srgb, var(--cw-accent) 18%, #11273b);--relationship-toggle-selected-text: #cfe3ff;--relationship-canvas-base: radial-gradient(circle at top left, rgba(140, 192, 255, .12), transparent 32rem), radial-gradient(circle at bottom right, rgba(45, 135, 113, .08), transparent 28rem), linear-gradient(180deg, #0d1f31 0%, #0a1826 100%)}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer[_ngcontent-%COMP%]{background:linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 94%,#17324a),color-mix(in srgb,var(--cw-panel) 99%,#08131e))}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer__controls[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer__controls[_ngcontent-%COMP%]{border-top-color:color-mix(in srgb,var(--cw-line) 85%,#385474);border-bottom-color:color-mix(in srgb,var(--cw-line) 85%,#385474)}body.cw-theme-dusk[_nghost-%COMP%]   .relationship-explorer__hint[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .relationship-explorer__hint[_ngcontent-%COMP%]{color:#bfd0e2}body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#4c6d8f);box-shadow:0 10px 24px #00000052}body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#edf4fb}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#4c6d8f);box-shadow:0 14px 30px #0006}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#eef4fb}body.cw-theme-dusk[_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]{color:#bfd0e2}body.cw-theme-dusk[_nghost-%COMP%]   .graph-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-card[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .graph-canvas[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .graph-canvas[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 78%,#3f5e80)}body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]{box-shadow:inset 0 1px #ffffff08}body.cw-theme-dusk[_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#eef4fb}body.cw-theme-dusk[_nghost-%COMP%]   .insight-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .insight-type[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .insight-type[_ngcontent-%COMP%]{color:#bfd0e2}.insight-stack[_ngcontent-%COMP%]{display:grid;gap:1rem}.insight-block[_ngcontent-%COMP%]{display:grid;gap:.45rem}.insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;color:var(--cw-ink)}.insight-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem}.insight-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.84rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cw-muted)}.insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .insight-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .insight-type[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.6}.insight-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .insight-empty[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;display:grid;gap:.35rem}.insight-type[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700}.insight-empty[_ngcontent-%COMP%]{display:grid;gap:.75rem}@media(max-width:1020px){.relationship-explorer__body[_ngcontent-%COMP%]{grid-template-columns:1fr}.graph-canvas[_ngcontent-%COMP%]{min-height:520px}}@media(max-width:820px){.relationship-explorer__header[_ngcontent-%COMP%]{flex-direction:column}.relationship-explorer__controls[_ngcontent-%COMP%]{align-items:flex-start}.relationship-explorer__legend[_ngcontent-%COMP%]{justify-content:flex-start}}@media(max-width:640px){.relationship-explorer[_ngcontent-%COMP%]{padding:1rem}.relationship-explorer__subtitle[_ngcontent-%COMP%]{font-size:.98rem}.graph-canvas[_ngcontent-%COMP%]{min-height:420px}.graph-canvas__controls[_ngcontent-%COMP%]{grid-auto-flow:column;top:auto;right:.75rem;bottom:.75rem}}"],changeDetection:0})};var Rm=["mat-internal-form-field",""],Om=["*"],Wl=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&re("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Rm,ngContentSelectors:Om,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),be(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Tm=["input"],Dm=["label"],Im=["*"],ho={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Em=new ge("mat-checkbox-default-options",{providedIn:"root",factory:()=>ho}),xe=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(xe||{}),po=class{source;checked},fo=(()=>{class t{_elementRef=C(ae);_changeDetectorRef=C(Ie);_ngZone=C(Ve);_animationsDisabled=gt();_options=C(Em,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new po;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new we;indeterminateChange=new we;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=xe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){C(Wt).load(Qt);let e=C(new Xt("tabindex"),{optional:!0});this._options=this._options||ho,this.color=this._options.color||ho.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=C(xn).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(xe.Indeterminate):this._transitionCheckState(this.checked?xe.Checked:xe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ce(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?xe.Checked:xe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case xe.Init:if(i===xe.Checked)return this._animationClasses.uncheckedToChecked;if(i==xe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case xe.Unchecked:return i===xe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case xe.Checked:return i===xe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case xe.Indeterminate:return i===xe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&st(Tm,5)(Dm,5),i&2){let o;ne(o=ie())&&(r._inputElement=o.first),ne(o=ie())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(wo("id",r.id),me("tabindex",null)("aria-label",null)("aria-labelledby",null),Xe(r.color?"mat-"+r.color:"mat-accent"),re("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",X],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",X],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",X],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ee(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],checked:[2,"checked","checked",X],disabled:[2,"disabled","disabled",X],indeterminate:[2,"indeterminate","indeterminate",X]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[de([{provide:Jt,useExisting:Mt(()=>t),multi:!0},{provide:Fo,useExisting:t,multi:!0}]),St],ngContentSelectors:Im,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Ae(),m(0,"div",3),q("click",function(a){return r._preventBubblingFromLabel(a)}),m(1,"div",4,0)(3,"div",5),q("click",function(){return r._onTouchTargetClick()}),f(),m(4,"input",6,1),q("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),f(),H(6,"div",7),m(7,"div",8),Jn(),m(8,"svg",9),H(9,"path",10),f(),ei(),H(10,"div",11),f(),H(11,"div",12),f(),m(12,"label",13,2),be(14),f()()),i&2){let o=ti(2);$("labelPosition",r.labelPosition),p(4),re("mdc-checkbox--selected",r.checked),$("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),me("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),$("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),$("for",r.inputId)}},dependencies:[Et,Wl],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),ql=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[fo,Ne]})}return t})();var Am=["knob"],Nm=["valueIndicatorContainer"];function Fm(t,n){if(t&1&&(m(0,"div",2,1)(2,"div",5)(3,"span",6),k(4),f()()()),t&2){let e=M();p(4),O(e.valueIndicatorText)}}var Vm=["trackActive"],Bm=["*"];function zm(t,n){if(t&1&&H(0,"div"),t&2){let e=n.$implicit,i=n.$index,r=M(3);Xe(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Be("transform",r._calcTickMarkTransform(i))}}function Lm(t,n){if(t&1&&Z(0,zm,1,4,"div",8,Co),t&2){let e=M(2);J(e._tickMarks)}}function $m(t,n){if(t&1&&(m(0,"div",6,1),I(2,Lm,2,0),f()),t&2){let e=M();p(2),E(e._cachedWidth?2:-1)}}function Um(t,n){if(t&1&&H(0,"mat-slider-visual-thumb",7),t&2){let e=M();$("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var z=(function(t){return t[t.START=1]="START",t[t.END=2]="END",t})(z||{}),cn=(function(t){return t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE",t})(cn||{}),go=new ge("_MatSlider"),jl=new ge("_MatSliderThumb"),Gm=new ge("_MatSliderRangeThumb"),Ql=new ge("_MatSliderVisualThumb");var Hm=(()=>{class t{_cdr=C(Ie);_ngZone=C(Ve);_slider=C(go);_renderer=C(Rt);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=C(ae).nativeElement;_platform=C(ct);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(i,"pointermove",this._onPointerMove),r.listen(i,"pointerdown",this._onDragStart),r.listen(i,"pointerup",this._onDragEnd),r.listen(i,"pointerleave",this._onMouseLeave),r.listen(i,"focus",this._onFocus),r.listen(i,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,i);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===ur.FADING_IN||e?.state===ur.VISIBLE}_showRipple(e,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===z.START?z.END:z.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===z.START?z.END:z.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(i,r){if(i&1&&st(Et,5)(Am,5)(Nm,5),i&2){let o;ne(o=ie())&&(r._ripple=o.first),ne(o=ie())&&(r._knob=o.first),ne(o=ie())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[de([{provide:Ql,useExisting:t}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(i,r){i&1&&(I(0,Fm,5,1,"div",2),H(1,"div",3,0)(3,"div",4)),i&2&&(E(r.discrete?0:-1),p(3),$("matRippleDisabled",!0))},dependencies:[Et],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Yl=(()=>{class t{_ngZone=C(Ve);_cdr=C(Ie);_elementRef=C(ae);_dir=C(_t,{optional:!0});_globalRippleOptions=C(Ao,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let i=this._getInput(z.END),r=this._getInput(z.START);i&&(i.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let i=e==null||isNaN(e)?this._min:e;this._min!==i&&this._updateMin(i)}_min=0;color;disableRipple=!1;_updateMin(e){let i=this._min;this._min=e,this._isRange?this._updateMinRange({old:i,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let i=this._getInput(z.END),r=this._getInput(z.START),o=i.value,a=r.value;r.min=e.new,i.min=Math.max(e.new,r.value),r.max=Math.min(i.max,i.value),r._updateWidthInactive(),i._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(i,r):this._onTranslateXChangeBySideEffect(r,i),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let i=this._getInput(z.END);if(i){let r=i.value;i.min=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get max(){return this._max}set max(e){let i=e==null||isNaN(e)?this._max:e;this._max!==i&&this._updateMax(i)}_max=100;_updateMax(e){let i=this._max;this._max=e,this._isRange?this._updateMaxRange({old:i,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let i=this._getInput(z.END),r=this._getInput(z.START),o=i.value,a=r.value;i.max=e.new,r.max=Math.min(e.new,i.value),i.min=r.value,i._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,i):this._onTranslateXChangeBySideEffect(i,r),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let i=this._getInput(z.END);if(i){let r=i.value;i.max=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get step(){return this._step}set step(e){let i=isNaN(e)?this._step:e;this._step!==i&&this._updateStep(i)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(z.END),i=this._getInput(z.START),r=e.value,o=i.value,a=i.value;e.min=this._min,i.max=this._max,e.step=this._step,i.step=this._step,this._platform.SAFARI&&(e.value=e.value,i.value=i.value),e.min=Math.max(this._min,i.value),i.max=Math.min(this._max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),e.value<a?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),r!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i)}_updateStepNonRange(){let e=this._getInput(z.END);if(e){let i=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),i!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=gt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Y(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=C(ct);constructor(){C(Wt).load(Qt);let e=this._isRtl();Oo(()=>{let i=this._isRtl();i!==e&&(e=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(z.END),i=this._getInput(z.START);this._isRange=!!e&&!!i,this._cdr.detectChanges();let r=this._getThumb(z.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,i):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,i){e.initProps(),e.initUI(),i.initProps(),i.initUI(),e._updateMinMax(),i._updateMinMax(),e._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),i._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(z.END),i=this._getInput(z.START);e._setIsLeftThumb(),i._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateWidthInactive(),i._updateWidthInactive(),e._updateThumbUIByValue(),i._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(z.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(z.START)._isActive||this._getThumb(z.END)._isActive}_getValue(e=z.END){let i=this._getInput(e);return i?i.value:this.min}_skipUpdate(){return!!(this._getInput(z.START)?._skipUIUpdate||this._getInput(z.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let i=this._trackActive.nativeElement.style;i.left=e.left,i.right=e.right,i.transformOrigin=e.transformOrigin,i.transform=e.transform}_calcTickMarkTransform(e){let i=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,i){this._hasViewInitialized&&(e._updateThumbUIByValue(),i._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(z.END),i=this._getInput(z.START);e._updateThumbUIByValue(),i._updateThumbUIByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateMinMax(),i._updateMinMax(),e._updateWidthInactive(),i._updateWidthInactive()}else{let e=this._getInput(z.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(z.START),i=this._getInput(z.END);return!e||!i?!1:i.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let i=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let i=this._getThumb(e.thumbPosition===z.END?z.END:z.START);i._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let i=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(i):e._hostElement.setAttribute("aria-valuetext",i),this.discrete){e.thumbPosition===z.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let r=this._getThumb(e.thumbPosition);i.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(z.END),i=this._getInput(z.START);e&&this._updateValueIndicatorUI(e),i&&this._updateValueIndicatorUI(i)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let i=e.getSibling();if(!i||!this._cachedWidth)return;let r=Math.abs(i.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-i.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let i=this._getValue(),r=Math.max(Math.round((i-this.min)/e),0)+1,o=Math.max(Math.round((this.max-i)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(cn.ACTIVE).concat(Array(o).fill(cn.INACTIVE))}_updateTickMarkUIRange(e){let i=this._getValue(),r=this._getValue(z.START),o=Math.max(Math.round((r-this.min)/e),0),a=Math.max(Math.round((i-r)/e)+1,0),s=Math.max(Math.round((this.max-i)/e),0);this._tickMarks=Array(o).fill(cn.INACTIVE).concat(Array(a).fill(cn.ACTIVE),Array(s).fill(cn.INACTIVE))}_getInput(e){if(e===z.END&&this._input)return this._input;if(this._inputs?.length)return e===z.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===z.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,i){let r=i.width/2,o=i.x+r,a=i.y+r,s=e.clientX-o,c=e.clientY-a;return Math.pow(s,2)+Math.pow(c,2)<Math.pow(r,2)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Q({type:t,selectors:[["mat-slider"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,jl,5)(o,Gm,4),i&2){let a;ne(a=ie())&&(r._input=a.first),ne(a=ie())&&(r._inputs=a)}},viewQuery:function(i,r){if(i&1&&st(Vm,5)(Ql,5),i&2){let o;ne(o=ie())&&(r._trackActive=o.first),ne(o=ie())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(i,r){i&2&&(Xe("mat-"+(r.color||"primary")),re("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",X],discrete:[2,"discrete","discrete",X],showTickMarks:[2,"showTickMarks","showTickMarks",X],min:[2,"min","min",Ee],color:"color",disableRipple:[2,"disableRipple","disableRipple",X],max:[2,"max","max",Ee],step:[2,"step","step",Ee],displayWith:"displayWith"},exportAs:["matSlider"],features:[de([{provide:go,useExisting:t}])],ngContentSelectors:Bm,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(i,r){i&1&&(Ae(),be(0),m(1,"div",2),H(2,"div",3),m(3,"div",4),H(4,"div",5,0),f(),I(6,$m,3,1,"div",6),f(),I(7,Um,1,3,"mat-slider-visual-thumb",7),H(8,"mat-slider-visual-thumb",7)),i&2&&(p(6),E(r.showTickMarks?6:-1),p(),E(r._isRange?7:-1),p(),$("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[Hm],styles:[`.mdc-slider__track {
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
`],encapsulation:2,changeDetection:0})}return t})();var Xm={provide:Jt,useExisting:Mt(()=>_o),multi:!0};var _o=(()=>{class t{_ngZone=C(Ve);_elementRef=C(ae);_cdr=C(Ie);_slider=C(go);_platform=C(ct);_listenerCleanups;get value(){return Ee(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let i=e+"";if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new we;dragStart=new we;dragEnd=new we;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=z.END;get min(){return Ee(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return Ee(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return Ee(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return X(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=ce("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new ke;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=C(Rt);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let i=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,a=Math.floor((this._slider.max-this._slider.min)/o),s=this._slider._isRtl()?1-i/r:i/r,l=Math.round(s*a)/a*(this._slider.max-this._slider.min)+this._slider.min,d=Math.round(l/o)*o,h=this.value;if(d===h){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=d,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let i=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(i)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(i,r){i&1&&q("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),i&2&&me("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",Ee]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[de([Xm,{provide:jl,useExisting:t}])]})}return t})();var Kl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Me({type:t});static \u0275inj=Ce({imports:[ii,Ne]})}return t})();var Qm=(t,n)=>n.key;function Ym(t,n){if(t&1&&(m(0,"mat-chip"),k(1),f()),t&2){let e=M();p(),lt("Overrides: ",e.activeOverrideLabels().length)}}function Km(t,n){if(t&1&&(m(0,"mat-chip"),k(1),f()),t&2){let e=M();p(),lt("Blockers: ",e.activeBlockerLabels().length)}}function Zm(t,n){if(t&1){let e=et();m(0,"button",44),q("click",function(){let r=Ue(e).$index,o=M().$implicit,a=M();return Ge(a.setScore(o.key,r))}),m(1,"span",45),k(2),f(),m(3,"span"),k(4),f()()}if(t&2){let e=n.$implicit,i=n.$index,r=M().$implicit,o=M();re("dimension-card__legend-item--active",o.scoreFor(r.key)===i),me("aria-pressed",o.scoreFor(r.key)===i),p(2),O(i),p(2),O(e)}}function Jm(t,n){if(t&1){let e=et();m(0,"mat-card",24)(1,"div",34)(2,"div",35)(3,"span",36)(4,"mat-icon"),k(5),f()(),m(6,"div")(7,"p",37),k(8),f(),m(9,"h4"),k(10),f()()(),m(11,"span",38),k(12),f()(),m(13,"div",39)(14,"mat-slider",40)(15,"input",41),q("valueChange",function(r){let o=Ue(e).$implicit,a=M();return Ge(a.setScore(o.key,r))}),f()()(),m(16,"div",42),Z(17,Zm,5,5,"button",43,_e),f()()}if(t&2){let e=n.$implicit,i=M();p(5),O(i.dimensionIcon(e.key)),p(3),O(e.label),p(2),O(e.question),p(2),lt("",i.scoreFor(e.key),"/4"),p(3),ko("aria-label",Ro(e.label)),$("value",i.scoreFor(e.key)),p(2),J(e.scale)}}function eh(t,n){if(t&1){let e=et();m(0,"mat-checkbox",46),q("change",function(r){let o=Ue(e).$implicit,a=M();return Ge(a.toggleOverride(o,r.checked))}),k(1),f()}if(t&2){let e=n.$implicit,i=M();$("checked",i.selectedOverrides()[e]),p(),lt(" ",e," ")}}function th(t,n){if(t&1){let e=et();m(0,"mat-checkbox",46),q("change",function(r){let o=Ue(e).$implicit,a=M();return Ge(a.toggleBlocker(o,r.checked))}),k(1),f()}if(t&2){let e=n.$implicit,i=M();$("checked",i.selectedBlockers()[e]),p(),lt(" ",e," ")}}function nh(t,n){t&1&&(m(0,"mat-card",30)(1,"div",47)(2,"span",48)(3,"mat-icon"),k(4,"warning"),f()(),m(5,"p"),k(6,"Asset-level classification blocked until evidence gaps are resolved."),f()()())}function ih(t,n){t&1&&(m(0,"mat-card",31)(1,"div",47)(2,"span",48)(3,"mat-icon"),k(4,"verified_user"),f()(),m(5,"p"),k(6,"Escalate for finance, audit, security, or executive review."),f()()())}function rh(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function oh(t,n){t&1&&(m(0,"li"),k(1,"All dimensions are scoring at a governance-ready level."),f())}var ah={dimensions:[],scoreBands:[],hardOverrides:[],classificationBlockers:[]},nr=class t{workspace=C(di);destroyRef=C(pn);title=Se("Agent Grading Calculator");description=Se("Score an enterprise AI agent across seven dimensions and review the resulting governance posture.");config=Se();scores=ce({});selectedOverrides=ce({});selectedBlockers=ce({});parsedConfig=Y(()=>this.normalizeConfig(this.config()));dimensions=Y(()=>this.parsedConfig().dimensions);scoreBands=Y(()=>this.parsedConfig().scoreBands);hardOverrides=Y(()=>this.parsedConfig().hardOverrides);classificationBlockers=Y(()=>this.parsedConfig().classificationBlockers);maxScore=Y(()=>this.dimensions().length*4);totalScore=Y(()=>this.dimensions().reduce((n,e)=>n+this.scoreFor(e.key),0));scorePercent=Y(()=>{let n=this.maxScore();return n?this.totalScore()/n*100:0});completedDimensions=Y(()=>this.dimensions().filter(n=>this.scores()[n.key]!==void 0).length);scoreBand=Y(()=>this.scoreBands().find(n=>{let e=this.totalScore();return e>=n.min&&e<=n.max})??null);activeOverrideLabels=Y(()=>this.hardOverrides().filter(n=>this.selectedOverrides()[n]));activeBlockerLabels=Y(()=>this.classificationBlockers().filter(n=>this.selectedBlockers()[n]));blockersPresent=Y(()=>this.activeBlockerLabels().length>0);overridesPresent=Y(()=>this.activeOverrideLabels().length>0);requiredEvidence=Y(()=>this.dimensions().filter(n=>this.scoreFor(n.key)<=2).map(n=>`Strengthen evidence for ${n.label.toLowerCase()}.`));liveStatusText=Y(()=>{let n=this.completedDimensions(),e=this.dimensions().length;return e?n?n<e?`${n} of ${e} dimensions scored`:`All ${e} dimensions scored`:"Score updates as you select each dimension":"Configuration unavailable"});gradeCode=Y(()=>(this.scoreBand()?.grade.split("\u2014")[0]??"G0").trim());gradeTitle=Y(()=>{let e=(this.scoreBand()?.grade??"Not classified").split("\u2014");return(e[1]??e[0]).trim()});statusTone=Y(()=>{let n=this.gradeCode();return n.startsWith("G3")?"agent-calculator--g3":n.startsWith("G2")?"agent-calculator--g2":n.startsWith("G1")?"agent-calculator--g1":"agent-calculator--g0"});exportPayload=Y(()=>({generatedAt:new Date().toISOString(),totalScore:this.totalScore(),grade:this.scoreBand()?.grade??"Not classified",posture:this.scoreBand()?.posture??"No matching posture",selectedOverrides:this.activeOverrideLabels(),selectedBlockers:this.activeBlockerLabels(),blockersPresent:this.blockersPresent(),overridesPresent:this.overridesPresent(),scores:this.dimensions().map(n=>({key:n.key,label:n.label,score:this.scoreFor(n.key),selectedMeaning:n.scale[this.scoreFor(n.key)]??""}))}));constructor(){fn(()=>{this.workspace.update({totalScore:this.totalScore(),maxScore:this.maxScore(),completedDimensions:this.completedDimensions(),totalDimensions:this.dimensions().length,grade:this.scoreBand()?.grade??"Not classified",gradeCode:this.gradeCode(),gradeTitle:this.gradeTitle(),posture:this.scoreBand()?.posture??"Choose scores to classify the agent",overrideCount:this.activeOverrideLabels().length,blockerCount:this.activeBlockerLabels().length,overrideLabels:this.activeOverrideLabels(),blockerLabels:this.activeBlockerLabels(),requiredEvidence:this.requiredEvidence()}),this.workspace.registerExports(()=>this.exportJson(),()=>this.exportCsv())}),this.destroyRef.onDestroy(()=>this.workspace.reset())}scoreFor(n){return this.scores()[n]??0}setScore(n,e){this.scores.update(i=>Kn(wt({},i),{[n]:e}))}dimensionIcon(n){return{operationalMateriality:"account_tree",institutionalKnowledge:"psychology",controlAuditability:"fact_check",costTraceability:"receipt_long",businessValue:"diamond",reliabilityModelRisk:"verified_user",usefulLife:"update"}[n]??"insights"}primaryEvidenceAction(){if(this.blockersPresent())return"Resolve classification blockers before asset-level review.";if(this.overridesPresent())return"Escalate for finance, audit, security, or executive review.";let n=[...this.dimensions()].sort((i,r)=>this.scoreFor(i.key)-this.scoreFor(r.key))[0];return n?{operationalMateriality:"Update the agent charter with intended use, owner, and business scope.",institutionalKnowledge:"Document the reusable logic and expert reasoning captured by the agent.",controlAuditability:"Strengthen the control matrix and evidence trail for reviewability.",costTraceability:"Complete the cost ledger and accounting memo before classification.",businessValue:"Quantify the business outcome the agent changes before advancing the grade.",reliabilityModelRisk:"Define monitored thresholds, fallback controls, and review checkpoints.",usefulLife:"Establish useful-life assumptions, review cadence, and retirement triggers."}[n.key]??"Review the lowest-scoring dimension and add evidence.":"Begin scoring the seven dimensions to identify the next artifact."}toggleOverride(n,e){this.selectedOverrides.update(i=>Kn(wt({},i),{[n]:e}))}toggleBlocker(n,e){this.selectedBlockers.update(i=>Kn(wt({},i),{[n]:e}))}exportJson(){let n=JSON.stringify(this.exportPayload(),null,2);this.downloadFile("agent-grading-result.json",n,"application/json")}exportCsv(){let e=[["dimension_key","dimension_label","score","selected_meaning"],...this.exportPayload().scores.map(i=>[i.key,i.label,String(i.score),i.selectedMeaning]),[],["total_score",String(this.exportPayload().totalScore)],["grade",this.exportPayload().grade],["posture",this.exportPayload().posture],["overrides",this.exportPayload().selectedOverrides.join(" | ")],["blockers",this.exportPayload().selectedBlockers.join(" | ")]].map(i=>i.map(r=>this.escapeCsv(r??"")).join(",")).join(`
`);this.downloadFile("agent-grading-result.csv",e,"text/csv;charset=utf-8")}normalizeConfig(n){if(!n)return ah;let e=Array.isArray(n.dimensions)?n.dimensions.map(a=>{if(!a||typeof a!="object")return null;let s=a,c=Array.isArray(s.scale)?s.scale.filter(l=>typeof l=="string"):[];return typeof s.key!="string"||typeof s.label!="string"||typeof s.question!="string"||c.length!==5?null:{key:s.key,label:s.label,question:s.question,scale:c}}).filter(a=>a!==null):[],i=Array.isArray(n.scoreBands)?n.scoreBands.map(a=>{if(!a||typeof a!="object")return null;let s=a;return typeof s.min!="number"||typeof s.max!="number"||typeof s.grade!="string"||typeof s.posture!="string"?null:{min:s.min,max:s.max,grade:s.grade,posture:s.posture}}).filter(a=>a!==null):[],r=Array.isArray(n.hardOverrides)?n.hardOverrides.filter(a=>typeof a=="string"):[],o=Array.isArray(n.classificationBlockers)?n.classificationBlockers.filter(a=>typeof a=="string"):[];return{dimensions:e,scoreBands:i,hardOverrides:r,classificationBlockers:o}}escapeCsv(n){let e=n.replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e}downloadFile(n,e,i){let r=new Blob([e],{type:i}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=n,a.click(),URL.revokeObjectURL(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Q({type:t,selectors:[["app-agent-grading-calculator"]],inputs:{title:[1,"title"],description:[1,"description"],config:[1,"config"]},decls:80,vars:19,consts:[["appearance","outlined",1,"agent-calculator","cw-surface-card"],[1,"agent-calculator__header"],[1,"agent-calculator__copy"],[1,"agent-calculator__eyebrow"],["appearance","outlined","aria-live","polite",1,"agent-calculator__hero","cw-surface-card"],[1,"hero-score"],[1,"hero-score__ring"],[1,"hero-score__ring-core"],[1,"hero-score__headline"],[1,"hero-score__value"],[1,"hero-score__max"],[1,"hero-score__result"],[1,"summary-card__eyebrow"],[1,"hero-score__grade-row"],[1,"hero-score__grade-badge"],[1,"hero-score__status"],[1,"hero-actions"],[1,"hero-actions__signals"],[1,"hero-actions__exports"],["mat-stroked-button","","color","primary","type","button",3,"click"],["mat-flat-button","","color","primary","type","button",3,"click"],["mode","determinate",3,"value"],[1,"agent-calculator__body"],[1,"agent-calculator__dimensions"],["appearance","outlined",1,"dimension-card","cw-surface-card"],[1,"agent-calculator__summary"],["appearance","outlined",1,"summary-card","cw-surface-card"],[1,"summary-card__support"],[1,"summary-checklist"],[3,"checked"],["appearance","outlined",1,"summary-card","summary-card--warning","cw-surface-card"],["appearance","outlined",1,"summary-card","summary-card--alert","cw-surface-card"],["appearance","outlined",1,"summary-card","summary-card--evidence","cw-surface-card"],[1,"summary-list"],[1,"dimension-card__head"],[1,"dimension-card__identity"],[1,"cw-icon-badge","dimension-card__icon"],[1,"dimension-card__label"],[1,"dimension-card__score"],[1,"dimension-card__slider"],["min","0","max","4","step","1","discrete","",1,"dimension-card__scale"],["matSliderThumb","",3,"valueChange","value","aria-label"],[1,"dimension-card__legend"],["type","button",1,"dimension-card__legend-item",3,"dimension-card__legend-item--active"],["type","button",1,"dimension-card__legend-item",3,"click"],[1,"dimension-card__legend-index"],[3,"change","checked"],[1,"summary-callout"],[1,"cw-icon-badge","summary-callout__icon"]],template:function(e,i){if(e&1&&(m(0,"mat-card",0)(1,"header",1)(2,"div",2)(3,"p",3),k(4,"Interactive artifact"),f(),m(5,"h3"),k(6),f(),m(7,"p"),k(8),f()()(),m(9,"mat-card",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"span",9),k(15),f(),m(16,"span",10),k(17),f()(),m(18,"p"),k(19,"Total score"),f()()(),m(20,"div",11)(21,"p",12),k(22,"Recommended classification"),f(),m(23,"div",13)(24,"span",14),k(25),f(),m(26,"div")(27,"h4"),k(28),f(),m(29,"p"),k(30),f()()(),m(31,"p",15),k(32),f()()(),m(33,"div",16)(34,"div",17)(35,"mat-chip-set")(36,"mat-chip"),k(37),f(),I(38,Ym,2,1,"mat-chip"),I(39,Km,2,1,"mat-chip"),f()(),m(40,"div",18)(41,"button",19),q("click",function(){return i.exportJson()}),m(42,"mat-icon"),k(43,"download"),f(),k(44," Export JSON "),f(),m(45,"button",20),q("click",function(){return i.exportCsv()}),m(46,"mat-icon"),k(47,"table_view"),f(),k(48," Export CSV "),f()()(),H(49,"mat-progress-bar",21),f(),m(50,"div",22)(51,"section",23),Z(52,Jm,19,7,"mat-card",24,Qm),f(),m(54,"aside",25)(55,"mat-card",26)(56,"p",12),k(57,"Hard override flags"),f(),m(58,"p",27),k(59,"Enable any condition that forces elevated review before classification."),f(),m(60,"div",28),Z(61,eh,2,2,"mat-checkbox",29,_e),f()(),m(63,"mat-card",26)(64,"p",12),k(65,"Classification blockers"),f(),m(66,"p",27),k(67,"These gaps should stop asset claims until the operating evidence exists."),f(),m(68,"div",28),Z(69,th,2,2,"mat-checkbox",29,_e),f()(),I(71,nh,7,0,"mat-card",30),I(72,ih,7,0,"mat-card",31),m(73,"mat-card",32)(74,"p",12),k(75,"Required evidence focus"),f(),m(76,"ul",33),Z(77,rh,2,1,"li",null,_e),I(79,oh,2,0,"li"),f()()()()()),e&2){let r,o;Xe(i.statusTone()),p(6),O(i.title()),p(2),O(i.description()),p(3),Be("--score-percent",i.scorePercent()+"%"),p(4),O(i.totalScore()),p(2),lt("/ ",i.maxScore()),p(8),O(i.gradeCode()),p(3),O(i.gradeTitle()),p(2),O(((r=i.scoreBand())==null?null:r.posture)||"Select dimension scores to classify the agent."),p(2),O(i.liveStatusText()),p(5),O(((o=i.scoreBand())==null?null:o.posture)||"Choose scores to classify the agent"),p(),E(i.overridesPresent()?38:-1),p(),E(i.blockersPresent()?39:-1),p(10),$("value",i.scorePercent()),p(3),J(i.dimensions()),p(9),J(i.hardOverrides()),p(8),J(i.classificationBlockers()),p(2),E(i.blockersPresent()?71:-1),p(),E(i.overridesPresent()?72:-1),p(5),J(i.requiredEvidence()),p(2),E(i.requiredEvidence().length?-1:79)}},dependencies:[Yt,ri,ai,oi,ql,fo,ci,si,li,No,Zt,Kt,zo,Bo,Kl,Yl,_o],styles:["[_nghost-%COMP%]{display:block}.agent-calculator[_ngcontent-%COMP%], .agent-calculator__copy[_ngcontent-%COMP%], .agent-calculator__body[_ngcontent-%COMP%], .agent-calculator__dimensions[_ngcontent-%COMP%], .agent-calculator__summary[_ngcontent-%COMP%], .dimension-card[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%], .summary-checklist[_ngcontent-%COMP%]{display:grid;gap:16px}.agent-calculator[_ngcontent-%COMP%]{padding:24px;background:radial-gradient(circle at top right,color-mix(in srgb,var(--cw-accent) 10%,transparent),transparent 30%),linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 96%,white),var(--cw-panel))}.agent-calculator__header[_ngcontent-%COMP%]{display:grid;gap:12px}.agent-calculator__eyebrow[_ngcontent-%COMP%], .summary-card__eyebrow[_ngcontent-%COMP%], .dimension-card__label[_ngcontent-%COMP%]{margin:0;color:var(--cw-accent);font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.agent-calculator__copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.8rem,3vw,2.5rem);line-height:1.02;letter-spacing:-.04em}.agent-calculator__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .summary-card__support[_ngcontent-%COMP%]{color:var(--cw-muted);line-height:1.7}.agent-calculator__hero[_ngcontent-%COMP%]{position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 14px);z-index:4;padding:22px;display:grid;gap:20px}.hero-score[_ngcontent-%COMP%], .hero-actions[_ngcontent-%COMP%]{display:grid;gap:20px}.hero-score[_ngcontent-%COMP%]{grid-template-columns:auto minmax(0,1fr);align-items:center}.hero-score__ring[_ngcontent-%COMP%]{--score-percent: 0%;width:164px;aspect-ratio:1;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at center,var(--cw-panel) 58%,transparent 59%),conic-gradient(var(--cw-accent) 0 var(--score-percent),color-mix(in srgb,var(--cw-line) 65%,white) 0 100%)}.hero-score__ring-core[_ngcontent-%COMP%]{width:calc(100% - 26px);aspect-ratio:1;border-radius:50%;background:var(--cw-panel);display:grid;place-items:center;gap:4px;text-align:center;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cw-line) 65%,transparent)}.hero-score__headline[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:6px}.hero-score__value[_ngcontent-%COMP%]{font-size:2.8rem;font-weight:800;letter-spacing:-.06em;color:var(--cw-ink)}.hero-score__max[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:1.15rem;font-weight:700}.hero-score__ring-core[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hero-score__result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--cw-muted)}.hero-score__result[_ngcontent-%COMP%]{display:grid;gap:12px}.hero-score__grade-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:16px;align-items:center}.hero-score__grade-badge[_ngcontent-%COMP%], .summary-card__score[_ngcontent-%COMP%]{display:inline-grid;place-items:center;min-width:84px;min-height:84px;padding:0 12px;border-radius:24px;background:color-mix(in srgb,var(--cw-accent) 10%,var(--cw-panel));color:var(--cw-accent);font-size:1.75rem;font-weight:800;letter-spacing:-.04em}.hero-score__result[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.4rem;line-height:1.1;letter-spacing:-.03em}.hero-score__status[_ngcontent-%COMP%]{font-weight:600;color:var(--cw-ink)!important}.hero-actions[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) auto;align-items:center}.hero-actions__signals[_ngcontent-%COMP%]{min-width:0}.hero-actions__exports[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}.agent-calculator__body[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1.3fr) minmax(320px,.92fr);align-items:start}.dimension-card[_ngcontent-%COMP%]{padding:18px}.dimension-card__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:start}.dimension-card__identity[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:14px;align-items:start}.dimension-card__icon[_ngcontent-%COMP%]{width:48px;height:48px}.dimension-card__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.dimension-card__score[_ngcontent-%COMP%]{display:inline-grid;place-items:center;min-width:68px;min-height:68px;border-radius:20px;background:color-mix(in srgb,var(--cw-accent) 10%,var(--cw-panel));color:var(--cw-accent);font-size:1.4rem;font-weight:800}.dimension-card__slider[_ngcontent-%COMP%]{display:grid}.dimension-card__scale[_ngcontent-%COMP%]{width:100%}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider{margin:0}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track{height:4px}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__thumb-knob{border-color:var(--cw-accent)}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--active_fill{border-color:var(--cw-accent)}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive{opacity:1}.dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive:after{border-color:color-mix(in srgb,var(--cw-line) 80%,white)}.dimension-card__legend[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.dimension-card__legend-item[_ngcontent-%COMP%]{display:grid;gap:6px;min-height:116px;padding:12px 14px;border:1px solid transparent;border-radius:16px;background:color-mix(in srgb,var(--cw-line) 18%,white);color:var(--cw-muted);font-size:.92rem;line-height:1.45;text-align:left;cursor:pointer;transition:background .16s ease,border-color .16s ease,color .16s ease,transform .16s ease}.dimension-card__legend-item[_ngcontent-%COMP%]:hover, .dimension-card__legend-item[_ngcontent-%COMP%]:focus-visible{border-color:color-mix(in srgb,var(--cw-accent) 18%,var(--cw-line));color:var(--cw-ink)}.dimension-card__legend-item--active[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-accent) 8%,var(--cw-panel));color:var(--cw-ink);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cw-accent) 24%,var(--cw-line))}.dimension-card__legend-index[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:800;color:var(--cw-ink)}.agent-calculator__summary[_ngcontent-%COMP%]{position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 248px)}.summary-card[_ngcontent-%COMP%]{padding:18px;width:100%;justify-self:stretch}.summary-card--evidence[_ngcontent-%COMP%]{width:100%;grid-column:1/-1}.summary-card__score-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:14px;align-items:center}.summary-card__score[_ngcontent-%COMP%]{min-width:88px;min-height:88px;font-size:1.5rem}.summary-card__meta-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.summary-card__meta-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;gap:4px}.summary-card__meta-label[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:.82rem;text-transform:uppercase;letter-spacing:.1em;font-weight:700}.summary-checklist[_ngcontent-%COMP%]{gap:10px}.summary-callout[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:center}.summary-callout__icon[_ngcontent-%COMP%]{width:44px;height:44px}.summary-card--warning[_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 8%,var(--cw-panel))!important}.summary-card--warning[_ngcontent-%COMP%]   .summary-callout__icon[_ngcontent-%COMP%]{color:#b45309;background:color-mix(in srgb,#f59e0b 12%,var(--cw-panel))}.summary-card--alert[_ngcontent-%COMP%]{background:color-mix(in srgb,#0f766e 7%,var(--cw-panel))!important}.summary-card--alert[_ngcontent-%COMP%]   .summary-callout__icon[_ngcontent-%COMP%]{color:#0f766e;background:color-mix(in srgb,#0f766e 10%,var(--cw-panel))}.summary-list[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;display:grid;gap:8px;color:var(--cw-muted)}.summary-checklist[_ngcontent-%COMP%]     .mdc-form-field{color:var(--cw-muted)}.summary-checklist[_ngcontent-%COMP%]     .mdc-label{color:inherit}.agent-calculator--g0[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g0[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-line) 55%,var(--cw-panel));color:var(--cw-ink)}.agent-calculator--g1[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g1[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 14%,var(--cw-panel));color:#b45309}.agent-calculator--g2[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g2[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#15803d 14%,var(--cw-panel));color:#166534}.agent-calculator--g3[_ngcontent-%COMP%]   .hero-score__grade-badge[_ngcontent-%COMP%], .agent-calculator--g3[_ngcontent-%COMP%]   .summary-card__score[_ngcontent-%COMP%]{background:color-mix(in srgb,#7c3aed 14%,var(--cw-panel));color:#6d28d9}body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-line) 44%,var(--cw-panel));border-color:color-mix(in srgb,var(--cw-line) 84%,transparent);color:color-mix(in srgb,var(--cw-muted) 92%,var(--cw-ink))}body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%]:hover, body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%]:hover, body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%]:focus-visible, body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__legend-item[_ngcontent-%COMP%]:focus-visible{background:color-mix(in srgb,var(--cw-line) 56%,var(--cw-panel));border-color:color-mix(in srgb,var(--cw-accent) 26%,var(--cw-line));color:var(--cw-ink)}body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__legend-item--active[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__legend-item--active[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-accent) 14%,var(--cw-panel));color:var(--cw-ink);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cw-accent) 30%,var(--cw-line))}body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__legend-index[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__legend-index[_ngcontent-%COMP%]{color:var(--cw-ink)}body.cw-theme-dusk[_nghost-%COMP%]   .dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive:after, body.cw-theme-dusk   [_nghost-%COMP%]   .dimension-card__scale[_ngcontent-%COMP%]     .mdc-slider__track--inactive:after{border-color:color-mix(in srgb,var(--cw-line) 90%,var(--cw-panel))}body.cw-theme-dusk[_nghost-%COMP%]   .summary-checklist[_ngcontent-%COMP%]     .mdc-form-field, body.cw-theme-dusk   [_nghost-%COMP%]   .summary-checklist[_ngcontent-%COMP%]     .mdc-form-field{color:var(--cw-ink)}body.cw-theme-dusk[_nghost-%COMP%]   .summary-checklist[_ngcontent-%COMP%]     .mdc-checkbox__background, body.cw-theme-dusk   [_nghost-%COMP%]   .summary-checklist[_ngcontent-%COMP%]     .mdc-checkbox__background{border-color:color-mix(in srgb,var(--cw-line) 65%,var(--cw-ink))}body.cw-theme-dusk[_nghost-%COMP%]   .summary-card__support[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .summary-card__support[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .summary-list[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .summary-list[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .hero-score__ring-core[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .hero-score__ring-core[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .hero-score__result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .hero-score__result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--cw-muted)}@media(max-width:1080px){.agent-calculator__body[_ngcontent-%COMP%], .hero-score[_ngcontent-%COMP%], .hero-actions[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero-actions__exports[_ngcontent-%COMP%]{justify-content:flex-start}.agent-calculator__summary[_ngcontent-%COMP%]{position:static}}@media(min-width:1200px){cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__hero[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__hero[_ngcontent-%COMP%]{display:none}cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__body[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__body[_ngcontent-%COMP%]{grid-template-columns:1fr}cw-site-shell.site-shell--framework-workspace[_nghost-%COMP%]   .agent-calculator__summary[_ngcontent-%COMP%], cw-site-shell.site-shell--framework-workspace   [_nghost-%COMP%]   .agent-calculator__summary[_ngcontent-%COMP%]{position:static;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}@media(max-width:760px){.agent-calculator[_ngcontent-%COMP%]{padding:18px}.agent-calculator__hero[_ngcontent-%COMP%]{position:static;padding:18px}.hero-score__ring[_ngcontent-%COMP%]{width:136px}.dimension-card__head[_ngcontent-%COMP%], .dimension-card__identity[_ngcontent-%COMP%], .summary-card__score-row[_ngcontent-%COMP%], .summary-card__meta-list[_ngcontent-%COMP%]{grid-template-columns:1fr}.dimension-card__score[_ngcontent-%COMP%], .hero-score__grade-badge[_ngcontent-%COMP%], .summary-card__score[_ngcontent-%COMP%]{min-width:0;width:fit-content}.dimension-card__legend[_ngcontent-%COMP%]{grid-template-columns:1fr}.dimension-card__legend-item[_ngcontent-%COMP%]{min-height:0}}"],changeDetection:0})};function sh(t,n){if(t&1&&H(0,"app-relationship-value-explorer",0),t&2){let e=M();$("title",e.title()||"Relationship-Value Explorer")("description",e.description()||"Explore how client relationships, delivered services, employee expertise, and white-space opportunities connect into an actionable revenue intelligence graph.")}}function lh(t,n){if(t&1&&H(0,"app-agent-grading-calculator",1),t&2){let e=M();$("title",e.title()||"Agent Grading Calculator")("description",e.description()||"Score an enterprise AI agent across seven dimensions and review the resulting governance posture.")("config",e.config())}}function ch(t,n){if(t&1&&(m(0,"aside",2)(1,"h3"),k(2),f(),m(3,"p"),k(4),f()()),t&2){let e=M();p(2),O(e.fallbackTitle()),p(2),O(e.fallbackDescription())}}var ir=class t{componentKey=Se.required();fallback=Se();title=Se();description=Se();config=Se();registeredComponent=Y(()=>{let n=this.componentKey();return ca(n)?kr[n]:null});fallbackTitle=Y(()=>this.title()||"Interactive component unavailable");fallbackDescription=Y(()=>this.description()||this.fallback()||"This interactive artifact is not available yet.");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Q({type:t,selectors:[["app-interactive-content-block"]],inputs:{componentKey:[1,"componentKey"],fallback:[1,"fallback"],title:[1,"title"],description:[1,"description"],config:[1,"config"]},decls:3,vars:1,consts:[[3,"title","description"],[3,"title","description","config"],[1,"interactive-fallback"]],template:function(e,i){if(e&1&&I(0,sh,1,2,"app-relationship-value-explorer",0)(1,lh,1,3,"app-agent-grading-calculator",1)(2,ch,5,2,"aside",2),e&2){let r;E((r=(r=i.registeredComponent())==null?null:r.key)==="relationship-value-explorer"?0:r==="agent-grading-calculator"?1:2)}},dependencies:[tr,nr],styles:["[_nghost-%COMP%]{display:block}.interactive-fallback[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:18px;background:var(--cw-panel);padding:22px 24px;display:grid;gap:10px}h3[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;color:var(--cw-ink)}p[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.7}"],changeDetection:0})};function dh(t,n){return this.trackSection(n,t)}function Jl(t,n){return this.trackBlock(n,t)}var ec=(t,n)=>n.title;function uh(t,n){if(t&1&&(m(0,"p",3),k(1),f()),t&2){let e=M().$implicit;p(),O(e.eyebrow)}}function mh(t,n){if(t&1&&(m(0,"p",4),k(1),f()),t&2){let e=M().$implicit;p(),O(e.intro)}}function hh(t,n){if(t&1&&(m(0,"p"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function ph(t,n){if(t&1&&Z(0,hh,2,1,"p",null,_e),t&2){let e=M(2).$implicit;J(e.paragraphs)}}function fh(t,n){if(t&1&&H(0,"app-interactive-content-block",7),t&2){let e=M(2).$implicit;$("componentKey",e.component)("fallback",e.fallback)("title",e.componentTitle)("description",e.componentDescription)("config",e.componentConfig)}}function gh(t,n){if(t&1&&(m(0,"p"),k(1),f()),t&2){let e=M().$implicit;p(),O(e.text)}}function _h(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function bh(t,n){if(t&1&&(m(0,"aside",9),I(1,_h,2,1,"h3"),m(2,"p"),k(3),f()()),t&2){let e=M().$implicit;me("data-tone",e.tone??"neutral"),p(),E(e.title?1:-1),p(2),O(e.text)}}function vh(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function yh(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function xh(t,n){if(t&1&&(m(0,"div",10),I(1,vh,2,1,"h3"),m(2,"ul"),Z(3,yh,2,1,"li",null,_e),f()()),t&2){let e=M().$implicit;p(),E(e.title?1:-1),p(2),J(e.items)}}function kh(t,n){if(t&1&&H(0,"app-interactive-content-block",7),t&2){let e=M().$implicit;$("componentKey",e.component)("fallback",e.fallback)("title",e.title)("description",e.description)("config",e.config)}}function Ch(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function wh(t,n){if(t&1&&(m(0,"th",21),k(1),f()),t&2){let e=M().$implicit;p(),O(e)}}function Mh(t,n){if(t&1&&(m(0,"td",22),k(1),f()),t&2){let e=n.$implicit,i=M().$index,r=M(6);p(),O(r.tableCellAt(e,i))}}function Sh(t,n){if(t&1&&(vn(0,16),Tt(1,wh,2,1,"th",19)(2,Mh,2,1,"td",20),yn()),t&2){let e=n.$index,i=M(6);$("matColumnDef",i.tableColumnId(e))}}function Rh(t,n){t&1&&H(0,"tr",23)}function Oh(t,n){t&1&&H(0,"tr",24)}function Th(t,n){if(t&1&&(m(0,"mat-card",11),I(1,Ch,2,1,"h3"),m(2,"div",14)(3,"table",15),Z(4,Sh,3,1,"ng-container",16,_e),Tt(6,Rh,1,0,"tr",17)(7,Oh,1,0,"tr",18),f()()()),t&2){let e=M().$implicit,i=M(4);p(),E(e.title?1:-1),p(2),$("dataSource",e.rows),p(),J(e.columns),p(2),$("matHeaderRowDef",i.tableColumnIds(e)),p(),$("matRowDefColumns",i.tableColumnIds(e))}}function Dh(t,n){if(t&1&&(m(0,"mat-card",25)(1,"h3"),k(2),f(),m(3,"p"),k(4),f()()),t&2){let e=n.$implicit;p(2),O(e.title),p(2),O(e.description)}}function Ih(t,n){if(t&1&&(m(0,"div",12),Z(1,Dh,5,2,"mat-card",25,ec),f()),t&2){let e=M().$implicit;p(),J(e.items)}}function Eh(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function Ph(t,n){if(t&1&&(m(0,"mat-chip-set")(1,"mat-chip"),k(2),f()()),t&2){let e=M(2).$implicit;p(2),O(e.language)}}function Ah(t,n){if(t&1&&(m(0,"mat-card",13),I(1,Eh,2,1,"h3"),I(2,Ph,3,1,"mat-chip-set"),m(3,"pre")(4,"code"),k(5),f()()()),t&2){let e=M().$implicit;p(),E(e.title?1:-1),p(),E(e.language?2:-1),p(3),O(e.code)}}function Nh(t,n){if(t&1&&I(0,gh,2,1,"p")(1,bh,4,3,"aside",9)(2,xh,5,1,"div",10)(3,kh,1,5,"app-interactive-content-block",7)(4,Th,8,4,"mat-card",11)(5,Ih,3,0,"div",12)(6,Ah,6,3,"mat-card",13),t&2){let e,i=n.$implicit;E((e=i.type)==="paragraph"?0:e==="callout"?1:e==="list"?2:e==="component"?3:e==="table"?4:e==="cards"?5:e==="code"?6:-1)}}function Fh(t,n){if(t&1&&Z(0,Nh,7,1,null,null,Jl,!0),t&2){let e=M(2).$implicit,i=M();J(i.sectionTextBlocks(e))}}function Vh(t,n){if(t&1&&(m(0,"figcaption"),k(1),f()),t&2){let e=M();p(),O(e.caption)}}function Bh(t,n){if(t&1){let e=et();m(0,"figure",8)(1,"button",26),q("click",function(){let r=Ue(e),o=M(3);return Ge(o.openImage(r))}),H(2,"img",27),f(),I(3,Vh,2,1,"figcaption"),f()}if(t&2){let e=n;p(),me("aria-label","Open image: "+e.alt),p(),$("src",e.src,gn)("alt",e.alt),p(),E(e.caption?3:-1)}}function zh(t,n){if(t&1&&(m(0,"div",5)(1,"div",6),I(2,ph,2,0),I(3,fh,1,5,"app-interactive-content-block",7),I(4,Fh,2,0),f(),I(5,Bh,4,4,"figure",8),f()),t&2){let e,i=M().$implicit,r=M();p(2),E(i.paragraphs!=null&&i.paragraphs.length?2:-1),p(),E(i.component?3:-1),p(),E(r.sectionTextBlocks(i).length?4:-1),p(),E((e=r.sectionImage(i))?5:-1,e)}}function Lh(t,n){if(t&1&&(m(0,"p"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function $h(t,n){if(t&1&&Z(0,Lh,2,1,"p",null,_e),t&2){let e=M(2).$implicit;J(e.paragraphs)}}function Uh(t,n){if(t&1&&(m(0,"figcaption"),k(1),f()),t&2){let e=M();p(),O(e.caption)}}function Gh(t,n){if(t&1){let e=et();m(0,"figure",28)(1,"button",26),q("click",function(){let r=Ue(e),o=M(3);return Ge(o.openImage(r))}),H(2,"img",27),f(),I(3,Uh,2,1,"figcaption"),f()}if(t&2){let e=n;p(),me("aria-label","Open image: "+e.alt),p(),$("src",e.src,gn)("alt",e.alt),p(),E(e.caption?3:-1)}}function Hh(t,n){if(t&1&&H(0,"app-interactive-content-block",7),t&2){let e=M(2).$implicit;$("componentKey",e.component)("fallback",e.fallback)("title",e.componentTitle)("description",e.componentDescription)("config",e.componentConfig)}}function Xh(t,n){if(t&1&&(m(0,"p"),k(1),f()),t&2){let e=M().$implicit;p(),O(e.text)}}function Wh(t,n){if(t&1&&(m(0,"figcaption"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.caption)}}function qh(t,n){if(t&1){let e=et();m(0,"figure",28)(1,"button",26),q("click",function(){Ue(e);let r=M().$implicit,o=M(4);return Ge(o.openImage(r))}),H(2,"img",27),f(),I(3,Wh,2,1,"figcaption"),f()}if(t&2){let e=M().$implicit;p(),me("aria-label","Open image: "+e.alt),p(),$("src",e.src,gn)("alt",e.alt),p(),E(e.caption?3:-1)}}function jh(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function Qh(t,n){if(t&1&&(m(0,"aside",9),I(1,jh,2,1,"h3"),m(2,"p"),k(3),f()()),t&2){let e=M().$implicit;me("data-tone",e.tone??"neutral"),p(),E(e.title?1:-1),p(2),O(e.text)}}function Yh(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function Kh(t,n){if(t&1&&(m(0,"li"),k(1),f()),t&2){let e=n.$implicit;p(),O(e)}}function Zh(t,n){if(t&1&&(m(0,"div",10),I(1,Yh,2,1,"h3"),m(2,"ul"),Z(3,Kh,2,1,"li",null,_e),f()()),t&2){let e=M().$implicit;p(),E(e.title?1:-1),p(2),J(e.items)}}function Jh(t,n){if(t&1&&H(0,"app-interactive-content-block",7),t&2){let e=M().$implicit;$("componentKey",e.component)("fallback",e.fallback)("title",e.title)("description",e.description)("config",e.config)}}function ep(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function tp(t,n){if(t&1&&(m(0,"th",21),k(1),f()),t&2){let e=M().$implicit;p(),O(e)}}function np(t,n){if(t&1&&(m(0,"td",22),k(1),f()),t&2){let e=n.$implicit,i=M().$index,r=M(6);p(),O(r.tableCellAt(e,i))}}function ip(t,n){if(t&1&&(vn(0,16),Tt(1,tp,2,1,"th",19)(2,np,2,1,"td",20),yn()),t&2){let e=n.$index,i=M(6);$("matColumnDef",i.tableColumnId(e))}}function rp(t,n){t&1&&H(0,"tr",23)}function op(t,n){t&1&&H(0,"tr",24)}function ap(t,n){if(t&1&&(m(0,"mat-card",11),I(1,ep,2,1,"h3"),m(2,"div",14)(3,"table",15),Z(4,ip,3,1,"ng-container",16,_e),Tt(6,rp,1,0,"tr",17)(7,op,1,0,"tr",18),f()()()),t&2){let e=M().$implicit,i=M(4);p(),E(e.title?1:-1),p(2),$("dataSource",e.rows),p(),J(e.columns),p(2),$("matHeaderRowDef",i.tableColumnIds(e)),p(),$("matRowDefColumns",i.tableColumnIds(e))}}function sp(t,n){if(t&1&&(m(0,"mat-card",25)(1,"h3"),k(2),f(),m(3,"p"),k(4),f()()),t&2){let e=n.$implicit;p(2),O(e.title),p(2),O(e.description)}}function lp(t,n){if(t&1&&(m(0,"div",12),Z(1,sp,5,2,"mat-card",25,ec),f()),t&2){let e=M().$implicit;p(),J(e.items)}}function cp(t,n){if(t&1&&(m(0,"h3"),k(1),f()),t&2){let e=M(2).$implicit;p(),O(e.title)}}function dp(t,n){if(t&1&&(m(0,"mat-chip-set")(1,"mat-chip"),k(2),f()()),t&2){let e=M(2).$implicit;p(2),O(e.language)}}function up(t,n){if(t&1&&(m(0,"mat-card",13),I(1,cp,2,1,"h3"),I(2,dp,3,1,"mat-chip-set"),m(3,"pre")(4,"code"),k(5),f()()()),t&2){let e=M().$implicit;p(),E(e.title?1:-1),p(),E(e.language?2:-1),p(3),O(e.code)}}function mp(t,n){if(t&1&&I(0,Xh,2,1,"p")(1,qh,4,4,"figure",28)(2,Qh,4,3,"aside",9)(3,Zh,5,1,"div",10)(4,Jh,1,5,"app-interactive-content-block",7)(5,ap,8,4,"mat-card",11)(6,lp,3,0,"div",12)(7,up,6,3,"mat-card",13),t&2){let e,i=n.$implicit;E((e=i.type)==="paragraph"?0:e==="image"?1:e==="callout"?2:e==="list"?3:e==="component"?4:e==="table"?5:e==="cards"?6:e==="code"?7:-1)}}function hp(t,n){if(t&1&&Z(0,mp,8,1,null,null,Jl,!0),t&2){let e=M(2).$implicit;J(e.blocks)}}function pp(t,n){if(t&1&&(I(0,$h,2,0),I(1,Gh,4,4,"figure",28),I(2,Hh,1,5,"app-interactive-content-block",7),I(3,hp,2,0)),t&2){let e,i=M().$implicit;E(i.paragraphs!=null&&i.paragraphs.length?0:-1),p(),E((e=i.image)?1:-1,e),p(),E(i.component?2:-1),p(),E(i.blocks!=null&&i.blocks.length?3:-1)}}function fp(t,n){if(t&1&&(m(0,"blockquote"),k(1),f()),t&2){let e=M().$implicit;p(),O(e.callout)}}function gp(t,n){if(t&1&&(m(0,"section",2),I(1,uh,2,1,"p",3),m(2,"h2"),k(3),f(),I(4,mh,2,1,"p",4),I(5,zh,6,4,"div",5)(6,pp,4,4),I(7,fp,2,1,"blockquote"),f()),t&2){let e=n.$implicit,i=M();re("content-section--split",i.isSplitSection(e))("content-section--split-left",e.layout==="split-image-left"),$("id",i.sectionId(e)),p(),E(e.eyebrow?1:-1),p(2),O(e.heading),p(),E(e.intro?4:-1),p(),E(i.isSplitSection(e)?5:6),p(2),E(e.callout?7:-1)}}function _p(t,n){if(t&1&&(m(0,"p",37),k(1),f()),t&2){let e=M();p(),O(e.caption)}}function bp(t,n){if(t&1){let e=et();m(0,"div",29),q("click",function(){Ue(e);let r=M();return Ge(r.closeImage())}),m(1,"div",30),q("click",function(r){return r.stopPropagation()}),m(2,"button",31),q("click",function(){Ue(e);let r=M();return Ge(r.closeImage())}),m(3,"mat-icon"),k(4,"close"),f()(),m(5,"div",32),H(6,"img",33)(7,"img",34),f(),m(8,"div",35)(9,"p",36),k(10),f(),I(11,_p,2,1,"p",37),f()()()}if(t&2){let e=n;p(7),$("src",e.src,gn)("alt",e.alt),p(3),O(e.alt),p(),E(e.caption?11:-1)}}var Zl=class t{sections=Se.required();activeImage=ce(null);trackSection(n,e){return`${this.sectionId(n)}-${e}`}trackBlock(n,e){switch(n.type){case"paragraph":return`paragraph-${e}-${n.text}`;case"image":return`image-${e}-${n.src}`;case"callout":return`callout-${e}-${n.title??n.text}`;case"list":return`list-${e}-${n.title??"items"}`;case"table":return`table-${e}-${n.title??n.columns.join("-")}`;case"cards":return`cards-${e}-${n.items.map(i=>i.title).join("-")}`;case"code":return`code-${e}-${n.title??n.language??"block"}`;case"component":return`component-${e}-${n.component}`}}tableColumnIds(n){return n.columns.map((e,i)=>this.tableColumnId(i))}tableColumnId(n){return`column-${n}`}tableCellAt(n,e){return n[e]??""}sectionId(n){return n.heading.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}openImage(n){this.activeImage.set(n)}closeImage(){this.activeImage.set(null)}isSplitSection(n){return(n.layout==="split-image-right"||n.layout==="split-image-left")&&!!this.sectionImage(n)}sectionImage(n){return n.image?n.image:n.blocks?.find(i=>i.type==="image")??null}sectionTextBlocks(n){if(!n.blocks?.length)return[];let e=!1;return n.blocks.filter(i=>!e&&i.type==="image"?(e=!0,!1):!0)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Q({type:t,selectors:[["cw-content-renderer"]],inputs:{sections:[1,"sections"]},decls:3,vars:1,consts:[[1,"content-section",3,"content-section--split","content-section--split-left","id"],[1,"lightbox-backdrop"],[1,"content-section",3,"id"],[1,"content-section-eyebrow"],[1,"section-intro"],[1,"content-section__split"],[1,"content-section__prose"],[3,"componentKey","fallback","title","description","config"],[1,"content-image","content-image--split"],[1,"content-callout"],[1,"content-list"],["appearance","outlined",1,"content-table"],[1,"content-card-grid"],["appearance","outlined",1,"content-code-block"],[1,"content-table__scroll"],["mat-table","",1,"content-material-table",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["appearance","outlined",1,"content-card"],["type","button",1,"content-image-button",3,"click"],[3,"src","alt"],[1,"content-image"],[1,"lightbox-backdrop",3,"click"],[1,"lightbox-dialog",3,"click"],["mat-icon-button","","type","button","aria-label","Close image viewer",1,"lightbox-close",3,"click"],[1,"lightbox-stage"],["src","assets/images/cweise_logo_dark_mode.svg","alt","","aria-hidden","true",1,"lightbox-watermark"],[1,"lightbox-image",3,"src","alt"],[1,"lightbox-meta"],[1,"lightbox-title"],[1,"lightbox-caption"]],template:function(e,i){if(e&1&&(Z(0,gp,8,10,"section",0,dh,!0),I(2,bp,12,4,"div",1)),e&2){let r;J(i.sections()),p(2),E((r=i.activeImage())?2:-1,r)}},dependencies:[Yt,ni,ai,oi,ci,si,li,Zt,Kt,la,Zo,ea,ra,ta,Jo,oa,na,ia,aa,sa,ir],styles:["[_nghost-%COMP%]{display:grid;gap:40px}.content-section[_ngcontent-%COMP%]{display:grid;gap:16px;scroll-margin-top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 24px)}.content-section__split[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,.95fr) minmax(360px,.95fr);gap:28px;align-items:start}.content-section--split-left[_ngcontent-%COMP%]   .content-section__prose[_ngcontent-%COMP%]{order:2}.content-section--split-left[_ngcontent-%COMP%]   .content-image--split[_ngcontent-%COMP%]{order:1}.content-section__prose[_ngcontent-%COMP%]{display:grid;gap:16px;min-width:0}.content-section-eyebrow[_ngcontent-%COMP%]{margin:0;font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--cw-accent)}h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;letter-spacing:-.03em}h3[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;color:var(--cw-ink)}p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);line-height:1.8}.section-intro[_ngcontent-%COMP%]{color:var(--cw-ink);font-weight:500}.content-image[_ngcontent-%COMP%]{margin:4px 0 0;display:grid;gap:10px;width:min(100%,1120px)}.content-image--split[_ngcontent-%COMP%]{width:100%;margin-top:0;position:sticky;top:calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 28px)}.content-image-button[_ngcontent-%COMP%]{appearance:none;border:0;padding:0;margin:0;background:none;display:block;cursor:zoom-in;border-radius:16px;overflow:hidden}.content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;border-radius:16px;border:1px solid var(--cw-line);background:var(--cw-panel)}.content-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{color:var(--cw-muted);font-size:.95rem;line-height:1.6}.content-callout[_ngcontent-%COMP%], .component-fallback[_ngcontent-%COMP%], .content-list[_ngcontent-%COMP%]{border:1px solid var(--cw-line);border-radius:16px;background:var(--cw-panel);padding:20px 22px;display:grid;gap:10px;max-width:980px}app-interactive-content-block[_ngcontent-%COMP%]{display:block;width:min(100%,1120px)}.content-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%] > .section-intro[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%] > blockquote[_ngcontent-%COMP%]{max-width:980px}.content-section__prose[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .section-intro[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > blockquote[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-callout[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-list[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-table[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-card-grid[_ngcontent-%COMP%], .content-section__prose[_ngcontent-%COMP%] > .content-code-block[_ngcontent-%COMP%]{max-width:none}.content-callout[data-tone=executive][_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-accent) 5%,var(--cw-panel))}.content-callout[data-tone=technical][_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-hero-mid) 22%,var(--cw-panel))}.content-callout[data-tone=warning][_ngcontent-%COMP%]{background:color-mix(in srgb,#f59e0b 10%,var(--cw-panel))}.content-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:1.15rem;display:grid;gap:8px}.content-table__scroll[_ngcontent-%COMP%]{overflow-x:auto}.content-table[_ngcontent-%COMP%]{padding:0;overflow:hidden;background:var(--cw-panel)!important;border-color:var(--cw-line)!important}.content-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-code-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:20px 22px 0}.content-material-table[_ngcontent-%COMP%]{width:100%;min-width:640px;background:transparent}.content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .content-material-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:12px 14px;vertical-align:top;color:var(--cw-muted)!important;line-height:1.6;border-bottom-color:var(--cw-line);background:transparent}.content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:.82rem;text-transform:uppercase;letter-spacing:.08em;color:var(--cw-ink)!important}.content-card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;width:min(100%,1120px)}.content-card[_ngcontent-%COMP%]{display:grid;gap:8px;padding:18px 20px;border:1px solid var(--cw-line);border-radius:16px;background:var(--cw-panel)!important}.content-code-block[_ngcontent-%COMP%]{position:relative;width:min(100%,1120px);padding:0 0 20px;background:linear-gradient(180deg,#13263a,#0d1d2e);border-color:color-mix(in srgb,var(--cw-line) 40%,#18324a)}.content-code-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#f8fafcf5}.content-code-block[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{padding:0 22px}.content-code-block[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{background:#ffffff24;color:#f1f5f9eb}.content-code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0 22px;padding:18px;border-radius:14px;background:#08111db8;color:#f1f5f9f5;overflow-x:auto;border:1px solid rgba(255,255,255,.08)}.content-code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:SFMono-Regular,SF Mono,Consolas,monospace;font-size:.9rem;color:#f1f5f9f5;white-space:pre}blockquote[_ngcontent-%COMP%]{margin:0;padding:18px 20px;border-left:4px solid var(--cw-accent);background:color-mix(in srgb,var(--cw-accent) 6%,var(--cw-panel));color:var(--cw-ink);border-radius:12px;line-height:1.75}.lightbox-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;background:#080f1ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:grid;place-items:center;padding:24px}.lightbox-dialog[_ngcontent-%COMP%]{position:relative;width:min(96vw,1440px);max-height:calc(100vh - 48px);display:grid;gap:16px}.lightbox-close[_ngcontent-%COMP%]{justify-self:end;color:#fff;border:1px solid rgba(255,255,255,.2);background:#ffffff14}.lightbox-stage[_ngcontent-%COMP%]{position:relative;min-height:0;display:grid;place-items:center;padding:20px;border-radius:24px;background:linear-gradient(180deg,#0d192af5,#08111ef5);overflow:hidden}.lightbox-watermark[_ngcontent-%COMP%]{position:absolute;inset:0;width:min(44vw,520px);max-width:70%;height:auto;margin:auto;opacity:.08;pointer-events:none;filter:brightness(1.2)}.lightbox-image[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;width:auto;max-width:100%;max-height:calc(100vh - 180px);height:auto;object-fit:contain;border-radius:18px;box-shadow:0 24px 60px #00000073}.lightbox-meta[_ngcontent-%COMP%]{position:relative;z-index:1;display:grid;gap:6px;justify-items:center;text-align:center}.lightbox-title[_ngcontent-%COMP%], .lightbox-caption[_ngcontent-%COMP%]{color:#ffffffeb}.lightbox-title[_ngcontent-%COMP%]{font-weight:700}.lightbox-caption[_ngcontent-%COMP%]{max-width:min(80ch,100%);color:#ffffffb8}body.cw-theme-dusk[_nghost-%COMP%]   .content-table[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-table[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-card[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-card[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-code-block[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-code-block[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-callout[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-callout[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-list[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-list[_ngcontent-%COMP%]{background:var(--cw-panel)!important;border-color:var(--cw-line)!important}body.cw-theme-dusk[_nghost-%COMP%]   .content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-material-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{color:var(--cw-ink)!important}body.cw-theme-dusk[_nghost-%COMP%]   .content-material-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-material-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-code-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-code-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--cw-muted)!important}@media(max-width:860px){.content-section__split[_ngcontent-%COMP%], .content-card-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.content-section--split-left[_ngcontent-%COMP%]   .content-section__prose[_ngcontent-%COMP%], .content-section--split-left[_ngcontent-%COMP%]   .content-image--split[_ngcontent-%COMP%]{order:initial}.content-image--split[_ngcontent-%COMP%]{position:static}}@media(max-width:720px){.lightbox-backdrop[_ngcontent-%COMP%]{padding:12px}.lightbox-dialog[_ngcontent-%COMP%]{width:100%;max-height:calc(100vh - 24px)}.lightbox-stage[_ngcontent-%COMP%]{padding:12px;border-radius:18px}.lightbox-image[_ngcontent-%COMP%]{max-height:calc(100vh - 150px)}}"],changeDetection:0})};export{oc as a,sf as b,Uo as c,$o as d,Ho as e,wn as f,da as g,Bo as h,zo as i,di as j,Zl as k};
