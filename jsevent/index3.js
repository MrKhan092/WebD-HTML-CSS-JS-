function alertGen(event){
    if(event.target.nodeName ==='SPAN')
    alert("You have clicked on :"+ event.target.textContent);
}
let fdiv=document.getElementById("wrapper");
fdiv.addEventListener('click',alertGen);