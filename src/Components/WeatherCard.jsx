import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../Provider/Theme/ThemeContext";
import WeatherContext from "../Provider/Weather/WeatherContext";
import { toast } from "react-toastify";


const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weather, dispatch } = useContext(WeatherContext);

  const getWeather = async (city) => {
    try {
      //fetching api

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=c797814bac894b5a97e152743240310&q=${city}&aqi=yes`
      );
      const data = await response.json();

      //checking if data is error
      if (data.error) {
        toast.error("enter valid city")
      } else {
        //setting or set data into state
        dispatch({
          type: "GET_WEATHER",
          payload: data,
        });
      }
    } catch (error) {
      toast.error("something went wrong")
    }
  };

  const [city, setCity] = useState("");

  const searchWeather = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("indore");
  }, []);

  return (
    <div className="col-sm-12 col-md-4 ">
      <div
        id="weathercard "
        className={
          dark
            ? "card p-3 rounded-0 bg-dark text-light"
            : "card p-3 rounded-0 bg-light text-dark"
        }
      >
        <h2>Today's Weather</h2>

        <form className="my-3" onSubmit={searchWeather}>
          <input
            type="text"
            required
            className="form-control rounded-0 my-2"
            placeholder="enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button className="btn btn-outline-info rounded-0 my-2 w-100">
            Search weather
          </button>
        </form>

        {!weather ? (
          <h1 className="text-center text-secondary">Loading..</h1>
        ) : (
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1>{weather.current.temp_c}</h1>
              <h2 className="text-secondary">{weather.location.name}</h2>
            </div>
            <div className="text-center">
              <img
                style={{ height: "75px", width: "75px" }}
                src={weather.current.condition.icon}
                alt="clouds"
              />
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
