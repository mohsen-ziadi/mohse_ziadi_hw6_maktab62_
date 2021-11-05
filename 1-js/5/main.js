document.getElementsByTagName('input')[0].onkeyup = function() {
    document.getElementById('inputValue').innerHTML = this.value;
}