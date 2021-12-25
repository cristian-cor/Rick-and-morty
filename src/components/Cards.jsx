import { useState } from 'react'
import { useEffect } from 'react'
import bubble from '../image/icons8-bubble-24.png'
import '../style/global.css'


export default function Cards() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setState(data.results))
    }, [])
    return (
        <div className='main'>
            <section className='row d-flex justify-content-center'>
                {
                    state.map(({ id, name, status, species, gender, image,location }) => (
                        <div className='card col-md-3  m-3' key={id}>
                            <img src={image} alt='imagen del personaje' className='p-2' />
                            <div className='card-body'>
                                <h2 className='title'>{name}</h2>
                                <span> <img src={bubble} alt='bubble' /> {status} -{species}</span>
                                <p className='text'>{gender}</p>
                                <p className='text'>{location.name}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}