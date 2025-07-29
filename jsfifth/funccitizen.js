
/*
//assign to variable
let greet=function(){
    console.log("Hello");
}
greet();*/


/*
//as an argument
let ans=function(solve ,num1,num2){
    solve(num1,num2);
}
function solve(a,b){
    console.log(a+b);
}
ans(solve,2,3);*/

/*
//return function
function square(){
    return function(num1){
        return num1*num1;
    }
}
let ans=square();
let finalans=ans(5);
console.log(finalans);*/


/*
//as a used in data sttructure

const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];
let first=arr[0];
let ans=first(2,3);
console.log(ans);*/


//as an object key value
let obj1={
    age:25,
    name:"kaif",
    weight:25,
    greet:function(){
        console.log("hello ji");
    }
}
console.log(obj1.age);
obj1.greet();


/*
//temporal dead zone
console.log(age);
let fname="kaif";
console.log(fname);
let age=25;*/
