import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../assets/store/slices/trainerName.slice'
import './../components/Home/home.css'
import imagepxd from'./../../public/pokedex.png'


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hanldeSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='box'>
            <div className='box_info'>
                <img className='box_img' src={imagepxd} alt="pokedex" />
                <div    className='box_letters'>
                    <h2 className='box_trainer'>¡ Hi Trainer !</h2>
                    <p className='box_subtitule'>To start this pokedex, you give me your name</p>
                </div>
                <form onSubmit={hanldeSubmit} className='box_form'>
                    <input className='box_input' id='name' placeholder='your name' type="text" />
                    <button className='box_button'>start</button>
                </form>
            </div>
            <div className='box_line'>
                <div className='box_line1'></div>
                <div className='box_line2'></div>
                <div className='box_line3'>
                    <div className='box_line3_1'></div>
                </div>
            </div>
        </div>
    )
}

export default Home