class Mover
{
    constructor(m, x, y)
    {
        this.mass = m;
        this.xpos = x;
        this.ypos = y;

        this.location = new Vector(m, y);
        this.velocity = new Vector(0, 0);

        this.accelraton = new Vector(0, 0);
    }

    update()
    {
       // console.log("Accelration Vector : " + this.accelraton.xpos + ", " + this.accelraton.ypos);
      //  console.log("Velocity Vector : " + this.velocity.xpos + ", " + this.velocity.ypos);
        
       this.velocity.add(this.accelraton);
       this.location.add(this.velocity);

       this.accelraton.multi(0);
    }

    display()
    {
        fill(175);
        ellipse(this.location.xpos, this.location.ypos, 16, 16);
        
    }

    checkEdges()
    {
        if(this.location.xpos > width)
        {
            this.location.xpos = width;
            this.velocity.xpos *= -1;
        }
        else if(this.location.xpos < 0)
        {
            this.velocity.xpos *= -1;
            this.location.xpos = 0;
        }

        // 지면에 닿으면 튕김
        if(this.location.ypos > height)
        {
            this.velocity.ypos *= -1;
            this.location.ypos  = height;
        }
    }
    // F = ma, if m = 1, then F = A;
    applyForce(force)
    {
        var f = Vector.div(force, this.mass);
        this.accelraton.add(f);
    }
}