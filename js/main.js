// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//NOTICE >> SWIPER

const swiperNotice = new Swiper(".notice .notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

//PROMOTION >> SWIPER
//SWIPER PROMOTION

const swiperPromotion = new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    //루프와 오토플레이를 시켰으니 왔다갔다 기능은 false로 ㄱㄱ
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//생성자로 페이지네이션 알려주기

//SWIPER PROMOTION AUTO PLAY CONTROL
function controlAutoplay() {
  if (swiperPromotion.autoplay.running) {
    swiperPromotion.autoplay.stop();
  } else {
    swiperPromotion.autoplay.start();
  }
}

//TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }

  if (promotionToggleBtn.style.transform === "rotate(180deg)") {
    promotionToggleBtn.style.transform = "rotate(0deg)";
  } else {
    promotionToggleBtn.style.transform = "rotate(180deg)";
  }
});

//SCROLL ANIMATION
let scrollYpos;
window.addEventListener("scroll", function () {
  scrollYpos = window.scrollY;
  console.log(scrollYpos);
  if (scrollYpos > 300) {
    const peruAnimate = document.querySelector(".peru");
    peruAnimate.classList.add("animate");
    console.log(peruAnimate);
    console.log("페루성공");
  }
  if (scrollYpos > 1200) {
    const indoAnimate = document.querySelector(".indonesia");
    indoAnimate.classList.add("animate");
    console.log("인도성공");
  }

  if (scrollYpos > 1700) {
    const favAnimate = document.querySelector(".favorite");
    favAnimate.classList.add("animate");
    console.log("fav 성공");
  }

  if (scrollYpos > 2500) {
    const magazineAnimate = this.document.querySelector(".magazine");
    magazineAnimate.classList.add("animate");
    console.log("magazine 성공");
  }

  if (scrollYpos > 2800) {
    const storeAnimate = document.querySelector(".store");
    storeAnimate.classList.add("animate");
    console.log("store 성공");
  }
});

window.onload = () => {
  const visualInner = document.querySelector(".visual .inner");
  visualInner.classList.add("animate");
  console.log("onload 성공");
};
