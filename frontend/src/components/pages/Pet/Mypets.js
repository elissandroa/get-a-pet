import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export const Mypets = () => {
    const [pets, setPets] = useState([]);
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
