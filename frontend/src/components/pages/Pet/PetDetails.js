import React, { useEffect, useState } from 'react'
import './PetDetails.css'
import api from '../../../utils/api'
import { useParams, Link } from 'react-router-dom'


/* Hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

export const PetDetails = () => {
    const [pet, setPet] = useState({});
    const { setFlashMessage } = useFlashMessage();
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

    async function schedule() {
        let msgType = 'success';

        const data = await api.patch(`pets/schedule/${pet._id}`, {
            Authorization: `Bearer ${JSON.parse(token)}`,

        }).then((response) => {
            return response.data;
        }).catch((err) => {
            msgType = 'error';
            return err.response.data;
        });
        setFlashMessage(data.message, msgType)
    }


    return (
        <>
            {pet.name && (
                <section className='pet-details-container'>
                    <div className='pet-details-header'>
                        <h1>Conhecendo o Pet: {pet.name}</h1>
                        <p>Se tiver interesse, marque uma visita para conhecê-lo</p>
                    </div>
                    <div className='pet-details-images'>
                        {pet.images.map((image, index) => (
                            <img
                                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                                alt={pet.name}
                                key={index}
                            />
                        ))}
                    </div>
                    <p>
                        <span className="bold">Peso: {pet.wheight}Kg</span>
                        <p>
                            <span className="bold">Idade: {pet.age} anos</span>
                        </p>
                    </p>
                    {token ? <button onClick={schedule}>Solicitar uma visita</button> : <p>Você precisa <Link to={'/register'}>criar uma conta</Link> para solicitar a visita!</p>}
                </section>
            )}
        </>
    )
}
