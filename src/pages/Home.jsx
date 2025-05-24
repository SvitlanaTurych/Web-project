import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import movies from '../data/movie';
import myPhoto from '../assets/photo_2025-05-18_18-41-24.jpg';
import { Link } from 'react-router-dom';

function Home() {
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
      
      <div className="movie-grid">
        {filteredMovies.length === 0 ? (
          <div className="no-results">Фільмів не знайдено</div>
        ) : (
          filteredMovies.map(movie => (
            <Link key={movie.id} to={`/booking/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
