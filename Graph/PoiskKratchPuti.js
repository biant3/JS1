function Graph(nodes) {
    // Строим граф из списка ребер
    let graph = {};
    for (node of nodes) {
        let weight;
        if (!graph[node[0]]) graph[node[0]] = {};
        if (!graph[node[1]]) graph[node[1]] = {};

        // Если вес указан придаем его соответствующим ребрам в списке (ребрам A,B и B,A), если не указан считаем равным 1
        (node[2]) ? weight = node[2] : weight = 1;
        graph[node[0]][node[1]] = weight;
        graph[node[1]][node[0]] = weight;
    }

    // Поиск кратчайшего пути по Алгоритму Дейкстры
    var INFINITY = 1/0;

        this.shortestPath = function (start, finish) {
            var nodes = new PriorityQueue(),
                distances = {},
                previous = {},
                path = [],
                smallest, vertex, neighbor, alt;

            for(vertex in graph) {
                if(vertex == start) {
                    distances[vertex] = 0;
                    nodes.enqueue(0, vertex);
                }
                else {
                    distances[vertex] = INFINITY;
                    nodes.enqueue(INFINITY, vertex);
                }

                previous[vertex] = null;
            }

            while(!nodes.isEmpty()) {
                smallest = nodes.dequeue();

                if(smallest == finish) {
                    path = [];

                    while(previous[smallest]) {
                        path.unshift(smallest);
                        smallest = previous[smallest];
                    }
                    path.unshift(''+start);

                    break;
                }

                if(!smallest || distances[smallest] === INFINITY){
                    continue;
                }

                for(neighbor in graph[smallest]) {
                    alt = distances[smallest] + graph[smallest][neighbor];

                    if(alt < distances[neighbor]) {
                        distances[neighbor] = alt;
                        previous[neighbor] = smallest;

                        nodes.enqueue(alt, neighbor);
                    }
                }
            }

            return path;
        };
    }

function PriorityQueue () {
    this._nodes = [];

    this.enqueue = function (priority, key) {
        this._nodes.push({key: key, priority: priority });
        this.sort();
    };
    this.dequeue = function () {
        return this._nodes.shift().key;
    };
    this.sort = function () {
        this._nodes.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };
    this.isEmpty = function () {
        return !this._nodes.length;
    };
}


let graph = new Graph( [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]] );
console.log(graph.shortestPath(4, 0));
console.log(graph.shortestPath(1, 5));
