let selecTabla = document.getElementById("tablas");

const numTabla = document.getElementById("numTabla");
const numDe = document.getElementById("de");
const numA = document.getElementById("a");

let result = document.getElementById("result");

/* - Comentario Mostramos los datos - */
const redeResult = (resulTxt) => {
  result.innerHTML = resulTxt;
};

/* - Comentario realizamos la operacion - */
const creaTabla = (numDe, numA, numTabla, operacion) => {
  let layout = ``;
  switch (operacion) {
    case "suma":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${numTabla} + ${i} = ${numTabla + i}</li>`;
      }
      break;

    case "resta":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${numTabla} - ${i} = ${numTabla - i}</li>`;
      }
      break;
    case "mul":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${i} x ${numTabla} = ${i * numTabla}</li>`;
      }
      break;
    case "div":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${i} / ${numTabla} = ${i / numTabla}</li>`;
      }
      break;
  }

  redeResult(layout);
};

/* - Comentario escuchamos el cambio en el select - */
selecTabla.addEventListener("change", () => {
  if (selecTabla.value != 0) {
    numDe.disabled = false;
    numA.disabled = false;

    creaTabla(
      parseInt(numDe.value),
      parseInt(numA.value),
      parseInt(numTabla.value),
      selecTabla.value
    );
  } else {
    numTabla.value = 1;
    numDe.value = 0;
    numA.value = 10;
    numDe.disabled = true;
    numA.disabled = true;
    result.innerHTML = "";
  }
});

/* - Comentario validamos - */
const Expresiones = {
  rango: /^[0-9]{1,4}$/,
};

/* - Comentario validamos el numero del rango - */
const validacion = (condicion) => {
  let datos = false;
  if (Expresiones.rango.test(condicion)) {
    datos = true;
  }
  return datos;
};

/**
 *
 * Comentario eventos
 *
 **/
numTabla.addEventListener("change", () => {
  if (validacion(parseInt(numTabla.value)) == true && numTabla.value > 0) {
    numDe.disabled = false;
    numA.disabled = false;

    creaTabla(
      parseInt(numDe.value),
      parseInt(numA.value),
      parseInt(numTabla.value),
      selecTabla.value
    );
  } else {
    numDe.disabled = true;
    numA.disabled = true;
    result.innerHTML = "";
  }
});
numDe.addEventListener("change", () => {
  if (validacion(parseInt(numDe.value)) === true) {
    numDe.disabled = false;
    numA.disabled = false;

    creaTabla(
      parseInt(numDe.value),
      parseInt(numA.value),
      parseInt(numTabla.value),
      selecTabla.value
    );
  } else {
    result.innerHTML = "";
  }
});
numA.addEventListener("change", () => {
  if (validacion(parseInt(numA.value)) === true) {
    numDe.disabled = false;
    numA.disabled = false;

    creaTabla(
      parseInt(numDe.value),
      parseInt(numA.value),
      parseInt(numTabla.value),
      selecTabla.value
    );
  } else {
    result.innerHTML = "";
  }
});
