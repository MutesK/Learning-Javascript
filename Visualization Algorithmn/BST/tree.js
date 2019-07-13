

function Tree()
{
    this.root = null;
}


Tree.prototype.addValue = function(value)
{
   var n = new Node(value);

   if(this.root == null)
   {
       this.root = n;
       this.root.x = width / 2;
       this.root.y = 16;

       return;
   }

   this.root.addNode(n);

}

Tree.prototype.traverse = function()
{
    this.root.visit(this.root);
}


Tree.prototype.search = function(value)
{
    return this.root.search(value);
}