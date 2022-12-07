function setup()
{
  canvas = createCanvas(500,500);
  canvas.position(750,100);
  video = createCapture(500,500);
  video.position(100,100);
  poseNet = ml5.poseNet(video,modalLoaded);
  poseNet.on('pose',gotPoses);
}

function preload()
{

}


function draw()
{
  background('0,0,0');
}

function modalLoaded()
{
    console.log("PoseNet is initialised");

}


function gotPoses(results)
{
   if(results.length>0)
   {
    console.log(results);
   }
}