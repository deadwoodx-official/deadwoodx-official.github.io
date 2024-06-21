const button = document.getElementById("menu");
const menu = document.getElementById("topbar");

const skillsButton = document.getElementById("SkillsButton");
const toptitle = document.getElementById("toptitle");
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

toptitle.addEventListener("click",function(){
    window.location.href = "/index.html"
})