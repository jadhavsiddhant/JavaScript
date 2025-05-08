class rectangle{
    constructor(l,w){
        this.l = l;
        this.w = w;
    }

    area(){
        console.log("Area is:",this.l*this.w)
    }

    perimeter(){
        console.log("Perimeter is:",2*(this.l+this.w))
    }
}

let calculate = new rectangle(10,20)
calculate.area();
calculate.perimeter();
