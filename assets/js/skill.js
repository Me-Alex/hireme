/*skill progress bar */
console.log("skill");
let skil = document.querySelectorAll(".container");
let actualProgres = document.querySelectorAll(".skill-actutal-progres");
console.log(skil[0].children);
for (let i = 0; i < skil[0].children.length; i++) {
    console.log(i);
    if (skil[0].children[i].children[0].children[1].innerHTML) {
        let percetage = skil[0].children[i].children[0].children[1].innerHTML;

        console.log(percetage);
        skil[0].children[i].children[1].children[0].style.width = percetage;
        console.log(skil[0].children[i].children[0].children[0]);
    }
}//skill progress bar ends here  |maine sigur o sa uiti ce ai facut aici 
/*am avut dreptate lol  */