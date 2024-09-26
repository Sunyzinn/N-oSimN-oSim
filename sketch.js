var Motor = Matter.Engine;
var Mundo= Matter.World;
var Corpos= Matter.Bodies;
var Corpo= Matter.Body;

var motor;
var mundo;
var bola;
var chão;

var bolinhas = [];
var limite_bolinhas =  500; 

function setup() {
    createCanvas (600,600);

    motor= Motor.create();
    mundo= motor.world;
   
    motor.world.gravity.y = 10;

var opcao_chao={
    isStatic:true
};

   var opcoes_bola={
   restitution:0.5,
   frictionAir:0.01,
   density:0.0001
   }

chao= Corpos.rectangle(300,585,600, 20, opcao_chao);
    Mundo.add(mundo, chao)
    
    bola=Corpos.circle(300, 10, 40, opcoes_bola);
    Mundo.add(mundo, bola);

    rectMode(CENTER);
    ellipseMode (RADIUS)

    for (var j = 0; j < limite_bolinhas; j++) {
        adicionarBolinhas();
    }

}

function adicionarBolinhas() {
    var opcoes_bolinhas = {
        restitution: random (0.5, 1),
        frictionAir: random (0.01, 0.1)
    };

    var bolinha = Corpos.circle(random(50, 350), random(50, 350), random(5, 10), opcoes_bolinhas);
    Mundo.add (mundo, bolinha);
    bolinhas.push (bolinha);

}



function draw() {
   background(0);
  Motor.update(motor);

  rect(chao.position.x, chao.position.y, 400, 20)

  ellipse(bola.position.x, bola.position.y, 40);
  
  if (keyIsDown(65)) {   //65
    Corpo.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: -0.005, y: 0 });
  }
  if (keyIsDown(68)) {  //68
    Corpo.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0.005, y: 0 });
  }
  if (keyIsDown(87)) {  //87
    Corpo.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0, y: -0.006 });
  }
  if (keyIsDown(83)) {//83
    Corpo.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0, y: 0.005 });
}

  for (var j = 0; j < bolinhas.length; j++) {
   var bolinha = bolinhas [j];
fill (random (100, 225), random (100, 255), random(100, 255));
ellipse (bolinha.position.x, bolinha.position.y, bolinha.circleRadius);


  }

}
