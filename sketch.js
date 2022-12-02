var song;
var sliderRate;
var sliderPan;
var button;
var jumpButton;
var amp;

function setup()
{   
    createCanvas(200,200);
    song = loadSound('Key Villain.mp3',loaded);
    // song.setVolume(0.5);
    // sliderRate=createSlider(0,1.5,1,0.01);
    // sliderPan=createSlider(-1,1,0,0.01);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    // jumpButton = createButton('jump');
    // jumpButton.mousePressed(jumpSong);
    amp = new p5.Amplitude();
    background(51);

    // song.addCue(2,changeBackground, color(0,0,255));
    // song.addCue(4,changeBackground,color(0,255,255));
    // song.addCue(6,changeBackground, color(255,255,255));

}
// function changeBackground(col){
//     background(col);
// }
// function jumpSong(){
//     var len = song.duration();
//     var t=0;
//     console.log(t);
//     song.jump(t);

// }

function draw(){
    // // background(random(255));
    // song.pan(sliderPan.value());
    // song.rate(sliderRate.value());

    background(51);

    var vol = amp.getLevel();
    var diam=map(vol,0,0.3,10,200);

    fill(255,0,255);
    ellipse(width/2,height/2,diam,diam);
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    }
    else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}