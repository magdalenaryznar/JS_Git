let gallery = document.querySelector('.galleryJS')

const img1 = new Image();
img1.addEventListener('load', () => {
    gallery.appendChild(img1);
    const img2 = new Image();
    img2.addEventListener('load', () => {
        gallery.appendChild(img2);
        const img3 = new Image();
        img3.addEventListener('load', () => {
            gallery.appendChild(img3);
            const img4 = new Image();
            img4.addEventListener('load', () => {
                gallery.appendChild(img4);
                const img5 = new Image();
                img5.addEventListener('load', () => {
                    gallery.appendChild(img5)
                })
            })
        })
    })
})