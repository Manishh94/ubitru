$(function(){$("table .actns-wrap .actns").live("mouseenter",function(){var e=$(this);e.data("leaveTimer")&&window.clearTimeout(e.data("leaveTimer")),e.data("styled")||e.data("styled",!0),e.closest("tr").addClass("highlight"),e.closest("td.actns-cell").addClass("hover"),$(this).find(".links").slideDown("fast")});var e=function(e){e.closest("tr").removeClass("highlight"),e.find(".links").slideUp("fast",function(){e.closest("td.actns-cell").removeClass("hover")})};$("table .actns-wrap .actns").live("mouseleave",function(){var t=$(this);t.data("leaveTimer",window.setTimeout(function(){e(t)},50))})});