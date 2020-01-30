import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const myKey = 'tirHU41xX6ljGBtoqLuu1tbPTXdPput0'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (e = 'dogs') => {
    
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=${myKey}&rating=g&limit=3`)
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({ 
                    gifs: data.map(i => ({url: i.images.original.url})) 
                })
            }  
        ) 
        
    }

    render() {
        return(
            <div className="GifListContainer">
                < GifSearch fetchGifs={this.fetchGifs} />
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}