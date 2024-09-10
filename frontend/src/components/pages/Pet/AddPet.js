import React, { useState } from 'react'
import './AddPet.css'
import api from '../../../utils/api'
import { useNavigate } from 'react-router-dom'


/* Hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'
import { PetForm } from '../../form/PetForm'



export const AddPet = () => {
    const navigate = useNavigate();
    const { setFlashMessage } = useFlashMessage();

    return (
        <section className='addPet-header'>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponível para adoção.</p>
            </div>
            <PetForm btnText={'Cadastrar'} />
        </section>
    )
}
