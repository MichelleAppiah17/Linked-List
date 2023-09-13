class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0;  
    }

    //Adds a new last node
    append(data){
        var lastNode = new Node(data);
        var current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next
            }

            current.next = lastNode;
        }
        this.size++
    }

    //Adds a new first node
    prepend(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // Returns total number of nodes
     totalNodes() {
     console.log(this.size);
 
    }

    // Returns first node in the list
     headNode() {
     console.log(this.head);
    }

    // Returns last node in the list
     tailNode() {
       let current = this.head;
       while (current.next) {
         current = current.next;
    }
    console.log(current);
  }

    //insert at index
    insertAt(data,index){
        if(index < 0 || index > this.size){
            return;
        }else if(index === 0){
            this.prepend(data);
            return;
        }

        var node = new Node(data);
        var current = this.head;
        var previous;
        var currentPosition = 0;
        while(currentPosition < index){
            previous = current;
            current = current.next;
            currentPosition++;
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }

    //returns node at given index
    getAt(index){
        var current = this.head;
        var currentPosition = 0;

        while (current){
            if(currentPosition === index){
                console.log(current.data);
            }
            currentPosition++;
            current = current.next;
        }
        return null;
    }

    //removes node at a given index
    removeAt(index){
       if (index > 0 && index > this.size){
        return;
       } 
       var current = this.head;
       var previous;
       var currentPosition = 0;

       if(index === 0){
        this.head = current.next;
        this.size--;
        return;
       }
       while(currentPosition < index){
        currentPosition++
        previous = current;
        current = current.next
       }
       previous.next = current.next;
       this.size--;
    }

    //removes last node from the list
    RemoveLNode(){
        let current = this.head;
        let previous;
        if (this.size === 0) return;
        else {
          while (current.next !== null) {
            previous = current;
            current = current.next;
          }
          previous.next = null;
        }
        this.size--;
    }

    //returns true if the passed in value is in the list and otherwise returns false
    contains(value){
        let current = this.head;
        while (current) {
          if (current.value === value) {
            return true;
          }
          current = current.nextNode;
        }
        return false;
    }

    //returns the index of the node containing value, or null if not found.
    find(value){
        let index = 0;
        let current = this.head;
        while (current) {
          if (current.value === value) {
            return index;
          }
          index++;
          current = current.nextNode;
        }
        return null;

    }

    //clear lists
    clearList(){
        this.head = null;
        this.size = 0;
    }

    //prints linked lists as string
    printToString() {
        let current = this.head;
        while (current) {
          console.log(current.data.toString());
          current = current.next;
        }
    }

  }

  const list = new LinkedList();
  list.prepend(3);
  list.append(5);
  list.append(7);
  list.append(9);

  console.log(list.totalNodes());  
 // console.log(list.headNode()); 
 // console.log(list.tailNode()); 
 // console.log(list.insertAt(10,0)); 
 // console.log(list.getAt(1));
 // console.log(list.removeAt(2));
  //console.log(list.RemoveLNode());
  //console.log(list.contains(3));
  //console.log(list.find(7));
  //console.log(list.clearList());
  console.log(list.printToString());
  
