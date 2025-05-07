// more use of functions
let obj = {Name:"Ronak",
    age:18,
    city:"Bhuneshwar"
    }

let obj1 = {
    func:function greet(){
        console.log(this.Name + " " + this.age);
        return this.age;
    }
}
// call is more usually used in backend
obj1.func.call(obj)
obj1.func.apply(obj)
