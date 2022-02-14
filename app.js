const main = document.querySelector(".main");
let height = main.getBoundingClientRect().height;
const style = window.getComputedStyle(main);
const row = style.getPropertyValue("grid-template-rows").substring(0, 2);

for (var i = 0; i < Math.ceil(height / +row); i++) {
  const div = document.createElement("div");
  div.classList.add("line");
  div.textContent = `line-${i}`;
  if (i === Math.floor(Math.ceil(height / +row) / 2)) {
    div.style.backgroundColor = "white";
    div.innerHTML = `<a class="link" href="discord.html">GO TO DISCORD</a>`;
    main.appendChild(div);
    let link = document.querySelector(".link");
    link.addEventListener("mouseover", function () {
      link.closest(".line").style.backgroundColor = "rgb(211, 113, 113)";
    });
    link.addEventListener("mouseleave", function () {
      link.closest(".line").style.backgroundColor = "white";
    });

    console.log(link);
  } else {
    main.appendChild(div);
  }
}
window.addEventListener("resize", function () {
  main.innerHTML = "";
  height = main.getBoundingClientRect().height;
  for (let i = 0; i < Math.ceil(height / +row); i++) {
    const div = document.createElement("div");
    const link = document.createElement("a");
    div.classList.add("line");
    div.textContent = `line-${i}`;
    // div.style.backgroundColor = newColor();

    if (i === Math.floor(Math.ceil(height / +row) / 2)) {
      div.style.backgroundColor = "white";
      div.innerHTML = `<a class="link" href="discord.html">GO TO DISCORD</a>`;
      main.appendChild(div);
      let link = document.querySelector(".link");
      link.addEventListener("mouseover", function () {
        link.closest(".line").style.backgroundColor = "rgb(211, 113, 113)";
      });
      link.addEventListener("mouseleave", function () {
        link.closest(".line").style.backgroundColor = "white";
      });
    } else {
      console.log(i);
      main.appendChild(div);
    }
  }
});

const newColor = () => {
  let randomColorRed = Math.floor(Math.random() * 255);
  let randomColorGreen = Math.floor(Math.random() * 255);
  let randomColorBlue = Math.floor(Math.random() * 255);
  return `rgb(${randomColorBlue}, ${randomColorGreen}, ${randomColorRed})`;
};

console.log(newColor());
