class Paper {

    constructor(x, y, radius) {

      var paper_option = {isStatic: true, restitiution:0.3, friction:0.5, density:1.2}

      this.x = x
      this.y = y
      this.radius = radius;

      this.body = Bodies.circle(this.x, this.y, this.radius/2, paper_option);

      World.add(world, this.body)

    }

    display(){

     var pos = this.body.position;

     push();
     translate(pos.x, pos.y);
     ellipseMode(RADIUS)
     stroke("black");
     strokeWeight(1);
     fill ("floralwhite");
     ellipse(0, 0, this.radius , this.radius);
      pop();

    }

}