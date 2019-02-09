class FrameChecker
{
    constructor()
    {
        this.frame = 0;
        this.startTime = new Date();
        this.endTime = 0;
    }

    framecheck()
    {
        this.endTime = new Date();
        
        if(this.endTime - this.startTime >= 1000)
        {
            console.log("FPS : " + this.frame);
            this.frame = 0;

           this.startTime = new Date();
        }
        else
            this.frame++;

      //  console.log("startTime : " + this.startTime + " endTime : " + this.endTime);
    }

    frameSkip()
    {
        this.framecheck();
        
        if(this.frame < 60)
            return true;
        
        return false;
    }
}