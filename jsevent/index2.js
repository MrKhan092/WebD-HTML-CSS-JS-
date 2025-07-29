//method 1 connecting each paragaph to a single eventListener
function alertPara(event){
    alert("you have clicked on :"+ event.target.textContent);
}
// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     paras[i].addEventListener('click',alertPara);

// }
//here target is element on which you click
// method2 applying on main div
let fdiv=document.getElementById('wrapper');
fdiv.addEventListener('click',alertPara);