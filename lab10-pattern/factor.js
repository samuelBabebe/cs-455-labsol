class Regular_bulb{
    constructor(){
        this.range = "btn 50 to 100"
        this.last= "1 year"
    }
}
class Energy_saver{
    constructor(){
        this.range = "btn 5 to 40"
        this.last="10 years"

    }
}
class Factory{

    createbulb(type,color){
        let newobj;
        if(type ==="regular"){
            newobj= new Regular_bulb()
        }else if(type==="energy"){
            newobj = new Energy_saver()

        }
        newobj.type =type
        if(color){ newobj.color=color}
       
        newobj.say=function(){
           return ` type: ${this.type } color:${this.color} range:${this.range} last:${this.last}`
        }
        return newobj
    }

}
const bulb =[]
let factory = new Factory()
bulb.push(factory.createbulb("regular"))
bulb.push(factory.createbulb("energy","red"))
for(let i=0;i<bulb.length;i++){
    console.log(bulb[i].say())
}