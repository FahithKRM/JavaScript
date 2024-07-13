var ampm = document.querySelector("#ampm")

function displayTime(){
    let datetime = new Date()
    let DaysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", 
        "Friday", "Saturday"]
    let MonthsName = ["January", "February", "March", "April", "May", "June", 
        "July", "Augest", "September", "October", "November", "December"]

    let hours = datetime.getHours()
    let minutes = datetime.getMinutes()
    let seconds = datetime.getSeconds()
    let dayname = datetime.getDay()
    let month = datetime.getMonth()
    let daynumber = datetime.getDate()
    let year = datetime.getFullYear()

    // slect period time Am / Pm
    if(hours>12){
        hours -= 12
        ampm.innerHTML = "PM"
    }

    //slect the day name
    dayname = DaysName[dayname]

    //slect the month name
    month = MonthsName[month]

    // add zero for single number value like as [2 -> 02]
    function addZero(num){
        if(num<10){return "0"+num}
        else{return num}
    }

    document.querySelector("#hours").innerHTML = addZero(hours)
    document.querySelector("#minutes").innerHTML = addZero(minutes)
    document.querySelector("#seconds").innerHTML = addZero(seconds)
    document.querySelector("#dayname").innerHTML = dayname
    document.querySelector("#month").innerHTML = month
    document.querySelector("#daynum").innerHTML = addZero(daynumber)
    document.querySelector("#year").innerHTML = year

}

setInterval(displayTime,100)
