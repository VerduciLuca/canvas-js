const canvas = document.getElementById('canvas1');
console.log(canvas)
const ctx = canvas.getContext('2d');
// const r1 = new Rect (10,10,100,100)
// r1.draw(ctx)

// function moveRect(){
//     ctx.clearRect(0,0,canvas.width, canvas.height)
//     r1.animate();
//     r1.draw(ctx)
// }

// setInterval(moveRect,1)

const rectArray = []

for (let i = 0; i < 100; i++) {
    const rect = Rect.random(canvas.width, canvas.height);
    rectArray.push(rect)
    
}

function moveAll(){
    for (const rect of rectArray) {
        rect.animate()
        rect.draw()
        
    }
}

setInterval(moveAll,1)