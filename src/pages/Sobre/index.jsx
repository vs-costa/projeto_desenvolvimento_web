import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import "./style.css"
import foto01 from '../../assets/patricia.jpg'
import foto02 from '../../assets/pedro.png'
import foto03 from '../../assets/Tamires.png'
import foto04 from '../../assets/thadeu.png'
import foto05 from '../../assets/victor.png'
import foto06 from '../../assets/wallace.png'

import {Carousel} from 'react-responsive-carousel' 
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function Sobre() {
    return (
      <div>
        <Header />
        <div className="container-sobre">
          <h1>Sobre</h1>
          <p>Nossa jornada começou com uma paixão por conectar pessoas com aventuras emocionantes. Desde o nossoinício, buscamos transformar viagens comuns em experiências extraordinárias, tornando o aluguel de carros umaexperiência fácil, acessível e cheia de possibilidades.
          Fundada por entusiastas de viagens que entendem a importância de cada quilômetro percorrido, a AutoVoyage, temuma história de dedicação e inovação. Nossa missão é simples: capacitar você a explorar o mundo com liberdade,conforto e confiança.
          O que fazemos é mais do que fornecer carros; proporcionamos a você a chave para desbloquear aventurasinesquecíveis. Oferecemos uma frota diversificada de veículos de alta qualidade, desde o elegante carro avapor até o robustos a pedra, para atender às necessidades de todos os viajantes.
          Nossa equipe comprometida está sempre pronta para ajudá-lo a escolher o veículo perfeito para sua próximajornada. Trabalhamos incansavelmente para garantir que sua experiência de aluguel de carros seja tranquila esem complicações, para que você possa se concentrar no que mais importa: a alegria de viajar.
          Bem-vindo à AutoVoyage, onde cada estrada é uma promessa de novas experiências!</p>            
          </div> 
          
            <div className='carrossel-sobre'>
            <h2 className='integrantes'>Integrantes do grupo</h2>
              <Carousel>
                
                    <div className='slider-sobre'>
                      
                    <img src={foto01} alt="foto 1"/>
                    <h4 className='legenda'>Patricia Starck </h4>                         
                    </div>
                    <div className='slider-sobre'>
                      <img src={foto02} alt="foto 2" />
                      <h4 className='legenda'>Pedro Horacio</h4>
                    </div>
                    <div className='slider-sobre'>
                      <img src={foto03} alt="foto 3" />
                      <h4 className='legenda'>Tammires Ferreira</h4>
                    </div>
                    <div className='slider-sobre'>
                      <img src={foto04} alt="Imagem 3" />
                      <h4 className='legenda'>Thadeu Góes</h4>
                    </div>
                    <div className='slider-sobre'>
                      <img src={foto05} alt="Imagem 3" />
                      <h4 className='legenda'>Victor Souza</h4>
                    </div>
                    <div className='slider-sobre'>
                      <img src={foto06} alt="Imagem 3" />
                      <h4 className='legenda'>Wallace Henriques</h4>
                    </div>
                  </Carousel>
            </div>
          
          
          
          <Footer/>
        </div>
    )
  }