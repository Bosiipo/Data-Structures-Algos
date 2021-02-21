export class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor(value){
        this.head = {
            value,
            next: null
        },
        this.tail = this.head,
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // console.log(this);
        // console.log(this.printList());
        // return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        // console.log(array);
        return array;
    }

    insert(index, value){
        // Check Params
        if (index >= this.length) {
            // If index does not exist, 
            return this.append(value);
        }
        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1);
        // Hold the current next for leader
        const holdingPointer = leader.next;
        // Create a new next for leader
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        console.log(this.printList())
        return this.printList();
    }

    // A new way to loop through something
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        console.log(this.printList());
        return this.printList();
    }

    reverse() {
        if(!this.head.next){
            return this.head;
        };
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.temp;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

}

const myLinkedList = new LinkedList(1);
// const ListB = new LinkedList(20);
// const ListC = new LinkedList(7);
// [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.append(4);
myLinkedList.printList();

















