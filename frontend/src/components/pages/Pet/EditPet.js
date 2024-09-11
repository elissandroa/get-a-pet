import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../utils/api'
import './AddPet.css'
import { PetForm } from '../../form/PetForm'

import fleshMessage from '../../../hooks/useFlashMessage'
import useFlashMessage from '../../../hooks/useFlashMessage'


export const EditPet = () => {
    const [pet, setPet] = useState({})
    const [token] = useState(localStorage.getItem('token' || ''));
    const { setFlashMessage } = useFlashMessage();
    const { id } = useParams();

    useEffect(() => {
        api.get(`/pets/${id}`, {
            Authorization: `Bearer ${JSON.parse(token)}`,
        }).then((response) => {
            setPet(response.data.pet);
        }).catch((err) => {
            console.log(err);
        });
    }, [token, id]);

    const updatePet = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="addpet-header">
                <h1>Editando o Pet: {pet.name}</h1>
                <p>Depois da edição os dados serão atualizados no sistema</p>
            </div>
            {pet.name && (
                <PetForm handleSubmit={updatePet} petData={pet} btnText={'Atualizar'} />
            )}
        </div>
    )
}
