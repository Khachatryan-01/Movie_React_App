import React from 'react'
import RegisterPage from './components/auth/RegisterPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default App