import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './../PokedexCss/Pokedex.css'

const SelectTypes = ({ setSelectValue }) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type`
        axios.get(url)
            .then(res => setTypes(res.data))
            .catch(err => console.log(err))
    },[])

    const handleChange = e => {
        setSelectValue(e.target.value)
    }

    return (
        <select className='box_select_pokemon' onChange={handleChange}>
            <option value="allpokemons">All pokemons</option>
            {
                types?.results.map(type => (
                    <option className='bx_option_pokemon' key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectTypes