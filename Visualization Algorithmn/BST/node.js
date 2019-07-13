function Node(value, x, y)
{
    this.value = value;
    this.left = null;
    this.right = null;

    this.distance = 2;
    this.x = x;
    this.y = y;
}

Node.prototype.addNode = function(node)
{
    if(node.value < this.value)
    {
        if(this.left == null)
        {
            this.left = node;
            this.left.x = this.x - (width / pow(2, node.distance));
            this.left.y = this.y + (height / 12);
        }
        else
        {
            node.distance++;
            this.left.addNode(node);
        }
    }
    else
    {
        if(this.right == null)
        {
            this.right = node;
            this.right.x = this.x + (width / pow(2, node.distance));
            this.right.y = this.y + (height / 12);
        }
        else
        {
             node.distance++;
             this.right.addNode(node);
        }
    }
}

Node.prototype.visit = function(parent)
{
    if(this.left != null)
        this.left.visit(this);
    
    stroke(100);
    console.log(parent);
    line(parent.x, parent.y, this.x, this.y);

    stroke(255);
    fill(0);
    ellipse(this.x, this.y, 24, 24);
    noStroke();

    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(this.value, this.x, this.y + 4);

    console.log(this.value);
    
    if(this.right != null)
        this.right.visit(this);
}

Node.prototype.search = function(value)
{
    if(this.value == value)
    {
        console.log("found " + this);
        return this;
    }
    else if(value < this.value && this.left != null)
        this.left.search(value);
    else if(value > this.value && this.right != null)
        this.right.search(value);

    return null;
}
