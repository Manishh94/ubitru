$(function(){$("input[type=file]").change(function(){$(this).closest(".input-file-wrap").find("input.fakeupload").val($(this).val().replace("C:\\fakepath\\",""))}),locale.fileupload.errors.emptyResult="Error while loading file",$("#fileupload").fileupload({autoUpload:!0,previewMaxWidth:48,previewMaxHeight:48,maxFileSize:window.fileUploadMaxFileSize||3e5,maxNumberOfFiles:window.fileUploadMaxFiles||10,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i});var t=function(){var t=$("#fileupload .files").children().length?"hide":"show";$("#fileupload .drop-msg")[t]()};$("#fileupload").bind("fileuploadadded",function(){t()}),$("#fileupload").bind("fileuploaddestroyed",function(){t()}),$('#fileupload input[type="file"]').attr("multiple","multiple"),$.getJSON($("#fileupload").data("image-list-url"),function(e){var i,n=$("#fileupload").data("fileupload");n._adjustMaxNumberOfFiles(-e.length),i=n._renderDownload(e).appendTo($("#fileupload .files")),n._reflow=n._transition&&i.length&&i[0].offsetWidth,i.addClass("in"),$("#loading").remove(),t()})});