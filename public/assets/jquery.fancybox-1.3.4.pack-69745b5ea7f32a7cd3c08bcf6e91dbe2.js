/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(e){var t,i,n,s,a,o,r,l,c,u,h,d,p,f=0,m={},g=[],v=0,b={},y=[],_=null,w=new Image,x=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,k=/[^\.]\.(swf)\s*$/i,C=1,D=0,T="",S=!1,M=e.extend(e("<div/>")[0],{prop:0}),$=e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest,I=function(){i.hide(),w.onerror=w.onload=null,_&&_.abort(),t.empty()},E=function(){!1===m.onError(g,f,m)?(i.hide(),S=!1):(m.titleShow=!1,m.width="auto",m.height="auto",t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),N())},P=function(){var n,s,a,r,l,c,u=g[f];if(I(),m=e.extend({},e.fn.fancybox.defaults,"undefined"==typeof e(u).data("fancybox")?m:e(u).data("fancybox")),c=m.onStart(g,f,m),c===!1)S=!1;else if("object"==typeof c&&(m=e.extend(m,c)),a=m.title||(u.nodeName?e(u).attr("title"):u.title)||"",u.nodeName&&!m.orig&&(m.orig=e(u).children("img:first").length?e(u).children("img:first"):e(u)),""===a&&m.orig&&m.titleFromAlt&&(a=m.orig.attr("alt")),n=m.href||(u.nodeName?e(u).attr("href"):u.href)||null,(/^(?:javascript)/i.test(n)||"#"==n)&&(n=null),m.type?(s=m.type,n||(n=m.content)):m.content?s="html":n&&(s=n.match(x)?"image":n.match(k)?"swf":e(u).hasClass("iframe")?"iframe":0===n.indexOf("#")?"inline":"ajax"),s)switch("inline"==s&&(u=n.substr(n.indexOf("#")),s=e(u).length>0?"inline":"ajax"),m.type=s,m.href=n,m.title=a,m.autoDimensions&&("html"==m.type||"inline"==m.type||"ajax"==m.type?(m.width="auto",m.height="auto"):m.autoDimensions=!1),m.modal&&(m.overlayShow=!0,m.hideOnOverlayClick=!1,m.hideOnContentClick=!1,m.enableEscapeButton=!1,m.showCloseButton=!1),m.padding=parseInt(m.padding,10),m.margin=parseInt(m.margin,10),t.css("padding",m.padding+m.margin),e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(o.children())}),s){case"html":t.html(m.content),N();break;case"inline":if(e(u).parent().is("#fancybox-content")===!0){S=!1;break}e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(u)).bind("fancybox-cleanup",function(){e(this).replaceWith(o.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())}),e(u).appendTo(t),N();break;case"image":S=!1,e.fancybox.showActivity(),w=new Image,w.onerror=function(){E()},w.onload=function(){S=!0,w.onerror=w.onload=null,m.width=w.width,m.height=w.height,e("<img />").attr({id:"fancybox-img",src:w.src,alt:m.title}).appendTo(t),A()},w.src=n;break;case"swf":m.scrolling="no",r='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+m.width+'" height="'+m.height+'"><param name="movie" value="'+n+'"></param>',l="",e.each(m.swf,function(e,t){r+='<param name="'+e+'" value="'+t+'"></param>',l+=" "+e+'="'+t+'"'}),r+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+m.width+'" height="'+m.height+'"'+l+"></embed></object>",t.html(r),N();break;case"ajax":S=!1,e.fancybox.showActivity(),m.ajax.win=m.ajax.success,_=e.ajax(e.extend({},m.ajax,{url:n,data:m.ajax.data||{},error:function(e){e.status>0&&E()},success:function(e,s,a){if(200==("object"==typeof a?a:_).status){if("function"==typeof m.ajax.win){if(c=m.ajax.win(n,e,s,a),c===!1)return i.hide(),void 0;("string"==typeof c||"object"==typeof c)&&(e=c)}t.html(e),N()}}}));break;case"iframe":A()}else E()},N=function(){var i=m.width,n=m.height;i=i.toString().indexOf("%")>-1?parseInt((e(window).width()-2*m.margin)*parseFloat(i)/100,10)+"px":"auto"==i?"auto":i+"px",n=n.toString().indexOf("%")>-1?parseInt((e(window).height()-2*m.margin)*parseFloat(n)/100,10)+"px":"auto"==n?"auto":n+"px",t.wrapInner('<div style="width:'+i+";height:"+n+";overflow: "+("auto"==m.scrolling?"auto":"yes"==m.scrolling?"scroll":"hidden")+';position:relative;"></div>'),m.width=t.width(),m.height=t.height(),A()},A=function(){var h,_;if(i.hide(),s.is(":visible")&&!1===b.onCleanup(y,v,b))e.event.trigger("fancybox-cancel"),S=!1;else{if(S=!0,e(o.add(n)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),s.is(":visible")&&"outside"!==b.titlePosition&&s.css("height",s.height()),y=g,v=f,b=m,b.overlayShow?(n.css({"background-color":b.overlayColor,opacity:b.overlayOpacity,cursor:b.hideOnOverlayClick?"pointer":"auto",height:e(document).height()}),n.is(":visible")||($&&e("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),n.show())):n.hide(),p=j(),T=b.title||"",D=0,l.empty().removeAttr("style").removeClass(),b.titleShow!==!1&&(h=e.isFunction(b.titleFormat)?b.titleFormat(T,y,v,b):T&&T.length?"float"==b.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+T+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+b.titlePosition+'">'+T+"</div>":!1,T=h,T&&""!==T))switch(l.addClass("fancybox-title-"+b.titlePosition).html(T).appendTo("body").show(),b.titlePosition){case"inside":l.css({width:p.width-2*b.padding,marginLeft:b.padding,marginRight:b.padding}),D=l.outerHeight(!0),l.appendTo(a),p.height+=D;break;case"over":l.css({marginLeft:b.padding,width:p.width-2*b.padding,bottom:b.padding}).appendTo(a);break;case"float":l.css("left",-1*parseInt((l.width()-p.width-40)/2,10)).appendTo(s);break;default:l.css({width:p.width-2*b.padding,paddingLeft:b.padding,paddingRight:b.padding}).appendTo(s)}l.hide(),s.is(":visible")?(e(r.add(c).add(u)).hide(),h=s.position(),d={top:h.top,left:h.left,width:s.width(),height:s.height()},_=d.width==p.width&&d.height==p.height,o.fadeTo(b.changeFade,.3,function(){var i=function(){o.html(t.contents()).fadeTo(b.changeFade,1,z)};e.event.trigger("fancybox-change"),o.empty().removeAttr("filter").css({"border-width":b.padding,width:p.width-2*b.padding,height:m.autoDimensions?"auto":p.height-D-2*b.padding}),_?i():(M.prop=0,e(M).animate({prop:1},{duration:b.changeSpeed,easing:b.easingChange,step:H,complete:i}))})):(s.removeAttr("style"),o.css("border-width",b.padding),"elastic"==b.transitionIn?(d=L(),o.html(t.contents()),s.show(),b.opacity&&(p.opacity=0),M.prop=0,e(M).animate({prop:1},{duration:b.speedIn,easing:b.easingIn,step:H,complete:z})):("inside"==b.titlePosition&&D>0&&l.show(),o.css({width:p.width-2*b.padding,height:m.autoDimensions?"auto":p.height-D-2*b.padding}).html(t.contents()),s.css(p).fadeIn("none"==b.transitionIn?0:b.speedIn,z)))}},O=function(){(b.enableEscapeButton||b.enableKeyboardNav)&&e(document).bind("keydown.fb",function(t){27==t.keyCode&&b.enableEscapeButton?(t.preventDefault(),e.fancybox.close()):37!=t.keyCode&&39!=t.keyCode||!b.enableKeyboardNav||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName||"SELECT"===t.target.tagName||(t.preventDefault(),e.fancybox[37==t.keyCode?"prev":"next"]())}),b.showNavArrows?((b.cyclic&&y.length>1||0!==v)&&c.show(),(b.cyclic&&y.length>1||v!=y.length-1)&&u.show()):(c.hide(),u.hide())},z=function(){e.support.opacity||(o.get(0).style.removeAttribute("filter"),s.get(0).style.removeAttribute("filter")),m.autoDimensions&&o.css("height","auto"),s.css("height","auto"),T&&T.length&&l.show(),b.showCloseButton&&r.show(),O(),b.hideOnContentClick&&o.bind("click",e.fancybox.close),b.hideOnOverlayClick&&n.bind("click",e.fancybox.close),e(window).bind("resize.fb",e.fancybox.resize),b.centerOnScroll&&e(window).bind("scroll.fb",e.fancybox.center),"iframe"==b.type&&e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="'+m.scrolling+'" src="'+b.href+'"></iframe>').appendTo(o),s.show(),S=!1,e.fancybox.center(),b.onComplete(y,v,b);var t,i;y.length-1>v&&(t=y[v+1].href,"undefined"!=typeof t&&t.match(x)&&(i=new Image,i.src=t)),v>0&&(t=y[v-1].href,"undefined"!=typeof t&&t.match(x)&&(i=new Image,i.src=t))},H=function(e){var t={width:parseInt(d.width+(p.width-d.width)*e,10),height:parseInt(d.height+(p.height-d.height)*e,10),top:parseInt(d.top+(p.top-d.top)*e,10),left:parseInt(d.left+(p.left-d.left)*e,10)};"undefined"!=typeof p.opacity&&(t.opacity=.5>e?.5:e),s.css(t),o.css({width:t.width-2*b.padding,height:t.height-D*e-2*b.padding})},F=function(){return[e(window).width()-2*b.margin,e(window).height()-2*b.margin,e(document).scrollLeft()+b.margin,e(document).scrollTop()+b.margin]},j=function(){var e=F(),t={},i=b.autoScale,n=2*b.padding;return t.width=b.width.toString().indexOf("%")>-1?parseInt(e[0]*parseFloat(b.width)/100,10):b.width+n,t.height=b.height.toString().indexOf("%")>-1?parseInt(e[1]*parseFloat(b.height)/100,10):b.height+n,i&&(t.width>e[0]||t.height>e[1])&&("image"==m.type||"swf"==m.type?(i=b.width/b.height,t.width>e[0]&&(t.width=e[0],t.height=parseInt((t.width-n)/i+n,10)),t.height>e[1]&&(t.height=e[1],t.width=parseInt((t.height-n)*i+n,10))):(t.width=Math.min(t.width,e[0]),t.height=Math.min(t.height,e[1]))),t.top=parseInt(Math.max(e[3]-20,e[3]+.5*(e[1]-t.height-40)),10),t.left=parseInt(Math.max(e[2]-20,e[2]+.5*(e[0]-t.width-40)),10),t},L=function(){var t=m.orig?e(m.orig):!1,i={};return t&&t.length?(i=t.offset(),i.top+=parseInt(t.css("paddingTop"),10)||0,i.left+=parseInt(t.css("paddingLeft"),10)||0,i.top+=parseInt(t.css("border-top-width"),10)||0,i.left+=parseInt(t.css("border-left-width"),10)||0,i.width=t.width(),i.height=t.height(),i={width:i.width+2*b.padding,height:i.height+2*b.padding,top:i.top-b.padding-20,left:i.left-b.padding-20}):(t=F(),i={width:2*b.padding,height:2*b.padding,top:parseInt(t[3]+.5*t[1],10),left:parseInt(t[2]+.5*t[0],10)}),i},W=function(){i.is(":visible")?(e("div",i).css("top",-40*C+"px"),C=(C+1)%12):clearInterval(h)};e.fn.fancybox=function(t){return e(this).length?(e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault(),S||(S=!0,e(this).blur(),g=[],f=0,t=e(this).attr("rel")||"",t&&""!=t&&"nofollow"!==t?(g=e("a[rel="+t+"], area[rel="+t+"]"),f=g.index(this)):g.push(this),P())}),this):this},e.fancybox=function(t,i){var n;if(!S){if(S=!0,n="undefined"!=typeof i?i:{},g=[],f=parseInt(n.index,10)||0,e.isArray(t)){for(var s=0,a=t.length;a>s;s++)"object"==typeof t[s]?e(t[s]).data("fancybox",e.extend({},n,t[s])):t[s]=e({}).data("fancybox",e.extend({content:t[s]},n));g=jQuery.merge(g,t)}else"object"==typeof t?e(t).data("fancybox",e.extend({},n,t)):t=e({}).data("fancybox",e.extend({content:t},n)),g.push(t);(f>g.length||0>f)&&(f=0),P()}},e.fancybox.showActivity=function(){clearInterval(h),i.show(),h=setInterval(W,66)},e.fancybox.hideActivity=function(){i.hide()},e.fancybox.next=function(){return e.fancybox.pos(v+1)},e.fancybox.prev=function(){return e.fancybox.pos(v-1)},e.fancybox.pos=function(e){S||(e=parseInt(e),g=y,e>-1&&e<y.length?(f=e,P()):b.cyclic&&y.length>1&&(f=e>=y.length?0:y.length-1,P()))},e.fancybox.cancel=function(){S||(S=!0,e.event.trigger("fancybox-cancel"),I(),m.onCancel(g,f,m),S=!1)},e.fancybox.close=function(){function t(){n.fadeOut("fast"),l.empty().hide(),s.hide(),e.event.trigger("fancybox-cleanup"),o.empty(),b.onClosed(y,v,b),y=m=[],v=f=0,b=m={},S=!1}if(!S&&!s.is(":hidden"))if(S=!0,b&&!1===b.onCleanup(y,v,b))S=!1;else if(I(),e(r.add(c).add(u)).hide(),e(o.add(n)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),o.find("iframe").attr("src",$&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==b.titlePosition&&l.empty(),s.stop(),"elastic"==b.transitionOut){d=L();var i=s.position();p={top:i.top,left:i.left,width:s.width(),height:s.height()},b.opacity&&(p.opacity=1),l.empty().hide(),M.prop=1,e(M).animate({prop:0},{duration:b.speedOut,easing:b.easingOut,step:H,complete:t})}else s.fadeOut("none"==b.transitionOut?0:b.speedOut,t)},e.fancybox.resize=function(){n.is(":visible")&&n.css("height",e(document).height()),e.fancybox.center(!0)},e.fancybox.center=function(e){var t,i;S||(i=e===!0?1:0,t=F(),!i&&(s.width()>t[0]||s.height()>t[1])||s.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-o.height()-40)-b.padding)),left:parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-o.width()-40)-b.padding))},"number"==typeof e?e:200))},e.fancybox.init=function(){e("#fancybox-wrap").length||(e("body").append(t=e('<div id="fancybox-tmp"></div>'),i=e('<div id="fancybox-loading"><div></div></div>'),n=e('<div id="fancybox-overlay"></div>'),s=e('<div id="fancybox-wrap"></div>')),a=e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(s),a.append(o=e('<div id="fancybox-content"></div>'),r=e('<a id="fancybox-close"></a>'),l=e('<div id="fancybox-title"></div>'),c=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),u=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),r.click(e.fancybox.close),i.click(e.fancybox.cancel),c.click(function(t){t.preventDefault(),e.fancybox.prev()}),u.click(function(t){t.preventDefault(),e.fancybox.next()}),e.fn.mousewheel&&s.bind("mousewheel.fb",function(t,i){S?t.preventDefault():(0==e(t.target).get(0).clientHeight||e(t.target).get(0).scrollHeight===e(t.target).get(0).clientHeight)&&(t.preventDefault(),e.fancybox[i>0?"prev":"next"]())}),e.support.opacity||s.addClass("fancybox-ie"),$&&(i.addClass("fancybox-ie6"),s.addClass("fancybox-ie6"),e('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(a)))},e.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},e(document).ready(function(){e.fancybox.init()})}(jQuery);