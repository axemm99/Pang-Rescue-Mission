let ctx = null;
let canvas = null;

let time = null;


//Variaveis

game()

/*function startMenu() { 
  
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d"); 

  ctx.fillStyle = "rgb(176, 137, 255)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)


  var x = 55;
  var y = 0;
  var width = 180;
  var height = 107;
  var logo = new Image();

  logo.onload = function() {
    ctx.drawImage(logo, x, y, width, height);
  }
  logo.src = "images2/logo_game.png";



  var xD = 170;
  var yD = 60;
  var widthD = 160;
  var heightD = 130;
  var dog = new Image();

  dog.onload = function() {
    ctx.drawImage(dog, xD, yD, widthD, heightD);
  }
  dog.src = "images2/girl's_dog.png";


  console.log("start menu")

  // Get canvas element and its context

  // Button position and dimensions
  var buttonX = 110;
  var buttonY = 100;
  var buttonW = 60;
  var buttonH = 30;

  // Render button
  ctx.fillStyle = 'rgb(249, 4, 205)';
  ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
  ctx.strokeStyle = 'yellow';
  ctx.strokeRect(buttonX, buttonY, buttonW, buttonH);

  ctx.fillStyle = "black";
  ctx.font = "bold 20px sans-serif";
  //ctx.textBaseline = "bottom";
  ctx.fillText( "PLAY", buttonX + 4, buttonY + 22);

  // Add event listener to canvas element
  canvas.addEventListener('click', function(event) {
    // Control that click event occurred within position of button
    // NOTE: This assumes canvas is positioned at top left corner 
    console.log("click")
    //alert("start game")
    playType()

    event.preventDefault()
  });


}*/

/*function winner() { 
  
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d"); 

  ctx.fillStyle = "rgb(176, 137, 255)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)


  var x = 55;
  var y = 0;
  var width = 180;
  var height = 107;
  var logo = new Image();

  logo.onload = function() {
    ctx.drawImage(logo, x, y, width, height);
  }
  logo.src = "images2/logo_game.png";



  var xD = 170;
  var yD = 60;
  var widthD = 160;
  var heightD = 130;
  var dog = new Image();

  dog.onload = function() {
    ctx.drawImage(dog, xD, yD, widthD, heightD);
  }
  dog.src = "images2/girl's_dog.png";


  console.log("start menu")

  // Get canvas element and its context



  // Render button

  ctx.fillText( "WINNER", canvas.height/2, canvas.width/2);
  ctx.fillText( "You Saved the Dog!", 50, 50);
  


}*/

function game(){

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var bolotas = [];
  let grav = 0.5;
  
  let background = new Image();
  background.src = "images2/p.png"

  let background2 = new Image();
  background2.src = "images2/deserto.jpg"

  let background3 = new Image();
  background3.src = "images2/city.jpg"
  
  let background4 = new Image();
  background4.src = "images2/winner.jpg"

  let bckg = []
  bckg.push(background)
  bckg.push(background2)
  bckg.push(background3)
  bckg.push(background4)

 /* let audioMenu = new Audio("Adventures.mp3")
  audioMenu.play()*/

 /* let myMusic = new sound("Adventures.mp3");
  myMusic.play();*/

  let vida = new Image();
  vida.src = "images2/vida.png"
  
  let pirate = new Image();
  pirate.src = "images2/girl.png"

  let clock = new Image();
  clock.src = "images2/clock.png"

  let right = false
  let left = false
  let shoot = false

  let currentFrame = 0
  let currentPos = 0

  let shootPos = currentPos

  let step = 0

  let pirateWidth = 104
  let pirateHeight = 150
  let pirateY = canvas.height - 300;

  let altura = 0
  
  let limitShoot = 0
  let maxBalls = 0
  let currentLevel = 1

  //Temporizador
  let timer = 300;
  
  setInterval(function(){
  timer--;
  },1000);

  //ScoreBoard
  let scoreHeight = 600;

  let score = 0;
  let lives = 3;

  let score2 = 0;
  let lives2 = 0;

  let stageName = "Nvl 1: Planície";

  let totalScore = score + score2;

  let vidaX = 450;
      

  //start with only one
  let b = new Array();

  function ChangeLevel(lvl) 
  {
    currentLevel = lvl
    switch(lvl) {
      case 1:
        limitShoot = 100
        maxBalls = 1
        break;
      case 2:
        limitShoot = 100
        maxBalls = 2
        break;
      case 3:
        limitShoot = 100
        maxBalls = 3
        break;
      case 4:
        limitShoot = 100
        maxBalls = 0
        break;
    }

    if(lvl == 1){      
      bolotas = []

      stageName = "Nvl 1: Planície"
      //background.src = "images2/p.png"

      background = bckg[0]
      currentLevel = 1

      ctx.drawImage(pirate, pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

      let newBall = new Bola(200,150, 4, 4, 60);
      bolotas.push(newBall)
    }

    if(lvl == 2) {
      if(timer) window.clearInterval(timer)

      bolotas = []

      stageName = "Nvl 2: Deserto"
      background = bckg[1]

      currentLevel = 2

      ctx.drawImage(pirate, pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

      let newBall = new Bola(200,150, 4, 4, 60);
      let newBall2 = new Bola(600,150, -4, 4, 60);
      bolotas.push(newBall)
      bolotas.push(newBall2)
    }
    else if(lvl == 3) {
      if(timer) window.clearInterval(timer)

      bolotas = []

      stageName = "Nvl 3: Cidade"
      background = bckg[2]

      currentLevel = 3
      
      ctx.drawImage(pirate, pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

      let newBall = new Bola(200,150, 4, 4, 60);
      let newBall2 = new Bola(600,150, -4, 4, 60);
      let newBall3 = new Bola(400,150, 4, 4, 60);
      bolotas.push(newBall)
      bolotas.push(newBall2)
      bolotas.push(newBall3)
    }
    else if(lvl == 4) {
      if(timer) window.clearInterval(timer)
      winner()

      //pirate.hidden = true
      stageName = "WINNER!!!!!"
      background = bckg[3]

      currentLevel = 4
    }
  }

  ChangeLevel(1)

  //classe Bola que constroi todas as bolas
function Bola(x,y,vx,vy,r){
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.r = r;
  


  this.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = "#e50ba0";
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  
  this.update = function(){
    if(this.x + this.r > canvas.width || this.x - this.r < 0){
    this.vx = -this.vx;
  }

  
    if(this.y + this.r > scoreHeight || this.y - this.r < 0){
    this.vy = -this.vy;
  }
    else{
    this.vy += grav;
    }
  

  this.x += this.vx;
  this.y += this.vy;
  }
}

//função que divide a bola em dois
function Split() {
  let b = bolotas[0];
  
  
    console.log("1º split")
    let newBallUno = new Bola(b.x - b.r, b.y, b.vx, b.vy * 1.1, b.r /2);
  
    let newBallDos = new Bola(b.x + b.r, b.y, b.vx * - 1, b.vy * 1.1, b.r /2);

  

    bolotas.push(newBallUno)
    bolotas.push(newBallDos)
      
    bolotas.splice(0,1);

    console.log("numero bolotas 1: " + bolotas.length)
  
  
}

function finalSplit(){
  bolotas.splice(0,1)
}

if(currentLevel == 1){
  ChangeLevel(1)
}


  function Shot(x, y, vY, c) {   	//constructor
    this.x = x;		        //x position
    this.y = y;	          //y position
    this.vY = vY;		    //vertical velocity
    this.c = c;             //colour
    this.stop = false;

    //update method
    this.update = function () {
        //check collisions

        if (this.y < 0) {
          this.y = canvas.height; 
          this.stop = true;   //stop "shoot" at the top
        }
        else{
            this.y -= this.vY;	//update vertical position 
        }
    }

    //draw
    this.draw = function () {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, 2, canvas.height - this.y)

    }

  }


  pirate.addEventListener("load", function () {

    window.setInterval(Animate, 1000 / 30) //60 fps
    
  })



  function createShoot() {
    let color = "rgb(163, 163, 194)";
    let x = shootPos;
    let y = canvas.height - 100//shootHeight;
    let vY = 1 + Math.random() * 5;
    return new Shot(x, y, 10, color);
  }


  //console.log(b[0].x)


  function Animate() {

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    shootPos = step + pirateWidth / 2;

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height - (canvas.height-scoreHeight));

    for (let i = 0; i < b.length; i++)
    b[i].draw()
    //update
    for(let i=0; i<b.length; i++){
      b[i].update()
    }

    for(let i = 0; i < b.length; i++) {
      if(b[i].stop) {
        b.splice(i, 1);
      }
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,scoreHeight,canvas.width,canvas.height - 160);

    
    
    //Palavras e scores do scoreboard
    ctx.font = "30px Consolas"; 
    ctx.fillStyle = "rgb(255, 204, 0)";

    ctx.fillText("Total Score: \n " + totalScore, canvas.width/2 - 120, canvas.height - 80);
    
    ctx.fillText("Player", 40, canvas.height - 120);

    ctx.fillStyle = "white";
    ctx.fillText(lives, 40, canvas.height - 78);

    ctx.fillText("Score: " + score, 40, canvas.height - 40); 

    ctx.fillText(stageName, canvas.width/2 - 120, canvas.height - 120);

    ctx.fillText("Nº de Tiros: " + limitShoot, canvas.width/2 - 120, canvas.height - 40)

    
    ctx.drawImage(clock, canvas.width - 250, 20, 40, 40);
    
    ctx.fillText("Timer: " + timer, canvas.width - 200, 50);
    
    let contador = 0;

    //corações/vidas
    for(let i = 0; i < lives; i++){
      ctx.scale(0.15 , 0.15);
      ctx.drawImage(vida, vidaX + contador, 5.7 * canvas.height);
      ctx.resetTransform();
      contador += 300;
    }

      if(lives == 0){
        gameOver();
      }


    //Final do timer - GameOver
    if(timer == 0){
      gameOver();
    }
  
    //desenho e update do array bolotas
    for(let i = 0; i < bolotas.length; ++i) {
      bolotas[i].draw();
    }

    for(let i = 0; i < bolotas.length; ++i){
      bolotas[i].update()
    } 

    if (right == true) {

      altura = 0
      step = step + 10
      ctx.drawImage(pirate, currentFrame * pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

    }
    else if (left) {

      altura = 150
      step = step - 10
      ctx.drawImage(pirate, currentFrame * pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

    }
    else {

      ctx.drawImage(pirate, pirateWidth, altura, pirateWidth, pirateHeight, step, canvas.height-300, pirateWidth, pirateHeight)

    }

  //colisão bola - player
  for(let i = 0; i < bolotas.length; i++){
    if (step >= bolotas[i].x - bolotas[i].r && step <= bolotas[i].x + bolotas[i].r && Math.abs(bolotas[i].y - pirateY) <= bolotas[i].r) {
      lives--;
      step = 0;
    }


  }

  for(let i = 0; i < bolotas.length; i++){
    if (bolotas[i].y <= pirate.y && step + 10 >= bolotas[i].x - bolotas[i].r && step -10 <= bolotas[i].x + bolotas[i].r) {
      lives--;
      step = 0;
    }


  }


  //colisão arpao - bola
  for(let i = 0; i < bolotas.length; ++i){ 
    for(let j=0; j<b.length; j++){    
      if(Math.abs(bolotas[i].x - b[0].x) <= bolotas[i].r)
      {
        if(bolotas[i].y - bolotas[i].r >= b[0].y){

          if(bolotas[i].r == 60){
            Split()
            b[b.length-1].stop = true
            score += 100
          }
          else if(bolotas[i].r == 60/2){
            Split()
            b[b.length-1].stop = true
            score += 200
          }
          else if(bolotas[i].r == 60/4){
            Split()
            b[b.length-1].stop = true
            score += 300
          }
          else if(bolotas[i].r == 60/8){
            finalSplit()
            b[b.length-1].stop = true
            score += 400
          }
        }  
      }
    }
    
  }
  if(bolotas.length == 0){
    ChangeLevel(currentLevel+1)
  }

    //colisão player - paredes
    if(step <= 0){
      step = step + 10;
    }

    if(step >= canvas.width - 90){
      step = step - 10
    }


    if(shoot == true){
      
      //draw
      b.push(createShoot());

      limitShoot--
      if(limitShoot <= 0){
        gameOver()
      }

      shoot = false
    }

    currentFrame++

    if (currentFrame >= 6) {
      currentFrame = 0
    }
  }

  function keyDown(e) {

    switch(e.keyCode) {
      case 39:
        right = true
        break;
      case 37:
        left = true
        break;
      case 32:
        if(!e.repeat) shoot = true
        break;
    }

  }

  function keyUp(e) {

    switch(e.keyCode) {
      case 39:
        right = false
        break;
      case 37:
        left = false
        break;
      case 32:
        shoot = false
        break;
    }
  }

  
  window.addEventListener("keydown",keyDown)
  window.addEventListener("keyup",keyUp)

  function gameOver(){
      window.location.reload();
    //
  }

}



