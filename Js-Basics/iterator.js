let arr = [1,2,3,4,5,6,7,8,9,10];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
false indicates that there is more to iterate
