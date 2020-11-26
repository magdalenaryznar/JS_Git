const gall = document.querySelectorAll("img");
console.log(gall);
const nxt = document.querySelector('#next')
nxt.addEventListener("click", () => {
    for (img in gall) {
        if (gall[img].classList == 'visible') {
            gall[img].classList.remove("visible")
            const nextt = gall[img].nextElementSibling
            console.log(nextt);
            nextt.classList.add('visible')

        }
    }

})