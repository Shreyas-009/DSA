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
  this.size++;
};

let head = new linkedList();
head.addAtHead(1);
head.addAtHead(2);
head.addAtHead(3);
head.addAtHead(4);
head.addAtHead(5);

function printAll(list) {
  let head = list.head;
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head.head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head.head = prev;
  return head;
}

printAll(head);
reverseList(head);

console.log(reverseList(head));

printAll(reverseList(head));
