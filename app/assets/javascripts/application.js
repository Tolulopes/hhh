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
= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
      // console.log('working');
            //declare some variables
      var getRegionButton = $('#region-button');
      var regionSelect = $('#region-select');
      var countrySelect = $('#country-select');
      var results = $('#results');
      var data = $('#data');

       //add event listener to the get regions buttons on click
       // getRegionButton.on('click', getRegion);
       // regionSelect.on('change', getCountries)

      getRegionButton.on('click', function(e){
        $.ajax({
          type: 'GET',
          url: 'http://restcountries.eu/rest/v1/all'
        })
        .done(function(response){
          var regions = [];
          $.each(response, function(index, item) {
          if($.inArray(item.region, regions) === -1 && item.region.length >= 1) {
              regions.push(item.region);
                    // console.log(regions);
                  }              
            
          });
           $.each(regions, function(index, value){
                    // console.log(value);
                    regionSelect.append('<option>' + value + '</option>');
                  })              
        })
      })
          
          regionSelect.on('change', showCountries)

          function showCountries(e) {
            // console.log('showCountries');
            var regionName = $(this).val();
            $.ajax({
              type: 'GET',
              url: 'http://restcountries.eu/rest/v1/region/' + regionName
            })

            .done(function(response){
            // console.log(response);
              $.each(response, function(index, value){
                countrySelect.append('<option>' + value.name   + '</option>');
                //get country info to print to the console 
              })
            })
          }

          countrySelect.on('change', showCountryData);

          function showCountryData(e) {

            $.ajax({
              type: 'GET',
              url: 'http://restcountries.eu/rest/v1/name/' + $('#country-select').val()
            })
            .done(function(response){
              $.each(response, function(index, value){
                console.log(value);
                $('#result').append('<h2>' + 'Country: ' + value.name + '</h2>');
                  $('#result').append('<h3>' + 'Region: ' + value.region + '</h3>');
                   $('#result').append('<h4>' + 'Capital: ' + value.capital + '</h4>');
                    $('#result').append('<h5>' + 'Population: ' + value.population + '</h5');
                      $('#result').append('<h6>' + 'Language: ' + value.languages + '</h6>');
            })
                
            })
              // console.log(name);
           
          }
         
         //when select countries show info on page 
         //get weather to show on page when country selected 
         //
      

    });
