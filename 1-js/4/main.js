let newh1 = document.createElement("h1");
let newContent = document.createTextNode("My Tasks")
newh1.appendChild(newContent);
document.getElementsByTagName("body")[0].appendChild(newh1);
document.getElementsByTagName("h1")[0].style.color = "red";



let newol = document.createElement("ol");
document.getElementsByTagName("body")[0].appendChild(newol);
newol.setAttribute("type", "i")


let newLi1 = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(newLi1);
let newContent2 = document.createTextNode(" user dashboard");
newLi1.appendChild(newContent2);

let newLi2 = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(newLi2);
let newContent3 = document.createTextNode(" admin dashbord");
newLi2.appendChild(newContent3);

let newLi3 = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(newLi3);
let newContent4 = document.createTextNode(" authentication");
newLi3.appendChild(newContent4);




let newUl = document.createElement("ul");
document.getElementsByTagName("li")[2].appendChild(newUl);
newUl.setAttribute("type", "circle")
    // newUl.style.marginLeft = "40px"

let newLi4 = document.createElement("li");
document.getElementsByTagName("ul")[0].appendChild(newLi4);
let newContent5 = document.createTextNode(" login");
newLi4.appendChild(newContent5);

let newLi5 = document.createElement("li");
document.getElementsByTagName("ul")[0].appendChild(newLi5);
let newContent6 = document.createTextNode(" logsdjkdsjin");
newLi5.appendChild(newContent6);
newLi5.style.textDecoration = "line-through"

let newLi6 = document.createElement("li");
document.getElementsByTagName("ul")[0].appendChild(newLi6);
let newContent7 = document.createTextNode(" login");
newLi6.appendChild(newContent7);


let newLi7 = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(newLi7);
let newContent8 = document.createTextNode(" admin dashbord");
newLi7.appendChild(newContent8);

let newLi8 = document.createElement("li");
document.getElementsByTagName("ol")[0].appendChild(newLi8);
let newContent9 = document.createTextNode(" authentication");
newLi8.appendChild(newContent9);
newLi8.style.textDecoration = "line-through"





let newInput = document.createElement("input");
document.getElementsByTagName("body")[0].appendChild(newInput);
newInput.setAttribute("type", "text");

let newbutton = document.createElement("button");
document.getElementsByTagName("body")[0].appendChild(newbutton);
let newContent10 = document.createTextNode("add task")
newbutton.appendChild(newContent10);