
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone, launcher, tree;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 580, 1300, 20);
	stone = new Stone(180, 340, 40);
	launcher = new Launcher(stone.body, {x: 215, y: 410});
	tree = new Tree(width-200, height-260, 250, 500 );
	mango1 = new Mango(1000, 250, 25);
	mango2 = new Mango(1090, 190, 25);
	mango3 = new Mango(1110, 250, 25);
	mango4 = new Mango(1170, 270, 25);
	mango5 = new Mango(1050, 300, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dectectollision(stone, mango1);
  dectectollision(stone, mango2);
  dectectollision(stone, mango3);
  dectectollision(stone, mango4);
  dectectollision(stone, mango5);

  image(boyImage, 200, 330, 200, 300);

  

  ground.display();
  stone.display();
  launcher.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  text("x:"+ mouseX+", y :"+mouseY, mouseX,mouseY);
 
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }

  function mouseReleased() {
      launcher.fly();
      
  }

  function keyPressed(){
	  if (keyCode === 32){
		  Matter.Body.setPosition(stone.body, {x:180, y:340})
		  launcher.attach(stone.body);
	  }
  }

  function dectectollision(lstone, lmango){
	  mangoBodyPosition = lmango.body.position;
	  stoneBodyPosition = lstone.body.position;
	  
	  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	  if(distance <= lmango.radius + lstone.radius){
		  Matter.Body.setStatic(lmango.body,false);
	  }
  }