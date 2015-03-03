/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return r.raw?e:encodeURIComponent(e)}function i(e){return r.raw?e:decodeURIComponent(e)}function n(e){return t(r.json?JSON.stringify(e):String(e))}function s(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return r.json?JSON.parse(e):e}catch(t){}}function o(t,i){var n=r.raw?t:s(t);return e.isFunction(i)?i(n):n}var a=/\+/g,r=e.cookie=function(s,a,l){if(void 0!==a&&!e.isFunction(a)){if(l=e.extend({},r.defaults,l),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return document.cookie=[t(s),"=",n(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var h=s?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,f=d.length;f>p;p++){var m=d[p].split("="),g=i(m.shift()),v=m.join("=");if(s&&s===g){h=o(v,a);break}s||void 0===(v=o(v))||(h[g]=v)}return h};r.defaults={},e.removeCookie=function(t,i){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},i,{expires:-1})),!0):!1}});