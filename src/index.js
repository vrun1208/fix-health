import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Components/Nav';
import reportWebVitals from './reportWebVitals';
import HeroSection from './Components/HeroSection';
import BookingForm from './Components/booking';
import { BrowserRouter } from 'react-router-dom';
import Testimonials from './Components/testimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Nav />
    <HeroSection />
    <BookingForm />
    <Testimonials />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
