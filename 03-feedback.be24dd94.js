!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,l=t,u=e.apply(r,n)}function O(e){return l=e,f=setTimeout(w,t),d?b(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function w(){var e=p();if(h(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function S(e){return f=void 0,v&&i?b(e):(i=o=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(w,t),b(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function y(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O={},h=document.querySelector(".feedback-form");!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){var t=e.email,n=e.message;h.email.value=t,h.message.value=n}}(),h.addEventListener("input",n((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),e.target.reset()}))}();
//# sourceMappingURL=03-feedback.be24dd94.js.map
