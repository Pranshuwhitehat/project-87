var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("https://i.pinimg.com/originals/a4/ab/91/a4ab91e4f4d9972853cadb484547c2d4.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
        top:player_y,
        left:player_x

    });
    canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.set({
    top;player_y,
    left:playerx
    });
    canvas.add(block_image_object);

});

}
    

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    if(keyPressed == '70')
    {
        new_image('ironman_face.png')
        console.log("f")
    }
    if(keyPressed == '66')
    {
        new_image('spiderman_body (1).png')
        console.log("b")
    }
    if(keyPressed == '76')
    {
        new_image('hulk_legs.png')
        console.log("l")
    }
    if(keyPressed == '82')
    {
        new_image('captin_america_left_hand.png')
        console.log("h")
    }
    if(keyPressed == '38')
    {
        Up()
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down()
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left()
        console.log("left")
    }
    if(keyPressed == '39')
    {
        left()
        console.log("right")
    }

}
