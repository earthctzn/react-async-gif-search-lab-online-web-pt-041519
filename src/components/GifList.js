import React from 'react';

const GifList = props => {
    return(
        <ul className="gif-list-ul">
            {props.gifs.map( gif => <li><img key={gif.url + '123'} src={gif.url} alt="gif"/> </li> )}
        </ul>
    )
}
export default GifList

