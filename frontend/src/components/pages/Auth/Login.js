import React, { useContext, useState } from 'react'
import { Input } from '../../form/Input'
import '../../form/Form.css'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../../context/UserContext'
export const Login = () => {
  const navigate = useNavigate();

  const handleOnChange = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <section className='form-container'>
      <h1>Login</h1>
      <form>
        <Input
          name={'email'}
          text={'E-mail'}
          type={'email'}
          placeholder={'Digite seu email'}
          handleOnChange={handleOnChange} />
          <Input
          name={'password'}
          text={'Senha'}
          type={'password'}
          placeholder={'Digite sua senha'}
          handleOnChange={handleOnChange} />
          <input type="submit" value="Login" />
          <p>
            Não tem conta? <Link to={'/register'}>Clique aqui.</Link>
          </p>
      </form>
    </section>
  )
}
