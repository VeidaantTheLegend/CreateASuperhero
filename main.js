var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30
player_X = 10;
player_Y = 10;

var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_Y,
        left:player_X
        });
        canvas.add(player_object);
    })

}

function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_Y,
        left:player_X
        });
        canvas.add(block_image_object);
    })

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift key pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width +10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift key pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }


    if(keyPressed == '72'){
        new_image('ironman_head.PNG');
        console.log("Head");
    }
    if(keyPressed == '66'){
        new_image('spiderman_body.PNG');
        console.log("Body");
    }
    if(keyPressed == '88'){
        new_image('thor_leg_left.PNG');
        console.log("Left Leg");
    }
    if(keyPressed == '87'){
        new_image('hulk_leg_right.PNG');
        console.log("Right Leg");
    }
    if(keyPressed == '82'){
        new_image('ca_hand_right.PNG');
        console.log("Right Hand");
    }
    if(keyPressed == '76'){
        new_image('antman_hand_left.PNG');
        console.log("yellow wall");
    }
}

function up(){
    if (player_Y >=0){
        player_Y = player_Y - block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When up key is pressed, X = " + player_X + "Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_Y <=550){
        player_Y = player_Y + block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When down key is pressed, X = " + player_X + "Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_X >=0){
        player_X = player_X - block_image_width;
        console.log("block image width" + block_image_width);
        console.log("When left key is pressed, X = " + player_X + "Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_X <=900){
        player_X = player_X + block_image_width;
        console.log("block image width" + block_image_width);
        console.log("When right key is pressed, X = " + player_X + "Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}