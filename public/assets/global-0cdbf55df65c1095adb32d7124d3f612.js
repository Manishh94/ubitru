function initFlashMessagesCloseButtons(){$(".close").remove(),$(this).find(".close");var e=document.createElement("div");$(e).addClass("close").prependTo("#flash .wrapper div").click(function(){$(this).closest(".wrapper").fadeOut("fast")})}function simpleAjaxPagination(e){if($(e+" .pagination a,"+e+" th a").live("click",function(t){return t.preventDefault(),History.pushState({loaderTargetSelector:e},document.title,this.href),!1}),!stateEventAttached){stateEventAttached=!0,$(window).bind("statechange",function(){var t=History.getState();showLoader($(t.data.loaderTargetSelector||e)),$.getScript(t.url)});var t=History.getState();t.url!=location.href&&(showLoader($(t.data.loaderTargetSelector||e)),$.getScript(t.url))}}function initDialog(e,t,i){i=i||{},$(e).dialog($.extend({autoOpen:!1,width:660,minWidth:200,minHeight:200},i)),$(t).live("click",function(t){t.preventDefault();var n=$(e);n.dialog("open"),i.showLoader&&(n.html(""),showLoader(n)),i.callback&&i.callback.call(this)})}function initTabsNav(e,t){var i=function(i){var n=$("#"+i+t),s=$("#"+i+"-tab-link");if(n.length&&s.length){var o=$(".tab-content:visible");o.length&&o[0].id.replace(new RegExp(t+"$"),"")==i||(e.find("li").removeClass("active"),s.closest("li").addClass("active"),o.length&&o.parent().height(o.parent().height()),$(".tab-content").hide(),location.hash=i,n.fadeIn(),o.length&&o.parent().css("height","auto"))}};$(function(){if(location.hash){var e=location.hash.replace(/^#/,"");i(e)}}),e.find("li").live("click",function(e){e.preventDefault();var t=$(this).find("a")[0].id.replace("-tab-link","");i(t)})}function isInView(e){var t=$(document).scrollTop(),i=$(e).offset().top,n=window.innerHeight&&window.innerHeight<$(window).height()?window.innerHeight:$(window).height();return i>t&&$(e).height()+i<t+n}$(function(){availableTags=new Array,$.ajax({url:"/muddleme-search",success:function(e){for(console.log(e),i=0;i<e.length;i++)availableTags.push(e[i])}}),$(".search").on("keydown",function(){}),$(".search").autocomplete({source:availableTags})}),$(function(){initFlashMessagesCloseButtons(),$("#experience-btn").click(function(){window.location.href="/experience"}),$("#referral-btn, #refer-a-friend-btn").click(function(){window.location.href="/referral"}),$("#iac-register-btn").click(function(){window.location.href="/signup"}),$("#business-btn").click(function(){window.location.href="/company"}),$("#try-now-btn, #start-now, .browser-logo-enabled").click(function(){window.location.href="/mm-extension"}),$("#try-now-btn-lite").click(function(){window.location.href="/mm-extension-lite"}),$("#business-signup-offer1").click(function(){window.location.href="/company/signup_original"}),$("#business-signup-offer2").click(function(){window.location.href="/company/signup_premium"}),$("#experience-mbook-zoom").mouseover(function(){$("#experience-popup3").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-imac-zoom").mouseover(function(){$("#experience-popup2").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-monitor3-zoom").mouseover(function(){$("#experience-popup1").fadeIn(500),$("#experience-popup-backdrop").fadeIn(500)}),$("#experience-popup1-close, #experience-popup2-close, #experience-popup3-close").click(function(){$(this).parent().fadeOut(300),$("#experience-popup-backdrop").fadeOut(300)})});var stateEventAttached=!1;