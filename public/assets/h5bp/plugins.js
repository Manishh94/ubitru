window.log=function(){if(log.history=log.history||[],log.history.push(arguments),this.console){arguments.callee=arguments.callee.caller;var e=[].slice.call(arguments);"object"==typeof console.log?log.apply.call(console.log,console,e):console.log.apply(console,e)}},function(e){function t(){}for(var i,n="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(",");i=n.pop();)e[i]=e[i]||t}(function(){try{return console.log(),window.console}catch(e){return window.console={}}}());