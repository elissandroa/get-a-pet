import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoundedImage } from '../../layout/RoundedImage'
import useFlashMessage from '../../../hooks/useFlashMessage'
import api from '../../../utils/api'
import './Dashboard.css'

export const Mypets = () => {
    const [pets, setPets] = useState([]);
    const [token] = useState(localStorage.getItem('token' || ''));
    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {
        api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => setPets(response.data.pets))
            .catch((err) => console.log(err))
    }, [token])

    async function removePet(id) {
        let msgType = 'success';

        const data = await api.delete(`/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            }
        }).then((response) => {
            const updatedPets = pets.filter((pet) => pet._id !== id);
            setPets(updatedPets);
            return response.data;
        }).catch((err) => {
            msgType = 'error';
            return err.response.data;
        })

        setFlashMessage(data.message, msgType);
    }

    async function concludeAdoption(id) {
        let msgType = 'success';

        const data = await api.patch(`/pets/conclude/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }
        ).then((response) => {
            return response.data;
        }).catch((err) => {
            msgType = 'error';
            return err.response.data;
        });
        setFlashMessage(data.message, msgType);
    }

    return (
        <section>
            <div className='petlist-header'>
                <h1>Meus Pets</h1>
                <Link to={'/pets/add'}>Cadastrar Pet</Link>
            </div>
            <div className='petlist-container'>
                {pets.length > 0 &&
                    pets.map((pet) => (
                        <div className=' petlist-row' key={pet._id}>
                            <RoundedImage
                                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                                alt={pet.name}
                                width={'px75'}
                            />
                            <span className="bold">{pet.name}</span>
                            <div className="actions">
                                {pet.available ? (<>
                                    {pet.adopter && <button className='conclude-btn' onClick={() => concludeAdoption(pet._id)}>Concluir Adoção</button>}
                                    <Link to={`/pets/edit/${pet._id}`}>Editar</Link>
                                    <button onClick={() => removePet(pet._id)}>Excluir</button>
                                </>) : ('Pet já adotado')}
                            </div>
                        </div>
                    ))
                }
                {pets.length === 0 && <p>Não há Pets cadastrados!</p>}
            </div>
        </section>
    )
}
