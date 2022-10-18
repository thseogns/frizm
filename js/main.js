const btnArrow = document.querySelectorAll(".btn button");

const s_btnArrow = document.querySelectorAll("#s_btn");

for (let i = 0; i < btnArrow.length; i++) {
  btnArrow[i].addEventListener("click", function () {
    if (i == 0) {
      console.log(0);
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
