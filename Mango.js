class Mango{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.0

        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("Images/mango.png");
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}