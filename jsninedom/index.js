let mydiv=document.querySelector("#mydiv");
let newElement=document.createElement('p');
newElement.textContent="love Babbar";
mydiv.insertAdjacentElement('beforebegin',newElement);

let parent=document.querySelector("#mydiv");
let child=document.querySelector("#fpara");
parent.removeChild(child);