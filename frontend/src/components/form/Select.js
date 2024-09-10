import './Select.css'
import React from 'react'

export const Select = ({ text, name, options, handleOnchange, value }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnchange}
                value={value || ""}
            >
                <option>Selecione uma Opção</option>
                {
                    options.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}
