const slider = document.querySelector("#slider");

function SliderDraw(a) {
  for (let i=1; i <= a; i++){
    slider.innerHTML += `
    <div class="slider__section img_container">
      <img
        src="./images/slider/Sample_Slider_${i}.jpg"
        alt=""
        srcset=""
        class="slider__img"
      />
    </div>
    `
  }
}

SliderDraw(4);

let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function () {
  Next();
});

btnLeft.addEventListener("click", function () {
  Prev();
});

setInterval(function () {
  Next();
}, 4000);

function CloseModal() {
  document.querySelector(".modal").style.display = "none";
}

document.querySelector("#closeModal").addEventListener("click", CloseModal);

