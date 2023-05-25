import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import heroImg from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${heroImg})`}}>
     <div className='headerContainer' >
        <h1>Pizza Pop</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
       
     </div>
    </div>
  )
}

export default Home