const gall = document.querySelectorAll("img");
console.log(gall);
const nxt = document.querySelector('#next')

nxt.addEventListener("click", next)

function next() {
    for (img in gall) {
        if (gall[img].classList == 'visible') {
            const nextt = gall[img].nextElementSibling
            gall[img].classList.remove("visible")
            console.log(nextt);
            nextt.classList.add('visible')

        }
    }

}