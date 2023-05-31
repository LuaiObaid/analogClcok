const hours = document.querySelector("[data-hour-hand]");
const minuates = document.querySelector("[data-minute-hand]");
const seconds = document.querySelector("[data-second-hand]");
// to call the function every sec
setInterval(setClock, 1000);

function setClock(){
    const currentDate = new Date();
    const sec = currentDate.getSeconds()/60;
    console.log(sec)
    const min = (sec + currentDate.getMinutes())/60;
    const hour = (min + currentDate.getHours())/12
    rotateElement(seconds, sec );
    rotateElement(minuates, min);
    rotateElement(hours, hour);
}

function rotateElement (element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()