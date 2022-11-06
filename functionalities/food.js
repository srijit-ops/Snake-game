import {snakeOnFood, increaseSnake} from "./snake.js"
import {randomGridPosHandlr} from "./grid.js"
const randomFoodPosHandlr=()=>{
    let newFoodPos = randomGridPosHandlr() 
    while(newFoodPos===null || snakeOnFood(newFoodPos)){
        newFoodPos=randomGridPosHandlr()
    }
    return newFoodPos
}
let foodPosition= randomFoodPosHandlr()
const snakeIncreasingRate=1
const updateFood=()=>{
    if(snakeOnFood(foodPosition)){
        increaseSnake(snakeIncreasingRate)
        foodPosition= randomFoodPosHandlr()
    }
}
const drawFood=(gameField)=>{
        const food= document.createElement("div")
        food.style.gridRowStart=foodPosition.y
        food.style.gridColumnStart=foodPosition.x
        food.classList.add("food")
        gameField.appendChild(food)
}
export {updateFood,drawFood}