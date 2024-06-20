const button = document.getElementById("menu");
const menu = document.getElementById("topbar");

button.addEventListener("click",function(){
    if (menu.style.opacity == 1){
        menu.style.opacity = 0
    }else{
        menu.style.opacity = 1
    }
})