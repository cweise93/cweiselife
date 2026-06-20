import{e as te}from"./chunk-DMHYCPQE.js";import{$ as ne,aa as O,da as oe,ea as re,fa as ae,oa as se,q as ie,x as P}from"./chunk-ML463JQA.js";import{$b as E,Eb as f,Fb as y,Gb as M,Gc as C,Ha as T,Ib as U,Jb as G,Kb as k,Lb as _,Mb as l,Nb as d,Ob as z,Pb as I,Qb as D,Wa as V,Y as v,Ya as Q,Zb as Y,_ as W,_b as w,aa as p,ac as H,bc as q,db as s,dc as Z,ec as J,kc as K,lc as X,mc as g,nc as c,rb as m,sa as N,sb as b,vc as ee}from"./chunk-ETFXOOIL.js";var S=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}positions;update(t,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(i=>this._trackTile(i))}_trackTile(t){let e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new $(this.rowIndex,e)}_findMatchingGap(t){if(t>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${t} is wider than grid with cols="${this.tracker.length}".`);let e=-1,i=-1;do{if(this.columnIndex+t>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e);continue}i=this._findGapEndIndex(e),this.columnIndex=e+1}while(i-e<t||i==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let e=t+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(t,e){for(let i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}},$=class{row;col;constructor(t,e){this.row=t,this.col=e}};var L=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=b({type:o});static \u0275inj=v({imports:[O]})}return o})();var de=["*"];var fe=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,ge=new W("MAT_GRID_LIST"),j=(()=>{class o{_element=p(T);_gridList=p(ge,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(P(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(P(e))}_setStyle(e,i){this._element.nativeElement.style[e]=i}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,n){i&2&&f("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:de,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,n){i&1&&(E(),I(0,"div",0),H(1),D())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return o})();var _e=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,x=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(t,e,i,n){this._gutterSize=ce(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=n}getBaseTileSize(t,e){return`(${t}% - (${this._gutterSize} * ${e}))`}getTilePosition(t,e){return e===0?"0":u(`(${t} + ${this._gutterSize}) * ${e}`)}getTileSize(t,e){return`(${t} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(t,e,i){let n=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,i,n,r),this.setRowStyles(t,e,n,r)}setColStyles(t,e,i,n){let r=this.getBaseTileSize(i,n),a=this._direction==="rtl"?"right":"left";t._setStyle(a,this.getTilePosition(r,e)),t._setStyle("width",u(this.getTileSize(r,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}},R=class extends x{fixedRowHeight;constructor(t){super(),this.fixedRowHeight=t}init(t,e,i,n){super.init(t,e,i,n),this.fixedRowHeight=ce(this.fixedRowHeight),_e.test(this.fixedRowHeight)}setRowStyles(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",u(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",u(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},A=class extends x{rowHeightRatio;baseTileHeight;constructor(t){super(),this._parseRatio(t)}setRowStyles(t,e,i,n){let r=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(r,n),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",u(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",u(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(t){let e=t.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},F=class extends x{setRowStyles(t,e){let i=100/this._rowspan,n=(this._rows-1)/this._rows,r=this.getBaseTileSize(i,n);t._setStyle("top",this.getTilePosition(r,e)),t._setStyle("height",u(this.getTileSize(r,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function u(o){return`calc(${o})`}function ce(o){return o.match(/([A-Za-z%]+)$/)?o:`${o}px`}var we="fit",pe=(()=>{class o{_element=p(T);_dir=p(ne,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(P(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let i=`${e??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===we?this._tileStyler=new F:e&&e.indexOf(":")>-1?this._tileStyler=new A(e):this._tileStyler=new R(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new S);let e=this._tileCoordinator,i=this._tiles.filter(r=>!r._gridList||r._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,n),i.forEach((r,a)=>{let h=e.positions[a];this._tileStyler.setStyle(r,h.row,h.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["mat-grid-list"]],contentQueries:function(i,n,r){if(i&1&&q(r,j,5),i&2){let a;Z(a=J())&&(n._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,n){i&2&&f("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[ee([{provide:ge,useExisting:o}])],ngContentSelectors:de,decls:2,vars:0,template:function(i,n){i&1&&(E(),I(0,"div"),H(1),D())},styles:[fe],encapsulation:2})}return o})(),ue=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=b({type:o});static \u0275inj=v({imports:[L,O,L]})}return o})();var ve=(o,t)=>t.guide.id;function be(o,t){if(o&1&&z(0,"img",10),o&2){let e=w().$implicit;_("src",e.guide.heroImage,V)("alt",e.guide.title)}}function ye(o,t){o&1&&(l(0,"span",15),g(1,"Featured tool"),d())}function Me(o,t){o&1&&(l(0,"span",15),g(1,"Operating guide"),d())}function Ce(o,t){if(o&1&&(l(0,"span"),g(1),d()),o&2){let e=t.$implicit;s(),c(e)}}function Pe(o,t){if(o&1&&(l(0,"div",18),G(1,Ce,2,1,"span",null,U),d()),o&2){let e=w().$implicit,i=w();s(),k(i.getGuideTags(e.guide))}}function Oe(o,t){if(o&1&&(l(0,"mat-grid-tile",7)(1,"a",8)(2,"div",9),y(3,be,1,2,"img",10),z(4,"div",11)(5,"div",12),d(),l(6,"div",13)(7,"div",14),y(8,ye,2,0,"span",15)(9,Me,2,0,"span",15),l(10,"div",16)(11,"div",17)(12,"mat-icon"),g(13),d()(),l(14,"h2"),g(15),d()()(),l(16,"p"),g(17),d(),y(18,Pe,3,0,"div",18),l(19,"div",19)(20,"span"),g(21,"Open guide"),d(),l(22,"mat-icon"),g(23,"north_east"),d()()()()()),o&2){let e=t.$implicit,i=w();_("colspan",e.colspan)("rowspan",e.rowspan),s(),K("guide-tile--hero",e.hero),_("routerLink",i.getGuideRoute(e.guide.slug)),f("aria-label","Open guide: "+e.guide.title),s(),X(e.visualClass),s(),M(e.guide.heroImage?3:-1),s(5),M(e.guide.featured?8:9),s(5),c(e.guide.icon),s(2),c(e.guide.title),s(2),c(e.guide.summary),s(),M(i.getGuideTags(e.guide).length?18:-1)}}var Se={meta:{version:1,updatedOn:"2026-05-27",eyebrow:"Guides",headline:"Operating Tools",intro:""},items:[]},he=class o{contentService=p(se);page=ie(this.contentService.getGuidesPage(),{initialValue:Se});viewportWidth=N(typeof window>"u"?1440:window.innerWidth);guideGridCols=C(()=>{let t=this.viewportWidth();return t<760?1:t<1160?2:t<1580?3:4});guideGridRowHeight=C(()=>{let t=this.viewportWidth();return t<760?"292px":t<1160?"320px":t<1580?"272px":"248px"});guideTileLayouts=C(()=>this.buildGuideTileLayouts(this.page().items,this.guideGridCols()));getGuideRoute(t){return["/",...t.split("/").filter(Boolean)]}onResize(){this.viewportWidth.set(typeof window>"u"?1440:window.innerWidth)}getGuideTags(t){return t.tags.slice(0,3)}buildGuideTileLayouts(t,e){if(!t.length)return[];if(e===1)return t.map((n,r)=>({guide:n,index:r,colspan:1,rowspan:1,hero:n.featured&&r===0,visualClass:this.getGuideVisualClass(r)}));let i=[];return t.map((n,r)=>{let a=this.placeGuideTile(i,e,this.getGuideSpanCandidates(n,r,e));return{guide:n,index:r,colspan:a.cols,rowspan:a.rows,hero:n.featured&&r===0,visualClass:this.getGuideVisualClass(r)}})}placeGuideTile(t,e,i){let n=0;for(;;){for(let r=0;r<e;r+=1)if(!this.isOccupied(t,n,r)){for(let a of i)if(!(r+a.cols>e)&&this.canPlaceTile(t,n,r,a))return this.markTile(t,n,r,a),a}n+=1}}getGuideSpanCandidates(t,e,i){if(t.featured&&e===0)return this.filterGuideSpanCandidates(i,i>=3?[{cols:2,rows:2},{cols:2,rows:1},{cols:1,rows:2},{cols:1,rows:1}]:[{cols:2,rows:2},{cols:2,rows:1},{cols:1,rows:1}]);let n=this.hashGuideSeed(t,e),r=t.title.length>28||t.summary.length>118?"wide":"balanced",a=n%4,B=[...(r==="wide"?[[{cols:2,rows:1},{cols:1,rows:1},{cols:1,rows:2}],[{cols:1,rows:2},{cols:2,rows:1},{cols:1,rows:1}],[{cols:2,rows:1},{cols:1,rows:2},{cols:1,rows:1}],[{cols:1,rows:1},{cols:2,rows:1},{cols:1,rows:2}]]:[[{cols:1,rows:1},{cols:2,rows:1},{cols:1,rows:2}],[{cols:2,rows:1},{cols:1,rows:1},{cols:1,rows:2}],[{cols:1,rows:2},{cols:1,rows:1},{cols:2,rows:1}],[{cols:1,rows:1},{cols:1,rows:2},{cols:2,rows:1}]])[a]];return t.featured&&B.unshift({cols:2,rows:1}),this.filterGuideSpanCandidates(i,B)}filterGuideSpanCandidates(t,e){let i=e.filter((n,r,a)=>n.cols>t?!1:a.findIndex(h=>h.cols===n.cols&&h.rows===n.rows)===r);return i.length?i:[{cols:1,rows:1}]}canPlaceTile(t,e,i,n){for(let r=0;r<n.rows;r+=1)for(let a=0;a<n.cols;a+=1)if(this.isOccupied(t,e+r,i+a))return!1;return!0}markTile(t,e,i,n){for(let r=0;r<n.rows;r+=1){t[e+r]??=[];for(let a=0;a<n.cols;a+=1)t[e+r][i+a]=!0}}isOccupied(t,e,i){return t[e]?.[i]??!1}getGuideVisualClass(t){let e=["guide-visual--aurora","guide-visual--ember","guide-visual--tide","guide-visual--dawn"];return e[t%e.length]??e[0]}hashGuideSeed(t,e){let i=`${t.id}:${t.slug}:${t.title}:${e}`,n=0;for(let r of i)n=n*31+r.charCodeAt(0)>>>0;return n}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["cw-guides"]],hostBindings:function(e,i){e&1&&Y("resize",function(){return i.onResize()},Q)},decls:13,vars:5,consts:[[1,"page-hero"],[1,"cw-container"],[1,"cw-eyebrow"],[1,"cw-muted"],[1,"cw-section"],[1,"cw-container","guides-grid-shell"],["gutterSize","18px",3,"cols","rowHeight"],[3,"colspan","rowspan"],[1,"guide-tile",3,"routerLink"],[1,"guide-visual"],[3,"src","alt"],[1,"guide-visual__veil"],[1,"guide-visual__mesh"],[1,"guide-copy"],[1,"guide-copy__header"],[1,"guide-kicker"],[1,"guide-copy__title-row"],[1,"guide-badge"],["aria-label","Guide topics",1,"guide-tags"],[1,"guide-cta"]],template:function(e,i){if(e&1&&(l(0,"section",0)(1,"div",1)(2,"p",2),g(3),d(),l(4,"h1"),g(5),d(),l(6,"p",3),g(7),d()()(),l(8,"section",4)(9,"div",5)(10,"mat-grid-list",6),G(11,Oe,24,14,"mat-grid-tile",7,ve),d()()()),e&2){let n=i.page();s(3),c(n.meta.eyebrow),s(2),c(n.meta.headline),s(2),c(n.meta.intro),s(3),_("cols",i.guideGridCols())("rowHeight",i.guideGridRowHeight()),s(),k(i.guideTileLayouts())}},dependencies:[te,oe,ue,pe,j,ae,re],styles:[".page-hero[_ngcontent-%COMP%]{padding:80px 0 32px;background:radial-gradient(circle at top left,color-mix(in srgb,var(--cw-accent) 15%,transparent),transparent 42%),linear-gradient(135deg,var(--cw-hero-base),var(--cw-hero-mid))}h1[_ngcontent-%COMP%]{font-size:clamp(2.6rem,5vw,4.4rem);line-height:.95;letter-spacing:-.06em;margin:12px 0 20px}.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:56rem}.guides-grid-shell[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]{display:block}.guides-grid-shell[_ngcontent-%COMP%]     .mat-grid-tile-content{padding:0;align-items:stretch;justify-content:stretch}.guide-tile[_ngcontent-%COMP%]{position:relative;display:grid;width:100%;height:100%;min-height:0;overflow:hidden;border:1px solid color-mix(in srgb,var(--cw-accent) 20%,transparent);border-radius:28px;background:linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 86%,#08111d),color-mix(in srgb,var(--cw-surface) 92%,#07111b));box-shadow:0 24px 48px #010a163d;color:inherit;text-decoration:none;transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}.guide-tile[_ngcontent-%COMP%]:hover, .guide-tile[_ngcontent-%COMP%]:focus-visible{transform:translateY(-4px);border-color:color-mix(in srgb,var(--cw-accent) 44%,white 8%);box-shadow:0 30px 60px #030c1a5c}.guide-tile[_ngcontent-%COMP%]:focus-visible{outline:2px solid color-mix(in srgb,var(--cw-accent) 70%,white 20%);outline-offset:3px}.guide-visual[_ngcontent-%COMP%]{position:absolute;inset:0;isolation:isolate;pointer-events:none}.guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:18px;right:18px;width:min(46%,280px);height:clamp(112px,26%,172px);object-fit:cover;object-position:center top;display:block;border:1px solid rgba(255,255,255,.08);border-radius:24px;opacity:.24;transform:rotate(3deg) scale(1.02);filter:saturate(.96) contrast(1.02);box-shadow:0 18px 36px #00000047}.guide-visual__veil[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(120,177,255,.08),transparent 28%),linear-gradient(180deg,#050e1b14,#050e1b1f),linear-gradient(120deg,rgba(8,18,31,.24),transparent 38%,rgba(20,118,255,.05))}.guide-visual__mesh[_ngcontent-%COMP%]{position:absolute;inset:auto 18px 18px auto;width:112px;height:112px;border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 62%),radial-gradient(circle at 28% 28%,rgba(255,255,255,.15),transparent 52%);opacity:.42;mix-blend-mode:screen}.guide-visual--aurora[_ngcontent-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(110,228,255,.26),transparent 64%),radial-gradient(circle at 24% 24%,rgba(162,255,227,.22),transparent 54%)}.guide-visual--ember[_ngcontent-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(255,190,126,.22),transparent 64%),radial-gradient(circle at 24% 24%,rgba(255,120,92,.2),transparent 54%)}.guide-visual--tide[_ngcontent-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(115,175,255,.24),transparent 64%),radial-gradient(circle at 24% 24%,rgba(122,230,255,.2),transparent 54%)}.guide-visual--dawn[_ngcontent-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(192,161,255,.22),transparent 64%),radial-gradient(circle at 24% 24%,rgba(255,200,147,.2),transparent 54%)}.guide-badge[_ngcontent-%COMP%]{position:relative;display:inline-grid;width:50px;height:50px;flex:0 0 50px;place-items:center;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:#0a182abd;color:#d6e8ff;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 10px 24px #00000038}.guide-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.guide-copy[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;flex:1;flex-direction:column;gap:14px;padding:18px 18px 16px}.guide-copy__header[_ngcontent-%COMP%]{display:grid;gap:6px}.guide-copy__title-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start}.guide-kicker[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--cw-accent) 82%,white 16%);font-size:.74rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.guide-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:var(--cw-text);font-size:clamp(1.35rem,1.8vw,2.1rem);line-height:1.02;letter-spacing:-.04em;text-wrap:balance}.guide-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--cw-muted);font-size:.96rem;line-height:1.42;text-wrap:pretty;max-width:32ch}.guide-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.guide-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:7px 11px;border:1px solid rgba(129,181,255,.18);border-radius:999px;background:#0c1a2aa3;color:#a9c7f2;font-size:.83rem;line-height:1;text-transform:lowercase}.guide-cta[_ngcontent-%COMP%]{display:inline-flex;width:fit-content;align-items:center;gap:10px;margin-top:4px;color:color-mix(in srgb,var(--cw-accent) 80%,white 10%);font-size:.88rem;font-weight:700}.guide-cta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{letter-spacing:.12em;text-transform:uppercase}.guide-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;letter-spacing:normal;text-transform:none}.guide-tile--hero[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]{inset:0}.guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]{padding:20px 22px 18px}.guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.8rem,2.1vw,2.6rem)}.guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:34ch;font-size:1rem}.guide-tile--hero[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{top:22px;right:22px;width:min(40%,340px);height:clamp(150px,32%,220px)}body.cw-theme-light[_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-accent) 18%,var(--cw-line));background:linear-gradient(180deg,color-mix(in srgb,var(--cw-panel) 94%,var(--cw-accent-soft)),color-mix(in srgb,var(--cw-panel) 98%,var(--cw-page)));box-shadow:0 18px 32px -26px #07182747,0 2px 6px #0718270a}body.cw-theme-light[_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%]:hover, body.cw-theme-light   [_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%]:hover, body.cw-theme-light[_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%]:focus-visible, body.cw-theme-light   [_nghost-%COMP%]   .guide-tile[_ngcontent-%COMP%]:focus-visible{transform:translateY(-1px);border-color:color-mix(in srgb,var(--cw-accent) 28%,var(--cw-line));box-shadow:0 22px 38px -28px #07182757,0 10px 18px -16px #0718271f,0 0 0 1px color-mix(in srgb,var(--cw-accent) 10%,transparent)}body.cw-theme-light[_nghost-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.12;transform:rotate(2deg) scale(1.01);filter:saturate(.9) contrast(.98);box-shadow:0 14px 28px -22px #223f5e42}body.cw-theme-light[_nghost-%COMP%]   .guide-tile--hero[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-tile--hero[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.15}body.cw-theme-light[_nghost-%COMP%]   .guide-visual__veil[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-visual__veil[_ngcontent-%COMP%]{background:radial-gradient(circle at top right,rgba(81,138,214,.06),transparent 24%),linear-gradient(180deg,#ffffff05,#ffffff1f 46%,#f8fbff80),linear-gradient(120deg,rgba(40,101,175,.04),transparent 42%,rgba(255,255,255,.08))}body.cw-theme-light[_nghost-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-visual__mesh[_ngcontent-%COMP%]{opacity:.22}body.cw-theme-light[_nghost-%COMP%]   .guide-badge[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-badge[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--cw-accent) 14%,var(--cw-line));background:#ffffffb8;color:color-mix(in srgb,var(--cw-accent) 74%,var(--cw-ink));box-shadow:0 8px 18px #223f5e14}body.cw-theme-light[_nghost-%COMP%]   .guide-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.cw-theme-light   [_nghost-%COMP%]   .guide-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--cw-panel) 86%,var(--cw-accent-soft));color:color-mix(in srgb,var(--cw-ink) 72%,var(--cw-accent) 28%)}@media(max-width:760px){.page-hero[_ngcontent-%COMP%]{padding:64px 0 20px}.guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .guide-tile--hero[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .guide-tile[_ngcontent-%COMP%]   .guide-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{top:16px;right:16px;width:44%;height:112px;opacity:.18;transform:rotate(2deg)}.guide-copy[_ngcontent-%COMP%], .guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]{padding:16px}.guide-copy__title-row[_ngcontent-%COMP%]{gap:10px}.guide-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.55rem,8vw,2.2rem)}.guide-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .guide-tile--hero[_ngcontent-%COMP%]   .guide-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.98rem;max-width:100%}}"],changeDetection:1})};export{he as GuidesComponent};
