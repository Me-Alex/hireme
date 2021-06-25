const dropDown = document.querySelector(".drop-down");
const toDrop = document.querySelector(".to-drop");
console.log("haide aba");

const styling = toDrop.style.display;


dropDown.onclick = () => {
    if (toDrop.style.display == "grid") {
        toDrop.style.display = "none";

    } else {
        toDrop.style.display = "grid";
        toDrop.style.justifyContent = "center";
        toDrop.style.alignItems = "center";

    }

}

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