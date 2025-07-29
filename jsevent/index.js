//event listener
function changetext(){
    fpara=document.getElementById("fpara");
    fpara.textContent="  welcome to world";
}
fpara=document.getElementById("fpara");
fpara.addEventListener('click',changetext);//use function by reference
// fpara.removeEventListener('click',changetext);

function prevent(event){
    // let anchor=document.getElementById('anchor');
    event.preventDefault();
    event.target.textContent="not possible";
    // anchor.textContent='not possible';

}
let anchor=document.getElementById('anchor');
anchor.addEventListener('click',prevent);