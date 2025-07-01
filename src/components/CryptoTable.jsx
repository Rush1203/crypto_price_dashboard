

import { useNavigate } from 'react-router-dom';

const CryptoTable = ({ coins }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm">
        <thead className="bg-gray-800 text-left text-white">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Coin</th>
            <th className="p-3">Price</th>
            <th className="p-3">24h Change</th>
            <th className="p-3">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr
              key={coin.id}
              onClick={() => navigate(`/coin/${coin.id}`)}
              className="hover:bg-gray-700 cursor-pointer"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td className="p-3">${coin.current_price.toLocaleString()}</td>
              <td className={`p-3 ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{
                coin.price_change_percentage_24h.toFixed(2)
              }%</td>
              <td className="p-3">${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;