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

let listA = new linkedList();
let listB = new linkedList();

listA.addAtHead(1);
listA.addAtHead(2);
listA.addAtHead(3);
listA.addAtHead(4);
listA.addAtHead(5);
listA.addAtHead(6);
listA.addAtHead(7);

listB.addAtHead(8);
listB.addAtHead(9);
listB.addAtHead(10);

listB.head.next.next.next = listA.head.next.next.next.next;

function printList(list) {
  let orgHead = list.head;
  let curr = list.head;
  while (curr.next !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
  console.log(curr.val);
}

console.log("List A :");
printList(listA);
console.log("List B :");
printList(listB);
console.log("Common Element : ", listA.head.next.next.next.next.val);

function findIntersection(listA, ListB) {
  let curr = listA.head;
  let setA = new Set();
  while (curr) {
    setA.add(curr);
    curr = curr.next;
  }
  let itrateB = ListB.head;
  while (itrateB) {
    if (setA.has(itrateB)) {
      return itrateB.val;
    }
    itrateB = itrateB.next;
  }
  return -1;
}

console.log(findIntersection(listA, listB));
