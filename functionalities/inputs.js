let inputDirection={x:0,y:0}
let lastInputDirection={x:0,y:0}
const inputDirectionHandlr=()=>{
    lastInputDirection=inputDirection
    return inputDirection
}
window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        if (lastInputDirection.y !== 0)
         break
        else {
            inputDirection = { x: 0, y: -1 }
        break
        }
      case 'ArrowDown':
        if (lastInputDirection.y !== 0) 
        break
        else{
            inputDirection = { x: 0, y: 1 }
        break
        }
      case 'ArrowLeft':
        if (lastInputDirection.x !== 0) 
        break
        else{
            inputDirection = { x: -1, y: 0 }
        break
        }
      case 'ArrowRight':
        if (lastInputDirection.x !== 0) 
        break
        else{
            inputDirection = { x: 1, y: 0 }
        break
        }
        default:
            alert("Wrong key")
    }
  })
  
export {inputDirectionHandlr}