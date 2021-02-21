import { LinkedList, Node } from "./module.mjs";

const l1 = new LinkedList(1);
l1.append(2);
l1.append(4);

const l2 = new LinkedList(1);
l2.append(3);
l2.append(4);

console.log(l1, l2);

var mergeTwoLists = function(l1, l2) {
  // let list = new LinkedList();
  debugger;

  let current = l1.head;
  let runner = l2.head;
  let prev = null;
  
  while(current !== undefined){ 
    // Merge
    if(current.next === null){
      current.next = runner;
      current = l1.head;
      console.log('l1 break', l1.printList());
      runner = null;
      break;
    }
    
    //Sort

    if(current.next.value <= current.value){
      if(prev === null){
        let temp = runner.next;
        l1 = runner;
        current.next = temp;
        runner.next = current;
      }
    }
    
    current = current.next;
  }
  
  console.log('answer', l1);

  console.log('curr', current);
  

  return l1;
  
};

mergeTwoLists(l1, l2);
