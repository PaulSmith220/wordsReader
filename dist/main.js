!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e){t.exports=require("electron")},function(t,e,r){t.exports=r(10)},function(t,e,r){var n=r(11),o=r(12),i=r(13),a=r(15);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()}},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},function(t,e){t.exports=require("child_process")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e){t.exports=require("url")},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,n,o){var i,a,c,u,v=r&&r.prototype instanceof d?r:d,g=Object.create(v.prototype),m=new S(o||[]);return g._invoke=(i=t,a=n,c=m,u=l,function(t,r){if(u===p)throw new Error("Generator is already running");if(u===h){if("throw"===t)throw r;return _()}for(c.method=t,c.arg=r;;){var n=c.delegate;if(n){var o=function t(r,n){var o=r.iterator[n.method];if(o===e){if(n.delegate=null,"throw"===n.method){if(r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=s(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}(n,c);if(o){if(o===y)continue;return o}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===l)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var d=s(i,a,c);if("normal"===d.type){if(u=c.done?h:f,d.arg===y)continue;return{value:d.arg,done:c.done}}"throw"===d.type&&(u=h,c.method="throw",c.arg=d.arg)}}),g}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",y={};function d(){}function v(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==r&&n.call(x,i)&&(m=x);var b=g.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,E(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}},function(t,e,r){var n=r(14);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){"use strict";r.r(e),r(9);var n=r(0),o=r.n(n),i=r(5),a=r.n(i),c=r(1),u=r.n(c),s=r(2),l=r.n(s),f=r(3),p=r.n(f),h=r(4),y=r(0).dialog,d={title:"Open a file with words",buttonLabel:"Load",filters:[{name:"txt",extensions:["txt"]}],properties:["openFile"],message:'The text should be in "English word - Russian word" format'},v=r(5),g=r(6);function m(){return(m=p()(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,function(t){return new Promise((function(e){Object(h.exec)('say -v Allison "'.concat(t,'"'),(function(r,n,o){e(t),r?console.log("error",r.message):o&&console.log("stderr",o)}))}))}(e[0]);case 2:return t.next=4,new Promise((function(t){return setTimeout(t,500)}));case 4:return t.next=6,function(t){return new Promise((function(e){Object(h.exec)('say -v Milena "'.concat(t,'"'),(function(r,n,o){e(t),r?console.log("error",r.message):o&&console.log("stderr",o)}))}))}(e[1]);case 6:return t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){var r=1<arguments.length&&void 0!==e?e:null;return t+"||"+JSON.stringify(r)}var x=r(7),b=r.n(x),L=r(8),O=r.n(L),j=r(6),E=r.n(j),S=new(function(){function t(e){b()(this,t);var r=(o.a.app||o.a.remote.app).getPath("userData");this.path=a.a.join(r,e.configName+".json"),this.data=function(t,e){try{return JSON.parse(E.a.readFileSync(t))}catch(t){return console.log("unable to parse file",t),e}}(this.path,e.defaults),console.log("Store initialized to use "+this.path)}return O()(t,[{key:"get",value:function(t){return this.data[t]}},{key:"set",value:function(t,e){this.data[t]=e,E.a.writeFileSync(this.path,JSON.stringify(this.data))}}]),t}())({configName:"words-data",defaults:{words:[],lastLine:0}});function P(){var t=new n.BrowserWindow({width:800,height:600,webPreferences:{nodeIntegration:!0}});(function(t,e){n.ipcMain.on("asynchronous-message",function(){var e=p()(u.a.mark((function e(r,n){var o,i,a,c,s,f,x,b,L;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("event recieved: "+n),o=n.split("||"),i=l()(o,2),a=i[0],c=i[1],e.t0=a,e.next="getVoicesList"===e.t0?5:"getInitData"===e.t0?10:"loadFile"===e.t0?12:"readWord"===e.t0?24:"selectLine"===e.t0?29:32;break;case 5:return e.next=7,new Promise((function(t){Object(h.exec)("say -v '?'",(function(e,r,n){var o=r.split("\n").map((function(t){var e=t.replace(/\t/g," ").replace(/\s{1,}/g," ").split(" "),r=l()(e,2);return{name:r[0],code:r[1]}}));t(o),e?console.log("error",e.message):n&&console.log("stderr",n)}))}));case 7:return s=e.sent,r.reply("asynchronous-reply",w("voicesList",s)),e.abrupt("break",33);case 10:return r.reply("asynchronous-reply",w("initData",t.data)),e.abrupt("break",33);case 12:return e.prev=12,e.next=15,new Promise(function(){var t=p()(u.a.mark((function t(e,r){var n,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.showOpenDialog(null,d);case 2:n=t.sent,o=n.cancelled,i=n.filePaths,o||!i.length?r():e(i[0]);case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 15:f=e.sent,x=function(t,e){return g.readFileSync(v.resolve(t),"utf-8").split("\n").filter((function(t){return""!==t.trim()})).map((function(t){var r=t.split(e),n=l()(r,2);return[n[0],(n[1]||"No translation").replace(/\.$/,"")]}))}(f,c),t.set("words",x),r.reply("asynchronous-reply",w("wordsUpdated",x)),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(12),console.log("User cancelled file selection",e.t1);case 24:return b=JSON.parse(c),e.next=27,function(t){return m.apply(this,arguments)}(b);case 27:return r.reply("asynchronous-reply",w("wordPlayed")),e.abrupt("break",33);case 29:return L=parseInt(c||"0"),t.set("lastLine",L),e.abrupt("break",33);case 32:return e.abrupt("return");case 33:case"end":return e.stop()}}),e,null,[[12,21]])})));return function(t,r){return e.apply(this,arguments)}}())})(S),t.loadFile("index.html")}n.app.whenReady().then(P),n.app.on("window-all-closed",(function(){n.app.quit()})),n.app.on("activate",(function(){0===n.BrowserWindow.getAllWindows().length&&P()}))}]);