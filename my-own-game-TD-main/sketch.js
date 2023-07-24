
var doodlejump,characterimg
var background,backgroundimg
var obstacle,obstacleimg
var obstaclegroup
var score=0
function preload(){
  characterimg=loadImage("character.png");
  backgroundimg=loadImage('background.jpg');
  obstacleimg=loadImage("obstacle.png");
}

function setup(){
  createCanvas(900,500)
  
  bg=createSprite(450,250,900,500)
  bg.addImage("background",backgroundimg)
  bg.velocityY=3
  bg.scale=3.5
  doodlejump=createSprite(450,400,20,20);
  doodlejump.addImage("character",characterimg);
  doodlejump.scale=0.2;
  //doodlejump.debug=true
doodlejump.setCollider('rectangle',0,0,10,10)

  
 
  obstaclegroup=new Group() 
}

function draw(){
  background(backgroundimg);
 if (bg.y>900){
  bg.y=bg.height/2
 }
  if (keyDown('space')){
    doodlejump.velocityY=-10;

  }
  doodlejump.velocityY+=0.8;
  
  if (keyDown('left')){
    doodlejump.x-=5
  }

  if (keyDown('right')){
    doodlejump.x+=5
  }

 if (obstaclegroup.isTouching(doodlejump)){
  //doodlejump.velocityY=0
  doodlejump.velocityY-=15
  score++
 }


spawnObstacles()
  
drawSprites()
if (doodlejump.y>500){
  doodlejump.velocityY=0;
  textSize(50)
  text('GAME OVER',400,250)
  bg.velocityY=0
  obstaclegroup.destroyEach()
}
textSize(25)
text('SCORE '+score,600,50)
}

function spawnObstacles(){
  if (frameCount%40==0){
    obstacle=createSprite(random(50,900),0)
    obstacle.addImage('obstacle',obstacleimg)
 
    obstaclegroup.add(obstacle)

    obstacle.lifetime=600
    obstacle.velocityY=+3
  }
}