import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search/:query" element={<Movies />}></Route>
      <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
      <Home />
    </div>
    </Router>
  );
}

export default App;
