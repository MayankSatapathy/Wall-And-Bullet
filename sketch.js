var bullet , wall,thickness  ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50, 200, 50, 50);

  speed = random (223,321) ;
  weight = random (400,1500) ;
  thickness = random (22,83);

  bullet.velocityX = speed ;
}

function draw() {
  background(255,255,255); 
  
if(hasCollided(bullet,wall)){
  var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
  if(damage<=280){
    wall.shapeColor = "green";
  }

  if(damage>=280){
    wall.shapeColor = "red";
  }

}

  drawSprites();
}
function hasCollided (lbullet,lwall) 
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
	return true ; 
  }
  return false ; 
  }
 
