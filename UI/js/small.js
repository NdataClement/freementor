const menuBar=document.querySelector(".menu");
const openMenu=document.querySelector(".nav-menu");
const closeMenu=document.querySelector(".close");
menuBar.addEventListener("click",()=>{
  openMenu.style="transform:translateX(0%)";
})
closeMenu.addEventListener("click",()=>{
  openMenu.style="transform:translateX(100%)";
})
