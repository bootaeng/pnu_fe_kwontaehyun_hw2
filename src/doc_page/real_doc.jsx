
import styled from 'styled-components';
import Dashboard from '../components/dashBoard';
import PokemonList from '../components/pokeList';
import { MOCK_POKEMONS } from '../pokemon_data/data';
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;       // 수평 중앙
  justify-content: flex-start; // 수직은 위쪽에서 시작
  padding-top: 32px;
  box-sizing: border-box;
`;

export default function Dex() {
  return (
    <Container>
      <Dashboard />
      <PokemonList pokemons={MOCK_POKEMONS}/>
    </Container>
  );
}
