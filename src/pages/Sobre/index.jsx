import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "./style.css"
import patricia from "../../assets/patricia.jpg"
import tamires from "../../assets/tamires.png"
import pedro from "../../assets/pedro.png"
import thadeu from "../../assets/thadeu.png"
import victor from "../../assets/victor.png"
import wallace from "../../assets/wallace.png"

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
          <div className="fotos">
            <img src={patricia} alt="Foto Patricia" />
            <img src={tamires} alt="" />
            <img src={pedro} alt="" />
            <img src={thadeu} alt="" />
            <img src={victor} alt="" />
            <img src={wallace} alt="" />
          </div>              
          <a href="{patricia}"></a>
          <Footer/>
        </div>
    )
  }