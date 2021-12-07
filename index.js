const decbtn = document.querySelector('.decbtn');
const resetbtn = document.querySelector('.resetbtn');
const incbtn = document.querySelector('.incbtn');
const counter = document.querySelector('.counter');
const counterChild = document.createElement('div');
let i =0;
counterChild.innerText = i;
counter.appendChild(counterChild);
decbtn.addEventListener('click',function(){
    i--;
    if(i<0)
    counter.style.color = 'black';
    if(i===0){
        counter.style.color = 'yellow';
    }
    counterChild.innerText = i;
})
resetbtn.addEventListener('click',function(){
    i=0;
    
    counter.style.color = 'yellow';
    counterChild.innerText = i;
    
})
incbtn.addEventListener('click',function(){
    i++;
    if(i>0)
    counter.style.color = 'green';
    if(i===0){
        counter.style.color = 'yellow';
    }
    counterChild.innerText = i;
})


