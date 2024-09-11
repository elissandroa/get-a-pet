import React from 'react'
import { useParams } from 'react-router-dom'

export const EditPet = () => {
    const { id } = useParams();
    return (
        <div><h1>Editando o pet ID: {id}</h1></div>
    )
}
