import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MOCK_POKEMONS } from '../pokemon_data/data'; 

const Container = styled.div`
  padding: 48px 16px;
  text-align: center;
`;

const Img = styled.img`
  width: 160px;
  margin-bottom: 24px;
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

  if (!pokemon) return <Container>포켓몬이 존재하지 않음.</Container>;

  return (
    <Container>
      <Img src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Type>
        타입: {Array.isArray(pokemon.types) && pokemon.types.length > 0
          ? pokemon.types.join(', ')
          : '타입 없음'}
      </Type>
      <Desc>{pokemon.description}</Desc>
      <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
    </Container>
  );
}

