import "./reset.css"
import "./styles.css";

const key = "A4G94C3GM9CKR6XA64CHYMMRQ";
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
let city = "ciudad del cabo";

let searchCity = document.getElementById("input");
let search = document.getElementById("search"); 

search.addEventListener("click", (event) => {
    event.preventDefault();

    city = searchCity.value;
    console.log(city);

    getWeather();
})

const getWeather = async function () {
    let petition = await fetch( url + city + "?key=" + key, {mode: "cors"})
    let result = await petition.json();
    console.log(result.days[0].temp, result.days[1].temp, result.days[2].temp, result.days[3].temp, result.days[4].temp);
}

getWeather();