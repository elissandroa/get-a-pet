import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar_logo'>
                <img src={logo} alt="Get A Pet" />
                <h2>Get A Pet</h2>
            </div>
            <ul>
                <li><Link to={'/'}>Adotar</Link></li>
                <li><Link to={'/login'}>Entrar</Link></li>
                <li><Link to={'/register'}>Cadastrar</Link></li>
            </ul>
        </nav>
    )
}
