let textos = [
  "texto1",
  "texto2",
  "texto3",
  "texto4",
  "texto5",
  "texto6",
  "texto7",
  "texto8",
  "texto9",
];

let imagenes = [
  "./images/galeria/gal_1.jpg",
  "./images/galeria/gal_2.jpg",
  "./images/galeria/gal_3.jpg",
  "./images/galeria/gal_4.jpg",
  "./images/galeria/gal_5.jpg",
  "./images/galeria/gal_6.jpg",
  "./images/galeria/gal_7.jpg",
  "./images/galeria/gal_8.jpg",
  "./images/galeria/gal_9.jpg",
];

function loadImg(img) {
  document.querySelector("#vistaImg").src = imagenes[img];
  document.querySelector("#txtResena").innerHTML = textos[img];
}
