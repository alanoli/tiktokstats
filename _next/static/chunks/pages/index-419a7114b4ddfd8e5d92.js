(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},2775:function(e,t,n){"use strict";var r=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),u=n(1165),l=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=i.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(d)?(p.add(d),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var r=n(3115),i=n(2553),o=n(2012),a=(n(450),n(9807)),s=n(7690),c=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){a(n,e);var t=u(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},7527:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5893),i=n(9008),o=n(321),a=n.n(o),s=n(7294),c=n(9288),u=n.n(c),l=n(4155).env.NEXT_PUBLIC_BASE_PATH||"",d=function(){return(0,r.jsx)("div",{className:u().container,children:(0,r.jsxs)("section",{className:u().content,children:[(0,r.jsx)("img",{src:l+"/tiktoklogo.svg",alt:"tiktoklogo",width:100,height:100}),(0,r.jsx)("h4",{children:"TikTok Stats"})]})})},p=n(740),f=n.n(p),h=function(e){var t=(0,s.useState)(!1),n=t[0],r=t[1];return{observe:function(){new IntersectionObserver((function(e){e[0].isIntersecting?r(!0):r(!1)})).observe(e.current)},visible:n}},m=function(e){var t=e.imageSource,n=e.title,i=e.text,o=(0,s.useRef)(null),a=h(o),c=a.observe,u=a.visible;return(0,s.useEffect)((function(){c()}),[c]),(0,r.jsxs)("div",{className:"".concat(f().container," ").concat(u?f().visible:""),ref:o,children:[(0,r.jsx)("img",{src:l+t,alt:"",height:300,width:300}),(0,r.jsx)("h2",{children:n}),(0,r.jsx)("p",{children:i})]})},g=n(8546),v=n.n(g),x=function(){return(0,r.jsxs)("div",{className:v().container,children:[(0,r.jsx)("h1",{children:"Pilares do crescimento"}),[{id:0,imageSource:"/principlesImages/consistency.svg",title:"Consist\xeancia",text:"Ao menos um v\xeddeo por dia \xe9 o necess\xe1rio para manter a consist\xeancia em boa taxa. Mais publica\xe7\xf5es por dia s\xe3o recomendadas"},{id:1,imageSource:"/principlesImages/engagement.svg",title:"Engajamento",text:"O engajamento pode ser mensurado individualmente por publica\xe7\xe3o com os coment\xe1rios, compartilhamentos, likes e visualiza\xe7\xf5es"},{id:2,imageSource:"/principlesImages/hashtags.svg",title:"Hashtags",text:"As hashtags s\xe3o muito importantes para engajamento e viraliza\xe7\xe3o dos seus v\xeddeos. As hashtags certas entregam o conte\xfado para as pessoas certas"},{id:3,imageSource:"/principlesImages/duration.svg",title:"Dura\xe7\xe3o",text:"V\xeddeos mais curtos s\xe3o ideias para aumentar a reten\xe7\xe3o do seu p\xfablico"},{id:4,imageSource:"/principlesImages/growth.svg",title:"Crescimento",text:"Sua conta precisa estar em constante crescimento, em n\xfamero de seguidores e de curtidas"}].map((function(e){return(0,r.jsx)(m,{imageSource:e.imageSource,title:e.title,text:e.text},e.id)}))]})},_=n(9031),y=n.n(_),j=function(){return(0,r.jsxs)("div",{className:y().container,children:[(0,r.jsx)("img",{src:l+"/landing.svg",alt:"",height:300,width:300}),(0,r.jsx)("section",{children:(0,r.jsx)("h1",{children:"Tome decis\xf5es no TikTok baseadas em dados"})})]})},b=n(9404),w=n.n(b),T=n(1482),k=n.n(T),O=function(){window.open("https://api.whatsapp.com/send?phone=+5531996219428&text=Oi!%0D%0AGostaria do report, meu @ \xe9: ","_blank")},S=function(e){var t=e.title,n=e.price;return(0,r.jsxs)("div",{className:k().container,children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("p",{className:k().price,children:n}),(0,r.jsx)("button",{onClick:O,children:"Contratar"})]})},C=function(){var e=(0,s.useRef)(null),t=h(e),n=t.observe,i=t.visible;return(0,s.useEffect)((function(){n()}),[n]),(0,r.jsxs)("div",{className:"".concat(w().container," ").concat(i?w().visible:""),ref:e,children:[(0,r.jsx)("h1",{children:"Influencer,"}),(0,r.jsxs)("h2",{children:["receba uma ",(0,r.jsx)("strong",{children:"consultoria"})," personalizada com a an\xe1lise do seu perfil"]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("img",{src:l+"/inf1.png",alt:""}),(0,r.jsxs)("p",{children:["Coletamos os dados de ",(0,r.jsx)("strong",{children:"todos"})," os seus v\xeddeos"]}),(0,r.jsx)("img",{src:l+"/inf2.png",alt:""}),(0,r.jsx)("p",{children:"Os dados s\xe3o processados e analisados"}),(0,r.jsx)("img",{src:l+"/inf3.png",alt:""}),(0,r.jsx)("p",{children:"Entregamos um relat\xf3rio completo com as an\xe1lises"})]}),(0,r.jsx)("h3",{children:"Plano"}),(0,r.jsx)(S,{title:"Consultoria completa do perfil",price:"R$ 15,00"})]})},M=n(1454),E=n.n(M),A=function(){var e=(0,s.useRef)(null),t=h(e),n=t.observe,i=t.visible;return(0,s.useEffect)((function(){n()}),[n]),(0,r.jsxs)("div",{className:"".concat(E().container," ").concat(i?E().visible:""),ref:e,children:[(0,r.jsx)("h1",{className:E().title,children:"Ag\xeancia,"}),(0,r.jsx)("h2",{children:"decida qual influencer vai espalhar a sua marca pelo mundo"}),(0,r.jsx)("img",{src:l+"/agency.svg",alt:"",height:300,width:300}),(0,r.jsx)("h4",{className:E().advantageTextLeft,children:"O nosso comparador considera uma s\xe9rie de fatores para tomada de decis\xe3o, tais como:"}),(0,r.jsx)("img",{src:l+"/agency_factors.svg",alt:"",height:300,width:300}),(0,r.jsx)("h4",{className:E().advantageTextRight,children:"Comparamos m\xfaltiplas contas no TikTok, te mostrando quais se sobressaem em determinados aspectos"}),(0,r.jsx)("img",{src:l+"/agency_acc_compare.svg",alt:"",height:500,width:500,className:"".concat(E().compare)}),(0,r.jsx)("h1",{children:"Planos"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(S,{title:"Compare 2 contas",price:"R$ 25,00"}),(0,r.jsx)(S,{title:"Compare 4 contas",price:"R$ 35,00"}),(0,r.jsx)(S,{title:"Compare 10  contas",price:"R$ 55,00"})]})]})};function P(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TikTok Stats | Home"}),(0,r.jsx)("meta",{name:"description",content:"The TikTok Stats"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d,{}),(0,r.jsx)(j,{}),(0,r.jsx)(C,{}),(0,r.jsx)(A,{}),(0,r.jsx)(x,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7527)}])},1454:function(e){e.exports={container:"agencyproduct_container__2OBbQ",title:"agencyproduct_title__U1enm",visible:"agencyproduct_visible__26jW5",advantageTextRight:"agencyproduct_advantageTextRight__uBIGP",advantageTextLeft:"agencyproduct_advantageTextLeft__36nl0"}},9288:function(e){e.exports={container:"header_container__3Y5_s",content:"header_content__2OXBE"}},9404:function(e){e.exports={container:"influencerproduct_container__Ck8aY",visible:"influencerproduct_visible__23BcV"}},9031:function(e){e.exports={container:"landing_container__3p7bB"}},1482:function(e){e.exports={container:"princingtag_container__3iZTR",price:"princingtag_price__2IDbA"}},740:function(e){e.exports={container:"principles_container__1iRD2",visible:"principles_visible__Hr_gu"}},8546:function(e){e.exports={container:"principlescomponent_container__1VOfq"}},321:function(e){e.exports={container:"home_container__2W4Hx"}},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),i=n(7381),o=n(3585),a=n(5725);e.exports=function(e){return r(e)||i(e)||o(e)||a()}},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],u=!1,l=-1;function d(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);