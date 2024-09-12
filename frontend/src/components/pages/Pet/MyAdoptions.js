import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { RoundedImage } from '../../layout/RoundedImage'
import { Link } from 'react-router-dom'



export const MyAdoptions = () => {
    const [token] = useState(localStorage.getItem('token') || '');
    const [pets, setPets] = useState([]);
    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {
        api.get('/pets/myadoptions', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            }
        }).then((response) => {
            setPets(response.data.pets);
        }).catch((err) => {
            return err.response.data;
        })
    }, [token])
    return (


        <section>
            <div className="petlist-header">
                <h1>Minhas Adoções</h1>
            </div>
            <div className="petlist-container">
                {pets.length > 0 && (
                    pets.map((pet, index) => (
                        <div className=' petlist-row' key={pet._id}>
                            <RoundedImage
                                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                                alt={pet.name}
                                width={'px75'}
                            />
                            <span className="bold">{pet.name}</span>
                            <div className='contacts'>
                                <p>
                                    <span className="bold">Ligue para:</span>{pet.User.phone}
                                </p>
                                <p>
                                    <span className="bold">Fale com:</span>{pet.User.name}
                                </p>
                            </div>
                            <div className="actions">
                                {pet.available ? (<p>Adoção em processo</p>) : ('Parabéns por concluir a adoção.')}
                            </div>
                        </div>
                    ))
                )}{pets.length === 0 && <p>Ainda não há adoções de pets.</p>}
            </div>
        </section>
    )
}
