import './Form.css'
import React, { useState } from 'react'
import { Input } from './Input'
import { Select } from './Select';
import { RoundedImage } from '../layout/RoundedImage';


export const PetForm = ({ handleSubmit, petData, btnText }) => {
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado'];

    const onFileChange = (e) => {
        setPreview(Array.from(e.target.files));
        setPet({ ...pet, images: [...e.target.files] })
    }

    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value })
    }

    const handleColor = (e) => {
        setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text })
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(pet);
    }

    return (
        <form className='form-container' onSubmit={submit}>
            <div className='preview-pet-images'>
                {
                    preview.length > 0 ? preview.map((image, index) => (
                        <img
                            src={URL.createObjectURL(image)}
                            alt={pet.name}
                            key={`${pet.name} + ${index}`}
                        />
                    )) :
                        pet.images && pet.images.map((image, index) => (
                            <img
                                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                                alt={pet.name}
                                key={`${pet.name}+${index}`}
                            />
                        ))
                }
            </div>
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
