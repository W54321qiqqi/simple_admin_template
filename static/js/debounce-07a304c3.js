import{bw as O,cH as Y,D as I,ad as v}from"./index-ae101c87.js";const q=(e,t)=>{if(!O||!e||!t)return!1;const n=e.getBoundingClientRect();let r;return t instanceof Element?r=t.getBoundingClientRect():r={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right},z=e=>{let t,n;return e.type==="touchend"?(n=e.changedTouches[0].clientY,t=e.changedTouches[0].clientX):e.type.startsWith("touch")?(n=e.touches[0].clientY,t=e.touches[0].clientX):(n=e.clientY,t=e.clientX),{clientX:t,clientY:n}};var w=/\s/;function A(e){for(var t=e.length;t--&&w.test(e.charAt(t)););return t}var L=/^\s+/;function M(e){return e&&e.slice(0,A(e)+1).replace(L,"")}var W=0/0,N=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,H=/^0o[0-7]+$/i,D=parseInt;function R(e){if(typeof e=="number")return e;if(Y(e))return W;if(I(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=I(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=M(e);var n=$.test(e);return n||H.test(e)?D(e.slice(2),n?2:8):N.test(e)?W:+e}var F=function(){return v.Date.now()};const x=F;var _="Expected a function",j=Math.max,P=Math.min;function G(e,t,n){var r,s,m,f,a,o,u=0,b=!1,d=!1,h=!0;if(typeof e!="function")throw new TypeError(_);t=R(t)||0,I(n)&&(b=!!n.leading,d="maxWait"in n,m=d?j(R(n.maxWait)||0,t):m,h="trailing"in n?!!n.trailing:h);function T(i){var c=r,l=s;return r=s=void 0,u=i,f=e.apply(l,c),f}function k(i){return u=i,a=setTimeout(g,t),b?T(i):f}function S(i){var c=i-o,l=i-u,E=t-c;return d?P(E,m-l):E}function y(i){var c=i-o,l=i-u;return o===void 0||c>=t||c<0||d&&l>=m}function g(){var i=x();if(y(i))return C(i);a=setTimeout(g,S(i))}function C(i){return a=void 0,h&&r?T(i):(r=s=void 0,f)}function X(){a!==void 0&&clearTimeout(a),u=0,r=o=s=a=void 0}function B(){return a===void 0?f:C(x())}function p(){var i=x(),c=y(i);if(r=arguments,s=this,o=i,c){if(a===void 0)return k(o);if(d)return clearTimeout(a),a=setTimeout(g,t),T(o)}return a===void 0&&(a=setTimeout(g,t)),f}return p.cancel=X,p.flush=B,p}export{G as d,z as g,q as i};
