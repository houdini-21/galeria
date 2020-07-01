let estilos = document.getElementById("estilos");
const imagenes = document.querySelectorAll(".imagenes-categorias");
const imagen = document.getElementById("imagen");
const btnEstilos = document.querySelectorAll(".btn-style");
const btnCategorias = document.querySelectorAll(".btn-categorias");
let imagenOld;
let btnOld = false;

btnEstilos.forEach(function () {
  for (let i = 0; i < btnEstilos.length; i++) {
    btnEstilos[i].addEventListener("click", agregarEstilos);
  }
});

imagenes.forEach(function () {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", mostrar);
  }
});

btnCategorias.forEach(function () {
  for (let i = 0; i < btnCategorias.length; i++) {
    btnCategorias[i].addEventListener("click", cambiarCategoria);
  }
});

function agregarEstilos(h) {
  const style = h.srcElement.id;
  estilos.classList.toggle(style);
}
function mostrar(o) {
  const image = o.srcElement.id;
  console.log(imagenOld);
  imagen.classList.replace(imagenOld, image);
  imagenOld = image;
  console.log(image);
}

function cambiarCategoria(u) {
  const btn = u.srcElement.classList;
  const categoria = u.srcElement.id;
  console.log(btn);
  btn.add("btn-active");
  if (btnOld != "") {
    btnOld.remove("btn-active");
  }
  btnOld = btn;
}

/**  document.getElementById('btn-playa').addEventListener('click', function(e){
  document.getElementById('playa').style.display = 'block';
})*/
