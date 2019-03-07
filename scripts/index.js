const atlWeather ={  
    "coord":{  
       "lon":-84.39,
       "lat":33.75
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

