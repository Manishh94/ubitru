/**!
 * trunk8.custom v1.3.1
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: September 26, 2012
 */
!function(e){function t(t){this.$element=e(t),this.original_text=this.$element.html(),this.settings=e.extend({},e.fn.trunk8.defaults)}function i(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText}function n(e){if(i(e)===e)return e.split(/\s/g);for(var t,s,o=[],a=/<([a-z]+)([^<]*)(?:>(.*?(?!<\1>)*)<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi,r=a.exec(e);r&&t!==a.lastIndex;)t=a.lastIndex,r[5]?o.push(r[5]):r[1]&&o.push({tag:r[1],attribs:r[2],content:r[3],after:r[4]}),r=a.exec(e);for(s=0;s<o.length;s++)"string"!=typeof o[s]&&o[s].content&&(o[s].content=n(o[s].content));return o}function s(t,i,n){t=t.replace(n,"");var s=function(i,o){var a,r,l,c,u="";for(c=0;c<i.length;c++)a=i[c],l=e.trim(t).split(" ").length,e.trim(t).length&&("string"==typeof a?(/<br\s*\/?>/.test(a)||(1===l&&e.trim(t).length<=a.length?(a=t,("p"===o||"div"===o)&&(a+=n),t=""):t=t.replace(a,"")),u+=e.trim(a)+(c===i.length-1||1>=l?"":" ")):(r=s(a.content,a.tag),a.after&&(t=t.replace(a.after,"")),r&&(a.after||(a.after=" "),u+="<"+a.tag+a.attribs+">"+r+"</"+a.tag+">"+a.after)));return u},o=s(i);return o.slice(o.length-n.length)===n&&(o+=n),o}function o(){var t,o,a,l,u,h,d=this.data("trunk8"),p=d.settings,f=p.width,m=p.side,g=p.fill,v=p.parseHTML,b=r.getLineHeight(this)*p.lines,y=d.original_text,_=y.length,w="";if(this.html(y),u=this.text(),v&&i(y)!==y&&(h=n(y),y=i(y),_=y.length),f===c.auto){if(this.height()<=b)return;for(t=0,o=_-1;o>=t;)a=t+(o-t>>1),l=r.eatStr(y,m,_-a,g),v&&h&&(l=s(l,h,g)),this.html(l),this.height()>b?o=a-1:(t=a+1,w=w.length>l.length?w:l);this.html(""),this.html(w),p.tooltip&&this.attr("title",u)}else isNaN(f)?e.error('Invalid width "'+f+'".'):""!==y&&(a=_-f,a>0&&(l=r.eatStr(y,m,a,g),this.html(l),p.tooltip&&this.attr("title",y)))}var a,r,l={center:"center",left:"left",right:"right"},c={auto:"auto"};t.prototype.updateSettings=function(t){this.settings=e.extend(this.settings,t)},a={init:function(i){return this.each(function(){var n=e(this),s=n.data("trunk8");s||n.data("trunk8",s=new t(this)),s.updateSettings(i),o.call(n)})},update:function(t){return this.each(function(){var i=e(this);t&&(i.removeAttr("title"),i.data("trunk8").original_text=t),o.call(i)})},revert:function(){return this.each(function(){var t=e(this).data("trunk8").original_text;e(this).html(t)})},getSettings:function(){return e(this.get(0)).data("trunk8").settings}},r={eatStr:function(t,i,n,s){var o,a,c=t.length,u=r.eatStr.generateKey.apply(null,arguments);if(r.eatStr.cache[u])return r.eatStr.cache[u];if(("string"!=typeof t||0===c)&&e.error('Invalid source string "'+t+'".'),0>n||n>c)e.error('Invalid bite size "'+n+'".');else if(0===n)return t;switch("string"!=typeof(s+"")&&e.error("Fill unable to be converted to a string."),i){case l.right:return r.eatStr.cache[u]=e.trim(t.substr(0,c-n))+s;case l.left:return r.eatStr.cache[u]=s+e.trim(t.substr(n));case l.center:return o=c>>1,a=n>>1,r.eatStr.cache[u]=e.trim(r.eatStr(t.substr(0,c-o),l.right,n-a,""))+s+e.trim(r.eatStr(t.substr(c-o),l.left,a,""));default:e.error('Invalid side "'+i+'".')}},getLineHeight:function(t){var i=e(t).css("font-size");return Math.floor(1.7*parseInt(i.replace("px","")))}},r.eatStr.cache={},r.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,"")},e.fn.trunk8=function(t){return a[t]?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.trunk8"),void 0):a.init.apply(this,arguments)},e.fn.trunk8.defaults={fill:"&nbsp;&raquo;&nbsp;",lines:1,side:l.right,tooltip:!0,width:c.auto,parseHTML:!1}}(jQuery);