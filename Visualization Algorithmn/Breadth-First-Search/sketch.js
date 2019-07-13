
/*
  procedure BFS(G,start_v):
      let Q be a queue
      label start_v as discovered
      Q.enqueue(start_v)
      while Q is not empty
          v = Q.dequeue()
          if v is the goal:
              return v
          for all edges from v to w in G.adjacentEdges(v) do
             if w is not labeled as discovered:
                 label w as discovered
                 w.parent = v
                 Q.enqueue(w) 
*/

var graph;
var grid;

var queue = [];
var path = [];


function setup()
{
    createCanvas(400, 400);
    graph = new Graph();


    var columns = 10;
    var rows = 10;
    var space = 40;

    grid = new Array(10);

    for(var i=0; i<columns; i++)
    {
        grid[i] = new Array(rows);

        for(var j=0; j<rows; j++)
        {
            var x = space / 2 + i * space;
            var y = space / 2 + j * space;

            grid[i][j] = graph.addNode(x, y);

        }
    }

    for(var j=0; j<rows - 1; j++)
    {
        for(var i=0; i<columns; i++)
        {
            var node = grid[i][j];

            if(random(1) < 0.8)
                node.connect(grid[i][j + 1]);

            if(random(1) < 0.8 && i < columns - 1)
                node.connect(grid[i+1][j]);
        }
    }

    frameRate(10);

    graph.setStart(grid[0][0]);

    var endX = floor(random(columns));
    var endY = floor(random(rows));

    graph.setEnd(grid[endX][endY]);

    queue.push(graph.start);
}

function draw()
{
    background(0);

    graph.show();

    queue.push(graph.start);

     if(queue.length > 0)  // if queue is not empty
     {
         var node = queue.shift();  // Pop - Dequeue
         node.highlight();  // 현재 탐색한 노드 처리
 
         if(node.searched == false)    
         {
             if(node == graph.end)  // if person is Goal?  then search is end.
             {
                 path.push(node);
                 var next = node.parent;
                 
                 while(next)
                 {
                     path.push(next);
                     next = next.parent;
                 }
 
                 noLoop();  // NO DRAW
             }
 
             var next = node.edges;  // 모든 간선
 
             for(var i = 0; i<next.length; i++) 
             {
                 var neighbor = next[i];
                 queue.push(neighbor);
                 neighbor.parent = node;
             }
 
             node.searched = true;
             
         }
     }

     if(path.length > 0)
     {
         for(var i=0; i<path.length; i++)
            path[i].highlight()
     }
}