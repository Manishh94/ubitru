 var is_runing = false;
function showLoader(e, t) {
    var i = e.width(),
        n = e.height(),
        s = "";
    t && (s = '<span class="mask-txt">' + t + "</span>"), e.find(".mask:first").remove(), e.css("position", "relative").css("overflow", "hidden").append('<div class="mask">' + s + '<img src="/assets/ajax-loader.gif" alt="..."/></div>'), e.find(".mask:first").css({
        opacity: .8,
        width: i,
        height: n,
        lineHeight: n + "px",
        top: e.css("padding-top"),
        left: e.css("padding-left")
    })
}

function hideLoader(e) {
    e.find(".mask:first").remove(), e.css("position", "").css("overflow", "")
}

function reportError(e) {
    return $("#all-form-errors").html(e).addClass("alert alert-error"), !1
}

function generate_popup(e, t) {
    $this = $("#" + e), $second_coupon_window = $("#merchant_c_window_" + t);
    var i = 660,
        n = $(window).width() + 100,
        s = "innerWidth=440,height=" + i + ",resizable=no,location=no,scrollbars=yes";
    return s += ",left=" + n, $second_coupon_window.fancybox({
        type: "ajax",
        width: 680,
        height: 520,
        fitToView: !1,
        autoSize: !1,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    }).trigger("click"), !1
}

function generate_coupon_popup(e) {
    $this = $("#" + e);
    var t = 660,
        i = $(window).width() + 100,
        n = "innerWidth=440,height=" + t + ",resizable=no,location=no,scrollbars=yes";
    return n += ",left=" + i, window.open($this.attr("href"), "couponsPopup", n), !1
}

function generate_zip_code_popup() {
    var e = !1,
        t = "",
        i = $("#service_keyword").val();
    return 0 == i.length && (e = !0, t += "* Please provide a search keyword to find services <br/><br/>"), e ? ($("#sbs-form-errors").html(t), !1) : ($("#sbs-form-errors").html(""), actual_url = $("#zip_code_popup").attr("href"), new_url = encodeURI($("#zip_code_popup").attr("href") + "?search_by_services=" + $.trim(i)), $("#zip_code_popup").attr("href", new_url), console.log("cming here"), $("#zip_code_popup").fancybox({
        type: "ajax",
        fitToView: !1,
        width: 380,
        height: 380,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    }).trigger("click"), $("#zip_code_popup").attr("href", actual_url), $("#service_keyword").val(""), void 0)
}

function generate_direct_sign_up_form() {
    $("a#direct_user_sign_up").fancybox({
        type: "iframe",
        width: 420,
        height: 300,
        fitToView: !1,
        autoSize: !1,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    })
}

function check_user_email(e) {
    return $.ajax({
        type: "POST",
        beforeSend: function(e) {
            e.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr("content"))
        },
        async: !1,
        url: "/check_subscriber_email",
        data: "email=" + e
    })
}

function generate_services_search_results_popup() {
    if ($("#sbs-form-errors").html(""), keyword = $("#service_keyword").val(), "" == $.trim(keyword) && (keyword = $("input[type=hidden]#service_keyword").val()), "" == $.trim(keyword)) return $("#sbs-form-errors").html("* Please provide a search keyword to find services"), !1;
    zip_code = $("#ss_zip_code").val();
    var e = $.trim($(".zip-user-id").val());
    return "" == $.trim(zip_code) && "" == e ? ($("#zip-code-form-errors").html("* Please enter Zip code"), !1) : void 0 === $.trim(zip_code) && void 0 === e ? ($("#zip-code-form-errors").html("* Please enter Zip code"), !1) : (void 0 === zip_code ? (results_page_url = $("#services_results_popup").attr("href"), new_url = encodeURI(results_page_url + "?search_by_services=" + $.trim(keyword)), $("#services_results_popup").attr("href", new_url), $.fancybox.close(), $("#services_results_popup").fancybox({
        type: "ajax",
        width: 680,
        height: 380,
        autosize: !1,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    }).trigger("click"), $("#services_results_popup").attr("href", results_page_url), $("#service_keyword").val("")) : (results_page_url = $("#services_results_popup_with_zc").attr("href"), new_url = encodeURI(results_page_url + "?search_by_services=" + $.trim(keyword) + "&zip_code=" + zip_code), $("#services_results_popup_with_zc").attr("href", new_url), $("#services_results_popup_with_zc").fancybox({
        type: "ajax",
        width: 680,
        height: 380,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    }).trigger("click"), $("#services_results_popup_with_zc").attr("href", results_page_url), $("#service_keyword").val("")), !1)
}

function createCookie(e, t, i) {
    if (i) {
        var n = new Date;
        n.setTime(n.getTime() + 1e3 * 60 * 60 * 24 * i);
        var s = "; expires=" + n.toGMTString()
    } else var s = "";
    document.cookie = e + "=" + t + s + "; path=/"
}

function readCookie(e) {
    for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
        for (var s = i[n];
            " " == s.charAt(0);) s = s.substring(1, s.length);
        if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
    }
    return null
}

function eraseCookie(e) {
    createCookie(e, "", -1)
}

function generate_submit_coupon_fb() {
    return $.fancybox.close(), $(".user-submit-coupon-fb").fancybox({
        type: "iframe",
        width: 600,
        height: 350
    }).trigger("click"), !1
}

function generate_add_service_providers_popup() {
    $.fancybox.close(), $("#service_providers_form").fancybox({
        type: "iframe",
        width: 580,
        height: 420,
        fitToView: !1,
        autoSize: !1,
        helpers: {
            overlay: {
                closeClick: !1
            }
        }
    })
}

function closeIFrame() {
    setTimeout("parent.$.fancybox.close()", 5e3)
}
$(document).ready(function() {
    $("a#cd_logo").fancybox()
}), $(document).ready(function() {
    $("#").submit(function() {
        var e = !1,
            t = "",
            i = $("#user_email").val(),
            n = $("#user_zip_code").val();
        if (0 == i.length && (e = !0, t += "* Email can't be blank <br/>"), 0 == n.length && (e = !0, t += "* Zip code can't be blank <br/>"), n.length < 5 && (e = !0, t += "* Minimum 5 numeric characters should be present. <br/>"), e) reportError(t);
        else {
            $("#all-form-errors").html("");
            var s = $("#direct_user_sign_up_form");
            $("#processing-message").show(), $("#processing-message").html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
            var o = s.serialize();
            $.ajax({
                type: "POST",
                beforeSend: function(e) {
                    e.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr("content"))
                },
                url: s.attr("action"),
                data: o,
                dataType: "script",
                complete: function() {
                    s.get(0).reset(), $("#processing-message").hide()
                },
                error: function() {}
            })
        }
        return !1
    })
}), $(document).ready(function() {
    $("form#coupon_window_signup").submit(function() {
        var e = !1,
            t = "",
            i = $("#user_email").val();
        if ($("#user_zip_code").val(), i.length > 0 && (e = check_user_email(i).done(), "true" == jQuery.parseJSON(e.responseText).status ? (e = !0, t = "* Email is invalid, you already have account registered with us. <br/>" + t) : e = !1), 0 == i.length && (e = !0, t += "* Email cannot be blank <br/>"), e) $("#cp-sign-up-form-errors").html(t);
        else {
            $("#cp-sign-up-form-errors").html("");
            var n = $("#coupon_window_signup");
            $("#processing-message").show(), $("#processing-message").html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
            var s = n.serialize();
            $.ajax({
                type: "POST",
                url: n.attr("action"),
                data: s,
                dataType: "script",
                complete: function() {
                    n.get(0).reset(), $("#processing-message").hide()
                },
                error: function() {
                    alert("Something went wrong!")
                }
            })
        }
        return !1
    })
}), $(document).ready(function() {
    $("#hp_sms_form").submit(function() {
        var e = !1,
            t = "",
            i = $("#user_phone_number").val();
        if (0 == i.length && (e = !0, t += "* Phone number cannot be blank <br/>"), i.length < 10 && (e = !0, t += "* Invalid Phone number, Phone number cannot be less than 10 digits. <br/>"), e) $("#sms-form-errors").html(t);
        else {
            $("#sms-form-errors").html("");
            var n = $("#hp_sms_form");
            $("#sms-processing-message").show(), $("#sms-processing-message").html(""), $("#sms-processing-message").html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
            var s = n.serialize();
            $.ajax({
                type: "POST",
                url: n.attr("action"),
                data: s,
                dataType: "script",
                complete: function() {
                    n.get(0).reset()
                },
                error: function() {
                    alert("Something went wrong!, please try after sometime.")
                }
            })
        }
        return !1
    })
}), $(document).ready(function() {
    $("#new_service_provider_form").submit(function() {
        $("#favorite-merchant-errors").html("");
        var e = !1,
            t = "",
            i = $("#merchant_name").val(),
            n = $("#merchant_address").val(),
            s = $("#email").val(),
            o = $("#phone").val(),
            a = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if ("" == $.trim(o) && (e = !0, t += "* Merchant Phone can't be blank <br />"), "" == $.trim(s) ? (e = !0, t += "* Merchant Email can't be blank <br />") : a.test($.trim(s)) || (e = !0, t += "* Merchant Email is not valid <br />"), 0 == i.length && (e = !0, t += "* Merchant Name can't be blank <br/>"), 0 == n.length && (e = !0, t += "* Merchant Address can't be blank <br/>"), e) {
            var r = $("#favorite-merchant-errors");
            r.html(t), r.addClass("alert alert-error")
        } else {
            $("#all-form-errors").html("");
            var l = $("#new_service_provider_form");
            $("#sp-processing-message").show(), $("#sp-processing-message").html(""), $("#sp-processing-message").html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
            var c = l.serialize();
            $.ajax({
                type: "POST",
                url: l.attr("action"),
                data: c,
                dataType: "script",
                complete: function() {
                    l.get(0).reset()
                },
                error: function() {
                    alert("Something went wrong!, please try after sometime.")
                }
            })
        }
        return !1
    })
}), $(document).ready(function() {
    $("#sbm_search_bar").submit(function() {
        var e = !1,
            t = "",
            i = $("#search_by_merchants").val();
        return 0 == i.length && (e = !0, t += "* Please provide a search keyword to find your favorite merchant <br/>"), console.log(e), e ? reportError(t) : ($("#all-form-errors").html(""), $("#sbm_search_bar").submit()), !1
    })
}), $(document).ready(function() {
    $("#sbs_search_bar").submit(function() {
        var e = !1,
            t = "",
            i = $("#service_keyword").val();
        return 0 == i.length && (e = !0, t += "* Please provide a search keyword to find services <br/><br/>"), console.log(e), e ? $("#sbs-form-errors").html(t) : ($("#sbs-form-errors").html(""), $("#sbs_subBtn").trigger("click")), !1
    })
}), $(document).ready(function() {
    $("#sbs_zip_code_form").submit(function() {
        var e = !1,
            t = "",
            i = $("#ss_zip_code").val();
        return 0 == i.length && (e = !0, t += "* Please provide a zip code<br/><br/>"), i.length < 5 && (e = !0, t += "* Zip code should be of atleast 5 digits.<br/><br/>"), 0 == $.isNumeric(i) && (e = !0, t += "* Zip code is invalid, Should be 5 digits.<br/><br/>"), console.log(e), e ? $("#zip-code-form-errors").html(t) : ($("#zip-code-form-errors").html(""), $("#sbs_zc_subBtn").trigger("click")), !1
    })
}), $(function() {
    var e;
    return e = !1, $("a.load-more-posts", "a.load-less-posts").on("click", function(t, i) {
        return !e && i ? (e = !0, $.getScript($(this).attr("href"), function() {
            return e = !1
        })) : void 0
    })
}), $(document).ready(function() {
    var e = window.location.pathname,
        t = readCookie("hp_popup"),
        i = $("#hp_popup").length;
    "/" == e && i && !t && (createCookie("hp_popup", "loaded"), $.fancybox.open("#hp_popup")), $(document).on("click", ".view-number-results", function() {
        var e = $(this),
            t = e.data("id");
        $("#result-company-phone-" + t).show(), $("#view-number-results-" + t).hide()
    }), $(document).on("click", ".result-company-phone", function() {
        var e = $(this),
            t = e.data("id");
        $("#result-company-phone-" + t).hide(), $("#view-number-results-" + t).show()
    }), $(".user-coupon-submit-btn").on("click", function(e) {
        e.preventDefault(), $(".user-coupon-submit-btn").attr("disabled", "disabled");
        var t = "";
        $("#store_website").val();
        var i = $("#offer_type").val(),
            n = $("#code").val(),
            s = $("#discount_description").val();
        $("#recaptcha_challenge_field").val();
        var o = $("#recaptcha_response_field").val(),
            a = $("#printable_coupon").val(),
            r = !1;
        if ("" == $.trim(store_website) && (t += "* Store website is mandatory <br />"), "" == $.trim(i) && (t += "* Offer type is mandatory <br />"), "" == $.trim(n) && (t += "* Coupon code is mandatory <br />"), "" == $.trim(s) && (t += "* Discount description is mandatory <br />"), "" == $.trim(o) && (t += "* Recaptcha is mandatory <br />"), "Printable Coupon" == $.trim(i) && ("" == $.trim(a) ? t += "* Printable coupon file not attached <br />" : r = !0), "" == $.trim(t)) {
            var l = $(".user-coupon-form");
            $("#processing-message").show(), $("#processing-message").html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
            var c = l.serialize(),
                h = l.attr("action");
            $.ajax({
                type: "POST",
                url: h,
                data: c,
                dataType: "script",
                contentType: "multipart/form-data",
                complete: function() {
                    l.get(0).reset()
                },
                error: function() {
                    $(".user-coupon-submit-btn").removeAttr("disabled")
                }
            })
        } else $(".user-coupon-submit-btn").removeAttr("disabled"), $("#processing-message").html("<p style=font-size:20px;>" + t + "</p>")
    }), $(".offer-type").on("click", function() {
        $(".printable-coupon-file-field").hide();
        var e = $(this);
        $(".offer-type").each(function(e, t) {
            var i = $(t);
            i.hasClass("orange-button-link") && i.removeClass("orange-button-link")
        }), e.addClass("orange-button-link"), $("input[type=hidden].offer-type-hidden").val(e.text()), "Printable Coupon" == e.text() && $(".printable-coupon-file-field").show()
    }),   $('.user-coupon-submit-btn-new').on('click', function(e){
    e.preventDefault();
     e.stopImmediatePropagation();
   
    $('.user-coupon-submit-btn-new').attr("disabled", "disabled");
    var $errors = '';
    var $store_website = $('#store_website').val();
    var $offer_type = $('#offer_type').val();
    var $code = $('#code').val();
    var $discount_description = $('#discount_description').val();
    var $recaptcha_challenge_field = $('#recaptcha_challenge_field').val();
    var $recaptcha_response_field = $('#recaptcha_response_field').val();
    var $printable_coupon = $('#printable_coupon').val();
    var file_upload = false;
    if($.trim(store_website) == ''){ $errors = $errors + '* Store website is mandatory <br />'; }
    if($.trim($offer_type) == ''){ $errors = $errors + '* Offer type is mandatory <br />'; }
    if($.trim($code) == ''){ $errors = $errors + '* Coupon code is mandatory <br />'; }
    if($.trim($discount_description) == ''){ $errors = $errors + '* Discount description is mandatory <br />'; }
    if($.trim($recaptcha_response_field) == ''){ $errors = $errors + '* Recaptcha is mandatory <br />'; }
    if($.trim($offer_type) == 'Printable Coupon'){
      if($.trim($printable_coupon) == ''){
        $errors = $errors + '* Printable coupon file not attached <br />';
      }else{ file_upload = true; }
    }
    if($.trim($errors) == ''){
      
      var f = $(".user-coupon-form");
      $('#processing-message').show();
      $('#processing-message').html("* We are processing your request, please wait.<br/> Do not refresh the page.</p>");
      //var dataSet = f.serialize();
      //dataSet = dataSet +"&printable_coupon="+ $("#printable_coupon").val();
     // formdata = new FormData();
      //var url = f.attr('action');
     
      
      $("#user_coupon_form").submit();

    }else{
      $('.user-coupon-submit-btn-new').removeAttr("disabled");
      $('#processing-message').html("" + $errors + "</p>");
    }
   
  }), $(".coming-soon-popup").click(function() {
        $.fancybox.open("#coming_soon_popup")
    }), $("#get-money-box, #start-now, .browser-logo-enabled").click(function() {
        window.location.href = "/mm-extension"
    }), $(".view_more").click(function() {
        $(".more_content").toggleClass("show_more"), "view more" == $(this).html() ? ($(".more").hide(), $(this).html("view less")) : ($(".more").show(), $(this).html("view more"))
    }), $(".user-service-provider-toggle-link").click(function(e) {
		
       // $(".favorite-service-provider-form").toggle("slow")
    }), $(".user-submit-coupon-link").click(function() {
        $(".submit-coupon-user-section").toggle("slow")
    }), $(".view-more-coupon-description").click(function() {
        var e = $(this).attr("id"),
            t = $("#cdesc_" + e);
        t.find(".more_content").toggleClass("show_more"), "view more" == $(this).html() ? (t.find(".more").hide(), $(this).html("view less")) : (t.find(".more").show(), $(this).html("view more"))
    })
});

$(function(){
   var options=
       {
          url:$('#user_coupon_form').prop("action"),
         
       };
    
    $('#user_coupon_form').ajaxForm(options);
});
