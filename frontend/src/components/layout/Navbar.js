import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Navbar.css'
import { Context } from '../../context/UserContext'



export const Navbar = () => {
    const { authenticated } = useContext(Context)
    return (
        <nav className="navbar">
            <div className='navbar_logo'>
                <img src={logo} alt="Get A Pet" />
                <h2>Get A Pet</h2>
            </div>
            <ul>
                {authenticated && <>
                    <li><Link to={'/'}>Adotar</Link></li>
                    <li><Link to={'/'}>Logout</Link></li>
                </>}

                {!authenticated && <>
                    <li><Link to={'/login'}>Entrar</Link></li>
                    <li><Link to={'/register'}>Cadastrar</Link></li>
                </>}
            </ul>
        </nav>
    )
}
