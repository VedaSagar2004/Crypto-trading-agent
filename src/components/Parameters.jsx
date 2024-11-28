// CryptoSettings.js
import React, { useState } from 'react';

const Parameters = ({ onSettingsChange }) => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [stopLoss, setStopLoss] = useState(0.95);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [minPrice, setMinPrice] = useState(40000);
  const [investment, setInvestment] = useState(1000);

  const cryptos = ['BTC', 'ETH', 'LTC'];

  const handleSettingsChange = () => {
    onSettingsChange({
      selectedCrypto,
      stopLoss,
      maxPrice,
      minPrice,
      investment
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="w-32">
        <label htmlFor="crypto" className="block text-gray-400 font-medium">
          Crypto
        </label>
        <select
          id="crypto"
          value={selectedCrypto}
          onChange={(e) => {
            setSelectedCrypto(e.target.value);
            handleSettingsChange();
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2"
        >
          {cryptos.map((crypto) => (
            <option key={crypto} value={crypto}>
              {crypto}
            </option>
          ))}
        </select>
      </div>
      <div className="w-32">
        <label htmlFor="stopLoss" className="block text-gray-400 font-medium">
          Stop Loss
        </label>
        <input
          id="stopLoss"
          type="number"
          step="0.01"
          min="0.01"
          max="1"
          value={stopLoss}
          onChange={(e) => {
            setStopLoss(parseFloat(e.target.value));
            handleSettingsChange();
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2"
        />
      </div>
      <div className="w-32">
        <label htmlFor="maxPrice" className="block text-gray-400 font-medium">
          Max Price
        </label>
        <input
          id="maxPrice"
          type="number"
          step="100"
          min="1000"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(parseInt(e.target.value));
            handleSettingsChange();
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2"
        />
      </div>
      <div className="w-32">
        <label htmlFor="minPrice" className="block text-gray-400 font-medium">
          Min Price
        </label>
        <input
          id="minPrice"
          type="number"
          step="100"
          min="1000"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(parseInt(e.target.value));
            handleSettingsChange();
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2"
        />
      </div>
      <div className="w-32">
        <label htmlFor="investment" className="block text-gray-400 font-medium">
          Investment
        </label>
        <input
          id="investment"
          type="number"
          step="100"
          min="100"
          value={investment}
          onChange={(e) => {
            setInvestment(parseInt(e.target.value));
            handleSettingsChange();
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2"
        />
      </div>
    </div>
  );
};

export default Parameters;