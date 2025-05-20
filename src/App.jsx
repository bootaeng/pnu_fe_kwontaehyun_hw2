import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './doc_page/home';
import Dex from './doc_page/real_doc';
import PokemonDetail from './doc_page/pokemon_detail'; // 상세 페이지 추가

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
