function MovieCard({ movie, onNavigateToBooking }) {
  return (
<div className="card">
  <div className="poster-wrapper">
    <img src={movie.poster} alt={movie.title} className="poster" />
  </div>
  <div className="card-content">
    <h2 className="title">{movie.title}</h2>
    <p className="description">{movie.description}</p>
    <div className="genres">
      {movie.genres.map((genre, index) => (
        <span key={index} className="genre">
          {genre}
        </span>
      ))}
    </div>
    <p className="showtime">Сеанс: {movie.showtime}</p>
    <button className="booking-button" onClick={() => onNavigateToBooking(movie.id)}>Забронювати</button>
   </div>
  </div>
  );
}

export default MovieCard;