import React, { useState } from 'react'

import './MovieRow.css'




export default ({ title, items }) => {

    const [ scrollX, setScrollX ] = useState(-400)

    const handleArrowLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        
        if (x > 0) {
            x = 0
        }
        
        setScrollX(x)
    }

    const handleArrowRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)

        let listWidth = items.results.length * 150

        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60
        }

        setScrollX(x)
    }

    return (
        <div className='moviesRow'>
            <h2>{title}</h2>
            <div className='arrow-left' onClick={handleArrowLeft}>
                <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt=''/>
            </div>
            <div className='arrow-right' onClick={handleArrowRight}>
                <img src='https://cdn-icons-png.flaticon.com/512/271/271228.png' alt=''/>
            </div>
            <div className='moviesRow-list-area'>
                <div className='moviesRow-list' style={{
                    width: items.results.length * 150,
                    marginLeft: scrollX
                }}>
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