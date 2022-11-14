import '../App.css';
import Header from "./Header"
import ThemeParkPage from "./ThemeParkPage"
import { useEffect,useState} from 'react';


function App() {
  const [parks,setParks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/theme-Parks")
    .then(r=>r.json())
    .then(parks=>setParks(parks))

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render</h1>
        <Header />
        <ThemeParkPage parks={parks}  />
      </header>
    </div>
  );
}

export default App;
