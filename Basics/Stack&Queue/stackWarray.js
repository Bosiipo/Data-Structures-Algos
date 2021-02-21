class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length - 1];
    }

    push(value){
        this.array.push(value);
        // console.log(this);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Paystack');