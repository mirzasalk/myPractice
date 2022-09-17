import { useState } from "react";
import { useEffect } from "react";
import "./weatherApp.css";

const key = "071585b4684108b424d99e4d79b0b58e";
const base = "https://api.openweathermap.org/data/2.5/";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [backImg, setBackImg] = useState("cold");
  const [weather, setWeather] = useState({
    name: "City",
    country: "Country",
    temp: 0,
    main: "Wether",
  });
  const dataBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  const seartch = (e) => {
    if (e.key === "Enter")
      fetch(`${base}weather?q=${query}&units=metric&APPID=${key}`)
        .then((response) => response.json())
        .then((results) => {
          console.log(results);
          setWeather({
            name: results.name,
            country: results.sys.country,
            temp: results.main.temp,
            main: results.weather[0].main,
          });
          if (Math.round(results.main.temp) > 16) {
            setBackImg("hot");
          } else {
            setBackImg("cold");
          }
          setQuery("");
        });
  };

  return (
    <div id="main">
      {backImg === "cold" ? (
        <div className="cold">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={seartch}
          />
          <div>
            {weather.name},{weather.country}
          </div>
          <div>{dataBuilder(new Date())}</div>
          <div className="temp">{Math.round(weather.temp)}°C</div>
          <div className="wether">{weather.main}</div>
        </div>
      ) : (
        <div className="hot">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={seartch}
          />
          <div>
            {weather.name},{weather.country}
          </div>
          <div className="temp">{Math.round(weather.temp)}°C</div>
          <div className="wether">{weather.main}</div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
