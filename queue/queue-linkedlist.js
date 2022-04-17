class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Push data in the queue
  enqueue = (elm) => {
    let node = new Node(elm)
    
    //If head is empty then
    //Add the node at the beginning
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;      
    }

    //Increase the length
    this.length++;
  };

  //Remove the item from the queue
  dequeue = () => {
    let current = this.head;

    //If there is item then remove it
    //and make the next value as the first
    if (current) {
      let elm = current.value;
      current = current.next;
      this.head = current;
      this.length--;
      return elm;
    }

    return null;
  };
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.head());

