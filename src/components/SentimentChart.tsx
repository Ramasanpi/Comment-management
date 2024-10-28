import React from 'react';

const SentimentChart: React.FC = () => {
  return (
    <div className="h-64 flex items-end justify-between gap-2">
      {[65, 45, 75, 50, 80, 60, 70].map((height, index) => (
        <div key={index} className="w-full">
          <div
            className="bg-blue-500 rounded-t-lg transition-all duration-300 hover:bg-blue-600"
            style={{ height: `${height}%` }}
          />
          <div className="text-center text-sm text-gray-500 mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentimentChart;