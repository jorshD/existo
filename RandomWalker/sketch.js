let x, y;
let pos, prev;
let res = 2;
let h = 0;


let n1;
let n2;
let n3;
let m;
let a;
let b;
let cicle = 1;

let sliderN;

let xoff1;
let xoff2;

let primero = true;
let cont = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
  // //background(220);
  // n2 = random(50);
  // sliderN = createSlider(0,6,2,0.1);
  // pos = createVector(random(width), random(height));
  // prev = pos.copy();
  //  // a = random(2);
  //  xoff1 = 0;
  //  xoff2 = random(10000);
  // // setTimeout(draw,30000);

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
  // print(xoff1);
  a = noise(xoff1);
  // a = noise(xoff1);
  xoff1 += 0.00000000001;
  xoff2 += 0.00000000001;
  if (xoff1 > 1) {
    xoff1 = 0;
  }
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
//  saveFrames('out', 'png', 1, 125 );
 setTimeout(makeWalker, 30);
// setTimeout(savePicture, 10000);

}

function makeWalker(){
  // n1 = map(noise(h),0.1, 1,0,13);

  let mpos = random(100);
  if (mpos > 90) {
    n1 = map(noise(h),0, 1,0,random(10,100));
  }else {
    n1 = map(noise(h),0, 1,0,random(10,18));
  }
  if (mpos < 15) {
    m = map(noise(h),0, 1,0,random(1000));
  }else {
      m = map(noise(h),0, 1,0,random(18));
  }
  if (mpos < 20) {
      b = map(noise(h),0, 1,0,random(10));
  }else {
      b = map(noise(h),0, 1,0,random(100));
  }

  let rp = random(100);
  let radius;
  if (rp < 2) {
      // radius = map(noise(h),0, 1, 5,40);
      radius = random(60);
  }else {
      // radius = map(noise(h),0, 1, 0,5);
        radius = floor(random(20));
  }

  let total = map(noise(h),0, 1,10,200);
  let inc = TWO_PI / total;

  let colProb = random(100);
  if (colProb < 2) {
    fill(map(noise(h),0,1,0,255), random(20,40),random(10,20),map(noise(h),0,1,0,255));
    strokeWeight(random(35));
    stroke(h, random(1,120));

  }else if (colProb > 99.5) {
    fill(random(140,150),map(noise(h),0,1,0,255),random(5),map(noise(h),0,1,0,255));
    strokeWeight(random(35));
    stroke(h, random(1,120));
  }else {
    let fillop= random(100);
    if (fillop < 10) {
      fill(map(noise(h),0,1,0,255), map(noise(h),0,1,0,255));
      strokeWeight(random(35));
      stroke(h, random(1,220));
    }else {
        fill(random(255), random(255));
        strokeWeight(random(15));
        stroke(h, random(1,120));
    }



  }


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

  h += random(1)/ random(1000);
  if (h > 255) {
    h = random(1)/ random(1000);
  }

  n1 += random(1)/ random(1000);
  if (n1 > 13) {
    n1 = random(1)/ random(1000);
  }

    m += random(1)/ random(1000);
    if (m > 17) {
    m = random(1)/ random(1000);
  }

  prev.set(pos);


  let step = p5.Vector.random2D();

  let mul = random(100);
  if (mul < 2) {
    step.mult(random(300, 800));

  }else {
      step.setMag(random(60));
  }

    pos.add(step);
    pos.x = constrain(pos.x, 0, width);
    pos.y = constrain(pos.y, 0, height);

}

function mousePressed(){
  reset();
}

function reset(){

  setTimeout(reset, random(300000, 180000));
  if (!primero) {
//     savePicture();
  }
  primero = false;
  let bg = floor(random(100));
  if (bg < 30) {
    background(255);
  }else {
    background(0);
  }

  n2 = random(50);
  n3 = random(3);
  // sliderN = createSlider(0,6,2,0.1);
  pos = createVector(random(width), random(height));
  prev = pos.copy();
   // a = random(2);
   xoff1 = random(1);
   xoff2 = random(10000);
}

function savePicture(){

  saveCanvas('simbiosis'+"_"+[cont], 'png');
  cont++;
}
