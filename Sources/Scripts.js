let containerStyles = document.getElementById("containerStyles");
const categorias = document.querySelectorAll(".imagenes-categorias");
const imagen = document.getElementById("imagen");
const btnEstilos = document.querySelectorAll(".btn-style");
const btnCategorias = document.querySelectorAll(".btn-categorias");
const boxImgCategorias = document.querySelectorAll(".box-img-categorias");
let imagenOldId = "montanas1";
let btnOldId = "montanas-btn";
let categoriaBoxOldId = "montanas";
let btnStyleClass, style, stylizedImg;

btnEstilos.forEach((h) => {
  h.addEventListener("click", agregarEstilosaImagen);
});

categorias.forEach((o) => {
  o.addEventListener("click", mostrarImagenSeleccionada);
});

btnCategorias.forEach((u, z) => {
  u.addEventListener("click", () => {
    ocultaryMostrarCategoria(boxImgCategorias, z);
    cambiarColorBtnCategoria(u);
  });
});

cambiarColorBtnCategoria = (d) => {
  const btnNewId = d.id;
  const btnNew = document.getElementById(btnNewId).classList;
  const btnOld = document.getElementById(btnOldId).classList;
  if (btnOldId !== btnNewId) {
    btnOld.remove("btn-active");
    btnNew.add("btn-active");
    btnOldId = btnNewId;
  }
};

function ocultaryMostrarCategoria(i, n) {
  const categoriaBoxNewId = i[n].id;
  const categoriaBoxNew = document.getElementById(categoriaBoxNewId).classList;
  const categoriaBoxOld = document.getElementById(categoriaBoxOldId).classList;

  if (categoriaBoxOldId !== categoriaBoxNewId) {
    categoriaBoxOld.replace("fadeIn", "hidden");
    categoriaBoxNew.replace("hidden", "fadeIn");
    categoriaBoxOldId = categoriaBoxNewId;
  }
}

function agregarEstilosaImagen(c) {
  styleId = c.srcElement.id;
  btnStyleClass = c.srcElement.classList;
  btnStyleClass.toggle("style-active");
  containerStyles.classList.toggle(styleId);
  stylizedImg = true;
}

function mostrarImagenSeleccionada(b) {
  const imgSelectedId = b.srcElement.id;
  const imageSelectedNew = document.getElementById(imgSelectedId).classList;
  const imageSelectedOld = document.getElementById(imagenOldId).classList;
  if (imgSelectedId !== imagenOldId) {
    imageSelectedNew.add("img-selected");
    imageSelectedOld.remove("img-selected");
  }
  imagen.classList.replace(imagenOldId, imgSelectedId);
  imagenOldId = imgSelectedId;
  if (stylizedImg) {
    containerStyles.classList.remove(styleId);
    btnStyleClass.remove("style-active");
  }
}
