$(".tag .close, .tag .preferred").live("click",function(){showLoader($("#affiliates-form-warp"))}),$(".add-advertiser-button").live("click",function(a){a.preventDefault();var e=$(this).parent().find("option:selected:first");if(e.length&&e.val()){var t=e.val();if(window.selected_category_id){var i;$(this).hasClass("add-cj")&&(i="cj"),$(this).hasClass("add-avant")&&(i="avant"),$(this).hasClass("add-linkshare")&&(i="linkshare"),i&&($("."+i+"_"+t).length||($.getScript(add_advertiser_mapping_url.replace("__category__id__",window.selected_category_id).replace("__type__",i).replace("__advertiser_id__",t)),showLoader($("#affiliates-form-warp"))))}}});