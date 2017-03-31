var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(key, value) {
  // debugger;
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
    this.changeSize(1);
  } else {
    let bucket = [[key, value]];
    this._storage.set(index, bucket);
    this.changeSize(1);
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
        this.changeSize(-1);
        break;
      }
    }
    if (!bucket.length) {
      this._storage.each( function(value, i, storage) {
        if (i === index) {
          storage[i] = undefined;
          HashTable.prototype.changeSize(-1);
        }
      });
    }
  }
};

HashTable.prototype.changeSize = function(num) {
  this.size += num;
  var ratio = this.size / this._limit;
  if (ratio >= 0.75) {
    this.doubleLimit();
  } else if (ratio <= 0.25) {
    this.halveLimit();
  }
};


HashTable.prototype.doubleLimit = function() {
  // LimitedArray(this._limit);
  var oldLimitedArray = [];
  this._storage.each( function(value, i, storage) {
    oldLimitedArray.push(value);
  });

  this._limit *= 2;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < oldLimitedArray.length; i++) {
    var bucket = oldLimitedArray[i];
    if (bucket) {
      for (var tuple of bucket) {
        var key = tuple[0];
        var value = tuple[1];
        this.insert(key, value);
        this.size--;
      }
    }
  }
};

HashTable.prototype.halveLimit = function() {
  var oldLimitedArray = [];
  this._storage.each( function(value, i, storage) {
    oldLimitedArray.push(value);
  });

  this._limit *= 0.5;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < oldLimitedArray.length; i++) {
    var bucket = oldLimitedArray[i];
    if (bucket) {
      for (var tuple of bucket) {
        var key = tuple[0];
        var value = tuple[1];
        this.insert(key, value);
        this.size--;
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


