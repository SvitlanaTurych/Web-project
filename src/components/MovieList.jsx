import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <div className="no-results">Фільмів не знайдено</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;