import React, { Component } from 'react'
const buttonStyle = { backgroundColor: 'lightgreen'}
export default class GifSearch extends Component {

    state = {
        input: "",
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.input)
    }

    handleChange = e => {
        this.setState({ input: e.target.value })
    }

    render() {
        return(
            <div>
                <h2>Enter a Search Term: </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    <input type="submit" value="Find Gifs" style={buttonStyle}/>
                </form>
            </div> 
        )
    }
}