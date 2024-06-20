const button = document.getElementById("menu");
const menu = document.getElementById("topbar");

const skillsButton = document.getElementById("SkillsButton");
let device = null;

button.addEventListener("click",function(){
    if (menu.style.opacity == 1){
        menu.style.opacity = 0
    }else{
        menu.style.opacity = 1
    }
})

skillsButton.addEventListener("click",async function(){
    window.location.href = "/activity/index.html"; 
})