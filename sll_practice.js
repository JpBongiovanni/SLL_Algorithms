class Node {
    constructor(value) {
        this.val = value;
        this.next = null; 
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    //methods go here
    front() {
        //if(this.head == null)
        if(!this.head){
            return null
        }
        return this.head.val
    }

    removeFront(){
        if(!this.head){
            return null
        }
        this.head = this.head.next
        return this.head
    }

    addFront(value) {
        var newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    contains(value){
        var runner = this.head
        while(runner!=null){
            if(runner.val == value){
                return true
            }
            runner = runner.next
        }
        return false
    }

    length(){
        var runner = this.head
        var count = 0
        while(runner!=null){
            count++
            runner = runner.next
        }
        return count
    }

    display(){
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    maxMinAvg(){
        var sum = 0;
        var max = this.head.val;
        var min = this.head.val;
        var runner = this.head;
        while(runner!=null){
            sum += runner.val;
            if(runner.val > max){
                max = runner.val;
            }
            else if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
    }
    back(){
        var runner = this.head;
        while(runner.next){
            runner = runner.next
        }
        return runner.val
    }

    removeBack(){
        var runner = this.head;
        while(runner.next.next){
            runner = runner.next
        }
        runner.next = null;
        
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    addBack(newNode){
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        runner.next = new Node(newNode);
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    minToFront(){
        var min = this.head.val;
        var runner = this.head;
        while(runner) {
            if(runner.val < min) {
                min = runner.val;
            }
            runner = runner.next
            this.head = min
        }
        return this.head
    }

    maxToBack(){
        var max = this.head.val;
        var runner = this.head;
        while(runner.next) {
            if(runner.val > max) {
                max = runner.val;
            }
            runner = runner.next
        }
        runner.next = max
        this.head = this.head.next
        return this.head
    }

    prependVal(newNode, va, before){
        newNode.val = va;
        var runner = this.head;

        if(this.head.val == before){
            newNode.next = this.head
            this.head = newNode

            var runner = this.head
            var str = ''
            while(runner!=null){
                str += runner.val + " "
                runner = runner.next
            }
            return str
        }
        
        while( runner.next != null && runner.next.val != before) {
            runner = runner.next;
        }
        
        newNode.next = runner.next;
        runner.next = newNode;
        

        //what if the head node has the value?

        
        //display function
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    appendVal(newNode, va, after){
        newNode.val = va;
        var runner = this.head;
    
        if(this.head.val == after){
            newNode.next = this.head.next
            this.head.next = newNode

            var runner = this.head
            var str = ''
            while(runner!=null){
                str += runner.val + " "
                runner = runner.next
            }
            return str
        }
        
        while( runner.next != null && runner.val != after) {
            runner = runner.next;
        }
        
        newNode.next = runner.next;
        runner.next = newNode;

        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    removeVal(newNode, va){
        newNode.val = va;
        var runner = this.head;

        if(this.head.val == va){
            this.head = this.head.next

            var runner = this.head
            var str = ''
            while(runner!=null){
                str += runner.val + " "
                runner = runner.next
            }
            return str
        }
        while(runner.next != null && runner.next.val != va) {
            runner = runner.next;
        }

        if(runner.next == null){
            var runner = this.head
            var str = ''
            while(runner!=null){
                str += runner.val + " "
                runner = runner.next
            }
            return str
        }
        runner.next = runner.next.next

        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    splitOnVal(num){
        var runner = this.head;
        while(runner!=null){
            if(runner.val == num){
                this.head = runner
            }
            runner = runner.next
        }
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }
}


var myNode1 = new Node(32)
var myNode2 = new Node(6)
var myNode3 = new Node(5)
var myNode4 = new Node(9)
var myNode5 = new Node(10)
var myNode6 = new Node(7)

var newNode = new Node()


var sll1 = new SLL()

sll1.head = myNode1

myNode1.next = myNode2
myNode2.next = myNode3
myNode3.next = myNode4
myNode4.next = myNode5
myNode5.next = myNode6

var sll2 = new SLL()

// console.log(sll1.front())
// console.log(sll2.front())

// console.log(sll1.removeFront())
// console.log(sll2.removeFront())

// console.log(sll1.addFront("Dill"))

// console.log(sll1.contains(6))
// console.log(sll1.length())
console.log(sll1.display())
// console.log(sll1.maxMinAvg())
// console.log(sll1.back())
// console.log(sll1.removeBack())
// console.log(sll1.addBack(99))
// console.log(sll1.minToFront())
// console.log(sll1.maxToBack())
// console.log(sll1.prependVal(newNode, 8, 1))
// console.log(sll1.appendVal(newNode, 3, 5))
// console.log(sll1.removeVal(newNode, 32))
console.log(sll1.splitOnVal(0))
