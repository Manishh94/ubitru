/*!
 * Rails 3 Client Side Validations - v3.1.4
 * https://github.com/bcardarlela/client_side_validations
 *
 * Copyright (c) 2011 Brian Cardarella
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
!function(t){t.fn.validate=function(){return this.filter("form[data-validate]").each(function(){var e=t(this),i=window[e.attr("id")];e.submit(function(){return e.isValid(i.validators)}).bind("ajax:beforeSend",function(t){return t.target==this?e.isValid(i.validators):void 0}).bind("form:validate:after",function(t){clientSideValidations.callbacks.form.after(e,t)}).bind("form:validate:before",function(t){clientSideValidations.callbacks.form.before(e,t)}).bind("form:validate:fail",function(t){clientSideValidations.callbacks.form.fail(e,t)}).bind("form:validate:pass",function(t){clientSideValidations.callbacks.form.pass(e,t)}).find("[data-validate]:input:not(:radio)").live("focusout",function(){t(this).isValid(i.validators)}).live("change",function(){t(this).data("changed",!0)}).live("element:validate:after",function(e){clientSideValidations.callbacks.element.after(t(this),e)}).live("element:validate:before",function(e){clientSideValidations.callbacks.element.before(t(this),e)}).live("element:validate:fail",function(e,i){var s=t(this);clientSideValidations.callbacks.element.fail(s,i,function(){n(s,i)},e)}).live("element:validate:pass",function(e){var i=t(this);clientSideValidations.callbacks.element.pass(i,function(){s(i)},e)}).end().find("[data-validate]:checkbox").live("click",function(){t(this).isValid(i.validators)}).end().find("[id*=_confirmation]").each(function(){var n=t(this),s=e.find("#"+this.id.match(/(.+)_confirmation/)[1]+"[data-validate]:input");s[0]&&t("#"+n.attr("id")).live("focusout",function(){s.data("changed",!0).isValid(i.validators)}).live("keyup",function(){s.data("changed",!0).isValid(i.validators)})});var n=function(t,e){clientSideValidations.formBuilders[i.type].add(t,i,e)},s=function(t){clientSideValidations.formBuilders[i.type].remove(t,i)}})},t.fn.isValid=function(n){return t(this[0]).is("form")?e(t(this[0]),n):i(t(this[0]),n[this[0].name])};var e=function(e,i){var n=!0;return e.trigger("form:validate:before").find("[data-validate]:input").each(function(){t(this).isValid(i)||(n=!1)}),n?e.trigger("form:validate:pass"):e.trigger("form:validate:fail"),e.trigger("form:validate:after"),n},i=function(t,e){if(t.trigger("element:validate:before"),t.data("changed")!==!1){var i=!0;t.data("changed",!1);for(kind in clientSideValidations.validators.all())if(e[kind]&&(message=clientSideValidations.validators.all()[kind](t,e[kind]))){t.trigger("element:validate:fail",message).data("valid",!1),i=!1;break}i&&(t.data("valid",null),t.trigger("element:validate:pass"))}return t.trigger("element:validate:after"),t.data("valid")===!1?!1:!0};t(function(){t("form[data-validate]").validate()})}(jQuery);var clientSideValidations={validators:{all:function(){return jQuery.extend({},clientSideValidations.validators.local,clientSideValidations.validators.remote)},local:{presence:function(t,e){return/^\s*$/.test(t.val()||"")?e.message:void 0},acceptance:function(t,e){switch(t.attr("type")){case"checkbox":if(!t.attr("checked"))return e.message;break;case"text":if(t.val()!=(e.accept||"1"))return e.message}},format:function(t,e){return(message=this.presence(t,e))&&1==e.allow_blank?void 0:message?message:e["with"]&&!e["with"].test(t.val())?e.message:e.without&&e.without.test(t.val())?e.message:void 0},numericality:function(t,e){if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/.test(t.val())&&""!=t.val())return e.messages.numericality;if(e.only_integer&&!/^[+-]?\d+$/.test(t.val()))return e.messages.only_integer;var i={greater_than:">",greater_than_or_equal_to:">=",equal_to:"==",less_than:"<",less_than_or_equal_to:"<="};for(var n in i)if(void 0!=e[n]&&!new Function("return "+t.val()+i[n]+e[n])())return e.messages[n];return!e.odd||parseInt(t.val())%2?e.even&&parseInt(t.val())%2?e.messages.even:void 0:e.messages.odd},length:function(t,e){var i={};if(e.is?i.message=e.messages.is:e.minimum&&(i.message=e.messages.minimum),!(message=this.presence(t,i))||1!=e.allow_blank){if(message)return message;var n={is:"==",minimum:">=",maximum:"<="},s=e.js_tokenizer||"split('')",o=new Function("element","return (element.val()."+s+" || '').length;")(t);for(var a in n)if(e[a]&&!new Function("return "+o+n[a]+e[a])())return e.messages[a]}},exclusion:function(t,e){if(!(message=this.presence(t,e))||1!=e.allow_blank){if(message)return message;if(e["in"]){for(var i=0;i<e["in"].length;i++)if(e["in"][i]==t.val())return e.message}else if(e.range){var n=e.range[0],s=e.range[1];if(t.val()>=n&&t.val()<=s)return e.message}}},inclusion:function(t,e){if(!(message=this.presence(t,e))||1!=e.allow_blank){if(message)return message;if(e["in"]){for(var i=0;i<e["in"].length;i++)if(e["in"][i]==t.val())return;return e.message}if(e.range){var n=e.range[0],s=e.range[1];return t.val()>=n&&t.val()<=s?void 0:e.message}}},confirmation:function(t,e){return t.val()!=jQuery("#"+t.attr("id")+"_confirmation").val()?e.message:void 0}},remote:{uniqueness:function(t,e){if(!(message=clientSideValidations.validators.local.presence(t,e))||e.allow_blank!==!0){if(message)return message;var i={};if(i.case_sensitive=!!e.case_sensitive,e.id&&(i.id=e.id),e.scope){i.scope={};for(key in e.scope){var n=jQuery('[name="'+t.attr("name").replace(/\[\w+]$/,"["+key+"]"+'"]'));n[0]&&n.val()!=e.scope[key]?(i.scope[key]=n.val(),n.unbind("change."+t.id).bind("change."+t.id,function(){t.trigger("change"),t.trigger("focusout")})):i.scope[key]=e.scope[key]}}if(/_attributes]/.test(t.attr("name"))){var s=t.attr("name").match(/\[\w+_attributes]/g).pop().match(/\[(\w+)_attributes]/).pop();s+=/(\[\w+])$/.exec(t.attr("name"))[1]}else var s=t.attr("name");return e["class"]&&(s=e["class"]+"["+s.split("[")[1]),i[s]=t.val(),200==jQuery.ajax({url:"/validators/uniqueness",data:i,async:!1}).status?e.message:void 0}}}},formBuilders:{"ActionView::Helpers::FormBuilder":{add:function(t,e,i){if(t.data("valid")!==!1&&void 0==jQuery('label.message[for="'+t.attr("id")+'"]')[0]){var n=jQuery(e.input_tag),s=jQuery(e.label_tag),o=jQuery('label[for="'+t.attr("id")+'"]:not(.message)');t.attr("autofocus")&&t.attr("autofocus",!1),t.before(n),n.find("span#input_tag").replaceWith(t),n.find("label.message").attr("for",t.attr("id")),s.find("label.message").attr("for",t.attr("id")),o.replaceWith(s),s.find("label#label_tag").replaceWith(o)}jQuery('label.message[for="'+t.attr("id")+'"]').text(i)},remove:function(t,e){var i=jQuery(e.input_tag).attr("class"),n=t.closest("."+i),s=jQuery('label[for="'+t.attr("id")+'"]:not(.message)'),o=s.closest("."+i);n[0]&&(n.find("#"+t.attr("id")).detach(),n.replaceWith(t),s.detach(),o.replaceWith(s))}},"SimpleForm::FormBuilder":{add:function(t,e,i){if(t.data("valid")!==!1){var n=t.closest(e.wrapper_tag);n.addClass(e.wrapper_error_class);var s=$("<"+e.error_tag+' class="'+e.error_class+'">'+i+"</"+e.error_tag+">");n.append(s)}else t.parent().find(e.error_tag+"."+e.error_class).text(i)},remove:function(t,e){var i=t.closest(e.wrapper_tag+"."+e.wrapper_error_class);i.removeClass(e.wrapper_error_class);var n=i.find(e.error_tag+"."+e.error_class);n.remove()}},"Formtastic::FormBuilder":{add:function(t,e,i){if(t.data("valid")!==!1){var n=t.closest("li");n.addClass("error");var s=$('<p class="'+e.inline_error_class+'">'+i+"</p>");n.append(s)}else t.parent().find("p."+e.inline_error_class).text(i)},remove:function(t,e){var i=t.closest("li.error");i.removeClass("error");var n=i.find("p."+e.inline_error_class);n.remove()}},"NestedForm::Builder":{add:function(t,e,i){clientSideValidations.formBuilders["ActionView::Helpers::FormBuilder"].add(t,e,i)},remove:function(t,e,i){clientSideValidations.formBuilders["ActionView::Helpers::FormBuilder"].remove(t,e,i)}}},callbacks:{element:{after:function(){},before:function(){},fail:function(t,e,i){i()},pass:function(t,e){e()}},form:{after:function(){},before:function(){},fail:function(){},pass:function(){}}}};