(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var lh={exports:{}},na={},uh={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function y_(){if(bp)return we;bp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.iterator;function F(O){return O===null||typeof O!="object"?null:(O=N&&O[N]||O["@@iterator"],typeof O=="function"?O:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,J={};function $(O,j,oe){this.props=O,this.context=j,this.refs=J,this.updater=oe||G}$.prototype.isReactComponent={},$.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ce(){}ce.prototype=$.prototype;function he(O,j,oe){this.props=O,this.context=j,this.refs=J,this.updater=oe||G}var me=he.prototype=new ce;me.constructor=he,K(me,$.prototype),me.isPureReactComponent=!0;var ge=Array.isArray,Ne=Object.prototype.hasOwnProperty,ye={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(O,j,oe){var _e,Ee={},Ae=null,Oe=null;if(j!=null)for(_e in j.ref!==void 0&&(Oe=j.ref),j.key!==void 0&&(Ae=""+j.key),j)Ne.call(j,_e)&&!P.hasOwnProperty(_e)&&(Ee[_e]=j[_e]);var xe=arguments.length-2;if(xe===1)Ee.children=oe;else if(1<xe){for(var be=Array(xe),lt=0;lt<xe;lt++)be[lt]=arguments[lt+2];Ee.children=be}if(O&&O.defaultProps)for(_e in xe=O.defaultProps,xe)Ee[_e]===void 0&&(Ee[_e]=xe[_e]);return{$$typeof:i,type:O,key:Ae,ref:Oe,props:Ee,_owner:ye.current}}function S(O,j){return{$$typeof:i,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(oe){return j[oe]})}var x=/\/+/g;function I(O,j){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):j.toString(36)}function Ye(O,j,oe,_e,Ee){var Ae=typeof O;(Ae==="undefined"||Ae==="boolean")&&(O=null);var Oe=!1;if(O===null)Oe=!0;else switch(Ae){case"string":case"number":Oe=!0;break;case"object":switch(O.$$typeof){case i:case e:Oe=!0}}if(Oe)return Oe=O,Ee=Ee(Oe),O=_e===""?"."+I(Oe,0):_e,ge(Ee)?(oe="",O!=null&&(oe=O.replace(x,"$&/")+"/"),Ye(Ee,j,oe,"",function(lt){return lt})):Ee!=null&&(C(Ee)&&(Ee=S(Ee,oe+(!Ee.key||Oe&&Oe.key===Ee.key?"":(""+Ee.key).replace(x,"$&/")+"/")+O)),j.push(Ee)),1;if(Oe=0,_e=_e===""?".":_e+":",ge(O))for(var xe=0;xe<O.length;xe++){Ae=O[xe];var be=_e+I(Ae,xe);Oe+=Ye(Ae,j,oe,be,Ee)}else if(be=F(O),typeof be=="function")for(O=be.call(O),xe=0;!(Ae=O.next()).done;)Ae=Ae.value,be=_e+I(Ae,xe++),Oe+=Ye(Ae,j,oe,be,Ee);else if(Ae==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Oe}function At(O,j,oe){if(O==null)return O;var _e=[],Ee=0;return Ye(O,_e,"","",function(Ae){return j.call(oe,Ae,Ee++)}),_e}function Rt(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=oe)},function(oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=oe)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var Le={current:null},Y={transition:null},ae={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Y,ReactCurrentOwner:ye};function ee(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:At,forEach:function(O,j,oe){At(O,function(){j.apply(this,arguments)},oe)},count:function(O){var j=0;return At(O,function(){j++}),j},toArray:function(O){return At(O,function(j){return j})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},we.Component=$,we.Fragment=n,we.Profiler=a,we.PureComponent=he,we.StrictMode=s,we.Suspense=y,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,we.act=ee,we.cloneElement=function(O,j,oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var _e=K({},O.props),Ee=O.key,Ae=O.ref,Oe=O._owner;if(j!=null){if(j.ref!==void 0&&(Ae=j.ref,Oe=ye.current),j.key!==void 0&&(Ee=""+j.key),O.type&&O.type.defaultProps)var xe=O.type.defaultProps;for(be in j)Ne.call(j,be)&&!P.hasOwnProperty(be)&&(_e[be]=j[be]===void 0&&xe!==void 0?xe[be]:j[be])}var be=arguments.length-2;if(be===1)_e.children=oe;else if(1<be){xe=Array(be);for(var lt=0;lt<be;lt++)xe[lt]=arguments[lt+2];_e.children=xe}return{$$typeof:i,type:O.type,key:Ee,ref:Ae,props:_e,_owner:Oe}},we.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},we.createElement=T,we.createFactory=function(O){var j=T.bind(null,O);return j.type=O,j},we.createRef=function(){return{current:null}},we.forwardRef=function(O){return{$$typeof:g,render:O}},we.isValidElement=C,we.lazy=function(O){return{$$typeof:R,_payload:{_status:-1,_result:O},_init:Rt}},we.memo=function(O,j){return{$$typeof:E,type:O,compare:j===void 0?null:j}},we.startTransition=function(O){var j=Y.transition;Y.transition={};try{O()}finally{Y.transition=j}},we.unstable_act=ee,we.useCallback=function(O,j){return Le.current.useCallback(O,j)},we.useContext=function(O){return Le.current.useContext(O)},we.useDebugValue=function(){},we.useDeferredValue=function(O){return Le.current.useDeferredValue(O)},we.useEffect=function(O,j){return Le.current.useEffect(O,j)},we.useId=function(){return Le.current.useId()},we.useImperativeHandle=function(O,j,oe){return Le.current.useImperativeHandle(O,j,oe)},we.useInsertionEffect=function(O,j){return Le.current.useInsertionEffect(O,j)},we.useLayoutEffect=function(O,j){return Le.current.useLayoutEffect(O,j)},we.useMemo=function(O,j){return Le.current.useMemo(O,j)},we.useReducer=function(O,j,oe){return Le.current.useReducer(O,j,oe)},we.useRef=function(O){return Le.current.useRef(O)},we.useState=function(O){return Le.current.useState(O)},we.useSyncExternalStore=function(O,j,oe){return Le.current.useSyncExternalStore(O,j,oe)},we.useTransition=function(){return Le.current.useTransition()},we.version="18.3.1",we}var Up;function Iu(){return Up||(Up=1,uh.exports=y_()),uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function v_(){if(Fp)return na;Fp=1;var i=Iu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(g,y,E){var R,N={},F=null,G=null;E!==void 0&&(F=""+E),y.key!==void 0&&(F=""+y.key),y.ref!==void 0&&(G=y.ref);for(R in y)s.call(y,R)&&!c.hasOwnProperty(R)&&(N[R]=y[R]);if(g&&g.defaultProps)for(R in y=g.defaultProps,y)N[R]===void 0&&(N[R]=y[R]);return{$$typeof:e,type:g,key:F,ref:G,props:N,_owner:a.current}}return na.Fragment=n,na.jsx=f,na.jsxs=f,na}var jp;function __(){return jp||(jp=1,lh.exports=v_()),lh.exports}var jt=__(),Vt=Iu(),Bl={},ch={exports:{}},Kt={},hh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function E_(){return zp||(zp=1,function(i){function e(Y,ae){var ee=Y.length;Y.push(ae);e:for(;0<ee;){var O=ee-1>>>1,j=Y[O];if(0<a(j,ae))Y[O]=ae,Y[ee]=j,ee=O;else break e}}function n(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ae=Y[0],ee=Y.pop();if(ee!==ae){Y[0]=ee;e:for(var O=0,j=Y.length,oe=j>>>1;O<oe;){var _e=2*(O+1)-1,Ee=Y[_e],Ae=_e+1,Oe=Y[Ae];if(0>a(Ee,ee))Ae<j&&0>a(Oe,Ee)?(Y[O]=Oe,Y[Ae]=ee,O=Ae):(Y[O]=Ee,Y[_e]=ee,O=_e);else if(Ae<j&&0>a(Oe,ee))Y[O]=Oe,Y[Ae]=ee,O=Ae;else break e}}return ae}function a(Y,ae){var ee=Y.sortIndex-ae.sortIndex;return ee!==0?ee:Y.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();i.unstable_now=function(){return f.now()-g}}var y=[],E=[],R=1,N=null,F=3,G=!1,K=!1,J=!1,$=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Y){for(var ae=n(E);ae!==null;){if(ae.callback===null)s(E);else if(ae.startTime<=Y)s(E),ae.sortIndex=ae.expirationTime,e(y,ae);else break;ae=n(E)}}function ge(Y){if(J=!1,me(Y),!K)if(n(y)!==null)K=!0,Rt(Ne);else{var ae=n(E);ae!==null&&Le(ge,ae.startTime-Y)}}function Ne(Y,ae){K=!1,J&&(J=!1,ce(T),T=-1),G=!0;var ee=F;try{for(me(ae),N=n(y);N!==null&&(!(N.expirationTime>ae)||Y&&!D());){var O=N.callback;if(typeof O=="function"){N.callback=null,F=N.priorityLevel;var j=O(N.expirationTime<=ae);ae=i.unstable_now(),typeof j=="function"?N.callback=j:N===n(y)&&s(y),me(ae)}else s(y);N=n(y)}if(N!==null)var oe=!0;else{var _e=n(E);_e!==null&&Le(ge,_e.startTime-ae),oe=!1}return oe}finally{N=null,F=ee,G=!1}}var ye=!1,P=null,T=-1,S=5,C=-1;function D(){return!(i.unstable_now()-C<S)}function x(){if(P!==null){var Y=i.unstable_now();C=Y;var ae=!0;try{ae=P(!0,Y)}finally{ae?I():(ye=!1,P=null)}}else ye=!1}var I;if(typeof he=="function")I=function(){he(x)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,At=Ye.port2;Ye.port1.onmessage=x,I=function(){At.postMessage(null)}}else I=function(){$(x,0)};function Rt(Y){P=Y,ye||(ye=!0,I())}function Le(Y,ae){T=$(function(){Y(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_continueExecution=function(){K||G||(K=!0,Rt(Ne))},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return F},i.unstable_getFirstCallbackNode=function(){return n(y)},i.unstable_next=function(Y){switch(F){case 1:case 2:case 3:var ae=3;break;default:ae=F}var ee=F;F=ae;try{return Y()}finally{F=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Y,ae){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ee=F;F=Y;try{return ae()}finally{F=ee}},i.unstable_scheduleCallback=function(Y,ae,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,Y={id:R++,callback:ae,priorityLevel:Y,startTime:ee,expirationTime:j,sortIndex:-1},ee>O?(Y.sortIndex=ee,e(E,Y),n(y)===null&&Y===n(E)&&(J?(ce(T),T=-1):J=!0,Le(ge,ee-O))):(Y.sortIndex=j,e(y,Y),K||G||(K=!0,Rt(Ne))),Y},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Y){var ae=F;return function(){var ee=F;F=ae;try{return Y.apply(this,arguments)}finally{F=ee}}}}(fh)),fh}var Bp;function w_(){return Bp||(Bp=1,hh.exports=E_()),hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function T_(){if($p)return Kt;$p=1;var i=Iu(),e=w_();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){f(t,r),f(t+"Capture",r)}function f(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},N={};function F(t){return y.call(N,t)?!0:y.call(R,t)?!1:E.test(t)?N[t]=!0:(R[t]=!0,!1)}function G(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K(t,r,o,u){if(r===null||typeof r>"u"||G(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(t,r,o,u,h,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new J(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new J(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new J(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new J(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new J(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new J(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new J(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new J(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new J(t,5,!1,t.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function he(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ce,he);$[r]=new J(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ce,he);$[r]=new J(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ce,he);$[r]=new J(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new J(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new J(t,1,!1,t.toLowerCase(),null,!0,!0)});function me(t,r,o,u){var h=$.hasOwnProperty(r)?$[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,o,h,u)&&(o=null),u||h===null?F(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var ge=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),ye=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,O;function j(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var oe=!1;function _e(t,r){if(!t||oe)return"";oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var u=b}Reflect.construct(t,[],r)}else{try{r.call()}catch(b){u=b}t.call(r.prototype)}else{try{throw Error()}catch(b){u=b}t()}}catch(b){if(b&&u&&typeof b.stack=="string"){for(var h=b.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,w=p.length-1;1<=v&&0<=w&&h[v]!==p[w];)w--;for(;1<=v&&0<=w;v--,w--)if(h[v]!==p[w]){if(v!==1||w!==1)do if(v--,w--,0>w||h[v]!==p[w]){var A=`
`+h[v].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=v&&0<=w);break}}}finally{oe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function Ee(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=_e(t.type,!1),t;case 11:return t=_e(t.type.render,!1),t;case 1:return t=_e(t.type,!0),t;default:return""}}function Ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case ye:return"Portal";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case Ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case x:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return r=t.displayName||null,r!==null?r:Ae(t.type)||"Memo";case Rt:r=t._payload,t=t._init;try{return Ae(t(r))}catch{}}return null}function Oe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function lt(t){var r=be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Yn(t){t._valueTracker||(t._valueTracker=lt(t))}function Yi(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=be(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Sr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ui(t,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ji(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=xe(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ao(t,r){r=r.checked,r!=null&&me(t,"checked",r,!1)}function lo(t,r){ao(t,r);var o=xe(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Zi(t,r.type,o):r.hasOwnProperty("defaultValue")&&Zi(t,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ca(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Zi(t,r,o){(r!=="number"||Sr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Jn=Array.isArray;function Zn(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function uo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function es(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Jn(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:xe(o)}}function ts(t,r){var o=xe(r.value),u=xe(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function co(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function rt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function it(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?rt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var er,ho=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=er.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ar(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hi=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){hi.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),ci[r]=ci[t]})});function fo(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ci.hasOwnProperty(t)&&ci[t]?(""+r).trim():r+"px"}function po(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=fo(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var mo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(t,r){if(r){if(mo[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function yo(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function ns(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,sn=null,Vn=null;function is(t){if(t=zo(t)){if(typeof rs!="function")throw Error(n(280));var r=t.stateNode;r&&(r=rl(r),rs(t.stateNode,t.type,r))}}function Ln(t){sn?Vn?Vn.push(t):Vn=[t]:sn=t}function vo(){if(sn){var t=sn,r=Vn;if(Vn=sn=null,is(t),r)for(t=0;t<r.length;t++)is(r[t])}}function di(t,r){return t(r)}function _o(){}var tr=!1;function Eo(t,r,o){if(tr)return t(r,o);tr=!0;try{return di(t,r,o)}finally{tr=!1,(sn!==null||Vn!==null)&&(_o(),vo())}}function Je(t,r){var o=t.stateNode;if(o===null)return null;var u=rl(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ss=!1;if(g)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ss=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ss=!1}function pi(t,r,o,u,h,p,v,w,A){var b=Array.prototype.slice.call(arguments,3);try{r.apply(o,b)}catch(H){this.onError(H)}}var mi=!1,os=null,gn=!1,wo=null,Mu={onError:function(t){mi=!0,os=t}};function as(t,r,o,u,h,p,v,w,A){mi=!1,os=null,pi.apply(Mu,arguments)}function ka(t,r,o,u,h,p,v,w,A){if(as.apply(this,arguments),mi){if(mi){var b=os;mi=!1,os=null}else throw Error(n(198));gn||(gn=!0,wo=b)}}function yn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function gi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function vn(t){if(yn(t)!==t)throw Error(n(188))}function Pa(t){var r=t.alternate;if(!r){if(r=yn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return vn(h),t;if(p===u)return vn(h),r;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,w=h.child;w;){if(w===o){v=!0,o=h,u=p;break}if(w===u){v=!0,u=h,o=p;break}w=w.sibling}if(!v){for(w=p.child;w;){if(w===o){v=!0,o=p,u=h;break}if(w===u){v=!0,u=p,o=h;break}w=w.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function To(t){return t=Pa(t),t!==null?ls(t):null}function ls(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=ls(t);if(r!==null)return r;t=t.sibling}return null}var us=e.unstable_scheduleCallback,Io=e.unstable_cancelCallback,Na=e.unstable_shouldYield,bu=e.unstable_requestPaint,Ue=e.unstable_now,Da=e.unstable_getCurrentPriorityLevel,yi=e.unstable_ImmediatePriority,Rr=e.unstable_UserBlockingPriority,on=e.unstable_NormalPriority,So=e.unstable_LowPriority,Oa=e.unstable_IdlePriority,vi=null,Yt=null;function xa(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(vi,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:La,Ao=Math.log,Va=Math.LN2;function La(t){return t>>>=0,t===0?32:31-(Ao(t)/Va|0)|0}var cs=64,hs=4194304;function Cr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _i(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,p=t.pingedLanes,v=o&268435455;if(v!==0){var w=v&~h;w!==0?u=Cr(w):(p&=v,p!==0&&(u=Cr(p)))}else v=o&~h,v!==0?u=Cr(v):p!==0&&(u=Cr(p));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Mt(r),h=1<<o,u|=t[o],r&=~h;return u}function Uu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nr(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes;0<p;){var v=31-Mt(p),w=1<<v,A=h[v];A===-1?((w&o)===0||(w&u)!==0)&&(h[v]=Uu(w,r)):A<=r&&(t.expiredLanes|=w),p&=~w}}function Jt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ei(){var t=cs;return cs<<=1,(cs&4194240)===0&&(cs=64),t}function kr(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Pr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Mt(r),t[r]=o}function Me(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Mt(o),p=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~p}}function Nr(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Mt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Se=0;function Dr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ma,fs,ba,Ua,Fa,Ro=!1,Mn=[],gt=null,_n=null,En=null,Or=new Map,an=new Map,bn=[],Fu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ja(t,r){switch(t){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Or.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(r.pointerId)}}function zt(t,r,o,u,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=zo(r),r!==null&&fs(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function ju(t,r,o,u,h){switch(r){case"focusin":return gt=zt(gt,t,r,o,u,h),!0;case"dragenter":return _n=zt(_n,t,r,o,u,h),!0;case"mouseover":return En=zt(En,t,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Or.set(p,zt(Or.get(p)||null,t,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,an.set(p,zt(an.get(p)||null,t,r,o,u,h)),!0}return!1}function za(t){var r=Ai(t.target);if(r!==null){var o=yn(r);if(o!==null){if(r=o.tag,r===13){if(r=gi(o),r!==null){t.blockedOn=r,Fa(t.priority,function(){ba(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rr(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ds(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);fi=u,o.target.dispatchEvent(u),fi=null}else return r=zo(o),r!==null&&fs(r),t.blockedOn=o,!1;r.shift()}return!0}function wi(t,r,o){rr(t)&&o.delete(r)}function Ba(){Ro=!1,gt!==null&&rr(gt)&&(gt=null),_n!==null&&rr(_n)&&(_n=null),En!==null&&rr(En)&&(En=null),Or.forEach(wi),an.forEach(wi)}function wn(t,r){t.blockedOn===r&&(t.blockedOn=null,Ro||(Ro=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ba)))}function Tn(t){function r(h){return wn(h,t)}if(0<Mn.length){wn(Mn[0],t);for(var o=1;o<Mn.length;o++){var u=Mn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(gt!==null&&wn(gt,t),_n!==null&&wn(_n,t),En!==null&&wn(En,t),Or.forEach(r),an.forEach(r),o=0;o<bn.length;o++)u=bn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<bn.length&&(o=bn[0],o.blockedOn===null);)za(o),o.blockedOn===null&&bn.shift()}var ir=ge.ReactCurrentBatchConfig,xr=!0;function $e(t,r,o,u){var h=Se,p=ir.transition;ir.transition=null;try{Se=1,Co(t,r,o,u)}finally{Se=h,ir.transition=p}}function zu(t,r,o,u){var h=Se,p=ir.transition;ir.transition=null;try{Se=4,Co(t,r,o,u)}finally{Se=h,ir.transition=p}}function Co(t,r,o,u){if(xr){var h=ds(t,r,o,u);if(h===null)Ju(t,r,u,Ti,o),ja(t,u);else if(ju(h,t,r,o,u))u.stopPropagation();else if(ja(t,u),r&4&&-1<Fu.indexOf(t)){for(;h!==null;){var p=zo(h);if(p!==null&&Ma(p),p=ds(t,r,o,u),p===null&&Ju(t,r,u,Ti,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else Ju(t,r,u,null,o)}}var Ti=null;function ds(t,r,o,u){if(Ti=null,t=ns(u),t=Ai(t),t!==null)if(r=yn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=gi(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ti=t,null}function ko(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Da()){case yi:return 1;case Rr:return 4;case on:case So:return 16;case Oa:return 536870912;default:return 16}default:return 16}}var Zt=null,ps=null,Bt=null;function Po(){if(Bt)return Bt;var t,r=ps,o=r.length,u,h="value"in Zt?Zt.value:Zt.textContent,p=h.length;for(t=0;t<o&&r[t]===h[t];t++);var v=o-t;for(u=1;u<=v&&r[o-u]===h[p-u];u++);return Bt=h.slice(t,1<u?1-u:void 0)}function ms(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Un(){return!0}function No(){return!1}function yt(t){function r(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:No,this.isPropagationStopped=No,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=yt(In),Fn=ee({},In,{view:0,detail:0}),Bu=yt(Fn),ys,sr,Vr,Ii=ee({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(ys=t.screenX-Vr.screenX,sr=t.screenY-Vr.screenY):sr=ys=0,Vr=t),ys)},movementY:function(t){return"movementY"in t?t.movementY:sr}}),vs=yt(Ii),Do=ee({},Ii,{dataTransfer:0}),$a=yt(Do),_s=ee({},Fn,{relatedTarget:0}),Es=yt(_s),Ha=ee({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),or=yt(Ha),Wa=ee({},In,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ga=yt(Wa),qa=ee({},In,{data:0}),Oo=yt(qa),ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ka={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qa(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Ka[t])?!!r[t]:!1}function jn(){return Qa}var l=ee({},Fn,{key:function(t){if(t.key){var r=ws[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ms(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(t){return t.type==="keypress"?ms(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ms(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d=yt(l),m=ee({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_=yt(m),V=ee({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),U=yt(V),X=ee({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=yt(X),st=ee({},Ii,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Re=yt(st),ut=[9,13,27,32],et=g&&"CompositionEvent"in window,ln=null;g&&"documentMode"in document&&(ln=document.documentMode);var en=g&&"TextEvent"in window&&!ln,Si=g&&(!et||ln&&8<ln&&11>=ln),Ts=" ",Df=!1;function Of(t,r){switch(t){case"keyup":return ut.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function pv(t,r){switch(t){case"compositionend":return xf(r);case"keypress":return r.which!==32?null:(Df=!0,Ts);case"textInput":return t=r.data,t===Ts&&Df?null:t;default:return null}}function mv(t,r){if(Is)return t==="compositionend"||!et&&Of(t,r)?(t=Po(),Bt=ps=Zt=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Si&&r.locale!=="ko"?null:r.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!gv[t.type]:r==="textarea"}function Lf(t,r,o,u){Ln(u),r=el(r,"onChange"),0<r.length&&(o=new gs("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var xo=null,Vo=null;function yv(t){Zf(t,0)}function Xa(t){var r=ks(t);if(Yi(r))return t}function vv(t,r){if(t==="change")return r}var Mf=!1;if(g){var $u;if(g){var Hu="oninput"in document;if(!Hu){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Hu=typeof bf.oninput=="function"}$u=Hu}else $u=!1;Mf=$u&&(!document.documentMode||9<document.documentMode)}function Uf(){xo&&(xo.detachEvent("onpropertychange",Ff),Vo=xo=null)}function Ff(t){if(t.propertyName==="value"&&Xa(Vo)){var r=[];Lf(r,Vo,t,ns(t)),Eo(yv,r)}}function _v(t,r,o){t==="focusin"?(Uf(),xo=r,Vo=o,xo.attachEvent("onpropertychange",Ff)):t==="focusout"&&Uf()}function Ev(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(Vo)}function wv(t,r){if(t==="click")return Xa(r)}function Tv(t,r){if(t==="input"||t==="change")return Xa(r)}function Iv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Sn=typeof Object.is=="function"?Object.is:Iv;function Lo(t,r){if(Sn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!Sn(t[h],r[h]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zf(t,r){var o=jf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jf(o)}}function Bf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Bf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function $f(){for(var t=window,r=Sr();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Sr(t.document)}return r}function Wu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Sv(t){var r=$f(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Bf(o.ownerDocument.documentElement,o)){if(u!==null&&Wu(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!t.extend&&p>u&&(h=u,u=p,p=h),h=zf(o,p);var v=zf(o,u);h&&v&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Av=g&&"documentMode"in document&&11>=document.documentMode,Ss=null,Gu=null,Mo=null,qu=!1;function Hf(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qu||Ss==null||Ss!==Sr(u)||(u=Ss,"selectionStart"in u&&Wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Mo&&Lo(Mo,u)||(Mo=u,u=el(Gu,"onSelect"),0<u.length&&(r=new gs("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=Ss)))}function Ya(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var As={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Ku={},Wf={};g&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Ja(t){if(Ku[t])return Ku[t];if(!As[t])return t;var r=As[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Wf)return Ku[t]=r[o];return t}var Gf=Ja("animationend"),qf=Ja("animationiteration"),Kf=Ja("animationstart"),Qf=Ja("transitionend"),Xf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,r){Xf.set(t,r),c(r,[t])}for(var Qu=0;Qu<Yf.length;Qu++){var Xu=Yf[Qu],Rv=Xu.toLowerCase(),Cv=Xu[0].toUpperCase()+Xu.slice(1);Lr(Rv,"on"+Cv)}Lr(Gf,"onAnimationEnd"),Lr(qf,"onAnimationIteration"),Lr(Kf,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Qf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Jf(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,ka(u,r,void 0,t),t.currentTarget=null}function Zf(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var w=u[v],A=w.instance,b=w.currentTarget;if(w=w.listener,A!==p&&h.isPropagationStopped())break e;Jf(h,w,b),p=A}else for(v=0;v<u.length;v++){if(w=u[v],A=w.instance,b=w.currentTarget,w=w.listener,A!==p&&h.isPropagationStopped())break e;Jf(h,w,b),p=A}}}if(gn)throw t=wo,gn=!1,wo=null,t}function ze(t,r){var o=r[ic];o===void 0&&(o=r[ic]=new Set);var u=t+"__bubble";o.has(u)||(ed(r,t,2,!1),o.add(u))}function Yu(t,r,o){var u=0;r&&(u|=4),ed(o,t,u,r)}var Za="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[Za]){t[Za]=!0,s.forEach(function(o){o!=="selectionchange"&&(kv.has(o)||Yu(o,!1,t),Yu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Za]||(r[Za]=!0,Yu("selectionchange",!1,r))}}function ed(t,r,o,u){switch(ko(r)){case 1:var h=$e;break;case 4:h=zu;break;default:h=Co}o=h.bind(null,r,o,t),h=void 0,!ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function Ju(t,r,o,u,h){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var w=u.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var A=v.tag;if((A===3||A===4)&&(A=v.stateNode.containerInfo,A===h||A.nodeType===8&&A.parentNode===h))return;v=v.return}for(;w!==null;){if(v=Ai(w),v===null)return;if(A=v.tag,A===5||A===6){u=p=v;continue e}w=w.parentNode}}u=u.return}Eo(function(){var b=p,H=ns(o),W=[];e:{var B=Xf.get(t);if(B!==void 0){var Z=gs,ne=t;switch(t){case"keypress":if(ms(o)===0)break e;case"keydown":case"keyup":Z=d;break;case"focusin":ne="focus",Z=Es;break;case"focusout":ne="blur",Z=Es;break;case"beforeblur":case"afterblur":Z=Es;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=$a;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Gf:case qf:case Kf:Z=or;break;case Qf:Z=Ve;break;case"scroll":Z=Bu;break;case"wheel":Z=Re;break;case"copy":case"cut":case"paste":Z=Ga;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=_}var re=(r&4)!==0,Ze=!re&&t==="scroll",L=re?B!==null?B+"Capture":null:B;re=[];for(var k=b,M;k!==null;){M=k;var Q=M.stateNode;if(M.tag===5&&Q!==null&&(M=Q,L!==null&&(Q=Je(k,L),Q!=null&&re.push(Fo(k,Q,M)))),Ze)break;k=k.return}0<re.length&&(B=new Z(B,ne,null,o,H),W.push({event:B,listeners:re}))}}if((r&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",B&&o!==fi&&(ne=o.relatedTarget||o.fromElement)&&(Ai(ne)||ne[ar]))break e;if((Z||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(ne=o.relatedTarget||o.toElement,Z=b,ne=ne?Ai(ne):null,ne!==null&&(Ze=yn(ne),ne!==Ze||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=b),Z!==ne)){if(re=vs,Q="onMouseLeave",L="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(re=_,Q="onPointerLeave",L="onPointerEnter",k="pointer"),Ze=Z==null?B:ks(Z),M=ne==null?B:ks(ne),B=new re(Q,k+"leave",Z,o,H),B.target=Ze,B.relatedTarget=M,Q=null,Ai(H)===b&&(re=new re(L,k+"enter",ne,o,H),re.target=M,re.relatedTarget=Ze,Q=re),Ze=Q,Z&&ne)t:{for(re=Z,L=ne,k=0,M=re;M;M=Rs(M))k++;for(M=0,Q=L;Q;Q=Rs(Q))M++;for(;0<k-M;)re=Rs(re),k--;for(;0<M-k;)L=Rs(L),M--;for(;k--;){if(re===L||L!==null&&re===L.alternate)break t;re=Rs(re),L=Rs(L)}re=null}else re=null;Z!==null&&td(W,B,Z,re,!1),ne!==null&&Ze!==null&&td(W,Ze,ne,re,!0)}}e:{if(B=b?ks(b):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var se=vv;else if(Vf(B))if(Mf)se=Tv;else{se=Ev;var le=_v}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(se=wv);if(se&&(se=se(t,b))){Lf(W,se,o,H);break e}le&&le(t,B,b),t==="focusout"&&(le=B._wrapperState)&&le.controlled&&B.type==="number"&&Zi(B,"number",B.value)}switch(le=b?ks(b):window,t){case"focusin":(Vf(le)||le.contentEditable==="true")&&(Ss=le,Gu=b,Mo=null);break;case"focusout":Mo=Gu=Ss=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Hf(W,o,H);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":Hf(W,o,H)}var ue;if(et)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Is?Of(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Si&&o.locale!=="ko"&&(Is||de!=="onCompositionStart"?de==="onCompositionEnd"&&Is&&(ue=Po()):(Zt=H,ps="value"in Zt?Zt.value:Zt.textContent,Is=!0)),le=el(b,de),0<le.length&&(de=new Oo(de,t,null,o,H),W.push({event:de,listeners:le}),ue?de.data=ue:(ue=xf(o),ue!==null&&(de.data=ue)))),(ue=en?pv(t,o):mv(t,o))&&(b=el(b,"onBeforeInput"),0<b.length&&(H=new Oo("onBeforeInput","beforeinput",null,o,H),W.push({event:H,listeners:b}),H.data=ue))}Zf(W,r)})}function Fo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function el(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=Je(t,o),p!=null&&u.unshift(Fo(t,p,h)),p=Je(t,r),p!=null&&u.push(Fo(t,p,h))),t=t.return}return u}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function td(t,r,o,u,h){for(var p=r._reactName,v=[];o!==null&&o!==u;){var w=o,A=w.alternate,b=w.stateNode;if(A!==null&&A===u)break;w.tag===5&&b!==null&&(w=b,h?(A=Je(o,p),A!=null&&v.unshift(Fo(o,A,w))):h||(A=Je(o,p),A!=null&&v.push(Fo(o,A,w)))),o=o.return}v.length!==0&&t.push({event:r,listeners:v})}var Pv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function nd(t){return(typeof t=="string"?t:""+t).replace(Pv,`
`).replace(Nv,"")}function tl(t,r,o){if(r=nd(r),nd(t)!==r&&o)throw Error(n(425))}function nl(){}var Zu=null,ec=null;function tc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(t){return rd.resolve(null).then(t).catch(xv)}:nc;function xv(t){setTimeout(function(){throw t})}function rc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),Tn(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Tn(r)}function Mr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function id(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),zn="__reactFiber$"+Cs,jo="__reactProps$"+Cs,ar="__reactContainer$"+Cs,ic="__reactEvents$"+Cs,Vv="__reactListeners$"+Cs,Lv="__reactHandles$"+Cs;function Ai(t){var r=t[zn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[ar]||o[zn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=id(t);t!==null;){if(o=t[zn])return o;t=id(t)}return r}t=o,o=t.parentNode}return null}function zo(t){return t=t[zn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function rl(t){return t[jo]||null}var sc=[],Ps=-1;function br(t){return{current:t}}function Be(t){0>Ps||(t.current=sc[Ps],sc[Ps]=null,Ps--)}function Fe(t,r){Ps++,sc[Ps]=t.current,t.current=r}var Ur={},Ct=br(Ur),$t=br(!1),Ri=Ur;function Ns(t,r){var o=t.type.contextTypes;if(!o)return Ur;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function Ht(t){return t=t.childContextTypes,t!=null}function il(){Be($t),Be(Ct)}function sd(t,r,o){if(Ct.current!==Ur)throw Error(n(168));Fe(Ct,r),Fe($t,o)}function od(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,Oe(t)||"Unknown",h));return ee({},o,u)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ri=Ct.current,Fe(Ct,t),Fe($t,$t.current),!0}function ad(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=od(t,r,Ri),u.__reactInternalMemoizedMergedChildContext=t,Be($t),Be(Ct),Fe(Ct,t)):Be($t),Fe($t,o)}var lr=null,ol=!1,oc=!1;function ld(t){lr===null?lr=[t]:lr.push(t)}function Mv(t){ol=!0,ld(t)}function Fr(){if(!oc&&lr!==null){oc=!0;var t=0,r=Se;try{var o=lr;for(Se=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}lr=null,ol=!1}catch(h){throw lr!==null&&(lr=lr.slice(t+1)),us(yi,Fr),h}finally{Se=r,oc=!1}}return null}var Ds=[],Os=0,al=null,ll=0,un=[],cn=0,Ci=null,ur=1,cr="";function ki(t,r){Ds[Os++]=ll,Ds[Os++]=al,al=t,ll=r}function ud(t,r,o){un[cn++]=ur,un[cn++]=cr,un[cn++]=Ci,Ci=t;var u=ur;t=cr;var h=32-Mt(u)-1;u&=~(1<<h),o+=1;var p=32-Mt(r)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,ur=1<<32-Mt(r)+h|o<<h|u,cr=p+t}else ur=1<<p|o<<h|u,cr=t}function ac(t){t.return!==null&&(ki(t,1),ud(t,1,0))}function lc(t){for(;t===al;)al=Ds[--Os],Ds[Os]=null,ll=Ds[--Os],Ds[Os]=null;for(;t===Ci;)Ci=un[--cn],un[cn]=null,cr=un[--cn],un[cn]=null,ur=un[--cn],un[cn]=null}var tn=null,nn=null,He=!1,An=null;function cd(t,r){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function hd(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,tn=t,nn=Mr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,tn=t,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ci!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,tn=t,nn=null,!0):!1;default:return!1}}function uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cc(t){if(He){var r=nn;if(r){var o=r;if(!hd(t,r)){if(uc(t))throw Error(n(418));r=Mr(o.nextSibling);var u=tn;r&&hd(t,r)?cd(u,o):(t.flags=t.flags&-4097|2,He=!1,tn=t)}}else{if(uc(t))throw Error(n(418));t.flags=t.flags&-4097|2,He=!1,tn=t}}}function fd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function ul(t){if(t!==tn)return!1;if(!He)return fd(t),He=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!tc(t.type,t.memoizedProps)),r&&(r=nn)){if(uc(t))throw dd(),Error(n(418));for(;r;)cd(t,r),r=Mr(r.nextSibling)}if(fd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){nn=Mr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}nn=null}}else nn=tn?Mr(t.stateNode.nextSibling):null;return!0}function dd(){for(var t=nn;t;)t=Mr(t.nextSibling)}function xs(){nn=tn=null,He=!1}function hc(t){An===null?An=[t]:An.push(t)}var bv=ge.ReactCurrentBatchConfig;function Bo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var w=h.refs;v===null?delete w[p]:w[p]=v},r._stringRef=p,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function cl(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function pd(t){var r=t._init;return r(t._payload)}function md(t){function r(L,k){if(t){var M=L.deletions;M===null?(L.deletions=[k],L.flags|=16):M.push(k)}}function o(L,k){if(!t)return null;for(;k!==null;)r(L,k),k=k.sibling;return null}function u(L,k){for(L=new Map;k!==null;)k.key!==null?L.set(k.key,k):L.set(k.index,k),k=k.sibling;return L}function h(L,k){return L=qr(L,k),L.index=0,L.sibling=null,L}function p(L,k,M){return L.index=M,t?(M=L.alternate,M!==null?(M=M.index,M<k?(L.flags|=2,k):M):(L.flags|=2,k)):(L.flags|=1048576,k)}function v(L){return t&&L.alternate===null&&(L.flags|=2),L}function w(L,k,M,Q){return k===null||k.tag!==6?(k=nh(M,L.mode,Q),k.return=L,k):(k=h(k,M),k.return=L,k)}function A(L,k,M,Q){var se=M.type;return se===P?H(L,k,M.props.children,Q,M.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&pd(se)===k.type)?(Q=h(k,M.props),Q.ref=Bo(L,k,M),Q.return=L,Q):(Q=Vl(M.type,M.key,M.props,null,L.mode,Q),Q.ref=Bo(L,k,M),Q.return=L,Q)}function b(L,k,M,Q){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=rh(M,L.mode,Q),k.return=L,k):(k=h(k,M.children||[]),k.return=L,k)}function H(L,k,M,Q,se){return k===null||k.tag!==7?(k=Mi(M,L.mode,Q,se),k.return=L,k):(k=h(k,M),k.return=L,k)}function W(L,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return k=nh(""+k,L.mode,M),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ne:return M=Vl(k.type,k.key,k.props,null,L.mode,M),M.ref=Bo(L,null,k),M.return=L,M;case ye:return k=rh(k,L.mode,M),k.return=L,k;case Rt:var Q=k._init;return W(L,Q(k._payload),M)}if(Jn(k)||ae(k))return k=Mi(k,L.mode,M,null),k.return=L,k;cl(L,k)}return null}function B(L,k,M,Q){var se=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:w(L,k,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ne:return M.key===se?A(L,k,M,Q):null;case ye:return M.key===se?b(L,k,M,Q):null;case Rt:return se=M._init,B(L,k,se(M._payload),Q)}if(Jn(M)||ae(M))return se!==null?null:H(L,k,M,Q,null);cl(L,M)}return null}function Z(L,k,M,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return L=L.get(M)||null,w(k,L,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Ne:return L=L.get(Q.key===null?M:Q.key)||null,A(k,L,Q,se);case ye:return L=L.get(Q.key===null?M:Q.key)||null,b(k,L,Q,se);case Rt:var le=Q._init;return Z(L,k,M,le(Q._payload),se)}if(Jn(Q)||ae(Q))return L=L.get(M)||null,H(k,L,Q,se,null);cl(k,Q)}return null}function ne(L,k,M,Q){for(var se=null,le=null,ue=k,de=k=0,ft=null;ue!==null&&de<M.length;de++){ue.index>de?(ft=ue,ue=null):ft=ue.sibling;var De=B(L,ue,M[de],Q);if(De===null){ue===null&&(ue=ft);break}t&&ue&&De.alternate===null&&r(L,ue),k=p(De,k,de),le===null?se=De:le.sibling=De,le=De,ue=ft}if(de===M.length)return o(L,ue),He&&ki(L,de),se;if(ue===null){for(;de<M.length;de++)ue=W(L,M[de],Q),ue!==null&&(k=p(ue,k,de),le===null?se=ue:le.sibling=ue,le=ue);return He&&ki(L,de),se}for(ue=u(L,ue);de<M.length;de++)ft=Z(ue,L,de,M[de],Q),ft!==null&&(t&&ft.alternate!==null&&ue.delete(ft.key===null?de:ft.key),k=p(ft,k,de),le===null?se=ft:le.sibling=ft,le=ft);return t&&ue.forEach(function(Kr){return r(L,Kr)}),He&&ki(L,de),se}function re(L,k,M,Q){var se=ae(M);if(typeof se!="function")throw Error(n(150));if(M=se.call(M),M==null)throw Error(n(151));for(var le=se=null,ue=k,de=k=0,ft=null,De=M.next();ue!==null&&!De.done;de++,De=M.next()){ue.index>de?(ft=ue,ue=null):ft=ue.sibling;var Kr=B(L,ue,De.value,Q);if(Kr===null){ue===null&&(ue=ft);break}t&&ue&&Kr.alternate===null&&r(L,ue),k=p(Kr,k,de),le===null?se=Kr:le.sibling=Kr,le=Kr,ue=ft}if(De.done)return o(L,ue),He&&ki(L,de),se;if(ue===null){for(;!De.done;de++,De=M.next())De=W(L,De.value,Q),De!==null&&(k=p(De,k,de),le===null?se=De:le.sibling=De,le=De);return He&&ki(L,de),se}for(ue=u(L,ue);!De.done;de++,De=M.next())De=Z(ue,L,de,De.value,Q),De!==null&&(t&&De.alternate!==null&&ue.delete(De.key===null?de:De.key),k=p(De,k,de),le===null?se=De:le.sibling=De,le=De);return t&&ue.forEach(function(g_){return r(L,g_)}),He&&ki(L,de),se}function Ze(L,k,M,Q){if(typeof M=="object"&&M!==null&&M.type===P&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Ne:e:{for(var se=M.key,le=k;le!==null;){if(le.key===se){if(se=M.type,se===P){if(le.tag===7){o(L,le.sibling),k=h(le,M.props.children),k.return=L,L=k;break e}}else if(le.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&pd(se)===le.type){o(L,le.sibling),k=h(le,M.props),k.ref=Bo(L,le,M),k.return=L,L=k;break e}o(L,le);break}else r(L,le);le=le.sibling}M.type===P?(k=Mi(M.props.children,L.mode,Q,M.key),k.return=L,L=k):(Q=Vl(M.type,M.key,M.props,null,L.mode,Q),Q.ref=Bo(L,k,M),Q.return=L,L=Q)}return v(L);case ye:e:{for(le=M.key;k!==null;){if(k.key===le)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){o(L,k.sibling),k=h(k,M.children||[]),k.return=L,L=k;break e}else{o(L,k);break}else r(L,k);k=k.sibling}k=rh(M,L.mode,Q),k.return=L,L=k}return v(L);case Rt:return le=M._init,Ze(L,k,le(M._payload),Q)}if(Jn(M))return ne(L,k,M,Q);if(ae(M))return re(L,k,M,Q);cl(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,k!==null&&k.tag===6?(o(L,k.sibling),k=h(k,M),k.return=L,L=k):(o(L,k),k=nh(M,L.mode,Q),k.return=L,L=k),v(L)):o(L,k)}return Ze}var Vs=md(!0),gd=md(!1),hl=br(null),fl=null,Ls=null,fc=null;function dc(){fc=Ls=fl=null}function pc(t){var r=hl.current;Be(hl),t._currentValue=r}function mc(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Ms(t,r){fl=t,fc=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Wt=!0),t.firstContext=null)}function hn(t){var r=t._currentValue;if(fc!==t)if(t={context:t,memoizedValue:r,next:null},Ls===null){if(fl===null)throw Error(n(308));Ls=t,fl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return r}var Pi=null;function gc(t){Pi===null?Pi=[t]:Pi.push(t)}function yd(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,gc(r)):(o.next=h.next,h.next=o),r.interleaved=o,hr(t,u)}function hr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var jr=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ke&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,hr(t,o)}return h=u.interleaved,h===null?(r.next=r,gc(u)):(r.next=h.next,h.next=r),u.interleaved=r,hr(t,o)}function dl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Nr(t,o)}}function _d(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function pl(t,r,o,u){var h=t.updateQueue;jr=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var A=w,b=A.next;A.next=null,v===null?p=b:v.next=b,v=A;var H=t.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==v&&(w===null?H.firstBaseUpdate=b:w.next=b,H.lastBaseUpdate=A))}if(p!==null){var W=h.baseState;v=0,H=b=A=null,w=p;do{var B=w.lane,Z=w.eventTime;if((u&B)===B){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ne=t,re=w;switch(B=r,Z=o,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){W=ne.call(Z,W,B);break e}W=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,B=typeof ne=="function"?ne.call(Z,W,B):ne,B==null)break e;W=ee({},W,B);break e;case 2:jr=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,B=h.effects,B===null?h.effects=[w]:B.push(w))}else Z={eventTime:Z,lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(b=H=Z,A=W):H=H.next=Z,v|=B;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;B=w,w=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);if(H===null&&(A=W),h.baseState=A,h.firstBaseUpdate=b,h.lastBaseUpdate=H,r=h.shared.interleaved,r!==null){h=r;do v|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Oi|=v,t.lanes=v,t.memoizedState=W}}function Ed(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var $o={},Bn=br($o),Ho=br($o),Wo=br($o);function Ni(t){if(t===$o)throw Error(n(174));return t}function vc(t,r){switch(Fe(Wo,r),Fe(Ho,t),Fe(Bn,$o),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:it(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=it(r,t)}Be(Bn),Fe(Bn,r)}function bs(){Be(Bn),Be(Ho),Be(Wo)}function wd(t){Ni(Wo.current);var r=Ni(Bn.current),o=it(r,t.type);r!==o&&(Fe(Ho,t),Fe(Bn,o))}function _c(t){Ho.current===t&&(Be(Bn),Be(Ho))}var Ge=br(0);function ml(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ec=[];function wc(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var gl=ge.ReactCurrentDispatcher,Tc=ge.ReactCurrentBatchConfig,Di=0,qe=null,ot=null,ct=null,yl=!1,Go=!1,qo=0,Uv=0;function kt(){throw Error(n(321))}function Ic(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Sn(t[o],r[o]))return!1;return!0}function Sc(t,r,o,u,h,p){if(Di=p,qe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=t===null||t.memoizedState===null?Bv:$v,t=o(u,h),Go){p=0;do{if(Go=!1,qo=0,25<=p)throw Error(n(301));p+=1,ct=ot=null,r.updateQueue=null,gl.current=Hv,t=o(u,h)}while(Go)}if(gl.current=El,r=ot!==null&&ot.next!==null,Di=0,ct=ot=qe=null,yl=!1,r)throw Error(n(300));return t}function Ac(){var t=qo!==0;return qo=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?qe.memoizedState=ct=t:ct=ct.next=t,ct}function fn(){if(ot===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var r=ct===null?qe.memoizedState:ct.next;if(r!==null)ct=r,ot=t;else{if(t===null)throw Error(n(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ct===null?qe.memoizedState=ct=t:ct=ct.next=t}return ct}function Ko(t,r){return typeof r=="function"?r(t):r}function Rc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=ot,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var w=v=null,A=null,b=p;do{var H=b.lane;if((Di&H)===H)A!==null&&(A=A.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),u=b.hasEagerState?b.eagerState:t(u,b.action);else{var W={lane:H,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};A===null?(w=A=W,v=u):A=A.next=W,qe.lanes|=H,Oi|=H}b=b.next}while(b!==null&&b!==p);A===null?v=u:A.next=w,Sn(u,r.memoizedState)||(Wt=!0),r.memoizedState=u,r.baseState=v,r.baseQueue=A,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do p=h.lane,qe.lanes|=p,Oi|=p,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Cc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=t(p,v.action),v=v.next;while(v!==h);Sn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Td(){}function Id(t,r){var o=qe,u=fn(),h=r(),p=!Sn(u.memoizedState,h);if(p&&(u.memoizedState=h,Wt=!0),u=u.queue,kc(Rd.bind(null,o,u,t),[t]),u.getSnapshot!==r||p||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,Qo(9,Ad.bind(null,o,u,h,r),void 0,null),ht===null)throw Error(n(349));(Di&30)!==0||Sd(o,r,h)}return h}function Sd(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=qe.updateQueue,r===null?(r={lastEffect:null,stores:null},qe.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Ad(t,r,o,u){r.value=o,r.getSnapshot=u,Cd(r)&&kd(t)}function Rd(t,r,o){return o(function(){Cd(r)&&kd(t)})}function Cd(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Sn(t,o)}catch{return!0}}function kd(t){var r=hr(t,1);r!==null&&Pn(r,t,1,-1)}function Pd(t){var r=$n();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},r.queue=t,t=t.dispatch=zv.bind(null,qe,t),[r.memoizedState,t]}function Qo(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=qe.updateQueue,r===null?(r={lastEffect:null,stores:null},qe.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Nd(){return fn().memoizedState}function vl(t,r,o,u){var h=$n();qe.flags|=t,h.memoizedState=Qo(1|r,o,void 0,u===void 0?null:u)}function _l(t,r,o,u){var h=fn();u=u===void 0?null:u;var p=void 0;if(ot!==null){var v=ot.memoizedState;if(p=v.destroy,u!==null&&Ic(u,v.deps)){h.memoizedState=Qo(r,o,p,u);return}}qe.flags|=t,h.memoizedState=Qo(1|r,o,p,u)}function Dd(t,r){return vl(8390656,8,t,r)}function kc(t,r){return _l(2048,8,t,r)}function Od(t,r){return _l(4,2,t,r)}function xd(t,r){return _l(4,4,t,r)}function Vd(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Ld(t,r,o){return o=o!=null?o.concat([t]):null,_l(4,4,Vd.bind(null,r,t),o)}function Pc(){}function Md(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ic(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function bd(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ic(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Ud(t,r,o){return(Di&21)===0?(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=o):(Sn(o,r)||(o=Ei(),qe.lanes|=o,Oi|=o,t.baseState=!0),r)}function Fv(t,r){var o=Se;Se=o!==0&&4>o?o:4,t(!0);var u=Tc.transition;Tc.transition={};try{t(!1),r()}finally{Se=o,Tc.transition=u}}function Fd(){return fn().memoizedState}function jv(t,r,o){var u=Wr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},jd(t))zd(r,o);else if(o=yd(t,r,o,u),o!==null){var h=Ft();Pn(o,t,u,h),Bd(o,r,u)}}function zv(t,r,o){var u=Wr(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(jd(t))zd(r,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,w=p(v,o);if(h.hasEagerState=!0,h.eagerState=w,Sn(w,v)){var A=r.interleaved;A===null?(h.next=h,gc(r)):(h.next=A.next,A.next=h),r.interleaved=h;return}}catch{}finally{}o=yd(t,r,h,u),o!==null&&(h=Ft(),Pn(o,t,u,h),Bd(o,r,u))}}function jd(t){var r=t.alternate;return t===qe||r!==null&&r===qe}function zd(t,r){Go=yl=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Bd(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Nr(t,o)}}var El={readContext:hn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Bv={readContext:hn,useCallback:function(t,r){return $n().memoizedState=[t,r===void 0?null:r],t},useContext:hn,useEffect:Dd,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,vl(4194308,4,Vd.bind(null,r,t),o)},useLayoutEffect:function(t,r){return vl(4194308,4,t,r)},useInsertionEffect:function(t,r){return vl(4,2,t,r)},useMemo:function(t,r){var o=$n();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=$n();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=jv.bind(null,qe,t),[u.memoizedState,t]},useRef:function(t){var r=$n();return t={current:t},r.memoizedState=t},useState:Pd,useDebugValue:Pc,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Pd(!1),r=t[0];return t=Fv.bind(null,t[1]),$n().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=qe,h=$n();if(He){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),ht===null)throw Error(n(349));(Di&30)!==0||Sd(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,Dd(Rd.bind(null,u,p,t),[t]),u.flags|=2048,Qo(9,Ad.bind(null,u,p,o,r),void 0,null),o},useId:function(){var t=$n(),r=ht.identifierPrefix;if(He){var o=cr,u=ur;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=qo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Uv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},$v={readContext:hn,useCallback:Md,useContext:hn,useEffect:kc,useImperativeHandle:Ld,useInsertionEffect:Od,useLayoutEffect:xd,useMemo:bd,useReducer:Rc,useRef:Nd,useState:function(){return Rc(Ko)},useDebugValue:Pc,useDeferredValue:function(t){var r=fn();return Ud(r,ot.memoizedState,t)},useTransition:function(){var t=Rc(Ko)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Td,useSyncExternalStore:Id,useId:Fd,unstable_isNewReconciler:!1},Hv={readContext:hn,useCallback:Md,useContext:hn,useEffect:kc,useImperativeHandle:Ld,useInsertionEffect:Od,useLayoutEffect:xd,useMemo:bd,useReducer:Cc,useRef:Nd,useState:function(){return Cc(Ko)},useDebugValue:Pc,useDeferredValue:function(t){var r=fn();return ot===null?r.memoizedState=t:Ud(r,ot.memoizedState,t)},useTransition:function(){var t=Cc(Ko)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Td,useSyncExternalStore:Id,useId:Fd,unstable_isNewReconciler:!1};function Rn(t,r){if(t&&t.defaultProps){r=ee({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Nc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:ee({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var wl={isMounted:function(t){return(t=t._reactInternals)?yn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=Ft(),h=Wr(t),p=fr(u,h);p.payload=r,o!=null&&(p.callback=o),r=zr(t,p,h),r!==null&&(Pn(r,t,h,u),dl(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=Ft(),h=Wr(t),p=fr(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=zr(t,p,h),r!==null&&(Pn(r,t,h,u),dl(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ft(),u=Wr(t),h=fr(o,u);h.tag=2,r!=null&&(h.callback=r),r=zr(t,h,u),r!==null&&(Pn(r,t,u,o),dl(r,t,u))}};function $d(t,r,o,u,h,p,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Lo(o,u)||!Lo(h,p):!0}function Hd(t,r,o){var u=!1,h=Ur,p=r.contextType;return typeof p=="object"&&p!==null?p=hn(p):(h=Ht(r)?Ri:Ct.current,u=r.contextTypes,p=(u=u!=null)?Ns(t,h):Ur),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=p),r}function Wd(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&wl.enqueueReplaceState(r,r.state,null)}function Dc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},yc(t);var p=r.contextType;typeof p=="object"&&p!==null?h.context=hn(p):(p=Ht(r)?Ri:Ct.current,h.context=Ns(t,p)),h.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Nc(t,r,p,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&wl.enqueueReplaceState(h,h.state,null),pl(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,r){try{var o="",u=r;do o+=Ee(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:h,digest:null}}function Oc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function xc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Gd(t,r,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){kl||(kl=!0,Kc=u),xc(t,r)},o}function qd(t,r,o){o=fr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){xc(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){xc(t,r),typeof u!="function"&&($r===null?$r=new Set([this]):$r.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function Kd(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Wv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=s_.bind(null,t,r,o),r.then(t,t))}function Qd(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Xd(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=fr(-1,1),r.tag=2,zr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Gv=ge.ReactCurrentOwner,Wt=!1;function Ut(t,r,o,u){r.child=t===null?gd(r,null,o,u):Vs(r,t.child,o,u)}function Yd(t,r,o,u,h){o=o.render;var p=r.ref;return Ms(r,h),u=Sc(t,r,o,u,p,h),o=Ac(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,dr(t,r,h)):(He&&o&&ac(r),r.flags|=1,Ut(t,r,u,h),r.child)}function Jd(t,r,o,u,h){if(t===null){var p=o.type;return typeof p=="function"&&!th(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,Zd(t,r,p,u,h)):(t=Vl(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,(t.lanes&h)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Lo,o(v,u)&&t.ref===r.ref)return dr(t,r,h)}return r.flags|=1,t=qr(p,u),t.ref=r.ref,t.return=r,r.child=t}function Zd(t,r,o,u,h){if(t!==null){var p=t.memoizedProps;if(Lo(p,u)&&t.ref===r.ref)if(Wt=!1,r.pendingProps=u=p,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Wt=!0);else return r.lanes=t.lanes,dr(t,r,h)}return Vc(t,r,o,u,h)}function ep(t,r,o){var u=r.pendingProps,h=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(js,rn),rn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Fe(js,rn),rn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Fe(js,rn),rn|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,Fe(js,rn),rn|=u;return Ut(t,r,h,o),r.child}function tp(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Vc(t,r,o,u,h){var p=Ht(o)?Ri:Ct.current;return p=Ns(r,p),Ms(r,h),o=Sc(t,r,o,u,p,h),u=Ac(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,dr(t,r,h)):(He&&u&&ac(r),r.flags|=1,Ut(t,r,o,h),r.child)}function np(t,r,o,u,h){if(Ht(o)){var p=!0;sl(r)}else p=!1;if(Ms(r,h),r.stateNode===null)Il(t,r),Hd(r,o,u),Dc(r,o,u,h),u=!0;else if(t===null){var v=r.stateNode,w=r.memoizedProps;v.props=w;var A=v.context,b=o.contextType;typeof b=="object"&&b!==null?b=hn(b):(b=Ht(o)?Ri:Ct.current,b=Ns(r,b));var H=o.getDerivedStateFromProps,W=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";W||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==u||A!==b)&&Wd(r,v,u,b),jr=!1;var B=r.memoizedState;v.state=B,pl(r,u,v,h),A=r.memoizedState,w!==u||B!==A||$t.current||jr?(typeof H=="function"&&(Nc(r,o,H,u),A=r.memoizedState),(w=jr||$d(r,o,w,u,B,A,b))?(W||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=A),v.props=u,v.state=A,v.context=b,u=w):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{v=r.stateNode,vd(t,r),w=r.memoizedProps,b=r.type===r.elementType?w:Rn(r.type,w),v.props=b,W=r.pendingProps,B=v.context,A=o.contextType,typeof A=="object"&&A!==null?A=hn(A):(A=Ht(o)?Ri:Ct.current,A=Ns(r,A));var Z=o.getDerivedStateFromProps;(H=typeof Z=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==W||B!==A)&&Wd(r,v,u,A),jr=!1,B=r.memoizedState,v.state=B,pl(r,u,v,h);var ne=r.memoizedState;w!==W||B!==ne||$t.current||jr?(typeof Z=="function"&&(Nc(r,o,Z,u),ne=r.memoizedState),(b=jr||$d(r,o,b,u,B,ne,A)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,ne,A),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,ne,A)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ne),v.props=u,v.state=ne,v.context=A,u=b):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),u=!1)}return Lc(t,r,o,u,p,h)}function Lc(t,r,o,u,h,p){tp(t,r);var v=(r.flags&128)!==0;if(!u&&!v)return h&&ad(r,o,!1),dr(t,r,p);u=r.stateNode,Gv.current=r;var w=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&v?(r.child=Vs(r,t.child,null,p),r.child=Vs(r,null,w,p)):Ut(t,r,w,p),r.memoizedState=u.state,h&&ad(r,o,!0),r.child}function rp(t){var r=t.stateNode;r.pendingContext?sd(t,r.pendingContext,r.pendingContext!==r.context):r.context&&sd(t,r.context,!1),vc(t,r.containerInfo)}function ip(t,r,o,u,h){return xs(),hc(h),r.flags|=256,Ut(t,r,o,u),r.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function sp(t,r,o){var u=r.pendingProps,h=Ge.current,p=!1,v=(r.flags&128)!==0,w;if((w=v)||(w=t!==null&&t.memoizedState===null?!1:(h&2)!==0),w?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Fe(Ge,h&1),t===null)return cc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=u.children,t=u.fallback,p?(u=r.mode,p=r.child,v={mode:"hidden",children:v},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Ll(v,u,0,null),t=Mi(t,u,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=bc(o),r.memoizedState=Mc,t):Uc(r,v));if(h=t.memoizedState,h!==null&&(w=h.dehydrated,w!==null))return qv(t,r,v,u,w,h,o);if(p){p=u.fallback,v=r.mode,h=t.child,w=h.sibling;var A={mode:"hidden",children:u.children};return(v&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=A,r.deletions=null):(u=qr(h,A),u.subtreeFlags=h.subtreeFlags&14680064),w!==null?p=qr(w,p):(p=Mi(p,v,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,v=t.child.memoizedState,v=v===null?bc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=t.childLanes&~o,r.memoizedState=Mc,u}return p=t.child,t=p.sibling,u=qr(p,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Uc(t,r){return r=Ll({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Tl(t,r,o,u){return u!==null&&hc(u),Vs(r,t.child,null,o),t=Uc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function qv(t,r,o,u,h,p,v){if(o)return r.flags&256?(r.flags&=-257,u=Oc(Error(n(422))),Tl(t,r,v,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=Ll({mode:"visible",children:u.children},h,0,null),p=Mi(p,h,v,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,(r.mode&1)!==0&&Vs(r,t.child,null,v),r.child.memoizedState=bc(v),r.memoizedState=Mc,p);if((r.mode&1)===0)return Tl(t,r,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(n(419)),u=Oc(p,u,void 0),Tl(t,r,v,u)}if(w=(v&t.childLanes)!==0,Wt||w){if(u=ht,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|v))!==0?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,hr(t,h),Pn(u,t,h,-1))}return eh(),u=Oc(Error(n(421))),Tl(t,r,v,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=o_.bind(null,t),h._reactRetry=r,null):(t=p.treeContext,nn=Mr(h.nextSibling),tn=r,He=!0,An=null,t!==null&&(un[cn++]=ur,un[cn++]=cr,un[cn++]=Ci,ur=t.id,cr=t.overflow,Ci=r),r=Uc(r,u.children),r.flags|=4096,r)}function op(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),mc(t.return,r,o)}function Fc(t,r,o,u,h){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function ap(t,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if(Ut(t,r,u.children,o),u=Ge.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,o,r);else if(t.tag===19)op(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Fe(Ge,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&ml(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Fc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&ml(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Fc(r,!0,o,null,p);break;case"together":Fc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function dr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Oi|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=qr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=qr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Kv(t,r,o){switch(r.tag){case 3:rp(r),xs();break;case 5:wd(r);break;case 1:Ht(r.type)&&sl(r);break;case 4:vc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Fe(hl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Fe(Ge,Ge.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?sp(t,r,o):(Fe(Ge,Ge.current&1),t=dr(t,r,o),t!==null?t.sibling:null);Fe(Ge,Ge.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return ap(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Fe(Ge,Ge.current),u)break;return null;case 22:case 23:return r.lanes=0,ep(t,r,o)}return dr(t,r,o)}var lp,jc,up,cp;lp=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},jc=function(){},up=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Ni(Bn.current);var p=null;switch(o){case"input":h=ui(t,h),u=ui(t,u),p=[];break;case"select":h=ee({},h,{value:void 0}),u=ee({},u,{value:void 0}),p=[];break;case"textarea":h=uo(t,h),u=uo(t,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=nl)}go(o,u);var v;o=null;for(b in h)if(!u.hasOwnProperty(b)&&h.hasOwnProperty(b)&&h[b]!=null)if(b==="style"){var w=h[b];for(v in w)w.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(a.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in u){var A=u[b];if(w=h!=null?h[b]:void 0,u.hasOwnProperty(b)&&A!==w&&(A!=null||w!=null))if(b==="style")if(w){for(v in w)!w.hasOwnProperty(v)||A&&A.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in A)A.hasOwnProperty(v)&&w[v]!==A[v]&&(o||(o={}),o[v]=A[v])}else o||(p||(p=[]),p.push(b,o)),o=A;else b==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,w=w?w.__html:void 0,A!=null&&w!==A&&(p=p||[]).push(b,A)):b==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(b,""+A):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(a.hasOwnProperty(b)?(A!=null&&b==="onScroll"&&ze("scroll",t),p||w===A||(p=[])):(p=p||[]).push(b,A))}o&&(p=p||[]).push("style",o);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},cp=function(t,r,o,u){o!==u&&(r.flags|=4)};function Xo(t,r){if(!He)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Pt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function Qv(t,r,o){var u=r.pendingProps;switch(lc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(r),null;case 1:return Ht(r.type)&&il(),Pt(r),null;case 3:return u=r.stateNode,bs(),Be($t),Be(Ct),wc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ul(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,An!==null&&(Yc(An),An=null))),jc(t,r),Pt(r),null;case 5:_c(r);var h=Ni(Wo.current);if(o=r.type,t!==null&&r.stateNode!=null)up(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Pt(r),null}if(t=Ni(Bn.current),ul(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[zn]=r,u[jo]=p,t=(r.mode&1)!==0,o){case"dialog":ze("cancel",u),ze("close",u);break;case"iframe":case"object":case"embed":ze("load",u);break;case"video":case"audio":for(h=0;h<bo.length;h++)ze(bo[h],u);break;case"source":ze("error",u);break;case"img":case"image":case"link":ze("error",u),ze("load",u);break;case"details":ze("toggle",u);break;case"input":Ji(u,p),ze("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},ze("invalid",u);break;case"textarea":es(u,p),ze("invalid",u)}go(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var w=p[v];v==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&tl(u.textContent,w,t),h=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&tl(u.textContent,w,t),h=["children",""+w]):a.hasOwnProperty(v)&&w!=null&&v==="onScroll"&&ze("scroll",u)}switch(o){case"input":Yn(u),Ca(u,p,!0);break;case"textarea":Yn(u),co(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=nl)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=v.createElement(o,{is:u.is}):(t=v.createElement(o),o==="select"&&(v=t,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):t=v.createElementNS(t,o),t[zn]=r,t[jo]=u,lp(t,r,!1,!1),r.stateNode=t;e:{switch(v=yo(o,u),o){case"dialog":ze("cancel",t),ze("close",t),h=u;break;case"iframe":case"object":case"embed":ze("load",t),h=u;break;case"video":case"audio":for(h=0;h<bo.length;h++)ze(bo[h],t);h=u;break;case"source":ze("error",t),h=u;break;case"img":case"image":case"link":ze("error",t),ze("load",t),h=u;break;case"details":ze("toggle",t),h=u;break;case"input":Ji(t,u),h=ui(t,u),ze("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=ee({},u,{value:void 0}),ze("invalid",t);break;case"textarea":es(t,u),h=uo(t,u),ze("invalid",t);break;default:h=u}go(o,h),w=h;for(p in w)if(w.hasOwnProperty(p)){var A=w[p];p==="style"?po(t,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&ho(t,A)):p==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&Ar(t,A):typeof A=="number"&&Ar(t,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?A!=null&&p==="onScroll"&&ze("scroll",t):A!=null&&me(t,p,A,v))}switch(o){case"input":Yn(t),Ca(t,u,!1);break;case"textarea":Yn(t),co(t);break;case"option":u.value!=null&&t.setAttribute("value",""+xe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?Zn(t,!!u.multiple,p,!1):u.defaultValue!=null&&Zn(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=nl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Pt(r),null;case 6:if(t&&r.stateNode!=null)cp(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Ni(Wo.current),Ni(Bn.current),ul(r)){if(u=r.stateNode,o=r.memoizedProps,u[zn]=r,(p=u.nodeValue!==o)&&(t=tn,t!==null))switch(t.tag){case 3:tl(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(u.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[zn]=r,r.stateNode=u}return Pt(r),null;case 13:if(Be(Ge),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&nn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)dd(),xs(),r.flags|=98560,p=!1;else if(p=ul(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[zn]=r}else xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Pt(r),p=!1}else An!==null&&(Yc(An),An=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ge.current&1)!==0?at===0&&(at=3):eh())),r.updateQueue!==null&&(r.flags|=4),Pt(r),null);case 4:return bs(),jc(t,r),t===null&&Uo(r.stateNode.containerInfo),Pt(r),null;case 10:return pc(r.type._context),Pt(r),null;case 17:return Ht(r.type)&&il(),Pt(r),null;case 19:if(Be(Ge),p=r.memoizedState,p===null)return Pt(r),null;if(u=(r.flags&128)!==0,v=p.rendering,v===null)if(u)Xo(p,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(v=ml(t),v!==null){for(r.flags|=128,Xo(p,!1),u=v.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,t=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,t=v.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Fe(Ge,Ge.current&1|2),r.child}t=t.sibling}p.tail!==null&&Ue()>zs&&(r.flags|=128,u=!0,Xo(p,!1),r.lanes=4194304)}else{if(!u)if(t=ml(v),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!He)return Pt(r),null}else 2*Ue()-p.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,u=!0,Xo(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ue(),r.sibling=null,o=Ge.current,Fe(Ge,u?o&1|2:o&1),r):(Pt(r),null);case 22:case 23:return Zc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(rn&1073741824)!==0&&(Pt(r),r.subtreeFlags&6&&(r.flags|=8192)):Pt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Xv(t,r){switch(lc(r),r.tag){case 1:return Ht(r.type)&&il(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return bs(),Be($t),Be(Ct),wc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return _c(r),null;case 13:if(Be(Ge),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));xs()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Be(Ge),null;case 4:return bs(),null;case 10:return pc(r.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var Sl=!1,Nt=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,te=null;function Fs(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ke(t,r,u)}else o.current=null}function zc(t,r,o){try{o()}catch(u){Ke(t,r,u)}}var hp=!1;function Jv(t,r){if(Zu=xr,t=$f(),Wu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,w=-1,A=-1,b=0,H=0,W=t,B=null;t:for(;;){for(var Z;W!==o||h!==0&&W.nodeType!==3||(w=v+h),W!==p||u!==0&&W.nodeType!==3||(A=v+u),W.nodeType===3&&(v+=W.nodeValue.length),(Z=W.firstChild)!==null;)B=W,W=Z;for(;;){if(W===t)break t;if(B===o&&++b===h&&(w=v),B===p&&++H===u&&(A=v),(Z=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=Z}o=w===-1||A===-1?null:{start:w,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(ec={focusedElem:t,selectionRange:o},xr=!1,te=r;te!==null;)if(r=te,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,te=t;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,Ze=ne.memoizedState,L=r.stateNode,k=L.getSnapshotBeforeUpdate(r.elementType===r.type?re:Rn(r.type,re),Ze);L.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Q){Ke(r,r.return,Q)}if(t=r.sibling,t!==null){t.return=r.return,te=t;break}te=r.return}return ne=hp,hp=!1,ne}function Yo(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var p=h.destroy;h.destroy=void 0,p!==void 0&&zc(r,o,p)}h=h.next}while(h!==u)}}function Al(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Bc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function fp(t){var r=t.alternate;r!==null&&(t.alternate=null,fp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[zn],delete r[jo],delete r[ic],delete r[Vv],delete r[Lv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=nl));else if(u!==4&&(t=t.child,t!==null))for($c(t,r,o),t=t.sibling;t!==null;)$c(t,r,o),t=t.sibling}function Hc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Hc(t,r,o),t=t.sibling;t!==null;)Hc(t,r,o),t=t.sibling}var vt=null,Cn=!1;function Br(t,r,o){for(o=o.child;o!==null;)mp(t,r,o),o=o.sibling}function mp(t,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(vi,o)}catch{}switch(o.tag){case 5:Nt||Fs(o,r);case 6:var u=vt,h=Cn;vt=null,Br(t,r,o),vt=u,Cn=h,vt!==null&&(Cn?(t=vt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):vt.removeChild(o.stateNode));break;case 18:vt!==null&&(Cn?(t=vt,o=o.stateNode,t.nodeType===8?rc(t.parentNode,o):t.nodeType===1&&rc(t,o),Tn(t)):rc(vt,o.stateNode));break;case 4:u=vt,h=Cn,vt=o.stateNode.containerInfo,Cn=!0,Br(t,r,o),vt=u,Cn=h;break;case 0:case 11:case 14:case 15:if(!Nt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&zc(o,r,v),h=h.next}while(h!==u)}Br(t,r,o);break;case 1:if(!Nt&&(Fs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Ke(o,r,w)}Br(t,r,o);break;case 21:Br(t,r,o);break;case 22:o.mode&1?(Nt=(u=Nt)||o.memoizedState!==null,Br(t,r,o),Nt=u):Br(t,r,o);break;default:Br(t,r,o)}}function gp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Yv),r.forEach(function(u){var h=a_.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function kn(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=t,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 5:vt=w.stateNode,Cn=!1;break e;case 3:vt=w.stateNode.containerInfo,Cn=!0;break e;case 4:vt=w.stateNode.containerInfo,Cn=!0;break e}w=w.return}if(vt===null)throw Error(n(160));mp(p,v,h),vt=null,Cn=!1;var A=h.alternate;A!==null&&(A.return=null),h.return=null}catch(b){Ke(h,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)yp(r,t),r=r.sibling}function yp(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(r,t),Hn(t),u&4){try{Yo(3,t,t.return),Al(3,t)}catch(re){Ke(t,t.return,re)}try{Yo(5,t,t.return)}catch(re){Ke(t,t.return,re)}}break;case 1:kn(r,t),Hn(t),u&512&&o!==null&&Fs(o,o.return);break;case 5:if(kn(r,t),Hn(t),u&512&&o!==null&&Fs(o,o.return),t.flags&32){var h=t.stateNode;try{Ar(h,"")}catch(re){Ke(t,t.return,re)}}if(u&4&&(h=t.stateNode,h!=null)){var p=t.memoizedProps,v=o!==null?o.memoizedProps:p,w=t.type,A=t.updateQueue;if(t.updateQueue=null,A!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&ao(h,p),yo(w,v);var b=yo(w,p);for(v=0;v<A.length;v+=2){var H=A[v],W=A[v+1];H==="style"?po(h,W):H==="dangerouslySetInnerHTML"?ho(h,W):H==="children"?Ar(h,W):me(h,H,W,b)}switch(w){case"input":lo(h,p);break;case"textarea":ts(h,p);break;case"select":var B=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?Zn(h,!!p.multiple,Z,!1):B!==!!p.multiple&&(p.defaultValue!=null?Zn(h,!!p.multiple,p.defaultValue,!0):Zn(h,!!p.multiple,p.multiple?[]:"",!1))}h[jo]=p}catch(re){Ke(t,t.return,re)}}break;case 6:if(kn(r,t),Hn(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,p=t.memoizedProps;try{h.nodeValue=p}catch(re){Ke(t,t.return,re)}}break;case 3:if(kn(r,t),Hn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Tn(r.containerInfo)}catch(re){Ke(t,t.return,re)}break;case 4:kn(r,t),Hn(t);break;case 13:kn(r,t),Hn(t),h=t.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(qc=Ue())),u&4&&gp(t);break;case 22:if(H=o!==null&&o.memoizedState!==null,t.mode&1?(Nt=(b=Nt)||H,kn(r,t),Nt=b):kn(r,t),Hn(t),u&8192){if(b=t.memoizedState!==null,(t.stateNode.isHidden=b)&&!H&&(t.mode&1)!==0)for(te=t,H=t.child;H!==null;){for(W=te=H;te!==null;){switch(B=te,Z=B.child,B.tag){case 0:case 11:case 14:case 15:Yo(4,B,B.return);break;case 1:Fs(B,B.return);var ne=B.stateNode;if(typeof ne.componentWillUnmount=="function"){u=B,o=B.return;try{r=u,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(re){Ke(u,o,re)}}break;case 5:Fs(B,B.return);break;case 22:if(B.memoizedState!==null){Ep(W);continue}}Z!==null?(Z.return=B,te=Z):Ep(W)}H=H.sibling}e:for(H=null,W=t;;){if(W.tag===5){if(H===null){H=W;try{h=W.stateNode,b?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=W.stateNode,A=W.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null,w.style.display=fo("display",v))}catch(re){Ke(t,t.return,re)}}}else if(W.tag===6){if(H===null)try{W.stateNode.nodeValue=b?"":W.memoizedProps}catch(re){Ke(t,t.return,re)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===t)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===t)break e;for(;W.sibling===null;){if(W.return===null||W.return===t)break e;H===W&&(H=null),W=W.return}H===W&&(H=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:kn(r,t),Hn(t),u&4&&gp(t);break;case 21:break;default:kn(r,t),Hn(t)}}function Hn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(dp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Ar(h,""),u.flags&=-33);var p=pp(t);Hc(t,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,w=pp(t);$c(t,w,v);break;default:throw Error(n(161))}}catch(A){Ke(t,t.return,A)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Zv(t,r,o){te=t,vp(t)}function vp(t,r,o){for(var u=(t.mode&1)!==0;te!==null;){var h=te,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||Sl;if(!v){var w=h.alternate,A=w!==null&&w.memoizedState!==null||Nt;w=Sl;var b=Nt;if(Sl=v,(Nt=A)&&!b)for(te=h;te!==null;)v=te,A=v.child,v.tag===22&&v.memoizedState!==null?wp(h):A!==null?(A.return=v,te=A):wp(h);for(;p!==null;)te=p,vp(p),p=p.sibling;te=h,Sl=w,Nt=b}_p(t)}else(h.subtreeFlags&8772)!==0&&p!==null?(p.return=h,te=p):_p(t)}}function _p(t){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Nt||Al(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Nt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Rn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Ed(r,p,u);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ed(r,v,o)}break;case 5:var w=r.stateNode;if(o===null&&r.flags&4){o=w;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var H=b.memoizedState;if(H!==null){var W=H.dehydrated;W!==null&&Tn(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Nt||r.flags&512&&Bc(r)}catch(B){Ke(r,r.return,B)}}if(r===t){te=null;break}if(o=r.sibling,o!==null){o.return=r.return,te=o;break}te=r.return}}function Ep(t){for(;te!==null;){var r=te;if(r===t){te=null;break}var o=r.sibling;if(o!==null){o.return=r.return,te=o;break}te=r.return}}function wp(t){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Al(4,r)}catch(A){Ke(r,o,A)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(A){Ke(r,h,A)}}var p=r.return;try{Bc(r)}catch(A){Ke(r,p,A)}break;case 5:var v=r.return;try{Bc(r)}catch(A){Ke(r,v,A)}}}catch(A){Ke(r,r.return,A)}if(r===t){te=null;break}var w=r.sibling;if(w!==null){w.return=r.return,te=w;break}te=r.return}}var e_=Math.ceil,Rl=ge.ReactCurrentDispatcher,Wc=ge.ReactCurrentOwner,dn=ge.ReactCurrentBatchConfig,ke=0,ht=null,tt=null,_t=0,rn=0,js=br(0),at=0,Jo=null,Oi=0,Cl=0,Gc=0,Zo=null,Gt=null,qc=0,zs=1/0,pr=null,kl=!1,Kc=null,$r=null,Pl=!1,Hr=null,Nl=0,ea=0,Qc=null,Dl=-1,Ol=0;function Ft(){return(ke&6)!==0?Ue():Dl!==-1?Dl:Dl=Ue()}function Wr(t){return(t.mode&1)===0?1:(ke&2)!==0&&_t!==0?_t&-_t:bv.transition!==null?(Ol===0&&(Ol=Ei()),Ol):(t=Se,t!==0||(t=window.event,t=t===void 0?16:ko(t.type)),t)}function Pn(t,r,o,u){if(50<ea)throw ea=0,Qc=null,Error(n(185));Pr(t,o,u),((ke&2)===0||t!==ht)&&(t===ht&&((ke&2)===0&&(Cl|=o),at===4&&Gr(t,_t)),qt(t,u),o===1&&ke===0&&(r.mode&1)===0&&(zs=Ue()+500,ol&&Fr()))}function qt(t,r){var o=t.callbackNode;nr(t,r);var u=_i(t,t===ht?_t:0);if(u===0)o!==null&&Io(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&Io(o),r===1)t.tag===0?Mv(Ip.bind(null,t)):ld(Ip.bind(null,t)),Ov(function(){(ke&6)===0&&Fr()}),o=null;else{switch(Dr(u)){case 1:o=yi;break;case 4:o=Rr;break;case 16:o=on;break;case 536870912:o=Oa;break;default:o=on}o=Dp(o,Tp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Tp(t,r){if(Dl=-1,Ol=0,(ke&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Bs()&&t.callbackNode!==o)return null;var u=_i(t,t===ht?_t:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=xl(t,u);else{r=u;var h=ke;ke|=2;var p=Ap();(ht!==t||_t!==r)&&(pr=null,zs=Ue()+500,Vi(t,r));do try{r_();break}catch(w){Sp(t,w)}while(!0);dc(),Rl.current=p,ke=h,tt!==null?r=0:(ht=null,_t=0,r=at)}if(r!==0){if(r===2&&(h=Jt(t),h!==0&&(u=h,r=Xc(t,h))),r===1)throw o=Jo,Vi(t,0),Gr(t,u),qt(t,Ue()),o;if(r===6)Gr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!t_(h)&&(r=xl(t,u),r===2&&(p=Jt(t),p!==0&&(u=p,r=Xc(t,p))),r===1))throw o=Jo,Vi(t,0),Gr(t,u),qt(t,Ue()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Li(t,Gt,pr);break;case 3:if(Gr(t,u),(u&130023424)===u&&(r=qc+500-Ue(),10<r)){if(_i(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Ft(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=nc(Li.bind(null,t,Gt,pr),r);break}Li(t,Gt,pr);break;case 4:if(Gr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var v=31-Mt(u);p=1<<v,v=r[v],v>h&&(h=v),u&=~p}if(u=h,u=Ue()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*e_(u/1960))-u,10<u){t.timeoutHandle=nc(Li.bind(null,t,Gt,pr),u);break}Li(t,Gt,pr);break;case 5:Li(t,Gt,pr);break;default:throw Error(n(329))}}}return qt(t,Ue()),t.callbackNode===o?Tp.bind(null,t):null}function Xc(t,r){var o=Zo;return t.current.memoizedState.isDehydrated&&(Vi(t,r).flags|=256),t=xl(t,r),t!==2&&(r=Gt,Gt=o,r!==null&&Yc(r)),t}function Yc(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function t_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!Sn(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(t,r){for(r&=~Gc,r&=~Cl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Mt(r),u=1<<o;t[o]=-1,r&=~u}}function Ip(t){if((ke&6)!==0)throw Error(n(327));Bs();var r=_i(t,0);if((r&1)===0)return qt(t,Ue()),null;var o=xl(t,r);if(t.tag!==0&&o===2){var u=Jt(t);u!==0&&(r=u,o=Xc(t,u))}if(o===1)throw o=Jo,Vi(t,0),Gr(t,r),qt(t,Ue()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Li(t,Gt,pr),qt(t,Ue()),null}function Jc(t,r){var o=ke;ke|=1;try{return t(r)}finally{ke=o,ke===0&&(zs=Ue()+500,ol&&Fr())}}function xi(t){Hr!==null&&Hr.tag===0&&(ke&6)===0&&Bs();var r=ke;ke|=1;var o=dn.transition,u=Se;try{if(dn.transition=null,Se=1,t)return t()}finally{Se=u,dn.transition=o,ke=r,(ke&6)===0&&Fr()}}function Zc(){rn=js.current,Be(js)}function Vi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Dv(o)),tt!==null)for(o=tt.return;o!==null;){var u=o;switch(lc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&il();break;case 3:bs(),Be($t),Be(Ct),wc();break;case 5:_c(u);break;case 4:bs();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:pc(u.type._context);break;case 22:case 23:Zc()}o=o.return}if(ht=t,tt=t=qr(t.current,null),_t=rn=r,at=0,Jo=null,Gc=Cl=Oi=0,Gt=Zo=null,Pi!==null){for(r=0;r<Pi.length;r++)if(o=Pi[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}Pi=null}return t}function Sp(t,r){do{var o=tt;try{if(dc(),gl.current=El,yl){for(var u=qe.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}yl=!1}if(Di=0,ct=ot=qe=null,Go=!1,qo=0,Wc.current=null,o===null||o.return===null){at=1,Jo=r,tt=null;break}e:{var p=t,v=o.return,w=o,A=r;if(r=_t,w.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var b=A,H=w,W=H.tag;if((H.mode&1)===0&&(W===0||W===11||W===15)){var B=H.alternate;B?(H.updateQueue=B.updateQueue,H.memoizedState=B.memoizedState,H.lanes=B.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=Qd(v);if(Z!==null){Z.flags&=-257,Xd(Z,v,w,p,r),Z.mode&1&&Kd(p,b,r),r=Z,A=b;var ne=r.updateQueue;if(ne===null){var re=new Set;re.add(A),r.updateQueue=re}else ne.add(A);break e}else{if((r&1)===0){Kd(p,b,r),eh();break e}A=Error(n(426))}}else if(He&&w.mode&1){var Ze=Qd(v);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),Xd(Ze,v,w,p,r),hc(Us(A,w));break e}}p=A=Us(A,w),at!==4&&(at=2),Zo===null?Zo=[p]:Zo.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Gd(p,A,r);_d(p,L);break e;case 1:w=A;var k=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&($r===null||!$r.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=qd(p,w,r);_d(p,Q);break e}}p=p.return}while(p!==null)}Cp(o)}catch(se){r=se,tt===o&&o!==null&&(tt=o=o.return);continue}break}while(!0)}function Ap(){var t=Rl.current;return Rl.current=El,t===null?El:t}function eh(){(at===0||at===3||at===2)&&(at=4),ht===null||(Oi&268435455)===0&&(Cl&268435455)===0||Gr(ht,_t)}function xl(t,r){var o=ke;ke|=2;var u=Ap();(ht!==t||_t!==r)&&(pr=null,Vi(t,r));do try{n_();break}catch(h){Sp(t,h)}while(!0);if(dc(),ke=o,Rl.current=u,tt!==null)throw Error(n(261));return ht=null,_t=0,at}function n_(){for(;tt!==null;)Rp(tt)}function r_(){for(;tt!==null&&!Na();)Rp(tt)}function Rp(t){var r=Np(t.alternate,t,rn);t.memoizedProps=t.pendingProps,r===null?Cp(t):tt=r,Wc.current=null}function Cp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Qv(o,r,rn),o!==null){tt=o;return}}else{if(o=Xv(o,r),o!==null){o.flags&=32767,tt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,tt=null;return}}if(r=r.sibling,r!==null){tt=r;return}tt=r=t}while(r!==null);at===0&&(at=5)}function Li(t,r,o){var u=Se,h=dn.transition;try{dn.transition=null,Se=1,i_(t,r,o,u)}finally{dn.transition=h,Se=u}return null}function i_(t,r,o,u){do Bs();while(Hr!==null);if((ke&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Me(t,p),t===ht&&(tt=ht=null,_t=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Pl||(Pl=!0,Dp(on,function(){return Bs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=dn.transition,dn.transition=null;var v=Se;Se=1;var w=ke;ke|=4,Wc.current=null,Jv(t,o),yp(o,t),Sv(ec),xr=!!Zu,ec=Zu=null,t.current=o,Zv(o),bu(),ke=w,Se=v,dn.transition=p}else t.current=o;if(Pl&&(Pl=!1,Hr=t,Nl=h),p=t.pendingLanes,p===0&&($r=null),xa(o.stateNode),qt(t,Ue()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(kl)throw kl=!1,t=Kc,Kc=null,t;return(Nl&1)!==0&&t.tag!==0&&Bs(),p=t.pendingLanes,(p&1)!==0?t===Qc?ea++:(ea=0,Qc=t):ea=0,Fr(),null}function Bs(){if(Hr!==null){var t=Dr(Nl),r=dn.transition,o=Se;try{if(dn.transition=null,Se=16>t?16:t,Hr===null)var u=!1;else{if(t=Hr,Hr=null,Nl=0,(ke&6)!==0)throw Error(n(331));var h=ke;for(ke|=4,te=t.current;te!==null;){var p=te,v=p.child;if((te.flags&16)!==0){var w=p.deletions;if(w!==null){for(var A=0;A<w.length;A++){var b=w[A];for(te=b;te!==null;){var H=te;switch(H.tag){case 0:case 11:case 15:Yo(8,H,p)}var W=H.child;if(W!==null)W.return=H,te=W;else for(;te!==null;){H=te;var B=H.sibling,Z=H.return;if(fp(H),H===b){te=null;break}if(B!==null){B.return=Z,te=B;break}te=Z}}}var ne=p.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var Ze=re.sibling;re.sibling=null,re=Ze}while(re!==null)}}te=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,te=v;else e:for(;te!==null;){if(p=te,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Yo(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,te=L;break e}te=p.return}}var k=t.current;for(te=k;te!==null;){v=te;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,te=M;else e:for(v=k;te!==null;){if(w=te,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Al(9,w)}}catch(se){Ke(w,w.return,se)}if(w===v){te=null;break e}var Q=w.sibling;if(Q!==null){Q.return=w.return,te=Q;break e}te=w.return}}if(ke=h,Fr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(vi,t)}catch{}u=!0}return u}finally{Se=o,dn.transition=r}}return!1}function kp(t,r,o){r=Us(o,r),r=Gd(t,r,1),t=zr(t,r,1),r=Ft(),t!==null&&(Pr(t,1,r),qt(t,r))}function Ke(t,r,o){if(t.tag===3)kp(t,t,o);else for(;r!==null;){if(r.tag===3){kp(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&($r===null||!$r.has(u))){t=Us(o,t),t=qd(r,t,1),r=zr(r,t,1),t=Ft(),r!==null&&(Pr(r,1,t),qt(r,t));break}}r=r.return}}function s_(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=Ft(),t.pingedLanes|=t.suspendedLanes&o,ht===t&&(_t&o)===o&&(at===4||at===3&&(_t&130023424)===_t&&500>Ue()-qc?Vi(t,0):Gc|=o),qt(t,r)}function Pp(t,r){r===0&&((t.mode&1)===0?r=1:(r=hs,hs<<=1,(hs&130023424)===0&&(hs=4194304)));var o=Ft();t=hr(t,r),t!==null&&(Pr(t,r,o),qt(t,o))}function o_(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Pp(t,o)}function a_(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Pp(t,o)}var Np;Np=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||$t.current)Wt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Wt=!1,Kv(t,r,o);Wt=(t.flags&131072)!==0}else Wt=!1,He&&(r.flags&1048576)!==0&&ud(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Il(t,r),t=r.pendingProps;var h=Ns(r,Ct.current);Ms(r,o),h=Sc(null,r,u,t,h,o);var p=Ac();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(u)?(p=!0,sl(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,yc(r),h.updater=wl,r.stateNode=h,h._reactInternals=r,Dc(r,u,t,o),r=Lc(null,r,u,!0,p,o)):(r.tag=0,He&&p&&ac(r),Ut(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Il(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=u_(u),t=Rn(u,t),h){case 0:r=Vc(null,r,u,t,o);break e;case 1:r=np(null,r,u,t,o);break e;case 11:r=Yd(null,r,u,t,o);break e;case 14:r=Jd(null,r,u,Rn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Vc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),np(t,r,u,h,o);case 3:e:{if(rp(r),t===null)throw Error(n(387));u=r.pendingProps,p=r.memoizedState,h=p.element,vd(t,r),pl(r,u,null,o);var v=r.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=Us(Error(n(423)),r),r=ip(t,r,u,o,h);break e}else if(u!==h){h=Us(Error(n(424)),r),r=ip(t,r,u,o,h);break e}else for(nn=Mr(r.stateNode.containerInfo.firstChild),tn=r,He=!0,An=null,o=gd(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),u===h){r=dr(t,r,o);break e}Ut(t,r,u,o)}r=r.child}return r;case 5:return wd(r),t===null&&cc(r),u=r.type,h=r.pendingProps,p=t!==null?t.memoizedProps:null,v=h.children,tc(u,h)?v=null:p!==null&&tc(u,p)&&(r.flags|=32),tp(t,r),Ut(t,r,v,o),r.child;case 6:return t===null&&cc(r),null;case 13:return sp(t,r,o);case 4:return vc(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Vs(r,null,u,o):Ut(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Yd(t,r,u,h,o);case 7:return Ut(t,r,r.pendingProps,o),r.child;case 8:return Ut(t,r,r.pendingProps.children,o),r.child;case 12:return Ut(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,v=h.value,Fe(hl,u._currentValue),u._currentValue=v,p!==null)if(Sn(p.value,v)){if(p.children===h.children&&!$t.current){r=dr(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var w=p.dependencies;if(w!==null){v=p.child;for(var A=w.firstContext;A!==null;){if(A.context===u){if(p.tag===1){A=fr(-1,o&-o),A.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var H=b.pending;H===null?A.next=A:(A.next=H.next,H.next=A),b.pending=A}}p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),mc(p.return,o,r),w.lanes|=o;break}A=A.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(n(341));v.lanes|=o,w=v.alternate,w!==null&&(w.lanes|=o),mc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ut(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ms(r,o),h=hn(h),u=u(h),r.flags|=1,Ut(t,r,u,o),r.child;case 14:return u=r.type,h=Rn(u,r.pendingProps),h=Rn(u.type,h),Jd(t,r,u,h,o);case 15:return Zd(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Il(t,r),r.tag=1,Ht(u)?(t=!0,sl(r)):t=!1,Ms(r,o),Hd(r,u,h),Dc(r,u,h,o),Lc(null,r,u,!0,t,o);case 19:return ap(t,r,o);case 22:return ep(t,r,o)}throw Error(n(156,r.tag))};function Dp(t,r){return us(t,r)}function l_(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,r,o,u){return new l_(t,r,o,u)}function th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u_(t){if(typeof t=="function")return th(t)?1:0;if(t!=null){if(t=t.$$typeof,t===x)return 11;if(t===At)return 14}return 2}function qr(t,r){var o=t.alternate;return o===null?(o=pn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Vl(t,r,o,u,h,p){var v=2;if(u=t,typeof t=="function")th(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case P:return Mi(o.children,h,p,r);case T:v=8,h|=8;break;case S:return t=pn(12,o,r,h|2),t.elementType=S,t.lanes=p,t;case I:return t=pn(13,o,r,h),t.elementType=I,t.lanes=p,t;case Ye:return t=pn(19,o,r,h),t.elementType=Ye,t.lanes=p,t;case Le:return Ll(o,h,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:v=10;break e;case D:v=9;break e;case x:v=11;break e;case At:v=14;break e;case Rt:v=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=pn(v,o,r,h),r.elementType=t,r.type=u,r.lanes=p,r}function Mi(t,r,o,u){return t=pn(7,t,u,r),t.lanes=o,t}function Ll(t,r,o,u){return t=pn(22,t,u,r),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function nh(t,r,o){return t=pn(6,t,null,r),t.lanes=o,t}function rh(t,r,o){return r=pn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function c_(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kr(0),this.expirationTimes=kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ih(t,r,o,u,h,p,v,w,A){return t=new c_(t,r,o,w,A),r===1?(r=1,p===!0&&(r|=8)):r=0,p=pn(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(p),t}function h_(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Op(t){if(!t)return Ur;t=t._reactInternals;e:{if(yn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ht(o))return od(t,o,r)}return r}function xp(t,r,o,u,h,p,v,w,A){return t=ih(o,u,!0,t,h,p,v,w,A),t.context=Op(null),o=t.current,u=Ft(),h=Wr(o),p=fr(u,h),p.callback=r??null,zr(o,p,h),t.current.lanes=h,Pr(t,h,u),qt(t,u),t}function Ml(t,r,o,u){var h=r.current,p=Ft(),v=Wr(h);return o=Op(o),r.context===null?r.context=o:r.pendingContext=o,r=fr(p,v),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=zr(h,r,v),t!==null&&(Pn(t,h,v,p),dl(t,h,v)),v}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function sh(t,r){Vp(t,r),(t=t.alternate)&&Vp(t,r)}function f_(){return null}var Lp=typeof reportError=="function"?reportError:function(t){console.error(t)};function oh(t){this._internalRoot=t}Ul.prototype.render=oh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ml(t,r,null,null)},Ul.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;xi(function(){Ml(null,t,null,null)}),r[ar]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ua();t={blockedOn:null,target:t,priority:r};for(var o=0;o<bn.length&&r!==0&&r<bn[o].priority;o++);bn.splice(o,0,t),o===0&&za(t)}};function ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function d_(t,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var b=bl(v);p.call(b)}}var v=xp(r,u,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=v,t[ar]=v.current,Uo(t.nodeType===8?t.parentNode:t),xi(),v}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var w=u;u=function(){var b=bl(A);w.call(b)}}var A=ih(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=A,t[ar]=A.current,Uo(t.nodeType===8?t.parentNode:t),xi(function(){Ml(r,A,o,u)}),A}function jl(t,r,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var w=h;h=function(){var A=bl(v);w.call(A)}}Ml(r,v,t,h)}else v=d_(o,r,t,h,u);return bl(v)}Ma=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Cr(r.pendingLanes);o!==0&&(Nr(r,o|1),qt(r,Ue()),(ke&6)===0&&(zs=Ue()+500,Fr()))}break;case 13:xi(function(){var u=hr(t,1);if(u!==null){var h=Ft();Pn(u,t,1,h)}}),sh(t,1)}},fs=function(t){if(t.tag===13){var r=hr(t,134217728);if(r!==null){var o=Ft();Pn(r,t,134217728,o)}sh(t,134217728)}},ba=function(t){if(t.tag===13){var r=Wr(t),o=hr(t,r);if(o!==null){var u=Ft();Pn(o,t,r,u)}sh(t,r)}},Ua=function(){return Se},Fa=function(t,r){var o=Se;try{return Se=t,r()}finally{Se=o}},rs=function(t,r,o){switch(r){case"input":if(lo(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=rl(u);if(!h)throw Error(n(90));Yi(u),lo(u,h)}}}break;case"textarea":ts(t,o);break;case"select":r=o.value,r!=null&&Zn(t,!!o.multiple,r,!1)}},di=Jc,_o=xi;var p_={usingClientEntryPoint:!1,Events:[zo,ks,rl,Ln,vo,Jc]},ta={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m_={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=To(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{vi=zl.inject(m_),Yt=zl}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_,Kt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ah(r))throw Error(n(200));return h_(t,r,null,o)},Kt.createRoot=function(t,r){if(!ah(t))throw Error(n(299));var o=!1,u="",h=Lp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=ih(t,1,!1,null,null,o,!1,u,h),t[ar]=r.current,Uo(t.nodeType===8?t.parentNode:t),new oh(r)},Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=To(r),t=t===null?null:t.stateNode,t},Kt.flushSync=function(t){return xi(t)},Kt.hydrate=function(t,r,o){if(!Fl(r))throw Error(n(200));return jl(null,t,r,!0,o)},Kt.hydrateRoot=function(t,r,o){if(!ah(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=Lp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=xp(r,null,t,1,o??null,h,!1,p,v),t[ar]=r.current,Uo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Ul(r)},Kt.render=function(t,r,o){if(!Fl(r))throw Error(n(200));return jl(null,t,r,!1,o)},Kt.unmountComponentAtNode=function(t){if(!Fl(t))throw Error(n(40));return t._reactRootContainer?(xi(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1},Kt.unstable_batchedUpdates=Jc,Kt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Fl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return jl(t,r,o,!1,u)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Hp;function I_(){if(Hp)return ch.exports;Hp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ch.exports=T_(),ch.exports}var Wp;function S_(){if(Wp)return Bl;Wp=1;var i=I_();return Bl.createRoot=i.createRoot,Bl.hydrateRoot=i.hydrateRoot,Bl}var A_=S_(),dh={exports:{}},ph={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function R_(){if(Gp)return ph;Gp=1;var i=Iu();function e(y,E){return y===E&&(y!==0||1/y===1/E)||y!==y&&E!==E}var n=typeof Object.is=="function"?Object.is:e,s=i.useSyncExternalStore,a=i.useRef,c=i.useEffect,f=i.useMemo,g=i.useDebugValue;return ph.useSyncExternalStoreWithSelector=function(y,E,R,N,F){var G=a(null);if(G.current===null){var K={hasValue:!1,value:null};G.current=K}else K=G.current;G=f(function(){function $(Ne){if(!ce){if(ce=!0,he=Ne,Ne=N(Ne),F!==void 0&&K.hasValue){var ye=K.value;if(F(ye,Ne))return me=ye}return me=Ne}if(ye=me,n(he,Ne))return ye;var P=N(Ne);return F!==void 0&&F(ye,P)?(he=Ne,ye):(he=Ne,me=P)}var ce=!1,he,me,ge=R===void 0?null:R;return[function(){return $(E())},ge===null?void 0:function(){return $(ge())}]},[E,R,N,F]);var J=s(y,G[0],G[1]);return c(function(){K.hasValue=!0,K.value=J},[J]),g(J),J},ph}var qp;function C_(){return qp||(qp=1,dh.exports=R_()),dh.exports}var k_=C_();function P_(i){i()}function N_(){let i=null,e=null;return{clear(){i=null,e=null},notify(){P_(()=>{let n=i;for(;n;)n.callback(),n=n.next})},get(){const n=[];let s=i;for(;s;)n.push(s),s=s.next;return n},subscribe(n){let s=!0;const a=e={callback:n,next:null,prev:e};return a.prev?a.prev.next=a:i=a,function(){!s||i===null||(s=!1,a.next?a.next.prev=a.prev:e=a.prev,a.prev?a.prev.next=a.next:i=a.next)}}}}var Kp={notify(){},get:()=>[]};function D_(i,e){let n,s=Kp,a=0,c=!1;function f(J){R();const $=s.subscribe(J);let ce=!1;return()=>{ce||(ce=!0,$(),N())}}function g(){s.notify()}function y(){K.onStateChange&&K.onStateChange()}function E(){return c}function R(){a++,n||(n=i.subscribe(y),s=N_())}function N(){a--,n&&a===0&&(n(),n=void 0,s.clear(),s=Kp)}function F(){c||(c=!0,R())}function G(){c&&(c=!1,N())}const K={addNestedSub:f,notifyNestedSubs:g,handleChangeWrapper:y,isSubscribed:E,trySubscribe:F,tryUnsubscribe:G,getListeners:()=>s};return K}var O_=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x_=O_(),V_=()=>typeof navigator<"u"&&navigator.product==="ReactNative",L_=V_(),M_=()=>x_||L_?Vt.useLayoutEffect:Vt.useEffect,b_=M_(),mh=Symbol.for("react-redux-context"),gh=typeof globalThis<"u"?globalThis:{};function U_(){if(!Vt.createContext)return{};const i=gh[mh]??(gh[mh]=new Map);let e=i.get(Vt.createContext);return e||(e=Vt.createContext(null),i.set(Vt.createContext,e)),e}var ii=U_();function F_(i){const{children:e,context:n,serverState:s,store:a}=i,c=Vt.useMemo(()=>{const y=D_(a);return{store:a,subscription:y,getServerState:s?()=>s:void 0}},[a,s]),f=Vt.useMemo(()=>a.getState(),[a]);b_(()=>{const{subscription:y}=c;return y.onStateChange=y.notifyNestedSubs,y.trySubscribe(),f!==a.getState()&&y.notifyNestedSubs(),()=>{y.tryUnsubscribe(),y.onStateChange=void 0}},[c,f]);const g=n||ii;return Vt.createElement(g.Provider,{value:c},e)}var j_=F_;function Qh(i=ii){return function(){return Vt.useContext(i)}}var hg=Qh();function fg(i=ii){const e=i===ii?hg:Qh(i),n=()=>{const{store:s}=e();return s};return Object.assign(n,{withTypes:()=>n}),n}var z_=fg();function B_(i=ii){const e=i===ii?z_:fg(i),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var $_=B_(),H_=(i,e)=>i===e;function W_(i=ii){const e=i===ii?hg:Qh(i),n=(s,a={})=>{const{equalityFn:c=H_}=typeof a=="function"?{equalityFn:a}:a,f=e(),{store:g,subscription:y,getServerState:E}=f;Vt.useRef(!0);const R=Vt.useCallback({[s.name](F){return s(F)}}[s.name],[s]),N=k_.useSyncExternalStoreWithSelector(y.addNestedSub,g.getState,E||g.getState,R,c);return Vt.useDebugValue(N),N};return Object.assign(n,{withTypes:()=>n}),n}var G_=W_();function Et(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var q_=typeof Symbol=="function"&&Symbol.observable||"@@observable",Qp=q_,yh=()=>Math.random().toString(36).substring(7).split("").join("."),K_={INIT:`@@redux/INIT${yh()}`,REPLACE:`@@redux/REPLACE${yh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${yh()}`},ru=K_;function Q_(i){if(typeof i!="object"||i===null)return!1;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e||Object.getPrototypeOf(i)===null}function dg(i,e,n){if(typeof i!="function")throw new Error(Et(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Et(1));return n(dg)(i,e)}let s=i,a=e,c=new Map,f=c,g=0,y=!1;function E(){f===c&&(f=new Map,c.forEach(($,ce)=>{f.set(ce,$)}))}function R(){if(y)throw new Error(Et(3));return a}function N($){if(typeof $!="function")throw new Error(Et(4));if(y)throw new Error(Et(5));let ce=!0;E();const he=g++;return f.set(he,$),function(){if(ce){if(y)throw new Error(Et(6));ce=!1,E(),f.delete(he),c=null}}}function F($){if(!Q_($))throw new Error(Et(7));if(typeof $.type>"u")throw new Error(Et(8));if(typeof $.type!="string")throw new Error(Et(17));if(y)throw new Error(Et(9));try{y=!0,a=s(a,$)}finally{y=!1}return(c=f).forEach(he=>{he()}),$}function G($){if(typeof $!="function")throw new Error(Et(10));s=$,F({type:ru.REPLACE})}function K(){const $=N;return{subscribe(ce){if(typeof ce!="object"||ce===null)throw new Error(Et(11));function he(){const ge=ce;ge.next&&ge.next(R())}return he(),{unsubscribe:$(he)}},[Qp](){return this}}}return F({type:ru.INIT}),{dispatch:F,subscribe:N,getState:R,replaceReducer:G,[Qp]:K}}function X_(i){Object.keys(i).forEach(e=>{const n=i[e];if(typeof n(void 0,{type:ru.INIT})>"u")throw new Error(Et(12));if(typeof n(void 0,{type:ru.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Et(13))})}function Y_(i){const e=Object.keys(i),n={};for(let c=0;c<e.length;c++){const f=e[c];typeof i[f]=="function"&&(n[f]=i[f])}const s=Object.keys(n);let a;try{X_(n)}catch(c){a=c}return function(f={},g){if(a)throw a;let y=!1;const E={};for(let R=0;R<s.length;R++){const N=s[R],F=n[N],G=f[N],K=F(G,g);if(typeof K>"u")throw g&&g.type,new Error(Et(14));E[N]=K,y=y||K!==G}return y=y||s.length!==Object.keys(f).length,y?E:f}}function J_(...i){return i.length===0?e=>e:i.length===1?i[0]:i.reduce((e,n)=>(...s)=>e(n(...s)))}function Z_(...i){return e=>(n,s)=>{const a=e(n,s);let c=()=>{throw new Error(Et(15))};const f={getState:a.getState,dispatch:(y,...E)=>c(y,...E)},g=i.map(y=>y(f));return c=J_(...g)(a.dispatch),{...a,dispatch:c}}}function eE(i){return({dispatch:n,getState:s})=>a=>c=>typeof c=="function"?c(n,s,i):a(c)}var tE=eE();const nE=()=>{};var Xp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},rE=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],f=i[n++],g=i[n++],y=((a&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],f=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|f&63)}}return e.join("")},mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],f=a+1<i.length,g=f?i[a+1]:0,y=a+2<i.length,E=y?i[a+2]:0,R=c>>2,N=(c&3)<<4|g>>4;let F=(g&15)<<2|E>>6,G=E&63;y||(G=64,f||(F=64)),s.push(n[R],n[N],n[F],n[G])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(pg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):rE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const N=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||E==null||N==null)throw new iE;const F=c<<2|g>>4;if(s.push(F),E!==64){const G=g<<4&240|E>>2;if(s.push(G),N!==64){const K=E<<6&192|N;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class iE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sE=function(i){const e=pg(i);return mg.encodeByteArray(e,!0)},iu=function(i){return sE(i).replace(/\./g,"")},gg=function(i){try{return mg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,lE=()=>{if(typeof process>"u"||typeof Xp>"u")return;const i=Xp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},uE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&gg(i[1]);return e&&JSON.parse(e)},Su=()=>{try{return nE()||aE()||lE()||uE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},yg=i=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},cE=i=>{const e=yg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vg=()=>{var i;return(i=Su())===null||i===void 0?void 0:i.config},_g=i=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[iu(JSON.stringify(n)),iu(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function pE(){var i;const e=(i=Su())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function yE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vE(){const i=Lt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function _E(){return!pE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class Ir extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=TE,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],f=c?IE(c,s):"Error",g=`${this.serviceName}: ${f} (${a}).`;return new Ir(a,g,s)}}function IE(i,e){return i.replace(SE,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const SE=/\{\$([^}]+)}/g;function AE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Bi(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],f=e[a];if(Yp(c)&&Yp(f)){if(!Bi(c,f))return!1}else if(c!==f)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Yp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function RE(i,e){const n=new CE(i,e);return n.subscribe.bind(n)}class CE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kE(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=vh),a.error===void 0&&(a.error=vh),a.complete===void 0&&(a.complete=vh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kE(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function vh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(i){return i&&i._delegate?i._delegate:i}class $i{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DE(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const f=this.instances.get(a);return f&&e(f,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NE(i){return i===bi?void 0:i}function DE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ie||(Ie={}));const xE={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},VE=Ie.INFO,LE={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},ME=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=LE[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xh{constructor(e){this.name=e,this._logLevel=VE,this._logHandler=ME,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const bE=(i,e)=>e.some(n=>i instanceof n);let Jp,Zp;function UE(){return Jp||(Jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FE(){return Zp||(Zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,kh=new WeakMap,wg=new WeakMap,_h=new WeakMap,Yh=new WeakMap;function jE(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",f)},c=()=>{n(ei(i.result)),a()},f=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,i)}).catch(()=>{}),Yh.set(e,i),e}function zE(i){if(kh.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",f),i.removeEventListener("abort",f)},c=()=>{n(),a()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",f),i.addEventListener("abort",f)});kh.set(i,e)}let Ph={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return kh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||wg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function BE(i){Ph=i(Ph)}function $E(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Eh(this),e,...n);return wg.set(s,e.sort?e.sort():[e]),ei(s)}:FE().includes(i)?function(...e){return i.apply(Eh(this),e),ei(Eg.get(this))}:function(...e){return ei(i.apply(Eh(this),e))}}function HE(i){return typeof i=="function"?$E(i):(i instanceof IDBTransaction&&zE(i),bE(i,UE())?new Proxy(i,Ph):i)}function ei(i){if(i instanceof IDBRequest)return jE(i);if(_h.has(i))return _h.get(i);const e=HE(i);return e!==i&&(_h.set(i,e),Yh.set(e,i)),e}const Eh=i=>Yh.get(i);function WE(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const f=indexedDB.open(i,e),g=ei(f);return s&&f.addEventListener("upgradeneeded",y=>{s(ei(f.result),y.oldVersion,y.newVersion,ei(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const GE=["get","getKey","getAll","getAllKeys","count"],qE=["put","add","delete","clear"],wh=new Map;function em(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(wh.get(e))return wh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=qE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||GE.includes(n)))return;const c=async function(f,...g){const y=this.transaction(f,a?"readwrite":"readonly");let E=y.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),a&&y.done]))[0]};return wh.set(e,c),c}BE(i=>({...i,get:(e,n,s)=>em(e,n)||i.get(e,n,s),has:(e,n)=>!!em(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",tm="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Xh("@firebase/app"),XE="@firebase/app-compat",YE="@firebase/analytics-compat",JE="@firebase/analytics",ZE="@firebase/app-check-compat",ew="@firebase/app-check",tw="@firebase/auth",nw="@firebase/auth-compat",rw="@firebase/database",iw="@firebase/data-connect",sw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",lw="@firebase/installations",uw="@firebase/installations-compat",cw="@firebase/messaging",hw="@firebase/messaging-compat",fw="@firebase/performance",dw="@firebase/performance-compat",pw="@firebase/remote-config",mw="@firebase/remote-config-compat",gw="@firebase/storage",yw="@firebase/storage-compat",vw="@firebase/firestore",_w="@firebase/vertexai",Ew="@firebase/firestore-compat",ww="firebase",Tw="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="[DEFAULT]",Iw={[Nh]:"fire-core",[XE]:"fire-core-compat",[JE]:"fire-analytics",[YE]:"fire-analytics-compat",[ew]:"fire-app-check",[ZE]:"fire-app-check-compat",[tw]:"fire-auth",[nw]:"fire-auth-compat",[rw]:"fire-rtdb",[iw]:"fire-data-connect",[sw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[lw]:"fire-iid",[uw]:"fire-iid-compat",[cw]:"fire-fcm",[hw]:"fire-fcm-compat",[fw]:"fire-perf",[dw]:"fire-perf-compat",[pw]:"fire-rc",[mw]:"fire-rc-compat",[gw]:"fire-gcs",[yw]:"fire-gcs-compat",[vw]:"fire-fst",[Ew]:"fire-fst-compat",[_w]:"fire-vertex","fire-js":"fire-js",[ww]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,Sw=new Map,Oh=new Map;function nm(i,e){try{i.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Xs(i){const e=i.name;if(Oh.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,i);for(const n of su.values())nm(n,i);for(const n of Sw.values())nm(n,i);return!0}function Jh(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Gn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new ya("app","Firebase",Aw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=Tw;function Tg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ti.create("bad-app-name",{appName:String(a)});if(n||(n=vg()),!n)throw ti.create("no-options");const c=su.get(a);if(c){if(Bi(n,c.options)&&Bi(s,c.config))return c;throw ti.create("duplicate-app",{appName:a})}const f=new OE(a);for(const y of Oh.values())f.addComponent(y);const g=new Rw(n,s,f);return su.set(a,g),g}function Ig(i=Dh){const e=su.get(i);if(!e&&i===Dh&&vg())return Tg();if(!e)throw ti.create("no-app",{appName:i});return e}function ni(i,e,n){var s;let a=(s=Iw[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),f=e.match(/\s|\//);if(c||f){const g=[`Unable to register library "${a}" with version "${e}":`];c&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(g.join(" "));return}Xs(new $i(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebase-heartbeat-database",kw=1,ca="firebase-heartbeat-store";let Th=null;function Sg(){return Th||(Th=WE(Cw,kw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ca)}catch(n){console.warn(n)}}}}).catch(i=>{throw ti.create("idb-open",{originalErrorMessage:i.message})})),Th}async function Pw(i){try{const n=(await Sg()).transaction(ca),s=await n.objectStore(ca).get(Ag(i));return await n.done,s}catch(e){if(e instanceof Ir)Er.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function rm(i,e){try{const s=(await Sg()).transaction(ca,"readwrite");await s.objectStore(ca).put(e,Ag(i)),await s.done}catch(n){if(n instanceof Ir)Er.warn(n.message);else{const s=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(s.message)}}}function Ag(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1024,Dw=30;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=im();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>Dw){const f=Lw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Er.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=im(),{heartbeatsToSend:s,unsentEntries:a}=xw(this._heartbeatsCache.heartbeats),c=iu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Er.warn(n),""}}}function im(){return new Date().toISOString().substring(0,10)}function xw(i,e=Nw){const n=[];let s=i.slice();for(const a of i){const c=n.find(f=>f.agent===a.agent);if(c){if(c.dates.push(a.date),sm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),sm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Vw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function sm(i){return iu(JSON.stringify({version:2,heartbeats:i})).length}function Lw(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(i){Xs(new $i("platform-logger",e=>new KE(e),"PRIVATE")),Xs(new $i("heartbeat",e=>new Ow(e),"PRIVATE")),ni(Nh,tm,i),ni(Nh,tm,"esm2017"),ni("fire-js","")}Mw("");var om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zh;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function S(){}S.prototype=T.prototype,P.D=T.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(C,D,x){for(var I=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)I[Ye-2]=arguments[Ye];return T.prototype[D].apply(C,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,T,S){S||(S=0);var C=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)C[D]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(D=0;16>D;++D)C[D]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=P.g[0],S=P.g[1],D=P.g[2];var x=P.g[3],I=T+(x^S&(D^x))+C[0]+3614090360&4294967295;T=S+(I<<7&4294967295|I>>>25),I=x+(D^T&(S^D))+C[1]+3905402710&4294967295,x=T+(I<<12&4294967295|I>>>20),I=D+(S^x&(T^S))+C[2]+606105819&4294967295,D=x+(I<<17&4294967295|I>>>15),I=S+(T^D&(x^T))+C[3]+3250441966&4294967295,S=D+(I<<22&4294967295|I>>>10),I=T+(x^S&(D^x))+C[4]+4118548399&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(D^T&(S^D))+C[5]+1200080426&4294967295,x=T+(I<<12&4294967295|I>>>20),I=D+(S^x&(T^S))+C[6]+2821735955&4294967295,D=x+(I<<17&4294967295|I>>>15),I=S+(T^D&(x^T))+C[7]+4249261313&4294967295,S=D+(I<<22&4294967295|I>>>10),I=T+(x^S&(D^x))+C[8]+1770035416&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(D^T&(S^D))+C[9]+2336552879&4294967295,x=T+(I<<12&4294967295|I>>>20),I=D+(S^x&(T^S))+C[10]+4294925233&4294967295,D=x+(I<<17&4294967295|I>>>15),I=S+(T^D&(x^T))+C[11]+2304563134&4294967295,S=D+(I<<22&4294967295|I>>>10),I=T+(x^S&(D^x))+C[12]+1804603682&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(D^T&(S^D))+C[13]+4254626195&4294967295,x=T+(I<<12&4294967295|I>>>20),I=D+(S^x&(T^S))+C[14]+2792965006&4294967295,D=x+(I<<17&4294967295|I>>>15),I=S+(T^D&(x^T))+C[15]+1236535329&4294967295,S=D+(I<<22&4294967295|I>>>10),I=T+(D^x&(S^D))+C[1]+4129170786&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^D&(T^S))+C[6]+3225465664&4294967295,x=T+(I<<9&4294967295|I>>>23),I=D+(T^S&(x^T))+C[11]+643717713&4294967295,D=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(D^x))+C[0]+3921069994&4294967295,S=D+(I<<20&4294967295|I>>>12),I=T+(D^x&(S^D))+C[5]+3593408605&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^D&(T^S))+C[10]+38016083&4294967295,x=T+(I<<9&4294967295|I>>>23),I=D+(T^S&(x^T))+C[15]+3634488961&4294967295,D=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(D^x))+C[4]+3889429448&4294967295,S=D+(I<<20&4294967295|I>>>12),I=T+(D^x&(S^D))+C[9]+568446438&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^D&(T^S))+C[14]+3275163606&4294967295,x=T+(I<<9&4294967295|I>>>23),I=D+(T^S&(x^T))+C[3]+4107603335&4294967295,D=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(D^x))+C[8]+1163531501&4294967295,S=D+(I<<20&4294967295|I>>>12),I=T+(D^x&(S^D))+C[13]+2850285829&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^D&(T^S))+C[2]+4243563512&4294967295,x=T+(I<<9&4294967295|I>>>23),I=D+(T^S&(x^T))+C[7]+1735328473&4294967295,D=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(D^x))+C[12]+2368359562&4294967295,S=D+(I<<20&4294967295|I>>>12),I=T+(S^D^x)+C[5]+4294588738&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^D)+C[8]+2272392833&4294967295,x=T+(I<<11&4294967295|I>>>21),I=D+(x^T^S)+C[11]+1839030562&4294967295,D=x+(I<<16&4294967295|I>>>16),I=S+(D^x^T)+C[14]+4259657740&4294967295,S=D+(I<<23&4294967295|I>>>9),I=T+(S^D^x)+C[1]+2763975236&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^D)+C[4]+1272893353&4294967295,x=T+(I<<11&4294967295|I>>>21),I=D+(x^T^S)+C[7]+4139469664&4294967295,D=x+(I<<16&4294967295|I>>>16),I=S+(D^x^T)+C[10]+3200236656&4294967295,S=D+(I<<23&4294967295|I>>>9),I=T+(S^D^x)+C[13]+681279174&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^D)+C[0]+3936430074&4294967295,x=T+(I<<11&4294967295|I>>>21),I=D+(x^T^S)+C[3]+3572445317&4294967295,D=x+(I<<16&4294967295|I>>>16),I=S+(D^x^T)+C[6]+76029189&4294967295,S=D+(I<<23&4294967295|I>>>9),I=T+(S^D^x)+C[9]+3654602809&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^D)+C[12]+3873151461&4294967295,x=T+(I<<11&4294967295|I>>>21),I=D+(x^T^S)+C[15]+530742520&4294967295,D=x+(I<<16&4294967295|I>>>16),I=S+(D^x^T)+C[2]+3299628645&4294967295,S=D+(I<<23&4294967295|I>>>9),I=T+(D^(S|~x))+C[0]+4096336452&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~D))+C[7]+1126891415&4294967295,x=T+(I<<10&4294967295|I>>>22),I=D+(T^(x|~S))+C[14]+2878612391&4294967295,D=x+(I<<15&4294967295|I>>>17),I=S+(x^(D|~T))+C[5]+4237533241&4294967295,S=D+(I<<21&4294967295|I>>>11),I=T+(D^(S|~x))+C[12]+1700485571&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~D))+C[3]+2399980690&4294967295,x=T+(I<<10&4294967295|I>>>22),I=D+(T^(x|~S))+C[10]+4293915773&4294967295,D=x+(I<<15&4294967295|I>>>17),I=S+(x^(D|~T))+C[1]+2240044497&4294967295,S=D+(I<<21&4294967295|I>>>11),I=T+(D^(S|~x))+C[8]+1873313359&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~D))+C[15]+4264355552&4294967295,x=T+(I<<10&4294967295|I>>>22),I=D+(T^(x|~S))+C[6]+2734768916&4294967295,D=x+(I<<15&4294967295|I>>>17),I=S+(x^(D|~T))+C[13]+1309151649&4294967295,S=D+(I<<21&4294967295|I>>>11),I=T+(D^(S|~x))+C[4]+4149444226&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~D))+C[11]+3174756917&4294967295,x=T+(I<<10&4294967295|I>>>22),I=D+(T^(x|~S))+C[2]+718787259&4294967295,D=x+(I<<15&4294967295|I>>>17),I=S+(x^(D|~T))+C[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(D+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+x&4294967295}s.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var S=T-this.blockSize,C=this.B,D=this.h,x=0;x<T;){if(D==0)for(;x<=S;)a(this,P,x),x+=this.blockSize;if(typeof P=="string"){for(;x<T;)if(C[D++]=P.charCodeAt(x++),D==this.blockSize){a(this,C),D=0;break}}else for(;x<T;)if(C[D++]=P[x++],D==this.blockSize){a(this,C),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var S=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=S&255,S/=256;for(this.u(P),P=Array(16),T=S=0;4>T;++T)for(var C=0;32>C;C+=8)P[S++]=this.g[T]>>>C&255;return P};function c(P,T){var S=g;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=T(P)}function f(P,T){this.h=T;for(var S=[],C=!0,D=P.length-1;0<=D;D--){var x=P[D]|0;C&&x==T||(S[D]=x,C=!1)}this.g=S}var g={};function y(P){return-128<=P&&128>P?c(P,function(T){return new f([T|0],0>T?-1:0)}):new f([P|0],0>P?-1:0)}function E(P){if(isNaN(P)||!isFinite(P))return N;if(0>P)return $(E(-P));for(var T=[],S=1,C=0;P>=S;C++)T[C]=P/S|0,S*=4294967296;return new f(T,0)}function R(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return $(R(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=E(Math.pow(T,8)),C=N,D=0;D<P.length;D+=8){var x=Math.min(8,P.length-D),I=parseInt(P.substring(D,D+x),T);8>x?(x=E(Math.pow(T,x)),C=C.j(x).add(E(I))):(C=C.j(S),C=C.add(E(I)))}return C}var N=y(0),F=y(1),G=y(16777216);i=f.prototype,i.m=function(){if(J(this))return-$(this).m();for(var P=0,T=1,S=0;S<this.g.length;S++){var C=this.i(S);P+=(0<=C?C:4294967296+C)*T,T*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(K(this))return"0";if(J(this))return"-"+$(this).toString(P);for(var T=E(Math.pow(P,6)),S=this,C="";;){var D=ge(S,T).g;S=ce(S,D.j(T));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=D,K(S))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function K(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function J(P){return P.h==-1}i.l=function(P){return P=ce(this,P),J(P)?-1:K(P)?0:1};function $(P){for(var T=P.g.length,S=[],C=0;C<T;C++)S[C]=~P.g[C];return new f(S,~P.h).add(F)}i.abs=function(){return J(this)?$(this):this},i.add=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0,D=0;D<=T;D++){var x=C+(this.i(D)&65535)+(P.i(D)&65535),I=(x>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);C=I>>>16,x&=65535,I&=65535,S[D]=I<<16|x}return new f(S,S[S.length-1]&-2147483648?-1:0)};function ce(P,T){return P.add($(T))}i.j=function(P){if(K(this)||K(P))return N;if(J(this))return J(P)?$(this).j($(P)):$($(this).j(P));if(J(P))return $(this.j($(P)));if(0>this.l(G)&&0>P.l(G))return E(this.m()*P.m());for(var T=this.g.length+P.g.length,S=[],C=0;C<2*T;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<P.g.length;D++){var x=this.i(C)>>>16,I=this.i(C)&65535,Ye=P.i(D)>>>16,At=P.i(D)&65535;S[2*C+2*D]+=I*At,he(S,2*C+2*D),S[2*C+2*D+1]+=x*At,he(S,2*C+2*D+1),S[2*C+2*D+1]+=I*Ye,he(S,2*C+2*D+1),S[2*C+2*D+2]+=x*Ye,he(S,2*C+2*D+2)}for(C=0;C<T;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=T;C<2*T;C++)S[C]=0;return new f(S,0)};function he(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function me(P,T){this.g=P,this.h=T}function ge(P,T){if(K(T))throw Error("division by zero");if(K(P))return new me(N,N);if(J(P))return T=ge($(P),T),new me($(T.g),$(T.h));if(J(T))return T=ge(P,$(T)),new me($(T.g),T.h);if(30<P.g.length){if(J(P)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var S=F,C=T;0>=C.l(P);)S=Ne(S),C=Ne(C);var D=ye(S,1),x=ye(C,1);for(C=ye(C,2),S=ye(S,2);!K(C);){var I=x.add(C);0>=I.l(P)&&(D=D.add(S),x=I),C=ye(C,1),S=ye(S,1)}return T=ce(P,D.j(T)),new me(D,T)}for(D=N;0<=P.l(T);){for(S=Math.max(1,Math.floor(P.m()/T.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=E(S),I=x.j(T);J(I)||0<I.l(P);)S-=C,x=E(S),I=x.j(T);K(x)&&(x=F),D=D.add(x),P=ce(P,I)}return new me(D,P)}i.A=function(P){return ge(this,P).h},i.and=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)&P.i(C);return new f(S,this.h&P.h)},i.or=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)|P.i(C);return new f(S,this.h|P.h)},i.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)^P.i(C);return new f(S,this.h^P.h)};function Ne(P){for(var T=P.g.length+1,S=[],C=0;C<T;C++)S[C]=P.i(C)<<1|P.i(C-1)>>>31;return new f(S,P.h)}function ye(P,T){var S=T>>5;T%=32;for(var C=P.g.length-S,D=[],x=0;x<C;x++)D[x]=0<T?P.i(x+S)>>>T|P.i(x+S+1)<<32-T:P.i(x+S);return new f(D,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=E,f.fromString=R,Zh=f}).apply(typeof om<"u"?om:typeof self<"u"?self:typeof window<"u"?window:{});var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rg,ia,Cg,Ql,xh,kg,Pg,Ng;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof $l=="object"&&$l];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function a(l,d){if(d)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var V=l[_];if(!(V in m))break e;m=m[V]}l=l[l.length-1],_=m[l],d=d(_),d!=_&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function c(l,d){l instanceof String&&(l+="");var m=0,_=!1,V={next:function(){if(!_&&m<l.length){var U=m++;return{value:d(U,l[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function y(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function E(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function R(l,d,m){return l.call.apply(l.bind,arguments)}function N(l,d,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),l.apply(d,V)}}return function(){return l.apply(d,arguments)}}function F(l,d,m){return F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:N,F.apply(null,arguments)}function G(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function K(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,V,U){for(var X=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)X[Ve-2]=arguments[Ve];return d.prototype[V].apply(_,X)}}function J(l){const d=l.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=l[_];return m}return[]}function $(l,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(y(_)){const V=l.length||0,U=_.length||0;l.length=V+U;for(let X=0;X<U;X++)l[V+X]=_[X]}else l.push(_)}}class ce{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function he(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=g.navigator;return l&&(l=l.userAgent)?l:""}function ge(l){return ge[" "](l),l}ge[" "]=function(){};var Ne=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function ye(l,d,m){for(const _ in l)d.call(m,l[_],_,l)}function P(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function T(l){const d={};for(const m in l)d[m]=l[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)l[m]=_[m];for(let U=0;U<S.length;U++)m=S[U],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function D(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function x(l){g.setTimeout(()=>{throw l},0)}function I(){var l=ae;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ye{constructor(){this.h=this.g=null}add(d,m){const _=At.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var At=new ce(()=>new Rt,l=>l.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Y=!1,ae=new Ye,ee=()=>{const l=g.Promise.resolve(void 0);Le=()=>{l.then(O)}};var O=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(m){x(m)}var d=At;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Y=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};g.addEventListener("test",m,d),g.removeEventListener("test",m,d)}catch{}return l}();function Ee(l,d){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(Ne){e:{try{ge(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}K(Ee,oe);var Ae={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),xe=0;function be(l,d,m,_,V){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=V,this.key=++xe,this.da=this.fa=!1}function lt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Yn(l){this.src=l,this.g={},this.h=0}Yn.prototype.add=function(l,d,m,_,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Sr(l,d,_,V);return-1<X?(d=l[X],m||(d.fa=!1)):(d=new be(d,this.src,U,!!_,V),d.fa=m,l.push(d)),d};function Yi(l,d){var m=d.type;if(m in l.g){var _=l.g[m],V=Array.prototype.indexOf.call(_,d,void 0),U;(U=0<=V)&&Array.prototype.splice.call(_,V,1),U&&(lt(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Sr(l,d,m,_){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==d&&U.capture==!!m&&U.ha==_)return V}return-1}var ui="closure_lm_"+(1e6*Math.random()|0),Ji={};function ao(l,d,m,_,V){if(Array.isArray(d)){for(var U=0;U<d.length;U++)ao(l,d[U],m,_,V);return null}return m=co(m),l&&l[Oe]?l.K(d,m,E(_)?!!_.capture:!1,V):lo(l,d,m,!1,_,V)}function lo(l,d,m,_,V,U){if(!d)throw Error("Invalid event type");var X=E(V)?!!V.capture:!!V,Ve=es(l);if(Ve||(l[ui]=Ve=new Yn(l)),m=Ve.add(d,m,_,X,U),m.proxy)return m;if(_=Ca(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)_e||(V=X),V===void 0&&(V=!1),l.addEventListener(d.toString(),_,V);else if(l.attachEvent)l.attachEvent(Zn(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ca(){function l(m){return d.call(l.src,l.listener,m)}const d=uo;return l}function Zi(l,d,m,_,V){if(Array.isArray(d))for(var U=0;U<d.length;U++)Zi(l,d[U],m,_,V);else _=E(_)?!!_.capture:!!_,m=co(m),l&&l[Oe]?(l=l.i,d=String(d).toString(),d in l.g&&(U=l.g[d],m=Sr(U,m,_,V),-1<m&&(lt(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete l.g[d],l.h--)))):l&&(l=es(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Sr(d,m,_,V)),(m=-1<l?d[l]:null)&&Jn(m))}function Jn(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Oe])Yi(d.i,l);else{var m=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(m,_,l.capture):d.detachEvent?d.detachEvent(Zn(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=es(d))?(Yi(m,l),m.h==0&&(m.src=null,d[ui]=null)):lt(l)}}}function Zn(l){return l in Ji?Ji[l]:Ji[l]="on"+l}function uo(l,d){if(l.da)l=!0;else{d=new Ee(d,this);var m=l.listener,_=l.ha||l.src;l.fa&&Jn(l),l=m.call(_,d)}return l}function es(l){return l=l[ui],l instanceof Yn?l:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function co(l){return typeof l=="function"?l:(l[ts]||(l[ts]=function(d){return l.handleEvent(d)}),l[ts])}function rt(){j.call(this),this.i=new Yn(this),this.M=this,this.F=null}K(rt,j),rt.prototype[Oe]=!0,rt.prototype.removeEventListener=function(l,d,m,_){Zi(this,l,d,m,_)};function it(l,d){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new oe(d,l);else if(d instanceof oe)d.target=d.target||l;else{var V=d;d=new oe(_,l),C(d,V)}if(V=!0,m)for(var U=m.length-1;0<=U;U--){var X=d.g=m[U];V=er(X,_,!0,d)&&V}if(X=d.g=l,V=er(X,_,!0,d)&&V,V=er(X,_,!1,d)&&V,m)for(U=0;U<m.length;U++)X=d.g=m[U],V=er(X,_,!1,d)&&V}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],_=0;_<m.length;_++)lt(m[_]);delete l.g[d],l.h--}}this.F=null},rt.prototype.K=function(l,d,m,_){return this.i.add(String(l),d,!1,m,_)},rt.prototype.L=function(l,d,m,_){return this.i.add(String(l),d,!0,m,_)};function er(l,d,m,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,U=0;U<d.length;++U){var X=d[U];if(X&&!X.da&&X.capture==m){var Ve=X.listener,st=X.ha||X.src;X.fa&&Yi(l.i,X),V=Ve.call(st,_)!==!1&&V}}return V&&!_.defaultPrevented}function ho(l,d,m){if(typeof l=="function")m&&(l=F(l,m));else if(l&&typeof l.handleEvent=="function")l=F(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:g.setTimeout(l,d||0)}function Ar(l){l.g=ho(()=>{l.g=null,l.i&&(l.i=!1,Ar(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ci extends j{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ar(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hi(l){j.call(this),this.h=l,this.g={}}K(hi,j);var fo=[];function po(l){ye(l.g,function(d,m){this.g.hasOwnProperty(m)&&Jn(d)},l),l.g={}}hi.prototype.N=function(){hi.aa.N.call(this),po(this)},hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mo=g.JSON.stringify,go=g.JSON.parse,yo=class{stringify(l){return g.JSON.stringify(l,void 0)}parse(l){return g.JSON.parse(l,void 0)}};function fi(){}fi.prototype.h=null;function ns(l){return l.h||(l.h=l.i())}function rs(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){oe.call(this,"d")}K(Vn,oe);function is(){oe.call(this,"c")}K(is,oe);var Ln={},vo=null;function di(){return vo=vo||new rt}Ln.La="serverreachability";function _o(l){oe.call(this,Ln.La,l)}K(_o,oe);function tr(l){const d=di();it(d,new _o(d))}Ln.STAT_EVENT="statevent";function Eo(l,d){oe.call(this,Ln.STAT_EVENT,l),this.stat=d}K(Eo,oe);function Je(l){const d=di();it(d,new Eo(d,l))}Ln.Ma="timingevent";function ss(l,d){oe.call(this,Ln.Ma,l),this.size=d}K(ss,oe);function mn(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){l()},d)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function mi(l,d,m,_,V,U){l.info(function(){if(l.g)if(U)for(var X="",Ve=U.split("&"),st=0;st<Ve.length;st++){var Re=Ve[st].split("=");if(1<Re.length){var ut=Re[0];Re=Re[1];var et=ut.split("_");X=2<=et.length&&et[1]=="type"?X+(ut+"="+Re+"&"):X+(ut+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+d+`
`+m+`
`+X})}function os(l,d,m,_,V,U,X){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+d+`
`+m+`
`+U+" "+X})}function gn(l,d,m,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Mu(l,m)+(_?" "+_:"")})}function wo(l,d){l.info(function(){return"TIMEOUT: "+d})}pi.prototype.info=function(){};function Mu(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return mo(m)}catch{return d}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ka={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yn;function gi(){}K(gi,fi),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},yn=new gi;function vn(l,d,m,_){this.j=l,this.i=d,this.l=m,this.R=_||1,this.U=new hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pa}function Pa(){this.i=null,this.g="",this.h=!1}var To={},ls={};function us(l,d,m){l.L=1,l.v=Nr(Jt(d)),l.m=m,l.P=!0,Io(l,null)}function Io(l,d){l.F=Date.now(),Ue(l),l.A=Jt(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Or(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Pa,l.g=qa(l.j,m?d:null,!l.m),0<l.O&&(l.M=new ci(F(l.Y,l,l.g),l.O)),d=l.U,m=l.g,_=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(fo[0]=V.toString()),V=fo);for(var U=0;U<V.length;U++){var X=ao(m,V[U],_||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),tr(),mi(l.i,l.u,l.A,l.l,l.R,l.m)}vn.prototype.ca=function(l){l=l.target;const d=this.M;d&&Bt(l)==3?d.j():this.Y(l)},vn.prototype.Y=function(l){try{if(l==this.g)e:{const et=Bt(this.g);var d=this.g.Ba();const ln=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Po(this.g)))){this.J||et!=4||d==7||(d==8||0>=ln?tr(3):tr(2)),yi(this);var m=this.g.Z();this.X=m;t:if(Na(this)){var _=Po(this.g);l="";var V=_.length,U=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Rr(this);var X="";break t}this.h.i=new g.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(U&&d==V-1)});_.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,os(this.i,this.u,this.A,this.l,this.R,et,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,st=this.g;if((Ve=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Ve)){var Re=Ve;break t}}Re=null}if(m=Re)gn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,So(this,m);else{this.o=!1,this.s=3,Je(12),on(this),Rr(this);break e}}if(this.P){m=!0;let en;for(;!this.J&&this.C<X.length;)if(en=bu(this,X),en==ls){et==4&&(this.s=4,Je(14),m=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(en==To){this.s=4,Je(15),gn(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else gn(this.i,this.l,en,null),So(this,en);if(Na(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||X.length!=0||this.h.h||(this.s=1,Je(16),m=!1),this.o=this.o&&m,!m)gn(this.i,this.l,X,"[Invalid Chunked Response]"),on(this),Rr(this);else if(0<X.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Do(ut),ut.M=!0,Je(11))}}else gn(this.i,this.l,X,null),So(this,X);et==4&&on(this),this.o&&!this.J&&(et==4?Es(this.j,this):(this.o=!1,Ue(this)))}else ms(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),on(this),Rr(this)}}}catch{}finally{}};function Na(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function bu(l,d){var m=l.C,_=d.indexOf(`
`,m);return _==-1?ls:(m=Number(d.substring(m,_)),isNaN(m)?To:(_+=1,_+m>d.length?ls:(d=d.slice(_,_+m),l.C=_+m,d)))}vn.prototype.cancel=function(){this.J=!0,on(this)};function Ue(l){l.S=Date.now()+l.I,Da(l,l.I)}function Da(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=mn(F(l.ba,l),d)}function yi(l){l.B&&(g.clearTimeout(l.B),l.B=null)}vn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(wo(this.i,this.A),this.L!=2&&(tr(),Je(17)),on(this),this.s=2,Rr(this)):Da(this,this.S-l)};function Rr(l){l.j.G==0||l.J||Es(l.j,l)}function on(l){yi(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,po(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function So(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Mt(m.h,l))){if(!l.K&&Mt(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)_s(m),In(m);else break e;vs(m),Je(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=mn(F(m.Za,m),6e3));if(1>=xa(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else or(m,11)}else if((l.K||m.g==l)&&_s(m),!he(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let Re=V[d];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const ut=Re[3];ut!=null&&(m.la=ut,m.j.info("VER="+m.la));const et=Re[4];et!=null&&(m.Aa=et,m.j.info("SVER="+m.Aa));const ln=Re[5];ln!=null&&typeof ln=="number"&&0<ln&&(_=1.5*ln,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const en=l.g;if(en){const Si=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var U=_.h;U.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ao(U,U.h),U.h=null))}if(_.D){const Ts=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(_.ya=Ts,Me(_.I,_.D,Ts))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var X=l;if(_.qa=Ga(_,_.J?_.ia:null,_.W),X.K){Va(_.h,X);var Ve=X,st=_.L;st&&(Ve.I=st),Ve.B&&(yi(Ve),Ue(Ve)),_.g=X}else Ii(_);0<m.i.length&&Fn(m)}else Re[0]!="stop"&&Re[0]!="close"||or(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?or(m,7):yt(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}tr(4)}catch{}}var Oa=class{constructor(l,d){this.g=l,this.map=d}};function vi(l){this.l=l||10,g.PerformanceNavigationTiming?(l=g.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xa(l){return l.h?1:l.g?l.g.size:0}function Mt(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ao(l,d){l.g?l.g.add(d):l.h=d}function Va(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}vi.prototype.cancel=function(){if(this.i=La(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function La(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return J(l.i)}function cs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var d=[],m=l.length,_=0;_<m;_++)d.push(l[_]);return d}d=[],m=0;for(_ in l)d[m++]=l[_];return d}function hs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const _ in l)d[m++]=_;return d}}}function Cr(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=hs(l),_=cs(l),V=_.length,U=0;U<V;U++)d.call(void 0,_[U],m&&m[U],l)}var _i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uu(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),V=null;if(0<=_){var U=l[m].substring(0,_);V=l[m].substring(_+1)}else U=l[m];d(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function nr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof nr){this.h=l.h,Ei(this,l.j),this.o=l.o,this.g=l.g,kr(this,l.s),this.l=l.l;var d=l.i,m=new Mn;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Pr(this,m),this.m=l.m}else l&&(d=String(l).match(_i))?(this.h=!1,Ei(this,d[1]||"",!0),this.o=Se(d[2]||""),this.g=Se(d[3]||"",!0),kr(this,d[4]),this.l=Se(d[5]||"",!0),Pr(this,d[6]||"",!0),this.m=Se(d[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}nr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Dr(d,fs,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Dr(d,fs,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Dr(m,m.charAt(0)=="/"?Ua:ba,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Dr(m,Ro)),l.join("")};function Jt(l){return new nr(l)}function Ei(l,d,m){l.j=m?Se(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function kr(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Pr(l,d,m){d instanceof Mn?(l.i=d,bn(l.i,l.h)):(m||(d=Dr(d,Fa)),l.i=new Mn(d,l.h))}function Me(l,d,m){l.i.set(d,m)}function Nr(l){return Me(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Se(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Dr(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Ma),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ma(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fs=/[#\/\?@]/g,ba=/[#\?:]/g,Ua=/[#\?]/g,Fa=/[#\?@]/g,Ro=/#/g;function Mn(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function gt(l){l.g||(l.g=new Map,l.h=0,l.i&&Uu(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}i=Mn.prototype,i.add=function(l,d){gt(this),this.i=null,l=an(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function _n(l,d){gt(l),d=an(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function En(l,d){return gt(l),d=an(l,d),l.g.has(d)}i.forEach=function(l,d){gt(this),this.g.forEach(function(m,_){m.forEach(function(V){l.call(d,V,_,this)},this)},this)},i.na=function(){gt(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const V=l[_];for(let U=0;U<V.length;U++)m.push(d[_])}return m},i.V=function(l){gt(this);let d=[];if(typeof l=="string")En(this,l)&&(d=d.concat(this.g.get(an(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},i.set=function(l,d){return gt(this),this.i=null,l=an(this,l),En(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},i.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Or(l,d,m){_n(l,d),0<m.length&&(l.i=null,l.g.set(an(l,d),J(m)),l.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const U=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var V=U;X[_]!==""&&(V+="="+encodeURIComponent(String(X[_]))),l.push(V)}}return this.i=l.join("&")};function an(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function bn(l,d){d&&!l.j&&(gt(l),l.i=null,l.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(_n(this,_),Or(this,V,m))},l)),l.j=d}function Fu(l,d){const m=new pi;if(g.Image){const _=new Image;_.onload=G(zt,m,"TestLoadImage: loaded",!0,d,_),_.onerror=G(zt,m,"TestLoadImage: error",!1,d,_),_.onabort=G(zt,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=G(zt,m,"TestLoadImage: timeout",!1,d,_),g.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function ja(l,d){const m=new pi,_=new AbortController,V=setTimeout(()=>{_.abort(),zt(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(U=>{clearTimeout(V),U.ok?zt(m,"TestPingServer: ok",!0,d):zt(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),zt(m,"TestPingServer: error",!1,d)})}function zt(l,d,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function ju(){this.g=new yo}function za(l,d,m){const _=m||"";try{Cr(l,function(V,U){let X=V;E(V)&&(X=mo(V)),d.push(_+U+"="+encodeURIComponent(X))})}catch(V){throw d.push(_+"type="+encodeURIComponent("_badmap")),V}}function rr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(rr,fi),rr.prototype.g=function(){return new wi(this.l,this.j)},rr.prototype.i=function(l){return function(){return l}}({});function wi(l,d){rt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(wi,rt),i=wi.prototype,i.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Tn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||g).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ba(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ba(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?wn(this):Tn(this),this.readyState==3&&Ba(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,wn(this))},i.Qa=function(l){this.g&&(this.response=l,wn(this))},i.ga=function(){this.g&&wn(this)};function wn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Tn(l)}i.setRequestHeader=function(l,d){this.u.append(l,d)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ir(l){let d="";return ye(l,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function xr(l,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=ir(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Me(l,d,m))}function $e(l){rt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K($e,rt);var zu=/^https?$/i,Co=["POST","PUT"];i=$e.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yn.g(),this.v=this.o?ns(this.o):ns(yn),this.g.onreadystatechange=F(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(U){Ti(this,U);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())m.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),V=g.FormData&&l instanceof g.FormData,!(0<=Array.prototype.indexOf.call(Co,d,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of m)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ti(this,U)}};function Ti(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,ds(l),Zt(l)}function ds(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,it(this,"complete"),it(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ko(this):this.bb())},i.bb=function(){ko(this)};function ko(l){if(l.h&&typeof f<"u"&&(!l.v[1]||Bt(l)!=4||l.Z()!=2)){if(l.u&&Bt(l)==4)ho(l.Ea,0,l);else if(it(l,"readystatechange"),Bt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=X===0){var V=String(l.D).match(_i)[1]||null;!V&&g.self&&g.self.location&&(V=g.self.location.protocol.slice(0,-1)),_=!zu.test(V?V.toLowerCase():"")}m=_}if(m)it(l,"complete"),it(l,"success");else{l.m=6;try{var U=2<Bt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ds(l)}}finally{Zt(l)}}}}function Zt(l,d){if(l.g){ps(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||it(l,"ready");try{m.onreadystatechange=_}catch{}}}function ps(l){l.I&&(g.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Bt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),go(d)}};function Po(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ms(l){const d={};l=(l.g&&2<=Bt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(he(l[_]))continue;var m=D(l[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=d[V]||[];d[V]=U,U.push(m)}P(d,function(_){return _.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function No(l){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vi(l&&l.concurrentRequestLimit),this.Da=new ju,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=No.prototype,i.la=8,i.G=1,i.connect=function(l,d,m,_){Je(0),this.W=l,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Ga(this,null,this.W),Fn(this)};function yt(l){if(gs(l),l.G==3){var d=l.U++,m=Jt(l.I);if(Me(m,"SID",l.K),Me(m,"RID",d),Me(m,"TYPE","terminate"),sr(l,m),d=new vn(l,l.j,d),d.L=2,d.v=Nr(Jt(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=d.v,m=!0),m||(d.g=qa(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ue(d)}Wa(l)}function In(l){l.g&&(Do(l),l.g.cancel(),l.g=null)}function gs(l){In(l),l.u&&(g.clearTimeout(l.u),l.u=null),_s(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&g.clearTimeout(l.s),l.s=null)}function Fn(l){if(!Yt(l.h)&&!l.s){l.s=!0;var d=l.Ga;Le||ee(),Y||(Le(),Y=!0),ae.add(d,l),l.B=0}}function Bu(l,d){return xa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=mn(F(l.Ga,l,d),Ha(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new vn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Vr(this,V,d),m=Jt(this.I),Me(m,"RID",l),Me(m,"CVER",22),this.D&&Me(m,"X-HTTP-Session-Id",this.D),sr(this,m),U&&(this.O?d="headers="+encodeURIComponent(String(ir(U)))+"&"+d:this.m&&xr(m,this.m,U)),Ao(this.h,V),this.Ua&&Me(m,"TYPE","init"),this.P?(Me(m,"$req",d),Me(m,"SID","null"),V.T=!0,us(V,m,null)):us(V,m,d),this.G=2}}else this.G==3&&(l?ys(this,l):this.i.length==0||Yt(this.h)||ys(this))};function ys(l,d){var m;d?m=d.l:m=l.U++;const _=Jt(l.I);Me(_,"SID",l.K),Me(_,"RID",m),Me(_,"AID",l.T),sr(l,_),l.m&&l.o&&xr(_,l.m,l.o),m=new vn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Vr(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ao(l.h,m),us(m,_,d)}function sr(l,d){l.H&&ye(l.H,function(m,_){Me(d,_,m)}),l.l&&Cr({},function(m,_){Me(d,_,m)})}function Vr(l,d,m){m=Math.min(l.i.length,m);var _=l.l?F(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const X=["count="+m];U==-1?0<m?(U=V[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Ve=!0;for(let st=0;st<m;st++){let Re=V[st].g;const ut=V[st].map;if(Re-=U,0>Re)U=Math.max(0,V[st].g-100),Ve=!1;else try{za(ut,X,"req"+Re+"_")}catch{_&&_(ut)}}if(Ve){_=X.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,_}function Ii(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Le||ee(),Y||(Le(),Y=!0),ae.add(d,l),l.v=0}}function vs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=mn(F(l.Fa,l),Ha(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,$a(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=mn(F(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),In(this),$a(this))};function Do(l){l.A!=null&&(g.clearTimeout(l.A),l.A=null)}function $a(l){l.g=new vn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Jt(l.qa);Me(d,"RID","rpc"),Me(d,"SID",l.K),Me(d,"AID",l.T),Me(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Me(d,"TO",l.ja),Me(d,"TYPE","xmlhttp"),sr(l,d),l.m&&l.o&&xr(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Nr(Jt(d)),m.m=null,m.P=!0,Io(m,l)}i.Za=function(){this.C!=null&&(this.C=null,In(this),vs(this),Je(19))};function _s(l){l.C!=null&&(g.clearTimeout(l.C),l.C=null)}function Es(l,d){var m=null;if(l.g==d){_s(l),Do(l),l.g=null;var _=2}else if(Mt(l.h,d))m=d.D,Va(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=l.B;_=di(),it(_,new ss(_,m)),Fn(l)}else Ii(l);else if(V=d.s,V==3||V==0&&0<d.X||!(_==1&&Bu(l,d)||_==2&&vs(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),V){case 1:or(l,5);break;case 4:or(l,10);break;case 3:or(l,6);break;default:or(l,2)}}}function Ha(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function or(l,d){if(l.j.info("Error code "+d),d==2){var m=F(l.fb,l),_=l.Xa;const V=!_;_=new nr(_||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Ei(_,"https"),Nr(_),V?Fu(_.toString(),m):ja(_.toString(),m)}else Je(2);l.G=0,l.l&&l.l.sa(d),Wa(l),gs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Wa(l){if(l.G=0,l.ka=[],l.l){const d=La(l.h);(d.length!=0||l.i.length!=0)&&($(l.ka,d),$(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function Ga(l,d,m){var _=m instanceof nr?Jt(m):new nr(m);if(_.g!="")d&&(_.g=d+"."+_.g),kr(_,_.s);else{var V=g.location;_=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var U=new nr(null);_&&Ei(U,_),d&&(U.g=d),V&&kr(U,V),m&&(U.l=m),_=U}return m=l.D,d=l.ya,m&&d&&Me(_,m,d),Me(_,"VER",l.la),sr(l,_),_}function qa(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new $e(new rr({eb:m})):new $e(l.pa),d.Ha(l.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oo(){}i=Oo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ws(){}ws.prototype.g=function(l,d){return new bt(l,d)};function bt(l,d){rt.call(this),this.g=new No(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!he(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!he(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new jn(this)}K(bt,rt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){yt(this.g)},bt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=mo(l),l=m);d.i.push(new Oa(d.Ya++,l)),d.G==3&&Fn(d)},bt.prototype.N=function(){this.g.l=null,delete this.j,yt(this.g),delete this.g,bt.aa.N.call(this)};function Ka(l){Vn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}K(Ka,Vn);function Qa(){is.call(this),this.status=1}K(Qa,is);function jn(l){this.g=l}K(jn,Oo),jn.prototype.ua=function(){it(this.g,"a")},jn.prototype.ta=function(l){it(this.g,new Ka(l))},jn.prototype.sa=function(l){it(this.g,new Qa)},jn.prototype.ra=function(){it(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Ng=function(){return new ws},Pg=function(){return di()},kg=Ln,xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,Ql=as,ka.COMPLETE="complete",Cg=ka,rs.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",rt.prototype.listen=rt.prototype.K,ia=rs,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Rg=$e}).apply(typeof $l<"u"?$l:typeof self<"u"?self:typeof window<"u"?window:{});const am="@firebase/firestore",lm="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Xh("@firebase/firestore");function $s(){return Hi.logLevel}function ie(i,...e){if(Hi.logLevel<=Ie.DEBUG){const n=e.map(ef);Hi.debug(`Firestore (${io}): ${i}`,...n)}}function Wi(i,...e){if(Hi.logLevel<=Ie.ERROR){const n=e.map(ef);Hi.error(`Firestore (${io}): ${i}`,...n)}}function Au(i,...e){if(Hi.logLevel<=Ie.WARN){const n=e.map(ef);Hi.warn(`Firestore (${io}): ${i}`,...n)}}function ef(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+i;throw Wi(e),new Error(e)}function Xe(i,e){i||Te()}function je(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class Uw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fw{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Xe(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let c=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Fi,e.enqueueRetryable(()=>a(this.currentUser))};const f=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},g=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Fi)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new Dg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Ot(e)}}class jw{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class zw{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new jw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class um{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bw{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Gn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Xe(this.o===void 0);const s=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?a(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new um(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.R=n.token,new um(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=$w(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function Vh(i,e){let n=0;for(;n<i.length&&n<e.length;){const s=i.codePointAt(n),a=e.codePointAt(n);if(s!==a){if(s<128&&a<128)return Pe(s,a);{const c=Hw(),f=Ww(c.encode(cm(i,n)),c.encode(cm(e,n)));return f!==0?f:Pe(s,a)}}n+=s>65535?2:1}return Pe(i.length,e.length)}function cm(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function Ww(i,e){for(let n=0;n<i.length&&n<e.length;++n)if(i[n]!==e[n])return Pe(i[n],e[n]);return Pe(i.length,e.length)}function Ys(i,e,n){return i.length===e.length&&i.every((s,a)=>n(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=-62135596800,fm=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*fm);return new mt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hm)throw new fe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fm}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-hm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{static fromTimestamp(e){return new We(e)}static min(){return new We(new mt(0,0))}static max(){return new We(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="__name__";class Wn{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=Wn.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return Pe(e.length,n.length)}static compareSegments(e,n){const s=Wn.isNumericId(e),a=Wn.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):Vh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zh.fromString(e.substring(4,e.length-2))}}class Qe extends Wn{construct(e,n,s){return new Qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const Gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Wn{construct(e,n,s){return new It(e,n,s)}static isValidIdentifier(e){return Gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dm}static keyField(){return new It([dm])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new fe(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;a<e.length;){const g=e[a];if(g==="\\"){if(a+1===e.length)throw new fe(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new fe(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else g==="`"?(f=!f,a++):g!=="."||f?(s+=g,a++):(c(),a++)}if(c(),f)throw new fe(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(Qe.fromString(e))}static fromName(e){return new ve(Qe.fromString(e).popFirst(5))}static empty(){return new ve(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=-1;function qw(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=We.fromTimestamp(s===1e9?new mt(n+1,0):new mt(n,s));return new si(a,ve.empty(),e)}function Kw(i){return new si(i.readTime,i.key,ha)}class si{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new si(We.min(),ve.empty(),ha)}static max(){return new si(We.max(),ve.empty(),ha)}}function Qw(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(i.documentKey,e.documentKey),n!==0?n:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==Xw)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,s)=>{n(e)})}static reject(e){return new z((n,s)=>{s(e)})}static waitFor(e){return new z((n,s)=>{let a=0,c=0,f=!1;e.forEach(g=>{++a,g.next(()=>{++c,f&&c===a&&n()},y=>s(y))}),f=!0,c===a&&n()})}static or(e){let n=z.resolve(!1);for(const s of e)n=n.next(a=>a?z.resolve(a):s());return n}static forEach(e,n){const s=[];return e.forEach((a,c)=>{s.push(n.call(this,a,c))}),this.waitFor(s)}static mapArray(e,n){return new z((s,a)=>{const c=e.length,f=new Array(c);let g=0;for(let y=0;y<c;y++){const E=y;n(e[E]).next(R=>{f[E]=R,++g,g===c&&s(f)},R=>a(R))}})}static doWhile(e,n){return new z((s,a)=>{const c=()=>{e()===!0?n().next(()=>{c()},a):s()};c()})}}function Jw(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _a(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}nf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=-1;function sf(i){return i==null}function ou(i){return i===0&&1/i==-1/0}function Zw(i){return typeof i=="number"&&Number.isInteger(i)&&!ou(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="";function e0(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=pm(e)),e=t0(i.get(n),e);return pm(e)}function t0(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case xg:n+="";break;default:n+=c}}return n}function pm(i){return i+xg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function so(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function Vg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hl(this.root,e,this.comparator,!0)}}class Hl{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??wt.RED,this.left=a??wt.EMPTY,this.right=c??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new wt(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return wt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,n,s,a,c){return this}insert(e,n,s){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new Xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gm(this.data.getIterator())}getIteratorFrom(e){return new gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new On([])}unionWith(e){let n=new St(It.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new n0("Invalid base64 string: "+c):c}}(e);return new Qn(n)}static fromUint8Array(e){const n=function(a){let c="";for(let f=0;f<a.length;++f)c+=String.fromCharCode(a[f]);return c}(e);return new Qn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qn.EMPTY_BYTE_STRING=new Qn("");const r0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(i){if(Xe(!!i),typeof i=="string"){let e=0;const n=r0.exec(i);if(Xe(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Tt(i.seconds),nanos:Tt(i.nanos)}}function Tt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Js(i){return typeof i=="string"?Qn.fromBase64String(i):Qn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="server_timestamp",Mg="__type__",bg="__previous_value__",Ug="__local_write_time__";function of(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mg])===null||n===void 0?void 0:n.stringValue)===Lg}function af(i){const e=i.mapValue.fields[bg];return of(e)?af(e):e}function au(i){const e=Gi(i.mapValue.fields[Ug].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,s,a,c,f,g,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=E}}const lu="(default)";class uu{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new uu("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof uu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="__type__",s0="__max__",Wl={mapValue:{}},jg="__vector__",Lh="value";function qi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?of(i)?4:a0(i)?9007199254740991:o0(i)?10:11:Te()}function Xn(i,e){if(i===e)return!0;const n=qi(i);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return au(i).isEqual(au(e));case 3:return function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const f=Gi(a.timestampValue),g=Gi(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,c){return Js(a.bytesValue).isEqual(Js(c.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,c){return Tt(a.geoPointValue.latitude)===Tt(c.geoPointValue.latitude)&&Tt(a.geoPointValue.longitude)===Tt(c.geoPointValue.longitude)}(i,e);case 2:return function(a,c){if("integerValue"in a&&"integerValue"in c)return Tt(a.integerValue)===Tt(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const f=Tt(a.doubleValue),g=Tt(c.doubleValue);return f===g?ou(f)===ou(g):isNaN(f)&&isNaN(g)}return!1}(i,e);case 9:return Ys(i.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(a,c){const f=a.mapValue.fields||{},g=c.mapValue.fields||{};if(mm(f)!==mm(g))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(g[y]===void 0||!Xn(f[y],g[y])))return!1;return!0}(i,e);default:return Te()}}function fa(i,e){return(i.values||[]).find(n=>Xn(n,e))!==void 0}function Zs(i,e){if(i===e)return 0;const n=qi(i),s=qi(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(c,f){const g=Tt(c.integerValue||c.doubleValue),y=Tt(f.integerValue||f.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1}(i,e);case 3:return ym(i.timestampValue,e.timestampValue);case 4:return ym(au(i),au(e));case 5:return Vh(i.stringValue,e.stringValue);case 6:return function(c,f){const g=Js(c),y=Js(f);return g.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(c,f){const g=c.split("/"),y=f.split("/");for(let E=0;E<g.length&&E<y.length;E++){const R=Pe(g[E],y[E]);if(R!==0)return R}return Pe(g.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(c,f){const g=Pe(Tt(c.latitude),Tt(f.latitude));return g!==0?g:Pe(Tt(c.longitude),Tt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return vm(i.arrayValue,e.arrayValue);case 10:return function(c,f){var g,y,E,R;const N=c.fields||{},F=f.fields||{},G=(g=N[Lh])===null||g===void 0?void 0:g.arrayValue,K=(y=F[Lh])===null||y===void 0?void 0:y.arrayValue,J=Pe(((E=G==null?void 0:G.values)===null||E===void 0?void 0:E.length)||0,((R=K==null?void 0:K.values)===null||R===void 0?void 0:R.length)||0);return J!==0?J:vm(G,K)}(i.mapValue,e.mapValue);case 11:return function(c,f){if(c===Wl.mapValue&&f===Wl.mapValue)return 0;if(c===Wl.mapValue)return 1;if(f===Wl.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),E=f.fields||{},R=Object.keys(E);y.sort(),R.sort();for(let N=0;N<y.length&&N<R.length;++N){const F=Vh(y[N],R[N]);if(F!==0)return F;const G=Zs(g[y[N]],E[R[N]]);if(G!==0)return G}return Pe(y.length,R.length)}(i.mapValue,e.mapValue);default:throw Te()}}function ym(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const n=Gi(i),s=Gi(e),a=Pe(n.seconds,s.seconds);return a!==0?a:Pe(n.nanos,s.nanos)}function vm(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=Zs(n[a],s[a]);if(c)return c}return Pe(n.length,s.length)}function eo(i){return Mh(i)}function Mh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=Gi(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Js(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return ve.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=Mh(c);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const f of s)c?c=!1:a+=",",a+=`${f}:${Mh(n.fields[f])}`;return a+"}"}(i.mapValue):Te()}function Xl(i){switch(qi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=af(i);return e?16+Xl(e):16;case 5:return 2*i.stringValue.length;case 6:return Js(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,c)=>a+Xl(c),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return so(s.fields,(c,f)=>{a+=c.length+Xl(f)}),a}(i.mapValue);default:throw Te()}}function bh(i){return!!i&&"integerValue"in i}function lf(i){return!!i&&"arrayValue"in i}function Yl(i){return!!i&&"mapValue"in i}function o0(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fg])===null||n===void 0?void 0:n.stringValue)===jg}function sa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return so(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=sa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sa(i.arrayValue.values[n]);return e}return Object.assign({},i)}function a0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===s0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sa(n)}setAll(e){let n=It.emptyPath(),s={},a=[];e.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=g.popLast()}f?s[g.lastSegment()]=sa(f):a.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];Yl(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){so(n,(a,c)=>e[a]=c);for(const a of s)delete e[a]}clone(){return new Dn(sa(this.value))}}function zg(i){const e=[];return so(i.fields,(n,s)=>{const a=new It([n]);if(Yl(s)){const c=zg(s.mapValue).fields;if(c.length===0)e.push(a);else for(const f of c)e.push(a.child(f))}else e.push(a)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s,a,c,f,g){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(e){return new Nn(e,0,We.min(),We.min(),We.min(),Dn.empty(),0)}static newFoundDocument(e,n,s,a){return new Nn(e,1,n,We.min(),s,a,0)}static newNoDocument(e,n){return new Nn(e,2,n,We.min(),We.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new Nn(e,3,n,We.min(),We.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(We.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=We.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function _m(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],f=i.position[a];if(c.field.isKeyField()?s=ve.comparator(ve.fromName(f.referenceValue),n.key):s=Zs(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Em(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Xn(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function l0(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{}class pt extends Bg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new c0(e,n,s):n==="array-contains"?new d0(e,s):n==="in"?new p0(e,s):n==="not-in"?new m0(e,s):n==="array-contains-any"?new g0(e,s):new pt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new h0(e,s):new f0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zs(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oi extends Bg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new oi(e,n)}matches(e){return $g(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $g(i){return i.op==="and"}function Hg(i){return u0(i)&&$g(i)}function u0(i){for(const e of i.filters)if(e instanceof oi)return!1;return!0}function Uh(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+eo(i.value);if(Hg(i))return i.filters.map(e=>Uh(e)).join(",");{const e=i.filters.map(n=>Uh(n)).join(",");return`${i.op}(${e})`}}function Wg(i,e){return i instanceof pt?function(s,a){return a instanceof pt&&s.op===a.op&&s.field.isEqual(a.field)&&Xn(s.value,a.value)}(i,e):i instanceof oi?function(s,a){return a instanceof oi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((c,f,g)=>c&&Wg(f,a.filters[g]),!0):!1}(i,e):void Te()}function Gg(i){return i instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(i):i instanceof oi?function(n){return n.op.toString()+" {"+n.getFilters().map(Gg).join(" ,")+"}"}(i):"Filter"}class c0 extends pt{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class h0 extends pt{constructor(e,n){super(e,"in",n),this.keys=qg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f0 extends pt{constructor(e,n){super(e,"not-in",n),this.keys=qg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qg(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ve.fromName(s.referenceValue))}class d0 extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lf(n)&&fa(n.arrayValue,this.value)}}class p0 extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class m0 extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class g0 extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n=null,s=[],a=[],c=null,f=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=f,this.endAt=g,this.le=null}}function wm(i,e=null,n=[],s=[],a=null,c=null,f=null){return new y0(i,e,n,s,a,c,f)}function uf(i){const e=je(i);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Uh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),sf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>eo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>eo(s)).join(",")),e.le=n}return e.le}function cf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!l0(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!Wg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Em(i.startAt,e.startAt)&&Em(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,s=[],a=[],c=null,f="F",g=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function v0(i,e,n,s,a,c,f,g){return new Ru(i,e,n,s,a,c,f,g)}function _0(i){return new Ru(i)}function Tm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function E0(i){return i.collectionGroup!==null}function oa(i){const e=je(i);if(e.he===null){e.he=[];const n=new Set;for(const c of e.explicitOrderBy)e.he.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new St(It.comparator);return f.filters.forEach(y=>{y.getFlattenedFilters().forEach(E=>{E.isInequality()&&(g=g.add(E.field))})}),g})(e).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||e.he.push(new hu(c,s))}),n.has(It.keyField().canonicalString())||e.he.push(new hu(It.keyField(),s))}return e.he}function ji(i){const e=je(i);return e.Pe||(e.Pe=w0(e,oa(i))),e.Pe}function w0(i,e){if(i.limitType==="F")return wm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const c=a.dir==="desc"?"asc":"desc";return new hu(a.field,c)});const n=i.endAt?new cu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new cu(i.startAt.position,i.startAt.inclusive):null;return wm(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Fh(i,e,n){return new Ru(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Kg(i,e){return cf(ji(i),ji(e))&&i.limitType===e.limitType}function Qg(i){return`${uf(ji(i))}|lt:${i.limitType}`}function ra(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(a=>Gg(a)).join(", ")}]`),sf(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(a=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(a)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(a=>eo(a)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(a=>eo(a)).join(",")),`Target(${s})`}(ji(i))}; limitType=${i.limitType})`}function hf(i,e){return e.isFoundDocument()&&function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ve.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(i,e)&&function(s,a){for(const c of oa(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(f,g,y){const E=_m(f,g,y);return f.inclusive?E<=0:E<0}(s.startAt,oa(s),a)||s.endAt&&!function(f,g,y){const E=_m(f,g,y);return f.inclusive?E>=0:E>0}(s.endAt,oa(s),a))}(i,e)}function T0(i){return(e,n)=>{let s=!1;for(const a of oa(i)){const c=I0(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function I0(i,e,n){const s=i.field.isKeyField()?ve.comparator(e.key,n.key):function(c,f,g){const y=f.data.field(c),E=g.data.field(c);return y!==null&&E!==null?Zs(y,E):Te()}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,s)=>{for(const[a,c]of s)e(a,c)})}isEmpty(){return Vg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new Xt(ve.comparator);function fu(){return S0}const Xg=new Xt(ve.comparator);function Gl(...i){let e=Xg;for(const n of i)e=e.insert(n.key,n);return e}function Yg(i){let e=Xg;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ui(){return aa()}function Jg(){return aa()}function aa(){return new Qi(i=>i.toString(),(i,e)=>i.isEqual(e))}const A0=new Xt(ve.comparator),R0=new St(ve.comparator);function xt(...i){let e=R0;for(const n of i)e=e.add(n);return e}const C0=new St(Pe);function k0(){return C0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function Zg(i){return{integerValue:""+i}}function P0(i,e){return Zw(e)?Zg(e):ff(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function N0(i,e,n){return i instanceof du?function(a,c){const f={fields:{[Mg]:{stringValue:Lg},[Ug]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&of(c)&&(c=af(c)),c&&(f.fields[bg]=c),{mapValue:f}}(n,e):i instanceof da?ty(i,e):i instanceof pa?ny(i,e):function(a,c){const f=ey(a,c),g=Im(f)+Im(a.Ie);return bh(f)&&bh(a.Ie)?Zg(g):ff(a.serializer,g)}(i,e)}function D0(i,e,n){return i instanceof da?ty(i,e):i instanceof pa?ny(i,e):n}function ey(i,e){return i instanceof pu?function(s){return bh(s)||function(c){return!!c&&"doubleValue"in c}(s)}(e)?e:{integerValue:0}:null}class du extends Cu{}class da extends Cu{constructor(e){super(),this.elements=e}}function ty(i,e){const n=ry(e);for(const s of i.elements)n.some(a=>Xn(a,s))||n.push(s);return{arrayValue:{values:n}}}class pa extends Cu{constructor(e){super(),this.elements=e}}function ny(i,e){let n=ry(e);for(const s of i.elements)n=n.filter(a=>!Xn(a,s));return{arrayValue:{values:n}}}class pu extends Cu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Im(i){return Tt(i.integerValue||i.doubleValue)}function ry(i){return lf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function O0(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof da&&a instanceof da||s instanceof pa&&a instanceof pa?Ys(s.elements,a.elements,Xn):s instanceof pu&&a instanceof pu?Xn(s.Ie,a.Ie):s instanceof du&&a instanceof du}(i.transform,e.transform)}class x0{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jl(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ku{}function iy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new oy(i.key,vr.none()):new Ea(i.key,i.data,vr.none());{const n=i.data,s=Dn.empty();let a=new St(It.comparator);for(let c of e.fields)if(!a.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),a=a.add(c)}return new Xi(i.key,s,new On(a.toArray()),vr.none())}}function V0(i,e,n){i instanceof Ea?function(a,c,f){const g=a.value.clone(),y=Am(a.fieldTransforms,c,f.transformResults);g.setAll(y),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(i,e,n):i instanceof Xi?function(a,c,f){if(!Jl(a.precondition,c))return void c.convertToUnknownDocument(f.version);const g=Am(a.fieldTransforms,c,f.transformResults),y=c.data;y.setAll(sy(a)),y.setAll(g),c.convertToFoundDocument(f.version,y).setHasCommittedMutations()}(i,e,n):function(a,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function la(i,e,n,s){return i instanceof Ea?function(c,f,g,y){if(!Jl(c.precondition,f))return g;const E=c.value.clone(),R=Rm(c.fieldTransforms,y,f);return E.setAll(R),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),null}(i,e,n,s):i instanceof Xi?function(c,f,g,y){if(!Jl(c.precondition,f))return g;const E=Rm(c.fieldTransforms,y,f),R=f.data;return R.setAll(sy(c)),R.setAll(E),f.convertToFoundDocument(f.version,R).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(N=>N.field))}(i,e,n,s):function(c,f,g){return Jl(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(i,e,n)}function L0(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=ey(s.transform,a||null);c!=null&&(n===null&&(n=Dn.empty()),n.set(s.field,c))}return n||null}function Sm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ys(s,a,(c,f)=>O0(c,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ea extends ku{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Xi extends ku{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function sy(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function Am(i,e,n){const s=new Map;Xe(i.length===n.length);for(let a=0;a<n.length;a++){const c=i[a],f=c.transform,g=e.data.field(c.field);s.set(c.field,D0(f,g,n[a]))}return s}function Rm(i,e,n){const s=new Map;for(const a of i){const c=a.transform,f=n.data.field(a.field);s.set(a.field,N0(c,f,e))}return s}class oy extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M0 extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&V0(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Jg();return this.mutations.forEach(a=>{const c=e.get(a.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(a.key)?null:g;const y=iy(f,g);y!==null&&s.set(a.key,y),f.isValidDocument()||f.convertToNoDocument(We.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xt())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,s)=>Sm(n,s))&&Ys(this.baseMutations,e.baseMutations,(n,s)=>Sm(n,s))}}class df{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){Xe(e.mutations.length===s.length);let a=function(){return A0}();const c=e.mutations;for(let f=0;f<c.length;f++)a=a.insert(c[f].key,s[f].version);return new df(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Ce;function F0(i){switch(i){case q.OK:return Te();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return Te()}}function j0(i){if(i===void 0)return Wi("GRPC error has no .code"),q.UNKNOWN;switch(i){case nt.OK:return q.OK;case nt.CANCELLED:return q.CANCELLED;case nt.UNKNOWN:return q.UNKNOWN;case nt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case nt.INTERNAL:return q.INTERNAL;case nt.UNAVAILABLE:return q.UNAVAILABLE;case nt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case nt.NOT_FOUND:return q.NOT_FOUND;case nt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case nt.ABORTED:return q.ABORTED;case nt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case nt.DATA_LOSS:return q.DATA_LOSS;default:return Te()}}(Ce=nt||(nt={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zh([4294967295,4294967295],0);class z0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B0(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function $0(i,e){return jh(i,e.toTimestamp())}function Gs(i){return Xe(!!i),We.fromTimestamp(function(n){const s=Gi(n);return new mt(s.seconds,s.nanos)}(i))}function ay(i,e){return zh(i,e).canonicalString()}function zh(i,e){const n=function(a){return new Qe(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?n:n.child(e)}function H0(i){const e=Qe.fromString(i);return Xe(J0(e)),e}function Bh(i,e){return ay(i.databaseId,e.path)}function W0(i){const e=H0(i);return e.length===4?Qe.emptyPath():q0(e)}function G0(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function q0(i){return Xe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Cm(i,e,n){return{name:Bh(i,e),fields:n.value.mapValue.fields}}function K0(i,e){let n;if(e instanceof Ea)n={update:Cm(i,e.key,e.value)};else if(e instanceof oy)n={delete:Bh(i,e.key)};else if(e instanceof Xi)n={update:Cm(i,e.key,e.data),updateMask:Y0(e.fieldMask)};else{if(!(e instanceof M0))return Te();n={verify:Bh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof du)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof da)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof pa)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof pu)return{fieldPath:f.field.canonicalString(),increment:g.Ie};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(a,c){return c.updateTime!==void 0?{updateTime:$0(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Te()}(i,e.precondition)),n}function Q0(i,e){return i&&i.length>0?(Xe(e!==void 0),i.map(n=>function(a,c){let f=a.updateTime?Gs(a.updateTime):Gs(c);return f.isEqual(We.min())&&(f=Gs(c)),new x0(f,a.transformResults||[])}(n,e))):[]}function X0(i){let e=W0(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){Xe(s===1);const R=n.from[0];R.allDescendants?a=R.collectionId:e=e.child(R.collectionId)}let c=[];n.where&&(c=function(N){const F=ly(N);return F instanceof oi&&Hg(F)?F.getFilters():[F]}(n.where));let f=[];n.orderBy&&(f=function(N){return N.map(F=>function(K){return new hu(Hs(K.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(K.direction))}(F))}(n.orderBy));let g=null;n.limit&&(g=function(N){let F;return F=typeof N=="object"?N.value:N,sf(F)?null:F}(n.limit));let y=null;n.startAt&&(y=function(N){const F=!!N.before,G=N.values||[];return new cu(G,F)}(n.startAt));let E=null;return n.endAt&&(E=function(N){const F=!N.before,G=N.values||[];return new cu(G,F)}(n.endAt)),v0(e,a,f,c,g,"F",y,E)}function ly(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Hs(n.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Hs(n.unaryFilter.field);return pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Hs(n.unaryFilter.field);return pt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Hs(n.unaryFilter.field);return pt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(i):i.fieldFilter!==void 0?function(n){return pt.create(Hs(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return oi.create(n.compositeFilter.filters.map(s=>ly(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te()}}(n.compositeFilter.op))}(i):Te()}function Hs(i){return It.fromServerFormat(i.fieldPath)}function Y0(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function J0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.Tt=e}}function eT(i){const e=X0({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.Tn=new nT}addToCollectionParentIndex(e,n){return this.Tn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(si.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(si.min())}updateCollectionGroup(e,n,s){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class nT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new St(Qe.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new St(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uy=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(uy,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new to(0)}static Kn(){return new to(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="LruGarbageCollector",rT=1048576;function Nm([i,e],[n,s]){const a=Pe(i,n);return a===0?Pe(e,s):a}class iT{constructor(e){this.Hn=e,this.buffer=new St(Nm),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Nm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sT{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(Pm,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_a(n)?ie(Pm,"Ignoring IndexedDB error during garbage collection: ",n):await tf(n)}await this.er(3e5)})}}class oT{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return z.resolve(nf.ae);const s=new iT(n);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(km)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),km):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,a,c,f,g,y,E;const R=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(N=>(N>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${N}`),a=this.params.maximumSequenceNumbersToCollect):a=N,f=Date.now(),this.nthSequenceNumber(e,a))).next(N=>(s=N,g=Date.now(),this.removeTargets(e,s,n))).next(N=>(c=N,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(N=>(E=Date.now(),$s()<=Ie.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-R}ms
	Determined least recently used ${a} in `+(g-f)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${N} documents in `+(E-y)+`ms
Total Duration: ${E-R}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:N})))}}function aT(i,e){return new oT(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(s!==null&&la(s.mutation,a,On.empty(),mt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,xt()).next(()=>s))}getLocalViewOfDocuments(e,n,s=xt()){const a=Ui();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,s).next(c=>{let f=Gl();return c.forEach((g,y)=>{f=f.insert(g,y.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Ui();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,xt()))}populateOverlays(e,n,s){const a=[];return s.forEach(c=>{n.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(e,n,s,a){let c=fu();const f=aa(),g=function(){return aa()}();return n.forEach((y,E)=>{const R=s.get(E.key);a.has(E.key)&&(R===void 0||R.mutation instanceof Xi)?c=c.insert(E.key,E):R!==void 0?(f.set(E.key,R.mutation.getFieldMask()),la(R.mutation,E,R.mutation.getFieldMask(),mt.now())):f.set(E.key,On.empty())}),this.recalculateAndSaveOverlays(e,c).next(y=>(y.forEach((E,R)=>f.set(E,R)),n.forEach((E,R)=>{var N;return g.set(E,new uT(R,(N=f.get(E))!==null&&N!==void 0?N:null))}),g))}recalculateAndSaveOverlays(e,n){const s=aa();let a=new Xt((f,g)=>f-g),c=xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const g of f)g.keys().forEach(y=>{const E=n.get(y);if(E===null)return;let R=s.get(y)||On.empty();R=g.applyToLocalView(E,R),s.set(y,R);const N=(a.get(g.batchId)||xt()).add(y);a=a.insert(g.batchId,N)})}).next(()=>{const f=[],g=a.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),E=y.key,R=y.value,N=Jg();R.forEach(F=>{if(!c.has(F)){const G=iy(n.get(F),s.get(F));G!==null&&N.set(F,G),c=c.add(F)}}),f.push(this.documentOverlayCache.saveOverlays(e,E,N))}return z.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,a){return function(f){return ve.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):E0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next(c=>{const f=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):z.resolve(Ui());let g=ha,y=c;return f.next(E=>z.forEach(E,(R,N)=>(g<N.largestBatchId&&(g=N.largestBatchId),c.get(R)?z.resolve():this.remoteDocumentCache.getEntry(e,R).next(F=>{y=y.insert(R,F)}))).next(()=>this.populateOverlays(e,E,c)).next(()=>this.computeViews(e,y,E,xt())).next(R=>({batchId:g,changes:Yg(R)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(s=>{let a=Gl();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let f=Gl();return this.indexManager.getCollectionParents(e,c).next(g=>z.forEach(g,y=>{const E=function(N,F){return new Ru(F,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)}(n,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,E,s,a).next(R=>{R.forEach((N,F)=>{f=f.insert(N,F)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a))).next(f=>{c.forEach((y,E)=>{const R=E.getKey();f.get(R)===null&&(f=f.insert(R,Nn.newInvalidDocument(R)))});let g=Gl();return f.forEach((y,E)=>{const R=c.get(y);R!==void 0&&la(R.mutation,E,On.empty(),mt.now()),hf(n,E)&&(g=g.insert(y,E))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return z.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:Gs(a.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(a){return{name:a.name,query:eT(a.bundledQuery),readTime:Gs(a.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.overlays=new Xt(ve.comparator),this.Rr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ui();return z.forEach(n,a=>this.getOverlay(e,a).next(c=>{c!==null&&s.set(a,c)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((a,c)=>{this.Et(e,n,c)}),z.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),z.resolve()}getOverlaysForCollection(e,n,s){const a=Ui(),c=n.length+1,f=new ve(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const y=g.getNext().value,E=y.getKey();if(!n.isPrefixOf(E.path))break;E.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return z.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new Xt((E,R)=>E-R);const f=this.overlays.getIterator();for(;f.hasNext();){const E=f.getNext().value;if(E.getKey().getCollectionGroup()===n&&E.largestBatchId>s){let R=c.get(E.largestBatchId);R===null&&(R=Ui(),c=c.insert(E.largestBatchId,R)),R.set(E.getKey(),E)}}const g=Ui(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((E,R)=>g.set(E,R)),!(g.size()>=a)););return z.resolve(g)}Et(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const f=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new U0(n,s));let c=this.Rr.get(n);c===void 0&&(c=xt(),this.Rr.set(n,c)),this.Rr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.sessionToken=Qn.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Vr=new St(dt.mr),this.gr=new St(dt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new dt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new dt(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new ve(new Qe([])),s=new dt(n,e),a=new dt(n,e+1),c=[];return this.gr.forEachInRange([s,a],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ve(new Qe([])),s=new dt(n,e),a=new dt(n,e+1);let c=xt();return this.gr.forEachInRange([s,a],f=>{c=c.add(f.key)}),c}containsKey(e){const n=new dt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ve.comparator(e.key,n.key)||Pe(e.Cr,n.Cr)}static pr(e,n){return Pe(e.Cr,n.Cr)||ve.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new St(dt.mr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new b0(c,n,s,a);this.mutationQueue.push(f);for(const g of a)this.Mr=this.Mr.add(new dt(g.key,c)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return z.resolve(f)}lookupMutationBatch(e,n){return z.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Nr(s),c=a<0?0:a;return z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?rf:this.Fr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),a=new dt(n,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,a],f=>{const g=this.Or(f.Cr);c.push(g)}),z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new St(Pe);return n.forEach(a=>{const c=new dt(a,0),f=new dt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],g=>{s=s.add(g.Cr)})}),z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;ve.isDocumentKey(c)||(c=c.child(""));const f=new dt(new ve(c),0);let g=new St(Pe);return this.Mr.forEachWhile(y=>{const E=y.key.path;return!!s.isPrefixOf(E)&&(E.length===a&&(g=g.add(y.Cr)),!0)},f),z.resolve(this.Br(g))}Br(e){const n=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){Xe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return z.forEach(n.mutations,a=>{const c=new dt(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new dt(n,0),a=this.Mr.firstAfterOrEqual(s);return z.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.kr=e,this.docs=function(){return new Xt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return z.resolve(s?s.document.mutableCopy():Nn.newInvalidDocument(n))}getEntries(e,n){let s=fu();return n.forEach(a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Nn.newInvalidDocument(a))}),z.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=fu();const f=n.path,g=new ve(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:E,value:{document:R}}=y.getNext();if(!f.isPrefixOf(E.path))break;E.path.length>f.length+1||Qw(Kw(R),s)<=0||(a.has(R.key)||hf(n,R))&&(c=c.insert(R.key,R.mutableCopy()))}return z.resolve(c)}getAllFromCollectionGroup(e,n,s,a){Te()}qr(e,n){return z.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gT(this)}getSize(e){return z.resolve(this.size)}}class gT extends lT{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?n.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),z.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.persistence=e,this.Qr=new Qi(n=>uf(n),cf),this.lastRemoteSnapshotVersion=We.min(),this.highestTargetId=0,this.$r=0,this.Ur=new pf,this.targetCount=0,this.Kr=to.Un()}forEachTarget(e,n){return this.Qr.forEach((s,a)=>n(a)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),z.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new to(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.zn(n),z.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.Qr.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(e,g.targetId)),a++)}),z.waitFor(c).next(()=>a)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return z.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),z.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach(f=>{c.push(a.markPotentiallyOrphaned(e,f))}),z.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return z.resolve(s)}containsKey(e,n){return z.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new nf(0),this.zr=!1,this.zr=!0,this.jr=new dT,this.referenceDelegate=e(this),this.Hr=new yT(this),this.indexManager=new tT,this.remoteDocumentCache=function(a){return new mT(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Z0(n),this.Yr=new hT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new pT(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const a=new vT(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(c=>this.referenceDelegate.Xr(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}ei(e,n){return z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class vT extends Yw{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.ti=new pf,this.ni=null}static ri(e){return new mf(e)}get ii(){if(this.ni)return this.ni;throw Te()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),z.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),z.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ii,s=>{const a=ve.fromPath(s);return this.si(e,a).next(c=>{c||n.removeEntry(a,We.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return z.or([()=>z.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.oi=new Qi(s=>e0(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=aT(this,n)}static ri(e,n){return new mu(e,n)}Zr(){}Xr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(a=>s+a))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return z.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(c=>c?z.resolve():n(a)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.qr(e,f=>this.ar(e,f,n).next(g=>{g||(s++,c.removeEntry(f,We.min()))})).next(()=>c.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),z.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xl(e.data.value)),n}ar(e,n,s){return z.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.oi.get(n);return z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=a}static Yi(e,n){let s=xt(),a=xt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new gf(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _E()?8:Jw(Lt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.rs(e,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(e,n,a,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new _T;return this._s(e,n,f).next(g=>{if(c.result=g,this.Xi)return this.us(e,n,f,g.size)})}).next(()=>c.result)}us(e,n,s,a){return s.documentReadCount<this.es?($s()<=Ie.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ra(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),z.resolve()):($s()<=Ie.DEBUG&&ie("QueryEngine","Query:",ra(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?($s()<=Ie.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ra(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ji(n))):z.resolve())}rs(e,n){if(Tm(n))return z.resolve(null);let s=ji(n);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Fh(n,null,"F"),s=ji(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(c=>{const f=xt(...c);return this.ns.getDocuments(e,f).next(g=>this.indexManager.getMinOffset(e,s).next(y=>{const E=this.cs(n,g);return this.ls(n,E,f,y.readTime)?this.rs(e,Fh(n,null,"F")):this.hs(e,E,n,y)}))})))}ss(e,n,s,a){return Tm(n)||a.isEqual(We.min())?z.resolve(null):this.ns.getDocuments(e,s).next(c=>{const f=this.cs(n,c);return this.ls(n,f,s,a)?z.resolve(null):($s()<=Ie.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ra(n)),this.hs(e,f,n,qw(a,ha)).next(g=>g))})}cs(e,n){let s=new St(T0(e));return n.forEach((a,c)=>{hf(e,c)&&(s=s.add(c))}),s}ls(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}_s(e,n,s){return $s()<=Ie.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ra(n)),this.ns.getDocumentsMatchingQuery(e,n,si.min(),s)}hs(e,n,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="LocalStore";class TT{constructor(e,n,s,a){this.persistence=e,this.Ps=n,this.serializer=a,this.Ts=new Xt(Pe),this.Is=new Qi(c=>uf(c),cf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cT(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function IT(i,e,n,s){return new TT(i,e,n,s)}async function hy(i,e){const n=je(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next(c=>(a=c,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let y=xt();for(const E of a){f.push(E.batchId);for(const R of E.mutations)y=y.add(R.key)}for(const E of c){g.push(E.batchId);for(const R of E.mutations)y=y.add(R.key)}return n.localDocuments.getDocuments(s,y).next(E=>({Rs:E,removedBatchIds:f,addedBatchIds:g}))})})}function ST(i,e){const n=je(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),c=n.ds.newChangeBuffer({trackRemovals:!0});return function(g,y,E,R){const N=E.batch,F=N.keys();let G=z.resolve();return F.forEach(K=>{G=G.next(()=>R.getEntry(y,K)).next(J=>{const $=E.docVersions.get(K);Xe($!==null),J.version.compareTo($)<0&&(N.applyToRemoteDocument(J,E),J.isValidDocument()&&(J.setReadTime(E.commitVersion),R.addEntry(J)))})}),G.next(()=>g.mutationQueue.removeMutationBatch(y,N))}(n,s,e,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let y=xt();for(let E=0;E<g.mutationResults.length;++E)g.mutationResults[E].transformResults.length>0&&(y=y.add(g.batch.mutations[E].key));return y}(e))).next(()=>n.localDocuments.getDocuments(s,a))})}function AT(i){const e=je(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function RT(i,e){const n=je(i);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=rf),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Dm{constructor(){this.activeTargetIds=k0()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CT{constructor(){this.ho=new Dm,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Dm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="ConnectivityMonitor";class xm{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(Om,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(Om,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql=null;function $h(){return ql===null?ql=function(){return 268435456+Math.round(2147483648*Math.random())}():ql++,"0x"+ql.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="RestConnection",PT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NT{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===lu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}So(e,n,s,a,c){const f=$h(),g=this.bo(e,n.toUriEncodedString());ie(Ih,`Sending RPC '${e}' ${f}:`,g,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,a,c),this.vo(e,g,y,s).then(E=>(ie(Ih,`Received RPC '${e}' ${f}: `,E),E),E=>{throw Au(Ih,`RPC '${e}' ${f} failed with error: `,E,"url: ",g,"request:",s),E})}Co(e,n,s,a,c,f){return this.So(e,n,s,a,c)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,c)=>e[c]=a),s&&s.headers.forEach((a,c)=>e[c]=a)}bo(e,n){const s=PT[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class OT extends NT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,a){const c=$h();return new Promise((f,g)=>{const y=new Rg;y.setWithCredentials(!0),y.listenOnce(Cg.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Ql.NO_ERROR:const R=y.getResponseJson();ie(Dt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(R)),f(R);break;case Ql.TIMEOUT:ie(Dt,`RPC '${e}' ${c} timed out`),g(new fe(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const N=y.getStatus();if(ie(Dt,`RPC '${e}' ${c} failed with status:`,N,"response text:",y.getResponseText()),N>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const G=F==null?void 0:F.error;if(G&&G.status&&G.message){const K=function($){const ce=$.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ce)>=0?ce:q.UNKNOWN}(G.status);g(new fe(K,G.message))}else g(new fe(q.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new fe(q.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ie(Dt,`RPC '${e}' ${c} completed.`)}});const E=JSON.stringify(a);ie(Dt,`RPC '${e}' ${c} sending request:`,a),y.send(n,"POST",E,s,15)})}Wo(e,n,s){const a=$h(),c=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=Ng(),g=Pg(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(y.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const R=c.join("");ie(Dt,`Creating RPC '${e}' stream ${a}: ${R}`,y);const N=f.createWebChannel(R,y);let F=!1,G=!1;const K=new DT({Fo:$=>{G?ie(Dt,`Not sending because RPC '${e}' stream ${a} is closed:`,$):(F||(ie(Dt,`Opening RPC '${e}' stream ${a} transport.`),N.open(),F=!0),ie(Dt,`RPC '${e}' stream ${a} sending:`,$),N.send($))},Mo:()=>N.close()}),J=($,ce,he)=>{$.listen(ce,me=>{try{he(me)}catch(ge){setTimeout(()=>{throw ge},0)}})};return J(N,ia.EventType.OPEN,()=>{G||(ie(Dt,`RPC '${e}' stream ${a} transport opened.`),K.Qo())}),J(N,ia.EventType.CLOSE,()=>{G||(G=!0,ie(Dt,`RPC '${e}' stream ${a} transport closed`),K.Uo())}),J(N,ia.EventType.ERROR,$=>{G||(G=!0,Au(Dt,`RPC '${e}' stream ${a} transport errored:`,$),K.Uo(new fe(q.UNAVAILABLE,"The operation could not be completed")))}),J(N,ia.EventType.MESSAGE,$=>{var ce;if(!G){const he=$.data[0];Xe(!!he);const me=he,ge=(me==null?void 0:me.error)||((ce=me[0])===null||ce===void 0?void 0:ce.error);if(ge){ie(Dt,`RPC '${e}' stream ${a} received error:`,ge);const Ne=ge.status;let ye=function(S){const C=nt[S];if(C!==void 0)return j0(C)}(Ne),P=ge.message;ye===void 0&&(ye=q.INTERNAL,P="Unknown error status: "+Ne+" with message "+ge.message),G=!0,K.Uo(new fe(ye,P)),N.close()}else ie(Dt,`RPC '${e}' stream ${a} received:`,he),K.Ko(he)}}),J(g,kg.STAT_EVENT,$=>{$.stat===xh.PROXY?ie(Dt,`RPC '${e}' stream ${a} detected buffering proxy`):$.stat===xh.NOPROXY&&ie(Dt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{K.$o()},0),K}}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(i){return new z0(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=a,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,n-s);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="PersistentStream";class xT{constructor(e,n,s,a,c,f,g,y){this.Ti=e,this.n_=s,this.r_=a,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new fy(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===n&&this.V_(s,a)},s=>{e(()=>{const a=new fe(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(Vm,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ie(Vm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VT extends xT{constructor(e,n,s,a,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,f),this.serializer=c}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Q0(e.writeResults,e.commitTime),s=Gs(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=G0(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>K0(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{}class MT extends LT{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new fe(q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.So(e,zh(n,s),a,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(q.UNKNOWN,c.toString())})}Co(e,n,s,a,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Co(e,zh(n,s),a,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new fe(q.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class bT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wi(n),this.N_=!1):ie("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="RemoteStore";class UT{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Ia(this)&&(ie(wa,"Restarting streams for network reachability change."),await async function(y){const E=je(y);E.W_.add(4),await Ta(E),E.j_.set("Unknown"),E.W_.delete(4),await Nu(E)}(this))})}),this.j_=new bT(s,a)}}async function Nu(i){if(Ia(i))for(const e of i.G_)await e(!0)}async function Ta(i){for(const e of i.G_)await e(!1)}function Ia(i){return je(i).W_.size===0}async function dy(i,e,n){if(!_a(e))throw e;i.W_.add(1),await Ta(i),i.j_.set("Offline"),n||(n=()=>AT(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ie(wa,"Retrying IndexedDB access"),await n(),i.W_.delete(1),await Nu(i)})}function py(i,e){return e().catch(n=>dy(i,n,e))}async function Du(i){const e=je(i),n=ai(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:rf;for(;FT(e);)try{const a=await RT(e.localStore,s);if(a===null){e.U_.length===0&&n.P_();break}s=a.batchId,jT(e,a)}catch(a){await dy(e,a)}my(e)&&gy(e)}function FT(i){return Ia(i)&&i.U_.length<10}function jT(i,e){i.U_.push(e);const n=ai(i);n.c_()&&n.S_&&n.b_(e.mutations)}function my(i){return Ia(i)&&!ai(i).u_()&&i.U_.length>0}function gy(i){ai(i).start()}async function zT(i){ai(i).C_()}async function BT(i){const e=ai(i);for(const n of i.U_)e.b_(n.mutations)}async function $T(i,e,n){const s=i.U_.shift(),a=df.from(s,e,n);await py(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Du(i)}async function HT(i,e){e&&ai(i).S_&&await async function(s,a){if(function(f){return F0(f)&&f!==q.ABORTED}(a.code)){const c=s.U_.shift();ai(s).h_(),await py(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a)),await Du(s)}}(i,e),my(i)&&gy(i)}async function Lm(i,e){const n=je(i);n.asyncQueue.verifyOperationInProgress(),ie(wa,"RemoteStore received new credentials");const s=Ia(n);n.W_.add(3),await Ta(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Nu(n)}async function WT(i,e){const n=je(i);e?(n.W_.delete(2),await Nu(n)):e||(n.W_.add(2),await Ta(n),n.j_.set("Unknown"))}function ai(i){return i.Y_||(i.Y_=function(n,s,a){const c=je(n);return c.M_(),new VT(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:zT.bind(null,i),Lo:HT.bind(null,i),D_:BT.bind(null,i),v_:$T.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await Du(i)):(await i.Y_.stop(),i.U_.length>0&&(ie(wa,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const f=Date.now()+s,g=new yf(e,n,f,a,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yy(i,e){if(Wi("AsyncQueue",`${e}: ${i}`),_a(i))return new fe(q.UNAVAILABLE,`${e}: ${i}`);throw i}class GT{constructor(){this.queries=Mm(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const a=je(n),c=a.queries;a.queries=Mm(),c.forEach((f,g)=>{for(const y of g.ta)y.onError(s)})})(this,new fe(q.ABORTED,"Firestore shutting down"))}}function Mm(){return new Qi(i=>Qg(i),Kg)}function qT(i){i.ia.forEach(e=>{e.next()})}var bm,Um;(Um=bm||(bm={}))._a="default",Um.Cache="cache";const KT="SyncEngine";class QT{constructor(e,n,s,a,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Qi(g=>Qg(g),Kg),this.qa=new Map,this.Qa=new Set,this.$a=new Xt(ve.comparator),this.Ua=new Map,this.Ka=new pf,this.Wa={},this.Ga=new Map,this.za=to.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function XT(i,e,n){const s=eI(i);try{const a=await function(f,g){const y=je(f),E=mt.now(),R=g.reduce((G,K)=>G.add(K.key),xt());let N,F;return y.persistence.runTransaction("Locally write mutations","readwrite",G=>{let K=fu(),J=xt();return y.ds.getEntries(G,R).next($=>{K=$,K.forEach((ce,he)=>{he.isValidDocument()||(J=J.add(ce))})}).next(()=>y.localDocuments.getOverlayedDocuments(G,K)).next($=>{N=$;const ce=[];for(const he of g){const me=L0(he,N.get(he.key).overlayedDocument);me!=null&&ce.push(new Xi(he.key,me,zg(me.value.mapValue),vr.exists(!0)))}return y.mutationQueue.addMutationBatch(G,E,ce,g)}).next($=>{F=$;const ce=$.applyToLocalDocumentSet(N,J);return y.documentOverlayCache.saveOverlays(G,$.batchId,ce)})}).then(()=>({batchId:F.batchId,changes:Yg(N)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(f,g,y){let E=f.Wa[f.currentUser.toKey()];E||(E=new Xt(Pe)),E=E.insert(g,y),f.Wa[f.currentUser.toKey()]=E}(s,a.batchId,n),await Ou(s,a.changes),await Du(s.remoteStore)}catch(a){const c=yy(a,"Failed to persist write");n.reject(c)}}function Fm(i,e,n){const s=je(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.ka.forEach((c,f)=>{const g=f.view.sa(e);g.snapshot&&a.push(g.snapshot)}),function(f,g){const y=je(f);y.onlineState=g;let E=!1;y.queries.forEach((R,N)=>{for(const F of N.ta)F.sa(g)&&(E=!0)}),E&&qT(y)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function YT(i,e){const n=je(i),s=e.batch.batchId;try{const a=await ST(n.localStore,e);_y(n,s,null),vy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ou(n,a)}catch(a){await tf(a)}}async function JT(i,e,n){const s=je(i);try{const a=await function(f,g){const y=je(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",E=>{let R;return y.mutationQueue.lookupMutationBatch(E,g).next(N=>(Xe(N!==null),R=N.keys(),y.mutationQueue.removeMutationBatch(E,N))).next(()=>y.mutationQueue.performConsistencyCheck(E)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(E,R,g)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,R)).next(()=>y.localDocuments.getDocuments(E,R))})}(s.localStore,e);_y(s,e,n),vy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ou(s,a)}catch(a){await tf(a)}}function vy(i,e){(i.Ga.get(e)||[]).forEach(n=>{n.resolve()}),i.Ga.delete(e)}function _y(i,e,n){const s=je(i);let a=s.Wa[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}async function Ou(i,e,n){const s=je(i),a=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((g,y)=>{f.push(s.Ha(y,e,n).then(E=>{var R;if((E||n)&&s.isPrimaryClient){const N=E?!E.fromCache:(R=void 0)===null||R===void 0?void 0:R.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(E){a.push(E);const N=gf.Yi(y.targetId,E);c.push(N)}}))}),await Promise.all(f),s.La.p_(a),await async function(y,E){const R=je(y);try{await R.persistence.runTransaction("notifyLocalViewChanges","readwrite",N=>z.forEach(E,F=>z.forEach(F.Hi,G=>R.persistence.referenceDelegate.addReference(N,F.targetId,G)).next(()=>z.forEach(F.Ji,G=>R.persistence.referenceDelegate.removeReference(N,F.targetId,G)))))}catch(N){if(!_a(N))throw N;ie(wT,"Failed to update sequence numbers: "+N)}for(const N of E){const F=N.targetId;if(!N.fromCache){const G=R.Ts.get(F),K=G.snapshotVersion,J=G.withLastLimboFreeSnapshotVersion(K);R.Ts=R.Ts.insert(F,J)}}}(s.localStore,c))}async function ZT(i,e){const n=je(i);if(!n.currentUser.isEqual(e)){ie(KT,"User change. New user:",e.toKey());const s=await hy(n.localStore,e);n.currentUser=e,function(c,f){c.Ga.forEach(g=>{g.forEach(y=>{y.reject(new fe(q.CANCELLED,f))})}),c.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ou(n,s.Rs)}}function eI(i){const e=je(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JT.bind(null,e),e}class gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return IT(this.persistence,new ET,e.initialUser,this.serializer)}Xa(e){return new cy(mf.ri,this.serializer)}Za(e){return new CT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gu.provider={build:()=>new gu};class tI extends gu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Xe(this.persistence.referenceDelegate instanceof mu);const s=this.persistence.referenceDelegate.garbageCollector;return new sT(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new cy(s=>mu.ri(s,n),this.serializer)}}class Hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZT.bind(null,this.syncEngine),await WT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GT}()}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),s=function(c){return new OT(c)}(e.databaseInfo);return function(c,f,g,y){return new MT(c,f,g,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,a,c,f,g){return new UT(s,a,c,f,g)}(this.localStore,this.datastore,e.asyncQueue,n=>Fm(this.syncEngine,n,0),function(){return xm.D()?new xm:new kT}())}createSyncEngine(e,n){return function(a,c,f,g,y,E,R){const N=new QT(a,c,f,g,y,E);return R&&(N.ja=!0),N}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const c=je(a);ie(wa,"RemoteStore shutting down."),c.W_.add(5),await Ta(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="FirestoreClient";class nI{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Ot.UNAUTHENTICATED,this.clientId=Og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ie(li,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ie(li,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yy(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ah(i,e){i.asyncQueue.verifyOperationInProgress(),ie(li,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await hy(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function jm(i,e){i.asyncQueue.verifyOperationInProgress();const n=await rI(i);ie(li,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>Lm(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>Lm(e.remoteStore,a)),i._onlineComponents=e}async function rI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(li,"Using user provided OfflineComponentProvider");try{await Ah(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Au("Error using user provided cache. Falling back to memory cache: "+n),await Ah(i,new gu)}}else ie(li,"Using default OfflineComponentProvider"),await Ah(i,new tI(void 0));return i._offlineComponents}async function iI(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(li,"Using user provided OnlineComponentProvider"),await jm(i,i._uninitializedComponentsProvider._online)):(ie(li,"Using default OnlineComponentProvider"),await jm(i,new Hh))),i._onlineComponents}function sI(i){return iI(i).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(i,e,n){if(!n)throw new fe(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function oI(i,e,n,s){if(e===!0&&s===!0)throw new fe(q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Bm(i){if(!ve.isDocumentKey(i))throw new fe(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function $m(i){if(ve.isDocumentKey(i))throw new fe(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function vf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function Ty(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new fe(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(i);throw new fe(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firestore.googleapis.com",Hm=!0;class Wm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iy,this.ssl=Hm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rT)throw new fe(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ey((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new fe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new fe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new fe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xu{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new bw;switch(s.type){case"firstParty":return new zw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=zm.get(n);s&&(ie("ComponentProvider","Removing Datastore"),zm.delete(n),s.terminate())}(this),Promise.resolve()}}function aI(i,e,n,s={}){var a;const c=(i=Ty(i,xu))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${n}`;c.host!==Iy&&c.host!==g&&Au("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:g,ssl:!1,emulatorOptions:s});if(!Bi(y,f)&&(i._setSettings(y),s.mockUserToken)){let E,R;if(typeof s.mockUserToken=="string")E=s.mockUserToken,R=Ot.MOCK_USER;else{E=fE(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new fe(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new Ot(N)}i._authCredentials=new Uw(new Dg(E,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _f(this.firestore,e,this._query)}}class _r{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _r(this.firestore,e,this._key)}}class ri extends _f{constructor(e,n,s){super(e,n,_0(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _r(this.firestore,null,new ve(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function lI(i,e,...n){if(i=xn(i),wy("collection","path",e),i instanceof xu){const s=Qe.fromString(e,...n);return $m(s),new ri(i,null,s)}{if(!(i instanceof _r||i instanceof ri))throw new fe(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...n));return $m(s),new ri(i.firestore,null,s)}}function uI(i,e,...n){if(i=xn(i),arguments.length===1&&(e=Og.newId()),wy("doc","path",e),i instanceof xu){const s=Qe.fromString(e,...n);return Bm(s),new _r(i,null,new ve(s))}{if(!(i instanceof _r||i instanceof ri))throw new fe(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...n));return Bm(s),new _r(i.firestore,i instanceof ri?i.converter:null,new ve(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="AsyncQueue";class qm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new fy(this,"async_queue_retry"),this.Su=()=>{const s=Sh();s&&ie(Gm,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=Sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Fi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!_a(e))throw e;ie(Gm,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(f){let g=f.message||"";return f.stack&&(g=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),g}(s);throw Wi("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const a=yf.createAndSchedule(this,e,n,s,c=>this.Fu(c));return this.fu.push(a),a}Du(){this.gu&&Te()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Sy extends xu{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new qm,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qm(e),this._firestoreClient=void 0,await e}}}function cI(i,e){const n=typeof i=="object"?i:Ig(),s=typeof i=="string"?i:lu,a=Jh(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=cE("firestore");c&&aI(a,...c)}return a}function hI(i){if(i._terminated)throw new fe(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||fI(i),i._firestoreClient}function fI(i){var e,n,s;const a=i._freezeSettings(),c=function(g,y,E,R){return new i0(g,y,E,R.host,R.ssl,R.experimentalForceLongPolling,R.experimentalAutoDetectLongPolling,Ey(R.experimentalLongPollingOptions),R.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new nI(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ma(Qn.fromBase64String(e))}catch(n){throw new fe(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ma(Qn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^__.*__$/;class pI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}function Py(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Ef{constructor(e,n,s,a,c,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Py(this.Lu)&&dI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class mI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pu(e)}ju(e,n,s,a=!1){return new Ef({Lu:e,methodName:n,zu:s,path:It.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gI(i){const e=i._freezeSettings(),n=Pu(i._databaseId);return new mI(i._databaseId,!!e.ignoreUndefinedProperties,n)}function yI(i,e,n,s,a,c={}){const f=i.ju(c.merge||c.mergeFields?2:0,e,n,a);xy("Data must be an object, but it was:",f,s);const g=Dy(s,f);let y,E;if(c.merge)y=new On(f.fieldMask),E=f.fieldTransforms;else if(c.mergeFields){const R=[];for(const N of c.mergeFields){const F=vI(e,N,n);if(!f.contains(F))throw new fe(q.INVALID_ARGUMENT,`Field '${F}' is specified in your field mask but missing from your input data.`);wI(R,F)||R.push(F)}y=new On(R),E=f.fieldTransforms.filter(N=>y.covers(N.field))}else y=null,E=f.fieldTransforms;return new pI(new Dn(g),y,E)}function Ny(i,e){if(Oy(i=xn(i)))return xy("Unsupported field value:",e,i),Dy(i,e);if(i instanceof Ry)return function(s,a){if(!Py(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const c=[];let f=0;for(const g of s){let y=Ny(g,a.Ku(f));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),f++}return{arrayValue:{values:c}}}(i,e)}return function(s,a){if((s=xn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return P0(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=mt.fromDate(s);return{timestampValue:jh(a.serializer,c)}}if(s instanceof mt){const c=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:jh(a.serializer,c)}}if(s instanceof Cy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ma)return{bytesValue:B0(a.serializer,s._byteString)};if(s instanceof _r){const c=a.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw a.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:ay(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ky)return function(f,g){return{mapValue:{fields:{[Fg]:{stringValue:jg},[Lh]:{arrayValue:{values:f.toArray().map(E=>{if(typeof E!="number")throw g.Wu("VectorValues must only contain numeric values.");return ff(g.serializer,E)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${vf(s)}`)}(i,e)}function Dy(i,e){const n={};return Vg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(i,(s,a)=>{const c=Ny(a,e.qu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function Oy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof mt||i instanceof Cy||i instanceof ma||i instanceof _r||i instanceof Ry||i instanceof ky)}function xy(i,e,n){if(!Oy(n)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(n)){const s=vf(n);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function vI(i,e,n){if((e=xn(e))instanceof Ay)return e._internalPath;if(typeof e=="string")return EI(i,e);throw yu("Field path arguments must be of type string or ",i,!1,void 0,n)}const _I=new RegExp("[~\\*/\\[\\]]");function EI(i,e,n){if(e.search(_I)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Ay(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function yu(i,e,n,s,a){const c=s&&!s.isEmpty(),f=a!==void 0;let g=`Function ${e}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(c||f)&&(y+=" (found",c&&(y+=` in field ${s}`),f&&(y+=` in document ${a}`),y+=")"),new fe(q.INVALID_ARGUMENT,g+i+y)}function wI(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(i,e,n){let s;return s=i?i.toFirestore(e):e,s}function II(i,e){const n=Ty(i.firestore,Sy),s=uI(i),a=TI(i.converter,e);return SI(n,[yI(gI(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,vr.exists(!1))]).then(()=>s)}function SI(i,e){return function(s,a){const c=new Fi;return s.asyncQueue.enqueueAndForget(async()=>XT(await sI(s),a,c)),c.promise}(hI(i),e)}(function(e,n=!0){(function(a){io=a})(ro),Xs(new $i("firestore",(s,{instanceIdentifier:a,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new Sy(new Fw(s.getProvider("auth-internal")),new Bw(f,s.getProvider("app-check-internal")),function(E,R){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new fe(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uu(E.options.projectId,R)}(f,a),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),ni(am,lm,e),ni(am,lm,"esm2017")})();var AI="firebase",RI="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni(AI,RI,"app");function wf(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function Vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CI=Vy,Ly=new ya("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Xh("@firebase/auth");function kI(i,...e){vu.logLevel<=Ie.WARN&&vu.warn(`Auth (${ro}): ${i}`,...e)}function Zl(i,...e){vu.logLevel<=Ie.ERROR&&vu.error(`Auth (${ro}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(i,...e){throw Tf(i,...e)}function qn(i,...e){return Tf(i,...e)}function My(i,e,n){const s=Object.assign(Object.assign({},CI()),{[e]:n});return new ya("auth","Firebase",s).create(e,{appName:i.name})}function zi(i){return My(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tf(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Ly.create(i,...e)}function pe(i,e,...n){if(!i)throw Tf(e,...n)}function mr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Zl(e),new Error(e)}function Tr(i,e){i||mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function PI(){return Km()==="http:"||Km()==="https:"}function Km(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||gE()||"connection"in navigator)?navigator.onLine:!0}function DI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=dE()||yE()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(i,e){Tr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Sa(3e4,6e4);function Sf(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function oo(i,e,n,s,a={}){return Uy(i,a,async()=>{let c={},f={};s&&(e==="GET"?f=s:c={body:JSON.stringify(s)});const g=va(Object.assign({key:i.config.apiKey},f)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:y},c);return mE()||(E.referrerPolicy="no-referrer"),by.fetch()(Fy(i,i.config.apiHost,n,g),E)})}async function Uy(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},OI),e);try{const a=new LI(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw Kl(i,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[y,E]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(i,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Kl(i,"email-already-in-use",f);if(y==="USER_DISABLED")throw Kl(i,"user-disabled",f);const R=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw My(i,R,E);wr(i,R)}}catch(a){if(a instanceof Ir)throw a;wr(i,"network-request-failed",{message:String(a)})}}async function VI(i,e,n,s,a={}){const c=await oo(i,e,n,s,a);return"mfaPendingCredential"in c&&wr(i,"multi-factor-auth-required",{_serverResponse:c}),c}function Fy(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?If(i.config,a):`${i.config.apiScheme}://${a}`}class LI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),xI.get())})}}function Kl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=qn(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(i,e){return oo(i,"POST","/v1/accounts:delete",e)}async function jy(i,e){return oo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(i,e=!1){const n=xn(i),s=await n.getIdToken(e),a=Af(s);pe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,f=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:ua(Rh(a.auth_time)),issuedAtTime:ua(Rh(a.iat)),expirationTime:ua(Rh(a.exp)),signInProvider:f||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Rh(i){return Number(i)*1e3}function Af(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const a=gg(n);return a?JSON.parse(a):(Zl("Failed to decode base64 JWT payload"),null)}catch(a){return Zl("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Qm(i){const e=Af(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ir&&UI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function UI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(i){var e;const n=i.auth,s=await i.getIdToken(),a=await ga(i,jy(n,{idToken:s}));pe(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const f=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?zy(c.providerUserInfo):[],g=zI(i.providerData,f),y=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),R=y?E:!1,N={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Gh(c.createdAt,c.lastLoginAt),isAnonymous:R};Object.assign(i,N)}async function jI(i){const e=xn(i);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function zy(i){return i.map(e=>{var{providerId:n}=e,s=wf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(i,e){const n=await Uy(i,{},async()=>{const s=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,f=Fy(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",by.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $I(i,e){return oo(i,"POST","/v2/accounts:revokeToken",Sf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Qm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await BI(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,f=new qs;return s&&(pe(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),a&&(pe(typeof a=="string","internal-error",{appName:e}),f.accessToken=a),c&&(pe(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qs,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Gh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await ga(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(zi(this.auth));const e=await this.getIdToken();return await ga(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,f,g,y,E,R;const N=(s=n.displayName)!==null&&s!==void 0?s:void 0,F=(a=n.email)!==null&&a!==void 0?a:void 0,G=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,K=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(g=n.tenantId)!==null&&g!==void 0?g:void 0,$=(y=n._redirectEventId)!==null&&y!==void 0?y:void 0,ce=(E=n.createdAt)!==null&&E!==void 0?E:void 0,he=(R=n.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:me,emailVerified:ge,isAnonymous:Ne,providerData:ye,stsTokenManager:P}=n;pe(me&&P,e,"internal-error");const T=qs.fromJSON(this.name,P);pe(typeof me=="string",e,"internal-error"),Qr(N,e.name),Qr(F,e.name),pe(typeof ge=="boolean",e,"internal-error"),pe(typeof Ne=="boolean",e,"internal-error"),Qr(G,e.name),Qr(K,e.name),Qr(J,e.name),Qr($,e.name),Qr(ce,e.name),Qr(he,e.name);const S=new gr({uid:me,auth:e,email:F,emailVerified:ge,displayName:N,isAnonymous:Ne,photoURL:K,phoneNumber:G,tenantId:J,stsTokenManager:T,createdAt:ce,lastLoginAt:he});return ye&&Array.isArray(ye)&&(S.providerData=ye.map(C=>Object.assign({},C))),$&&(S._redirectEventId=$),S}static async _fromIdTokenResponse(e,n,s=!1){const a=new qs;a.updateFromServerResponse(n);const c=new gr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await _u(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];pe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?zy(a.providerUserInfo):[],f=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),g=new qs;g.updateFromIdToken(s);const y=new gr({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:f}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Gh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,E),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function yr(i){Tr(i instanceof Function,"Expected a class definition");let e=Xm.get(i);return e?(Tr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Xm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}By.type="NONE";const Ym=By;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(i,e,n){return`firebase:${i}:${e}:${n}`}class Ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=eu(this.userKey,a.apiKey,c),this.fullPersistenceKey=eu("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ks(yr(Ym),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||yr(Ym);const f=eu(s,e.config.apiKey,e.name);let g=null;for(const E of n)try{const R=await E._get(f);if(R){const N=gr._fromJSON(e,R);E!==c&&(g=N),c=E;break}}catch{}const y=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new Ks(c,e,s):(c=y[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(f)}catch{}})),new Ks(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($y(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(Qy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||Wy(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $y(i=Lt()){return/firefox\//i.test(i)}function Hy(i=Lt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wy(i=Lt()){return/crios\//i.test(i)}function Gy(i=Lt()){return/iemobile/i.test(i)}function qy(i=Lt()){return/android/i.test(i)}function Ky(i=Lt()){return/blackberry/i.test(i)}function Qy(i=Lt()){return/webos/i.test(i)}function Rf(i=Lt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function HI(i=Lt()){var e;return Rf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WI(){return vE()&&document.documentMode===10}function Xy(i=Lt()){return Rf(i)||qy(i)||Qy(i)||Ky(i)||/windows phone/i.test(i)||Gy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(i,e=[]){let n;switch(i){case"Browser":n=Jm(Lt());break;case"Worker":n=`${Jm(Lt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((f,g)=>{try{const y=e(c);f(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(i,e={}){return oo(i,"GET","/v2/passwordPolicy",Sf(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=6;class QI{constructor(e){var n,s,a,c;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:KI,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,f,g;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(n=y.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(f=y.containsNumericCharacter)!==null&&f!==void 0?f:!0),y.isValid&&(y.isValid=(g=y.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),y}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zm(this),this.idTokenSubscription=new Zm(this),this.beforeStateQueue=new GI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jy(this,{idToken:e}),s=await gr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!f||f===g)&&(y!=null&&y.user)&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(f){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(zi(this));const n=e?xn(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(zi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(zi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),n=new QI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ya("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,a);return()=>{f=!0,y()}}else{const y=e.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cf(i){return xn(i)}class Zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=RE(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YI(i){kf=i}function JI(i){return kf.loadJS(i)}function ZI(){return kf.gapiScript}function eS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(i,e){const n=Jh(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Bi(c,e??{}))return a;wr(a,"already-initialized")}return n.initialize({options:e})}function nS(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rS(i,e,n){const s=Cf(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Jy(e),{host:f,port:g}=iS(e),y=g===null?"":`:${g}`,E={url:`${c}//${f}${y}/`},R=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(Bi(E,s.config.emulator)&&Bi(R,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=R,s.settings.appVerificationDisabledForTesting=!0,sS()}function Jy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function iS(i){const e=Jy(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:eg(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:eg(f)}}}function eg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sS(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(i,e){return VI(i,"POST","/v1/accounts:signInWithIdp",Sf(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="http://localhost";class Ki extends Zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=wf(n,["providerId","signInMethod"]);if(!s||!a)return null;const f=new Ki(s,a);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:oS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Aa{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ki._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yr.credential(n,s)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Aa{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Aa{constructor(){super("twitter.com")}static credential(e,n){return Ki._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zr.credential(n,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await gr._fromIdTokenResponse(e,s,a),f=tg(s);return new no({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=tg(s);return new no({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function tg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Ir{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Eu(e,n,s,a)}}function tv(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(i,c,e,s):c})}async function aS(i,e,n=!1){const s=await ga(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return no._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(i,e,n=!1){const{auth:s}=i;if(Gn(s.app))return Promise.reject(zi(s));const a="reauthenticate";try{const c=await ga(i,tv(s,a,e,i),n);pe(c.idToken,s,"internal-error");const f=Af(c.idToken);pe(f,s,"internal-error");const{sub:g}=f;return pe(i.uid===g,s,"user-mismatch"),no._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&wr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(i,e,n=!1){if(Gn(i.app))return Promise.reject(zi(i));const s="signIn",a=await tv(i,s,e),c=await no._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}function cS(i,e,n,s){return xn(i).onIdTokenChanged(e,n,s)}function hS(i,e,n){return xn(i).beforeAuthStateChanged(e,n)}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=1e3,dS=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,g,y)=>{this.notifyListeners(f,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);WI()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dS):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const pS=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iv.type="SESSION";const sv=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Vu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,f=this.handlersMap[a];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(f).map(async E=>E(n.origin,c)),y=await mS(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,f;return new Promise((g,y)=>{const E=Pf("",20);a.port1.start();const R=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:a,onMessage(N){const F=N;if(F.data.eventId===E)switch(F.data.status){case"ack":clearTimeout(R),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(F.data.response);break;default:clearTimeout(R),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(f),a.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function yS(i){Kn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function vS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ES(){return ov()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",wS=1,Tu="firebaseLocalStorage",lv="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lu(i,e){return i.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function TS(){const i=indexedDB.deleteDatabase(av);return new Ra(i).toPromise()}function qh(){const i=indexedDB.open(av,wS);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Tu,{keyPath:lv})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Tu)?e(s):(s.close(),await TS(),e(await qh()))})})}async function ng(i,e,n){const s=Lu(i,!0).put({[lv]:e,value:n});return new Ra(s).toPromise()}async function IS(i,e){const n=Lu(i,!1).get(e),s=await new Ra(n).toPromise();return s===void 0?null:s.value}function rg(i,e){const n=Lu(i,!0).delete(e);return new Ra(n).toPromise()}const SS=800,AS=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vu._getInstance(ES()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vS(),!this.activeServiceWorker)return;this.sender=new gS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qh();return await ng(e,wu,"1"),await rg(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ng(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>IS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Lu(a,!1).getAll();return new Ra(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const RS=uv;new Sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(i,e){return e?yr(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(i){return uS(i.auth,new Nf(i),i.bypassAuthState)}function PS(i){const{auth:e,user:n}=i;return pe(n,e,"internal-error"),lS(n,new Nf(i),i.bypassAuthState)}async function NS(i){const{auth:e,user:n}=i;return pe(n,e,"internal-error"),aS(n,new Nf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:f,type:g}=e;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return NS;case"reauthViaPopup":case"reauthViaRedirect":return PS;default:wr(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Sa(2e3,1e4);class Ws extends cv{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DS.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="pendingRedirect",tu=new Map;class xS extends cv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const s=await VS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VS(i,e){const n=bS(e),s=MS(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function LS(i,e){tu.set(i._key(),e)}function MS(i){return yr(i._redirectPersistence)}function bS(i){return eu(OS,i.config.apiKey,i.name)}async function US(i,e,n=!1){if(Gn(i.app))return Promise.reject(zi(i));const s=Cf(i),a=CS(s,e),f=await new xS(s,a,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hv(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function hv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(i,e={}){return oo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HS=/^https?/;async function WS(i){if(i.config.emulator)return;const{authorizedDomains:e}=await BS(i);for(const n of e)try{if(GS(n))return}catch{}wr(i,"unauthorized-domain")}function GS(i){const e=Wh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!HS.test(n))return!1;if($S.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new Sa(3e4,6e4);function sg(){const i=Kn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function KS(i){return new Promise((e,n)=>{var s,a,c;function f(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),n(qn(i,"network-request-failed"))},timeout:qS.get()})}if(!((a=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Kn().gapi)===null||c===void 0)&&c.load)f();else{const g=eS("iframefcb");return Kn()[g]=()=>{gapi.load?f():n(qn(i,"network-request-failed"))},JI(`${ZI()}?onload=${g}`).catch(y=>n(y))}}).catch(e=>{throw nu=null,e})}let nu=null;function QS(i){return nu=nu||KS(i),nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=new Sa(5e3,15e3),YS="__/auth/iframe",JS="emulator/auth/iframe",ZS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?If(e,JS):`https://${i.config.authDomain}/${YS}`,s={apiKey:e.apiKey,appName:i.name,v:ro},a=eA.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${va(s).slice(1)}`}async function nA(i){const e=await QS(i),n=Kn().gapi;return pe(n,i,"internal-error"),e.open({where:document.body,url:tA(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZS,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const f=qn(i,"network-request-failed"),g=Kn().setTimeout(()=>{c(f)},XS.get());function y(){Kn().clearTimeout(g),a(s)}s.ping(y).then(y,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iA=500,sA=600,oA="_blank",aA="http://localhost";class og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lA(i,e,n,s=iA,a=sA){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y=Object.assign(Object.assign({},rA),{width:s.toString(),height:a.toString(),top:c,left:f}),E=Lt().toLowerCase();n&&(g=Wy(E)?oA:n),$y(E)&&(e=e||aA,y.scrollbars="yes");const R=Object.entries(y).reduce((F,[G,K])=>`${F}${G}=${K},`,"");if(HI(E)&&g!=="_self")return uA(e||"",g),new og(null);const N=window.open(e||"",g,R);pe(N,i,"popup-blocked");try{N.focus()}catch{}return new og(N)}function uA(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="__/auth/handler",hA="emulator/auth/handler",fA=encodeURIComponent("fac");async function ag(i,e,n,s,a,c){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ro,eventId:a};if(e instanceof ev){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",AE(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[R,N]of Object.entries({}))f[R]=N}if(e instanceof Aa){const R=e.getScopes().filter(N=>N!=="");R.length>0&&(f.scopes=R.join(","))}i.tenantId&&(f.tid=i.tenantId);const g=f;for(const R of Object.keys(g))g[R]===void 0&&delete g[R];const y=await i._getAppCheckToken(),E=y?`#${fA}=${encodeURIComponent(y)}`:"";return`${dA(i)}?${va(g).slice(1)}${E}`}function dA({config:i}){return i.emulator?If(i,hA):`https://${i.authDomain}/${cA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="webStorageSupport";class pA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=US,this._overrideRedirectResult=LS}async _openPopup(e,n,s,a){var c;Tr((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await ag(e,n,s,Wh(),a);return lA(e,f,Pf())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await ag(e,n,s,Wh(),a);return yS(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Tr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nA(e),s=new jS(e);return n.register("authEvent",a=>(pe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ch,{type:Ch},a=>{var c;const f=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Ch];f!==void 0&&n(!!f),wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xy()||Hy()||Rf()}}const mA=pA;var lg="@firebase/auth",ug="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vA(i){Xs(new $i("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;pe(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(i)},E=new XI(s,a,c,y);return nS(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xs(new $i("auth-internal",e=>{const n=Cf(e.getProvider("auth").getImmediate());return(s=>new gA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(lg,ug,yA(i)),ni(lg,ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=5*60,EA=_g("authIdTokenMaxAge")||_A;let cg=null;const wA=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>EA)return;const a=n==null?void 0:n.token;cg!==a&&(cg=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function TA(i=Ig()){const e=Jh(i,"auth");if(e.isInitialized())return e.getImmediate();const n=tS(i,{popupRedirectResolver:mA,persistence:[RS,pS,sv]}),s=_g("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=wA(c.toString());hS(n,f,()=>f(n.currentUser)),cS(n,g=>f(g))}}const a=yg("auth");return a&&rS(n,`http://${a}`),n}function IA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}YI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=qn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",IA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vA("Browser");const SA={apiKey:"AIzaSyBimQ0AUNr9Kl1lRAWvnEVhYskf5ZH-Ag4",authDomain:"thuecode24h-7bffd.firebaseapp.com",projectId:"thuecode24h-7bffd",storageBucket:"thuecode24h-7bffd.firebasestorage.app",messagingSenderId:"731835347253",appId:"1:731835347253:web:2619c40e65f66b64811c7c",measurementId:"G-C1PJQKETFC"},fv=Tg(SA),AA=cI(fv);TA(fv);const dv="SET_ACCOUNT",Kh="LOGIN_ACCOUNT",RA=(i,e)=>(n,s)=>{const{account:a}=s();a.username===i&&a.password===e?(alert("Đăng nhập thành công!"),n({type:Kh,payload:!0})):(alert("Sai tài khoản hoặc mật khẩu!"),n({type:Kh,payload:!1}))},CA=i=>async e=>{if(console.log(i),!(!i.username||!i.password||!i.fullName||!i.phoneNumber))try{await II(lI(AA,"accounts"),i,{username:i.username,password:i.password,fullName:i.fullName,phoneNumber:i.phoneNumber,isLoggedIn:!1}),e({type:dv,payload:i}),alert("dang ky thanh cong!!")}catch{alert("dang ky that bai!!")}},kA={username:"",password:"",fullName:"",phoneNumber:""},PA={account:kA,isLoggedIn:!1},NA=(i=PA,e)=>{switch(e.type){case dv:return{...i,account:e.payload};case Kh:return{...i,isLoggedIn:e.payload};default:return i}},DA=Y_({account:NA}),OA=dg(DA,Z_(tE)),xA=()=>{const i=$_(),e=G_(g=>g.account.account),[n,s]=Vt.useState(e),a=g=>{s({...n,[g.target.name]:g.target.value})},c=()=>{i(CA(n))},f=()=>{i(RA(n.username,n.password))};return jt.jsxs("div",{children:[jt.jsx("h2",{children:"Quản lý tài khoản"}),jt.jsx("input",{type:"text",name:"username",placeholder:"Tên tài khoản",onChange:a}),jt.jsx("input",{type:"password",name:"password",placeholder:"Mật khẩu",onChange:a}),jt.jsx("input",{type:"text",name:"fullName",placeholder:"Họ và tên",onChange:a}),jt.jsx("input",{type:"text",name:"phoneNumber",placeholder:"Số điện thoại",onChange:a}),jt.jsx("button",{onClick:c,children:"Đăng ký"}),jt.jsx("button",{onClick:f,children:"Đăng nhập"})]})};function VA(){const[i,e]=Vt.useState(0);return jt.jsx(jt.Fragment,{children:jt.jsx("div",{children:jt.jsx(j_,{store:OA,children:jt.jsx(xA,{})})})})}A_.createRoot(document.getElementById("root")).render(jt.jsx(Vt.StrictMode,{children:jt.jsx(VA,{})}));
