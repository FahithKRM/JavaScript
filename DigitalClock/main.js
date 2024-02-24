var ampm = document.querySelector("#ampm")

function displayTime(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    if(hours>12){
        hours -= 12
        ampm.innerHTML = "PM"
    }

    function addZero(num){
        if(num<10){return "0"+num}
        else{return num}
    }

    document.querySelector("#hours").innerHTML = addZero(hours)
    document.querySelector("#minutes").innerHTML = addZero(minutes)
    document.querySelector("#seconds").innerHTML = addZero(seconds)
}

setInterval(displayTime,100)
