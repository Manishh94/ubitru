!function(e,t,i){function n(e){var t={},n=/^jQuery\d+$/;return i.each(e.attributes,function(e,i){i.specified&&!n.test(i.name)&&(t[i.name]=i.value)}),t}function s(e,n){var s=this,o=i(s);if(s.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=n;o.focus()}else s.value="",o.removeClass("placeholder"),s==t.activeElement&&s.select()}function o(){var e,t=this,o=i(t),a=this.id;if(""==t.value){if("password"==t.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(r){e=i("<input>").attr(i.extend(n(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":a}).bind("focus.placeholder",s),o.data({"placeholder-textinput":e,"placeholder-id":a}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")||o.attr("placeholder-value")}else o.removeClass("placeholder")}var a,r,l="placeholder"in t.createElement("input"),c="placeholder"in t.createElement("textarea"),h=i.fn,u=i.valHooks;l&&c?(r=h.placeholder=function(){return this},r.input=r.textarea=!0):(r=h.placeholder=function(){var e=this;return e.filter((l?"textarea":":input")+"[placeholder], "+(l?"textarea":":input")+"[placeholder-value]").not(".placeholder").bind({"focus.placeholder":s,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},r.input=l,r.textarea=c,a={get:function(e){var t=i(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,n){var a=i(e);return a.data("placeholder-enabled")?(""==n?(e.value=n,e!=t.activeElement&&o.call(e)):a.hasClass("placeholder")?s.call(e,!0,n)||(e.value=n):e.value=n,a):e.value=n}},l||(u.input=a),c||(u.textarea=a),i(function(){i(t).delegate("form","submit.placeholder",function(){var e=i(".placeholder",this).each(s);setTimeout(function(){e.each(o)},10)})}),i(e).bind("beforeunload.placeholder",function(){i(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);