import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../form/Input'
import '../../../components/form/Form.css'
const handleOnChange = () => {

}

export const Register = () => {
  return (
    <section>
      <h1>Registrar</h1>
      <form className='form-container'>
        <Input
          text={"Nome"}
          type={"text"}
          name={"name"}
          placeholder={"Digite o seu nome"}
          handleOnChange={handleOnChange}
        />
        <Input
          text={"Telefone"}
          type={"text"}
          name={"phone"}
          placeholder={"Digite o seu telefone"}
          handleOnChange={handleOnChange}
        />
        <Input
          text={"E-mail"}
          type={"email"}
          name={"email"}
          placeholder={"Digite o seu E-mail"}
          handleOnChange={handleOnChange}
        />
        <Input
          text={"Senha"}
          type={"password"}
          name={"password"}
          placeholder={"Digite a sua senha"}
          handleOnChange={handleOnChange}
        />
        <Input
          text={"Confirmação de senha"}
          type={"password"}
          name={"confirmpassword"}
          placeholder={"Confirme a sua senha"}
          handleOnChange={handleOnChange}
        />
        <input type="submit" value="Cadastrar" />
        <p>
          Já tem conta? <Link to={'/login'}>Clique aqui.</Link>
        </p>
      </form>
    </section>
  )
}
