import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


import "./style.css"
import patricia from '../../assets/patricia.jpg'
import pedro from '../../assets/pedro.png'
import tamires from '../../assets/Tamires.png'
import thadeu from '../../assets/thadeu.png'
import victor from '../../assets/victor.png'
import wallace from '../../assets/wallace.png'

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
                                      
                                  
                    <Link to={"https://github.com/patriciastarck"}>
                    <div className='slider-sobre'> 
                    <img src={patricia} alt="Imagem 1"  />
                    <h4 className='legenda'>Patricia Starck </h4>
                    </div>
                    </Link>

                    <Link to={"https://github.com/Pedroh88"}>
                    <div className='slider-sobre'> 
                    <img src={pedro} alt="Imagem 1"  />
                    <h4 className='legenda'>Pedro Horacio </h4>
                    </div>
                    </Link>   

                    <Link to={"https://github.com/tamiresf"}>
                    <div className='slider-sobre'> 
                    <img src={tamires} alt="Imagem 1"  />
                    <h4 className='legenda'>Tamires Ferreira </h4>
                    </div>
                    </Link>            

                    <Link to={"https://github.com/ThadeuGoes"}>
                    <div className='slider-sobre'> 
                    <img src={thadeu} alt="Imagem 1"  />
                    <h4 className='legenda'>Thadeu Góes </h4>
                    </div>                    
                    </Link>

                    <Link to={"https://github.com/VictorSoares-C"}>
                    <div className='slider-sobre'> 
                    <img src={victor} alt="Imagem 1"  />
                    <h4 className='legenda'>Victor Soares </h4>
                    </div>                    
                    </Link>

                    <Link to={"https://github.com/WallaceHenriques"}>
                    <div className='slider-sobre'> 
                    <img src={wallace} alt="Imagem 1"  />
                    <h4 className='legenda'>Wallace henriques </h4>
                    </div>                    
                    </Link>                   
                    
                  </Carousel>
            </div>
          
          
          
          <Footer/>
        </div>
    )
  }