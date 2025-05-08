class person{

    constructor(name,age,loc){
        this.name = name;
        this.age = age;
        this.loc = loc;

    }

    Pname(){
        console.log(this.name + " " + this.age);
        return this.age;
    }
}
const p1 = new person("john",30,"NaviYork")
