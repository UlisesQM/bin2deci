// cadenas de 8 digitos binarios
// no utilizar matrices para contener los digitos binarios introducidos
// solo una funcion
// const binary = prompt("Ingrese numeros binarios")
const $button = document.querySelector(".button");
const $input = document.querySelector(".input");
const $resultado = document.querySelector(".resultado");

$input.addEventListener("keyup", (e) => {
  function Restriccion() {
    if (value === 1 || value === 0) {
      console.log("Binario");
    } else if (e.key == "Enter" && value2.length == 8) {
    } else if (value > 1 || value < 0 || e.key != "Enter") {
      e.target.value = value2.substring(0, value2.length - 1);
    } else {
      console.error("No es numero");
    }
  }
  function calculo() {
    let reverse = "";
    for (let i = value2.length - 1; i >= 0; i--) {
      reverse += value2[i];
    }
    let suma = 0;
    for (let i = value2.length - 1; i >= 0; i--) {
      let operador = 0;
      let indice = Number(reverse[i]);
      if (indice == true) {
        operador = 2 ** i;
        suma = suma + operador;
      }
    }
    return suma;
  }
  //Variables
  let value2 = e.target.value;
  const value = Number(e.key);

  Restriccion();

  //RESULTADO
  $button.addEventListener("click", (e) => {
    if (value2.length == 8) {
      //CALCULO
      $resultado.innerHTML = calculo();
    }
  });
});
