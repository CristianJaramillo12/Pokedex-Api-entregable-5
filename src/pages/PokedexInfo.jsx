import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './../components/PokecardsInfo/pokeCardsInfo.css'
import './../../src/App.css'
import image from'./../../public/pokedex.png'


const PokedexInfo = () => {

    const { id } = useParams()

    const [poke, setPoke] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => {
                setPoke(res.data)
                setHasError(false)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    }, [id])

    console.log(poke)

    if (hasError) {
        return <h1>❌The pokemon with name, "{id}" not found❌</h1>
    } else {
        return (
            <div className='box_card'>
                <div className='box_header_pokedex'>
                    <div className='box_header_pokedex1'></div>
                    <div className='box_header_pokedex2'></div>
                    <div className='figure_pokedex1'>
                        <div className='figure_pokedex2'></div>
                    </div>
                    <img className='img_pokedex' src={image} alt="" />
                </div>
                <div className='box_container1'>
                    <div className='box_header'>
                        <div className='box_header_color'></div>
                        <img className='box_header_img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                    </div>
                    <div className='box_title'>
                        <h3 className='box_id'>#{poke?.id}</h3>
                        <h1 className='box_name'>{poke?.name}</h1>
                    </div>
                    <div className='box_character'>
                        <p className='box_height bx_character'>
                            <span className='box_character_letter'>height</span>
                            <span className='box_character_number'>{poke?.height}</span>
                        </p>
                        <p className='box_weight bx_character'>
                            <span className='box_character_letter'>weight</span>
                            <span className='box_character_number'>{poke?.weight}</span>
                        </p>
                    </div>
                    <div className='box_types'>
                        <div className='box_types_types'>
                            <h3 className='box_types_title'>Types</h3>
                            <div className={`box_typesSkills `}>
                                {
                                    poke?.types.map(types => (
                                        <p className={`box_types_1 border-${poke?.types[0].type.name}`} key={types.slot}>{types.type.name}</p>
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className='box_skills'>
                            <h3 className='box_types_title'>Skills</h3>
                            <div className='box_typesSkills'>
                                <p className='box_types_1'>{poke?.abilities[0].ability.name}</p>
                                <p className='box_types_1'>{poke?.abilities[1].ability.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='box_stats'>
                        <h3 className='box_stats_title'>States</h3>
                        <div className='box_stats_conteienr'>
                            <p className='box_stats_total'><span>{poke?.stats[0].stat.name}</span><span>{poke?.stats[0].base_stat}/150</span></p>
                            <p className='box_stats_total'><span>{poke?.stats[1].stat.name}</span><span>{poke?.stats[1].base_stat}/150</span></p>
                            <p className='box_stats_total'><span>{poke?.stats[2].stat.name}</span><span>{poke?.stats[2].base_stat}/150</span></p>
                            <p className='box_stats_total'><span>{poke?.stats[3].stat.name}</span><span>{poke?.stats[3].base_stat}/150</span></p>
                            <p className='box_stats_total'><span>{poke?.stats[4].stat.name}</span><span>{poke?.stats[4].base_stat}/150</span></p>
                            <p className='box_stats_total'><span>{poke?.stats[5].stat.name}</span><span>{poke?.stats[5].base_stat}/150</span></p>
                        </div>
                    </div>
                </div>

                <div className='box_container2'>
                    <h3 className='box_movements_title'>Movements</h3>
                    <div className='box_movements'>
                        {
                            poke?.moves.map(moves => (
                                <ul className='box_movements_ul'>
                                    <li className='box_unit_movements' key={moves.move.url}>{moves.move.name}</li>
                                </ul>
                            ))
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default PokedexInfo