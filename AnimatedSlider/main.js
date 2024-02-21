var slider = document.querySelector("span")
var input = document.querySelector("input")

input.oninput = () => {
    let value = input.value;
    slider.textContent = value;
    slider.style.left = value/2 + "%";
    slider.classList.add("show");

}

input.onblur = () => {
    slider.classList.remove("show");
}