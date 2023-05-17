function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
}

function modelLoaded() {
  console.log('Posenet Is Initialized');
}

function draw() {
}

function take_snapshot(){
  save('myFilterImage.png');
}