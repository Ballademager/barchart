// window.addEventListener("load", start);
const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

setInterval(() => {
  const li = document.createElement("li");
  if (list.childElementCount < 20) {
    li.style.setProperty("--height", getRandom());
    list.appendChild(li);
    console.log(list.childElementCount);
  } else {
    list.removeChild(list.firstElementChild);
    // list.removeChild(list.firstChild);
    li.style.setProperty("--height", getRandom());
    list.appendChild(li);
    console.log(list.childElementCount);
  }
  //   console.log(list);
}, 1000);

function getRandom() {
  const num = Math.ceil(Math.random() * 100);
  //   console.log(num);
  return num;
}
// console.log(getRandom());
