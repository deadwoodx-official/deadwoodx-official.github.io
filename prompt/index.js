const url = new URL(window.location.href);
const searchparms = new URLSearchParams(url.search);

const devicecode = searchparms.get("dc") || "0";
const chosenbutton = Math.round(Math.random()*2)

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");

const buttons = [button1,button2,button3];
let code = null;

fetch(`https://pricey-butternut-pear.glitch.me/ccode?dc=${devicecode}`)
.then(response =>{
    if (!response.ok){
        console.log("error")
    }else{
        return response.json()
    }
})
.then(data =>{
    console.log(data);
    if (data.success === true){
        code = data.code;
    }
})
for (let i = 0;i < 3;i++){
    let buttonrn = buttons[i];
    if (i === chosenbutton){
        buttonrn.textContent = code;
    }else{
        buttonrn.textContent = Math.round(Math.random()*200)
    }
    buttonrn.addEventListener("click",function(){
        if (buttonrn.textContent === code){
            console.log("w");
            window.location.href = "https://youtube.com"
        }else{
            console.log("bruh")
        }
    })
}