// import React, { Component } from 'react'
// const buttonStyle = { backgroundColor: 'lightgreen'}
// export default class GifSearch extends Component {

//     state = {
//         input: "",
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.fetchGifs(this.state.input)
//     }

//     handleChange = e => {
//         this.setState({ input: e.target.value })
//     }

//     render() {
//         return(
//             <div>
//                 <h2>Enter a Search Term: </h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.input} onChange={this.handleChange} />
//                     <input type="submit" value="Find Gifs" style={buttonStyle}/>
//                 </form>
//             </div> 
//         )
//     }
// }

//Refactored using Hooks

import React, { useState } from 'react'
const buttonStyle = { backgroundColor: 'lightgreen'}

const GifSearch = props => {
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.fetchGifs(input)
    }

    const handleChange = e => {
        setInput(e.target.value )
    }

  
    return(
        <div>
            <h2>Enter a Search Term: </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange} />
                <input type="submit" value="Find Gifs" style={buttonStyle}/>
            </form>
        </div> 
    )
    
}
export default GifSearch