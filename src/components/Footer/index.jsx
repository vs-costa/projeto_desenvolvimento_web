import React from 'react'
import './style.css'
import logo from '../../assets/auto_voyage_logo_branco_vertical.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-block">
                    <img src={logo} alt="logo_voyage_vertical" />
                </div>
                <div className="footer-block">
                    <h3>Nossa Localização</h3>
                    <p>R. Afrânio Melo Franco, 333
                        <br />Quitandinha, Petrópolis - RJ
                        <br /> 25651-000</p>
                </div>
                <div className="footer-block">
                    <h3>Informações</h3>
                    <ul>
                        <li><Link to="/contato">Envie sua mensagem</Link></li>
                        <li><Link to="/nossoServico">Perguntas frequentes</Link></li>
                        <li><Link to="/veiculos">Central de reservas</Link></li>
                        <li>Assistência a clientes 24h - 0800 800 0800</li>
                    </ul>
                </div>
            </footer>
            <div className="copyright">
                <p>&copy; 2023 Resiência Serratec - Desenvolvimento Web - Grupo 6. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

