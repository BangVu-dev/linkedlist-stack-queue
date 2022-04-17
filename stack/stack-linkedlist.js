class newNode {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(ele) {
    var node = new newNode(ele);    
    node.next = this.top;
    this.top = node;
  }

  pop() {
    var temp = this.top;
    this.top = this.top.next;    
    return temp
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());