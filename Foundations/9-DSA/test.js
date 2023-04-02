// implement DLL node
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// implementing doubly linked list class
class linkedList {
    constructor () {
        // creates a pointer to head and tail
        this.head = null;
        this.tail = null;
    };

    // print linked list in forward
    printList () {
        let current = this.head;
        if (!current) {
            console.log('List is empty')
        }
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    // print linked list in reverse
    printListRev () {
        let current = this.tail;
        if (!current) {
            console.log('List is empty')
        }
        while (current) {
            console.log(current.data)
            current = current.prev;
        }
    }

    // add node at the beginning
    addNodeStart (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            this.tail = currentNode;
            console.log('this.tail is ' + this.tail.data)
        }
    }

    // add node at the end of the list
    addNodeEnd (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            // let currentNode = this.head;
            // while (currentNode.next) {
            //     currentNode = currentNode.next;
            // }
            // currentNode.next = newNode;
            // newNode.prev = currentNode;
            // this.tail = newNode;
        }
    }

    // returns the length of the list
    listLen () {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    // adds a node at index n
    addNodeIndex (val, n) {
        const len = this.listLen();
        if (n < 1 || n > len) {
            console.log('Invalid node index')
            return;
        }
        if (n === 1) {
            this.addNodeStart(val);
            return;
        }
        let currentNode = this.head;
        let newNode = new Node(val);
        let count = 0;
        while (count < n - 2) {
            currentNode = currentNode.next;
            count++;
        }
        // here, currentNode is at node before node to insert at
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
    }

    // deletes node at the beginning of the list
    popStart () {
        if (!this.head) {
            return;
        }
        let currentNode = this.head;
        let temp = currentNode.next;
        if (temp) {
            currentNode = null;
            this.head = temp;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    
    // deletes node at the end of the list
    popEnd () {
        let currentNode = this.tail;
        if (!currentNode) {
            return;
        } else if (!currentNode.prev) {
            console.log('this.tail is ' + this.tail.data)
            this.tail = null;
            return;
        }
        // else if (currentNode.prev) {
        this.tail = currentNode.prev;
        currentNode.prev.next = null;
            // this.tail.prev.next = null;
        // } 
        // this.tail.prev = null;
    }

    // deletes node at index n
    popIndex (n) {
        const len = this.listLen();
        if (n < 1 || n > len) {
            console.log('Invalid node index')
            return;
        }
        if (n === 1) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
            return;
        }
        if (n === len) {
            let currentNode = this.tail;
            if (currentNode.prev) {
                this.popEnd();
            } else {
                this.tail = null;
            }
            return;
        }
        let currentNode = this.head;
        let count = 0;
        while (count !== n - 2) {
            currentNode = currentNode.next;
            count++;
        }
        let prevNode = currentNode;
        let nextNode = currentNode.next.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode = null;
    }
}

const dllist1 = new linkedList();
// dllist1.addNodeStart(34);
// dllist1.addNodeStart(33);
dllist1.addNodeStart(32);
dllist1.popEnd();
// dllist1.addNodeStart(31);
dllist1.printList();
console.log('-----------------');
// dllist1.addNodeEnd(35);
// dllist1.addNodeEnd(36);
// dllist1.addNodeStart(30);
// dllist1.addNodeIndex(100, 5);
// dllist1.printList();
// console.log('-----------------');
// dllist1.popStart();
// dllist1.popStart();
// dllist1.popEnd();
// dllist1.printList();
// console.log('-----------------');
// dllist1.popIndex(5);
// dllist1.printList()
// let count = dllist1.listLen();
// console.log(count + ' node(s) in the list');
// console.log('-----------------');
// console.log('Reverse printing')
// dllist1.printListRev()