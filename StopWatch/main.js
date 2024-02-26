var seconds = 0
var interval = null

var time = document.querySelector("#time")

function SetTime(){
    const minutes = Math.floor(seconds/60)
    const sec = seconds%60
    time.innerHTML = `${String(minutes).padStart(2,"0")} : ${String(sec).padStart(2,"0")}`
}

function Timer(){
    seconds++ // increasing the seconds
    SetTime() // set the time in every seconds
}

function ResetTime(){
    StopTime() // stop the time
    seconds = 0 // reset the second value as 0
    SetTime() // set the current value after second = 0

}
function StratTime(){
    if(interval) StopTime() // mutliple time press the start button update the setInterval() reduce
    interval = setInterval(Timer, 1000) // update the time in every second
}
function StopTime(){
    clearInterval(interval) // stop the the time
}