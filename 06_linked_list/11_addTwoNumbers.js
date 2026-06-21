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

let list1 = new linkedList();
let list2 = new linkedList();

list1.addAtHead(2);
list1.addAtHead(9);
list1.addAtHead(0);

list2.addAtHead(5);
list2.addAtHead(5);

function printList(list) {
  let curr = list?.head || list;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

console.log("Number1 : ");
printList(list1);
console.log("Number2 : ");
printList(list2);

//  5 5
//  0 9 2
//---------
//  5 4 3 
function addTwoNumber(l1 ,l2) {
  let list1 = l1.head;
  let list2 = l2.head;

  let digit = 0;
  let carry = 0;
  let head = new Node();
  let curr = head;
  while(list1 || list2 || carry){
    let sum = (list1?.val || 0) + (list2?.val || 0) + carry;

    digit = sum%10;
    carry = Math.floor(sum/10);

    curr.next = new Node(digit);
    curr = curr.next;

    list1 = list1?.next;
    list2 = list2?.next;
  }
  return head.next;
}

let list = addTwoNumber(list1,list2);
console.log("Addition : ");
printList(list);
