import { LinkedList, Node } from "./module.mjs";

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const {head} = list;

var reverseList = function(head) {
  debugger;
  let prev = null;
  let current = head;
  while(current){
    let temp = current.next;
    // fulcrum: current.next creates a new state, that we want by setting a .next from the current value to match null first of all
    current.next = prev; 
    // prev now becomes the current list whose .next value has been updated, thereby creating a new list.
    prev = current;
    // current moves on to the next original value in the original list given; 
    current = temp;
  }
  console.log('prev', prev);
  return prev;
};

// current = [1, 2, 3, 4, 5];
// @temp = current.next ==> [2, 3, 4, 5]; (grabs the next head on the list);
// @current.next = prev ==> [1, null]; (updates pointer of current node in list); /It's like PAUSE here\
// @prev = current ==> prev becomes a ref as in another object is created which matches [1, null] as in current. 
// @current = temp ==> current continues it's journey as [2, 3, 4, 5]; /And PLAY here\

reverseList(head);