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
list.addAtHead(4);
list.addAtHead(5);
list.addAtHead(2);
list.addAtHead(5);
list.addAtHead(1);

function printList(list) {
  let curr = list.head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
printList(list);

let RemoveElement = 5;

function removeElements(list, n) {
  let dummy = new Node(0);
  dummy.next = list.head;
  let curr = dummy;

  while (curr && curr.next) {
    if (curr.next.val == n) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}

list.head = removeElements(list, RemoveElement);
console.log("updated list : ");

printList(list);
