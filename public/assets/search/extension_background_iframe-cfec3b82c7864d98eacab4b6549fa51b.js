var SHARED={};SHARED.WEB_APP_HOST="muddleme.com",SHARED.EXTENSION_ORIGIN="http://www.google.com",SHARED.EXTENSION_ORIGIN_SECURE="https://www.google.com",SHARED.SIGNED_IN_COOKIE_NAME="signed_in",SHARED.CHECK_USER_SESSION_COMMAND="extension.check.user.session.",SHARED.GET_USER_INFO_COMMAND="extension.get.user.info",SHARED.LOGIN_COMMAND="extension.login",SHARED.LOGOUT_COMMAND="extension.logout",SHARED.ACTIVATE_MERCHANT_COMMAND="extension.activate.merchant",SHARED.SEARCH_COMMAND="extension.search",SHARED.SEARCH_BY_LINKS_COMMAND="extension.search.by.links",$(function(){function e(e){var t=e.command;$.ajax(e.request.url,{type:e.request.method,data:e.request.body||e.request.params}).done(function(e){window.parent.postMessage({command:t,response:e},i)})}function t(t){if(t.origin===SHARED.EXTENSION_ORIGIN||t.origin===SHARED.EXTENSION_ORIGIN_SECURE){i=t.origin;var n=t.data;switch(n.command){case SHARED.CHECK_USER_SESSION_COMMAND:var s=$.cookie(SHARED.SIGNED_IN_COOKIE_NAME);window.parent.postMessage({command:n.command,response:void 0!=s},i);break;case SHARED.GET_USER_INFO_COMMAND:case SHARED.LOGIN_COMMAND:case SHARED.LOGOUT_COMMAND:case SHARED.SEARCH_COMMAND:case SHARED.SEARCH_BY_LINKS_COMMAND:case SHARED.ACTIVATE_MERCHANT_COMMAND:e(n)}}}var i;window.addEventListener("message",t,!1)});