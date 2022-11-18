import React from "react"
import '../App.css';
import Header from "./Header"
import ThemeParkPage from "./ThemeParkPage"
import ParkSubmit from "./ParkSubmit"
import ParkSearch from "./ParkSearch"
import { useEffect,useState} from 'react';


function App() {
  const [parks,setParks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/theme-Parks")
    .then(r=>r.json())
    .then(parks=>setParks(parks))

  },[])


  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>(Project Name Here)</h1>
        <Header />
        <div className="parkContainer">
        <ThemeParkPage parks={parks} setParks={setParks} />
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
