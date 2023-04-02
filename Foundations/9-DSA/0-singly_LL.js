// implement SLL node
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

// implement singly linked list class
class linkedList {
    constructor () {
        // creates a head node
        this.head = null;
    };

    // print linked list
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

    // add node at the beginning
    addNodeStart (val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // add node at the end
    addNodeEnd (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        return this.head;
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
        if (n < 0 || n > len) {
            console.log('Invalid node index')
            return;
        }
        if (n == len) {
            this.addNodeEnd(val);
        }
        let currentNode = this.head;
        let newNode = new Node(val);
        let count = 0;
        while (count < n - 2) {
            currentNode = currentNode.next;
            count++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this.head;
    }

    // deletes node at the beginning of the list
    popStart () {
        let currentNode = this.head;
        let temp = currentNode.next;
        currentNode = null;
        this.head = temp;
    }
    
    // deletes node at the end of the list
    popEnd () {
        let currentNode = this.head;
        if (!currentNode.next) {
            this.head = null;
            return;
        }
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    // deletes node at index n
    popIndex (n) {
        const len = this.listLen();
        if (n < 0 || n > len) {
            console.log('Invalid node index')
            return;
        }
        if (n === 1) {
            let temp = this.head.next;
            this.head = temp;
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
        currentNode.next = null;
        prevNode.next = nextNode;
    }
}

const sllist1 = new linkedList();
sllist1.addNodeStart(34);
sllist1.addNodeStart(33);
sllist1.addNodeStart(32);
sllist1.addNodeStart(31);
sllist1.addNodeStart(30);
sllist1.addNodeEnd(35);
sllist1.printList();
console.log('-----------------');
sllist1.addNodeIndex(39, 2);
sllist1.printList();
console.log('-----------------');
sllist1.popEnd();
sllist1.printList();
console.log('-----------------');
sllist1.popIndex(6);
sllist1.printList();
let count = sllist1.listLen();
console.log(count + ' node(s) in the list');