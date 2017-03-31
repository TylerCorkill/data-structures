

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._collisions = {};
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.each( function(value, i, storage) {
    if (i === index) { storage[i] = undefined; }
  });
};

// callback(value, index, storage)

// [undef, undef, undef, 5, undef, 7, undef, undef]


/*
 * Complexity: What is the time complexity of the above functions?
 */


