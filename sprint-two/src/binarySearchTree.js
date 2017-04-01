var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null; // always less than this.value
  this.right = null; // always greater than this.value

};


BinarySearchTree.prototype.insert = function(newVal) {
  // this.insert.call(this.right, val)
  if (newVal !== this.value) {
    if (newVal < this.value) {
      if (this.left) {
        this.left.insert(newVal);
      } else {
        this.left = new BinarySearchTree(newVal);
      }
    } else {
      if (this.right) {
        this.right.insert(newVal);
      } else {
        this.right = new BinarySearchTree(newVal);
      }
    }
  }

};


BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) { // left
    if (!this.left) { return false; }
    return this.left.contains(val);
  } else { // right
    if (!this.right) { return false; }
    return this.right.contains(val);
  }
};


BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
