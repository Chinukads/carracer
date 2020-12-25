var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

car1_image="th.jpg";
car1_x=10;
car1_y=10;
car1_width=120;
car1_height=75;

car2_image="th(1).jpg";
car2_x=10;
car2_y=100;
car2_width=120;
car2_height=75;
background_image="th(3).jpg"
var background_image_tag=new Image();
var car1_image_tag=new Image();
var car2_image_tag=new Image();

function add(){
   
    background_image_tag.onload=uploadBackground();
    background_image_tag.src=background_image;

    
    car1_image_tag.onload=uploadcar1;
    car1_image_tag.src=car1_image;

    
    car2_image_tag.onload=uploadcar2;
     car2_image_tag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37')
    {
        car1_left();
        console.log("left");
    }
    if(keyPressed=='38')
    {
       car1_up();
        console.log("up");
    }
    if(keyPressed=='39')
    {
        car1_right();
        console.log("right");
    }
    if(keyPressed=='40')
    {
        car1_down();
        console.log("down");
    }
    if(keyPressed=='65')
    {
        car2_left();
        console.log("a");
    }
    if(keyPressed=='68')
    {
       car2_right();
        console.log("d");
    }
    if(keyPressed=='87')
    {
        car2_up();
        console.log("w");
    }
    if(keyPressed=='83')
    {
        car2_down();
        console.log("s");
    }
}

function car1_up(){
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    
}
function car1_down(){
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("when down arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
    
}
function car1_left(){
    if(car1_x>=0)
    {
       car1_x=car1_x-10;
        console.log("when left arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
    
}
function car1_right(){
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when right arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
    
}

function car2_up(){
    if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when up arrow is pressed, x= "+car2_x+" y= "+car2r_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
    
}
function car2_down(){
    if(car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("when down arrow is pressed, x= "+car2_x+" y= "+car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
    
}
function car2_left(){
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when left arrow is pressed, x= "+car2_x+" y= "+car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
}
    
    }
    

function car2_right(){
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when right arrow is pressed, x= "+car2_x+" y= "+car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
    
}



