rectangle
class rectangle{
    constructor(){
    }

    area(l,w){
        this.l = 20;
        this.w = 100;
        console.log("Area is:",this.l*this.w)
    }

    perimeter(l,w){
        this.l = 20;
        this.w = 100;
        console.log("Perimeter is:",2*(this.l+this.w))
    }
}

let calculate = new rectangle()
calculate.area();
calculate.perimeter();
