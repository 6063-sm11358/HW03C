function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#121212');
}

function draw() {
  fill('#EBEBEB');
  noStroke();
  let dim = 10;
  let maxCircles = 1000;
  randomSeed(2);
  for(let i=1;i<=maxCircles;i++)
  {
    ellipse(random(width), random(height), dim);
  }
}
