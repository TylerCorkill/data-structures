require(['underscore']);

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  return _.extend(newTree, treeMethods);
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.children.length) { return this._search(target, this); }
  return false;
};

treeMethods._search = function(target, node) {
  for (var child of node.children) {
    if (child.value === target) { return true; }
    if (child.children.length && this._search(target, child)) { return true; }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
