import React, { useState } from 'react'
import './AddPet.css'
import api from '../../../utils/api'
import { Await, useNavigate } from 'react-router-dom'


/* Hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'
import { PetForm } from '../../form/PetForm'



export const AddPet = () => {
    const [token] = useState(localStorage.getItem('token' || ''));
    const navigate = useNavigate();
    const { setFlashMessage } = useFlashMessage();


    async function registerPet(pet) {
        let msgType = 'success';

        const formData = new FormData();

        Object.keys(pet).forEach((key) => {
            if (key === 'images') {
                for (let i = 0; i < pet[key].length; i++) {
                    formData.append('images', pet[key][i]);
                }
            } else {
                formData.append(key, pet[key]);
            }
        })
        const data = await api.post('/pets/create', formData, {
            Authorization: `Bearer ${JSON.parse(token)}`,
            'Content-type': 'multipart/form-data'
        }).then((response) => {
            return response.data;
        }).catch((err) => {
            msgType = 'error';
            return err.response.data;
        })

        setFlashMessage(data.message, msgType);

        if (msgType !== 'error') {
            navigate('/pets/mypets');
        }
    }




    return (
        <section className='addPet-header'>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponível para adoção.</p>
            </div>
            <PetForm handleSubmit={registerPet} btnText={'Cadastrar'} />
        </section>
    )
}
