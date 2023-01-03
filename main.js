function preload() {
	wrdStart = loadSound("world_start.wav");
	kick = loadSound('kick.wav');
	jump = loadSound('jump.wav');
	dieX = loadSound('mariodie.wav');
	coinsX = loadSound('coin.wav');
	over = loadSound('gameover.wav');
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent('gameconsole');
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log('Model Loaded!');
}
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX = " + noseX +", noseY = " + noseY);
	}
  }
function draw() {
	game()
}






