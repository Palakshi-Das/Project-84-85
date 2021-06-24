canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="https://purepng.com/public/uploads/large/purepng.com-formula-1formula-1racing-carsport-carformula-cars-1701527484845woa5o.png";
car1_x=10;
car1_y=10;

car1_width=120;
car1_height=70;
car2_image="car1.png";
car2_x=10;
car2_y=100;


background_image="racing.gif";

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground();
    background_img_tag.src = background_image;
 
   car1_img_tag = new Image();
   car1_img_tag.onload = uploadCar1();
   car1_img_tag.src =car1_image;

   car2_img_tag = new Image();
   car2_img_tag.onload = uploadCar2();
   car2_img_tag.src =car1_image;

 }

 function uploadBackground(){
    ctx.drawImage(background_img_tag , 0 , 0 ,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_img_tag , car1_x , car1_y ,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_img_tag , car2_x , car2_y ,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);

    if (keypress=="38")
    {
        car1_up();
        console.log("up arrow key");
    }

    if (keypress=="40")
    {
        car1_down();
        console.log("down arrow key");
    }

    if (keypress=="37")
    {
        car1_left();
        console.log("left arrow key");
    }

    if (keypress=="39")
    {
        car1_right();
        console.log("right arrow key");
    }
    
    if (keypress=="77")
    {
        car2_up();
        console.log("car2 up arrow key");
    }

    if (keypress=="65")
    {
        car2_down();
        console.log("car2 down arrow key");
    }

    if (keypress=="84")
    {
        car2_right();
        console.log("car2 right arrow key");
    }

    if (keypress=="72")
    {
        car2_left();
        console.log("car2 left arrow key");
    }

}


function car1_up(){
    if (car1_y >= 0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed , x="+car1_x+" .y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function car1_down(){
    if (car1_y >= 0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed , x="+car1_x+" .y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function car1_right(){
    if (car1_y >= 0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed , x="+car1_x+" .y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function car1_left(){
    if (car1_y >= 0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed , x="+car1_x+" .y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function car2_up(){
    if (car2_y >= 0)
    {
        car2_y=car2_y-10;
        console.log("when up arrow is pressed , x="+car2_x+" .y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}

function car2_down(){
    if (car2_y <= 500)
    {
        car2_y=car2_y+10;
        console.log("when down arrow is pressed , x="+car2_x+" .y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function car2_left(){
    if (car2_x >= 0)
    {
        car2_x=car2_x-10;
        console.log("when left arrow is pressed , x="+car2_x+" .y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function car2_right(){
    if (car2_x <= 700)
    {
        car2_x=car2_x+10;
        console.log("when right arrow is pressed , x="+car2_x+" .y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}