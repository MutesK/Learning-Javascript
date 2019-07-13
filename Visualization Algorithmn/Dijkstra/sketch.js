
/*
   function Dijkstra(Graph, source):
 
       create vertex set Q                     //  ???? ?? Q ( ???? ?? ???? ?? )
 
       for each vertex v in Graph:             // ???
           dist[v] ? INFINITY                           // ???? v??? ?? ??? ??
           prev[v] ? UNDEFINED                          // ???? ?? ??? ?? ???
           add v to Q                                // ?? ??? ??? Q? ???? (??? ??)
 
      dist[source] ? 0                                 // ???? ????? ??

      while Q is not empty:
          u ? vertex in Q with min dist[u]         // ?? ??? ?? ???
                                                            // ? ?? ?? ????
          remove u from Q

          for each neighbor v of u:           // v? ??? Q? ??.
              alt ? dist[u] + length(u, v)
              if alt < dist[v]:               // v ??? ? ?? ??? ??? ?
                  dist[v] ? alt
                  prev[v] ? u

      return dist[], prev[]
*/
var graph = {
    'start': {
      'a': 6,
      'b': 2
    },
    'a': {
      'fin': 1
    },
    'b': {
      'a': 3,
      'fin': 5
    },
    'fin': {}
  }

  var costs = {
    'a': 6,
    'b': 2,
    'fin': Infinity
  };

  var parents = {
    'a': 'start',
    'b': 'start'
  };

  var processed = {};

  function lowestCost(costs) {
    var record = Infinity;
    var lowest;
  
    for (node in costs) {
      if (costs[node] < record && !processed[node]) {
        record = costs[node];
        lowest = node;
      }
    }
    return lowest;
  }

  function setup() {
    noCanvas();
  
    // Start and end
    var start = 'start';
    var end = 'fin';
  
    // What's the lowest cost
    var node = lowestCost(costs);
  
    // As long as I still haves somewhere to go
    while (node != undefined) {
      var cost = costs[node];
      var neighbors = graph[node];

      for (n in neighbors) {
        var newcost = cost + neighbors[n];
        // Is the new cost less?
        if (costs[n] > newcost) {
          costs[n] = newcost;
          parents[n] = node;
        }
      }
      // It's processed
      processed[node] = true;
      // Keep going
      node = lowestCost(costs);
    }
  
    console.log(graph);
    console.log(costs);
    console.log(parents);
    console.log(processed);
  
    // Put together a path
    var path = [end];
    var next = parents[end];
    while (next) {
      path.push(next);
      next = parents[next];
    }
    console.log(path);
  
  }