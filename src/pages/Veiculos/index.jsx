import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import Header from "../../components/Header";

export default function Veiculos() {

  const [carros, setCarro] = useState([]);

  useEffect(() => {
    axios
      // mudar esse link abaixo, está errado pq improvisei
      .get('http://localhost:8080/api/carro/listar')
      .then((response) => {
        setCarro(response.data);
        console.log(response.data);
      }).catch(() => {
        console.log("Erro. A requisição solicitada não é válida.");
      })
  }, []);


  return (
    <div>
      <Header />
      <main>
        <div className='veiculos'>
          <div className='container'>
            <header>
              <div className='titulo'>
                <h1>Conheça nossos veículos para locação.</h1>
                <h5>Temos uma seleção especial de carros para você fazer uma viagem inesquecível. Conheça nossa frota:</h5>
              </div>
            </header>
            <div className='cards'>
              {carros.map((carro, key) => {
                return (
                  <div className='card' key={key}>
                    <h4>{carro.nome}</h4>
                    <img src={carro.img} alt="" />
                    <p>{carro.descricao}</p>
                    <h4>Valor da diária:</h4>
                    <h5>{carro.valor}</h5>
                    <button className='botao'>RESERVE AGORA</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
