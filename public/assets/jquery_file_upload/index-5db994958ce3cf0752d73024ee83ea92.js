!function(e){"use strict";var t=function(e,i){var n=/[^\w\-\.:]/.test(e)?new Function(t.arg+",tmpl","var _e=tmpl.encode"+t.helper+",_s='"+e.replace(t.regexp,t.func)+"';return _s;"):t.cache[e]=t.cache[e]||t(t.load(e));return i?n(i,t):function(e){return n(e,t)}};t.cache={},t.load=function(e){return document.getElementById(e).innerHTML},t.regexp=/([\s'\\])(?![^%]*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,t.func=function(e,t,i,n,s,a){return t?{"\n":"\\n","\r":"\\r","	":"\\t"," ":" "}[e]||"\\"+e:i?"="===i?"'+_e("+n+")+'":"'+("+n+"||'')+'":s?"';":a?"_s+='":void 0},t.encReg=/[<>&"'\x00]/g,t.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},t.encode=function(e){return String(e||"").replace(t.encReg,function(e){return t.encMap[e]||""})},t.arg="o",t.helper=",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return t}):e.tmpl=t}(this),function(e){"use strict";var t=function(e,i,n){var s,a,o=document.createElement("img");return o.onerror=i,o.onload=function(){a&&t.revokeObjectURL(a),i(t.scale(o,n))},s=window.Blob&&e instanceof Blob||window.File&&e instanceof File?a=t.createObjectURL(e):e,s?(o.src=s,o):t.readFile(e,function(e){o.src=e})},i=window.createObjectURL&&window||window.URL&&URL||window.webkitURL&&webkitURL;t.scale=function(e,t){t=t||{};var i=document.createElement("canvas"),n=Math.max((t.minWidth||e.width)/e.width,(t.minHeight||e.height)/e.height);return n>1&&(e.width=parseInt(e.width*n,10),e.height=parseInt(e.height*n,10)),n=Math.min((t.maxWidth||e.width)/e.width,(t.maxHeight||e.height)/e.height),1>n&&(e.width=parseInt(e.width*n,10),e.height=parseInt(e.height*n,10)),t.canvas&&i.getContext?(i.width=e.width,i.height=e.height,i.getContext("2d").drawImage(e,0,0,e.width,e.height),i):e},t.createObjectURL=function(e){return i?i.createObjectURL(e):!1},t.revokeObjectURL=function(e){return i?i.revokeObjectURL(e):!1},t.readFile=function(e,t){if(window.FileReader&&FileReader.prototype.readAsDataURL){var i=new FileReader;return i.onload=function(e){t(e.target.result)},i.readAsDataURL(e),i}return!1},"undefined"!=typeof define&&define.amd?define(function(){return t}):e.loadImage=t}(this),function(e){"use strict";var t=window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder,i=/^image\/(jpeg|png)$/,n=function(e,s,a){if(a=a||{},e.toBlob)return e.toBlob(s,a.type),!0;if(e.mozGetAsFile){var o=a.name;return s(e.mozGetAsFile(i.test(a.type)&&o||(o&&o.replace(/\..+$/,"")||"blob")+".png",a.type)),!0}return e.toDataURL&&t&&window.atob&&window.ArrayBuffer&&window.Uint8Array?(s(n.dataURItoBlob(e.toDataURL(a.type))),!0):!1};n.dataURItoBlob=function(e){var i,n,s,a,o,r;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),n=new ArrayBuffer(i.length),s=new Uint8Array(n),a=0;a<i.length;a+=1)s[a]=i.charCodeAt(a);return o=new t,o.append(n),r=e.split(",")[0].split(":")[1].split(";")[0],o.getBlob(r)},"undefined"!=typeof define&&define.amd?define(function(){return n}):e.canvasToBlob=n}(this),/*
 * jQuery Iframe Transport Plugin 1.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(i){if(i.async&&("POST"===i.type||"GET"===i.type)){var n,s;return{send:function(a,o){n=e('<form style="display:none;"></form>'),s=e('<iframe src="javascript:false;" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",function(){var t;s.unbind("load").bind("load",function(){var t;try{if(t=s.contents(),!t.length||!t[0].firstChild)throw new Error}catch(i){t=void 0}o(200,"success",{iframe:t}),e('<iframe src="javascript:false;"></iframe>').appendTo(n),n.remove()}),n.prop("target",s.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)}),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after(function(e){return t[e]}),i.paramName&&i.fileInput.each(function(){e(this).prop("name",i.paramName)}),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),t&&t.length&&i.fileInput.each(function(i,n){var s=e(t[i]);e(n).prop("name",s.prop("name")),s.replaceWith(n)})}),n.append(s).appendTo(document.body)},abort:function(){s&&s.unbind("load").prop("src","javascript".concat(":false;")),n&&n.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return e(t[0].body).text()},"iframe json":function(t){return e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return e(t[0].body).html()},"iframe script":function(t){return e.globalEval(e(t[0].body).text())}}})}),/*
 * jQuery File Upload Plugin 5.8
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./vendor/jquery.ui.widget","./jquery.iframe-transport"],e):e(window.jQuery)}(function(e){"use strict";e.widget("blueimp.fileupload",{options:{namespace:void 0,dropZone:e(document),fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,formData:function(e){return e.serializeArray()},add:function(e,t){t.submit()},processData:!1,contentType:!1,cache:!1},_refreshOptionsList:["namespace","dropZone","fileInput"],_isXHRUpload:function(e){var t="undefined";return!(e.forceIframeTransport||typeof XMLHttpRequestUpload===t||typeof File===t||e.multipart&&typeof FormData===t)},_getFormData:function(t){var i;return"function"==typeof t.formData?t.formData(t.form):e.isArray(t.formData)?t.formData:t.formData?(i=[],e.each(t.formData,function(e,t){i.push({name:e,value:t})}),i):[]},_getTotal:function(t){var i=0;return e.each(t,function(e,t){i+=t.size||1}),i},_onProgress:function(e,t){if(e.lengthComputable){var i=t.total||this._getTotal(t.files),n=parseInt(e.loaded/e.total*(t.chunkSize||i),10)+(t.uploadedBytes||0);this._loaded+=n-(t.loaded||t.uploadedBytes||0),t.lengthComputable=!0,t.loaded=n,t.total=i,this._trigger("progress",e,t),this._trigger("progressall",e,{lengthComputable:!0,loaded:this._loaded,total:this._total})}},_initProgressListener:function(t){var i=this,n=t.xhr?t.xhr():e.ajaxSettings.xhr();n.upload&&(e(n.upload).bind("progress",function(e){var n=e.originalEvent;e.lengthComputable=n.lengthComputable,e.loaded=n.loaded,e.total=n.total,i._onProgress(e,t)}),t.xhr=function(){return n})},_initXHRData:function(t){var i,n=t.files[0];(!t.multipart||t.blob)&&(t.headers=e.extend(t.headers,{"X-File-Name":n.name,"X-File-Type":n.type,"X-File-Size":n.size}),t.blob?t.multipart||(t.contentType="application/octet-stream",t.data=t.blob):(t.contentType=n.type,t.data=n)),t.multipart&&"undefined"!=typeof FormData&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:t.paramName,value:t.blob}):e.each(t.files,function(e,n){i.push({name:t.paramName,value:n})})):(t.formData instanceof FormData?i=t.formData:(i=new FormData,e.each(this._getFormData(t),function(e,t){i.append(t.name,t.value)})),t.blob?i.append(t.paramName,t.blob,n.name):e.each(t.files,function(e,n){n instanceof Blob&&i.append(t.paramName,n,n.name)})),t.data=i),t.blob=null},_initIframeSettings:function(t){t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&e("<a></a>").prop("href",t.url).prop("host")!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e,"iframe")},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form"))),t.paramName||(t.paramName=t.fileInput.prop("name")||"files[]"),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&(t.type="POST")},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,n){var s=e.Deferred(),a=s.promise();return i=i||this.options.context||a,t===!0?s.resolveWith(i,n):t===!1&&s.rejectWith(i,n),a.abort=s.promise,this._enhancePromise(a)},_chunkedUpload:function(t,i){var n,s,a,o,r=this,l=t.files[0],c=l.size,u=t.uploadedBytes=t.uploadedBytes||0,d=t.maxChunkSize||c,h=l.webkitSlice||l.mozSlice||l.slice;return this._isXHRUpload(t)&&h&&(u||c>d)&&!t.data?i?!0:u>=c?(l.error="uploadedBytes",this._getXHRPromise(!1,t.context,[null,"error",l.error])):(s=Math.ceil((c-u)/d),n=function(i){return i?n(i-=1).pipe(function(){var n=e.extend({},t);return n.blob=h.call(l,u+i*d,u+(i+1)*d),n.chunkSize=n.blob.size,r._initXHRData(n),r._initProgressListener(n),a=(e.ajax(n)||r._getXHRPromise(!1,n.context)).done(function(){n.loaded||r._onProgress(e.Event("progress",{lengthComputable:!0,loaded:n.chunkSize,total:n.chunkSize}),n),t.uploadedBytes=n.uploadedBytes+=n.chunkSize})}):r._getXHRPromise(!0,t.context)},o=n(s),o.abort=function(){return a.abort()},this._enhancePromise(o)):!1},_beforeSend:function(e,t){0===this._active&&this._trigger("start"),this._active+=1,this._loaded+=t.uploadedBytes||0,this._total+=this._getTotal(t.files)},_onDone:function(t,i,n,s){this._isXHRUpload(s)||this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:1,total:1}),s),s.result=t,s.textStatus=i,s.jqXHR=n,this._trigger("done",null,s)},_onFail:function(e,t,i,n){n.jqXHR=e,n.textStatus=t,n.errorThrown=i,this._trigger("fail",null,n),n.recalculateProgress&&(this._loaded-=n.loaded||n.uploadedBytes||0,this._total-=n.total||this._getTotal(n.files))},_onAlways:function(e,t,i,n){this._active-=1,n.textStatus=t,i&&i.always?(n.jqXHR=i,n.result=e):(n.jqXHR=e,n.errorThrown=i),this._trigger("always",null,n),0===this._active&&(this._trigger("stop"),this._loaded=this._total=0)},_onSend:function(t,i){var n,s,a,o=this,r=o._getAJAXSettings(i),l=function(i,s){return o._sending+=1,n=n||(i!==!1&&o._trigger("send",t,r)!==!1&&(o._chunkedUpload(r)||e.ajax(r))||o._getXHRPromise(!1,r.context,s)).done(function(e,t,i){o._onDone(e,t,i,r)}).fail(function(e,t,i){o._onFail(e,t,i,r)}).always(function(e,t,i){if(o._sending-=1,o._onAlways(e,t,i,r),r.limitConcurrentUploads&&r.limitConcurrentUploads>o._sending)for(var n=o._slots.shift();n;){if(!n.isRejected()){n.resolve();break}n=o._slots.shift()}})};return this._beforeSend(t,r),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(s=e.Deferred(),this._slots.push(s),a=s.pipe(l)):a=this._sequence=this._sequence.pipe(l,l),a.abort=function(){var e=[void 0,"abort","abort"];return n?n.abort():(s&&s.rejectWith(e),l(!1,e))},this._enhancePromise(a)):l()},_onAdd:function(t,i){var n,s,a=this,o=!0,r=e.extend({},this.options,i),l=r.limitMultiFileUploads;if((r.singleFileUploads||l)&&this._isXHRUpload(r)){if(!r.singleFileUploads&&l)for(n=[],s=0;s<i.files.length;s+=l)n.push(i.files.slice(s,s+l))}else n=[i.files];return i.originalFiles=i.files,e.each(n||i.files,function(s,r){var l=n?r:[r],c=e.extend({},i,{files:l});return c.submit=function(){return c.jqXHR=this.jqXHR=a._trigger("submit",t,this)!==!1&&a._onSend(t,this),this.jqXHR},o=a._trigger("add",t,c)}),o},_normalizeFile:function(e,t){void 0===t.name&&void 0===t.size&&(t.name=t.fileName,t.size=t.fileSize)},_replaceFileInput:function(t){var i=t.clone(!0);e("<form></form>").append(i)[0].reset(),t.after(i).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(e,n){return n===t[0]?i[0]:n}),t[0]===this.element[0]&&(this.element=i)},_onChange:function(t){var i=t.data.fileupload,n={files:e.each(e.makeArray(t.target.files),i._normalizeFile),fileInput:e(t.target),form:e(t.target.form)};return n.files.length||(n.files=[{name:t.target.value.replace(/^.*\\/,"")}]),i.options.replaceFileInput&&i._replaceFileInput(n.fileInput),i._trigger("change",t,n)===!1||i._onAdd(t,n)===!1?!1:void 0},_onPaste:function(t){var i=t.data.fileupload,n=t.originalEvent.clipboardData,s=n&&n.items||[],a={files:[]};return e.each(s,function(e,t){var i=t.getAsFile&&t.getAsFile();i&&a.files.push(i)}),i._trigger("paste",t,a)===!1||i._onAdd(t,a)===!1?!1:void 0},_onDrop:function(t){var i=t.data.fileupload,n=t.dataTransfer=t.originalEvent.dataTransfer,s={files:e.each(e.makeArray(n&&n.files),i._normalizeFile)};return i._trigger("drop",t,s)===!1||i._onAdd(t,s)===!1?!1:(t.preventDefault(),void 0)},_onDragOver:function(e){var t=e.data.fileupload,i=e.dataTransfer=e.originalEvent.dataTransfer;return t._trigger("dragover",e)===!1?!1:(i&&(i.dropEffect=i.effectAllowed="copy"),e.preventDefault(),void 0)},_initEventHandlers:function(){var e=this.options.namespace;this.options.dropZone.bind("dragover."+e,{fileupload:this},this._onDragOver).bind("drop."+e,{fileupload:this},this._onDrop).bind("paste."+e,{fileupload:this},this._onPaste),this.options.fileInput.bind("change."+e,{fileupload:this},this._onChange)},_destroyEventHandlers:function(){var e=this.options.namespace;this.options.dropZone.unbind("dragover."+e,this._onDragOver).unbind("drop."+e,this._onDrop).unbind("paste."+e,this._onPaste),this.options.fileInput.unbind("change."+e,this._onChange)},_setOption:function(t,i){var n=-1!==e.inArray(t,this._refreshOptionsList);n&&this._destroyEventHandlers(),e.Widget.prototype._setOption.call(this,t,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is("input:file")?this.element:this.element.find("input:file"):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone))},_create:function(){var t=this.options,i=e.extend({},this.element.data());i[this.widgetName]=void 0,e.extend(t,i),t.namespace=t.namespace||this.widgetName,this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=this._loaded=this._total=0,this._initEventHandlers()},destroy:function(){this._destroyEventHandlers(),e.Widget.prototype.destroy.call(this)},enable:function(){e.Widget.prototype.enable.call(this),this._initEventHandlers()},disable:function(){this._destroyEventHandlers(),e.Widget.prototype.disable.call(this)},add:function(t){t&&!this.options.disabled&&(t.files=e.each(e.makeArray(t.files),this._normalizeFile),this._onAdd(null,t))},send:function(t){return t&&!this.options.disabled&&(t.files=e.each(e.makeArray(t.files),this._normalizeFile),t.files.length)?this._onSend(null,t):this._getXHRPromise(!1,t&&t.context)}})}),/*
 * jQuery File Upload Image Processing Plugin 1.0.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./load-image.js","./canvas-to-blob.js","./jquery.fileupload.js"],e):e(window.jQuery,window.loadImage,window.canvasToBlob)}(function(e,t,i){"use strict";e.widget("blueimpIP.fileupload",e.blueimp.fileupload,{options:{resizeSourceFileTypes:/^image\/(gif|jpeg|png)$/,resizeSourceMaxFileSize:2e7,resizeMaxWidth:void 0,resizeMaxHeight:void 0,resizeMinWidth:void 0,resizeMinHeight:void 0,add:function(t,i){e(this).fileupload("resize",i).done(function(){i.submit()})}},_resizeImage:function(n,s){var a,o=this,r=this.options,l=n[s],c=e.Deferred();return t(l,function(e){var u=e.width,d=e.height;a=t.scale(e,{maxWidth:r.resizeMaxWidth,maxHeight:r.resizeMaxHeight,minWidth:r.resizeMinWidth,minHeight:r.resizeMinHeight,canvas:!0}),u!==a.width||d!==a.height?i(a,function(e){e.name||(l.type===e.type?e.name=l.name:l.name&&(e.name=l.name.replace(/\..+$/,"."+e.type.substr(6)))),n[s]=e,c.resolveWith(o)},l):c.resolveWith(o)}),c.promise()},resize:function(t){var i=this,n=e.extend({},this.options,t),s="number"!==e.type(n.resizeSourceMaxFileSize);return e.each(t.files,function(a,o){i._resizeSupport&&(n.resizeMaxWidth||n.resizeMaxHeight||n.resizeMinWidth||n.resizeMinHeight)&&(s||o.size<n.resizeSourceMaxFileSize)&&n.resizeSourceFileTypes.test(o.type)&&(i._processing+=1,1===i._processing&&i.element.addClass("fileupload-processing"),i._processingQueue=i._processingQueue.pipe(function(){var n=e.Deferred();return i._resizeImage(t.files,a).done(function(){i._processing-=1,0===i._processing&&i.element.removeClass("fileupload-processing"),n.resolveWith(i)}),n.promise()}))}),this._processingQueue},_create:function(){e.blueimp.fileupload.prototype._create.call(this),this._processing=0,this._processingQueue=e.Deferred().resolveWith(this).promise(),this._resizeSupport=i(document.createElement("canvas"),e.noop)}})}),/*
 * jQuery File Upload User Interface Plugin 6.5.4
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./tmpl.js","./load-image.js","./jquery.fileupload-ip.js"],e):e(window.jQuery,window.tmpl,window.loadImage)}(function(e,t,i){"use strict";e.widget("blueimpUI.fileupload",e.blueimpIP.fileupload,{options:{autoUpload:!1,maxNumberOfFiles:void 0,maxFileSize:void 0,minFileSize:void 0,acceptFileTypes:/.+$/i,previewSourceFileTypes:/^image\/(gif|jpeg|png)$/,previewSourceMaxFileSize:5e6,previewMaxWidth:80,previewMaxHeight:80,previewAsCanvas:!0,uploadTemplateId:"template-upload",downloadTemplateId:"template-download",dataType:"json",add:function(t,i){var n=e(this).data("fileupload"),s=n.options,a=i.files;n._adjustMaxNumberOfFiles(-a.length),i.isAdjusted=!0,e(this).fileupload("resize",i).done(i,function(){i.files.valid=i.isValidated=n._validate(a),i.context=n._renderUpload(a).appendTo(n._files).data("data",i),n._renderPreviews(a,i.context),n._reflow=e.support.transition&&i.context[0].offsetWidth,n._transition(i.context).done(function(){n._trigger("added",t,i)!==!1&&(s.autoUpload||i.autoUpload)&&i.autoUpload!==!1&&i.isValidated&&i.submit()})})},send:function(t,i){var n=e(this).data("fileupload");return i.isValidated||(i.isAdjusted||n._adjustMaxNumberOfFiles(-i.files.length),n._validate(i.files))?(i.context&&i.dataType&&"iframe"===i.dataType.substr(0,6)&&i.context.find(".progress").addClass(!e.support.transition&&"progress-animated").find(".bar").css("width",parseInt(100,10)+"%"),n._trigger("sent",t,i)):!1},done:function(t,i){var n,s=e(this).data("fileupload");i.context?i.context.each(function(a){var o=e.isArray(i.result)&&i.result[a]||{error:"emptyResult"};o.error&&s._adjustMaxNumberOfFiles(1),s._transition(e(this)).done(function(){var a=e(this);n=s._renderDownload([o]).css("height",a.height()).replaceAll(a),s._reflow=e.support.transition&&n[0].offsetWidth,s._transition(n).done(function(){i.context=e(this),s._trigger("completed",t,i)})})}):(n=s._renderDownload(i.result).appendTo(s._files),s._reflow=e.support.transition&&n[0].offsetWidth,s._transition(n).done(function(){i.context=e(this),s._trigger("completed",t,i)}))},fail:function(t,i){var n,s=e(this).data("fileupload");s._adjustMaxNumberOfFiles(i.files.length),i.context?i.context.each(function(a){if("abort"!==i.errorThrown){var o=i.files[a];o.error=o.error||i.errorThrown||!0,s._transition(e(this)).done(function(){var a=e(this);n=s._renderDownload([o]).replaceAll(a),s._reflow=e.support.transition&&n[0].offsetWidth,s._transition(n).done(function(){i.context=e(this),s._trigger("failed",t,i)})})}else s._transition(e(this)).done(function(){e(this).remove(),s._trigger("failed",t,i)})}):"abort"!==i.errorThrown?(s._adjustMaxNumberOfFiles(-i.files.length),i.context=s._renderUpload(i.files).appendTo(s._files).data("data",i),s._reflow=e.support.transition&&i.context[0].offsetWidth,s._transition(i.context).done(function(){i.context=e(this),s._trigger("failed",t,i)})):s._trigger("failed",t,i)},progress:function(e,t){t.context&&t.context.find(".progress .bar").css("width",parseInt(100*(t.loaded/t.total),10)+"%")},progressall:function(t,i){e(this).find(".fileupload-buttonbar .progress .bar").css("width",parseInt(100*(i.loaded/i.total),10)+"%")},start:function(t){var i=e(this).data("fileupload");i._transition(e(this).find(".fileupload-buttonbar .progress")).done(function(){i._trigger("started",t)})},stop:function(t){var i=e(this).data("fileupload");i._transition(e(this).find(".fileupload-buttonbar .progress")).done(function(){e(this).find(".bar").css("width","0%"),i._trigger("stopped",t)})},destroy:function(t,i){var n=e(this).data("fileupload");i.url&&e.ajax(i),n._adjustMaxNumberOfFiles(1),n._transition(i.context).done(function(){e(this).remove(),n._trigger("destroyed",t,i)})}},_enableDragToDesktop:function(){var t=e(this),i=t.prop("href"),n=t.prop("download"),s="application/octet-stream";t.bind("dragstart",function(e){try{e.originalEvent.dataTransfer.setData("DownloadURL",[s,n,i].join(":"))}catch(t){}})},_adjustMaxNumberOfFiles:function(e){"number"==typeof this.options.maxNumberOfFiles&&(this.options.maxNumberOfFiles+=e,this.options.maxNumberOfFiles<1?this._disableFileInputButton():this._enableFileInputButton())},_formatFileSize:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"},_hasError:function(e){return e.error?e.error:this.options.maxNumberOfFiles<0?"maxNumberOfFiles":this.options.acceptFileTypes.test(e.type)||this.options.acceptFileTypes.test(e.name)?this.options.maxFileSize&&e.size>this.options.maxFileSize?"maxFileSize":"number"==typeof e.size&&e.size<this.options.minFileSize?"minFileSize":null:"acceptFileTypes"},_validate:function(t){var i=this,n=!!t.length;return e.each(t,function(e,t){t.error=i._hasError(t),t.error&&(n=!1)}),n},_renderTemplate:function(t,i){return e(this.options.templateContainer).html(t({files:i,formatFileSize:this._formatFileSize,options:this.options})).children()},_renderPreview:function(t,n){var s=this,a=this.options,o=e.Deferred();return(i(t,function(t){n.append(t),s._reflow=e.support.transition&&n[0].offsetWidth,s._transition(n).done(function(){o.resolveWith(n)})},{maxWidth:a.previewMaxWidth,maxHeight:a.previewMaxHeight,canvas:a.previewAsCanvas})||o.resolveWith(n))&&o},_renderPreviews:function(t,i){var n=this,s=this.options;return i.find(".preview span").each(function(i,a){var o=t[i];s.previewSourceFileTypes.test(o.type)&&("number"!==e.type(s.previewSourceMaxFileSize)||o.size<s.previewSourceMaxFileSize)&&(n._processingQueue=n._processingQueue.pipe(function(){var t=e.Deferred();return n._renderPreview(o,e(a)).done(function(){t.resolveWith(n)}),t.promise()}))}),this._processingQueue},_renderUpload:function(e){return this._renderTemplate(this.options.uploadTemplate,e)},_renderDownload:function(e){return this._renderTemplate(this.options.downloadTemplate,e).find("a[download]").each(this._enableDragToDesktop).end()},_startHandler:function(t){t.preventDefault();var i=e(this),n=i.closest(".template-upload"),s=n.data("data");s&&s.submit&&!s.jqXHR&&s.submit()&&i.prop("disabled",!0)},_cancelHandler:function(t){t.preventDefault();var i=e(this).closest(".template-upload"),n=i.data("data")||{};n.jqXHR?n.jqXHR.abort():(n.errorThrown="abort",t.data.fileupload._trigger("fail",t,n))},_deleteHandler:function(t){t.preventDefault();var i=e(this);t.data.fileupload._trigger("destroy",t,{context:i.closest(".template-download"),url:i.attr("data-url"),type:i.attr("data-type"),dataType:t.data.fileupload.options.dataType})},_transition:function(t){var i=e.Deferred();return e.support.transition&&t.hasClass("fade")?t.bind(e.support.transition.end,function(n){n.target===t[0]&&(t.unbind(e.support.transition.end),i.resolveWith(t))}).toggleClass("in"):(t.toggleClass("in"),i.resolveWith(t)),i},_initButtonBarEventHandlers:function(){var t=this.element.find(".fileupload-buttonbar"),i=this._files,n=this.options.namespace;t.find(".start").bind("click."+n,function(e){e.preventDefault(),i.find(".start button").click()}),t.find(".cancel").bind("click."+n,function(e){e.preventDefault(),i.find(".cancel button").click()}),t.find(".delete").bind("click."+n,function(e){e.preventDefault(),i.find(".delete input:checked").siblings("button").click(),t.find(".toggle").prop("checked",!1)}),t.find(".toggle").bind("change."+n,function(){i.find(".delete input").prop("checked",e(this).is(":checked"))})},_destroyButtonBarEventHandlers:function(){this.element.find(".fileupload-buttonbar button").unbind("click."+this.options.namespace),this.element.find(".fileupload-buttonbar .toggle").unbind("change."+this.options.namespace)},_initEventHandlers:function(){e.blueimpIP.fileupload.prototype._initEventHandlers.call(this);var t={fileupload:this};this._files.delegate(".start button","click."+this.options.namespace,t,this._startHandler).delegate(".cancel button","click."+this.options.namespace,t,this._cancelHandler).delegate(".delete button","click."+this.options.namespace,t,this._deleteHandler),this._initButtonBarEventHandlers()},_destroyEventHandlers:function(){this._destroyButtonBarEventHandlers(),this._files.undelegate(".start button","click."+this.options.namespace).undelegate(".cancel button","click."+this.options.namespace).undelegate(".delete button","click."+this.options.namespace),e.blueimpIP.fileupload.prototype._destroyEventHandlers.call(this)},_enableFileInputButton:function(){this.element.find(".fileinput-button input").prop("disabled",!1).parent().removeClass("disabled")},_disableFileInputButton:function(){this.element.find(".fileinput-button input").prop("disabled",!0).parent().addClass("disabled")},_initTemplates:function(){var e=this.options;e.templateContainer=document.createElement(this._files.prop("nodeName")),e.uploadTemplate=t(e.uploadTemplateId),e.downloadTemplate=t(e.downloadTemplateId)},_initFiles:function(){this._files=this.element.find(".files")},_create:function(){this._initFiles(),e.blueimpIP.fileupload.prototype._create.call(this),this._initTemplates()},enable:function(){e.blueimpIP.fileupload.prototype.enable.call(this),this.element.find("input, button").prop("disabled",!1),this._enableFileInputButton()},disable:function(){this.element.find("input, button").prop("disabled",!0),this._disableFileInputButton(),e.blueimpIP.fileupload.prototype.disable.call(this)}})}),/*
 * jQuery File Upload Plugin Localization Example 6.5
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
window.locale={fileupload:{errors:{maxFileSize:"File is too big",minFileSize:"File is too small",acceptFileTypes:"Filetype not allowed",maxNumberOfFiles:"No more files allowed",uploadedBytes:"Uploaded bytes exceed file size",emptyResult:"Empty file upload result"},error:"Error",start:"Start",cancel:"Cancel",destroy:"Delete"}};