import React from 'react'
import { Link } from 'react-router-dom'

import './index.css';


const Header = () => {
  return (
    <header>
        <Link className='logo' to="/">Holder flix</Link>
        <Link className='favoritos' to="/favoritos"> Meus filmes </Link>

    </header>
  )
}

export default Header