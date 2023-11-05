import React, { useState } from 'react';
import Header from "../../components/Header"
import "./style.css"
import Footer from '../../components/Footer';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setmensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);


  };
  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h2>Formulário</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className='fields'>

              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

            </div>

            <div className='fields'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='fields'>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                cols="30"
                rows="10"
                type="text"
                id="mensagem"
                value={mensagem}
                onChange={(e) => setmensagem(e.target.value)} ></textarea>
            </div>

            <div class="btn-post">
              <button type="submit" onCl>Enviar</button>
            </div>

          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
