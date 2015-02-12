/*
 * jQuery MultiSelect UI Widget 1.12
 * Copyright (c) 2011 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
!function(e){var t=0;e.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:"",hide:"",autoOpen:!1,multiple:!0,position:{}},_create:function(){var t=this.element.hide(),i=this.options;this.speed=e.fx.speeds._default,this._isOpen=!1,t=(this.button=e('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(i.classes).attr({title:t.attr("title"),"aria-haspopup":!0,tabIndex:t.attr("tabIndex")}).insertAfter(t),(this.buttonlabel=e("<span />")).html(i.noneSelectedText).appendTo(t);var t=(this.menu=e("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(i.classes).appendTo(document.body),n=(this.header=e("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(t);(this.headerLinkContainer=e("<ul />")).addClass("ui-helper-reset").html(function(){return!0===i.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+i.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+i.uncheckAllText+"</span></a></li>":"string"==typeof i.header?"<li>"+i.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(n),(this.checkboxContainer=e("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(t),this._bindEvents(),this.refresh(!0),i.multiple||t.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide(),this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide(),this.options.autoOpen&&this.open(),this.element.is(":disabled")&&this.disable()},refresh:function(i){var n=this.element,s=this.options,a=this.menu,o=this.checkboxContainer,r=[],l=[],c=n.attr("id")||t++;n.find("option").each(function(t){e(this);var i=this.parentNode,n=this.innerHTML,a=this.title,o=this.value,t=this.id||"ui-multiselect-"+c+"-option-"+t,u=this.disabled,d=this.selected,h=["ui-corner-all"];"optgroup"===i.tagName.toLowerCase()&&(i=i.getAttribute("label"),-1===e.inArray(i,r)&&(l.push('<li class="ui-multiselect-optgroup-label"><a href="#">'+i+"</a></li>"),r.push(i))),u&&h.push("ui-state-disabled"),d&&!s.multiple&&h.push("ui-state-active"),l.push('<li class="'+(u?"ui-multiselect-disabled":"")+'">'),l.push('<label for="'+t+'" title="'+a+'" class="'+h.join(" ")+'">'),l.push('<input id="'+t+'" name="multiselect_'+c+'" type="'+(s.multiple?"checkbox":"radio")+'" value="'+o+'" title="'+n+'"'),d&&(l.push(' checked="checked"'),l.push(' aria-selected="true"')),u&&(l.push(' disabled="disabled"'),l.push(' aria-disabled="true"')),l.push(" /><span>"+n+"</span></label></li>")}),o.html(l.join("")),this.labels=a.find("label"),this._setButtonWidth(),this._setMenuWidth(),this.button[0].defaultValue=this.update(),i||this._trigger("refresh")},update:function(){var t=this.options,i=this.labels.find("input"),n=i.filter("[checked]"),s=n.length,t=0===s?t.noneSelectedText:e.isFunction(t.selectedText)?t.selectedText.call(this,s,i.length,n.get()):/\d/.test(t.selectedList)&&0<t.selectedList&&s<=t.selectedList?n.map(function(){return e(this).next().text()}).get().join(", "):t.selectedText.replace("#",s).replace("#",i.length);return this.buttonlabel.html(t),t},_bindEvents:function(){function t(){return i[i._isOpen?"close":"open"](),!1}var i=this,n=this.button;n.find("span").bind("click.multiselect",t),n.bind({click:t,keypress:function(e){switch(e.which){case 27:case 38:case 37:i.close();break;case 39:case 40:i.open()}},mouseenter:function(){n.hasClass("ui-state-disabled")||e(this).addClass("ui-state-hover")},mouseleave:function(){e(this).removeClass("ui-state-hover")},focus:function(){n.hasClass("ui-state-disabled")||e(this).addClass("ui-state-focus")},blur:function(){e(this).removeClass("ui-state-focus")}}),this.header.delegate("a","click.multiselect",function(t){e(this).hasClass("ui-multiselect-close")?i.close():i[e(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"](),t.preventDefault()}),this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(t){t.preventDefault();var n=e(this),s=n.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),a=s.get(),n=n.parent().text();!1!==i._trigger("beforeoptgrouptoggle",t,{inputs:a,label:n})&&(i._toggleChecked(s.filter("[checked]").length!==s.length,s),i._trigger("optgrouptoggle",t,{inputs:a,label:n,checked:a[0].checked}))}).delegate("label","mouseenter.multiselect",function(){e(this).hasClass("ui-state-disabled")||(i.labels.removeClass("ui-state-hover"),e(this).addClass("ui-state-hover").find("input").focus())}).delegate("label","keydown.multiselect",function(t){switch(t.preventDefault(),t.which){case 9:case 27:i.close();break;case 38:case 40:case 37:case 39:i._traverse(t.which,this);break;case 13:e(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(t){var n=e(this),s=this.value,a=this.checked,o=i.element.find("option");this.disabled||!1===i._trigger("click",t,{value:s,text:this.title,checked:a})?t.preventDefault():(n.focus(),n.attr("aria-selected",a),o.each(function(){this.value===s?this.selected=a:i.options.multiple||(this.selected=!1)}),i.options.multiple||(i.labels.removeClass("ui-state-active"),n.closest("label").toggleClass("ui-state-active",a),i.close()),i.element.trigger("change"),setTimeout(e.proxy(i.update,i),10))}),e(document).bind("mousedown.multiselect",function(t){i._isOpen&&!e.contains(i.menu[0],t.target)&&!e.contains(i.button[0],t.target)&&t.target!==i.button[0]&&i.close()}),e(this.element[0].form).bind("reset.multiselect",function(){setTimeout(e.proxy(i.refresh,i),10)})},_setButtonWidth:function(){var e=this.element.outerWidth(),t=this.options;/\d/.test(t.minWidth)&&e<t.minWidth&&(e=t.minWidth),this.button.width(e)},_setMenuWidth:function(){var e=this.menu,t=this.button.outerWidth()-parseInt(e.css("padding-left"),10)-parseInt(e.css("padding-right"),10)-parseInt(e.css("border-right-width"),10)-parseInt(e.css("border-left-width"),10);e.width(t||this.button.outerWidth())},_traverse:function(t,i){var n=e(i),s=38===t||37===t,n=n.parent()[s?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[s?"last":"first"]();n.length?n.find("label").trigger("mouseover"):(n=this.menu.find("ul").last(),this.menu.find("label")[s?"last":"first"]().trigger("mouseover"),n.scrollTop(s?n.height():0))},_toggleState:function(e,t){return function(){this.disabled||(this[e]=t),t?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(t,i){var n=i&&i.length?i:this.labels.find("input"),s=this;n.each(this._toggleState("checked",t)),n.eq(0).focus(),this.update();var a=n.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&&-1<e.inArray(this.value,a)&&s._toggleState("selected",t).call(this)}),n.length&&this.element.trigger("change")},_toggleDisabled:function(e){this.button.attr({disabled:e,"aria-disabled":e})[e?"addClass":"removeClass"]("ui-state-disabled"),this.menu.find("input").attr({disabled:e,"aria-disabled":e}).parent()[e?"addClass":"removeClass"]("ui-state-disabled"),this.element.attr({disabled:e,"aria-disabled":e})},open:function(){var t=this.button,i=this.menu,n=this.speed,s=this.options;if(!1!==this._trigger("beforeopen")&&!t.hasClass("ui-state-disabled")&&!this._isOpen){var a=i.find("ul").last(),o=s.show,r=t.offset();e.isArray(s.show)&&(o=s.show[0],n=s.show[1]||this.speed),a.scrollTop(0).height(s.height),e.ui.position&&!e.isEmptyObject(s.position)?(s.position.of=s.position.of||t,i.show().position(s.position).hide().show(o,n)):i.css({top:r.top+t.outerHeight(),left:r.left}).show(o,n),this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus"),t.addClass("ui-state-active"),this._isOpen=!0,this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var t=this.options,i=t.hide,n=this.speed;e.isArray(t.hide)&&(i=t.hide[0],n=t.hide[1]||this.speed),this.menu.hide(i,n),this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave"),this._isOpen=!1,this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0),this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1),this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter("[checked]")},destroy:function(){return e.Widget.prototype.destroy.call(this),this.button.remove(),this.menu.remove(),this.element.show(),this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},_setOption:function(t,i){var n=this.menu;switch(t){case"header":n.find("div.ui-multiselect-header")[i?"show":"hide"]();break;case"checkAllText":n.find("a.ui-multiselect-all span").eq(-1).text(i);break;case"uncheckAllText":n.find("a.ui-multiselect-none span").eq(-1).text(i);break;case"height":n.find("ul").last().height(parseInt(i,10));break;case"minWidth":this.options[t]=parseInt(i,10),this._setButtonWidth(),this._setMenuWidth();break;case"selectedText":case"selectedList":case"noneSelectedText":this.options[t]=i,this.update();break;case"classes":n.add(this.button).removeClass(this.options.classes).addClass(i)}e.Widget.prototype._setOption.apply(this,arguments)}})}(jQuery);