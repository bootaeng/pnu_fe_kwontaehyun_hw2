import { useState } from 'react';
import { MOCK_POKEMONS } from '../pokemon_data/data';
import Dashboard from '../components/dashBoard';
import PokemonList from '../components/pokeList';

export default function Dex() {
  const [selected, setSelected] = useState([]);
  const [pokemons] = useState(MOCK_POKEMONS);

  const handleAdd = (pokemon) => {
    if (selected.length >= 6) {
      alert("6마리 이상 선택할 수 없습니다.");
      return;
    }
    if (selected.find(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter(p => p.id !== id));
  };

  return (
    <>
      <Dashboard selected={selected} onRemove={handleRemove} />
      <PokemonList pokemons={pokemons} onAdd={handleAdd} />
    </>
  );
}
