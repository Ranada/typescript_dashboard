export class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const poppedAdjacentVertex = this.adjacencyList[vertex].pop();
            if (poppedAdjacentVertex)
                this.removeEdge(vertex, poppedAdjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}
//# sourceMappingURL=Graph.js.map