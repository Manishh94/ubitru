window.JSON||(window.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var i,n,s,a,o,r=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(l)){for(a=l.length,i=0;a>i;i+=1)o[i]=str(i,l)||"null";return s=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+r+"]":"["+o.join(",")+"]",gap=r,s}if(rep&&"object"==typeof rep)for(a=rep.length,i=0;a>i;i+=1)n=rep[i],"string"==typeof n&&(s=str(n,l),s&&o.push(quote(n)+(gap?": ":":")+s));else for(n in l)Object.hasOwnProperty.call(l,n)&&(s=str(n,l),s&&o.push(quote(n)+(gap?": ":":")+s));return s=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+r+"}":"{"+o.join(",")+"}",gap=r,s}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,i){var n;if(gap="",indent="","number"==typeof i)for(n=0;i>n;n+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var i,n,s=e[t];if(s&&"object"==typeof s)for(i in s)Object.hasOwnProperty.call(s,i)&&(n=walk(s,i),void 0!==n?s[i]=n:delete s[i]);return reviver.call(e,t,s)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var i=e.History=e.History||{},n=e.jQuery;if("undefined"!=typeof i.Adapter)throw new Error("History.js Adapter has already been loaded...");i.Adapter={bind:function(e,t,i){n(e).bind(t,i)},trigger:function(e,t,i){n(e).trigger(t,i)},extractEventData:function(e,i,n){var s=i&&i.originalEvent&&i.originalEvent[e]||n&&n[e]||t;return s},onDomLoad:function(e){n(e)}},"undefined"!=typeof i.init&&i.init()}(window),function(e){"use strict";var t=e.document,i=e.setTimeout||i,n=e.clearTimeout||n,s=e.setInterval||s,a=e.History=e.History||{};if("undefined"!=typeof a.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");a.initHtml4=function(){return"undefined"!=typeof a.initHtml4.initialized?!1:(a.initHtml4.initialized=!0,a.enabled=!0,a.savedHashes=[],a.isLastHash=function(e){var t,i=a.getHashByIndex();return t=e===i},a.saveHash=function(e){return a.isLastHash(e)?!1:(a.savedHashes.push(e),!0)},a.getHashByIndex=function(e){var t=null;return t="undefined"==typeof e?a.savedHashes[a.savedHashes.length-1]:0>e?a.savedHashes[a.savedHashes.length+e]:a.savedHashes[e]},a.discardedHashes={},a.discardedStates={},a.discardState=function(e,t,i){var n,s=a.getHashByState(e);return n={discardedState:e,backState:i,forwardState:t},a.discardedStates[s]=n,!0},a.discardHash=function(e,t,i){var n={discardedHash:e,backState:i,forwardState:t};return a.discardedHashes[e]=n,!0},a.discardedState=function(e){var t,i=a.getHashByState(e);return t=a.discardedStates[i]||!1},a.discardedHash=function(e){var t=a.discardedHashes[e]||!1;return t},a.recycleState=function(e){var t=a.getHashByState(e);return a.discardedState(e)&&delete a.discardedStates[t],!0},a.emulated.hashChange&&(a.hashChangeInit=function(){a.checkerFunction=null;var i,n,o,r,l="";return a.isInternetExplorer()?(i="historyjs-iframe",n=t.createElement("iframe"),n.setAttribute("id",i),n.style.display="none",t.body.appendChild(n),n.contentWindow.document.open(),n.contentWindow.document.close(),o="",r=!1,a.checkerFunction=function(){if(r)return!1;r=!0;var t=a.getHash()||"",i=a.unescapeHash(n.contentWindow.document.location.hash)||"";return t!==l?(l=t,i!==t&&(o=i=t,n.contentWindow.document.open(),n.contentWindow.document.close(),n.contentWindow.document.location.hash=a.escapeHash(t)),a.Adapter.trigger(e,"hashchange")):i!==o&&(o=i,a.setHash(i,!1)),r=!1,!0}):a.checkerFunction=function(){var t=a.getHash();return t!==l&&(l=t,a.Adapter.trigger(e,"hashchange")),!0},a.intervalList.push(s(a.checkerFunction,a.options.hashChangeInterval)),!0},a.Adapter.onDomLoad(a.hashChangeInit)),a.emulated.pushState&&(a.onHashChange=function(i){var n,s=i&&i.newURL||t.location.href,o=a.getHashByUrl(s),r=null,l=null;return a.isLastHash(o)?(a.busy(!1),!1):(a.doubleCheckComplete(),a.saveHash(o),o&&a.isTraditionalAnchor(o)?(a.Adapter.trigger(e,"anchorchange"),a.busy(!1),!1):(r=a.extractState(a.getFullUrl(o||t.location.href,!1),!0),a.isLastSavedState(r)?(a.busy(!1),!1):(l=a.getHashByState(r),n=a.discardedState(r),n?(a.getHashByIndex(-2)===a.getHashByState(n.forwardState)?a.back(!1):a.forward(!1),!1):(a.pushState(r.data,r.title,r.url,!1),!0))))},a.Adapter.bind(e,"hashchange",a.onHashChange),a.pushState=function(i,n,s,o){if(a.getHashByUrl(s))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(o!==!1&&a.busy())return a.pushQueue({scope:a,callback:a.pushState,args:arguments,queue:o}),!1;a.busy(!0);var r=a.createStateObject(i,n,s),l=a.getHashByState(r),c=a.getState(!1),u=a.getHashByState(c),d=a.getHash();return a.storeState(r),a.expectedStateId=r.id,a.recycleState(r),a.setTitle(r),l===u?(a.busy(!1),!1):l!==d&&l!==a.getShortUrl(t.location.href)?(a.setHash(l,!1),!1):(a.saveState(r),a.Adapter.trigger(e,"statechange"),a.busy(!1),!0)},a.replaceState=function(e,t,i,n){if(a.getHashByUrl(i))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&a.busy())return a.pushQueue({scope:a,callback:a.replaceState,args:arguments,queue:n}),!1;a.busy(!0);var s=a.createStateObject(e,t,i),o=a.getState(!1),r=a.getStateByIndex(-2);return a.discardState(o,s,r),a.pushState(s.data,s.title,s.url,!1),!0}),a.emulated.pushState&&a.getHash()&&!a.emulated.hashChange&&a.Adapter.onDomLoad(function(){a.Adapter.trigger(e,"hashchange")}),void 0)},"undefined"!=typeof a.init&&a.init()}(window),function(e,t){"use strict";var i=e.console||t,n=e.document,s=e.navigator,a=e.sessionStorage||!1,o=e.setTimeout,r=e.clearTimeout,l=e.setInterval,c=e.clearInterval,u=e.JSON,d=e.alert,h=e.History=e.History||{},p=e.history;if(u.stringify=u.stringify||u.encode,u.parse=u.parse||u.decode,"undefined"!=typeof h.init)throw new Error("History.js Core has already been loaded...");h.init=function(){return"undefined"==typeof h.Adapter?!1:("undefined"!=typeof h.initCore&&h.initCore(),"undefined"!=typeof h.initHtml4&&h.initHtml4(),!0)},h.initCore=function(){if("undefined"!=typeof h.initCore.initialized)return!1;if(h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||n.title,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)c(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e,t,s,a,o,r="undefined"!=typeof i&&"undefined"!=typeof i.log&&"undefined"!=typeof i.log.apply,l=n.getElementById("log");for(r?(a=Array.prototype.slice.call(arguments),e=a.shift(),"undefined"!=typeof i.debug?i.debug.apply(i,[e,a]):i.log.apply(i,[e,a])):e="\n"+arguments[0]+"\n",t=1,s=arguments.length;s>t;++t){if(o=arguments[t],"object"==typeof o&&"undefined"!=typeof u)try{o=u.stringify(o)}catch(c){}e+="\n"+o+"\n"}return l?(l.value+=e+"\n-----\n",l.scrollTop=l.scrollHeight-l.clientHeight):r||d(e),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached="undefined"!=typeof h.getInternetExplorerMajorVersion.cached?h.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=n.createElement("div"),i=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&i[0];);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached="undefined"!=typeof h.isInternetExplorer.cached?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in n)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===s.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===s.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)return!1;return!0},h.cloneObject=function(e){var t,i;return e?(t=u.stringify(e),i=u.parse(t)):i={},i},h.getRootUrl=function(){var e=n.location.protocol+"//"+(n.location.hostname||n.location.host);return n.location.port&&(e+=":"+n.location.port),e+="/"},h.getBaseHref=function(){var e=n.getElementsByTagName("base"),t=null,i="";return 1===e.length&&(t=e[0],i=t.href.replace(/[^\/]+$/,"")),i=i.replace(/\/+$/,""),i&&(i+="/"),i},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e,t=h.getState(!1,!1),i=(t||{}).url||n.location.href;return e=i.replace(/\/+$/,"").replace(/[^\/]+$/,function(e){return/\./.test(e)?e:e+"/"})},h.getBasePageUrl=function(){var e=n.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var i=e,n=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(i="/"===n?h.getRootUrl()+e.replace(/^\/+/,""):"#"===n?h.getPageUrl().replace(/#.*/,"")+e:"?"===n?h.getPageUrl().replace(/[\?#].*/,"")+e:t?h.getBaseUrl()+e.replace(/^(\.\/)+/,""):h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),i.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,i=h.getBaseUrl(),n=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(i,"")),t=t.replace(n,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var i=h.getLastSavedState();return!i&&t&&(i=h.createStateObject()),e&&(i=h.cloneObject(i),i.url=i.cleanUrl||i.url),i},h.getIdByState=function(e){var t,i=h.extractId(e.url);if(!i)if(t=h.getStateString(e),"undefined"!=typeof h.stateToId[t])i=h.stateToId[t];else if("undefined"!=typeof h.store.stateToId[t])i=h.store.stateToId[t];else{for(;i=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof h.idToState[i]||"undefined"!=typeof h.store.idToState[i];);h.stateToId[t]=i,h.idToState[i]=e}return i},h.normalizeState=function(e){var t,i;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(h.unescapeString(e.url||n.location.href)),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,i=!h.isEmptyObject(t.data),(t.title||i)&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},h.createStateObject=function(e,t,i){var n={data:e,title:t,url:i};return n=h.normalizeState(n)},h.getStateById=function(e){e=String(e);var i=h.idToState[e]||h.store.idToState[e]||t;return i},h.getStateString=function(e){var t,i,n;return t=h.normalizeState(e),i={data:t.data,title:e.title,url:e.url},n=u.stringify(i)},h.getStateId=function(e){var t,i;return t=h.normalizeState(e),i=t.id},h.getHashByState=function(e){var t,i;return t=h.normalizeState(e),i=t.hash},h.extractId=function(e){var t,i,n;return i=/(.*)\&_suid=([0-9]+)$/.exec(e),n=i?i[1]||e:e,t=i?String(i[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var i,n,s=null;return t=t||!1,i=h.extractId(e),i&&(s=h.getStateById(i)),s||(n=h.getFullUrl(e),i=h.getIdByUrl(n)||!1,i&&(s=h.getStateById(i)),!s&&t&&!h.isTraditionalAnchor(e)&&(s=h.createStateObject(null,null,n))),s},h.getIdByUrl=function(e){var i=h.urlToId[e]||h.store.urlToId[e]||t;return i},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t,i=!1;return t=h.extractState(e.url),i=t&&t.id!==e.id},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t,i,n,s=!1;return h.savedStates.length&&(t=e.id,i=h.getLastSavedState(),n=i.id,s=t===n),s},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return t="undefined"==typeof e?h.savedStates[h.savedStates.length-1]:0>e?h.savedStates[h.savedStates.length+e]:h.savedStates[e]},h.getHash=function(){var e=h.unescapeHash(n.location.hash);return e},h.unescapeString=function(t){for(var i,n=t;i=e.unescape(n),i!==n;)n=i;return n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=h.unescapeString(t)},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var i,s,a;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(i=h.escapeHash(e),h.busy(!0),s=h.extractState(e,!0),s&&!h.emulated.pushState?h.pushState(s.data,s.title,s.url,!1):n.location.hash!==i&&(h.bugs.setHash?(a=h.getPageUrl(),h.pushState(null,null,a+"#"+i,!1)):n.location.hash=i),h)},h.escapeHash=function(t){var i=h.normalizeHash(t);return i=e.escape(i),h.bugs.hashEscape||(i=i.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),i},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t)},h.setTitle=function(e){var t,i=e.title;i||(t=h.getStateByIndex(0),t&&t.url===e.url&&(i=t.title||h.options.initialTitle));try{n.getElementsByTagName("title")[0].innerHTML=i.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(s){}return n.title=i,h},h.queues=[],h.busy=function(e){if("undefined"!=typeof e?h.busy.flag=e:"undefined"==typeof h.busy.flag&&(h.busy.flag=!1),!h.busy.flag){r(h.busy.timeout);var t=function(){var e,i,n;if(!h.busy.flag)for(e=h.queues.length-1;e>=0;--e)i=h.queues[e],0!==i.length&&(n=i.shift(),h.fireQueueItem(n),h.busy.timeout=o(t,h.options.busyDelay))};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(r(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t,i=h.extractState(n.location.href);if(!h.isLastSavedState(i))return t=i,t||(t=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var i;if(e>0)for(i=1;e>=i;++i)h.forward(t);else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(i=-1;i>=e;--i)h.back(t)}return h},h.emulated.pushState){var f=function(){};h.pushState=h.pushState||f,h.replaceState=h.replaceState||f}else h.onPopState=function(t,i){var s,a,o=!1,r=!1;return h.doubleCheckComplete(),s=h.getHash(),s?(a=h.extractState(s||n.location.href,!0),a?h.replaceState(a.data,a.title,a.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(o=h.Adapter.extractEventData("state",t,i)||!1,r=o?h.getStateById(o):h.expectedStateId?h.getStateById(h.expectedStateId):h.extractState(n.location.href),r||(r=h.createStateObject(null,null,n.location.href)),h.expectedStateId=!1,h.isLastSavedState(r)?(h.busy(!1),!1):(h.storeState(r),h.saveState(r),h.setTitle(r),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,i,n,s){if(h.getHashByUrl(n)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(s!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:s}),!1;h.busy(!0);var a=h.createStateObject(t,i,n);return h.isLastSavedState(a)?h.busy(!1):(h.storeState(a),h.expectedStateId=a.id,p.pushState(a.id,a.title,a.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,i,n,s){if(h.getHashByUrl(n)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(s!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:s}),!1;h.busy(!0);var a=h.createStateObject(t,i,n);return h.isLastSavedState(a)?h.busy(!1):(h.storeState(a),h.expectedStateId=a.id,p.replaceState(a.id,a.title,a.url),h.Adapter.trigger(e,"popstate")),!0};if(a){try{h.store=u.parse(a.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"beforeunload",h.clearAllIntervals),h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(n.location.href,!0))),a&&(h.onUnload=function(){var e,t;try{e=u.parse(a.getItem("History.store"))||{}}catch(i){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState)h.idToState.hasOwnProperty(t)&&(e.idToState[t]=h.idToState[t]);for(t in h.urlToId)h.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=h.urlToId[t]);for(t in h.stateToId)h.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=h.stateToId[t]);h.store=e,h.normalizeStore(),a.setItem("History.store",u.stringify(e))},h.intervalList.push(l(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload)),h.emulated.pushState||(h.bugs.safariPoll&&h.intervalList.push(l(h.safariStatePoll,h.options.safariPollInterval)),("Apple Computer, Inc."===s.vendor||"Mozilla"===(s.appCodeName||""))&&(h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})))},h.init()}(window);