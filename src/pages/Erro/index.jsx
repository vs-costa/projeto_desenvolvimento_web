import React from 'react'
import Header from '../../components/Header'
import './style.css'

export default function Erro() {
    return (
        <div>
            <Header />
            <div className='erro'>
                <h1>404 - Página não encontrada</h1>
            </div>
        </div>
    )
}
