const agenerer = document.getElementById("agenerer");
const btn = document.querySelectorAll("button");
let hmon1 = document.querySelector(".hmon1");

btn[0].addEventListener("click", function () {
  let messag = document.createElement("div");
  let mah1 = document.createElement("h1");
  mah1.innerText = "Success";
  messag.setAttribute("class", "divc");
  messag.style.backgroundColor = "#038f60";
  messag.appendChild(mah1);
  agenerer.appendChild(messag);
  setTimeout(() => {
      messag.remove('divc');
  }, 1000);
});
btn[1].addEventListener("click", function () {
  let messag = document.createElement("div");
  let mah1 = document.createElement("h1");
  mah1.innerText = "Danger";
  messag.setAttribute("class", "divc");
  messag.style.backgroundColor = "#e4240a";
  messag.appendChild(mah1);
  agenerer.appendChild(messag);
  setTimeout(() => {
      messag.remove('divc');
  }, 1000);
});
btn[2].addEventListener("click", function () {
  let messag = document.createElement("div");
  let mah1 = document.createElement("h1");
  mah1.innerText = "Warning";
  messag.setAttribute("class", "divc");
  messag.style.backgroundColor = "rgb(230, 208, 15)";
  messag.appendChild(mah1);
  agenerer.appendChild(messag);
  setTimeout(() => {
      messag.remove('divc');
  }, 1000);
});
btn[3].addEventListener("click", function () {
  let messag = document.createElement("div");
  let mah1 = document.createElement("h1");
  mah1.innerText = "Info";
  messag.setAttribute("class", "divc");
  messag.style.backgroundColor = "rgb(32, 213, 219)";;
  messag.appendChild(mah1);
  agenerer.appendChild(messag);
  setTimeout(() => {
      messag.remove('divc');
  }, 1000);
});

// function over(){
//     document.images[0].src ="noimage/tweter.png"
// }
