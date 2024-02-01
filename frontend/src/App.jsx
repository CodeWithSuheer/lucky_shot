import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './admin/AdminPanel';
import Users from './admin/Users';
import Home from './components/Home/Home';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<AdminPanel />}>
            <Route index element={<Users />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
