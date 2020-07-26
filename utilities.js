function scored(){
    score++
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function animate(){
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles()
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