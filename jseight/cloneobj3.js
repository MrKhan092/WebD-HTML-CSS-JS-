//object clonning using iteration

let src={
    age:20,
    heigt:160,
    weight:70
};

let dest={};
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    dest[newKey]=newValue;
}
//checking the new object is created by changing one of its property
dest.weight=90;
console.log(src);
console.log(dest);