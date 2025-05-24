import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Booking from './pages/Booking.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
