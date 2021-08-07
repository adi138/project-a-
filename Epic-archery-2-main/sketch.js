const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var computer, computerBase,computerArcher;
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  playerArcher = new PlayerArcher(playerBase.body.position.x+45,playerBase.body.position.y-200, 100, 90);
  computerArcher = new ComputerArcher(computerBase.body.position.x-65, computerBase.body.position.y-245, 100, 90);

  arrow = new Arrow(playerArcher.x, playerArcher.y, 1, 1);

}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  arrow.display();

  if(keyCode === 32){
    arrow.shoot(playerArcher.angle);
    arrow.w = 100;
    arrow.h = 10;
  }
}



