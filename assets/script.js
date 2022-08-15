// global varibales
var weatherApiKey = "33267835088a1301ccfa970b21fd1522";

  

//DOM variables
var userCity =$("#cname"); // city name from user
var searchForm =$("#search"); // form container for search
var searchHistory =$("#savedcities"); // search hisory box
//make variable to reference city weather info
// make variable to reference 5day forcast


//variables
var cityHistory = []; // empty city list
// moment -current time
// moment - current date
// API variables


//Action code:
showHistory();

// function that loads the saved cities from local storage
function showHistory () {
    var savedCities = localStorage.getItem("Saved-Cities");

    if (savedCities) {
        savedCities = JSON.parse(savedCities);
        console.log(savedCities);
        searchHistory.innerHTML = ''; //wipes clean to prevent stacking
    for (var i = savedCities.length - 1; i >= 0; i--) {
        let btn = document.createElement("button");
        btn.setAttribute('type', 'button');        
        btn.textContent = savedCities[i];
        btn.setAttribute('data-search', savedCities[i]);
        searchHistory.append(btn);
        console.log(btn);
    }
    } else return;
};


//function that searches API when search city is clicked
$("#searchBtn").click(function(event){
    event.preventDefault();
    // prevent empty value of city
    var chosenCity = userCity.val(); // grabs user's entered city name
    if (!chosenCity){
        console.log("there was nothing entered");
        return;
    }
    console.log(chosenCity);
    getCity(chosenCity); //gets the lat/lon of requested city
    cityHistory.push(chosenCity); // adds to the city history array
       
    localStorage.setItem("Saved-Cities", JSON.stringify(cityHistory)); //adds to local storage
    
    showHistory(); //rerun search history with new event
    
   
});
    


//function to get cities lat and lon values via name
function getCity(uc) {
    var citylocation = `http:api.openweathermap.org/geo/1.0/direct?q=${uc}&limit=1&appid=${weatherApiKey}`;

    
    fetch(citylocation) // using variable name to grab coordinates
        .then((response) => {
            return response.json();
        })

        .then(function (data) {
            const {name} = data;            
            const {dt} = data;
            const {timezone} = data;
            var adjustedTime = timezone / 60; 
            var formattedTime = moment.unix(dt).utc().utcOffset(adjustedTime).format('MM/DD/YYYY');          
            const {temp} = data.main;
            const {speed} = data.wind;
            const {humidity} = data.main;
            const {lat} = data.coord;
            const {lon} = data.coord;
            $('#currentHumid').text(humidity+"%");
            $("#currentCityName").text(name);
            $("#cityDateTime").text(formattedTime);
            $("#currentTemp").text(temp + "°F");
            $('#currentWindSpeed').text(speed+" MPH"); 
            $('#weatherIcon').attr("src",'https://openweathermap.org/img/wn/'+ icon +'.png') ;      
            return getWeather(lat, lon);
        
        });
}

function getWeather(latitude, longitude) {









}



          // -uses API to grab current weather conditions
          // - uses API to grab future weather conitions
          // - stores city in local storage
          // - appends city to search hisotry ("".searchbtn") (creates a btn that pulls up results of city)




// create function to populate main city weather info: pull...
    // -city name, 
    //  -current date
    //  -current weather condition (link to icon)
        //create element that holds info
        

//create fuction to populate main city extra info:
    //  -temp
    //  -humidity
    //  -wind speed
    //  -uv index


//create function to color code uv index
    //if (UV index < x) {
        //set color to green (favorable)
    //}
    //if (x < UV index < y) {
        //set color to yellow (moderate)
    //}
    //if (UV index > y) {
        //set color to red (severe)
    //}
    //return 



//create function that loops through city info and posts the 5 day forcast
    //grab global variables for each of the next days
    // display date, icon representing weather condition, temp, windspeed and humidity

