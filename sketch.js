const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var c1, c2, c3, c4, c5;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600, 450, 350, 30);

	bob1 = new Bob(480, 600, 30);
	bob2 = new Bob(540, 600, 30);
	bob3 = new Bob(600, 600, 30);
	bob4 = new Bob(660, 600, 30);
	bob5 = new Bob(720, 600, 30);


	c1 = new Rope(bob1.body, roof.body, -120, 0);
	c2 = new Rope(bob2.body, roof.body, -60, 0);
	c3 = new Rope(bob3.body, roof.body, 0, 0);
	c4 = new Rope(bob4.body, roof.body, 60, 0);
	c5= new Rope(bob5.body, roof.body, 120, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  textSize(30);
  fill("yellow")
  text("NEWTON'S CRADLE!!!", 500, 200);

  text("PRESS UP ARROW KEY TO START IT!!", 10, 850)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -30, y: - 30})
	}
}







