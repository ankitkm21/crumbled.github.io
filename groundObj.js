class GroundObj{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        var options={
  
            isStatic:true,
         
             };
         
	this.body=Bodies.rectangle(x,y,w,h,options);
	World.add(world,this.body);
    }
    display(){
console.log(this.body.position.x)
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

    }
}
