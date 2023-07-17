import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Character from './components/Characters';
import Location from './components/Locations';
import Episode from './components/Episodes';


function App() {
  const[characters, setCharacters] = useState([])
  const[locations, setLocations] = useState([])
  const[episodes, setEpisodes] = useState([])
  const[hideC, setHideC]= useState(false)
  const[hideL, setHideL]= useState(false)
  const[hideE, setHideE]= useState(false)
  const[hideImage, setHideImage] = useState(true)



  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      console.log(response.data.results);
      setCharacters(response.data.results)
    })
  }
  const getLocations = () => {
    axios.get("https://rickandmortyapi.com/api/location").then((response) => {
      console.log(response.data.results);
      setLocations(response.data.results)
    })
  }
  const getEpisodes = () => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      console.log(response.data.results);
      setEpisodes(response.data.results)
    })
  }


const showCharacters = () => {
  setHideC(true)
  setHideL(false)
  setHideE(false)
  setHideImage(false)
}
const home = () => {
  setHideC(false)
  setHideL(false)
  setHideE(false)
  setHideImage(true)
}

const showLocations = () => {
  setHideL(true)
  setHideC(false)
  setHideE(false)
  setHideImage(false)
}

const showEpisodes = () => {
  setHideE(true)
  setHideC(false)
  setHideL(false)
  setHideImage(false)
}


const showImage = () => {
  setHideE(false)
  setHideC(false)
  setHideL(false)
  setHideImage(true)
}






  useEffect(() => {
    getCharacters()
 }, [])
  useEffect(() => {
    getLocations()
 }, [])
  useEffect(() => {
    getEpisodes()
 }, [])

  return (

    <div className="App" id="app">

      <div id="buttons">
        <h4 id="button" onClick={showCharacters}>Characters</h4>
        <h4 id="button" onClick={showLocations}>Locations</h4>
        <img src="pngegg.png" alt="" width="300"/>
        <h4 id="button" onClick={showEpisodes}>Episodes</h4>
        <h4 id="button" onClick={home}>Home</h4>
      </div>
      <img id="giant" src="giant.png"/>
      <img id="planet" src="planet.png"/>
      <img id="ship" src="ship.png"/>

      <div class="displayC">
        {characters.map((character) => {
          return(
            <div id="cards"> 
              {hideC 
              ? <Character character={character}/>
              : "" }   
            </div>
          )
        })}
      </div>
      <div class="displayL">
        {locations.map((location) => {
          return(
            <div> 
              {hideL 
              ? <Location location={location}/>
              : "" }   
            </div>
          )
        })}
      </div>
      <div class="displayE">
        {episodes.map((episode) => {
          return(
            <div> 
              {hideE 
              ? <Episode episode={episode}/>
              : "" }   
            </div>
          )
        })}
      </div>
      <div class="displayImage"> 
              {hideImage 
              ? <img id="ram" src="ram.png"/>
              : "" }   
      </div>
    </div>
  );
}

export default App;
