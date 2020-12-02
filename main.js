let gallery = document.querySelector('.galleryJS');

const img1 = new Image();
img1.src = 'https://picsum.photos/701/300';
img1.addEventListener('load', () => {
    gallery.appendChild(img1);
    const img2 = new Image();
    img2.src = 'https://picsum.photos/702/300';
    img2.addEventListener('load', () => {
        gallery.appendChild(img2);
        const img3 = new Image();
        img3.src = 'https://picsum.photos/703/300';
        img3.addEventListener('load', () => {
            gallery.appendChild(img3);
            const img4 = new Image();
            img4.src = 'https://picsum.photos/704/300';
            img4.addEventListener('load', () => {
                gallery.appendChild(img4);
                const img5 = new Image();
                img5.src = 'https://picsum.photos/705/300';
                img5.addEventListener('load', () => {
                    gallery.appendChild(img5);
                    const img6 = new Image();
                    img6.src = 'https://picsum.photos/706/300';
                    img6.addEventListener('load', () => {
                        gallery.appendChild(img6);
                        console.log('Wszystkie zdjęcia załadowane');
                    })
                })
            })
        })
    })
})