
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeslice';
import HomePage from './pages/HomePage';
import CryptoDetail from './pages/CryptoDetail';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Crypto Price Dashboard</h1>
        <button
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          onClick={() => dispatch(toggleTheme())}
        >
           {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
