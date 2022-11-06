import { inputDirectionHandlr } from "./inputs.js"
const snake_speed= 2 //snake will move 2 times per sec
const snakePosition=[{x:11,y:11}]
let newBodyParts=0
let score=0
const addBodyParts=()=>{
    for(let i=0;i<newBodyParts;i++){
        snakePosition.push({...snakePosition[snakePosition.length-1]})
    }
    newBodyParts=0
}
const updateSnake=()=>{
    addBodyParts()
    for (let i = snakePosition.length - 2; i >= 0; i--) {
        snakePosition[i + 1] = { ...snakePosition[i] }
      }
    snakePosition[0].x +=inputDirectionHandlr().x
    snakePosition[0].y +=inputDirectionHandlr().y
}
const drawSnake=(gameField)=>{
    snakePosition.forEach((segment)=>{
        const snakeBodyPart= document.createElement("div")
        snakeBodyPart.style.gridRowStart=segment.y
        snakeBodyPart.style.gridColumnStart=segment.x
        snakeBodyPart.classList.add("snake")
        gameField.appendChild(snakeBodyPart)
    })
}
const snakeOnFood=(position,{ ignoreHead =false }={})=>{
    return snakePosition.some((bodyPart,index)=>{
        if(ignoreHead && index===0) return false
        if(bodyPart.x===position.x && bodyPart.y===position.y){
            score=score+1
            return true
        }
    })
}
const increaseSnake=(increasingAmount)=>{
    newBodyParts+=increasingAmount
}
const snakeHeadHandlr=()=>{
    return snakePosition[0]
}
const selfCollision=()=>{
    return snakeOnFood(snakePosition[0],{ ignoreHead: true })
}

export {snake_speed,updateSnake,drawSnake,increaseSnake,snakeOnFood, snakeHeadHandlr,selfCollision,score}