import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MOCK_POKEMONS } from '../pokemon_data/data';
import { useSelectedPokemon } from '../context/pokeCont';
const Container = styled.div`
  padding: 48px 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 160px;
  margin-bottom: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.h2`
  color: red;
`;

const Type = styled.p`
  font-weight: bold;
`;

const Desc = styled.p`
  margin-top: 16px;
`;
const ButtonGroup = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  background: #eee;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_POKEMONS.find(p => p.id === parseInt(id));
  const { selected, addPokemon, removePokemon } = useSelectedPokemon();

  const isSelected = selected.some(p => p.id === pokemon.id);

  const handleClick = () => {
    if (isSelected) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Container>
      <Img src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Type>타입: {Array.isArray(pokemon.types) ? pokemon.types.join(', ') : pokemon.types}</Type>
      <Desc>{pokemon.description}</Desc>
      <ButtonGroup>
        <Button onClick={handleClick}>
          {isSelected ? '삭제' : '추가'}
        </Button>
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      </ButtonGroup>
    </Container>
  );
}
