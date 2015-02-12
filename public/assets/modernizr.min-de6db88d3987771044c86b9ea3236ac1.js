window.Modernizr=function(e,t,i){function n(){p.input=function(e){for(var t=0,i=e.length;i>t;t++)D[e[t]]=e[t]in y;return D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var n,s,a,o=0,r=e.length;r>o;o++)y.setAttribute("type",s=e[o]),n="text"!==y.type,n&&(y.value=_,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==i?(m.appendChild(y),a=t.defaultView,n=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,m.removeChild(y)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?n=y.checkValidity&&y.checkValidity()===!1:/^color$/.test(s)?(m.appendChild(y),m.offsetWidth,n=y.value!=_,m.removeChild(y)):n=y.value!=_)),T[e[o]]=!!n;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function s(e,t){var i=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+k.join(i+" ")+i).split(" ");return a(n,t)}function a(e,t){for(var n in e)if(b[e[n]]!==i)return"pfx"==t?e[n]:!0;return!1}function o(e,t){return!!~(""+e).indexOf(t)}function r(e,t){return typeof e===t}function l(e,t){return c(x.join(e+";")+(t||""))}function c(e){b.cssText=e}var u,d,h="2.0.6",p={},f=!0,m=t.documentElement,g=(t.head||t.getElementsByTagName("head")[0],"modernizr"),v=t.createElement(g),b=v.style,y=t.createElement("input"),_=":)",w=Object.prototype.toString,x=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),k="Webkit Moz O ms Khtml".split(" "),C={svg:"http://www.w3.org/2000/svg"},S={},T={},D={},M=[],I=function(e,i,n,s){var a,o,r,l=t.createElement("div");if(parseInt(n,10))for(;n--;)r=t.createElement("div"),r.id=s?s[n]:g+(n+1),l.appendChild(r);return a=["&shy;","<style>",e,"</style>"].join(""),l.id=g,l.innerHTML+=a,m.appendChild(l),o=i(l,e),l.parentNode.removeChild(l),!!o},$=function(t){if(e.matchMedia)return matchMedia(t).matches;var i;return I("@media "+t+" { #"+g+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},E=function(){function e(e,s){s=s||t.createElement(n[e]||"div"),e="on"+e;var a=e in s;return a||(s.setAttribute||(s=t.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(e,""),a=r(s[e],"function"),r(s[e],i)||(s[e]=i),s.removeAttribute(e))),s=null,a}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),P={}.hasOwnProperty;d=r(P,i)||r(P.call,i)?function(e,t){return t in e&&r(e.constructor.prototype[t],i)}:function(e,t){return P.call(e,t)},!function(i,n){var s=i.join(""),a=n.length;I(s,function(i,n){for(var s=t.styleSheets[t.styleSheets.length-1],o=s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"",r=i.childNodes,l={};a--;)l[r[a].id]=r[a];p.touch="ontouchstart"in e||9===l.touch.offsetTop,p.csstransforms3d=9===l.csstransforms3d.offsetLeft,p.generatedcontent=l.generatedcontent.offsetHeight>=1,p.fontface=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0])},a,n)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",x.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",x.join("transform-3d),("),g,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',_,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),S.flexbox=function(){function e(e,t,i,n){e.style.cssText=x.join(t+":"+i+";")+(n||"")}function i(e,t,i,n){t+=":",e.style.cssText=(t+x.join(i+";"+t)).slice(0,-t.length)+(n||"")}var n=t.createElement("div"),s=t.createElement("div");i(n,"display","box","width:42px;padding:0;"),e(s,"box-flex","1","width:10px;"),n.appendChild(s),m.appendChild(n);var a=42===s.offsetWidth;return n.removeChild(s),m.removeChild(n),a},S.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},S.canvastext=function(){return!!p.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},S.webgl=function(){return!!e.WebGLRenderingContext},S.touch=function(){return p.touch},S.geolocation=function(){return!!navigator.geolocation},S.postmessage=function(){return!!e.postMessage},S.websqldatabase=function(){var t=!!e.openDatabase;return t},S.indexedDB=function(){for(var t=-1,i=k.length;++t<i;)if(e[k[t].toLowerCase()+"IndexedDB"])return!0;return!!e.indexedDB},S.hashchange=function(){return E("hashchange",e)&&(t.documentMode===i||t.documentMode>7)},S.history=function(){return!!e.history&&!!history.pushState},S.draganddrop=function(){return E("dragstart")&&E("drop")},S.websockets=function(){for(var t=-1,i=k.length;++t<i;)if(e[k[t]+"WebSocket"])return!0;return"WebSocket"in e},S.rgba=function(){return c("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},S.hsla=function(){return c("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},S.multiplebgs=function(){return c("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},S.backgroundsize=function(){return s("backgroundSize")},S.borderimage=function(){return s("borderImage")},S.borderradius=function(){return s("borderRadius")},S.boxshadow=function(){return s("boxShadow")},S.textshadow=function(){return""===t.createElement("div").style.textShadow},S.opacity=function(){return l("opacity:.55"),/^0.55$/.test(b.opacity)},S.cssanimations=function(){return s("animationName")},S.csscolumns=function(){return s("columnCount")},S.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return c((e+x.join(t+e)+x.join(i+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},S.cssreflections=function(){return s("boxReflect")},S.csstransforms=function(){return!!a(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},S.csstransforms3d=function(){var e=!!a(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in m.style&&(e=p.csstransforms3d),e},S.csstransitions=function(){return s("transitionProperty")},S.fontface=function(){return p.fontface},S.generatedcontent=function(){return p.generatedcontent},S.video=function(){var e=t.createElement("video"),i=!1;try{if(i=!!e.canPlayType){i=new Boolean(i),i.ogg=e.canPlayType('video/ogg; codecs="theora"');var n='video/mp4; codecs="avc1.42E01E';i.h264=e.canPlayType(n+'"')||e.canPlayType(n+', mp4a.40.2"'),i.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(s){}return i},S.audio=function(){var e=t.createElement("audio"),i=!1;try{(i=!!e.canPlayType)&&(i=new Boolean(i),i.ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),i.mp3=e.canPlayType("audio/mpeg;"),i.wav=e.canPlayType('audio/wav; codecs="1"'),i.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;"))}catch(n){}return i},S.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},S.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},S.webworkers=function(){return!!e.Worker},S.applicationcache=function(){return!!e.applicationCache},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},S.smil=function(){return!!t.createElementNS&&/SVG/.test(w.call(t.createElementNS(C.svg,"animate")))},S.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(w.call(t.createElementNS(C.svg,"clipPath")))};for(var N in S)d(S,N)&&(u=N.toLowerCase(),p[u]=S[N](),M.push((p[u]?"":"no-")+u));return p.input||n(),c(""),v=y=null,e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function n(e){for(var t=-1;++t<l;)e.createElement(r[t])}e.iepp=e.iepp||{};var s,a=e.iepp,o=a.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",r=o.split("|"),l=r.length,c=new RegExp("(^|\\s)("+o+")","gi"),u=new RegExp("<(/*)("+o+")","gi"),d=/^\s*[\{\}]\s*$/,h=new RegExp("(^|[^\\n]*?\\s)("+o+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),p=t.createDocumentFragment(),f=t.documentElement,m=f.firstChild,g=t.createElement("body"),v=t.createElement("style"),b=/print|all/;a.getCSS=function(e,t){if(e+""===i)return"";for(var n,s=-1,o=e.length,r=[];++s<o;)n=e[s],n.disabled||(t=n.media||t,b.test(t)&&r.push(a.getCSS(n.imports,t),n.cssText),t="all");return r.join("")},a.parseCSS=function(e){for(var t,i=[];null!=(t=h.exec(e));)i.push(((d.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(c,"$1.iepp_$2")+t[4]);return i.join("\n")},a.writeHTML=function(){var e=-1;for(s=s||t.body;++e<l;)for(var i=t.getElementsByTagName(r[e]),n=i.length,a=-1;++a<n;)i[a].className.indexOf("iepp_")<0&&(i[a].className+=" iepp_"+r[e]);p.appendChild(s),f.appendChild(g),g.className=s.className,g.id=s.id,g.innerHTML=s.innerHTML.replace(u,"<$1font")},a._beforePrint=function(){v.styleSheet.cssText=a.parseCSS(a.getCSS(t.styleSheets,"all")),a.writeHTML()},a.restoreHTML=function(){g.innerHTML="",f.removeChild(g),f.appendChild(s)},a._afterPrint=function(){a.restoreHTML(),v.styleSheet.cssText=""},n(t),n(p),a.disablePP||(m.insertBefore(v,m.firstChild),v.media="print",v.className="iepp-printshim",e.attachEvent("onbeforeprint",a._beforePrint),e.attachEvent("onafterprint",a._afterPrint))}(e,t),p._version=h,p._prefixes=x,p._domPrefixes=k,p.mq=$,p.hasEvent=E,p.testProp=function(e){return a([e])},p.testAllProps=s,p.testStyles=I,m.className=m.className.replace(/\bno-js\b/,"")+(f?" js "+M.join(" "):""),p}(this,this.document),function(e,t){function i(){b(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=t,!t){var n,s,a=e.document,o=a.documentElement,r=[],l=[],c=[],u={},d=30,h=a.getElementsByTagName("head")[0]||o,p=h.getElementsByTagName("link"),f=[],m=function(){for(var t,i,n,s,a=p,o=a.length,r=0;o>r;r++)t=a[r],i=t.href,n=t.media,s=t.rel&&"stylesheet"===t.rel.toLowerCase(),!!i&&s&&!u[i]&&(/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(i)&&i.replace(RegExp.$1,"").split("/")[0]!==e.location.host?u[i]=!0:f.push({href:i,media:n}));g()},g=function(){if(f.length){var e=f.shift();y(e.href,function(t){v(t,e.href,e.media),u[e.href]=!0,g()})}},v=function(e,t,i){var n,s,a,o,c,u=e.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),d=u&&u.length||0,t=t.substring(0,t.lastIndexOf("/")),h=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},p=!d&&i,f=0;for(t.length&&(t+="/"),p&&(d=1);d>f;f++)for(n=0,p?(s=i,l.push(h(e))):(s=u[f].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,l.push(RegExp.$2&&h(RegExp.$2))),o=s.split(","),c=o.length;c>n;n++)a=o[n],r.push({media:a.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:l.length-1,minw:a.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:a.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)});b()},b=function(e){var t="clientWidth",i=o[t],u="CSS1Compat"===a.compatMode&&i||a.body[t]||i,f={},m=a.createDocumentFragment(),g=p[p.length-1],v=(new Date).getTime();if(e&&n&&d>v-n)clearTimeout(s),s=setTimeout(b,d);else{n=v;for(var y in r){var _=r[y];(!_.minw&&!_.maxw||(!_.minw||_.minw&&u>=_.minw)&&(!_.maxw||_.maxw&&u<=_.maxw))&&(f[_.media]||(f[_.media]=[]),f[_.media].push(l[_.rules]))}for(var y in c)c[y]&&c[y].parentNode===h&&h.removeChild(c[y]);for(var y in f){var w=a.createElement("style"),x=f[y].join("\n");w.type="text/css",w.media=y,w.styleSheet?w.styleSheet.cssText=x:w.appendChild(a.createTextNode(x)),m.appendChild(w),c.push(w)}h.insertBefore(m,g.nextSibling)}},y=function(e,t){var i=_();if(i){if(i.open("GET",e,!0),i.onreadystatechange=function(){4==i.readyState&&(200==i.status||304==i.status)&&t(i.responseText)},4==i.readyState)return;i.send()}},_=function(){for(var e=!1,t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],i=t.length;i--;){try{e=t[i]()}catch(n){continue}break}return function(){return e}}();m(),respond.update=m,e.addEventListener?e.addEventListener("resize",i,!1):e.attachEvent&&e.attachEvent("onresize",i)}}(this,Modernizr.mq("only all")),function(e,t,i){function n(e){return!e||"loaded"==e||"complete"==e}function s(){for(var e=1,t=-1;v.length-++t&&(!v[t].s||(e=v[t].r)););e&&r()}function a(e){var i,a=t.createElement("script");a.src=e.s,a.onreadystatechange=a.onload=function(){!i&&n(a.readyState)&&(i=1,s(),a.onload=a.onreadystatechange=null)},f(function(){i||(i=1,s())},h.errorTimeout),e.e?a.onload():m.parentNode.insertBefore(a,m)}function o(e){var i,n=t.createElement("link");if(n.href=e.s,n.rel="stylesheet",n.type="text/css",e.e||!k&&!y)n.onload=function(){i||(i=1,f(function(){s()},0))},e.e&&n.onload();else{var a=function(e){f(function(){if(!i)try{e.sheet.cssRules.length?(i=1,s()):a(e)}catch(t){1e3==t.code||"security"==t.message||"denied"==t.message?(i=1,f(function(){s()},0)):a(e)}},0)};a(n)}f(function(){i||(i=1,s())},h.errorTimeout),!e.e&&m.parentNode.insertBefore(n,m)}function r(){var e=v.shift();b=1,e?e.t?f(function(){"c"==e.t?o(e):a(e)},0):(e(),s()):b=0}function l(e,i,a,o,l,c){function u(){!p&&n(d.readyState)&&(g.r=p=1,!b&&s(),d.onload=d.onreadystatechange=null,f(function(){w.removeChild(d)},0))}var d=t.createElement(e),p=0,g={t:a,s:i,e:c};d.src=d.data=i,!_&&(d.style.display="none"),d.width=d.height="0","object"!=e&&(d.type=a),d.onload=d.onreadystatechange=u,"img"==e?d.onerror=u:"script"==e&&(d.onerror=function(){g.e=g.r=1,r()}),v.splice(o,0,g),w.insertBefore(d,_?null:m),f(function(){p||(w.removeChild(d),g.r=g.e=p=1,s())},h.errorTimeout)}function c(e,t,i){var n="c"==t?T:S;return b=0,t=t||"j",I(e)?l(n,e,t,this.i++,p,i):(v.splice(this.i++,0,e),1==v.length&&r()),this}function u(){var e=h;return e.loader={load:c,i:0},e}var d,h,p=t.documentElement,f=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],b=0,y="MozAppearance"in p.style,_=y&&!!t.createRange().compareNode,w=_?p:m.parentNode,x=e.opera&&"[object Opera]"==g.call(e.opera),k="webkitAppearance"in p.style,C=k&&"async"in t.createElement("script"),S=y?"object":x||C?"img":"script",T=k?"img":S,D=Array.isArray||function(e){return"[object Array]"==g.call(e)},M=function(e){return Object(e)===e},I=function(e){return"string"==typeof e},$=function(e){return"[object Function]"==g.call(e)},E=[],P={};h=function(e){function t(e){var t,i,n=e.split("!"),s=E.length,a=n.pop(),o=n.length,r={url:a,origUrl:a,prefixes:n};for(i=0;o>i;i++)t=P[n[i]],t&&(r=t(r));for(i=0;s>i;i++)r=E[i](r);return r}function n(e,n,s,a,o){var r=t(e),l=r.autoCallback;if(!r.bypass){if(n&&(n=$(n)?n:n[e]||n[a]||n[e.split("/").pop().split("?")[0]]),r.instead)return r.instead(e,n,s,a,o);s.load(r.url,r.forceCSS||!r.forceJS&&/css$/.test(r.url)?"c":i,r.noexec),($(n)||$(l))&&s.load(function(){u(),n&&n(r.origUrl,o,a),l&&l(r.origUrl,o,a)})}}function s(e,t){function i(e){if(I(e))n(e,l,t,0,a);else if(M(e))for(s in e)e.hasOwnProperty(s)&&n(e[s],l,t,s,a)}var s,a=!!e.test,o=a?e.yep:e.nope,r=e.load||e.both,l=e.callback;i(o),i(r),e.complete&&t.load(e.complete)}var a,o,r=this.yepnope.loader;if(I(e))n(e,0,r,0);else if(D(e))for(a=0;a<e.length;a++)o=e[a],I(o)?n(o,0,r,0):D(o)?h(o):M(o)&&s(o,r);else M(e)&&s(e,r)},h.addPrefix=function(e,t){P[e]=t},h.addFilter=function(e){E.push(e)},h.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};