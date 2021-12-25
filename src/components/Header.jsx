import { useState } from 'react'
import mode from '../image/darkMode.png'
import '../style/global.css'

export default function Header() {

    // true = mode day
    //  false = mode dark

    const [state, setstate] = useState(false)

    const darkMode = () => {
        setstate(!state)
        console.log(state)
    }

    return (
        <div className='header'>
            <header className="d-flex justify-content-around">
            <h1 className='fw-bold'> Rick And Morty</h1>
            <button type='button' className='btn'
            onClick={darkMode}>
                Dark Mode
                <img src={mode} alt='imagen del boton mode' className='img'/>
            </button>
        </header>
        <hr/>
        </div>
    )
}
