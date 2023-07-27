import React, {useState} from 'react';
import './StockForm.css'; // Import the CSS file for styles
import StockData from '../../molecules/StockData/StockData';

const StockForm = () => {
  const [symbol, setSymbol] = useState ('');
  const [selectedDate, setSelectedDate] = useState ('');
  const [stockData, setStockData] = useState (null);

  const handleSymbolChange = event => {
    setSymbol (event.target.value);
  };

  const handleDateChange = event => {
    setSelectedDate (event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault ();

    // API endpoint URL - Replace with your actual API endpoint
    const apiUrl = `http://localhost:5000/api/fetchStockData?symbol=${symbol}&date=${selectedDate}`;

    fetch (apiUrl)
      .then (response => response.json ())
      .then (data => {
        setStockData (data); // Save the fetched data in the state
      })
      .catch (error => {
        console.error ('Error fetching data:', error);
      });
  };

  return (
    <div className="stock-form-container">

      <form className="stock-form" onSubmit={handleSubmit}>
        <label>
          Stock Symbol:
          <input
            type="text"
            value={symbol}
            onChange={handleSymbolChange}
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
      {stockData && <StockData stockData={stockData} />}
    </div>
  );
};

export default StockForm;
