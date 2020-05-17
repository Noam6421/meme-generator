import React, { useState, useEffect } from 'react';

const MemeGenerator = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');
    const [allMemeImgs, setAllMemeImgs] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            setAllMemeImgs([...allMemeImgs, ...memes])
        })    
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * allMemeImgs.length);
        setRandomImg(allMemeImgs[randNum].url)
    }
    const handleReset = (event) => {
        event.preventDefault();
        setTopText('');
        setBottomText('');
    }
    return(
        <div className="content-container">
            <div>
                <form className="meme-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="text-input"
                        name="topText" 
                        placeholder="Top Text" 
                        value={topText} 
                        onChange={(e) => setTopText(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="text-input"
                        name="bottomText" 
                        placeholder="Bottom Text" 
                        value={bottomText} 
                        onChange={(e) => setBottomText(e.target.value)}
                    />
                    <button className="button">Change meme image</button>
                    <button className="button" onClick={handleReset}>Reset</button>
                </form>
            </div>
            <div className='meme'>
                <img  className="meme__img" src={randomImg} alt='' />
                <h2 className='meme__top'>{topText}</h2>
                <h2 className='meme__bottom'>{bottomText}</h2>
            </div>
      </div>    
    )
}

export { MemeGenerator as default };