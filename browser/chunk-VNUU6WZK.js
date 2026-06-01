import{a as Kt,g as Xt,h as Yt,i as Zt,j as Jt,k as te,l as ee,m as et}from"./chunk-ZYCS4OS6.js";import"./chunk-ABV5PJVG.js";import"./chunk-J45SPNPA.js";import{b as Y}from"./chunk-DTEWZXLN.js";import{a as Z,c as J,h as tt}from"./chunk-VVF72USU.js";import{e as X}from"./chunk-YF5WZ36I.js";import{$ as N,N as Wt,P as G,R as Nt,S as jt,V as Vt,W as Qt,Y as qt,Z as Ut,_ as W,aa as j,ba as V,d as At,ga as $t,l as zt,m as dt,p as Rt,q as Ft,t as Ht,w as Bt,x as Gt}from"./chunk-HYBAZBDY.js";import{$ as p,Ac as Dt,Bb as S,Bc as K,Cb as I,Db as g,Eb as n,Fb as r,Gb as b,Nb as z,O as vt,Rb as x,Sa as C,Sb as h,Tb as lt,Ua as st,Ub as E,Vb as mt,Wa as c,Wb as R,X as wt,Xb as _,Yb as u,Z as rt,bc as F,cc as k,d as ft,dc as $,ec as s,fa as D,fc as m,ga as A,gc as H,hc as Ot,ic as St,ja as yt,jb as P,jc as It,ka as kt,kb as Mt,kc as B,la as Ct,lb as M,nc as Lt,oa as Pt,ob as q,qc as Et,ra as f,rc as Tt,wa as Q,wb as O,wc as y,xb as v,ya as U,yb as w,z as xt,zb as ct}from"./chunk-4IQU2B5H.js";var me=["*"];var de=["unscopedContent"],he=["text"],pe=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ge=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var _e=new rt("ListOption"),gt=(()=>{class a{_elementRef=p(U);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return a})(),_t=(()=>{class a{_elementRef=p(U);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return a})(),ue=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return a})(),ie=(()=>{class a{_listOption=p(_e,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,hostVars:4,hostBindings:function(e,o){e&2&&k("mdc-list-item__start",o._isAlignedAtStart())("mdc-list-item__end",!o._isAlignedAtStart())}})}return a})(),be=(()=>{class a extends ie{static \u0275fac=(()=>{let t;return function(o){return(t||(t=Q(a)))(o||a)}})();static \u0275dir=M({type:a,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[q]})}return a})(),ut=(()=>{class a extends ie{static \u0275fac=(()=>{let t;return function(o){return(t||(t=Q(a)))(o||a)}})();static \u0275dir=M({type:a,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[q]})}return a})(),fe=new rt("MAT_LIST_CONFIG"),ht=(()=>{class a{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=G(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(G(t))}_disabled=f(!1);_defaultOptions=p(fe,{optional:!0});static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,hostVars:1,hostBindings:function(e,o){e&2&&O("aria-disabled",o.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return a})(),xe=(()=>{class a{_elementRef=p(U);_ngZone=p(Pt);_listBase=p(ht,{optional:!0});_platform=p(Rt);_hostElement;_isButtonElement;_noopAnimations=Wt();_avatars;_icons;set lines(t){this._explicitLines=Ft(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=G(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(G(t))}_disabled=f(!1);_subscriptions=new ft;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p(Ht).load(Vt);let t=p(jt,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Nt(this,this._ngZone,this._hostElement,this._platform,p(yt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(xt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),o=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let l=this._titles.length===0&&e===1;o.classList.toggle("mdc-list-item__primary-text",l),o.classList.toggle("mdc-list-item__secondary-text",!l)}else o.classList.remove("mdc-list-item__primary-text"),o.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=M({type:a,contentQueries:function(e,o,l){if(e&1&&mt(l,be,4)(l,ut,4),e&2){let d;_(d=u())&&(o._avatars=d),_(d=u())&&(o._icons=d)}},hostVars:4,hostBindings:function(e,o){e&2&&(O("aria-disabled",o.disabled)("disabled",o._isButtonElement&&o.disabled||null),k("mdc-list-item--disabled",o.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return a})();var ne=(()=>{class a extends ht{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(o){return(t||(t=Q(a)))(o||a)}})();static \u0275cmp=P({type:a,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Lt([{provide:ht,useExisting:a}]),q],ngContentSelectors:me,decls:1,vars:0,template:function(e,o){e&1&&(lt(),E(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`],encapsulation:2,changeDetection:0})}return a})();var ae=(()=>{class a extends xe{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=G(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Q(a)))(o||a)}})();static \u0275cmp=P({type:a,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,o,l){if(e&1&&mt(l,_t,5)(l,gt,5)(l,ue,5),e&2){let d;_(d=u())&&(o._lines=d),_(d=u())&&(o._titles=d),_(d=u())&&(o._meta=d)}},viewQuery:function(e,o){if(e&1&&R(de,5)(he,5),e&2){let l;_(l=u())&&(o._unscopedContent=l.first),_(l=u())&&(o._itemText=l.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,o){e&2&&(O("aria-current",o._getAriaCurrent()),k("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[q],ngContentSelectors:ge,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,o){e&1&&(lt(pe),E(0),n(1,"span",1),E(2,1),E(3,2),n(4,"span",2,0),x("cdkObserveContent",function(){return o._updateItemLines(!0)}),E(6,3),r()(),E(7,4),E(8,5),b(9,"div",3))},dependencies:[Bt],encapsulation:2,changeDetection:0})}return a})();var it=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=Mt({type:a});static \u0275inj=wt({imports:[Gt,Ut,Kt,qt,Y]})}return a})();var oe={eyebrow:"Live Operating Story",headline:"A running release stream in three acts.",support:"This is not a static archive. The last few weeks expose the operating problem, the current work turns it into structure, and the next releases push that structure toward governed assets and usable tools.",spritePath:"assets/images/home/story-path/story_path_sprite_sheet_morph_test.webp",sequence:{total_frames:188,segments:[{image:"b_002_01.png",index:0,hold_start_frame:0,hold_end_frame:7,transition_start_frame:8,transition_end_frame:19,next_image:"b_002_02.png",scroll_progress_start:0,scroll_progress_end:.101604},{image:"b_002_02.png",index:1,hold_start_frame:20,hold_end_frame:27,transition_start_frame:28,transition_end_frame:39,next_image:"b_003_01.png",scroll_progress_start:.106952,scroll_progress_end:.208556},{image:"b_003_01.png",index:2,hold_start_frame:40,hold_end_frame:47,transition_start_frame:48,transition_end_frame:59,next_image:"b_003_02.png",scroll_progress_start:.213904,scroll_progress_end:.315508},{image:"b_003_02.png",index:3,hold_start_frame:60,hold_end_frame:67,transition_start_frame:68,transition_end_frame:79,next_image:"b_004_01.png",scroll_progress_start:.320856,scroll_progress_end:.42246},{image:"b_004_01.png",index:4,hold_start_frame:80,hold_end_frame:87,transition_start_frame:88,transition_end_frame:99,next_image:"b_004_02.png",scroll_progress_start:.427807,scroll_progress_end:.529412},{image:"b_004_02.png",index:5,hold_start_frame:100,hold_end_frame:107,transition_start_frame:108,transition_end_frame:119,next_image:"b_005_01.png",scroll_progress_start:.534759,scroll_progress_end:.636364},{image:"b_005_01.png",index:6,hold_start_frame:120,hold_end_frame:127,transition_start_frame:128,transition_end_frame:139,next_image:"b_005_02.png",scroll_progress_start:.641711,scroll_progress_end:.743316},{image:"b_005_02.png",index:7,hold_start_frame:140,hold_end_frame:147,transition_start_frame:148,transition_end_frame:159,next_image:"b_006_01.png",scroll_progress_start:.748663,scroll_progress_end:.850267},{image:"b_006_01.png",index:8,hold_start_frame:160,hold_end_frame:167,transition_start_frame:168,transition_end_frame:179,next_image:"b_006_02.png",scroll_progress_start:.855615,scroll_progress_end:.957219},{image:"b_006_02.png",index:9,hold_start_frame:180,hold_end_frame:187,transition_start_frame:null,transition_end_frame:null,next_image:null,scroll_progress_start:.962567,scroll_progress_end:1}],source_dir:"story_path_animation/Images",target_size:{width:1448,height:1086},fps:24,frames_per_transition:12,hold_frames:8,frame_pattern:"frames/frame_%04d.png",prefix:"b_",dominant_size_only:!0,dropped_images:["b_001_01.png","b_001_02.png","b_007_01.png","b_007_02.png"]},sprite:{sprite_sheet:"story_path_sprite_sheet.webp",frame_width:480,frame_height:360,frame_count:188,columns:8,rows:24},items:[{id:"week-01-signal",sceneLabel:"Act I \xB7 Opening diagnosis",status:"Recent",kind:"Writing",progressStart:0,progressEnd:.112,title:"Organizations Rarely Fail From a Lack of Intelligence",summary:"The opening act names the real failure mode: intelligence exists, but it dies while crossing priorities, translation layers, ownership boundaries, and execution.",continuity:"This is the problem statement the rest of the stream keeps working against.",slug:"writing/2026/05/12/organizations-rarely-fail-from-a-lack-of-intelligence"},{id:"week-02-loop",sceneLabel:"Act I \xB7 Building the route",status:"Recent",kind:"Framework",progressStart:.112,progressEnd:.224,title:"Systems Translation Loop",summary:"Once the failure is named, the next move is to give intent a route that can survive the trip from strategy into workflow, systems, and validation.",continuity:"This is where diagnosis starts becoming an operating path instead of commentary.",slug:"frameworks/2026/03/18/systems-translation-loop"},{id:"week-03-friction",sceneLabel:"Act I \xB7 Exposing the drag",status:"Recent",kind:"Writing",progressStart:.224,progressEnd:.336,title:"Why Operational Friction Hides in Translation Layers",summary:"The third beat shows where the loop breaks in practice: handoffs, interface ownership, duplicated interpretation, and invisible drag.",continuity:"This is the point where the hidden operating tax becomes too visible to ignore.",slug:"writing/2026/04/28/why-operational-friction-hides-in-translation-layers"},{id:"week-04-noise",sceneLabel:"Act II \xB7 Clearing the field",status:"Current",kind:"Framework",progressStart:.336,progressEnd:.448,title:"Turn Down the Noise",summary:"The current act starts by reducing reporting clutter, weak escalation surfaces, and optics-heavy updates so decision-grade signal can actually be seen.",continuity:"Before the system can carry stronger decisions, the field around it has to get quieter.",slug:"frameworks/2026/04/14/turn-down-the-noise"},{id:"week-05-ownership",sceneLabel:"Act II \xB7 Installing ownership",status:"Current",kind:"Writing",progressStart:.448,progressEnd:.58,title:"Executive Follow-Through Requires Ownership Architecture",summary:"Follow-through becomes legible when decision rights, escalation lanes, and evidence paths are explicit enough to sustain execution.",continuity:"This is where the stream stops being conceptual and starts becoming governable.",slug:"writing/2026/03/31/executive-follow-through-requires-ownership-architecture"},{id:"week-06-agents",sceneLabel:"Act II \xB7 Reframing the asset",status:"Current",kind:"Writing",progressStart:.58,progressEnd:.72,title:"AI Agents Are Becoming Operational Capital",summary:"The present focus pushes the path into economic materiality: agents that encode judgment need classification, stewardship, and lifecycle treatment.",continuity:"This is the turn from workflow design into assets that deserve governance.",slug:"writing/2026/05/25/ai-agents-are-becoming-operational-capital"},{id:"week-07-grading",sceneLabel:"Act III \xB7 Grading the asset",status:"Next",kind:"Framework",progressStart:.72,progressEnd:.86,title:"Agent Asset Grading Framework",summary:"The next release gives leaders a decision model for which agents deserve stronger controls, deeper review, tighter telemetry, and more financial seriousness.",continuity:"This is the bridge from insight into a practical governance standard.",slug:"frameworks/2026/05/27/agent-asset-grading-framework"},{id:"week-08-tool",sceneLabel:"Act III \xB7 Shipping the tool",status:"Next",kind:"Guide",progressStart:.86,progressEnd:1,title:"A Compass, Not a Map",summary:"The closing release turns the arc into a usable guide for moving through ambiguity without over-designing the future.",continuity:"This is where the stream lands in a tool people can actually use in the room.",slug:"guides/a-compass-not-a-map"}]};var we=["artifactFrame"],nt=class a{data=p(Xt);document=p(kt);artifactFrame;printArtifact(){let i=this.document.defaultView?.open("","_blank","noopener,noreferrer");i&&(i.document.write(`
      <html>
        <head>
          <title>${this.data.title}</title>
          <style>
            body { margin: 0; padding: 24px; background: #ffffff; }
            img { display: block; width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${this.data.imageSrc}" alt="${this.data.title}" />
          <script>
            window.onload = function () { window.print(); };
          <\/script>
        </body>
      </html>
    `),i.document.close())}async enterFullscreen(){let i=this.artifactFrame?.nativeElement;if(i?.requestFullscreen){await i.requestFullscreen();return}this.document.defaultView?.open(this.data.imageSrc,"_blank","noopener,noreferrer")}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["cw-home-guide-artifact-dialog"]],viewQuery:function(t,e){if(t&1&&R(we,5),t&2){let o;_(o=u())&&(e.artifactFrame=o.first)}},decls:19,vars:4,consts:[["artifactFrame",""],["mat-dialog-title",""],[1,"guide-artifact-dialog__content"],[1,"guide-artifact-dialog__description"],[1,"guide-artifact-dialog__frame"],[3,"src","alt"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","","mat-dialog-close","","color","primary"]],template:function(t,e){t&1&&(n(0,"h2",1),s(1),r(),n(2,"mat-dialog-content",2)(3,"p",3),s(4),r(),n(5,"div",4,0),b(7,"img",5),r()(),n(8,"mat-dialog-actions",6)(9,"button",7),x("click",function(){return e.enterFullscreen()}),n(10,"mat-icon"),s(11,"fullscreen"),r(),s(12," Full screen "),r(),n(13,"button",7),x("click",function(){return e.printArtifact()}),n(14,"mat-icon"),s(15,"print"),r(),s(16," Print "),r(),n(17,"button",8),s(18,"Close"),r()()),t&2&&(c(),m(e.data.title),c(3),m(e.data.description),c(3),g("src",e.data.imageSrc,C)("alt",e.data.title))},dependencies:[N,W,et,Zt,Jt,ee,te,V,j],styles:["[_nghost-%COMP%]{display:block}.guide-artifact-dialog__content[_ngcontent-%COMP%]{display:grid;gap:16px;min-width:min(92vw,980px)}.guide-artifact-dialog__description[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);font-size:.96rem;line-height:1.45}.guide-artifact-dialog__frame[_ngcontent-%COMP%]{display:grid;place-items:center;max-height:72vh;padding:18px;border-radius:24px;background:linear-gradient(180deg,#23364d,#18293c)}.guide-artifact-dialog__frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:calc(72vh - 36px);width:auto;height:auto;object-fit:contain}"],changeDetection:0})};var ke=(a,i)=>i.guide.id,Ce=(a,i)=>i.title;function Pe(a,i){if(a&1){let t=z();n(0,"button",8),x("click",function(){let o=D(t).$index,l=h();return A(l.selectMoment(o))}),n(1,"mat-icon",9),s(2),r(),n(3,"span",10),s(4),r(),n(5,"span",11),s(6),r()()}if(a&2){let t=i.$implicit,e=i.$index,o=h();k("is-selected",o.selectedIndex()===e),g("activated",o.selectedIndex()===e),c(2),m(t.guide.icon),c(2),m(t.prompt),c(2),m(t.guide.title)}}function Me(a,i){if(a&1&&(n(0,"mat-card",19)(1,"mat-card-content",26)(2,"span",27)(3,"mat-icon"),s(4),r()(),n(5,"div",28)(6,"h4"),s(7),r(),n(8,"p"),s(9),r()()()()),a&2){let t=i.$implicit;c(4),m(t.icon),c(3),m(t.title),c(2),m(t.description)}}function Oe(a,i){if(a&1&&b(0,"img",25),a&2){let t=h();g("src",t.guide.heroImage,C)("alt",t.guide.title)}}function Se(a,i){if(a&1){let t=z();n(0,"section",12)(1,"div",13)(2,"div",14)(3,"p",15),s(4,"Selected tool"),r(),n(5,"h3"),s(6),r(),n(7,"p"),s(8),r()(),n(9,"div",16)(10,"a",17),s(11," Open guide "),n(12,"mat-icon"),s(13,"north_east"),r()()()(),n(14,"div",18),S(15,Me,10,3,"mat-card",19,Ce),r()(),n(17,"aside",20)(18,"p",21),s(19,"Artifact preview"),r(),n(20,"p",22),s(21,"Click to expand, print, or view full screen."),r(),n(22,"button",23),x("click",function(){D(t);let o=h();return A(o.openArtifactDialog())}),n(23,"div",24),v(24,Oe,1,2,"img",25),r()()()}if(a&2){let t=i,e=h();c(6),m(t.guide.title),c(2),m(t.guide.summary),c(2),g("routerLink",t.route),c(5),I(e.selectedGuideDetailCards()),c(9),w(t.guide.heroImage?24:-1)}}function Ie(a,i){a&1&&(n(0,"section",12)(1,"div",29)(2,"p",5),s(3,"The guide selector is loading."),r()()(),b(4,"aside",20))}var at=class a{dialog=p(Yt);moments=K.required();benefits=K([]);selectedIndex=K(0);momentSelected=Dt();selectedMoment=y(()=>{let i=this.moments();return i.length?i[Math.min(this.selectedIndex(),i.length-1)]??i[0]:null});selectedGuideDetailCards=y(()=>{let i=this.selectedMoment();if(!i)return[];let t=i.guide.body.sections.slice(0,4).map((e,o)=>({icon:this.iconForSection(e,o),title:e.heading,description:this.descriptionForSection(e,i.guide.body.intro)})).filter(e=>!!e.description);return t.length?t:this.benefits().slice(0,4).map(e=>({icon:e.icon,title:e.title,description:e.description}))});selectMoment(i){i<0||i>=this.moments().length||this.momentSelected.emit(i)}openArtifactDialog(){let i=this.selectedMoment(),t=i?.guide.heroImage??i?.guide.productionAssets?.socialImage?.href;!i||!t||this.dialog.open(nt,{data:{title:i.guide.title,description:i.guide.summary,imageSrc:t},width:"92vw",maxWidth:"1120px",panelClass:"cw-guide-artifact-dialog-panel"})}iconForSection(i,t){let e=`${i.heading} ${i.intro??""} ${i.callout??""}`.toLowerCase();return[{icon:"visibility",keywords:["see","notice","pattern","review","clarify","signal"]},{icon:"alt_route",keywords:["path","route","direction","choose","decision"]},{icon:"bolt",keywords:["move","act","start","momentum","motion"]},{icon:"tune",keywords:["structure","system","container","frame","reset"]},{icon:"rule",keywords:["rule","repeat","repeatable","habit","loop"]},{icon:"task_alt",keywords:["close","commit","complete","finish","follow"]}].find(d=>d.keywords.some(L=>e.includes(L)))?.icon??["visibility","alt_route","bolt","task_alt"][t%4]}descriptionForSection(i,t){return i.paragraphs?.[0]??i.intro??i.callout??t}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["cw-home-guide-selector"]],inputs:{moments:[1,"moments"],benefits:[1,"benefits"],selectedIndex:[1,"selectedIndex"]},outputs:{momentSelected:"momentSelected"},decls:14,vars:1,consts:[["appearance","outlined",1,"guide-selector","cw-surface-card"],[1,"guide-selector__layout"],[1,"guide-selector__column","guide-selector__column--rail"],[1,"guide-selector__rail-label"],[1,"guide-selector__rail-title"],[1,"guide-selector__rail-support"],[1,"guide-selector__list"],["mat-list-item","","type","button",1,"guide-selector__prompt",3,"activated","is-selected"],["mat-list-item","","type","button",1,"guide-selector__prompt",3,"click","activated"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],[1,"guide-selector__column","guide-selector__column--preview"],[1,"guide-selector__preview-header"],[1,"guide-selector__summary-copy"],[1,"guide-selector__summary-label"],[1,"guide-selector__actions"],["mat-flat-button","","color","primary",1,"guide-selector__cta",3,"routerLink"],[1,"guide-selector__detail-grid"],["appearance","outlined",1,"guide-selector__detail-card"],[1,"guide-selector__column","guide-selector__column--artifact"],[1,"guide-selector__utility-label"],[1,"guide-selector__artifact-support"],["type","button",1,"guide-selector__artifact-trigger",3,"click"],[1,"guide-selector__frame"],[1,"guide-selector__image",3,"src","alt"],[1,"guide-selector__detail-card-content"],[1,"guide-selector__detail-icon","cw-icon-badge"],[1,"guide-selector__detail-copy"],[1,"guide-selector__preview-empty"]],template:function(t,e){if(t&1&&(n(0,"mat-card",0)(1,"mat-card-content",1)(2,"section",2)(3,"p",3),s(4,"Choose your moment"),r(),n(5,"h3",4),s(6,"What do you need right now?"),r(),n(7,"p",5),s(8,"Pick the moment. Preview the tool."),r(),n(9,"mat-action-list",6),S(10,Pe,7,6,"button",7,ke),r()(),v(12,Se,25,4)(13,Ie,5,0),r()()),t&2){let o;c(10),I(e.moments()),c(2),w((o=e.selectedMoment())?12:13,o)}},dependencies:[X,N,W,tt,Z,J,et,Y,V,j,it,ne,ae,ut,_t,gt],styles:["[_nghost-%COMP%]{display:block}.guide-selector[_ngcontent-%COMP%]{overflow:hidden;border-color:color-mix(in srgb,var(--cw-line) 90%,var(--cw-accent) 10%)!important;box-shadow:0 14px 30px #0718270a!important}.guide-selector__layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(240px,280px) minmax(0,1fr) minmax(320px,380px);gap:28px;align-items:start;padding:28px!important}.guide-selector__column[_ngcontent-%COMP%]{min-width:0}.guide-selector__column--rail[_ngcontent-%COMP%], .guide-selector__column--preview[_ngcontent-%COMP%]{padding-right:28px;border-right:1px solid color-mix(in srgb,var(--cw-line) 92%,var(--cw-accent) 8%)}.guide-selector__rail-label[_ngcontent-%COMP%], .guide-selector__summary-label[_ngcontent-%COMP%], .guide-selector__utility-label[_ngcontent-%COMP%]{margin:0 0 10px;color:var(--cw-accent);font-size:.75rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.guide-selector__rail-title[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.2rem,1.7vw,1.5rem);line-height:1.08;letter-spacing:-.03em}.guide-selector__rail-support[_ngcontent-%COMP%], .guide-selector__artifact-support[_ngcontent-%COMP%]{margin:14px 0 0;color:var(--cw-muted);font-size:.92rem;line-height:1.45}.guide-selector__list[_ngcontent-%COMP%]{display:grid;gap:10px;padding:0;margin-top:24px}.guide-selector__prompt[_ngcontent-%COMP%]{min-height:68px;border:1px solid color-mix(in srgb,var(--cw-line) 94%,var(--cw-accent) 6%);border-radius:18px;background:transparent;transition:border-color .18s ease,background-color .18s ease,box-shadow .18s ease}.guide-selector__prompt[_ngcontent-%COMP%]:hover, .guide-selector__prompt[_ngcontent-%COMP%]:focus-visible{border-color:color-mix(in srgb,var(--cw-line) 74%,var(--cw-accent) 26%);background:color-mix(in srgb,var(--cw-panel) 97%,white 3%)}.guide-selector__prompt.is-selected[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 56%,var(--cw-accent) 44%);background:color-mix(in srgb,var(--cw-panel) 95%,white 5%);box-shadow:inset 3px 0 0 var(--cw-accent)}.guide-selector__prompt[_ngcontent-%COMP%]   [matListItemTitle][_ngcontent-%COMP%]{font-size:.98rem;font-weight:700;line-height:1.18}.guide-selector__prompt[_ngcontent-%COMP%]   [matListItemLine][_ngcontent-%COMP%]{color:var(--cw-muted);font-size:.84rem;line-height:1.35}.guide-selector__preview-header[_ngcontent-%COMP%]{display:flex;gap:24px;align-items:flex-start;justify-content:space-between}.guide-selector__summary-copy[_ngcontent-%COMP%]{min-width:0;flex:1 1 auto}.guide-selector__summary-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.45rem,2.2vw,2.05rem);line-height:1.04;letter-spacing:-.045em}.guide-selector__summary-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0;color:var(--cw-muted);font-size:1rem;line-height:1.45}.guide-selector__actions[_ngcontent-%COMP%]{flex:0 0 auto}.guide-selector__cta[_ngcontent-%COMP%]{min-width:148px}.guide-selector__detail-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:22px}.guide-selector__detail-card[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-line) 92%,var(--cw-accent) 8%)!important}.guide-selector__detail-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:44px minmax(0,1fr);gap:12px;align-items:start;padding:16px!important}.guide-selector__detail-icon[_ngcontent-%COMP%], .guide-selector__benefit-icon[_ngcontent-%COMP%]{width:44px;height:44px}.guide-selector__detail-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .guide-selector__benefit-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px}.guide-selector__detail-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .guide-selector__detail-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.guide-selector__detail-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.98rem;line-height:1.22}.guide-selector__detail-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:6px;color:var(--cw-muted);font-size:.86rem;line-height:1.42}.guide-selector__artifact-trigger[_ngcontent-%COMP%]{display:block;width:100%;margin-top:24px;padding:0;border:0;background:transparent;cursor:pointer;text-align:left}.guide-selector__frame[_ngcontent-%COMP%]{display:grid;place-items:center;min-height:420px;max-height:min(72vh,780px);padding:18px;border:1px solid color-mix(in srgb,var(--cw-line) 88%,var(--cw-accent) 12%);border-radius:28px;background:linear-gradient(180deg,#23364d,#18293c);box-shadow:inset 0 1px #ffffff0d,0 16px 28px #07182714;transition:transform .18s ease,box-shadow .18s ease}.guide-selector__artifact-trigger[_ngcontent-%COMP%]:hover   .guide-selector__frame[_ngcontent-%COMP%], .guide-selector__artifact-trigger[_ngcontent-%COMP%]:focus-visible   .guide-selector__frame[_ngcontent-%COMP%]{transform:translateY(-2px);box-shadow:inset 0 1px #ffffff0d,0 20px 34px #0718271f}.guide-selector__image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;object-position:top center}.guide-selector__preview-empty[_ngcontent-%COMP%]{padding-top:8px}body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector[_ngcontent-%COMP%]{box-shadow:0 18px 38px #030a1533!important}body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__column--rail[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__column--rail[_ngcontent-%COMP%], body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__column--preview[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__column--preview[_ngcontent-%COMP%]{border-right-color:#8ba4c629}body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__prompt[_ngcontent-%COMP%]:hover, body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__prompt[_ngcontent-%COMP%]:hover, body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__prompt[_ngcontent-%COMP%]:focus-visible, body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__prompt[_ngcontent-%COMP%]:focus-visible{background:color-mix(in srgb,var(--cw-panel) 88%,white 4%)}body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__prompt.is-selected[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__prompt.is-selected[_ngcontent-%COMP%]{box-shadow:inset 3px 0 #9fc8ff}body.cw-theme-dusk[_nghost-%COMP%]   .guide-selector__frame[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .guide-selector__frame[_ngcontent-%COMP%]{background:linear-gradient(180deg,#203249,#142436);border-color:#8ba4c629}@media(max-width:1280px){.guide-selector__layout[_ngcontent-%COMP%]{grid-template-columns:minmax(220px,260px) minmax(0,1fr) minmax(280px,340px);gap:24px;padding:24px!important}.guide-selector__column--rail[_ngcontent-%COMP%], .guide-selector__column--preview[_ngcontent-%COMP%]{padding-right:24px}.guide-selector__detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.guide-selector__frame[_ngcontent-%COMP%]{min-height:360px}}@media(max-width:980px){.guide-selector__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:22px}.guide-selector__column--rail[_ngcontent-%COMP%], .guide-selector__column--preview[_ngcontent-%COMP%]{padding-right:0;border-right:0;padding-bottom:22px;border-bottom:1px solid color-mix(in srgb,var(--cw-line) 92%,var(--cw-accent) 8%)}.guide-selector__preview-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.guide-selector__detail-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.guide-selector__artifact-trigger[_ngcontent-%COMP%]{margin-top:18px}.guide-selector__frame[_ngcontent-%COMP%]{min-height:300px}}@media(max-width:640px){.guide-selector__layout[_ngcontent-%COMP%]{gap:18px;padding:18px!important}.guide-selector__detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.guide-selector__frame[_ngcontent-%COMP%]{min-height:220px;padding:14px}}"],changeDetection:0})};var Le=["publishingPathSection"],Ee=["publishingPathLayout"],Te=["publishingPathStoryColumn"],De=["publishingPathSticky"],Ae=["publishingPathTimeline"],ze=["publishingPathStop"],bt=(a,i)=>i.id;function Re(a,i){if(a&1&&(n(0,"p",13),s(1),r()),a&2){h();let t=B(0);c(),m(t.home.intro[0])}}function Fe(a,i){if(a&1&&(n(0,"p",14),s(1),r()),a&2){h();let t=B(0);c(),m(t.home.intro[1])}}function He(a,i){if(a&1&&(n(0,"mat-card",25)(1,"mat-card-content")(2,"span",78)(3,"mat-icon"),s(4),r()(),n(5,"h3"),s(6),r(),n(7,"p"),s(8),r()()()),a&2){let t=i.$implicit;c(4),m(t.icon),c(2),m(t.title),c(2),m(t.description)}}function Be(a,i){if(a&1){let t=z();n(0,"div",29)(1,"button",79),x("click",function(){D(t);let o=h();return A(o.previousWritingSlide())}),n(2,"mat-icon"),s(3,"arrow_back"),r()(),n(4,"button",80),x("click",function(){D(t);let o=h();return A(o.nextWritingSlide())}),n(5,"mat-icon"),s(6,"arrow_forward"),r()()()}}function Ge(a,i){if(a&1&&(n(0,"mat-card",82)(1,"a",83),b(2,"img",84),r(),n(3,"mat-card-content")(4,"a",85)(5,"mat-icon"),s(6,"article"),r()(),n(7,"div",86)(8,"h3")(9,"a",87),s(10),r()(),n(11,"p"),s(12),r()(),n(13,"div",88)(14,"div",89)(15,"span"),s(16),Et(17,"date"),r(),n(18,"span"),s(19),r()(),n(20,"a",90)(21,"mat-icon"),s(22,"arrow_forward"),r()()()()()),a&2){let t=i.$implicit,e=h(2);c(),g("routerLink",e.getWritingRoute(t)),O("aria-label","Read "+t.title),c(),g("src",t.heroImage,C)("alt",t.title),c(2),g("routerLink",e.getWritingRoute(t)),O("aria-label","Open "+t.title),c(5),g("routerLink",e.getWritingRoute(t)),c(),m(t.title),c(2),m(t.summary),c(4),m(Tt(17,13,t.publishedOn,"MMM d, y")),c(3),H("",t.readTimeMinutes," min read"),c(),g("routerLink",e.getWritingRoute(t)),O("aria-label","Read "+t.title)}}function We(a,i){if(a&1&&(n(0,"div",81),S(1,Ge,23,16,"mat-card",82,bt),r()),a&2){let t=i.$implicit,e=h();F("--writing-cards-per-slide",e.cardsPerSlide()),c(),I(t)}}function Ne(a,i){if(a&1){let t=z();n(0,"button",92),x("click",function(){let o=D(t).$index,l=h(2);return A(l.goToWritingSlide(o))}),r()}if(a&2){let t=i.$index,e=h(2);k("is-active",e.currentWritingSlide()===t),O("aria-label","Go to writing slide "+(t+1))}}function je(a,i){if(a&1&&(n(0,"div",35),S(1,Ne,1,3,"button",91,ct),r()),a&2){let t=h();c(),I(t.writingSlides())}}function Ve(a,i){if(a&1&&(n(0,"div",37)(1,"div",93),b(2,"img",84),r(),n(3,"div",94)(4,"p",9),s(5),r(),n(6,"h2"),s(7),r(),n(8,"p",14),s(9),r(),n(10,"p",14),s(11),r(),n(12,"a",95),s(13," Explore the framework "),n(14,"mat-icon"),s(15,"arrow_forward"),r()()()()),a&2){let t=i,e=h(),o=B(0);c(2),g("src",t.diagramImage,C)("alt",t.title+" diagram"),c(3),m(o.home.frameworkSection.eyebrow),c(2),m(t.title),c(2),m(t.summary),c(2),m(t.body.application),c(),g("routerLink",e.getFrameworkRoute(t.slug))}}function Qe(a,i){if(a&1&&(n(0,"a",96,5),b(2,"span",97),n(3,"div",98)(4,"div",99)(5,"span"),s(6),r(),n(7,"span",100),s(8),r(),n(9,"span",101),s(10),r()(),n(11,"h3"),s(12),r(),n(13,"p"),s(14),r()()()),a&2){let t=i.$implicit,e=i.$index,o=h();k("is-active",o.activePublishingPathIndex()===e)("is-complete",o.activePublishingPathIndex()>e),g("routerLink",o.getPublishingPathRoute(t)),c(6),m(t.sceneLabel),c(2),m(t.kind),c(),$(o.publishingPathStatusClass(t)),c(),m(t.status),c(2),m(t.title),c(2),m(t.summary)}}function qe(a,i){if(a&1&&(n(0,"p",14),s(1),r()),a&2){h();let t=B(0);c(),m(t.about.narrative[0])}}function Ue(a,i){if(a&1&&(n(0,"p",14),s(1),r()),a&2){h();let t=B(0);c(),m(t.about.narrative[1])}}var $e=[{prompt:"Get unstuck",slug:"guides/avoid-act-loop"},{prompt:"Find direction",slug:"guides/a-compass-not-a-map"},{prompt:"Break a pattern",slug:"guides/see-the-pattern-choose-the-path"},{prompt:"Make a decision",slug:"guides/decision-tree-guide"},{prompt:"Structure today",slug:"guides/run-the-day-with-structure"},{prompt:"Reset and learn",slug:"guides/close-the-loop"}],Ke=[{icon:"schedule",title:"Fast to start",description:"Begin in under 1 minute."},{icon:"visibility",title:"Visual clarity",description:"See the big picture at a glance."},{icon:"autorenew",title:"Repeatable",description:"Use it again and get better."},{icon:"task_alt",title:"Action focused",description:"Designed to move you forward."}],Xe={meta:{version:1,updatedOn:"2026-05-16",siteName:"cweise.com",siteUrl:"https://cweise.com",title:"Operational Intelligence for Complex Organizations",description:"",author:"Charles Weise",footerTagline:"",contactEmail:"iweise@me.com"},navigation:{primary:[],social:[]},footer:{featuredLinks:[]},connect:{eyebrow:"Stay Connected",headline:"",intro:"",note:"",ctaLabel:"",ctaUrl:""},home:{eyebrow:"",headline:"",subheadline:"",intro:[],heroImage:"",featuredWritingSlugs:[],featuredFrameworkSlugs:[],featuredGuideSlugs:[],themes:[],themesSection:{eyebrow:"",headline:"",support:""},writingSection:{eyebrow:"",headline:"",support:""},frameworkSection:{eyebrow:"",headline:"",support:""},guidesSection:{eyebrow:"",headline:"",support:""},aboutSection:{eyebrow:"",headline:"",support:""}},featuredWriting:[],featuredFrameworks:[],featuredGuides:[],about:{headline:"",narrative:[],principles:[],focusAreas:[],closing:""}},le=class a{contentService=p($t);destroyRef=p(Ct);publishingPathObserver;publishingPathSection;publishingPathStops;publishingPathLayout;publishingPathStoryColumn;publishingPathSticky;publishingPathTimeline;homeContent=dt(this.contentService.getHomeContent(),{initialValue:Xe});guideItems=dt(this.contentService.getGuidesIndex(),{initialValue:[]});featuredWritingItems=y(()=>this.homeContent().featuredWriting??[]);homeGuideMoments=y(()=>$e.flatMap(i=>{let t=this.guideItems().find(e=>e.slug===i.slug);return t?[{prompt:i.prompt,guide:t,route:this.getGuideRoute(t)}]:[]}));homeGuideBenefits=Ke;selectedHomeGuideMomentIndex=f(0);featuredFrameworkItem=y(()=>this.homeContent().featuredFrameworks?.[0]??null);viewportWidth=f(typeof window>"u"?1440:window.innerWidth);cardsPerSlide=f(this.getWritingCardsPerSlide());currentWritingSlide=f(0);writingSlides=y(()=>this.chunkWritingItems(this.featuredWritingItems(),this.cardsPerSlide()));hasWritingCarousel=y(()=>this.writingSlides().length>1);publishingPath=oe;activePublishingPathIndex=f(0);publishingPathStoryPinMode=f("static");publishingPathStoryPinTop=f(0);publishingPathStoryPinLeft=f(0);publishingPathStoryPinWidth=f(0);publishingPathStoryReleaseTop=f(0);publishingPathLineProgress=f(0);activePublishingPathItem=y(()=>this.publishingPath.items[this.activePublishingPathIndex()]);publishingPathCompletion=y(()=>{let i=this.publishingPath.items.length;return i?(this.activePublishingPathIndex()+1)/i:0});ngAfterViewInit(){this.publishingPathStops?.changes.pipe(vt(this.publishingPathStops),zt(this.destroyRef)).subscribe(()=>queueMicrotask(()=>{this.setupPublishingPathObserver(),this.updatePublishingPathLineProgress(),this.updatePublishingPathStoryPin()}))}onResize(){this.viewportWidth.set(typeof window>"u"?1440:window.innerWidth);let i=this.getWritingCardsPerSlide();i===this.cardsPerSlide()||(this.cardsPerSlide.set(i),this.currentWritingSlide.set(Math.min(this.currentWritingSlide(),Math.max(this.writingSlides().length-1,0)))),this.syncPublishingPathFromViewport(),this.updatePublishingPathLineProgress(),this.updatePublishingPathStoryPin()}onScroll(){this.syncPublishingPathFromViewport(),this.updatePublishingPathLineProgress(),this.updatePublishingPathStoryPin()}previousWritingSlide(){let i=this.writingSlides().length;i<2||this.currentWritingSlide.set((this.currentWritingSlide()-1+i)%i)}nextWritingSlide(){let i=this.writingSlides().length;i<2||this.currentWritingSlide.set((this.currentWritingSlide()+1)%i)}goToWritingSlide(i){i<0||i>=this.writingSlides().length||this.currentWritingSlide.set(i)}getWritingRoute(i){return this.slugToRoute(i.slug)}getFrameworkRoute(i){return this.slugToRoute(i)}getGuideRoute(i){return this.slugToRoute(i.slug)}getGuideTags(i,t=3){return i.tags.slice(0,t)}selectHomeGuideMoment(i){i<0||i>=this.homeGuideMoments().length||this.selectedHomeGuideMomentIndex.set(i)}getPublishingPathRoute(i){return this.slugToRoute(i.slug)}publishingPathKindClass(i){return`is-${i.kind.toLowerCase()}`}publishingPathStatusClass(i){return`is-${i.status.toLowerCase()}`}publishingPathStoryInlineTop(){let i=this.publishingPathStoryPinMode();return i==="fixed"?this.publishingPathStoryPinTop():i==="released"?this.publishingPathStoryReleaseTop():null}publishingPathStoryInlineLeft(){return this.publishingPathStoryPinMode()==="fixed"?this.publishingPathStoryPinLeft():null}publishingPathStoryInlineWidth(){return this.publishingPathStoryPinMode()==="fixed"?this.publishingPathStoryPinWidth():null}getWritingCardsPerSlide(){return typeof window>"u"?3:window.innerWidth<720?1:window.innerWidth<1120?2:3}chunkWritingItems(i,t){if(!i.length||t<1)return[];let e=[];for(let o=0;o<i.length;o+=t)e.push(i.slice(o,o+t));return e}slugToRoute(i){return["/",...i.split("/").filter(Boolean)]}setupPublishingPathObserver(){if(typeof window>"u")return;if(this.publishingPathObserver?.disconnect(),!("IntersectionObserver"in window)){this.syncPublishingPathFromViewport();return}let i=this.publishingPathStops?.toArray()??[];i.length&&(this.publishingPathObserver=new IntersectionObserver(()=>this.syncPublishingPathFromViewport(),{root:null,rootMargin:"-18% 0px -44% 0px",threshold:[0,.15,.35,.55,.75,1]}),i.forEach(t=>this.publishingPathObserver?.observe(t.nativeElement)),this.syncPublishingPathFromViewport())}syncPublishingPathFromViewport(){if(typeof window>"u")return;let i=this.publishingPathStops?.toArray()??[];if(!i.length)return;let t=window.innerHeight*.34,e=i.map((d,L)=>{let T=d.nativeElement.getBoundingClientRect(),ot=T.bottom>0&&T.top<window.innerHeight;return{index:L,rect:T,distance:Math.abs(T.top-t),isNearViewport:ot}}).filter(d=>d.isNearViewport).sort((d,L)=>d.distance-L.distance);if(e[0]){this.activePublishingPathIndex.set(e[0].index);return}let o=i[0]?.nativeElement.getBoundingClientRect().top??0,l=i[i.length-1]?.nativeElement.getBoundingClientRect().bottom??0;if(o>t){this.activePublishingPathIndex.set(0);return}l<t&&this.activePublishingPathIndex.set(this.publishingPath.items.length-1)}updatePublishingPathLineProgress(){if(typeof window>"u")return;let i=this.publishingPathTimeline?.nativeElement;if(!i)return;let t=i.getBoundingClientRect(),e=window.innerHeight*.34,o=18,l=Math.max(t.height-o*2,1),d=(e-t.top-o)/l;this.publishingPathLineProgress.set(Math.min(1,Math.max(0,d)))}updatePublishingPathStoryPin(){if(typeof window>"u")return;if(this.viewportWidth()<=1e3){this.publishingPathStoryPinMode.set("static");return}let i=this.publishingPathLayout?.nativeElement,t=this.publishingPathStoryColumn?.nativeElement,e=this.publishingPathSticky?.nativeElement;if(!i||!t||!e)return;let l=this.getPublishingPathToolbarHeight()+24,d=i.getBoundingClientRect(),L=t.getBoundingClientRect(),T=e.getBoundingClientRect().height,ot=Math.max(i.offsetHeight-T,0);if(this.publishingPathStoryPinTop.set(l),this.publishingPathStoryPinLeft.set(L.left),this.publishingPathStoryPinWidth.set(L.width),this.publishingPathStoryReleaseTop.set(ot),d.top>l){this.publishingPathStoryPinMode.set("static");return}if(d.bottom<=l+T){this.publishingPathStoryPinMode.set("released");return}this.publishingPathStoryPinMode.set("fixed")}getPublishingPathToolbarHeight(){if(typeof window>"u")return 72;let i=getComputedStyle(document.documentElement),t=i.getPropertyValue("--cw-toolbar-current-height").trim(),e=i.getPropertyValue("--cw-toolbar-height").trim(),o=Number.parseFloat(t||e);return Number.isFinite(o)?o:72}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["cw-home"]],viewQuery:function(t,e){if(t&1&&R(Le,5)(Ee,5)(Te,5)(De,5)(Ae,5)(ze,5),t&2){let o;_(o=u())&&(e.publishingPathSection=o.first),_(o=u())&&(e.publishingPathLayout=o.first),_(o=u())&&(e.publishingPathStoryColumn=o.first),_(o=u())&&(e.publishingPathSticky=o.first),_(o=u())&&(e.publishingPathTimeline=o.first),_(o=u())&&(e.publishingPathStops=o)}},hostBindings:function(t,e){t&1&&x("resize",function(){return e.onResize()},st)("scroll",function(){return e.onScroll()},st)},decls:158,vars:59,consts:[["publishingPathSection",""],["publishingPathLayout",""],["publishingPathStoryColumn",""],["publishingPathSticky",""],["publishingPathTimeline",""],["publishingPathStop",""],[1,"hero"],[1,"hero-copy-wrap"],[1,"hero-copy"],[1,"cw-eyebrow"],[1,"hero-title-line"],["aria-hidden","true",1,"hero-rule"],[1,"hero-context"],[1,"lead"],[1,"cw-muted"],[1,"hero-actions"],["mat-flat-button","","color","primary","routerLink","/writing"],["mat-button","","color","primary","routerLink","/frameworks",1,"cw-link-action"],["aria-hidden","true",1,"hero-art"],["alt","",3,"src"],[1,"cw-section","section-surface--soft"],[1,"cw-container","cw-section-header--split"],[1,"cw-section-title"],[1,"cw-section-header__support"],[1,"cw-container","theme-grid"],["appearance","outlined",1,"theme-card","cw-surface-card"],[1,"cw-section","writing-band","section-surface--soft"],[1,"cw-container","cw-section-header"],[1,"cw-section-header__actions"],["aria-label","Featured writing carousel controls",1,"writing-carousel-controls"],["mat-button","","color","primary","routerLink","/writing",1,"cw-link-action"],[1,"writing-carousel-region"],[1,"writing-carousel-shell"],[1,"writing-track"],[1,"writing-slide",3,"--writing-cards-per-slide"],["aria-label","Featured writing slide selection",1,"writing-carousel-pagination"],[1,"cw-section","framework-feature"],[1,"cw-container","feature-grid"],[1,"cw-section","operating-tools","section-surface--soft"],["mat-button","","color","primary","routerLink","/guides",1,"cw-link-action"],[1,"cw-container"],[3,"momentSelected","moments","benefits","selectedIndex"],[1,"publishing-path","cw-section"],[1,"cw-container","publishing-path__frame"],[1,"publishing-path__header"],[1,"publishing-path__headline-block"],[1,"publishing-path__support-block"],[1,"publishing-path__layout"],[1,"publishing-path__story-column"],[1,"publishing-path__sticky"],[1,"publishing-path__story-card"],[1,"publishing-path__stage-meta"],[1,"publishing-path__week"],[1,"publishing-path__current-badge"],[1,"publishing-path__stage-copy"],[1,"publishing-path__kind"],[1,"publishing-path__stage-continuity"],[1,"publishing-path__stage-actions"],[1,"publishing-path__card-index"],["mat-flat-button","",1,"publishing-path__cta",3,"routerLink"],["aria-hidden","true",1,"publishing-path__progress"],[1,"publishing-path__progress-fill"],[1,"publishing-path__timeline-column"],["aria-label","Connected release route",1,"publishing-path__timeline"],["aria-hidden","true",1,"publishing-path__timeline-spine"],[1,"publishing-path__timeline-spine-base"],[1,"publishing-path__timeline-spine-fill"],[1,"publishing-path__rail-item",3,"routerLink","is-active","is-complete"],[1,"cw-section","about-connect"],[1,"cw-container","about-grid"],[1,"about-copy"],["mat-button","","color","primary","routerLink","/about",1,"cw-link-action"],[1,"substack-card","cw-dark-panel"],[1,"substack-card-grid"],[1,"substack-copy"],["mat-flat-button","","target","_blank","rel","noreferrer",3,"href"],["aria-hidden","true",1,"substack-visual"],["src","assets/images/stay-connected.png","alt",""],[1,"cw-icon-badge"],["type","button","mat-icon-button","","aria-label","Previous writing slide",1,"writing-carousel-control",3,"click"],["type","button","mat-icon-button","","aria-label","Next writing slide",1,"writing-carousel-control",3,"click"],[1,"writing-slide"],["appearance","outlined",1,"article-card","cw-surface-card"],[1,"article-media-link",3,"routerLink"],[3,"src","alt"],[1,"article-icon","cw-icon-badge",3,"routerLink"],[1,"article-copy"],[3,"routerLink"],[1,"article-footer"],[1,"cw-meta-row"],["mat-icon-button","",1,"article-cta",3,"routerLink"],["type","button",1,"writing-carousel-dot",3,"is-active"],["type","button",1,"writing-carousel-dot",3,"click"],[1,"framework-visual","cw-surface-card"],[1,"feature-copy"],["mat-button","","color","primary",1,"cw-link-action",3,"routerLink"],[1,"publishing-path__rail-item",3,"routerLink"],["aria-hidden","true",1,"publishing-path__rail-node"],[1,"publishing-path__rail-copy"],[1,"publishing-path__rail-topline"],[1,"publishing-path__rail-kind"],[1,"publishing-path__rail-status"]],template:function(t,e){if(t&1&&(St(0),n(1,"section",6)(2,"div",7)(3,"div",8)(4,"p",9),s(5),r(),n(6,"h1")(7,"span",10),s(8,"Operational Intelligence"),r(),n(9,"span",10),s(10,"for Complex Organizations"),r()(),b(11,"div",11),n(12,"p",12),s(13),n(14,"span"),s(15),r()(),v(16,Re,2,1,"p",13),v(17,Fe,2,1,"p",14),n(18,"div",15)(19,"a",16),s(20," Explore Writing "),n(21,"mat-icon"),s(22,"arrow_forward"),r()(),n(23,"a",17),s(24," View Frameworks "),n(25,"mat-icon"),s(26,"arrow_forward"),r()()()()(),n(27,"div",18),b(28,"img",19),r()(),n(29,"section",20)(30,"div",21)(31,"div")(32,"p",9),s(33),r(),n(34,"h2",22),s(35),r()(),n(36,"div",23)(37,"p",14),s(38),r()()(),n(39,"div",24),S(40,He,9,3,"mat-card",25,bt),r()(),n(42,"section",26)(43,"div",27)(44,"div")(45,"p",9),s(46),r(),n(47,"h2",22),s(48),r()(),n(49,"div",28),v(50,Be,7,0,"div",29),n(51,"a",30),s(52," View all writing "),n(53,"mat-icon"),s(54,"arrow_forward"),r()()()(),n(55,"div",31)(56,"div",32)(57,"div",33),S(58,We,3,2,"div",34,ct),r()(),v(60,je,3,0,"div",35),r()(),n(61,"section",36),v(62,Ve,16,7,"div",37),r(),n(63,"section",38)(64,"div",27)(65,"div")(66,"p",9),s(67,"Operating Tools"),r(),n(68,"h2",22),s(69,"Choose the right tool for the moment."),r(),n(70,"p",14),s(71," Visual guides for getting unstuck, making decisions, breaking loops, and turning reflection into action. "),r()(),n(72,"div",28)(73,"a",39),s(74," Explore all guides "),n(75,"mat-icon"),s(76,"arrow_forward"),r()()()(),n(77,"div",40)(78,"cw-home-guide-selector",41),x("momentSelected",function(l){return e.selectHomeGuideMoment(l)}),r()()(),n(79,"section",42,0)(81,"div",43)(82,"div",44)(83,"div",45)(84,"p",9),s(85),r(),n(86,"h2",22),s(87),r()(),n(88,"div",46)(89,"p",14),s(90),r()()(),n(91,"div",47,1)(93,"div",48,2)(95,"div",49,3)(97,"div",50)(98,"div",51)(99,"span",52),s(100),r(),n(101,"span",53),s(102),r()(),n(103,"div",54)(104,"p",55),s(105),r(),n(106,"h3"),s(107),r(),n(108,"p"),s(109),r()(),n(110,"p",56),s(111),r(),n(112,"div",57)(113,"span",58),s(114),r(),n(115,"a",59),s(116," Open current item "),n(117,"mat-icon"),s(118,"arrow_forward"),r()()(),n(119,"div",60),b(120,"div",61),r()()()(),n(121,"aside",62)(122,"div",63,4)(124,"div",64),b(125,"span",65)(126,"span",66),r(),S(127,Qe,15,12,"a",67,bt),r()()()()(),n(129,"section",68)(130,"div",69)(131,"div",70)(132,"p",9),s(133),r(),n(134,"h2"),s(135),r(),v(136,qe,2,1,"p",14),v(137,Ue,2,1,"p",14),n(138,"a",71),s(139," Read more about my approach "),n(140,"mat-icon"),s(141,"arrow_forward"),r()()(),n(142,"mat-card",72)(143,"mat-card-content")(144,"div",73)(145,"div",74)(146,"p",9),s(147),r(),n(148,"h2"),s(149),r(),n(150,"p"),s(151),r(),n(152,"a",75),s(153),n(154,"mat-icon"),s(155,"open_in_new"),r()()(),n(156,"div",76),b(157,"img",77),r()()()()()()),t&2){let o,l=It(e.homeContent());c(5),m(l.home.eyebrow),c(8),H("",l.home.eyebrow," "),c(2),m(l.home.subheadline),c(),w(l.home.intro[0]?16:-1),c(),w(l.home.intro[1]?17:-1),c(11),g("src",l.home.heroImage,C),c(5),m(l.home.themesSection.eyebrow),c(2),m(l.home.themesSection.headline),c(3),m(l.home.themesSection.support),c(2),I(l.home.themes),c(6),m(l.home.writingSection.eyebrow),c(2),m(l.home.writingSection.headline),c(2),w(e.hasWritingCarousel()?50:-1),c(7),F("transform","translateX(-"+e.currentWritingSlide()*100+"%)"),c(),I(e.writingSlides()),c(2),w(e.hasWritingCarousel()?60:-1),c(2),w((o=l.featuredFrameworks[0])?62:-1,o),c(16),g("moments",e.homeGuideMoments())("benefits",e.homeGuideBenefits)("selectedIndex",e.selectedHomeGuideMomentIndex()),c(7),m(e.publishingPath.eyebrow),c(2),m(e.publishingPath.headline),c(3),m(e.publishingPath.support),c(5),F("top",e.publishingPathStoryInlineTop(),"px")("left",e.publishingPathStoryInlineLeft(),"px")("width",e.publishingPathStoryInlineWidth(),"px"),k("is-fixed",e.publishingPathStoryPinMode()==="fixed")("is-released",e.publishingPathStoryPinMode()==="released"),c(5),m(e.activePublishingPathItem().sceneLabel),c(),$(e.publishingPathStatusClass(e.activePublishingPathItem())),c(),H(" ",e.activePublishingPathItem().status," "),c(2),$(e.publishingPathKindClass(e.activePublishingPathItem())),c(),H(" ",e.activePublishingPathItem().kind," "),c(2),m(e.activePublishingPathItem().title),c(2),m(e.activePublishingPathItem().summary),c(2),m(e.activePublishingPathItem().continuity),c(3),Ot(" Scene ",e.activePublishingPathIndex()+1," of ",e.publishingPath.items.length," "),c(),g("routerLink",e.getPublishingPathRoute(e.activePublishingPathItem())),c(5),F("transform","scaleX("+e.publishingPathCompletion()+")"),c(6),F("transform","scaleY("+e.publishingPathLineProgress()+")"),c(),I(e.publishingPath.items),c(6),m(l.home.aboutSection.eyebrow),c(2),m(l.about.headline),c(),w(l.about.narrative[0]?136:-1),c(),w(l.about.narrative[1]?137:-1),c(10),m(l.connect.eyebrow),c(2),m(l.connect.headline),c(2),m(l.connect.intro),c(),g("href",l.connect.ctaUrl,C),c(),H(" ",l.connect.ctaLabel," ")}},dependencies:[X,N,W,Qt,tt,Z,J,V,j,it,at,At],styles:['[_nghost-%COMP%]{display:block;overflow-x:hidden}.hero[_ngcontent-%COMP%]{border-bottom:1px solid var(--cw-line);background:linear-gradient(135deg,var(--cw-hero-base) 0%,var(--cw-hero-base) 53%,var(--cw-hero-mid) 53%,var(--cw-hero-edge) 100%);height:calc(100svh - var(--cw-toolbar-height));min-height:calc(100svh - var(--cw-toolbar-height));display:grid;grid-template-columns:minmax(0,1fr) minmax(40vw,44vw);overflow:clip}.hero-copy-wrap[_ngcontent-%COMP%]{min-width:0;display:flex;align-items:center;padding:32px clamp(28px,(100vw - var(--cw-content-max)) / 2 + 40px,112px) 32px max(40px,(100vw - var(--cw-content-max)) / 2 + 8px)}.hero-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:min(100%,50rem)}h1[_ngcontent-%COMP%]{font-size:clamp(2.45rem,3.55vw,3.7rem);line-height:.94;letter-spacing:-.07em;margin:12px 0 18px}.hero-title-line[_ngcontent-%COMP%]{display:block;white-space:nowrap}.hero-rule[_ngcontent-%COMP%]{width:36px;height:4px;border-radius:999px;background:var(--cw-accent);margin:0 0 22px}.hero-context[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin:0 0 18px;color:var(--cw-muted);font-size:.95rem}.hero-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;padding-left:18px}.hero-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:50%;width:1px;height:14px;background:var(--cw-line);transform:translateY(-50%)}.lead[_ngcontent-%COMP%]{font-size:1.02rem;line-height:1.68;color:var(--cw-ink);max-width:var(--cw-reading-max);margin:0 0 20px}.hero-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:14px;margin-top:14px}.hero-art[_ngcontent-%COMP%]{min-width:0;min-height:0;height:100%}.hero-art[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center center}.theme-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:32px}.section-surface--soft[_ngcontent-%COMP%]{border-top:1px solid var(--cw-line);border-bottom:1px solid var(--cw-line);background:color-mix(in srgb,var(--cw-soft) 24%,white)}.theme-card[_ngcontent-%COMP%], .article-card[_ngcontent-%COMP%], .framework-visual[_ngcontent-%COMP%]{box-shadow:none!important}.theme-card[_ngcontent-%COMP%]{min-height:272px}.theme-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:28px 24px}.theme-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:28px 0 12px;line-height:1.15;font-size:1.3rem}.theme-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--cw-muted);line-height:1.65}.writing-band[_ngcontent-%COMP%]{background:transparent}.writing-carousel-region[_ngcontent-%COMP%]{width:100%;max-width:100vw;background:transparent;overflow-x:hidden}.cw-section-header__actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:12px;flex-wrap:wrap}.writing-carousel-controls[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:10px}.writing-carousel-control[_ngcontent-%COMP%], .article-cta[_ngcontent-%COMP%]{border:1px solid var(--cw-line);color:var(--cw-accent);background:color-mix(in srgb,var(--cw-accent) 5%,var(--cw-panel));transition:background-color .2s ease,border-color .2s ease,color .2s ease,transform .2s ease}.writing-carousel-control[_ngcontent-%COMP%]:hover, .article-cta[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--cw-accent) 12%,var(--cw-panel));border-color:color-mix(in srgb,var(--cw-accent) 45%,var(--cw-line))}.writing-carousel-shell[_ngcontent-%COMP%]{overflow:hidden}.writing-track[_ngcontent-%COMP%]{display:flex;transition:transform .45s ease;will-change:transform}.writing-slide[_ngcontent-%COMP%]{--writing-cards-per-slide: 3;min-width:100%;display:grid;grid-template-columns:repeat(var(--writing-cards-per-slide),minmax(0,1fr));gap:clamp(20px,1.8vw,28px);padding:12px clamp(32px,5vw,72px) 20px;box-sizing:border-box}.article-card[_ngcontent-%COMP%]{overflow:visible;display:flex;flex-direction:column;height:100%;min-width:0}.article-media-link[_ngcontent-%COMP%]{display:block;width:100%;height:clamp(180px,16vw,220px);flex:0 0 auto;overflow:hidden;background:var(--cw-soft);border-bottom:1px solid var(--cw-line);border-top-left-radius:inherit;border-top-right-radius:inherit}.article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}.article-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.03)}.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;gap:18px;padding:0 22px 22px;min-height:0}.article-icon[_ngcontent-%COMP%]{width:56px;height:56px;margin-top:-28px;border:1px solid var(--cw-line);background:var(--cw-panel);position:relative;z-index:1}.article-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.article-copy[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;gap:14px;min-height:0}.article-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.28rem;line-height:1.25;margin:0}.article-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.article-footer[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-top:auto}.article-footer[_ngcontent-%COMP%]   .cw-meta-row[_ngcontent-%COMP%]{flex:1 1 auto}.article-cta[_ngcontent-%COMP%]{flex:0 0 auto}.writing-carousel-pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:8px}.writing-carousel-dot[_ngcontent-%COMP%]{width:10px;height:10px;border:0;border-radius:999px;padding:0;background:var(--cw-line);transition:transform .2s ease,background-color .2s ease}.writing-carousel-dot[_ngcontent-%COMP%]:hover{transform:scale(1.15)}.writing-carousel-dot.is-active[_ngcontent-%COMP%]{background:var(--cw-accent)}body.cw-theme-dusk[_nghost-%COMP%]   .section-surface--soft[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .section-surface--soft[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-page) 88%,var(--cw-panel))}body.cw-theme-dusk[_nghost-%COMP%]   .writing-band[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .writing-band[_ngcontent-%COMP%]{padding-top:36px;padding-bottom:48px;background:transparent}body.cw-theme-dusk[_nghost-%COMP%]   .writing-carousel-region[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .writing-carousel-region[_ngcontent-%COMP%]{background:transparent}body.cw-theme-dusk[_nghost-%COMP%]   .writing-band[_ngcontent-%COMP%]   .cw-section-header[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .writing-band[_ngcontent-%COMP%]   .cw-section-header[_ngcontent-%COMP%]{margin-bottom:18px}body.cw-theme-dusk[_nghost-%COMP%]   .article-media-link[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .article-media-link[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-panel) 82%,var(--cw-hero-base))}body.cw-theme-dusk[_nghost-%COMP%]   .article-icon[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .article-icon[_ngcontent-%COMP%]{box-shadow:none}.feature-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.15fr .85fr;gap:72px;align-items:center}.framework-visual[_ngcontent-%COMP%]{padding:20px}.feature-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:12px}.feature-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3.2rem);letter-spacing:-.05em;margin:10px 0 18px}.operating-tools[_ngcontent-%COMP%]   .cw-link-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.operating-tools[_ngcontent-%COMP%]{background:transparent}.publishing-path[_ngcontent-%COMP%]{position:relative;overflow:visible;padding-block:72px 88px;background:linear-gradient(180deg,#07111e,#0a1422);border-top:1px solid rgba(126,151,188,.18);border-bottom:1px solid rgba(126,151,188,.18);--publishing-ink: #ffffff;--publishing-muted: rgba(226, 235, 246, .78);--publishing-panel: rgba(9, 17, 31, .56);--publishing-panel-strong: rgba(9, 17, 31, .86);--publishing-line: rgba(121, 160, 214, .26);--publishing-line-active: #72aaff;--publishing-line-glow: rgba(114, 170, 255, .2);--publishing-card-border: rgba(144, 170, 206, .18);--publishing-card-shadow: 0 28px 72px rgba(0, 0, 0, .22);--publishing-toolbar-offset: var(--cw-toolbar-current-height, var(--cw-toolbar-height))}.publishing-path__frame[_ngcontent-%COMP%]{position:relative}.publishing-path__header[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(320px,.78fr);gap:clamp(2rem,4vw,5rem);align-items:end;margin-bottom:32px}.publishing-path__headline-block[_ngcontent-%COMP%]   .cw-section-title[_ngcontent-%COMP%]{max-width:11ch;font-size:clamp(2.8rem,4vw,5.4rem);line-height:.95;letter-spacing:-.07em;text-wrap:balance;color:var(--publishing-ink)}.publishing-path__support-block[_ngcontent-%COMP%]{max-width:34rem;justify-self:end}.publishing-path__support-block[_ngcontent-%COMP%]   .cw-muted[_ngcontent-%COMP%]{font-size:1.06rem;line-height:1.74;color:var(--publishing-muted)}.publishing-path__layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,clamp(420px,42vw,680px)) minmax(260px,340px);gap:clamp(1.5rem,3vw,3rem);align-items:stretch}.publishing-path__story-column[_ngcontent-%COMP%], .publishing-path__timeline-column[_ngcontent-%COMP%]{min-width:0}.publishing-path__story-column[_ngcontent-%COMP%]{position:relative;align-self:stretch}.publishing-path__timeline-column[_ngcontent-%COMP%]{align-self:start}.publishing-path__sticky[_ngcontent-%COMP%]{position:relative}.publishing-path__sticky.is-fixed[_ngcontent-%COMP%]{position:fixed;z-index:4}.publishing-path__sticky.is-released[_ngcontent-%COMP%]{position:absolute;inset-inline:0}.publishing-path__story-card[_ngcontent-%COMP%]{display:grid;gap:18px;padding:28px 28px 24px;border-radius:28px;border:1px solid var(--publishing-card-border);background:linear-gradient(180deg,color-mix(in srgb,var(--publishing-panel) 92%,transparent),color-mix(in srgb,var(--publishing-panel-strong) 96%,transparent));box-shadow:var(--publishing-card-shadow);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.publishing-path__stage-meta[_ngcontent-%COMP%], .publishing-path__rail-topline[_ngcontent-%COMP%], .publishing-path__stage-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.publishing-path__week[_ngcontent-%COMP%], .publishing-path__card-index[_ngcontent-%COMP%]{font-size:.82rem;letter-spacing:.12em;text-transform:uppercase}.publishing-path__week[_ngcontent-%COMP%]{color:var(--publishing-muted)}.publishing-path__current-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;border-radius:999px;padding:7px 12px;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:color-mix(in srgb,var(--publishing-line-active) 16%,transparent);color:color-mix(in srgb,var(--publishing-line-active) 88%,white 8%)}.publishing-path__current-badge.is-recent[_ngcontent-%COMP%]{background:#72aaff24;color:#93bcff}.publishing-path__current-badge.is-current[_ngcontent-%COMP%]{background:#47c5a729;color:#84e0c8}.publishing-path__current-badge.is-next[_ngcontent-%COMP%]{background:#d6a13029;color:#f0c363}.publishing-path__stage-copy[_ngcontent-%COMP%]{display:grid;gap:12px}.publishing-path__kind[_ngcontent-%COMP%]{margin:0;font-size:.84rem;letter-spacing:.16em;text-transform:uppercase;font-weight:700}.publishing-path__kind.is-writing[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--cw-accent) 84%,#4f83ff)}.publishing-path__kind.is-framework[_ngcontent-%COMP%]{color:#2ea97f}.publishing-path__kind.is-guide[_ngcontent-%COMP%]{color:#c98a08}.publishing-path__stage-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;max-width:11ch;font-size:clamp(2rem,2.7vw,3.2rem);line-height:.96;letter-spacing:-.05em;text-wrap:balance;color:var(--publishing-ink)}.publishing-path__stage-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .publishing-path__step-shell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--publishing-muted);line-height:1.65}.publishing-path__stage-continuity[_ngcontent-%COMP%]{margin:0;padding-top:16px;color:var(--publishing-muted);line-height:1.7;border-top:1px solid color-mix(in srgb,var(--publishing-card-border) 72%,transparent)}.publishing-path__cta[_ngcontent-%COMP%]{--mdc-filled-button-container-color: var(--cw-accent);--mdc-filled-button-label-text-color: #ffffff}.publishing-path__progress[_ngcontent-%COMP%]{overflow:hidden;height:4px;border-radius:999px;background:color-mix(in srgb,var(--publishing-line) 24%,transparent)}.publishing-path__progress-fill[_ngcontent-%COMP%]{width:100%;height:100%;transform-origin:left center;background:linear-gradient(90deg,var(--cw-accent) 0%,#47c5a7 58%,#d6a130 100%)}.publishing-path__card-index[_ngcontent-%COMP%]{color:var(--publishing-muted)}.publishing-path__timeline[_ngcontent-%COMP%]{position:relative;display:grid;gap:18px;min-height:auto;padding:8px 0 12px}.publishing-path__timeline-spine[_ngcontent-%COMP%]{position:absolute;left:13px;top:18px;bottom:18px;width:2px;pointer-events:none}.publishing-path__timeline-spine-base[_ngcontent-%COMP%], .publishing-path__timeline-spine-fill[_ngcontent-%COMP%]{position:absolute;inset-inline:0;border-radius:999px}.publishing-path__timeline-spine-base[_ngcontent-%COMP%]{inset-block:0;background:color-mix(in srgb,var(--publishing-line) 28%,transparent)}.publishing-path__timeline-spine-fill[_ngcontent-%COMP%]{inset-block:0 auto;height:100%;transform-origin:top center;background:linear-gradient(180deg,var(--cw-accent) 0%,#47c5a7 62%,#d6a130 100%);box-shadow:0 0 10px color-mix(in srgb,var(--publishing-line-active) 18%,transparent)}.publishing-path__rail-item[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:28px minmax(0,1fr);align-items:start;gap:14px;min-height:132px;padding:10px 0;color:inherit;text-decoration:none;opacity:.74;transition:opacity .18s ease,transform .18s ease}.publishing-path__rail-topline[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;color:var(--publishing-muted);font-size:.76rem;letter-spacing:.08em;text-transform:uppercase}.publishing-path__rail-kind[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--publishing-muted) 82%,var(--publishing-ink))}.publishing-path__rail-status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;border-radius:999px;padding:3px 8px;background:color-mix(in srgb,var(--publishing-line) 34%,transparent);color:color-mix(in srgb,var(--publishing-ink) 84%,var(--publishing-muted))}.publishing-path__rail-status.is-recent[_ngcontent-%COMP%]{color:#93bcff}.publishing-path__rail-status.is-current[_ngcontent-%COMP%]{color:#84e0c8}.publishing-path__rail-status.is-next[_ngcontent-%COMP%]{color:#f0c363}.publishing-path__rail-node[_ngcontent-%COMP%]{width:10px;height:10px;margin-top:8px;margin-left:9px;border-radius:999px;background:color-mix(in srgb,var(--publishing-line) 54%,white);box-shadow:0 0 0 6px transparent;transition:background-color .18s ease,box-shadow .18s ease,transform .18s ease}.publishing-path__rail-copy[_ngcontent-%COMP%]{display:grid;gap:8px;padding:4px 16px 14px 0;border-bottom:1px solid color-mix(in srgb,var(--publishing-card-border) 68%,transparent)}.publishing-path__rail-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;line-height:1.3;text-wrap:balance;color:var(--publishing-ink)}.publishing-path__rail-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--publishing-muted);line-height:1.58}.publishing-path__rail-item.is-active[_ngcontent-%COMP%]{opacity:1;transform:translate(-2px)}.publishing-path__rail-item.is-active[_ngcontent-%COMP%]   .publishing-path__rail-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--publishing-ink)}.publishing-path__rail-item.is-active[_ngcontent-%COMP%]   .publishing-path__rail-node[_ngcontent-%COMP%], .publishing-path__rail-item.is-complete[_ngcontent-%COMP%]   .publishing-path__rail-node[_ngcontent-%COMP%]{background:var(--publishing-line-active);box-shadow:0 0 0 6px color-mix(in srgb,var(--publishing-line-active) 10%,transparent)}.publishing-path__rail-item.is-active[_ngcontent-%COMP%]   .publishing-path__rail-node[_ngcontent-%COMP%]{transform:scale(1.08)}.publishing-path__rail-item[_ngcontent-%COMP%]:hover, .publishing-path__rail-item[_ngcontent-%COMP%]:focus-visible{opacity:.94}.publishing-path__rail-item[_ngcontent-%COMP%]:focus-visible{outline:none}body.cw-theme-dusk[_nghost-%COMP%]   .publishing-path[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .publishing-path[_ngcontent-%COMP%]{--publishing-panel: rgba(10, 21, 35, .58);--publishing-panel-strong: rgba(11, 24, 39, .84);--publishing-line: rgba(122, 158, 205, .34);--publishing-line-active: #72aaff;--publishing-line-glow: rgba(114, 170, 255, .2);--publishing-card-border: rgba(144, 170, 206, .16);--publishing-card-shadow: 0 28px 72px rgba(0, 0, 0, .22)}body.cw-theme-light[_nghost-%COMP%]   .publishing-path[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .publishing-path[_ngcontent-%COMP%]{background:linear-gradient(180deg,color-mix(in srgb,var(--cw-page) 84%,white),color-mix(in srgb,var(--cw-soft) 76%,white));border-top-color:color-mix(in srgb,var(--cw-accent) 12%,var(--cw-line));border-bottom-color:color-mix(in srgb,var(--cw-accent) 12%,var(--cw-line));--publishing-ink: var(--cw-ink);--publishing-muted: color-mix(in srgb, var(--cw-muted) 92%, var(--cw-ink) 8%);--publishing-panel: rgba(255, 255, 255, .72);--publishing-panel-strong: rgba(255, 255, 255, .92);--publishing-line: rgba(40, 101, 175, .14);--publishing-line-active: var(--cw-accent);--publishing-line-glow: rgba(40, 101, 175, .08);--publishing-card-border: color-mix(in srgb, var(--cw-accent) 12%, var(--cw-line));--publishing-card-shadow: 0 22px 46px rgba(7, 24, 39, .08)}body.cw-theme-light[_nghost-%COMP%]   .publishing-path__rail-copy[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .publishing-path__rail-copy[_ngcontent-%COMP%]{border-bottom-color:color-mix(in srgb,var(--cw-accent) 10%,var(--cw-line))}body.cw-theme-dusk[_nghost-%COMP%]   .publishing-path__current-badge[_ngcontent-%COMP%], body.cw-theme-dusk   [_nghost-%COMP%]   .publishing-path__current-badge[_ngcontent-%COMP%]{background:#4f88ff29;color:#8bb6ff}.about-connect[_ngcontent-%COMP%]{background:linear-gradient(180deg,var(--cw-hero-base),var(--cw-hero-mid) 100%)}.about-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,.95fr) minmax(560px,1.05fr);align-items:center;gap:clamp(4rem,5vw,5.5rem)}.about-grid[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}.about-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:0;max-width:34rem}.about-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(2.75rem,3.8vw,3.95rem);line-height:.98;letter-spacing:-.045em;margin:12px 0 22px;max-width:11ch}.about-copy[_ngcontent-%COMP%] > p.cw-muted[_ngcontent-%COMP%]{margin:0;max-width:31rem;font-size:1.02rem;line-height:1.72}.about-copy[_ngcontent-%COMP%] > p.cw-muted[_ngcontent-%COMP%] + p.cw-muted[_ngcontent-%COMP%]{margin-top:22px}.about-copy[_ngcontent-%COMP%]   .cw-link-action[_ngcontent-%COMP%]{margin-top:28px;align-self:flex-start}.substack-card[_ngcontent-%COMP%]{width:100%;max-width:660px;min-height:454px;overflow:hidden;justify-self:end}.substack-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:0;height:100%}.substack-card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(220px,.98fr);align-items:center;min-height:inherit}.substack-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:16px;padding:42px 24px 42px 42px}.substack-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin:0;font-size:clamp(2.15rem,2.7vw,3rem);line-height:1.04;letter-spacing:-.04em;max-width:11.5ch;text-wrap:balance}.substack-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:18rem;font-size:1rem;line-height:1.6}.substack-copy[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]{margin-top:6px;align-self:flex-start}.substack-visual[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:36px 36px 36px 0}.substack-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:min(100%,300px);max-height:250px;height:auto;object-fit:contain}@media(max-width:1000px){.hero[_ngcontent-%COMP%], .feature-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero[_ngcontent-%COMP%]{height:auto;min-height:auto}.hero-copy-wrap[_ngcontent-%COMP%]{padding:40px 24px 24px}.hero-art[_ngcontent-%COMP%]{height:min(48svh,560px)}.theme-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.writing-slide[_ngcontent-%COMP%]{grid-template-columns:repeat(var(--writing-cards-per-slide),minmax(0,1fr))}.publishing-path[_ngcontent-%COMP%]{padding-block:56px 72px}.publishing-path__header[_ngcontent-%COMP%], .publishing-path__layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.publishing-path__header[_ngcontent-%COMP%]{margin-bottom:24px}.publishing-path__support-block[_ngcontent-%COMP%]{justify-self:start;max-width:38rem}.publishing-path__sticky[_ngcontent-%COMP%]{position:static!important;top:auto!important;left:auto!important;width:auto!important}.publishing-path__story-card[_ngcontent-%COMP%]{width:100%}.publishing-path__timeline[_ngcontent-%COMP%]{min-height:auto;padding-top:4px;gap:10px}.about-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:40px}.about-copy[_ngcontent-%COMP%]{max-width:38rem}.substack-card-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:auto}.substack-copy[_ngcontent-%COMP%]{padding:36px 36px 20px}.substack-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:10.5ch}.substack-visual[_ngcontent-%COMP%]{padding:0 36px 32px;justify-content:center}}@media(max-width:720px){h1[_ngcontent-%COMP%]{font-size:clamp(2rem,8vw,2.8rem);line-height:.96}.hero-title-line[_ngcontent-%COMP%]{white-space:normal}.cw-section-header__actions[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.article-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding-inline:18px;padding-bottom:18px}.writing-slide[_ngcontent-%COMP%]{gap:18px;padding-inline:18px}}@media(max-width:640px){.hero[_ngcontent-%COMP%]{min-height:auto;height:auto}.hero-copy-wrap[_ngcontent-%COMP%]{padding:28px 16px 20px}h1[_ngcontent-%COMP%]{font-size:clamp(2.6rem,12vw,3.5rem)}.lead[_ngcontent-%COMP%], .cw-muted[_ngcontent-%COMP%]{max-width:none}.hero-art[_ngcontent-%COMP%]{display:none}.hero-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:0}.hero-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{display:none}.theme-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.cw-section-header__actions[_ngcontent-%COMP%]{align-items:stretch}.writing-carousel-controls[_ngcontent-%COMP%]{justify-content:flex-end}.article-footer[_ngcontent-%COMP%]{align-items:center}.publishing-path__headline-block[_ngcontent-%COMP%]   .cw-section-title[_ngcontent-%COMP%]{font-size:clamp(2.4rem,10vw,4rem)}.publishing-path__story-card[_ngcontent-%COMP%]{padding:22px 20px 20px;border-radius:24px}.publishing-path__stage-actions[_ngcontent-%COMP%]{align-items:flex-start}.publishing-path__stage-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:12ch;font-size:clamp(1.8rem,9vw,2.6rem)}.publishing-path__rail-item[_ngcontent-%COMP%]{grid-template-columns:24px minmax(0,1fr);gap:12px}.publishing-path__rail-node[_ngcontent-%COMP%]{margin-left:7px}.publishing-path__rail-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.96rem}.framework-visual[_ngcontent-%COMP%]{padding:14px}.substack-copy[_ngcontent-%COMP%]{padding:32px 24px 20px}.substack-visual[_ngcontent-%COMP%]{padding:0 24px 24px}.about-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(2.3rem,10vw,3.2rem);max-width:10ch}.substack-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.95rem,9vw,2.6rem);max-width:10ch}}'],changeDetection:0})};export{le as HomeComponent};
