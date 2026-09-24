(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{257:function(e,t,r){"use strict";var i,s;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(4227)},4601:function(){},4227:function(e){!function(){var t={229:function(e){var t,r,i,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:n}catch(e){r=n}}();var l=[],u=!1,c=-1;function h(){u&&i&&(u=!1,i.length?l=i.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(i=l,l=[];++c<t;)i&&i[c].run();c=-1,t=l.length}i=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function i(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}},n=!0;try{t[e](o,o.exports,i),n=!1}finally{n&&delete r[e]}return o.exports}i.ab="//";var s=i(229);e.exports=s}()},8975:function(e,t,r){"use strict";var i=r(257);r(4601);var s=r(2265),o=s&&"object"==typeof s&&"default"in s?s:{default:s},n=void 0!==i&&i.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,o=void 0===s?n:s;u(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var r="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];u(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},t.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,r){t&&u(a(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(i,r):s.appendChild(i),i},function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function d(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return h[i]||(h[i]="jsx-"+c(e+"-"+r)),h[i]}function f(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,i=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),i=r.styleId,s=r.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var o=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=o,this._instancesCounts[i]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var i=this._fromServer&&this._fromServer[r];i?(i.parentNode.removeChild(i),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],i=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,i=e.id;if(r){var s=d(i,r);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:d(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=s.createContext(null);p.displayName="StyleSheetContext";var g=o.default.useInsertionEffect||o.default.useLayoutEffect,v="undefined"!=typeof window?new m:void 0;function b(e){var t=v||s.useContext(p);return t&&("undefined"==typeof window?t.add(e):g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}b.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=b},29:function(e,t,r){"use strict";e.exports=r(8975).style},2691:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var i=r(1448);let s={type:"change"},o={type:"start"},n={type:"end"},a=new i.zHn,l=new i.JOQ,u=Math.cos(70*i.M8C.DEG2RAD);class c extends i.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new i.Pa4,this.cursor=new i.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:i.RsA.ROTATE,MIDDLE:i.RsA.DOLLY,RIGHT:i.RsA.PAN},this.touches={ONE:i.QmN.ROTATE,TWO:i.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",er),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",er),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(s),r.update(),h=c.NONE},this.update=function(){let t=new i.Pa4,o=new i._fP().setFromUnitVectors(e.up,new i.Pa4(0,1,0)),n=o.clone().invert(),v=new i.Pa4,b=new i._fP,y=new i.Pa4,T=2*Math.PI;return function(x=null){let S=r.object.position;t.copy(S).sub(r.target),t.applyQuaternion(o),f.setFromVector3(t),r.autoRotate&&h===c.NONE&&F(null!==x?2*Math.PI/60*r.autoRotateSpeed*x:2*Math.PI/60/60*r.autoRotateSpeed),r.enableDamping?(f.theta+=m.theta*r.dampingFactor,f.phi+=m.phi*r.dampingFactor):(f.theta+=m.theta,f.phi+=m.phi);let E=r.minAzimuthAngle,w=r.maxAzimuthAngle;isFinite(E)&&isFinite(w)&&(E<-Math.PI?E+=T:E>Math.PI&&(E-=T),w<-Math.PI?w+=T:w>Math.PI&&(w-=T),E<=w?f.theta=Math.max(E,Math.min(w,f.theta)):f.theta=f.theta>(E+w)/2?Math.max(E,f.theta):Math.min(w,f.theta)),f.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,f.phi)),f.makeSafe(),!0===r.enableDamping?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let _=!1;if(r.zoomToCursor&&C||r.object.isOrthographicCamera)f.radius=B(f.radius);else{let e=f.radius;f.radius=B(f.radius*p),_=e!=f.radius}if(t.setFromSpherical(f),t.applyQuaternion(n),S.copy(r.target).add(t),r.object.lookAt(r.target),!0===r.enableDamping?(m.theta*=1-r.dampingFactor,m.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(m.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&C){let s=null;if(r.object.isPerspectiveCamera){let e=t.length();s=B(e*p);let i=e-s;r.object.position.addScaledVector(M,i),r.object.updateMatrixWorld(),_=!!i}else if(r.object.isOrthographicCamera){let e=new i.Pa4(R.x,R.y,0);e.unproject(r.object);let o=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),_=o!==r.object.zoom;let n=new i.Pa4(R.x,R.y,0);n.unproject(r.object),r.object.position.sub(n).add(e),r.object.updateMatrixWorld(),s=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;null!==s&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(s).add(r.object.position):(a.origin.copy(r.object.position),a.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(a.direction))<u?e.lookAt(r.target):(l.setFromNormalAndCoplanarPoint(r.object.up,r.target),a.intersectPlane(l,r.target))))}else if(r.object.isOrthographicCamera){let e=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),e!==r.object.zoom&&(r.object.updateProjectionMatrix(),_=!0)}return p=1,C=!1,!!(_||v.distanceToSquared(r.object.position)>d||8*(1-b.dot(r.object.quaternion))>d||y.distanceToSquared(r.target)>d)&&(r.dispatchEvent(s),v.copy(r.object.position),b.copy(r.object.quaternion),y.copy(r.target),!0)}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",es),r.domElement.removeEventListener("pointerdown",Z),r.domElement.removeEventListener("pointercancel",$),r.domElement.removeEventListener("wheel",J),r.domElement.removeEventListener("pointermove",q),r.domElement.removeEventListener("pointerup",$),r.domElement.getRootNode().removeEventListener("keydown",ee,{capture:!0}),null!==r._domElementKeyEvents&&(r._domElementKeyEvents.removeEventListener("keydown",er),r._domElementKeyEvents=null)};let r=this,c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},h=c.NONE,d=1e-6,f=new i.$V,m=new i.$V,p=1,g=new i.Pa4,v=new i.FM8,b=new i.FM8,y=new i.FM8,T=new i.FM8,x=new i.FM8,S=new i.FM8,E=new i.FM8,w=new i.FM8,_=new i.FM8,M=new i.Pa4,R=new i.FM8,C=!1,A=[],P={},O=!1;function N(e){return Math.pow(.95,r.zoomSpeed*Math.abs(.01*e))}function F(e){m.theta-=e}function D(e){m.phi-=e}let I=function(){let e=new i.Pa4;return function(t,r){e.setFromMatrixColumn(r,0),e.multiplyScalar(-t),g.add(e)}}(),L=function(){let e=new i.Pa4;return function(t,i){!0===r.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(r.object.up,e)),e.multiplyScalar(t),g.add(e)}}(),j=function(){let e=new i.Pa4;return function(t,i){let s=r.domElement;if(r.object.isPerspectiveCamera){let o=r.object.position;e.copy(o).sub(r.target);let n=e.length();I(2*t*(n*=Math.tan(r.object.fov/2*Math.PI/180))/s.clientHeight,r.object.matrix),L(2*i*n/s.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(I(t*(r.object.right-r.object.left)/r.object.zoom/s.clientWidth,r.object.matrix),L(i*(r.object.top-r.object.bottom)/r.object.zoom/s.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function z(e){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function U(e){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function k(e,t){if(!r.zoomToCursor)return;C=!0;let i=r.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,n=i.width,a=i.height;R.x=s/n*2-1,R.y=-(o/a*2)+1,M.set(R.x,R.y,1).unproject(r.object).sub(r.object.position).normalize()}function B(e){return Math.max(r.minDistance,Math.min(r.maxDistance,e))}function H(e){v.set(e.clientX,e.clientY)}function Y(e){T.set(e.clientX,e.clientY)}function Q(e){if(1===A.length)v.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);v.set(r,i)}}function V(e){if(1===A.length)T.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);T.set(r,i)}}function X(e){let t=en(e),r=e.pageX-t.x,i=e.pageY-t.y;E.set(0,Math.sqrt(r*r+i*i))}function K(e){if(1==A.length)b.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);b.set(r,i)}y.subVectors(b,v).multiplyScalar(r.rotateSpeed);let t=r.domElement;F(2*Math.PI*y.x/t.clientHeight),D(2*Math.PI*y.y/t.clientHeight),v.copy(b)}function W(e){if(1===A.length)x.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);x.set(r,i)}S.subVectors(x,T).multiplyScalar(r.panSpeed),j(S.x,S.y),T.copy(x)}function G(e){let t=en(e),i=e.pageX-t.x,s=e.pageY-t.y;w.set(0,Math.sqrt(i*i+s*s)),_.set(0,Math.pow(w.y/E.y,r.zoomSpeed)),z(_.y),E.copy(w),k((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function Z(e){if(!1!==r.enabled)0===A.length&&(r.domElement.setPointerCapture(e.pointerId),r.domElement.addEventListener("pointermove",q),r.domElement.addEventListener("pointerup",$)),!function(e){for(let t=0;t<A.length;t++)if(A[t]==e.pointerId)return!0;return!1}(e)&&(A.push(e.pointerId),"touch"===e.pointerType?ei(e):function(e){let t;switch(e.button){case 0:t=r.mouseButtons.LEFT;break;case 1:t=r.mouseButtons.MIDDLE;break;case 2:t=r.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.RsA.DOLLY:if(!1===r.enableZoom)return;k(e.clientX,e.clientX),E.set(e.clientX,e.clientY),h=c.DOLLY;break;case i.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enablePan)return;Y(e),h=c.PAN}else{if(!1===r.enableRotate)return;H(e),h=c.ROTATE}break;case i.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enableRotate)return;H(e),h=c.ROTATE}else{if(!1===r.enablePan)return;Y(e),h=c.PAN}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(o)}(e))}function q(e){!1!==r.enabled&&("touch"===e.pointerType?function(e){switch(eo(e),h){case c.TOUCH_ROTATE:if(!1===r.enableRotate)return;K(e),r.update();break;case c.TOUCH_PAN:if(!1===r.enablePan)return;W(e),r.update();break;case c.TOUCH_DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&G(e),r.enablePan&&W(e),r.update();break;case c.TOUCH_DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&G(e),r.enableRotate&&K(e),r.update();break;default:h=c.NONE}}(e):function(e){switch(h){case c.ROTATE:if(!1===r.enableRotate)return;!function(e){b.set(e.clientX,e.clientY),y.subVectors(b,v).multiplyScalar(r.rotateSpeed);let t=r.domElement;F(2*Math.PI*y.x/t.clientHeight),D(2*Math.PI*y.y/t.clientHeight),v.copy(b),r.update()}(e);break;case c.DOLLY:if(!1===r.enableZoom)return;w.set(e.clientX,e.clientY),_.subVectors(w,E),_.y>0?z(N(_.y)):_.y<0&&U(N(_.y)),E.copy(w),r.update();break;case c.PAN:if(!1===r.enablePan)return;x.set(e.clientX,e.clientY),S.subVectors(x,T).multiplyScalar(r.panSpeed),j(S.x,S.y),T.copy(x),r.update()}}(e))}function $(e){switch(function(e){delete P[e.pointerId];for(let t=0;t<A.length;t++)if(A[t]==e.pointerId){A.splice(t,1);return}}(e),A.length){case 0:r.domElement.releasePointerCapture(e.pointerId),r.domElement.removeEventListener("pointermove",q),r.domElement.removeEventListener("pointerup",$),r.dispatchEvent(n),h=c.NONE;break;case 1:let t=A[0],i=P[t];ei({pointerId:t,pageX:i.x,pageY:i.y})}}function J(e){if(!1!==r.enabled&&!1!==r.enableZoom&&h===c.NONE){var t;e.preventDefault(),r.dispatchEvent(o),k((t=function(e){let t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100}return e.ctrlKey&&!O&&(r.deltaY*=10),r}(e)).clientX,t.clientY),t.deltaY<0?U(N(t.deltaY)):t.deltaY>0&&z(N(t.deltaY)),r.update(),r.dispatchEvent(n)}}function ee(e){"Control"===e.key&&(O=!0,r.domElement.getRootNode().addEventListener("keyup",et,{passive:!0,capture:!0}))}function et(e){"Control"===e.key&&(O=!1,r.domElement.getRootNode().removeEventListener("keyup",et,{passive:!0,capture:!0}))}function er(e){!1!==r.enabled&&!1!==r.enablePan&&function(e){let t=!1;switch(e.code){case r.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?D(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):j(0,r.keyPanSpeed),t=!0;break;case r.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?D(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):j(0,-r.keyPanSpeed),t=!0;break;case r.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?F(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):j(r.keyPanSpeed,0),t=!0;break;case r.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?F(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):j(-r.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),r.update())}(e)}function ei(e){switch(eo(e),A.length){case 1:switch(r.touches.ONE){case i.QmN.ROTATE:if(!1===r.enableRotate)return;Q(e),h=c.TOUCH_ROTATE;break;case i.QmN.PAN:if(!1===r.enablePan)return;V(e),h=c.TOUCH_PAN;break;default:h=c.NONE}break;case 2:switch(r.touches.TWO){case i.QmN.DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&X(e),r.enablePan&&V(e),h=c.TOUCH_DOLLY_PAN;break;case i.QmN.DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&X(e),r.enableRotate&&Q(e),h=c.TOUCH_DOLLY_ROTATE;break;default:h=c.NONE}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(o)}function es(e){!1!==r.enabled&&e.preventDefault()}function eo(e){let t=P[e.pointerId];void 0===t&&(t=new i.FM8,P[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return P[e.pointerId===A[0]?A[1]:A[0]]}r.domElement.addEventListener("contextmenu",es),r.domElement.addEventListener("pointerdown",Z),r.domElement.addEventListener("pointercancel",$),r.domElement.addEventListener("wheel",J,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}},3526:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var i=r(1448),s=r(4451);let o={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class n extends s.w{constructor(e=.96){super(),this.shader=o,this.uniforms=i.rDY.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new i.dd2(window.innerWidth,window.innerHeight,{magFilter:i.TyD,type:i.cLu}),this.textureOld=new i.dd2(window.innerWidth,window.innerHeight,{magFilter:i.TyD,type:i.cLu}),this.compFsMaterial=new i.jyz({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new s.T(this.compFsMaterial),this.copyFsMaterial=new i.vBJ,this.copyFsQuad=new s.T(this.copyFsMaterial)}render(e,t,r){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=r.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this.copyFsQuad.render(e);let i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}},9033:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var i=r(1448),s=r(2552),o=r(9926),n=r(4451);class a extends n.w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s;let o=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),n.buffers.stencil.setFunc(o.ALWAYS,i,4294967295),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(o.EQUAL,1,4294967295),n.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),n.buffers.stencil.setLocked(!0)}}class l extends n.w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new i.FM8);this._width=r.width,this._height=r.height,(t=new i.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:i.cLu})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o.T(s.C),this.copyPass.material.blending=i.jFi,this.clock=new i.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==a&&(i instanceof a?r=!0:i instanceof l&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new i.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},4451:function(e,t,r){"use strict";r.d(t,{T:function(){return l},w:function(){return s}});var i=r(1448);class s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new i.iKG(-1,1,1,-1,0,1);class n extends i.u9r{constructor(){super(),this.setAttribute("position",new i.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new i.a$l([0,2,0,0,2,0],2))}}let a=new n;class l{constructor(e){this._mesh=new i.Kj0(a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},9520:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var i=r(1448),s=r(4451);class o extends s.w{constructor(e,t,r=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i.Ilk}render(e,t,r){let i,s;let o=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=o}}},9926:function(e,t,r){"use strict";r.d(t,{T:function(){return o}});var i=r(1448),s=r(4451);class o extends s.w{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.rDY.clone(e.uniforms),this.material=new i.jyz({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new s.T(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}},4364:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var i=r(1448),s=r(4451),o=r(2552);let n={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i.Ilk(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class a extends s.w{constructor(e,t,r,a){super(),this.strength=void 0!==t?t:1,this.radius=r,this.threshold=a,this.resolution=void 0!==e?new i.FM8(e.x,e.y):new i.FM8(256,256),this.clearColor=new i.Ilk(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i.dd2(l,u,{type:i.cLu}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new i.dd2(l,u,{type:i.cLu});t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let r=new i.dd2(l,u,{type:i.cLu});r.texture.name="UnrealBloomPass.v"+e,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),l=Math.round(l/2),u=Math.round(u/2)}this.highPassUniforms=i.rDY.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new i.jyz({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new i.FM8(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new i.Pa4(1,1,1),new i.Pa4(1,1,1),new i.Pa4(1,1,1),new i.Pa4(1,1,1),new i.Pa4(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=o.C;this.copyUniforms=i.rDY.clone(h.uniforms),this.blendMaterial=new i.jyz({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:i.WMw,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new i.Ilk,this.oldClearAlpha=1,this.basic=new i.vBJ,this.fsQuad=new s.T(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(r,s);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(r,s),this.renderTargetsVertical[e].setSize(r,s),this.separableBlurMaterials[e].uniforms.invSize.value=new i.FM8(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let n=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this.fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[t].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this.fsQuad.render(e),n=this.renderTargetsVertical[t];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new i.jyz({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new i.FM8(.5,.5)},direction:{value:new i.FM8(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new i.jyz({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}a.BlurDirectionX=new i.FM8(1,0),a.BlurDirectionY=new i.FM8(0,1)},2552:function(e,t,r){"use strict";r.d(t,{C:function(){return i}});let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}},5085:function(e,t,r){"use strict";r.d(t,{C:function(){return i}});let i={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new(r(1448)).FM8(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`}}}]);