// create Node
// constructor LinkedList
// insert, insertHead
// remove, removeHead
// print
// insertIndex, removeIndex

function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(node) {
    this.length++;
    let newNode = createNode(node);

    if (this.tail != null) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  insertHead(value) {
    this.length++;
    let node = createNode(value);

    if (this.head != null) {
      node.next = this.head;
      this.head = node;
      return node;
    }

    this.head = this.tail = node;
    return node;
  }

  remove() {
      this.length--;
      if (this.tail != null) {
          
      }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insertHead(3);
linkedList.print();
