import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Navbar.css'
import { Context } from '../../context/UserContext'



export const Navbar = () => {
    const { authenticated, logout } = useContext(Context)
    return (
        <nav className="navbar">
            <div className='navbar_logo'>
                <Link to={'/'}><img src={logo} alt="Get A Pet" /></Link>
                <Link to={'/'}><h2>Get A Pet</h2></Link>
            </div>
            <ul>
                {authenticated && <>
                    <li><Link to={'/'}>Adotar</Link></li>
                    <li><Link to={'/pets/mypets'}>Meus Pets</Link></li>
                    <li><Link to={'/user/profile'}>Perfil</Link></li>
                    <li onClick={logout}><Link to={'/'}>Sair</Link></li>
                </>}

                {!authenticated && <>
                    <li><Link to={'/login'}>Entrar</Link></li>
                    <li><Link to={'/register'}>Cadastrar</Link></li>
                </>}
            </ul>
        </nav>
    )
}
