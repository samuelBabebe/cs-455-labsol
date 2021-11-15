class User{
    constructor(name){
        this.name =name
    }
    log(){
        console.log( this.name)
    }
}
class DecoratedUser{
    constructor(mama,city,state){
        this.mama = mama
        this.name =mama.name
        this.city =city
        this.state = state
    }
    logger(){
      console.log( `name:${this.name} city: ${this.city}: state:${this.state}`)
    }

}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
user.log()