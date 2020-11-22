var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var x = 20 ;
var y = 20 ;
var speedX =4;
var speedY = 6 ; 
var radius= 20;

var paddle={
    width:70,
    height:10,
    x:0,
    y:canvas.clientHeight-10,
    speed:10,
    isMoveLeft:false,
    isMoveRight:false,

};
var isGameOver=false;

function setBall(){
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI)
    context.fillStyle="blue";
    context.fill()
    context.closePath();
}

function touchCancas(){
    if( x<radius || x> canvas.clientWidth-radius ){
        speedX=-speedX;
    }
    if( y<radius){
        speedY=-speedY;
    }
    if(y>canvas.clientHeight){
        alert("game Over")
         y=20;
    
    }
}

function touchPaddle(){
    if( x>= paddle.x && x<= paddle.x+70 && y>=canvas.clientHeight-paddle.height && y<=canvas.clientHeight ){
        speedY=-speedY;
    }
}

function undateSpeed(){
    x+=speedX;
    y+=speedY;
}

function drawPaddle(){
    context.beginPath();
    context.rect(paddle.x,paddle.y,paddle.width,paddle.height);
    context.fillStyle="red";
    context.fill();
    context.closePath();
}
document.addEventListener("keyup",function(event){
    if(event.keyCode==37){
        paddle.isMoveLeft=false;
    }else{
        if(event.keyCode==39){
         paddle.isMoveRight=false;
        }
    }
  })



document.addEventListener("keydown",function(event){
         if(event.keyCode==37){
             paddle.isMoveLeft=true;
         }else{
             if(event.keyCode==39){
              paddle.isMoveRight=true;
             }
         }
})

function checkKeyDown(){
    if(paddle.isMoveRight){
        paddle.x+=paddle.speed;
    }else{
        if(paddle.isMoveLeft){
            paddle.x-=paddle.speed;
        }
    }
}

// function checkPaddle(){
//       if(paddle.x<0){
//             paddle.x=0;
//          }
//      if(paddle.x>canvas.clientWidth-paddle.width){
//              paddle.x=canvas.clientWidth-paddle.width;
// }
//}




function moveBall(){
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    setBall();
    touchCancas();
    undateSpeed()
    drawPaddle();
    checkKeyDown()
    // checkPaddle(); 
    touchPaddle();
     requestAnimationFrame(moveBall);
}
moveBall();
//-------------------------------------------------------------
;