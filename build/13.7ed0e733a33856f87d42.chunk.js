(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ef09d4344e98a758bac7:function(e,t,o){"use strict";o.r(t);var n,a=o("8af190b70a6bc55c6f1b"),r=o.n(a),i=o("0d7f0986bcd2f33d8a2a"),l=o("ab039aecd4a1d4fedc0e"),c=o("0b3cb19af78752326f59"),d=o("eb656803928a435bd3cc"),f=o("66543f9bb6e90e461320"),u=o("761b1f7fdd256e4f5426"),s=o("045dd844c9ae122c636a"),p=o("24437210edfad996691f"),m=(o("8a2d1b95e05b6a321e74"),o("d7dd51e1bf6bfc2c9c3d")),b=o("a28fc3c963a1d4d1a2e5"),y=o("ab4cb61bcb2dc161defb"),g=o("5ca68c6edf7ca33c5f8f"),h=o("76abbe2db5a955046df2"),v=o("ab7d7caa0ee3a73c9e57"),L=o("0fa1f005d5c81eaf9110"),j=o("0785de3f40b134973d35"),w=o("6542cd13fd5dd1bcffd4"),_=o("a72b40110d9c31c9b5c5"),O=o("d6f259ffb10cc810b5a4"),x=o("1a492921026f78aead80"),C="app.components.GroupLayers",E=Object(l.defineMessages)({columnLayer:{id:"".concat(C,".columnLayer"),defaultMessage:"Layer"},columnProject:{id:"".concat(C,".columnProject"),defaultMessage:"Project"},columnKey:{id:"".concat(C,".columnKey"),defaultMessage:"Key"},columnInfo:{id:"".concat(C,".columnInfo"),defaultMessage:"Read more"},info:{id:"".concat(C,".info"),defaultMessage:"Info"}});function I(e,t,o,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var M=c.default.div.withConfig({displayName:"GroupLayers__Styled",componentId:"plf17t-0"})(["display:table;table-layout:fixed;margin-top:20px;margin-bottom:20px;"]),P=c.default.div.withConfig({displayName:"GroupLayers__ListHeader",componentId:"plf17t-1"})(["display:table-header-group;"]),k=c.default.div.withConfig({displayName:"GroupLayers__ListHeaderRow",componentId:"plf17t-2"})(["display:table-row;"]),N=c.default.div.withConfig({displayName:"GroupLayers__ListHeaderCell",componentId:"plf17t-3"})(["display:table-cell;font-size:14px;border-bottom:1px solid;vertical-align:middle;color:",";"],function(e){return e.theme.global.colors["dark-4"]}),A=Object(c.default)(N).withConfig({displayName:"GroupLayers__ListHeaderKey",componentId:"plf17t-4"})(["width:60px;text-align:center;"]),T=Object(c.default)(N).withConfig({displayName:"GroupLayers__ListHeaderInfo",componentId:"plf17t-5"})(["width:60px;text-align:center;"]),G=c.default.div.withConfig({displayName:"GroupLayers__ListBody",componentId:"plf17t-6"})(["display:table-row-group;"]),F=c.default.div.withConfig({displayName:"GroupLayers__ListBodyRow",componentId:"plf17t-7"})(["display:table-row;"]),B=c.default.div.withConfig({displayName:"GroupLayers__ListBodyCell",componentId:"plf17t-8"})(["display:table-cell;vertical-align:middle;height:54px;padding:6px 0;border-bottom:1px solid ",";"],function(e){return e.theme.global.colors["light-4"]}),z=Object(c.default)(B).withConfig({displayName:"GroupLayers__ListBodyCellCenter",componentId:"plf17t-9"})(["text-align:center;"]),D=c.default.span.withConfig({displayName:"GroupLayers__Label",componentId:"plf17t-10"})(["line-height:18px;"]),H=Object(c.default)(function(e){return r.a.createElement(f.a,S({},e,{plain:!0}))}).withConfig({displayName:"GroupLayers__InfoButton",componentId:"plf17t-11"})(["background:",";color:",";padding:0 ",";border-radius:5px;"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.edgeSize.xsmall}),$=Object(c.default)(x.a).withConfig({displayName:"GroupLayers__StyledCheckBox",componentId:"plf17t-12"})(["margin-right:6px;"]),K=I(p.a,{size:"small",color:"dark-4"}),U=I(z,{},void 0,"[Key]");var q,R=function(e){var t=e.layers,o=e.activeLayers,n=e.onToggleLayer,a=e.onLayerInfo,i=e.locale,c=e.projects;return I(M,{},void 0,I(P,{},void 0,I(k,{},void 0,I(N,{},void 0,I(d.a,{direction:"row",gap:"small",align:"center"},void 0,K,r.a.createElement(l.FormattedMessage,E[c?"columnProject":"columnLayer"]))),!c&&I(A,{},void 0,r.a.createElement(l.FormattedMessage,E.columnKey)),I(T,{},void 0,r.a.createElement(l.FormattedMessage,E.columnInfo)))),I(G,{},void 0,t&&t.map(function(e){var t=c?"project-".concat(e.project_id):e.id,d=c?t:e["content-id"]||e.id,f=c?e["project_title_".concat(i)]||e["project_title_".concat(j.DEFAULT_LOCALE)]:e.title[i]||e.title[j.DEFAULT_LOCALE];return I(F,{},t,I(B,{},void 0,I($,{checked:o.indexOf(t)>-1,onChange:function(){return n(t)},label:I(D,{},void 0,f)})),!c&&U,I(z,{},void 0,I(H,{onClick:function(){return a(d)},label:r.a.createElement(l.FormattedMessage,E.info)})))})))},J=Object(l.defineMessages)({title:{id:"".concat("app.containers.PanelExplore",".title"),defaultMessage:"Map layers"}});function W(e,t,o,n){q||(q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=n;else if(r>1){for(var i=new Array(r),l=0;l<r;l++)i[l]=arguments[l+3];t.children=i}if(t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});return{$$typeof:q,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var V=Object(c.default)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"PanelExplore__Styled",componentId:"sc-39h5rt-0"})(["position:absolute;right:0;top:0;bottom:0;width:400px;pointer-events:all;overflow-y:auto;"]),X=Object(c.default)(function(e){return r.a.createElement(d.a,Q({background:"black"},e))}).withConfig({displayName:"PanelExplore__PanelHeader",componentId:"sc-39h5rt-1"})([""]),Y=Object(c.default)(function(e){return r.a.createElement(d.a,Q({},e,{pad:"small"}))}).withConfig({displayName:"PanelExplore__PanelBody",componentId:"sc-39h5rt-2"})([""]),Z=Object(c.default)(function(e){return r.a.createElement(d.a,Q({},e,{pad:{horizontal:"small",bottom:"small"}}))}).withConfig({displayName:"PanelExplore__TitleWrap",componentId:"sc-39h5rt-3"})([""]),ee=Object(c.default)(g.a).withConfig({displayName:"PanelExplore__Title",componentId:"sc-39h5rt-4"})([""]),te=Object(c.default)(function(e){return r.a.createElement(d.a,Q({},e,{direction:"row",gap:"hair"}))}).withConfig({displayName:"PanelExplore__Tabs",componentId:"sc-39h5rt-5"})(["padding:1px;"]),oe=Object(c.default)(function(e){return r.a.createElement(f.a,Q({plain:!0},e))}).withConfig({displayName:"PanelExplore__TabLink",componentId:"sc-39h5rt-6"})(["padding:0 ",";font-weight:600;color:",";opacity:1;border-bottom:3px solid;border-color:",";"],function(e){return e.theme.global.edgeSize.small},function(e){var t=e.theme,o=e.active;return t.global.colors[o?"white":"light-4"]},function(e){var t=e.theme;return e.active?t.global.colors.white:"transparent"}),ne=Object(c.default)(g.a).withConfig({displayName:"PanelExplore__TabLinkAnchor",componentId:"sc-39h5rt-7"})([""]),ae=Object(c.default)(d.a).withConfig({displayName:"PanelExplore__SectionLayerGroup",componentId:"sc-39h5rt-8"})([""]),re=Object(c.default)(function(e){return r.a.createElement(h.a,Q({},e,{level:4}))}).withConfig({displayName:"PanelExplore__TitleGroup",componentId:"sc-39h5rt-9"})(["margin-bottom:0;"]),ie=Object(c.default)(v.a).withConfig({displayName:"PanelExplore__DescriptionGroup",componentId:"sc-39h5rt-10"})(["margin-bottom:0;"]),le="PanelExplore",ce={tab:0,layersMemo:null,prrojectsMemo:null},de=W(L.a,{size:"xlarge"}),fe=W(p.a,{size:"xlarge"});var ue=Object(b.b)({projects:function(e){return Object(w.c)(e,{key:"projects"})},layersConfig:function(e){return Object(w.k)(e)},exploreConfig:function(e){return Object(w.i)(e)},locale:function(e){return Object(w.l)(e)},uiState:function(e){return Object(w.t)(e,{key:le})},activeLayers:function(e){return Object(w.a)(e)}});var se,pe=Object(m.connect)(ue,function(e){return{onSetTab:function(t,o){return e(Object(_.q)(le,Object.assign({},ce,o,{tab:t})))},onMemoLayers:function(t,o){return e(Object(_.q)(le,Object.assign({},ce,o,{layersMemo:t})))},onMemoProjects:function(t,o){return e(Object(_.q)(le,Object.assign({},ce,o,{projectsMemo:t})))},onLayerInfo:function(t){return e(Object(_.m)(t))},onToggleLayer:function(t){return e(Object(_.r)(t))},onSetLayers:function(t){return e(Object(_.n)(t))}}}),me=Object(y.compose)(pe)(function(e){var t=e.onClose,o=e.onLayerInfo,n=e.onToggleLayer,i=e.onSetLayers,c=e.onMemoLayers,d=e.onSetTab,u=e.projects,s=e.layersConfig,p=e.exploreConfig,m=e.locale,b=e.uiState,y=e.activeLayers,g=b?Object.assign({},ce,b):ce,h=g.tab,v=g.layersMemo;Object(a.useEffect)(function(){!v||y&&0!==y.length||i(v)},[]),Object(a.useEffect)(function(){c(y,b)},[y]);var L=p&&p[h];return W(V,{background:"white"},void 0,W("div",{},void 0,W(X,{},void 0,W(f.a,{onClick:function(){return t()},icon:de,plain:!0,alignSelf:"end"}),W(Z,{},void 0,fe,W(ee,{},void 0,r.a.createElement(l.FormattedMessage,J.title))),W(te,{},void 0,p&&p.map(function(e,t){return W(oe,{onClick:function(){return d(t,b)},active:h===t,disabled:h===t,label:W(ne,{active:h===t},void 0,e.title[m]||e.title[j.DEFAULT_LOCALE])},e.id)}))),W(Y,{},void 0,s&&L&&L.id!==O.g&&L.groups&&L.groups.map(function(e){return W(ae,{},e.id,W(re,{},void 0,e.title[m]||e.title[j.DEFAULT_LOCALE]),e.description&&W(ie,{},void 0,e.description[m]||e.description[j.DEFAULT_LOCALE]),W(R,{group:e,layers:s.filter(function(t){return t.group===e.id}),locale:m,activeLayers:y,onLayerInfo:o,onToggleLayer:n}))}),s&&L&&L.id!==O.g&&!L.groups&&W(ae,{},void 0,W(R,{group:L,layers:s.filter(function(e){return e.category===L.id}),locale:m,activeLayers:y,onLayerInfo:o,onToggleLayer:n})),u&&L&&L.id===O.g&&W(ae,{},void 0,W(R,{group:L.id,layers:u,projects:!0,locale:m,activeLayers:y,onLayerInfo:o,onToggleLayer:n})))))}),be=o("f9c0d22799479965d07c"),ye=Object(l.defineMessages)({showLayerPanel:{id:"".concat("app.containers.PanelExplore",".showLayerPanel"),defaultMessage:"Layers"}});function ge(e,t,o,n){se||(se="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=n;else if(r>1){for(var i=new Array(r),l=0;l<r;l++)i[l]=arguments[l+3];t.children=i}if(t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});return{$$typeof:se,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ve(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}o.d(t,"ModuleExplore",function(){return xe});var je=Object(c.default)(function(e){return r.a.createElement(d.a,e)}).withConfig({displayName:"ModuleExplore__Show",componentId:"sc-1nskavd-0"})(["position:absolute;right:20px;top:20px;pointer-events:all;"]),we=Object(c.default)(function(e){return r.a.createElement(f.a,Le({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleExplore__ShowButton",componentId:"sc-1nskavd-1"})(["background:",";color:",";border-radius:20px;padding:5px 15px;"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white}),_e=ge(i.Helmet,{},void 0,ge("title",{},void 0,"ModuleExplore"),ge("meta",{name:"description",content:"Description of ModuleExplore"})),Oe=ge(p.a,{color:"white"});function xe(){var e=he(Object(a.useState)(!0),2),t=e[0],o=e[1],n=he(Object(a.useState)(!1),2),i=n[0],c=n[1];return ge(u.a.Consumer,{},void 0,function(e){return ge("div",{},void 0,_e,ge(be.a,{},void 0,t&&"small"!==e&&ge(me,{onClose:function(){return o(!1)}}),i&&"small"===e&&ge(s.a,{full:!0},void 0,ge(me,{onClose:function(){return c(!1)}})),(!t&&"small"!==e||!i&&"small"===e)&&ge(je,{},void 0,ge(we,{onClick:function(){o(!0),c(!0)},icon:Oe,label:r.a.createElement(l.FormattedMessage,ye.showLayerPanel)}))))})}t.default=xe}}]);