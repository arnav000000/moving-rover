canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
nasa_image_array=["pic-1.jpg","pic-2.jpg","pic-3.jpg","pic-4.jpg"];
random_number=Math.floor(Math.random()*4);
background_image=nasa_image_array[random_number];
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag =new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadbackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");

    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
        
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");

        
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
        
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("wehen up arrow is pressed= " +rover_x+" - " +rover_y);
        uploadbackground();
        uploadrover();

    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed= " +rover_x+" - " +rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("wehen left arrow is pressed= " +rover_x+" - " +rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("wehen right arrow is pressed= " +rover_x+" - " +rover_y);
        uploadbackground();
        uploadrover();
        
    }
}