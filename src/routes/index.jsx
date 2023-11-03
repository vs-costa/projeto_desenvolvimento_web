import React from 'react'
import { Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/veiculos' element={<Veículos/>}> </Route>
    </Routes>
  )
}
export default AppRouter
