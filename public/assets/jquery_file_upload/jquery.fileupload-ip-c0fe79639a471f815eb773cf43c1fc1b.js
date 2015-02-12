/*
 * jQuery File Upload Image Processing Plugin 1.0.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./load-image.js","./canvas-to-blob.js","./jquery.fileupload.js"],e):e(window.jQuery,window.loadImage,window.canvasToBlob)}(function(e,t,i){"use strict";e.widget("blueimpIP.fileupload",e.blueimp.fileupload,{options:{resizeSourceFileTypes:/^image\/(gif|jpeg|png)$/,resizeSourceMaxFileSize:2e7,resizeMaxWidth:void 0,resizeMaxHeight:void 0,resizeMinWidth:void 0,resizeMinHeight:void 0,add:function(t,i){e(this).fileupload("resize",i).done(function(){i.submit()})}},_resizeImage:function(n,s){var a,o=this,r=this.options,l=n[s],c=e.Deferred();return t(l,function(e){var u=e.width,d=e.height;a=t.scale(e,{maxWidth:r.resizeMaxWidth,maxHeight:r.resizeMaxHeight,minWidth:r.resizeMinWidth,minHeight:r.resizeMinHeight,canvas:!0}),u!==a.width||d!==a.height?i(a,function(e){e.name||(l.type===e.type?e.name=l.name:l.name&&(e.name=l.name.replace(/\..+$/,"."+e.type.substr(6)))),n[s]=e,c.resolveWith(o)},l):c.resolveWith(o)}),c.promise()},resize:function(t){var i=this,n=e.extend({},this.options,t),s="number"!==e.type(n.resizeSourceMaxFileSize);return e.each(t.files,function(a,o){i._resizeSupport&&(n.resizeMaxWidth||n.resizeMaxHeight||n.resizeMinWidth||n.resizeMinHeight)&&(s||o.size<n.resizeSourceMaxFileSize)&&n.resizeSourceFileTypes.test(o.type)&&(i._processing+=1,1===i._processing&&i.element.addClass("fileupload-processing"),i._processingQueue=i._processingQueue.pipe(function(){var n=e.Deferred();return i._resizeImage(t.files,a).done(function(){i._processing-=1,0===i._processing&&i.element.removeClass("fileupload-processing"),n.resolveWith(i)}),n.promise()}))}),this._processingQueue},_create:function(){e.blueimp.fileupload.prototype._create.call(this),this._processing=0,this._processingQueue=e.Deferred().resolveWith(this).promise(),this._resizeSupport=i(document.createElement("canvas"),e.noop)}})});