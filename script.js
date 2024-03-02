const okBtns = document.querySelectorAll(".okBtn");
const silBtns = document.querySelectorAll(".silBtn");
const box = document.querySelectorAll(".box");
const cevap = document.querySelectorAll(".cevap");

okBtns.forEach(function (okbtn, index) {
  okbtn.addEventListener("click", () => {
    okbtn.style.display = "none";
    silBtns[index].style.display = "block";
    cevap[index].classList.remove("hide");
  });
});

silBtns.forEach(function (Delbtn, index) {
  Delbtn.addEventListener("click", () => {
    Delbtn.style.display = "none";
    okBtns[index].style.display = "block";
    cevap[index].classList.add("hide");
  });
});
