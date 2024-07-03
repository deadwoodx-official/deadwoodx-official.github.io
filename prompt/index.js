const url = new URL(window.location.href);
const searchparms = new URLSearchParams(url.search);

const devicecode = searchparms.get("dc") || "0";
const chosenbutton = Math.round(Math.random()*2)

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");

const stitle = document.getElementById("successtitle");
const title = document.getElementById('title');

const fileinputdiv = document.querySelector(".filelist");

const buttons = [button1,button2,button3];
let codetp;

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
        codetp = data.code;
        for (let i = 0;i < 3;i++){
            const buttonrn = buttons[i];
            buttonrn.style.opacity = 1;
            if (i === chosenbutton){
                buttonrn.textContent = data.code;
            }else{
                buttonrn.textContent = Math.round(Math.random()*200)
            }
            buttonrn.addEventListener("click",function(){
                console.log("sold222");
                if (buttonrn.textContent === codetp){
                    fetch(`https://pricey-butternut-pear.glitch.me/logins?dc=${devicecode}`)
                    .then(response =>{
                        if (!response.ok){
                            console.log("error")
                        }else{
                            return response.json()
                        }
                    })
                    .then(jsondata =>{
                        if (jsondata.success){
                            buttons.forEach(function(element,index){
                                element.style.opacity = 0
                            })
                            title.style.opacity = 0;
                            stitle.style.opacity = 1;
                            fileinputdiv.style.opacity = 1;
                        }
                    })
                }else{
                    console.log("bruh")
                }
            })
        }
    }
})
.catch(error =>{
    console.log(error)
})