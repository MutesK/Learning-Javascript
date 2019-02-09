class Vector
{
    constructor(xpos, ypos)
    {
        this.xpos = parseFloat(xpos);
        this.ypos = parseFloat(ypos);
    }

    add(vector)
    {
        this.xpos += vector.xpos;
        this.ypos += vector.ypos;
    }

    sub(vector)
    {
        this.xpos -= vector.xpos;
        this.ypos -= vector.ypos;
    }

    multi(multi)
    {
        this.xpos *= multi;
        this.ypos *= multi;
    }

    div(div)
    {
        this.xpos /= div;
        this.ypos /= div;
    }

    // Get a Vector length
    mag()
    {
        return Math.sqrt(this.xpos * this.xpos + this.ypos * this.ypos);
    }
    
    // Get a Vector Normalization
    normalization()
    {
        var mag = this.mag();
        if(mag != 0)
        {
            this.div(mag);
        }
    }


    limit(limit)
    {
        if(this.mag() > 10)
        {
            this.normalization();
            this.multi(10);
        }

        // console.log("xpos : " +  this.xpos + ", ypos : " + this.ypos )
    }

    static add(v1, v2)
    {
        return new Vector(v1.xpos + v2.xpos, v1.ypos + v2.ypos);
    }

    static sub(v1, v2)
    {
        var v = new Vector(v1.xpos - v2.xpos, v1.ypos - v2.ypos);

        return v;
    }
}