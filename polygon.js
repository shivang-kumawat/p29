class Polygon{
    constructor(x,y){
    var options = {
        isStatic : false,
        'restitution': 0.04,
        'friction':0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x,y,80,80 ,options);
    this.width = 80;
    this.height =80;
    World.add(world,this.body);
    this.image = loadImage("polygon.png");
    }
    
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    
    
    pop();
    
    }
  };