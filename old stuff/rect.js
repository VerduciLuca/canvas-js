class Rect {


    constructor(originX, originY, width, height, color = '#000000') {

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = 2 * Math.random() - 1;
        this.velocityY = 2 * Math.random() - 1;
    
    }



animate(canvasWidth,canvasHeight){

//     if (Math.random()>0.9999999) {
//         this.velocityX = 2 * Math.random() - 1;
        
//     }if(Math.random()>0.9999999) {
//         this.velocityY = 2 * Math.random() - 1;
        
//     }

    

    this.originX += this.velocityX
    this.originY += this.velocityY




    if(this.originX < 0 || this.originX + this.width > canvasWidth ){

        this.velocityX = this.velocityX * -1;
        

    }
    if (this.originY < 0 || this.originY + this.height > canvasHeight) {

        this.velocityY = this.velocityY * -1;
        
    }

    
    
}


    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.originX, this.originY, this.width, this.height)

    }

    static random(canvasWidth, canvasHeight) {


        const randomBlue = 256 * Math.random()
        const randomGreen = 256 * Math.random()
        const randomRed = 256 * Math.random()

        const rgbString = `rgba(${randomRed},${randomBlue},${randomGreen},${Math.random()})`

        const randomWidth = 100 * Math.random();
        const randomHeight = 100 * Math.random();



        const randomX = (canvasWidth - randomWidth) * Math.random();
        const randomY = (canvasHeight - randomHeight) * Math.random();



        const newRect = new Rect(0, 0, 10, 10, rgbString);


        return newRect;
    }


}