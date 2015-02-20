function MMBoxWidget(t){this.engine=t,this.messages=[],this.numListingsToDisplay=3,this.isExpanded=!1,this.currentSearchText="",this.currentData=[],this.widget=$("#mm-box-container"),this.listingsTable=$(".mm-listings"),this.currentXhr=null,$("#mm-info-before-shopping").center(),this.bindListeners()}MMBoxWidget.prototype.bindListeners=function(){var t=this;$(".mm_data_company_name").trunk8(),$(".mm_data_company_address").trunk8(),$(".mm_data_offer_name").trunk8({lines:2}),$(".mm_data_coupon_code").trunk8({width:10});var e=$.proxy(function(){this.engine.get("icons","isPopupVisible")||this.showMoreOffers()},this);$("#mm-next-offers-btn").click(e),$("#mm-clear-message-button").click(function(){$.post(t.engine.urlFor("/mm_box_remove_user_message"),{id:t.messages[0].id},function(e){e&&(t.messages.shift(),t.messages.length>0?$("#mm-current-message").html(t.messages[0].message):$("#mm-box-message-container").slideUp())})}),isMobile()&&$(window).on("shake",e)},MMBoxWidget.prototype.clearResults=function(){$(".mm-listing").remove(),this.isExpanded=!1,$("#mm-next-offers-label").text("More Deals"),this.currentData=[],this.listingsTable.fadeOut()},MMBoxWidget.prototype.onCheckUserMessages=function(){0==this.messages.length&&$.get(this.engine.urlFor("/mm_box_get_user_messages"),$.proxy(function(t){if(t&&t.length){this.messages=t,console.log(this.messages);var e=$("#mm-box-message-container");e.is(":hidden")&&($("#mm-current-message").html(this.messages[0].message),e.slideDown())}},this))},MMBoxWidget.prototype.setSearchText=function(t){this.engine.isUserLoggedIn&&""!=t&&t!=this.currentSearchText&&(this.clearResults(),this.currentSearchText=t,this.loadMerchantsData())},MMBoxWidget.prototype.loadMerchantsData=function(){this.currentXhr&&this.currentXhr.abort(),this.currentXhr=$.get(this.engine.urlFor("/mm_box_search"),{search:this.currentSearchText},$.proxy(function(t){this.appendData(t,!0),this.currentXhr=null},this))},MMBoxWidget.prototype.appendData=function(t,e){this.currentData=e?t.concat(this.currentData):this.currentData.concat(t),this.currentData=uniqueBy(this.currentData,function(t){return t.company_name}),this.currentData.length&&(this.listingsTable.fadeIn(),this.buildListings(),this.calculateTotalMoney())},MMBoxWidget.prototype.buildListings=function(){for(var t=0;t<this.currentData.length;t++){var e=this.currentData[t],i="mm-listing-"+e.id,n=$("#"+i);if(0==n.length){var s=$("#mm-listing-template");n=s.clone(!0).addClass("mm-listing"),n.attr("id",i),s.closest("tbody").append(n)}t<this.numListingsToDisplay||this.isExpanded?n.removeClass("hide"):n.addClass("hide");for(var o in e)n.find(".mm_data_"+o).html(e[o]);if(n.find(".mm_data_company_name").trunk8("update",e.company_name.replace("Affiliate Program","")),e.company_address&&n.find(".mm_data_company_address").trunk8("update",e.company_address),n.find(".mm_data_offer_name").trunk8("update",e.offer_name),n.find(".mm_data_coupon_code").trunk8("update",e.coupon_code),e.offer_buy_url)n.find(".mm-shop-now-btn, .mm_data_company_name").attr("mm-href",e.offer_buy_url),n.find(".mm_data_company_name").addClass("mm-active-link").end().find(".mm-shop-now-btn").removeClass("hide"),"No coupons"!=e.coupon_code&&n.find(".mm_data_coupon_code").addClass("mm-active-link").end().find(".mm_data_company_name, .mm_data_coupon_code, .mm-shop-now-btn").attr("mm-href-popup",e.company_coupons_url);else if(isMobile()?(n.find(".mm-call-now-btn").attr("href","tel:"+e.company_phone),n.find(".mm-call-now-btn").removeClass("hide").html(e.company_phone)):(n.find(".mm-call-now-btn").attr({tooltip:e.company_phone}),n.find(".mm-call-now-btn").tipsy({title:"tooltip"}),n.find(".mm-call-now-btn").removeClass("hide").html("view number")),e.merchant_email){n.find(".mm_data_company_name").addClass("mm-active-link").attr("data-toggle","modal").attr("href","#mm-merchant-modal");var a=this;n.find(".mm_data_company_name").click(function(){for(var t=$(this).parent().parent(),e=t.attr("id").replace("mm-listing-",""),i=null,n=0;n<a.currentData.length;n++)if(e==a.currentData[n].id){i=a.currentData[n];break}for(var s in i)$("#mm-merchant-modal").find(".mm_data_"+s).html(i[s]);$("#mm-merchant-modal").find(".mm_data_merchant_email").html("Email: "+i.merchant_email).end().find(".mm_data_company_phone").html("Phone: "+i.company_phone).end().find(".mm_data_merchant_review_url").attr("href",i.merchant_review_url).end().find(".mm_data_offer_service_url").attr("href",i.offer_service_url)})}if(!isNaN(e.user_money)){var r=parseFloat(e.user_money);n.find(".mm_data_user_money").html(formatMoney(r))}n.find("[mm-href], .mm-call-now-btn").attr("mm-merchant-id",e.id)}},MMBoxWidget.prototype.calculateTotalMoney=function(){for(var t=0,e=0;e<this.currentData.length;e++){var i=this.currentData[e];isNaN(i.user_money)||(t+=parseFloat(i.user_money))}$("#mm-total-money").html("Your Cash Total: "+formatMoney(t))},MMBoxWidget.prototype.showMoreOffers=function(){this.isExpanded=!this.isExpanded,$("#mm-next-offers-label").text(this.isExpanded?"Show Less":"More Deals"),this.buildListings()},MMBoxWidget.prototype.getCurrentData=function(){return this.currentData},MMBoxWidget.prototype.getSearchString=function(){return this.currentSearchText},MMBoxWidget.prototype.onUserLoggedIn=function(t){$("#mm_user_balance").html(formatMoney(t.balance)),$("#mm_user_score").html(t.score),$("#mm-box-controls-logged-in").removeClass("hide"),$("#mm-box-controls-not-logged-in").addClass("hide")},MMBoxWidget.prototype.onUserLoggedOut=function(){this.currentXhr&&this.currentXhr.abort(),this.messages=[],$("#mm-box-message-container").slideUp(),$("#mm_user_score").html("--"),$("#mm-box-controls-logged-in").addClass("hide"),$("#mm-box-controls-not-logged-in").removeClass("hide"),this.currentSearchText="",this.clearResults()};