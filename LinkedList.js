/* eslint-disable no-console */
class _Node {
    constructor(value = null, next = null){
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(){
      this.length = 0;
      this.head = null;
    }
    insertFirst(item){
      this.head = new _Node(item, this.head);
      this.length++;
    }
    insertLast(item) {
      if(this.head === null){
        this.insertFirst(item);
        return;
      }
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null);
      this.length++
    }
    insertBefore(item, key) {
      if (!this.head) {
        return null;
      }
      if(this.head.value === key) {
        this.head = new _Node(item,this.head)
      }
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !==key)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = new _Node(item, currNode);
      this.length++;
    }
    insertAfter(item, key) {
      if (!this.head) {
        return null;
      }
      let currNode = this.head;
      let nextNode = this.head;
      while ((currNode !== null) && (currNode.value !== key)) {
        currNode = nextNode;
        nextNode = nextNode.next;
      }
      if(currNode === null) {
        console.log('Item not found');
        return;
      }
      currNode.next = new _Node(item, nextNode);
      this.length++;
    }
    insertAt(item, position){
      if (!this.head) {
        return null;
      }
      let currNode = this.head;
      let nextNode = this.head;
      for(let i = 1; i < position; i++) {
        currNode = nextNode;
        nextNode = nextNode.next;
      }
      if(currNode === null) {
        console.log('Invalid position')
        return;
      }
  
      currNode.next = new _Node(item, nextNode);
      this.length++;
    }
    remove(item){
      if (!this.head) {
        return null;
      }
      if(this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !==item)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
      this.length--;
    }
    find(item){
      let currNode = this.head;
      if(!this.head) {
        return null;
      }
      while (currNode.value !== item){
        if(currNode.next === null){
          return null;
        } else {
          currNode = currNode.next;
        }
      }
  
      return currNode;
    }
  }
  
  function setSLL() {
    let SLL = new LinkedList();
    SLL.insertFirst(3);
    SLL.insertFirst(62);
    SLL.insertFirst(27);
    SLL.insertFirst(10);
    SLL.insertFirst(5);
    SLL.insertFirst(24);
    SLL.insertFirst(49);
    SLL.insertFirst(34);
    // console.log(SLL);
    console.log(leftLL(SLL));
    // console.log(middle(SLL));
    console.log(rightLL(SLL));
    console.log(mergeSort(SLL))
  }
  setSLL()
  
  function size(ll) {
    console.log(ll.length);
  }
  
  function display(ll){
    console.log(ll)
  }
  
  function isEmpty(ll) {
    if (ll.head === null) {
      console.log('True')
    }
    console.log('false')
  }
  
  function findPrevious(ll, key){
    if(!ll.head) {
      return console.log('List is Empty')
    }
    let currNode = ll.head;
    let previousNode = ll.head;
    while ((currNode !== null) && (currNode.value !==key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    return console.log(previousNode)
  }
  
  function findLast(ll) {
    if(!ll.head) {
      return console.log('List is empty')
    }
    let currNode = ll.head;
    let nextNode = ll.head;
    let size = ll.length;
    for(let i = 0; i < size; i++) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }
    return console.log(currNode);
  }

  function middle(ll) {
    if(!ll.head) {
      return console.log('list is empty')
    }
    let currNode=ll.head;
    let fastPtr=ll.head;
    console.log('look at me', ll)
    while (fastPtr !== null) {
      currNode = currNode.next;
      if(fastPtr.next) {
      fastPtr=fastPtr.next.next;
      }
      else {
          fastPtr = fastPtr.next;
      }
    }
    return currNode;
  }

  function leftLL(ll) {
      if(ll.head === null || ll.head.next === null) {
          return ll;
      }
      let leftList = new LinkedList();
      let currNode = ll.head;
      console.log(currNode.value)
      console.log(middle(ll).value)
      while(currNode.value !== middle(ll).value) {
          leftList.insertLast(currNode.value);
          currNode = currNode.next;
      }
      return leftList;
  }
  function rightLL(ll){
    if(ll.head.next === null) {
        return ll;
    }
    let rightList = new LinkedList();
    let currNode = middle(ll);
    console.log('middle', middle(ll))
    while (currNode !== null) {
    rightList.insertLast(currNode.value);
    console.log(currNode)
    currNode = currNode.next;
    }
    return rightList;
  }

  function mergeSort(ll) {
    if(ll.head === null || ll.head.next === null) {
        return ll;
    };
    let left = leftLL(ll);
    let right = rightLL(ll);

    console.log(left);
    console.log(right)

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
};
  
  
  function merge(left, right) {
      
      currLeft = left.head;
      currRight = right.head;
      let orderedList = new LinkedList();
    while (currLeft !== null && currRight !== null) {
        if (currLeft.value < currRight.value) {
            orderedList.insertLast(currLeft.value);
            currLeft = currLeft.next;
        }
        else {
            console.log('made it to else')
            orderedList.insertLast(currRight.value);
            currRight = currRight.next;
        }
    }

    while (currLeft !== null) {
        orderedList.insertLast(currLeft.value);
        currLeft = currLeft.next;
    }

    while (currRight !== null) {
        orderedList.insertLast(currRight.value);
        currRight = currRight.next;
    }
    console.log(orderedList)
    return orderedList;
};

//drill 6

// [2, 3, 6, 5, 4] given min 2 max 6

function bucketSort(arr, min, max)

for(let i=1; i< arr.length; i++){
    let low = min;
    let high= max;
    let middle = Math.floor((low+high)/2)

    if(arr[i]===middle){
        middle=arr[i]
    }
    else if(arr[i]>middle){
      arr[middle]
    }
}