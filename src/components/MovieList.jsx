import { Link } from 'react-router-dom';

function MovieList({ movies, onNavigateToBooking }) {
  if (movies.length === 0) {
    return <div className="no-results">Фільмів не знайдено</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <Link to={`/booking/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;