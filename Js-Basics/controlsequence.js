control sequnce (call back)

function myDisplayer(some){
    console.log(some)
}
let myPromise = new Promise(function(myResolve,myReject){
    let x = 0;

    if(x==0){
        myResolve('ok')
    }else{
        myReject('Error')
    }

});
myPromise.then(
    function(value) {myDisplayer(value);} ,
    function(error) {myDisplayer(error)}
    )
console.log(myPromise)
