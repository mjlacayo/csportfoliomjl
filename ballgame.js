var pBall = {
    radius: 5,
    bcolor: "white",
    x: 500,
    y:50,
    draw: function (){
        fill((this.bcolor))
        ellipse(this.x, this.y, 80, 80);
    }
    
}


function setup(){
    
    createCanvas(1000, 1000);
   
}


function draw(){
    background("grey");
    pBall.draw()
}