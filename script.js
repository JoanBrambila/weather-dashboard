


let city = "";
let cityName = $("#city-search");
let searchBtn = $("#search-btn");
let clearButton = $("#clear-history");
let chosenCity = $("#nameofcity");
let currentTemperature = $("#temperature");
let currentHumidty = $("#humidity");
let currentWSpeed = $("#wind-speed");
let savedCity = [];
let prevCitiesList = $("#list");

function find(c) {
  for (var i = 0; i < savedCity.length; i++) {
    if (c.toUpperCase() === savedCity[i]) {
      return -1;
    }
  }
  return 1;
}

let APIKey = "98d5968f766733cd63b07ff10e2f57a2";
function displayWeather(event) {
  console.log('displayWeather ran');
  event.preventDefault();
  if (cityName.val().trim() !== "") {
    city = cityName.val().trim();
    currentWeather(city);
  }
}

function currentWeather(city) {
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .done(function (data) {
      console.log('data looks like', data);
      if(data.cod === 200) {
        $(prevCitiesList).append(`<li>${city}</li>`)
      }
     

  })
    .fail(function (failure) {
      console.log('failure looks like', failure);
      alert("error");
    })
    .always(function () {
      console.log('This string will always print to the console, regardless of success or failure');
    });
   

}



function clearHistory(event) {
  event.preventDefault();
  savedCity = [];
  localStorage.removeItem("cityname");
  document.location.reload();
}

$(searchBtn).on("click", displayWeather);
$("#clear-history").on("click", clearHistory);








