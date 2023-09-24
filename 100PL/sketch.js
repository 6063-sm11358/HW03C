function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#121212');
}

function draw() {
  fill('#EBEBEB');
  let dim = 30;                             //setting circle diameter value
  let maxCircles = 100;                     //setting max no.of circles to draw
  let circlePosX = [];                      //initializing empty array for storing x-coordinates of circle
  let circlePosY = [];                      //initializing empty array for storing y-coordinates of circle
  randomSeed(2);
  
  stroke(0)
  strokeWeight(1);
  
  for(let i=1;i<=maxCircles;i++)            //looping to generate 100 circles
  {
    xpos = int(random(width));              //generating random x-coordinate for circle, range is 0 to windowWidth-1
    ypos = int(random(height));             //generating random y-coordinate for circle, range is 0 to windowHeight-1  
    ellipse(xpos, ypos, dim);               //drawing circle
    circlePosX.push(xpos);                  //pushing coordinate into array for x-coordinates
    circlePosY.push(ypos);                  //pushing coordinate into array for y-coordinates
  }
  
  stroke('red');
  strokeWeight(1);                          //setting color and weight of connecting lines
  
  for(let i=0;i<circlePosX.length;i++)      //looping for all values in x-coordinates array
  {
    for(let j=0;j<circlePosY.length;j++)    //looping for all values in y-coordinates array
    {
        line(circlePosX[i], circlePosY[i], circlePosX[j], circlePosY[j]);         //drawing lines b/w every single circle
    }
  }
}