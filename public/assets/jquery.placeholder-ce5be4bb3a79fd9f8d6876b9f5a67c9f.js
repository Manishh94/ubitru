!function(e,t,i){function n(e){var t={},n=/^jQuery\d+$/;return i.each(e.attributes,function(e,i){i.specified&&!n.test(i.name)&&(t[i.name]=i.value)}),t}function s(e,n){var s=this,a=i(s);if(s.value==a.attr("placeholder")&&a.hasClass("placeholder"))if(a.data("placeholder-password")){if(a=a.hide().next().show().attr("id",a.removeAttr("id").data("placeholder-id")),e===!0)return a[0].value=n;a.focus()}else s.value="",a.removeClass("placeholder"),s==t.activeElement&&s.select()}function a(){var e,t=this,a=i(t),o=this.id;if(""==t.value){if("password"==t.type){if(!a.data("placeholder-textinput")){try{e=a.clone().attr({type:"text"})}catch(r){e=i("<input>").attr(i.extend(n(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":o}).bind("focus.placeholder",s),a.data({"placeholder-textinput":e,"placeholder-id":o}).before(e)}a=a.removeAttr("id").hide().prev().attr("id",o).show()}a.addClass("placeholder"),a[0].value=a.attr("placeholder")||a.attr("placeholder-value")}else a.removeClass("placeholder")}var o,r,l="placeholder"in t.createElement("input"),c="placeholder"in t.createElement("textarea"),u=i.fn,h=i.valHooks;l&&c?(r=u.placeholder=function(){return this},r.input=r.textarea=!0):(r=u.placeholder=function(){var e=this;return e.filter((l?"textarea":":input")+"[placeholder], "+(l?"textarea":":input")+"[placeholder-value]").not(".placeholder").bind({"focus.placeholder":s,"blur.placeholder":a}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},r.input=l,r.textarea=c,o={get:function(e){var t=i(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,n){var o=i(e);return o.data("placeholder-enabled")?(""==n?(e.value=n,e!=t.activeElement&&a.call(e)):o.hasClass("placeholder")?s.call(e,!0,n)||(e.value=n):e.value=n,o):e.value=n}},l||(h.input=o),c||(h.textarea=o),i(function(){i(t).delegate("form","submit.placeholder",function(){var e=i(".placeholder",this).each(s);setTimeout(function(){e.each(a)},10)})}),i(e).bind("beforeunload.placeholder",function(){i(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);