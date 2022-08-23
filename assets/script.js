// global varibales


  

//DOM variables
var userCity =$("#cname"); // city name from user
var searchForm =$("#search"); // form container for search
var searchHistory = $('#savedcities'); // search hisory box
var mainCityinfo = $("#maincardcontainer"); // current city main info
var mainCitydeets =$(".maindetailscontainer") // current city details (temp, humidity, wind speed)


//make variable to reference city weather info
// make variable to reference 5day forcast


//variables
var cityHistory = []; // empty city list





// function that loads the saved cities from local storage
function showHistory () {
    var savedCities = localStorage.getItem("Saved-Cities");

    if (savedCities) {
        cityHistory = JSON.parse(savedCities);
        console.log(savedCities);
        searchHistory.empty(); //wipes clean to prevent stacking
    for (var i = cityHistory.length - 1; i >= 0; i--) {
        let btn = document.createElement("button");
        btn.setAttribute('type', 'button');        
        btn.textContent = cityHistory[i];
        btn.setAttribute('data-search', cityHistory[i]);
        searchHistory.append(btn);
    }
} else return;
};


//function that searches Local storage when search city is clicked
$("#searchBtn").click(function(event){
    event.preventDefault();
    // prevent empty value of city
    var chosenCity = userCity.val(); // grabs user's entered city name
    if (!chosenCity){
        window.alert("No city was entered, please enter a city");
        console.log("there was nothing entered");
        return;
    }
    console.log(chosenCity);
    getCity(chosenCity); //gets the lat/lon of requested city
    cityHistory.push(chosenCity); // adds to the city history array
    
    localStorage.setItem("Saved-Cities", JSON.stringify(cityHistory)); //adds to local storage
    
    showHistory(); //rerun search history with new event
       
});


var weatherApiKey = "33267835088a1301ccfa970b21fd1522";

//function to get cities lat and lon values via name
function getCity(uc) {
    var citylocation = `http:api.openweathermap.org/geo/1.0/direct?q=${uc}&limit=1&appid=${weatherApiKey}`;

    
    fetch(citylocation) // using variable name to grab coordinates
    .then((response) => {
        console.log(response)
        return response.json();
    })
    
    .then(function (data) {
        console.log(data)
        const {name} = data[0];         
        const { lat } = data[0]; 
        const { lon } = data[0];
        var cName =$("<p></p>").text(`${name}`);
        $("#headerCityinfo").append(cName);
        console.log(`The city name is: ${name}`);
        console.log(`The latitude is: ${lat}`);
        console.log(`The longitude is: ${lon}`);
        return getWeather(lat, lon);
    });
}
//function to get specific weather data from lat and lon including UV
function getWeather(latitude, longitude) {
    
    fetch('https://api.openweathermap.org/data/2.5/onecall?appid=f510236949173fad67a61182bbdd1a37&lat='+ latitude +'&lon='+ longitude +'&exclude=hourly,minutely&units=imperial')
    .then((response) => {
        return response.json();
    })
    .then(function (data2) { 
        console.log(data2);
        // grabs deconstructed values
        const { timezone } = data2;
        var adjustedTime = timezone / 60; 
        const {dt} = data2.current;                    
        var formattedTime = moment.unix(dt).utc().utcOffset(adjustedTime).format('MM/DD/YYYY');          
        const { temp, humidity, uvi } = data2.current;
        const { wind_speed} = data2.current;
        const { icon } =data2.current.weather[0];
        console.log(`The temp is: ${temp}`);
        console.log(`The icon id is: ${icon}`);
        console.log(`The uvi is: ${uvi}`);
        var cdate =$("<p></p>").text(formattedTime);
        var wicon =$("<img>").attr("src", `https://openweathermap.org/img/wn/${icon}.png`);
        var humid =$('<p></p>').text(`humidity: ${humidity} %`);
        var ctemp =$("<p></p>").text(`Temp: ${temp} °F`);
        var wspeed =$('<p></p>').text(`Windspeed: ${wind_speed} MPH`);
        var uviIndex =$('<p></p>').attr('id', 'currentUV'); 
        // append the new info to the proper containers
        $("#headerCityinfo").append(cdate, wicon);
        $("#maindetailscontainer").append(humid, ctemp, wspeed, uviIndex); 
        
        //Changes the UV color by severity
        $('#currentUV').text(`UVI Index: ${uvi}`);
        if (~~($('#currentUV').text()) < 2) {
            $('#currentUV').attr('class','ms-1 favorableUV')
        } 
        else if (~~($('#currentUV').text()) >= 2 && ~~($('#currentUV').text()) <= 8 ) {
            $('#currentUV').attr('class','ms-1 moderateUV')
        }
        else if (~~($('#currentUV').text()) > 7) {
            $('#currentUV').attr('class','ms-1 severeUV')
        };
    })
    
}

//create function that loops through city info and posts the 5 day forcast
function fivedaycast(){
    
    //grab global variables for each of the next days
    // display date, icon representing weather condition, temp, windspeed and humidity
    
    
}


//function that listens for city history btn click
function btnHistory(event) {
    var btnclick = event.target;
    var cityName = btnclick.getAttribute('data-search');    
    getCity(cityName);
}
//Action code:
showHistory();
searchHistory[0].addEventListener('click', btnHistory);