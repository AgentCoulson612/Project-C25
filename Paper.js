class Paper {
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':10
        }
        this.body = Bodies.circle(x,y,radius/2 - 12, options)
        this.radius = radius;

        try {
            this.image = loadImage("paper.png")
        } catch {
            console.log('ERROR! IMAGE HAS NOT LOADED PROPERLY')
        }
        World.add(world, this.body)
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
        // fill(255);
        // ellipse(this.body.position.x, this.body.position.y, this.radius * 2);
      }
}