const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Drops = []
var maxDrops = 100;
function preload(){
    
}

function setup(){
   createCanvas(400, 1000);

   engine = Engine.create();
   world = engine.world;
   if(frameCount%150 === 0){
   for(var i = 0; i < maxDrops; i++){
    Drops.push(new drops(random(0, 400), random(0, 400)));
   }
}
}

function draw(){
    Engine.update(engine);
    background(0,0,0);
  

        for(var i = 0; i < maxDrops; i++){
          Drops[i].showDrop();
          Drops[i].display();
        }

}   

