class Circle {
    constructor(originX, originY, radius, color = "#000000") {
        this.originX = originX;
        this.originY = originY;
        this.radius = radius;
        this.color = color;
        this.velocityX = 2 * Math.random() - 1;
        this.velocityY = 2 * Math.random() - 1;
    }

draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.originX, this.originY, this.radius, this.color);
    ctx.stroke();
}

static random(canvasWidth, canvasHeight) {
    const randomBlue = 256 * Math.random();
    const randomGreen = 256 * Math.random();
    const randomRed = 256 * Math.random();

    const rgbString = `rgba(${randomRed},${randomBlue},${randomGreen},${Math.random()})`;

    const randomRadius = 100 * Math.random();

    const randomOriginX = canvasWidth * Math.random();
    const randomOriginY = canvasHeight * Math.random();

    const newCircle = new Circle(
        randomOriginX,
        randomOriginY,
        randomRadius,
        rgbString
    );

    return newCircle;
    }

}
