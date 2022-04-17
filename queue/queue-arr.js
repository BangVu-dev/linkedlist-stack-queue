class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(node) {
    this.elements.push(node);
  }

  dequeue() {
    if (this.elements.length > 0) {
      return this.elements.shift();
    } else {
      return "Underflow situation";
    }
  }
}

const queue = new Queue();