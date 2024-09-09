import api from '../../../utils/api'
import '../../form/Form.css'
import { Input } from '../../form/Input'
import './Profile.css'
import React, { useEffect, useState } from 'react'
import useFlashMessage from '../../../hooks/useFlashMessage'


export const Profile = () => {
    const [user, setUser] = useState({});
    const [token] = useState(localStorage.getItem('token' || ""))
    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {
        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setUser(response.data)
        })
    }, [token])

    const onFileChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.files[0] })
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let msgType = 'success';

        const formData = new FormData();

        await Object.keys(user).forEach((key) => {
            formData.append(key, user[key])
        })

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                "Content-Type": 'multipart/form-data'
            }
        }).then((response) => {
            return response.data;
        }).catch((err => {
            msgType = 'error';
            return err.response.data;
        }))
        setFlashMessage(data.message, msgType);
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
