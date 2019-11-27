const img = document.querySelector(".js-img");
const tableView = document.querySelector(".js-tableView");
const bt_sub = document.querySelector(".bt-sub");
const input = document.querySelector(".input");
const APIKEY = 'a87b44b33c6149de88819638ea03ec0c';
const fetchWeather = query =>
    fetch(
        `https://api.weatherbit.io/v2.0/current?city=${query},&key=${APIKEY}`
    )
    .then(responce => {
        if (responce.ok) return responce.json();
        throw new Error("Error fetching data");
    })
    .then(data => {
        console.log(data);
        input.value = "";
        tableView.textContent = `${data.data[0].city_name}: ${data.data[0].dewpt} C`;
        img.src = data.current.weather_icons;
    })
    .catch(error => {
        console.log(error);
    });

const getUserIp = () =>
    fetch("https://api.ipify.org?format=json")
    .then(responce => {
        if (responce.ok) return responce.json();
        throw new error("error", responce.statusText);
    })
    .then(data => data.ip)
    .catch(err => console.log(err));

// getUserIp().then(data => {
//   fetchWeather(data);
//   console.log("ip promice", data);
// });

bt_sub.addEventListener("click", event => {
    event.preventDefault();
    fetchWeather(input.value);
});