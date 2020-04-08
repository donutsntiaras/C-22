
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var boxes = [];
var baskets = [];
var gSlider;
var land;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
         
    land = new ground(200,355,400,5);
}
 
function mousePressed() {
    if (mouseY < 355 && mouseY > 175) {
        // Every time a mouse press occures create a new box.
      boxes.push(new box(mouseX,mouseY,random(5,60),random(8,50)));
    }
    else if (mouseY < 175 && mouseY > 0) {
       baskets.push(new particle(mouseX,mouseY,random(10,30)));
    }
}
 
function draw() {
    Engine.update(engine);
    background(51);
    
    land.show();
       
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    fill("white");
    stroke("white");
    textSize(20);
    text("Gravity " + fVal, 200, 381);
 
    // Use a for loop to show all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    for (var j = 0; j < baskets.radius; j++){
        baskets[j].display();
    }
}
 
