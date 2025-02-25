import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Components/reuse/auth/login'
import Register from './Components/reuse/auth/register'
import Dashboard from './Components/main/dashboard'
import AuthLayout from './Components/reuse/auth/authContainer'
import CoursueDashboard from './Components/main/courceDasboard'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<CoursueDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

