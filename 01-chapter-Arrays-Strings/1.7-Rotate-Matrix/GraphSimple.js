// Breadth-First Search
class Graph{
    constructor(){
        this.vertices = [];
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjacencyList.set(v, []); 
        }
    }

    addEdge(vertex1, vertex2) {

        if (!this.adjacencyList.get(vertex1)) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList.get(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    toTest(){
        return this.adjacencyList;
    }

    toGetVertices(x){
        return this.adjacencyList.get(x)
    }
}


let graph = new Graph();

 for(let i=0;i<16;i++){
    graph.addVertex(i)

 }
vertices.forEach(x => ));


graph.addEdge('B', 'G');
graph.addEdge('B', 'Y');


console.table(graph.toTest());
console.log(graph.toGetVertices('B'));