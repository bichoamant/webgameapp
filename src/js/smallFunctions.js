export function  chooseRandomVideo(youtubeVideoList){

    
    if(youtubeVideoList){

        const index =parseInt( (Math.random()*youtubeVideoList.length)-1)
        const video = youtubeVideoList[index]
       return video
    }else{
        return null
    }
}

