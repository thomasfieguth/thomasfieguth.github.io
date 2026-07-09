function jx(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Xx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var S_={exports:{}},zc={},M_={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),$x=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),Kx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Zx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),ey=Symbol.for("react.suspense"),ty=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),Np=Symbol.iterator;function iy(n){return n===null||typeof n!="object"?null:(n=Np&&n[Np]||n["@@iterator"],typeof n=="function"?n:null)}var E_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T_=Object.assign,w_={};function go(n,e,t){this.props=n,this.context=e,this.refs=w_,this.updater=t||E_}go.prototype.isReactComponent={};go.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};go.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function A_(){}A_.prototype=go.prototype;function ah(n,e,t){this.props=n,this.context=e,this.refs=w_,this.updater=t||E_}var lh=ah.prototype=new A_;lh.constructor=ah;T_(lh,go.prototype);lh.isPureReactComponent=!0;var Dp=Array.isArray,R_=Object.prototype.hasOwnProperty,ch={current:null},C_={key:!0,ref:!0,__self:!0,__source:!0};function b_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,i)&&!C_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:n,key:s,ref:o,props:r,_owner:ch.current}}function ry(n,e){return{$$typeof:Ua,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function uh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ua}function sy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Up=/\/+/g;function gu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sy(""+n.key):e.toString(36)}function Bl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ua:case $x:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+gu(o,0):i,Dp(r)?(t="",n!=null&&(t=n.replace(Up,"$&/")+"/"),Bl(r,e,t,"",function(c){return c})):r!=null&&(uh(r)&&(r=ry(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Up,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+gu(s,a);o+=Bl(s,e,t,l,r)}else if(l=iy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+gu(s,a++),o+=Bl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(n,e,t){if(n==null)return n;var i=[],r=0;return Bl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function oy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var an={current:null},zl={transition:null},ay={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:zl,ReactCurrentOwner:ch};function P_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Xa,forEach:function(n,e,t){Xa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xa(n,function(){e++}),e},toArray:function(n){return Xa(n,function(e){return e})||[]},only:function(n){if(!uh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=go;Ye.Fragment=Yx;Ye.Profiler=qx;Ye.PureComponent=ah;Ye.StrictMode=Kx;Ye.Suspense=ey;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;Ye.act=P_;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=T_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ch.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)R_.call(e,l)&&!C_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:n.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(n){return n={$$typeof:Qx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Zx,_context:n},n.Consumer=n};Ye.createElement=b_;Ye.createFactory=function(n){var e=b_.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:Jx,render:n}};Ye.isValidElement=uh;Ye.lazy=function(n){return{$$typeof:ny,_payload:{_status:-1,_result:n},_init:oy}};Ye.memo=function(n,e){return{$$typeof:ty,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=zl.transition;zl.transition={};try{n()}finally{zl.transition=e}};Ye.unstable_act=P_;Ye.useCallback=function(n,e){return an.current.useCallback(n,e)};Ye.useContext=function(n){return an.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return an.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return an.current.useEffect(n,e)};Ye.useId=function(){return an.current.useId()};Ye.useImperativeHandle=function(n,e,t){return an.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return an.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return an.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return an.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return an.current.useReducer(n,e,t)};Ye.useRef=function(n){return an.current.useRef(n)};Ye.useState=function(n){return an.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return an.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return an.current.useTransition()};Ye.version="18.3.1";M_.exports=Ye;var U=M_.exports;const ly=Xx(U),cy=jx({__proto__:null,default:ly},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=U,fy=Symbol.for("react.element"),dy=Symbol.for("react.fragment"),hy=Object.prototype.hasOwnProperty,py=uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my={key:!0,ref:!0,__self:!0,__source:!0};function L_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hy.call(e,i)&&!my.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fy,type:n,key:s,ref:o,props:r,_owner:py.current}}zc.Fragment=dy;zc.jsx=L_;zc.jsxs=L_;S_.exports=zc;var k=S_.exports,I_={exports:{}},Cn={},N_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,Q){var ne=N.length;N.push(Q);e:for(;0<ne;){var ue=ne-1>>>1,Se=N[ue];if(0<r(Se,Q))N[ue]=Q,N[ne]=Se,ne=ue;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Q=N[0],ne=N.pop();if(ne!==Q){N[0]=ne;e:for(var ue=0,Se=N.length,Be=Se>>>1;ue<Be;){var Y=2*(ue+1)-1,ae=N[Y],ge=Y+1,_e=N[ge];if(0>r(ae,ne))ge<Se&&0>r(_e,ae)?(N[ue]=_e,N[ge]=ne,ue=ge):(N[ue]=ae,N[Y]=ne,ue=Y);else if(ge<Se&&0>r(_e,ne))N[ue]=_e,N[ge]=ne,ue=ge;else break e}}return Q}function r(N,Q){var ne=N.sortIndex-Q.sortIndex;return ne!==0?ne:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var Q=t(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=N)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=t(c)}}function y(N){if(v=!1,x(N),!g)if(t(l)!==null)g=!0,j(C);else{var Q=t(c);Q!==null&&te(y,Q.startTime-N)}}function C(N,Q){g=!1,v&&(v=!1,h(R),R=-1),p=!0;var ne=d;try{for(x(Q),f=t(l);f!==null&&(!(f.expirationTime>Q)||N&&!b());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var Se=ue(f.expirationTime<=Q);Q=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),x(Q)}else i(l);f=t(l)}if(f!==null)var Be=!0;else{var Y=t(c);Y!==null&&te(y,Y.startTime-Q),Be=!1}return Be}finally{f=null,d=ne,p=!1}}var A=!1,T=null,R=-1,M=5,S=-1;function b(){return!(n.unstable_now()-S<M)}function G(){if(T!==null){var N=n.unstable_now();S=N;var Q=!0;try{Q=T(!0,N)}finally{Q?H():(A=!1,T=null)}}else A=!1}var H;if(typeof _=="function")H=function(){_(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=G,H=function(){ee.postMessage(null)}}else H=function(){m(G,0)};function j(N){T=N,A||(A=!0,H())}function te(N,Q){R=m(function(){N(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,j(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var ne=d;d=Q;try{return N()}finally{d=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=d;d=N;try{return Q()}finally{d=ne}},n.unstable_scheduleCallback=function(N,Q,ne){var ue=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ue+ne:ue):ne=ue,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ne+Se,N={id:u++,callback:Q,priorityLevel:N,startTime:ne,expirationTime:Se,sortIndex:-1},ne>ue?(N.sortIndex=ne,e(c,N),t(l)===null&&N===t(c)&&(v?(h(R),R=-1):v=!0,te(y,ne-ue))):(N.sortIndex=Se,e(l,N),g||p||(g=!0,j(C))),N},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(N){var Q=d;return function(){var ne=d;d=Q;try{return N.apply(this,arguments)}finally{d=ne}}}})(D_);N_.exports=D_;var gy=N_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=U,An=gy;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U_=new Set,fa={};function ns(n,e){Zs(n,e),Zs(n+"Capture",e)}function Zs(n,e){for(fa[n]=e,n=0;n<e.length;n++)U_.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Op={};function xy(n){return Cf.call(Op,n)?!0:Cf.call(Fp,n)?!1:vy.test(n)?Op[n]=!0:(Fp[n]=!0,!1)}function yy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Sy(n,e,t,i){if(e===null||typeof e>"u"||yy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ht[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ht[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ht[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ht[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ht[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ht[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ht[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ht[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ht[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function dh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ht[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ht[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function hh(n,e,t,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sy(e,t,r,i)&&(t=null),i||r===null?xy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Vi=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),kp=Symbol.iterator;function Ao(n){return n===null||typeof n!="object"?null:(n=kp&&n[kp]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,_u;function $o(n){if(_u===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+n}var vu=!1;function xu(n,e){if(!n||vu)return"";vu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$o(n):""}function My(n){switch(n.tag){case 5:return $o(n.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return n=xu(n.type,!1),n;case 11:return n=xu(n.type.render,!1),n;case 1:return n=xu(n.type,!0),n;default:return""}}function If(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Cs:return"Fragment";case Rs:return"Portal";case bf:return"Profiler";case ph:return"StrictMode";case Pf:return"Suspense";case Lf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O_:return(n.displayName||"Context")+".Consumer";case F_:return(n._context.displayName||"Context")+".Provider";case mh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gh:return e=n.displayName||null,e!==null?e:If(n.type)||"Memo";case er:e=n._payload,n=n._init;try{return If(n(e))}catch{}}return null}function Ey(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function B_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ty(n){var e=B_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ya(n){n._valueTracker||(n._valueTracker=Ty(n))}function z_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=B_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function oc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nf(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Bp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Sr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(n,e){e=e.checked,e!=null&&hh(n,"checked",e,!1)}function Df(n,e){H_(n,e);var t=Sr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uf(n,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function zp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uf(n,e,t){(e!=="number"||oc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Yo=Array.isArray;function zs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Sr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ff(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Hp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(Yo(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Sr(t)}}function V_(n,e){var t=Sr(e.value),i=Sr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Vp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function G_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?G_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ka,W_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function da(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wy=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(n){wy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Jo[e]=Jo[n]})});function j_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Jo.hasOwnProperty(n)&&Jo[n]?(""+e).trim():e+"px"}function X_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=j_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ay=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(n,e){if(e){if(Ay[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Bf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function _h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hf=null,Hs=null,Vs=null;function Gp(n){if(n=ka(n)){if(typeof Hf!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=jc(e),Hf(n.stateNode,n.type,e))}}function $_(n){Hs?Vs?Vs.push(n):Vs=[n]:Hs=n}function Y_(){if(Hs){var n=Hs,e=Vs;if(Vs=Hs=null,Gp(n),e)for(n=0;n<e.length;n++)Gp(e[n])}}function K_(n,e){return n(e)}function q_(){}var yu=!1;function Z_(n,e,t){if(yu)return n(e,t);yu=!0;try{return K_(n,e,t)}finally{yu=!1,(Hs!==null||Vs!==null)&&(q_(),Y_())}}function ha(n,e){var t=n.stateNode;if(t===null)return null;var i=jc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var Vf=!1;if(Fi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Vf=!1}function Ry(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var ea=!1,ac=null,lc=!1,Gf=null,Cy={onError:function(n){ea=!0,ac=n}};function by(n,e,t,i,r,s,o,a,l){ea=!1,ac=null,Ry.apply(Cy,arguments)}function Py(n,e,t,i,r,s,o,a,l){if(by.apply(this,arguments),ea){if(ea){var c=ac;ea=!1,ac=null}else throw Error(ce(198));lc||(lc=!0,Gf=c)}}function is(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Q_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(n){if(is(n)!==n)throw Error(ce(188))}function Ly(n){var e=n.alternate;if(!e){if(e=is(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Wp(r),n;if(s===i)return Wp(r),e;s=s.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function J_(n){return n=Ly(n),n!==null?ev(n):null}function ev(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ev(n);if(e!==null)return e;n=n.sibling}return null}var tv=An.unstable_scheduleCallback,jp=An.unstable_cancelCallback,Iy=An.unstable_shouldYield,Ny=An.unstable_requestPaint,wt=An.unstable_now,Dy=An.unstable_getCurrentPriorityLevel,vh=An.unstable_ImmediatePriority,nv=An.unstable_UserBlockingPriority,cc=An.unstable_NormalPriority,Uy=An.unstable_LowPriority,iv=An.unstable_IdlePriority,Hc=null,hi=null;function Fy(n){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Hc,n,void 0,(n.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:By,Oy=Math.log,ky=Math.LN2;function By(n){return n>>>=0,n===0?32:31-(Oy(n)/ky|0)|0}var qa=64,Za=4194304;function Ko(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function uc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ko(a):(s&=o,s!==0&&(i=Ko(s)))}else o=t&~r,o!==0?i=Ko(o):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jn(e),r=1<<t,i|=n[t],e&=~r;return i}function zy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=zy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Wf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function rv(){var n=qa;return qa<<=1,!(qa&4194240)&&(qa=64),n}function Su(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jn(e),n[e]=t}function Vy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function xh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function sv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ov,yh,av,lv,cv,jf=!1,Qa=[],ur=null,fr=null,dr=null,pa=new Map,ma=new Map,nr=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(n,e){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&yh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Wy(n,e,t,i,r){switch(e){case"focusin":return ur=Co(ur,n,e,t,i,r),!0;case"dragenter":return fr=Co(fr,n,e,t,i,r),!0;case"mouseover":return dr=Co(dr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Co(pa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Co(ma.get(s)||null,n,e,t,i,r)),!0}return!1}function uv(n){var e=Gr(n.target);if(e!==null){var t=is(e);if(t!==null){if(e=t.tag,e===13){if(e=Q_(t),e!==null){n.blockedOn=e,cv(n.priority,function(){av(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Xf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);zf=i,t.target.dispatchEvent(i),zf=null}else return e=ka(t),e!==null&&yh(e),n.blockedOn=t,!1;e.shift()}return!0}function $p(n,e,t){Hl(n)&&t.delete(e)}function jy(){jf=!1,ur!==null&&Hl(ur)&&(ur=null),fr!==null&&Hl(fr)&&(fr=null),dr!==null&&Hl(dr)&&(dr=null),pa.forEach($p),ma.forEach($p)}function bo(n,e){n.blockedOn===e&&(n.blockedOn=null,jf||(jf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,jy)))}function ga(n){function e(r){return bo(r,n)}if(0<Qa.length){bo(Qa[0],n);for(var t=1;t<Qa.length;t++){var i=Qa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ur!==null&&bo(ur,n),fr!==null&&bo(fr,n),dr!==null&&bo(dr,n),pa.forEach(e),ma.forEach(e),t=0;t<nr.length;t++)i=nr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<nr.length&&(t=nr[0],t.blockedOn===null);)uv(t),t.blockedOn===null&&nr.shift()}var Gs=Vi.ReactCurrentBatchConfig,fc=!0;function Xy(n,e,t,i){var r=st,s=Gs.transition;Gs.transition=null;try{st=1,Sh(n,e,t,i)}finally{st=r,Gs.transition=s}}function $y(n,e,t,i){var r=st,s=Gs.transition;Gs.transition=null;try{st=4,Sh(n,e,t,i)}finally{st=r,Gs.transition=s}}function Sh(n,e,t,i){if(fc){var r=Xf(n,e,t,i);if(r===null)Lu(n,e,i,dc,t),Xp(n,i);else if(Wy(r,n,e,t,i))i.stopPropagation();else if(Xp(n,i),e&4&&-1<Gy.indexOf(n)){for(;r!==null;){var s=ka(r);if(s!==null&&ov(s),s=Xf(n,e,t,i),s===null&&Lu(n,e,i,dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(n,e,i,null,t)}}var dc=null;function Xf(n,e,t,i){if(dc=null,n=_h(i),n=Gr(n),n!==null)if(e=is(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Q_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return dc=n,null}function fv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case vh:return 1;case nv:return 4;case cc:case Uy:return 16;case iv:return 536870912;default:return 16}default:return 16}}var sr=null,Mh=null,Vl=null;function dv(){if(Vl)return Vl;var n,e=Mh,t=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Vl=r.slice(n,1<i?1-i:void 0)}function Gl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ja(){return!0}function Yp(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Yp,this.isPropagationStopped=Yp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=bn(_o),Oa=xt({},_o,{view:0,detail:0}),Yy=bn(Oa),Mu,Eu,Po,Vc=xt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(Mu=n.screenX-Po.screenX,Eu=n.screenY-Po.screenY):Eu=Mu=0,Po=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:Eu}}),Kp=bn(Vc),Ky=xt({},Vc,{dataTransfer:0}),qy=bn(Ky),Zy=xt({},Oa,{relatedTarget:0}),Tu=bn(Zy),Qy=xt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=bn(Qy),eS=xt({},_o,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tS=bn(eS),nS=xt({},_o,{data:0}),qp=bn(nS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sS[n])?!!e[n]:!1}function Th(){return oS}var aS=xt({},Oa,{key:function(n){if(n.key){var e=iS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(n){return n.type==="keypress"?Gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lS=bn(aS),cS=xt({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=bn(cS),uS=xt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),fS=bn(uS),dS=xt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=bn(dS),pS=xt({},Vc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=bn(pS),gS=[9,13,27,32],wh=Fi&&"CompositionEvent"in window,ta=null;Fi&&"documentMode"in document&&(ta=document.documentMode);var _S=Fi&&"TextEvent"in window&&!ta,hv=Fi&&(!wh||ta&&8<ta&&11>=ta),Qp=" ",Jp=!1;function pv(n,e){switch(n){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function vS(n,e){switch(n){case"compositionend":return mv(e);case"keypress":return e.which!==32?null:(Jp=!0,Qp);case"textInput":return n=e.data,n===Qp&&Jp?null:n;default:return null}}function xS(n,e){if(bs)return n==="compositionend"||!wh&&pv(n,e)?(n=dv(),Vl=Mh=sr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hv&&e.locale!=="ko"?null:e.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!yS[n.type]:e==="textarea"}function gv(n,e,t,i){$_(i),e=hc(e,"onChange"),0<e.length&&(t=new Eh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var na=null,_a=null;function SS(n){Rv(n,0)}function Gc(n){var e=Is(n);if(z_(e))return n}function MS(n,e){if(n==="change")return e}var _v=!1;if(Fi){var wu;if(Fi){var Au="oninput"in document;if(!Au){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Au=typeof tm.oninput=="function"}wu=Au}else wu=!1;_v=wu&&(!document.documentMode||9<document.documentMode)}function nm(){na&&(na.detachEvent("onpropertychange",vv),_a=na=null)}function vv(n){if(n.propertyName==="value"&&Gc(_a)){var e=[];gv(e,_a,n,_h(n)),Z_(SS,e)}}function ES(n,e,t){n==="focusin"?(nm(),na=e,_a=t,na.attachEvent("onpropertychange",vv)):n==="focusout"&&nm()}function TS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gc(_a)}function wS(n,e){if(n==="click")return Gc(e)}function AS(n,e){if(n==="input"||n==="change")return Gc(e)}function RS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var si=typeof Object.is=="function"?Object.is:RS;function va(n,e){if(si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Cf.call(e,r)||!si(n[r],e[r]))return!1}return!0}function im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rm(n,e){var t=im(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=im(t)}}function xv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?xv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function yv(){for(var n=window,e=oc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=oc(n.document)}return e}function Ah(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function CS(n){var e=yv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&xv(t.ownerDocument.documentElement,t)){if(i!==null&&Ah(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=rm(t,s);var o=rm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bS=Fi&&"documentMode"in document&&11>=document.documentMode,Ps=null,$f=null,ia=null,Yf=!1;function sm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yf||Ps==null||Ps!==oc(i)||(i=Ps,"selectionStart"in i&&Ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&va(ia,i)||(ia=i,i=hc($f,"onSelect"),0<i.length&&(e=new Eh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ps)))}function el(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ls={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Ru={},Sv={};Fi&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Wc(n){if(Ru[n])return Ru[n];if(!Ls[n])return n;var e=Ls[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Sv)return Ru[n]=e[t];return n}var Mv=Wc("animationend"),Ev=Wc("animationiteration"),Tv=Wc("animationstart"),wv=Wc("transitionend"),Av=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,e){Av.set(n,e),ns(e,[n])}for(var Cu=0;Cu<om.length;Cu++){var bu=om[Cu],PS=bu.toLowerCase(),LS=bu[0].toUpperCase()+bu.slice(1);Tr(PS,"on"+LS)}Tr(Mv,"onAnimationEnd");Tr(Ev,"onAnimationIteration");Tr(Tv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(wv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function am(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Py(i,e,void 0,n),n.currentTarget=null}function Rv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;am(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;am(r,a,c),s=l}}}if(lc)throw n=Gf,lc=!1,Gf=null,n}function ft(n,e){var t=e[Jf];t===void 0&&(t=e[Jf]=new Set);var i=n+"__bubble";t.has(i)||(Cv(e,n,2,!1),t.add(i))}function Pu(n,e,t){var i=0;e&&(i|=4),Cv(t,n,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function xa(n){if(!n[tl]){n[tl]=!0,U_.forEach(function(t){t!=="selectionchange"&&(IS.has(t)||Pu(t,!1,n),Pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[tl]||(e[tl]=!0,Pu("selectionchange",!1,e))}}function Cv(n,e,t,i){switch(fv(e)){case 1:var r=Xy;break;case 4:r=$y;break;default:r=Sh}t=r.bind(null,e,t,n),r=void 0,!Vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Lu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Z_(function(){var c=s,u=_h(t),f=[];e:{var d=Av.get(n);if(d!==void 0){var p=Eh,g=n;switch(n){case"keypress":if(Gl(t)===0)break e;case"keydown":case"keyup":p=lS;break;case"focusin":g="focus",p=Tu;break;case"focusout":g="blur",p=Tu;break;case"beforeblur":case"afterblur":p=Tu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fS;break;case Mv:case Ev:case Tv:p=Jy;break;case wv:p=hS;break;case"scroll":p=Yy;break;case"wheel":p=mS;break;case"copy":case"cut":case"paste":p=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zp}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=ha(_,h),y!=null&&v.push(ya(_,y,x)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,t,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==zf&&(g=t.relatedTarget||t.fromElement)&&(Gr(g)||g[Oi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Gr(g):null,g!==null&&(m=is(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Kp,y="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=Zp,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:Is(p),x=g==null?d:Is(g),d=new v(y,_+"leave",p,t,u),d.target=m,d.relatedTarget=x,y=null,Gr(u)===c&&(v=new v(h,_+"enter",g,t,u),v.target=x,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,h=g,_=0,x=v;x;x=ls(x))_++;for(x=0,y=h;y;y=ls(y))x++;for(;0<_-x;)v=ls(v),_--;for(;0<x-_;)h=ls(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=ls(v),h=ls(h)}v=null}else v=null;p!==null&&lm(f,d,p,v,!1),g!==null&&m!==null&&lm(f,m,g,v,!0)}}e:{if(d=c?Is(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=MS;else if(em(d))if(_v)C=AS;else{C=TS;var A=ES}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=wS);if(C&&(C=C(n,c))){gv(f,C,t,u);break e}A&&A(n,d,c),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Uf(d,"number",d.value)}switch(A=c?Is(c):window,n){case"focusin":(em(A)||A.contentEditable==="true")&&(Ps=A,$f=c,ia=null);break;case"focusout":ia=$f=Ps=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,sm(f,t,u);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":sm(f,t,u)}var T;if(wh)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else bs?pv(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(hv&&t.locale!=="ko"&&(bs||R!=="onCompositionStart"?R==="onCompositionEnd"&&bs&&(T=dv()):(sr=u,Mh="value"in sr?sr.value:sr.textContent,bs=!0)),A=hc(c,R),0<A.length&&(R=new qp(R,n,null,t,u),f.push({event:R,listeners:A}),T?R.data=T:(T=mv(t),T!==null&&(R.data=T)))),(T=_S?vS(n,t):xS(n,t))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new qp("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=T))}Rv(f,e)})}function ya(n,e,t){return{instance:n,listener:e,currentTarget:t}}function hc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(n,t),s!=null&&i.unshift(ya(n,s,r)),s=ha(n,e),s!=null&&i.push(ya(n,s,r))),n=n.return}return i}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(t,s),l!=null&&o.unshift(ya(t,l,a))):r||(l=ha(t,s),l!=null&&o.push(ya(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var NS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function cm(n){return(typeof n=="string"?n:""+n).replace(NS,`
`).replace(DS,"")}function nl(n,e,t){if(e=cm(e),cm(n)!==e&&t)throw Error(ce(425))}function pc(){}var Kf=null,qf=null;function Zf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(n){return um.resolve(null).then(n).catch(OS)}:Qf;function OS(n){setTimeout(function(){throw n})}function Iu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ga(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ga(e)}function hr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ui="__reactFiber$"+vo,Sa="__reactProps$"+vo,Oi="__reactContainer$"+vo,Jf="__reactEvents$"+vo,kS="__reactListeners$"+vo,BS="__reactHandles$"+vo;function Gr(n){var e=n[ui];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Oi]||t[ui]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fm(n);n!==null;){if(t=n[ui])return t;n=fm(n)}return e}n=t,t=n.parentNode}return null}function ka(n){return n=n[ui]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function jc(n){return n[Sa]||null}var ed=[],Ns=-1;function wr(n){return{current:n}}function ht(n){0>Ns||(n.current=ed[Ns],ed[Ns]=null,Ns--)}function lt(n,e){Ns++,ed[Ns]=n.current,n.current=e}var Mr={},Qt=wr(Mr),dn=wr(!1),Kr=Mr;function Qs(n,e){var t=n.type.contextTypes;if(!t)return Mr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function hn(n){return n=n.childContextTypes,n!=null}function mc(){ht(dn),ht(Qt)}function dm(n,e,t){if(Qt.current!==Mr)throw Error(ce(168));lt(Qt,e),lt(dn,t)}function bv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Ey(n)||"Unknown",r));return xt({},t,i)}function gc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Kr=Qt.current,lt(Qt,n),lt(dn,dn.current),!0}function hm(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=bv(n,e,Kr),i.__reactInternalMemoizedMergedChildContext=n,ht(dn),ht(Qt),lt(Qt,n)):ht(dn),lt(dn,t)}var Pi=null,Xc=!1,Nu=!1;function Pv(n){Pi===null?Pi=[n]:Pi.push(n)}function zS(n){Xc=!0,Pv(n)}function Ar(){if(!Nu&&Pi!==null){Nu=!0;var n=0,e=st;try{var t=Pi;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pi=null,Xc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(n+1)),tv(vh,Ar),r}finally{st=e,Nu=!1}}return null}var Ds=[],Us=0,_c=null,vc=0,Nn=[],Dn=0,qr=null,Li=1,Ii="";function Or(n,e){Ds[Us++]=vc,Ds[Us++]=_c,_c=n,vc=e}function Lv(n,e,t){Nn[Dn++]=Li,Nn[Dn++]=Ii,Nn[Dn++]=qr,qr=n;var i=Li;n=Ii;var r=32-Jn(i)-1;i&=~(1<<r),t+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Li=1<<32-Jn(e)+r|t<<r|i,Ii=s+n}else Li=1<<s|t<<r|i,Ii=n}function Rh(n){n.return!==null&&(Or(n,1),Lv(n,1,0))}function Ch(n){for(;n===_c;)_c=Ds[--Us],Ds[Us]=null,vc=Ds[--Us],Ds[Us]=null;for(;n===qr;)qr=Nn[--Dn],Nn[Dn]=null,Ii=Nn[--Dn],Nn[Dn]=null,Li=Nn[--Dn],Nn[Dn]=null}var wn=null,Tn=null,pt=!1,qn=null;function Iv(n,e){var t=Un(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function pm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wn=n,Tn=hr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wn=n,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qr!==null?{id:Li,overflow:Ii}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Un(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wn=n,Tn=null,!0):!1;default:return!1}}function td(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nd(n){if(pt){var e=Tn;if(e){var t=e;if(!pm(n,e)){if(td(n))throw Error(ce(418));e=hr(t.nextSibling);var i=wn;e&&pm(n,e)?Iv(i,t):(n.flags=n.flags&-4097|2,pt=!1,wn=n)}}else{if(td(n))throw Error(ce(418));n.flags=n.flags&-4097|2,pt=!1,wn=n}}}function mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wn=n}function il(n){if(n!==wn)return!1;if(!pt)return mm(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zf(n.type,n.memoizedProps)),e&&(e=Tn)){if(td(n))throw Nv(),Error(ce(418));for(;e;)Iv(n,e),e=hr(e.nextSibling)}if(mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Tn=hr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Tn=null}}else Tn=wn?hr(n.stateNode.nextSibling):null;return!0}function Nv(){for(var n=Tn;n;)n=hr(n.nextSibling)}function Js(){Tn=wn=null,pt=!1}function bh(n){qn===null?qn=[n]:qn.push(n)}var HS=Vi.ReactCurrentBatchConfig;function Lo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function rl(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function gm(n){var e=n._init;return e(n._payload)}function Dv(n){function e(h,_){if(n){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=_r(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,x,y){return _===null||_.tag!==6?(_=zu(x,h.mode,y),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,y){var C=x.type;return C===Cs?u(h,_,x.props.children,y,x.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&gm(C)===_.type)?(y=r(_,x.props),y.ref=Lo(h,_,x),y.return=h,y):(y=ql(x.type,x.key,x.props,null,h.mode,y),y.ref=Lo(h,_,x),y.return=h,y)}function c(h,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Hu(x,h.mode,y),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function u(h,_,x,y,C){return _===null||_.tag!==7?(_=Yr(x,h.mode,y,C),_.return=h,_):(_=r(_,x),_.return=h,_)}function f(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=zu(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return x=ql(_.type,_.key,_.props,null,h.mode,x),x.ref=Lo(h,null,_),x.return=h,x;case Rs:return _=Hu(_,h.mode,x),_.return=h,_;case er:var y=_._init;return f(h,y(_._payload),x)}if(Yo(_)||Ao(_))return _=Yr(_,h.mode,x,null),_.return=h,_;rl(h,_)}return null}function d(h,_,x,y){var C=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:return x.key===C?l(h,_,x,y):null;case Rs:return x.key===C?c(h,_,x,y):null;case er:return C=x._init,d(h,_,C(x._payload),y)}if(Yo(x)||Ao(x))return C!==null?null:u(h,_,x,y,null);rl(h,x)}return null}function p(h,_,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(_,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return h=h.get(y.key===null?x:y.key)||null,l(_,h,y,C);case Rs:return h=h.get(y.key===null?x:y.key)||null,c(_,h,y,C);case er:var A=y._init;return p(h,_,x,A(y._payload),C)}if(Yo(y)||Ao(y))return h=h.get(x)||null,u(_,h,y,C,null);rl(_,y)}return null}function g(h,_,x,y){for(var C=null,A=null,T=_,R=_=0,M=null;T!==null&&R<x.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var S=d(h,T,x[R],y);if(S===null){T===null&&(T=M);break}n&&T&&S.alternate===null&&e(h,T),_=s(S,_,R),A===null?C=S:A.sibling=S,A=S,T=M}if(R===x.length)return t(h,T),pt&&Or(h,R),C;if(T===null){for(;R<x.length;R++)T=f(h,x[R],y),T!==null&&(_=s(T,_,R),A===null?C=T:A.sibling=T,A=T);return pt&&Or(h,R),C}for(T=i(h,T);R<x.length;R++)M=p(T,h,R,x[R],y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),_=s(M,_,R),A===null?C=M:A.sibling=M,A=M);return n&&T.forEach(function(b){return e(h,b)}),pt&&Or(h,R),C}function v(h,_,x,y){var C=Ao(x);if(typeof C!="function")throw Error(ce(150));if(x=C.call(x),x==null)throw Error(ce(151));for(var A=C=null,T=_,R=_=0,M=null,S=x.next();T!==null&&!S.done;R++,S=x.next()){T.index>R?(M=T,T=null):M=T.sibling;var b=d(h,T,S.value,y);if(b===null){T===null&&(T=M);break}n&&T&&b.alternate===null&&e(h,T),_=s(b,_,R),A===null?C=b:A.sibling=b,A=b,T=M}if(S.done)return t(h,T),pt&&Or(h,R),C;if(T===null){for(;!S.done;R++,S=x.next())S=f(h,S.value,y),S!==null&&(_=s(S,_,R),A===null?C=S:A.sibling=S,A=S);return pt&&Or(h,R),C}for(T=i(h,T);!S.done;R++,S=x.next())S=p(T,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?R:S.key),_=s(S,_,R),A===null?C=S:A.sibling=S,A=S);return n&&T.forEach(function(G){return e(h,G)}),pt&&Or(h,R),C}function m(h,_,x,y){if(typeof x=="object"&&x!==null&&x.type===Cs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:e:{for(var C=x.key,A=_;A!==null;){if(A.key===C){if(C=x.type,C===Cs){if(A.tag===7){t(h,A.sibling),_=r(A,x.props.children),_.return=h,h=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&gm(C)===A.type){t(h,A.sibling),_=r(A,x.props),_.ref=Lo(h,A,x),_.return=h,h=_;break e}t(h,A);break}else e(h,A);A=A.sibling}x.type===Cs?(_=Yr(x.props.children,h.mode,y,x.key),_.return=h,h=_):(y=ql(x.type,x.key,x.props,null,h.mode,y),y.ref=Lo(h,_,x),y.return=h,h=y)}return o(h);case Rs:e:{for(A=x.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=Hu(x,h.mode,y),_.return=h,h=_}return o(h);case er:return A=x._init,m(h,_,A(x._payload),y)}if(Yo(x))return g(h,_,x,y);if(Ao(x))return v(h,_,x,y);rl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,x),_.return=h,h=_):(t(h,_),_=zu(x,h.mode,y),_.return=h,h=_),o(h)):t(h,_)}return m}var eo=Dv(!0),Uv=Dv(!1),xc=wr(null),yc=null,Fs=null,Ph=null;function Lh(){Ph=Fs=yc=null}function Ih(n){var e=xc.current;ht(xc),n._currentValue=e}function id(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ws(n,e){yc=n,Ph=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function kn(n){var e=n._currentValue;if(Ph!==n)if(n={context:n,memoizedValue:e,next:null},Fs===null){if(yc===null)throw Error(ce(308));Fs=n,yc.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return e}var Wr=null;function Nh(n){Wr===null?Wr=[n]:Wr.push(n)}function Fv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Nh(e)):(t.next=r.next,r.next=t),e.interleaved=t,ki(n,i)}function ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var tr=!1;function Dh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ov(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(n,t)}return r=i.interleaved,r===null?(e.next=e,Nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(n,t)}function Wl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xh(n,t)}}function _m(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Sc(n,e,t,i){var r=n.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(d=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=xt({},f,d);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,n.lanes=o,n.memoizedState=f}}function vm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ba={},pi=wr(Ba),Ma=wr(Ba),Ea=wr(Ba);function jr(n){if(n===Ba)throw Error(ce(174));return n}function Uh(n,e){switch(lt(Ea,e),lt(Ma,n),lt(pi,Ba),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Of(e,n)}ht(pi),lt(pi,e)}function to(){ht(pi),ht(Ma),ht(Ea)}function kv(n){jr(Ea.current);var e=jr(pi.current),t=Of(e,n.type);e!==t&&(lt(Ma,n),lt(pi,t))}function Fh(n){Ma.current===n&&(ht(pi),ht(Ma))}var mt=wr(0);function Mc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Oh(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var jl=Vi.ReactCurrentDispatcher,Uu=Vi.ReactCurrentBatchConfig,Zr=0,gt=null,bt=null,Dt=null,Ec=!1,ra=!1,Ta=0,VS=0;function Gt(){throw Error(ce(321))}function kh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!si(n[t],e[t]))return!1;return!0}function Bh(n,e,t,i,r,s){if(Zr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=n===null||n.memoizedState===null?XS:$S,n=t(i,r),ra){s=0;do{if(ra=!1,Ta=0,25<=s)throw Error(ce(301));s+=1,Dt=bt=null,e.updateQueue=null,jl.current=YS,n=t(i,r)}while(ra)}if(jl.current=Tc,e=bt!==null&&bt.next!==null,Zr=0,Dt=bt=gt=null,Ec=!1,e)throw Error(ce(300));return n}function zh(){var n=Ta!==0;return Ta=0,n}function li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?gt.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Bn(){if(bt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var e=Dt===null?gt.memoizedState:Dt.next;if(e!==null)Dt=e,bt=n;else{if(n===null)throw Error(ce(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Dt===null?gt.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function wa(n,e){return typeof e=="function"?e(n):e}function Fu(n){var e=Bn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=u,Qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,Qr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ou(n){var e=Bn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Bv(){}function zv(n,e){var t=gt,i=Bn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Hh(Gv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(t.flags|=2048,Aa(9,Vv.bind(null,t,i,r,e),void 0,null),Ut===null)throw Error(ce(349));Zr&30||Hv(t,e,r)}return r}function Hv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Vv(n,e,t,i){e.value=t,e.getSnapshot=i,Wv(e)&&jv(n)}function Gv(n,e,t){return t(function(){Wv(e)&&jv(n)})}function Wv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!si(n,t)}catch{return!0}}function jv(n){var e=ki(n,1);e!==null&&ei(e,n,1,-1)}function xm(n){var e=li();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},e.queue=n,n=n.dispatch=jS.bind(null,gt,n),[e.memoizedState,n]}function Aa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Xv(){return Bn().memoizedState}function Xl(n,e,t,i){var r=li();gt.flags|=n,r.memoizedState=Aa(1|e,t,void 0,i===void 0?null:i)}function $c(n,e,t,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&kh(i,o.deps)){r.memoizedState=Aa(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Aa(1|e,t,s,i)}function ym(n,e){return Xl(8390656,8,n,e)}function Hh(n,e){return $c(2048,8,n,e)}function $v(n,e){return $c(4,2,n,e)}function Yv(n,e){return $c(4,4,n,e)}function Kv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function qv(n,e,t){return t=t!=null?t.concat([n]):null,$c(4,4,Kv.bind(null,e,n),t)}function Vh(){}function Zv(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Qv(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Jv(n,e,t){return Zr&21?(si(t,e)||(t=rv(),gt.lanes|=t,Qr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function GS(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=Uu.transition;Uu.transition={};try{n(!1),e()}finally{st=t,Uu.transition=i}}function e0(){return Bn().memoizedState}function WS(n,e,t){var i=gr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},t0(n))n0(e,t);else if(t=Fv(n,e,t,i),t!==null){var r=on();ei(t,n,i,r),i0(t,e,i)}}function jS(n,e,t){var i=gr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(t0(n))n0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Fv(n,e,r,i),t!==null&&(r=on(),ei(t,n,i,r),i0(t,e,i))}}function t0(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function n0(n,e){ra=Ec=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function i0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xh(n,t)}}var Tc={readContext:kn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},XS={readContext:kn,useCallback:function(n,e){return li().memoizedState=[n,e===void 0?null:e],n},useContext:kn,useEffect:ym,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xl(4194308,4,Kv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xl(4,2,n,e)},useMemo:function(n,e){var t=li();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=li();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=WS.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=li();return n={current:n},e.memoizedState=n},useState:xm,useDebugValue:Vh,useDeferredValue:function(n){return li().memoizedState=n},useTransition:function(){var n=xm(!1),e=n[0];return n=GS.bind(null,n[1]),li().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=li();if(pt){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),Ut===null)throw Error(ce(349));Zr&30||Hv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ym(Gv.bind(null,i,s,n),[n]),i.flags|=2048,Aa(9,Vv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=li(),e=Ut.identifierPrefix;if(pt){var t=Ii,i=Li;t=(i&~(1<<32-Jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ta++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=VS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},$S={readContext:kn,useCallback:Zv,useContext:kn,useEffect:Hh,useImperativeHandle:qv,useInsertionEffect:$v,useLayoutEffect:Yv,useMemo:Qv,useReducer:Fu,useRef:Xv,useState:function(){return Fu(wa)},useDebugValue:Vh,useDeferredValue:function(n){var e=Bn();return Jv(e,bt.memoizedState,n)},useTransition:function(){var n=Fu(wa)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:Bv,useSyncExternalStore:zv,useId:e0,unstable_isNewReconciler:!1},YS={readContext:kn,useCallback:Zv,useContext:kn,useEffect:Hh,useImperativeHandle:qv,useInsertionEffect:$v,useLayoutEffect:Yv,useMemo:Qv,useReducer:Ou,useRef:Xv,useState:function(){return Ou(wa)},useDebugValue:Vh,useDeferredValue:function(n){var e=Bn();return bt===null?e.memoizedState=n:Jv(e,bt.memoizedState,n)},useTransition:function(){var n=Ou(wa)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:Bv,useSyncExternalStore:zv,useId:e0,unstable_isNewReconciler:!1};function Yn(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function rd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Yc={isMounted:function(n){return(n=n._reactInternals)?is(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=on(),r=gr(n),s=Ui(i,r);s.payload=e,t!=null&&(s.callback=t),e=pr(n,s,r),e!==null&&(ei(e,n,r,i),Wl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=on(),r=gr(n),s=Ui(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=pr(n,s,r),e!==null&&(ei(e,n,r,i),Wl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=on(),i=gr(n),r=Ui(t,i);r.tag=2,e!=null&&(r.callback=e),e=pr(n,r,i),e!==null&&(ei(e,n,i,t),Wl(e,n,i))}};function Sm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(t,i)||!va(r,s):!0}function r0(n,e,t){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=hn(e)?Kr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Qs(n,r):Mr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Mm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Yc.enqueueReplaceState(e,e.state,null)}function sd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Dh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=hn(e)?Kr:Qt.current,r.context=Qs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yc.enqueueReplaceState(r,r.state,null),Sc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,e){try{var t="",i=e;do t+=My(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ku(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function od(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var KS=typeof WeakMap=="function"?WeakMap:Map;function s0(n,e,t){t=Ui(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ac||(Ac=!0,gd=i),od(n,e)},t}function o0(n,e,t){t=Ui(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){od(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){od(n,e),typeof i!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Em(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new KS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=cM.bind(null,n,e,t),e.then(n,n))}function Tm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function wm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ui(-1,1),e.tag=2,pr(t,e,1))),t.lanes|=1),n)}var qS=Vi.ReactCurrentOwner,un=!1;function rn(n,e,t,i){e.child=n===null?Uv(e,null,t,i):eo(e,n.child,t,i)}function Am(n,e,t,i,r){t=t.render;var s=e.ref;return Ws(e,r),i=Bh(n,e,t,i,s,r),t=zh(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Bi(n,e,r)):(pt&&t&&Rh(e),e.flags|=1,rn(n,e,i,r),e.child)}function Rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,a0(n,e,s,i,r)):(n=ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:va,t(o,i)&&n.ref===e.ref)return Bi(n,e,r)}return e.flags|=1,n=_r(s,i),n.ref=e.ref,n.return=e,e.child=n}function a0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(va(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Bi(n,e,r)}return ad(n,e,t,i,r)}function l0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ks,Sn),Sn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(ks,Sn),Sn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(ks,Sn),Sn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(ks,Sn),Sn|=i;return rn(n,e,r,t),e.child}function c0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ad(n,e,t,i,r){var s=hn(t)?Kr:Qt.current;return s=Qs(e,s),Ws(e,r),t=Bh(n,e,t,i,s,r),i=zh(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Bi(n,e,r)):(pt&&i&&Rh(e),e.flags|=1,rn(n,e,t,r),e.child)}function Cm(n,e,t,i,r){if(hn(t)){var s=!0;gc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)$l(n,e),r0(e,t,i),sd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=hn(t)?Kr:Qt.current,c=Qs(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mm(e,o,i,c),tr=!1;var d=e.memoizedState;o.state=d,Sc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||tr?(typeof u=="function"&&(rd(e,t,u,i),l=e.memoizedState),(a=tr||Sm(e,t,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ov(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=hn(t)?Kr:Qt.current,l=Qs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Mm(e,o,i,l),tr=!1,d=e.memoizedState,o.state=d,Sc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||dn.current||tr?(typeof p=="function"&&(rd(e,t,p,i),g=e.memoizedState),(c=tr||Sm(e,t,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return ld(n,e,t,i,s,r)}function ld(n,e,t,i,r,s){c0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hm(e,t,!1),Bi(n,e,s);i=e.stateNode,qS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&hm(e,t,!0),e.child}function u0(n){var e=n.stateNode;e.pendingContext?dm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(n,e.context,!1),Uh(n,e.containerInfo)}function bm(n,e,t,i,r){return Js(),bh(r),e.flags|=256,rn(n,e,t,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(n){return{baseLanes:n,cachePool:null,transitions:null}}function f0(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(mt,r&1),n===null)return nd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zc(o,i,0,null),n=Yr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ud(t),e.memoizedState=cd,n):Gh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Yr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ud(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=cd,i}return s=n.child,n=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gh(n,e){return e=Zc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function sl(n,e,t,i){return i!==null&&bh(i),eo(e,n.child,null,t),n=Gh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ZS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ku(Error(ce(422))),sl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,n.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=cd,s);if(!(e.mode&1))return sl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=ku(s,i,void 0),sl(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(n,r),ei(i,n,r,-1))}return Kh(),i=ku(Error(ce(421))),sl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=uM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Tn=hr(r.nextSibling),wn=e,pt=!0,qn=null,n!==null&&(Nn[Dn++]=Li,Nn[Dn++]=Ii,Nn[Dn++]=qr,Li=n.id,Ii=n.overflow,qr=e),e=Gh(e,i.children),e.flags|=4096,e)}function Pm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),id(n.return,e,t)}function Bu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function d0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,t,e);else if(n.tag===19)Pm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Mc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Bu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Mc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Bu(e,!0,t,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Bi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Qr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=_r(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=_r(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QS(n,e,t){switch(e.tag){case 3:u0(e),Js();break;case 5:kv(e);break;case 1:hn(e.type)&&gc(e);break;case 4:Uh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?f0(n,e,t):(lt(mt,mt.current&1),n=Bi(n,e,t),n!==null?n.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return d0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,l0(n,e,t)}return Bi(n,e,t)}var h0,fd,p0,m0;h0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fd=function(){};p0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,jr(pi.current);var s=null;switch(t){case"input":r=Nf(n,r),i=Nf(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Ff(n,r),i=Ff(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=pc)}kf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};m0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Io(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function JS(n,e,t){var i=e.pendingProps;switch(Ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return hn(e.type)&&mc(),Wt(e),null;case 3:return i=e.stateNode,to(),ht(dn),ht(Qt),Oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(il(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(xd(qn),qn=null))),fd(n,e),Wt(e),null;case 5:Fh(e);var r=jr(Ea.current);if(t=e.type,n!==null&&e.stateNode!=null)p0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Wt(e),null}if(n=jr(pi.current),il(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Sa]=s,n=(e.mode&1)!==0,t){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)ft(qo[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Bp(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Hp(i,s),ft("invalid",i)}kf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,n),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(t){case"input":Ya(i),zp(i,s,!0);break;case"textarea":Ya(i),Vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=G_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ui]=e,n[Sa]=i,h0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Bf(t,i),t){case"dialog":ft("cancel",n),ft("close",n),r=i;break;case"iframe":case"object":case"embed":ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)ft(qo[r],n);r=i;break;case"source":ft("error",n),r=i;break;case"img":case"image":case"link":ft("error",n),ft("load",n),r=i;break;case"details":ft("toggle",n),r=i;break;case"input":Bp(n,i),r=Nf(n,i),ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ft("invalid",n);break;case"textarea":Hp(n,i),r=Ff(n,i),ft("invalid",n);break;default:r=i}kf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&W_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&da(n,l):typeof l=="number"&&da(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",n):l!=null&&hh(n,s,l,o))}switch(t){case"input":Ya(n),zp(n,i,!1);break;case"textarea":Ya(n),Vp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Sr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?zs(n,!!i.multiple,s,!1):i.defaultValue!=null&&zs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=pc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(n&&e.stateNode!=null)m0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=jr(Ea.current),jr(pi.current),il(e)){if(i=e.stateNode,t=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==t)&&(n=wn,n!==null))switch(n.tag){case 3:nl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Wt(e),null;case 13:if(ht(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&Tn!==null&&e.mode&1&&!(e.flags&128))Nv(),Js(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ui]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else qn!==null&&(xd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?Pt===0&&(Pt=3):Kh())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return to(),fd(n,e),n===null&&xa(e.stateNode.containerInfo),Wt(e),null;case 10:return Ih(e.type._context),Wt(e),null;case 17:return hn(e.type)&&mc(),Wt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Mc(n),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>io&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(n=Mc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Wt(e),null}else 2*wt()-s.renderingStartTime>io&&t!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=mt.current,lt(mt,i?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return Yh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function eM(n,e){switch(Ch(e),e.tag){case 1:return hn(e.type)&&mc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),ht(dn),ht(Qt),Oh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(ht(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Js()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(mt),null;case 4:return to(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var ol=!1,Kt=!1,tM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Os(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Et(n,e,i)}else t.current=null}function dd(n,e,t){try{t()}catch(i){Et(n,e,i)}}var Lm=!1;function nM(n,e){if(Kf=fc,n=yv(),Ah(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(qf={focusedElem:n,selectionRange:t},fc=!1,xe=e;xe!==null;)if(e=xe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,xe=n;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Yn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Et(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}return g=Lm,Lm=!1,g}function sa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,t,s)}r=r.next}while(r!==i)}}function Kc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function hd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function g0(n){var e=n.alternate;e!==null&&(n.alternate=null,g0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ui],delete e[Sa],delete e[Jf],delete e[kS],delete e[BS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _0(n){return n.tag===5||n.tag===3||n.tag===4}function Im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=pc));else if(i!==4&&(n=n.child,n!==null))for(pd(n,e,t),n=n.sibling;n!==null;)pd(n,e,t),n=n.sibling}function md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(md(n,e,t),n=n.sibling;n!==null;)md(n,e,t),n=n.sibling}var Bt=null,Kn=!1;function ji(n,e,t){for(t=t.child;t!==null;)v0(n,e,t),t=t.sibling}function v0(n,e,t){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Hc,t)}catch{}switch(t.tag){case 5:Kt||Os(t,e);case 6:var i=Bt,r=Kn;Bt=null,ji(n,e,t),Bt=i,Kn=r,Bt!==null&&(Kn?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(Kn?(n=Bt,t=t.stateNode,n.nodeType===8?Iu(n.parentNode,t):n.nodeType===1&&Iu(n,t),ga(n)):Iu(Bt,t.stateNode));break;case 4:i=Bt,r=Kn,Bt=t.stateNode.containerInfo,Kn=!0,ji(n,e,t),Bt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(t,e,o),r=r.next}while(r!==i)}ji(n,e,t);break;case 1:if(!Kt&&(Os(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Et(t,e,a)}ji(n,e,t);break;case 21:ji(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,ji(n,e,t),Kt=i):ji(n,e,t);break;default:ji(n,e,t)}}function Nm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tM),e.forEach(function(i){var r=fM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Kn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Bt===null)throw Error(ce(160));v0(s,o,r),Bt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,n),e=e.sibling}function x0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wn(e,n),ai(n),i&4){try{sa(3,n,n.return),Kc(3,n)}catch(v){Et(n,n.return,v)}try{sa(5,n,n.return)}catch(v){Et(n,n.return,v)}}break;case 1:Wn(e,n),ai(n),i&512&&t!==null&&Os(t,t.return);break;case 5:if(Wn(e,n),ai(n),i&512&&t!==null&&Os(t,t.return),n.flags&32){var r=n.stateNode;try{da(r,"")}catch(v){Et(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&H_(r,s),Bf(a,o);var c=Bf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?X_(r,f):u==="dangerouslySetInnerHTML"?W_(r,f):u==="children"?da(r,f):hh(r,u,f,c)}switch(a){case"input":Df(r,s);break;case"textarea":V_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(v){Et(n,n.return,v)}}break;case 6:if(Wn(e,n),ai(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Et(n,n.return,v)}}break;case 3:if(Wn(e,n),ai(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(v){Et(n,n.return,v)}break;case 4:Wn(e,n),ai(n);break;case 13:Wn(e,n),ai(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xh=wt())),i&4&&Nm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(c=Kt)||u,Wn(e,n),Kt=c):Wn(e,n),ai(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(xe=n,u=n.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:sa(4,d,d.return);break;case 1:Os(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Et(i,t,v)}}break;case 5:Os(d,d.return);break;case 22:if(d.memoizedState!==null){Um(f);continue}}p!==null?(p.return=d,xe=p):Um(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j_("display",o))}catch(v){Et(n,n.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Et(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wn(e,n),ai(n),i&4&&Nm(n);break;case 21:break;default:Wn(e,n),ai(n)}}function ai(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(_0(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Im(n);md(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Im(n);pd(n,a,o);break;default:throw Error(ce(161))}}catch(l){Et(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function iM(n,e,t){xe=n,y0(n)}function y0(n,e,t){for(var i=(n.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=ol;var c=Kt;if(ol=o,(Kt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(r):l!==null?(l.return=o,xe=l):Fm(r);for(;s!==null;)xe=s,y0(s),s=s.sibling;xe=r,ol=a,Kt=c}Dm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Dm(n)}}function Dm(n){for(;xe!==null;){var e=xe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Kt||e.flags&512&&hd(e)}catch(d){Et(e,e.return,d)}}if(e===n){xe=null;break}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}}function Um(n){for(;xe!==null;){var e=xe;if(e===n){xe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,xe=t;break}xe=e.return}}function Fm(n){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Kc(4,e)}catch(l){Et(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{hd(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===n){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var rM=Math.ceil,wc=Vi.ReactCurrentDispatcher,Wh=Vi.ReactCurrentOwner,On=Vi.ReactCurrentBatchConfig,Ze=0,Ut=null,Ct=null,zt=0,Sn=0,ks=wr(0),Pt=0,Ra=null,Qr=0,qc=0,jh=0,oa=null,cn=null,Xh=0,io=1/0,Ci=null,Ac=!1,gd=null,mr=null,al=!1,or=null,Rc=0,aa=0,_d=null,Yl=-1,Kl=0;function on(){return Ze&6?wt():Yl!==-1?Yl:Yl=wt()}function gr(n){return n.mode&1?Ze&2&&zt!==0?zt&-zt:HS.transition!==null?(Kl===0&&(Kl=rv()),Kl):(n=st,n!==0||(n=window.event,n=n===void 0?16:fv(n.type)),n):1}function ei(n,e,t,i){if(50<aa)throw aa=0,_d=null,Error(ce(185));Fa(n,t,i),(!(Ze&2)||n!==Ut)&&(n===Ut&&(!(Ze&2)&&(qc|=t),Pt===4&&ir(n,zt)),pn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(io=wt()+500,Xc&&Ar()))}function pn(n,e){var t=n.callbackNode;Hy(n,e);var i=uc(n,n===Ut?zt:0);if(i===0)t!==null&&jp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jp(t),e===1)n.tag===0?zS(Om.bind(null,n)):Pv(Om.bind(null,n)),FS(function(){!(Ze&6)&&Ar()}),t=null;else{switch(sv(i)){case 1:t=vh;break;case 4:t=nv;break;case 16:t=cc;break;case 536870912:t=iv;break;default:t=cc}t=C0(t,S0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function S0(n,e){if(Yl=-1,Kl=0,Ze&6)throw Error(ce(327));var t=n.callbackNode;if(js()&&n.callbackNode!==t)return null;var i=uc(n,n===Ut?zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Cc(n,i);else{e=i;var r=Ze;Ze|=2;var s=E0();(Ut!==n||zt!==e)&&(Ci=null,io=wt()+500,$r(n,e));do try{aM();break}catch(a){M0(n,a)}while(!0);Lh(),wc.current=s,Ze=r,Ct!==null?e=0:(Ut=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(r=Wf(n),r!==0&&(i=r,e=vd(n,r))),e===1)throw t=Ra,$r(n,0),ir(n,i),pn(n,wt()),t;if(e===6)ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!sM(r)&&(e=Cc(n,i),e===2&&(s=Wf(n),s!==0&&(i=s,e=vd(n,s))),e===1))throw t=Ra,$r(n,0),ir(n,i),pn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:kr(n,cn,Ci);break;case 3:if(ir(n,i),(i&130023424)===i&&(e=Xh+500-wt(),10<e)){if(uc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){on(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Qf(kr.bind(null,n,cn,Ci),e);break}kr(n,cn,Ci);break;case 4:if(ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rM(i/1960))-i,10<i){n.timeoutHandle=Qf(kr.bind(null,n,cn,Ci),i);break}kr(n,cn,Ci);break;case 5:kr(n,cn,Ci);break;default:throw Error(ce(329))}}}return pn(n,wt()),n.callbackNode===t?S0.bind(null,n):null}function vd(n,e){var t=oa;return n.current.memoizedState.isDehydrated&&($r(n,e).flags|=256),n=Cc(n,e),n!==2&&(e=cn,cn=t,e!==null&&xd(e)),n}function xd(n){cn===null?cn=n:cn.push.apply(cn,n)}function sM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(n,e){for(e&=~jh,e&=~qc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jn(e),i=1<<t;n[t]=-1,e&=~i}}function Om(n){if(Ze&6)throw Error(ce(327));js();var e=uc(n,0);if(!(e&1))return pn(n,wt()),null;var t=Cc(n,e);if(n.tag!==0&&t===2){var i=Wf(n);i!==0&&(e=i,t=vd(n,i))}if(t===1)throw t=Ra,$r(n,0),ir(n,e),pn(n,wt()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,kr(n,cn,Ci),pn(n,wt()),null}function $h(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(io=wt()+500,Xc&&Ar())}}function Jr(n){or!==null&&or.tag===0&&!(Ze&6)&&js();var e=Ze;Ze|=1;var t=On.transition,i=st;try{if(On.transition=null,st=1,n)return n()}finally{st=i,On.transition=t,Ze=e,!(Ze&6)&&Ar()}}function Yh(){Sn=ks.current,ht(ks)}function $r(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,US(t)),Ct!==null)for(t=Ct.return;t!==null;){var i=t;switch(Ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mc();break;case 3:to(),ht(dn),ht(Qt),Oh();break;case 5:Fh(i);break;case 4:to();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Ih(i.type._context);break;case 22:case 23:Yh()}t=t.return}if(Ut=n,Ct=n=_r(n.current,null),zt=Sn=e,Pt=0,Ra=null,jh=qc=Qr=0,cn=oa=null,Wr!==null){for(e=0;e<Wr.length;e++)if(t=Wr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Wr=null}return n}function M0(n,e){do{var t=Ct;try{if(Lh(),jl.current=Tc,Ec){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ec=!1}if(Zr=0,Dt=bt=gt=null,ra=!1,Ta=0,Wh.current=null,t===null||t.return===null){Pt=1,Ra=e,Ct=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tm(o);if(p!==null){p.flags&=-257,wm(p,o,a,s,e),p.mode&1&&Em(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Em(s,c,e),Kh();break e}l=Error(ce(426))}}else if(pt&&a.mode&1){var m=Tm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wm(m,o,a,s,e),bh(no(l,a));break e}}s=l=no(l,a),Pt!==4&&(Pt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=s0(s,l,e);_m(s,h);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(mr===null||!mr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=o0(s,a,e);_m(s,y);break e}}s=s.return}while(s!==null)}w0(t)}catch(C){e=C,Ct===t&&t!==null&&(Ct=t=t.return);continue}break}while(!0)}function E0(){var n=wc.current;return wc.current=Tc,n===null?Tc:n}function Kh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(Qr&268435455)&&!(qc&268435455)||ir(Ut,zt)}function Cc(n,e){var t=Ze;Ze|=2;var i=E0();(Ut!==n||zt!==e)&&(Ci=null,$r(n,e));do try{oM();break}catch(r){M0(n,r)}while(!0);if(Lh(),Ze=t,wc.current=i,Ct!==null)throw Error(ce(261));return Ut=null,zt=0,Pt}function oM(){for(;Ct!==null;)T0(Ct)}function aM(){for(;Ct!==null&&!Iy();)T0(Ct)}function T0(n){var e=R0(n.alternate,n,Sn);n.memoizedProps=n.pendingProps,e===null?w0(n):Ct=e,Wh.current=null}function w0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=eM(t,e),t!==null){t.flags&=32767,Ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Ct=null;return}}else if(t=JS(t,e,Sn),t!==null){Ct=t;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=n}while(e!==null);Pt===0&&(Pt=5)}function kr(n,e,t){var i=st,r=On.transition;try{On.transition=null,st=1,lM(n,e,t,i)}finally{On.transition=r,st=i}return null}function lM(n,e,t,i){do js();while(or!==null);if(Ze&6)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Vy(n,s),n===Ut&&(Ct=Ut=null,zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||al||(al=!0,C0(cc,function(){return js(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=st;st=1;var a=Ze;Ze|=4,Wh.current=null,nM(n,t),x0(t,n),CS(qf),fc=!!Kf,qf=Kf=null,n.current=t,iM(t),Ny(),Ze=a,st=o,On.transition=s}else n.current=t;if(al&&(al=!1,or=n,Rc=r),s=n.pendingLanes,s===0&&(mr=null),Fy(t.stateNode),pn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,n=gd,gd=null,n;return Rc&1&&n.tag!==0&&js(),s=n.pendingLanes,s&1?n===_d?aa++:(aa=0,_d=n):aa=0,Ar(),null}function js(){if(or!==null){var n=sv(Rc),e=On.transition,t=st;try{if(On.transition=null,st=16>n?16:n,or===null)var i=!1;else{if(n=or,or=null,Rc=0,Ze&6)throw Error(ce(331));var r=Ze;for(Ze|=4,xe=n.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:sa(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,p=u.return;if(g0(u),u===c){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,xe=h;break e}xe=s.return}}var _=n.current;for(xe=_;xe!==null;){o=xe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,xe=x;else e:for(o=_;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(Ze=r,Ar(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Hc,n)}catch{}i=!0}return i}finally{st=t,On.transition=e}}return!1}function km(n,e,t){e=no(t,e),e=s0(n,e,1),n=pr(n,e,1),e=on(),n!==null&&(Fa(n,1,e),pn(n,e))}function Et(n,e,t){if(n.tag===3)km(n,n,t);else for(;e!==null;){if(e.tag===3){km(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(mr===null||!mr.has(i))){n=no(t,n),n=o0(e,n,1),e=pr(e,n,1),n=on(),e!==null&&(Fa(e,1,n),pn(e,n));break}}e=e.return}}function cM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=on(),n.pingedLanes|=n.suspendedLanes&t,Ut===n&&(zt&t)===t&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>wt()-Xh?$r(n,0):jh|=t),pn(n,e)}function A0(n,e){e===0&&(n.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var t=on();n=ki(n,e),n!==null&&(Fa(n,e,t),pn(n,t))}function uM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),A0(n,t)}function fM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),A0(n,t)}var R0;R0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,QS(n,e,t);un=!!(n.flags&131072)}else un=!1,pt&&e.flags&1048576&&Lv(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$l(n,e),n=e.pendingProps;var r=Qs(e,Qt.current);Ws(e,t),r=Bh(null,e,i,n,r,t);var s=zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dh(e),r.updater=Yc,e.stateNode=r,r._reactInternals=e,sd(e,i,n,t),e=ld(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&Rh(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($l(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hM(i),n=Yn(i,n),r){case 0:e=ad(null,e,i,n,t);break e;case 1:e=Cm(null,e,i,n,t);break e;case 11:e=Am(null,e,i,n,t);break e;case 14:e=Rm(null,e,i,Yn(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ad(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Cm(n,e,i,r,t);case 3:e:{if(u0(e),n===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ov(n,e),Sc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(ce(423)),e),e=bm(n,e,i,t,r);break e}else if(i!==r){r=no(Error(ce(424)),e),e=bm(n,e,i,t,r);break e}else for(Tn=hr(e.stateNode.containerInfo.firstChild),wn=e,pt=!0,qn=null,t=Uv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Js(),i===r){e=Bi(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return kv(e),n===null&&nd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Zf(i,r)?o=null:s!==null&&Zf(i,s)&&(e.flags|=32),c0(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&nd(e),null;case 13:return f0(n,e,t);case 4:return Uh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=eo(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Am(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(xc,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!dn.current){e=Bi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),id(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),id(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,t),r=kn(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Rm(n,e,i,r,t);case 15:return a0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),$l(n,e),e.tag=1,hn(i)?(n=!0,gc(e)):n=!1,Ws(e,t),r0(e,i,r),sd(e,i,r,t),ld(null,e,i,!0,n,t);case 19:return d0(n,e,t);case 22:return l0(n,e,t)}throw Error(ce(156,e.tag))};function C0(n,e){return tv(n,e)}function dM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(n,e,t,i){return new dM(n,e,t,i)}function qh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hM(n){if(typeof n=="function")return qh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===mh)return 11;if(n===gh)return 14}return 2}function _r(n,e){var t=n.alternate;return t===null?(t=Un(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ql(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")qh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Cs:return Yr(t.children,r,s,e);case ph:o=8,r|=8;break;case bf:return n=Un(12,t,e,r|2),n.elementType=bf,n.lanes=s,n;case Pf:return n=Un(13,t,e,r),n.elementType=Pf,n.lanes=s,n;case Lf:return n=Un(19,t,e,r),n.elementType=Lf,n.lanes=s,n;case k_:return Zc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F_:o=10;break e;case O_:o=9;break e;case mh:o=11;break e;case gh:o=14;break e;case er:o=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=Un(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Yr(n,e,t,i){return n=Un(7,n,i,e),n.lanes=t,n}function Zc(n,e,t,i){return n=Un(22,n,i,e),n.elementType=k_,n.lanes=t,n.stateNode={isHidden:!1},n}function zu(n,e,t){return n=Un(6,n,null,e),n.lanes=t,n}function Hu(n,e,t){return e=Un(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function pM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zh(n,e,t,i,r,s,o,a,l){return n=new pM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(s),n}function mM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function b0(n){if(!n)return Mr;n=n._reactInternals;e:{if(is(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(hn(t))return bv(n,t,e)}return e}function P0(n,e,t,i,r,s,o,a,l){return n=Zh(t,i,!0,n,r,s,o,a,l),n.context=b0(null),t=n.current,i=on(),r=gr(t),s=Ui(i,r),s.callback=e??null,pr(t,s,r),n.current.lanes=r,Fa(n,r,i),pn(n,i),n}function Qc(n,e,t,i){var r=e.current,s=on(),o=gr(r);return t=b0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ui(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=pr(r,e,o),n!==null&&(ei(n,r,o,s),Wl(n,r,o)),o}function bc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Qh(n,e){Bm(n,e),(n=n.alternate)&&Bm(n,e)}function gM(){return null}var L0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}Jc.prototype.render=Jh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));Qc(n,e,null,null)};Jc.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Jr(function(){Qc(null,n,null,null)}),e[Oi]=null}};function Jc(n){this._internalRoot=n}Jc.prototype.unstable_scheduleHydration=function(n){if(n){var e=lv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<nr.length&&e!==0&&e<nr[t].priority;t++);nr.splice(t,0,n),t===0&&uv(n)}};function ep(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function _M(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bc(o);s.call(c)}}var o=P0(e,i,n,0,null,!1,!1,"",zm);return n._reactRootContainer=o,n[Oi]=o.current,xa(n.nodeType===8?n.parentNode:n),Jr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=bc(l);a.call(c)}}var l=Zh(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=l,n[Oi]=l.current,xa(n.nodeType===8?n.parentNode:n),Jr(function(){Qc(e,l,t,i)}),l}function tu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bc(o);a.call(l)}}Qc(e,o,n,r)}else o=_M(t,e,n,r,i);return bc(o)}ov=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ko(e.pendingLanes);t!==0&&(xh(e,t|1),pn(e,wt()),!(Ze&6)&&(io=wt()+500,Ar()))}break;case 13:Jr(function(){var i=ki(n,1);if(i!==null){var r=on();ei(i,n,1,r)}}),Qh(n,1)}};yh=function(n){if(n.tag===13){var e=ki(n,134217728);if(e!==null){var t=on();ei(e,n,134217728,t)}Qh(n,134217728)}};av=function(n){if(n.tag===13){var e=gr(n),t=ki(n,e);if(t!==null){var i=on();ei(t,n,e,i)}Qh(n,e)}};lv=function(){return st};cv=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};Hf=function(n,e,t){switch(e){case"input":if(Df(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=jc(i);if(!r)throw Error(ce(90));z_(i),Df(i,r)}}}break;case"textarea":V_(n,t);break;case"select":e=t.value,e!=null&&zs(n,!!t.multiple,e,!1)}};K_=$h;q_=Jr;var vM={usingClientEntryPoint:!1,Events:[ka,Is,jc,$_,Y_,$h]},No={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xM={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=J_(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||gM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Hc=ll.inject(xM),hi=ll}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vM;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ep(e))throw Error(ce(200));return mM(n,e,null,t)};Cn.createRoot=function(n,e){if(!ep(n))throw Error(ce(299));var t=!1,i="",r=L0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zh(n,1,!1,null,null,t,!1,i,r),n[Oi]=e.current,xa(n.nodeType===8?n.parentNode:n),new Jh(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=J_(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return Jr(n)};Cn.hydrate=function(n,e,t){if(!eu(e))throw Error(ce(200));return tu(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!ep(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=L0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=P0(e,null,n,1,t??null,r,!1,s,o),n[Oi]=e.current,xa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Jc(e)};Cn.render=function(n,e,t){if(!eu(e))throw Error(ce(200));return tu(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!eu(n))throw Error(ce(40));return n._reactRootContainer?(Jr(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1};Cn.unstable_batchedUpdates=$h;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!eu(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return tu(n,e,t,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(n){console.error(n)}}I0(),I_.exports=Cn;var N0=I_.exports,D0,Hm=N0;D0=Hm.createRoot,Hm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ca.apply(null,arguments)}var ar;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ar||(ar={}));const Vm="popstate";function yM(n){n===void 0&&(n={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=rs(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),yd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Pc(s))}function i(r,s){nu(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return MM(e,t,i,n)}function _t(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function nu(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SM(){return Math.random().toString(36).substr(2,8)}function Gm(n,e){return{usr:n.state,key:n.key,idx:e}}function yd(n,e,t,i){return t===void 0&&(t=null),Ca({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?rs(e):e,{state:t,key:e&&e.key||i||SM()})}function Pc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function rs(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function MM(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ar.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Ca({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=ar.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:a,location:v.location,delta:h})}function d(m,h){a=ar.Push;let _=yd(v.location,m,h);t&&t(_,m),c=u()+1;let x=Gm(_,c),y=v.createHref(_);try{o.pushState(x,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}s&&l&&l({action:a,location:v.location,delta:1})}function p(m,h){a=ar.Replace;let _=yd(v.location,m,h);t&&t(_,m),c=u();let x=Gm(_,c),y=v.createHref(_);o.replaceState(x,"",y),s&&l&&l({action:a,location:v.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:Pc(m);return _=_.replace(/ $/,"%20"),_t(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let v={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Vm,f),l=m,()=>{r.removeEventListener(Vm,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return o.go(m)}};return v}var Wm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Wm||(Wm={}));function EM(n,e,t){return t===void 0&&(t="/"),TM(n,e,t)}function TM(n,e,t,i){let r=typeof e=="string"?rs(e):e,s=ro(r.pathname||"/",t);if(s==null)return null;let o=U0(n);wM(o);let a=null,l=FM(s);for(let c=0;a==null&&c<o.length;++c)a=DM(o[c],l);return a}function U0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_t(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=vr([i,l.relativePath]),u=t.concat(l);s.children&&s.children.length>0&&(_t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:IM(c,s.index),routesMeta:u})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of F0(s.path))r(s,o,l)}),e}function F0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=F0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function wM(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:NM(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const AM=/^:[\w-]+$/,RM=3,CM=2,bM=1,PM=10,LM=-2,jm=n=>n==="*";function IM(n,e){let t=n.split("/"),i=t.length;return t.some(jm)&&(i+=LM),e&&(i+=CM),t.filter(r=>!jm(r)).reduce((r,s)=>r+(AM.test(s)?RM:s===""?bM:PM),i)}function NM(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function DM(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=Sd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:vr([s,f.pathname]),pathnameBase:HM(vr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=vr([s,f.pathnameBase]))}return o}function Sd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=UM(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let v=a[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[f];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:n}}function UM(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),nu(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function FM(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nu(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function ro(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const OM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kM=n=>OM.test(n);function BM(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?rs(n):n,s;if(t)if(kM(t))s=t;else{if(t.includes("//")){let o=t;t=O0(t),nu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?s=Xm(t.substring(1),"/"):s=Xm(t,e)}else s=e;return{pathname:s,search:VM(i),hash:GM(r)}}function Xm(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Vu(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zM(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function tp(n,e){let t=zM(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function np(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=rs(n):(r=Ca({},n),_t(!r.pathname||!r.pathname.includes("?"),Vu("?","pathname","search",r)),_t(!r.pathname||!r.pathname.includes("#"),Vu("#","pathname","hash",r)),_t(!r.search||!r.search.includes("#"),Vu("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=BM(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const O0=n=>n.replace(/\/\/+/g,"/"),vr=n=>O0(n.join("/")),HM=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),VM=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,GM=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function WM(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const k0=["post","put","patch","delete"];new Set(k0);const jM=["get",...k0];new Set(jM);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ba.apply(null,arguments)}const iu=U.createContext(null),B0=U.createContext(null),Gi=U.createContext(null),ru=U.createContext(null),Rr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),z0=U.createContext(null);function XM(n,e){let{relative:t}=e===void 0?{}:e;xo()||_t(!1);let{basename:i,navigator:r}=U.useContext(Gi),{hash:s,pathname:o,search:a}=su(n,{relative:t}),l=o;return i!=="/"&&(l=o==="/"?i:vr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function xo(){return U.useContext(ru)!=null}function ss(){return xo()||_t(!1),U.useContext(ru).location}function H0(n){U.useContext(Gi).static||U.useLayoutEffect(n)}function V0(){let{isDataRoute:n}=U.useContext(Rr);return n?sE():$M()}function $M(){xo()||_t(!1);let n=U.useContext(iu),{basename:e,future:t,navigator:i}=U.useContext(Gi),{matches:r}=U.useContext(Rr),{pathname:s}=ss(),o=JSON.stringify(tp(r,t.v7_relativeSplatPath)),a=U.useRef(!1);return H0(()=>{a.current=!0}),U.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=np(c,JSON.parse(o),s,u.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:vr([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,o,s,n])}function su(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=U.useContext(Gi),{matches:r}=U.useContext(Rr),{pathname:s}=ss(),o=JSON.stringify(tp(r,i.v7_relativeSplatPath));return U.useMemo(()=>np(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function YM(n,e){return KM(n,e)}function KM(n,e,t,i){xo()||_t(!1);let{navigator:r}=U.useContext(Gi),{matches:s}=U.useContext(Rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ss(),u;if(e){var f;let m=typeof e=="string"?rs(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||_t(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=EM(n,{pathname:p}),v=eE(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&v?U.createElement(ru.Provider,{value:{location:ba({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},v):v}function qM(){let n=rE(),e=WM(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),t?U.createElement("pre",{style:r},t):null,null)}const ZM=U.createElement(qM,null);class QM extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?U.createElement(Rr.Provider,{value:this.props.routeContext},U.createElement(z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JM(n){let{routeContext:e,match:t,children:i}=n,r=U.useContext(iu);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(Rr.Provider,{value:e},i)}function eE(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||_t(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(t&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:p}=t,g=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,d)=>{let p,g=!1,v=null,m=null;t&&(p=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||ZM,l&&(c<0&&d===0?(oE("route-fallback"),g=!0,m=null):c===d&&(g=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,d+1)),_=()=>{let x;return p?x=v:g?x=m:f.route.Component?x=U.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=u,U.createElement(JM,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?U.createElement(QM,{location:t.location,revalidation:t.revalidation,component:v,error:p,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var G0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(G0||{}),W0=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(W0||{});function tE(n){let e=U.useContext(iu);return e||_t(!1),e}function nE(n){let e=U.useContext(B0);return e||_t(!1),e}function iE(n){let e=U.useContext(Rr);return e||_t(!1),e}function j0(n){let e=iE(),t=e.matches[e.matches.length-1];return t.route.id||_t(!1),t.route.id}function rE(){var n;let e=U.useContext(z0),t=nE(),i=j0();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function sE(){let{router:n}=tE(G0.UseNavigateStable),e=j0(W0.UseNavigateStable),t=U.useRef(!1);return H0(()=>{t.current=!0}),U.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,ba({fromRouteId:e},s)))},[n,e])}const $m={};function oE(n,e,t){$m[n]||($m[n]=!0)}function aE(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function lE(n){let{to:e,replace:t,state:i,relative:r}=n;xo()||_t(!1);let{future:s,static:o}=U.useContext(Gi),{matches:a}=U.useContext(Rr),{pathname:l}=ss(),c=V0(),u=np(e,tp(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return U.useEffect(()=>c(JSON.parse(f),{replace:t,state:i,relative:r}),[c,f,r,t,i]),null}function Ai(n){_t(!1)}function cE(n){let{basename:e="/",children:t=null,location:i,navigationType:r=ar.Pop,navigator:s,static:o=!1,future:a}=n;xo()&&_t(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:ba({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=rs(i));let{pathname:u="/",search:f="",hash:d="",state:p=null,key:g="default"}=i,v=U.useMemo(()=>{let m=ro(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:g},navigationType:r}},[l,u,f,d,p,g,r]);return v==null?null:U.createElement(Gi.Provider,{value:c},U.createElement(ru.Provider,{children:t,value:v}))}function uE(n){let{children:e,location:t}=n;return YM(Md(e),t)}new Promise(()=>{});function Md(n,e){e===void 0&&(e=[]);let t=[];return U.Children.forEach(n,(i,r)=>{if(!U.isValidElement(i))return;let s=[...e,r];if(i.type===U.Fragment){t.push.apply(t,Md(i.props.children,s));return}i.type!==Ai&&_t(!1),!i.props.index||!i.props.children||_t(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Md(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Lc.apply(null,arguments)}function X0(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function fE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function dE(n,e){return n.button===0&&(!e||e==="_self")&&!fE(n)}const hE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],pE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],mE="6";try{window.__reactRouterVersion=mE}catch{}const gE=U.createContext({isTransitioning:!1}),_E="startTransition",Ym=cy[_E];function vE(n){let{basename:e,children:t,future:i,window:r}=n,s=U.useRef();s.current==null&&(s.current=yM({window:r,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=U.useCallback(f=>{c&&Ym?Ym(()=>l(f)):l(f)},[l,c]);return U.useLayoutEffect(()=>o.listen(u),[o,u]),U.useEffect(()=>aE(i),[i]),U.createElement(cE,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SE=U.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,d=X0(e,hE),{basename:p}=U.useContext(Gi),g,v=!1;if(typeof c=="string"&&yE.test(c)&&(g=c,xE))try{let x=new URL(window.location.href),y=c.startsWith("//")?new URL(x.protocol+c):new URL(c),C=ro(y.pathname,p);y.origin===x.origin&&C!=null?c=C+y.search+y.hash:v=!0}catch{}let m=XM(c,{relative:r}),h=EE(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function _(x){i&&i(x),x.defaultPrevented||h(x)}return U.createElement("a",Lc({},d,{href:g||m,onClick:v||s?i:_,ref:t,target:l}))}),Gu=U.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:u}=e,f=X0(e,pE),d=su(l,{relative:f.relative}),p=ss(),g=U.useContext(B0),{navigator:v,basename:m}=U.useContext(Gi),h=g!=null&&TE(d)&&c===!0,_=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,x=p.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(x=x.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&m&&(y=ro(y,m)||y);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let A=x===_||!o&&x.startsWith(_)&&x.charAt(C)==="/",T=y!=null&&(y===_||!o&&y.startsWith(_)&&y.charAt(_.length)==="/"),R={isActive:A,isPending:T,isTransitioning:h},M=A?i:void 0,S;typeof s=="function"?S=s(R):S=[s,A?"active":null,T?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(R):a;return U.createElement(SE,Lc({},f,{"aria-current":M,className:S,ref:t,style:b,to:l,viewTransition:c}),typeof u=="function"?u(R):u)});var Ed;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var Km;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function ME(n){let e=U.useContext(iu);return e||_t(!1),e}function EE(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=V0(),c=ss(),u=su(n,{relative:o});return U.useCallback(f=>{if(dE(f,t)){f.preventDefault();let d=i!==void 0?i:Pc(c)===Pc(u);l(n,{replace:d,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,t,n,s,o,a])}function TE(n,e){e===void 0&&(e={});let t=U.useContext(gE);t==null&&_t(!1);let{basename:i}=ME(Ed.useViewTransitionState),r=su(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=ro(t.currentLocation.pathname,i)||t.currentLocation.pathname,o=ro(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Sd(r.pathname,o)!=null||Sd(r.pathname,s)!=null}const wE="_header_whv8k_1",AE="_nav_whv8k_12",RE="_wordmark_whv8k_20",CE="_links_whv8k_32",bE="_link_whv8k_32",PE="_active_whv8k_68",LE="_dropdown_whv8k_76",IE="_submenu_whv8k_80",NE="_submenuLink_whv8k_96",en={header:wE,nav:AE,wordmark:RE,links:CE,link:bE,active:PE,dropdown:LE,submenu:IE,submenuLink:NE},DE=[{to:"/",label:"Home"},{to:"/experience",label:"Experience"}],UE=[{to:"/projects/tractor",label:"Self-Driving Tractor"},{to:"/projects/capstone",label:"Capstone"},{to:"/projects/woodworking",label:"Woodworking & CNC"},{to:"/projects/code",label:"Code"},{to:"/projects/other",label:"Other Projects"}];function FE(){const[n,e]=U.useState(!1),t=U.useRef(null),i=ss(),r=i.pathname.startsWith("/projects");return U.useEffect(()=>{e(!1)},[i.pathname]),U.useEffect(()=>{if(!n)return;function s(a){t.current&&!t.current.contains(a.target)&&e(!1)}function o(a){a.key==="Escape"&&e(!1)}return document.addEventListener("mousedown",s),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",o)}},[n]),k.jsx("header",{className:en.header,children:k.jsxs("nav",{className:en.nav,children:[k.jsx(Gu,{to:"/",className:en.wordmark,children:"Thomas Fieguth"}),k.jsxs("ul",{className:en.links,children:[DE.map(({to:s,label:o})=>k.jsx("li",{children:k.jsx(Gu,{to:s,end:s==="/",className:({isActive:a})=>a?`${en.link} ${en.active}`:en.link,children:o})},s)),k.jsxs("li",{className:en.dropdown,ref:t,children:[k.jsx("button",{type:"button",className:r?`${en.link} ${en.active}`:en.link,"aria-haspopup":"true","aria-expanded":n,onClick:()=>e(s=>!s),children:"Projects"}),n&&k.jsx("ul",{className:en.submenu,children:UE.map(({to:s,label:o})=>k.jsx("li",{children:k.jsx(Gu,{to:s,className:({isActive:a})=>a?`${en.submenuLink} ${en.active}`:en.submenuLink,children:o})},s))})]})]})]})})}const OE="_footer_17944_1",kE="_inner_17944_7",BE="_name_17944_16",zE="_links_17944_22",HE="_link_17944_22",Cr={footer:OE,inner:kE,name:BE,links:zE,link:HE};function VE(){return k.jsx("footer",{className:Cr.footer,children:k.jsxs("div",{className:Cr.inner,children:[k.jsx("span",{className:Cr.name,children:"Thomas Fieguth"}),k.jsxs("div",{className:Cr.links,children:[k.jsx("a",{href:"mailto:thomas.fieguth@gmail.com",className:Cr.link,children:"Email"}),k.jsx("a",{href:"https://www.linkedin.com/in/thomas-fieguth-59b19427b/",target:"_blank",rel:"noopener noreferrer",className:Cr.link,children:"LinkedIn"}),k.jsx("a",{href:"https://github.com/thomasfieguth",target:"_blank",rel:"noopener noreferrer",className:Cr.link,children:"GitHub"})]})]})})}const GE="_page_j5dzo_1",WE={page:GE};function jE(){return k.jsx("div",{className:WE.page,children:k.jsx("p",{className:"text-secondary",children:"Home — placeholder"})})}const XE="_page_j5dzo_1",$E={page:XE};function YE(){return k.jsx("div",{className:$E.page,children:k.jsx("p",{className:"text-secondary",children:"Experience — placeholder"})})}const KE=[{id:"tractor-overview",title:"System Overview",date:"Date TBD",description:"Placeholder — describe the self-driving tractor system. What problem does it solve, and how do sensors, path planner, and onboard app fit together?",skills:["Robotics","Autonomous Navigation","Systems Design"],media:[{type:"photoProgression",steps:[{label:"Iteration 1",image:"/assets/images/projects/tractor/full_1.svg"},{label:"Iteration 5",image:"/assets/images/projects/tractor/full_5.svg"}],row:0,width:.6,height:.4},{type:"photo",src:"/assets/images/projects/tractor/zoom_5.svg",alt:"Detail view of the generated tractor coverage path",row:0,width:.4,height:.4}]},{id:"tractor-onboard-app",title:"Onboard App",date:"Date TBD",description:"Placeholder — describe the onboard app. What does the operator interact with, and what does it display or control while the tractor runs?",skills:["Application Development","UI Design"],media:[]},{id:"tractor-ekf",title:"EKF Troubleshooting",date:"Date TBD",description:"Placeholder — describe the EKF (Extended Kalman Filter) troubleshooting. What state estimation problem came up, how was it diagnosed, and what do these path-tracking plots show?",skills:["State Estimation","Kalman Filtering","Sensor Fusion","Python"],media:[{type:"photo",src:"/assets/images/projects/tractor/path_full1.png",alt:"Full tractor path tracking result",row:0,width:.5,height:.4},{type:"photo",src:"/assets/images/projects/tractor/path_zoom1.png",alt:"Zoomed-in tractor path tracking detail",row:0,width:.5,height:.4}]}];function qE(){const n=U.useRef(null),[e,t]=U.useState(0);return U.useEffect(()=>{const i=n.current;if(!i)return;const r=new ResizeObserver(s=>{for(const o of s)t(o.contentRect.width)});return r.observe(i),()=>r.disconnect()},[]),[n,e]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="167",ZE=0,qm=1,QE=2,$0=1,JE=2,Ri=3,zi=0,mn=1,Mn=2,xr=0,Xs=1,Zm=2,Qm=3,Jm=4,eT=5,Hr=100,tT=101,nT=102,iT=103,rT=104,sT=200,oT=201,aT=202,lT=203,Td=204,wd=205,cT=206,uT=207,fT=208,dT=209,hT=210,pT=211,mT=212,gT=213,_T=214,vT=0,xT=1,yT=2,Ic=3,ST=4,MT=5,ET=6,TT=7,rp=0,wT=1,AT=2,yr=0,RT=1,CT=2,bT=3,Y0=4,PT=5,LT=6,IT=7,eg="attached",NT="detached",K0=300,so=301,oo=302,Ad=303,Rd=304,ou=306,ao=1e3,lr=1001,Nc=1002,sn=1003,q0=1004,Zo=1005,En=1006,Zl=1007,Ni=1008,Hi=1009,Z0=1010,Q0=1011,Pa=1012,sp=1013,es=1014,Qn=1015,za=1016,op=1017,ap=1018,lo=1020,J0=35902,ex=1021,tx=1022,Fn=1023,nx=1024,ix=1025,$s=1026,co=1027,lp=1028,cp=1029,rx=1030,up=1031,fp=1033,Ql=33776,Jl=33777,ec=33778,tc=33779,Cd=35840,bd=35841,Pd=35842,Ld=35843,Id=36196,Nd=37492,Dd=37496,Ud=37808,Fd=37809,Od=37810,kd=37811,Bd=37812,zd=37813,Hd=37814,Vd=37815,Gd=37816,Wd=37817,jd=37818,Xd=37819,$d=37820,Yd=37821,nc=36492,Kd=36494,qd=36495,sx=36283,Zd=36284,Qd=36285,Jd=36286,La=2300,Ia=2301,Wu=2302,tg=2400,ng=2401,ig=2402,DT=2500,UT=0,ox=1,eh=2,FT=3200,OT=3201,dp=0,kT=1,rr="",Yt="srgb",Vt="srgb-linear",hp="display-p3",au="display-p3-linear",Dc="linear",dt="srgb",Uc="rec709",Fc="p3",cs=7680,rg=519,BT=512,zT=513,HT=514,ax=515,VT=516,GT=517,WT=518,jT=519,th=35044,sg="300 es",Di=2e3,Oc=2001;class yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let og=1234567;const la=Math.PI/180,uo=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function pp(n,e){return(n%e+e)%e}function XT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function $T(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function YT(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function KT(n,e=1){return e-Math.abs(pp(n,e*2)-e)}function qT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ZT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function QT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JT(n,e){return n+Math.random()*(e-n)}function ew(n){return n*(.5-Math.random())}function tw(n){n!==void 0&&(og=n);let e=og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nw(n){return n*la}function iw(n){return n*uo}function rw(n){return(n&n-1)===0&&n!==0}function sw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ow(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aw(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mp={DEG2RAD:la,RAD2DEG:uo,generateUUID:ti,clamp:qt,euclideanModulo:pp,mapLinear:XT,inverseLerp:$T,lerp:ca,damp:YT,pingpong:KT,smoothstep:qT,smootherstep:ZT,randInt:QT,randFloat:JT,randFloatSpread:ew,seededRandom:tw,degToRad:nw,radToDeg:iw,isPowerOfTwo:rw,ceilPowerOfTwo:sw,floorPowerOfTwo:ow,setQuaternionFromProperEuler:aw,normalize:it,denormalize:Zn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],x=r[4],y=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*m+a*x+l*A,s[6]=o*h+a*y+l*T,s[1]=c*v+u*_+f*C,s[4]=c*m+u*x+f*A,s[7]=c*h+u*y+f*T,s[2]=d*v+p*_+g*C,s[5]=d*m+p*x+g*A,s[8]=d*h+p*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ju.makeScale(e,t)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Ve;function lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lw(){const n=Na("canvas");return n.style.display="block",n}const ag={};function Ys(n){n in ag||(ag[n]=!0,console.warn(n))}function cw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const lg=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cg=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Vt]:{transfer:Dc,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:dt,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[au]:{transfer:Dc,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(cg),fromReference:n=>n.applyMatrix3(lg)},[hp]:{transfer:dt,primaries:Fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(cg),fromReference:n=>n.applyMatrix3(lg).convertLinearToSRGB()}},uw=new Set([Vt,au]),Qe={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!uw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Do[e].toReference,r=Do[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Do[n].primaries},getTransfer:function(n){return n===rr?Dc:Do[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Do[e].luminanceCoefficients)}};function Ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class fw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Na("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ks(t[i]/255)*255):t[i]=Ks(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dw=0;class cx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $u(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hw=0;class Ft extends yo{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=lr,r=lr,s=En,o=Ni,a=Fn,l=Hi,c=Ft.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=ti(),this.name="",this.source=new cx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=K0;Ft.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(h+1)/2,A=(u+d)/4,T=(f+v)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pw extends yo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends pw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ux extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mw extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,_=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,h*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*_;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new F,ug=new ni;class zn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ul.subVectors(this.max,Uo),fs.subVectors(e.a,Uo),ds.subVectors(e.b,Uo),hs.subVectors(e.c,Uo),Xi.subVectors(ds,fs),$i.subVectors(hs,ds),br.subVectors(fs,hs);let t=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-br.z,br.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,br.z,0,-br.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-br.y,br.x,0];return!Ku(t,fs,ds,hs,ul)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,fs,ds,hs,ul))?!1:(fl.crossVectors(Xi,$i),t=[fl.x,fl.y,fl.z],Ku(t,fs,ds,hs,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,cl=new zn,fs=new F,ds=new F,hs=new F,Xi=new F,$i=new F,br=new F,Uo=new F,ul=new F,fl=new F,Pr=new F;function Ku(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pr.fromArray(n,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gw=new zn,Fo=new F,qu=new F;class mi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(qu)),this.expandByPoint(Fo.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new F,Zu=new F,dl=new F,Yi=new F,Qu=new F,hl=new F,Ju=new F;class lu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Zu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=Yi.dot(this.direction),l=-Yi.dot(dl),c=Yi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zu).addScaledVector(dl,d),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Qu.subVectors(t,e),hl.subVectors(i,e),Ju.crossVectors(Qu,hl);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(hl.crossVectors(Yi,hl));if(l<0)return null;const c=a*this.direction.dot(Qu.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Ju);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_w,e,vw)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ki.crossVectors(i,xn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ki.crossVectors(i,xn)),Ki.normalize(),pl.crossVectors(xn,Ki),r[0]=Ki.x,r[4]=pl.x,r[8]=xn.x,r[1]=Ki.y,r[5]=pl.y,r[9]=xn.y,r[2]=Ki.z,r[6]=pl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],x=i[7],y=i[11],C=i[15],A=r[0],T=r[4],R=r[8],M=r[12],S=r[1],b=r[5],G=r[9],H=r[13],K=r[2],ee=r[6],j=r[10],te=r[14],N=r[3],Q=r[7],ne=r[11],ue=r[15];return s[0]=o*A+a*S+l*K+c*N,s[4]=o*T+a*b+l*ee+c*Q,s[8]=o*R+a*G+l*j+c*ne,s[12]=o*M+a*H+l*te+c*ue,s[1]=u*A+f*S+d*K+p*N,s[5]=u*T+f*b+d*ee+p*Q,s[9]=u*R+f*G+d*j+p*ne,s[13]=u*M+f*H+d*te+p*ue,s[2]=g*A+v*S+m*K+h*N,s[6]=g*T+v*b+m*ee+h*Q,s[10]=g*R+v*G+m*j+h*ne,s[14]=g*M+v*H+m*te+h*ue,s[3]=_*A+x*S+y*K+C*N,s[7]=_*T+x*b+y*ee+C*Q,s[11]=_*R+x*G+y*j+C*ne,s[15]=_*M+x*H+y*te+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,x=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,C=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,A=t*_+i*x+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(g*f*s-u*v*s-g*i*p+t*v*p+u*i*h-t*f*h)*T,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*T,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,_=l*c,x=l*u,y=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(v+h))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-_)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/s,u=1/o,f=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Di){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Di)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Di){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,v;if(a===Di)g=(o+s)*f,v=-2*f;else if(a===Oc)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new F,Xn=new Ge,_w=new F(0,0,0),vw=new F(1,1,1),Ki=new F,pl=new F,xn=new F,fg=new Ge,dg=new ni;class Rn{constructor(e=0,t=0,i=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const hg=new F,ms=new ni,Si=new Ge,ml=new F,Oo=new F,yw=new F,Sw=new ni,pg=new F(1,0,0),mg=new F(0,1,0),gg=new F(0,0,1),_g={type:"added"},Mw={type:"removed"},gs={type:"childadded",child:null},ef={type:"childremoved",child:null};class vt extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new F,t=new Rn,i=new ni,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ve}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,t){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ml.copy(e):ml.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Oo,ml,this.up):Si.lookAt(ml,Oo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Si),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mw),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,yw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new F(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new F,Mi=new F,tf=new F,Ei=new F,_s=new F,vs=new F,vg=new F,nf=new F,rf=new F,sf=new F;class fi{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Mi.subVectors(i,t),tf.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Mi),l=$n.dot(tf),c=Mi.dot(Mi),u=Mi.dot(tf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Mi.subVectors(e,t),$n.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),nf.subVectors(e,i);const l=_s.dot(nf),c=vs.dot(nf);if(l<=0&&c<=0)return t.copy(i);rf.subVectors(e,r);const u=_s.dot(rf),f=vs.dot(rf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);sf.subVectors(e,s);const p=_s.dot(sf),g=vs.dot(sf);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(vs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return vg.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(vg,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},gl={h:0,s:0,l:0};function of(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=pp(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=dx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Qe.fromWorkingColorSpace(Xt.copy(this),e),Math.round(qt(Xt.r*255,0,255))*65536+Math.round(qt(Xt.g*255,0,255))*256+Math.round(qt(Xt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Yt){Qe.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(gl);const i=ca(qi.h,gl.h,t),r=ca(qi.s,gl.s,t),s=ca(qi.l,gl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Pe;Pe.NAMES=dx;let Ew=0;class ii extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Xs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=wd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ic&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Xr extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new F,_l=new Xe;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ys("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class hx extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class px extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tw=0;const Ln=new Ge,af=new vt,xs=new F,yn=new zn,ko=new zn,Nt=new F;class Hn extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?px:hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(yn.min,ko.min),yn.expandByPoint(Nt),Nt.addVectors(yn.max,ko.max),yn.expandByPoint(Nt)):(yn.expandByPoint(ko.min),yn.expandByPoint(ko.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Nt.add(xs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,f=new F,d=new Xe,p=new Xe,g=new Xe,v=new F,m=new F;function h(R,M,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),a[R].add(v),a[M].add(v),a[S].add(v),l[R].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,M=_.length;R<M;++R){const S=_[R],b=S.start,G=S.count;for(let H=b,K=b+G;H<K;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new F,y=new F,C=new F,A=new F;function T(R){C.fromBufferAttribute(r,R),A.copy(C);const M=a[R];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(A,M);const b=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,b)}for(let R=0,M=_.length;R<M;++R){const S=_[R],b=S.start,G=S.count;for(let H=b,K=b+G;H<K;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Ot(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new Ge,Lr=new lu,vl=new mi,yg=new F,ys=new F,Ss=new F,Ms=new F,lf=new F,xl=new F,yl=new Xe,Sl=new Xe,Ml=new Xe,Sg=new F,Mg=new F,Eg=new F,El=new F,Tl=new F;class fn extends vt{constructor(e=new Hn,t=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(lf.fromBufferAttribute(f,e),o?xl.addScaledVector(lf,u):xl.addScaledVector(lf.sub(t),u))}t.add(xl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(vl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(vl,yg)===null||Lr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(xg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const A=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);r=wl(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=wl(this,o,e,i,c,u,f,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const A=y,T=y+1,R=y+2;r=wl(this,h,e,i,c,u,f,A,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,x=m+1,y=m+2;r=wl(this,o,e,i,c,u,f,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ww(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:n}}function wl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ys),n.getVertexPosition(l,Ss),n.getVertexPosition(c,Ms);const u=ww(n,e,t,i,ys,Ss,Ms,El);if(u){r&&(yl.fromBufferAttribute(r,a),Sl.fromBufferAttribute(r,l),Ml.fromBufferAttribute(r,c),u.uv=fi.getInterpolation(El,ys,Ss,Ms,yl,Sl,Ml,new Xe)),s&&(yl.fromBufferAttribute(s,a),Sl.fromBufferAttribute(s,l),Ml.fromBufferAttribute(s,c),u.uv1=fi.getInterpolation(El,ys,Ss,Ms,yl,Sl,Ml,new Xe)),o&&(Sg.fromBufferAttribute(o,a),Mg.fromBufferAttribute(o,l),Eg.fromBufferAttribute(o,c),u.normal=fi.getInterpolation(El,ys,Ss,Ms,Sg,Mg,Eg,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};fi.getNormal(ys,Ss,Ms,f.normal),u.face=f}return u}class Ha extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function g(v,m,h,_,x,y,C,A,T,R,M){const S=y/T,b=C/R,G=y/2,H=C/2,K=A/2,ee=T+1,j=R+1;let te=0,N=0;const Q=new F;for(let ne=0;ne<j;ne++){const ue=ne*b-H;for(let Se=0;Se<ee;Se++){const Be=Se*S-G;Q[v]=Be*_,Q[m]=ue*x,Q[h]=K,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[h]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Se/T),f.push(1-ne/R),te+=1}}for(let ne=0;ne<R;ne++)for(let ue=0;ue<T;ue++){const Se=d+ue+ee*ne,Be=d+ue+ee*(ne+1),Y=d+(ue+1)+ee*(ne+1),ae=d+(ue+1)+ee*ne;l.push(Se,Be,ae),l.push(Be,Y,ae),N+=6}a.addGroup(p,N,M),p+=N,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=fo(n[t]);for(const r in i)e[r]=i[r]}return e}function Aw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Rw={clone:fo,merge:nn};var Cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cw,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gx extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new F,Tg=new Xe,wg=new Xe;class Zt extends gx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Tg,wg),t.subVectors(wg,Tg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Pw extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Es,Ts,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Es,Ts,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Es,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Es,Ts,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _x extends Ft{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lw extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _x(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ha(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:xr});s.uniforms.tEquirect.value=t;const o=new fn(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=En),new Pw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cf=new F,Iw=new F,Nw=new Ve;class Br{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cf.subVectors(i,t).cross(Iw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nw.getNormalMatrix(e),r=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new mi,Al=new F;class gp{constructor(e=new Br,t=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+_).normalize(),i[3].setComponents(l-o,d-u,m-g,y-_).normalize(),i[4].setComponents(l-a,d-f,m-v,y-x).normalize(),t===Di)i[5].setComponents(l+a,d+f,m+v,y+x).normalize();else if(t===Oc)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Al.x=r.normal.x>0?e.max.x:e.min.x,Al.y=r.normal.y>0?e.max.y:e.min.y,Al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cu extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const _=h*d-o;for(let x=0;x<c;x++){const y=x*f-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const x=_+c*h,y=_+c*(h+1),C=_+1+c*(h+1),A=_+1+c*h;p.push(x,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ow=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ww=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$w=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fA="gl_FragColor = linearToOutputTexel( gl_FragColor );",dA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Uw,alphahash_pars_fragment:Fw,alphamap_fragment:Ow,alphamap_pars_fragment:kw,alphatest_fragment:Bw,alphatest_pars_fragment:zw,aomap_fragment:Hw,aomap_pars_fragment:Vw,batching_pars_vertex:Gw,batching_vertex:Ww,begin_vertex:jw,beginnormal_vertex:Xw,bsdfs:$w,iridescence_fragment:Yw,bumpmap_pars_fragment:Kw,clipping_planes_fragment:qw,clipping_planes_pars_fragment:Zw,clipping_planes_pars_vertex:Qw,clipping_planes_vertex:Jw,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:oA,displacementmap_pars_vertex:aA,displacementmap_vertex:lA,emissivemap_fragment:cA,emissivemap_pars_fragment:uA,colorspace_fragment:fA,colorspace_pars_fragment:dA,envmap_fragment:hA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:RA,envmap_vertex:_A,fog_vertex:vA,fog_pars_vertex:xA,fog_fragment:yA,fog_pars_fragment:SA,gradientmap_pars_fragment:MA,lightmap_pars_fragment:EA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:wA,lights_pars_begin:AA,lights_toon_fragment:CA,lights_toon_pars_fragment:bA,lights_phong_fragment:PA,lights_phong_pars_fragment:LA,lights_physical_fragment:IA,lights_physical_pars_fragment:NA,lights_fragment_begin:DA,lights_fragment_maps:UA,lights_fragment_end:FA,logdepthbuf_fragment:OA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:zA,map_fragment:HA,map_pars_fragment:VA,map_particle_fragment:GA,map_particle_pars_fragment:WA,metalnessmap_fragment:jA,metalnessmap_pars_fragment:XA,morphinstance_vertex:$A,morphcolor_vertex:YA,morphnormal_vertex:KA,morphtarget_pars_vertex:qA,morphtarget_vertex:ZA,normal_fragment_begin:QA,normal_fragment_maps:JA,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:u1,project_vertex:f1,dithering_fragment:d1,dithering_pars_fragment:h1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:_1,shadowmap_vertex:v1,shadowmask_pars_fragment:x1,skinbase_vertex:y1,skinning_pars_vertex:S1,skinning_vertex:M1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:w1,tonemapping_fragment:A1,tonemapping_pars_fragment:R1,transmission_fragment:C1,transmission_pars_fragment:b1,uv_pars_fragment:P1,uv_pars_vertex:L1,uv_vertex:I1,worldpos_vertex:N1,background_vert:D1,background_frag:U1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:k1,cube_frag:B1,depth_vert:z1,depth_frag:H1,distanceRGBA_vert:V1,distanceRGBA_frag:G1,equirect_vert:W1,equirect_frag:j1,linedashed_vert:X1,linedashed_frag:$1,meshbasic_vert:Y1,meshbasic_frag:K1,meshlambert_vert:q1,meshlambert_frag:Z1,meshmatcap_vert:Q1,meshmatcap_frag:J1,meshnormal_vert:eR,meshnormal_frag:tR,meshphong_vert:nR,meshphong_frag:iR,meshphysical_vert:rR,meshphysical_frag:sR,meshtoon_vert:oR,meshtoon_frag:aR,points_vert:lR,points_frag:cR,shadow_vert:uR,shadow_frag:fR,sprite_vert:dR,sprite_frag:hR},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ci={basic:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:nn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:nn([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ci.physical={uniforms:nn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Rl={r:0,b:0,g:0},Nr=new Rn,pR=new Ge;function mR(n,e,t,i,r,s,o){const a=new Pe(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const y=g(_);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===ou)?(u===void 0&&(u=new fn(new Ha(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:fo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nr.copy(x.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pR.makeRotationFromEuler(Nr)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==dt,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fn(new cu(2,2),new Er({name:"BackgroundMaterial",uniforms:fo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,x){_.getRGB(Rl,mx(n)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:v,addToRenderList:m}}function gR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,b,G,H,K){let ee=!1;const j=f(H,G,b);s!==j&&(s=j,c(s.object)),ee=p(S,H,G,K),ee&&g(S,H,G,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(S,b,G,H),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,b,G){const H=G.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let ee=K[b.id];ee===void 0&&(ee={},K[b.id]=ee);let j=ee[H];return j===void 0&&(j=d(l()),ee[H]=j),j}function d(S){const b=[],G=[],H=[];for(let K=0;K<t;K++)b[K]=0,G[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,b,G,H){const K=s.attributes,ee=b.attributes;let j=0;const te=G.getAttributes();for(const N in te)if(te[N].location>=0){const ne=K[N];let ue=ee[N];if(ue===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function g(S,b,G,H){const K={},ee=b.attributes;let j=0;const te=G.getAttributes();for(const N in te)if(te[N].location>=0){let ne=ee[N];ne===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),K[N]=ue,j++}s.attributes=K,s.attributesNum=j,s.index=H}function v(){const S=s.newAttributes;for(let b=0,G=S.length;b<G;b++)S[b]=0}function m(S){h(S,0)}function h(S,b){const G=s.newAttributes,H=s.enabledAttributes,K=s.attributeDivisors;G[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),K[S]!==b&&(n.vertexAttribDivisor(S,b),K[S]=b)}function _(){const S=s.newAttributes,b=s.enabledAttributes;for(let G=0,H=b.length;G<H;G++)b[G]!==S[G]&&(n.disableVertexAttribArray(G),b[G]=0)}function x(S,b,G,H,K,ee,j){j===!0?n.vertexAttribIPointer(S,b,G,K,ee):n.vertexAttribPointer(S,b,G,H,K,ee)}function y(S,b,G,H){v();const K=H.attributes,ee=G.getAttributes(),j=b.defaultAttributeValues;for(const te in ee){const N=ee[te];if(N.location>=0){let Q=K[te];if(Q===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const ne=Q.normalized,ue=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;const Be=Se.buffer,Y=Se.type,ae=Se.bytesPerElement,ge=Y===n.INT||Y===n.UNSIGNED_INT||Q.gpuType===sp;if(Q.isInterleavedBufferAttribute){const _e=Q.data,Fe=_e.stride,ke=Q.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)h(N.location+ze,_e.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<N.locationSize;ze++)m(N.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ze=0;ze<N.locationSize;ze++)x(N.location+ze,ue/N.locationSize,Y,ne,Fe*ae,(ke+ue/N.locationSize*ze)*ae,ge)}else{if(Q.isInstancedBufferAttribute){for(let _e=0;_e<N.locationSize;_e++)h(N.location+_e,Q.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<N.locationSize;_e++)m(N.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let _e=0;_e<N.locationSize;_e++)x(N.location+_e,ue/N.locationSize,Y,ne,ue*ae,ue/N.locationSize*_e*ae,ge)}}else if(j!==void 0){const ne=j[te];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(N.location,ne);break;case 3:n.vertexAttrib3fv(N.location,ne);break;case 4:n.vertexAttrib4fv(N.location,ne);break;default:n.vertexAttrib1fv(N.location,ne)}}}}_()}function C(){R();for(const S in i){const b=i[S];for(const G in b){const H=b[G];for(const K in H)u(H[K].object),delete H[K];delete b[G]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const G in b){const H=b[G];for(const K in H)u(H[K].object),delete H[K];delete b[G]}delete i[S.id]}function T(S){for(const b in i){const G=i[b];if(G[S.id]===void 0)continue;const H=G[S.id];for(const K in H)u(H[K].object),delete H[K];delete G[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function _R(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!T)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function xR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Br,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let y=h.clippingState||null;l.value=y,y=u(g,d,x,p);for(let C=0;C!==x;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yR(n){let e=new WeakMap;function t(o,a){return a===Ad?o.mapping=so:a===Rd&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ad||a===Rd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _p extends gx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Ag=[.125,.215,.35,.446,.526,.582],Vr=20,uf=new _p,Rg=new Pe;let ff=null,df=0,hf=0,pf=!1;const zr=(1+Math.sqrt(5))/2,ws=1/zr,Cg=[new F(-zr,ws,0),new F(zr,ws,0),new F(-ws,0,zr),new F(ws,0,zr),new F(0,zr,-ws),new F(0,zr,ws),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),this._renderer.xr.enabled=pf,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:za,format:Fn,colorSpace:Vt,depthBuffer:!1},r=Pg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SR(s)),this._blurMaterial=MR(s,e,t)}return r}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,uf)}_sceneToCubeUV(e,t,i,r){const a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rg),u.toneMapping=yr,u.autoClear=!1;const p=new Xr({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new fn(new Ha,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Rg),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;Cl(r,_*x,h>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cg[(r-s-1)%Cg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const h=[];let _=0;for(let T=0;T<Vr;++T){const R=T/v,M=Math.exp(-R*R/2);h.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Bs?r-x+Bs:0),A=4*(this._cubeSize-y);Cl(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(f,uf)}}function SR(n){const e=[],t=[],i=[];let r=n;const s=n-Bs+1+Ag.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Bs?l=Ag[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(M,v*g*A),x.set(d,m*g*A);const S=[A,A,A,A,A,A];y.set(S,h*g*A)}const C=new Hn;C.setAttribute("position",new Ot(_,v)),C.setAttribute("uv",new Ot(x,m)),C.setAttribute("faceIndex",new Ot(y,h)),e.push(C),r>Bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pg(n,e,t){const i=new ts(n,e,t);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function MR(n,e,t){const i=new Float32Array(Vr),r=new F(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Lg(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Ig(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ER(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ad||l===Rd,u=l===so||l===oo;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bg(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new bg(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function TR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wR(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const C=_[x+0],A=_[x+1],T=_[x+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const C=x+0,A=x+1,T=x+2;d.push(C,A,A,T,T,C)}}else return;const m=new(lx(d)?px:hx)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function AR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_];for(let _=0;_<v.length;_++)t.update(h,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function RR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CR(n,e,t){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),R=new ux(T,C,A,f);R.type=Qn,R.needsUpdate=!0;const M=y*4;for(let b=0;b<f;b++){const G=h[b],H=_[b],K=x[b],ee=C*A*4*b;for(let j=0;j<G.count;j++){const te=j*M;g===!0&&(r.fromBufferAttribute(G,j),T[ee+te+0]=r.x,T[ee+te+1]=r.y,T[ee+te+2]=r.z,T[ee+te+3]=0),v===!0&&(r.fromBufferAttribute(H,j),T[ee+te+4]=r.x,T[ee+te+5]=r.y,T[ee+te+6]=r.z,T[ee+te+7]=0),m===!0&&(r.fromBufferAttribute(K,j),T[ee+te+8]=r.x,T[ee+te+9]=r.y,T[ee+te+10]=r.z,T[ee+te+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Xe(C,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function bR(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class xx extends Ft{constructor(e,t,i,r,s,o,a,l,c,u=$s){if(u!==$s&&u!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=es),i===void 0&&u===co&&(i=lo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yx=new Ft,Ng=new xx(1,1),Sx=new ux,Mx=new mw,Ex=new _x,Dg=[],Ug=[],Fg=new Float32Array(16),Og=new Float32Array(9),kg=new Float32Array(4);function So(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dg[r];if(s===void 0&&(s=new Float32Array(r),Dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uu(n,e){let t=Ug[e];t===void 0&&(t=new Int32Array(e),Ug[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function NR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function DR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;kg.set(i),n.uniformMatrix2fv(this.addr,!1,kg),It(t,i)}}function UR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Og.set(i),n.uniformMatrix3fv(this.addr,!1,Og),It(t,i)}}function FR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Fg.set(i),n.uniformMatrix4fv(this.addr,!1,Fg),It(t,i)}}function OR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function HR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function GR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function WR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function jR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ng.compareFunction=ax,s=Ng):s=yx,t.setTexture2D(e||s,r)}function XR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mx,r)}function $R(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ex,r)}function YR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sx,r)}function KR(n){switch(n){case 5126:return PR;case 35664:return LR;case 35665:return IR;case 35666:return NR;case 35674:return DR;case 35675:return UR;case 35676:return FR;case 5124:case 35670:return OR;case 35667:case 35671:return kR;case 35668:case 35672:return BR;case 35669:case 35673:return zR;case 5125:return HR;case 36294:return VR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return YR}}function qR(n,e){n.uniform1fv(this.addr,e)}function ZR(n,e){const t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function QR(n,e){const t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function JR(n,e){const t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function eC(n,e){const t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tC(n,e){const t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nC(n,e){const t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iC(n,e){n.uniform1iv(this.addr,e)}function rC(n,e){n.uniform2iv(this.addr,e)}function sC(n,e){n.uniform3iv(this.addr,e)}function oC(n,e){n.uniform4iv(this.addr,e)}function aC(n,e){n.uniform1uiv(this.addr,e)}function lC(n,e){n.uniform2uiv(this.addr,e)}function cC(n,e){n.uniform3uiv(this.addr,e)}function uC(n,e){n.uniform4uiv(this.addr,e)}function fC(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yx,s[o])}function dC(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mx,s[o])}function hC(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ex,s[o])}function pC(n,e,t){const i=this.cache,r=e.length,s=uu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sx,s[o])}function mC(n){switch(n){case 5126:return qR;case 35664:return ZR;case 35665:return QR;case 35666:return JR;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return aC;case 36294:return lC;case 36295:return cC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return pC}}class gC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KR(t.type)}}class _C{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mC(t.type)}}class vC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function Bg(n,e){n.seq.push(e),n.map[e.id]=e}function xC(n,e,t){const i=n.name,r=i.length;for(mf.lastIndex=0;;){const s=mf.exec(i),o=mf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Bg(t,c===void 0?new gC(a,n,e):new _C(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vC(a),Bg(t,f)),t=f}}}class ic{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yC=37297;let SC=0;function MC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function EC(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Fc&&t===Uc?i="LinearDisplayP3ToLinearSRGB":e===Uc&&t===Fc&&(i="LinearSRGBToLinearDisplayP3"),n){case Vt:case au:return[i,"LinearTransferOETF"];case Yt:case hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+MC(n.getShaderSource(e),o)}else return r}function TC(n,e){const t=EC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wC(n,e){let t;switch(e){case RT:t="Linear";break;case CT:t="Reinhard";break;case bT:t="OptimizedCineon";break;case Y0:t="ACESFilmic";break;case LT:t="AgX";break;case IT:t="Neutral";break;case PT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bl=new F;function AC(){Qe.getLuminanceCoefficients(bl);const n=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function CC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qo(n){return n!==""}function Vg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PC=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(PC,IC)}const LC=new Map;function IC(n,e){let t=He[e];if(t===void 0){const i=LC.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const NC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(n){return n.replace(NC,DC)}function DC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===JE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function FC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function kC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rp:e="ENVMAP_BLENDING_MULTIPLY";break;case wT:e="ENVMAP_BLENDING_MIX";break;case AT:e="ENVMAP_BLENDING_ADD";break}return e}function BC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UC(t),c=FC(t),u=OC(t),f=kC(t),d=BC(t),p=RC(t),g=CC(s),v=r.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),h.length>0&&(h+=`
`)):(m=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),h=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?He.tonemapping_pars_fragment:"",t.toneMapping!==yr?wC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,TC("linearToOutputTexel",t.outputColorSpace),AC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=nh(o),o=Vg(o,t),o=Gg(o,t),a=nh(a),a=Vg(a,t),a=Gg(a,t),o=Wg(o),a=Wg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+m+o,y=_+h+a,C=zg(r,r.VERTEX_SHADER,x),A=zg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(b){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(A).trim();let ee=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,A);else{const te=Hg(r,C,"vertex"),N=Hg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+te+`
`+N)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||K==="")&&(j=!1);j&&(b.diagnostics={runnable:ee,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:h}})}r.deleteShader(C),r.deleteShader(A),R=new ic(r,v),M=bC(r,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,yC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let HC=0;class VC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GC(e),t.set(e,i)),i}}class GC{constructor(e){this.id=HC++,this.code=e,this.usedTimes=0}}function WC(n,e,t,i,r,s,o){const a=new fx,l=new VC,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,b,G,H){const K=G.fog,ee=H.geometry,j=M.isMeshStandardMaterial?G.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),N=te&&te.mapping===ou?te.image.height:null,Q=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ue=ne!==void 0?ne.length:0;let Se=0;ee.morphAttributes.position!==void 0&&(Se=1),ee.morphAttributes.normal!==void 0&&(Se=2),ee.morphAttributes.color!==void 0&&(Se=3);let Be,Y,ae,ge;if(Q){const je=ci[Q];Be=je.vertexShader,Y=je.fragmentShader}else Be=M.vertexShader,Y=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const _e=n.getRenderTarget(),Fe=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,ze=!!M.map,at=!!M.matcap,L=!!te,ct=!!M.aoMap,Ke=!!M.lightMap,qe=!!M.bumpMap,Ae=!!M.normalMap,ut=!!M.displacementMap,Ne=!!M.emissiveMap,De=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,D=M.clearcoat>0,V=M.dispersion>0,J=M.iridescence>0,z=M.sheen>0,Z=M.transmission>0,re=E&&!!M.anisotropyMap,se=D&&!!M.clearcoatMap,Me=D&&!!M.clearcoatNormalMap,oe=D&&!!M.clearcoatRoughnessMap,le=J&&!!M.iridescenceMap,Le=J&&!!M.iridescenceThicknessMap,pe=z&&!!M.sheenColorMap,fe=z&&!!M.sheenRoughnessMap,ye=!!M.specularMap,Ee=!!M.specularColorMap,Re=!!M.specularIntensityMap,I=Z&&!!M.transmissionMap,ie=Z&&!!M.thicknessMap,$=!!M.gradientMap,q=!!M.alphaMap,de=M.alphaTest>0,Ce=!!M.alphaHash,We=!!M.extensions;let nt=yr;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Tt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:Y,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Vt,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:at,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:N,aoMap:ct,lightMap:Ke,bumpMap:qe,normalMap:Ae,displacementMap:d&&ut,emissiveMap:Ne,normalMapObjectSpace:Ae&&M.normalMapType===kT,normalMapTangentSpace:Ae&&M.normalMapType===dp,metalnessMap:De,roughnessMap:P,anisotropy:E,anisotropyMap:re,clearcoat:D,clearcoatMap:se,clearcoatNormalMap:Me,clearcoatRoughnessMap:oe,dispersion:V,iridescence:J,iridescenceMap:le,iridescenceThicknessMap:Le,sheen:z,sheenColorMap:pe,sheenRoughnessMap:fe,specularMap:ye,specularColorMap:Ee,specularIntensityMap:Re,transmission:Z,transmissionMap:I,thicknessMap:ie,gradientMap:$,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:de,alphaHash:Ce,combine:M.combine,mapUv:ze&&v(M.map.channel),aoMapUv:ct&&v(M.aoMap.channel),lightMapUv:Ke&&v(M.lightMap.channel),bumpMapUv:qe&&v(M.bumpMap.channel),normalMapUv:Ae&&v(M.normalMap.channel),displacementMapUv:ut&&v(M.displacementMap.channel),emissiveMapUv:Ne&&v(M.emissiveMap.channel),metalnessMapUv:De&&v(M.metalnessMap.channel),roughnessMapUv:P&&v(M.roughnessMap.channel),anisotropyMapUv:re&&v(M.anisotropyMap.channel),clearcoatMapUv:se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(M.sheenRoughnessMap.channel),specularMapUv:ye&&v(M.specularMap.channel),specularColorMapUv:Ee&&v(M.specularColorMap.channel),specularIntensityMapUv:Re&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:q&&v(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ae||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(ze||q),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:We&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&M.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const b in M.defines)S.push(b),S.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),M.push(a.mask)}function y(M){const S=g[M.type];let b;if(S){const G=ci[S];b=Rw.clone(G.uniforms)}else b=M.uniforms;return b}function C(M,S){let b;for(let G=0,H=u.length;G<H;G++){const K=u[G];if(K.cacheKey===S){b=K,++b.usedTimes;break}}return b===void 0&&(b=new zC(n,S,M,s),u.push(b)),b}function A(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function jC(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function XC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $g(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||XC),i.length>1&&i.sort(d||Xg),r.length>1&&r.sort(d||Xg)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $C(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $g,n.set(i,[o])):r>=s.length?(o=new $g,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function KC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qC=0;function ZC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QC(n){const e=new YC,t=KC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Ge,o=new Ge;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,x=0,y=0,C=0,A=0,T=0;c.sort(ZC);for(let M=0,S=c.length;M<S;M++){const b=c[M],G=b.color,H=b.intensity,K=b.distance,ee=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=G.r*H,f+=G.g*H,d+=G.b*H;else if(b.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(b.sh.coefficients[j],H);T++}else if(b.isDirectionalLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const te=b.shadow,N=t.get(b);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=b.shadow.matrix,_++}i.directional[p]=j,p++}else if(b.isSpotLight){const j=e.get(b);j.position.setFromMatrixPosition(b.matrixWorld),j.color.copy(G).multiplyScalar(H),j.distance=K,j.coneCos=Math.cos(b.angle),j.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),j.decay=b.decay,i.spot[v]=j;const te=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,te.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[v]=te.matrix,b.castShadow){const N=t.get(b);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=ee,y++}v++}else if(b.isRectAreaLight){const j=e.get(b);j.color.copy(G).multiplyScalar(H),j.halfWidth.set(b.width*.5,0,0),j.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=j,m++}else if(b.isPointLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),j.distance=b.distance,j.decay=b.decay,b.castShadow){const te=b.shadow,N=t.get(b);N.shadowIntensity=te.intensity,N.shadowBias=te.bias,N.shadowNormalBias=te.normalBias,N.shadowRadius=te.radius,N.shadowMapSize=te.mapSize,N.shadowCameraNear=te.camera.near,N.shadowCameraFar=te.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=j,g++}else if(b.isHemisphereLight){const j=e.get(b);j.skyColor.copy(b.color).multiplyScalar(H),j.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=T,i.version=qC++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Yg(n){const e=new QC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yg(n),e.set(r,[a])):s>=o.length?(a=new Yg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class eb extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tb extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rb(n,e,t){let i=new gp;const r=new Xe,s=new Xe,o=new ot,a=new eb({depthPacking:OT}),l=new tb,c={},u=t.maxTextureSize,f={[zi]:mn,[mn]:zi,[Mn]:Mn},d=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0;let h=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),G=n.state;G.setBlending(xr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=h!==Ri&&this.type===Ri,K=h===Ri&&this.type!==Ri;for(let ee=0,j=A.length;ee<j;ee++){const te=A[ee],N=te.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y)),N.map===null||H===!0||K===!0){const ue=this.type!==Ri?{minFilter:sn,magFilter:sn}:{};N.map!==null&&N.map.dispose(),N.map=new ts(r.x,r.y,ue),N.map.texture.name=te.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ne=N.getViewportCount();for(let ue=0;ue<ne;ue++){const Se=N.getViewport(ue);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(o),N.updateMatrices(te,ue),i=N.getFrustum(),y(T,R,N.camera,te,this.type)}N.isPointLightShadow!==!0&&this.type===Ri&&_(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,b)};function _(A,T){const R=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ts(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,p,v,null)}function x(A,T,R,M){let S=null;const b=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)S=b;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=S.uuid,H=T.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let ee=K[H];ee===void 0&&(ee=S.clone(),K[H]=ee,T.addEventListener("dispose",C)),S=ee}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Ri?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=R}return S}function y(A,T,R,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const H=e.update(A),K=A.material;if(Array.isArray(K)){const ee=H.groups;for(let j=0,te=ee.length;j<te;j++){const N=ee[j],Q=K[N.materialIndex];if(Q&&Q.visible){const ne=x(A,Q,M,S);A.onBeforeShadow(n,A,T,R,H,ne,N),n.renderBufferDirect(R,null,H,ne,A,N),A.onAfterShadow(n,A,T,R,H,ne,N)}}}else if(K.visible){const ee=x(A,K,M,S);A.onBeforeShadow(n,A,T,R,H,ee,null),n.renderBufferDirect(R,null,H,ee,A,null),A.onAfterShadow(n,A,T,R,H,ee,null)}}const G=A.children;for(let H=0,K=G.length;H<K;H++)y(G[H],T,R,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function sb(n){function e(){let I=!1;const ie=new ot;let $=null;const q=new ot(0,0,0,0);return{setMask:function(de){$!==de&&!I&&(n.colorMask(de,de,de,de),$=de)},setLocked:function(de){I=de},setClear:function(de,Ce,We,nt,Tt){Tt===!0&&(de*=nt,Ce*=nt,We*=nt),ie.set(de,Ce,We,nt),q.equals(ie)===!1&&(n.clearColor(de,Ce,We,nt),q.copy(ie))},reset:function(){I=!1,$=null,q.set(-1,0,0,0)}}}function t(){let I=!1,ie=null,$=null,q=null;return{setTest:function(de){de?ge(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(de){ie!==de&&!I&&(n.depthMask(de),ie=de)},setFunc:function(de){if($!==de){switch(de){case vT:n.depthFunc(n.NEVER);break;case xT:n.depthFunc(n.ALWAYS);break;case yT:n.depthFunc(n.LESS);break;case Ic:n.depthFunc(n.LEQUAL);break;case ST:n.depthFunc(n.EQUAL);break;case MT:n.depthFunc(n.GEQUAL);break;case ET:n.depthFunc(n.GREATER);break;case TT:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=de}},setLocked:function(de){I=de},setClear:function(de){q!==de&&(n.clearDepth(de),q=de)},reset:function(){I=!1,ie=null,$=null,q=null}}}function i(){let I=!1,ie=null,$=null,q=null,de=null,Ce=null,We=null,nt=null,Tt=null;return{setTest:function(je){I||(je?ge(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(je){ie!==je&&!I&&(n.stencilMask(je),ie=je)},setFunc:function(je,Vn,Jt){($!==je||q!==Vn||de!==Jt)&&(n.stencilFunc(je,Vn,Jt),$=je,q=Vn,de=Jt)},setOp:function(je,Vn,Jt){(Ce!==je||We!==Vn||nt!==Jt)&&(n.stencilOp(je,Vn,Jt),Ce=je,We=Vn,nt=Jt)},setLocked:function(je){I=je},setClear:function(je){Tt!==je&&(n.clearStencil(je),Tt=je)},reset:function(){I=!1,ie=null,$=null,q=null,de=null,Ce=null,We=null,nt=null,Tt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,_=null,x=null,y=null,C=null,A=new Pe(0,0,0),T=0,R=!1,M=null,S=null,b=null,G=null,H=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,j=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=j>=2);let N=null,Q={};const ne=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Se=new ot().fromArray(ne),Be=new ot().fromArray(ue);function Y(I,ie,$,q){const de=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(I,Ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<$;We++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ie+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ce}const ae={};ae[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Ic),qe(!1),Ae(qm),ge(n.CULL_FACE),ct(xr);function ge(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function _e(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Fe(I,ie){return u[I]!==ie?(n.bindFramebuffer(I,ie),u[I]=ie,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function ke(I,ie){let $=d,q=!1;if(I){$=f.get(ie),$===void 0&&($=[],f.set(ie,$));const de=I.textures;if($.length!==de.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,We=de.length;Ce<We;Ce++)$[Ce]=n.COLOR_ATTACHMENT0+Ce;$.length=de.length,q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,q=!0);q&&n.drawBuffers($)}function ze(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const at={[Hr]:n.FUNC_ADD,[tT]:n.FUNC_SUBTRACT,[nT]:n.FUNC_REVERSE_SUBTRACT};at[iT]=n.MIN,at[rT]=n.MAX;const L={[sT]:n.ZERO,[oT]:n.ONE,[aT]:n.SRC_COLOR,[Td]:n.SRC_ALPHA,[hT]:n.SRC_ALPHA_SATURATE,[fT]:n.DST_COLOR,[cT]:n.DST_ALPHA,[lT]:n.ONE_MINUS_SRC_COLOR,[wd]:n.ONE_MINUS_SRC_ALPHA,[dT]:n.ONE_MINUS_DST_COLOR,[uT]:n.ONE_MINUS_DST_ALPHA,[pT]:n.CONSTANT_COLOR,[mT]:n.ONE_MINUS_CONSTANT_COLOR,[gT]:n.CONSTANT_ALPHA,[_T]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(I,ie,$,q,de,Ce,We,nt,Tt,je){if(I===xr){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),I!==eT){if(I!==v||je!==R){if((m!==Hr||x!==Hr)&&(n.blendEquation(n.FUNC_ADD),m=Hr,x=Hr),je)switch(I){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.ONE,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,_=null,y=null,C=null,A.set(0,0,0),T=0,v=I,R=je}return}de=de||ie,Ce=Ce||$,We=We||q,(ie!==m||de!==x)&&(n.blendEquationSeparate(at[ie],at[de]),m=ie,x=de),($!==h||q!==_||Ce!==y||We!==C)&&(n.blendFuncSeparate(L[$],L[q],L[Ce],L[We]),h=$,_=q,y=Ce,C=We),(nt.equals(A)===!1||Tt!==T)&&(n.blendColor(nt.r,nt.g,nt.b,Tt),A.copy(nt),T=Tt),v=I,R=!1}function Ke(I,ie){I.side===Mn?_e(n.CULL_FACE):ge(n.CULL_FACE);let $=I.side===mn;ie&&($=!$),qe($),I.blending===Xs&&I.transparent===!1?ct(xr):ct(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const q=I.stencilWrite;o.setTest(q),q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Ae(I){I!==ZE?(ge(n.CULL_FACE),I!==S&&(I===qm?n.cullFace(n.BACK):I===QE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),S=I}function ut(I){I!==b&&(ee&&n.lineWidth(I),b=I)}function Ne(I,ie,$){I?(ge(n.POLYGON_OFFSET_FILL),(G!==ie||H!==$)&&(n.polygonOffset(ie,$),G=ie,H=$)):_e(n.POLYGON_OFFSET_FILL)}function De(I){I?ge(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+K-1),N!==I&&(n.activeTexture(I),N=I)}function E(I,ie,$){$===void 0&&(N===null?$=n.TEXTURE0+K-1:$=N);let q=Q[$];q===void 0&&(q={type:void 0,texture:void 0},Q[$]=q),(q.type!==I||q.texture!==ie)&&(N!==$&&(n.activeTexture($),N=$),n.bindTexture(I,ie||ae[I]),q.type=I,q.texture=ie)}function D(){const I=Q[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){Se.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function fe(I){Be.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function ye(I,ie){let $=l.get(ie);$===void 0&&($=new WeakMap,l.set(ie,$));let q=$.get(I);q===void 0&&(q=n.getUniformBlockIndex(ie,I.name),$.set(I,q))}function Ee(I,ie){const q=l.get(ie).get(I);a.get(ie)!==q&&(n.uniformBlockBinding(ie,q,I.__bindingPointIndex),a.set(ie,q))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,Q={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,_=null,x=null,y=null,C=null,A=new Pe(0,0,0),T=0,R=!1,M=null,S=null,b=null,G=null,H=null,Se.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:_e,bindFramebuffer:Fe,drawBuffers:ke,useProgram:ze,setBlending:ct,setMaterial:Ke,setFlipSided:qe,setCullFace:Ae,setLineWidth:ut,setPolygonOffset:Ne,setScissorTest:De,activeTexture:P,bindTexture:E,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:le,texImage3D:Le,updateUBOMapping:ye,uniformBlockBinding:Ee,texStorage2D:Me,texStorage3D:oe,texSubImage2D:z,texSubImage3D:Z,compressedTexSubImage2D:re,compressedTexSubImage3D:se,scissor:pe,viewport:fe,reset:Re}}function Kg(n,e,t,i){const r=ob(i);switch(t){case ex:return n*e;case nx:return n*e;case ix:return n*e*2;case lp:return n*e/r.components*r.byteLength;case cp:return n*e/r.components*r.byteLength;case rx:return n*e*2/r.components*r.byteLength;case up:return n*e*2/r.components*r.byteLength;case tx:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case fp:return n*e*4/r.components*r.byteLength;case Ql:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ld:return Math.max(n,16)*Math.max(e,8)/4;case Cd:case Pd:return Math.max(n,8)*Math.max(e,8)/2;case Id:case Nd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case Kd:case qd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sx:case Zd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qd:case Jd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ob(n){switch(n){case Hi:case Z0:return{byteLength:1,components:1};case Pa:case Q0:case za:return{byteLength:2,components:1};case op:case ap:return{byteLength:2,components:4};case es:case sp:case Qn:return{byteLength:4,components:1};case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ab(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Na("canvas")}function v(P,E,D){let V=1;const J=De(P);if((J.width>D||J.height>D)&&(V=D/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const z=Math.floor(V*J.width),Z=Math.floor(V*J.height);f===void 0&&(f=g(z,Z));const re=E?g(z,Z):f;return re.width=z,re.height=Z,re.getContext("2d").drawImage(P,0,0,z,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+Z+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==sn&&P.minFilter!==En}function h(P){n.generateMipmap(P)}function _(P,E,D,V,J=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let z=E;if(E===n.RED&&(D===n.FLOAT&&(z=n.R32F),D===n.HALF_FLOAT&&(z=n.R16F),D===n.UNSIGNED_BYTE&&(z=n.R8)),E===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.R8UI),D===n.UNSIGNED_SHORT&&(z=n.R16UI),D===n.UNSIGNED_INT&&(z=n.R32UI),D===n.BYTE&&(z=n.R8I),D===n.SHORT&&(z=n.R16I),D===n.INT&&(z=n.R32I)),E===n.RG&&(D===n.FLOAT&&(z=n.RG32F),D===n.HALF_FLOAT&&(z=n.RG16F),D===n.UNSIGNED_BYTE&&(z=n.RG8)),E===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.RG8UI),D===n.UNSIGNED_SHORT&&(z=n.RG16UI),D===n.UNSIGNED_INT&&(z=n.RG32UI),D===n.BYTE&&(z=n.RG8I),D===n.SHORT&&(z=n.RG16I),D===n.INT&&(z=n.RG32I)),E===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),E===n.RGBA){const Z=J?Dc:Qe.getTransfer(V);D===n.FLOAT&&(z=n.RGBA32F),D===n.HALF_FLOAT&&(z=n.RGBA16F),D===n.UNSIGNED_BYTE&&(z=Z===dt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function x(P,E){let D;return P?E===null||E===es||E===lo?D=n.DEPTH24_STENCIL8:E===Qn?D=n.DEPTH32F_STENCIL8:E===Pa&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===lo?D=n.DEPTH_COMPONENT24:E===Qn?D=n.DEPTH_COMPONENT32F:E===Pa&&(D=n.DEPTH_COMPONENT16),D}function y(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),T(E),E.isVideoTexture&&u.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),M(E)}function T(P){const E=i.get(P);if(E.__webglInit===void 0)return;const D=P.source,V=d.get(D);if(V){const J=V[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(P),Object.keys(V).length===0&&d.delete(D)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const D=P.source,V=d.get(D);delete V[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(E.__webglFramebuffer[V]))for(let J=0;J<E.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[V][J]);else n.deleteFramebuffer(E.__webglFramebuffer[V]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[V])}else{if(Array.isArray(E.__webglFramebuffer))for(let V=0;V<E.__webglFramebuffer.length;V++)n.deleteFramebuffer(E.__webglFramebuffer[V]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let V=0;V<E.__webglColorRenderbuffer.length;V++)E.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[V]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const D=P.textures;for(let V=0,J=D.length;V<J;V++){const z=i.get(D[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(D[V])}i.remove(P)}let S=0;function b(){S=0}function G(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function K(P,E){const D=i.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){const V=P.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(D,P,E);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+E)}function ee(P,E){const D=i.get(P);if(P.version>0&&D.__version!==P.version){Be(D,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+E)}function j(P,E){const D=i.get(P);if(P.version>0&&D.__version!==P.version){Be(D,P,E);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+E)}function te(P,E){const D=i.get(P);if(P.version>0&&D.__version!==P.version){Y(D,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+E)}const N={[ao]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},Q={[sn]:n.NEAREST,[q0]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},ne={[BT]:n.NEVER,[jT]:n.ALWAYS,[zT]:n.LESS,[ax]:n.LEQUAL,[HT]:n.EQUAL,[WT]:n.GEQUAL,[VT]:n.GREATER,[GT]:n.NOTEQUAL};function ue(P,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===En||E.magFilter===Zl||E.magFilter===Zo||E.magFilter===Ni||E.minFilter===En||E.minFilter===Zl||E.minFilter===Zo||E.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,N[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,N[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,N[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Zo&&E.minFilter!==Ni||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(P,E){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const V=E.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const z=H(E);if(z!==P.__cacheKey){J[z]===void 0&&(J[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),J[z].usedTimes++;const Z=J[P.__cacheKey];Z!==void 0&&(J[P.__cacheKey].usedTimes--,Z.usedTimes===0&&R(E)),P.__cacheKey=z,P.__webglTexture=J[z].texture}return D}function Be(P,E,D){let V=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(V=n.TEXTURE_3D);const J=Se(P,E),z=E.source;t.bindTexture(V,P.__webglTexture,n.TEXTURE0+D);const Z=i.get(z);if(z.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const re=Qe.getPrimaries(Qe.workingColorSpace),se=E.colorSpace===rr?null:Qe.getPrimaries(E.colorSpace),Me=E.colorSpace===rr||re===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let oe=v(E.image,!1,r.maxTextureSize);oe=Ne(E,oe);const le=s.convert(E.format,E.colorSpace),Le=s.convert(E.type);let pe=_(E.internalFormat,le,Le,E.colorSpace,E.isVideoTexture);ue(V,E);let fe;const ye=E.mipmaps,Ee=E.isVideoTexture!==!0,Re=Z.__version===void 0||J===!0,I=z.dataReady,ie=y(E,oe);if(E.isDepthTexture)pe=x(E.format===co,E.type),Re&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,pe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,pe,oe.width,oe.height,0,le,Le,null));else if(E.isDataTexture)if(ye.length>0){Ee&&Re&&t.texStorage2D(n.TEXTURE_2D,ie,pe,ye[0].width,ye[0].height);for(let $=0,q=ye.length;$<q;$++)fe=ye[$],Ee?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,le,Le,fe.data):t.texImage2D(n.TEXTURE_2D,$,pe,fe.width,fe.height,0,le,Le,fe.data);E.generateMipmaps=!1}else Ee?(Re&&t.texStorage2D(n.TEXTURE_2D,ie,pe,oe.width,oe.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,le,Le,oe.data)):t.texImage2D(n.TEXTURE_2D,0,pe,oe.width,oe.height,0,le,Le,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ee&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,pe,ye[0].width,ye[0].height,oe.depth);for(let $=0,q=ye.length;$<q;$++)if(fe=ye[$],E.format!==Fn)if(le!==null)if(Ee){if(I)if(E.layerUpdates.size>0){const de=Kg(fe.width,fe.height,E.format,E.type);for(const Ce of E.layerUpdates){const We=fe.data.subarray(Ce*de/fe.data.BYTES_PER_ELEMENT,(Ce+1)*de/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Ce,fe.width,fe.height,1,le,We,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,oe.depth,le,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,pe,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,oe.depth,le,Le,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,pe,fe.width,fe.height,oe.depth,0,le,Le,fe.data)}else{Ee&&Re&&t.texStorage2D(n.TEXTURE_2D,ie,pe,ye[0].width,ye[0].height);for(let $=0,q=ye.length;$<q;$++)fe=ye[$],E.format!==Fn?le!==null?Ee?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,le,Le,fe.data):t.texImage2D(n.TEXTURE_2D,$,pe,fe.width,fe.height,0,le,Le,fe.data)}else if(E.isDataArrayTexture)if(Ee){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,pe,oe.width,oe.height,oe.depth),I)if(E.layerUpdates.size>0){const $=Kg(oe.width,oe.height,E.format,E.type);for(const q of E.layerUpdates){const de=oe.data.subarray(q*$/oe.data.BYTES_PER_ELEMENT,(q+1)*$/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,oe.width,oe.height,1,le,Le,de)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,le,Le,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,oe.width,oe.height,oe.depth,0,le,Le,oe.data);else if(E.isData3DTexture)Ee?(Re&&t.texStorage3D(n.TEXTURE_3D,ie,pe,oe.width,oe.height,oe.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,le,Le,oe.data)):t.texImage3D(n.TEXTURE_3D,0,pe,oe.width,oe.height,oe.depth,0,le,Le,oe.data);else if(E.isFramebufferTexture){if(Re)if(Ee)t.texStorage2D(n.TEXTURE_2D,ie,pe,oe.width,oe.height);else{let $=oe.width,q=oe.height;for(let de=0;de<ie;de++)t.texImage2D(n.TEXTURE_2D,de,pe,$,q,0,le,Le,null),$>>=1,q>>=1}}else if(ye.length>0){if(Ee&&Re){const $=De(ye[0]);t.texStorage2D(n.TEXTURE_2D,ie,pe,$.width,$.height)}for(let $=0,q=ye.length;$<q;$++)fe=ye[$],Ee?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,le,Le,fe):t.texImage2D(n.TEXTURE_2D,$,pe,le,Le,fe);E.generateMipmaps=!1}else if(Ee){if(Re){const $=De(oe);t.texStorage2D(n.TEXTURE_2D,ie,pe,$.width,$.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Le,oe)}else t.texImage2D(n.TEXTURE_2D,0,pe,le,Le,oe);m(E)&&h(V),Z.__version=z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Y(P,E,D){if(E.image.length!==6)return;const V=Se(P,E),J=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+D);const z=i.get(J);if(J.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+D);const Z=Qe.getPrimaries(Qe.workingColorSpace),re=E.colorSpace===rr?null:Qe.getPrimaries(E.colorSpace),se=E.colorSpace===rr||Z===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!Me&&!oe?le[q]=v(E.image[q],!0,r.maxCubemapSize):le[q]=oe?E.image[q].image:E.image[q],le[q]=Ne(E,le[q]);const Le=le[0],pe=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),ye=_(E.internalFormat,pe,fe,E.colorSpace),Ee=E.isVideoTexture!==!0,Re=z.__version===void 0||V===!0,I=J.dataReady;let ie=y(E,Le);ue(n.TEXTURE_CUBE_MAP,E);let $;if(Me){Ee&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,ye,Le.width,Le.height);for(let q=0;q<6;q++){$=le[q].mipmaps;for(let de=0;de<$.length;de++){const Ce=$[de];E.format!==Fn?pe!==null?Ee?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,Ce.width,Ce.height,pe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,Ce.width,Ce.height,pe,fe,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,ye,Ce.width,Ce.height,0,pe,fe,Ce.data)}}}else{if($=E.mipmaps,Ee&&Re){$.length>0&&ie++;const q=De(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,ye,q.width,q.height)}for(let q=0;q<6;q++)if(oe){Ee?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,pe,fe,le[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ye,le[q].width,le[q].height,0,pe,fe,le[q].data);for(let de=0;de<$.length;de++){const We=$[de].image[q].image;Ee?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,We.width,We.height,pe,fe,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,ye,We.width,We.height,0,pe,fe,We.data)}}else{Ee?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe,fe,le[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ye,pe,fe,le[q]);for(let de=0;de<$.length;de++){const Ce=$[de];Ee?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,pe,fe,Ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,ye,pe,fe,Ce.image[q])}}}m(E)&&h(n.TEXTURE_CUBE_MAP),z.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,D,V,J,z){const Z=s.convert(D.format,D.colorSpace),re=s.convert(D.type),se=_(D.internalFormat,Z,re,D.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>z),le=Math.max(1,E.height>>z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,z,se,oe,le,E.depth,0,Z,re,null):t.texImage2D(J,z,se,oe,le,0,Z,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,i.get(D).__webglTexture,0,qe(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,i.get(D).__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(P,E,D){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const V=E.depthTexture,J=V&&V.isDepthTexture?V.type:null,z=x(E.stencilBuffer,J),Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=qe(E);Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,z,E.width,E.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,P)}else{const V=E.textures;for(let J=0;J<V.length;J++){const z=V[J],Z=s.convert(z.format,z.colorSpace),re=s.convert(z.type),se=_(z.internalFormat,Z,re,z.colorSpace),Me=qe(E);D&&Ae(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,se,E.width,E.height):Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,se,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,se,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const V=i.get(E.depthTexture).__webglTexture,J=qe(E);if(E.depthTexture.format===$s)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(E.depthTexture.format===co)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const E=i.get(P),D=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");_e(E.__webglFramebuffer,P)}else if(D){E.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[V]),E.__webglDepthbuffer[V]=n.createRenderbuffer(),ge(E.__webglDepthbuffer[V],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),ge(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(P,E,D){const V=i.get(P);E!==void 0&&ae(V.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Fe(P)}function ze(P){const E=P.texture,D=i.get(P),V=i.get(E);P.addEventListener("dispose",A);const J=P.textures,z=P.isWebGLCubeRenderTarget===!0,Z=J.length>1;if(Z||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=E.version,o.memory.textures++),z){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let se=0;se<E.mipmaps.length;se++)D.__webglFramebuffer[re][se]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Z)for(let re=0,se=J.length;re<se;re++){const Me=i.get(J[re]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ae(P)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const se=J[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Me=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),le=_(se.internalFormat,Me,oe,se.colorSpace,P.isXRRenderTarget===!0),Le=qe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,le,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(D.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ue(n.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)ae(D.__webglFramebuffer[re][se],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,se);else ae(D.__webglFramebuffer[re],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(E)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let re=0,se=J.length;re<se;re++){const Me=J[re],oe=i.get(Me);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ue(n.TEXTURE_2D,Me),ae(D.__webglFramebuffer,P,Me,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Me)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,V.__webglTexture),ue(re,E),E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)ae(D.__webglFramebuffer[se],P,E,n.COLOR_ATTACHMENT0,re,se);else ae(D.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,re,0);m(E)&&h(re),t.unbindTexture()}P.depthBuffer&&Fe(P)}function at(P){const E=P.textures;for(let D=0,V=E.length;D<V;D++){const J=E[D];if(m(J)){const z=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Z=i.get(J).__webglTexture;t.bindTexture(z,Z),h(z),t.unbindTexture()}}}const L=[],ct=[];function Ke(P){if(P.samples>0){if(Ae(P)===!1){const E=P.textures,D=P.width,V=P.height;let J=n.COLOR_BUFFER_BIT;const z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=i.get(P),re=E.length>1;if(re)for(let se=0;se<E.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let se=0;se<E.length;se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Z.__webglColorRenderbuffer[se]);const Me=i.get(E[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,J,n.NEAREST),l===!0&&(L.length=0,ct.length=0,L.push(n.COLOR_ATTACHMENT0+se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(L.push(z),ct.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let se=0;se<E.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,Z.__webglColorRenderbuffer[se]);const Me=i.get(E[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function qe(P){return Math.min(r.maxSamples,P.samples)}function Ae(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Ne(P,E){const D=P.colorSpace,V=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==Vt&&D!==rr&&(Qe.getTransfer(D)===dt?(V!==Fn||J!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),E}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ae}function lb(n,e){function t(i,r=rr){let s;const o=Qe.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===op)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return n.UNSIGNED_SHORT_5_5_5_1;if(i===J0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Z0)return n.BYTE;if(i===Q0)return n.SHORT;if(i===Pa)return n.UNSIGNED_SHORT;if(i===sp)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===za)return n.HALF_FLOAT;if(i===ex)return n.ALPHA;if(i===tx)return n.RGB;if(i===Fn)return n.RGBA;if(i===nx)return n.LUMINANCE;if(i===ix)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===co)return n.DEPTH_STENCIL;if(i===lp)return n.RED;if(i===cp)return n.RED_INTEGER;if(i===rx)return n.RG;if(i===up)return n.RG_INTEGER;if(i===fp)return n.RGBA_INTEGER;if(i===Ql||i===Jl||i===ec||i===tc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===bd||i===Pd||i===Ld)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Id||i===Nd||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Id||i===Nd)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ud)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$d)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===Kd||i===qd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sx||i===Zd||i===Qd||i===Jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class cb extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Er({vertexShader:fb,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new cu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pb extends yo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new hb,m=t.getContextAttributes();let h=null,_=null;const x=[],y=[],C=new Xe;let A=null;const T=new Zt;T.layers.enable(1),T.viewport=new ot;const R=new Zt;R.layers.enable(2),R.viewport=new ot;const M=[T,R],S=new cb;S.layers.enable(1),S.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=x[Y];return ae===void 0&&(ae=new gf,x[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=x[Y];return ae===void 0&&(ae=new gf,x[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=x[Y];return ae===void 0&&(ae=new gf,x[Y]=ae),ae.getHandSpace()};function H(Y){const ae=y.indexOf(Y.inputSource);if(ae===-1)return;const ge=x[ae];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<x.length;Y++){const ae=y[Y];ae!==null&&(y[Y]=null,x[Y].disconnect(ae))}b=null,G=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ts(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ge=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?co:$s,ge=m.stencil?lo:es);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ts(d.textureWidth,d.textureHeight,{format:Fn,type:Hi,depthTexture:new xx(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(Y){for(let ae=0;ae<Y.removed.length;ae++){const ge=Y.removed[ae],_e=y.indexOf(ge);_e>=0&&(y[_e]=null,x[_e].disconnect(ge))}for(let ae=0;ae<Y.added.length;ae++){const ge=Y.added[ae];let _e=y.indexOf(ge);if(_e===-1){for(let ke=0;ke<x.length;ke++)if(ke>=y.length){y.push(ge),_e=ke;break}else if(y[ke]===null){y[ke]=ge,_e=ke;break}if(_e===-1)break}const Fe=x[_e];Fe&&Fe.connect(ge)}}const j=new F,te=new F;function N(Y,ae,ge){j.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const _e=j.distanceTo(te),Fe=ae.projectionMatrix.elements,ke=ge.projectionMatrix.elements,ze=Fe[14]/(Fe[10]-1),at=Fe[14]/(Fe[10]+1),L=(Fe[9]+1)/Fe[5],ct=(Fe[9]-1)/Fe[5],Ke=(Fe[8]-1)/Fe[0],qe=(ke[8]+1)/ke[0],Ae=ze*Ke,ut=ze*qe,Ne=_e/(-Ke+qe),De=Ne*-Ke;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(Ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const P=ze+Ne,E=at+Ne,D=Ae-De,V=ut+(_e-De),J=L*at/E*P,z=ct*at/E*P;Y.projectionMatrix.makePerspective(D,V,J,z,P,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Q(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),S.near=R.near=T.near=Y.near,S.far=R.far=T.far=Y.far,(b!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,G=S.far,T.near=b,T.far=G,R.near=b,R.far=G,T.updateProjectionMatrix(),R.updateProjectionMatrix(),Y.updateProjectionMatrix());const ae=Y.parent,ge=S.cameras;Q(S,ae);for(let _e=0;_e<ge.length;_e++)Q(ge[_e],ae);ge.length===2?N(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),ne(Y,S,ae)};function ne(Y,ae,ge){ge===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=uo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ue=null;function Se(Y,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let _e=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ke=0;ke<ge.length;ke++){const ze=ge[ke];let at=null;if(p!==null)at=p.getViewport(ze);else{const ct=f.getViewSubImage(d,ze);at=ct.viewport,ke===0&&(e.setRenderTargetTextures(_,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(_))}let L=M[ke];L===void 0&&(L=new Zt,L.layers.enable(ke),L.viewport=new ot,M[ke]=L),L.matrix.fromArray(ze.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ze.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(at.x,at.y,at.width,at.height),ke===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(L)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const ke=f.getDepthInformation(ge[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let ge=0;ge<x.length;ge++){const _e=y[ge],Fe=x[ge];_e!==null&&Fe!==void 0&&Fe.update(_e,ae,c||o)}ue&&ue(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Be=new vx;Be.setAnimationLoop(Se),this.setAnimationLoop=function(Y){ue=Y},this.dispose=function(){}}}const Dr=new Rn,mb=new Ge;function gb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mx(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,Dr.copy(y),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(mb.makeRotationFromEuler(Dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _b(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function u(_){const x=f();_.__bindingPointIndex=x;const y=n.createBuffer(),C=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=R.length;M<S;M++){const b=R[M];if(p(b,A,M,C)===!0){const G=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let K=0;for(let ee=0;ee<H.length;ee++){const j=H[ee],te=v(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+K,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,y,C){const A=_.value,T=x+"_"+y;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){const x=_.uniforms;let y=0;const C=16;for(let T=0,R=x.length;T<R;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,b=M.length;S<b;S++){const G=M[S],H=Array.isArray(G.value)?G.value:[G.value];for(let K=0,ee=H.length;K<ee;K++){const j=H[K],te=v(j),N=y%C,Q=N%te.boundary,ne=N+Q;y+=Q,ne!==0&&C-ne<te.storage&&(y+=C-ne),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=te.storage}}}const A=y%C;return A>0&&(y+=C-A),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Tx{constructor(e={}){const{canvas:t=lw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=yr,this.toneMappingExposure=1;const x=this;let y=!1,C=0,A=0,T=null,R=-1,M=null;const S=new ot,b=new ot;let G=null;const H=new Pe(0);let K=0,ee=t.width,j=t.height,te=1,N=null,Q=null;const ne=new ot(0,0,ee,j),ue=new ot(0,0,ee,j);let Se=!1;const Be=new gp;let Y=!1,ae=!1;const ge=new Ge,_e=new F,Fe=new ot,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function at(){return T===null?te:1}let L=i;function ct(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ip}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const O="webgl2";if(L=ct(O,w),L===null)throw ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ke,qe,Ae,ut,Ne,De,P,E,D,V,J,z,Z,re,se,Me,oe,le,Le,pe,fe,ye,Ee,Re;function I(){Ke=new TR(L),Ke.init(),ye=new lb(L,Ke),qe=new vR(L,Ke,e,ye),Ae=new sb(L),ut=new RR(L),Ne=new jC,De=new ab(L,Ke,Ae,Ne,qe,ye,ut),P=new yR(x),E=new ER(x),D=new Dw(L),Ee=new gR(L,D),V=new wR(L,D,ut,Ee),J=new bR(L,V,D,ut),Le=new CR(L,qe,De),Me=new xR(Ne),z=new WC(x,P,E,Ke,qe,Ee,Me),Z=new gb(x,Ne),re=new $C,se=new JC(Ke),le=new mR(x,P,E,Ae,J,d,l),oe=new rb(x,J,qe),Re=new _b(L,ut,qe,Ae),pe=new _R(L,Ke,ut),fe=new AR(L,Ke,ut),ut.programs=z.programs,x.capabilities=qe,x.extensions=Ke,x.properties=Ne,x.renderLists=re,x.shadowMap=oe,x.state=Ae,x.info=ut}I();const ie=new pb(x,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(ee,j,!1))},this.getSize=function(w){return w.set(ee,j)},this.setSize=function(w,O,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,j=O,t.width=Math.floor(w*te),t.height=Math.floor(O*te),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ee*te,j*te).floor()},this.setDrawingBufferSize=function(w,O,W){ee=w,j=O,te=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,O,W,X){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,O,W,X),Ae.viewport(S.copy(ne).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,O,W,X){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,O,W,X),Ae.scissor(b.copy(ue).multiplyScalar(te).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Ae.setScissorTest(Se=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let B=!1;if(T!==null){const he=T.texture.format;B=he===fp||he===up||he===cp}if(B){const he=T.texture.type,ve=he===Hi||he===es||he===Pa||he===lo||he===op||he===ap,Te=le.getClearColor(),we=le.getClearAlpha(),Ue=Te.r,Oe=Te.g,Ie=Te.b;ve?(p[0]=Ue,p[1]=Oe,p[2]=Ie,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ue,g[1]=Oe,g[2]=Ie,g[3]=we,L.clearBufferiv(L.COLOR,0,g))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",de,!1),re.dispose(),se.dispose(),Ne.dispose(),P.dispose(),E.dispose(),J.dispose(),Ee.dispose(),Re.dispose(),z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Jt),ie.removeEventListener("sessionend",Wa),vi.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ut.autoReset,O=oe.enabled,W=oe.autoUpdate,X=oe.needsUpdate,B=oe.type;I(),ut.autoReset=w,oe.enabled=O,oe.autoUpdate=W,oe.needsUpdate=X,oe.type=B}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const O=w.target;O.removeEventListener("dispose",Ce),We(O)}function We(w){nt(w),Ne.remove(w)}function nt(w){const O=Ne.get(w).programs;O!==void 0&&(O.forEach(function(W){z.releaseProgram(W)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,B,he){O===null&&(O=ke);const ve=B.isMesh&&B.matrixWorld.determinant()<0,Te=Hx(w,O,W,X,B);Ae.setMaterial(X,ve);let we=W.index,Ue=1;if(X.wireframe===!0){if(we=V.getWireframeAttribute(W),we===void 0)return;Ue=2}const Oe=W.drawRange,Ie=W.attributes.position;let Je=Oe.start*Ue,yt=(Oe.start+Oe.count)*Ue;he!==null&&(Je=Math.max(Je,he.start*Ue),yt=Math.min(yt,(he.start+he.count)*Ue)),we!==null?(Je=Math.max(Je,0),yt=Math.min(yt,we.count)):Ie!=null&&(Je=Math.max(Je,0),yt=Math.min(yt,Ie.count));const St=yt-Je;if(St<0||St===1/0)return;Ee.setup(B,X,Te,W,we);let _n,et=pe;if(we!==null&&(_n=D.get(we),et=fe,et.setIndex(_n)),B.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*at()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(B.isLine){let be=X.linewidth;be===void 0&&(be=1),Ae.setLineWidth(be*at()),B.isLineSegments?et.setMode(L.LINES):B.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else B.isPoints?et.setMode(L.POINTS):B.isSprite&&et.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const be=B._multiDrawStarts,kt=B._multiDrawCounts,tt=B._multiDrawCount,Gn=we?D.get(we).bytesPerElement:1,as=Ne.get(X).currentProgram.getUniforms();for(let vn=0;vn<tt;vn++)as.setValue(L,"_gl_DrawID",vn),et.render(be[vn]/Gn,kt[vn])}else if(B.isInstancedMesh)et.renderInstances(Je,St,B.count);else if(W.isInstancedBufferGeometry){const be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kt=Math.min(W.instanceCount,be);et.renderInstances(Je,St,kt)}else et.render(Je,St)};function Tt(w,O,W){w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,ja(w,O,W),w.side=zi,w.needsUpdate=!0,ja(w,O,W),w.side=Mn):ja(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),m=se.get(W),m.init(O),_.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return w.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Te=he[ve];Tt(Te,W,B),X.add(Te)}else Tt(he,W,B),X.add(he)}),_.pop(),m=null,X},this.compileAsync=function(w,O,W=null){const X=this.compile(w,O,W);return new Promise(B=>{function he(){if(X.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){B(w);return}setTimeout(he,10)}Ke.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let je=null;function Vn(w){je&&je(w)}function Jt(){vi.stop()}function Wa(){vi.start()}const vi=new vx;vi.setAnimationLoop(Vn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){je=w,ie.setAnimationLoop(w),w===null?vi.stop():vi.start()},ie.addEventListener("sessionstart",Jt),ie.addEventListener("sessionend",Wa),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,T),m=se.get(w,_.length),m.init(O),_.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,Y=Me.init(this.clippingPlanes,ae),v=re.get(w,h.length),v.init(),h.push(v),ie.enabled===!0&&ie.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&gn(he,O,-1/0,x.sortObjects)}gn(w,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(N,Q),ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ze&&le.addToRenderList(v,w),this.info.render.frame++,Y===!0&&Me.beginShadows();const W=m.state.shadowsArray;oe.render(W,w,O),Y===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,B=v.transmissive;if(m.setupLights(),O.isArrayCamera){const he=O.cameras;if(B.length>0)for(let ve=0,Te=he.length;ve<Te;ve++){const we=he[ve];wo(X,B,w,we)}ze&&le.render(w);for(let ve=0,Te=he.length;ve<Te;ve++){const we=he[ve];To(v,w,we,we.viewport)}}else B.length>0&&wo(X,B,w,O),ze&&le.render(w),To(v,w,O);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,O),Ee.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],Y===!0&&Me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function gn(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){X&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const ve=J.update(w),Te=w.material;Te.visible&&v.push(w,ve,Te,W,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const ve=J.update(w),Te=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Fe.copy(ve.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){const we=ve.groups;for(let Ue=0,Oe=we.length;Ue<Oe;Ue++){const Ie=we[Ue],Je=Te[Ie.materialIndex];Je&&Je.visible&&v.push(w,ve,Je,W,Fe.z,Ie)}}else Te.visible&&v.push(w,ve,Te,W,Fe.z,null)}}const he=w.children;for(let ve=0,Te=he.length;ve<Te;ve++)gn(he[ve],O,W,X)}function To(w,O,W,X){const B=w.opaque,he=w.transmissive,ve=w.transparent;m.setupLightsView(W),Y===!0&&Me.setGlobalState(x.clippingPlanes,W),X&&Ae.viewport(S.copy(X)),B.length>0&&oi(B,O,W),he.length>0&&oi(he,O,W),ve.length>0&&oi(ve,O,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function wo(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ts(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?za:Hi,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=m.state.transmissionRenderTarget[X.id],ve=X.viewport||S;he.setSize(ve.z,ve.w);const Te=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(H),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),ze&&le.render(W);const we=x.toneMapping;x.toneMapping=yr;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Y===!0&&Me.setGlobalState(x.clippingPlanes,X),oi(w,W,X),De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ie=0,Je=O.length;Ie<Je;Ie++){const yt=O[Ie],St=yt.object,_n=yt.geometry,et=yt.material,be=yt.group;if(et.side===Mn&&St.layers.test(X.layers)){const kt=et.side;et.side=mn,et.needsUpdate=!0,bp(St,W,X,_n,et,be),et.side=kt,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he))}x.setRenderTarget(Te),x.setClearColor(H,K),Ue!==void 0&&(X.viewport=Ue),x.toneMapping=we}function oi(w,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,he=w.length;B<he;B++){const ve=w[B],Te=ve.object,we=ve.geometry,Ue=X===null?ve.material:X,Oe=ve.group;Te.layers.test(W.layers)&&bp(Te,O,W,we,Ue,Oe)}}function bp(w,O,W,X,B,he){w.onBeforeRender(x,O,W,X,B,he),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=mn,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,w,he),B.side=zi,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,w,he),B.side=Mn):x.renderBufferDirect(W,O,X,B,w,he),w.onAfterRender(x,O,W,X,B,he)}function ja(w,O,W){O.isScene!==!0&&(O=ke);const X=Ne.get(w),B=m.state.lights,he=m.state.shadowsArray,ve=B.state.version,Te=z.getParameters(w,B.state,he,O,W),we=z.getProgramCacheKey(Te);let Ue=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?E:P).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Ce),Ue=new Map,X.programs=Ue);let Oe=Ue.get(we);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===ve)return Lp(w,Te),Oe}else Te.uniforms=z.getUniforms(w),w.onBeforeCompile(Te,x),Oe=z.acquireProgram(Te,we),Ue.set(we,Oe),X.uniforms=Te.uniforms;const Ie=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),Lp(w,Te),X.needsLights=Gx(w),X.lightsStateVersion=ve,X.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Pp(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ic.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Lp(w,O){const W=Ne.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Hx(w,O,W,X,B){O.isScene!==!0&&(O=ke),De.resetTextureUnits();const he=O.fog,ve=X.isMeshStandardMaterial?O.environment:null,Te=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Vt,we=(X.isMeshStandardMaterial?E:P).get(X.envMap||ve),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color;let St=yr;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(St=x.toneMapping);const _n=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=_n!==void 0?_n.length:0,be=Ne.get(X),kt=m.state.lights;if(Y===!0&&(ae===!0||w!==M)){const Pn=w===M&&X.id===R;Me.setState(X,w,Pn)}let tt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==kt.state.version||be.outputColorSpace!==Te||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==we||X.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Me.numPlanes||be.numIntersection!==Me.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==Oe||be.morphTargets!==Ie||be.morphNormals!==Je||be.morphColors!==yt||be.toneMapping!==St||be.morphTargetsCount!==et)&&(tt=!0):(tt=!0,be.__version=X.version);let Gn=be.currentProgram;tt===!0&&(Gn=ja(X,O,B));let as=!1,vn=!1,hu=!1;const At=Gn.getUniforms(),Wi=be.uniforms;if(Ae.useProgram(Gn.program)&&(as=!0,vn=!0,hu=!0),X.id!==R&&(R=X.id,vn=!0),as||M!==w){At.setValue(L,"projectionMatrix",w.projectionMatrix),At.setValue(L,"viewMatrix",w.matrixWorldInverse);const Pn=At.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,_e.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,vn=!0,hu=!0)}if(B.isSkinnedMesh){At.setOptional(L,B,"bindMatrix"),At.setOptional(L,B,"bindMatrixInverse");const Pn=B.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),At.setValue(L,"boneTexture",Pn.boneTexture,De))}B.isBatchedMesh&&(At.setOptional(L,B,"batchingTexture"),At.setValue(L,"batchingTexture",B._matricesTexture,De),At.setOptional(L,B,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",B._indirectTexture,De),At.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",B._colorsTexture,De));const pu=W.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0)&&Le.update(B,W,Gn),(vn||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,At.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Wi.envMapIntensity.value=O.environmentIntensity),vn&&(At.setValue(L,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&Vx(Wi,hu),he&&X.fog===!0&&Z.refreshFogUniforms(Wi,he),Z.refreshMaterialUniforms(Wi,X,te,j,m.state.transmissionRenderTarget[w.id]),ic.upload(L,Pp(be),Wi,De)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ic.upload(L,Pp(be),Wi,De),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(L,"center",B.center),At.setValue(L,"modelViewMatrix",B.modelViewMatrix),At.setValue(L,"normalMatrix",B.normalMatrix),At.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pn=X.uniformsGroups;for(let mu=0,Wx=Pn.length;mu<Wx;mu++){const Ip=Pn[mu];Re.update(Ip,Gn),Re.bind(Ip,Gn)}}return Gn}function Vx(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Gx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,W){Ne.get(w.texture).__webglTexture=O,Ne.get(w.depthTexture).__webglTexture=W;const X=Ne.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const W=Ne.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){T=w,C=O,A=W;let X=!0,B=null,he=!1,ve=!1;if(w){const we=Ne.get(w);we.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(L.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?De.setupRenderTarget(w):we.__hasExternalTextures&&De.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Oe=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?B=Oe[O][W]:B=Oe[O],he=!0):w.samples>0&&De.useMultisampledRTT(w)===!1?B=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[W]:B=Oe,S.copy(w.viewport),b.copy(w.scissor),G=w.scissorTest}else S.copy(ne).multiplyScalar(te).floor(),b.copy(ue).multiplyScalar(te).floor(),G=Se;if(Ae.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&Ae.drawBuffers(w,B),Ae.viewport(S),Ae.scissor(b),Ae.setScissorTest(G),he){const we=Ne.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,W)}else if(ve){const we=Ne.get(w.texture),Ue=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Ue)}R=-1},this.readRenderTargetPixels=function(w,O,W,X,B,he,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Ae.bindFramebuffer(L.FRAMEBUFFER,Te);try{const we=w.texture,Ue=we.format,Oe=we.type;if(!qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B&&L.readPixels(O,W,X,B,ye.convert(Ue),ye.convert(Oe),he)}finally{const we=T!==null?Ne.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,X,B,he,ve){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Ae.bindFramebuffer(L.FRAMEBUFFER,Te);try{const we=w.texture,Ue=we.format,Oe=we.type;if(!qe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B){const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(O,W,X,B,ye.convert(Ue),ye.convert(Oe),0),L.flush();const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await cw(L,Je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he)}finally{L.deleteBuffer(Ie),L.deleteSync(Je)}return he}}finally{const we=T!==null?Ne.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,O=null,W=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(w.image.width*X),he=Math.floor(w.image.height*X),ve=O!==null?O.x:0,Te=O!==null?O.y:0;De.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ve,Te,B,he),Ae.unbindTexture()},this.copyTextureToTexture=function(w,O,W=null,X=null,B=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let he,ve,Te,we,Ue,Oe;W!==null?(he=W.max.x-W.min.x,ve=W.max.y-W.min.y,Te=W.min.x,we=W.min.y):(he=w.image.width,ve=w.image.height,Te=0,we=0),X!==null?(Ue=X.x,Oe=X.y):(Ue=0,Oe=0);const Ie=ye.convert(O.format),Je=ye.convert(O.type);De.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const yt=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),_n=L.getParameter(L.UNPACK_SKIP_PIXELS),et=L.getParameter(L.UNPACK_SKIP_ROWS),be=L.getParameter(L.UNPACK_SKIP_IMAGES),kt=w.isCompressedTexture?w.mipmaps[B]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Ue,Oe,he,ve,Ie,Je,kt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Ue,Oe,kt.width,kt.height,Ie,kt.data):L.texSubImage2D(L.TEXTURE_2D,B,Ue,Oe,he,ve,Ie,Je,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_n),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),B===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W=null,X=null,B=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let he,ve,Te,we,Ue,Oe,Ie,Je,yt;const St=w.isCompressedTexture?w.mipmaps[B]:w.image;W!==null?(he=W.max.x-W.min.x,ve=W.max.y-W.min.y,Te=W.max.z-W.min.z,we=W.min.x,Ue=W.min.y,Oe=W.min.z):(he=St.width,ve=St.height,Te=St.depth,we=0,Ue=0,Oe=0),X!==null?(Ie=X.x,Je=X.y,yt=X.z):(Ie=0,Je=0,yt=0);const _n=ye.convert(O.format),et=ye.convert(O.type);let be;if(O.isData3DTexture)De.setTexture3D(O,0),be=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)De.setTexture2DArray(O,0),be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const kt=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gn=L.getParameter(L.UNPACK_SKIP_PIXELS),as=L.getParameter(L.UNPACK_SKIP_ROWS),vn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(be,B,Ie,Je,yt,he,ve,Te,_n,et,St.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(be,B,Ie,Je,yt,he,ve,Te,_n,St.data):L.texSubImage3D(be,B,Ie,Je,yt,he,ve,Te,_n,et,St),L.pixelStorei(L.UNPACK_ROW_LENGTH,kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,as),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vn),B===0&&O.generateMipmaps&&L.generateMipmap(be),Ae.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&De.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hp?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===au?"display-p3":"srgb"}}class wx extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ys("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new F;class xp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qg=new F,Zg=new ot,Qg=new ot,xb=new F,Jg=new Ge,Pl=new F,_f=new mi,e_=new Ge,vf=new lu;class yb extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eg,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_f.copy(this.boundingSphere),_f.applyMatrix4(r),e.ray.intersectsSphere(_f)!==!1&&(e_.copy(r).invert(),vf.copy(e.ray).applyMatrix4(e_),!(this.boundingBox!==null&&vf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===NT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Zg.fromBufferAttribute(r.attributes.skinIndex,e),Qg.fromBufferAttribute(r.attributes.skinWeight,e),qg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Qg.getComponent(s);if(o!==0){const a=Zg.getComponent(s);Jg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(xb.copy(qg).applyMatrix4(Jg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ax extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rx extends Ft{constructor(e=null,t=1,i=1,r,s,o,a,l,c=sn,u=sn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const t_=new Ge,Sb=new Ge;class yp{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Sb;t_.multiplyMatrices(a,t[s]),t_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Rx(t,e,e,Fn,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ax),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class ih extends Ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new Ge,n_=new Ge,Ll=[],i_=new zn,Mb=new Ge,Bo=new fn,zo=new mi;class Eb extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ih(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Mb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),i_.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(i_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),zo.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,As),n_.multiplyMatrices(i,As),Bo.matrixWorld=n_,Bo.raycast(e,Ll);for(let o=0,a=Ll.length;o<a;o++){const l=Ll[o];l.instanceId=s,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ih(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rx(new Float32Array(r*this.count),r,this.count,lp,Qn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cx extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new F,Bc=new F,r_=new Ge,Ho=new lu,Il=new mi,xf=new F,s_=new F;class Sp extends vt{constructor(e=new Hn,t=new Cx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)kc.fromBufferAttribute(t,r-1),Bc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=kc.distanceTo(Bc);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),Il.radius+=s,e.ray.intersectsSphere(Il)===!1)return;r_.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(r_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),_=u.getX(v+1),x=Nl(this,e,Ho,l,h,_);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=Nl(this,e,Ho,l,v,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=Nl(this,e,Ho,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Nl(this,e,Ho,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nl(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(kc.fromBufferAttribute(o,r),Bc.fromBufferAttribute(o,s),t.distanceSqToSegment(kc,Bc,xf,s_)>i)return;xf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xf);if(!(l<e.near||l>e.far))return{distance:l,point:s_.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const o_=new F,a_=new F;class Tb extends Sp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)o_.fromBufferAttribute(t,r),a_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+o_.distanceTo(a_);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wb extends Sp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bx extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l_=new Ge,rh=new lu,Dl=new mi,Ul=new F;class Ab extends vt{constructor(e=new Hn,t=new bx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;l_.copy(r).invert(),rh.copy(e.ray).applyMatrix4(l_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Ul.fromBufferAttribute(f,m),c_(Ul,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Ul.fromBufferAttribute(f,g),c_(Ul,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function c_(n,e,t,i,r,s,o){const a=rh.distanceSqToPoint(n);if(a<t){const l=new F;rh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Mp extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Mp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Px extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Fl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Rb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cb(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function u_(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Lx(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Va{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bb extends Va{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tg,endingEnd:tg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ng:s=e,a=2*t-i;break;case ig:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ng:o=e,l=2*i-t;break;case ig:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let C=0;C!==a;++C)s[C]=h*o[u+C]+_*o[c+C]+x*o[l+C]+y*o[f+C];return s}}class Pb extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class Lb extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case Wu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Rb(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Ia;class Mo extends _i{constructor(e,t,i){super(e,t,i)}}Mo.prototype.ValueTypeName="bool";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=La;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ix extends _i{}Ix.prototype.ValueTypeName="color";class ho extends _i{}ho.prototype.ValueTypeName="number";class Ib extends Va{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ni.slerpFlat(s,0,o,c-a,o,c,l);return s}}class po extends _i{InterpolantFactoryMethodLinear(e){return new Ib(this.times,this.values,this.getValueSize(),e)}}po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends _i{constructor(e,t,i){super(e,t,i)}}Eo.prototype.ValueTypeName="string";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=La;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends _i{}mo.prototype.ValueTypeName="vector";class Nb{constructor(e="",t=-1,i=[],r=DT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Ub(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(_i.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Cb(l);l=u_(l,1,u),c=u_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ho(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,g,v){if(p.length!==0){const m=[],h=[];Lx(p,m,h,g),m.length!==0&&v.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==d[g].morphTargets.length;++_){const x=d[g];m.push(x.time),h.push(x.morphTarget===v?1:0)}r.push(new ho(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(mo,p+".position",d,"pos",r),i(po,p+".quaternion",d,"rot",r),i(mo,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Db(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return mo;case"color":return Ix;case"quaternion":return po;case"bool":case"boolean":return Mo;case"string":return Eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Ub(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Db(n.type);if(n.times===void 0){const t=[],i=[];Lx(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const cr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Fb{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ob=new Fb;class os{constructor(e){this.manager=e!==void 0?e:Ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class kb extends Error{constructor(e,t){super(e),this.response=t}}class Ep extends os{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:r});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ti[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){f.read().then(({done:x,value:y})=>{if(x)h.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,T=u.length;A<T;A++){const R=u[A];R.onProgress&&R.onProgress(C)}h.enqueue(y),_()}},x=>{h.error(x)})}}});return new Response(m)}else throw new kb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{cr.add(e,c);const u=Ti[e];delete Ti[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bb extends os{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Na("img");function l(){u(),cr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zb extends os{constructor(e){super(e)}load(e,t,i,r){const s=new Ft,o=new Bb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fu extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yf=new Ge,f_=new F,d_=new F;class Tp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;f_.setFromMatrixPosition(e.matrixWorld),t.position.copy(f_),d_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d_),t.updateMatrixWorld(),yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hb extends Tp{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vb extends fu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const h_=new Ge,Vo=new F,Sf=new F;class Gb extends Tp{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vo),Sf.copy(i.position),Sf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Sf),i.updateMatrixWorld(),r.makeTranslation(-Vo.x,-Vo.y,-Vo.z),h_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h_)}}class Wb extends fu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jb extends Tp{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new jb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nx extends fu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ua{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xb extends os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return cr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),cr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});cr.add(e,l),s.manager.itemStart(e)}}class Dx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=p_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=p_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function p_(){return(typeof performance>"u"?Date:performance).now()}const wp="\\[\\]\\.:\\/",$b=new RegExp("["+wp+"]","g"),Ap="[^"+wp+"]",Yb="[^"+wp.replace("\\.","")+"]",Kb=/((?:WC+[\/:])*)/.source.replace("WC",Ap),qb=/(WCOD+)?/.source.replace("WCOD",Yb),Zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ap),Qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ap),Jb=new RegExp("^"+Kb+qb+Zb+Qb+"$"),eP=["material","materials","bones","map"];class tP{constructor(e,t,i){const r=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($b,"")}static parseTrackName(e){const t=Jb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);eP.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=tP;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);class nP extends os{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Ep(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,u,v))return!1;return!0}function i(c,u,f){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function r(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,p,g,v=!1,m,h,_,x,y;for(let b=0;b<70;b++)u.getUint32(b,!1)==1129270351&&u.getUint8(b+4)==82&&u.getUint8(b+5)==61&&(v=!0,m=new Float32Array(f*3*3),h=u.getUint8(b+6)/255,_=u.getUint8(b+7)/255,x=u.getUint8(b+8)/255,y=u.getUint8(b+9)/255);const C=84,A=12*4+2,T=new Hn,R=new Float32Array(f*3*3),M=new Float32Array(f*3*3),S=new Pe;for(let b=0;b<f;b++){const G=C+b*A,H=u.getFloat32(G,!0),K=u.getFloat32(G+4,!0),ee=u.getFloat32(G+8,!0);if(v){const j=u.getUint16(G+48,!0);j&32768?(d=h,p=_,g=x):(d=(j&31)/31,p=(j>>5&31)/31,g=(j>>10&31)/31)}for(let j=1;j<=3;j++){const te=G+j*12,N=b*3*3+(j-1)*3;R[N]=u.getFloat32(te,!0),R[N+1]=u.getFloat32(te+4,!0),R[N+2]=u.getFloat32(te+8,!0),M[N]=H,M[N+1]=K,M[N+2]=ee,v&&(S.set(d,p,g).convertSRGBToLinear(),m[N]=S.r,m[N+1]=S.g,m[N+2]=S.b)}}return T.setAttribute("position",new Ot(R,3)),T.setAttribute("normal",new Ot(M,3)),v&&(T.setAttribute("color",new Ot(m,3)),T.hasColors=!0,T.alpha=y),T}function s(c){const u=new Hn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),h=new RegExp("normal"+v+v+v,"g"),_=[],x=[],y=[],C=new F;let A,T=0,R=0,M=0;for(;(A=f.exec(c))!==null;){R=M;const S=A[0],b=(A=p.exec(S))!==null?A[1]:"";for(y.push(b);(A=d.exec(S))!==null;){let K=0,ee=0;const j=A[0];for(;(A=h.exec(j))!==null;)C.x=parseFloat(A[1]),C.y=parseFloat(A[2]),C.z=parseFloat(A[3]),ee++;for(;(A=m.exec(j))!==null;)_.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),x.push(C.x,C.y,C.z),K++,M++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const G=R,H=M-R;u.userData.groupNames=y,u.addGroup(G,H,T),T++}return u.setAttribute("position",new ri(_,3)),u.setAttribute("normal",new ri(x,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?r(l):s(o(e))}}function Ux(n=[0,0,0]){const e=U.useRef(()=>{const s=new Rn(...n,"XYZ");return new ni().setFromEuler(s)});typeof e.current=="function"&&(e.current=e.current());const t=U.useCallback((s,o)=>{const a=o*s,l=new ni().setFromAxisAngle(new F(0,1,0),a);e.current.premultiply(l)},[]),i=U.useCallback((s,o,a=.005)=>{const l=Math.sqrt(s*s+o*o)*a;if(l===0)return;const c=new F(o,s,0).normalize(),u=new ni().setFromAxisAngle(c,l);e.current.premultiply(u)},[]),r=U.useCallback(()=>{const s=new Rn(...n,"XYZ");e.current.setFromEuler(s)},[n]);return{quaternionRef:e,applyAutoRotation:t,applyPointerDelta:i,reset:r}}function iP({count:n,waitMs:e=2500,animMs:t=400,paused:i=!1,onStep:r,onPosition:s}){const o=U.useRef({currentStep:0,phase:"waiting",phaseStart:null,position:0}),a=U.useRef(null),l=U.useRef(i),c=U.useRef(r),u=U.useRef(s);c.current=r,u.current=s,U.useEffect(()=>{l.current=i,i||(o.current.phaseStart=performance.now())},[i]);const f=U.useCallback(p=>{o.current.currentStep=p,o.current.phase="waiting",o.current.phaseStart=null},[]),d=U.useCallback(p=>{var m,h,_;if(a.current=requestAnimationFrame(d),l.current||n<=1)return;const g=o.current;g.phaseStart===null&&(g.phaseStart=p);const v=p-g.phaseStart;if(g.phase==="waiting")(m=u.current)==null||m.call(u,g.currentStep),v>=e&&(g.phase="animating",g.phaseStart=p);else{const x=(g.currentStep+1)%n;g.currentStep=x,g.phase="waiting",g.phaseStart=p,(h=u.current)==null||h.call(u,x),(_=c.current)==null||_.call(c,x)}},[n,e,t]);return U.useEffect(()=>(o.current={currentStep:0,phase:"waiting",phaseStart:null,position:0},a.current=requestAnimationFrame(d),()=>cancelAnimationFrame(a.current)),[d]),{seek:f}}const rP="_container_19mbl_1",sP="_labels_19mbl_9",oP="_label_19mbl_9",aP="_labelActive_19mbl_31",lP="_track_19mbl_36",cP="_fill_19mbl_47",uP="_thumb_19mbl_59",fP="_tick_19mbl_77",$t={container:rP,labels:sP,label:oP,labelActive:aP,track:lP,fill:cP,thumb:uP,tick:fP};function Fx({steps:n,currentIndex:e,onChange:t,onSliderPosition:i,paused:r=!1,waitMs:s=2500,fadeMs:o=600,showLabels:a=!0}){const[l,c]=U.useState(0),[u,f]=U.useState(!1),d=U.useRef(!1),p=U.useRef(null),g=U.useRef(i);g.current=i;const v=n.length,m=r||u,{seek:h}=iP({count:v,waitMs:s,animMs:o,paused:m,onStep:T=>t(T),onPosition:T=>{var R;d.current||(c(T),(R=g.current)==null||R.call(g,T))}}),_=U.useCallback(T=>{const R=p.current;if(!R)return 0;const{left:M,width:S}=R.getBoundingClientRect();return Math.max(0,Math.min(1,(T-M)/S))*(v-1)},[v]),x=U.useCallback(T=>{var M;d.current=!0,f(!0),T.currentTarget.setPointerCapture(T.pointerId);const R=_(T.clientX);c(R),(M=g.current)==null||M.call(g,R),t(Math.round(R))},[_,t]),y=U.useCallback(T=>{var M;if(!d.current)return;const R=_(T.clientX);c(R),(M=g.current)==null||M.call(g,R),t(Math.round(R))},[_,t]),C=U.useCallback(()=>{var R;d.current=!1;const T=Math.round(l);c(T),(R=g.current)==null||R.call(g,T),h(T),setTimeout(()=>f(!1),800)},[l,h]),A=v>1?l/(v-1)*100:0;return k.jsxs("div",{className:$t.container,children:[a&&k.jsx("div",{className:$t.labels,children:n.map((T,R)=>k.jsx("button",{className:`${$t.label} ${R===e?$t.labelActive:""}`,onClick:()=>{var M;f(!0),c(R),(M=g.current)==null||M.call(g,R),t(R),h(R),setTimeout(()=>f(!1),s)},children:T.label??R+1},R))}),k.jsxs("div",{ref:p,className:$t.track,onPointerDown:x,onPointerMove:y,onPointerUp:C,onPointerLeave:C,children:[k.jsx("div",{className:$t.fill,style:{width:`${A}%`}}),k.jsx("div",{className:$t.thumb,style:{left:`${A}%`}}),n.map((T,R)=>k.jsx("div",{className:$t.tick,style:{left:`${R/(v-1)*100}%`}},R))]})]})}function Rp({value:n,onChange:e,labels:t=[],paused:i=!1,waitMs:r=2500,fadeMs:s=600,showLabels:o=!0}){const a=t.length,l=U.useRef(null),c=U.useRef(null),u=U.useRef(!1),f=U.useRef(i),d=U.useRef(!1),p=U.useRef(e),g=U.useRef(n);p.current=e,g.current=n,f.current=i;const v=U.useRef({stage:0,direction:1,phase:"waiting",phaseStart:null});U.useEffect(()=>{if(a<=1)return;v.current={stage:0,direction:1,phase:"waiting",phaseStart:null};const T=R=>{if(c.current=requestAnimationFrame(T),u.current||f.current)return;const M=v.current;M.phaseStart===null&&(M.phaseStart=R);const S=R-M.phaseStart;if(M.phase==="waiting"){if(S>=r){const b=M.stage+M.direction;(b<0||b>=a)&&(M.direction=-M.direction),M.phase="animating",M.phaseStart=R}}else{const b=Math.min(S/s,1),G=M.stage+b*M.direction;p.current(Math.max(0,Math.min(a-1,G))),b>=1&&(M.stage+=M.direction,M.phase="waiting",M.phaseStart=R)}};return c.current=requestAnimationFrame(T),()=>cancelAnimationFrame(c.current)},[a,r,s]);const m=U.useCallback(T=>{const R=l.current;if(!R)return 0;const{left:M,width:S}=R.getBoundingClientRect();return Math.max(0,Math.min(1,(T-M)/S))*Math.max(1,a-1)},[a]),h=U.useCallback(T=>{d.current=!0,u.current=!0,T.currentTarget.setPointerCapture(T.pointerId),p.current(m(T.clientX))},[m]),_=U.useCallback(T=>{d.current&&p.current(m(T.clientX))},[m]),x=U.useCallback(()=>{if(!d.current)return;d.current=!1;const T=g.current,R=Math.round(Math.max(0,Math.min(a-1,T)));p.current(R),v.current={stage:R,direction:R>=a-1?-1:1,phase:"waiting",phaseStart:null},setTimeout(()=>{u.current=!1,v.current.phaseStart=performance.now()},800)},[a]),y=U.useCallback(T=>{u.current=!0,p.current(T),v.current={stage:T,direction:T>=a-1?-1:1,phase:"waiting",phaseStart:null},setTimeout(()=>{u.current=!1,v.current.phaseStart=performance.now()},r)},[a,r]),C=a>1?`${n/(a-1)*100}%`:"0%",A=Math.round(Math.max(0,Math.min(a-1,n)));return k.jsxs("div",{className:$t.container,children:[o&&a>0&&k.jsx("div",{className:$t.labels,children:t.map((T,R)=>k.jsx("button",{className:`${$t.label} ${R===A?$t.labelActive:""}`,onClick:()=>y(R),children:T},R))}),k.jsxs("div",{ref:l,className:$t.track,onPointerDown:h,onPointerMove:_,onPointerUp:x,onPointerLeave:x,children:[k.jsx("div",{className:$t.fill,style:{width:C}}),k.jsx("div",{className:$t.thumb,style:{left:C}}),a>1&&t.map((T,R)=>k.jsx("div",{className:$t.tick,style:{left:`${R/(a-1)*100}%`}},R))]})]})}const dP="_backdrop_l14eo_1",hP="_content_l14eo_13",pP="_closeButton_l14eo_20",Mf={backdrop:dP,content:hP,closeButton:pP};let Ol=0;function du({onClose:n,children:e,contentClassName:t}){return U.useEffect(()=>{const i=r=>{r.key==="Escape"&&n()};return document.addEventListener("keydown",i),Ol+=1,document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",i),Ol=Math.max(0,Ol-1),Ol===0&&(document.body.style.overflow="")}},[n]),N0.createPortal(k.jsxs("div",{className:Mf.backdrop,onClick:n,children:[k.jsx("button",{type:"button",className:Mf.closeButton,onClick:n,"aria-label":"Close",children:"×"}),k.jsx("div",{className:`${Mf.content} ${t??""}`,onClick:i=>i.stopPropagation(),children:e})]}),document.body)}function Ox(n,e=16/9){if(typeof n=="number"&&n>0)return n;if(typeof n=="string"){const t=n.split("/").map(r=>parseFloat(r.trim()));if(t.length===2&&t[0]>0&&t[1]>0)return t[0]/t[1];const i=parseFloat(n);if(i>0)return i}return e}const mP="_wrapper_vdqxm_1",gP="_canvas_vdqxm_16",_P="_overlay_vdqxm_24",vP="_loadingOverlay_vdqxm_34",xP="_spinner_vdqxm_45",yP="_loadingText_vdqxm_58",SP="_errorText_vdqxm_63",MP="_sliderDock_vdqxm_69",EP="_fullscreenContent_vdqxm_77",Mt={wrapper:mP,canvas:gP,overlay:_P,loadingOverlay:vP,spinner:xP,loadingText:yP,errorText:SP,sliderDock:MP,fullscreenContent:EP},TP=6,wP=1.6,AP=8,RP="#C8A96E",CP=1.2,bP=1.8,PP=[5,8,5];function LP(n,e,t,i,r){const o=n.clone().applyMatrix4(e.matrixWorld).clone().project(t);return o.z>1?null:{x:(o.x*.5+.5)*i,y:(-o.y*.5+.5)*r,z:o.z}}function rc({mode:n="basic",model:e,steps:t,models:i,annotations:r=[],config:s={},hideControls:o=!1,compact:a=!1,initialStepIndex:l,initialInternalPos:c,enableZoom:u=!1,allowFullscreen:f=!0}){const{rotationSpeed:d=.4,initialEuler:p=[0,0,0],waitMs:g=2500,fadeMs:v=600,aspectRatio:m="16 / 9",maxWidth:h,maxHeight:_}=s,x=U.useRef(null),y=U.useRef(null),C=U.useRef(null),A=U.useRef(null),T=U.useRef(null),R=U.useRef(null),M=U.useRef(null),S=U.useRef([]),b=U.useRef(null),G=U.useRef(new Dx),H=U.useRef(!1),K=U.useRef({x:0,y:0}),ee=U.useRef(0),[j,te]=U.useState(!0),[N,Q]=U.useState(null),[ne,ue]=U.useState(l??0),[Se,Be]=U.useState(c??0),[Y,ae]=U.useState(!1),[ge,_e]=U.useState({w:0,h:0}),[Fe,ke]=U.useState(!1),{quaternionRef:ze,applyAutoRotation:at,applyPointerDelta:L}=Ux(p),ct=(()=>{if(n==="basic")return[{path:e,opacity:1}];if(n==="progression"){const D=new Set,V=[];return t.forEach((J,z)=>{J.models.forEach(Z=>{D.has(Z)||(D.add(Z),V.push({path:Z,opacity:1}))})}),V}return n==="internal"?i.map(D=>({path:D.path,opacity:D.opacity})):[]})();U.useEffect(()=>{const D=x.current;if(!D)return;const V=new wx;V.background=new Pe("#1A1A1A"),T.current=V;const J=new Zt(45,1,.01,100);J.position.set(0,0,3.5),J.lookAt(0,0,0),R.current=J;const z=new Tx({canvas:y.current,antialias:!0});z.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.current=z;const Z=new Nx(16777215,CP);V.add(Z);const re=new Da(16777215,bP);re.position.set(...PP),V.add(re);const se=new Da(16777215,.4);se.position.set(-3,-4,-3),V.add(se);const Me=new di;V.add(Me),M.current=Me;const oe=new nP,le=ct.map(({path:fe,opacity:ye})=>new Promise((Ee,Re)=>{oe.load(fe,I=>Ee({geometry:I,path:fe,opacity:ye}),void 0,Re)}));Promise.all(le).then(fe=>{const ye=new zn;fe.forEach(({geometry:q})=>{q.computeBoundingBox(),ye.union(q.boundingBox)});const Ee=new F;ye.getCenter(Ee);const Re=new F;ye.getSize(Re);const I=Re.length()/2,ie=I>0?1/I:1,$=fe.map(({geometry:q,path:de,opacity:Ce})=>{q.translate(-Ee.x,-Ee.y,-Ee.z),q.scale(ie,ie,ie);const We=Ce<1,nt=n==="progression",Tt=new Px({color:new Pe(RP),specular:new Pe(6710886),shininess:70,transparent:We||nt,opacity:1,side:Mn,depthWrite:!0}),je=new fn(q,Tt);return je.userData.basePath=de,je.userData.baseOpacity=Ce,Me.add(je),je});S.current=$,Ke($,ne),n==="internal"&&qe($,Se),te(!1)}).catch(fe=>{console.error("STLViewer load error:",fe),Q("Failed to load model."),te(!1)});const Le=Ox(m),pe=new ResizeObserver(fe=>{for(const ye of fe){const{width:Ee}=ye.contentRect;let Re=Ee/Le;_&&Re>_&&(Re=_),z.setSize(Ee,Re,!1),J.aspect=Ee/Re,J.updateProjectionMatrix(),C.current&&(C.current.width=Ee,C.current.height=Re),_e({w:Ee,h:Re})}});return pe.observe(D),()=>{pe.disconnect(),cancelAnimationFrame(b.current),z.dispose(),S.current.forEach(fe=>{fe.geometry.dispose(),fe.material.dispose()})}},[]),U.useEffect(()=>{if(!u)return;const D=y.current;if(!D)return;const V=J=>{J.preventDefault();const z=R.current;if(!z)return;const Z=Math.exp(J.deltaY*.001);z.position.z=mp.clamp(z.position.z*Z,wP,AP)};return D.addEventListener("wheel",V,{passive:!1}),()=>D.removeEventListener("wheel",V)},[u]);function Ke(D,V){var J;if(n==="basic"||n==="internal"){D.forEach(z=>{z.visible=!0});return}if(n==="progression"&&t){const z=new Set(((J=t[V])==null?void 0:J.models)??[]);D.forEach(Z=>{Z.visible=z.has(Z.userData.basePath)})}}U.useEffect(()=>{S.current.length>0&&Ke(S.current,ne)},[ne]);function qe(D,V){const J=Math.floor(Math.min(V,D.length-1)),z=V-J;D.forEach((Z,re)=>{const se=Z.userData.baseOpacity;re<J?Z.material.opacity=se:re===J?Z.material.opacity=1-z*(1-se):Z.material.opacity=1})}U.useEffect(()=>{n!=="internal"||S.current.length===0||qe(S.current,Se)},[Se,n]);const Ae=U.useCallback(()=>{if(!C.current||!r.length)return;const D=C.current,V=D.getContext("2d");V.clearRect(0,0,D.width,D.height);const J=R.current,z=M.current;!J||!z||!S.current[0]||r.forEach(({label:re,headPosition:se,textOffset:Me})=>{const oe=new F(se.x,se.y,se.z),le=LP(oe,z,J,D.width,D.height);if(!le)return;const Le=le.x+Me.x,pe=le.y+Me.y,ye=le.z>.85?.25:1;V.globalAlpha=ye,V.beginPath(),V.moveTo(Le,pe),V.lineTo(le.x,le.y),V.strokeStyle="#C8A96E",V.lineWidth=1.5,V.stroke();const Ee=Math.atan2(le.y-pe,le.x-Le),Re=8;V.beginPath(),V.moveTo(le.x,le.y),V.lineTo(le.x-Re*Math.cos(Ee-Math.PI/7),le.y-Re*Math.sin(Ee-Math.PI/7)),V.moveTo(le.x,le.y),V.lineTo(le.x-Re*Math.cos(Ee+Math.PI/7),le.y-Re*Math.sin(Ee+Math.PI/7)),V.strokeStyle="#C8A96E",V.lineWidth=1.5,V.stroke(),V.font="12px Inter, sans-serif",V.fillStyle="#F0F0F0",V.textAlign=Me.x>=0?"left":"right",V.textBaseline="middle";const I=V.measureText(re),ie=6,$=Me.x>=0?Le-ie:Le-I.width-ie;V.fillStyle="rgba(15,15,15,0.75)",V.beginPath(),V.roundRect($,pe-9,I.width+ie*2,18,4),V.fill(),V.fillStyle="#F0F0F0",V.fillText(re,Le,pe),V.globalAlpha=1})},[r]);U.useEffect(()=>{if(j)return;const D=()=>{b.current=requestAnimationFrame(D);const V=G.current.getDelta();H.current||at(V,d),M.current&&M.current.quaternion.copy(ze.current),A.current.render(T.current,R.current),Ae()};return G.current.start(),D(),()=>cancelAnimationFrame(b.current)},[j,d,at,ze,Ae]);const ut=U.useCallback(D=>{H.current=!0,ee.current=0,K.current={x:D.clientX,y:D.clientY},D.currentTarget.setPointerCapture(D.pointerId),ae(!0)},[]),Ne=U.useCallback(D=>{if(!H.current)return;const V=D.clientX-K.current.x,J=D.clientY-K.current.y;K.current={x:D.clientX,y:D.clientY},ee.current+=Math.sqrt(V*V+J*J),L(V,J)},[L]),De=U.useCallback(()=>{const D=H.current;H.current=!1,ae(!1),D&&f&&!j&&!N&&ee.current<TP&&ke(!0)},[f,j,N]),P=U.useCallback(D=>{ue(D)},[]),E=n==="progression"?t.map(D=>({label:D.label})):null;return k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:Mt.wrapper,ref:x,style:{maxWidth:h},children:[k.jsx("canvas",{ref:y,className:Mt.canvas,onPointerDown:ut,onPointerMove:Ne,onPointerUp:De,onPointerLeave:De,style:{cursor:H.current?"grabbing":"grab"}}),r.length>0&&k.jsx("canvas",{ref:C,className:Mt.overlay,width:ge.w,height:ge.h}),j&&k.jsxs("div",{className:Mt.loadingOverlay,children:[k.jsx("div",{className:Mt.spinner}),k.jsx("span",{className:Mt.loadingText,children:"Loading model…"})]}),N&&k.jsx("div",{className:Mt.loadingOverlay,children:k.jsx("span",{className:Mt.errorText,children:N})}),n==="progression"&&E&&!j&&!o&&k.jsx("div",{className:Mt.sliderDock,children:k.jsx(Fx,{steps:E,currentIndex:ne,onChange:P,paused:Y,waitMs:g,fadeMs:v,showLabels:!a})}),n==="internal"&&!j&&!o&&k.jsx("div",{className:Mt.sliderDock,children:k.jsx(Rp,{value:Se,onChange:Be,labels:i?i.map(D=>D.label):[],paused:Y,waitMs:g,fadeMs:v,showLabels:!a})})]}),Fe&&f&&k.jsx(du,{onClose:()=>ke(!1),contentClassName:Mt.fullscreenContent,children:k.jsx(rc,{mode:n,model:e,steps:t,models:i,annotations:r,config:{initialEuler:p,waitMs:g,fadeMs:v,aspectRatio:m,rotationSpeed:0,maxHeight:Math.round(window.innerHeight*.85)},hideControls:!0,compact:!1,initialStepIndex:ne,initialInternalPos:Se,enableZoom:!0,allowFullscreen:!1})})]})}function m_(n,e){if(e===UT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===eh||e===ox){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===eh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class IP extends os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new OP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new $P(t)}),this.register(function(t){return new YP(t)}),this.register(function(t){return new KP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new HP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new GP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new WP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new XP(t)}),this.register(function(t){return new jP(t)}),this.register(function(t){return new DP(t)}),this.register(function(t){return new qP(t)}),this.register(function(t){return new ZP(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ua.extractUrlBase(e);o=ua.resolveURL(c,this.path)}else o=ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ep(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kx){try{o[$e.KHR_BINARY_GLTF]=new QP(e)}catch(f){r&&r(f);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case $e.KHR_MATERIALS_UNLIT:o[f]=new UP;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[f]=new JP(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[f]=new eL;break;case $e.KHR_MESH_QUANTIZATION:o[f]=new tL;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function NP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DP{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Vt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Da(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wb(u),c.distance=f;break;case"spot":c=new Vb(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class UP{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Xr}extendParams(e,t,i){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class OP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}}class kP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class BP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class zP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class HP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class VP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],Vt),Promise.all(s)}}class GP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class WP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(s)}}class jP{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class XP{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $P{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class YP{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KP{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qP{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class ZP{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of f){const v=new Ge,m=new F,h=new ni,_=new F(1,1,1),x=new Eb(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(m,h,_));for(const y in l)if(y==="_COLOR_0"){const C=l[y];x.instanceColor=new ih(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);vt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const kx="glTF",Go=12,g_={JSON:1313821514,BIN:5130562};class QP{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Go,s=new DataView(e,Go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===g_.JSON){const c=new Uint8Array(e,Go+o,a);this.content=i.decode(c)}else if(l===g_.BIN){const c=Go+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=sh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=sh[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=qs[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(p)},a,c,Vt,d)})})}}class eL{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tL{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Bx extends Va{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,d=f*f,p=d*f,g=e*c,v=g-c,m=-2*p+3*d,h=p-d,_=1-m,x=h-d+f;for(let y=0;y!==a;y++){const C=o[v+y+a],A=o[v+y+l]*u,T=o[g+y+a],R=o[g+y]*u;s[y]=_*C+x*A+m*T+h*R}return s}}const nL=new ni;class iL extends Bx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return nL.fromArray(s).normalize().toArray(s),s}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},__={9728:sn,9729:En,9984:q0,9985:Zl,9986:Zo,9987:Ni},v_={33071:lr,33648:Nc,10497:ao},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rL={CUBICSPLINE:void 0,LINEAR:Ia,STEP:La},Tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Mp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),n.DefaultMaterial}function Ur(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function bi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oL(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function aL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lL(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wf(t.attributes):e=n.indices+":"+wf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+wf(n.targets[i]);return e}function wf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function oh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uL=new Ge;class fL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new zb(this.options.manager):this.textureLoader=new Xb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ep(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ur(s,a,r),bi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ua.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ef[r.type],a=qs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Ot(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ef[r.type],c=qs[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==f){const h=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let x=t.cache.get(_);x||(v=new c(a,h*p,r.count*p/u),x=new vb(v,p/u),t.cache.add(_,x)),m=new xp(x,l,d%p/u,g)}else a===null?v=new c(r.count*l):v=new c(a,d,r.count*l),m=new Ot(v,l,g);if(r.sparse!==void 0){const h=Ef.SCALAR,_=qs[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new _(o[1],x,r.sparse.count*h),A=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized));for(let T=0,R=C.length;T<R;T++){const M=C[T];if(m.setX(M,A[T*l]),l>=2&&m.setY(M,A[T*l+1]),l>=3&&m.setZ(M,A[T*l+2]),l>=4&&m.setW(M,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=__[d.magFilter]||En,u.minFilter=__[d.minFilter]||Ni,u.wrapS=v_[d.wrapS]||ao,u.wrapT=v_[d.wrapT]||ao,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ft(v);m.needsUpdate=!0,d(m)}),t.load(ua.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),bi(f,o),f.userData.mimeType=o.mimeType||cL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bx,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Cx,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Mp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const f=r[$e.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Yt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mn);const u=s.alphaMode||Tf.OPAQUE;if(u===Tf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Xr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Xr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Xr){const f=s.emissiveFactor;a.emissive=new Pe().setRGB(f[0],f[1],f[2],Vt)}return s.emissiveTexture!==void 0&&o!==Xr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),bi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ur(r,f,s),f})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return x_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=lL(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=x_(new Hn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?sL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let h;const _=c[p];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new yb(v,_):new fn(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?h.geometry=m_(h.geometry,ox):m.mode===In.TRIANGLE_FAN&&(h.geometry=m_(h.geometry,eh));else if(m.mode===In.LINES)h=new Tb(v,_);else if(m.mode===In.LINE_STRIP)h=new Sp(v,_);else if(m.mode===In.LINE_LOOP)h=new wb(v,_);else if(m.mode===In.POINTS)h=new Ab(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&aL(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),bi(h,s),m.extensions&&Ur(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Ur(r,f[0],s),f[0];const d=new di;s.extensions&&Ur(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(mp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new _p(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),bi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Ge;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],g=f[2],v=f[3],m=f[4],h=[];for(let _=0,x=d.length;_<x;_++){const y=d[_],C=p[_],A=g[_],T=v[_],R=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=i._createAnimationTracks(y,C,A,T,R);if(M)for(let S=0;S<M.length;S++)h.push(M[S])}return new Nb(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,uL)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ax:c.length>1?u=new di:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),bi(u,s),s.extensions&&Ur(i,u,s),s.matrix!==void 0){const f=new Ge;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new di;i.name&&(s.name=r.createUniqueName(i.name)),bi(s,i),i.extensions&&Ur(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof ii||d instanceof Ft)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Qi[s.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qi[s.path]){case Qi.weights:c=ho;break;case Qi.rotation:c=po;break;case Qi.position:case Qi.scale:c=mo;break;default:switch(i.itemSize){case 1:c=ho;break;case 2:case 3:default:c=mo;break}break}const u=r.interpolation!==void 0?rL[r.interpolation]:Ia,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Qi[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=oh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof po?iL:Bx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dL(n,e,t){const i=e.attributes,r=new zn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=oh(qs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=oh(qs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new mi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function x_(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=sh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Qe.workingColorSpace!==Vt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),bi(n,e),dL(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?oL(n,e.targets,t):n})}const hL="#C8A96E",pL=1.2,mL=1.8,gL=[5,8,5],_L=6,vL=1.6,xL=8;function yL(n,e,t,i,r){const o=n.clone().applyMatrix4(e.matrixWorld).clone().project(t);return o.z>1?null:{x:(o.x*.5+.5)*i,y:(-o.y*.5+.5)*r,z:o.z}}function sc({mode:n="basic",model:e,steps:t,models:i,annotations:r=[],config:s={},hideControls:o=!1,compact:a=!1,initialStepIndex:l,initialInternalPos:c,enableZoom:u=!1,allowFullscreen:f=!0}){const{rotationSpeed:d=.4,initialEuler:p=[0,0,0],waitMs:g=2500,fadeMs:v=600,aspectRatio:m="16 / 9",maxWidth:h,maxHeight:_,colorMode:x="uniform",color:y=hL}=s,C=U.useRef(null),A=U.useRef(null),T=U.useRef(null),R=U.useRef(null),M=U.useRef(null),S=U.useRef(null),b=U.useRef(null),G=U.useRef([]),H=U.useRef([]),K=U.useRef(null),ee=U.useRef(new Dx),j=U.useRef(!1),te=U.useRef({x:0,y:0}),N=U.useRef(0),[Q,ne]=U.useState(!0),[ue,Se]=U.useState(null),[Be,Y]=U.useState(l??0),[ae,ge]=U.useState(c??0),[_e,Fe]=U.useState(!1),[ke,ze]=U.useState({w:0,h:0}),[at,L]=U.useState(!1),{quaternionRef:ct,applyAutoRotation:Ke,applyPointerDelta:qe}=Ux(p),Ae=(()=>{if(n==="basic")return[{path:e,opacity:1}];if(n==="progression"){const z=new Set,Z=[];return t.forEach(re=>{re.models.forEach(se=>{z.has(se)||(z.add(se),Z.push({path:se,opacity:1}))})}),Z}return n==="internal"?i.map(z=>({path:z.path,opacity:z.opacity})):[]})();U.useEffect(()=>{const z=C.current;if(!z)return;const Z=new wx;Z.background=new Pe("#1A1A1A"),M.current=Z;const re=new Zt(45,1,.01,100);re.position.set(0,0,3.5),re.lookAt(0,0,0),S.current=re;const se=new Tx({canvas:A.current,antialias:!0});se.setPixelRatio(Math.min(window.devicePixelRatio,2)),se.outputColorSpace=Yt,se.toneMapping=Y0,se.toneMappingExposure=1,R.current=se;const Me=new Nx(16777215,pL);Z.add(Me);const oe=new Da(16777215,mL);oe.position.set(...gL),Z.add(oe);const le=new Da(16777215,.4);le.position.set(-3,-4,-3),Z.add(le);const Le=new di;Z.add(Le),b.current=Le;const pe=new IP,fe=Ae.map(({path:Re,opacity:I},ie)=>new Promise(($,q)=>{pe.load(Re,de=>$({gltf:de,path:Re,opacity:I,modelIndex:ie}),void 0,q)}));Promise.all(fe).then(Re=>{const I=new zn;Re.forEach(({gltf:nt})=>{nt.scene.updateMatrixWorld(!0),I.union(new zn().setFromObject(nt.scene))});const ie=new F;I.getCenter(ie);const $=new F;I.getSize($);const q=$.length()/2,de=q>0?1/q:1,Ce=[],We=[];Re.forEach(({gltf:nt,path:Tt,opacity:je,modelIndex:Vn})=>{const Jt=new di;Jt.position.set(-ie.x,-ie.y,-ie.z),Jt.scale.setScalar(de),Jt.add(nt.scene),Le.add(Jt),We.push(nt.scene);const Wa=je<1,vi=n==="progression";nt.scene.traverse(gn=>{if(!gn.isMesh)return;gn.userData.basePath=Tt,gn.userData.baseOpacity=je,gn.userData.modelIndex=Vn;const To=Array.isArray(gn.material)?gn.material:[gn.material],wo=Wa||vi;x==="texture"?To.forEach(oi=>{oi.transparent=wo,oi.depthWrite=!0,oi.side=Mn}):(To.forEach(oi=>oi.dispose()),gn.material=new Px({color:new Pe(y),specular:new Pe(6710886),shininess:70,transparent:wo,depthWrite:!0,side:Mn})),Ce.push(gn)})}),G.current=Ce,H.current=We,ut(Ce,Be),n==="internal"&&Ne(Ce,ae),ne(!1)}).catch(Re=>{console.error("GLTFViewer load error:",Re),Se("Failed to load model."),ne(!1)});const ye=Ox(m),Ee=new ResizeObserver(Re=>{for(const I of Re){const{width:ie}=I.contentRect;let $=ie/ye;_&&$>_&&($=_),se.setSize(ie,$,!1),re.aspect=ie/$,re.updateProjectionMatrix(),T.current&&(T.current.width=ie,T.current.height=$),ze({w:ie,h:$})}});return Ee.observe(z),()=>{Ee.disconnect(),cancelAnimationFrame(K.current),se.dispose(),H.current.forEach(Re=>{Re.traverse(I=>{if(!I.isMesh)return;I.geometry.dispose(),(Array.isArray(I.material)?I.material:[I.material]).forEach($=>$.dispose())})})}},[]),U.useEffect(()=>{if(!u)return;const z=A.current;if(!z)return;const Z=re=>{re.preventDefault();const se=S.current;if(!se)return;const Me=Math.exp(re.deltaY*.001);se.position.z=mp.clamp(se.position.z*Me,vL,xL)};return z.addEventListener("wheel",Z,{passive:!1}),()=>z.removeEventListener("wheel",Z)},[u]);function ut(z,Z){var re;if(n==="basic"||n==="internal"){z.forEach(se=>{se.visible=!0});return}if(n==="progression"&&t){const se=new Set(((re=t[Z])==null?void 0:re.models)??[]);z.forEach(Me=>{Me.visible=se.has(Me.userData.basePath)})}}U.useEffect(()=>{G.current.length>0&&ut(G.current,Be)},[Be]);function Ne(z,Z){const re=Ae.length,se=Math.floor(Math.min(Z,re-1)),Me=Z-se;z.forEach(oe=>{const le=oe.userData.modelIndex,Le=oe.userData.baseOpacity;let pe;le<se?pe=Le:le===se?pe=1-Me*(1-Le):pe=1,(Array.isArray(oe.material)?oe.material:[oe.material]).forEach(ye=>{ye.opacity=pe})})}U.useEffect(()=>{n!=="internal"||G.current.length===0||Ne(G.current,ae)},[ae,n]);const De=U.useCallback(()=>{if(!T.current||!r.length)return;const z=T.current,Z=z.getContext("2d");Z.clearRect(0,0,z.width,z.height);const re=S.current,se=b.current;!re||!se||!G.current.length||r.forEach(({label:Me,headPosition:oe,textOffset:le})=>{const Le=new F(oe.x,oe.y,oe.z),pe=yL(Le,se,re,z.width,z.height);if(!pe)return;const fe=pe.x+le.x,ye=pe.y+le.y,Ee=pe.z>.85;Z.globalAlpha=Ee?.25:1,Z.beginPath(),Z.moveTo(fe,ye),Z.lineTo(pe.x,pe.y),Z.strokeStyle="#C8A96E",Z.lineWidth=1.5,Z.stroke();const Re=Math.atan2(pe.y-ye,pe.x-fe),I=8;Z.beginPath(),Z.moveTo(pe.x,pe.y),Z.lineTo(pe.x-I*Math.cos(Re-Math.PI/7),pe.y-I*Math.sin(Re-Math.PI/7)),Z.moveTo(pe.x,pe.y),Z.lineTo(pe.x-I*Math.cos(Re+Math.PI/7),pe.y-I*Math.sin(Re+Math.PI/7)),Z.strokeStyle="#C8A96E",Z.lineWidth=1.5,Z.stroke(),Z.font="12px Inter, sans-serif",Z.textAlign=le.x>=0?"left":"right",Z.textBaseline="middle";const ie=Z.measureText(Me),$=6,q=le.x>=0?fe-$:fe-ie.width-$;Z.fillStyle="rgba(15,15,15,0.75)",Z.beginPath(),Z.roundRect(q,ye-9,ie.width+$*2,18,4),Z.fill(),Z.fillStyle="#F0F0F0",Z.fillText(Me,fe,ye),Z.globalAlpha=1})},[r]);U.useEffect(()=>{if(Q)return;const z=()=>{K.current=requestAnimationFrame(z);const Z=ee.current.getDelta();j.current||Ke(Z,d),b.current&&b.current.quaternion.copy(ct.current),R.current.render(M.current,S.current),De()};return ee.current.start(),z(),()=>cancelAnimationFrame(K.current)},[Q,d,Ke,ct,De]);const P=U.useCallback(z=>{j.current=!0,N.current=0,te.current={x:z.clientX,y:z.clientY},z.currentTarget.setPointerCapture(z.pointerId),Fe(!0)},[]),E=U.useCallback(z=>{if(!j.current)return;const Z=z.clientX-te.current.x,re=z.clientY-te.current.y;te.current={x:z.clientX,y:z.clientY},N.current+=Math.sqrt(Z*Z+re*re),qe(Z,re)},[qe]),D=U.useCallback(()=>{const z=j.current;j.current=!1,Fe(!1),z&&f&&!Q&&!ue&&N.current<_L&&L(!0)},[f,Q,ue]),V=U.useCallback(z=>{Y(z)},[]),J=n==="progression"?t.map(z=>({label:z.label})):null;return k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:Mt.wrapper,ref:C,style:{maxWidth:h},children:[k.jsx("canvas",{ref:A,className:Mt.canvas,onPointerDown:P,onPointerMove:E,onPointerUp:D,onPointerLeave:D,style:{cursor:j.current?"grabbing":"grab"}}),r.length>0&&k.jsx("canvas",{ref:T,className:Mt.overlay,width:ke.w,height:ke.h}),Q&&k.jsxs("div",{className:Mt.loadingOverlay,children:[k.jsx("div",{className:Mt.spinner}),k.jsx("span",{className:Mt.loadingText,children:"Loading model…"})]}),ue&&k.jsx("div",{className:Mt.loadingOverlay,children:k.jsx("span",{className:Mt.errorText,children:ue})}),n==="progression"&&J&&!Q&&!o&&k.jsx("div",{className:Mt.sliderDock,children:k.jsx(Fx,{steps:J,currentIndex:Be,onChange:V,paused:_e,waitMs:g,fadeMs:v,showLabels:!a})}),n==="internal"&&!Q&&!o&&k.jsx("div",{className:Mt.sliderDock,children:k.jsx(Rp,{value:ae,onChange:ge,labels:i?i.map(z=>z.label):[],paused:_e,waitMs:g,fadeMs:v,showLabels:!a})})]}),at&&f&&k.jsx(du,{onClose:()=>L(!1),contentClassName:Mt.fullscreenContent,children:k.jsx(sc,{mode:n,model:e,steps:t,models:i,annotations:r,config:{initialEuler:p,waitMs:g,fadeMs:v,aspectRatio:m,colorMode:x,color:y,rotationSpeed:0,maxHeight:Math.round(window.innerHeight*.85)},hideControls:!0,compact:!1,initialStepIndex:Be,initialInternalPos:ae,enableZoom:!0,allowFullscreen:!1})})]})}const SL="_wrapper_1t69o_1",ML="_frame_1t69o_14",EL="_photo_1t69o_24",TL="_lightboxImage_1t69o_41",wL="_overlay_1t69o_48",AL="_sliderDock_1t69o_54",Fr={wrapper:SL,frame:ML,photo:EL,lightboxImage:TL,overlay:wL,sliderDock:AL};function RL({steps:n=[],config:e={},compact:t=!1}){var R,M,S,b;const{waitMs:i=2500,fadeMs:r=600,aspectRatio:s="auto",maxWidth:o,maxHeight:a}=e,[l,c]=U.useState(0),[u,f]=U.useState(null),[d,p]=U.useState(null),g=n.length;if(g===0)return null;const v=Math.max(0,Math.min(g-1,l)),m=Math.floor(v),h=Math.min(m+1,g-1),_=v-m,x=(R=n[m])==null?void 0:R.image,y=(M=n[h])==null?void 0:M.image,C=_<.5?m:h,A=G=>{if(s!=="auto"||u)return;const{naturalWidth:H,naturalHeight:K}=G.target;H&&K&&f(`${H} / ${K}`)},T=s==="auto"?u??"16 / 9":s;return k.jsxs("div",{className:Fr.wrapper,style:{maxWidth:o},children:[k.jsxs("div",{className:Fr.frame,style:{aspectRatio:T,maxHeight:a},onClick:()=>p(n[C]),role:"button",tabIndex:0,"aria-label":"View larger photo",onKeyDown:G=>{(G.key==="Enter"||G.key===" ")&&p(n[C])},children:[k.jsx("img",{src:x,alt:((S=n[m])==null?void 0:S.label)??"",className:Fr.photo,style:{opacity:1},draggable:!1,onLoad:A},x),h!==m&&k.jsx("img",{src:y,alt:((b=n[h])==null?void 0:b.label)??"",className:`${Fr.photo} ${Fr.overlay}`,style:{opacity:_},draggable:!1},y)]}),k.jsx("div",{className:Fr.sliderDock,children:k.jsx(Rp,{value:l,onChange:c,labels:n.map(G=>G.label),paused:d!==null,waitMs:i,fadeMs:r,showLabels:!t})}),d&&k.jsx(du,{onClose:()=>p(null),children:k.jsx("img",{src:d.image,alt:d.label??"",className:Fr.lightboxImage,draggable:!1})})]})}const CL="_thumbButton_14qdl_1",bL="_box_14qdl_12",PL="_thumb_14qdl_1",LL="_intrinsicHeight_14qdl_28",IL="_intrinsicWidth_14qdl_40",NL="_lightboxImage_14qdl_58",kl={thumbButton:CL,box:bL,thumb:PL,intrinsicHeight:LL,intrinsicWidth:IL,lightboxImage:NL};function zx({src:n,alt:e="Photo",fit:t="box"}){const[i,r]=U.useState(!1);return k.jsxs(k.Fragment,{children:[k.jsx("button",{type:"button",className:`${kl.thumbButton} ${kl[t]}`,onClick:()=>r(!0),children:k.jsx("img",{src:n,alt:e,className:kl.thumb,draggable:!1})}),i&&k.jsx(du,{onClose:()=>r(!1),children:k.jsx("img",{src:n,alt:"",className:kl.lightboxImage,draggable:!1})})]})}const DL="_itemBox_2p7nh_1",UL={itemBox:DL};function FL({item:n,style:e,photoFit:t="box",ratioOverride:i,compact:r=!1}){const s=i!=null?{...n.config,aspectRatio:i}:n.config;return k.jsx("div",{className:UL.itemBox,style:e,children:OL(n,s,r,t)})}function OL(n,e,t,i){switch(n.type){case"photo":return k.jsx(zx,{src:n.src,alt:n.alt,fit:i});case"photoProgression":return k.jsx(RL,{steps:n.steps,config:e,compact:t});case"stlBasic":return k.jsx(rc,{mode:"basic",model:n.model,config:e,compact:t});case"stlProgression":return k.jsx(rc,{mode:"progression",steps:n.steps,config:e,compact:t});case"stlInternal":return k.jsx(rc,{mode:"internal",models:n.models,annotations:n.annotations,config:e,compact:t});case"gltfBasic":return k.jsx(sc,{mode:"basic",model:n.model,config:e,compact:t});case"gltfProgression":return k.jsx(sc,{mode:"progression",steps:n.steps,config:e,compact:t});case"gltfInternal":return k.jsx(sc,{mode:"internal",models:n.models,annotations:n.annotations,config:e,compact:t});default:return null}}const kL="_grid_h6o6j_1",BL="_row_h6o6j_7",y_={grid:kL,row:BL},zL=220,HL=new Set(["photoProgression","stlProgression","stlInternal","gltfProgression","gltfInternal"]),VL=40,GL=76;function WL({items:n=[],gap:e=16}){const[t,i]=qE(),r=[];for(const s of n){const o=r[r.length-1];o&&o.row===s.row?o.items.push(s):r.push({row:s.row,items:[s]})}return k.jsx("div",{ref:t,className:y_.grid,style:{gap:`${e}px`},children:i>0&&r.map((s,o)=>{const a=e*Math.max(0,s.items.length-1),l=Math.max(0,i-a);return k.jsx("div",{className:y_.row,style:{gap:`${e}px`},children:s.items.map((c,u)=>{const f=c.width*l,d=c.height*i,p=f<zL;let g=d;return HL.has(c.type)&&(g=Math.max(1,d-(p?VL:GL))),k.jsx(FL,{item:c,photoFit:"box",style:{width:f,height:d,flex:`0 0 ${f}px`},ratioOverride:c.type==="photo"?void 0:f/g,compact:p},u)})},o)})})}const jL="_section_lo1id_1",XL="_title_lo1id_12",$L="_date_lo1id_19",YL="_skills_lo1id_25",KL="_skillTag_lo1id_33",qL="_body_lo1id_49",ZL="_media_lo1id_55",QL="_description_lo1id_61",wi={section:jL,title:XL,date:$L,skills:YL,skillTag:KL,body:qL,media:ZL,description:QL},JL=.55;function Ga({project:n}){var i,r;const e=((i=n.media)==null?void 0:i.length)>0,t=n.gridWidth??JL;return k.jsxs("section",{id:n.id,className:wi.section,children:[k.jsx("h3",{className:wi.title,children:n.title}),n.date&&k.jsx("p",{className:wi.date,children:n.date}),((r=n.skills)==null?void 0:r.length)>0&&k.jsx("ul",{className:wi.skills,children:n.skills.map(s=>k.jsx("li",{className:wi.skillTag,children:s},s))}),e?k.jsxs("div",{className:wi.body,children:[k.jsx("div",{className:wi.media,style:{"--grid-width":`${t*100}%`},children:k.jsx(WL,{items:n.media})}),k.jsx("p",{className:wi.description,children:n.description})]}):k.jsx("p",{className:wi.description,children:n.description})]})}const eI="_page_rxplc_1",tI="_header_rxplc_6",nI="_title_rxplc_12",Af={page:eI,header:tI,title:nI};function iI(){return k.jsxs("div",{className:Af.page,children:[k.jsx("header",{className:Af.header,children:k.jsx("h1",{className:Af.title,children:"Self-Driving Tractor"})}),KE.map(n=>k.jsx(Ga,{project:n},n.id))]})}const rI=[{id:"capstone-cad",title:"CAD Iteration Process",date:"Date TBD",description:"Placeholder — describe the CAD iteration process. What problem does the depth sensing woodcarving aid solve, who is the user, and how did the design evolve across iterations?",skills:["CAD","Systems Design"],media:[{type:"photo",src:"/assets/images/projects/capstone/capstone_diagram.svg",alt:"System diagram of the depth sensing woodcarving aid",row:0,width:1,height:.55},{type:"photo",src:"/assets/images/projects/capstone/top_holder_stress.png",alt:"Stress analysis of a CAD iteration of the top holder",row:1,width:1,height:.4}]},{id:"capstone-cnc",title:"CNC Process",date:"Date TBD",description:"Placeholder — describe the CNC process used to build the physical unit.",skills:["CNC","Fabrication"],media:[]},{id:"capstone-icp",title:"ICP Zeroing",date:"Date TBD",description:"Placeholder — describe ICP zeroing. ICP was used instead of defined reference points because depth information was needed — explain how the registration works and what the point cloud and projection images show.",skills:["Depth Sensing","Point Cloud Processing","ICP","C++"],media:[{type:"photo",src:"/assets/images/projects/capstone/point_cloud.png",alt:"Captured point cloud registered against the target carving",row:0,width:.5,height:.45},{type:"photo",src:"/assets/images/projects/capstone/projection.png",alt:"Depth-corrected image projected onto the workpiece",row:0,width:.5,height:.45}]},{id:"capstone-ui",title:"UI Development",date:"Date TBD",description:"Placeholder — describe the UI development. What does the interface let the user do?",skills:["UI Design","C++"],media:[]}],sI="_page_rxplc_1",oI="_header_rxplc_6",aI="_title_rxplc_12",Rf={page:sI,header:oI,title:aI};function lI(){return k.jsxs("div",{className:Rf.page,children:[k.jsx("header",{className:Rf.header,children:k.jsx("h1",{className:Rf.title,children:"Depth Sensing Woodcarving Aid — Capstone"})}),rI.map(n=>k.jsx(Ga,{project:n},n.id))]})}const cI=[{id:"globe",title:"CNC Wood Globe",date:"Date TBD",description:"Placeholder — describe the globe. What wood species? How was the toolpath generated? What were the main challenges?",skills:["CNC Milling","CAD","Toolpath Generation","Woodworking"],media:[{type:"photo",src:"/assets/images/projects/woodworking/globe_unravelled.jpg",alt:"Continents unravelled into flat CNC-cut marquetry segments",row:0,width:1,height:.22},{type:"photo",src:"/assets/images/projects/woodworking/globe_rough.jpg",alt:"Rough glued hemispheres",row:1,width:.5,height:.45},{type:"photo",src:"/assets/images/projects/woodworking/globe.jpg",alt:"Final Globe",row:1,width:.5,height:.45}]},{id:"topography",title:"CNC Topography Map",date:"Date TBD",description:"Placeholder — describe the topography map. What location? How was the elevation data sourced? What wood types were used for the different layers?",skills:["CNC Milling","CAD","Woodworking","Data Processing","Python"],media:[{type:"gltfBasic",model:"/assets/models/elevation/farm_elevation.gltf",config:{rotationSpeed:.3},row:0,width:.5,height:.4},{type:"photo",src:"/assets/images/projects/woodworking/cnc_elevation.png",alt:"CNC router cutting the elevation contours",row:0,width:.5,height:.4}]}],uI=[{type:"photo",caption:"F1 Logo",src:"/assets/images/projects/woodworking/f1.jpg"},{type:"photo",caption:"Toronto Maple Leafs Logo",src:"/assets/images/projects/woodworking/leafs.jpg"},{type:"photo",caption:"Buffalo Bills Logo",src:"/assets/images/projects/woodworking/bills.png"},{type:"photo",caption:"Project Ploughshares Logo",src:"/assets/images/projects/woodworking/ploughshares.png"},{type:"photo",caption:"CNC Cow",src:"/assets/images/projects/woodworking/cow.jpeg"},{type:"photo",caption:"Chess Set",placeholder:!0,note:"chess set photo needed"},{type:"photo",caption:"Sphere Light",src:"/assets/images/projects/woodworking/sphere_light.png"}],fI="_grid_181l1_1",dI="_item_181l1_7",hI="_media_181l1_13",pI="_video_181l1_26",mI="_placeholder_181l1_33",gI="_placeholderLabel_181l1_48",_I="_placeholderNote_181l1_56",vI="_caption_181l1_62",Ji={grid:fI,item:dI,media:hI,video:pI,placeholder:mI,placeholderLabel:gI,placeholderNote:_I,caption:vI};function Cp({items:n=[]}){return n.length===0?null:k.jsx("div",{className:Ji.grid,children:n.map((e,t)=>k.jsxs("figure",{className:Ji.item,children:[k.jsx("div",{className:Ji.media,children:e.placeholder?k.jsxs("div",{className:Ji.placeholder,children:[k.jsx("span",{className:Ji.placeholderLabel,children:e.type==="video"?"Video needed":"Image needed"}),e.note&&k.jsx("span",{className:Ji.placeholderNote,children:e.note})]}):e.type==="video"?k.jsx("video",{className:Ji.video,src:e.src,controls:!0,muted:!0,loop:!0,playsInline:!0}):k.jsx(zx,{src:e.src,alt:e.alt??e.caption,fit:"box"})}),k.jsx("figcaption",{className:Ji.caption,children:e.caption})]},t))})}const xI="_page_oernf_1",yI="_header_oernf_6",SI="_title_oernf_12",MI="_gridSection_oernf_18",EI="_gridHeading_oernf_24",Wo={page:xI,header:yI,title:SI,gridSection:MI,gridHeading:EI};function TI(){return k.jsxs("div",{className:Wo.page,children:[k.jsx("header",{className:Wo.header,children:k.jsx("h1",{className:Wo.title,children:"Woodworking & CNC"})}),cI.map(n=>k.jsx(Ga,{project:n},n.id)),k.jsxs("section",{className:Wo.gridSection,children:[k.jsx("h2",{className:Wo.gridHeading,children:"More Projects"}),k.jsx(Cp,{items:uI})]})]})}const wI=[{id:"catan-tiles",title:"Catan River Tile Optimizer",date:"Date TBD",description:"Placeholder — describe the Catan river tile optimizer. What constraint was being optimized — maximizing the number of valid board configurations where rivers connect correctly across hex tile boundaries?",skills:["Python","Combinatorics","Optimization","Visualization"],media:[{type:"photo",src:"/assets/images/projects/code/catan_solution.png",alt:"Optimized river layout across the hex board",row:0,width:1,height:.85}]},{id:"disk-flight-simulation",title:"Disk Flight Simulation",date:"Date TBD",description:"Placeholder — describe the disk flight simulation. What physics model was used, and what was it built to predict or explore?",skills:["Python","Physics Simulation"],media:[]},{id:"onshape-engrave",title:"OnShape Engrave Feature",date:"Date TBD",description:"Placeholder — describe the engrave feature. Takes a shape with two planar faces and produces the geometry as if an engraving tool cut it out. Solves the self-intersecting spline problem that prevents this from being done with standard OnShape features.",skills:["OnShape FeatureScript","CAD","Computational Geometry"],media:[]}],AI=[{type:"video",caption:"Inverse Kinematics Simulation",placeholder:!0,note:"video file needed"},{type:"photo",caption:"Album Art Calculation",placeholder:!0,note:"image file needed"},{type:"video",caption:"Disk Speed Calculation",placeholder:!0,note:"video file needed"},{type:"photo",caption:"Random Height Generator",placeholder:!0,note:"image file needed"},{type:"photo",caption:"OnShape Lumber Requirements",placeholder:!0,note:"image file needed"}],RI="_page_oernf_1",CI="_header_oernf_6",bI="_title_oernf_12",PI="_gridSection_oernf_18",LI="_gridHeading_oernf_24",jo={page:RI,header:CI,title:bI,gridSection:PI,gridHeading:LI};function II(){return k.jsxs("div",{className:jo.page,children:[k.jsx("header",{className:jo.header,children:k.jsx("h1",{className:jo.title,children:"Code"})}),wI.map(n=>k.jsx(Ga,{project:n},n.id)),k.jsxs("section",{className:jo.gridSection,children:[k.jsx("h2",{className:jo.gridHeading,children:"More Projects"}),k.jsx(Cp,{items:AI})]})]})}const NI=[{id:"stormbreaker",title:"Stormbreaker Axe",date:"Date TBD",description:"Placeholder — describe the Stormbreaker build, covering both CAD design iteration and physical fabrication. What materials? How was the head shaped and designed in CAD? What was the handle construction?",skills:["CAD","Woodworking","Fabrication","Hand Tools","Finishing"],media:[{type:"photo",src:"/assets/images/projects/stormbreaker/heat_treating.jpg",alt:"Heat treating the axe head in a forge",row:0,width:1,height:.3},{type:"gltfInternal",models:[{path:"/assets/models/stormbreaker/cosmetics.gltf",label:"Cosmetics",opacity:.1},{path:"/assets/models/stormbreaker/shell.gltf",label:"Shell",opacity:.1},{path:"/assets/models/stormbreaker/internals.gltf",label:"Internals",opacity:.1},{path:"/assets/models/stormbreaker/skeleton.gltf",label:"Skeleton",opacity:1}],config:{rotationSpeed:.4,initialEuler:[.3,0,0],waitMs:2500,fadeMs:600},row:1,width:.6,height:.45},{type:"photo",src:"/assets/images/projects/stormbreaker/internals.jpg",alt:"Riveted steel skeleton inside the handle",row:1,width:.4,height:.45}]}],DI=[{type:"photo",caption:"Welded Birds",placeholder:!0,note:"image file needed"},{type:"photo",caption:"Custom Lego Sets",src:"/assets/images/projects/other/lego.jpg"},{type:"photo",caption:"Motor Endplate CNCing",placeholder:!0,note:"image file needed"},{type:"photo",caption:"Tool Organization CNCing",placeholder:!0,note:"image file needed"}],UI="_page_oernf_1",FI="_header_oernf_6",OI="_title_oernf_12",kI="_gridSection_oernf_18",BI="_gridHeading_oernf_24",Xo={page:UI,header:FI,title:OI,gridSection:kI,gridHeading:BI};function zI(){return k.jsxs("div",{className:Xo.page,children:[k.jsx("header",{className:Xo.header,children:k.jsx("h1",{className:Xo.title,children:"Other Projects"})}),NI.map(n=>k.jsx(Ga,{project:n},n.id)),k.jsxs("section",{className:Xo.gridSection,children:[k.jsx("h2",{className:Xo.gridHeading,children:"More Projects"}),k.jsx(Cp,{items:DI})]})]})}function HI(){return k.jsxs(vE,{children:[k.jsx(FE,{}),k.jsx("main",{children:k.jsxs(uE,{children:[k.jsx(Ai,{path:"/",element:k.jsx(jE,{})}),k.jsx(Ai,{path:"/experience",element:k.jsx(YE,{})}),k.jsx(Ai,{path:"/projects",element:k.jsx(lE,{to:"/projects/tractor",replace:!0})}),k.jsx(Ai,{path:"/projects/tractor",element:k.jsx(iI,{})}),k.jsx(Ai,{path:"/projects/capstone",element:k.jsx(lI,{})}),k.jsx(Ai,{path:"/projects/woodworking",element:k.jsx(TI,{})}),k.jsx(Ai,{path:"/projects/code",element:k.jsx(II,{})}),k.jsx(Ai,{path:"/projects/other",element:k.jsx(zI,{})})]})}),k.jsx(VE,{})]})}D0(document.getElementById("root")).render(k.jsx(U.StrictMode,{children:k.jsx(HI,{})}));
