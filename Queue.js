// the FIFO Pattern

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // check to see if Queue is empty
    isEmpty() {
        return !this.head;
    }

    // Add data to queue
    enqueue(value) {
        let node = new Node(value);

        // check to see if queue is empty
        if(this.isEmpty()){
            // add a node to both ends if empty.
            this.head = node;
            this.tail = node;
        } else {
            // append to the end of the queue if not.
            this.tail.next = node;
            this.tail = node;
        }
    }
    
    print(){
        let current = this.head;
        while (current) {
            current = current.next;
            console.table(current);
        }
    }

    // delete an element from the queue
    dequeue() {
        let node = this.head;
        if(!this.isEmpty()){
            this.head = this.head.next;
        }

        return node;
    }
}

const Queue = new queue;

Queue.enqueue(1);
Queue.enqueue(2);
Queue.enqueue(3);
Queue.enqueue(4);
Queue.enqueue(5);
Queue.enqueue(6);
Queue.dequeue();

Queue.print();
