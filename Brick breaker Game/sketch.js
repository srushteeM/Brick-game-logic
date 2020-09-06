var ball,paddle,brick1,brickGroup;

function setup(){
  createCanvas(800,600);

  paddle=createSprite(400,560,80,20);
  paddle.shapeColor="blue";

  ball=createSprite(400,400,20,20);
  ball.shapeColor="yellow";

  brickGroup= new Group();
  for(var i=50;i<750;i+=50){
    brick1=createSprite(i,50,40,20);
    brick1.shapeColor="red"
    brickGroup.add(brick1);
  }
}
function draw(){
  background(0);

  paddle.x=mouseX;

  //serve the ball
  if(keyDown("space")){
    ball.velocityX=-3;
    ball.velocityY=5;
  }

  ball.bounceOff(paddle);

  for(var i=0;i<brickGroup.length;i++){
    if(brickGroup.get(i)!=null&& ball.isTouching(brickGroup.get(i))){
      brickGroup.get(i).destroy();
    }
  }
  drawSprites();
}

