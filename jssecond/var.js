// global scope of var
// var age=25;
// if(true){
//     console.log(age);
// }


function solve(){
    var age=25;//cannot access this outside the function
    console.log(age);
}
console.log(age);
solve();