import React from 'react'
import RegisterPage from './components/auth/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import HomePage from './components/pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App