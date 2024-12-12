const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'

    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;

startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
        console.log("started")
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}



stopChangingColor = function(){
    clearInterval(intervalId)
    console.log("stop")
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
