import { useParams, useNavigate } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import movies from '../data/movie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div className="not-found">Фільм не знайдено</div>;
  }

  return (
    <div className="booking-container">
      <div className="back-button-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← Назад до списку фільмів
        </button>
      </div>
      <h1 className="movie-title">{movie.title}</h1>
      <div className="showtime-info">
        <p className="showtime-text">Сеанс: {movie.showtime}</p>
        <div className="genre-list">
          {movie.genres.map((genre, index) => (
            <span key={index} className="genre-badge">
              {genre}
            </span>
          ))}
        </div>
      </div>
      <CinemaHall
        movieId={movie.id}
        onConfirmBooking={(seats, total) => {
          console.log('Заброньовано:', seats, 'на суму', total);
        }}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Booking;
