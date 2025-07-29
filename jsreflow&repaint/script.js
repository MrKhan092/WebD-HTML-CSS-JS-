//code1
const t1= performance.now();
for(let i=1;i<=100;i++){
    let mypara=document.createElement('p');
    mypara.textContent="this is para :"+i;
    document.body.appendChild(mypara);

}
const t2=performance.now();
console.log("time taken is :"+(t2-t1));

//code 2 it is some extent good
const t3=performance.now();
let mydiv=document.createElement('div');
for(i=1;i<=100;i++){
    let para2=document.createElement('p');
    para2.textContent="this is para :"+i;
    mydiv.appendChild(para2);
}
// one flow and one repaints 
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("time taken is :"+(t4-t3));

//best code using documentfragment
const t5=performance.now();
let fragremnet=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para3=document.createElement('p');
    para3.textContent="this is para"+(i+100);
    //no reflow and no repaints
    fragremnet.appendChild(para3);
}
//1 reflow+1 repaints
document.body.appendChild(fragremnet);
const t6=performance.now();
console.log("time taken is :"+(t5-t6));

