const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];

var random1 = 0;
var raindrop1;
var r1;

function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  r1 = new Raindrops();
  raindrops.push(r1);
  r1.body.velocity.y = 100;
  console.log(r1.body.velocity.y);

  

  
}

function draw()
{
  background("white");  
  Engine.update(engine);
  //console.log(raindrops);
  var rain = new Raindrops();
  raindrops.push(rain);

  var sign = new Sign();
  raindrops.push(sign);
  console.log(raindrops.length)
  for(var i = 0; i < raindrops.length; i=i+1)
  {
    raindrops[i].display();

    if (raindrops[i].isOut()){
      console.log("hello");
      World.remove(world,raindrops[i].body);
      raindrops.splice(i,1);
      i--;
     
    }
    //console.log(raindrops[i].body.speed);

  }

  
  drawSprites();
}