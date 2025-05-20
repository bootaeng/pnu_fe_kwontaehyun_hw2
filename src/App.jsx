// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './doc_page/home.jsx';
import Dex from './doc_page/real_doc.jsx';
import PokemonDetail from './doc_page/pokemon_detail';
import { useState } from 'react';
import { MOCK_POKEMONS } from "./pokemon_data/data";

function App() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find(p => p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
    } else if (selected.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
    } else {
      setSelected([...selected, pokemon]);
    }
  };

  const handleRemove = (id) => {
    setSelected(selected.filter(p => p.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
