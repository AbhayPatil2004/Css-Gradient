let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");

const gteHex = () =>{
    let myHexa = "0123456789abcdef";
    let color = "#";
    for ( let i = 0 ; i < 6 ; i++ ){
        color += ( myHexa[Math.floor(Math.random()*16)]);
        // console.log(color);
    }
    return color ;
}

let rgb1 ;
let rgb2 ;
console.log(copyDiv.innerHTML);
const handelBtn1 = () => {
    rgb1 = gteHex();
    console.log(rgb1);
    document.body.style.backgroundImage = 
    `linear-gradient(to right , ${rgb1}, #555)`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right , ${rgb1} , ${rgb2})`
    btn1.innerText = rgb1 ;
}
const handelBtn2 = () => {
    rgb2 = gteHex();
    console.log(rgb2);
    document.body.style.backgroundImage = 
    `linear-gradient(to right , ${rgb2}, #555)`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right , ${rgb1} , ${rgb2})`
    btn2.innerText = rgb2 ;
}

btn1.addEventListener('click',handelBtn1);
btn2.addEventListener('click',handelBtn2);
copyDiv.addEventListener('click',() =>{
    alert("Text Copied");
    navigator.clipboard.writeText(copyDiv.innerText);
});