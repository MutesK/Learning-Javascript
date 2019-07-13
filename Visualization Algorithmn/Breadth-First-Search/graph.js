
function Graph()
{
    this.nodes = [];

    this.start = null;
    this.end = null;
}

Graph.prototype.setStart = function(node)
{
    this.start = node;
    node.start = true;
}
Graph.prototype.setEnd = function(node)
{
    this.end = node;
    node.end = true;
}
Graph.prototype.addNode = function(x, y)
{
    var node = new Node(x, y);

    this.nodes.push(node);

    return node;
}

Graph.prototype.show = function()
{
    for(var i=0; i<this.nodes.length; i++)
        this.nodes[i].showEdges(); // Show Line

    for(var i=0; i<this.nodes.length; i++)
        this.nodes[i].show();
}


