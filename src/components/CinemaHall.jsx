import { useState, useEffect } from 'react';
import { BookingService } from '../services/BookingService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CinemaHall({ movieId, onConfirmBooking }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 10;

  useEffect(() => {
    const seats = BookingService.getBookedSeats(movieId);
    setBookedSeats(Array.isArray(seats) ? seats : []);
  }, [movieId]);

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
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email } = formData;
    if (!name || !phone || !email) {
      toast.error('Будь ласка, заповніть всі поля форми.');
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error('Будь ласка, введіть коректний email.');
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    BookingService.saveBooking(movieId, selectedSeats, formData);
    toast.success('Бронювання успішно збережено!');
    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
    setShowForm(false);
    onConfirmBooking(selectedSeats, totalPrice);
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

      {selectedSeats.length > 0 && !showForm && (
        <div className="cinema-summary">
          <h3>Вибрані місця:</h3>
          <p>{selectedSeats.join(', ')}</p>
          <p className="cinema-total">Загальна сума: {totalPrice} грн</p>
          <button className="confirm-button" onClick={handleConfirmBooking}>
            Підтвердити бронювання
          </button>
        </div>
      )}

      {showForm && (
        <form className="booking-form" onSubmit={handleFormSubmit}>
          <h3>Введіть ваші дані:</h3>
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Емейл"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">
            Забронювати
          </button>
        </form>
      )}
    </div>
  );
}

export default CinemaHall;
