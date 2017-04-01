var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;

    if (list.head.next) {
      list.head.next.previous = null;
    }
    list.head = list.head.next;

    return formerHead;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.tail) {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    } else {
      list.tail = newNode;
      list.head = newNode;
    }

  };

  list.removeTail = function() {
    var formerTail = list.tail.value;

    if (list.tail.previous) {
      list.tail.previous.next = null;
    }
    list.tail = list.tail.previous;

    return formerTail;
  };


  list.contains = function(target) {
    return _search(target, list.head);
  };

  var _search = function(target, nodeObj) {
    if (!nodeObj) { return false; }
    if (nodeObj.value === target) {
      return true;
    } else {
      return _search(target, nodeObj.next);
    }
  };


  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};