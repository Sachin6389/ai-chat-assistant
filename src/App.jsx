import { useState } from 'react'
import Header from "./Pages/Header.jsx"
import Footer from './Pages/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
