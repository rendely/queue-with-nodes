class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    const node = new Node(data);

    if (!this.front){
      this.front = node;
    }
    else if (this.rear) {
      this.rear.next = node;
    }

    this.rear = node;

  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    if (!this.front) return null 

    const node = this.front;
    this.front = node.next;
    if (!node.next) this.rear = null;

    return node
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;

  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    return !this.rear
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    let count = 0;
    let node = this.front;

    while (node){
      count++;
      node = node.next;
    }

    return count;

  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {

    let index = 0;
    let node = this.front;

    while (node){
      if (node.data === target) return index
      index++;
      node = node.next;
    }

    return -1;

  }
}

if (require.main === module) {
  const one = new  Node(1)
  const two = new Node(2)
  const three = new Node(3)

  one.next = two;

  const q = new Queue(one);

  console.log(q.search(2))
  console.log(q)
 
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
