/*
 * jQuery Iframe Transport Plugin 1.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(window.jQuery)}(function(t){"use strict";var e=0;t.ajaxTransport("iframe",function(i){if(i.async&&("POST"===i.type||"GET"===i.type)){var n,s;return{send:function(o,a){n=t('<form style="display:none;"></form>'),s=t('<iframe src="javascript:false;" name="iframe-transport-'+(e+=1)+'"></iframe>').bind("load",function(){var e;s.unbind("load").bind("load",function(){var e;try{if(e=s.contents(),!e.length||!e[0].firstChild)throw new Error}catch(i){e=void 0}a(200,"success",{iframe:e}),t('<iframe src="javascript:false;"></iframe>').appendTo(n),n.remove()}),n.prop("target",s.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&t.each(i.formData,function(e,i){t('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)}),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(e=i.fileInput.clone(),i.fileInput.after(function(t){return e[t]}),i.paramName&&i.fileInput.each(function(){t(this).prop("name",i.paramName)}),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),e&&e.length&&i.fileInput.each(function(i,n){var s=t(e[i]);t(n).prop("name",s.prop("name")),s.replaceWith(n)})}),n.append(s).appendTo(document.body)},abort:function(){s&&s.unbind("load").prop("src","javascript".concat(":false;")),n&&n.remove()}}}}),t.ajaxSetup({converters:{"iframe text":function(e){return t(e[0].body).text()},"iframe json":function(e){return t.parseJSON(t(e[0].body).text())},"iframe html":function(e){return t(e[0].body).html()},"iframe script":function(e){return t.globalEval(t(e[0].body).text())}}})});