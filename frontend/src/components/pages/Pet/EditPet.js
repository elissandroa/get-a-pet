import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../utils/api'
import './AddPet.css'
import PetForm from '../../form/PetForm'

import fleshMessage from '../../../hooks/useFlashMessage'
import useFlashMessage from '../../../hooks/useFlashMessage'


export const EditPet = () => {
    const { setFlashMessage } = useFlashMessage();
    const { id } = useParams();
    return (
        <div>
            <div className="addpet-header">
                <h1>Editando o Pet: 'pet.name'</h1>
                <p>Depois da edição os dados serão atualizados no sistema</p>
            </div>
        </div>
    )
}
