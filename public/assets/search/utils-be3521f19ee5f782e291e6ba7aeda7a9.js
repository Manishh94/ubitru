function formatMoney(e){var t=parseFloat(e);return isNaN(t)?"N/A":"$"+t.toFixed(2)}function uniqueBy(e,t){var i={},n=[];return e.forEach(function(e){var s=t(e);i[s]||(n.push(e),i[s]=!0)}),n}function isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}jQuery.fn.center=function(){return this.each(function(){var e=$(this),t=e.height(),i=e.width(),n=$(window).width(),s=$(window).height(),a=(n-i)/2,r=(s-t)/2.5,o={position:"absolute",left:a+"px",top:r+"px"};e.css(o)})},$(function(){$("#mm-info-display").click(function(){$(this).is(":checked")&&$.cookie("skip-info-before-shopping",1,{expires:1e4})}),$(".mm-orange-button").click(function(){$("#mm-info-before-shopping").fadeOut(100)})});