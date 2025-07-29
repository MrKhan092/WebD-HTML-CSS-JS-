// function sayname(value="xyz"){
//     console.log(value);
// }
// sayname(undefined);

// function sayname(fname="firstname",lname="lastname"){
//     console.log(fname ," ", lname);
// }
// sayname("mohd");


// passing object as default parameters
// function Human(value={age:25,wt8:9}){
//     console.log(value);
// }
// Human();


//passing function
// function def(){
//     return 25;
// }

// function solve(value=def()){
//     console.log("age is ",value);
// }
// solve(50);


//passing array as default value
function solve(value=["kaif",25,true]){
    console.log(value);
}
solve();