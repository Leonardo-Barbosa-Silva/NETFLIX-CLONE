import React, { useEffect, useState } from 'react'

import data_tmdb from './data_tmdb.js'


export default () => {

    const [ moviesList, setMoviesList ] = useState([])

    useEffect( () => {
        const loadAll = async () => {
            // Pega o array de objetos retornado pelo "getHomeList" (lista de temas contendo a lista de filmes).
            let listMovies = await data_tmdb.getHomeList()
            // Usa o state component do react para atribuir á "moviesList" o "listMovies" quando obtido.
            setMoviesList(listMovies)
        }

        loadAll()
    }, [])


    return (
        <div className='page'>
            <section className='lists'>
                {moviesList.map( (item, key) => (
                    <div key={key}>
                        {item.title}
                    </div>
                ))}
            </section>
        </div>
    )

}