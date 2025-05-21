import { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import moviesData from './data/movie';
import './index.css';
import myPhoto from './assets/photo_2025-05-18_18-41-24.jpg';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="background">
      <div className="bg">
        <img src={myPhoto} alt="Афіша кінотеатру" className="afisha" />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default App;
