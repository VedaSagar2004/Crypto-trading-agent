import React from 'react';

const Bots = ({ data }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-4 mb-10">
      <h2 className="text-2xl font-bold">Weekly top bots</h2>
      <p className="text-gray-400">7-day best performing bots</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((bot, index) => (
          <div key={index} className="bg-gray-800 w-44 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className={`text-lg font-bold ${bot.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>{bot.profit}%</span>
              <span className="text-gray-400">{bot.name}</span>
            </div>
            <div className="text-gray-400 text-sm">
              <div className='flex justify-between'>
                <div>Runtime: </div>
                <div>{bot.runtime}</div>
              </div>
              <div className='flex justify-between'>
                <div>Investment: </div>
                <div>{bot.buyerInvestment}</div>
              </div>
              <div className='flex justify-between'>
                <div>Min. investment: </div>
                <div>{bot.minInvestment}</div>
              </div>
              {/* <p>Buyer's investment amount: ${bot.buyerInvestment.toLocaleString()}</p>
              <p>Min. investment: ${bot.minInvestment}</p> */}
            </div>
          </div>
        ))}
      </div>
      {/* <a href="#" className="text-blue-500 hover:underline">More</a> */}
    </div>
  );
};

export default Bots;