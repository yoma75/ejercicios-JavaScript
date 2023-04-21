// function multiplicar() {
//     var num1 = document.getElementById("numero1").value;
//     var num2 = document.getElementById("numero2").value;
//     var resultado = num1 * num2;
//     document.getElementById("subtotal").innerHTML = resultado;
//   }
  
//   function ivaa() {
//     var num1 = document.getElementById("numero1").value;
//     var num2 = document.getElementById("numero2").value;
//     var subtotal = num1 * num2;
//     var iva = subtotal * 0.19;
//     document.getElementById("iva").innerHTML = iva;
//   }
  
//   function totalPagar() {
//     var num1 = document.getElementById("numero1").value;
//     var num2 = document.getElementById("numero2").value;
//     var subtotal = num1 * num2;
//     var iva = subtotal * 0.19;
//     var total = subtotal + iva;
//     document.getElementById("total").innerHTML = total;
//   }
  

function calcular() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var subtotal = num1 * num2;
  var iva = subtotal * 0.19;
  var total = subtotal + iva;

  document.getElementById("subtotal").innerHTML = subtotal;
  document.getElementById("iva").innerHTML = iva;
  document.getElementById("total").innerHTML = total;
}
