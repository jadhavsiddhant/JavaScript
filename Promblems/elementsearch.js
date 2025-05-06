function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log(i);
            return;
        }
    }
    console.log(-1); 
}

search(["ram", "sham", "jam"], "jam");
