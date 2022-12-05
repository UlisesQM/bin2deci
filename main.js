// cadenas de 8 digitos binarios
// no utilizar matrices para contener los digitos binarios introducidos
// solo una funcion

console.log("Hola")
// const binary = prompt("Ingrese numeros binarios")
const $button = document.querySelector(".button")
const $input = document.querySelector(".input")
const $resultado = document.querySelector(".resultado")






$input.addEventListener("keyup", e=>{
  let value2 = e.target.value
  const value = Number(e.key)


  //Restriccion 1 y 0
  if((value === 1 || value === 0)){
    console.log("Binario")
  }else if(e.key == "Enter" && value2.length == 8){
    $resultado.innerHTML = "Resultado"
  }
  else if(value > 1 || value < 0 ){
    e.target.value = value2.substring(0, value2.length - 1);
  }else{
    console.error("No es numero")
  }

  //Enter
  if(e.key == "Enter" && value2.length == 8){
    //REVERSION
    let reversion = '';
    for(let i = value2.length-1  ;i >= 0 ; i-- ){
      reversion += value2[i]
      }
    console.log(reversion)

    //CALULO
    let suma = 0
    for (let i = value2.length - 1; i >= 0; i--) {
      let operador=0
      let indice = Number(reversion[i])
      if(indice == true){
        operador = 2**i
        suma = suma + operador
      }
    }
    $resultado.innerHTML = suma
  }
})