class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling=loadImage("sprites/polygon.png");
        


        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.sling1,200,20);
        
        
        
       
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        
            strokeWeight(7);
            stroke(48,22,8);
            
        
    }
    
}