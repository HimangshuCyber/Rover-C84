canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10

//onload background in html (helps to load images)
function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = background_image;

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = rover_image
}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImageTag,rover_x,rover_y,rover_width,rover_height);
}
//keypresses
window.addEventListener("keydown", detect_key_down);

function detect_key_down(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == '87'){
        //up()
        console.log('up')
    }
    if(keypress == '65'){
        //left()
        console.log('left')
    }
    if(keypress == '83'){
        //down
        console.log('down')
    }
    if(keypress == '68'){
        //right
        console.log('right')
    }
    //Work for today done
    //Keypress events loaded
    //Tommorow is the real show
}
