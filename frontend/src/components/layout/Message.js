import React, { useState } from 'react'
import './Message.css'

export const Message = () => {
    const [type, setType] = useState('')

    return (
        <div className={`message ${type}`}>
            <h1>Minha mensagem</h1>
        </div>
    )
}
