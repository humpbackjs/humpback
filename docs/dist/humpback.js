define("humpback",["react","react-router-dom","react-dom","nycticorax"],(function(t,e,r,n){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.r(e),r.d(e,"default",(function(){return n}))},function(e,r){e.exports=t},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.Container=e.Error=e.Loading=e.MOUNTED_COMPONENTS=e.IGNORE_STATIC_METHODS=void 0;var o=n(r(2));e.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps"];e.MOUNTED_COMPONENTS="MOUNTED_COMPONENTS";e.Loading=function(){return o.default.createElement("h3",null,"Loading")};e.Error=function(t){var e=t.error,r=t.reload;return(o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,e),o.default.createElement("button",{onClick:r},"reload")))};e.Container=function(){return o.default.createElement("h3",null,"Nothing")}},function(t,e,r){var n=r(18);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var a=u?Object.getOwnPropertyDescriptor(t,c):null;a&&(a.get||a.set)?Object.defineProperty(r,c,a):r[c]=t[c]}return r.default=t,e&&e.set(t,r),r}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.subscribe=e.dispatch=e.connect=e.getStore=e.createStore=void 0;var o=new(n(r(22)).default),u=o.createStore,c=o.getStore,a=o.connect,i=o.dispatch,f=o.subscribe;e.subscribe=f,e.dispatch=i,e.connect=a,e.getStore=c,e.createStore=u},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(e),r.d(e,"default",(function(){return u}));var o=r(1);function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?Object(o.default)(t):e}},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.r(e),r.d(e,"default",(function(){return o}))},function(t,e,r){t.exports=r(19)()},function(t,r){t.exports=e},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=Object.keys(c.default);return function(n,c){var a=this.props.dispatch||u.dispatch;if(r.includes(n))return a(t[n],c);for(var i=arguments.length,f=new Array(i>2?i-2:0),l=2;l<i;l++)f[l-2]=arguments[l];if("global"===n){if(!t[c])throw"Dispatcher `".concat(c,"` not exists");return a.apply(void 0,[t[c]].concat(f))}if(!this.props[o.MOUNTED_COMPONENTS].includes(n))throw"Component `".concat(n,"` not ready");var s=e[n];if(!s[c])throw"Dispatcher `".concat(c,"` not exists");return s[c].apply(s,f)}};var o=r(3),u=r(9),c=n(r(15))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(3),o={GET_MOUNTED_COMPONENTS:function(t){return(0,t.getStore)()[n.MOUNTED_COMPONENTS]}};e.default=o},function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(16)),c=o(r(5)),a=o(r(6)),i=o(r(1)),f=o(r(10)),l=o(r(7)),s=o(r(11)),p=o(r(8)),d=o(r(25)),y=n(r(2)),O=o(r(12)),h=r(21),b=r(13),v=r(9),m=o(r(23)),E=o(r(24)),S=o(r(15)),g=o(r(14)),_=r(3);function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,p.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){t.dependencies;var e=t.components,r=t.store,n=void 0===r?{}:r,o=t.dispatcher,T=void 0===o?{}:o,j=t.loading,M=void 0===j?_.Loading:j,C=t.error,D=void 0===C?_.Error:C,w=t.container,R=void 0===w?_.Container:w,x=(0,d.default)(t,["dependencies","components","store","dispatcher","loading","error","container"]),k=Object.keys(n).concat([_.MOUNTED_COMPONENTS]),U={},I=N({},T,{},S.default),A={},L=(0,m.default)(D),G=(0,g.default)(I,U);Object.keys(e).forEach((function(t){var e=(0,E.default)({name:t,storeDispatcher:I,componentDispatcher:U,Loading:M,Error:D,config:x});A[t]=function(){return y.default.createElement(e,null)}}));var W=function(t){(0,s.default)(n,t);var e,r=(e=n,function(){var t,r=(0,l.default)(e);if(P()){var n=(0,l.default)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,f.default)(this,t)});function n(){var t;(0,c.default)(this,n);for(var e=arguments.length,o=new Array(e),u=0;u<e;u++)o[u]=arguments[u];return t=r.call.apply(r,[this].concat(o)),(0,p.default)((0,i.default)(t),"state",{error:void 0}),(0,p.default)((0,i.default)(t),"dispatch",G.bind((0,i.default)(t))),t}return(0,a.default)(n,[{key:"componentDidMount",value:function(){var t=this.props.history;this.unsubscribe=t.listen((function(){Object.keys(U).forEach((function(t){return delete U[t]})),(0,v.dispatch)((0,p.default)({},_.MOUNTED_COMPONENTS,[]),!0)}))}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Container Error"})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t=this,e=this.state.error;if(e)return y.default.createElement(D,{error:e});var r={};return k.forEach((function(e){e!==_.MOUNTED_COMPONENTS&&(r[e]=t.props[e])})),y.default.createElement(R,{dispatch:this.dispatch,Routes:L,store:r,MOUNTED_COMPONENTS:this.props[_.MOUNTED_COMPONENTS],COMPONENTS:A,CONFIG:x})}}]),n}(y.Component);(0,p.default)(W,"propTypes",{history:O.default.func.isRequired}),(0,v.createStore)(N({},n,(0,p.default)({},_.MOUNTED_COMPONENTS,[])));var q=v.connect.apply(void 0,(0,u.default)(k))((0,b.withRouter)(W));(0,h.render)(y.default.createElement(b.HashRouter,null,y.default.createElement(b.Switch,null,y.default.createElement(q,null))),document.querySelector("#root"))}},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e,r){"use strict";var n=r(20);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,u,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(r(5)),c=o(r(6)),a=o(r(1)),i=o(r(10)),f=o(r(7)),l=o(r(11)),s=o(r(8)),p=n(r(2)),d=o(r(12));function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}e.default=function(t){var e,r;return r=e=function(e){(0,l.default)(o,e);var r,n=(r=o,function(){var t,e=(0,f.default)(r);if(y()){var n=(0,f.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,i.default)(this,t)});function o(){var t;(0,u.default)(this,o);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return t=n.call.apply(n,[this].concat(r)),(0,s.default)((0,a.default)(t),"state",{error:void 0}),t}return(0,c.default)(o,[{key:"shouldComponentUpdate",value:function(t,e){return!!e.error}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Routes Error"})}},{key:"render",value:function(){var e=this.state.error,r=this.props.children;return e?p.default.createElement(t,{error:e}):r}}]),o}(p.Component),(0,s.default)(e,"propTypes",{children:d.default.element.isRequired}),r}},function(t,e,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,r=t.name,n=t.storeDispatcher,o=t.componentDispatcher,m=t.Loading,E=t.Error,S=Object.keys((0,h.getStore)()),g=(0,O.default)(n,o),_=function(t){(0,s.default)(y,t);var n,u=(n=y,function(){var t,e=(0,l.default)(n);if(v()){var r=(0,l.default)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return(0,f.default)(this,t)});function y(){var t;(0,c.default)(this,y);for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t=u.call.apply(u,[this].concat(n)),(0,p.default)((0,i.default)(t),"state",{component:void 0,error:void 0}),(0,p.default)((0,i.default)(t),"dispatch",g.bind((0,i.default)(t))),(0,p.default)((0,i.default)(t),"mountComponent",(function(){window.requirejs([r],(function(e){if(e){var n=(0,h.getStore)()[b.MOUNTED_COMPONENTS],u={};n.includes(r)||n.push(r),Object.getOwnPropertyNames(e).forEach((function(t){b.IGNORE_STATIC_METHODS.includes(t)||(u[t]=e[t])})),o[r]=u,t.setState({component:e},(function(){(0,h.dispatch)((0,p.default)({},b.MOUNTED_COMPONENTS,n),!0)}))}else t.setState({error:"Component Name Error"})}),(function(e){t.setState({error:e.message||"Component Load Error"})}))})),(0,p.default)((0,i.default)(t),"onReload",(function(){console.log("todo")})),t}return(0,a.default)(y,[{key:"componentDidMount",value:function(){this.mountComponent()}},{key:"componentDidCatch",value:function(t){this.setState({error:t.message||"Component Error"})}},{key:"render",value:function(){var t=this,r=this.state,n=r.component,o=r.error,u={};return o?d.default.createElement(E,{error:o,reload:this.onReload}):n?(S.forEach((function(e){e!==b.MOUNTED_COMPONENTS&&(u[e]=t.props[e])})),console.log(S,u),d.default.createElement(n,{CONFIG:e,MOUNTED_COMPONENTS:this.props[b.MOUNTED_COMPONENTS],store:u,dispatch:this.dispatch})):d.default.createElement(m,null)}}]),y}(d.Component);return h.connect.apply(void 0,(0,u.default)(S))((0,y.withRouter)(_))};var u=o(r(16)),c=o(r(5)),a=o(r(6)),i=o(r(1)),f=o(r(10)),l=o(r(7)),s=o(r(11)),p=o(r(8)),d=n(r(2)),y=r(13),O=o(r(14)),h=r(9),b=r(3);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.r(e),r.d(e,"default",(function(){return n}))}]).default}));
//# sourceMappingURL=humpback.js.map