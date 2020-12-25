
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 

var box1, box2, box3, box4, box5, box6, box7, box8, box9, wrecker, rope, ground, roof;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400, 400, 800, 20)
  roof = new Ground(400, 0, 400, 50)
  box1 = new Box(500, 370, 40, 60)
  box2 = new Box(520, 370, 40, 60)
  box3 = new Box(540, 370, 40, 60)
  box4 = new Box(500, 330, 40, 60)
  box5 = new Box(520, 330, 40, 60)
  box6 = new Box(540, 330, 40, 60)
  box7 = new Box(500, 300, 40, 60)
  box8 = new Box(520, 300, 40, 60)
  box9 = new Box(540, 300, 40, 60)
  wrecker = new Wrecker(350, 300, 50)
  rope = new Rope(wrecker.body,roof.body,-40,0)
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  wrecker.display();
  rope.display();
}
  function keyPressed(){
  if(keyCode === UP_ARROW)
    Matter.Body.applyForce(wrecker.body,wrecker.body.position,{x:-500,y:-490});
  
  }