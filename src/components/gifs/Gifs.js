import React from 'react';
import Gif from './gif/Gif';

const Gifs = ({gifs}) => {
    return (
        <div style={gifStyle} className="container">
            {gifs.map((gif)=>{
                return <Gif key={gif.id} gif={gif}/>
            })}
        </div>
    )
}

const gifStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Gifs;