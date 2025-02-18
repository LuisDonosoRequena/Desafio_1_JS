const precioBase = 400000; /* Se asignan el precio base  i delara variables*/
let cantidad = 0;
let precioTotal = 0;

/* Selecciono los botones : Mas y Menos */
let botonMas = document.querySelector(".btn_Mas");
let botonMenos = document.querySelector(".btn_Menos");

/* Se asigna el valor del precio base en el HTML  */
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precioBase;

let total = document.querySelector(".valor-total");

let cantProduct = document.querySelector(".cantidad");
cantProduct.innerHTML = cantidad;

botonMas.addEventListener("click", press_btn_Mas);
botonMenos.addEventListener("click", press_btn_Menos);

// *********** Funciones de los botones Mas y Menos *******************
function press_btn_Mas() {
  console.log(cantidad);
  cantidad = parseInt(cantProduct.value) || 0;
  cantidad++; /* incremento en 1 */
  cantProduct.value = cantidad;
  cantProduct.innerHTML = cantidad;
  precioTotal = cantidad * precioBase;
  total.innerHTML = precioTotal; //Se asigna el precio total en el HTML
}
function press_btn_Menos() {
  cantidad = parseInt(cantProduct.value) || 0;
  cantidad--; /* disminuyo en 1 */
  // Condicion para no dejar valores negativos
  if (cantidad < 0) {
    cantidad = 0;
  }
  cantProduct.value = cantidad;
  cantProduct.innerHTML = cantidad;
  precioTotal = cantidad * precioBase;
  total.innerHTML = precioTotal;
}
// ********************************************
