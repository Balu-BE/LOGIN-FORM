let outputscreen = document.getElementsByClassName("op")

function display(num) {
    outputscreen.value += num ;
}

function calculate() {
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(e) {
        alert('Invalid')
    }
}

function clear() {
    outputscreen.value = "";

}

function Del() {
    outputscreen.value = outputscreen.value.slice(0,-1);
}