import React, {useState} from "react"
import ThemeParkCards from "./ThemeParkCards"
import ParkSearch from "./ParkSearch"
import ParkSubmit from "./ParkSubmit"
import About from "./About"
import { Route, Switch } from "react-router-dom"


function ThemeParkPage({parks, setParks,patchPark}){
    const [search, setSearch] = useState("")

    const filteredPark = parks.filter(park =>{
        return park.name.toLowerCase().includes(search.toLowerCase())
    })

    const RenderParks=filteredPark.map(park=>{
        return <ThemeParkCards park={park}key={park.id} patchPark={patchPark}/>
     })

    function viewNewPark(newPark){
        const newParkArray = [...parks, newPark]
        setParks(newParkArray)
      }

    return(
        <div>
              
        <Switch>
        <Route  path="/Add an Amusement Park">
        <ParkSubmit viewNewPark={viewNewPark}/>
        {RenderParks}
        </Route>
        <Route path="/About">
            <About/>
        </Route>
        <Route path="/">
        <ParkSearch search={search} setSearch={setSearch}/>
        {RenderParks}
        </Route>
        
        </Switch>
        
         </div>
    )
}


export default ThemeParkPage