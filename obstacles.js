class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 30) //Ramdon number bwteene 30 and 60
        this.carType = Math.floor(Math.random() * numberOfCars) //Random row from cars sheet
    }

    draw(){
        if (this.type === "turtle"){
            if (frame % this.randomise === 0){ //take frame count % random number = 0 to randomize swimming
                if (this.frameX >= 1){
                    this.frameX = 0
                } else {
                    this.frameX++
                }
            }            
            // sprite size in this case is 70
            ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height)

        } 
        else if (this.type === 'log'){
            ctx1.drawImage(log,this.x, this.y, this.width, this.height)
        } else {
            ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height)
        }
        //ctx3.fillStyle = 'blue'
        //ctx3.fillRect(this.x, this.y, this.width, this.height)
    }

    update(){
        this.x += this.speed * gameSpeed
        if (this.speed > 0){
            if(this.x > canvas.width + this.width){
                this.x = 0 - this.width
                this.carType = Math.floor(Math.random() * numberOfCars) //New random row from cars sheet
            }
        } else {
            this.frameX = 1 //to use the correct image from the spritesheet
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width
                this.carType = Math.floor(Math.random() * numberOfCars) //New random row from cars sheet
            }
        }
    }
}

function initObstacles(){
    // lane 1
    for (let i = 0; i < 2; i++){ // 2 cars
        let x = i * 350; //spacing out the cars, used as first aguement in the line below
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car'))
    }
    // lane 2
    for (let i = 0; i < 2; i++){ // 2 cars
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'))
    }
    // lane 3
    for (let i = 0; i < 2; i++){ // 2 cars
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 2, 'car'))
    }
    // lane 4
    for (let i = 0; i < 2; i++){ // 2 logs
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log'))
    }
    // lane 4
    for (let i = 0; i < 3; i++){ // 3 turtles
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'))
    }
}

initObstacles();

function handleObstacles(){
    for (let i = 0; i < carsArray.length; i++){
        carsArray[i].update()
        carsArray[i].draw()
    }
    for (let i = 0; i < logsArray.length; i++){
        logsArray[i].update()
        logsArray[i].draw()
    }

    for (let i = 0; i < carsArray.length; i++){
        if (collision(frogger, carsArray[i])){
            //cutting image out of sprite sheet. 
            //              (image, x start on spritesheet, y start on spritesheet, width on spritesheet, heighton spritesheet
            //                 X on screen, Y on screen, width, height)
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50)
            resetGame()
        }
    }
    if (frogger.y < 250 && frogger.y > 100 ) {
        safe = false;
        for (let i = 0; i < logsArray.length; i++){
            if(collision(frogger, logsArray[i])){
                frogger.x += logsArray[i].speed //make frog float on log or turtle
                safe = true;
            }
        }
        if(!safe){
            for(let i = 0; i < 30; i++){
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            }
            resetGame()  
        }
    }

}