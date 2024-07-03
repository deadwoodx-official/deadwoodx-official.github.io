let websocket = null;
const laptopButton = document.getElementById('laptop');
const qrcodeframe = document.getElementById("qrcode");
const codetext = document.getElementById("code");
const laptopui = document.querySelector('.laptopui');
const connectedlabel = document.getElementById('connectedstatus');;
const loadingtext = document.getElementById("connectionstatus");
let connected = false;
let loading = false;
let count = 0;
let dot = ".";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startLoading(){
    count = 0;
    loadingtext.style.display = "flex"
    while (loading){
        if (count > 2){
            count = 0
        }else{
            count++
        }
        loadingtext.textContent = "CONNECTING" + dot.repeat(count);
        await sleep(500)
    }
}

laptopButton.addEventListener("click",function(){
    if (!websocket || websocket.readyState !== WebSocket.OPEN){
        loading = true;
        startLoading();
        websocket = new WebSocket("wss://pricey-butternut-pear.glitch.me");
        websocket.addEventListener("open",async function(event){
            loading = false;
            loadingtext.textContent = "Created QR Code for connecting mobile."
            connected = true;
            websocket.send(JSON.stringify({message: 'laptopconnect'}))
        });

        websocket.addEventListener("close",function(event){
            connected = false;
            websocket = null;
            laptopui.style.display = "none";
            loadingtext.textContent = "Session timed out or couldn't connect - try again later.";
        })
        websocket.addEventListener("message",function(msg){
            const data = JSON.parse(msg.data);
            const action = data.action;
            if (action === 'connect'){
                laptopui.style.display = "flex";
                qrcodeframe.style.display = "flex";
                const url = data.url;
                const code = data.code;
                const devicecode = data.devicecode;
                createQRCode(url);
                codetext.textContent = code;
            }else if(action === "connect_success"){
                laptopui.style.display = "none";
                qrcodeframe.style.display = "none";
                loadingtext.textContent = "Connected mobile successfully.";
                connectedlabel.textContent = "DEVICE: CONNECTED"
            }
        })
    }
})

function createQRCode(url){
    var options = {
        text: url,
        width: 100,
        height: 100,
    };
    qrcodeframe.innerHTML = "";
    new QRCode(qrcodeframe,options);
}