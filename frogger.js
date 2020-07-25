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
        console.log("Update")
    }

    draw(){
        ctx3.fillStyle = "green";
        ctx3.fillRect(this.x, this.y, this.width, this.height)
    }
}

const frogger = new Frogger();