class boat{
    constructor(x,y,width,hieght,boatpos,boatanimation){
        var options = {
    isStatic:true,
    restitution: 0.8,
      friction: 1.0,
      density: 1.0,
        };
        
        this.speed = 0.05
        this.animations = boatanimation
        this.boatposition = boatpos
        this.body = Bodies.rectangle(x,y,width,hieght,options)
        this.width = width
        this.hieght = hieght
        this.image = loadImage("./assets/boat.png");
        World.add(world,this.body)

    }

animations(){
    this.speed = +3
}

// remove(index){
    
// }
display(){
 // angle = this.body.angle
//rect(this.body.position.x,this.body.position.y,this.width,this.hieght)

var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.hieght);
    pop();
   // scale(0.5)


}





}