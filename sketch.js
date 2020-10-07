var ball,img,paddle,imgs;
function preload() {
  /* preload your images here of the ball and the paddle */
  img=loadImage("ball.png");
  imgs=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(200,200,20,20);
  ball.scale=0.5;
  paddle=createSprite(380,200,10,70)
  /* assign the images to the sprites */
  ball.addImage(img);
  paddle.addImage(imgs);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=-15;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);


 /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle,explosion);
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges);
  /*make paddle move covering 20 pixels*/
  if(keyDown(UP_ARROW)){

     paddle.y=paddle.y-20;
     
     }

  if(keyDown(DOWN_ARROW)){
   
     paddle.y=paddle.y+20; 
    
}
  
  drawSprites();
  
}
/*make the ball go in different places when hitting the paddle and make the pattern less predictable*/
function explosion() {
  ball.velocityY=random(-15,15);
}


