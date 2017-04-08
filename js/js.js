//GENERAL VARIABLE
let frames = document.querySelectorAll(".frame");
let backgroundsound = document.querySelector(".background_sound");


//FRAME #1 VARIABLE
let frame1_playbtn = document.querySelector(".frame1 .playbutton");


//FRAME #2 VARIABLE
let frame2 = document.querySelector(".frame2");
let frame2_char_piggy = document.querySelector(".frame2 .character_piggy");


//FRAME #3 VARIABLE
let frame3 = document.querySelector(".frame3");
let frame3_char_poohtin = document.querySelector(".frame3 .character_pooh");


//FRAME #4 VARIABLE
let frame4 = document.querySelector(".frame4");


//FRAME #5 VARIABLE


//GENRAL FUNCTIONS/CONTROL
function hideCurrentFrame(){
    frames.forEach(removeCurrentFrameClass);
}
function removeCurrentFrameClass(frameItem, index){
    frameItem.classList.remove("currentFrame");
}
backgroundsound.addEventListener("ended",startBackgroundSoundAgain);
function startBackgroundSoundAgain(){
    backgroundsound.currentTime = 1;
    backgroundsound.play();
}
backgroundsound.play();


//FRAME #1 ANIMATION CONTROL
console.log(frame1_playbtn);
frame1_playbtn.addEventListener("click",goframe2);


//FRAME #2 ANIMATION CONTROL
function goframe2(){
    console.log(frame2);
    hideCurrentFrame();
    frame2.classList.add("currentFrame");
}
frame2_char_piggy.addEventListener("animationend",goframe3);


//FRAME #3 ANIMATION CONTROL
function goframe3(){
    console.log(frame3);
    hideCurrentFrame();
    frame3.classList.add("currentFrame");
}
frame3_char_poohtin.addEventListener("animationend",goframe4);


//FRAME #4 ANIMATION CONTROL
function goframe4(){
    console.log(frame4);
    hideCurrentFrame();
    frame4.classList.add("currentFrame");
}


//FRAME #5 ANIMATION CONTROL
