class Subject{

    constructor(){
        this.result={}
        // Object.keys(this.result) =[] 
        // Object.values(this.result)=[]
    }
    
    
    on(event,fn){
        
        if(this.result[event]){
           this.result[event].push(fn)

        }else{
            this.result[event]=[fn]
        }
        
       
    }
    //run(message)
    emit(event,message){

        this.result[event].map(item=>item(message))
        
    }
}
const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445