var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var tuple of bucket) {
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;
  } else {
    let bucket = [[key, value]];
    this._storage.set(index, bucket);
    this.size++;
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var tuple of bucket) {
      if (tuple[0] === key) { return tuple[1]; }
    }
  }
  return bucket;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        break;
      }
    }
    if (!bucket.length) {
      this._storage.each( function(value, i, storage) {
        if (i === index) {
          storage[i] = undefined;
          this.size--;
        }
      });
    }
  }
};

HashTable.prototype.doubleLimit = function() {

};

HashTable.prototype.halveLimit = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


