define("humpback",["react","react-dom","react-router-dom","nycticorax"],(function(t,e,r,n){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return n}))},function(e,r){e.exports=t},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.Container=e.Error=e.Loading=e.COMPONENT_PACKAGES=e.MOUNTED_COMPONENTS=e.IGNORE_STATIC_METHODS=void 0;var o=n(r(3));e.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps"];e.MOUNTED_COMPONENTS="MOUNTED_COMPONENTS";e.COMPONENT_PACKAGES="COMPONENT_PACKAGES";e.Loading=function(){return o.default.createElement("h3",null,"Loading")};e.Error=function(t){var e=t.error,r=t.reload;return(o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,e),o.default.createElement("button",{onClick:r},"reload")))};e.Container=function(){return o.default.createElement("h3",null,"Nothing")}},function(t,e,r){var n=r(17);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var i=u?Object.getOwnPropertyDescriptor(t,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=t[c]}return r.default=t,e&&e.set(t,r),r}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.subscribe=e.dispatch=e.connect=e.getStore=e.createStore=void 0;var o=new(n(r(22)).default),u=o.createStore,c=o.getStore,i=o.connect,a=o.dispatch,f=o.subscribe;e.subscribe=f,e.dispatch=a,e.connect=i,e.getStore=c,e.createStore=u},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(e),r.d(e,"default",(function(){return u}));var o=r(1);function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?Object(o.default)(t):e}},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){t.exports=r(18)()},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=Object.keys(c.default);return function(n,c){var i=this.props.dispatch||u.dispatch;if(r.includes(n))return i(t[n],c);for(var a=arguments.length,f=new Array(a>2?a-2:0),l=2;l<a;l++)f[l-2]=arguments[l];if("global"===n){if(!t[c])throw"Dispatcher `".concat(c,"` not exists");return i.apply(void 0,[t[c]].concat(f))}if(!this.props[o.MOUNTED_COMPONENTS].includes(n))throw"Component `".concat(n,"` not ready");var s=e[n];if(!s[c])throw"Dispatcher `".concat(c,"` not exists");return s[c].apply(s,f)}};var o=r(4),u=r(9),c=n(r(14))},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(2)),u=r(4),c={GET_MOUNTED_COMPONENTS:function(t){return(0,t.getStore)()[u.MOUNTED_COMPONENTS]},UN_MOUNT_COMPONENT:function(t,e){var r=t.getStore,n=t.dispatch,c=e.name,i=r()[u.MOUNTED_COMPONENTS];i=i.filter((function(t){return t!==c})),n((0,o.default)({},u.MOUNTED_COMPONENTS,i),!0)},MOUNT_COMPONENT:function(t,e){var r=t.getStore,n=t.dispatch,c=e.name,i=e.url,a=r()[u.COMPONENT_PACKAGES];a[c]=i.slice(0,-3),window.requirejs.config({paths:(0,o.default)({},c,a[c])}),n((0,o.default)({},u.COMPONENT_PACKAGES,a),!0)}};e.default=c},function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(5),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(15)),c=o(r(6)),i=o(r(7)),a=o(r(1)),f=o(r(10)),l=o(r(8)),s=o(r(11)),p=o(r(2)),d=o(r(26)),O=n(r(3)),y=o(r(12)),h=r(20),b=r(21),v=r(9),E=o(r(23)),m=o(r(24)),N=o(r(14)),P=o(r(13)),S=r(4);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,p.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){var e,r=t.packages,n=t.store,o=void 0===n?{}:n,T=t.dispatcher,C=void 0===T?{}:T,M=t.loading,j=void 0===M?S.Loading:M,w=t.error,D=void 0===w?S.Error:w,A=t.container,R=void 0===A?S.Container:A,k=(0,d.default)(t,["packages","store","dispatcher","loading","error","container"]),U=Object.keys(o).concat([S.MOUNTED_COMPONENTS]),x={},G=_({},C,{},N.default),I=function(t){return(0,b.withRouter)((function(e){var r=(0,m.default)({name:t,storeDispatcher:G,componentDispatcher:x,Loading:j,Error:D,router:e,config:k});return(O.default.createElement(r,null))}))},K=(0,E.default)(D),L=(0,P.default)(G,x),q=function(t){(0,s.default)(n,t);var e,r=(e=n,function(){var t,r=(0,l.default)(e);if(g()){var n=(0,l.default)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,f.default)(this,t)});function n(){var t;(0,c.default)(this,n);for(var e=arguments.length,o=new Array(e),u=0;u<e;u++)o[u]=arguments[u];return t=r.call.apply(r,[this].concat(o)),(0,p.default)((0,a.default)(t),"state",{error:void 0}),(0,p.default)((0,a.default)(t),"dispatch",L.bind((0,a.default)(t))),t}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var t=this.props.history;this.unsubscribe=t.listen((function(){Object.keys(x).forEach((function(t){return delete x[t]})),(0,v.dispatch)((0,p.default)({},S.MOUNTED_COMPONENTS,[]),!0)}))}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Container Error"})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t=this,e=this.state.error;if(e)return O.default.createElement(D,{error:e});var r={};return U.forEach((function(e){e!==S.MOUNTED_COMPONENTS&&e!==S.COMPONENT_PACKAGES&&(r[e]=t.props[e])})),O.default.createElement(R,{dispatch:this.dispatch,Routes:K,componentCreator:I,store:r,MOUNTED_COMPONENTS:this.props[S.MOUNTED_COMPONENTS],CONFIG:_({},k,{packages:this.props[S.COMPONENT_PACKAGES]})})}}]),n}(O.Component);(0,p.default)(q,"propTypes",{history:y.default.func.isRequired}),(0,v.createStore)(_({},o,(e={},(0,p.default)(e,S.MOUNTED_COMPONENTS,[]),(0,p.default)(e,S.COMPONENT_PACKAGES,r),e)));var W=v.connect.apply(void 0,(0,u.default)(U))((0,b.withRouter)(q));(0,h.render)(O.default.createElement(b.HashRouter,null,O.default.createElement(b.Switch,null,O.default.createElement(W,null))),document.querySelector("#root"))}},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e,r){"use strict";var n=r(19);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,u,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e,r){"use strict";var n=r(5),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(6)),c=o(r(7)),i=o(r(1)),a=o(r(10)),f=o(r(8)),l=o(r(11)),s=o(r(2)),p=n(r(3)),d=o(r(12));function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}e.default=function(t){var e,r;return r=e=function(e){(0,l.default)(o,e);var r,n=(r=o,function(){var t,e=(0,f.default)(r);if(O()){var n=(0,f.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,a.default)(this,t)});function o(){var t;(0,u.default)(this,o);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return t=n.call.apply(n,[this].concat(r)),(0,s.default)((0,i.default)(t),"state",{error:void 0}),t}return(0,c.default)(o,[{key:"shouldComponentUpdate",value:function(t,e){return!!e.error}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Routes Error"})}},{key:"render",value:function(){var e=this.state.error,r=this.props.children;return e?p.default.createElement(t,{error:e}):r}}]),o}(p.Component),(0,s.default)(e,"propTypes",{children:d.default.element.isRequired}),r}},function(t,e,r){"use strict";var n=r(5),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,r=t.name,n=t.storeDispatcher,o=t.componentDispatcher,v=t.Loading,N=t.Error,P=t.router,S=Object.keys((0,h.getStore)()),g=(0,y.default)(n,o),T=function(t){(0,p.default)(y,t);var n,u=(n=y,function(){var t,e=(0,s.default)(n);if(m()){var r=(0,s.default)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return(0,l.default)(this,t)});function y(){var t;(0,i.default)(this,y);for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return t=u.call.apply(u,[this].concat(n)),(0,d.default)((0,f.default)(t),"state",{component:void 0,error:void 0,unset:!t.props[b.COMPONENT_PACKAGES][r]}),(0,d.default)((0,f.default)(t),"dispatch",g.bind((0,f.default)(t))),(0,d.default)((0,f.default)(t),"mountComponent",(function(){window.requirejs([r],(function(e){if(e){var n=(0,h.getStore)()[b.MOUNTED_COMPONENTS],u={};n.includes(r)||n.push(r),Object.getOwnPropertyNames(e).forEach((function(t){b.IGNORE_STATIC_METHODS.includes(t)||(u[t]=e[t])})),o[r]=u,t.setState({component:e},(function(){(0,h.dispatch)((0,d.default)({},b.MOUNTED_COMPONENTS,n),!0)}))}else t.setState({error:"Component Name Error"})}),(function(e){t.setState({error:e.message||"Component Load Error"})}))})),(0,d.default)((0,f.default)(t),"onReload",(function(){window.requirejs.undef(r),window.requirejs.config({paths:(0,d.default)({},r,t.props[b.COMPONENT_PACKAGES][r].slice(0,-3))}),t.setState({component:void 0,error:void 0},(function(){t.mountComponent()}))})),t}return(0,a.default)(y,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=(0,h.subscribe)((function(e){e.includes(b.COMPONENT_PACKAGES)&&t.state.unset&&((0,h.getStore)()[b.COMPONENT_PACKAGES][r]&&(t.unsubscribe(),t.setState({unset:!1},(function(){t.mountComponent()}))))})),this.state.unset||this.mountComponent()}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Component Error"})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t=this,n=this.state,o=n.component,u=n.error,i=n.unset,a={};return i||!this.props[b.MOUNTED_COMPONENTS].includes(r)&&o?null:u?O.default.createElement(N,{error:u,reload:this.onReload}):o?(S.forEach((function(e){e!==b.MOUNTED_COMPONENTS&&e!==b.COMPONENT_PACKAGES&&(a[e]=t.props[e])})),O.default.createElement(o,(0,c.default)({NAME:r,CONFIG:E({},e,{packages:this.props[b.COMPONENT_PACKAGES]}),MOUNTED_COMPONENTS:this.props[b.MOUNTED_COMPONENTS],store:a,dispatch:this.dispatch},P))):O.default.createElement(v,null)}}]),y}(O.Component);return h.connect.apply(void 0,(0,u.default)(S))(T)};var u=o(r(15)),c=o(r(25)),i=o(r(6)),a=o(r(7)),f=o(r(1)),l=o(r(10)),s=o(r(8)),p=o(r(11)),d=o(r(2)),O=n(r(3)),y=o(r(13)),h=r(9),b=r(4);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){(0,d.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.r(e),r.d(e,"default",(function(){return n}))}]).default}));
//# sourceMappingURL=humpback.js.map