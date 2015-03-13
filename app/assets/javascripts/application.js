// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

dates = function () {
  $('#date').datepicker(); 

}

$(document).ready(function(){


  $( "#from" ).datepicker({
    defaultDate: "+1w",
    dateFormat: "yymmdd",
    changeMonth: true,
    numberOfMonths: 3,
    onClose: function( selectedDate ) {
      $( "#to" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#to" ).datepicker({
    defaultDate: "+1w",
    dateFormat: "yymmdd",
    changeMonth: true,
    numberOfMonths: 3,
    onClose: function( selectedDate ) {
      $( "#from" ).datepicker( "option", "maxDate", selectedDate );
    }
  });


  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
      $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
      $(window).scrollLeft()) + "px");
    return this;
  }

  $(".high_class").click(function(){
    console.log('clicked')
    $(".hip").hide();
    $('.hooli').hide();
    $('.high_class').center();
    $(".cal").show();

  });

  $(".hip").click(function(){
    console.log('clicked')
    $(".high_class").hide();
    $('.hooli').hide();
    $('.hip').center();
    $(".cal").show();

  });

  $(".hooli").click(function(){
    console.log('clicked')
    $(".hip").hide();
    $('.high_class').hide();
    $('.hooli').center();
    $(".cal").show();

  });

var TodoButton = $('.todo-button');


TodoButton.on('click', function(e){
  var from = $('#from').val();
  var to = $('#to').val();
  var results = $('#results');

  console.log(from);
 $.ajax({
  type: 'GET',
  url: 'http://api.eventful.com/json/events/search?app_key=mcsQPW26DVSm222r&t='+from+'00-'+to+'00&location="London, United Kingdom"',
  dataType: 'jsonp'
  }).done(function(response){
    $.each(response.events.event, function(index, value) {
      console.log(value);
      $('#result').append('<h2>' +  value.title + '</h2>');
      $('#result').append('<h2>' +  value.venue_address + '</h2>');
      $('#result').append('<h2>' +  value.start_time + '</h2>');
      $('#result').append('<h2>' +  value.region_abbr + '</h2>');
    })
    $(".hip").hide();
    $('.high_class').hide();
    $(".hooli").hide();
  })
});

   

      

    });
