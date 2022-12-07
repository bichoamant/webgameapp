// React and Other Library
import { useState } from 'react'
import * as ReactDOM from 'react-dom/client';
import reactLogo from './assets/react.svg'

// components
import Waves from './components/Waves'
import CardImage from './components/CardImage'
import InputButton from './components/InputButton'

// js
import {chooseRandomVideo} from './js/smallFunctions.js'

// CSS
import './style/Waves.css'
import 'bulma/css/bulma.min.css'
import './App.css'

// hooks
import makeStaticLists from './hooks/makeStaticLists'
import setCurrentVideo from './hooks/setCurrentVideo'
import countDownHook from './hooks/countDownHook';

//const Stranges
const playingTxt = "playing..."

function App() {
  
  // 回答の配列取得
  let GET_URL = 'https://jsonblob.com/api/jsonBlob/1045532953303859200'
  const [quizList, setQuizList] = makeStaticLists(GET_URL,"lists")
  
  
  
  //Youtube PlayList *Add API key on .env and IGNORE the file
  const PLAY_LIST_ID = "PL32RkBdibPYUJglOa1xRhjqcJ2Z8Siczs"
  GET_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key='+import.meta.env.VITE_YOUTUBE_API_KEY+'&playlistId='+PLAY_LIST_ID
  const [musicList, setMusicList] = makeStaticLists(GET_URL,"items")
  // console.log(musicList)
  
  ////////////////////////////
  // dom elements
  ////////////////////////////
  
  const howToDom = document.getElementById('howTo')
  const handleBtnDom = document.getElementById('handleBtn')
  const cardImageDom = document.getElementById('cardImage')

  ////////////// //////////////
  // const and var values
 ////////////// //////////////

 const [countDownSec, setCountDownSec] = useState(13)


  ////////////// //////////////
  // Event Functions
 ////////////// //////////////

//  create state and initialize it
 const [video,setVideo] = setCurrentVideo(null)
 

 //start button -> playing
 const startButtonEvent = (e) =>{
   // choose random video from playlist and set it at state
   //setState is async!!
   const currentVideo = chooseRandomVideo(musicList)
  //  setVideo(currentVideo)

   
    // e.target.style.display='none'

    //playing the music
    //card img
    const playingImg=(
      <CardImage
        kind="wave"
        value="move"
      />
    )
    ReactDOM.createRoot(cardImageDom).render(playingImg)

    // card how to
    // set Timer
    const [sec, setSec] = countDownHook(import.meta.env.VITE_COUNT_DOWN_SEC)
    const playing=(
      <div>
        <p>{playingTxt}</p>
        <p>{countDownSec}
          {sec}
        </p>
      </div>
    )

    ReactDOM.createRoot(howToDom).render(playing);


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
