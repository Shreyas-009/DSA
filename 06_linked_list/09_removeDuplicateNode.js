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

list.addAtHead(1);
list.addAtHead(1);
list.addAtHead(2);
list.addAtHead(3);
list.addAtHead(3);
list.addAtHead(4);
list.addAtHead(5);

function printList(list) {
  let curr = list.head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
printList(list);

let nthFromLast = 2;

function removeDuplicateElements(list, n) {
  let curr = list.head;
  while (curr && curr.next) {
    if (curr.next.val == curr.next.next.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return list.head;
}

list.head = removeDuplicateElements(list, nthFromLast);
console.log("updated list : ");

printList(list);
