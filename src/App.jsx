import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'
import Header from './components/Header'



const App = () => {
  return (
    <div >
        {/* Importing the header here */}
        <Header />


      {/* YAHA PAR HUM BNA RHE HAI ROUTES AND IN ROUTES KE ANDAR BOHAT SARE ROUTES RAHENE WAALE HAI  */}
      <Routes>
        {/* Route routes ka cointainer hai */}
        {/* path hai about and element hai About */}
        <Route path='/' element={< Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
