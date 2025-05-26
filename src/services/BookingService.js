export const BookingService = {
  getBookings() {
    const data = localStorage.getItem('bookings');
    return data ? JSON.parse(data) : {};
  },

  getBookedSeats(movieId) {
    const bookings = this.getBookings();
    return bookings[movieId]?.seats || [];
  },

  saveBooking(movieId, newSeats, userData) {
    const bookings = this.getBookings();

    const previousSeats = bookings[movieId]?.seats || [];

    const updatedSeats = [...previousSeats, ...newSeats];

    bookings[movieId] = {
      seats: updatedSeats,
      user: userData
    };

    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
};
