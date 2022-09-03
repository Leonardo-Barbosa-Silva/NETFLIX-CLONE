import React from 'react'

import './MovieRow.css'




export default ({ title, items }) => {

    return (
        <div className='moviesRow'>
            <h2>{title}</h2>
            <div className='moviesRow-list-area'>
                <div className='moviesRow-list'>
                    {items.results.length > 0 && items.results.map( (item, key) => (
                        <div className='moviesRow-list-item' key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`poster ${item.original_title}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}