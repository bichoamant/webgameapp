// React and Other Library
import { useState, createContext } from 'react'
import * as ReactDOM from 'react-dom/client';

// components
import CardImage from './components/CardImage'
import InputButton from './components/InputButton'

// js
import {chooseRandomItem} from './js/smallFunctions.js'

// CSS
import './style/Waves.css'
import 'bulma/css/bulma.min.css'
import './App.css'

// hooks
import makeStaticLists from './hooks/makeStaticLists'
import CountDownComp from './components/CountDownComp';

//const Stranges
const playingTxt = "playing..."
////////////// //////////////
 // CONTEXT
////////////// //////////////
// const countDownSec = 13
// const CountDownSecContext = createContext(countDownSec)

function App() {
  
  
  ////////////////////////////
  // dom elements
  ////////////////////////////
  
  const howToDom = document.getElementById('howTo')
  const handleBtnDom = document.getElementById('handleBtn')
  const cardImageDom = document.getElementById('cardImage')

  ////////////// //////////////
  // const and variables
 ////////////// //////////////
 // 回答の配列取得
 let QUIZ_GET_URL = 'https://jsonblob.com/api/jsonBlob/1045532953303859200'

//Youtube PlayList *Add API key on .env and IGNORE the file
const PLAY_LIST_ID = "PL32RkBdibPYUJglOa1xRhjqcJ2Z8Siczs"
const PLAY_LIST_GET_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key='+import.meta.env.VITE_YOUTUBE_API_KEY+'&playlistId='+PLAY_LIST_ID




////////////// //////////////
// STATES
////////////// //////////////
const [quizList, setQuizList] = makeStaticLists(QUIZ_GET_URL,"lists")
const [musicList, setMusicList] = makeStaticLists(PLAY_LIST_GET_URL,"items")
const [currentVideo, setCurrentVideo] = useState(null)
// const [introSec, setIntroSec] = useState(INTRO_TIMER)

  ////////////// //////////////
  // Event Functions
  ////////////// //////////////

 //start button -> playing
 const startButtonEvent = (e) =>{
    const video =chooseRandomItem(musicList)
    setCurrentVideo(video)
    console.log(video)

    // render card image
    ReactDOM.createRoot(cardImageDom).render(
      <CardImage 
        kind="wave"
        value="move"
      />
    )

    //render how to
    const playingEl = (
      <div>
       <p>{playingTxt}</p>
        <CountDownComp />
      </div>
    )
    ReactDOM.createRoot(howToDom).render(playingEl)
  }
  
  return (

      <div className="App">
        <div id = 'cardContainer' className = "card">
          <h2 className="title">
            Music Intro Quiz
          </h2>
          <div id="cardImage" className="card-image">
              <CardImage 
                kind="wave"
                value="stop"
              />
          </div>
          <div className="card-content">
            <div className="content">
              <div id="howTo" className="howTo">
                <h4>Press the Start button</h4>
              </div>
                <div id="handleBtn">
                <InputButton 
                  buttonType="button"
                  buttonId="startButton"
                  buttonClass='button is-danger is-light'
                  clickEvent={startButtonEvent}
                  />
                </div>
            </div>
          </div>
            <div >
              {/* <div className="buttons">
                <button className="button is-primary" id ="button1"><column is-6>Final Fantasy VII</column></button>
                <button className="button is-primary" id ="button2"><column is-6>ActRaiser</column></button>
              </div>
              <div className="buttons">
                <button className="button is-primary" id ="button3"><column is-6>Zelda</column></button>
                <button className="button is-primary" id ="button4"><column is-6>Diablo II</column></button>
              </div> */}
            </div>
        </div>
      </div>
  )
}

export default App
