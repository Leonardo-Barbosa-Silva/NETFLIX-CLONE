import React from 'react'

import './MovieStar.css'



export default ({ item }) => {

    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className='star' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='star-vertical'>
                <div className='star-horizontal'>
                    <div className='star-name'>{item.original_name}</div>
                    <div className='star-info'>
                        <div className='star-points'>{item.vote_average.toFixed(1)}</div>
                        <div className='star-year'>{item.first_air_date.split('-')[0]}</div>
                        <div className='star-seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='star-description'>{item.overview}</div>
                    <div className='star-buttons'>
                        <a href={`/watch/${item.id}`} className='star-watch-button'>► Assistir</a>
                        <a href={`/list/add/${item.id}`} className='star-mylist-button'>+ Minha Lista</a>
                    </div>
                    <div className='star-genres'><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}