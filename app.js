//when buton is clcked, the box changes color and the header is changed to new color value 
function random(number) {
    return Math.floor(Math.random() * (number+1)) ;
}

const btn = document.querySelector('button');
btn.addEventListener("click", ()=> {
    let col =  `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.querySelector('h2').innerText = `${col} is the new generated color`;
    document.querySelector('div').style.background = col;
    console.log(`Color generated!`)
});