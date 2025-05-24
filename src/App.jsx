import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Booking from './pages/Booking.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const navigateToBooking = (movieId) => {
    setSelectedMovieId(movieId);
    setCurrentPage('booking');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedMovieId(null);
  };

  return (
      <div className="app-container">
        <div className="app-content">
          {currentPage === 'home' ? (
            <Home onNavigateToBooking={navigateToBooking} />
          ) : (
            <Booking movieId={selectedMovieId} onNavigateToHome={navigateToHome} />
          )}
        </div>
      </div>
  );
}

export default App;
