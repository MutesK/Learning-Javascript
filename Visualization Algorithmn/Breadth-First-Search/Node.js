
function Node(x, y) 
{
    this.x = x;
    this.y = y;

    this.start = false;
    this.end = false;

    this.edges = [];  // ??

    this.searched = false;
    this.parent = null;
}

Node.prototype.connect = function()
{
    for(var i=0; i<arguments.length; i++)
        this.edges.push(arguments[i]);  // Insert Nodes
}

Node.prototype.show = function()
{
   stroke(255);
   fill(0);

    if(this.start || this.end)
        fill(0,0,255);
    else if(this.searched)
        fill(255, 0, 0);
    else 
        fill(0, 0, 0);

    ellipse(this.x, this.y, 16, 16);
    
}

Node.prototype.highlight = function()
{
    fill(0, 255, 255, 150);
    ellipse(this.x, this.y, 16, 16);
}

Node.prototype.showEdges = function()
{
    noFill();
    stroke(255);

    for(var i=0; i<this.edges.length; i++)
        line(this.x, this.y, this.edges[i].x, this.edges[i].y);
}