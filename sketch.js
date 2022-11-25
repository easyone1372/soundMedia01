let musicFile;
function setup()
{
    soundFormate('mp3','ogg')
    musicFile= loadSound('Shinee Dont Call Me',loadMusic);
}

function loadMusic(){
    musicFile.play();
}

function draw(){
    fill(255,0,0);
    ellise(50,50,100,100);
}