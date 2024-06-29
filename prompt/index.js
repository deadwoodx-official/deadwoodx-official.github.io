const url = new URL(window.location.href);
const searchparms = new URLSearchParams(url.search);
console.log(searchparms)

const devicecode = searchparms.get("dc") || "0";
const chosenbutton = Math.round(Math.random()*3)

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");

const buttons = [button1,button2,button3]
const code = fetch(`https://pricey-butternut-pear.glitch.me/ccode?dc=${devicecode}`);
console.log(code);
console.log(chosenbutton);
for (let i = 0;i < 3;i++){
    let buttonrn = buttons[i];
    if (i === chosenbutton){
        buttonrn.textContent = code;
    }else{
        buttonrn.textContent = Math.round(Math.random()*200)
    }
}