import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
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
        <Link to={`/booking/${movie.id}`}>
          <button className="booking-button">Забронювати</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;