import ThemeParkCards from "./ThemeParkCards"
import ParkSearch from "./ParkSearch"
import ParkSubmit from "./ParkSubmit"
import MyReviews from"./MyReviews"



function ThemeParkPage({parks}){
    const RenderParks=parks.map(park=>{
       return <ThemeParkCards park={park}key={park.id}/>
    })


    return(
        <div>
        <ParkSearch />
        <ParkSubmit />
        <MyReviews />
        {RenderParks}
         </div>
    )
}


export default ThemeParkPage