import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoundedImage } from '../../layout/RoundedImage'
import useFlashMessage, { setFlashMessage } from '../../../hooks/useFlashMessage'
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
    }, [])
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
                                    {pet.adopter && <button className='conclude-btn'>Concluir Adoção</button>}
                                    <Link to={`/pets/edit/${pet._id}`}>Editar</Link>
                                    <button>Excluir</button>
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
