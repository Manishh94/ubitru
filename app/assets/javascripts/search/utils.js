function formatMoney(moneyVal) {
    var val = parseFloat(moneyVal);
    if(isNaN(val))
        return 'N/A';
    return '$' + val.toFixed(2);
}

function uniqueBy(arr, fn) {
    var unique = {};
    var distinct = [];
    arr.forEach(function (x) {
        var key = fn(x);
        if (!unique[key]) {
            distinct.push(x);
            unique[key] = true;
        }
    });
    return distinct;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

jQuery.fn.center = function() {
    return this.each(function(){
        var el = $(this);
        var h = el.height();
        var w = el.width();
        var w_box = $(window).width();
        var h_box = $(window).height();
        var w_total = (w_box - w)/2; //400
        var h_total = (h_box - h)/2.5;
        var css = {"position": 'absolute', "left": w_total+"px", "top": h_total+"px"};
        el.css(css);
    });
};


  $(document).ready(function () {
      debugger;
      alert('tesign.... ')
       availableTags =  new Array(); 
       $.ajax({url: "/muddleme-search", success: function(result){
        console.log(result);
        for (i = 0;i < result.length; i++) { 
            availableTags.push(result[i]);
        }
        }});
      $(".search").on("keydown", function () {
    });
      $(".search").autocomplete({
          source: availableTags
      });
  });