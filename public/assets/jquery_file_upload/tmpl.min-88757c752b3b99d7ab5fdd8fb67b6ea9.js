!function(t){"use strict";var e=function(t,i){var n=/[^\w\-\.:]/.test(t)?new Function(e.arg+",tmpl","var _e=tmpl.encode"+e.helper+",_s='"+t.replace(e.regexp,e.func)+"';return _s;"):e.cache[t]=e.cache[t]||e(e.load(t));return i?n(i,e):function(t){return n(t,e)}};e.cache={},e.load=function(t){return document.getElementById(t).innerHTML},e.regexp=/([\s'\\])(?![^%]*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,e.func=function(t,e,i,n,s,o){return e?{"\n":"\\n","\r":"\\r","	":"\\t"," ":" "}[t]||"\\"+t:i?"="===i?"'+_e("+n+")+'":"'+("+n+"||'')+'":s?"';":o?"_s+='":void 0},e.encReg=/[<>&"'\x00]/g,e.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},e.encode=function(t){return String(t||"").replace(e.encReg,function(t){return e.encMap[t]||""})},e.arg="o",e.helper=",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return e}):t.tmpl=e}(this);