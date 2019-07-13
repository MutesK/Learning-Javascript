

var graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': []
}

var parents = {};
var searched = {};

var queue = [];

function isEnd(person)
{
    return person === 'peggy';
}

function setup()
{
    noCanvas();

    // you? ??
    queue.push('you');

    while(queue.length > 0)
    {
        var person = queue.shift();  // Pop

        console.log(person);

        if(!searched[person])
        {
            // ????
            if(isEnd(person))
            {
                var path = [person];
                var next = parent[person];
                
                while(next)
                {
                    path.push(next);
                    next = parent[next];
                }

                console.log(path);
                break;
            }
            else
            {
              // ?? ??? ?? ?????.
              var next = graph[person];

              for(var i = 0; i<next.length; i++)
              {
                  var neighbor = next[i];
                  queue.push(neighbor);
                  parents[neighbor] = person;
              }

              searched[person] = true;
            }
        }
    }
}