
let counters = document.querySelectorAll('.square')
let btn = document.querySelectorAll('.btn')

function changeCounter(){
  let counter = this.innerText;
  counter++;
  this.innerHTML = counter;
};

for (var i = 0; i < counters.length; i++) {
  counters[i].addEventListener('click', changeCounter);
};

function counterChanger(){
  let plus = this.classList.contains('plus');
  let minus = this.classList.contains('minus');
  let counter = this.parentNode.querySelector('.counter').innerText;
  if(plus){
    counter++;
  }else if(minus){
    counter--;
  }
  this.parentNode.querySelector('.counter').innerHTML = counter;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', counterChanger);
};
