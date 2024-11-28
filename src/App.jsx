import React, { useState } from 'react';
import './App.css'
import Heading from './components/Heading';
import Parameters from './components/Parameters';
import Bots from './components/Bots';

const App = () => {
  const [settings, setSettings] = useState({
    selectedCrypto: 'BTC',
    stopLoss: 0.95,
    maxPrice: 50000,
    minPrice: 40000,
    investment: 1000
  });

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white space-y-4 h-screen gap-16">
      <Heading />
      <Parameters onSettingsChange={handleSettingsChange} />
      <Bots  data={[{
        name: "BTC",
        profit: 45.6,
        runtime: "8D 6h 19m",
        buyerInvestment: "30,000",
        minInvestment: "2,000"
    }, {
        name: "ETH",
        profit: 18.9,
        runtime: "7D 10h 7m",
        buyerInvestment: "20,000",
        minInvestment: "1,000"
    }, {
        name: "BTC",
        profit: 12.3,
        runtime: "9D 2h 45m",
        buyerInvestment: "40,000",
        minInvestment: "2,000"
    }, {
        name: "LTC",
        profit: 50.9,
        runtime: "8D 10h 2m",
        buyerInvestment: "25,000",
        minInvestment: "1,500"
    }]}></Bots>
    </div>
  );
};

export default App;
