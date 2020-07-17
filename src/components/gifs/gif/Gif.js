import React from 'react';

const Gif = (gitItem) => {
    console.log(gitItem.gif);
    return (
        <div className="card text-center">
            <img src={gitItem.gif.images.original.url} alt=""  style={{width: '100px'}}/>
            <h3>{gitItem.gif.title} </h3>
        </div>
    )
}

export default Gif;