class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if (this.head === null){
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.head !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, newItem){
    if(this.head === null){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null){
      console.log('item not found');
      return;
    }

    if(currNode === this.head){
      this.insertFirst(newItem);
      return;
    }

    prevNode.next = new _Node(newItem, currNode);
  }

  insertAfter(item, newItem){
    if(this.head === null){
      return null;
    }

    let currNode = this.head;
    let nextNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      currNode = currNode.next;
      nextNode = currNode.next;
    }

    if(currNode === null){
      console.log('item not found');
      return null;
    }

    currNode.next = new _Node(newItem, nextNode.next);
  }

  insertAt(item, index){
    if (!this.head){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    for (let i = 0; i < index; i ++){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null){
      console.log('invalid position');
      return;
    }

    prevNode.next = new _Node(item, currNode.next);
  }

  find(item){
    let currNode = this.head;

    if(!this.head){
      return null;
    }

    while(currNode.value !== item){

      if(currNode.next === null){
        return null;
      }

      else{
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  remove(item){

    if(!this.head){
      return null;
    }

    if(this.head.value === item){
      this.head = this.head.next;
    }

    let currNode = this.head;

    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

}

function display(ll){
  if(ll.head === null){
    console.log('list is empty');
  }

  let values = [];

  let currNode = ll.head;

  while(currNode !== null){
    console.log(currNode);
    values.push(currNode.value);

    currNode = currNode.next;
  }

  console.log(values);
}

function size(ll){

  let counter = 0;

  if(ll.head === null){
    console.log('list is empty');
    return counter;
  }

  let currNode = ll.head;

  while(currNode !== null){
    counter ++;
    currNode = currNode.next;
  }

  return counter;
}

function isEmpty(ll){
  if(ll.head === null){
    return true;
  }

  return false;
}

function findPrevious(ll, item){
  if(ll.head === null){
    console.log('list is empty');
    return;
  }

  let currNode = ll.head;
  let prevNode = ll.head;

  while((currNode.value !== item) && (currNode.next !== null)){
    prevNode = currNode;
    currNode = currNode.next;
  }

  if(currNode.next === null){
    return 'item not found';
  }

  if(currNode === ll.head){
    console.log('no previous nodes');
    return;
  }

  return prevNode;
}

function findLast(ll){

  if(ll.head === null){
    return 'list is empty';
  }

  let currNode = ll.head;

  while(currNode.next !== null){
    currNode = currNode.next;
  }

  return currNode;
}


function main(){
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('bubba');


  SLL.insertFirst('Tauhida');


}

main();

// #4 This function removes duplicates from a linked list

function reverseList(ll){
  if (!ll.head || !ll.head.next){
    return ll.head;
  }
  
  let currNode = ll.head;
  let prevNode = null;
  let nextNode;

  while(currNode !== null){
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  } 

  ll.head = prevNode;

  return ll;
}

function rreverseList(list){
  const reverse = new LinkedList();
  let currNode = list.head;
  let sze = size(list);
  for (let i = 0; i < sze; i++){
    reverse.insertFirst(list.find(currNode.value).value);
    currNode = currNode.next;
  }

  return display(reverse);
}


function thirdFromEnd(ll){
  if(ll.head === null){
    return 'empty list';
  }

  let currNode = ll.head;
  let nextNode = currNode.next;
  let lastNode= nextNode.next;

  while(lastNode.next !== null){
    currNode = currNode.next;
    nextNode = currNode.next;
    lastNode = nextNode.next;
  }

  console.log(currNode);

  return currNode;
}

function listMedian(ll){
  if(!ll.head){
    return 'invalid list';
  }
  let currNode = ll.head;
  let middle = Math.floor(size(ll)/2);

  for (let i = 0; i < middle; i++){
    currNode = currNode.next;
  }

  console.log(currNode);

  return currNode;

}

function listCycle(ll){
  let fast = ll.head;
  let slow = ll.head;

  while (slow.next !== null){
    slow = slow.next;

    if(fast.next !== null){
      fast = fast.next.next;
    } else {
      return false;
    }
    if(slow === null || fast === null){
      return false;
    }
    if(slow === fast){
      return true;
    }
  }
}



// DoubleLinkedList

class _DoubleNode {
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item){
    if (this.head === null){
      this.head = this.tail = new _DoubleNode(item, this.head, null);
    } else {
      this.head.prev = this.head = new _DoubleNode(item, this.head, null);
      
    }
  }

  insertLast(item){
    if (this.tail === null){
      this.insertFirst(item);
    }
    else {
      this.tail.next = this.tail = new _DoubleNode(item, null, this.tail);
    }
  }

  insertBefore(item, newItem){
    if(this.head === null){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null){
      console.log('item not found');
      return;
    }

    if(currNode === this.head){
      this.insertFirst(newItem);
      return;
    }

    prevNode.next = new _DoubleNode(newItem, currNode, prevNode);
    currNode.prev = prevNode.next;
  }

  insertAfter(item, newItem){
    if(this.head === null){
      return null;
    }

    let currNode = this.head;
    let nextNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      currNode = currNode.next;
      nextNode = currNode.next;
    }

    if(currNode === null){
      console.log('item not found');
      return null;
    }

    currNode.next = new _DoubleNode(newItem, currNode, nextNode);
    nextNode.prev = currNode.next;
  }

  insertAt(item, index){
    if (!this.head){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    

    for (let i = 0; i < index; i ++){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null){
      console.log('invalid position');
      return;
    }


    currNode.prev = prevNode.next = new _DoubleNode(item, currNode, prevNode);
  }

  find(item){
    let currNode = this.head;

    if(!this.head){
      return null;
    }

    while(currNode.value !== item){

      if(currNode.next === null){
        return null;
      }

      else{
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  remove(item){

    if(!this.head){
      return null;
    }

    if(this.head.value === item){
      this.head = this.head.next;
      this.head.next.prev = null;
    }

    let currNode = this.head;

    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('item not found');
      return;
    }
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
  }

}

function reverseDblList(ll){
  if (!ll.head || !ll.head.next){
    return null;
  }
  
  let currNode = ll.head;
  let prevNode = null;
  let nextNode;

  while(currNode !== null){
    nextNode = currNode.next;
    currNode.next = prevNode;
    currNode.prev = currNode;
    prevNode = currNode;
    currNode = nextNode;
  } 

  ll.head = prevNode;

  return ll;
}


function dblMain(){
  const dblList = new DoubleLinkedList();

  dblList.insertFirst('Nick');
  dblList.insertFirst('Blake');
  dblList.insertBefore('Nick', 'Chris');
  dblList.insertAt('Wyatt', 1);
  // dblList.remove('Chris');
  reverseDblList(dblList);
  display(dblList);
  // console.log(dblList);
}

dblMain();


