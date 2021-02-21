import { LinkedList, Node } from "./module.mjs";

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(6);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);

let sweer = myLinkedList.printList();
// console.log('my', myLinkedList);

var removeElements = function(linkedList, val) {
    // debugger;
  let slow = linkedList;
  let fast = linkedList.head.next;
  if(slow.next === null){
      if(slow.val === val){
        head = null
      }
  }
  while(fast != null){ //while head.next exists
      if(fast.val === val){
          slow.next = fast.next;
      }
      slow = fast;
      fast = fast.next;
  }
  return head;
  console.log('head', head);
};

// removeElements(myLinkedList, 6);

















