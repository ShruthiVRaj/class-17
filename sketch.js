var trex,trexAni;
var edges;
var ground,groundImg,invisibleground;

function preload(){
   trexAni=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg=loadImage("ground2.png");
}

function setup() {
  createCanvas(400, 400);
   trex=createSprite(50,350,30,50);
   trex.addAnimation("running",trexAni);
   trex.scale=0.5;
  
  edges=createEdgeSprites();
  
  ground=createSprite(200,380,400,10);
  ground.addImage(groundImg);
  ground.velocityX=-2;
  
  invisibleground=createSprite(200,385,400,5);
  invisibleground.visible=false;
}

function draw() {
  background(220);
  if(keyDown("space")){
     trex.velocityY=-10; 
  }
  trex.velocityY=trex.velocityY+1;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  trex.collide(invisibleground);
  drawSprites();
}