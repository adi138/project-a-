class ComputerArcher{
    constructor(x,y,w,h){
        this.cArcher = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/computerArcher.png");
        World.add(world, this.cArcher);
        
        Matter.Body.setAngle(this.cArcher, PI*2);
    }

    display(){
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}