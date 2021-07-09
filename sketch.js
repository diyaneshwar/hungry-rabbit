var garden,rabbit;
var gardenImg,rabbitImg,appleImg;
var leaf,leafImg,leafImg2;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg=loadImage("redimage.png");
  leafImg2=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(keyDown("left")){
   rabbit.x=rabbit.x-10
  }
  if(keyDown("right")){
    rabbit.x=rabbit.x+10
   }
   rabbit.x=World.mouseX
  

  if (frameCount%30===0){
    Spawn_leaf();
    Spawn_apple();
  }
  drawSprites()
}


function Spawn_leaf(){

 
    var leaf = createSprite(random(50,350),0,10,40)
    leaf.velocityY=4;
    leaf.scale=0.06;
    leaf.lifetime=150
    var rand=Math.round(random(1,2))
    switch (rand){
    case 1 :leaf.addImage(leafImg);
    break;
  
    case 2 :leaf.addImage(leafImg2);
    break;
    
    default:break
    }
  }
  function Spawn_apple(){

    var apple = createSprite(random(50,350),0,10,10)
    apple.velocityY=4;
    apple.scale=0.06;
    apple.lifetime=150;
    apple.addImage(appleImg);

  }

