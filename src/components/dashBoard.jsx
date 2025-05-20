import styled from 'styled-components';
import pokeball from '../assets/pokeball.png'; 
import { useSelectedPokemon } from '../context/pokeCont';
const Wrapper = styled.div`
  padding: 24px;
  background: #f8f8f8;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 120px;
  height: 180px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
`;

const Number = styled.div`
  font-size: 12px;
  color: gray;
`;

const RemoveBtn = styled.button`
  margin-top: 8px;
  padding: 4px 8px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
`;

export default function Dashboard() {

  const { selected, removePokemon } = useSelectedPokemon();
  const safeSelected = Array.isArray(selected) ? selected : [];
  
  const totalSlots = 6;
  const filled = [...safeSelected];
  const emptySlots = totalSlots - filled.length;

  const cards = [
    ...filled.map(p => (
      <Card key={p.id}>
        <Img src={p.image} alt={p.name} />
        <Name>{p.name}</Name>
        <Number>No. {p.id.toString().padStart(3, '0')}</Number>
        <RemoveBtn onClick={() => removePokemon(p.id)}>삭제</RemoveBtn>
      </Card>
    )),
    ...Array.from({ length: emptySlots }).map((_, i) => (
      <Card key={`empty-${i}`}>
        <Img src={pokeball} alt="빈 슬롯" />
      </Card>
    ))
  ];

  return (
    <Wrapper>
      <Grid>
        {cards}
      </Grid>
    </Wrapper>
  );
}
