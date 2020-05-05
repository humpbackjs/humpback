define("humpback",["react","react-router-dom","react-dom","nycticorax"],(function(t,e,r,n){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.r(e),r.d(e,"default",(function(){return n}))},function(e,r){e.exports=t},function(t,e,r){var n=r(18);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var i=u?Object.getOwnPropertyDescriptor(t,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=t[c]}return r.default=t,e&&e.set(t,r),r}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.subscribe=e.dispatch=e.connect=e.getStore=e.createStore=void 0;var o=new(n(r(20)).default),u=o.createStore,c=o.getStore,i=o.connect,a=o.dispatch,f=o.subscribe;e.subscribe=f,e.dispatch=a,e.connect=i,e.getStore=c,e.createStore=u},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.Container=e.Error=e.Loading=e.MOUNTED_COMPONENTS=e.IGNORE_STATIC_METHODS=void 0;var o=n(r(2));e.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps"];e.MOUNTED_COMPONENTS="MOUNTED_COMPONENTS";e.Loading=function(){return o.default.createElement("h3",null,"Loading")};e.Error=function(t){var e=t.error,r=t.reload;return(o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,e),r?o.default.createElement("button",{onClick:r},"reload"):null))};e.Container=function(){return o.default.createElement("h3",null,"Nothing")}},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(e),r.d(e,"default",(function(){return u}));var o=r(1);function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?Object(o.default)(t):e}},function(t,r){t.exports=e},function(t,e,r){t.exports=r(22)()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return function(r,u){for(var c=this.props.dispatch||o.dispatch,i=arguments.length,a=new Array(i>2?i-2:0),f=2;f<i;f++)a[f-2]=arguments[f];if("global"===r){if(!t[u])throw"Dispatcher `".concat(u,"` not exists");return c.apply(void 0,[t[u]].concat(a))}if(!this.props[n.MOUNTED_COMPONENTS].includes(r))throw"Component `".concat(r,"` not ready");var l=e[r];if(!l[u])throw"Dispatcher `".concat(u,"` not exists");return l[u].apply(l,a)}};var n=r(9),o=r(8)},function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(15)),c=o(r(4)),i=o(r(5)),a=o(r(1)),f=o(r(10)),l=o(r(11)),s=o(r(6)),p=o(r(7)),d=o(r(16)),y=n(r(2)),h=r(19),O=r(12),m=r(8),v=o(r(21)),b=o(r(24)),E=o(r(14)),g=r(9);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,s.default)(t);if(e){var o=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,l.default)(this,r)}}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){(0,p.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){t.dependencies;var e=t.components,r=t.store,n=void 0===r?{}:r,o=t.dispatcher,l=void 0===o?{}:o,s=t.loading,j=void 0===s?g.Loading:s,_=t.error,T=void 0===_?g.Error:_,N=t.container,M=void 0===N?g.Container:N,w=(0,d.default)(t,["dependencies","components","store","dispatcher","loading","error","container"]),C=Object.keys(n).concat([g.MOUNTED_COMPONENTS]),D={},R=P({},l),x={},k=(0,v.default)(T),U=(0,E.default)(R,D);(0,m.createStore)(P(P({},n),{},(0,p.default)({},g.MOUNTED_COMPONENTS,[]))),Object.keys(e).forEach((function(t){var r=(0,b.default)({name:t,storeDispatcher:R,componentDispatcher:D,Loading:j,Error:T,config:P(P({},w),{},{components:e})});x[t]=function(t){return y.default.createElement(r,t)}}));var A=function(t){return x[t]?x[t]:function(){return y.default.createElement(T,{error:"Component undefined"})}},I=function(t){(0,f.default)(r,t);var e=S(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),(0,p.default)((0,a.default)(t),"state",{error:void 0}),(0,p.default)((0,a.default)(t),"dispatch",U.bind((0,a.default)(t))),t}return(0,i.default)(r,[{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Container Error"})}},{key:"render",value:function(){var t=this,e=this.state.error;if(e)return y.default.createElement(T,{error:e});var r={};return C.forEach((function(e){e!==g.MOUNTED_COMPONENTS&&(r[e]=t.props[e])})),y.default.createElement(M,{dispatch:this.dispatch,Routes:k,store:r,componentCreator:A,mountedComponents:this.props[g.MOUNTED_COMPONENTS],config:w})}}]),r}(y.Component),q=m.connect.apply(void 0,(0,u.default)(C))(I);(0,h.render)(y.default.createElement(O.HashRouter,null,y.default.createElement(O.Switch,null,y.default.createElement(q,null))),document.querySelector("#root"))}},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(4)),c=o(r(5)),i=o(r(1)),a=o(r(10)),f=o(r(11)),l=o(r(6)),s=o(r(7)),p=n(r(2)),d=o(r(13));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,l.default)(t);if(e){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}e.default=function(t){var e,r;return r=e=function(e){(0,a.default)(n,e);var r=y(n);function n(){var t;(0,u.default)(this,n);for(var e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return t=r.call.apply(r,[this].concat(o)),(0,s.default)((0,i.default)(t),"state",{error:void 0}),t}return(0,c.default)(n,[{key:"shouldComponentUpdate",value:function(t,e){return!!e.error}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Routes Error"})}},{key:"render",value:function(){var e=this.state.error,r=this.props.children;return e?p.default.createElement(t,{error:e}):r}}]),n}(p.Component),(0,s.default)(e,"propTypes",{children:d.default.element.isRequired}),r}},function(t,e,r){"use strict";var n=r(23);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,u,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,r=t.name,n=t.storeDispatcher,o=t.componentDispatcher,g=t.Loading,S=t.Error,j=Object.keys((0,b.getStore)()),P=(0,v.default)(n,o),_=e.components,T=(e.dependencies,(0,y.default)(e,["components","dependencies"])),N=function(t){(0,l.default)(y,t);var e,n,u=(e=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,p.default)(e);if(n){var o=(0,p.default)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,s.default)(this,t)});function y(){var t;(0,i.default)(this,y);for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return t=u.call.apply(u,[this].concat(n)),(0,d.default)((0,f.default)(t),"state",{component:void 0,error:void 0}),(0,d.default)((0,f.default)(t),"dispatch",P.bind((0,f.default)(t))),(0,d.default)((0,f.default)(t),"mountComponent",(function(){window.requirejs([r],(function(e){if(e){var n=(0,b.getStore)()[E.MOUNTED_COMPONENTS],u={};n.includes(r)||n.push(r),Object.getOwnPropertyNames(e).forEach((function(t){E.IGNORE_STATIC_METHODS.includes(t)||(u[t]=e[t])})),o[r]=u,t.setState({component:e},(function(){(0,b.dispatch)((0,d.default)({},E.MOUNTED_COMPONENTS,n),!0)}))}else t.setState({error:"Component Name Error"})}),(function(e){window.requirejs.undef(r),window.requirejs.config({paths:(0,d.default)({},r,_[r].slice(0,-3))}),t.setState({error:e.message||"Component Load Error"})}))})),(0,d.default)((0,f.default)(t),"onReload",(function(){t.setState({component:void 0,error:void 0},(function(){t.mountComponent()}))})),t}return(0,a.default)(y,[{key:"componentDidMount",value:function(){this.mountComponent()}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Component Error"})}},{key:"componentWillUnmount",value:function(){var t=(0,b.getStore)()[E.MOUNTED_COMPONENTS];t=t.filter((function(t){return t!==r})),(0,b.dispatch)((0,d.default)({},E.MOUNTED_COMPONENTS,t),!0),delete o[r]}},{key:"render",value:function(){var t=this,e=this.props,r=e.history,n=e.location,o=e.match,u=this.state,i=u.component,a=u.error,f={};return a?h.default.createElement(S,{error:a,reload:this.onReload}):i?(j.forEach((function(e){e!==E.MOUNTED_COMPONENTS&&(f[e]=t.props[e])})),h.default.createElement(i,(0,c.default)({},this.props,{config:T,mountedComponents:this.props[E.MOUNTED_COMPONENTS],store:f,dispatch:this.dispatch,history:r,location:n,match:o}))):h.default.createElement(g,null)}}]),y}(h.Component);return(0,d.default)(N,"propTypes",{history:m.default.func.isRequired,match:m.default.object.isRequired,location:m.default.object.isRequired}),b.connect.apply(void 0,(0,u.default)(j))((0,O.withRouter)(N))};var u=o(r(15)),c=o(r(25)),i=o(r(4)),a=o(r(5)),f=o(r(1)),l=o(r(10)),s=o(r(11)),p=o(r(6)),d=o(r(7)),y=o(r(16)),h=n(r(2)),O=r(12),m=o(r(13)),v=o(r(14)),b=r(8),E=r(9)},function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.r(e),r.d(e,"default",(function(){return n}))}]).default}));
//# sourceMappingURL=humpback.js.map