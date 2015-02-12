function MMIconsWidget(e){this.engine=e,this.searchEngineLinkContainers=null,this.currentXhr=null,this.bindListeners(),this.currentOfferIndex=0}MMIconsWidget.prototype.bindListeners=function(){var e=$.proxy(function(){this.isPopupVisible()&&this.setNextOffer(null)},this);$(".mm-popup-next-offer").click(e),isMobile()&&$(window).on("shake",e)},MMIconsWidget.prototype.isPopupVisible=function(){return 0==$("#mm-offer-modal").is(":hidden")},MMIconsWidget.prototype.setNextOffer=function(e){var t=this.engine.get("box","getCurrentData");this.currentOfferIndex=this.currentOfferIndex>t.length-1?0:this.currentOfferIndex;for(var i in t){var n="OFFER_SEARCH"==t[i].source||"URL_SEARCH"==t[i].source;if(n)if(e){if(e==t[i].company_name){this.setMerchantData(t[i]),this.currentOfferIndex=i;break}}else if(i>=this.currentOfferIndex){this.setMerchantData(t[i]),this.currentOfferIndex=i;break}}this.currentOfferIndex++},MMIconsWidget.prototype.setSearchEngineLinkContainers=function(e){this.searchEngineLinkContainers=e,this.engine.isUserLoggedIn()&&null!=this.searchEngineLinkContainers&&(this.clearResults(),this.loadMerchantsByUrls())},MMIconsWidget.prototype.clearResults=function(){$(".mm-affiliate-icon").remove()},MMIconsWidget.prototype.loadMerchantsByUrls=function(){this.currentXhr&&this.currentXhr.abort();var e=[];this.searchEngineLinkContainers.each(function(){e.push($(this).find("a").attr("href"))}),this.currentXhr=$.get(this.engine.urlFor("/mm_affiliate_merchants_search"),$.param({links:e}),$.proxy(function(e){this.onMerchantsByUrlsDataLoaded(e),this.currentXhr=null},this))},MMIconsWidget.prototype.onMerchantsByUrlsDataLoaded=function(e){for(var t=[],i=0;i<e.length;i++)e[i]&&(t.push(e[i]),this.insertMerchantIcon(i,e[i].company_name));this.engine.dispatch("appendData",t)},MMIconsWidget.prototype.setMerchantData=function(e){var t=$("#mm-offer-modal");for(var i in e)t.find(".mm_data_"+i).html(e[i]);t.find(".mm-popup-shop-now").attr("mm-href",e.offer_buy_url),"No coupons"!=e.coupon_code?(t.find(".mm_data_coupon_code").addClass("mm-active-link"),t.find(".mm-popup-shop-now, .mm_data_coupon_code").attr("mm-href-popup",e.company_coupons_url)):(t.find(".mm_data_coupon_code").removeClass("mm-active-link"),t.find(".mm-popup-shop-now, .mm_data_coupon_code").removeAttr("mm-href-popup"))},MMIconsWidget.prototype.insertMerchantIcon=function(e,t){var i=$("<div/>",{"class":"mm-affiliate-icon","data-toggle":"modal",href:"#mm-offer-modal"});$(this.searchEngineLinkContainers[e]).prepend(i),i.click($.proxy(function(){this.setNextOffer(t)},this))},MMIconsWidget.prototype.onUserLoggedOut=function(){this.currentXhr&&this.currentXhr.abort(),this.searchEngineLinkContainers=null,this.clearResults()};