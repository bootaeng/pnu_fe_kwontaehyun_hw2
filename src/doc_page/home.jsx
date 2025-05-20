import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/pokemon-logo.png'; 

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background: #ffcb05;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={logo} alt="Pokemon Logo" />
      <Button onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}
