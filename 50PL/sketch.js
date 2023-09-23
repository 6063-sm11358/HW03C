function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#121212');
}

function draw() {
  fill('#EBEBEB');
  let dim = 30;
  let maxCircles = 50;
  let circlePosX = [];
  let circlePosY = [];
  randomSeed(2);
  
  stroke(0)
  strokeWeight(1);
  for(let i=1;i<=maxCircles;i++)
  {
    xpos = int(random(width));
    ypos = int(random(height));
    ellipse(xpos, ypos, dim);
    circlePosX.push(xpos);
    circlePosY.push(ypos);
  }
  
  stroke('red');
  strokeWeight(1);
  for(let i=0;i<circlePosX.length;i++)
  {
    for(let j=0;j<circlePosY.length;j++)
    {
      if((j+1)>=circlePosX.length)
      {
        break;
      }
      else
      {
        line(circlePosX[i], circlePosY[i], circlePosX[j], circlePosY[j]);
      }
    }
  }
}