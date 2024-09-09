import '../../form/Form.css'
import { Input } from '../../form/Input'
import './Profile.css'
import React, { useEffect, useState } from 'react'

export const Profile = () => {
    const [user, setUser] = useState({});

    const onFileChange = (e) => {

    }

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <section>
            <div className="profile-header">
                <h1>Profile</h1>
                <p>Preview Imagem</p>
            </div>
            <form onSubmit={handleSubmit} className='form-container'>
                <Input
                    text={'Imagem'}
                    type={'file'}
                    name={'image'}
                    handleOnChange={onFileChange}
                />
                <Input
                    text={'E-mail'}
                    type={'email'}
                    name={'email'}
                    handleOnChange={handleChange}
                    placeholder={'Digite o seu E-mail'}
                    value={user.email || ''}
                />
                <Input
                    text={'Nome'}
                    type={'text'}
                    name={'name'}
                    handleOnChange={handleChange}
                    placeholder={'Digite o seu nome'}
                    value={user.name || ''}
                />
                <Input
                    text={'Telefone'}
                    type={'text'}
                    name={'phone'}
                    handleOnChange={handleChange}
                    placeholder={'Digite o seu telefone'}
                    value={user.phone || ''}
                />
                <Input
                    text={'Senha'}
                    type={'password'}
                    name={'password'}
                    handleOnChange={handleChange}
                    placeholder={'Digite a sua senha'}
                />
                <Input
                    text={'Confirmação de senha'}
                    type={'password'}
                    name={'confirmpassword'}
                    handleOnChange={handleChange}
                    placeholder={'Confirme a sua senha'}
                />
                <input type="submit" value="Editar" />
            </form>


        </section>
    )
}
