import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import './style.css';
import AluguelVeiculo from '../../components/AluguelVeiculo'

export default function Veiculos() {
  const [carros, setCarros] = useState([]);
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const aluguelRef = useRef(null); // Criar uma referência para a div de aluguel

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/carro/listar')
      .then((response) => {
        setCarros(response.data);
        console.log(response.data);
      }).catch(() => {
        console.log("Erro. A requisição solicitada não é válida.");
      })
  }, []);

  const handleCarroSelect = (carro) => {
    setCarroSelecionado(carro);
    // Rolar para a div de aluguel quando o carro é selecionado
    aluguelRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <main>
        <div className='veiculos'>
          <div className='veiculos-container'>
            <header>
              <div className='titulo'>
                <h1>Conheça nossos veículos para locação.</h1>
                <h5>Temos uma seleção especial de carros para você fazer uma viagem inesquecível.<br /> Conheça nossa frota:</h5>
              </div>
            </header>
            <div className='cards'>
              {carros.map((carro, key) => {
                return (
                  <div className='card' key={key}>
                    <div className='card-titulo'>
                      <h3>{carro.nome}</h3>
                    </div>
                    <div className='card-img'>
                      <img src={carro.img} alt={carro.nome} />
                    </div>
                    <div className='card-conteudo'>
                      <p>{carro.descricao}</p>
                      <h4>Valor da diária:</h4>
                      <h5>{carro.valor.toFixed(2)},00</h5>
                      <button className='botao' onClick={() => handleCarroSelect(carro)}>RESERVE AGORA</button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div ref={aluguelRef} className='aluguel-veiculo'></div>
            {carroSelecionado && <AluguelVeiculo carro={carroSelecionado} />}
          </div>
        </div>
      </main>
    </div>
  )
}
