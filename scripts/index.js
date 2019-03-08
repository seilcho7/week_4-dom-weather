const atlWeather ={  
    "coord":{  
       "lon":-84.373,
       "lat":33.848,
    },
    "weather":[  
       {  
          "id":800,
          "main":"Clear",
          "description":"clear sky",
          "icon":"01d"
       }
    ],
    "base":"stations",
    "main":{  
       "temp":272.76,
       "pressure":1022,
       "humidity":40,
       "temp_min":270.15,
       "temp_max":275.37
    },
    "visibility":16093,
    "wind":{  
       "speed":3.1,
       "deg":340
    },
    "clouds":{  
       "all":1
    },
    "dt":1551797654,
    "sys":{  
       "type":1,
       "id":4399,
       "message":0.0072,
       "country":"US",
       "sunrise":1551787231,
       "sunset":1551829066
    },
    "id":4180439,
    "name":"Atlanta",
    "cod":200
 };

// Using the tdd-weather repo as your starter code, create and append DOM elements that show the following information:
// city name
// temperature
// wind speed

const body = document.querySelector('body');
const aDiv = document.createElement('div');

body.append(aDiv);

const weatherInfo = [
   `City Name: ${atlWeather.name}`,
   `Temperature: ${atlWeather.main.temp}`,
   `Wind Speed: ${atlWeather.wind.speed}`,
]

weatherInfo.forEach(function (array) {
   const aPara = document.createElement('p');
   aPara.textContent = array;
   aDiv.append(aPara);
});

// Bonus #1: Showing an icon
// Write a function that accepts the entire weather object, extracts the icon information, and returns the URL for the icon.
// Then, write a function that accepts a URL, creates DOM elements to show the image, and appends it to the page.

function findUrl(obj) {
   const url = `http://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
   return url;
}

function appendImg(findUrl) {
   const img = document.createElement('img');
   img.setAttribute('src', findUrl(atlWeather));
   return aDiv.append(img);
}

appendImg(findUrl);

// Bonus #2: Showing a map
// Using the latitude and longitude functions and the information from this stack overflow answer, add a map element to the page.

function mapElement(obj) {
   const iframe = document.createElement('iframe');
   iframe.setAttribute('width', '360');
   iframe.setAttribute('height', '270');
   iframe.setAttribute('frameborder', '0');
   iframe.setAttribute('style', 'border:0');
   iframe.setAttribute('src', `http://maps.google.com/maps?q=${obj.coord.lat}, ${obj.coord.lon}&z=15&output=embed`);
   return aDiv.prepend(iframe);
}

mapElement(atlWeather);

// Bonus #3: Converting the sunrise/sunset
// The sunrise and sunset information is in an odd format. In order to show it in a human readable format, you'll need to do some detective work.

function convert(obj){

   // Unixtimestamp
   var unixtimestamp = obj;
  
   // Months array
   var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
   // Convert timestamp to milliseconds
   var date = new Date(unixtimestamp*1000);
  
   // Year
   var year = date.getFullYear();
  
   // Month
   var month = months_arr[date.getMonth()];
  
   // Day
   var day = date.getDate();
  
   // Hours
   var hours = date.getHours();
  
   // Minutes
   var minutes = "0" + date.getMinutes();
  
   // Seconds
   var seconds = "0" + date.getSeconds();
  
   // Display date time in MM-dd-yyyy h:m:s format
   var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

   return convdataTime;
   
   // document.getElementById('datetime').innerHTML = convdataTime;
}

const sunriseSunset = [
   `Sunrise: ${convert(atlWeather.sys.sunrise)}`,
   `Sunset: ${convert(atlWeather.sys.sunset)}`,
]

sunriseSunset.forEach(function (sun) {
   const aPara = document.createElement('p');
   aPara.textContent = sun;
   aDiv.append(aPara);
});