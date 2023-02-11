import React from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Header from './pages/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import CartDetails from './pages/CartDetails'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/cart/:id' element={<CartDetails />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App