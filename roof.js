class Roof {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            density: 1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push();
        fill("blue");
        stroke("blue");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}