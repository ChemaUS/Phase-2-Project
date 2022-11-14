import React from "react"
function ThemeParkCards({park}){







    return(
    <div>
        <h1>{park.name}</h1>
        <img src={park.image} alt={park.name} />
        <h2>{park.state}</h2>
        <ul>
           <li>
            {park.review}
            </li> 
        </ul>
   </div>
    
    )
}
export default ThemeParkCards