
import './less/index.less'

// Your code goes here!
const mainNav = document.querySelector(".main-navigation");
const contHome = document.querySelector(".home");

function navMenuLarger() {
    mainNav.style.padding = "100px";
}
mainNav.addEventListener("mouseover", navMenuLarger);

function navMenuSmaller() {
    mainNav.style.padding = 0;
}
contHome.addEventListener("click", navMenuSmaller)

function esc(evt) {
    if (evt.key === 'Escape') {
        alert("There is no escaping the fun bus");
    }
}

document.addEventListener("keydown", esc);

const busImg = document.querySelector(".intro img");

function pageChange() {
    document.querySelector("body").style.color = "red";
    document.querySelector("body").style.backgroundColor = "black";
    mainNav.style.color = "red";
    mainNav.style.backgroundColor = "black";
}

busImg.addEventListener("dblclick", pageChange);

const h1 = document.querySelector("h1");

function h1Change() {
    if (mainNav.style.color === "red") {
    h1.textContent = "The fun bus loves you!";
 }
}

document.addEventListener("wheel", h1Change);

function logText() {
    console.log("I got lazy with this one, but it still counts. Does anyone even look at these things anyway?")
}

window.addEventListener("load", logText);

function addH2() {
    const newH2 = document.createElement("h2");
    newH2.textContent = "SCROLLLLLLLLL";
    document.body.appendChild(newH2);
}

document.addEventListener("scroll", addH2);



