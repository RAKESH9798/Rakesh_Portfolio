import React from 'react';
import './HomePage.css';
import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <About />
    </div>
  );
}

export default HomePage;
