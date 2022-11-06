const randomGridPosHandlr=()=>{
    return {x: Math.floor(Math.random()*21)+1, y: Math.floor(Math.random()*21)+1}
}
const outOfGrid=(position)=>{
    return (position.x<1|| position.x>21|| position.y<1|| position.y>21)
}
export {randomGridPosHandlr,outOfGrid}