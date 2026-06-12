function Node(val) {
  this.val = val;
  this.next = null;
}

function linkedList() {
  this.head = null;
}

linkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
};

let list = new linkedList();

list.addAtHead(5);
list.addAtHead(4); // delete
list.addAtHead(3);
list.addAtHead(2); 
list.addAtHead(1);

function printList(list) {
  let curr = list.head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
printList(list);

let nthFromLast = 2;

// approach 1
function removeElements1(list, n) {
  let len = 0;
  let dummy = new Node(0);
  dummy.next = list.head;
  let curr = dummy;

  while(curr){
    len++;
    curr = curr.next;
  } 

  let target = len - n;
  curr = dummy;
  for(let i = 0 ; i < target ; i++){
    curr = curr.next;
  }
  curr.next = curr.next.next;
  
  return dummy.next;
}


// approach 2
function removeElements(list, n) {
  let dummy = new Node(0);
  dummy.next = list.head;
  let slow = dummy;
  let fast = list.head;

  for (let i = 1; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

// list.head = removeElements1(list, nthFromLast);
list.head = removeElements(list, nthFromLast);
console.log("updated list : ");

printList(list);
