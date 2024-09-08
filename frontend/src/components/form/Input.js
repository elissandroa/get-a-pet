import React from 'react'
import './Input.css'

export const Input = ({ type, text, name, placeholder, handleOnChange, value, multiple }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                {...(multiple) ? { multiple } : ''} />
        </div>
    )
}
