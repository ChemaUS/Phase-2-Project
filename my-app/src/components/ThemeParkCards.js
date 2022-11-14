import React from "react"
function ThemeParkCards({park}){
    return(
    <div id="park-card">
        <h1 id ="park-name">{park.name}</h1>
        <img id ="park-img"src={park.image} alt={park.name} />
        <h2 id="park-state">{park.state}</h2>
        <ul id="review-container">
           <li id="reviews">
            {park.reviews}
            </li> 
        </ul>
   </div>
    
    )
}
export default ThemeParkCards