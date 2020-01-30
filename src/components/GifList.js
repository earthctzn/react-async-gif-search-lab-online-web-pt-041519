// import React from 'react';

// export default class GifList {
//     render() {
//         return(
//             <ul className="gif-list-ul">
//                 {this.props.fetchdata.map( 
//                     gif => 
//                     <li>
//                         <img src={gif.images.original.url} alt="gif"/> 
//                     </li>
//                 )}
//             </ul>
//         )
            
//     }
// }


//refactored for hooks
import React from 'react'

const GifList = props => {
    return(
        <ul className="gif-list-ul">
            {props.fetchedData.map( 
                gif => 
                <li key={gif.slug} >
                    <img 
                        id={gif.id} 
                        src={gif.images.original.url} 
                        alt={gif.embed_url} 
                    />
                </li> 
            )}
        </ul>
    )
}
export default GifList