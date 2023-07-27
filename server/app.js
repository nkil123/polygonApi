// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.enable("trust proxy");

app.post("/api/fetchStockData", (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
  const baseURL = "https://api.polygon.io";
  const api = axios.create({
    baseURL
  });

  const { date, stockKey } = req.body;

  if (!date || !stockKey) {
    res.status(500).send("Date or stock key missing");
    return;
  }

  const apiKey = process.env.POLYGONIO_API_KEY;

  api
    .get(`/v1/open-close/${stockKey}/${date}?adjusted=true&apiKey=${apiKey}`)
    .then((response) => {
      if (!response?.data) {
        res.status(500).send("Something went wrong");
        return;
      }
      const { high, low, open, close, volume } = response?.data;
      res
        .status(200)
        .json({ data: { high, low, open, close, volume }, status: "SUCCESS" });
    })
    .catch((error) => {
      res.status(error.response.status).send(error.response.data.status);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
