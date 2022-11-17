import React, {useState} from "react"
import ThemeParkCards from "./ThemeParkCards"
import ParkSearch from "./ParkSearch"
import ParkSubmit from "./ParkSubmit"
import MyReviews from"./MyReviews"


function ThemeParkPage({parks, setParks}){
    const [search, setSearch] = useState("")

    const filteredPark = parks.filter(park =>{
        return park.name.toLowerCase().includes(search.toLowerCase())
    })

    const RenderParks=filteredPark.map(park=>{
        return <ThemeParkCards park={park}key={park.id}/>
     })

    function viewNewPark(newPark){
        const newParkArray = [...parks, newPark]
        setParks(newParkArray)
      }

    return(
        <div>
        <ParkSearch search={search} setSearch={setSearch}/>
        <ParkSubmit viewNewPark={viewNewPark}/>
        <MyReviews />
        {RenderParks}
         </div>
    )
}


export default ThemeParkPage