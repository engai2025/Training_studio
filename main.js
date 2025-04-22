let  burger = document.querySelector(".burger");
let navigationbar = document.querySelector(".navigation-bar");
burger.addEventListener("click" ,()=>{
    navigationbar.classList.toggle('active');
});
