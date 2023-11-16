// src/App.js

import React from 'react';
import BookingCalendar from './BookingCalendar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BookingCalendar />
      <ToastContainer />
    </div>
  );
}

export default App;
