let estilos = document.getElementById("estilos");
const imagenes = document.querySelectorAll(".imagenes-categorias");
const imagen = document.getElementById("imagen");
const btnEstilos = document.querySelectorAll(".btn-style");
const btnCategorias = document.querySelectorAll(".btn-categorias");
const boxImgCategorias = document.querySelectorAll(".box-img-categorias");
let imagenOld = "montanas1";
let style = "";
let btnOldId = "montanas-btn";
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

function cambiarCategoria(i) {
  const btnNewId = i.id;
  const btnNew = document.getElementById(btnNewId).classList;
  const btnOld = document.getElementById(btnOldId).classList;
  if (btnOld !== btnNewId) {
    btnOld.remove("btn-active");
    btnNew.add("btn-active");
    console.log(btnNewId, "remplazara a", btnOld);
    btnOldId = btnNewId;
    console.log(btnOld, "remplazo a", btnNewId);
  }
}

function ocultarCategoria(d, m) {
  const categoriaBox = d[m].classList;
  categoriaBox.remove("hidden");
}

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

/**  document.getElementById('btn-playa').addEventListener('click', function(e){
  document.getElementById('playa').style.display = 'block';
})*/
