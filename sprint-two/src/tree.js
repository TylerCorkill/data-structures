require(['underscore']);

var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent;

  return _.extend(newTree, treeMethods);
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  var savedThis = this;
  this.children.push(Tree(value, savedThis));
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

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this === this.parent.children[i]) {
      this.parent.children.splice(i, 1);
      break;
    }
  }
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
