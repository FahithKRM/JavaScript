var bmiValue = document.querySelector("#bmiValue")

function CalculateButton() {
    var weight = document.querySelector("#weight").value
    var height = document.querySelector("#height").value
    var bmi = weight / (height * height)
    bmiValue.innerHTML = bmi.toString()

    //check the bmi level
    if (bmi < 18.5){bmiValue.style.backgroundColor = 'green'}
    else if (bmi >= 18.5 && bmi < 25){bmiValue.style.backgroundColor = 'yellow'}
    else if (bmi >= 25 && bmi < 30){bmiValue.style.backgroundColor = 'orange'}
    else {bmiValue.style.backgroundColor = 'red'}

}

function ResetButton() {
    document.querySelector("#weight").value = ""
    document.querySelector("#height").value = ""
    bmiValue.innerHTML = "00"
    bmiValue.style.backgroundColor = 'gray'
}