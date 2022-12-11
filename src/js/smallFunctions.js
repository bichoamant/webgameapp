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

