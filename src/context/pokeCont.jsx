import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useEffect } from 'react';
const SelectedPokemonContext = createContext();

export function SelectedPokemonProvider({ children }) {
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selectedPokemon");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selected));
  }, [selected]);

  const addPokemon = (pokemon) => {
    if (selected.length >= 6) {
      toast.error("⚠️ 6마리 이상 선택할 수 없습니다."); 
      return;
    }
    if (selected.some(p => p.id === pokemon.id)) {
      toast.warn("이미 선택된 포켓몬입니다."); 
      return;
    }
    setSelected(prev => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id));
  };

  return (
    <SelectedPokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </SelectedPokemonContext.Provider>
  );
}

export function useSelectedPokemon() {
  return useContext(SelectedPokemonContext);
}
