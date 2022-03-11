const form = document.getElementById("form");
const radio = document.getElementById("radio");
const sexoParagraph = document.getElementById("parapgraph");
let sexoGenero = "";
radio.addEventListener("click", (e) => {
  sexoGenero = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!sexoGenero) {
    alert("se espera algun sexo");
    return;
  }
  sexoParagraph.textContent = "";
  if (sexoGenero === "otros")
    sexoParagraph.textContent = `usted eligio ${sexoGenero}`;
  else sexoParagraph.textContent += `sexo elegido ${sexoGenero}`;
});
