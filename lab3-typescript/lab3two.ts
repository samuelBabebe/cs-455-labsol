 let bankaccount : {
      money:number,
      deposit(value:number):void
  } ={

    money:2000,
    deposit(value:number):void{
        this.money+=value
    }

}
let myself:{
    name:string,
    bankaccount: typeof bankaccount,
    hobbies:string[]
}={
    name:"john",
    hobbies:["violin","cooking"],
    bankaccount:bankaccount
}