import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css';

export default function Erro() {
  return (
    <div className='erro-tamanho'>
      <Header />
      <div className='erro'>
        <h1>404 - Página não encontrada</h1>
        <p>A página que você está procurando não foi encontrada. Talvez você queira:</p>
        <ul>
          <li><a href="/">Voltar para a página inicial</a></li>
          <li><a href="/veiculos">Ver nossa seleção de veículos</a></li>
          <li><a href="/contato">Entrar em contato conosco</a></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
