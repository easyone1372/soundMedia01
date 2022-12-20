let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let vol = 0.5;
let amp;
let music;
var sliderRate;

function setup()
{
    createCanvas(640, 480);
    background(255,255,255);
    ellipseMode(CENTER);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('Key Villain', loadMusic);
    musicFile2 = loadSound('Dont Call Me', loadMusic);

    //볼륨 조절 슬라이드
    text('볼륨',50,450,20,30);
    volume = createSlider(0,1,vol,0.01);
    //재생 속도
    text('재생 속도', 180,450,100,30);
    sliderRate = createSlider(0,3,1,0.01); 

    //음악 플레이 버튼
    button = createButton("play");
    button.position(320,300);
    button.mousePressed(togglePlaying1);

    //음악 전환 버튼
    button2 = createButton("Music1");
    button2.position(250,300);
    button2.mousePressed(togglePlaying2);
    music = 1;

    //음악 처음으로 돌아가는 버튼
    button3 = createButton("처음으로");
    button3.position(120,330);
    button3.mousePressed(togglePlaying3);

    //음악 뒤로 10초 돌아가는 버튼
    button4 = createButton("10초 뒤로");
    button4.position(195,330);
    button4.mousePressed(togglePlaying4);
    
    //음악 중간으로 점프
    button5 = createButton("곡의 중간으로");
    button5.position(275,330);
    button5.mousePressed(togglePlaying5);

   //음악 앞으로 10초 점프하는 버튼
    button6 = createButton("10초 앞으로");
    button6.position(380,330);
    button6.mousePressed(togglePlaying6);

    //랜덤 점프
    button7 = createButton("랜덤 점프");
    button7.position(475,330);
    button7.mousePressed(togglePlaying7);

    amp = new p5.Amplitude();
}

//음악 플레이 버튼
function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

 //음악 1/2 전환 버튼
function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(music);
}

 //처음으로 돌아가는 버튼
function togglePlaying3(){
    if(music ==1){
        musicFile.jump(0);     
    }
    else{
        musicFile2.jump(0);  
    }
}

 //10초 뒤로 돌아가는 버튼
function togglePlaying4(){
    var cTime = musicFile.currentTime();
    var cTime2 = musicFile2.currentTime();
    if(music ==1){
        musicFile.jump(cTime-10);
    }
    else{
        musicFile2.jump(cTime2-10);
    }
}

 //음악 중간으로 점프하는 버튼
function togglePlaying5(){
    var len;
    var len2;
    len = musicFile.duration();
    len2 = musicFile2.duration();
    if(music == 1){
        musicFile.jump(len/2);
    }
    else{
        musicFile2.jump(len2/2);
    }
}

//10초 앞으로 점프하는 버튼
function togglePlaying6(){
    var cTime = musicFile.currentTime();
    var cTime2 = musicFile2.currentTime();
    if(music ==1){
        musicFile.jump(cTime+10);
    }
    else{
        musicFile2.jump(cTime2+10);
    }
}

//음악 랜덤으로 점프하는 버튼
function togglePlaying7(){
    var len = musicFile.duration();
    var len2 = musicFile2.duration();
    var t = random(len);
    var t2 = random(len2);
    if(music ==1){
        musicFile.jump(t);
        console.log(t);
    }
    else{
        musicFile2.jump(t2);
        console.log(t2);
    }
}

function loadMusic()
{
    console.log("It's Working");
}

function draw(){
    // console.log(amp.getLevel(), musicFile.duration());
    var cTime = musicFile.currentTime();
    var cTime2 = musicFile2.currentTime();
    noStroke();
    fill(255,255,255);
    rect(0,465,640,15);
   
    if(music==1){
        if(cTime*10<=255){
            fill(255,0,cTime*10);
            rect(160,0,320,290);
        }
        if(cTime*10>=255){
            fill(cTime*2,0,255);
            rect(160,0,320,290);
        }
        musicFile.setVolume(volume.value());    //볼륨조절
        musicFile.rate(sliderRate.value()); //속도 조절
        fill(255, 0, 0);
        rect(0,465,musicFile.currentTime()*3,15);

        stroke(255,255,255);
        strokeWeight(1);
        fill(0,0,0);
        ellipse(320,145,150,amp.getLevel()*100);
    }
    if(music==2){
        if(cTime2*10<=255){
            fill(cTime2*10,0,255);
            rect(160,0,320,290);
        }
        if(cTime2*10>=255){
            fill(0,cTime2*2,150);
            rect(160,0,320,290);
        }
        musicFile2.setVolume(volume.value());
        musicFile2.rate(sliderRate.value());
        fill(0,0,255);
        rect(20,465,musicFile2.currentTime()*3,15);

        stroke(0,0,0);
        strokeWeight(1);
        fill(255,255,255);
        rect(220,72.5,80,amp.getLevel()*100);

        stroke(0,0,0);
        strokeWeight(2);
        fill(0,0,0);
        ellipse(320,145,amp.getLevel()*250,amp.getLevel()*250);
        stroke(255,0,0);
        strokeWeight(3);
        fill(255,255,0);
        rect(300,145,amp.getLevel()*350,120);
    }
    // ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000, 20, 20);

}