var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	box1Sprite=createSprite(width/2,height-45,200,20);
	box1Sprite.shapeColor=color(500);
	
	box2Sprite=createSprite(300,610,10,100);
	box2Sprite.shapeColor=color(500);

	box3Sprite=createSprite(500,610,10,100);
	box3Sprite.shapeColor=color(500);


	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(width/2,height-45,200,20,{isStatic:true});
	World.add(world, box);

	box2 = Bodies.rectangle(200,600,10,100,{isStatic:true});
	World.add(world, box);

	box3 = Bodies.rectangle(200,600,10,100,{isStatic:true});
	World.add(world, box);
	 



	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	

  }
}



