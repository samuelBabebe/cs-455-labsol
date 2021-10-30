interface Universityrule{
    name:string
    dept:string
    graduation(year:number):void
}
class University implements Universityrule{

   
    constructor( public name: string, public dept: string ){
        
    }
    graduation(year:number):void{
        console.log(`Graduating ${this.dept} ${year} students`);
    }

}

let miu = new University("MIU", "MSD");
miu.graduation(2021);