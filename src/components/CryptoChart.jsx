

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CryptoChart = ({ coin }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
      )
      .then((res) => {
        const prices = res.data.prices.map(([time, price]) => ({
          time: new Date(time).toLocaleDateString(),
          price,
        }));
        setChartData(prices);
      });
  }, [coin]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">7-Day Price Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;
