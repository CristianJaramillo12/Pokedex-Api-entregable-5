import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'
import './../components/PokedexCss/Pokedex.css'
import image1 from './../../public/pokedex.png'

const Pokedex = () => {

  const { nameTrainer } = useSelector(state => state)

  const [pokemon, setPokemon] = useState()
  const [selectValue, setSelectValue] = useState('allpokemons')

  const navigate = useNavigate()

  useEffect(() => {
    if (selectValue === 'allpokemons') {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
      axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    } else {
      axios.get(selectValue)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemon({ results })
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.pokemon.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
    e.target.pokemon.value = ''
  }
  return (
    <div className='box_conteiner_pokedex'>
      <div className='box_header_pokedex'>
        <div className='box_header_pokedex1'></div>
        <div className='box_header_pokedex2'></div>
        <div className='figure_pokedex1'>
          <div className='figure_pokedex2'></div>
        </div>
        <img className='img_pokedex' src={image1} alt="" />
      </div>
      <div className='box_container_2'>
        <h1 className='box_tittle_subtittle'><span className='box_tittle_subtittle_trainer'>¡Hi {nameTrainer} welcome!</span> Here find your favorite pokemon.</h1>
      </div>
      <div className='box_container_3'>
        <form className='box_form_searchPoke' onSubmit={handleSubmit}>
          <input className='box_input_searchPoke' id='pokemon' type="text" placeholder='search a pokemon' />
          <button className='box_button_searchPoke'>Search</button>
        </form>
        <SelectTypes setSelectValue={setSelectValue} />
      </div>
      <div className='box_container_4'>
        <div className='box_unit_pokeCard'>
          {
            pokemon?.results.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                pokemon={pokemon}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pokedex