import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import Sobre from '../pages/Sobre'
import Veiculos from '../pages/Veiculos'
import Contato from '../pages/Contato'
import Login from '../pages/Login'
import NossoServico from '../pages/NossoServico';

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/veiculos' element={<Veiculos />}> </Route>
        <Route path='/registro' element={<Registro />}> </Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/nossoServico' element={<NossoServico />}></Route>
      </Routes>
    </div>
  )
}
export default AppRouter
 