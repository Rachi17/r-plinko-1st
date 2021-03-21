const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particales = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <= width ; k = k + 80) {
    divisions.push(new Division ( k, height - divisionHeight/2, 10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j +50){
    plinko.push(new Plinko (j , 75));
  }
  for (var j = 0; j <=width - 20; j=j + 50){
    plinko.push(new Plinko (j ,175));
  }
  for (var j = 40; j <=width; j=j +50){
    plinko.push(new Plinko (j , 275));
  }
  for (var j = 0; j <=width - 20; j=j +50){
    plinko.push(new Plinko (j , 375));
  }

  ground = new Ground( width/2,height,width,20);

}
function draw() {
  background(255,255,255); 
  
  for (var i = 0; i <plinko.length; i++){
    plinko[i].display();
  }

  if (frameCount%60===0){
    particales.push( new Partical(ramdom(width/2-30,width/2+30),10,10))
  }

  for( var n = 0; n < particales.length; n++){
    particales[n].display();
  }
for ( var w = 0; w < divisions.length; w++){
  divisions[w].display();
}

ground.display();

  drawSprites();
}

+