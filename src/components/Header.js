import React from 'react';

const Header = () => {
    return(
        <header className="header">
            <h1 className="header__title">Meme Generator</h1>
            <img
            className="header__img"
            src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
            alt='Problem?'
        />
        </header>    
    )
}

export { Header as default };