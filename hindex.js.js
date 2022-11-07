'use strict'
window.addEventListener('load',()=>{

    function imagesFloats (){

        const productsData = {

            products : {

                product1: {
                    divclass : "img1",
                    imgsrc : "imagen/10.jpg",
                    dataspeed : "-5",
                    imgalt : "Sombreo color turquesa."
                },

                product2: {
                    divclass : "img2",
                    imgsrc : "imagen/12.jpg",
                    dataspeed : "5",
                    imgalt : "Chamarra deportiva marca Nike color rosada."
                },

                product3: {
                    divclass : "img3",
                    imgsrc : "imagen/1.jpg",
                    dataspeed : "2",
                    imgalt : "Sueter cardigan color cafe."
                },

                product4: {
                    divclass : "img4",
                    imgsrc : "./public/assets/img/vestido-flores.webp",
                    dataspeed : "6",
                    imgalt : "Vestido floreado color azul oscuro."
                },

                product5: {
                    divclass : "img6",
                    imgsrc : "./public/assets/img/torera-moztaza.webp",
                    dataspeed : "-4",
                    imgalt : "Torero color mostaza con cortes."
                },

                product6: {
                    divclass : "img7",
                    imgsrc : "./public/assets/img/tacos-rosas.webp",
                    dataspeed : "-9",
                    imgalt : "Tacos de punta color rosa."
                },

                product7: {
                    divclass : "img8",
                    imgsrc : "./public/assets/img/vestido-rojo.webp",
                    dataspeed : "-7",
                    imgalt : "Vestido color rojo con cinturon negro."
                },

                product8: {
                    divclass : "img9",
                    imgsrc : "./public/assets/img/tennis-rosas.webp",
                    dataspeed : "-12",
                    imgalt : "Tenis deportivos rosados marca puma."
                },

                product9: {
                    divclass : "img10",
                    imgsrc : "./public/assets/img/chompa-guinda.webp",
                    dataspeed : "12",
                    imgalt : "Chompa color guindo cardigna de lana."
                }
            }
        }

        const productos_etiqueta = document.getElementById("productos");
        const div = document.createElement('div');

        for(const key in productsData.products) {
            div.innerHTML += `
            <div class="${productsData.products[key].divclass}">
                <img src="${productsData.products[key].imgsrc}" data-speed="${productsData.products[key].dataspeed}" class="layer" alt="${productsData.products[key].imgalt}">
            </div>`;
        }
        productos_etiqueta.appendChild(div);
    }

    imagesFloats();

});
'use strict'
window.addEventListener('load', () =>{
    //Animacion parallax de la imagenes de las ropas 
    document.addEventListener("mousemove", Parallax);

    function Parallax(Evento){
        this.querySelectorAll('.layer').forEach(layer=>{
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - Evento.pageX*speed)/85;
            const y = (window.innerHeight - Evento.pageY*speed)/85;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    //Modulo utilizando jquery para el funcionamiento del toggle
    $(document).ready(()=>{
        $('.toggle').click(()=>{
            $('ul').toggleClass('active');
        });

        $('.logo').click(()=>{
            $('ul').toggleClass('active');
        });
    });
    
});