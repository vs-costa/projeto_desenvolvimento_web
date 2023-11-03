import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Conta from '../pages/Conta'
import Sobre from '../pages/Sobre'
import Veiculos from '../pages/Veiculos'

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/veiculos' element={<Veiculos />}> </Route>
        <Route path='/conta' element={<Conta />}> </Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>
    </div>
  )
}
export default AppRouter
 