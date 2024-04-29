let colorBtn = document.getElementById("colorButton");
const colors = ["red","orange","yellow","green","blue","purple","navy"];
let colorInx = 0;


colorBtn.addEventListener("click",()=>{
  document.body.style.backgroundColor = colors[colorInx];
  colorInx = (colorInx + 1) % colors.length;
})