/** @format */

window.resizeTo;

const btnArrow = document.querySelectorAll(".btn button");
const slick = document.querySelector(".slick-track");

const s_btnArrow = document.querySelectorAll("#s_btn");
const b_btn = document.querySelector(".berger_wrap");
const b = document.querySelector(".berger");
const bar = document.querySelector(".gnb");
const c_h = document.querySelector(".c_header");
const h_wrap = document.querySelector(".header_wrap");
const b_hide = document.querySelector(".hide ");

for (let i = 0; i < btnArrow.length; i++) {
  btnArrow[i].addEventListener("click", function () {
    if (i == 0) {
      console.log(0);
      slick.classList.add();
    } else {
      console.log(1);
    }
  });
}
for (let i = 0; i < s_btnArrow.length; i++) {
  s_btnArrow[i].addEventListener("click", function () {
    if (i == 0) {
      console.log(0);
    } else {
      console.log(1);
    }
  });
}
b_btn.addEventListener("click", function (e) {
  console.log("ww");
  b_btn.classList.add("hide");
  bar.classList.add("viwe");
  c_h.classList.add("over");
  h_wrap.classList.add("ber_menu");
  bar.classList.remove("float_r");
  bar.classList.remove("overflow");
});
ddd.addEventListener("click", function () {
  b_btn.classList.remove("hide");
  bar.classList.remove("viwe");
  c_h.classList.remove("over");
  h_wrap.classList.remove("ber_menu");
  bar.classList.add("float_r");
  bar.classList.add("overflow");
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 1440) {
    console.log("ww");
    b_btn.classList.remove("hide");
    bar.classList.remove("viwe");
    c_h.classList.remove("over");
    h_wrap.classList.remove("ber_menu");
    bar.classList.add("float_r");
    bar.classList.add("overflow");
  }
});

$(".img_line").slick();
$(".gnb_new").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200, // 화면의 넓이가 600px 이상일 때
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 780, // 화면의 넓이가 600px 이상일 때
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 360, // 화면의 넓이가 320px 이상일 때
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#t_button").click(function () {
  if (window.innerWidth > 992) {
    $("#t_t").slideToggle();
  }
});
$("#b_button").click(function () {
  if (window.innerWidth > 992) {
    $("#b_b").slideToggle();
  }
});
