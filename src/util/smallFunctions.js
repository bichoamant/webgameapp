import {useContext} from "react"
export function  chooseRandomItem(itemList){

    
    if(itemList){

        const index = parseInt( (Math.random()*itemList.length)-1)
        const item = itemList[index]
       return item
    }else{
        return null
    }
}
export function getQuizByVideoId(currentVideoId,currentListId,quizList){
    console.log(currentVideoId);
    console.log(currentListId);
    console.log(quizList);
    
    let list = quizList.find(element => element.listId == currentListId)
    console.log(list);
    if(list){
        let question = list.questions.find(element => element.videoId==currentVideoId)
        console.log(question);
        return question
    }else{
        return null
    }
}

