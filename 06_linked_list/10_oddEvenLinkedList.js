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


function evenOddList(list) {
  let odd = list.head;
  let even = list.head.next;
  let Evenstart = even;
  while(even && even.next){
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }
  odd.next = Evenstart;
  
  return list.head;
}

list.head = evenOddList(list);
console.log("updated list : ");

printList(list);
