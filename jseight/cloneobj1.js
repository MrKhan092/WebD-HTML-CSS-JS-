//object clonning using spread operator

let src={
    age:20,
    heigt:160,
    weight:70
};

console.log(src);

let dest={...src};
//checking the new object is created by changing one of its property
dest.weight=90;

console.log(dest);