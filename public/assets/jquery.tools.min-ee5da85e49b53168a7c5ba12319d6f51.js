/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * tooltip/tooltip.js
 * tooltip/tooltip.dynamic.js
 * tooltip/tooltip.slide.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
!function(e){function t(t,i,n){var s=n.relative?t.position().top:t.offset().top,a=n.relative?t.position().left:t.offset().left,o=n.position[0];s-=i.outerHeight()-n.offset[0],a+=t.outerWidth()+n.offset[1],/iPad/i.test(navigator.userAgent)&&(s-=e(window).scrollTop());var r=i.outerHeight()+t.outerHeight();"center"==o&&(s+=r/2),"bottom"==o&&(s+=r),o=n.position[1];var l=i.outerWidth()+t.outerWidth();return"center"==o&&(a-=l/2),"left"==o&&(a-=l),{top:s,left:a}}function i(i,s){var a,o,r=this,l=i.add(r),c=0,u=0,d=i.attr("title"),h=i.attr("data-tooltip"),p=n[s.effect],f=i.is(":input"),m=f&&i.is(":checkbox, :radio, select, :button, :submit"),g=i.attr("type"),v=s.events[g]||s.events[f?m?"widget":"input":"def"];if(!p)throw'Nonexistent effect "'+s.effect+'"';if(v=v.split(/,\s*/),2!=v.length)throw"Tooltip: bad events configuration for "+g;i.on(v[0],function(e){clearTimeout(c),s.predelay?u=setTimeout(function(){r.show(e)},s.predelay):r.show(e)}).on(v[1],function(e){clearTimeout(u),s.delay?c=setTimeout(function(){r.hide(e)},s.delay):r.hide(e)}),d&&s.cancelDefault&&(i.removeAttr("title"),i.data("title",d)),e.extend(r,{show:function(n){if(!a&&(h?a=e(h):s.tip?a=e(s.tip).eq(0):d?a=e(s.layout).addClass(s.tipClass).appendTo(document.body).hide().append(d):(a=i.next(),a.length||(a=i.parent().next())),!a.length))throw"Cannot find tooltip for "+i;if(r.isShown())return r;a.stop(!0,!0);var f=t(i,a,s);if(s.tip&&a.html(i.data("title")),n=e.Event(),n.type="onBeforeShow",l.trigger(n,[f]),n.isDefaultPrevented())return r;f=t(i,a,s),a.css({position:"absolute",top:f.top,left:f.left}),o=!0,p[0].call(r,function(){n.type="onShow",o="full",l.trigger(n)});var m=s.events.tooltip.split(/,\s*/);return a.data("__set")||(a.off(m[0]).on(m[0],function(){clearTimeout(c),clearTimeout(u)}),m[1]&&!i.is("input:not(:checkbox, :radio), textarea")&&a.off(m[1]).on(m[1],function(e){e.relatedTarget!=i[0]&&i.trigger(v[1].split(" ")[0])}),s.tip||a.data("__set",!0)),r},hide:function(t){return a&&r.isShown()?(t=e.Event(),t.type="onBeforeHide",l.trigger(t),t.isDefaultPrevented()?void 0:(o=!1,n[s.effect][1].call(r,function(){t.type="onHide",l.trigger(t)}),r)):r},isShown:function(e){return e?"full"==o:o},getConf:function(){return s},getTip:function(){return a},getTrigger:function(){return i}}),e.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(t,i){e.isFunction(s[i])&&e(r).on(i,s[i]),r[i]=function(t){return t&&e(r).on(i,t),r}})}e.tools=e.tools||{version:"v1.2.7"},e.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(e,t,i){n[e]=[t,i]}};var n={toggle:[function(e){var t=this.getConf(),i=this.getTip(),n=t.opacity;1>n&&i.css({opacity:n}),i.show(),e.call()},function(e){this.getTip().hide(),e.call()}],fade:[function(t){var i=this.getConf();!e.browser.msie||i.fadeIE?this.getTip().fadeTo(i.fadeInSpeed,i.opacity,t):(this.getTip().show(),t())},function(t){var i=this.getConf();!e.browser.msie||i.fadeIE?this.getTip().fadeOut(i.fadeOutSpeed,t):(this.getTip().hide(),t())}]};e.fn.tooltip=function(t){var n=this.data("tooltip");return n?n:(t=e.extend(!0,{},e.tools.tooltip.conf,t),"string"==typeof t.position&&(t.position=t.position.split(/,?\s/)),this.each(function(){n=new i(e(this),t),e(this).data("tooltip",n)}),t.api?n:this)}}(jQuery),function(e){function t(t){var i=e(window),n=i.width()+i.scrollLeft(),s=i.height()+i.scrollTop();return[t.offset().top<=i.scrollTop(),n<=t.offset().left+t.width(),s<=t.offset().top+t.height(),i.scrollLeft()>=t.offset().left]}function i(e){for(var t=e.length;t--;)if(e[t])return!1;return!0}var n=e.tools.tooltip;n.dynamic={conf:{classNames:"top right bottom left"}},e.fn.dynamic=function(s){"number"==typeof s&&(s={speed:s}),s=e.extend({},n.dynamic.conf,s);var a,o=e.extend(!0,{},s),r=s.classNames.split(/\s/);return this.each(function(){var n=e(this).tooltip().onBeforeShow(function(n,s){var l=this.getTip(),c=this.getConf();a||(a=[c.position[0],c.position[1],c.offset[0],c.offset[1],e.extend({},c)]),e.extend(c,a[4]),c.position=[a[0],a[1]],c.offset=[a[2],a[3]],l.css({visibility:"hidden",position:"absolute",top:s.top,left:s.left}).show();var u=e.extend(!0,{},o),d=t(l);i(d)||(d[2]&&(e.extend(c,u.top),c.position[0]="top",l.addClass(r[0])),d[3]&&(e.extend(c,u.right),c.position[1]="right",l.addClass(r[1])),d[0]&&(e.extend(c,u.bottom),c.position[0]="bottom",l.addClass(r[2])),d[1]&&(e.extend(c,u.left),c.position[1]="left",l.addClass(r[3])),(d[0]||d[2])&&(c.offset[0]*=-1),(d[1]||d[3])&&(c.offset[1]*=-1)),l.css({visibility:"visible"}).hide()});n.onBeforeShow(function(){var e=this.getConf();this.getTip(),setTimeout(function(){e.position=[a[0],a[1]],e.offset=[a[2],a[3]]},0)}),n.onHide(function(){var e=this.getTip();e.removeClass(s.classNames)}),ret=n}),s.api?ret:this}}(jQuery),function(e){var t=e.tools.tooltip;e.extend(t.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!e.browser.msie});var i={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};t.addEffect("slide",function(e){var t=this.getConf(),n=this.getTip(),s=t.slideFade?{opacity:t.opacity}:{},a=i[t.direction]||i.up;s[a[1]]=a[0]+"="+t.slideOffset,t.slideFade&&n.css({opacity:0}),n.show().animate(s,t.slideInSpeed,e)},function(t){var n=this.getConf(),s=n.slideOffset,a=n.slideFade?{opacity:0}:{},o=i[n.direction]||i.up,r=""+o[0];n.bounce&&(r="+"==r?"-":"+"),a[o[1]]=r+"="+s,this.getTip().animate(a,n.slideOutSpeed,function(){e(this).hide(),t.call()})})}(jQuery);