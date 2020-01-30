// import React, { Component } from 'react'
// import GifList from '../components/GifList'
// import GifSearch from '../components/GifSearch'

// const myKey = 'tirHU41xX6ljGBtoqLuu1tbPTXdPput0'

// export default class GifListContainer extends Component {

//     state = {
//         gifs: []
//     }

//     componentDidMount() {
//         fetchGifs()
//     }

//     fetchGifs = (ev = 'dogs') => {
//         fetch(`https://api.giphy.com/v1/gifs/search?q=${ev}&api_key=${myKey}&rating=g&limit=3`)
//             .then(response => response.json())
//             .then(({ data }) => {
//                 setState({ 
//                     gifs: data.map(i => ({url: i.images.original.url})) 
//                 })
//             }  
//         )        
//     }

//     render() {
//         return(
//             <div className="GifListContainer">
//                 < GifSearch fetchGifs={fetchGifs} />
//                 < GifList gifs={state.gifs}/>
//             </div>
//         )
//     }
// }


// Refactored with hooks


import React, { useState, useEffect } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const myKey = 'tirHU41xX6ljGBtoqLuu1tbPTXdPput0'
const GifListContainer = () => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetchGifs()
    },[])

    const fetchGifs = async (ev = 'dogs') => {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ev}&api_key=${myKey}&rating=g&limit=3`)
        const {data} = await res.json()
        setGifs(data)        
    }

    return(
        <div className="GifListContainer">
            < GifSearch fetchGifs={fetchGifs} />
            < GifList fetchedData={gifs}/>
        </div>
    )
}

export default GifListContainer