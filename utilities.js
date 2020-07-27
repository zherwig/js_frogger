function scored(){
    score++
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard(){
    ctx4.fillStyle = "black";
    ctx4.strokeStyle = "black";
    ctx4.font = "15px Verdana";
    ctx4.strokeText("Score", 265, 15)
    ctx4.font = "60px Verdana"
    ctx4.fillText(score, 270, 65)
    ctx4.font = "15px Verdana"
    ctx4.strokeText(`Collisions: ${collisionCount}`, 10, 175)
    ctx4.strokeText(`Gamespeed: ${gameSpeed.toFixed(1)}`, 10, 195)
}

function collision(first, second){
    //returns true if none of these are true (....because of the !)
    return !(
        first.x > second.x + second.width || //first is right of second
        first.x + first.width < second.x || //first is left of second
        first.y > second.y + second.height || //first is below second
        first.y + first.height < second.y //first is above second
    );
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionCount++;
}


function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    handleRipples()
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height)
    handleParticles()
    frogger.draw();
    frogger.update();
    handleObstacles()
    handleScoreBoard()
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height) //by drawing this after the frog, it will overlay the frog
    requestAnimationFrame(animate)
}

animate()

// event listeners
window.addEventListener("keydown", function(e){
    keys = []; // empty keys array
    keys[e.keyCode] = true; // add current key
    if (keys[37] || keys[38] || keys[39] || keys[40]){ //scan for up, down, left, right
        frogger.jump(); //launch jump function
    }
})

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode]; //delete current key being unpressed
    frogger.moving = false; //clear the block on the frog movingS
})