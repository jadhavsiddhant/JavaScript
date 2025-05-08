class Animal {
    constructor (species, sound){
        this.species = species;
        this.sound = sound;      
    }
}
class Dog extends Animal{
    constructor(color,sound = "woof"){
        super("Dog",sound)
        this.color = color;
    }
    makeSound() {
        console.log(`${this.color} ${this.species} says: ${this.sound}`);
    }
}
const mydog = new Dog("Brown");
mydog.makeSound();
