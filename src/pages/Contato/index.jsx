import React, { useState } from 'react';
import Header from "../../components/Header"
import "./style.css"
import Header from '../../components/Header'

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
    <div className = "centro">
        <h1>Entre em Contato</h1>
        <p><strong>E-mail:</strong></p>
        <input></input>
        <p><strong>Assunto:</strong></p>
        <input></input>
        <textarea>Digite aqui</textarea>
        <button>enviar</button>
        
    </div>
      </main>
      </div>
  );
}
