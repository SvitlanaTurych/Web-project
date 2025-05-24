import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import movies from '../data/movie'
import myPhoto from '../assets/photo_2025-05-18_18-41-24.jpg'

function Home({ onNavigateToBooking }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <img 
        src={myPhoto}
        alt="Афіша кінотеатру" 
        className="cinema-banner"
      />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList movies={filteredMovies} onNavigateToBooking={onNavigateToBooking} />
    </>
  );
}

export default Home;
