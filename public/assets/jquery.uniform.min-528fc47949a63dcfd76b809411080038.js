!function(e){e.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:!0,idPrefix:"uniform",resetSelector:!1,autoHide:!0},elements:[]},e.support.selectOpacity=e.browser.msie&&e.browser.version<7?!1:!0,e.fn.uniform=function(t){function i(t){$el=e(t),$el.addClass($el.attr("type")),c(t)}function n(t){e(t).addClass("uniform"),c(t)}function s(i){var n=e(i),s=e("<div>"),a=e("<span>");s.addClass(t.buttonClass),t.useID&&""!=n.attr("id")&&s.attr("id",t.idPrefix+"-"+n.attr("id"));var o;n.is("a")||n.is("button")?o=n.text():(n.is(":submit")||n.is(":reset")||n.is("input[type=button]"))&&(o=n.attr("value")),o=""==o?n.is(":reset")?"Reset":"Submit":o,a.html(o),n.css("opacity",0),n.wrap(s),n.wrap(a),s=n.closest("div"),a=n.closest("span"),n.is(":disabled")&&s.addClass(t.disabledClass),s.bind({"mouseenter.uniform":function(){s.addClass(t.hoverClass)},"mouseleave.uniform":function(){s.removeClass(t.hoverClass),s.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(t){if(e(t.target).is("span")||e(t.target).is("div"))if(i[0].dispatchEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),i[0].dispatchEvent(n)}else i[0].click()}}),i.bind({"focus.uniform":function(){s.addClass(t.focusClass)},"blur.uniform":function(){s.removeClass(t.focusClass)}}),e.uniform.noSelect(s),c(i)}function a(i){var n=e(i),s=e("<div />"),a=e("<span />");"none"==!n.css("display")&&t.autoHide&&s.hide(),s.addClass(t.selectClass),t.useID&&""!=i.attr("id")&&s.attr("id",t.idPrefix+"-"+i.attr("id"));var o=i.find(":selected:first");0==o.length&&(o=i.find("option:first")),a.html(o.html()),i.css("opacity",0),i.wrap(s),i.before(a),s=i.parent("div"),a=i.siblings("span"),i.bind({"change.uniform":function(){a.text(i.find(":selected").html()),s.removeClass(t.activeClass)},"focus.uniform":function(){s.addClass(t.focusClass)},"blur.uniform":function(){s.removeClass(t.focusClass),s.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(){s.removeClass(t.activeClass)},"mouseenter.uniform":function(){s.addClass(t.hoverClass)},"mouseleave.uniform":function(){s.removeClass(t.hoverClass),s.removeClass(t.activeClass)},"keyup.uniform":function(){a.text(i.find(":selected").html())}}),e(i).attr("disabled")&&s.addClass(t.disabledClass),e.uniform.noSelect(a),c(i)}function o(i){var n=e(i),s=e("<div />"),a=e("<span />");"none"==!n.css("display")&&t.autoHide&&s.hide(),s.addClass(t.checkboxClass),t.useID&&""!=i.attr("id")&&s.attr("id",t.idPrefix+"-"+i.attr("id")),e(i).wrap(s),e(i).wrap(a),a=i.parent(),s=a.parent(),e(i).css("opacity",0).bind({"focus.uniform":function(){s.addClass(t.focusClass)},"blur.uniform":function(){s.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){e(i).attr("checked")?a.addClass(t.checkedClass):a.removeClass(t.checkedClass)},"mousedown.uniform touchbegin.uniform":function(){s.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){s.removeClass(t.activeClass)},"mouseenter.uniform":function(){s.addClass(t.hoverClass)},"mouseleave.uniform":function(){s.removeClass(t.hoverClass),s.removeClass(t.activeClass)}}),e(i).attr("checked")&&a.addClass(t.checkedClass),e(i).attr("disabled")&&s.addClass(t.disabledClass),c(i)}function r(i){var n=e(i),s=e("<div />"),a=e("<span />");"none"==!n.css("display")&&t.autoHide&&s.hide(),s.addClass(t.radioClass),t.useID&&""!=i.attr("id")&&s.attr("id",t.idPrefix+"-"+i.attr("id")),e(i).wrap(s),e(i).wrap(a),a=i.parent(),s=a.parent(),e(i).css("opacity",0).bind({"focus.uniform":function(){s.addClass(t.focusClass)},"blur.uniform":function(){s.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){if(e(i).attr("checked")){var n=t.radioClass.split(" ")[0];e("."+n+" span."+t.checkedClass+":has([name='"+e(i).attr("name")+"'])").removeClass(t.checkedClass),a.addClass(t.checkedClass)}else a.removeClass(t.checkedClass)},"mousedown.uniform touchend.uniform":function(){e(i).is(":disabled")||s.addClass(t.activeClass)},"mouseup.uniform touchbegin.uniform":function(){s.removeClass(t.activeClass)},"mouseenter.uniform touchend.uniform":function(){s.addClass(t.hoverClass)},"mouseleave.uniform":function(){s.removeClass(t.hoverClass),s.removeClass(t.activeClass)}}),e(i).attr("checked")&&a.addClass(t.checkedClass),e(i).attr("disabled")&&s.addClass(t.disabledClass),c(i)}function l(i){var n=e(i),s=e("<div />"),a=e("<span>"+t.fileDefaultText+"</span>"),o=e("<span>"+t.fileBtnText+"</span>");if("none"==!n.css("display")&&t.autoHide&&s.hide(),s.addClass(t.fileClass),a.addClass(t.filenameClass),o.addClass(t.fileBtnClass),t.useID&&""!=n.attr("id")&&s.attr("id",t.idPrefix+"-"+n.attr("id")),n.wrap(s),n.after(o),n.after(a),s=n.closest("div"),a=n.siblings("."+t.filenameClass),o=n.siblings("."+t.fileBtnClass),!n.attr("size")){var r=s.width();n.attr("size",r/10)}var l=function(){var e=n.val();""===e?e=t.fileDefaultText:(e=e.split(/[\/\\]+/),e=e[e.length-1]),a.text(e)};l(),n.css("opacity",0).bind({"focus.uniform":function(){s.addClass(t.focusClass)},"blur.uniform":function(){s.removeClass(t.focusClass)},"mousedown.uniform":function(){e(i).is(":disabled")||s.addClass(t.activeClass)},"mouseup.uniform":function(){s.removeClass(t.activeClass)},"mouseenter.uniform":function(){s.addClass(t.hoverClass)},"mouseleave.uniform":function(){s.removeClass(t.hoverClass),s.removeClass(t.activeClass)}}),e.browser.msie?n.bind("click.uniform.ie7",function(){setTimeout(l,0)}):n.bind("change.uniform",l),n.attr("disabled")&&s.addClass(t.disabledClass),e.uniform.noSelect(a),e.uniform.noSelect(o),c(i)}function c(t){t=e(t).get(),t.length>1?e.each(t,function(t,i){e.uniform.elements.push(i)}):e.uniform.elements.push(t)}t=e.extend(e.uniform.options,t);var u=this;return 0!=t.resetSelector&&e(t.resetSelector).mouseup(function(){function t(){e.uniform.update(u)}setTimeout(t,10)}),e.uniform.restore=function(t){void 0==t&&(t=e(e.uniform.elements)),e(t).each(function(){e(this).is(":checkbox")?e(this).unwrap().unwrap():e(this).is("select")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is(":radio")?e(this).unwrap().unwrap():e(this).is(":file")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is("button, :submit, :reset, a, input[type='button']")&&e(this).unwrap().unwrap(),e(this).unbind(".uniform"),e(this).css("opacity","1");var i=e.inArray(e(t),e.uniform.elements);e.uniform.elements.splice(i,1)})},e.uniform.noSelect=function(t){function i(){return!1}e(t).each(function(){this.onselectstart=this.ondragstart=i,e(this).mousedown(i).css({MozUserSelect:"none"})})},e.uniform.update=function(i){void 0==i&&(i=e(e.uniform.elements)),i=e(i),i.each(function(){var n=e(this);if(n.is("select")){var s=n.siblings("span"),a=n.parent("div");a.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),s.html(n.find(":selected").html()),n.is(":disabled")?a.addClass(t.disabledClass):a.removeClass(t.disabledClass)}else if(n.is(":checkbox")){var s=n.closest("span"),a=n.closest("div");a.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),s.removeClass(t.checkedClass),n.is(":checked")&&s.addClass(t.checkedClass),n.is(":disabled")?a.addClass(t.disabledClass):a.removeClass(t.disabledClass)}else if(n.is(":radio")){var s=n.closest("span"),a=n.closest("div");a.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),s.removeClass(t.checkedClass),n.is(":checked")&&s.addClass(t.checkedClass),n.is(":disabled")?a.addClass(t.disabledClass):a.removeClass(t.disabledClass)}else if(n.is(":file")){var a=n.parent("div"),o=n.siblings(t.filenameClass);btnTag=n.siblings(t.fileBtnClass),a.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),o.text(n.val()),n.is(":disabled")?a.addClass(t.disabledClass):a.removeClass(t.disabledClass)}else if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||i.is("input[type=button]")){var a=n.closest("div");a.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),n.is(":disabled")?a.addClass(t.disabledClass):a.removeClass(t.disabledClass)}})},this.each(function(){if(e.support.selectOpacity){var t=e(this);t.is("select")?1!=t.attr("multiple")&&(void 0==t.attr("size")||t.attr("size")<=1)&&a(t):t.is(":checkbox")?o(t):t.is(":radio")?r(t):t.is(":file")?l(t):t.is(":text, :password, input[type='email']")?i(t):t.is("textarea")?n(t):(t.is("a")||t.is(":submit")||t.is(":reset")||t.is("button")||t.is("input[type=button]"))&&s(t)}})}}(jQuery);