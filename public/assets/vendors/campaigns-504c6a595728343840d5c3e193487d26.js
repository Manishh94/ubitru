function resolveMinMaxScoreVisibility(){var t=$("select#campaign_score_range").val(),e="custom"==t;$("#score-range-custom").toggle(e),$("#score-range-custom input").attr("disabled",!e),t&&2==t.split("-").length&&($("#campaign_score_min").data("changed",!0).val(t.split("-")[0]),$("#campaign_score_max").data("changed",!0).val(t.split("-")[1]))}function setCampaignStatusIcons(){$("button.campaign-status-multiselect span:last-child, div.campaign-status-multiselect ul.ui-multiselect-checkboxes li label span:last-child").each(function(){var t=$(this).text().split(" ").join("_").toLowerCase();$(this).removeClass().addClass(t)})}$(document).ready(resolveMinMaxScoreVisibility),$("select#campaign_score_range").change(resolveMinMaxScoreVisibility),$(function(){$("select#campaign_duration, select#campaign_score_range, select#campaign_offer_id").multiselect({header:!1,selectedList:1,height:"auto",minWidth:$(".simple_form.thinner").length?"190":"280",multiple:!1,classes:"multiselect-button multiselect-dropdown",position:{my:"left top",at:"left top"}}),$("select#campaign_status").multiselect({header:!1,selectedList:1,height:"auto",minWidth:$(".simple_form.thinner").length?"110":"",multiple:!1,classes:"multiselect-button multiselect-dropdown campaign-status-multiselect",position:{my:"left top",at:"left top"},create:function(){setCampaignStatusIcons()}}),$(".simple_form.thinner").length&&$("select#add-category, select#second_level_category, select#root_category, select#first_level_category").multiselect({header:!1,selectedList:1,height:"auto",minWidth:"143",maxWidth:"143",multiple:!1,classes:"multiselect-button multiselect-dropdown",position:{my:"left top",at:"left top"}});var t=function(t,e){var i,n;"delete"==e?(i="DELETE",n="/campaigns/"+t):(i="GET",n="/campaigns/"+t+"/"+e),$.ajax({url:n,type:i,dataType:"script"})};$("select#campaign_status").change(function(){var e=$(this).val(),i=$(this).data("campaign");if($("select#campaign_status").multiselect("refresh"),setCampaignStatusIcons(),"delete"==e){var n=window.confirm("Are you sure?");if(1!=n)return;t(i,e)}else t(i,e)})});