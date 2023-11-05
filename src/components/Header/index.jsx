import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import logo from '../../assets/auto_voyage_logo_branco_horizontal.png'


export default function Header() {
    return (
        <header className='header-content'>
            <div className='container-header'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo auto voyage" />
                    </Link>
                </div>
                <div className='menu'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/veiculos"}>Veiculos</Link>
                    <Link to={"/nossoServico"}>NossoServico</Link>
                    <Link to={"/sobre"}>Sobre</Link>
                    <Link to={"/contato"}>Contato</Link>
                    <Link to={"/registro"}>Cadastro</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </header>
    )
}