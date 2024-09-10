import './Form.css'
import React, { useState } from 'react'
import { Input } from './Input'
import { Select } from './Select';


export const PetForm = ({ handleSubmit, petData, btnText }) => {
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado'];

    const onFileChange = (e) => {
        setPreview(e.target.files[0]);
        setPet({ ...pet, [e.target.name]: e.target.files })
    }

    const handleChange = (e) => {

    }

    const handleColor = (e) => {

    }


    return (
        <form className='form-container'>
            <Input
                type={'file'}
                text={'Imagens do Pet'}
                name={'images'}
                handleOnChange={onFileChange}
                multiple={true}
            />
            <Input
                type={'text'}
                text={'Nome do Pet'}
                name={'name'}
                placeholder={'Digite o nome'}
                handleOnChange={handleChange}
                value={pet.name || ''}
            />
            <Input
                type={'number'}
                text={'Idade do Pet'}
                name={'age'}
                placeholder={'Digite a idade do Pet'}
                handleOnChange={handleChange}
                value={pet.age || ''}
            />
<Input
                type={'number'}
                text={'Peso do Pet'}
                name={'wheight'}
                placeholder={'Digite o peso do Pet'}
                handleOnChange={handleChange}
                value={pet.wheight || ''}
            />
            <Select 
            text={'Selecione uma cor'} 
            name={'color'} 
            options={colors} 
            handleOnchange={handleColor}
            value={pet.color || ''}
            />
        <input type="submit" value={btnText} />
        </form>
    )
}
