let textos = [
  "Visitando el mercado de Paucarpata, compartiendo nuestras ideas con nuestro pueblo.",
  "Asociación de Comerciantes de la Chacra a la Olla, compartiendo con nuestro pueblo las propuestas para seguir mejorarando",
  "La importancia de conocer el dia a dia de nuestros comerciantes",
  "Observando y escuchando las carencias de los comerciantes para la creación del mercado mayorista",
  "Nuestra gestión trabajará de la mano con la población.",
  "En nuestro gobierno no olvidaremos a nuestros adultos mayores.",
  "Vecino paucarta con tu voto y nuestra experiencia haremos un distrito mejor!.",
  "Tu opinión importa",
  "Porque tu bienestar es importante haremos de Paucarpata un lugar limpio y saludable ",
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
