import React, { useState } from "react";
import "./StockForm.css"; // Import the CSS file for styles
import StockDataCard from "../../molecules/StockDataCard/StockDataCard";
import axios from "axios";
import displayFlashMessage from "../../services/flashMessage";
import { apiResponse, baseUrl } from "../../network/constants";
import { END_POINT } from "../../network/apiPathConfigs";

const alphabeticRegex = /^[A-Za-z]+$/;

const StockForm = () => {
  const [stockKey, setStockkey] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [stockData, setStockData] = useState(null);

  const handleStockkeyChange = (event) => {
    let inputValue = event.target.value;
    const isAlphabetic = alphabeticRegex.test(inputValue);

    if (!isAlphabetic) {
      displayFlashMessage("Only alphabets are allowed", apiResponse.FAILURE);
      return;
    }

    //making upper case because the stockkey is alwasy uppercase and only alphabets
    setStockkey(inputValue?.toUpperCase());
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    // Get the current date
    const currentDate = new Date().toISOString().split("T")[0];

    // Only update the selectedDate state if the selected date is not in the future
    if (date <= currentDate) {
      setSelectedDate(event.target.value);
    } else {
      displayFlashMessage(
        "Please select a date that is not in the future.",
        apiResponse.FAILURE
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${baseUrl}${END_POINT.getStockDataByKeyAndDate}`;

    try {
      const result = await axios.post(apiUrl, {
        date: selectedDate,
        stockKey: stockKey
      });
      displayFlashMessage("Data fetched successfully", apiResponse.SUCCESS);
      setStockData(result?.data?.data || null);
    } catch (err) {
      setStockData(null);
      displayFlashMessage("No Data Found", apiResponse.FAILURE);
    }
  };

  return (
    <div className="stock-form-container">
      <form className="stock-form" onSubmit={handleSubmit}>
        <label>
          Stock Symbol:
          <input
            type="text"
            value={stockKey}
            onChange={handleStockkeyChange}
            required
          />
        </label>
        <br />
        <label>
          Select a Date:
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {stockData && <StockDataCard stockData={stockData} />}
    </div>
  );
};

export default StockForm;
