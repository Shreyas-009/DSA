// created node template
function Node(val) {
  this.val = val;
  this.next = null;
}

// created node list
function LinkedList(index, val){
  this.head = null;
  this.size = 0;
}

// adding at head
LinkedList.prototype.addAtHead = function(val){
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

// inserting at tail
LinkedList.prototype.addToTail = function(val){
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
}

// insearing any where in a list
LinkedList.prototype.addAtIndex = function(index,val){
  if (index < 0 || index > this.size) return;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addToTail(val);
    return;
  }

  let newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
}

// finding element in a list
LinkedList.prototype.get = function(index){
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
}

// deleting elements from a list
LinkedList.prototype.deleteAtIndex = function (val) {
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};


let list = new LinkedList();

list.addAtHead(10);
list.addAtHead(5);
list.addToTail(20);

console.log(list.get(0)); // 5
console.log(list.get(1)); // 10
console.log(list.get(2)); // 20