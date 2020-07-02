let estilos = document.getElementById("estilos");
const imagenes = document.querySelectorAll(".imagenes-categorias");
const imagen = document.getElementById("imagen");
const btnEstilos = document.querySelectorAll(".btn-style");
const btnCategorias = document.querySelectorAll(".btn-categorias");
const boxImgCategorias = document.querySelectorAll(".box-img-categorias");
let imagenOld = "montanas1";
let style = "";
let btnOld = "";
let styledImage = false;

btnEstilos.forEach(function (h) {
  h.addEventListener("click", agregarEstilosaImagen);
});

imagenes.forEach(function (o) {
  o.addEventListener("click", mostrarImagenSeleccionada);
});

btnCategorias.forEach(function (u, index) {
  u.addEventListener("click", function () {
    ocultarCategoria(boxImgCategorias, index);
    cambiarCategoria(u);
  });
});

function agregarEstilosaImagen(o) {
  style = o.srcElement.id;
  const btnStyle = o.srcElement.classList;

  btnStyle.toggle("style-active");
  estilos.classList.toggle(style);
  styledImage = true;
}

function mostrarImagenSeleccionada(d) {
  const image = d.srcElement.id;
  imagen.classList.replace(imagenOld, image);
  imagenOld = image;
  if (styledImage == true) {
    estilos.classList.remove(style);
  }
}

function cambiarCategoria(i) {
  const btn = i.classList;
  if (btnOld !== "") {
    btnOld.remove("btn-active");
  }
  btn.add("btn-active");
  btnOld = btn;
}

function ocultarCategoria(d, m) {
  const categoriaBox = d[m].classList;
  categoriaBox.remove("hidden");
}

/**  document.getElementById('btn-playa').addEventListener('click', function(e){
  document.getElementById('playa').style.display = 'block';
})*/
