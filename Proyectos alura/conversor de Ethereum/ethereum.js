var nombreUsuario = "Fredy";
var valorEnEthereum = 3;
var cotizacionEnEthereum = 8109.71;
var valorEnPeso = (valorEnEthereum * cotizacionEnEthereum).toFixed(2);
// valorEnPeso = valorEnPeso.toFixed(2);
alert('Hola ' + nombreUsuario + ', el valor en pesos colombianos es de: $ '+ valorEnPeso);
