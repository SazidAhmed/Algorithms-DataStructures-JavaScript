// Creates a stack
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};

        // Adds a value onto the end of the stack
        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };

        // Removes and returns the value at the end of the stack
        this.pop = function () {
            if (this.count === 0) {
                return undefined;
            }

            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        this.size = function () {
            return this.count;
        };

        // Returns the value at the end of the stack
        this.peek = function () {
            return this.storage[this.count - 1];
        };

         // Returns the value at the end of the stack
         this.lists = function () {
            return this.storage;
        };
    }
}

var myStack = new Stack();

myStack.push("apple");
myStack.push("orange");
console.log("Last inserted data is", myStack.peek());
console.log("List is", myStack.lists());
console.log("List count is", myStack.size());

myStack.push("lemone");
console.log("Inserted new data .. ..");
console.log("New inserted data is", myStack.peek());
console.log("List is", myStack.lists());
console.log("List count is", myStack.size());

console.log("Removed data is", myStack.pop());
console.log("List is", myStack.lists());
console.log("List count is", myStack.size());

myStack.push("pineapple");
console.log("Inserted new data .. ..");
console.log("New inserted data is", myStack.peek());
console.log("List is", myStack.lists());
console.log("List count is", myStack.size());

// value  index   count
// 1       0       1 
// 3       1       2
// 5       2       3