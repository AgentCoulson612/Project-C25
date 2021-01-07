const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let paper, ground, a, b, c, bi;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(width/6, 630, 70)
    ground = new Ground(width/2, height - 50, width, 10);
    a = new Bin(5 * width / 6, height - 60, 150, 10);
    b = new Bin(a.body.position.x + 70, height - 135, 10, 150);
    c = new Bin(a.body.position.x - 70, height - 135, 10, 150);
    bi = new BinImg(5 * width / 6, height - 60, 150, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  paper.display()
  ground.display();
  bi.display();
  drawSprites();
  if (keyDown('W')) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 0, y : -50})
  }
  if (keyDown('A')) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x : -10, y : 0})
  }
  if (keyDown('D')) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 10, y : 0})
  }
}



