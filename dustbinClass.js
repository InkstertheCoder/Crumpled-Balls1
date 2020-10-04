class Dustbin{
    //to define the x and y to write in sketch.js
    constructor(x,y,width,height){
    
    var options = {
    
    isStatic:true,
 
    
    }
    this.body = Bodies.rectanle(x,y,options);
    
    World.add(world,this.body);

    this.body = Bodies.rectanle(x,y,options);
    
    World.add(world,this.body);

    this.body = Bodies.rectanle(x,y,options);
    
    World.add(world,this.body);

    }
    display(){
    
     var pos = this.body.position;
     
     fill("yellow");
     ellipse(pos.x,pos.y,30);
     
    fill("yellow");
     ellipse(pos.x,pos.y,30);

     fill("yellow");
     ellipse(pos.x,pos.y,30);
     
    
    
    }
    
    
    
    }