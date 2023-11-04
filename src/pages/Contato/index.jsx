import React from 'react'
import "./style.css"
import Header from '../../components/Header'

export default function Contato() {
  return (
    <div className = "centro">
      <Header />
        <h1>Entre em Contato</h1>
        <p><strong>E-mail:</strong></p>
        <input></input>
        <p><strong>Assunto:</strong></p>
        <input></input>
        <textarea>Digite aqui</textarea>
        <button>enviar</button>
        
    </div>
  )
}
