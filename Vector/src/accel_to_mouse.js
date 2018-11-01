var movers;
var fps;


function setup()
{
    var element = document.createElement('p');
    var text = document.createTextNode("마우스로 향하는 가속도가 붙는 공!");

    element.appendChild(text);
    document.body.appendChild(element);

    createCanvas(640, 480);
    smooth();

    movers = new Array();

    for(let i=0; i<10; i++)
    {
        movers.push(new Mover());
    }

    fps = new FrameChecker();

}

function draw()
{

            background(0);
    
            for(let i=0; i<movers.length; i++)
            {
                movers[i].update();
                movers[i].checkEdges();
                movers[i].display();
            }

        
}