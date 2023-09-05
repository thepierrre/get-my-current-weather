const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const {
  locationKey,
  weatherAPIKey,
  OpenWeatherAPIKey,
} = require("./weather-app-credentials");

// const port = process.env.PORT;
const port = 5014;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/location", async (req, res, next) => {
  const { lat, lon } = req.body;

  // const apiKey = process.env.LOCATIONKEY;
  const APIKey = locationKey;
  const APIUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

  try {
    const response = await axios.get(APIUrl);
    location = response.data.results[9].formatted_address;
  } catch (error) {
    location = null;
    error = "Something went wrong. Please try again.";
  }

  res.json(location);
});

// Get the coordinates based on the entered city.
app.get("/coordinates", async (req, res, next) => {
  const { city } = req.query;

  const APIKey = OpenWeatherAPIKey;
  const limit = 1;
  const APIUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${APIKey}`;

  try {
    const response = await axios.get(APIUrl);
    const weather = response.data;
    res.json(weather);
  } catch (err) {
    res.status(422).json({ errorMessage: "Couldn't find the entered city." });
    console.log(err);
  }
});

// Get weather and air quality based on the coordinates.
app.get("/combined-data", async (req, res, next) => {
  const { lat, lon } = req.query;
  const APIKey = OpenWeatherAPIKey;

  airQualityAPIUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKey}`;
  weatherAPIURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`;

  try {
    const [airQualityResponse, weatherResponse] = await Promise.all([
      axios.get(airQualityAPIUrl),
      axios.get(weatherAPIURL),
    ]);
    const airQualityData = airQualityResponse.data;
    const weatherData = weatherResponse.data;

    const combinedData = {
      airQuality: airQualityData,
      weather: weatherData,
    };

    res.json(combinedData);
  } catch (err) {
    console.log(err);
  }
});

// Get the city name based on the coordinates.
app.get("/city", async (req, res, next) => {
  const { lat, lon } = req.query;

  const APIKey = OpenWeatherAPIKey;
  const limit = 1;
  const APIUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${APIKey}`;

  try {
    const response = await axios.get(APIUrl);
    const city = response.data;
    res.json(city);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
