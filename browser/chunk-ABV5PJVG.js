import{I as p,J as A,K as m,N as P,X as N,Y as y,p as R,r as I}from"./chunk-HYBAZBDY.js";import{$ as a,A as z,B as b,W as v,X as x,Z as T,bb as S,cb as B,cc as k,f as D,g as V,h as f,jb as C,ka as M,kb as w,lb as L,o as O,oa as g,ya as F}from"./chunk-4IQU2B5H.js";var E=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new f;constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(i=>this._markSelected(i)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(i=>this._getConcreteValue(i)));n.forEach(i=>this._markSelected(i)),e.filter(i=>!t.has(this._getConcreteValue(i,t))).forEach(i=>this._unmarkSelected(i));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};function K(r){return r&&typeof r.connect=="function"&&!(r instanceof V)}var h=(function(r){return r[r.REPLACED=0]="REPLACED",r[r.INSERTED=1]="INSERTED",r[r.MOVED=2]="MOVED",r[r.REMOVED=3]="REMOVED",r})(h||{}),W=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,o,i){n.forEachOperation((s,l,u)=>{let c,d;if(s.previousIndex==null){let _=()=>t(s,l,u);c=this._insertView(_,u,e,o(s)),d=c?h.INSERTED:h.REPLACED}else u==null?(this._detachAndCacheView(l,e),d=h.REMOVED):(c=this._moveView(l,u,e,o(s)),d=h.MOVED);i&&i({context:c?.context,operation:d,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,o){let i=this._insertViewFromCache(e,t);if(i){i.context.$implicit=o;return}let s=n();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,o){let i=t.get(n);return t.move(i,e),i.context.$implicit=o,i}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var j=class{applyChanges(n,e,t,o,i){n.forEachOperation((s,l,u)=>{let c,d;if(s.previousIndex==null){let _=t(s,l,u);c=e.createEmbeddedView(_.templateRef,_.context,_.index),d=h.INSERTED}else u==null?(e.remove(l),d=h.REMOVED):(c=e.get(l),e.move(c,u),d=h.MOVED);i&&i({context:c?.context,operation:d,record:s})})}detach(){}};var se=(()=>{class r{_animationsDisabled=P();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&k("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return r})();var Z=20,G=(()=>{class r{_ngZone=a(g);_platform=a(R);_renderer=a(S).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new f;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Z){return this._platform.isBrowser?new D(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(b(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):O()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(z(i=>!i||o.indexOf(i)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,i)=>{this._scrollableContainsElement(i,e)&&t.push(i)}),t}_scrollableContainsElement(e,t){let o=I(t),i=e.getElementRef().nativeElement;do if(o==i)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||r)};static \u0275prov=v({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),lt=(()=>{class r{elementRef=a(F);scrollDispatcher=a(G);ngZone=a(g);dir=a(N,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new f;_renderer=a(B);_cleanupScroll;_elementScrolled=new f;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&m()!=p.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),m()==p.INVERTED?e.left=e.right:m()==p.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;A()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",i=this.elementRef.nativeElement;if(e=="top")return i.scrollTop;if(e=="bottom")return i.scrollHeight-i.clientHeight-i.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?o:t:e=="end"&&(e=s?t:o),s&&m()==p.INVERTED?e==t?i.scrollWidth-i.clientWidth-i.scrollLeft:i.scrollLeft:s&&m()==p.NEGATED?e==t?i.scrollLeft+i.scrollWidth-i.clientWidth:-i.scrollLeft:e==t?i.scrollLeft:i.scrollWidth-i.clientWidth-i.scrollLeft}static \u0275fac=function(t){return new(t||r)};static \u0275dir=L({type:r,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return r})(),Q=20,ct=(()=>{class r{_platform=a(R);_listeners;_viewportSize=null;_change=new f;_document=a(M);constructor(){let e=a(g),t=a(S).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=i=>this._change.next(i);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,i=o.getBoundingClientRect(),s=-i.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,l=-i.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:s,left:l}}change(e=Q){return e>0?this._change.pipe(b(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=v({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var dt=new T("CDK_VIRTUAL_SCROLL_VIEWPORT");var U=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=w({type:r});static \u0275inj=x({})}return r})(),ht=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=w({type:r});static \u0275inj=x({imports:[y,U,y,U]})}return r})();export{K as a,h as b,W as c,E as d,j as e,se as f,G as g,lt as h,ct as i,dt as j,U as k,ht as l};
