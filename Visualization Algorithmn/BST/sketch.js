
var tree;

function setup()
{
    createCanvas( 600, 400);
   

    tree = new Tree();
    for(var i=0; i<20; i++)
    {
        tree.addValue(floor(random(0, 100)));
    }
    background(0);

    console.log(tree);
    tree.traverse();
}
