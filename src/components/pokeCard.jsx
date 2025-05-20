import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelectedPokemon } from '../context/pokeCont';
const Card = styled.div`
  width: 120px;
  height: 180px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const Name = styled.h4`
  margin: 8px 0 4px;
`;

const Number = styled.div`
  font-size: 12px;
  color: gray;
`;

const AddBtn = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default function PokemonCard({ pokemon, onAdd }) {
  const navigate = useNavigate();
  const { addPokemon } = useSelectedPokemon();
  const handleCardClick = () => {
    navigate(`/detail/${pokemon.id}`); 
  };

  return (
    <Card onClick={handleCardClick}>
  <Img src={pokemon.image} alt={pokemon.name} />
  <Name>{pokemon.name}</Name>
  <Number>No. {pokemon.id.toString().padStart(3, '0')}</Number>
  <AddBtn onClick={(e) => {
  e.stopPropagation();
  addPokemon(pokemon);
}}>
  추가
</AddBtn>
</Card>

  );
}
