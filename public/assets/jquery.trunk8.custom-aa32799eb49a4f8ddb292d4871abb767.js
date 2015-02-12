/**!
 * trunk8.custom v1.3.1
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: September 26, 2012
 */
!function(e){function t(t){this.$element=e(t),this.original_text=this.$element.html(),this.settings=e.extend({},e.fn.trunk8.defaults)}function i(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText}function n(e){if(i(e)===e)return e.split(/\s/g);for(var t,s,a=[],o=/<([a-z]+)([^<]*)(?:>(.*?(?!<\1>)*)<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi,r=o.exec(e);r&&t!==o.lastIndex;)t=o.lastIndex,r[5]?a.push(r[5]):r[1]&&a.push({tag:r[1],attribs:r[2],content:r[3],after:r[4]}),r=o.exec(e);for(s=0;s<a.length;s++)"string"!=typeof a[s]&&a[s].content&&(a[s].content=n(a[s].content));return a}function s(t,i,n){t=t.replace(n,"");var s=function(i,a){var o,r,l,c,u="";for(c=0;c<i.length;c++)o=i[c],l=e.trim(t).split(" ").length,e.trim(t).length&&("string"==typeof o?(/<br\s*\/?>/.test(o)||(1===l&&e.trim(t).length<=o.length?(o=t,("p"===a||"div"===a)&&(o+=n),t=""):t=t.replace(o,"")),u+=e.trim(o)+(c===i.length-1||1>=l?"":" ")):(r=s(o.content,o.tag),o.after&&(t=t.replace(o.after,"")),r&&(o.after||(o.after=" "),u+="<"+o.tag+o.attribs+">"+r+"</"+o.tag+">"+o.after)));return u},a=s(i);return a.slice(a.length-n.length)===n&&(a+=n),a}function a(){var t,a,o,l,u,h,d=this.data("trunk8"),p=d.settings,f=p.width,m=p.side,g=p.fill,v=p.parseHTML,b=r.getLineHeight(this)*p.lines,y=d.original_text,_=y.length,w="";if(this.html(y),u=this.text(),v&&i(y)!==y&&(h=n(y),y=i(y),_=y.length),f===c.auto){if(this.height()<=b)return;for(t=0,a=_-1;a>=t;)o=t+(a-t>>1),l=r.eatStr(y,m,_-o,g),v&&h&&(l=s(l,h,g)),this.html(l),this.height()>b?a=o-1:(t=o+1,w=w.length>l.length?w:l);this.html(""),this.html(w),p.tooltip&&this.attr("title",u)}else isNaN(f)?e.error('Invalid width "'+f+'".'):""!==y&&(o=_-f,o>0&&(l=r.eatStr(y,m,o,g),this.html(l),p.tooltip&&this.attr("title",y)))}var o,r,l={center:"center",left:"left",right:"right"},c={auto:"auto"};t.prototype.updateSettings=function(t){this.settings=e.extend(this.settings,t)},o={init:function(i){return this.each(function(){var n=e(this),s=n.data("trunk8");s||n.data("trunk8",s=new t(this)),s.updateSettings(i),a.call(n)})},update:function(t){return this.each(function(){var i=e(this);t&&(i.removeAttr("title"),i.data("trunk8").original_text=t),a.call(i)})},revert:function(){return this.each(function(){var t=e(this).data("trunk8").original_text;e(this).html(t)})},getSettings:function(){return e(this.get(0)).data("trunk8").settings}},r={eatStr:function(t,i,n,s){var a,o,c=t.length,u=r.eatStr.generateKey.apply(null,arguments);if(r.eatStr.cache[u])return r.eatStr.cache[u];if(("string"!=typeof t||0===c)&&e.error('Invalid source string "'+t+'".'),0>n||n>c)e.error('Invalid bite size "'+n+'".');else if(0===n)return t;switch("string"!=typeof(s+"")&&e.error("Fill unable to be converted to a string."),i){case l.right:return r.eatStr.cache[u]=e.trim(t.substr(0,c-n))+s;case l.left:return r.eatStr.cache[u]=s+e.trim(t.substr(n));case l.center:return a=c>>1,o=n>>1,r.eatStr.cache[u]=e.trim(r.eatStr(t.substr(0,c-a),l.right,n-o,""))+s+e.trim(r.eatStr(t.substr(c-a),l.left,o,""));default:e.error('Invalid side "'+i+'".')}},getLineHeight:function(t){var i=e(t).css("font-size");return Math.floor(1.7*parseInt(i.replace("px","")))}},r.eatStr.cache={},r.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,"")},e.fn.trunk8=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.trunk8"),void 0):o.init.apply(this,arguments)},e.fn.trunk8.defaults={fill:"&nbsp;&raquo;&nbsp;",lines:1,side:l.right,tooltip:!0,width:c.auto,parseHTML:!1}}(jQuery);