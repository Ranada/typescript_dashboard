export class Graph {
    adjacencyList: { [key: string]: string[] }
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex: string) {
        while (this.adjacencyList[vertex].length) {
            const poppedAdjacentVertex = this.adjacencyList[vertex].pop();
            if (poppedAdjacentVertex) this.removeEdge(vertex, poppedAdjacentVertex);
        }
        delete this.adjacencyList[vertex];
    } 
}