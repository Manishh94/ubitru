var initSearch=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+_GSCE_CX;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i),$("#cse-search-box-form-id").submit(function(){var t=$("#cse-search-input-box-id-1"),i=$("#cse-search-input-box-id-2"),n=t.val()||i.val();e.dispatch("setSearchText",n),e.dispatch("setSearchEngineLinkContainers",null);var s=google.search.cse.element.getElement("searchresults-only0");return""==n?s.clearAllResults():(""==t.val()&&""!=i.val()&&(t.val(i.val()),t.focus()),$("#cse-middle-search-container").hide(),i.val(""),s.execute(n)),!1})};$(function(){$(".bxslider").bxSlider({minSlides:2,maxSlides:3,slideWidth:170,slideMargin:10,preloadImages:"visible",pager:!1}),$(".bxslider").show();var e=new MMEngine(null,_MM_USER_INFO,"cse-mm-search-bar-icon-wrapper","cse-mm-search-bar-icon");_UNIVERSITY_PAGE_VISITED&&($(".mm-signup-link").click(),$("#mm-auth-modal").modal("show")),setInterval(function(){e.onUserSessionChanged(void 0!=$.cookie("signed_in"))},500),setInterval(function(){e.onCheckUserMessages($.cookie("user_messages_count"))},2e3),initSearch(e),setInterval(function(){var t=$(".gsc-result-info");t.length>0&&(0==$("#mm-refresh-label").length&&($("<div/>",{id:"mm-refresh-label"}).appendTo(t),e.dispatch("setSearchEngineLinkContainers",$(".gsc-resultsRoot div.gs-title:not(.gsc-thumbnail-left)"))),e.getMMBox().is(":hidden")&&(e.getMMBox().insertAfter(t),e.getMMBox().fadeIn(500)))},100)}),$(document).click(function(){});