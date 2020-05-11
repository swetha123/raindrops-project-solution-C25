class BaseClass
 {
  constructor()
  {
      var options =
      {
          restitution :0.8,
          density :1
      }
      this.x = random(10,400);
      this.y = random(0,10);
      this.body = Bodies.rectangle(this.x,this.y,10,20);
      this.body.speed = random(50,1000);
      this.image = loadImage("drop.jpg")
      this.width = random(4,10);
      this.height = random(10,20);

      World.add(world,this.body);
  }

  isOut(){
      return(this.body.position.y>height+100);
  }
  display()
  {
      var pos = this.body.position;
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x,pos.y,this.width,this.height);
  }
}