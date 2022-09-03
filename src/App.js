import React, { useEffect, useState } from 'react'

import './App.css'

import data_tmdb from './data_tmdb.js'

import Header from './Components/Header/Header.js'

import MovieStar from './Components/Star/MovieStar.js'

import MoviesRow from './Components/Lists/MovieRow.js'


export default () => {

    const [ moviesList, setMoviesList ] = useState([])

    const [ movieStarData, setMovieStarData ] = useState(null)

    const [ blackHeader, setBlackHeader ] = useState(false)

    // Acionará sempre que a página carregar
    useEffect( () => {
        const loadAll = async () => {

            // Pega o array de objetos retornado pelo "getHomeList" (lista de temas contendo a lista de filmes).
            let listMovies = await data_tmdb.getHomeList()
            // Usa o state component do react para atribuir á "moviesList" o "listMovies" quando obtido.
            setMoviesList(listMovies)

            // Filta pelo objeto de "slug" igual á "originals" no array de objetos do "listMovies" (pega a lista de filmes Netflix)
            let originals = listMovies.filter( item => item.slug === 'originals' )

            // Escolhe um objeto no array de objetos em "results" do objeto de "originals" (escolhe um filme na lista da Netflix)
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosedMovieStar = originals[0].items.results[randomChosen]
            
            // Pega o objeto retornado pelo "getMovieInfo" (objeto contendo mais informações sobre o Movie Star)
            let info = await data_tmdb.getMovieInfo(chosedMovieStar.id, 'tv')
            setMovieStarData(info)
// Primeiro pegamos a lista, depois escolhemos o MovieStar e só depois pegamos mais infos (temos que esperar essa requisição)

        }

        loadAll()
    }, [])

// Acionará ao carregar a página e removerá o evento de "scrollListener" ao sair
    useEffect( () => {
        const scrollListener = () => {
            if (window.scrollY > 15) {
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, [])


    return (
        <div className='page'>

            <Header black={blackHeader}/>

            {movieStarData &&
                <MovieStar item={movieStarData} />
            }
    
            <section className='lists'>
                {moviesList.map( (item, key) => (
                    <MoviesRow title={item.title} items={item.items} key={key}/>
                ))}
            </section>

        </div>
    )

}