// global varibales
var weatherApiKey = "33267835088a1301ccfa970b21fd1522";

  

//DOM variables
var userCity =$("#cname"); // city name from user
var searchForm =$("#search"); // form container for search
var cityHisory =$("#savedCities");
//make variable to reference city weather info
// make variable to reference 5day forcast


//variables
var cityHistory = []; // empty city 
// moment -current time
// moment - current date
// API variables


//create function to take in user input for city
           // -use city to grab lat and lon

console.log(userCity);


// function that loads the saved cities from local storage
function showHistory () {
    var savedCities = localStorage.getItem("Saved-Cities");
    if (savedCities) {
        savedCities = JSON.parse(savedCities);
        cityHisory.innerHTML = '';
    for (var i = savedCities.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');        
        btn.textContent = savedCities[i];
        btn.setAttribute('data-search', savedCities[i]);
        cityHisory.append(btn);
    }
    } else return;
};



//function that searches API when search city is clicked
$("#searchBtn").click(function(event){
    event.preventDefault();
    // prevent empty value of city
    var chosenCity = userCity.value;
    if (!chosenCity.value){
        console.log("there was nothing entered");
        return;
    }
    console.log(chosenCity);
    getCity(chosenCity); //gets the lat/lon of requested city
    // add it to history and save to local storage
    localStorage.setItem("Saved-Cities", JSON.stringify(cityHisory));

    //rerun search history with new event

    //rempty usercity
    userCity.value = "";
});
    








//function to get cities lat and lon values via name
function getCity(uc) {
    var citylocation = `http:api.openweathermap.org/geo/1.0/direct?q=${uc}&limit=1&appid=${weatherApiKey}`;

    console.log(uc);
    fetch(citylocation) // using variable name to grab coordinates
        .then((response) => response.json())
        .then((data) => console.log(data[0]));
}



//create function to prevent default on form
function fhandle(event) {
    //prevent no submission
    
    
    userCity.value = ""; // re-empty the input section


}


          // -uses API to grab current weather conditions
          // - uses API to grab future weather conitions
          // - stores city in local storage
          // - appends city to search hisotry ("".searchbtn") (creates a btn that pulls up results of city)


//create function to search city stored in history when clicked
function cityHistory() {
    
    //create btns for each searched city
        //start function that gets city info
    //put the newest searches on top
    // pull from local storage

}

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


