// let arr=[1,2,3,4];
// let arr2=["kaif",2,true];
// let arr3=new Array("saif",true,78);
// console.log(arr);
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr3);


// built in functions

// let arr=["kaif",23,2,true,40,90];
// arr.push("khan");
// console.log(arr);

// arr.pop();
// console.log(arr);


// arr.unshift("mohd");
// console.log(arr);

// arr.shift();
// console.log(arr);

// let ans=arr.slice(-2);
// console.log(ans);

// arr.splice(1,0,"khan");
// console.log(arr);


/*
//map concept
let arr1=[2,5,9,10,13];
let ans=arr1.map((number)=>{
    return number*number;
});
console.log(ans);*/

/*let arr=[10,21,42,20,25,27];
let evenans=arr.filter((value)=>{
    if(value%2===0){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenans);*/


/*let arr2=["kaif","khan",67,true,5,70];
let ans=arr2.filter((value)=>{
    if(typeof(value)=== 'number'){
        return true;
    }
    else {
        return false;
    }
});
console.log(ans);*/

/*
//reduce concept
let arr=[10,20,30,40];
let ans=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ans);
*/




//sorting logic
let arr=[924,444,20,0,8];
arr.sort((a,b)=>{
    return b-a;
})
console.log(arr);

