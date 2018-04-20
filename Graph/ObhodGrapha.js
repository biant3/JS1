function Graph(nodes) {
    // Строим граф из списка ребер
    let graph = {};
    for (node of nodes) {
        let weight;
        if (!graph[node[0]]) graph[node[0]] = {};
        if (!graph[node[1]]) graph[node[1]] = {};

        // Если вес указан придаем его соответствующим ребрам в списке (ребрам A,B и B,A), если не указан считаем равным 1
        (node[2])? weight = node[2]: weight = 1;
        graph[node[0]][node[1]] = weight;
        graph[node[1]][node[0]] = weight;
    }

    // Функция обхода в глубину DFS
    this.DFS = function (start) {

        // Вызываем рекурсивную фунция обхода в глубину
        depthfs(start);

        function depthfs(node, visited = {}) {
            
            // Помечаем пройденную вершину
            visited[node] = 1;
            console.log(node);
            for (let child in graph[node]) {
                if (!visited[child]) depthfs(child, visited);
            }
        }
    }



    // Функция обхода в ширину BFS
    this.BFS = function (start) {
        const visited = {};
        const q = [start];

        // Помечаем пройденную вершину
        visited[start] = 1;
        console.log(start);

        while (q.length > 0) {
            let currentNode = q.shift()
            for (let child in graph[currentNode]) {
                if (!visited[child]) {
                    q.push(child);
                    visited[child] = 1;
                    console.log(child);
                }
            }
        }
    }


}

let graph1 = new Graph( [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]] );
console.log('Функция обхода в глубину');
graph1.DFS(4);
console.log('Функция обхода в ширину');
graph1.BFS(4);
