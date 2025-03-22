class stack {
    constructor() {
      this.stack = [];
    }
  
  
    pushStack(element) {
        var len= this.stack.length
        console.log("length ",len)
      if (len==0){
        this.stack[0]=element;
      }
      else{
        this.stack[len]=element
      }
      console.log("The updated stack is -  ",this.stack)
    }

    popStack(){
        var len= this.stack.length
        console.log("length ",len)
        if (len==0){
            console.log("The stack is empty !")
        }
        else{
            this.stack.length=len-1;
        }
        console.log("The updated stack is -  ",this.stack)
    }

    peepStack(){
        var len= this.stack.length
        console.log("length ",len)
        if (len==0){
            console.log("The stack is empty !")
        }
        else{
            console.log("The top most element is ",this.stack[this.stack.length])
        }        
    }

    isEmptyStack(){
        if(this.stack.length==0){
            console.log("The stack is Empty")
        }
        else{
            console.log("The stack is not Empty")
        }
    }
}
const myStack = new stack();


