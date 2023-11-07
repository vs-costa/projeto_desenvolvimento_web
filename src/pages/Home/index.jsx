import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css';
import banner01 from '../../assets/banner01.png'
import banner02 from '../../assets/banner02.png'
import banner03 from '../../assets/banner03.png'
import {Carousel} from 'react-responsive-carousel' 
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Carrossel() {

  return (
    <div className='home' >
      <Header/>
      <Carousel>
      <div>
        <img src={banner01} alt="Imagem 1" />
      </div>
      <div>
        <img src={banner02} alt="Imagem 2" />
      </div>
      <div>
        <img src={banner03} alt="Imagem 3" />
      </div>
    </Carousel>
       <Footer/>
    </div>
  );
};

export default Carrossel;