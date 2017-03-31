

// Instantiate a new graph
var Graph = function() {
  this.nodeCollection = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeCollection[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.nodeCollection;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeArray = this.nodeCollection[node];
  for (var edge of edgeArray) {
    var index = this.nodeCollection[edge].indexOf(node);
    this.nodeCollection[edge].splice(index, 1);
  }
  delete this.nodeCollection[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeCollection[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeCollection[fromNode].push(toNode);
  this.nodeCollection[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this.nodeCollection[fromNode].indexOf(toNode);
  var toIndex = this.nodeCollection[toNode].indexOf(fromNode);

  this.nodeCollection[fromNode].splice(fromIndex, 1);
  this.nodeCollection[toNode].splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodeCollection) { cb(node); }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


