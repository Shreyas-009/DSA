function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

let head = new LinkedList();
head.addAtHead(5);
head.addAtHead(6);
head.addAtHead(1);
head.addAtHead(8);
head.addAtHead(9);
head.addAtHead(4);

function findMiddle(head) {
  let ptr1 = head;
  let ptr2 = head;
  while (ptr2 !== null && ptr2.next !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
  }
  return ptr1.val;
}

console.log(findMiddle(head.head));
