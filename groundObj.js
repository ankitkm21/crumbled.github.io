class GroundObj{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        var options={
  
            isStatic:true,
         
             };
         
	this.body=Bodies.rectangle(width/2,690,1600,20,options);
	World.add(world,this.body);
    }
    display(){

        push();
        rectMode(CENTER);
        rect(this.body.x, this.body.y, this.width, this.height);
        pop();

    }
}