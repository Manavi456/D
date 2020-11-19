class Dustbin {

    constructor(x, y, width, height) {

      var dust_option = {isStatic: true}

      this.body = Bodies.rectangle(x, y, width, height, dust_option);
      this.width = width;
      this.height = height;

      World.add(world, this.body)

    }

    display(){

     var pos = this.body.position;
     rectMode(CENTER);
     fill ("gainsboro");
     rect(pos.x, pos.y, this.width, this.height);


    }

}