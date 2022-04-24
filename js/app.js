let selecTabla = document.getElementById("tablas");

const numTabla = document.getElementById("numTabla");
const numDe = document.getElementById("de");
const numA = document.getElementById("a");

let result = document.getElementById("result");

const redeResult = (resulTxt) => {
  result.innerHTML = resulTxt;
};

const Expresiones = {
  rango: /[0-1000]{1,4}/,
};

const creaTabla = (numDe, numA, numTabla, operacion) => {
  let layout = ``;
  switch (operacion) {
    case "suma":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${numTabla} + ${i} = ${
          parseInt(numTabla) + parseInt(i)
        }</li>`;
      }
      break;

    case "resta":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${numTabla} - ${i} = ${
          parseInt(numTabla) - parseInt(i)
        }</li>`;
      }
      break;
    case "div":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${i} / ${numTabla} = ${i / numTabla}</li>`;
      }
      break;
    case "mul":
      for (let i = numDe; i <= numA; i++) {
        layout += `<li>${i} x ${numTabla} = ${i * numTabla}</li>`;
      }
      break;
  }

  redeResult(layout);
};

selecTabla.addEventListener("change", () => {
  if (selecTabla.value != 0) {
    numDe.disabled = false;
    numA.disabled = false;

    creaTabla(numDe.value, numA.value, numTabla.value, selecTabla.value);
  } else {
    numDe.disabled = true;
    numA.disabled = true;
  }
});

const validacionTabla = (condicion) => {
  if (Expresiones.rango.test(condicion)) {
    creaTabla(numDe.value, numA.value, numTabla.value, selecTabla.value);
    numDe.disabled = false;
    numA.disabled = false;
    result.disabled = false;
  } else {
    numDe.disabled = true;
    numA.disabled = true;
    result.innerHTML = "";
  }
};

const validacionRango = (condicion) => {
  if (Expresiones.rango.test(condicion)) {
    creaTabla(numDe.value, numA.value, numTabla.value, selecTabla.value);
    numDe.disabled = false;
    numA.disabled = false;
    result.disabled = false;
  } else {
    result.innerHTML = "";
  }
};

numDe.addEventListener("change", () => {
  validacionRango(numDe.value);
});
numA.addEventListener("change", () => {
  validacionRango(numA.value);
});
numTabla.addEventListener("change", () => {
  validacionTabla(numTabla.value);
});
