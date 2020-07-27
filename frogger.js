class Frogger {
    constructor(){
        this.spriteWidth = 250; //based on frog_spritesheet.png
        this.spriteHeight = 250; //based on frog_spritesheet.png
        this.width = this.spriteWidth/5; //making it smaller by /5
        this.height = this.spriteHeight/5; 
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0; //picking frame from sheet
        this.frameY = 0; //picking frame from sheet
    }
    
    update(){
        if(keys[38]){ //up
            if (this.moving === false){
                this.y -= grid; //move
                this.moving = true; //set moving to true to block further movement until keyup
                this.frameX = 1;
                this.frameY = 0;
            }
        }
        if(keys[40]){ //down
            if (this.moving === false && this.y < canvas.height - this.height * 2){
                    this.y += grid; //move
                    this.moving = true; 
                    this.frameY = 3;
            }
        }
        if(keys[37]){ //right
            if (this.moving === false && this.x > this.width){
                this.x -= grid; //move
                this.moving = true; 
                this.frameY = 2;
            }
        }
        if(keys[39]){ //left
            if (this.moving === false && this.x < canvas.width - this.width * 2){
                this.x += grid; //move
                this.moving = true;
                this.frameY = 1;
            }
        }
        if (this.y < 0){
            scored()
        }
    }

    draw(){
        // ctx3.fillStyle = "green";
        // ctx3.fillRect(this.x, this.y, this.width, this.height)
        //                                                                      -25 to make hitbox match image
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x -25, this.y -25, this.width * 2 , this.height * 2)
    }

    jump(){
        if (this.moving === false){
            this.frameX = 1
        } 
        else if (this.frameX === 1 ){
            this.frameX = 0
        }
    }
}

const frogger = new Frogger();