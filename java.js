$(document).ready(function(){
 
  
  
  var lat;
  var lon;
  var url;
  var city;
  var f;
  var c;
  var celsius;
  var fahrenheit;
  var weather;
  //end variables ----------------------------------------
  
  
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

    lat = position.coords.latitude.toFixed(2);
    lon = position.coords.longitude.toFixed(2);
    api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat +  "&lon=" + lon + "&units=metric" + "&APPID=7f99b308303e52a6de6347b9c6a8661c";  
      
    
     
       
                    
    $.getJSON(api, function(data){  
            
            //current city
            $(".city").html(data.name);
            
            
            //Celsius
            c = data.main.temp;
            celsius = Math.round(c);
            $(".temp").html(celsius);
            
            //Fahrenheit to Celsius
            f = ((c * 1.8) + 32);
            fahrenheit = Math.round(f);     
            
            

            //select which icon must appear
            
            weather = data.weather[0].id;
            
            if (weather >= 300 && weather <= 321){
                    //icon Drizzle
                    $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/rainy-day.png" >');
                    
            }else if (weather >= 200 && weather <= 232){
                    //icon storm
                    $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/storm.png" >');
                    
            }else if (weather >= 500 && weather <= 531 ){
                    //icon Rain
                    $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/rainy-day.png" >'); 
                    
            }else if (weather >= 600 && weather <= 622){
                    //icon Snow
                    $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/snow.png" >'); 
                    
            }else if (weather === 800){
                    //icon Clear
                     $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/sun.png" >');
                    
            }else if(weather >= 801 && weather <= 804){
                    //icon Clouds
                     $(".icon").html('<img src="http://res.cloudinary.com/df9dd42x5/image/upload/v1522829944/cloudy.png" >');
            }
                
            
        
    
    });
            
    
            
 
   //click event btn    
   var toggleTemp = true;
				$(".bot").click(function() {
					
                        
                    if (toggleTemp === false) {
						$(".temp").html(celsius);
                        $(".sym").html("°C");
						toggleTemp = true;
					} else {
						$(".temp").html(fahrenheit);
                        $(".sym").html("°F");
						toggleTemp = false;
					}
				})   
            
            
            
    }); //end navigator.geo--------------------------------
     
     
     
}else {
        $(".data").html("Geolocation is not supported by this browser.");
    }
 




        
        
        
        
        
});  //end document ready ---------------------------------