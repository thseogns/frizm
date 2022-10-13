const btnArrow = document.querySelectorAll(".btn button");
const btn = document.querySelector(".btn");

for (let i = 0; i < btnArrow.length; i++) {
  btnArrow[i].addEventListener("click", function () {
    if (i == 0) {
      console.log(0);
    } else {
      console.log(1);
    }
  });
}
