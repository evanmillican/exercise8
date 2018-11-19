$(function(){
  console.log('scripts loaded');


var url = 'http://api.open-notify.org/iss-now.json';
/*var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + issData.iss_position.latitude + '&lon=' + issData.iss_position.longitude;
var urlArray = [url, url2];*/
var issData = [];
var html = '';
var iss_position = [];
var i;



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

    html += 'The current location of the international space station is: ' + issData.iss_position.latitude + ', ' + issData.iss_position.longitude +'<br>';

    $('#results').html(html);


  }



});  /*end getting location of iss*/





}, 5000); /*end repeat every 5 seconds*/





}); /*scripts loaded*/
