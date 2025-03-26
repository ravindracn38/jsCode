class nodeImplementation {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedListImplem {
    constructor() {
        this.head = null;
    }

    appendAtLast(value) {
        if (value === undefined || value === null) {
            console.log('Please provide a valid value');
            return;
        }

        let newnode = new nodeImplementation(value);

        if (!this.head) {
            this.head = newnode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newnode;
    }
    
    appendAtBegining(value){
        if(value=== undefined || value === null){
            console.log("Please provide a valid value");
            return;
        }
        let newnode= new nodeImplementation(value);

        if(!this.head){
            this.head=newnode;
            return;
        }

        newnode.next=this.head
        this.head=newnode;
    }

    deleteAtEnd(){
        if(!this.head){
            console.log("Linked List doesnot exsist");
            return;
        }
        if(this.head.next==null){
            console.log("Last node deleted")
            this.head=null;
            return;
        }
        let current=this.head;

        while(current.next){
            var secondLast= current;
            current= current.next
        }

        secondLast.next=null
    }
    
    deleteAtBegining(){
        if(!this.head){
            console.log("Linked List doesnot exsist");
            return;
        }
        if(this.head.next==null){
            console.log("Last node deleted")
            this.head=null;
            return;
        }
        this.head=this.head.next;
    }

    deleteInBetween(value){
        //deletes the first occurence based on value from begining
        if(!this.head){
            console.log("Linked List doesnot exsist");
            return;
        }
        if(this.head.next==null && this.head.value==value){
            console.log("Last node deleted")
            this.head=null;
            return;
        }
        if(this.head.next==null && this.head.value!=value){
            console.log("Not found")
            return;
        }
        if(this.head.value==value){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        let flag=0;
        let previousNode=null
        while(current){
            if(current.value==value){
                previousNode.next=current.next
                flag=1
            }
            if(flag==1){return}
            previousNode=current;
            current=current.next;
            
        }
        if(flag==0){
            console.log("Value not Found - Delete operation failed")
        }
    }

    printList() {
        process.stdout.write("Linked List --->>  ");
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

