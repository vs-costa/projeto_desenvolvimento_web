import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function AluguelVeiculo({ carro }) {

  const [diasAluguel, setDiasAluguel] = useState(1);

  const navigate = useNavigate();

  const handleDiasChange = (event) => {
    const dias = event.target.value;
    setDiasAluguel(dias);
  };

  const calcularTotalAluguel = () => {
    const valorTotal = carro.valor * diasAluguel;
    return valorTotal.toFixed(2);
  };

  const reservarAgora = () => {
    navigate('/login')
  };

  return (
    <div className='aluguel-veiculos'>
      <h2>Aluguel de {carro.nome}</h2>
      <img src={carro.img} alt={carro.nome} />
      <p>{carro.descricao}</p>
      <h3>Valor da diária: R$ {carro.valor.toFixed(2)}</h3>
      <label>Quantidade de dias:
        <input type="number" value={diasAluguel} onChange={handleDiasChange} min="1" />
      </label>
      <p>Total do aluguel: R$ {calcularTotalAluguel()}</p>
      <button className='botao' onClick={reservarAgora}>RESERVE AGORA</button>
    </div>
  );
}