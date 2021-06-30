var bomb,bombImg;
var coin,coinImg;
 var energyDrink,energyDrinkImg;
 var path,pathImg;
 var power,powerImg;
 var Runner,RunnerImg;
var b1,b2;
 
 function preload(){
  //pre-load images
RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(350,600);
  //create sprites here
  
path = createSprite(150,500,100,50);
path.addImage(pathImg);
  path.scale=1.5;

  path.velocityY=5;
 
Runner = createSprite(200,500,50,50);
  Runner.addAnimation("Running",RunnerImg);
Runner.scale=0.1;

b1 = createSprite(5,300,10,600);
b1.shapeColor="red";
b1.visible=false;

b2 = createSprite(345,300,10,600);
b2.shapeColor="red";
b2.visible=false;
}

function draw() {
  background(150,150,150);
Runner.x=mouseX;

  if(path.y > 600){
    path.y=height/2;
  }
Runner.collide(b1);
Runner.collide(b2);

  drawSprites() ;
}
