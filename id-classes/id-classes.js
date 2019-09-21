// Here we can declare variable just to change it by JS code
var el1 = document.getElementById("javas");
// Now we can declare function which will be doing smth with our HTML element
el1.onclick = function() {
    el1.innerText = "You are using script from .js file at present to change the element"
    el1.style.fontSize = "60px";
    el1.style.backgroundColor = "violet";
    el1.style.textTransform = "uppercase";
}