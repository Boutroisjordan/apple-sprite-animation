
let canvas = document.getElementById("canvas");

const ctx = canvas.getContext('2d');

// commun
const CANVAS_WIDTH = canvas.width = 100;
const CANVAS_HEIGHT = canvas.height = 128;

ctx.imageSmoothingEnabled = false;



const lockImage = new Image();
lockImage.src = "lock.png"

let cols = 8;
let rows = 9;

let totalFrames = 72;

let currentFrame = 0;

let frameX = 0;
let frameY = 0;

let gameFrame = 0;
let staggerFrame = 8;
let frameCount = 0;

const spriteWidth = lockImage.width / cols; //png width / column
const spriteHeight = lockImage.height / rows; // png height / row

let frames = {
    loc: [],
}

let animations = [];

let result;
let posY = 0;
let posX = 0;
// récupérer les 72 postions de l'animation

for (let j = 0; j < totalFrames; j++) {
    
    if (j != 0) {
        result = j % 8;
    }

    if (result == 0) {
        posY++
        posX = 0;
    }


     console.log(posX, ' x', ' y = ', posY);
    let positionX = posX * spriteWidth;
    let positionY = posY * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });

    if (result != 0) {
        posX++;
    }
}

console.log(frames.loc)

/*
let Theframes = frames.loc;
for (let i = 0; i < Theframes.length; i++) {
    let pos = Theframes[i];
    let img = lockImage.get(pos.x, pos.y, spriteWidth, spriteHeight);
    animations.push(img);
}
console.log(animations, ' los animos');
*/


function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    // currentFrame = currentFrame % totalFrames;
    // srcX = currentFrame * spriteWidth;
    // srcY = currentFrame * spriteHeight;

 

    // ctx.drawImage(lockImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    ctx.drawImage(lockImage, frames.loc[currentFrame % 72].x, frames.loc[currentFrame % 72].y, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // ctx.drawImage(lockImage, frames.loc[currentFrame % 72].x, frames.loc[currentFrame % 72].y);

    if(gameFrame % staggerFrame == 0) {
        currentFrame++
    }


    // frameCount++
    // console.log(frameCount, ' frame count');

    // console.log(frameX, ' x');
    //     console.log(frameY, ' y');
    // console.log(gameFrame % staggerFrame, '  framess');

    gameFrame++;
    requestAnimationFrame(animate);
} 

animate();


