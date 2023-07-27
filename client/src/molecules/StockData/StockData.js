import React from 'react';
import './StockData.css'; // Import

const StockData = ({stockData}) => {
  if (!stockData) {
    return <div className="stock-ticker">Data not found</div>;
  }
  const {open, high, low, close, volume} = stockData;

  return (
    <div className="stock-ticker">

      <div className="stock-card">
        <span className="stock-card-icon">&#128200;</span>
        <div>
          <p className="stock-card-label">Open</p>
          <p className="stock-card-value">{open}</p>
        </div>
      </div>
      <div className="stock-card">
        <span className="stock-card-icon">&#9650;</span>
        <div>
          <p className="stock-card-label">High</p>
          <p className="stock-card-value">{high}</p>
        </div>
      </div>
      <div className="stock-card">
        <span className="stock-card-icon">&#9660;</span>
        <div>
          <p className="stock-card-label">Low</p>
          <p className="stock-card-value">{low}</p>
        </div>
      </div>
      <div className="stock-card">
        <span className="stock-card-icon">&#129041;</span>
        <div>
          <p className="stock-card-label">Close</p>
          <p className="stock-card-value">{close}</p>
        </div>
      </div>
      <div className="stock-card">
        <span className="stock-card-icon">&#128202;</span>
        <div>
          <p className="stock-card-label">Volume</p>
          <p className="stock-card-value">{volume}</p>
        </div>
      </div>
    </div>
  );
};

export default StockData;
