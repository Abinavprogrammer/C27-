class Rope{
	constructor(bodyA, bodyB, offsetX, offsetY, length){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1.0,
            length: 200,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        stroke("yellow");
        fill("yellow");

        var point1x = pointA.x;
        var point1y = pointA.y;

        var point2x = pointB.x+this.offsetX;
        var point2y = pointB.y+this.offsetY;

        line(point1x, point1y, point2x, point2y);
    }
}