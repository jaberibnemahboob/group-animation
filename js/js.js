//GENERAL VARIABLE
let frames = document.querySelectorAll(".frame");

let frame1 = document.querySelector(".frame1");
let frame2 = document.querySelector(".frame2");
let frame3 = document.querySelector(".frame3");
let frame4 = document.querySelector(".frame4");
let frame5 = document.querySelector(".frame5");
let frame6 = document.querySelector(".frame6");
let frame7 = document.querySelector(".frame7");
let frame8 = document.querySelector(".frame8");

let backgroundsound = document.querySelector(".background_sound");
let backgroundsound2 = document.querySelector(".background_sound2");
let jarofliessound = document.querySelector(".jar_of_lies_sound");
let boomsound = document.querySelector(".boom_sound");
let eastereggssound = document.querySelector(".eastereggssound");


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


//FRAME CONTROL #1
function goframe1(){
    let frame1_playbtn = document.querySelector(".frame1 .playbutton");
    hideCurrentFrame(); frame1.classList.add("currentFrame");
    frame1_playbtn.addEventListener("click",goframe2);
}
//FRAME CONTROL #2
function goframe2(){
    let frame2_char_piggy = document.querySelector(".frame2 .character_piggy");
    hideCurrentFrame(); frame2.classList.add("currentFrame");
    backgroundsound.currentTime = 0; backgroundsound.play();
    backgroundsound2.currentTime = 0; backgroundsound2.pause();
    frame2_char_piggy.addEventListener("animationend",goframe3);
}
//FRAME CONTROL #3
function goframe3(){
    let frame3_char_poohtin = document.querySelector(".frame3 .character_pooh");
    hideCurrentFrame(); frame3.classList.add("currentFrame");
    frame3_char_poohtin.addEventListener("animationend",goframe4);
}
//FRAME CONTROL #4
function goframe4(){
    let frame4_background = document.querySelector(".frame4 .background.newbackground");
    hideCurrentFrame(); frame4.classList.add("currentFrame");
    frame4_background.addEventListener("animationend",goframe5);
}
//FRAME CONTROL #5
function goframe5(){
    //reset html code first
    let hiddencode = document.querySelector(".hiddenframe5");
    frame5.innerHTML = hiddencode.innerHTML;
    //start normal code
    let frame5_dragable_elements = document.querySelectorAll(".frame5 .dragdrop");
    let frame5_easter_eggs = document.querySelectorAll(".frame5 .eastereggs");
    let frame5_drop_count = 0;
    let frame5_drop_target_index = -1;
    let frame5_bar = document.querySelector(".frame5 .element_bar");
    let frame5_bar_display = document.querySelector(".frame5 .element_bar_display");
    let frame5_target_dropbox = document.querySelector(".frame5 .dropbox");

    hideCurrentFrame(); frame5.classList.add("currentFrame");

    frame5_target_dropbox.addEventListener("click",function(){
        jarofliessound.currentTime = 0; jarofliessound.play();
    });

    frame5_dragable_elements.forEach(handle_dragdrop);
    frame5_easter_eggs.forEach(handle_eastereggs);

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
            if(index==2) {
                eastereggssound.currentTime = 0; eastereggssound.play();
            }
            item.classList.add("eastereggsdisappears");
            item.addEventListener("animationend",function(){
                item.classList.remove("frame5_show");
                item.classList.add("frame5_hide");
            });
            if(index < 2){ //largest index is 2
                let newItem = frame5_easter_eggs[(index+1)];
                newItem.classList.remove("frame5_hide");
                newItem.classList.add("frame5_show");
                newItem.classList.add("eastereggsappears");
            }
        });
    }

    frame5_target_dropbox.addEventListener("dragenter",function(event){event.preventDefault();},false);
    frame5_target_dropbox.addEventListener("dragover",function(event){event.preventDefault();},false);
    frame5_target_dropbox.addEventListener("drop",function(event){
        console.log("drop => " + "target index: "+frame5_drop_target_index);
        if(frame5_drop_target_index >= 0){
            let thisitem = frame5_dragable_elements[frame5_drop_target_index];
            thisitem.classList.remove("draggingstop");
            thisitem.classList.add("droppintarget");
            frame5_drop_count = frame5_drop_count + 1;
        }
        if(frame5_drop_count >= 3){
            frame5_bar.classList.add("disappear");
            frame5_bar_display.classList.add("disappear");
            frame5_bar_display.addEventListener("animationend",goframe6);
        }
    },false);
}
//FRAME CONTRON #6
function goframe6(){
    //reset html code first
    let hiddencode = document.querySelector(".hiddenframe6");
    frame6.innerHTML = hiddencode.innerHTML;
    //start normal code
    let frame6_bomb = document.querySelector(".frame6 .bomb");
    let frame6_target_dropbox = document.querySelector(".frame6 .dropbox");

    hideCurrentFrame(); frame6.classList.add("currentFrame");

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
    });

    frame6_target_dropbox.addEventListener("dragenter",function(event){event.preventDefault();},false);
    frame6_target_dropbox.addEventListener("dragover",function(event){event.preventDefault();},false);
    frame6_target_dropbox.addEventListener("drop",function(event){
        frame6_bomb.classList.remove("draggingstop");
        frame6_bomb.classList.add("droppintarget");
        frame6_bomb.addEventListener("animationend",goframe7);
    },false);
}
//FRAME CONTROL #7
function goframe7(){
    let frame7_boom = document.querySelector(".frame7 .boombox");
    hideCurrentFrame();
    frame7.classList.add("currentFrame");
    backgroundsound.currentTime = 0; backgroundsound.pause();
    backgroundsound2.currentTime = 0; backgroundsound2.play();
    setTimeout(function(){boomsound.play()}, 10);
    frame7_boom.addEventListener("animationend",setTimeout(function(){goframe8();}, 2000));
}
//FRAME CONTROL #8
function goframe8(){
    let frame8_restart_btn = document.querySelector(".frame8 .restart_btn");
    hideCurrentFrame(); frame8.classList.add("currentFrame");
    frame8_restart_btn.addEventListener("click",goframe2);
}




//RUN THE ANIMATION FROM FRAME 1
goframe4();
