var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.dequeueCount = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length + this.dequeueCount] = value;
};

Queue.prototype.dequeue = function() {
  var dequeuedVal = this.storage[0 + this.dequeueCount];
  delete this.storage[0 + this.dequeueCount];
  this.dequeueCount++;
  return dequeuedVal;

};
