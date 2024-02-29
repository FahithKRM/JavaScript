var input = document.querySelector("input")
var result = document.querySelector("#result")

function Reverse(string){
    return string.split("").reverse().join("")
}

function Checker(){
    var string = (input.value).toLowerCase()
    var reverseString = Reverse(string)

    if(string == reverseString){
        result.innerHTML = "PALINDROME - ✔️" 
        result.style.color = 'green' // text-color as green
    }else{
        result.innerHTML = "PALINDROME - ❌" 
        result.style.color = 'red' // text-color as red 
    }
}

function Reset(){
    input.value = ""
    result.innerHTML = "Result is waiting for 'Enter your input' or click the 'Check Button'"
    result.style.color = 'gray'
}