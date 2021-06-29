const dropDown = document.querySelectorAll(".drop-down");
const toDrop = document.querySelectorAll(".to-drop");
console.log("haide aba");


console.log(dropDown);
// hides the dropdown menue
dropDown[0].onclick = () => {
    toDrop[0].classList.toggle("show");
}
dropDown[1].onclick = () => {
    toDrop[1].classList.toggle("show");
}
window.onclick = function (e) {
    if (!e.target.matches('.dropper')) {
        var myDropdown = document.getElementById("22");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
//dropdown hide  ends here
console.log(document.body);

//changes websites theme
const dark = document.getElementById("1");
const light = document.getElementById("2");
const solar = document.getElementById("3");
const theme = localStorage.getItem('theme');
if (theme === "light")
    document.body.className = "light";
else if (theme === "dark")
    document.body.className = "dark";
else if (theme === "solar")
    document.body.className = "solar";


light.onclick = () => {
    localStorage.setItem("theme", "light");
    document.body.className = "light";
};
dark.onclick = () => {
    localStorage.setItem("theme", "dark");
    document.body.className = "dark";

};
solar.onclick = () => {
    localStorage.setItem("theme", "solar");
    document.body.className = "solar";


};
//theme changer ends here

const on = document.getElementById('On');
const off = document.getElementById('Off');

on.onclick=()=>{
    
}



let text = document.querySelectorAll(".text");
console.log(text);
let lungime = text[0].children.length;
let array = text[0].children;
console.log(array);
// for (let i of array) {
//     i.style.animationName = "mareste";
//     i.style.animationDuration = "3s";
// }


// console.log(text.style.animationName);