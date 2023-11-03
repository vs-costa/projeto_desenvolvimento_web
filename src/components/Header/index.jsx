import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"


export default function Header() {
    return (
        <header>
            <div>
                <h2>Auto Voyage</h2>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/veiculos"}>Veículos</Link>
                    <Link to={"/nossoServico"}>Nosso Serviço</Link>
                    <Link to={"/sobre"}>Sobre</Link>
                    <Link to={"/contato"}>Contato</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </header>
    )
}