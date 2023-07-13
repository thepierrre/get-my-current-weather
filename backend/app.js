const axios = require("axios");
const express = require("express");
const app = express();

const port = 5002;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/weather", async (req, res, next) => {
  const { city } = req.query;
  const apiKey = "056795ab2eb5a0b267ee4ab9dfafce43";

  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  let weather;
  let error;

  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = "Something went wrong. Please try again.";
  }

  res.json(weather);
});

app.use("/", (req, res, next) => {
  res.send("Hello!");
});

app.listen(port);
