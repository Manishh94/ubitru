function MMBoxWidget(e){this.engine=e,this.numListingsToDisplay=$(".mm-listing").length,this.currentSearchText="",this.currentPage=0,this.currentData=[],this.widget=$("#mm-box-container"),this.listingsTable=$(".mm-listings"),this.currentXhr=null,this.bindListeners()}function MMIconsWidget(e){this.engine=e,this.searchEngineLinkContainers=null,this.currentXhr=null,this.bindListeners(),this.currentOfferIndex=0}function MMEngine(e,t,i,n){this.BASE_URL=e||"",this.currentUserInfo=t,this.isUserLoggedIn=null!=t;var s=$(".mm-search-bar-icon").addClass(n).removeClass("hide");$("."+i).each($.proxy(function(e,t){$(t).append(e?s.clone():s)},this)),this.bindListeners(),this.widgets={box:new MMBoxWidget(this),icons:new MMIconsWidget(this)}}MMBoxWidget.prototype.bindListeners=function(){$(".mm_data_company_name").trunk8(),$(".mm_data_company_address").trunk8(),$(".mm_data_offer_name").trunk8({lines:2}),$(".mm_data_coupon_code").trunk8({width:10}),isMobile()||$(".mm-call-now-btn").tipsy({title:"tooltip"});var e=$.proxy(function(){this.engine.get("icons","isPopupVisible")||this.showNextOffers()},this);$("#mm-next-offers-btn").click(e),isMobile()&&$(window).on("shake",e)},MMBoxWidget.prototype.clearResults=function(){this.currentPage=0,this.currentData=[],this.listingsTable.fadeOut()},MMBoxWidget.prototype.setSearchText=function(e){this.engine.isUserLoggedIn&&""!=e&&e!=this.currentSearchText&&(this.clearResults(),this.currentSearchText=e,this.loadMerchantsData())},MMBoxWidget.prototype.loadMerchantsData=function(){this.currentXhr&&this.currentXhr.abort(),this.currentXhr=$.get(this.engine.urlFor("/mm_box_search"),{search:this.currentSearchText},$.proxy(function(e){this.appendData(e,!0),this.currentXhr=null},this))},MMBoxWidget.prototype.appendData=function(e,t){this.currentData=t?e.concat(this.currentData):this.currentData.concat(e),this.currentData=uniqueBy(this.currentData,function(e){return e.company_name}),this.currentData.length&&(this.listingsTable.fadeIn(),this.buildCurrentPage(),this.calculateTotalMoney())},MMBoxWidget.prototype.buildCurrentPage=function(){for(var e=0;e<this.numListingsToDisplay;e++){var t=this.currentData[e+this.currentPage*this.numListingsToDisplay],i=$("#mm-listing-"+e);if(t){i.removeClass("hide").find("[mm-href]").removeAttr("mm-href").end().find("[mm-href-popup]").removeAttr("mm-href-popup"),i.find(".mm-active-link").removeClass("mm-active-link").end().find(".mm-call-now-btn, .mm-shop-now-btn").addClass("hide");for(var n in t)i.find(".mm_data_"+n).html(t[n]);if(i.find(".mm_data_company_name").trunk8("update",t.company_name.replace("Affiliate Program","")),t.company_address&&i.find(".mm_data_company_address").trunk8("update",t.company_address),i.find(".mm_data_offer_name").trunk8("update",t.offer_name),i.find(".mm_data_coupon_code").trunk8("update",t.coupon_code),t.offer_buy_url?(i.find(".mm-shop-now-btn, .mm_data_company_name").attr("mm-href",t.offer_buy_url),i.find(".mm_data_company_name").addClass("mm-active-link").end().find(".mm-shop-now-btn").removeClass("hide"),"No coupons"!=t.coupon_code&&i.find(".mm_data_coupon_code").addClass("mm-active-link").end().find(".mm_data_company_name, .mm_data_coupon_code, .mm-shop-now-btn").attr("mm-href-popup",t.company_coupons_url)):(isMobile()?i.find(".mm-call-now-btn").attr("href","tel:"+t.company_phone):i.find(".mm-call-now-btn").attr({tooltip:t.company_phone}),i.find(".mm-call-now-btn").removeClass("hide").html(t.company_phone)),!isNaN(t.user_money)){var s=parseFloat(t.user_money);i.find(".mm_data_user_money").html(formatMoney(s))}}else i.addClass("hide")}},MMBoxWidget.prototype.calculateTotalMoney=function(){for(var e=0,t=0;t<this.currentData.length;t++){var i=this.currentData[t];isNaN(i.user_money)||(e+=parseFloat(i.user_money))}$("#mm-total-money").html("Your Cash Total: "+formatMoney(e))},MMBoxWidget.prototype.showNextOffers=function(){this.currentPage++,this.currentPage=this.currentData.length/this.numListingsToDisplay<=this.currentPage?0:this.currentPage,this.buildCurrentPage()},MMBoxWidget.prototype.getCurrentData=function(){return this.currentData},MMBoxWidget.prototype.onUserLoggedIn=function(e){$("#mm_user_balance").html(formatMoney(e.balance)),$("#mm_user_score").removeClass("mm-user-score-small").html(e.score),$("#mm-box-controls-logged-in").removeClass("hide"),$("#mm-box-controls-not-logged-in").addClass("hide")},MMBoxWidget.prototype.onUserLoggedOut=function(){this.currentXhr&&this.currentXhr.abort(),$("#mm_user_score").addClass("mm-user-score-small").html("N/A"),$("#mm-box-controls-logged-in").addClass("hide"),$("#mm-box-controls-not-logged-in").removeClass("hide"),this.currentSearchText="",this.clearResults()},MMIconsWidget.prototype.bindListeners=function(){var e=$.proxy(function(){this.isPopupVisible()&&this.setNextOffer(null)},this);$(".mm-popup-next-offer").click(e),isMobile()&&$(window).on("shake",e)},MMIconsWidget.prototype.isPopupVisible=function(){return 0==$("#mm-offer-modal").is(":hidden")},MMIconsWidget.prototype.setNextOffer=function(e){var t=this.engine.get("box","getCurrentData");this.currentOfferIndex=this.currentOfferIndex>t.length-1?0:this.currentOfferIndex;for(var i in t){var n="OFFER_SEARCH"==t[i].source||"URL_SEARCH"==t[i].source;if(n)if(e){if(e==t[i].company_name){this.setMerchantData(t[i]),this.currentOfferIndex=i;break}}else if(i>=this.currentOfferIndex){this.setMerchantData(t[i]),this.currentOfferIndex=i;break}}this.currentOfferIndex++},MMIconsWidget.prototype.setSearchEngineLinkContainers=function(e){this.searchEngineLinkContainers=e,this.engine.isUserLoggedIn&&null!=this.searchEngineLinkContainers&&(this.clearResults(),this.loadMerchantsByUrls())},MMIconsWidget.prototype.clearResults=function(){$(".mm-affiliate-icon").remove()},MMIconsWidget.prototype.loadMerchantsByUrls=function(){this.currentXhr&&this.currentXhr.abort();var e=[];this.searchEngineLinkContainers.each(function(){e.push($(this).find("a").attr("href"))}),this.currentXhr=$.get(this.engine.urlFor("/mm_affiliate_merchants_search"),$.param({links:e}),$.proxy(function(e){this.onMerchantsByUrlsDataLoaded(e),this.currentXhr=null},this))},MMIconsWidget.prototype.onMerchantsByUrlsDataLoaded=function(e){for(var t=[],i=0;i<e.length;i++)e[i]&&(t.push(e[i]),this.insertMerchantIcon(i,e[i].company_name));this.engine.dispatch("appendData",t)},MMIconsWidget.prototype.setMerchantData=function(e){var t=$("#mm-offer-modal");for(var i in e)t.find(".mm_data_"+i).html(e[i]);t.find(".mm-popup-shop-now").attr("mm-href",e.offer_buy_url),"No coupons"!=e.coupon_code?(t.find(".mm_data_coupon_code").addClass("mm-active-link"),t.find(".mm-popup-shop-now, .mm_data_coupon_code").attr("mm-href-popup",e.company_coupons_url)):(t.find(".mm_data_coupon_code").removeClass("mm-active-link"),t.find(".mm-popup-shop-now, .mm_data_coupon_code").removeAttr("mm-href-popup"))},MMIconsWidget.prototype.insertMerchantIcon=function(e,t){var i=$("<div/>",{"class":"mm-affiliate-icon","data-toggle":"modal",href:"#mm-offer-modal"});$(this.searchEngineLinkContainers[e]).prepend(i),i.click($.proxy(function(){this.setNextOffer(t)},this))},MMIconsWidget.prototype.onUserLoggedOut=function(){this.currentXhr&&this.currentXhr.abort(),this.searchEngineLinkContainers=null,this.clearResults()},MMEngine.prototype.urlFor=function(e){return this.BASE_URL+e},MMEngine.prototype.getMMBox=function(){return this.widgets.box.widget},MMEngine.prototype.bindListeners=function(){$("#mm-auth-form").bind("ajax:success",$.proxy(function(e,t){$(".mm-modal-messages").empty(),t.message?t.success?$("#mm-auth-messages").html(t.message):$("#mm-auth-errors").html(t.message):$("#mm-auth-modal").modal("hide")},this)).bind("ajax:error",function(e,t){$(".mm-modal-messages").empty(),$("#mm-auth-errors").html(t.responseText)}),$("[mm-href]").live("click",function(e){e.preventDefault(),window.open($(this).attr("mm-href"),"muddleChildWin")}),$("[mm-href-popup]").live("click",function(e){if(e.preventDefault(),isMobile()){var t=$("#mm-coupons-iframe");t.contents().empty();var i=$("#mm-coupons-modal");t.attr("src",$(this).attr("mm-href-popup")+"?mobile=1"),t.css("height",i.height()),i.modal("show")}else{var n=660,s=$(window).width()+100,a="innerWidth=440,height="+n+",resizable=no,location=no,scrollbars=yes";a+=",left="+s,window.open($(this).attr("mm-href-popup"),"couponsPopup",a)}}),$(".mm-auth-link").click(function(){$(".mm-modal-messages").empty()}),$(".mm-signup-link").click($.proxy(function(){$(".mm-auth-login-part, .mm-auth-preset-part").addClass("hide"),$(".mm-auth-signup-part").removeClass("hide"),$(".mm-auth-button").text("Sign up"),$("#mm-auth-form").attr("action",this.urlFor("/signup/create"))},this)),$(".mm-login-link").click($.proxy(function(){$(".mm-auth-signup-part, .mm-auth-preset-part").addClass("hide"),$(".mm-auth-login-part").removeClass("hide"),$(".mm-auth-button").text("Log in"),$("#mm-auth-form").attr("action",this.urlFor("/login"))},this)),$(".mm-forgot-password-link").click($.proxy(function(){$(".mm-auth-login-part, .mm-auth-signup-part").addClass("hide"),$(".mm-auth-preset-part").removeClass("hide"),$(".mm-auth-button").text("Send"),$("#mm-auth-form").attr("action",this.urlFor("/reset/send"))},this)),$("#mm-auth-form").attr("action",this.urlFor("/login"))},MMEngine.prototype.onUserSessionChanged=function(e){this.isUserLoggedIn=e,this.isUserLoggedIn&&null==this.currentUserInfo&&$.get(this.urlFor("/mm_box_get_current_user"),$.proxy(function(e){this.onUserLoggedIn(e)},this)),!this.isUserLoggedIn&&this.currentUserInfo&&this.onUserLoggedOut()},MMEngine.prototype.onUserLoggedIn=function(e){this.currentUserInfo=e,$("#mm-auth-errors").empty(),$(".mm-search-bar-icon").removeClass("mm-search-bar-icon-not-logged-in").addClass("mm-search-bar-icon-logged-in").removeAttr("data-toggle").attr("data-confirm","Are you sure you want to sign out?").attr("data-method","delete").attr("href","/logout").attr("title","Sign out"),this.dispatch("onUserLoggedIn",e)},MMEngine.prototype.onUserLoggedOut=function(){this.currentUserInfo=null;var e=$(".mm-search-bar-icon").removeClass("mm-search-bar-icon-logged-in").addClass("mm-search-bar-icon-not-logged-in").attr("data-toggle","modal").removeAttr("data-method").removeAttr("data-confirm").attr("href","#mm-auth-modal").attr("title","Log in").parent(),t=$(".mm-search-bar-icon:first").clone();e.empty().append(t),this.dispatch("onUserLoggedOut")},MMEngine.prototype.dispatch=function(e,t){for(var i in this.widgets)"function"==typeof this.widgets[i][e]&&this.widgets[i][e](t)},MMEngine.prototype.get=function(e,t,i){return this.widgets[e]&&"function"==typeof this.widgets[e][t]?this.widgets[e][t](i):null};