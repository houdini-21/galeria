let estilos = document.getElementById("estilos");
const imagenes = document.querySelectorAll(".imagenes-categorias");
const imagen = document.getElementById("imagen");
const btnEstilos = document.querySelectorAll(".btn-style");
const btnCategorias = document.querySelectorAll(".btn-categorias");
const boxImgCategorias = document.querySelectorAll(".box-img-categorias");
let imagenOld = "montanas1";
let btnOldId = "montanas-btn";
let categoriaBoxOldId = "montanas";
let styledImage = false;
let btnStyle, style;

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

function cambiarCategoria(d) {
  const btnNewId = d.id;
  const btnNew = document.getElementById(btnNewId).classList;
  const btnOld = document.getElementById(btnOldId).classList;
  if (btnOld !== btnNewId) {
    btnOld.remove("btn-active");
    btnNew.add("btn-active");
    btnOldId = btnNewId;
  }
}

function ocultarCategoria(i, n) {
  const categoriaBoxNewId = i[n].id;
  const categoriaBoxNew = document.getElementById(categoriaBoxNewId).classList;
  const categoriaBoxOld = document.getElementById(categoriaBoxOldId).classList;

  if (categoriaBoxOld !== categoriaBoxNewId) {
    categoriaBoxOld.add("hidden");
    categoriaBoxNew.remove("hidden");
    categoriaBoxOldId = categoriaBoxNewId;
  }
}

function agregarEstilosaImagen(c) {
  style = c.srcElement.id;
  btnStyle = c.srcElement.classList;
  btnStyle.toggle("style-active");
  estilos.classList.toggle(style);
  styledImage = true;
}

function mostrarImagenSeleccionada(b) {
  const image = b.srcElement.id;
  imagen.classList.replace(imagenOld, image);
  imagenOld = image;
  if (styledImage == true) {
    estilos.classList.remove(style);
    btnStyle.remove("style-active");
  }
}

/**  document.getElementById('btn-playa').addEventListener('click', function(e){
  document.getElementById('playa').style.display = 'block';
  document.getElementById('montana').style.display = 'none';
  document.getElementById('ciudad').style.display = 'none';
  document.getElementById('paisaje').style.display = 'none';
})*/
