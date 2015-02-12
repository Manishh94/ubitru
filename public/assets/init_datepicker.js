function initDatepickers() {
    $("input.datepicker:not(.hasDatepicker)").datepicker({
        onClose: function(e, t) {
            $(t.input).change().focusout()
        },
        dateFormat: "mm/dd/y",
        buttonImage: "/assets/calendar-handle.png",
        buttonText: "Select date",
        buttonImageOnly: !0,
        showOn: "both"
    }), $("input.datetimepicker:not(.hasDatepicker)").datetimepicker({
        dateFormat: "mm/dd/y",
        timeFormat: "hh:mm TT",
        ampm: !0,
        stepHour: 1,
        stepMinute: 5,
        separator: " at ",
        buttonImage: "/assets/calendar-handle.png",
        buttonText: "Select date and time",
        buttonImageOnly: !0,
        showOn: "both"
    })
}
$(document).ready(function() {
    $(document).on("click","input.datepicker2",function(){
  
      
        
    })
    initDatepickers()
});