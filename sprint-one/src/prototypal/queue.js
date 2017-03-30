var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(queueMethods);
  result.dequeueCount = 0
  result.storage = {};


  return result;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length + this.dequeueCount] = value;

  },
  dequeue: function() {
    var dequeuedVal = this.storage[0 + this.dequeueCount];
    delete this.storage[0 + this.dequeueCount];
    this.dequeueCount++;
    return dequeuedVal;

  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


