

import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ErrorPage = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <Link to='/'>
           Voltar para home
        </Link>
    </div>
  )
}

export default ErrorPage