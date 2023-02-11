import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import banner from '../Images/banner.jpeg'
import './HomeStyles.css'
const Home = () => {
  return (
    <>
    <Layout>
     
        <div className='home' style={{backgroundImage:`url(${banner})`}}>
        <div className="headerContainer">
          <h1>Mirapakai</h1>
          <p>Authentic Indian Restaurant</p>
          <Link to="/menu">
            <button className='button'>ORDER NOW</button>
          </Link>
       </div>
      </div>
    </Layout>
    </>
  )
}

export default Home