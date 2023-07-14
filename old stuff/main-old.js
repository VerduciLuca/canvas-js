const canvas = document.getElementById('canvas1');
console.log(canvas)
const ctx = canvas.getContext('2d');
let rectangleNumber = 0

setInterval(createSingleArt,50)

function createArt(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

for (let i = 0; i < 10000; i++) {
    const r1 = Rect.random(canvas.width,canvas.height)
    r1.draw(ctx)
}

}


function createSingleArt(){
    const r1=Rect.random(canvas.width,canvas.height)
    r1.draw(ctx)
    rectangleNumber++
    if(rectangleNumber>500){
        clearIntervalS(interval)
    }
}