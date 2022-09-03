import React from 'react'

import './Header.css'


export default ({ black }) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className='header-logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix logo'/>
                </a>
            </div>
            <div className='header-user'>
            <a href='/'>
                    <img src='https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png' alt='user logo'/>
                </a>
            </div>
        </header>
    )
}