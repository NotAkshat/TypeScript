/* // again object is similarly declared in ts the same way it is in js

const user = {
    name: "akshat",
    email: "akshat@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "rawat", isPaid: true, email: "rawar@hnn"}

createUser({name: "riya", isPaid: false})

function createCourse():{name: string, price: number}{

    return{ name: "react.js", price: 1000}

}

// type alias
// it is basically renaming or making ur own datatypes. It is reaaly really helpful

type User = {
    name: string;
    email: string;
    isActive: boolean
}

type Mystring = string;

function CreateUser(user: User){

} */


type User = {
    readonly _id: string;
    name: string;
    email: string
    isActive: true
}

let myUser: User = {
    _id : "11234",
    name : "a",
    email : "h@h.com",
    isActive: true
}

export {}