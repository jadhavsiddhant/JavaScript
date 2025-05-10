class Engineer extends Person {
    constructor(Name, age, iq, field, experience) {
        super(Name, age, iq);
        this.field = field;
        this.experience = experience;
    }

    display() {
        console.log("Name:", this.Name);
        console.log("Age:", this.age);
        console.log("IQ:", this.iq);
        console.log("Field:", this.field);
        console.log("Experience:", this.experience);
    }

}
let func = ()=>{console.log("hello i am")}

let boi = new Engineer("abc", 12, 100, "Software", 5,func());
boi.display();
