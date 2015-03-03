/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return r.raw?t:encodeURIComponent(t)}function i(t){return r.raw?t:decodeURIComponent(t)}function n(t){return e(r.json?JSON.stringify(t):String(t))}function s(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(a," "))}catch(e){return}try{return r.json?JSON.parse(t):t}catch(e){}}function o(e,i){var n=r.raw?e:s(e);return t.isFunction(i)?i(n):n}var a=/\+/g,r=t.cookie=function(s,a,l){if(void 0!==a&&!t.isFunction(a)){if(l=t.extend({},r.defaults,l),"number"==typeof l.expires){var c=l.expires,h=l.expires=new Date;h.setDate(h.getDate()+c)}return document.cookie=[e(s),"=",n(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var u=s?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,f=d.length;f>p;p++){var m=d[p].split("="),g=i(m.shift()),v=m.join("=");if(s&&s===g){u=o(v,a);break}s||void 0===(v=o(v))||(u[g]=v)}return u};r.defaults={},t.removeCookie=function(e,i){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},i,{expires:-1})),!0):!1}});