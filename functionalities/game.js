import { drawFood, updateFood } from "./food.js"
import {snake_speed,updateSnake,drawSnake,snakeHeadHandlr,selfCollision,score} from "./snake.js"
import {outOfGrid} from "./grid.js"
let lastRenderTime=0
let gameOver= false
const gameField=document.querySelectorAll(".field")[0]
const confirmJS=()=>{
    swal({ 
    title:"Game Over",   
    text: `Score: ${score}`,   
    icon: "warning",   
    dangerMode: true,
    buttons: ["Ok", "Reset"] ,  
    closeOnConfirm: false,   
    closeOnCancel: false }).then((value) => {
                if (value) {
                    window.location="/";
                }
    });
}
const gameLoop=(currTime)=>{
    if(gameOver){
        confirmJS()
    }else{
        let timeGapOf2Renders= (currTime-lastRenderTime)/1000
    window.requestAnimationFrame(gameLoop)
    if(timeGapOf2Renders<1/snake_speed) return //we don't need to move the snake now
    lastRenderTime=currTime
    updateLogic()
    drawAll()
    }  
}
window.requestAnimationFrame(gameLoop)
const gameOverHandlr=()=>{
    gameOver= outOfGrid(snakeHeadHandlr())||selfCollision()
}
const updateLogic=()=>{
updateSnake()
updateFood()
gameOverHandlr()
}
const drawAll=()=>{
gameField.innerHTML=""
drawSnake(gameField)
drawFood(gameField)
}