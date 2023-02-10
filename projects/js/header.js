/************ Menu ************/
const toggleBtn = document.querySelector("#toggle_btn");
const menuGnb = document.querySelector("body");
const menuBtn = document.querySelectorAll(".menu_gnb a");

/* toggle button */
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuGnb.classList.toggle("active");
});
menuBtn.forEach((elem) =>
  elem.addEventListener("click", () => {
    menuGnb.classList.remove("active");
  })
);

/* moseover */
menuBtn.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#000";

    const target = e.currentTarget;
    const itemNext = target.nextElementSibling;
    const itemPrev = target.previousElementSibling;

    itemNext.style.color = "#ddd";
    itemPrev.style.color = "#ddd";
  });
  item.addEventListener("mouseout", () => {
    // item.style.color = "#000";
  });
});
