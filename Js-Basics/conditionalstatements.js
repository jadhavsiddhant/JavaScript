let id = "WhiteVirshin";
let pass = 12345678;
function auth(uid, password) {
    if (uid !== "WhiteVirshin") {
        console.log("Incorrect id");
    } else if (password !== 12345678) {
        console.log("Incorrect password");
    } else {
        console.log("Access granted");
    }
}
