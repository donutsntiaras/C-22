class box{
    constructor(x,y,w,h){
        var options ={
            'friction': 0.6,
            'restitution': 0.5
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    };

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(160,82,45);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}