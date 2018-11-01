class Mover
{
    constructor()
    {
        this.location = new Vector(width / 2, height);
        this.velocity = new Vector(0, 0);

        this.accelraton = new Vector(-0.001, 0.01);
        this.mass = 10.0;
    }

    update()
    {
        // 1. 방향을 구함.
        var direction = new Vector(0, this.location.ypos * -1);

        // 2. 방향벡터를 단위벡터로 바꾼다.
        direction.normalization();
        direction.multi(0.01);

        // 4. 가속도 벡터를 방향벡터 대입
        this.accelraton.add(direction);
        
        // 5. 해당 가속도 벡터를 적용한다.
        this.velocity.add(this.accelraton);
        this.velocity.limit(2);

        this.location.add(this.velocity);

        this.accelraton.multi(0);

        this.time += 1;
    }

    display()
    {
        fill(175);
        ellipse(this.location.xpos, this.location.ypos, 16, 16);
        
    }

    checkEdges()
    {
        if(this.location.xpos > width)
            this.location.xpos = 0;
        else if(this.location.xpos < 0)
            this.location.xpos = width;

        if(this.location.ypos > height)
            this.location.ypos = 0;
        else if(this.location.ypos < 0)
            this.location.ypos = height;
    }
    // F = ma, if m = 1, then F = A;
    applyForce(force)
    {
        force.div(mass);
        this.accelraton.add(force);
    }
}