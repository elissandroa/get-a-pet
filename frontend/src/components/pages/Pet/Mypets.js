import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoundedImage } from '../../layout/RoundedImage'
import useFlashMessage, { setFlashMessage } from '../../../hooks/useFlashMessage'
import api from '../../../utils/api'

export const Mypets = () => {
    const [pets, setPets] = useState([]);
    const [token] = useState(localStorage.getItem('token' || ''));
    const { setFlashMessage } = useFlashMessage();

    useEffect(()=>{
        api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => setPets(response.data.pets))
        .catch((err) => console.log(err))
    },[])
    return (
        <section>
            <div>
                <h1>Meus Pets</h1>
                <Link to={'/pets/add'}>Cadastrar Pet</Link>
            </div>
            <div>
                {pets.length > 0 && <p>Meus Pets Cadastrados</p>}
                {pets.length === 0 && <p>Não há Pets cadastrados!</p>}
            </div>
        </section>
    )
}
