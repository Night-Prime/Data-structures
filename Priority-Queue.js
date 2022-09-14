// simply a queue with a mix of trees lol

// treating the values as a node
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    // add a new node to the queue
    enqueue(val, priority) {
        // so we basically store each value as a node
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        // we push the value to the queue
        let index = this.values.length -1;
        const current = this.values[index];

        // looping through the queue to swap the added value in terms of priority

        while(index > 0){
            let parentIndex = Math.floor((index -1)/2 );
            let parent = this.values[parentIndex];

            if(parent.prority < current.priority){
                this.values[parentIndex] = current;
                this.values[index] = parent;

                index = parentIndex;
            } else 
            break;
        }
    }

    // remove a node from the priority queue
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        let index = 0;
        let length = this.values.length;
        const current = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            // way too complicated, i know too
            if(leftChildIndex< length){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > current.priority) swap = leftChildIndex;
            }
            if(rightChildIndex< length){
                rightChild = this.values[rightChildIndex];
                if(
                    (   swap === null && leftChild.priority > current.priority ||
                        swap !== null && leftChild.priority < current.priority    
                    )
                ) swap = rightChildIndex;
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = current;
            index = swap;
        }

        return max;
    }
}

const test = new PriorityQueue();

test.enqueue(3, 4);
test.enqueue(7, 2);
test.enqueue(1, 8);
test.enqueue(9, 5);
// console.log(test.dequeue());

console.table(test);