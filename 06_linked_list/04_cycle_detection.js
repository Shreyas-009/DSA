function Node(val) {
  this.val = val;
  this.next = null;
}

function linkedList() {
  this.head = null;
  this.size = 0;
}

linkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
};

let list = new linkedList();

list.addAtHead(1);
list.addAtHead(2);
list.addAtHead(3);
list.addAtHead(4);

function makeCycle(list) {
  let orgHead = list.head;
  let curr = list.head;
  while (curr.next !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
  curr.next = orgHead;
  console.log(curr.val);
  console.log(curr?.next?.val);
}

makeCycle(list);


// Approach 1:

// using set method 
// adding nodes in set one by one
// while adding newnode check if that node is already present in set
// if yes then cycle is present  
// if not we and reach end as our value goes to null then we can say that our list end no cycle present 
function hasCycle(list) {
  let curr = list.head;
  let set = new Set();
  while (curr != null) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }
  return false;
}


// Approach 2 [Floyd's Algorithm]
function hasCycle2(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast != null) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow == fast) return true;
  }
  return false;
}


console.log(hasCycle(list));
console.log(hasCycle2(list));
