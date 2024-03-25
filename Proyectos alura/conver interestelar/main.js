var nombreUsuario = "Fredy";
var valorEnAnosLuz = 400;
var anosLuzEnKm = 9460800000000;
var anosLuzEnMetros = 9460800000000000;
var valorEnMetros = (valorEnAnosLuz * anosLuzEnMetros).toFixed(2);
var valorEnKm = (valorEnAnosLuz * anosLuzEnKm).toFixed(2);
// valorEnReal = valorEnReal.toFixed(2);
alert('Hola ' + nombreUsuario + '! ' + valorEnAnosLuz + ' años-luz corresponden a ' + valorEnMetros + ' metros, que corresponden a ' + valorEnKm + ' Km');