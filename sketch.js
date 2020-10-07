 
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15;
var b16,b17,b18,b19,b20;
var b21,b22,b23,b24,b25;
var b26,b27,b28,b29,b30;
var b31,b32,b33,b34,b35;
var b36,b37,b38,b39,b40;
var b41,b42,b43,b44,b45;
var b46,b47,b48,b49,b50;
var b51,b52,b53,b54,b55;
var b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65;
var b66,b67,b68,b69,b70;

var Snakes1,Snakes2,Snakes3,Snakes4,Snakes5;

var b1Img,b2Img,b3Img,b4Img,b5Img;
var b6Img,b7Img,b8Img,b9Img,b10Img;
var b11Img,b12Img,b13Img,b14Img,b15Img;
var b16Img,b17Img,b18Img,b19Img,b20Img;
var b21Img,b22Img,b23Img,b24Img,b25Img;
var b26Img,b27Img,b28Img,b29Img,b30Img;
var b31Img,b32Img,b33Img,b34Img,b35Img;
var b36Img,b37Img,b38Img,b39Img,b40Img;
var b41Img,b42Img,b43Img,b44Img,b45Img;
var b46Img,b47Img,b48Img,b49Img,b50Img;
var b51Img,b52Img,b53Img,b54Img,b55Img;
var b56Img,b57Img,b58Img,b59Img,b60Img;
var b61Img,b62Img,b63Img,b64Img,b65Img;
var b66Img,b67Img,b68Img,b69Img,b70Img;

var Snakes1Img,Snakes2Img,Snakes3Img;

var ladder, ladderImg,ladder2,ladder3,ladder4,ladder5;

var player1,player1Img,player2,player2Img,player3,player3Img,player4,player4Img;
var dice1,dice1Img,dice2Img,dice3Img,dice4Img,dice5Img,dice6Img;

function preload(){

  b1Img = loadImage("Images/block1.jpg");
  b2Img = loadImage("Images/block2.jpg");
  b3Img = loadImage("Images/block3.jpg");
  b4Img = loadImage("Images/block4.jpg");
  b5Img = loadImage("Images/block5.jpg");

  b6Img = loadImage("Images/block6.jpg");
  b7Img = loadImage("Images/block7.jpg");
  b8Img = loadImage("Images/block8.jpg");
  b9Img = loadImage("Images/block9.jpg");
  b10Img = loadImage("Images/block10.jpg");

  b11Img = loadImage("Images/block11.jpg");
  b12Img = loadImage("Images/block12.jpg");
  b13Img = loadImage("Images/block13.jpg");
  b14Img = loadImage("Images/block14.jpg");
  b15Img = loadImage("Images/block15.jpg");

  b16Img = loadImage("Images/block16.jpg");
  b17Img = loadImage("Images/block17.jpg");
  b18Img = loadImage("Images/block18.jpg");
  b19Img = loadImage("Images/block19.jpg");
  b20Img = loadImage("Images/block20.jpg");

  b21Img = loadImage("Images/block21.jpg");
  b22Img = loadImage("Images/block22.jpg");
  b23Img = loadImage("Images/block23.jpg");
  b24Img = loadImage("Images/block24.jpg");
  b25Img = loadImage("Images/block25.jpg");

  b26Img = loadImage("Images/block26.jpg");
  b27Img = loadImage("Images/block27.jpg");
  b28Img = loadImage("Images/block28.jpg");
  b29Img = loadImage("Images/block29.jpg");
  b30Img = loadImage("Images/block30.jpg");

  b31Img = loadImage("Images/block31.jpg");
  b32Img = loadImage("Images/block32.jpg");
  b33Img = loadImage("Images/block33.jpg");
  b34Img = loadImage("Images/block34.jpg");
  b35Img = loadImage("Images/block35.jpg");

  b36Img = loadImage("Images/block36.jpg");
  b37Img = loadImage("Images/block37.jpg");
  b38Img = loadImage("Images/block38.jpg");
  b39Img = loadImage("Images/block39.jpg");
  b40Img = loadImage("Images/block40.jpg");
  
  b41Img = loadImage("Images/block41.jpg");
  b42Img = loadImage("Images/block42.jpg");
  b43Img = loadImage("Images/block43.jpg");
  b44Img = loadImage("Images/block44.jpg");
  b45Img = loadImage("Images/block45.jpg");
  
  b46Img = loadImage("Images/block46.jpg");
  b47Img = loadImage("Images/block47.jpg");
  b48Img = loadImage("Images/block48.jpg");
  b49Img = loadImage("Images/block49.jpg")
  b50Img = loadImage("Images/block50.jpg");
  
  b51Img = loadImage("Images/block51.jpg");
  b52Img = loadImage("Images/block52.jpg");
  b53Img = loadImage("Images/block53.jpg");
  b54Img = loadImage("Images/block54.jpg");
  b55Img = loadImage("Images/block55.jpg");
  
  b56Img = loadImage("Images/block56.jpg");
  b57Img = loadImage("Images/block57.jpg");
  b58Img = loadImage("Images/block58.jpg");
  b59Img = loadImage("Images/block59.jpg");
  b60Img = loadImage("Images/block60.jpg");
  
  b61Img = loadImage("Images/block61.jpg");
  b62Img = loadImage("Images/block62.jpg");
  b63Img = loadImage("Images/block63.jpg");
  b64Img = loadImage("Images/block64.jpg");
  b65Img = loadImage("Images/block65.jpg");
  
  b66Img = loadImage("Images/block66.jpg");
  b67Img = loadImage("Images/block67.jpg");
  b68Img = loadImage("Images/block68.jpg");
  b69Img = loadImage("Images/block69.jpg");
  b70Img = loadImage("Images/block70.jpg");

  Snakes1Img = loadImage("Images/Snakes.png");
  Snakes2Img = loadImage("Images/Snake3.png");
  Snakes3Img = loadImage("Images/Snakes1.png");
  
  ladderImg = loadImage("Images/ladder2.png");

  player3Img = loadImage("Images/yellow.png");
  player4Img = loadImage("Images/green.png");

  dice1Img = loadImage("Images/sprite_0.png");
  dice2Img = loadImage("Images/sprite_1.png");
  dice3Img = loadImage("Images/sprite_2.png");
  dice4Img = loadImage("Images/sprite_3.png");
  dice5Img = loadImage("Images/sprite_4.png");
  dice6Img = loadImage("Images/sprite_5.png");

}
function setup() {
  createCanvas();

  b1 = createSprite(170,710,25,25);
  b1.addImage("b1",b1Img);
  b2 = createSprite(275, 710, 25, 25);
  b2.addImage("b2",b2Img);
  b3 = createSprite(380,710,25,25);
  b3.addImage("b3",b3Img);
  b4 = createSprite(485,710,25,25);
  b4.addImage("b4",b4Img);
  b5 = createSprite(590,710,25,25);
  b5.addImage("b5",b5Img);
 
  b6 = createSprite(695,710,25,25);
  b6.addImage("b6",b6Img);
  b7 = createSprite(800,710,25,25);
  b7.addImage("b7",b7Img);
  b8 = createSprite(905,710,25,25);
  b8.addImage("b8",b8Img);
  b9 = createSprite(1010,710,25,25);
  b9.addImage("b9",b9Img);
  b10 = createSprite(1115,710,25,25);
  b10.addImage("b10",b10Img);
  
  b11 = createSprite(1115,605,25,25);
  b11.addImage("b11",b11Img);
  b12 = createSprite(1010,605,25,25);
  b12.addImage("b12",b12Img);
  b13 = createSprite(905,605,25,25);
  b13.addImage("b13",b13Img);
  b14 = createSprite(800,605,25,25);
  b14.addImage("b14",b14Img);
  b15 = createSprite(695,605,25,25);
  b15.addImage("b15",b15Img);
  
  b16 = createSprite(590,605,25,25);
  b16.addImage("b16",b16Img);
  b17 = createSprite(485,605,25,25);
  b17.addImage("b17",b17Img);
  b18 = createSprite(380,605,25,25);
  b18.addImage("b18",b18Img);
  b19 = createSprite(275,605,25,25);
  b19.addImage("b19",b19Img);
  b20 = createSprite(170,605,25,25);
  b20.addImage("b20",b20Img);
  
  b21 = createSprite(170,500,25,25);
  b21.addImage("b21",b21Img);
  b22 = createSprite(275,500,25,25);
  b22.addImage("b22",b22Img);
  b23 = createSprite(380,500,25,25);
  b23.addImage("b23",b23Img);
  b24 = createSprite(485,500,25,25);
  b24.addImage("b24",b24Img);
  b25 = createSprite(590,500,25,25);
  b25.addImage("b25",b25Img);
  
  b26 = createSprite(695,500,25,25);
  b26.addImage("b26",b26Img);
  b27 = createSprite(800,500,25,25);
  b27.addImage("b27",b27Img);
  b28 = createSprite(905,500,25,25);
  b28.addImage("b28",b28Img);
  b29 = createSprite(1010,500,25,25);
  b29.addImage("b29",b29Img);
  b30 = createSprite(1115,500,25,25);
  b30.addImage("b30",b30Img);
  
  b31 = createSprite(1115,395,25,25);
  b31.addImage("b31",b31Img);
  b32 = createSprite(1010,395,25,25);
  b32.addImage("b32",b32Img);
  b33 = createSprite(905,395,25,25);
  b33.addImage("b33",b33Img);
  b34 = createSprite(800,395,25,25);
  b34.addImage("b34",b34Img);
  b35 = createSprite(695,395,25,25);
  b35.addImage("b35",b35Img);
  
  b36 = createSprite(590,395,25,25);
  b36.addImage("b36",b36Img);
  b37 = createSprite(485,395,25,25);
  b37.addImage("b37",b37Img);
  b38 = createSprite(380,395,25,25);
  b38.addImage("b38",b38Img);
  b39 = createSprite(275,395,25,25);
  b39.addImage("b39",b39Img);
  b40 = createSprite(170,395,25,25);
  b40.addImage("b40",b40Img);
  
  b41 = createSprite(170,290,25,25);
  b41.addImage("b41",b41Img);
  b42 = createSprite(275,290,25,25);
  b42.addImage("b42",b42Img);
  b43 = createSprite(380,290,25,25);
  b43.addImage("b43",b43Img);
  b44 = createSprite(485,290,25,25);
  b44.addImage("b44",b44Img);
  b45 = createSprite(590,290,25,25);
  b45.addImage("b45",b45Img);
  
  b46 = createSprite(695,290,25,25);
  b46.addImage("b46",b46Img);
  b47 = createSprite(800,290,25,25);
  b47.addImage("b47",b47Img);
  b48 = createSprite(905,290,25,25);
  b48.addImage("b48",b48Img);
  b49 = createSprite(1010,290,25,25);
  b49.addImage("b49",b49Img);
  b50 = createSprite(1115,290,25,25);
  b50.addImage("b50",b50Img);
  
  b51 = createSprite(1115,185,25,25);
  b51.addImage("b51",b51Img);
  b52 = createSprite(1010,185,25,25);
  b52.addImage("b52",b52Img);
  b53 = createSprite(905,185,25,25);
  b53.addImage("b53",b53Img);
  b54 = createSprite(800,185,25,25);
  b54.addImage("b54",b54Img);
  b55 = createSprite(695,185,25,25);
  b55.addImage("b55",b55Img);
  
  b56 = createSprite(590,185,25,25);
  b56.addImage("b56",b56Img);
  b57 = createSprite(485,185,25,25);
  b57.addImage("b57",b57Img);
  b58 = createSprite(380,185,25,25);
  b58.addImage("b58",b58Img);
  b59 = createSprite(275,185,25,25);
  b59.addImage("b59",b59Img);
  b60 = createSprite(170,185,25,25);
  b60.addImage("b60",b60Img);
  
  b61 = createSprite(170,80,25,25);
  b61.addImage("b61",b61Img);
  b62 = createSprite(275,80,25,25);
  b62.addImage("b62",b62Img);
  b63 = createSprite(380,80,25,25);
  b63.addImage("b63",b63Img);
  b64 = createSprite(485,80,25,25);
  b64.addImage("b64",b64Img);
  b65 = createSprite(590,80,25,25);
  b65.addImage("b65",b65Img);
  
  b66 = createSprite(695,80,25,25);
  b66.addImage("b66",b66Img);
  b67 = createSprite(800,80,25,25);
  b67.addImage("b67",b67Img);
  b68 = createSprite(905,80,25,25);
  b68.addImage("b68",b68Img);
  b69 = createSprite(1010,80,25,25);
  b69.addImage("b69",b69Img);
  b70 = createSprite(1115,80,25,25);
  b70.addImage("b70",b70Img);

  Snakes = createSprite(420,360,25,25);
  Snakes.addImage("Snakes",Snakes1Img);
  Snakes2 = createSprite(1015,190,25,25);
  Snakes2.addImage("Snakes2",Snakes2Img);
  Snakes2.scale = 0.3;
  Snakes3 = createSprite(1020,500,25,25);
  Snakes3.addImage("Snakes3",Snakes3Img);
  Snakes3.scale = 0.6;
  Snakes4 = createSprite(420,360,25,25);
  Snakes4.addImage("Snakes4",Snakes3Img);
  Snakes4.scale = 0.4;
  Snakes5 = createSprite(166,511,25,25);
  Snakes5.addImage("Snakes5",Snakes2Img);
  Snakes5.scale = 0.4;

  ladder = createSprite(695,520,15,15);
  ladder.addImage("ladder",ladderImg);
  ladder.scale = 0.5;
  ladder2 = createSprite(900,175,15,15);
  ladder2.addImage("ladder2",ladderImg);
  ladder2.scale = 0.4;
  ladder3 = createSprite(380,180,15,15);
  ladder3.addImage("ladder3",ladderImg);
  ladder3.scale = 0.4;
  ladder4 = createSprite(1115,600,15,15);
  ladder4.addImage("ladder4",ladderImg);
  ladder4.scale = 0.4;
  ladder5 = createSprite(270,500,15,15);
  ladder5.addImage("ladder5",ladderImg);
  ladder5.scale = 0.4;

  player1 = createSprite(80,700,25,25);
  player1.addImage("player1",player3Img);
  player1.scale = 0.2;
  player2 = createSprite(40,700,25,25);
  player2.addImage("player2",player4Img);
  player2.scale = 0.2;

  dice1 = createSprite(70,90,25,25);
  dice1.addImage("dice1",dice1Img);
  dice1.addImage("1",dice2Img);
  dice1.addImage("2",dice3Img);
  dice1.addImage("3",dice3Img);
  dice1.addImage("4",dice4Img);
  dice1.addImage("5",dice5Img);
  dice1.addImage("6",dice6Img);
  

}

function draw() {
  background("#611213");  
  text(mouseX+","+mouseY,200,20);
  player1Movement();
  player2Movement();
  if(mousePressedOver(dice1)){
    var rand = Math.round(random(1,6));
    if(rand === 1){
      dice1.changeImage("1",dice1Img);
    }
    else if(rand===2){

      dice1.changeImage("2",dice2Img);
    }
    else if(rand === 3){
      dice1.changeImage("3",dice3Img);
    }    
    else if(rand === 4){
      dice1.changeImage("4",dice4Img);
    }    
    else if(rand === 5){
      dice1.changeImage("5",dice5Img);
    }    
    else if(rand === 6){
      dice1.changeImage("6",dice6Img);
    }    
  }

  ladderMove();
  snakesMovemet();
  drawSprites();

}

function player1Movement(){
  if(keyDown(RIGHT_ARROW)){
    player1.x=player1.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-10;
  }
  if(keyDown(UP_ARROW)){
    player1.y = player1.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player1.y = player1.y+10;
  }
}
function player2Movement(){
  if(keyDown("D")){
    player2.x=player2.x+10;
  }
  if(keyDown("A")){
    player2.x = player2.x-10;
  }
  if(keyDown("W")){
    player2.y = player2.y-10;
  }
  if(keyDown("S")){
    player2.y = player2.y+10;
  }
}


function ladderMove(){
  if(player1.x >1090 && player1.y > 690){
    player1.x=1118;
    player1.y=493;
  }
  if(player2.x >1090 && player2.y >690){
    player2.x = 1118;
    player2.y=493;
  }
  if(player1.x > 665 && player1.x < 695 && player1.y > 585 && player1.y < 620){
    player1.x=700;
    player1.y=390;
  }
  if(player2.x > 665 && player2.x < 695 && player2.y < 585 && player2.y <620){
    player2.x=700;
    player2.y=390;
  }
  if(player1.x > 875 && player1.x < 905 && player1.y > 265 && player1.y < 295){
    player1.x=906;
    player1.y=73;
  }
  if(player2.x > 875 && player2.x < 905 && player2.y > 265 && player2.y < 295){
    player2.x=906;
    player2.y=73;
  }
  if(player1.x > 255 && player1.x < 275 && player1.y > 580 && player1.y < 610){
    player1.x=270;
    player1.y=377;
  }
  if(player2.x > 255 && player2.x < 275 && player2.y > 580 && player2.y < 610){
    player2.x=270;
    player2.y=377;
  }
  if(player1.x > 350 && player1.x < 375 && player1.y > 260 && player1.y < 285){
    player1.x=380;
    player1.y=63;
  }
  if(player2.x > 350 && player2.x < 375 && player2.y > 260 && player2.y < 285){
    player2.x=380;
    player2.y=63;
  }
 
}
function snakesMovemet(){
  if(player1.x > 1100 && player1.x < 1127 && player1.y > 382 && player1.y < 408){
    player1.x=903;
    player1.y=601;
  }
  if(player2.x > 1100 && player2.x < 1127 && player2.y > 382 && player2.y < 408){
    player2.x=903;
    player2.y=601;
  }
  if(player1.x > 153 && player1.x < 182 && player1.y > 375 && player1.y < 408){
    player1.x=157;
    player1.y=612;
  }
  if(player2.x > 153 && player2.x < 182 && player2.y > 375 && player2.y < 408){
    player2.x=157;
    player2.y=612;
  }
  if(player1.x > 465 && player1.x < 485 && player1.y > 270 && player1.y < 295){
    player1.x=367;
    player1.y=401;
  }
  if(player2.x > 465 && player2.x < 485 && player2.y > 270 && player2.y < 295){
    player2.x=367;
    player2.y=401;
  }
  if(player1.x > 240 && player1.x < 270 && player1.y > 165 && player1.y < 195){
    player1.x=583;
    player1.y=498;
  }
  if(player2.x > 240 && player2.x < 270 && player2.y > 165 && player2.y < 195){
    player2.x=583;
    player2.y=498;
  }
  if(player1.x > 1000 && player1.x < 1030 && player1.y > 60 && player1.y < 90){
    player1.x=1002;
    player1.y=281;
  }
  if(player2.x > 1000 && player2.x < 1030 && player2.y > 60 && player2.y < 90){
    player2.x=1002;
    player2.y=281;
  }
}

