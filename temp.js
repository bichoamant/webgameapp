function getPlayListUrl(){
    const audioItem = document.getElementById('audio')
    audioItem.play()
    setTimeout( "stopAudio()", 13000 );
}
function stopAudio(){
    const audioItem = document.getElementById('audio')
    audioItem.pause()
}