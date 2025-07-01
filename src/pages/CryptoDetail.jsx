

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CryptoChart from '../components/CryptoChart';

const CryptoDetail = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoinInfo(data));
  }, [id]);

  if (!coinInfo) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{coinInfo.name} ({coinInfo.symbol.toUpperCase()})</h2>
      <p className="mb-4">Current Price: ${coinInfo.market_data.current_price.usd.toLocaleString()}</p>
      <CryptoChart coin={id} />
    </div>
  );
};

export default CryptoDetail;
