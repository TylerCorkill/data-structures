var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var dequeueCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length + dequeueCount] = value;
  };

  someInstance.dequeue = function() {
    var dequeuedVar = storage[0 + dequeueCount];
    delete storage[0 + dequeueCount];
    dequeueCount++;
    return dequeuedVar;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
