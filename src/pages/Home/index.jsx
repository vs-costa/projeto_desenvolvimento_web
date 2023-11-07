import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css';
import banner01 from '../../assets/banner01.png'
import banner02 from '../../assets/banner02.png'
import banner03 from '../../assets/banner03.png'

function Carrossel() {

  return (
    <div className='home' >
      <Header/>
      <div className="carrossel">
        <div className="carrossel-inner">
          <div className="carrossel-item active">
            <img src={banner01} alt="Slide 1" />
          </div>
          <div className="carrossel-item">
            <img src={banner02} alt="Slide 2" />
          </div>
          <div className="carrossel-item">
            <img src={banner03} alt="Slide 3" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Carrossel;