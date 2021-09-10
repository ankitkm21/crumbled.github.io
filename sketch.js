const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

var btn1;
var ground;

var engine;
var  world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	btn1 = createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.3
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	

	var options={
  
   isStatic:true,

	};

	ground=Bodies.rectangle(width/2,690,1600,20,options);
	World.add(world,ground);


	groundObj=new GroundObj(1225,650,270,20);
	leftSide = new GroundObj(1100,600,20,120);
	rightSide = new GroundObj(1350,600,20,120);
    	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 

  groundObj.display();
 
  leftSide.display(); 
  
  rightSide.display();




   fill("orange");
  ellipse(ball.position.x,ball.position.y,radius,radius);


  fill("brown");
  rect(ground.position.x,ground.position.y,1600,20);
  
    
  
}

	  
function hForce()
{
    console.log("this is hforce ");
	Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:60});
}
