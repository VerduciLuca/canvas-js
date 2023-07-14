// const canvasC = document.querySelector('.my-canvas')
// const canvasD = document.querySelector('#canvas1')
// const canvasE = document.querySelector('canvas')

// const canvasCollection = document.querySelectorAll('.my-canvas')

const canvas = document.getElementById("canvas1");
// console.log(canvas.width);
// console.log(canvas.height);
const ctx = canvas.getContext("2d");
// ctx.rect(10,10,100,100);
// ctx.rect(790,670,100,100)
// ctx.rect(10, canvas.)
// ctx.fill();

// ctx.fillStyle='#ff0000'
// ctx.strokeStyle='#00ff00'
// ctx.lineWidth=15
// ctx.fillRect(10,10,100,100);
// ctx.strokeRect(200,200,100,100)
// ctx.clearRect(50,50,20,20)

// ctx.beginPath();
// ctx.arc(canvas.width/2, canvas.height/2, 200,0,2*Math.PI,)
// ctx.stroke()

ctx.beginPath();

ctx.moveTo(50, 50);

ctx.lineTo(100, 100);

ctx.lineTo(50, 150);

ctx.fill()