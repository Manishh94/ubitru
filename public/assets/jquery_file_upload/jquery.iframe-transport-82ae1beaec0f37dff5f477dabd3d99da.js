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
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(i){if(i.async&&("POST"===i.type||"GET"===i.type)){var n,s;return{send:function(a,o){n=e('<form style="display:none;"></form>'),s=e('<iframe src="javascript:false;" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",function(){var t;s.unbind("load").bind("load",function(){var t;try{if(t=s.contents(),!t.length||!t[0].firstChild)throw new Error}catch(i){t=void 0}o(200,"success",{iframe:t}),e('<iframe src="javascript:false;"></iframe>').appendTo(n),n.remove()}),n.prop("target",s.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)}),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after(function(e){return t[e]}),i.paramName&&i.fileInput.each(function(){e(this).prop("name",i.paramName)}),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),t&&t.length&&i.fileInput.each(function(i,n){var s=e(t[i]);e(n).prop("name",s.prop("name")),s.replaceWith(n)})}),n.append(s).appendTo(document.body)},abort:function(){s&&s.unbind("load").prop("src","javascript".concat(":false;")),n&&n.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return e(t[0].body).text()},"iframe json":function(t){return e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return e(t[0].body).html()},"iframe script":function(t){return e.globalEval(e(t[0].body).text())}}})});