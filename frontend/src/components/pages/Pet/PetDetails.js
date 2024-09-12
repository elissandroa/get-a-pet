import React, { useEffect, useState } from 'react'
import './PetDetails.css'
import api from '../../../utils/api'
import { useParams, Link } from 'react-router-dom'


/* Hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

export const PetDetails = () => {
    const [pet, setPet] = useState({});
    const { setFlasMessage } = useFlashMessage();
    const { id } = useParams()
    const [token] = useState(localStorage.getItem('token' || ''));

    useEffect(() => {
        getAPet(id);
    }, [])


    async function getAPet(id) {
        let msgType = 'success';
       await api.get(`/pets/${id}`)
            .then((response) => {
                setPet(response.data.pet);

            }).catch((err) => {
                msgType = 'error';
                return err.response.data;
            })
    }

    return (
        <div>
            <h1>Pet Details</h1>
            {pet.name}
        </div>
    )
}
