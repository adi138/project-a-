class Arrow{
    constructor(x, y, w, h){
        this.arrow = Bodies.rectangle(x, y, w, h, {isStatic:true, restitution:0.8, friction:1.0, density:1.0});
        this.x = x;
        this.y = y;
        this.w = w;
        this.y = y;
        this.image = loadImage("./assets/arrow.png");
        World.add(world, this.arrow);
    }

    shoot(archerAngle){
        var velocity = p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.arrow, false);
        Matter.Body.setVelocity(this.arrow, {x:100, y:0});
    }


display(){
    var pos = this.arrow.position;
    var angle = this.arrow.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
}
}
