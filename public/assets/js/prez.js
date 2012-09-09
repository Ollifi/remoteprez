(function(){var e=function(t,n){var r=e.resolve(t,n||"/"),i=e.modules[r];if(!i)throw new Error("Failed to resolve module "+t+", tried "+r);var s=e.cache[r],o=s?s.exports:i();return o};e.paths=[],e.modules={},e.cache={},e.extensions=[".js",".coffee",".json"],e._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},e.resolve=function(){return function(t,n){function u(t){t=r.normalize(t);if(e.modules[t])return t;for(var n=0;n<e.extensions.length;n++){var i=e.extensions[n];if(e.modules[t+i])return t+i}}function a(t){t=t.replace(/\/+$/,"");var n=r.normalize(t+"/package.json");if(e.modules[n]){var i=e.modules[n](),s=i.browserify;if(typeof s=="object"&&s.main){var o=u(r.resolve(t,s.main));if(o)return o}else if(typeof s=="string"){var o=u(r.resolve(t,s));if(o)return o}else if(i.main){var o=u(r.resolve(t,i.main));if(o)return o}}return u(t+"/index")}function f(e,t){var n=l(t);for(var r=0;r<n.length;r++){var i=n[r],s=u(i+"/"+e);if(s)return s;var o=a(i+"/"+e);if(o)return o}var s=u(e);if(s)return s}function l(e){var t;e==="/"?t=[""]:t=r.normalize(e).split("/");var n=[];for(var i=t.length-1;i>=0;i--){if(t[i]==="node_modules")continue;var s=t.slice(0,i+1).join("/")+"/node_modules";n.push(s)}return n}n||(n="/");if(e._core[t])return t;var r=e.modules.path();n=r.resolve("/",n);var i=n||"/";if(t.match(/^(?:\.\.?\/|\/)/)){var s=u(r.resolve(i,t))||a(r.resolve(i,t));if(s)return s}var o=f(t,i);if(o)return o;throw new Error("Cannot find module '"+t+"'")}}(),e.alias=function(t,n){var r=e.modules.path(),i=null;try{i=e.resolve(t+"/package.json","/")}catch(s){i=e.resolve(t,"/")}var o=r.dirname(i),u=(Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t})(e.modules);for(var a=0;a<u.length;a++){var f=u[a];if(f.slice(0,o.length+1)===o+"/"){var l=f.slice(o.length);e.modules[n+l]=e.modules[o+l]}else f===o&&(e.modules[n]=e.modules[o])}},function(){var t={};e.define=function(n,r){e.modules.__browserify_process&&(t=e.modules.__browserify_process());var i=e._core[n]?"":e.modules.path().dirname(n),s=function(t){var n=e(t,i),r=e.cache[e.resolve(t,i)];return r&&r.parent===null&&(r.parent=o),n};s.resolve=function(t){return e.resolve(t,i)},s.modules=e.modules,s.define=e.define,s.cache=e.cache;var o={id:n,filename:n,exports:{},loaded:!1,parent:null};e.modules[n]=function(){return e.cache[n]=o,r.call(o.exports,s,o,o.exports,i,n,t),o.loaded=!0,o.exports}}}(),e.define("path",function(e,t,n,r,i,s){function o(e,t){var n=[];for(var r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}function u(e,t){var n=0;for(var r=e.length;r>=0;r--){var i=e[r];i=="."?e.splice(r,1):i===".."?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var a=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;n.resolve=function(){var e="",t=!1;for(var n=arguments.length;n>=-1&&!t;n--){var r=n>=0?arguments[n]:s.cwd();if(typeof r!="string"||!r)continue;e=r+"/"+e,t=r.charAt(0)==="/"}return e=u(o(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},n.normalize=function(e){var t=e.charAt(0)==="/",n=e.slice(-1)==="/";return e=u(o(e.split("/"),function(e){return!!e}),!t).join("/"),!e&&!t&&(e="."),e&&n&&(e+="/"),(t?"/":"")+e},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,t){return e&&typeof e=="string"}).join("/"))},n.dirname=function(e){var t=a.exec(e)[1]||"",n=!1;return t?t.length===1||n&&t.length<=3&&t.charAt(1)===":"?t:t.substring(0,t.length-1):"."},n.basename=function(e,t){var n=a.exec(e)[2]||"";return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return a.exec(e)[3]||""}}),e.define("__browserify_process",function(e,t,n,r,i,s){var s=t.exports={};s.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return window.setImmediate;if(t){var n=[];return window.addEventListener("message",function(e){if(e.source===window&&e.data==="browserify-tick"){e.stopPropagation();if(n.length>0){var t=n.shift();t()}}},!0),function(t){n.push(t),window.postMessage("browserify-tick","*")}}return function(t){setTimeout(t,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.binding=function(t){if(t==="evals")return e("vm");throw new Error("No such module. (Possibly not yet loaded)")},function(){var t="/",n;s.cwd=function(){return t},s.chdir=function(r){n||(n=e("path")),t=n.resolve(r,t)}}()}),e.define("/index.js",function(e,t,n,r,i,s){"use strict";var o=window.location.search.split("=").pop(),u=io.connect("http://remoteprez.margaine.com:8080/"),a={top:38,right:39,bottom:40,left:37};u.on("connect",function(){u.emit("join channel",o),document.body.addEventListener("click",function(e){if(e.target.classList.contains("arrow")){var t=e.target.className.split(" ").sort()[1];u.emit("send key",{channel:o,key:a[t]})}},!1)})}),e("/index.js")})();