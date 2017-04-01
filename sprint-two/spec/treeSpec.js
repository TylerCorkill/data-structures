describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a parent property', function() {
    tree.addChild(4);
    tree.children[0].addChild(0);
    expect(tree.children[0].children[0].parent.value).to.equal(4);
    expect(tree.children[0].parent.value).to.equal(undefined);
  });

  it('should remove child of parent', function() {
    tree.addChild(4);
    tree.children[0].addChild(1);
    var savedChild = tree.children[0].children[0];
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children.length).to.equal(0);
    expect(savedChild.parent).to.equal(null);
  });

  it('should call callback on all children', function() {
    tree.addChild(4);
    tree.addChild(6);
    tree.addChild(8);
    tree.children[0].addChild(1);
    tree.children[0].addChild(9);
    tree.children[0].addChild(7);

    // tree.children[1].addChild(12);
    // tree.children[1].addChild(91);
    // tree.children[1].addChild(75);

    // tree.children[2].addChild(32);
    // tree.children[2].addChild(23);
    // tree.children[2].addChild(53);

    var addOne = function(value) {
      return value + 1;
    };

    tree.children[0].traverse(addOne);

    expect(tree.children[0].value).to.equal(5);
    expect(tree.children[1].value).to.equal(7);
    expect(tree.children[2].value).to.equal(9);
    expect(tree.children[0].children[0].value).to.equal(2);
    expect(tree.children[0].children[1].value).to.equal(10);
    expect(tree.children[0].children[2].value).to.equal(8);
    // expect(tree.children[1].children[0].value).to.equal(13);
    // expect(tree.children[1].children[1].value).to.equal(92);
    // expect(tree.children[1].children[2].value).to.equal(76);
    // expect(tree.children[2].children[0].value).to.equal(33);
    // expect(tree.children[2].children[1].value).to.equal(24);
    // expect(tree.children[2].children[2].value).to.equal(54);
  });



});
