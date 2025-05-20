import styled from 'styled-components';
import PokemonCard from './pokeCard';

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 최대 7개
  justify-content: center;
  gap: 20px;
  padding: 32px;
`;

export default function PokemonList({ pokemons = [], onAdd }) {
  return (
    <ListGrid>
      {pokemons.map(p => (
        <PokemonCard key={p.id} pokemon={p} onAdd={onAdd} />
      ))}
    </ListGrid>
  );
}

