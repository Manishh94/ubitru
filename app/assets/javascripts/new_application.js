	// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery-1-11-1.min
//= require jquery-ui
//= require jquery_ujs
//= require custom
//= require ajaxform
//= require show_loader
//= require init_datepicker




$(document).ready(function () {
      debugger;

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
