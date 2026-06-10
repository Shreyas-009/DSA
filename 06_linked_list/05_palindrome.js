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
list.addAtHead(2);
list.addAtHead(1);

function printList(list) {
  let orgHead = list.head;
  let curr = list.head;
  while (curr.next !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
  console.log(curr.val);
}

printList(list);

// Approach 1:
function palindrome_array(list) {
  let curr = list.head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let p = 0;
  let q = arr.length - 1;

  while (p <= q) {
    if (arr[p] !== arr[q]) return false;
    p++;
    q--;
  }
  return true;
}

// Approach 2
function palindrome(list) {
  let p = list.head;
  let q = list.head;
  while (q && q.next) {
    p = p.next;
    q = q.next.next;
  }

  let mid = p;

  let pre = null;
  let curr = mid;
  while (curr) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }

  let end = pre;
  let start = list.head;

  while (end) {
    if (start.val != end.val) return false;
    end = end.next;
    start = start.next;
  }
  return true;
}

console.log(palindrome_array(list));
console.log(palindrome(list));

