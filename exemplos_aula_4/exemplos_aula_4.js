//function nomeDaFuncao(parametro1,par2,par3){
//    
//   //CODIGO DA FUNCAO
//    
//}

//Declaracao da funcao
function olaMundo(){
    alert("Olá Mundo!");
}

//Executar a funcao
olaMundo();

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

//var x = toCelsius(77);
//var resultado = "A temperatura é: " + x + " °C";
var resultado = "A temperatura é: ";    
resultado+=toCelsius(77)+" °C";
console.log(resultado);

console.log("Função: "+toCelsius);
console.log("Função: "+toCelsius(100)); 


function toKmh(ms) {
  var kmh = ms*3.6;
  return kmh;
}

var kmh = 2;
var ms = 1;
console.log("Vel: "+kmh);
console.log("Vel: "+ms);
console.log("Vel: "+toKmh(ms).toFixed(2));

