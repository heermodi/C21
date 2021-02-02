var fixedRect, movingRect, gameObject1,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,80)
  gameObject2 = createSprite(200,100,50,80)
  gameObject3 = createSprite(300,100,50,80)
  gameObject4 = createSprite(400,100,50,80)
 
  gameObject1.shapeColor = "blue"
  gameObject2.shapeColor = "purple"
  gameObject3.shapeColor = "orange"
  gameObject4.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 if (isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 }
 else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
 
  drawSprites();
}
