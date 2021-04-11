class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        //this.polygon_img=loadImage("polygon.png");
    }
        fly(){
            this.sling.bodyA = null;


}

display(){
   // image(this.polygon_img,200,20);
    
        //imageMode(CENTER);
       // image(polygon_img,polygon.position.x,polygon.position.y,40,40);


    

    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
       
        stroke(48,22,8);
        if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
           

        
       
        pop();
        
    }
}

}
}