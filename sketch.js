
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar1 = new Ground (400, 200, 600, 40)
	ball1 = new Ball(400, 500, 40)
	rope1 = new rope(ball1, bar1, 0, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bar1.display();
  ball1.display();
  drawSprites();
 
}



