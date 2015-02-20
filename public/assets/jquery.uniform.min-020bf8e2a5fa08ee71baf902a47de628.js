!function(t){t.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:!0,idPrefix:"uniform",resetSelector:!1,autoHide:!0},elements:[]},t.support.selectOpacity=t.browser.msie&&t.browser.version<7?!1:!0,t.fn.uniform=function(e){function i(e){$el=t(e),$el.addClass($el.attr("type")),c(e)}function n(e){t(e).addClass("uniform"),c(e)}function s(i){var n=t(i),s=t("<div>"),o=t("<span>");s.addClass(e.buttonClass),e.useID&&""!=n.attr("id")&&s.attr("id",e.idPrefix+"-"+n.attr("id"));var a;n.is("a")||n.is("button")?a=n.text():(n.is(":submit")||n.is(":reset")||n.is("input[type=button]"))&&(a=n.attr("value")),a=""==a?n.is(":reset")?"Reset":"Submit":a,o.html(a),n.css("opacity",0),n.wrap(s),n.wrap(o),s=n.closest("div"),o=n.closest("span"),n.is(":disabled")&&s.addClass(e.disabledClass),s.bind({"mouseenter.uniform":function(){s.addClass(e.hoverClass)},"mouseleave.uniform":function(){s.removeClass(e.hoverClass),s.removeClass(e.activeClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(e.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(e.activeClass)},"click.uniform touchend.uniform":function(e){if(t(e.target).is("span")||t(e.target).is("div"))if(i[0].dispatchEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),i[0].dispatchEvent(n)}else i[0].click()}}),i.bind({"focus.uniform":function(){s.addClass(e.focusClass)},"blur.uniform":function(){s.removeClass(e.focusClass)}}),t.uniform.noSelect(s),c(i)}function o(i){var n=t(i),s=t("<div />"),o=t("<span />");"none"==!n.css("display")&&e.autoHide&&s.hide(),s.addClass(e.selectClass),e.useID&&""!=i.attr("id")&&s.attr("id",e.idPrefix+"-"+i.attr("id"));var a=i.find(":selected:first");0==a.length&&(a=i.find("option:first")),o.html(a.html()),i.css("opacity",0),i.wrap(s),i.before(o),s=i.parent("div"),o=i.siblings("span"),i.bind({"change.uniform":function(){o.text(i.find(":selected").html()),s.removeClass(e.activeClass)},"focus.uniform":function(){s.addClass(e.focusClass)},"blur.uniform":function(){s.removeClass(e.focusClass),s.removeClass(e.activeClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(e.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(e.activeClass)},"click.uniform touchend.uniform":function(){s.removeClass(e.activeClass)},"mouseenter.uniform":function(){s.addClass(e.hoverClass)},"mouseleave.uniform":function(){s.removeClass(e.hoverClass),s.removeClass(e.activeClass)},"keyup.uniform":function(){o.text(i.find(":selected").html())}}),t(i).attr("disabled")&&s.addClass(e.disabledClass),t.uniform.noSelect(o),c(i)}function a(i){var n=t(i),s=t("<div />"),o=t("<span />");"none"==!n.css("display")&&e.autoHide&&s.hide(),s.addClass(e.checkboxClass),e.useID&&""!=i.attr("id")&&s.attr("id",e.idPrefix+"-"+i.attr("id")),t(i).wrap(s),t(i).wrap(o),o=i.parent(),s=o.parent(),t(i).css("opacity",0).bind({"focus.uniform":function(){s.addClass(e.focusClass)},"blur.uniform":function(){s.removeClass(e.focusClass)},"click.uniform touchend.uniform":function(){t(i).attr("checked")?o.addClass(e.checkedClass):o.removeClass(e.checkedClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(e.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(e.activeClass)},"mouseenter.uniform":function(){s.addClass(e.hoverClass)},"mouseleave.uniform":function(){s.removeClass(e.hoverClass),s.removeClass(e.activeClass)}}),t(i).attr("checked")&&o.addClass(e.checkedClass),t(i).attr("disabled")&&s.addClass(e.disabledClass),c(i)}function r(i){var n=t(i),s=t("<div />"),o=t("<span />");"none"==!n.css("display")&&e.autoHide&&s.hide(),s.addClass(e.radioClass),e.useID&&""!=i.attr("id")&&s.attr("id",e.idPrefix+"-"+i.attr("id")),t(i).wrap(s),t(i).wrap(o),o=i.parent(),s=o.parent(),t(i).css("opacity",0).bind({"focus.uniform":function(){s.addClass(e.focusClass)},"blur.uniform":function(){s.removeClass(e.focusClass)},"click.uniform touchend.uniform":function(){if(t(i).attr("checked")){var n=e.radioClass.split(" ")[0];t("."+n+" span."+e.checkedClass+":has([name='"+t(i).attr("name")+"'])").removeClass(e.checkedClass),o.addClass(e.checkedClass)}else o.removeClass(e.checkedClass)},"mousedown.uniform touchend.uniform":function(){t(i).is(":disabled")||s.addClass(e.activeClass)},"mouseup.uniform touchbegin.uniform":function(){s.removeClass(e.activeClass)},"mouseenter.uniform touchend.uniform":function(){s.addClass(e.hoverClass)},"mouseleave.uniform":function(){s.removeClass(e.hoverClass),s.removeClass(e.activeClass)}}),t(i).attr("checked")&&o.addClass(e.checkedClass),t(i).attr("disabled")&&s.addClass(e.disabledClass),c(i)}function l(i){var n=t(i),s=t("<div />"),o=t("<span>"+e.fileDefaultText+"</span>"),a=t("<span>"+e.fileBtnText+"</span>");if("none"==!n.css("display")&&e.autoHide&&s.hide(),s.addClass(e.fileClass),o.addClass(e.filenameClass),a.addClass(e.fileBtnClass),e.useID&&""!=n.attr("id")&&s.attr("id",e.idPrefix+"-"+n.attr("id")),n.wrap(s),n.after(a),n.after(o),s=n.closest("div"),o=n.siblings("."+e.filenameClass),a=n.siblings("."+e.fileBtnClass),!n.attr("size")){var r=s.width();n.attr("size",r/10)}var l=function(){var t=n.val();""===t?t=e.fileDefaultText:(t=t.split(/[\/\\]+/),t=t[t.length-1]),o.text(t)};l(),n.css("opacity",0).bind({"focus.uniform":function(){s.addClass(e.focusClass)},"blur.uniform":function(){s.removeClass(e.focusClass)},"mousedown.uniform":function(){t(i).is(":disabled")||s.addClass(e.activeClass)},"mouseup.uniform":function(){s.removeClass(e.activeClass)},"mouseenter.uniform":function(){s.addClass(e.hoverClass)},"mouseleave.uniform":function(){s.removeClass(e.hoverClass),s.removeClass(e.activeClass)}}),t.browser.msie?n.bind("click.uniform.ie7",function(){setTimeout(l,0)}):n.bind("change.uniform",l),n.attr("disabled")&&s.addClass(e.disabledClass),t.uniform.noSelect(o),t.uniform.noSelect(a),c(i)}function c(e){e=t(e).get(),e.length>1?t.each(e,function(e,i){t.uniform.elements.push(i)}):t.uniform.elements.push(e)}e=t.extend(t.uniform.options,e);var h=this;return 0!=e.resetSelector&&t(e.resetSelector).mouseup(function(){function e(){t.uniform.update(h)}setTimeout(e,10)}),t.uniform.restore=function(e){void 0==e&&(e=t(t.uniform.elements)),t(e).each(function(){t(this).is(":checkbox")?t(this).unwrap().unwrap():t(this).is("select")?(t(this).siblings("span").remove(),t(this).unwrap()):t(this).is(":radio")?t(this).unwrap().unwrap():t(this).is(":file")?(t(this).siblings("span").remove(),t(this).unwrap()):t(this).is("button, :submit, :reset, a, input[type='button']")&&t(this).unwrap().unwrap(),t(this).unbind(".uniform"),t(this).css("opacity","1");var i=t.inArray(t(e),t.uniform.elements);t.uniform.elements.splice(i,1)})},t.uniform.noSelect=function(e){function i(){return!1}t(e).each(function(){this.onselectstart=this.ondragstart=i,t(this).mousedown(i).css({MozUserSelect:"none"})})},t.uniform.update=function(i){void 0==i&&(i=t(t.uniform.elements)),i=t(i),i.each(function(){var n=t(this);if(n.is("select")){var s=n.siblings("span"),o=n.parent("div");o.removeClass(e.hoverClass+" "+e.focusClass+" "+e.activeClass),s.html(n.find(":selected").html()),n.is(":disabled")?o.addClass(e.disabledClass):o.removeClass(e.disabledClass)}else if(n.is(":checkbox")){var s=n.closest("span"),o=n.closest("div");o.removeClass(e.hoverClass+" "+e.focusClass+" "+e.activeClass),s.removeClass(e.checkedClass),n.is(":checked")&&s.addClass(e.checkedClass),n.is(":disabled")?o.addClass(e.disabledClass):o.removeClass(e.disabledClass)}else if(n.is(":radio")){var s=n.closest("span"),o=n.closest("div");o.removeClass(e.hoverClass+" "+e.focusClass+" "+e.activeClass),s.removeClass(e.checkedClass),n.is(":checked")&&s.addClass(e.checkedClass),n.is(":disabled")?o.addClass(e.disabledClass):o.removeClass(e.disabledClass)}else if(n.is(":file")){var o=n.parent("div"),a=n.siblings(e.filenameClass);btnTag=n.siblings(e.fileBtnClass),o.removeClass(e.hoverClass+" "+e.focusClass+" "+e.activeClass),a.text(n.val()),n.is(":disabled")?o.addClass(e.disabledClass):o.removeClass(e.disabledClass)}else if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||i.is("input[type=button]")){var o=n.closest("div");o.removeClass(e.hoverClass+" "+e.focusClass+" "+e.activeClass),n.is(":disabled")?o.addClass(e.disabledClass):o.removeClass(e.disabledClass)}})},this.each(function(){if(t.support.selectOpacity){var e=t(this);e.is("select")?1!=e.attr("multiple")&&(void 0==e.attr("size")||e.attr("size")<=1)&&o(e):e.is(":checkbox")?a(e):e.is(":radio")?r(e):e.is(":file")?l(e):e.is(":text, :password, input[type='email']")?i(e):e.is("textarea")?n(e):(e.is("a")||e.is(":submit")||e.is(":reset")||e.is("button")||e.is("input[type=button]"))&&s(e)}})}}(jQuery);