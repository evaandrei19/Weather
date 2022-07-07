//selector variable
var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

api = "d9e9dc0d94c20bc867d413908e0f2525";

function conversion(val) {
  return (val - 273).toFixed(2);
}
//fetch
btn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${api}`
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var temperature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${conversion(temperature)} C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
    })
    .catch((err) => alert("You entered Wrong city name"));
});
