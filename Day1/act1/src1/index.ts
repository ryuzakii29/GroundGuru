import { Person } from "./helper";

const log = (message: string)=>{
console.log(message)
}
const person1 = new Person({firstName : "Frst", lastName : "Last"});
log(person1.getName())

