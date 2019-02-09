var movers;
var time;

function setup()
{
    createCanvas(640, 480);
    smooth();

    movers = new Array();
    for(let i = 0; i<10; i++)
    {
        movers[i] = new Mover(random(0.1, 5), 0, 0);
    }

}

function draw()
{
    background(255);

    var wind = new Vector(0.01, 0);
    var gravity = new Vector(0, 0.1);

    for(let i=0; i<movers.length; i++)
    {
        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
}