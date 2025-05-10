function person(name, age, loc){
    console.log(this.name = name)
    console.log(this.age = age)
    console.log(this.loc = loc)
    console.log(this.pname = function (){
        console.log("Bihar.com")
    })
  }

const p1 = new person("john",30,"nibyork","");
console.log(p1.gender = "male")
person.prototype.gender = "male";
console.log(p1)
this.person()
