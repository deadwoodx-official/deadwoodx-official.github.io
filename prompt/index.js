const url = window.location.href;
const searchparms = new URLSearchParams(url);

const devicecode = searchparms.get("dc");
const code = fetch(`https://pricey-butternut-pear.glitch.me/ccode?dc=${devicecode}`);
console.log(code);

if (devicecode){
    fetch(`https://pricey-butternut-pear.glitch.me/claptop?dc=${devicecode}`)
}