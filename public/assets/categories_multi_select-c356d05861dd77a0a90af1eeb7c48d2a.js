$(function(){if($("select#root_category, select#add-category").length){var t=function(t,e){var i=t.data("input-name"),n='input[name="'+i+'"][value="'+e+'"]';$(t).find(n).remove(),$(t).find(".category_tag_id_"+e).fadeOut("fast",function(){$(this).remove()})},e=function(e,i,n){if($(e).find(".category_tag_id_"+i).stop(!0,!0),!$(e).find(".category_tag_id_"+i).length){var o=$('<div class="category_tag_id_'+i+'" >').addClass("tag").html("<span>"+n+"</span>").appendTo(e).hide().fadeIn("fast");$('<a href="#" class="close">x</a>').appendTo(o).click(function(n){n.preventDefault(),t(e,i)})}},i=function(t,i,n){console.log(t),console.log(i),console.log(n);var o=t.attr("data-input-name"),a='input[name="'+o+'"][value="'+i+'"]';$(a).length||$('<input name="'+o+'" value="'+i+'" type="hidden" />').appendTo(t),e(t,i,n)},n=function(){$(".hidden-categories .checkbox input").each(function(){var t=$(this);if(t.val()){var i=$(this).parents(".inputs").find(".categories-tags");i.length||(i=$(this).parents("form").find(".categories-tags")),e(i,t.val(),t.closest(".checkbox").find("label").text())}})};$(".add-category-button").click(function(t){t.preventDefault();var e=$(this).parent().find("option:selected:first");if(e.length&&e.val()){var n=$(this).parents(".inputs").find(".categories-tags");n.length||(n=$(this).parents("form").find(".categories-tags")),i(n,e.val(),e.text())}}),n(),$("select#add-category, select#second_level_category, select#root_category, select#first_level_category").multiselect({header:!1,selectedList:1,height:"auto",minWidth:"239",multiple:!1,classes:"multiselect-button multiselect-dropdown",position:{my:"left top",at:"left top"}})}});