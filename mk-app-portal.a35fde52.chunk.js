webpackJsonp([0],{1562:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=n(2),u=a(i),c=n(53),s=a(c),p=n(5),f=a(p),m=n(9),d=a(m),l=n(7),g=a(l),h=n(8),v=a(h),k=n(0),b=(a(k),n(166)),y=n(572),A=a(y),w=(r=(0,b.wrapper)(A.default))(o=function(e){function t(){return(0,f.default)(this,t),(0,g.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,u.default)({},this.props,{path:"root"}))}}]),t}(k.Component))||o;t.default=w,e.exports=t.default},1563:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new h.action(e),n=new A((0,i.default)({},e,{metaAction:t})),a=(0,i.default)({},t,n);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=a(o),u=n(80),c=a(u),s=n(563),p=a(s),f=n(564),m=a(f),d=n(5),l=a(d);t.default=r;var g=n(0),h=(a(g),n(168),n(166)),v=n(167),k=n(35),b=n(562),y=a(b),A=function e(t){var a=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init"),a.load(),k.history.listen("mk-app-portal",a.listen)},this.listen=function(e,t,n){var r=a.metaAction.gf("data.content.appName"),o=e;if(!o)return void a.injections.reduce("closeAll");o!=r&&a.setContent("",o,{})},this.componentWillUnmount=function(){k.history.unlisten("mk-app-portal",a.listen)},this.load=(0,m.default)(p.default.mark(function e(){var t,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.config.apps["mk-app-login"]){e.next=5;break}return t={id:1,mobile:"13334445556",nickname:"齐天大圣"},a.metaAction.context.set("currentUser",t),a.metaAction.sf("data.other.currentUser",(0,v.fromJS)(t)),e.abrupt("return");case 5:return e.next=7,a.webapi.portal.init();case 7:n=e.sent,n.user?(a.metaAction.context.set("currentUser",n.user),a.metaAction.sf("data.other.currentUser",(0,v.fromJS)(n.user))):(a.metaAction.context.set("currentUser",void 0),a.component.props.onRedirect&&a.config.goAfterLogout&&a.component.props.onRedirect(a.config.goAfterLogout));case 9:case"end":return e.stop()}},e,a)})),this.getLogo=function(){return a.config.logo},this.getPhoto=function(){return n(1565)},this.getCurrentUser=function(){return a.metaAction.context.get("currentUser")||{}},this.getMenuChildren=function(){var e=a.metaAction.gf("data.menu").toJS();return{_isMeta:!0,value:function e(t){var n=[];return t.forEach(function(t){t.children?n.push({name:t.key,key:t.key,title:t.name,component:"Menu.SubMenu",children:e(t.children)}):n.push({name:t.key,key:t.key,component:"Menu.Item",children:t.name})}),n}(e)}},this.topMenuClick=function(){var e=(0,m.default)(p.default.mark(function e(t){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next="logout"===e.t0?3:"github"===e.t0?9:"gitter"===e.t0?11:"mySetting"===e.t0?13:"toggleTabs"===e.t0?17:18;break;case 3:if(!a.component.props.onRedirect||!a.config.goAfterLogout){e.next=8;break}return e.next=6,a.webapi.user.logout();case 6:a.metaAction.context.set("currentUser",void 0),a.component.props.onRedirect(a.config.goAfterLogout);case 8:return e.abrupt("break",18);case 9:return window.open("https://www.github.com/ziaochina/mk-docs"),e.abrupt("break",18);case 11:return window.open("https://gitter.im/mk-js/mk-js?utm_source=share-link&utm_medium=link&utm_campaign=share-link"),e.abrupt("break",18);case 13:if(a.config.apps["mk-app-my-setting"]){e.next=15;break}throw"不存在mk-app-my-setting应用，该功能不能使用";case 15:return a.setContent("个人设置","mk-app-my-setting"),e.abrupt("break",18);case 17:a.metaAction.sf("data.isTabsStyle",!a.metaAction.gf("data.isTabsStyle"));case 18:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),this.menuClick=function(e){var t=a.metaAction.gf("data.menu").toJS(),n=function t(n){var a=!0,r=!1,o=void 0;try{for(var i,u=(0,c.default)(n);!(a=(i=u.next()).done);a=!0){var s=i.value;if(s.key==e.key)return s;if(s.children){var p=t(s.children);if(p)return p}}}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}}(t);n&&a.setContent(n.name,n.appName,n.appParams)},this.getMenuSelectKeys=function(){var e=a.metaAction.gf("data.content");if(e){return[a.metaAction.gf("data.menuKeyNameMap").get(e.get("name"))]}},this.tabChange=function(e){var t=a.metaAction.gf("data.openTabs"),n=t.find(function(t){return t.get("name")==e});a.setContent(n.get("name"),n.get("appName"),n.get("appProps"))},this.tabEdit=function(e,t){"remove"==t&&a.injections.reduce("closeContent",e)},this.setContent=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a.injections.reduce("setContent",e,t,n)},this.metaAction=t.metaAction,this.config=y.default.current,this.webapi=this.config.webapi};e.exports=t.default},1564:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new p.reducer(e),n=new g((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=a(o),u=n(5),c=a(u);t.default=r;var s=n(167),p=n(166),f=n(562),m=a(f),d=n(573),l=n(35),g=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){return e=n.metaReducer.init(e,(0,d.getInitState)()),n.config.menu&&!n.config.webapi.getMenu?n.load(e,{menu:n.config.menu}):e},this.load=function(e,t){var a=t.menu;if(!a||0==a.lenght)return e;var r,o,i=[],u={},c={};!function e(t){var n=[];return t.forEach(function(t){u[t.name]=t.key,t.appName&&(c[t.appName]={name:t.name,props:t.appParams||{}}),t.children?(t.isExpand&&i.push(t),e(t.children)):(o||(o=t),t.isDefault&&(r=t))}),n}(a),r=r||o;var p=(0,s.fromJS)(r?[r.key]:[]),f=(0,s.fromJS)(i.map(function(e){return e.key})),m=r||{};e=n.metaReducer.sf(e,"data.menu",(0,s.fromJS)(a)),e=n.metaReducer.sf(e,"data.menuKeyNameMap",(0,s.fromJS)(u)),e=n.metaReducer.sf(e,"data.menuAppNameMap",(0,s.fromJS)(c)),e=n.metaReducer.sf(e,"data.menuSelectedKeys",p),e=n.metaReducer.sf(e,"data.menuDefaultOpenKeys",f);var d=l.history.getChildApp("mk-app-portal");return d?n.setContent(e,"",d,{}):n.setContent(e,m.name,m.appName,m.appProps)},this.setContent=function(e,t,a,r){var o=n.metaReducer.gf(e,"data.content");if(o&&a==o.get("appName"))return e;var i=n.metaReducer.gf(e,"data.menuAppNameMap");t&&a&&i.getIn([a,"name"])!=t&&(e=n.metaReducer.sf(e,"data.menuAppNameMap",i.set(a,{name:t,props:r}))),t=i.getIn([a,"name"]),r=i.getIn([a,"props"]);var u=(0,s.fromJS)({name:t,appName:a,appProps:r});e=n.metaReducer.sf(e,"data.content",u);var c=n.metaReducer.gf(e,"data.openTabs")||(0,s.List)(),p=-1!=c.findIndex(function(e){return e.get("name")==t||e.get("appName")==a}),f=n.metaReducer.gf(e,"data.isTabsStyle");return p?f||(c=(0,s.List)().push(u),e=n.metaReducer.sf(e,"data.openTabs",c)):(c=f?c.push(u):(0,s.List)().push(u),e=n.metaReducer.sf(e,"data.openTabs",c)),setTimeout(function(){l.history.pushChildApp("mk-app-portal",u.get("appName"))},0),e},this.closeContent=function(e,t){var a=n.metaReducer.gf(e,"data.openTabs")||(0,s.List)(),r=a.findIndex(function(e){return e.get("name")==t});return a=a.remove(r),e=n.metaReducer.sf(e,"data.openTabs",a),n.metaReducer.sf(e,"data.content",a.get(a.size-1))},this.closeAll=function(e){return e=n.metaReducer.sf(e,"data.openTabs",new s.List),n.metaReducer.sf(e,"data.content",new s.Map)},this.metaReducer=t.metaReducer,this.config=m.default.current};e.exports=t.default},1565:function(e,t,n){e.exports=n.p+"photo.36d29d9e.png"}});