class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: 10,
            next: null,
            prev: null
        },
        this.tail = this.head,
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
        const follower = leader.next;
        // Create a new next for leader
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
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
        const follower = unWantedNode.next;
        follower.prev = leader;
        console.log(follower);
        leader.next = unWantedNode.next;
        this.length--;
        console.log(this);
        // console.log(this.printList());
        return this.printList();
    }

}

// [0, (leader)3, 4, 6, 7];

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.printList();
myLinkedList.remove(1);

