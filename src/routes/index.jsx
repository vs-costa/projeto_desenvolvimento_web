import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Conta from '../pages/Conta'
import Veiculos from '../pages/Veiculos'

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/veiculos' element={<Veiculos />}> </Route>
        <Route path='/conta' element={<Conta />}> </Route>
      </Routes>
    </div>
  )
}
export default AppRouter
