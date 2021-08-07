 class PlayerArcher{
     constructor(x,y,w,h){
        this.archer = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world,this.archer);

        Matter.Body.setAngle(this.archer, PI*2);
     }

         display(){
         var pos = this.archer.position;
         var angle = this.archer.angle;

        if(keyIsDown(DOWN_ARROW)){
            angle += 0.01;
            Matter.Body.setAngle(this.archer, angle);
        }

        if(keyIsDown(UP_ARROW)){
            angle -= 0.01;
            Matter.Body.setAngle(this.archer, angle);
        }

         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.w,this.h);
         pop();
     }
 }