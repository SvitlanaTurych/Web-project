import { useState } from 'react';

function CinemaHall({ movieId, onConfirmBooking }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(['A3', 'A4', 'B7', 'C2', 'D5', 'E8', 'F1', 'F9']);

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 10;

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const getSeatStatus = (seatId) => {
    if (bookedSeats.includes(seatId)) return 'booked';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  const totalPrice = selectedSeats.length * 150;

  const handleConfirmBooking = () => {
  setBookedSeats((prev) => [...prev, ...selectedSeats]);
  setSelectedSeats([]);
};

  return (
    <div className="cinema-container">
      <div className="cinema-screen">
        <div className="cinema-screen-label">ЕКРАН</div>
        <div className="cinema-screen-line"></div>
      </div>

      <div className="cinema-seats">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            <span className="row-label">{row}</span>
            {Array.from({ length: seatsPerRow }, (_, index) => {
              const seatNumber = index + 1;
              const seatId = `${row}${seatNumber}`;
              const status = getSeatStatus(seatId);

              return (
                <button
                  key={seatId}
                  className={`seat-button ${status}`}
                  onClick={() => toggleSeat(seatId)}
                  disabled={status === 'booked'}
                >
                  {seatNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="cinema-legend">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Доступні</span>
        </div>
        <div className="legend-item">
          <div className="legend-color selected"></div>
          <span>Вибрані</span>
        </div>
        <div className="legend-item">
          <div className="legend-color booked"></div>
          <span>Заброньовані</span>
        </div>
      </div>

      {selectedSeats.length > 0 && (
        <div className="cinema-summary">
          <h3>Вибрані місця:</h3>
          <p>{selectedSeats.join(', ')}</p>
          <p className="cinema-total">Загальна сума: {totalPrice} грн</p>
          <button
            className="confirm-button"
            onClick={handleConfirmBooking}
            >
             Підтвердити бронювання
          </button>
        </div>
      )}
    </div>
  );
}

export default CinemaHall;
