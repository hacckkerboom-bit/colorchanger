let randomBtn = document.querySelector('.randomBtn')
let colorInput = document.querySelector('#colorInput')
let applyBtn = document.querySelector('.applyBtn')
let currentColorValue = document.querySelector('.currentColorValue')
let container = document.querySelector('.container')

let colors = ["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","cyan","magenta","lime","teal","navy","gold","coral","violet","tomato"];


let generateRandomColor = ()=>{
  const randomNumber =colors[Math.floor(Math.random()*colors.length)];
  return randomNumber
}

let changeColor=(color)=>{
  container.style.background=color
}

let randomfunctions=()=>{
  let color = generateRandomColor()
  changeColor(color)
  currentColorValue.textContent=color




  
}

let applybuttonfunction =()=>{
  const color =colorInput.value;
  changeColor(color);
  currentColorValue.textContent=color
  
}



randomBtn.addEventListener('click',randomfunctions);
applyBtn.addEventListener('click',applybuttonfunction)
