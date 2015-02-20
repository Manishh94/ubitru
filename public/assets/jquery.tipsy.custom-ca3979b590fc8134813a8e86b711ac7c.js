!function(t){function e(t,e){return"function"==typeof t?t.call(e):t}function i(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}function n(e,i){this.$element=t(e),this.options=i,this.enabled=!0,this.fixTitle()}n.prototype={show:function(){var i=this.getTitle();if(i&&this.enabled){var n=this.tip();n.find(".tipsy-inner")[this.options.html?"html":"text"](i),n[0].className="tipsy",n.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var s,o=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),a=n[0].offsetWidth,r=n[0].offsetHeight,l=e(this.options.gravity,this.$element[0]);switch(l.charAt(0)){case"n":s={top:o.top+o.height+this.options.offset,left:o.left+o.width/2-a/2};break;case"s":s={top:o.top-r-this.options.offset,left:o.left+o.width/2-a/2};break;case"e":s={top:o.top+o.height/2-r/2,left:o.left-a-this.options.offset};break;case"w":s={top:o.top+o.height/2-r/2,left:o.left+o.width+this.options.offset}}2==l.length&&(s.left="w"==l.charAt(1)?o.left+o.width/2-15:o.left+o.width/2-a+15),n.css(s).addClass("tipsy-"+l),n.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+l.charAt(0),this.options.className&&n.addClass(e(this.options.className,this.$element[0])),this.options.fade?n.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):n.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title")},getTitle:function(){var t,e=this.$element,i=this.options;this.fixTitle();var t,i=this.options;return"string"==typeof i.title?t=e.attr("title"==i.title?"original-title":i.title):"function"==typeof i.title&&(t=i.title.call(e[0])),t=(""+t).replace(/(^\s*|\s*$)/,""),t||i.fallback},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),this.$tip.data("tipsy-pointee",this.$element[0])),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.tipsy=function(e){function i(i){var s=t.data(i,"tipsy");return s||(s=new n(i,t.fn.tipsy.elementOptions(i,e)),t.data(i,"tipsy",s)),s}function s(){var t=i(this);t.hoverState="in",0==e.delayIn?t.show():(t.fixTitle(),setTimeout(function(){"in"==t.hoverState&&t.show()},e.delayIn))}function o(){var t=i(this);t.hoverState="out",0==e.delayOut?t.hide():setTimeout(function(){"out"==t.hoverState&&t.hide()},e.delayOut)}if(e===!0)return this.data("tipsy");if("string"==typeof e){var a=this.data("tipsy");return a&&a[e](),this}if(e=t.extend({},t.fn.tipsy.defaults,e),e.live||this.each(function(){i(this)}),"manual"!=e.trigger){var r=e.live?"live":"bind",l="hover"==e.trigger?"mouseenter":"focus",c="hover"==e.trigger?"mouseleave":"blur";this[r](l,s)[r](c,o)}else this.live("click",s).live("mouseleave",o);return this},t.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"ne",html:!1,live:!1,offset:0,opacity:1,title:"title",trigger:"manual"},t.fn.tipsy.revalidate=function(){t(".tipsy").each(function(){var e=t.data(this,"tipsy-pointee");e&&i(e)||t(this).remove()})},t.fn.tipsy.elementOptions=function(e,i){return t.metadata?t.extend({},i,t(e).metadata()):i},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.tipsy.autoBounds=function(e,i){return function(){var n={ns:i[0],ew:i.length>1?i[1]:!1},s=t(document).scrollTop()+e,o=t(document).scrollLeft()+e,a=t(this);return a.offset().top<s&&(n.ns="n"),a.offset().left<o&&(n.ew="w"),t(window).width()+t(document).scrollLeft()-a.offset().left<e&&(n.ew="e"),t(window).height()+t(document).scrollTop()-a.offset().top<e&&(n.ns="s"),n.ns+(n.ew?n.ew:"")}}}(jQuery);