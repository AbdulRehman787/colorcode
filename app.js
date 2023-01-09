const getColor =()=>{
    const randomNum =Math.floor(Math.random() *16777215);
    const colorCode = '#'+randomNum.toString(16);
    // console.log(randomNum,colorCode)
    const colorCo =document.getElementById('colorCode');
    colorCo.innerHTML = colorCode

    document.body.style.backgroundColor =colorCode;

    navigator.clipboard.writeText(colorCode)
}

const btn = document.getElementById('btn');
btn.addEventListener('click',getColor)


getColor();

