function initFlashMessagesCloseButtons(){$(".close").remove(),$(this).find(".close");var t=document.createElement("div");$(t).addClass("close").prependTo("#flash .wrapper div").click(function(){$(this).closest(".wrapper").fadeOut("fast")})}function simpleAjaxPagination(t){if($(t+" .pagination a,"+t+" th a").live("click",function(e){return e.preventDefault(),History.pushState({loaderTargetSelector:t},document.title,this.href),!1}),!stateEventAttached){stateEventAttached=!0,$(window).bind("statechange",function(){var e=History.getState();showLoader($(e.data.loaderTargetSelector||t)),$.getScript(e.url)});var e=History.getState();e.url!=location.href&&(showLoader($(e.data.loaderTargetSelector||t)),$.getScript(e.url))}}function initDialog(t,e,i){i=i||{},$(t).dialog($.extend({autoOpen:!1,width:660,minWidth:200,minHeight:200},i)),$(e).live("click",function(e){e.preventDefault();var n=$(t);n.dialog("open"),i.showLoader&&(n.html(""),showLoader(n)),i.callback&&i.callback.call(this)})}function initTabsNav(t,e){var i=function(i){var n=$("#"+i+e),o=$("#"+i+"-tab-link");if(n.length&&o.length){var a=$(".tab-content:visible");a.length&&a[0].id.replace(new RegExp(e+"$"),"")==i||(t.find("li").removeClass("active"),o.closest("li").addClass("active"),a.length&&a.parent().height(a.parent().height()),$(".tab-content").hide(),location.hash=i,n.fadeIn(),a.length&&a.parent().css("height","auto"))}};$(function(){if(location.hash){var t=location.hash.replace(/^#/,"");i(t)}}),t.find("li").live("click",function(t){t.preventDefault();var e=$(this).find("a")[0].id.replace("-tab-link","");i(e)})}function isInView(t){var e=$(document).scrollTop(),i=$(t).offset().top,n=window.innerHeight&&window.innerHeight<$(window).height()?window.innerHeight:$(window).height();return i>e&&$(t).height()+i<e+n}$(function(){availableTags=new Array,$.ajax({url:"/muddleme-search",success:function(t){for(console.log(t),i=0;i<t.length;i++)availableTags.push(t[i])}}),$(".search").on("keydown",function(){}),$(".search").autocomplete({source:availableTags})}),$(function(){initFlashMessagesCloseButtons(),$("#experience-btn").click(function(){window.location.href="/experience"}),$("#referral-btn, #refer-a-friend-btn").click(function(){window.location.href="/referral"}),$("#iac-register-btn").click(function(){window.location.href="/signup"}),$("#business-btn").click(function(){window.location.href="/company"}),$("#try-now-btn, #start-now, .browser-logo-enabled").click(function(){window.location.href="/mm-extension"}),$("#try-now-btn-lite").click(function(){window.location.href="/mm-extension-lite"}),$("#business-signup-offer1").click(function(){window.location.href="/company/signup_original"}),$("#business-signup-offer2").click(function(){window.location.href="/company/signup_premium"}),$("#experience-mbook-zoom").mouseover(function(){$("#experience-popup3").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-imac-zoom").mouseover(function(){$("#experience-popup2").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-monitor3-zoom").mouseover(function(){$("#experience-popup1").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-popup1-close, #experience-popup2-close, #experience-popup3-close").click(function(){$(this).parent().fadeOut(300),$("#experience-popup-backdrop").fadeOut(300)})});var stateEventAttached=!1;