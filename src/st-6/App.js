// Router 적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Navigation from './components/Navigation';

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path = "/ws-java-movie-react/" element={<Home/>}/>
        <Route path = '/ws-java-movie-react/about' element={<About/>}/>
        <Route path = '/ws-java-movie-react/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
