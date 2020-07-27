class Particle {
    constructor(x, y){
        this.x = x + 25; // flog position plus a bit to center underneath 
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1 //particle size
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5
        this.directionY = Math.random() * 1 - 0.5
    }
    draw(){
        ctx3.fillStyle = `rgba(150,150,150,${this.opacity})`;  //color
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //draw circle
        ctx3.fill() //fill with color
        ctx3.closePath()
    }
    update(){
        this.x += this.directionX
        this.y += this.directionY
        if(this.opacity > 0.1){  //opacity reduces quickly, but can't go negative
            this.opacity -= 0.9;
        }
        if(this.radius > 0.15){ //size reduces every frame
            this.radius -= 0.14;
        }
    }

    drawRipple(){
        ctx1.strokeStyle = `rgba(255,255,255,${this.opacity})`;  //color
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //draw circle
        ctx1.stroke() //fill with color
        ctx1.closePath()
    }
    ripple(){
        if(this.radius < 50){
            this.radius += 0.7; //make ripple grow
            this.y -= 0.03 //to keep it centered
            this.x -= 0.03
        }
        if(this.opacity > 0){
            this.opacity -= 0.02;
        }
    }
}


function handleParticles(){
    for(let i = 0 ; i < particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
    }
    if (particlesArray.length > maxParticles){ //removing older particles once we reach max
        for (let i = 0; i < 30; i++){
            particlesArray.pop()
        }
    }
    // if key pressed, plus frog is on road plus not too many particles (we use max +10 so that remove above works)
    if ((keys[37] || keys[38] || keys[39] || keys[40]) && frogger.y > 250 && particlesArray.length < maxParticles+10){
         for(let i = 0; i < 10; i++){
             particlesArray.unshift(new Particle(frogger.x, frogger.y)); //unshift at the beginning of the array
         }
    }
}

function handleRipples(){
    for(let i = 0 ; i < ripplesArray.length; i++){
        ripplesArray[i].ripple()
        ripplesArray[i].drawRipple()
    }
    if (ripplesArray.length > 20){ 
        for (let i = 0; i < 5; i++){
            ripplesArray.pop()
        }
    }
    if ((keys[37] || keys[38] || keys[39] || keys[40]) && frogger.y < 250 && frogger.y > 100){
        for(let i = 0; i < 20; i++){
            ripplesArray.unshift(new Particle(frogger.x, frogger.y));
        }
    }
}