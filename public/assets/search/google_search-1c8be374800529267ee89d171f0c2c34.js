var initSearch=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+_GSCE_CX;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i),$("#cse-search-box-form-id").submit(function(){var e=$("#cse-search-input-box-id-1"),i=$("#cse-search-input-box-id-2"),n=e.val()||i.val();t.dispatch("setSearchText",n),t.dispatch("setSearchEngineLinkContainers",null);var s=google.search.cse.element.getElement("searchresults-only0");return""==n?s.clearAllResults():(""==e.val()&&""!=i.val()&&(e.val(i.val()),e.focus()),$("#cse-middle-search-container").hide(),$("#cse-slider-container").hide(),i.val(""),s.execute(n)),!1})};$(function(){$(".bxslider").bxSlider({minSlides:2,maxSlides:isMobile()?2:6,slideWidth:isMobile()?110:140,slideMargin:8,preloadImages:"visible",pager:!1});var t={enableHighAccuracy:!0,timeout:25e3,maximumAge:0},e=function(t){$.get("/mm_check_coupons_by_location?lat="+t.coords.latitude+"&lng="+t.coords.longitude)},i=function(){};navigator.geolocation&&navigator.geolocation.getCurrentPosition(e,i,t);var n=new MMEngine(null,_MM_USER_INFO,"cse-mm-search-bar-icon-wrapper","cse-mm-search-bar-icon");_UNIVERSITY_PAGE_VISITED&&($(".mm-signup-link").click(),$("#mm-auth-modal").modal("show")),setInterval(function(){n.onUserSessionChanged(void 0!=$.cookie("signed_in"))},500),setInterval(function(){n.onCheckUserMessages($.cookie("user_messages_count"))},2e3),initSearch(n),setInterval(function(){var t=$(".gsc-result-info");t.length>0&&(0==$("#mm-refresh-label").length&&($("<div/>",{id:"mm-refresh-label"}).appendTo(t),n.dispatch("setSearchEngineLinkContainers",$(".gsc-resultsRoot div.gs-title:not(.gsc-thumbnail-left)"))),n.getMMBox().is(":hidden")&&(n.getMMBox().insertAfter(t),n.getMMBox().fadeIn(500)))},100)}),$(document).click(function(){});