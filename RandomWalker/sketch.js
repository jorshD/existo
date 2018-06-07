let x, y;
let pos, prev;
let res = 2;
let h = 0;


let n1;
let n2 = 0.9;
let n3 = 2;
let m;
let a = 0.4;
let b;
let cicle = 1;

let sliderN;

function setup() {
  createCanvas(1920, 1210);
  //background(220);
  //sliderN = createSlider(0,6,2,0.1);
  pos = createVector(1920/2, 1210/2);
  prev = pos.copy();
  setTimeout(draw,30000);

}

function sgn(val){
if (val > 0) {
  return 1;
}else if (val < 0) {
  return -1;
}else {
  return 0;
}
}

function superShape(theta){
  let part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  }

  return (1 / part3);
}

function draw() {
//saveFrames('out', 'png', 1, 125 );
setTimeout(makeWalker, 3000);

}

function makeWalker(){
  n1 = floor(random(1,6));
  m = 3;
  b = floor(random(1,3));

  let radius = random(3, 35);
  let total = 200;
  let inc = TWO_PI / total;

  fill(random(h), random(1, 120));
  strokeWeight(random(5));
  stroke(h, random(1,120));

  push();
  translate(pos.x, pos.y);
  beginShape();
  for (let angle = 0; angle < TWO_PI*2; angle+= inc) {
    let r = superShape(angle);
    let x = radius * r * cos(angle);
    let y = radius * r * sin(angle);

    vertex(x, y);
  }
  rotate(random(TWO_PI));
  endShape(CLOSE);
  pop();

  h += 0.1;
  if (h > 255) {
    h = 0;
  }

  prev.set(pos);


  let step = p5.Vector.random2D();

  let mul = random(100);
  if (mul < 2) {
    step.mult(random(20, 260));

  }else {
      step.setMag(random(60));
  }

    pos.add(step);
    pos.x = constrain(pos.x, 0, width);
    pos.y = constrain(pos.y, 0, height);

}

function mousePressed(){
  //saveCanvas('RW01', 'png');
}
