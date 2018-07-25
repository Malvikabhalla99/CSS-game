let canvas=document.getElementById('mycanvas')
let pen=canvas.getContext('2d');
let gh=400
let gw=500

let gameover=false;


let playerimg=new Image;
playerimg.src='images/pika.png';

let obstacleimg=new Image;
obstacleimg.src='images/gengar.png';

let endpointimg =  new Image;
endpointimg.src='images/ball.png';
let player={
    x:10,
    y:200,
    w:60,
    h:60,
    moving:false,
    speed:5
}

let obstacle={
    x:150,
    y:150,
    w:60,
    h:60,
    speed:5
}

let endpoint={
    x:gw-100,
    y:200,
    w:60,
    h:60,

}

canvas.addEventListener('mouseup',function(e){
    player.moving=false;
})

canvas.addEventListener('mousedown',function(e){
    player.moving=true;
})

function tochecktouch(r1,r2){
    let first=Math.abs(r1.x-r2.x)<=50;
    let second=Math.abs(r1.y-r2.y)<=50

    if(first&&second)
    {
        return true;
    }
    else return false;
}

function update()
{
    obstacle.y+=obstacle.speed;

    if(obstacle.y>=gh-obstacle.h-10 ||obstacle.y<=10){
        obstacle.speed=obstacle.speed*-1;
    }

    if(player.moving==true){
        player.x+=player.speed;
    }

    if(tochecktouch(player,obstacle)==true){
        alert("GAME OVER ..!!")
        gameover=true;
    }
    if(tochecktouch(player,endpoint)==true)
    {
        alert("Congratualtions you won ..!!")
        gameover=true;
    }
}

function draw(){
    pen.clearRect(0,0,gw,gh);

    pen.drawImage(playerimg,player.x,player.y,player.w,player.h);
    pen.drawImage(obstacleimg,obstacle.x,obstacle.y,obstacle.w,obstacle.h);
    pen.drawImage(endpointimg,endpoint.x,endpoint.y,endpoint.w,endpoint.h);

}

function startgame(){
    draw();
    update();
    if(gameover==false)
    {
        window.requestAnimationFrame(startgame);
    }
}
startgame();
