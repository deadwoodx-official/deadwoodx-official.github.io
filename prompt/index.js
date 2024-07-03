document.addEventListener("DOMContentLoaded", function() {
    const url = new URL(window.location.href);
    const searchparams = new URLSearchParams(url.search);
    const devicecode = searchparams.get("dc") || "0";
    const chosenbutton = Math.round(Math.random() * 2);

    const button1 = document.getElementById("one");
    const button2 = document.getElementById("two");
    const button3 = document.getElementById("three");

    const stitle = document.getElementById("successtitle");
    const title = document.getElementById('title');
    const fileinputdiv = document.querySelector(".filelist");
    const buttons = [button1, button2, button3];
    let codetp;

    function buttonFunction(button) {
        button.addEventListener("click", function() {
            console.log("sold222");
            if (button.textContent === codetp) {
                fetch(`https://pricey-butternut-pear.glitch.me/logins?dc=${devicecode}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then(jsondata => {
                        if (jsondata.success) {
                            buttons.forEach(element => {
                                element.style.opacity = 0;
                            });
                            title.style.opacity = 0;
                            stitle.style.opacity = 1;
                            fileinputdiv.style.display = "flex";
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching logins:", error);
                    });
            } else {
                console.log("bruh");
            }
        });
    }

    fetch(`https://pricey-butternut-pear.glitch.me/ccode?dc=${devicecode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.success === true) {
                codetp = data.code;
                buttons.forEach((button, i) => {
                    button.style.opacity = 1;
                    if (i === chosenbutton) {
                        button.textContent = data.code;
                    } else {
                        button.textContent = Math.round(Math.random() * 200);
                    }
                    button.addEventListener("click",function(){
                        console.log("sold ahahaha")
                    })
                    buttonFunction(button);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching ccode:", error);
        });
});