const person = {
    firstName: "Siddhant",
    lastName: "Jadhav",
    age: 18, 
    printFullName: function() {
      console.log(this.firstName + " " + this.lastName);
    },
    printAge: function() {
      console.log("Age:", this.age);
    }
  }; 
  person.printFullName(); 
  person.printAge();
