let parentText = document.getElementById("perentText")
let targetText = document.getElementById("targetText")
let childText = document.getElementById("childText")

function copyParent() {
    targetText.innerText = parentText.innerText + targetText.innerText + childText.innerText + childText.innerText;

}

function copyChild() {
    targetText.innerText = childText.innerText + targetText.innerText
}