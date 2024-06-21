const button = document.getElementById("menu");
const menu = document.getElementById("topbar");

const skillsButton = document.getElementById("SkillsButton");
const category = document.getElementById("categories");
const toptitle = document.getElementById("title1");
const list = document.getElementById("listofitems");
const scroll = document.getElementById("scroll");
let device = null;

button.addEventListener("click",function(){
    category.style.opacity = 0;
    if (menu.style.opacity == 1){
        menu.style.opacity = 0
    }else{
        menu.style.opacity = 1
    }
})

scroll.addEventListener("touchmove",function(event){
    event.preventDefault();
})

list.addEventListener("touchmove",function(event){
    event.preventDefault()
})

skillsButton.addEventListener("click",async function(){
    window.location.href = "/activity/index.html"; 
})

toptitle.addEventListener("click",function(){
    window.location.href = "/index.html"
})