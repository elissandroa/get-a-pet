import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../utils/api';
import './Home.css'

export const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets();
  }, [])

  async function getPets() {
    await api.get('/pets')
      .then((response) => {
        setPets(response.data.pets);
      }).catch((err) => console.log(err));
  }

  return (
    <section>
      <div className='pet-home-header'>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça os Tutores</p>
      </div>
      <div className='pet-container'>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className='pet-card'>
              <div style={{backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`}} className="pet-card-image"></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">
                  Peso: {pet.wheight}Kg
                </span>
              </p>
              {pet.available ? <Link to={`pets/${pet._id}`}>Mais Detalhes</Link> : <p className='adopted-text'>Adotado</p>}
            </div>
          ))}
        {pets.length === 0 && <p>Não há pets cadastrados ou disponíveis para doação no momento!</p>}
      </div>
    </section>
  )
}
