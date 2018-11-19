$(function(){
  console.log('scripts loaded');

var lat = '';
var long = '';

var url = 'http://api.open-notify.org/iss-now.json';
var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-36.0515&lon=-101.776';

var issData = [];
var geoData = [];
var html = '';
var iss_position = [];
var address = [];
var place_id = [];







/*repeat every 5 seconds*/

setInterval(function(){



/*getting the location of the iss*/

$.ajax({
  type:'GET',
  url: url,
  dataType:'json',
  async:true,
  data:issData,
  success:function(issData){
    console.log(issData.iss_position);
    lat = issData.iss_position.latitude;
    long = issData.iss_position.longitude;


    $.ajax({
      type:'GET',
      url: url2,
      dataType:'json',
      async:true,
      data:geoData,
      success:function(geoData){
        console.log(geoData);


        html += 'The current location of the international space station is: ' + geoData.address +'<br>';

        if(geoData.address = 'error') {
          html += 'The current location of the international space station is over an ocean!<br>';
        }

        $('#results').html(html);

      }

    });




  }



});  /*end getting location of iss*/





}, 5000); /*end repeat every 5 seconds*/





}); /*scripts loaded*/
