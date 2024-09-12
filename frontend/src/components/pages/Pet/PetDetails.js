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


    async function getAPet(id) {
        
    }
    
    return (
        <div><h1>Pet Details</h1></div>
    )
}
