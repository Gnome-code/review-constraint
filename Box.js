class Box{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.Visibility = 255
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)
}
display(){
    if(this.body.speed < 3){
     var pos =this.body.position;
     rectMode(CENTER);
     fill(189, 252, 247);
     rect(pos.x, pos.y, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 1;
       tint(255,this.Visiblity);
       pop();
     }
    
  }
}