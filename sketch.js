
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject;
var binside1, binside2, binside3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,680,800,20);

	binside1 = new Dustbin(700,660,150,10)
	binside2 = new Dustbin(775,615,10,80)
	binside3 = new Dustbin(625,615,10,80)

	paperObject = new Paper (50 , 645 , 25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("lightblue");

  keyPressed();

  drawSprites();

  binside1.display();
  binside2.display();
  binside3.display();
  ground.display();
  paperObject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}
