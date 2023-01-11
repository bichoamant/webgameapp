// React and Other Library
import { useState } from 'react'
import YouTube from 'react-youtube';

// components
import CardImage from './components/CardImage'
import InputButton from './components/InputButton'

// js
import {chooseRandomItem, getQuizByVideoId} from './util/smallFunctions.js'

// CSS
import './style/Waves.css'
import 'bulma/css/bulma.min.css'
import './App.css'

// hooks
import makeStaticLists from './hooks/makeStaticLists'


////////////// //////////////
 // CONTEXT
////////////// //////////////
// const countDownSec = 13
// const CountDownSecContext = createContext(countDownSec)

function App() {
  

  ////////////// //////////////
  // const and variables
 ////////////// //////////////
 // 回答の配列取得
 let QUIZ_GET_URL = 'https://jsonblob.com/api/jsonBlob/1045532953303859200'

//Youtube PlayList *Add API key on .env and IGNORE the file
const PLAY_LIST_ID = "PL32RkBdibPYUJglOa1xRhjqcJ2Z8Siczs"
const PLAY_LIST_GET_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key='+import.meta.env.VITE_YOUTUBE_API_KEY+'&playlistId='+PLAY_LIST_ID

//use in youtube api
const [iframeOpt, setIFrameOpt] = useState({
  height: '0',
  width: 'auto',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
});




////////////// //////////////
// STATES
////////////// //////////////
const [quizList, setQuizList] = makeStaticLists(QUIZ_GET_URL,"lists")
const [musicList, setMusicList] = makeStaticLists(PLAY_LIST_GET_URL,"items")
const [currentVideo, setCurrentVideo] = useState(null)
const [currentQuiz, setCurrentQuiz] = useState(null)

const [kindOfCardImage, setKindOfCardImage] = useState("wave");
const [stateOfCardImage, setStateOfCardImage] = useState("stop");

const [howToPlay, setHowToPlay] = useState("Press the Start Button");

//button actions and texts
const [buttonValue, setButtonValue] = useState("StartButton");
const [onClick, setOnClick] = useState(null);

// ansewer state 
// 0: New Question
// 1: Choosing answer
// 2: Answered

const [answerState, setAnswerState] = useState(0);


  //////////////
  // Event Functions
  ////////////// //////////////

 //start button -> playing
 const startButtonEvent = (e) =>{
  
  //initialise answered state
    setAnswerState(0)
  // inistialise quiz
    const video =chooseRandomItem(musicList)
    setCurrentVideo(video)
    console.log(quizList);
    console.log(video)
    
    setCurrentQuiz(getQuizByVideoId(video.snippet.resourceId.videoId,video.snippet.playlistId,quizList))
     //move card image  
    setKindOfCardImage("wave")
    setStateOfCardImage("move")

    //changing button text
    setButtonValue("gotit")
    setHowToPlay("What is the title of the game in which this music was played?")
    

  }
  const nextVideo=(e)=>{

  }


  const stopVideo=(e)=>{
    
    let interval =  setInterval(()=>{
        setKindOfCardImage("wave")
        setStateOfCardImage("stop")
        e.target.stopVideo()
        clearInterval(interval)
        setHowToPlay("Choose your answer!")
        setAnswerState(1)
    },13000)
  
  }

  return (

      <div className="App">
        <div id = "cardContainer" className = "card">
          <h2 className="title">
            Music Intro Quiz
          </h2>
          <div id="cardImage" className="card-image">
              <CardImage 
                kindOfImage={kindOfCardImage}
                stateOfImage={stateOfCardImage}
              />
              <YouTube
                videoId= {currentVideo ? currentVideo.snippet.resourceId.videoId :''}
                onPlay = {answerState==0? stopVideo :nextVideo}
                opts={iframeOpt}

              />
          </div>
          <div className="card-content">
            <div className="content">
              <div id="howTo" className="howTo">
                <h4> {howToPlay} </h4>
              </div>
                <div id="handleBtn">
                <InputButton 
                  buttonType="button"
                  buttonId="controlBtn"
                  buttonValue={buttonValue}
                  buttonClass='button is-danger is-light'
                  clickEvent={onClick ? onClick: startButtonEvent }
                  />
                </div>
            </div>
          </div>
            <div>
              <div className="buttons">
                <button className="button is-primary" id ="button1"><column is-6>{currentQuiz? currentQuiz.options.a:"option A"}</column></button>
                <button className="button is-primary" id ="button2"><column is-6>{currentQuiz? currentQuiz.options.b:"option B"}</column></button>
              </div>
              <div className="buttons">
                <button className="button is-primary" id ="button3"><column is-6>{currentQuiz? currentQuiz.options.c:"option C"}</column></button>
                <button className="button is-primary" id ="button4"><column is-6>{currentQuiz? currentQuiz.options.d:"option D"}</column></button>
              </div>
            </div>
        </div>
        <div id="player"></div>
        <script className="youtube" src="https://www.youtube.com/iframe_api"></script>
      </div>
  )
}

export default App
