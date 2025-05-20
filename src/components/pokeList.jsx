import styled from 'styled-components';
import PokemonCard from './pokeCard';
import { MOCK_POKEMONS } from '../pokemon_data/data';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;    
  gap: 24px;
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
`;


export default function PokemonList() {
  return (
    <ListGrid>
      {MOCK_POKEMONS.map(p => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </ListGrid>
  );
}
