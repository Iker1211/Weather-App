import "./reset.css"
import "./styles.css";

const key = "A4G94C3GM9CKR6XA64CHYMMRQ";
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

let searchCity = document.getElementById("input");
let search = document.getElementById("search"); 

let city = "ciudad del cabo";

search.addEventListener("click", (event) => {
    event.preventDefault();

    city = searchCity.value;
    getWeather();
})

let report = {};

const getWeather = async function () {

    try {
     let petition = await fetch( url + city + "?key=" + key, {mode: "cors"})
     let result = await petition.json();

     report = {
        city: result.resolvedAddress,
        condition: result.currentConditions.conditions,
        temp: result.currentConditions.temp,
        feelslike: result.currentConditions.feelslike,
        humidity: result.currentConditions.humidity,
     }

     await report;
     domdAttachment();

    } catch  (error) {
     console.log(error);
     console.log("something went wrong");
     handleError();
    }
}

let weatherCard = document.getElementById("weather-card");

const handleError = async function () {
    alert("That city does not exist");
}

const domdAttachment = async function () {
    weatherCard.children[0].innerHTML = report.condition;
    weatherCard.children[1].innerHTML = report.city;
    weatherCard.children[2].innerHTML = report.temp + "&#8457";
    weatherCard.children[3].innerHTML = "Feels like" + report.feelslike + "&#8457";
    weatherCard.children[4].innerHTML = "Humidity" + report.humidity + "%";
}

getWeather();