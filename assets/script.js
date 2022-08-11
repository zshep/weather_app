// global varibales
var weatherApiKey = "33267835088a1301ccfa970b21fd1522";

    //local storage variable

//DOM variables






// moment -current time
// moment - current date


//create function to take in user input for city
           // -use city to grab lat and lon
var userCity =$("#cname");


// API variables


$("#searchCity").click(getCity(userCity));


function getCity(uc) {
    var citylocation = `http:api.openweathermap.org/geo/1.0/direct?q=${uc}&limit=1&appid=${weatherApiKey}`;
    console.log(userCity);
    fetch(citylocation) // using variable name to grab coordinates
        .then(function(response) {
            console.log(response);
            return response.json();

        })
}

          // -uses API to grab current weather conditions
          // - uses API to grab future weather conitions
          // - stores city in local storage
          // - appends city to search hisotry ("".searchbtn") (creates a btn that pulls up results of city)


//create function to search city stored in history when clicked
    //create btns for each searched city
        //start function that gets city info
    //put the newest searches on top
    // pull from local storage


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


