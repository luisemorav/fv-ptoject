const selectorIMG = document.querySelector("#selectorIMG");

let textos = [
  "Visitando el mercado de Paucarpata, compartiendo nuestras ideas con nuestro pueblo.",
  "Asociación de Comerciantes de la Chacra a la Olla, compartiendo con nuestro pueblo las propuestas para seguir mejorarando",
  "La importancia de conocer el dia a dia de nuestros comerciantes",
  "Observando y escuchando las carencias de los comerciantes para la creación del mercado mayorista",
  "Nuestra gestión trabajará de la mano con la población.",
  "En nuestro gobierno no olvidaremos a nuestros adultos mayores.",
  "Vecino paucarpata con tu voto y nuestra experiencia haremos un distrito mejor!.",
  "Tu opinión importa",
  "Porque tu bienestar es importante, haremos de Paucarpata un lugar limpio y saludable ",
  "De la mano con nuestros vecinos, mejoraremos nuestro Distrito.",
  "El deporte es salud, total apoyo al deporte.",
  "Te escucho Paucarpata.",
  "Los niños son prioridad en nuestra Gestión, son el futuro de nuestro distrito.",
];

function loadImg(img) {
  document.querySelector("#vistaImg").src = `./images/galeria/gal_${img + 1}.jpg`;
  document.querySelector("#txtResena").innerHTML = textos[img];
}

function loadSelector() {
  let i=0;
  textos.forEach(texto => {
    selectorIMG.innerHTML += `
    <img onclick="loadImg(${i})" src="./images/galeria/gal_${i+1}.jpg" alt="">
    `
    i++
  });
}

loadSelector();