// the LIFO Pattern

class stack {
    constructor() {
        this.data = {}; // using an object instead of an array;
        this.count = 0;
    }

    // Add an element to the empty stack
    push(element) {
        this.data[this.count] = element;
        this.count++;
    }

    // to check whether the stack is empty
    isEmpty() {
        return this.top === 0;
    }

    // deletes an element from the stack
    pop() {
        if(this.isEmpty() === false) {
            this.count--;
            let result = this.data[this.count];
            delete this.data[this.count];
            return result;
        }
    }

    // to return the element at the top of the stack
    peek() {
        if(this.isEmpty() === true) {
            console.log('Stack is empty');
            return;
        }
        return this.data[this.count - 1];
    }
}

const Stack = new stack();

Stack.push(1);
Stack.push(5);
Stack.push(11);
Stack.push(16);
Stack.push(6);
Stack.push(21);
Stack.push(50);
Stack.pop();
Stack.isEmpty();
Stack.peek();
console.table(Stack);
