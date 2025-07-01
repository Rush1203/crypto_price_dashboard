import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoTable from '../components/CryptoTable';

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by name"
        className="w-full p-2 rounded mb-4 text-black"
        onChange={(e) => setSearch(e.target.value)}
      />
      <CryptoTable coins={filteredCoins} />
    </div>
  );
};

export default HomePage;