import React from 'react'
import Header from '../../pages/Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div>{ children }</div>
    <Footer/>
    </>
  )
}

export default Layout