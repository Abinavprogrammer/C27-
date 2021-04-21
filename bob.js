class Bob {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 1.1,
        friction: 1.0,
        density: 1.2
     }
     
     this.x =x;
     this.y=y;
     this.radius=radius;
     
     this.body = Bodies.circle(this.x, this.y, this.radius, options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;

    push();
    strokeWeight(3)
    stroke("white");
    fill("pink")
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius,this.radius);
    
    pop();
  }
};

