var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//


// {
//   Node1 // next = null HEAD TAIL
// }


// list.head.next.next.next






