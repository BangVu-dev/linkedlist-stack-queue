class newNode {
    constructor(data, next) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bot = null;
    }
  
    push(ele) {
      var node = new newNode(ele);
      if (this.bot != null) {
          this.bot.next = node;
          node.prev = this.bot;
          this.bot = node;
          return node 
      }
      node.next = this.top;
      node.prev = this.top;
      this.bot = node;
      this.top = node;
      return node
    }
  
    pop() {
      var temp = this.top;
      this.top = this.top.next;
      temp = null;
    }
  }
  
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log(stack);