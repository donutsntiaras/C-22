class ground{
    constructor(x,y,w,h){
            
    var ground_options ={
        isStatic: true
    }
    
    this.body = Bodies.rectangle(x,y,w,h,ground_options);
    World.add(world, this.body);
    };

    show(){
        var pos = this.body.position;

        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,400,5);
    }
}