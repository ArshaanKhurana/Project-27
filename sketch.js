
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(350, 100, 300, 30);
	

	//Create the Bodies Here.

	bob1 = new Bob(250, 300);
	bob2 = new Bob(300, 300);
	bob3 = new Bob(350, 300);
	bob4 = new Bob(400, 300);
	bob5 = new Bob(450, 300);

	rope1 = new Rope(bob1.body, roof1.body, -100, 0);


	rope2 = new Rope(bob2.body, roof1.body, -50, 0);


	rope3 = new Rope(bob3.body, roof1.body, -0, 0);


	rope4 = new Rope(bob4.body, roof1.body, 50, 0);
	rope5 = new Rope(bob5.body, roof1.body, 100, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof1.display();
	drawSprites();

}

function keyPressed() {
	if(keyCode===38){
	   Matter.Body.applyForce(bob5.body,bob5.body.position,{x:500,y:-500})
	}
   }



