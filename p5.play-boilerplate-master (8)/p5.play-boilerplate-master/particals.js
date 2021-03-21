
  class Partical{
    constructor(x, y,r ) {
        var options = {
            'restitution':0.8,
            
        }
        this.body = Bodies.rectangle(x, y, r, options);

        this.color=color(random(0,255),random(0,255),random(0,255));
        this.r = r;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        fill(this.color);
        pop();
      }
}