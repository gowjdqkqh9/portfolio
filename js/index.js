/************ header_container ************/
const header = document.querySelector(".gnb");
const upBtn = document.querySelector(".upBtn");

addEventListener("scroll", () => {
  const scrollValue = document.documentElement.scrollTop;
  // console.log({ scrollValue });

  if (scrollValue >= 100) {
    header.style.height = "60px";
    upBtn.style.opacity = "1";
    upBtn.classList.add("top_btn");
  } else {
    header.style.height = "100px";
    upBtn.style.opacity = "0";
    upBtn.classList.remove("top_btn");
  }
});

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

/************ main ************/
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const letters = ["변화의 시작이 될", "개발자", "입니다"]; // 글자 입력
const speed = 130; // 글자 입력 속도

/* 타이핑 효과 */
let i = 0;
const typing = async () => {
  const letter1 = letters[i].split("");
  const letter2 = letters[i + 1].split("");
  const letter3 = letters[i + 2].split("");

  // text1
  while (letter1.length) {
    await wait(speed);
    text1.innerHTML += letter1.shift();
    text1.classList.add("text");
  }
  await wait(600);
  text1.classList.remove("text");
  // text2
  while (letter2.length) {
    await wait(speed);
    text2.innerHTML += letter2.shift("");
    text2.classList.add("text");
  }
  await wait(600);
  text2.classList.remove("text");
  // text3
  while (letter3.length) {
    await wait(speed);
    text3.innerHTML += letter3.shift("");
    text3.classList.add("text");
  }
  await wait(2000);
  remove(); // 지우기
};

/* 글자 지우는 효과 */
const remove = async () => {
  const letter1 = letters[i].split("");
  const letter2 = letters[i + 1].split("");
  const letter3 = letters[i + 2].split("");

  while (letter3.length) {
    await wait(speed);
    letter3.pop();
    text3.innerHTML = letter3.join("");
  }
  text3.classList.remove("text");
  text2.classList.add("text");
  while (letter2.length) {
    await wait(speed);
    letter2.pop();
    text2.innerHTML = letter2.join("");
  }
  text2.classList.remove("text");
  text1.classList.add("text");
  while (letter1.length) {
    await wait(speed);
    letter1.pop();
    text1.innerHTML = letter1.join("");
  }
  text1.classList.add("text");
  await wait(1500);
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  // i = !letters[i + 1] ? 0 : i + 1;
  typing();
};
// 딜레이 기능
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
setTimeout(typing, 900); // 초기 실행

/************ About Me ************/
/* scroll event */
const about = document.querySelector("#about");
const aboutMe = document.querySelector(".aboutMe");
const aboutHt = about.offsetTop - 300;
const keywords = document.querySelector(".keywords");
const keywordsUl = document.querySelector(".keywords_ul");
// console.log({ aboutHt });

addEventListener("scroll", () => {
  const scrollValue = document.documentElement.scrollTop;

  if (scrollValue >= 800) {
    keywordsUl.classList.add("keywords_wrap");
    keywords.style.opacity = "1";
  } else {
    keywordsUl.classList.remove("keywords_wrap");
    keywords.style.opacity = "0";
  }
});

/************ Skills ************/
const openBtn = document.querySelectorAll(".open_btn");

openBtn.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.currentTarget;
    // console.log(target.nextElementSibling);

    target.classList.toggle("on");

    target.nextElementSibling.classList.toggle("on");
    // target.previousElementSibling.classList.remove("on");
  })
);
