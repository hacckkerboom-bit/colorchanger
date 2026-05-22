let randomBtn = document.querySelector('.randomBtn')
let colorInput = document.querySelector('#colorInput')
let applyBtn = document.querySelector('.applyBtn')
let currentColorValue = document.querySelector('.currentColorValue')
let container = document.querySelector('.container')

let changeColor=(color)=>{
  container.style.background=color
}

let randomfunctions=()=>{
  console.log('clicked random')
}

let applybuttonfunction =()=>{
  const color =colorInput.value;
  changeColor(color);
  currentColorValue.textContent=color
  // if(color===""){
  //   currentColorValue.textContent='current'
  // }
}



randomBtn.addEventListener('click',randomfunctions);
applyBtn.addEventListener('click',applybuttonfunction)
