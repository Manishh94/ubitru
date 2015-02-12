window.JSON||(window.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var i,n,s,o,a,r=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(l)){for(o=l.length,i=0;o>i;i+=1)a[i]=str(i,l)||"null";return s=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+r+"]":"["+a.join(",")+"]",gap=r,s}if(rep&&"object"==typeof rep)for(o=rep.length,i=0;o>i;i+=1)n=rep[i],"string"==typeof n&&(s=str(n,l),s&&a.push(quote(n)+(gap?": ":":")+s));else for(n in l)Object.hasOwnProperty.call(l,n)&&(s=str(n,l),s&&a.push(quote(n)+(gap?": ":":")+s));return s=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+r+"}":"{"+a.join(",")+"}",gap=r,s}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,i){var n;if(gap="",indent="","number"==typeof i)for(n=0;i>n;n+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var i,n,s=e[t];if(s&&"object"==typeof s)for(i in s)Object.hasOwnProperty.call(s,i)&&(n=walk(s,i),void 0!==n?s[i]=n:delete s[i]);return reviver.call(e,t,s)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var i=e.History=e.History||{},n=e.jQuery;if("undefined"!=typeof i.Adapter)throw new Error("History.js Adapter has already been loaded...");i.Adapter={bind:function(e,t,i){n(e).bind(t,i)},trigger:function(e,t,i){n(e).trigger(t,i)},extractEventData:function(e,i,n){var s=i&&i.originalEvent&&i.originalEvent[e]||n&&n[e]||t;return s},onDomLoad:function(e){n(e)}},"undefined"!=typeof i.init&&i.init()}(window),function(e){"use strict";var t=e.document,i=e.setTimeout||i,n=e.clearTimeout||n,s=e.setInterval||s,o=e.History=e.History||{};if("undefined"!=typeof o.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){return"undefined"!=typeof o.initHtml4.initialized?!1:(o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t,i=o.getHashByIndex();return t=e===i},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return t="undefined"==typeof e?o.savedHashes[o.savedHashes.length-1]:0>e?o.savedHashes[o.savedHashes.length+e]:o.savedHashes[e]},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,i){var n,s=o.getHashByState(e);return n={discardedState:e,backState:i,forwardState:t},o.discardedStates[s]=n,!0},o.discardHash=function(e,t,i){var n={discardedHash:e,backState:i,forwardState:t};return o.discardedHashes[e]=n,!0},o.discardedState=function(e){var t,i=o.getHashByState(e);return t=o.discardedStates[i]||!1},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var i,n,a,r,l="";return o.isInternetExplorer()?(i="historyjs-iframe",n=t.createElement("iframe"),n.setAttribute("id",i),n.style.display="none",t.body.appendChild(n),n.contentWindow.document.open(),n.contentWindow.document.close(),a="",r=!1,o.checkerFunction=function(){if(r)return!1;r=!0;var t=o.getHash()||"",i=o.unescapeHash(n.contentWindow.document.location.hash)||"";return t!==l?(l=t,i!==t&&(a=i=t,n.contentWindow.document.open(),n.contentWindow.document.close(),n.contentWindow.document.location.hash=o.escapeHash(t)),o.Adapter.trigger(e,"hashchange")):i!==a&&(a=i,o.setHash(i,!1)),r=!1,!0}):o.checkerFunction=function(){var t=o.getHash();return t!==l&&(l=t,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(i){var n,s=i&&i.newURL||t.location.href,a=o.getHashByUrl(s),r=null,l=null;return o.isLastHash(a)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(a),a&&o.isTraditionalAnchor(a)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(r=o.extractState(o.getFullUrl(a||t.location.href,!1),!0),o.isLastSavedState(r)?(o.busy(!1),!1):(l=o.getHashByState(r),n=o.discardedState(r),n?(o.getHashByIndex(-2)===o.getHashByState(n.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(r.data,r.title,r.url,!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(i,n,s,a){if(o.getHashByUrl(s))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(a!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:a}),!1;o.busy(!0);var r=o.createStateObject(i,n,s),l=o.getHashByState(r),c=o.getState(!1),h=o.getHashByState(c),u=o.getHash();return o.storeState(r),o.expectedStateId=r.id,o.recycleState(r),o.setTitle(r),l===h?(o.busy(!1),!1):l!==u&&l!==o.getShortUrl(t.location.href)?(o.setHash(l,!1),!1):(o.saveState(r),o.Adapter.trigger(e,"statechange"),o.busy(!1),!0)},o.replaceState=function(e,t,i,n){if(o.getHashByUrl(i))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:n}),!1;o.busy(!0);var s=o.createStateObject(e,t,i),a=o.getState(!1),r=o.getStateByIndex(-2);return o.discardState(a,s,r),o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")}),void 0)},"undefined"!=typeof o.init&&o.init()}(window),function(e,t){"use strict";var i=e.console||t,n=e.document,s=e.navigator,o=e.sessionStorage||!1,a=e.setTimeout,r=e.clearTimeout,l=e.setInterval,c=e.clearInterval,h=e.JSON,u=e.alert,d=e.History=e.History||{},p=e.history;if(h.stringify=h.stringify||h.encode,h.parse=h.parse||h.decode,"undefined"!=typeof d.init)throw new Error("History.js Core has already been loaded...");d.init=function(){return"undefined"==typeof d.Adapter?!1:("undefined"!=typeof d.initCore&&d.initCore(),"undefined"!=typeof d.initHtml4&&d.initHtml4(),!0)},d.initCore=function(){if("undefined"!=typeof d.initCore.initialized)return!1;if(d.initCore.initialized=!0,d.options=d.options||{},d.options.hashChangeInterval=d.options.hashChangeInterval||100,d.options.safariPollInterval=d.options.safariPollInterval||500,d.options.doubleCheckInterval=d.options.doubleCheckInterval||500,d.options.storeInterval=d.options.storeInterval||1e3,d.options.busyDelay=d.options.busyDelay||250,d.options.debug=d.options.debug||!1,d.options.initialTitle=d.options.initialTitle||n.title,d.intervalList=[],d.clearAllIntervals=function(){var e,t=d.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)c(t[e]);d.intervalList=null}},d.debug=function(){(d.options.debug||!1)&&d.log.apply(d,arguments)},d.log=function(){var e,t,s,o,a,r="undefined"!=typeof i&&"undefined"!=typeof i.log&&"undefined"!=typeof i.log.apply,l=n.getElementById("log");for(r?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof i.debug?i.debug.apply(i,[e,o]):i.log.apply(i,[e,o])):e="\n"+arguments[0]+"\n",t=1,s=arguments.length;s>t;++t){if(a=arguments[t],"object"==typeof a&&"undefined"!=typeof h)try{a=h.stringify(a)}catch(c){}e+="\n"+a+"\n"}return l?(l.value+=e+"\n-----\n",l.scrollTop=l.scrollHeight-l.clientHeight):r||u(e),!0},d.getInternetExplorerMajorVersion=function(){var e=d.getInternetExplorerMajorVersion.cached="undefined"!=typeof d.getInternetExplorerMajorVersion.cached?d.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=n.createElement("div"),i=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&i[0];);return e>4?e:!1}();return e},d.isInternetExplorer=function(){var e=d.isInternetExplorer.cached="undefined"!=typeof d.isInternetExplorer.cached?d.isInternetExplorer.cached:Boolean(d.getInternetExplorerMajorVersion());return e},d.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in n)||d.isInternetExplorer()&&d.getInternetExplorerMajorVersion()<8)},d.enabled=!d.emulated.pushState,d.bugs={setHash:Boolean(!d.emulated.pushState&&"Apple Computer, Inc."===s.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),safariPoll:Boolean(!d.emulated.pushState&&"Apple Computer, Inc."===s.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),ieDoubleCheck:Boolean(d.isInternetExplorer()&&d.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(d.isInternetExplorer()&&d.getInternetExplorerMajorVersion()<7)},d.isEmptyObject=function(e){for(var t in e)return!1;return!0},d.cloneObject=function(e){var t,i;return e?(t=h.stringify(e),i=h.parse(t)):i={},i},d.getRootUrl=function(){var e=n.location.protocol+"//"+(n.location.hostname||n.location.host);return n.location.port&&(e+=":"+n.location.port),e+="/"},d.getBaseHref=function(){var e=n.getElementsByTagName("base"),t=null,i="";return 1===e.length&&(t=e[0],i=t.href.replace(/[^\/]+$/,"")),i=i.replace(/\/+$/,""),i&&(i+="/"),i},d.getBaseUrl=function(){var e=d.getBaseHref()||d.getBasePageUrl()||d.getRootUrl();return e},d.getPageUrl=function(){var e,t=d.getState(!1,!1),i=(t||{}).url||n.location.href;return e=i.replace(/\/+$/,"").replace(/[^\/]+$/,function(e){return/\./.test(e)?e:e+"/"})},d.getBasePageUrl=function(){var e=n.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},d.getFullUrl=function(e,t){var i=e,n=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(i="/"===n?d.getRootUrl()+e.replace(/^\/+/,""):"#"===n?d.getPageUrl().replace(/#.*/,"")+e:"?"===n?d.getPageUrl().replace(/[\?#].*/,"")+e:t?d.getBaseUrl()+e.replace(/^(\.\/)+/,""):d.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),i.replace(/\#$/,"")},d.getShortUrl=function(e){var t=e,i=d.getBaseUrl(),n=d.getRootUrl();return d.emulated.pushState&&(t=t.replace(i,"")),t=t.replace(n,"/"),d.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},d.store={},d.idToState=d.idToState||{},d.stateToId=d.stateToId||{},d.urlToId=d.urlToId||{},d.storedStates=d.storedStates||[],d.savedStates=d.savedStates||[],d.normalizeStore=function(){d.store.idToState=d.store.idToState||{},d.store.urlToId=d.store.urlToId||{},d.store.stateToId=d.store.stateToId||{}},d.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var i=d.getLastSavedState();return!i&&t&&(i=d.createStateObject()),e&&(i=d.cloneObject(i),i.url=i.cleanUrl||i.url),i},d.getIdByState=function(e){var t,i=d.extractId(e.url);if(!i)if(t=d.getStateString(e),"undefined"!=typeof d.stateToId[t])i=d.stateToId[t];else if("undefined"!=typeof d.store.stateToId[t])i=d.store.stateToId[t];else{for(;i=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof d.idToState[i]||"undefined"!=typeof d.store.idToState[i];);d.stateToId[t]=i,d.idToState[i]=e}return i},d.normalizeState=function(e){var t,i;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=d.getFullUrl(d.unescapeString(e.url||n.location.href)),t.hash=d.getShortUrl(t.url),t.data=d.cloneObject(e.data),t.id=d.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,i=!d.isEmptyObject(t.data),(t.title||i)&&(t.hash=d.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=d.getFullUrl(t.hash),(d.emulated.pushState||d.bugs.safariPoll)&&d.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},d.createStateObject=function(e,t,i){var n={data:e,title:t,url:i};return n=d.normalizeState(n)},d.getStateById=function(e){e=String(e);var i=d.idToState[e]||d.store.idToState[e]||t;return i},d.getStateString=function(e){var t,i,n;return t=d.normalizeState(e),i={data:t.data,title:e.title,url:e.url},n=h.stringify(i)},d.getStateId=function(e){var t,i;return t=d.normalizeState(e),i=t.id},d.getHashByState=function(e){var t,i;return t=d.normalizeState(e),i=t.hash},d.extractId=function(e){var t,i,n;return i=/(.*)\&_suid=([0-9]+)$/.exec(e),n=i?i[1]||e:e,t=i?String(i[2]||""):"",t||!1},d.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},d.extractState=function(e,t){var i,n,s=null;return t=t||!1,i=d.extractId(e),i&&(s=d.getStateById(i)),s||(n=d.getFullUrl(e),i=d.getIdByUrl(n)||!1,i&&(s=d.getStateById(i)),!s&&t&&!d.isTraditionalAnchor(e)&&(s=d.createStateObject(null,null,n))),s},d.getIdByUrl=function(e){var i=d.urlToId[e]||d.store.urlToId[e]||t;return i},d.getLastSavedState=function(){return d.savedStates[d.savedStates.length-1]||t},d.getLastStoredState=function(){return d.storedStates[d.storedStates.length-1]||t},d.hasUrlDuplicate=function(e){var t,i=!1;return t=d.extractState(e.url),i=t&&t.id!==e.id},d.storeState=function(e){return d.urlToId[e.url]=e.id,d.storedStates.push(d.cloneObject(e)),e},d.isLastSavedState=function(e){var t,i,n,s=!1;return d.savedStates.length&&(t=e.id,i=d.getLastSavedState(),n=i.id,s=t===n),s},d.saveState=function(e){return d.isLastSavedState(e)?!1:(d.savedStates.push(d.cloneObject(e)),!0)},d.getStateByIndex=function(e){var t=null;return t="undefined"==typeof e?d.savedStates[d.savedStates.length-1]:0>e?d.savedStates[d.savedStates.length+e]:d.savedStates[e]},d.getHash=function(){var e=d.unescapeHash(n.location.hash);return e},d.unescapeString=function(t){for(var i,n=t;i=e.unescape(n),i!==n;)n=i;return n},d.unescapeHash=function(e){var t=d.normalizeHash(e);return t=d.unescapeString(t)},d.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},d.setHash=function(e,t){var i,s,o;return t!==!1&&d.busy()?(d.pushQueue({scope:d,callback:d.setHash,args:arguments,queue:t}),!1):(i=d.escapeHash(e),d.busy(!0),s=d.extractState(e,!0),s&&!d.emulated.pushState?d.pushState(s.data,s.title,s.url,!1):n.location.hash!==i&&(d.bugs.setHash?(o=d.getPageUrl(),d.pushState(null,null,o+"#"+i,!1)):n.location.hash=i),d)},d.escapeHash=function(t){var i=d.normalizeHash(t);return i=e.escape(i),d.bugs.hashEscape||(i=i.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),i},d.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=d.unescapeHash(t)},d.setTitle=function(e){var t,i=e.title;i||(t=d.getStateByIndex(0),t&&t.url===e.url&&(i=t.title||d.options.initialTitle));try{n.getElementsByTagName("title")[0].innerHTML=i.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(s){}return n.title=i,d},d.queues=[],d.busy=function(e){if("undefined"!=typeof e?d.busy.flag=e:"undefined"==typeof d.busy.flag&&(d.busy.flag=!1),!d.busy.flag){r(d.busy.timeout);var t=function(){var e,i,n;if(!d.busy.flag)for(e=d.queues.length-1;e>=0;--e)i=d.queues[e],0!==i.length&&(n=i.shift(),d.fireQueueItem(n),d.busy.timeout=a(t,d.options.busyDelay))};d.busy.timeout=a(t,d.options.busyDelay)}return d.busy.flag},d.busy.flag=!1,d.fireQueueItem=function(e){return e.callback.apply(e.scope||d,e.args||[])},d.pushQueue=function(e){return d.queues[e.queue||0]=d.queues[e.queue||0]||[],d.queues[e.queue||0].push(e),d},d.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),d.busy()?d.pushQueue(e):d.fireQueueItem(e),d},d.clearQueue=function(){return d.busy.flag=!1,d.queues=[],d},d.stateChanged=!1,d.doubleChecker=!1,d.doubleCheckComplete=function(){return d.stateChanged=!0,d.doubleCheckClear(),d},d.doubleCheckClear=function(){return d.doubleChecker&&(r(d.doubleChecker),d.doubleChecker=!1),d},d.doubleCheck=function(e){return d.stateChanged=!1,d.doubleCheckClear(),d.bugs.ieDoubleCheck&&(d.doubleChecker=a(function(){return d.doubleCheckClear(),d.stateChanged||e(),!0},d.options.doubleCheckInterval)),d},d.safariStatePoll=function(){var t,i=d.extractState(n.location.href);if(!d.isLastSavedState(i))return t=i,t||(t=d.createStateObject()),d.Adapter.trigger(e,"popstate"),d},d.back=function(e){return e!==!1&&d.busy()?(d.pushQueue({scope:d,callback:d.back,args:arguments,queue:e}),!1):(d.busy(!0),d.doubleCheck(function(){d.back(!1)}),p.go(-1),!0)},d.forward=function(e){return e!==!1&&d.busy()?(d.pushQueue({scope:d,callback:d.forward,args:arguments,queue:e}),!1):(d.busy(!0),d.doubleCheck(function(){d.forward(!1)}),p.go(1),!0)},d.go=function(e,t){var i;if(e>0)for(i=1;e>=i;++i)d.forward(t);else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(i=-1;i>=e;--i)d.back(t)}return d},d.emulated.pushState){var f=function(){};d.pushState=d.pushState||f,d.replaceState=d.replaceState||f}else d.onPopState=function(t,i){var s,o,a=!1,r=!1;return d.doubleCheckComplete(),s=d.getHash(),s?(o=d.extractState(s||n.location.href,!0),o?d.replaceState(o.data,o.title,o.url,!1):(d.Adapter.trigger(e,"anchorchange"),d.busy(!1)),d.expectedStateId=!1,!1):(a=d.Adapter.extractEventData("state",t,i)||!1,r=a?d.getStateById(a):d.expectedStateId?d.getStateById(d.expectedStateId):d.extractState(n.location.href),r||(r=d.createStateObject(null,null,n.location.href)),d.expectedStateId=!1,d.isLastSavedState(r)?(d.busy(!1),!1):(d.storeState(r),d.saveState(r),d.setTitle(r),d.Adapter.trigger(e,"statechange"),d.busy(!1),!0))},d.Adapter.bind(e,"popstate",d.onPopState),d.pushState=function(t,i,n,s){if(d.getHashByUrl(n)&&d.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(s!==!1&&d.busy())return d.pushQueue({scope:d,callback:d.pushState,args:arguments,queue:s}),!1;d.busy(!0);var o=d.createStateObject(t,i,n);return d.isLastSavedState(o)?d.busy(!1):(d.storeState(o),d.expectedStateId=o.id,p.pushState(o.id,o.title,o.url),d.Adapter.trigger(e,"popstate")),!0},d.replaceState=function(t,i,n,s){if(d.getHashByUrl(n)&&d.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(s!==!1&&d.busy())return d.pushQueue({scope:d,callback:d.replaceState,args:arguments,queue:s}),!1;d.busy(!0);var o=d.createStateObject(t,i,n);return d.isLastSavedState(o)?d.busy(!1):(d.storeState(o),d.expectedStateId=o.id,p.replaceState(o.id,o.title,o.url),d.Adapter.trigger(e,"popstate")),!0};if(o){try{d.store=h.parse(o.getItem("History.store"))||{}}catch(m){d.store={}}d.normalizeStore()}else d.store={},d.normalizeStore();d.Adapter.bind(e,"beforeunload",d.clearAllIntervals),d.Adapter.bind(e,"unload",d.clearAllIntervals),d.saveState(d.storeState(d.extractState(n.location.href,!0))),o&&(d.onUnload=function(){var e,t;try{e=h.parse(o.getItem("History.store"))||{}}catch(i){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in d.idToState)d.idToState.hasOwnProperty(t)&&(e.idToState[t]=d.idToState[t]);for(t in d.urlToId)d.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=d.urlToId[t]);for(t in d.stateToId)d.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=d.stateToId[t]);d.store=e,d.normalizeStore(),o.setItem("History.store",h.stringify(e))},d.intervalList.push(l(d.onUnload,d.options.storeInterval)),d.Adapter.bind(e,"beforeunload",d.onUnload),d.Adapter.bind(e,"unload",d.onUnload)),d.emulated.pushState||(d.bugs.safariPoll&&d.intervalList.push(l(d.safariStatePoll,d.options.safariPollInterval)),("Apple Computer, Inc."===s.vendor||"Mozilla"===(s.appCodeName||""))&&(d.Adapter.bind(e,"hashchange",function(){d.Adapter.trigger(e,"popstate")}),d.getHash()&&d.Adapter.onDomLoad(function(){d.Adapter.trigger(e,"hashchange")})))},d.init()}(window);