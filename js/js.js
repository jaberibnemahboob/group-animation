//GENERAL VARIABLE
let frames = document.querySelectorAll(".frame");


//FRAME #1 VARIABLE


//FRAME #2 VARIABLE


//FRAME #3 VARIABLE


//FRAME #4 VARIABLE


//FRAME #5 VARIABLE


//GENRAL FUNCTIONS/CONTROL
function hideCurrentFrame(){
    frames.forEach(removeCurrentFrameClass);
}
function removeCurrentFrameClass(frameItem, index){
    if(index != 0) frameItem.classList.remove("currentFrame");
}
function toggleSound(){
}
function toggleSoundBtn(soundBtnItem){
}
// backgroundsound.addEventListener("ended",startBackgroundSoundAgain);
function startBackgroundSoundAgain(){
    //backgroundsound.currentTime = 1;
    //backgroundsound.play();
}


//FRAME #1 ANIMATION CONTROL


//FRAME #2 ANIMATION CONTROL


//FRAME #3 ANIMATION CONTROL


//FRAME #4 ANIMATION CONTROL


//FRAME #5 ANIMATION CONTROL
