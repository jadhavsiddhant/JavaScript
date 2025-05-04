// storing variable in javascript

// three keywords are used to use keywords in js
// let , const and var
//1. let can be defined inside a block(that means outside the block ) or globally but cannot be redeclared with a diffrent value.
//2. var can be redeclared and it is not bounded inside a block
//3. const is very much similar to let

let x='TON';
var y='2TON';
const z = '3TON';
if(10>1){
    let x = 100;
    var y = 200;
    const z = 300;
    console.log(x)
    console.log(y)
    console.log(z)
}
console.log(x)
console.log(y)
console.log(z)