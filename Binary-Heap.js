// Binary Heap are used in Priority Queues (ADT)

class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    // Adding a value to the heap
    push(value) {
        this.heap.push(value);
    }

    // Bubble up -- swapping the values at each node
    bubbleUp() {
        let newNodeIndex = this.heap.length - 1;

        while(true) {
            let parentNodeIndex = Math.floor(newNodeIndex - 1/2);

            if (this.heap[parentNodeIndex] < this.heap[newNodeIndex]) {
                // swappng occurs here 
                let temp = this.heap[parentNodeIndex];

                this.heap[parentNodeIndex] = this.heap[newNodeIndex];
                this.heap [newNodeIndex] = temp;
                newNodeIndex = parentNodeIndex;
            } else {
                return;
            }
        }
    }

    // Extracting the maximum value from the heap to bubble down
    extractMax() {
        let max = this.heap.shift();
        this.bubbleDown();

        return max;
    }

    bubbleDown() {
        let lastHeapNode = this.heap.pop();
        this.heap.unshift(lastHeapNode);

        let index = 0;
        while(true) {
            // how to locate whether a value is of the left or right side of the heap
            let childRightIndex = (2 * index) + 1;
            let childLeftIndex = (2 * index) + 1;

            let largestChildIndex;

            // Comparing both the left and right child nodes to each other to determin the largest value
            if (childLeftIndex < this.heap.length && childRightIndex < this.heap.length) {
                largestChildIndex = this.heap [childLeftIndex] > this.heap[childLeftIndex] ? childLeftIndex : childRightIndex;
            } else {
                largestChildIndex = childLeftIndex;
            }

            // After getting the largest Chikd Node value, swapping the value with its index of its parent is next:
            if(this.heap[index] < this.heap[largestChildIndex]) {
                let temp = this.heap[largestChildIndex];
                this.heap[index] = this.heap[largestChildIndex];
                this.heap[largestChildIndex] = temp;
                index = largestChildIndex;
            } else {
                return;
            }

        }
    }
    pop(value) {
        this.heap.pop(value);
    }

    print() {
        console.table(this.heap);
    }
}

const binaryheap = new BinaryHeap ();

binaryheap.push(40);
binaryheap.push(25);
binaryheap.push(30);
binaryheap.push(8);
binaryheap.push(6);
binaryheap.push(32);
binaryheap.push(25);
binaryheap.push(21);
binaryheap.push(70);


// for insertion or removal to occur, it is necessary to call these methods
binaryheap.bubbleUp();
binaryheap.bubbleDown();
binaryheap.extractMax();

binaryheap.print();

// unable to determine why this class methods isn't working properly, i suspect the Complete-Binary Tree rule is at play here.
// could also be the Max and Min Binary Heap issue

// Now i've figured it out, the BubbleUp or BubbleDown functions work independently of each other.