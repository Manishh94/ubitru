function showDetailsBox(t){t.fadeIn(300)}function closeDetailsBox(){$(".details-box").fadeOut(300)}$(function(){$(".details-box .details-overlay, .details-box .details-close-button").live("click",function(){closeDetailsBox()})});