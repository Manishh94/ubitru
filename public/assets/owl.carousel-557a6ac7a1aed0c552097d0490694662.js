/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,i){var n={init:function(t,i){var n=this;n.$elem=e(i),n.options=e.extend({},e.fn.owlCarousel.options,n.$elem.data(),t),n.userOptions=t,n.loadContent()},loadContent:function(){function t(e){var t,i="";if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[e]);else{for(t in e.owl)e.owl.hasOwnProperty(t)&&(i+=e.owl[t].item);n.$elem.html(i)}n.logIn()}var i,n=this;"function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath?(i=n.options.jsonPath,e.getJSON(i,t)):n.logIn()},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")),e.$elem.data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible=null,e.setVars()},setVars:function(){var e=this;return 0===e.$elem.children().length?!1:(e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup(),void 0)},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),e.options.transitionStyle!==!1&&e.transitionTypes(e.options.transitionStyle),e.options.autoPlay===!0&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;e.options.lazyLoad===!0&&e.lazyLoad(),e.options.autoHeight===!0&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;return e.$elem.is(":visible")!==!1?!1:(e.$elem.css({opacity:0}),t.clearInterval(e.autoPlayInterval),t.clearInterval(e.checkVisible),e.checkVisible=t.setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),t.clearInterval(e.checkVisible))},500),void 0)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),i=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),i||e.$elem.addClass(e.options.theme)},updateItems:function(){var t,i,n=this;if(n.options.responsive===!1)return!1;if(n.options.singleItem===!0)return n.options.items=n.orignalItems=1,n.options.itemsCustom=!1,n.options.itemsDesktop=!1,n.options.itemsDesktopSmall=!1,n.options.itemsTablet=!1,n.options.itemsTabletSmall=!1,n.options.itemsMobile=!1,!1;if(t=e(n.options.responsiveBaseWidth).width(),t>(n.options.itemsDesktop[0]||n.orignalItems)&&(n.options.items=n.orignalItems),n.options.itemsCustom!==!1)for(n.options.itemsCustom.sort(function(e,t){return e[0]-t[0]}),i=0;i<n.options.itemsCustom.length;i+=1)n.options.itemsCustom[i][0]<=t&&(n.options.items=n.options.itemsCustom[i][1]);else t<=n.options.itemsDesktop[0]&&n.options.itemsDesktop!==!1&&(n.options.items=n.options.itemsDesktop[1]),t<=n.options.itemsDesktopSmall[0]&&n.options.itemsDesktopSmall!==!1&&(n.options.items=n.options.itemsDesktopSmall[1]),t<=n.options.itemsTablet[0]&&n.options.itemsTablet!==!1&&(n.options.items=n.options.itemsTablet[1]),t<=n.options.itemsTabletSmall[0]&&n.options.itemsTabletSmall!==!1&&(n.options.items=n.options.itemsTabletSmall[1]),t<=n.options.itemsMobile[0]&&n.options.itemsMobile!==!1&&(n.options.items=n.options.itemsMobile[1]);n.options.items>n.itemsAmount&&n.options.itemsScaleUp===!0&&(n.options.items=n.itemsAmount)},response:function(){var i,n,s=this;return s.options.responsive!==!0?!1:(n=e(t).width(),s.resizer=function(){e(t).width()!==n&&(s.options.autoPlay!==!1&&t.clearInterval(s.autoPlayInterval),t.clearTimeout(i),i=t.setTimeout(function(){n=e(t).width(),s.updateVars()},s.options.responsiveRefreshRate))},e(t).resize(s.resizer),void 0)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),e.options.autoPlay!==!1&&e.checkAp()},appendItemsSizes:function(){var t=this,i=0,n=t.itemsAmount-t.options.items;t.$owlItems.each(function(s){var o=e(this);o.css({width:t.itemWidth}).data("owl-item",Number(s)),(0===s%t.options.items||s===n)&&(s>n||(i+=1)),o.data("owl-roundPages",i)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t,i,n,s=this,o=0,a=0;for(s.positionsInArray=[0],s.pagesInArray=[],t=0;t<s.itemsAmount;t+=1)a+=s.itemWidth,s.positionsInArray.push(-a),s.options.scrollPerPage===!0&&(i=e(s.$owlItems[t]),n=i.data("owl-roundPages"),n!==o&&(s.pagesInArray[o]=s.positionsInArray[t],o=n))},buildControls:function(){var t=this;(t.options.navigation===!0||t.options.pagination===!0)&&(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),t.options.pagination===!0&&t.buildPagination(),t.options.navigation===!0&&t.buildButtons()},buildButtons:function(){var t=this,i=e('<div class="owl-buttons"/>');t.owlControls.append(i),t.buttonPrev=e("<div/>",{"class":"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{"class":"owl-next",html:t.options.navigationText[1]||""}),i.append(t.buttonPrev).append(t.buttonNext),i.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),i.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(i){i.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(i){i.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t,i,n,s,o,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),t=0,i=r.itemsAmount-r.itemsAmount%r.options.items,s=0;s<r.itemsAmount;s+=1)0===s%r.options.items&&(t+=1,i===s&&(n=r.itemsAmount-r.options.items),o=e("<div/>",{"class":"owl-page"}),a=e("<span></span>",{text:r.options.paginationNumbers===!0?t:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),o.append(a),o.data("owl-page",i===s?n:s),o.data("owl-roundPages",t),r.paginationWrapper.append(o));r.checkPagination()},checkPagination:function(){var t=this;return t.options.pagination===!1?!1:(t.paginationWrapper.find(".owl-page").each(function(){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))}),void 0)},checkNavigation:function(){var e=this;return e.options.navigation===!1?!1:(e.options.rewindNav===!1&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled"))),void 0)},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=t.options.scrollPerPage===!0?t.options.items:1,t.currentItem>t.maximumItem+(t.options.scrollPerPage===!0?t.options.items-1:0)){if(t.options.rewindNav!==!0)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(t.options.scrollPerPage===!0&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=t.options.scrollPerPage===!0?t.options.items:1,t.currentItem<0){if(t.options.rewindNav!==!0)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,i,n){var s,o=this;return o.isTransition?!1:("function"==typeof o.options.beforeMove&&o.options.beforeMove.apply(this,[o.$elem]),e>=o.maximumItem?e=o.maximumItem:0>=e&&(e=0),o.currentItem=o.owl.currentItem=e,o.options.transitionStyle!==!1&&"drag"!==n&&1===o.options.items&&o.browser.support3d===!0?(o.swapSpeed(0),o.browser.support3d===!0?o.transition3d(o.positionsInArray[e]):o.css2slide(o.positionsInArray[e],1),o.afterGo(),o.singleItemTransition(),!1):(s=o.positionsInArray[e],o.browser.support3d===!0?(o.isCss3Finish=!1,i===!0?(o.swapSpeed("paginationSpeed"),t.setTimeout(function(){o.isCss3Finish=!0},o.options.paginationSpeed)):"rewind"===i?(o.swapSpeed(o.options.rewindSpeed),t.setTimeout(function(){o.isCss3Finish=!0},o.options.rewindSpeed)):(o.swapSpeed("slideSpeed"),t.setTimeout(function(){o.isCss3Finish=!0},o.options.slideSpeed)),o.transition3d(s)):i===!0?o.css2slide(s,o.options.paginationSpeed):"rewind"===i?o.css2slide(s,o.options.rewindSpeed):o.css2slide(s,o.options.slideSpeed),o.afterGo(),void 0))},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:0>=e&&(e=0),t.swapSpeed(0),t.browser.support3d===!0?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),e.options.autoPlay!==!1&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;return e.apStatus="play",e.options.autoPlay===!1?!1:(t.clearInterval(e.autoPlayInterval),e.autoPlayInterval=t.setInterval(function(){e.next(!0)},e.options.autoPlay),void 0)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){var t=this;t.$owlWrapper.css({left:e})},css2slide:function(e,t){var i=this;i.isCssFinish=!1,i.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||i.options.slideSpeed,complete:function(){i.isCssFinish=!0}})},checkBrowser:function(){var e,n,s,o,a=this,r="translate3d(0px, 0px, 0px)",l=i.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,e=/translate3d\(0px, 0px, 0px\)/g,n=l.style.cssText.match(e),s=null!==n&&1===n.length,o="ontouchstart"in t||t.navigator.msMaxTouchPoints,a.browser={support3d:s,isTouch:o}},moveEvents:function(){var e=this;(e.options.mouseDrag!==!1||e.options.touchDrag!==!1)&&(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},e.options.mouseDrag===!0&&e.options.touchDrag===!0?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:e.options.mouseDrag===!1&&e.options.touchDrag===!0?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:e.options.mouseDrag===!0&&e.options.touchDrag===!1&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function n(e){if(void 0!==e.touches)return{x:e.touches[0].pageX,y:e.touches[0].pageY};if(void 0===e.touches){if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY};if(void 0===e.pageX)return{x:e.clientX,y:e.clientY}}}function s(t){"on"===t?(e(i).on(l.ev_types.move,a),e(i).on(l.ev_types.end,r)):"off"===t&&(e(i).off(l.ev_types.move),e(i).off(l.ev_types.end))}function o(i){var o,a=i.originalEvent||i||t.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&t.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,e(this).css(l.removeTransition()),o=e(this).position(),c.relativePos=o.left,c.offsetX=n(a).x-o.left,c.offsetY=n(a).y-o.top,s("on"),c.sliding=!1,c.targetElement=a.target||a.srcElement}}function a(s){var o,a,r=s.originalEvent||s||t.event;l.newPosX=n(r).x-c.offsetX,l.newPosY=n(r).y-c.offsetY,l.newRelativeX=l.newPosX-c.relativePos,"function"==typeof l.options.startDragging&&c.dragging!==!0&&0!==l.newRelativeX&&(c.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,c.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&c.sliding===!1&&e(i).off("touchmove.owl"),o=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,o()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(i){var n,o,a,r=i.originalEvent||i||t.event;r.target=r.target||r.srcElement,c.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(n=l.getNewPosition(),l.goTo(n,!1,"drag"),c.targetElement===r.target&&l.browser.isTouch!==!0&&(e(r.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(t.target).off("click.disable")}),o=e._data(r.target,"events").click,a=o.pop(),o.splice(0,0,a))),s("off")}var l=this,c={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",o)},getNewPosition:function(){var e=this,t=e.closestItem();return t>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var t=this,i=t.options.scrollPerPage===!0?t.pagesInArray:t.positionsInArray,n=t.newPosX,s=null;return e.each(i,function(o,a){n-t.itemWidth/20>i[o+1]&&n-t.itemWidth/20<a&&"left"===t.moveDirection()?(s=a,t.currentItem=t.options.scrollPerPage===!0?e.inArray(s,t.positionsInArray):o):n+t.itemWidth/20<a&&n+t.itemWidth/20>(i[o+1]||i[o]-t.itemWidth)&&"right"===t.moveDirection()&&(t.options.scrollPerPage===!0?(s=i[o+1]||i[i.length-1],t.currentItem=e.inArray(s,t.positionsInArray)):(s=i[o+1],t.currentItem=o+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,i){e.options.autoPlay=i,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,i){e.goTo(i)}),e.$elem.on("owl.jumpTo",function(t,i){e.jumpTo(i)})},stopOnHover:function(){var e=this;e.options.stopOnHover===!0&&e.browser.isTouch!==!0&&e.options.autoPlay!==!1&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t,i,n,s,o,a=this;if(a.options.lazyLoad===!1)return!1;for(t=0;t<a.itemsAmount;t+=1)i=e(a.$owlItems[t]),"loaded"!==i.data("owl-loaded")&&(n=i.data("owl-item"),s=i.find(".lazyOwl"),"string"==typeof s.data("src")?(void 0===i.data("owl-loaded")&&(s.hide(),i.addClass("loading").data("owl-loaded","checked")),o=a.options.lazyFollow===!0?n>=a.currentItem:!0,o&&n<a.currentItem+a.options.items&&s.length&&a.lazyPreload(i,s)):i.data("owl-loaded","loaded"))},lazyPreload:function(e,i){function n(){e.data("owl-loaded","loaded").removeClass("loading"),i.removeAttr("data-src"),"fade"===a.options.lazyEffect?i.fadeIn(400):i.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function s(){r+=1,a.completeImg(i.get(0))||o===!0?n():100>=r?t.setTimeout(s,100):n()}var o,a=this,r=0;"DIV"===i.prop("tagName")?(i.css("background-image","url("+i.data("src")+")"),o=!0):i[0].src=i.data("src"),s()},autoHeight:function(){function i(){var i=e(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",i+"px"),o.wrapperOuter.hasClass("autoHeight")||t.setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}function n(){s+=1,o.completeImg(a.get(0))?i():100>=s?t.setTimeout(n,100):o.wrapperOuter.css("height","")}var s,o=this,a=e(o.$owlItems[o.currentItem]).find("img");void 0!==a.get(0)?(s=0,n()):i()},completeImg:function(e){var t;return e.complete?(t=typeof e.naturalWidth,"undefined"!==t&&0===e.naturalWidth?!1:!0):!1},onVisibleItems:function(){var t,i=this;for(i.options.addClassActive===!0&&i.$owlItems.removeClass("active"),i.visibleItems=[],t=i.currentItem;t<i.currentItem+i.options.items;t+=1)i.visibleItems.push(t),i.options.addClassActive===!0&&e(i.$owlItems[t]).addClass("active");i.owl.visibleItems=i.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){function e(e){return{position:"relative",left:e+"px"}}var t=this,i=t.outClass,n=t.inClass,s=t.$owlItems.eq(t.currentItem),o=t.$owlItems.eq(t.prevItem),a=Math.abs(t.positionsInArray[t.currentItem])+t.positionsInArray[t.prevItem],r=Math.abs(t.positionsInArray[t.currentItem])+t.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";t.isTransition=!0,t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),o.css(e(a,10)).addClass(i).on(l,function(){t.endPrev=!0,o.off(l),t.clearTransStyle(o,i)}),s.addClass(n).on(l,function(){t.endCurrent=!0,s.off(l),t.clearTransStyle(s,n)})},clearTransStyle:function(e,t){var i=this;e.css({position:"",left:""}).removeClass(t),i.endPrev&&i.endCurrent&&(i.$owlWrapper.removeClass("owl-origin"),i.endPrev=!1,i.endCurrent=!1,i.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var n=this;n.$elem.off(".owl owl mousedown.disableTextSelect"),e(i).off(".owl owl"),e(t).off("resize",n.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),t.clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var i=this,n=e.extend({},i.userOptions,t);i.unWrap(),i.init(n,i.$elem)},addItem:function(e,t){var i,n=this;return e?0===n.$elem.children().length?(n.$elem.append(e),n.setVars(),!1):(n.unWrap(),i=void 0===t||-1===t?-1:t,i>=n.$userItems.length||-1===i?n.$userItems.eq(-1).after(e):n.$userItems.eq(i).before(e),n.setVars(),void 0):!1},removeItem:function(e){var t,i=this;return 0===i.$elem.children().length?!1:(t=void 0===e||-1===e?-1:e,i.unWrap(),i.$userItems.eq(t).remove(),i.setVars(),void 0)}};e.fn.owlCarousel=function(t){return this.each(function(){if(e(this).data("owl-init")===!0)return!1;e(this).data("owl-init",!0);var i=Object.create(n);i.init(t,this),e.data(this,"owlCarousel",i)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);