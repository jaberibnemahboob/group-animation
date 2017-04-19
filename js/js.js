//GENERAL VARIABLE
let frames = document.querySelectorAll(".frame");
let backgroundsound = document.querySelector(".background_sound");
let backgroundsound2 = document.querySelector(".background_sound2");
let jarofliessound = document.querySelector(".jar_of_lies_sound");
let boomsound = document.querySelector(".boom_sound");


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
let frame5 = document.querySelector(".frame5");
let frame5_dragable_elements = document.querySelectorAll(".frame5 .dragdrop");
let frame5_easter_eggs = document.querySelectorAll(".frame5 .eastereggs");
let frame5_drop_count = 0;
let frame5_drop_target_index = -1;
let frame5_bar = document.querySelector(".frame5 .element_bar");
let frame5_bar_display = document.querySelector(".frame5 .element_bar_display");
let frame5_target_dropbox = document.querySelector(".frame5 .dropbox");


//FRAME #6 VARIABLE
let frame6 =document.querySelector(".frame6");
let frame6_bomb = document.querySelector(".frame6 .bomb");
let frame6_target_dropbox = document.querySelector(".frame6 .dropbox");



//FRAME #7 VARIABLE
let frame7 =document.querySelector(".frame7");
let frame7_boom = document.querySelector(".frame7 .boombox");



//FRAME #8 VARIABLE
let frame8 =document.querySelector(".frame8");


//GENRAL FUNCTIONS/CONTROL
function hideCurrentFrame(){
    frames.forEach(removeCurrentFrameClass);
}
function removeCurrentFrameClass(frameItem, index){
    frameItem.classList.remove("currentFrame");
}
backgroundsound.addEventListener("ended",startBackgroundSoundAgain);
function startBackgroundSoundAgain(){
    backgroundsound.currentTime = 40;
    backgroundsound.play();
}


//FRAME #1 ANIMATION CONTROL
console.log(frame1_playbtn);
frame1_playbtn.addEventListener("click",goframe2);


//FRAME #2 ANIMATION CONTROL
function goframe2(){
    console.log(frame2);
    hideCurrentFrame();
    frame2.classList.add("currentFrame");
    backgroundsound.play();
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
    jarofliessound.play();
}
jarofliessound.addEventListener("ended",goframe5);


//FRAME #5 ANIMATION CONTROL
function goframe5(){
    console.log(frame5);
    hideCurrentFrame();
    frame5.classList.add("currentFrame");
    console.log(frame5_dragable_elements.length);
    frame5_dragable_elements.forEach(handle_dragdrop);
    frame5_easter_eggs.forEach(handle_eastereggs);
}
frame5_target_dropbox.addEventListener("dragenter",function(event){
    event.preventDefault();
    console.log("dragenter");
},false);
frame5_target_dropbox.addEventListener("drop",function(event){
    console.log("drop => " + "target index: "+frame5_drop_target_index);
    if(frame5_drop_target_index >= 0){
        let thisitem = frame5_dragable_elements[frame5_drop_target_index];
        thisitem.classList.remove("draggingstop");
        thisitem.classList.add("droppintarget");
        //setTimeout(function(){
        //    thisitem.classList.add("frame5_hide");
        //},1000);
        frame5_drop_count = frame5_drop_count + 1;
    }
    if(frame5_drop_count >= 3){
        frame5_bar.classList.add("disappear");
        frame5_bar_display.classList.add("disappear");
        frame5_bar_display.addEventListener("animationend",goframe6);
    }
},false);
frame5_target_dropbox.addEventListener("dragover",function(event){
    event.preventDefault();
    console.log("dragover");
},false);
function handle_dragdrop(item, index){
    item.addEventListener("dragstart",function(){
        console.log("dragstart");
        item.style.opacity = '0.6';
        item.classList.remove("draggingstop");
        item.classList.add("draggingstart");
        frame5_drop_target_index = index;
    },false);
    item.addEventListener("dragend",function(){
        console.log("dragend");
        item.style.opacity = '1';
        item.classList.remove("draggingstart");
        item.classList.add("draggingstop");
        frame5_drop_target_index = -1;
    },false);
}
function handle_eastereggs(item, index){
    item.addEventListener("click",function(){
        item.classList.add("eastereggsdisappears");
        item.addEventListener("animationend",function(){
            item.classList.remove("frame5_show");
            item.classList.add("frame5_hide");
        })
        if(index < 2){ //largest index is 2
            let newItem = frame5_easter_eggs[(index+1)];
            newItem.classList.remove("frame5_hide");
            newItem.classList.add("frame5_show");
            newItem.classList.add("eastereggsappears");
        }
    });
}


//FRAME #6 ANIMATION CONTROL
function goframe6(){
    console.log(frame6);
    hideCurrentFrame();
    frame6.classList.add("currentFrame");
    frame6_bomb.addEventListener("dragstart",function(){
        console.log("dragstart");
        frame6_bomb.style.opacity = '0.6';
        frame6_bomb.classList.remove("draggingstop");
        frame6_bomb.classList.add("draggingstart");
    });
    frame6_bomb.addEventListener("dragend",function(){
        console.log("dragend");
        frame6_bomb.style.opacity = '1';
        frame6_bomb.classList.remove("draggingstart");
        frame6_bomb.classList.add("draggingstop")
    })
}
frame6_target_dropbox.addEventListener("dragenter",function(event){
    event.preventDefault();
    console.log("dragenter");
},false);
frame6_target_dropbox.addEventListener("drop",function(event){
    frame6_bomb.classList.remove("draggingstop");
    frame6_bomb.classList.add("droppintarget");
    frame6_bomb.addEventListener("animationend",goframe7);
},false);
frame6_target_dropbox.addEventListener("dragover",function(event){
    event.preventDefault();
    console.log("dragover");
},false);


//FRAME #7 ANIMATION CONTROL
function goframe7(){
    console.log(frame7);
    hideCurrentFrame();
    frame7.classList.add("currentFrame");
    //change sound
    backgroundsound.pause();
    backgroundsound.currentTime = 40;
    backgroundsound2.play();

    setTimeout(function(){boomsound.play()}, 10);

    frame7_boom.addEventListener("animationend",setTimeout(function(){
        console.log("?");
        goframe8();
    }, 2000));
}


//FRAME #8 ANIMATION CONTROL
function goframe8(){
    console.log(frame8);
    hideCurrentFrame();
    frame8.classList.add("currentFrame");
}






