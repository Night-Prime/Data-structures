//implementing a linked list 

// --using class based design pattern

class Node {
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

let newNode = new Node('Dhaniel');
console.log(newNode);

// An empty Linked List

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // function to insert a new node into the class
    insert(value){
        this.length++;
        let newNode = new Node(value);

        // check if the tail is empty before appending a new value
        if(this.tail){
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    // function that shows each node in the LinkedList

    print(){
        let current = this.head;
        while (current) {
            current = current.next;
            console.table(current);
        }
    }

    // function for the removal of node from the LinkedList
    remove() {
        // we need to check if the tail pointer is null or not
        if(this.tail){
            // first decrement the length of the linked list
            this.length--;
            
            const tailNode = this.tail;
            let currentNode = this.head;

            // the loops search and stops when the node next to the tail node is found
            while(currentNode !== tailNode){
                currentNode = currentNode.next;
            }

            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;

        }
        return null;
    }

    // Insertion and removal at the head

    insertHead(value) {
        this.length++;

        let newNode = new Node(value);

        // condition to check whether the head has an element
        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    removeHead() {
        if(this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }

    // insertion and removal done at index

    // for insertion to take place, Js engine needs to scan for the list and the first index
    insertAtIndex() {
        const newNode = new Node(value);
        // also needs to check if the index value >= node value, so as to get the method to work
        if (index >= this.length) {
            throw new Error("Insert index out of bounds");
        }
        if (index === 0) {
            return this.insertHead(value);
        }

        // then find two nodes : current node and the previous located node
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        newNode.next = currentNode;
        previousNode.next = newNode;

        this.length++;
        return newNode;
    }

    // removal at index
    removeAt(index) {
        // same conditions applied in insertion at index also applies here:
        if (index >= this.length) {
            throw new Error("Remove index out of bounds");
        }
        if (index === 0) {
            return this.removeHead();
        }
        let previousNode = null;
        let currentNode = this.head;
        
        for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
    
};


const linkedList = new LinkedList();

linkedList.insert(6);
linkedList.insert(true);
linkedList.insert(13);
linkedList.insert('Me');
linkedList.insertHead('DataStructures');
linkedList.print();
// linkedList.removeHead();

// console.log(linkedList);
