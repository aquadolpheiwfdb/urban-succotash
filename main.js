var canvas= new fabric.Canvas("myCanvas");

width_of_block=50;
height_of_block=50;

player_y=200;
player_x=200;

player_object="";
block_object="";


function player_update(){
    fabric.Image.fromURL("groot.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }); 
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(width_of_block);
        block_object.scaleToHeight(height_of_block);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);

        if(e.shiftKey==true && keyPressed=="80"){
            console.log("shift and p pressed together");
            width_of_block=width_of_block+10;
            height_of_block=height_of_block+10;

        document.getElementById("current_width").innerHTML=width_of_block;
        document.getElementById("current_height").innerHTML=height_of_block;
        }
        if(e.shiftKey==true && keyPressed=="77"){
            console.log("shift and m pressed together");
            width_of_block=width_of_block-10;
            height_of_block=height_of_block-10;
    
        document.getElementById("current_width").innerHTML=width_of_block;
        document.getElementById("current_height").innerHTML=height_of_block;
        }

if(keyPressed=="70"){
    new_image("spiderman_face.png");
    console.log("f is pressed");
}
        
if(keyPressed=="66"){
    new_image("spiderman_body.png");
    console.log("b is pressed");
}

if(keyPressed=="76"){
    new_image("spiderman_legs.png");
    console.log("l is pressed");
}

if(keyPressed=="82"){
    new_image("spiderman_right_hand.png");
    console.log("r is pressed");
}

if(keyPressed=="72"){
    new_image("spiderman_left_hand.png");
    console.log("h is pressed");
}

if(keyPressed=="38"){
    up()
    console.log("up")
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
}if(keyPressed=="39"){
    right();
    console.log("right");
}

