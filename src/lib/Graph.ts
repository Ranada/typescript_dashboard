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
}